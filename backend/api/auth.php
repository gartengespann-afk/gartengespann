<?php
declare(strict_types=1);

require_once __DIR__ . '/_bootstrap.php';

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
if ($method === 'GET') {
    if (($_GET['action'] ?? '') !== 'me') {
        header('Allow: GET, POST');
        api_json(['message' => 'Cette action est inconnue.'], 404);
    }
    $user = api_current_user();
    api_json([
        'authenticated' => $user !== null,
        'user' => $user,
        'csrfToken' => api_csrf_token(),
    ]);
}

if ($method !== 'POST') {
    header('Allow: GET, POST');
    api_json(['message' => 'Méthode non autorisée.'], 405);
}

api_require_csrf();
$input = api_input();
$action = $input['action'] ?? '';
$pdo = api_db();

if ($action === 'register') {
    $firstName = trim((string) ($input['first_name'] ?? ''));
    $lastName = trim((string) ($input['last_name'] ?? ''));
    $email = strtolower(trim((string) ($input['email'] ?? '')));
    $password = (string) ($input['password'] ?? '');

    if (
        $firstName === '' || strlen($firstName) > 100 ||
        $lastName === '' || strlen($lastName) > 100 ||
        !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 254 ||
        strlen($password) < 8 || strlen($password) > 72
    ) {
        api_json(['message' => 'Vérifiez les champs : nom et prénom requis, e-mail valide et mot de passe de 8 à 72 caractères.'], 422);
    }

    try {
        $statement = $pdo->prepare(
            'INSERT INTO users (first_name, last_name, email, password_hash) VALUES (:first_name, :last_name, :email, :password_hash)'
        );
        $statement->execute([
            'first_name' => $firstName,
            'last_name' => $lastName,
            'email' => $email,
            'password_hash' => password_hash($password, PASSWORD_DEFAULT),
        ]);
    } catch (PDOException $error) {
        if ($error->getCode() === '23000') {
            api_json(['message' => 'Un compte utilise déjà cette adresse e-mail.'], 409);
        }
        error_log('Échec de création de compte : ' . $error->getMessage());
        api_json(['message' => 'Inscription impossible pour le moment. Réessayez plus tard.'], 500);
    }

    api_json([
        'message' => 'Votre inscription a réussi. Vous pouvez maintenant vous connecter.',
    ], 201);
}

if ($action === 'login') {
    $email = strtolower(trim((string) ($input['email'] ?? '')));
    $password = (string) ($input['password'] ?? '');
    if (!filter_var($email, FILTER_VALIDATE_EMAIL) || $password === '' || strlen($password) > 72) {
        api_json(['message' => 'Adresse e-mail ou mot de passe incorrect.'], 401);
    }

    $statement = $pdo->prepare('SELECT id, password_hash FROM users WHERE email = :email LIMIT 1');
    $statement->execute(['email' => $email]);
    $account = $statement->fetch();
    if (!$account || !password_verify($password, $account['password_hash'])) {
        api_json(['message' => 'Adresse e-mail ou mot de passe incorrect.'], 401);
    }

    session_regenerate_id(true);
    $_SESSION['user_id'] = (int) $account['id'];
    api_json([
        'message' => 'Connexion réussie.',
        'user' => api_current_user(),
    ]);
}

if ($action === 'logout') {
    unset($_SESSION['user_id'], $_SESSION['csrf_token']);
    session_regenerate_id(true);
    api_json([
        'message' => 'Vous êtes déconnecté.',
        'csrfToken' => api_csrf_token(),
    ]);
}

if ($action === 'forgot_verify_identity') {
    $email = strtolower(trim((string) ($input['email'] ?? '')));
    $firstName = trim((string) ($input['first_name'] ?? ''));
    $lastName = trim((string) ($input['last_name'] ?? ''));

    if (!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 254 || $firstName === '' || $lastName === '') {
        api_json(['message' => 'Veuillez renseigner une adresse e-mail valide ainsi que votre nom et votre prénom.'], 422);
    }

    $statement = $pdo->prepare('SELECT id, first_name, last_name, email FROM users WHERE email = :email LIMIT 1');
    $statement->execute(['email' => $email]);
    $account = $statement->fetch();
    if (!$account) {
        api_json(['message' => "Cette adresse e-mail n'est associée à aucun compte."], 404);
    }

    if ($firstName !== (string) $account['first_name'] || $lastName !== (string) $account['last_name']) {
        api_json(['message' => "Le nom ou le prénom ne correspond pas à cette adresse e-mail."], 422);
    }

    api_start_session();
    $_SESSION['password_reset'] = [
        'user_id' => (int) $account['id'],
        'email' => (string) $account['email'],
        'verified_at' => time(),
    ];

    api_json([
        'message' => 'Identité vérifiée. Vous pouvez maintenant définir un nouveau mot de passe.',
    ]);
}

if ($action === 'forgot_reset_password') {
    $password = (string) ($input['password'] ?? '');
    $confirmPassword = (string) ($input['confirm_password'] ?? '');
    $reset = $_SESSION['password_reset'] ?? null;

    if (!is_array($reset) || !isset($reset['user_id'], $reset['verified_at'])) {
        api_json(['message' => 'Veuillez d’abord vérifier votre identité avant de réinitialiser votre mot de passe.'], 403);
    }

    $verifiedAt = (int) $reset['verified_at'];
    if ($verifiedAt < time() - 900) {
        unset($_SESSION['password_reset']);
        api_json(['message' => 'La vérification a expiré. Veuillez recommencer la procédure de réinitialisation.'], 403);
    }

    if (strlen($password) < 8 || strlen($password) > 72) {
        api_json(['message' => 'Le mot de passe doit contenir entre 8 et 72 caractères.'], 422);
    }
    if ($password !== $confirmPassword) {
        api_json(['message' => 'Les mots de passe ne correspondent pas.'], 422);
    }

    $statement = $pdo->prepare('UPDATE users SET password_hash = :password_hash WHERE id = :id');
    $statement->execute([
        'password_hash' => password_hash($password, PASSWORD_DEFAULT),
        'id' => (int) $reset['user_id'],
    ]);

    unset($_SESSION['password_reset']);
    session_regenerate_id(true);

    api_json([
        'message' => 'Votre mot de passe a été modifié avec succès.',
    ]);
}
api_json(['message' => 'Cette action est inconnue.'], 400);