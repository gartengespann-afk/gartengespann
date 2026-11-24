<?php
declare(strict_types=1);

require_once __DIR__ . '/_bootstrap.php';

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
if ($method !== 'POST') {
    header('Allow: POST');
    api_json(['message' => 'Méthode non autorisée.'], 405);
}

api_require_csrf();
$input = api_input();

$email = trim((string) ($input['email'] ?? ''));
$fullName = trim((string) ($input['full_name'] ?? ''));
$address = trim((string) ($input['address'] ?? ''));
$city = trim((string) ($input['city'] ?? ''));
$postalCode = trim((string) ($input['postal_code'] ?? ''));
$country = trim((string) ($input['country'] ?? ''));
$phone = trim((string) ($input['phone'] ?? ''));
$notes = trim((string) ($input['notes'] ?? ''));
$items = $input['items'] ?? null;

if (
    !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 254 ||
    $fullName === '' || strlen($fullName) > 201 ||
    $address === '' || strlen($address) > 255 ||
    $city === '' || strlen($city) > 120 ||
    $postalCode === '' || strlen($postalCode) > 32 ||
    $country === '' || strlen($country) > 120 ||
    strlen($phone) > 40 ||
    !is_array($items) || count($items) === 0 || count($items) > 100
) {
    api_json(['message' => 'Vérifiez les informations de commande et votre panier.'], 422);
}

$pdo = api_db();
$user = api_current_user();

try {
    $pdo->beginTransaction();

    $orderItems = [];
    $totalEur = 0.0;

    $productStatement = $pdo->prepare(
        'SELECT id, name_fr, name_de, name_en, price_eur
         FROM products
         WHERE slug = :slug AND is_active = 1
         LIMIT 1'
    );

    foreach ($items as $item) {
        if (!is_array($item)) {
            $pdo->rollBack();
            api_json(['message' => 'Votre panier contient un article invalide.'], 422);
        }

        $slug = trim((string) ($item['slug'] ?? ''));
        $quantity = filter_var($item['quantity'] ?? null, FILTER_VALIDATE_INT);
        if ($slug === '' || strlen($slug) > 190 || $quantity === false || $quantity < 1 || $quantity > 999) {
            $pdo->rollBack();
            api_json(['message' => 'Votre panier contient un article invalide.'], 422);
        }

        $productStatement->execute(['slug' => $slug]);
        $product = $productStatement->fetch();
        $productStatement->closeCursor();
        if (!$product) {
            $pdo->rollBack();
            api_json(['message' => 'Un produit de votre panier est introuvable ou indisponible.'], 404);
        }

        $unitPrice = (float) $product['price_eur'];
        $productName = (string) ($product['name_fr'] ?: ($product['name_de'] ?: ($product['name_en'] ?: $slug)));
        $lineTotal = $unitPrice * $quantity;
        $totalEur += $lineTotal;

        $orderItems[] = [
            'product_id' => (int) $product['id'],
            'product_name' => $productName,
            'unit_price_eur' => $unitPrice,
            'quantity' => $quantity,
        ];
    }

    $totalEur = round($totalEur, 2);
    if ($totalEur <= 0) {
        $pdo->rollBack();
        api_json(['message' => 'Le montant de la commande est invalide.'], 422);
    }

    $orderInsert = $pdo->prepare(
        'INSERT INTO orders (user_id, email, full_name, address, city, postal_code, country, phone, notes, status, total_eur)
         VALUES (:user_id, :email, :full_name, :address, :city, :postal_code, :country, :phone, :notes, :status, :total_eur)'
    );
    $orderInsert->execute([
        'user_id' => $user['id'] ?? null,
        'email' => $email,
        'full_name' => $fullName,
        'address' => $address,
        'city' => $city,
        'postal_code' => $postalCode,
        'country' => $country,
        'phone' => $phone !== '' ? $phone : null,
        'notes' => $notes !== '' ? $notes : null,
        'status' => 'pending_payment',
        'total_eur' => $totalEur,
    ]);

    $orderId = (int) $pdo->lastInsertId();
    $itemInsert = $pdo->prepare(
        'INSERT INTO order_items (order_id, product_id, product_name, unit_price_eur, quantity)
         VALUES (:order_id, :product_id, :product_name, :unit_price_eur, :quantity)'
    );
    foreach ($orderItems as $orderItem) {
        $itemInsert->execute([
            'order_id' => $orderId,
            'product_id' => $orderItem['product_id'],
            'product_name' => $orderItem['product_name'],
            'unit_price_eur' => $orderItem['unit_price_eur'],
            'quantity' => $orderItem['quantity'],
        ]);
    }

    $pdo->commit();
} catch (Throwable $error) {
    if ($pdo->inTransaction()) {
        $pdo->rollBack();
    }
    error_log('Échec de création de commande : ' . $error->getMessage());
    api_json(['message' => 'La commande n’a pas pu être enregistrée. Réessayez plus tard.'], 500);
}

