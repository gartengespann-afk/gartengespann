<?php
declare(strict_types=1);

require_once __DIR__ . '/_bootstrap.php';

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'GET') {
    header('Allow: GET');
    api_json(['message' => 'Méthode non autorisée.'], 405);
}

try {
    $statement = api_db()->query(
        'SELECT id, external_id, slug, category_id, name_de, name_fr, name_en,
                subtitle_de, subtitle_fr, subtitle_en, description_de, description_fr, description_en,
                price_eur, image_url, gallery, is_hot, stock, created_at, updated_at
         FROM products
         WHERE is_active = 1 AND external_id IS NOT NULL
         ORDER BY created_at ASC, id ASC'
    );
    $products = [];
    foreach ($statement->fetchAll() as $row) {
        $gallery = json_decode((string) ($row['gallery'] ?? '[]'), true, 512, JSON_THROW_ON_ERROR);
        $products[] = [
            'id' => $row['external_id'],
            'slug' => $row['slug'],
            'category_id' => $row['category_id'],
            'name_de' => $row['name_de'],
            'name_fr' => $row['name_fr'],
            'name_en' => $row['name_en'],
            'subtitle_de' => $row['subtitle_de'],
            'subtitle_fr' => $row['subtitle_fr'],
            'subtitle_en' => $row['subtitle_en'],
            'description_de' => $row['description_de'],
            'description_fr' => $row['description_fr'],
            'description_en' => $row['description_en'],
            'price_eur' => (float) $row['price_eur'],
            'image_url' => $row['image_url'],
            'gallery' => is_array($gallery) ? $gallery : [],
            'is_hot' => (bool) $row['is_hot'],
            'stock' => (int) $row['stock'],
            'created_at' => $row['created_at'],
            'updated_at' => $row['updated_at'],
        ];
    }

    api_json(['products' => $products]);
} catch (Throwable $error) {
    error_log('Échec de chargement du catalogue : ' . $error->getMessage());
    api_json(['message' => 'Le catalogue est momentanément indisponible.'], 500);
}
