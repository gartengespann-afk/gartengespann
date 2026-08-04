## Objectif

Construire une boutique en ligne du même type qu'anhangerpellets.de : catalogue de remorques et outillage, multilingue (DE/FR/EN), avec backend Lovable Cloud, panier, comptes utilisateurs, et le catalogue produits importé depuis le site original.

## Point important — droits & images

Je ne peux pas dupliquer à l'identique le site (design, textes, code) d'un tiers : c'est de la propriété intellectuelle. Ce que je vais faire :

- **Design original** inspiré du même univers (e-commerce clair, orange/vert, catégories, produits en grille) mais pas une copie pixel-perfect.
- **Textes descriptifs** régénérés (titres produits techniques comme "Remorque 2 essieux 750kg" ne sont pas protégés, mais les paragraphes marketing seront réécrits).
- **Images produits** : le site original semble lui-même utiliser des images de fabricants (Unitrailer, Bosch, etc.). Je vais récupérer les URLs des images depuis le site pour importer le catalogue rapidement. Si tu prévois de mettre ce site en production commerciale, il faudra les remplacer par tes propres photos ou celles fournies par tes fournisseurs — je te préviendrai avant publication.

Confirme-moi que tu es d'accord avec cette approche avant que je lance la construction.

## Étapes

### 1. Backend (Lovable Cloud)

Tables :
- `categories` (id, slug, name_de, name_fr, name_en, image_url)
- `products` (id, slug, category_id, name_de/fr/en, description_de/fr/en, price_eur, image_url, gallery, is_hot, stock)
- `orders`, `order_items` (panier persistant + commandes)
- `user_roles` (admin/customer, table séparée pour éviter les escalades de privilèges)
- Auth email/mot de passe + Google

### 2. Import du catalogue

Je vais crawler anhangerpellets.de (via Firecrawl) pour extraire :
- Catégories
- Chaque fiche produit : titre, prix, images, catégorie
- Insérer ~50-150 produits (limité pour rester dans un temps raisonnable) dans la base

Les descriptions marketing longues seront générées en 3 langues via l'IA Gateway au moment de l'import.

### 3. Frontend (TanStack Start)

Routes :
- `/` accueil (héro, bannières, catégories, produits vedettes, avantages)
- `/shop` catalogue avec filtres (catégorie, prix)
- `/product/$slug` fiche produit
- `/cart` panier
- `/checkout` (sans paiement réel dans un premier temps — juste enregistrement de la commande)
- `/account` compte utilisateur + historique
- `/admin` (rôle admin) gestion produits/commandes
- `/contact`, `/about`

Sélecteur de langue DE/FR/EN dans le header, stocké en localStorage + query param.

### 4. Design

- Palette : bleu foncé header + orange accent + vert logo (comme le site source, mais tokens sémantiques propres)
- Tokens définis dans `src/styles.css`
- Composants shadcn (Card, Button, Input, Sheet pour le panier drawer)

### 5. SEO & shell

- `head()` par route (title, description, og) en 3 langues via loader
- `sitemap.xml` généré à partir des produits en base
- `robots.txt`

## Ce que je vais faire ensuite

Si tu valides ce plan :
1. Activer Lovable Cloud
2. Créer le schéma DB + politiques RLS
3. Crawler le site source et importer le catalogue
4. Construire l'UI multilingue
5. Panier + checkout + admin

## Questions restantes

- OK pour l'approche "inspiré mais pas copie" ci-dessus ?
- **Paiement** : simple enregistrement de commande pour l'instant, ou tu veux Stripe intégré dès le départ ?
- **Limite d'import** : ~100 produits pour rester rapide, ou tu veux vraiment tout le catalogue (peut prendre bien plus de temps et de crédits Firecrawl) ?
