<?php
declare(strict_types=1);

require_once __DIR__ . '/_bootstrap.php';

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
if ($method !== 'POST') {
    header('Allow: POST');
    api_json(['message' => 'Méthode non autorisée.'], 405);
}

api_require_csrf();
$input = api_input();

$name = $input['name'] ?? null;
$email = $input['email'] ?? null;
$subject = $input['subject'] ?? null;
$message = $input['message'] ?? null;

if (
    !is_string($name) || trim($name) === '' || strlen(trim($name)) > 150 ||
    !is_string($email) || !filter_var(trim($email), FILTER_VALIDATE_EMAIL) || strlen(trim($email)) > 254 ||
    !is_string($subject) || trim($subject) === '' || strlen(trim($subject)) > 255 ||
    !is_string($message) || trim($message) === '' || strlen(trim($message)) > 10000
) {
    api_json(['message' => 'Vérifiez votre nom, votre adresse e-mail, le sujet et votre message.'], 422);
}

try {
    $statement = api_db()->prepare(
        'INSERT INTO contact_messages (name, email, subject, message)
         VALUES (:name, :email, :subject, :message)'
    );
    $statement->execute([
        'name' => trim($name),
        'email' => trim($email),
        'subject' => trim($subject),
        'message' => trim($message),
    ]);

    api_json(['message' => 'Votre message a bien été envoyé.'], 201);
} catch (Throwable $error) {
    error_log('Échec d’enregistrement du message de contact : ' . $error->getMessage());
    api_json(['message' => 'Votre message n’a pas pu être envoyé. Réessayez plus tard.'], 500);
}
