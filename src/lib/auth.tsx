import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type LocalUser = {
  id: string;
  email: string;
} | null;

type Ctx = { user: LocalUser; loading: boolean; signOut: () => Promise<void> };
const AuthContext = createContext<Ctx>({ user: null, loading: true, signOut: async () => {} });

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<LocalUser>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("auth_user");
    if (stored) {
      try { setUser(JSON.parse(stored)); } catch { localStorage.removeItem("auth_user"); }
    }
    setLoading(false);
  }, []);

  const signOut = async () => {
    localStorage.removeItem("auth_user");
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, loading, signOut }}>{children}</AuthContext.Provider>;
}

export function setLocalUser(email: string) {
  const user = { id: `local-${Date.now()}`, email };
  localStorage.setItem("auth_user", JSON.stringify(user));
  return user;
}

export const useAuth = () => useContext(AuthContext);
