-- Migration: update local image paths from .png/.jpg/.jpeg to .webp
-- Run against an existing MySQL/MariaDB database (e.g. garten_gespann) if image paths were stored before WebP conversion.
-- Review before running in production.

-- products.image_url (local paths only)
UPDATE products
SET image_url = REGEXP_REPLACE(image_url, '\\.(png|jpe?g)$', '.webp')
WHERE image_url IS NOT NULL
  AND image_url NOT LIKE 'http://%'
  AND image_url NOT LIKE 'https://%'
  AND image_url REGEXP '\\.(png|jpe?g)$';

-- If you store gallery/JSON image arrays in MySQL tables, adapt similarly, for example:
-- UPDATE products SET gallery = REPLACE(REPLACE(REPLACE(gallery, '.png', '.webp'), '.jpg', '.webp'), '.jpeg', '.webp')
-- WHERE gallery IS NOT NULL AND gallery NOT LIKE '%http%';

-- Supabase/PostgreSQL (if used): adjust table/column names as needed.
-- UPDATE products SET image_url = regexp_replace(image_url, '\.(png|jpe?g)$', '.webp')
-- WHERE image_url IS NOT NULL AND image_url NOT LIKE 'http%' AND image_url ~ '\.(png|jpe?g)$';
-- UPDATE products SET gallery = (
--   SELECT jsonb_agg(
--     CASE WHEN (v::text) ~ '^".*/.*\.(png|jpe?g)"$' AND (v::text) NOT LIKE '%http%'
--       THEN to_jsonb(regexp_replace(v #>> '{}', '\.(png|jpe?g)$', '.webp'))
--       ELSE v END)
--   FROM jsonb_array_elements(gallery::jsonb) AS v
-- ) WHERE gallery IS NOT NULL;