$frontendOrigin = rtrim((string) ($_ENV['FRONTEND_ORIGIN'] ?? ''), '/');
$orderIdPlaceholder = (string) $orderId;
$successUrl = str_replace('{ORDER_ID}', $orderIdPlaceholder, trim((string) ($_ENV['PAYMENT_SUCCESS_URL'] ?? '')));
$cancelUrl = str_replace('{ORDER_ID}', $orderIdPlaceholder, trim((string) ($_ENV['PAYMENT_CANCEL_URL'] ?? '')));
if ($successUrl === '' && $frontendOrigin !== '') {
    $successUrl = $frontendOrigin . '/payment-success?order=' . $orderId . '&session_id={CHECKOUT_SESSION_ID}';
} elseif ($successUrl !== '' && strpos($successUrl, '{CHECKOUT_SESSION_ID}') === false && strpos($successUrl, 'session_id=') === false) {
    $successUrl .= (strpos($successUrl, '?') === false ? '?' : '&') . 'session_id={CHECKOUT_SESSION_ID}';
}
if ($cancelUrl === '' && $frontendOrigin !== '') {
    $cancelUrl = $frontendOrigin . '/checkout?payment=cancelled&order=' . $orderId;
}
if ($successUrl === '' || $cancelUrl === '') {
    api_json(['message' => 'Configuration de paiement incomplète (URL de retour). Vérifiez FRONTEND_ORIGIN.'], 500);
}

$fallbackPaymentUrl = str_replace(
    '{ORDER_ID}',
    $orderIdPlaceholder,
    trim((string) ($_ENV['PAYMENT_FALLBACK_URL'] ?? ''))
);
$stripeSecretKey = trim((string) ($_ENV['STRIPE_SECRET_KEY'] ?? $_ENV['PAYMENT_API_KEY'] ?? ''));

if ($stripeSecretKey === '') {
    $paymentUrl = $fallbackPaymentUrl !== ''
        ? $fallbackPaymentUrl
        : ($frontendOrigin !== '' ? $frontendOrigin . '/account?payment=pending&order=' . $orderId : '');
    if ($paymentUrl === '') {
        api_json(['message' => 'Commande enregistrée, mais aucune URL de redirection de paiement n’est disponible.'], 500);
    }
    api_json([
        'orderId' => $orderId,
        'paymentUrl' => $paymentUrl,
        'paymentConfigured' => false,
    ]);
}

$stripeFields = [
    'mode' => 'payment',
    'success_url' => $successUrl,
    'cancel_url' => $cancelUrl,
    'client_reference_id' => (string) $orderId,
    'customer_email' => $email,
    'line_items[0][quantity]' => '1',
    'line_items[0][price_data][currency]' => 'eur',
    'line_items[0][price_data][unit_amount]' => (string) ((int) round($totalEur * 100)),
    'line_items[0][price_data][product_data][name]' => 'Commande #' . $orderId,
    'metadata[order_id]' => (string) $orderId,
];

$ch = curl_init('https://api.stripe.com/v1/checkout/sessions');
if ($ch === false) {
    error_log('Impossible d’initialiser cURL pour Stripe.');
    api_json(['message' => 'La redirection vers le paiement est momentanément indisponible.'], 500);
}

$curlOptions = [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTPHEADER => ['Authorization: Bearer ' . $stripeSecretKey],
    CURLOPT_POSTFIELDS => http_build_query($stripeFields),
];

$caInfo = trim((string) ini_get('curl.cainfo'));
$openSslCa = trim((string) ini_get('openssl.cafile'));
if ($caInfo === '' && $openSslCa === '') {
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
            break;
        }
    }
}

curl_setopt_array($ch, $curlOptions);

$stripeResponse = curl_exec($ch);
$stripeStatus = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

if ($stripeResponse === false || $curlError !== '') {
    error_log('Erreur cURL Stripe : ' . $curlError);
    if (stripos($curlError, 'SSL certificate problem') !== false || stripos($curlError, 'unable to get local issuer certificate') !== false) {
        api_json(['message' => 'Connexion sécurisée à Stripe impossible (certificat SSL/CA manquant sur le serveur PHP). Configurez curl.cainfo dans php.ini (WAMP) ou installez un fichier cacert.pem, puis réessayez.'], 502);
    }
    api_json(['message' => 'La redirection vers le paiement a échoué. Réessayez plus tard.'], 502);
}

$stripePayload = json_decode((string) $stripeResponse, true);
$paymentUrl = is_array($stripePayload) ? ($stripePayload['url'] ?? null) : null;
$stripeSessionId = is_array($stripePayload) ? ($stripePayload['id'] ?? null) : null;
if ($stripeStatus < 200 || $stripeStatus >= 300 || !is_string($paymentUrl) || $paymentUrl === '') {
    $stripeError = is_array($stripePayload) && isset($stripePayload['error']['message'])
        ? (string) $stripePayload['error']['message']
        : 'réponse invalide';
    error_log('Erreur Stripe Checkout : ' . $stripeError);
    api_json(['message' => 'Le service de paiement a refusé la demande. Vérifiez la configuration Stripe.'], 502);
}

if (is_string($stripeSessionId) && $stripeSessionId !== '') {
    try {
        $sessionUpdate = $pdo->prepare('UPDATE orders SET stripe_session_id = :stripe_session_id WHERE id = :id');
        $sessionUpdate->execute([
            'stripe_session_id' => $stripeSessionId,
            'id' => $orderId,
        ]);
    } catch (Throwable $sessionError) {
        error_log('Impossible d’enregistrer l’identifiant de session Stripe : ' . $sessionError->getMessage());
    }
}

api_json([
    'orderId' => $orderId,
    'paymentUrl' => $paymentUrl,
    'paymentConfigured' => true,
    'sessionId' => is_string($stripeSessionId) ? $stripeSessionId : null,
]);
