<?php
declare(strict_types=1);

require_once __DIR__ . '/_bootstrap.php';

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
if (!in_array($method, ['GET', 'POST'], true)) {
    header('Allow: GET, POST');
    api_json(['message' => 'Méthode non autorisée.'], 405);
}

$user = api_current_user();
if ($user === null) {
    api_json(['message' => 'Connectez-vous pour gérer vos favoris.'], 401);
}

$pdo = api_db();

if ($method === 'GET') {
    $favorites = $pdo->prepare(
        'SELECT p.id AS product_id, p.slug, p.name, p.price_eur, p.image_url
         FROM favorites f
         INNER JOIN products p ON p.id = f.product_id
         WHERE f.user_id = :user_id
         ORDER BY f.created_at DESC'
    );
    $favorites->execute(['user_id' => $user['id']]);
    api_json(['favorites' => $favorites->fetchAll()]);
}

api_require_csrf();
$input = api_input();
$action = $input['action'] ?? null;
$slug = $input['slug'] ?? null;

if (
    !is_string($slug) || trim($slug) === '' || strlen($slug) > 190 ||
    !in_array($action, ['add', 'remove'], true)
) {
    api_json(['message' => 'Le produit demandé est invalide.'], 422);
}

$slug = trim($slug);
$product = $pdo->prepare('SELECT id FROM products WHERE slug = :slug LIMIT 1');
$product->execute(['slug' => trim($slug)]);
$productId = $product->fetchColumn();

if ($action === 'add') {
    $name = $input['name'] ?? null;
    $price = $input['price_eur'] ?? null;
    $imageUrl = $input['image_url'] ?? null;
    if (
        !is_string($name) || trim($name) === '' || strlen($name) > 255 ||
        (!is_int($price) && !is_float($price) && !is_string($price)) ||
        !is_numeric($price) || !is_finite((float) $price) ||
        (float) $price < 0 || (float) $price > 99999999.99 ||
        ($imageUrl !== null && (!is_string($imageUrl) || strlen($imageUrl) > 2048))
    ) {
        api_json(['message' => 'Les informations du produit sont invalides.'], 422);
    }

    if ($productId === false) {
        $createProduct = $pdo->prepare(
            'INSERT INTO products (slug, name, price_eur, image_url, stock, is_active)
             VALUES (:slug, :name, :price_eur, :image_url, 0, 1)
             ON DUPLICATE KEY UPDATE id = LAST_INSERT_ID(id)'
        );
        $createProduct->execute([
            'slug' => $slug,
            'name' => trim($name),
            'price_eur' => $price,
            'image_url' => $imageUrl,
        ]);
        $product->execute(['slug' => $slug]);
        $productId = $product->fetchColumn();
    }

    if ($productId === false) {
        api_json(['message' => 'Le produit n’a pas pu être enregistré.'], 500);
    }

    $favorite = $pdo->prepare(
        'INSERT IGNORE INTO favorites (user_id, product_id) VALUES (:user_id, :product_id)'
    );
    $favorite->execute(['user_id' => $user['id'], 'product_id' => $productId]);
} else {
    if ($productId === false) {
        api_json(['message' => 'Ce produit est introuvable.'], 404);
    }
    $favorite = $pdo->prepare(
        'DELETE FROM favorites WHERE user_id = :user_id AND product_id = :product_id'
    );
    $favorite->execute(['user_id' => $user['id'], 'product_id' => $productId]);
}

api_json(['favorite' => $action === 'add']);