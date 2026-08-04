-- Seed categories
INSERT INTO public.categories (slug, name_de, name_fr, name_en, sort_order) VALUES
  ('trailers', 'Anhänger', 'Remorques', 'Trailers', 1),
  ('lawn-mowers', 'Rasenmäher', 'Tondeuses', 'Lawn mowers', 2),
  ('chainsaws', 'Kettensägen', 'Tronçonneuses', 'Chainsaws', 3),
  ('firewood', 'Brennholz', 'Bois de chauffage', 'Firewood', 4),
  ('accessories', 'Zubehör', 'Accessoires', 'Accessories', 5)
ON CONFLICT (slug) DO NOTHING;

-- Seed products
INSERT INTO public.products (slug, category_id, name_de, name_fr, name_en, description_de, description_fr, description_en, price_eur, image_url, gallery, is_hot, stock) VALUES
  (
    'tipp-750-kip-kuppel',
    (SELECT id FROM public.categories WHERE slug = 'trailers'),
    'Remorque basculante de 750 kg avec couvercle en dôme',
    'Remorque basculante de 750 kg avec couvercle en dôme',
    '750 kg dump trailer with dome cover',
    'Robuste Anhänger mit 750 kg Nutzlast, kippbarer Mulde und gewölbtem Deckel. Ideal für den professionellen Einsatz im Garten- und Landschaftsbau.',
    'Remorque robuste de 750 kg de charge utile, benne basculante et couvercle en dôme. Idéale pour une utilisation professionnelle en jardinage et paysagisme.',
    'Robust trailer with 750 kg payload, tilting tub and domed cover. Ideal for professional use in landscaping.',
    776.00,
    'https://anhangerpellets.de/wp-content/uploads/2026/04/39600pe-lider-benne-hydraulique-electrique-pro-49remorques-cholet-maine-et-loire-3.jpg',
    '[
      "https://anhangerpellets.de/wp-content/uploads/2026/04/39600pe-lider-benne-hydraulique-electrique-pro-49remorques-cholet-maine-et-loire-3.jpg",
      "https://anhangerpellets.de/wp-content/uploads/2026/04/39600pe-lider-benne-hydraulique-electrique-pro-49remorques-cholet-maine-et-loire-2.jpg",
      "https://anhangerpellets.de/wp-content/uploads/2026/04/39600pe-lider-benne-hydraulique-electrique-pro-49remorques-cholet-maine-et-loire-4.jpg",
      "https://anhangerpellets.de/wp-content/uploads/2026/04/39600pe-lider-benne-hydraulique-electrique-pro-49remorques-cholet-maine-et-loire-1.jpg"
    ]',
    true, 99
  ),
  (
    'stihl-ms-261',
    (SELECT id FROM public.categories WHERE slug = 'chainsaws'),
    'Stihl MS 261 Kettensäge',
    'Tronçonneuse Stihl MS 261',
    'Stihl MS 261 chainsaw',
    'Professionelle Kettensäge mit 45 cm³ Hubraum und 3,0 kW Leistung. Ideal für anspruchsvolle Forstarbeiten.',
    'Tronçonneuse professionnelle de 45 cm³ et 3,0 kW. Idéale pour les travaux forestiers exigeants.',
    'Professional chainsaw with 45 cm³ displacement and 3.0 kW power. Ideal for demanding forestry work.',
    899.00,
    'https://anhangerpellets.de/wp-content/uploads/2026/04/stihl-ms-261.jpg',
    '[]',
    true, 50
  ),
  (
    'rasenmaher-akku-40v',
    (SELECT id FROM public.categories WHERE slug = 'lawn-mowers'),
    'Akku-Rasenmäher 40V',
    'Tondeuse à batterie 40V',
    '40V cordless lawn mower',
    'Leiser und leistungsstarker Akku-Rasenmäher mit 40V Lithium-Ionen-Akku. Schnittbreite 46 cm, mit Fangkorb und Mulchfunktion.',
    'Tondeuse à batterie silencieuse et puissante avec batterie lithium-ion 40V. Largeur de coupe 46 cm, avec bac de ramassage et fonction mulching.',
    'Quiet and powerful cordless lawn mower with 40V lithium-ion battery. 46 cm cutting width, with grass catcher and mulching function.',
    649.00,
    'https://anhangerpellets.de/wp-content/uploads/2026/04/rasenmaher-akku-40v.jpg',
    '[]',
    false, 30
  ),
  (
    'brennholz-buche-rm',
    (SELECT id FROM public.categories WHERE slug = 'firewood'),
    'Brennholz Buche 1 RM',
    'Bois de chauffage hêtre 1 stère',
    'Beech firewood 1 RM',
    'Getrocknetes Buchenbrennholz, 1 Raummeter. Ideal für Kamin- und Ofenbetrieb. Restfeuchte unter 20%.',
    'Bois de chauffage en hêtre séché, 1 stère. Idéal pour cheminées et poêles. Humidité résiduelle inférieure à 20%.',
    'Dried beech firewood, 1 cubic meter. Ideal for fireplaces and stoves. Residual moisture below 20%.',
    129.00,
    'https://anhangerpellets.de/wp-content/uploads/2026/04/brennholz-buche.jpg',
    '[]',
    false, 200
  ),
  (
    'anhangerkupplung-50mm',
    (SELECT id FROM public.categories WHERE slug = 'accessories'),
    'Anhängerkupplung 50 mm',
    'Attelage remorque 50 mm',
    'Trailer hitch 50 mm',
    'Hochwertige Anhängerkupplung mit 50 mm Kugelkopf. Geeignet für Anhänger bis 3500 kg.',
    'Attelage de remorque de haute qualité avec boule de 50 mm. Convient aux remorques jusqu à 3500 kg.',
    'High-quality trailer hitch with 50 mm ball head. Suitable for trailers up to 3500 kg.',
    89.00,
    'https://anhangerpellets.de/wp-content/uploads/2026/04/anhangerkupplung-50mm.jpg',
    '[]',
    false, 150
  )
ON CONFLICT (slug) DO NOTHING;
