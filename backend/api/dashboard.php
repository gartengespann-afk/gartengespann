<?php
declare(strict_types=1);

require_once __DIR__ . '/_bootstrap.php';

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'GET') {
    header('Allow: GET');
    api_json(['message' => 'Méthode non autorisée.'], 405);
}

$user = api_current_user();
if ($user === null) {
    api_json(['message' => 'Connectez-vous pour accéder à votre espace.'], 401);
}

$pdo = api_db();
$orders = $pdo->prepare(
    'SELECT id, status, total_eur, created_at FROM orders WHERE user_id = :user_id ORDER BY created_at DESC'
);
$orders->execute(['user_id' => $user['id']]);

$invoices = $pdo->prepare(
    'SELECT i.id, i.invoice_number, i.status, i.total_eur, i.issued_at, o.id AS order_id
     FROM invoices i
     INNER JOIN orders o ON o.id = i.order_id
     WHERE o.user_id = :user_id
     ORDER BY i.issued_at DESC'
);
$invoices->execute(['user_id' => $user['id']]);

$receipts = $pdo->prepare(
    "SELECT id, id AS order_id, status, total_eur, paid_at, created_at, stripe_session_id
     FROM orders
     WHERE user_id = :user_id
       AND status = 'paid'
       AND stripe_session_id IS NOT NULL
       AND stripe_session_id <> ''
     ORDER BY COALESCE(paid_at, created_at) DESC"
);
$receipts->execute(['user_id' => $user['id']]);

$cart = $pdo->prepare(
    'SELECT p.id AS product_id, p.slug, p.name, p.price_eur, p.image_url, c.quantity
     FROM cart_items c
     INNER JOIN products p ON p.id = c.product_id
     WHERE c.user_id = :user_id
     ORDER BY c.created_at DESC'
);
$cart->execute(['user_id' => $user['id']]);

$favorites = $pdo->prepare(
    'SELECT p.id AS product_id, p.slug, p.name, p.price_eur, p.image_url
     FROM favorites f
     INNER JOIN products p ON p.id = f.product_id
     WHERE f.user_id = :user_id
     ORDER BY f.created_at DESC'
);
$favorites->execute(['user_id' => $user['id']]);

api_json([
    'orders' => $orders->fetchAll(),
    'invoices' => $invoices->fetchAll(),
    'receipts' => $receipts->fetchAll(),
    'cart' => $cart->fetchAll(),
    'favorites' => $favorites->fetchAll(),
]);
