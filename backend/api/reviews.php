<?php
declare(strict_types=1);

require_once __DIR__ . '/_bootstrap.php';

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
if (!in_array($method, ['GET', 'POST'], true)) {
    header('Allow: GET, POST');
    api_json(['message' => 'Méthode non autorisée.'], 405);
}

$pdo = api_db();

if ($method === 'GET') {
    $slug = $_GET['product'] ?? null;
    if (!is_string($slug) || trim($slug) === '' || strlen($slug) > 190) {
        api_json(['message' => 'Le produit demandé est invalide.'], 422);
    }

    try {
        $statement = $pdo->prepare(
            'SELECT r.id, r.reviewer_name AS name, r.rating, r.comment, r.created_at
             FROM reviews r
             INNER JOIN products p ON p.id = r.product_id
             WHERE p.slug = :slug AND p.is_active = 1
               AND p.external_id IS NOT NULL AND r.is_approved = 1
             ORDER BY r.created_at DESC, r.id DESC'
        );
        $statement->execute(['slug' => trim($slug)]);
        $reviews = array_map(
            static fn(array $review): array => [
                'id' => (int) $review['id'],
                'name' => $review['name'],
                'rating' => (int) $review['rating'],
                'comment' => $review['comment'],
                'created_at' => $review['created_at'],
            ],
            $statement->fetchAll()
        );
        api_json(['reviews' => $reviews]);
    } catch (Throwable $error) {
        error_log('Échec de chargement des avis : ' . $error->getMessage());
        api_json(['message' => 'Les avis sont momentanément indisponibles.'], 500);
    }
}

api_require_csrf();
$input = api_input();
$slug = $input['product_slug'] ?? null;
$name = $input['name'] ?? null;
$email = $input['email'] ?? null;
$comment = $input['comment'] ?? null;
$rating = filter_var($input['rating'] ?? null, FILTER_VALIDATE_INT);

if (
    !is_string($slug) || trim($slug) === '' || strlen($slug) > 190 ||
    !is_string($name) || trim($name) === '' || strlen(trim($name)) > 150 ||
    !is_string($email) || !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 254 ||
    !is_string($comment) || trim($comment) === '' || strlen(trim($comment)) > 10000 ||
    $rating === false || $rating < 1 || $rating > 5
) {
    api_json(['message' => 'Vérifiez votre nom, votre adresse e-mail, votre note et votre commentaire.'], 422);
}

try {
    $product = $pdo->prepare(
        'SELECT id FROM products
         WHERE slug = :slug AND is_active = 1 AND external_id IS NOT NULL
         LIMIT 1'
    );
    $product->execute(['slug' => trim($slug)]);
    $productId = $product->fetchColumn();
    if ($productId === false) {
        api_json(['message' => 'Ce produit est introuvable.'], 404);
    }

    $user = api_current_user();
    $insert = $pdo->prepare(
        'INSERT INTO reviews (user_id, product_id, reviewer_name, reviewer_email, rating, comment)
         VALUES (:user_id, :product_id, :reviewer_name, :reviewer_email, :rating, :comment)'
    );
    $insert->execute([
        'user_id' => $user['id'] ?? null,
        'product_id' => $productId,
        'reviewer_name' => trim($name),
        'reviewer_email' => trim($email),
        'rating' => $rating,
        'comment' => trim($comment),
    ]);

    api_json(['message' => 'Votre avis a été enregistré et sera publié après validation.'], 201);
} catch (Throwable $error) {
    error_log('Échec d’enregistrement d’un avis : ' . $error->getMessage());
    api_json(['message' => 'Votre avis n’a pas pu être enregistré. Réessayez plus tard.'], 500);
}
