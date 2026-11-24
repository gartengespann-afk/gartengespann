-- Extend the existing MySQL catalog without dropping or replacing product data.
CREATE TABLE IF NOT EXISTS categories (
  id VARCHAR(32) NOT NULL,
  slug VARCHAR(100) NOT NULL,
  name_de VARCHAR(255) NOT NULL,
  name_fr VARCHAR(255) NOT NULL,
  name_en VARCHAR(255) NOT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_categories_slug (slug)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS products (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  slug VARCHAR(190) NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT NULL,
  price_eur DECIMAL(10,2) NOT NULL,
  image_url VARCHAR(2048) NULL,
  stock INT UNSIGNED NOT NULL DEFAULT 0,
  is_active TINYINT(1) NOT NULL DEFAULT 1,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_products_slug (slug),
  KEY idx_products_active (is_active),
  CONSTRAINT chk_products_price CHECK (price_eur >= 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO categories (id, slug, name_de, name_fr, name_en, sort_order) VALUES
  ('cat-1', 'trailers', 'Anhänger', 'Remorques', 'Trailers', 1),
  ('cat-2', 'lawn-mowers', 'Rasenmäher', 'Tondeuses', 'Lawn mowers', 2),
  ('cat-3', 'chainsaws', 'Kettensägen', 'Tronçonneuses', 'Chainsaws', 3),
  ('cat-4', 'firewood', 'Brennholz', 'Bois de chauffage', 'Firewood', 4),
  ('cat-5', 'accessories', 'Zubehör', 'Accessoires', 'Accessories', 5),
  ('cat-6', 'wood-pellets', 'Holzpellets', 'Granulés de bois', 'Wood pellets', 6),
  ('cat-7', 'wood-briquettes', 'Holzbriketts', 'Briquettes de bois', 'Wood briquettes', 7),
  ('cat-8', 'firelighters-kindling', 'Anzündhilfen und Kleinholz', 'Allume-feu et petit bois', 'Firelighters and kindling', 8),
  ('cat-9', 'wood-stoves', 'Holzöfen', 'Poêles à bois', 'Wood stoves', 9)
ON DUPLICATE KEY UPDATE
  name_de = VALUES(name_de),
  name_fr = VALUES(name_fr),
  name_en = VALUES(name_en),
  sort_order = VALUES(sort_order);

ALTER TABLE products
  ADD COLUMN external_id VARCHAR(64) NULL AFTER slug,
  ADD COLUMN category_id VARCHAR(32) NULL AFTER external_id,
  ADD COLUMN name_de VARCHAR(255) NULL,
  ADD COLUMN name_fr VARCHAR(255) NULL,
  ADD COLUMN name_en VARCHAR(255) NULL,
  ADD COLUMN subtitle_de VARCHAR(255) NULL,
  ADD COLUMN subtitle_fr VARCHAR(255) NULL,
  ADD COLUMN subtitle_en VARCHAR(255) NULL,
  ADD COLUMN description_de MEDIUMTEXT NULL,
  ADD COLUMN description_fr MEDIUMTEXT NULL,
  ADD COLUMN description_en MEDIUMTEXT NULL,
  ADD COLUMN gallery JSON NULL,
  ADD COLUMN is_hot TINYINT(1) NOT NULL DEFAULT 0,
  ADD UNIQUE KEY uq_products_external_id (external_id),
  ADD KEY idx_products_category_active (category_id, is_active),
  ADD CONSTRAINT fk_products_category FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE SET NULL;

CREATE TABLE IF NOT EXISTS reviews (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id BIGINT UNSIGNED NULL,
  product_id BIGINT UNSIGNED NOT NULL,
  reviewer_name VARCHAR(150) NOT NULL,
  reviewer_email VARCHAR(254) NOT NULL,
  rating TINYINT UNSIGNED NOT NULL,
  comment TEXT NOT NULL,
  is_approved TINYINT(1) NOT NULL DEFAULT 0,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_reviews_product_publication (product_id, is_approved, created_at),
  KEY idx_reviews_user (user_id),
  CONSTRAINT fk_reviews_user FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE SET NULL,
  CONSTRAINT fk_reviews_product FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE,
  CONSTRAINT chk_reviews_rating CHECK (rating BETWEEN 1 AND 5)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
