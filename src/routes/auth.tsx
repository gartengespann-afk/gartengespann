import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth, setLocalUser } from "@/lib/auth";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/auth")({
  head: () => ({ meta: [{ title: "Anmelden — GARTEN-GESPANN" }] }),
  component: AuthPage,
});

function AuthPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { t } = useLang();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => { if (user) navigate({ to: "/account" }); }, [user, navigate]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    setLocalUser(email);
    navigate({ to: "/account" });
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-16 flex-1">
        <div className="max-w-md mx-auto rounded-lg border bg-card p-8">
          <h1 className="text-2xl font-bold mb-6">{mode === "signin" ? t("login") : t("signup")}</h1>
          <form onSubmit={submit} className="space-y-4">
            <div>
              <Label htmlFor="e">{t("email")}</Label>
              <Input id="e" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="p">{t("password")}</Label>
              <Input id="p" type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Button type="submit" disabled={loading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              {loading ? "..." : mode === "signin" ? t("login") : t("signup")}
            </Button>
          </form>
          <button
            type="button"
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            className="mt-4 text-sm text-accent hover:underline w-full text-center"
          >
            {mode === "signin" ? t("signup") : t("login")}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}