<?php
declare(strict_types=1);

require_once __DIR__ . '/_bootstrap.php';

function payment_env(string $key): string
{
    $value = $_ENV[$key] ?? getenv($key);
    return is_string($value) ? trim($value) : '';
}

function payment_stripe_secret(): string
{
    $key = payment_env('STRIPE_SECRET_KEY');
    if ($key === '') {
        $key = payment_env('PAYMENT_API_KEY');
    }
    return $key;
}

function payment_apply_ca_bundle(array &$curlOptions): void
{
    $caInfo = trim((string) ini_get('curl.cainfo'));
    $openSslCa = trim((string) ini_get('openssl.cafile'));
    if ($caInfo !== '' || $openSslCa !== '') {
        return;
    }

    $caCandidates = array_filter([
        'C:\wamp64\bin\apache\apache2.4.66.1\bin\curl-ca-bundle.crt',
        'C:\wamp64\apps\phpmyadmin5.2.3\vendor\composer\ca-bundle\res\cacert.pem',
    ]);
    $phpBinDir = defined('PHP_BINARY') ? dirname((string) PHP_BINARY) : '';
    if ($phpBinDir !== '') {
        $caCandidates[] = $phpBinDir . DIRECTORY_SEPARATOR . 'extras' . DIRECTORY_SEPARATOR . 'ssl' . DIRECTORY_SEPARATOR . 'cacert.pem';
        $caCandidates[] = $phpBinDir . DIRECTORY_SEPARATOR . 'cacert.pem';
    }
    foreach ($caCandidates as $caCandidate) {
        if (is_string($caCandidate) && $caCandidate !== '' && is_file($caCandidate)) {
            $curlOptions[CURLOPT_CAINFO] = $caCandidate;
            return;
        }
    }
}

function payment_stripe_request(string $method, string $path, string $secretKey): array
{
    $url = 'https://api.stripe.com/v1/' . ltrim($path, '/');
    $ch = curl_init($url);
    if ($ch === false) {
        return ['ok' => false, 'status' => 0, 'error' => 'Impossible d’initialiser cURL pour Stripe.'];
    }

    $curlOptions = [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTPHEADER => ['Authorization: Bearer ' . $secretKey],
    ];
    if (strtoupper($method) === 'GET') {
        $curlOptions[CURLOPT_HTTPGET] = true;
    } else {
        $curlOptions[CURLOPT_CUSTOMREQUEST] = strtoupper($method);
    }
    payment_apply_ca_bundle($curlOptions);
    curl_setopt_array($ch, $curlOptions);

    $response = curl_exec($ch);
    $status = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    curl_close($ch);

    if ($response === false || $curlError !== '') {
        return ['ok' => false, 'status' => 0, 'error' => $curlError];
    }

    $payload = json_decode((string) $response, true);
    if (!is_array($payload)) {
        return ['ok' => false, 'status' => $status, 'error' => 'Réponse Stripe invalide.'];
    }

    if ($status < 200 || $status >= 300) {
        $message = isset($payload['error']['message']) && is_string($payload['error']['message'])
            ? $payload['error']['message']
            : 'Erreur Stripe.';
        return ['ok' => false, 'status' => $status, 'error' => $message, 'payload' => $payload];
    }

    return ['ok' => true, 'status' => $status, 'payload' => $payload];
}

function payment_fetch_order(PDO $pdo, int $orderId): ?array
{
    $stmt = $pdo->prepare(
        'SELECT id, user_id, email, full_name, address, city, postal_code, country, phone, notes, status,
                stripe_session_id, stripe_payment_intent_id, paid_at, total_eur, created_at
         FROM orders WHERE id = :id LIMIT 1'
    );
    $stmt->execute(['id' => $orderId]);
    $order = $stmt->fetch();
    return $order ?: null;
}

function payment_fetch_items(PDO $pdo, int $orderId): array
{
    $stmt = $pdo->prepare(
        'SELECT product_name, quantity, unit_price_eur
         FROM order_items
         WHERE order_id = :order_id
         ORDER BY id ASC'
    );
    $stmt->execute(['order_id' => $orderId]);
    return $stmt->fetchAll() ?: [];
}

