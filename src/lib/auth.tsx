import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { apiRequest } from "@/lib/api";

export type AuthUser = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
};

type Credentials = { email: string; password: string };
type Registration = Credentials & { first_name: string; last_name: string };
type AuthResponse = { message: string; user: AuthUser };
type RegistrationResponse = { message: string };
type SessionResponse = { authenticated: boolean; user: AuthUser | null; csrfToken: string };
let sessionRequest: Promise<SessionResponse> | null = null;

function getSession(): Promise<SessionResponse> {
  if (!sessionRequest) {
    sessionRequest = apiRequest<SessionResponse>("/api/auth.php?action=me").finally(() => {
      sessionRequest = null;
    });
  }
  return sessionRequest;
}

type Ctx = {
  user: AuthUser | null;
  loading: boolean;
  csrfToken: string;
  error: string | null;
  signIn: (credentials: Credentials) => Promise<void>;
  signUp: (registration: Registration) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<Ctx>({
  user: null,
  loading: true,
  csrfToken: "",
  error: null,
  signIn: async () => {},
  signUp: async () => {},
  signOut: async () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [csrfToken, setCsrfToken] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    getSession()
      .then((session) => {
        if (!active) return;
        setUser(session.user);
        setCsrfToken(session.csrfToken);
        setError(null);
      })
      .catch((cause: unknown) => {
        if (active)
          setError(cause instanceof Error ? cause.message : "Impossible de vérifier la session.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const signIn = useCallback(
    async (credentials: Credentials) => {
      const response = await apiRequest<AuthResponse>("/api/auth.php", {
        method: "POST",
        headers: { "X-CSRF-Token": csrfToken },
        body: JSON.stringify({ ...credentials, action: "login" }),
      });
      setUser(response.user);
      setError(null);
    },
    [csrfToken],
  );

  const signUp = useCallback(
    async (registration: Registration) => {
      const response = await apiRequest<RegistrationResponse>("/api/auth.php", {
        method: "POST",
        headers: { "X-CSRF-Token": csrfToken },
        body: JSON.stringify({ ...registration, action: "register" }),
      });
      if (!response.message) {
        throw new Error("L’inscription a réussi, mais le serveur n’a pas confirmé le résultat.");
      }
    },
    [csrfToken],
  );

  const signOut = useCallback(async () => {
    const response = await apiRequest<{ message: string; csrfToken: string }>("/api/auth.php", {
      method: "POST",
      headers: { "X-CSRF-Token": csrfToken },
      body: JSON.stringify({ action: "logout" }),
    });
    setCsrfToken(response.csrfToken);
    setUser(null);
    setError(null);
  }, [csrfToken]);

  return (
    <AuthContext.Provider value={{ user, loading, csrfToken, error, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
