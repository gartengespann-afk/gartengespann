<?php
declare(strict_types=1);

// Configure des réponses JSON et une session de navigateur protégée.
ini_set('display_errors', '0');
ini_set('log_errors', '1');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: strict-origin-when-cross-origin');

// Charge le .env placé à la racine du projet ou à la racine du site déployé.
$envPaths = [
    dirname(__DIR__, 2) . DIRECTORY_SEPARATOR . '.env',
    dirname(__DIR__) . DIRECTORY_SEPARATOR . '.env',
];
$envPath = null;
foreach ($envPaths as $candidate) {
    if (is_file($candidate) && is_readable($candidate)) {
        $envPath = $candidate;
        break;
    }
}

if ($envPath === null) {
    error_log('Configuration manquante : le fichier .env est introuvable.');
    api_json(['message' => 'Le service est momentanément indisponible.'], 500);
}

foreach (file($envPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) ?: [] as $line) {
    $line = trim($line);
    if ($line === '' || str_starts_with($line, '#') || !str_contains($line, '=')) {
        continue;
    }

    [$key, $value] = explode('=', $line, 2);
    $key = trim($key);
    $value = trim($value);
    if (strlen($value) >= 2 && (($value[0] === '"' && substr($value, -1) === '"') || ($value[0] === "'" && substr($value, -1) === "'"))) {
        $value = substr($value, 1, -1);
    }
    if ($key !== '') {
        $_ENV[$key] = $value;
    }
}

// Autorise uniquement l'origine de développement configurée pour le front.
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowedOrigin = $_ENV['FRONTEND_ORIGIN'] ?? '';
header('Vary: Origin');
if ($origin !== '' && $allowedOrigin !== '' && hash_equals($allowedOrigin, $origin)) {
    header('Access-Control-Allow-Origin: ' . $allowedOrigin);
    header('Access-Control-Allow-Credentials: true');
}

if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
    if ($origin === '' || $allowedOrigin === '' || !hash_equals($allowedOrigin, $origin)) {
        api_json(['message' => 'Origine non autorisée.'], 403);
    }
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Accept, Content-Type, X-CSRF-Token');
    http_response_code(204);
    exit;
}

// Ouvre une connexion MySQL utilisant des requêtes préparées natives.
function api_db(): PDO
{
    static $pdo = null;
    if ($pdo instanceof PDO) {
        return $pdo;
    }

    $host = $_ENV['DB_HOST'] ?? '';
    $port = $_ENV['DB_PORT'] ?? '3306';
    $name = $_ENV['DB_NAME'] ?? '';
    $user = $_ENV['DB_USER'] ?? '';
    $password = $_ENV['DB_PASSWORD'] ?? '';
    if ($host === '' || $name === '' || $user === '') {
        error_log('Configuration de base de données incomplète.');
        api_json(['message' => 'Le service est momentanément indisponible.'], 500);
    }

    try {
        $pdo = new PDO(
            "mysql:host={$host};port={$port};dbname={$name};charset=utf8mb4",
            $user,
            $password,
            [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
            ]
        );
    } catch (Throwable $error) {
        error_log('Connexion MySQL impossible : ' . $error->getMessage());
        api_json(['message' => 'Le service est momentanément indisponible.'], 500);
    }

    return $pdo;
}

// Termine la requête avec un statut HTTP et une réponse JSON homogène.
function api_json(array $payload, int $status = 200): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

// N’ouvre une session que pour les routes qui en ont réellement besoin.
function api_start_session(): void
{
    if (session_status() === PHP_SESSION_ACTIVE) {
        return;
    }

    session_set_cookie_params([
        'lifetime' => 0,
        'path' => '/',
        'secure' => !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off',
        'httponly' => true,
        'samesite' => 'Strict',
    ]);
    ini_set('session.use_strict_mode', '1');
    ini_set('session.use_only_cookies', '1');

    if (!session_start()) {
        error_log('Impossible de démarrer la session PHP.');
        api_json(['message' => 'Votre session ne peut pas être ouverte. Rechargez la page et réessayez.'], 500);
    }
}

// Lit et valide un corps JSON d'objet.
function api_input(): array
{
    $input = json_decode(file_get_contents('php://input') ?: '', true);
    if (!is_array($input)) {
        api_json(['message' => 'La requête est invalide.'], 400);
    }
    return $input;
}

// Contrôle le jeton CSRF avant chaque opération qui modifie des données.
function api_require_csrf(): void
{
    api_start_session();
    $provided = $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '';
    $expected = $_SESSION['csrf_token'] ?? '';
    if (!is_string($provided) || !is_string($expected) || $expected === '' || !hash_equals($expected, $provided)) {
        api_json(['message' => 'Votre session a expiré. Rechargez la page et réessayez.'], 403);
    }
}

// Retourne un profil public à partir de l'identifiant conservé en session.
function api_current_user(): ?array
{
    api_start_session();
    $id = $_SESSION['user_id'] ?? null;
    if (!is_int($id) && !(is_string($id) && ctype_digit($id))) {
        return null;
    }

    $statement = api_db()->prepare('SELECT id, first_name, last_name, email FROM users WHERE id = :id LIMIT 1');
    $statement->execute(['id' => (int) $id]);
    $user = $statement->fetch();
    if (!$user) {
        unset($_SESSION['user_id']);
        return null;
    }

    return [
        'id' => (int) $user['id'],
        'first_name' => $user['first_name'],
        'last_name' => $user['last_name'],
        'email' => $user['email'],
    ];
}

// Crée un jeton CSRF cryptographiquement aléatoire pour la session.
function api_csrf_token(): string
{
    api_start_session();
    if (!isset($_SESSION['csrf_token']) || !is_string($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}
