# Connexion à la base de données WAMP

Ce projet utilise une API PHP minimale dans `backend/api` pour se connecter à MySQL depuis WAMP.

## 1. Préparer la base de données

1. Démarrez WAMP et vérifiez que les services Apache et MySQL sont actifs.
2. Pour WAMP local, renseignez `DB_HOST=localhost`, `DB_PORT=3306`, `DB_NAME=ggs`, `DB_USER=root` et laissez `DB_PASSWORD` vide sauf si un mot de passe MySQL a été défini.
3. Pour une nouvelle installation uniquement, importez `database.sql`. Le script crée les tables manquantes, mais ne supprime pas les données existantes. Si des données sont déjà présentes, l'administrateur, le catalogue et la commande de démonstration ne sont pas réinsérés.
4. Pour une base déjà utilisée, ne réimportez pas `database.sql` ; appliquez les migrations décrites ci-dessous, puis ajoutez seulement les données initiales indispensables qui manquent encore.

Le compte de démonstration est `test@example.com`, mot de passe `password`. Changez-le ou supprimez-le avant toute utilisation réelle.

## 2. Configurer les accès

1. Copiez `.env.example` vers `.env` à la racine du projet.
2. Renseignez `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER` et `DB_PASSWORD` selon votre installation WAMP. Pour WAMP local avec la base `ggs`, utilisez `DB_HOST=localhost`, `DB_PORT=3306`, `DB_NAME=ggs`, `DB_USER=root` et laissez `DB_PASSWORD` vide sauf si vous avez défini un mot de passe MySQL.
3. Sur une installation WAMP locale, MySQL utilise souvent `root` sans mot de passe. En production, créez un compte dédié avec des privilèges minimaux.

## 3. Publier l'API PHP dans WAMP

1. Par défaut, le projet attend l'API sur `/api` (alias Apache).
2. Créez l'alias Apache `C:\wamp64\alias\ggs-api.conf` s'il n'existe pas :

   ```apache
   Alias /api "d:/site ecom/clone-concierge-app-main/backend/api"

   <Directory "d:/site ecom/clone-concierge-app-main/backend/api">
       Options -Indexes +FollowSymLinks
       AllowOverride None
       Require local
   </Directory>
   ```

   Si vous publiez le frontend sur un autre hôte, remplacez `Require local` par une règle adaptée et redémarrez WAMP.
3. Si vous publiez plutôt tout le projet sous le DocumentRoot de WAMP, vous pouvez utiliser `VITE_API_BASE_URL=` dans `.env`.
4. Vérifiez que PHP est actif dans WAMP et que `extension=pdo_mysql` est activée.
5. Après toute modification d'Apache ou de `.env`, redémarrez WAMP, puis testez `http://localhost/api/auth.php?action=me`.

## 4. Démarrer l'application

1. Avec l'API WAMP accessible à `http://localhost/api`, définissez `VITE_API_BASE_URL=http://localhost`. Les chemins d'API contiennent déjà `/api`; ne mettez pas `/api` dans cette variable.
2. Définissez `FRONTEND_ORIGIN` avec l'URL exacte du front (par exemple `http://localhost:8080`).
3. Le navigateur appelle directement Apache/WAMP ; gardez WAMP démarré et vérifiez que l'alias `/api` pointe vers `backend/api`.
4. Lancez le front avec `npm run dev`.
5. Pour les routes `/auth`, `/account`, `/contact` et `/checkout` (soumission de commande), le navigateur contacte l'API PHP, qui lit et écrit dans MySQL via PDO. Les produits, catégories et avis publics utilisent encore le catalogue local (`src/lib/data.ts`) comme solution de secours lorsque l'API n'est pas disponible.

## 5. Protéger la configuration

- Ne versionnez jamais `.env`.
- Ne placez pas vos identifiants MySQL dans `VITE_*` ni dans un fichier front-end.
- Limitez les droits de l'utilisateur MySQL au strict nécessaire (`SELECT`, `INSERT`, `UPDATE`, `DELETE` sur la base utilisée).