function payment_verify_action(): void
{
    $method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
    if ($method !== 'POST') {
        header('Allow: POST');
        api_json(['message' => 'Méthode non autorisée.'], 405);
    }

    api_require_csrf();
    $input = api_input();
    $orderId = filter_var($input['order_id'] ?? null, FILTER_VALIDATE_INT);
    $sessionId = trim((string) ($input['session_id'] ?? ''));

    if ($orderId === false || $orderId < 1 || $sessionId === '') {
        api_json(['message' => 'Informations de paiement manquantes.'], 422);
    }

    $secretKey = payment_stripe_secret();
    if ($secretKey === '') {
        api_json(['message' => 'Configuration de paiement manquante.'], 500);
    }

    $pdo = api_db();
    $order = payment_fetch_order($pdo, (int) $orderId);
    if (!$order) {
        api_json(['message' => 'Commande introuvable.'], 404);
    }

    $storedSessionId = isset($order['stripe_session_id']) ? (string) $order['stripe_session_id'] : '';
    if ($storedSessionId !== '' && !hash_equals($storedSessionId, $sessionId)) {
        api_json(['message' => 'La session de paiement ne correspond pas à cette commande.'], 403);
    }

    $stripe = payment_stripe_request('GET', 'checkout/sessions/' . rawurlencode($sessionId), $secretKey);
    if (!$stripe['ok']) {
        $err = (string) ($stripe['error'] ?? 'Erreur Stripe.');
        error_log('Vérification Stripe échouée : ' . $err);
        if (stripos($err, 'SSL certificate problem') !== false || stripos($err, 'unable to get local issuer certificate') !== false) {
            api_json(['message' => 'Connexion sécurisée à Stripe impossible (certificat SSL/CA manquant sur le serveur PHP).'], 502);
        }
        $status = (int) ($stripe['status'] ?? 0);
        if ($status === 404) {
            api_json(['message' => 'Session de paiement introuvable.'], 404);
        }
        api_json(['message' => 'Impossible de vérifier le paiement pour le moment. Réessayez.'], 502);
    }

    $session = $stripe['payload'];
    $paymentStatus = isset($session['payment_status']) ? (string) $session['payment_status'] : '';
    $sessionOrderId = null;
    if (isset($session['client_reference_id']) && is_scalar($session['client_reference_id'])) {
        $sessionOrderId = (string) $session['client_reference_id'];
    } elseif (isset($session['metadata']['order_id']) && is_scalar($session['metadata']['order_id'])) {
        $sessionOrderId = (string) $session['metadata']['order_id'];
    }
    if ($sessionOrderId !== (string) $order['id']) {
        api_json(['message' => 'La session de paiement ne correspond pas à cette commande.'], 403);
    }

    $isPaid = ($paymentStatus === 'paid' || $paymentStatus === 'no_payment_required');
    $amountTotal = isset($session['amount_total']) ? (int) $session['amount_total'] : null;
    $currency = isset($session['currency']) ? strtolower((string) $session['currency']) : '';
    $expectedAmount = (int) round(((float) $order['total_eur']) * 100);
    if ($isPaid && $amountTotal !== null && $currency === 'eur' && $amountTotal !== $expectedAmount) {
        api_json(['message' => 'Le montant payé ne correspond pas à la commande.'], 409);
    }

    if ($isPaid) {
        $paymentIntentId = null;
        if (isset($session['payment_intent']) && is_string($session['payment_intent'])) {
            $paymentIntentId = $session['payment_intent'];
        }
        $update = $pdo->prepare(
            'UPDATE orders
             SET status = :status,
                 stripe_session_id = :stripe_session_id,
                 stripe_payment_intent_id = :stripe_payment_intent_id,
                 paid_at = COALESCE(paid_at, NOW())
             WHERE id = :id'
        );
        $update->execute([
            'status' => 'paid',
            'stripe_session_id' => $sessionId,
            'stripe_payment_intent_id' => $paymentIntentId,
            'id' => (int) $order['id'],
        ]);
        $order = payment_fetch_order($pdo, (int) $orderId);
    }

    $items = payment_fetch_items($pdo, (int) $orderId);
    api_json([
        'verified' => $isPaid,
        'paymentStatus' => $paymentStatus,
        'order' => [
            'id' => (int) $order['id'],
            'status' => (string) $order['status'],
            'email' => (string) $order['email'],
            'full_name' => (string) $order['full_name'],
            'address' => (string) $order['address'],
            'city' => (string) $order['city'],
            'postal_code' => (string) $order['postal_code'],
            'country' => (string) $order['country'],
            'total_eur' => (float) $order['total_eur'],
            'paid_at' => $order['paid_at'],
            'created_at' => $order['created_at'],
        ],
        'items' => array_map(static function (array $item): array {
            return [
                'product_name' => (string) $item['product_name'],
                'quantity' => (int) $item['quantity'],
                'unit_price_eur' => (float) $item['unit_price_eur'],
            ];
        }, $items),
    ]);
}

