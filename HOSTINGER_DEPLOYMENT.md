# Déploiement sur Hostinger

Ce projet peut conserver TanStack Start comme application Node.js et utiliser l'API PHP avec MySQL. Sur Hostinger, `npm run build` sélectionne la configuration Node lorsque `HOSTINGER_BUILD=1` est défini. Sans cette variable, le build Lovable conserve sa configuration habituelle.

## Préparer la configuration

1. Copiez `.env.example` vers `.env` à la racine du projet. Ne publiez jamais ce fichier.
2. Dans `.env`, renseignez `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER` et `DB_PASSWORD` avec les valeurs affichées dans hPanel pour la base créée. Ne mettez jamais ces identifiants dans une variable `VITE_*`.
3. Pour une API servie sur le même domaine sous `/api`, `VITE_API_BASE_URL` peut être vide. Si le formulaire Hostinger exige une valeur, indiquez seulement l'origine publique (par exemple `https://example.com`), sans slash final ni `/api`. Les chemins de requête contiennent déjà `/api/...`. Cette variable est intégrée au JavaScript au moment du build.
4. Remplacez `FRONTEND_ORIGIN` par l'origine publique exacte, par exemple `https://example.com`, sans slash final. Dans les URLs de paiement, remplacez aussi ce domaine par le vôtre. Gardez les variables de paiement uniquement côté serveur. Le marqueur `{ORDER_ID}` est remplacé par le numéro de commande ; conservez `{CHECKOUT_SESSION_ID}` dans l'URL de succès pour que le paiement soit vérifié.
5. Dans les variables d'environnement de l'application Hostinger, ajoutez `HOSTINGER_BUILD=1`. Cette variable n'est pas secrète ; elle permet au script de build de sélectionner le preset Node malgré le wrapper Lovable.

## Construire et démarrer l'application Node

Choisissez une version de Node compatible avec Vite (Node 22 LTS est recommandée), puis configurez les commandes de l'application dans hPanel :

- Build : `npm run build`
- Fichier d'entrée : `server/index.mjs` dans le dossier `.output`

Le serveur Nitro écoute le port fourni par Hostinger (`PORT`). Le build crée `.output/server/index.mjs`; Hostinger démarre cette entrée avec ses réglages d'application.

## Publier l'API PHP sous `/api`

Les scripts PHP se trouvent dans `backend/api`. Hostinger doit exécuter PHP pour ce chemin et faire correspondre l'URL `https://example.com/api/...` à ces scripts (par exemple en publiant le contenu de `backend/api` dans le dossier web `api`, ou avec un routage Apache pris en charge par l'offre). Le fichier `.env` doit rester hors d'accès public, mais être lisible par PHP. `_bootstrap.php` cherche `.env` deux niveaux au-dessus du dossier API, puis dans son dossier parent ; placez-le à l'un de ces emplacements selon le chemin de déploiement.

La prise en charge Node.js et PHP ne garantit pas, à elle seule, que le serveur web partage un même domaine entre le proxy Node et les fichiers PHP. Après configuration, vérifiez directement `https://example.com/api/products.php` : la réponse doit être JSON, et non une page HTML de l'application. Si Hostinger envoie toutes les URLs du domaine vers Node ou ne permet pas de router `/api` vers PHP, il faudra une règle de routage prise en charge par Hostinger, ou héberger l'API sur un sous-domaine et configurer `VITE_API_BASE_URL` avec son origine. Dans ce dernier cas, `FRONTEND_ORIGIN` et les cookies/CORS devront également être configurés pour les deux origines.

Ne copiez pas le `.env` dans un dossier publiquement téléchargeable. Les fichiers `.htaccess` fournis interdisent l'indexation des répertoires et protègent les fichiers cachés et `_bootstrap.php` lorsque l'hébergement utilise Apache avec ces règles activées.

## Vérification après déploiement

1. Confirmez que `https://example.com/` affiche l'application.
2. Confirmez que `https://example.com/api/products.php` renvoie une réponse JSON.
3. Testez la connexion, la session et une requête qui modifie des données ; les cookies de session PHP doivent fonctionner sur le domaine public en HTTPS.
4. Consultez les journaux Node, PHP et Apache si l'application ne démarre pas ou si l'API renvoie une erreur.
