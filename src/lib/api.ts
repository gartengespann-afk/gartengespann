// Centralise les appels HTTP à l'API PHP et les erreurs présentées à l'utilisateur.
const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? "").replace(/\/+$/, "");

export async function apiRequest<T>(path: string, init: RequestInit = {}): Promise<T> {
  let response: Response;
  const headers = new Headers(init.headers);
  headers.set("Accept", "application/json");
  if (init.body) headers.set("Content-Type", "application/json");

  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      ...init,
      credentials: "include",
      headers,
    });
  } catch {
    const apiUrl = `${API_BASE_URL}${path}`;
    const pageOrigin = typeof window === "undefined" ? "inconnue" : window.location.origin;
    throw new Error(
      `Connexion à l’API impossible (${apiUrl}). Vérifiez que l’API PHP répond et que FRONTEND_ORIGIN dans .env correspond exactement à l’origine du site (${pageOrigin}).`,
    );
  }

  const contentType = response.headers.get("content-type") ?? "";
  const body = await response.text();

  let payload: unknown;
  try {
    payload = JSON.parse(body);
  } catch {
    if (!contentType.toLowerCase().includes("application/json")) {
      throw new Error(
        `L’API PHP n’a pas répondu en JSON (HTTP ${response.status}, ${response.url}). Vérifiez que cette URL est routée vers PHP.`,
      );
    }
    throw new Error(
      `La réponse JSON de l’API est invalide (HTTP ${response.status}). Consultez les journaux PHP/Apache.`,
    );
  }

  if (!response.ok) {
    const message =
      typeof payload === "object" &&
      payload !== null &&
      "message" in payload &&
      typeof payload.message === "string"
        ? payload.message
        : "La requête n'a pas pu aboutir.";
    throw new Error(message);
  }

  return payload as T;
}