function payment_receipt_action(): void
{
    $orderId = filter_var($_GET['order_id'] ?? null, FILTER_VALIDATE_INT);
    $sessionId = trim((string) ($_GET['session_id'] ?? ''));
    if ($orderId === false || $orderId < 1) {
        http_response_code(422);
        header('Content-Type: text/plain; charset=utf-8');
        echo 'Quittung nicht verfügbar: fehlende Angaben.';
        return;
    }

    $pdo = api_db();
    $order = payment_fetch_order($pdo, (int) $orderId);
    if (!$order) {
        http_response_code(404);
        header('Content-Type: text/plain; charset=utf-8');
        echo 'Bestellung nicht gefunden.';
        return;
    }

    $storedSessionId = isset($order['stripe_session_id']) ? (string) $order['stripe_session_id'] : '';
    $sessionMatches = $sessionId !== '' && $storedSessionId !== '' && hash_equals($storedSessionId, $sessionId);
    $ownerAuthorized = false;
    if (!$sessionMatches) {
        $currentUser = api_current_user();
        $orderUserId = isset($order['user_id']) ? $order['user_id'] : null;
        if ($currentUser !== null && $orderUserId !== null && (int) $currentUser['id'] === (int) $orderUserId) {
            $ownerAuthorized = true;
        }
    }

    if ((string) $order['status'] !== 'paid' || $storedSessionId === '' || (!$sessionMatches && !$ownerAuthorized)) {
        http_response_code(403);
        header('Content-Type: text/plain; charset=utf-8');
        echo 'Quittung nicht verfügbar: Die Zahlung ist nicht bestätigt.';
        return;
    }

    $items = payment_fetch_items($pdo, (int) $orderId);
    $logoPath = dirname(__DIR__, 2) . DIRECTORY_SEPARATOR . 'public' . DIRECTORY_SEPARATOR . 'Icône_Bout.webp';
    $logoDataUri = '';
    if (is_file($logoPath)) {
        $logoBytes = file_get_contents($logoPath);
        if (is_string($logoBytes) && $logoBytes !== '') {
            $logoDataUri = 'data:image/png;base64,' . base64_encode($logoBytes);
        }
    }

    $esc = static fn(string $value): string => htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $orderRef = 'Bestellung #' . (int) $order['id'];
    $paidAt = $order['paid_at'] ? (string) $order['paid_at'] : (string) $order['created_at'];
    $total = number_format((float) $order['total_eur'], 2, ',', ' ') . ' EUR';
    $rowsHtml = '';
    foreach ($items as $item) {
        $name = $esc((string) $item['product_name']);
        $qty = (int) $item['quantity'];
        $unit = number_format((float) $item['unit_price_eur'], 2, ',', ' ') . ' EUR';
        $line = number_format(((float) $item['unit_price_eur']) * $qty, 2, ',', ' ') . ' EUR';
        $rowsHtml .= "<tr><td>{$name}</td><td style=\"text-align:center\">{$qty}</td><td style=\"text-align:right\">{$unit}</td><td style=\"text-align:right\">{$line}</td></tr>";
    }

    $logoHtml = $logoDataUri !== ''
        ? '<img src="' . $esc($logoDataUri) . '" alt="Garten-Gespann" style="height:64px;max-width:180px;object-fit:contain" />'
        : '<div style="font-size:20px;font-weight:700;color:#2f6b3f">Garten-Gespann</div>';

    $customer = $esc((string) $order['full_name']);
    $email = $esc((string) $order['email']);
    $address = $esc(trim((string) $order['address'] . ', ' . (string) $order['postal_code'] . ' ' . (string) $order['city'] . ', ' . (string) $order['country'], " ,"));
    $paidAtEsc = $esc($paidAt);
    $title = $esc($orderRef . ' - Zahlungsbeleg');

    $html = "<!doctype html><html lang=\"de\"><head><meta charset=\"utf-8\" />"
        . "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />"
        . "<title>{$title}</title>"
        . "<style>body{font-family:Arial,Helvetica,sans-serif;margin:0;padding:24px;color:#1f2937;background:#fff}.wrap{max-width:720px;margin:0 auto}.card{border:1px solid #e5e7eb;border-radius:12px;padding:24px}.head{display:flex;justify-content:space-between;align-items:center;gap:16px;margin-bottom:20px}.badge{display:inline-block;background:#ecfdf3;color:#166534;border:1px solid #bbf7d0;padding:4px 10px;border-radius:999px;font-size:12px;font-weight:600}.muted{color:#6b7280;font-size:14px}table{width:100%;border-collapse:collapse;margin-top:16px}th,td{padding:10px 8px;border-bottom:1px solid #e5e7eb;font-size:14px;vertical-align:top}th{background:#f9fafb;text-align:left}.total{margin-top:16px;display:flex;justify-content:flex-end;font-size:18px;font-weight:700}.footer{margin-top:20px;font-size:12px;color:#6b7280}@media print{body{padding:0}.card{border:none}}</style>"
        . "</head><body><div class=\"wrap\"><div class=\"card\">"
        . "<div class=\"head\"><div>{$logoHtml}<div class=\"muted\" style=\"margin-top:6px\">Garten-Gespann</div></div>"
        . "<div style=\"text-align:right\"><div style=\"font-size:22px;font-weight:700\">Zahlungsbeleg</div><div class=\"muted\">{$esc($orderRef)}</div><div style=\"margin-top:8px\"><span class=\"badge\">Zahlung bestätigt</span></div></div></div>"
        . "<div style=\"margin-bottom:16px\"><div><strong>Kunde:</strong> {$customer}</div><div><strong>E-Mail:</strong> {$email}</div><div><strong>Adresse:</strong> {$address}</div><div><strong>Datum:</strong> {$paidAtEsc}</div></div>"
        . "<table><thead><tr><th>Produkt</th><th style=\"text-align:center\">Menge</th><th style=\"text-align:right\">Einzelpreis</th><th style=\"text-align:right\">Betrag</th></tr></thead><tbody>{$rowsHtml}</tbody></table>"
        . "<div class=\"total\">Bezahlter Betrag: {$total}</div>"
        . "<div class=\"footer\">Dieses Dokument bestätigt die Zahlung der oben genannten Bestellung. Bitte bewahren Sie es als Quittung auf.</div>"
        . "</div></div></body></html>";

    header('Content-Type: text/html; charset=utf-8');
    header('Content-Disposition: attachment; filename="quittung-bestellung-' . (int) $order['id'] . '.html"');
    header('X-Content-Type-Options: nosniff');
    header('Cache-Control: no-store, no-cache, must-revalidate');
    echo $html;
}

$action = isset($_GET['action']) ? (string) $_GET['action'] : '';
if ($action === '') {
    $input = api_input();
    $action = isset($input['action']) ? (string) $input['action'] : '';
}

if ($action === 'verify') {
    payment_verify_action();
    exit;
}

if ($action === 'receipt') {
    if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'GET') {
        header('Allow: GET');
        api_json(['message' => 'Méthode non autorisée.'], 405);
    }
    payment_receipt_action();
    exit;
}

api_json(['message' => 'Action de paiement inconnue.'], 400);
