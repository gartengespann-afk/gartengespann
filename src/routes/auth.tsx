import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/auth";
import { useLang } from "@/lib/i18n";
import { apiRequest } from "@/lib/api";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Anmeldung und Registrierung – GARTEN-GESPANN" },
      {
        name: "description",
        content:
          "Melden Sie sich an, erstellen Sie ein Konto oder setzen Sie Ihr Passwort für Ihr Kundenkonto zurück.",
      },
    ],
  }),
  component: AuthPage,
});

type ForgotStep = "verify" | "reset" | "done";

function AuthPage() {
  const { user, loading: sessionLoading, error: sessionError, csrfToken, signIn, signUp } = useAuth();
  const navigate = useNavigate();
  const { t } = useLang();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [forgotStep, setForgotStep] = useState<ForgotStep | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [messageKind, setMessageKind] = useState<"success" | "error">("error");

  useEffect(() => {
    if (user) void navigate({ to: "/account" });
  }, [user, navigate]);

  const translateServerMessage = (text: string | null | undefined) => {
    if (!text) return "La requête n'a pas pu aboutir.";
    const map: Record<string, string> = {
      "Cette adresse e-mail n'est associée à aucun compte.": t("forgotEmailNotFound"),
      "Le nom ou le prénom ne correspond pas à cette adresse e-mail.": t("forgotIdentityMismatch"),
      "Identité vérifiée. Vous pouvez maintenant définir un nouveau mot de passe.": t("forgotIdentityVerified"),
      "Votre mot de passe a été modifié avec succès.": t("forgotPasswordResetSuccess"),
      "Les mots de passe ne correspondent pas.": t("passwordsDoNotMatch"),
      "Veuillez d’abord vérifier votre identité avant de réinitialiser votre mot de passe.": t("forgotVerifyRequired"),
      "La vérification a expiré. Veuillez recommencer la procédure de réinitialisation.": t("forgotVerificationExpired"),
      "Le mot de passe doit contenir entre 8 et 72 caractères.": t("forgotPasswordLength"),
      "Veuillez renseigner une adresse e-mail valide ainsi que votre nom et votre prénom.": t("forgotVerifyMissing"),
    };
    return map[text] ?? text;
  };

  const resetForgotFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const openForgotPassword = () => {
    setForgotStep("verify");
    setMode("signin");
    setMessage(null);
    setMessageKind("error");
    setPassword("");
    setConfirmPassword("");
  };

  const backToLogin = () => {
    setForgotStep(null);
    setMessage(null);
    setMessageKind("error");
    resetForgotFields();
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sessionLoading) return;
    setLoading(true);
    setMessage(null);
    setMessageKind("error");
    try {
      if (forgotStep === "verify") {
        const response = await apiRequest<{ message: string }>("/api/auth.php", {
          method: "POST",
          headers: { "X-CSRF-Token": csrfToken },
          body: JSON.stringify({
            action: "forgot_verify_identity",
            email,
            first_name: firstName,
            last_name: lastName,
          }),
        });
        setForgotStep("reset");
        setPassword("");
        setConfirmPassword("");
        setMessage(translateServerMessage(response.message));
        setMessageKind("success");
      } else if (forgotStep === "reset") {
        if (password !== confirmPassword) {
          throw new Error(t("passwordsDoNotMatch"));
        }
        const response = await apiRequest<{ message: string }>("/api/auth.php", {
          method: "POST",
          headers: { "X-CSRF-Token": csrfToken },
          body: JSON.stringify({
            action: "forgot_reset_password",
            password,
            confirm_password: confirmPassword,
          }),
        });
        setForgotStep("done");
        setPassword("");
        setConfirmPassword("");
        setMessage(translateServerMessage(response.message));
        setMessageKind("success");
      } else if (mode === "signup") {
        await signUp({ first_name: firstName, last_name: lastName, email, password });
        setMode("signin");
        setPassword("");
        setMessage(t("signupSuccess"));
        setMessageKind("success");
      } else {
        await signIn({ email, password });
        await navigate({ to: "/account" });
      }
    } catch (cause) {
      setMessage(translateServerMessage(cause instanceof Error ? cause.message : null));
      setMessageKind("error");
    } finally {
      setLoading(false);
    }
  };

  const changeMode = () => {
    setMode(mode === "signin" ? "signup" : "signin");
    setMessage(null);
    setMessageKind("error");
  };

  const successMessageValues = new Set([
    t("signupSuccess"),
    t("forgotIdentityVerified"),
    t("forgotPasswordResetSuccess"),
  ]);
  const isSuccess = messageKind === "success" || (message != null && successMessageValues.has(message));
  const title = forgotStep
    ? forgotStep === "done"
      ? t("passwordChangedTitle")
      : t("forgotPasswordTitle")
    : mode === "signin"
      ? t("login")
      : t("signup");
  const buttonLabel = forgotStep === "verify"
    ? t("verify")
    : forgotStep === "reset"
      ? t("resetPasswordButton")
      : loading || sessionLoading
        ? "..."
        : mode === "signin"
          ? t("login")
          : t("signup");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-16 flex-1">
        <div className="max-w-md mx-auto rounded-lg border bg-card p-8">
          <h1 className="text-2xl font-bold mb-6">{title}</h1>
          {(message || sessionError) && (
            <p
              className={`mb-4 rounded-md border p-3 text-sm ${
                isSuccess
                  ? "border-green-600/40 bg-green-600/10 text-green-700"
                  : "border-destructive/40 bg-destructive/10 text-destructive"
              }`}
              role={isSuccess ? "status" : "alert"}
            >
              {message ?? (sessionError ? translateServerMessage(sessionError) : null)}
            </p>
          )}

          {forgotStep === "done" ? (
            <div className="space-y-4">
              <Button
                type="button"
                onClick={backToLogin}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                {t("backToLogin")}
              </Button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              {forgotStep === "verify" && (
                <>
                  <div>
                    <Label htmlFor="forgot-email">{t("email")}</Label>
                    <Input
                      id="forgot-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="forgot-last-name">{t("lastName")}</Label>
                    <Input
                      id="forgot-last-name"
                      name="family-name"
                      autoComplete="family-name"
                      required
                      maxLength={100}
                      value={lastName}
                      onChange={(event) => setLastName(event.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="forgot-first-name">{t("firstName")}</Label>
                    <Input
                      id="forgot-first-name"
                      name="given-name"
                      autoComplete="given-name"
                      required
                      maxLength={100}
                      value={firstName}
                      onChange={(event) => setFirstName(event.target.value)}
                    />
                  </div>
                </>
              )}

              {forgotStep === "reset" && (
                <>
                  <div>
                    <Label htmlFor="new-password">{t("newPassword")}</Label>
                    <Input
                      id="new-password"
                      name="new-password"
                      type="password"
                      autoComplete="new-password"
                      required
                      minLength={8}
                      maxLength={72}
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="confirm-password">{t("confirmPassword")}</Label>
                    <Input
                      id="confirm-password"
                      name="confirm-password"
                      type="password"
                      autoComplete="new-password"
                      required
                      minLength={8}
                      maxLength={72}
                      value={confirmPassword}
                      onChange={(event) => setConfirmPassword(event.target.value)}
                    />
                  </div>
                </>
              )}

              {!forgotStep && mode === "signup" && (
                <>
                  <div>
                    <Label htmlFor="first-name">{t("firstName")}</Label>
                    <Input
                      id="first-name"
                      name="given-name"
                      autoComplete="given-name"
                      required
                      maxLength={100}
                      value={firstName}
                      onChange={(event) => setFirstName(event.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="last-name">{t("lastName")}</Label>
                    <Input
                      id="last-name"
                      name="family-name"
                      autoComplete="family-name"
                      required
                      maxLength={100}
                      value={lastName}
                      onChange={(event) => setLastName(event.target.value)}
                    />
                  </div>
                </>
              )}

              {!forgotStep && (
                <>
                  <div>
                    <Label htmlFor="email">{t("email")}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="password">{t("password")}</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete={mode === "signin" ? "current-password" : "new-password"}
                      required
                      minLength={8}
                      maxLength={72}
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                    {mode === "signup" && (
                      <p className="mt-1 text-xs text-muted-foreground">{t("passwordHint")}</p>
                    )}
                  </div>
                </>
              )}

              <Button
                type="submit"
                disabled={loading || sessionLoading || (!forgotStep && Boolean(sessionError))}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                {buttonLabel}
              </Button>
            </form>
          )}

          {!forgotStep && mode === "signin" && (
            <button
              type="button"
              onClick={openForgotPassword}
              className="mt-3 text-sm text-accent hover:underline w-full text-center"
            >
              {t("forgotPassword")}
            </button>
          )}

          {forgotStep ? (
            <button
              type="button"
              onClick={backToLogin}
              className="mt-4 text-sm text-accent hover:underline w-full text-center"
            >
              {t("backToLogin")}
            </button>
          ) : (
            <button
              type="button"
              onClick={changeMode}
              className="mt-4 text-sm text-accent hover:underline w-full text-center"
            >
              {mode === "signin" ? t("signup") : t("login")}
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
