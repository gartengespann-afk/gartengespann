import { Link, createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, Download, LoaderCircle, XCircle } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/lib/api";
import { useAuth } from "@/lib/auth";
import { useLang } from "@/lib/i18n";

type VerifiedItem = {
  product_name: string;
  quantity: number;
  unit_price_eur: number;
};

type PaymentVerifyResponse = {
  verified: boolean;
  paymentStatus?: string;
  order?: {
    id: number;
    status: string;
    full_name: string;
    email: string;
    total_eur: number;
    paid_at: string | null;
    created_at: string;
  };
  items?: VerifiedItem[];
  message?: string;
};

export const Route = createFileRoute("/payment-success")({
  validateSearch: (search: Record<string, unknown>) => ({
    order: typeof search.order === "string" ? search.order : typeof search.order === "number" ? String(search.order) : "",
    session_id: typeof search.session_id === "string" ? search.session_id : "",
  }),
  head: () => ({
    meta: [
      { title: "Zahlungsbestätigung – GARTEN-GESPANN" },
      {
        name: "description",
        content:
          "Prüfen Sie den Zahlungsstatus, sehen Sie die Bestellübersicht ein und laden Sie Ihre Quittung herunter.",
      },
    ],
  }),
  component: PaymentSuccessPage,
});

function PaymentSuccessPage() {
  const { order: orderParam, session_id: sessionId } = Route.useSearch();
  const { csrfToken, loading: authLoading } = useAuth();
  const { t } = useLang();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<PaymentVerifyResponse | null>(null);

  const orderId = useMemo(() => {
    const parsed = Number(orderParam);
    return Number.isInteger(parsed) && parsed > 0 ? parsed : null;
  }, [orderParam]);

  useEffect(() => {
    if (authLoading) return;
    if (!orderId || !sessionId) {
      setError(t("paymentMissingInfo"));
      setLoading(false);
      return;
    }
    if (!csrfToken) {
      // attend l'initialisation de session/csrf
      return;
    }

    let cancelled = false;
    const verify = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await apiRequest<PaymentVerifyResponse>("/api/payment.php?action=verify", {
          method: "POST",
          headers: { "X-CSRF-Token": csrfToken },
          body: JSON.stringify({ order_id: orderId, session_id: sessionId }),
        });
        if (!cancelled) {
          setResult(response);
          if (!response.verified) {
            setError(response.message || t("paymentNotConfirmedDesc"));
          }
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : t("paymentNotConfirmedDesc"));
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    void verify();
    return () => {
      cancelled = true;
    };
  }, [authLoading, csrfToken, orderId, sessionId, t]);

  const verified = !!result?.verified;
  const apiBase = (import.meta.env.VITE_API_BASE_URL ?? "").replace(/\/+$/, "");
  const receiptUrl = orderId && sessionId
    ? `${apiBase}/api/payment.php?action=receipt&order_id=${encodeURIComponent(String(orderId))}&session_id=${encodeURIComponent(sessionId)}`
    : "";

  const retry = () => {
    if (!orderId || !sessionId || !csrfToken) return;
    setLoading(true);
    setError(null);
    void apiRequest<PaymentVerifyResponse>("/api/payment.php?action=verify", {
      method: "POST",
      headers: { "X-CSRF-Token": csrfToken },
      body: JSON.stringify({ order_id: orderId, session_id: sessionId }),
    })
      .then((response) => {
        setResult(response);
        if (!response.verified) {
          setError(response.message || t("paymentNotConfirmedDesc"));
        }
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : t("paymentNotConfirmedDesc"));
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-10 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
          {loading ? (
            <div className="flex flex-col items-center gap-3 py-8 text-center">
              <LoaderCircle className="h-10 w-10 animate-spin text-primary" />
              <h1 className="font-serif text-2xl font-semibold text-foreground">{t("paymentVerifying")}</h1>
              <p className="max-w-xl text-sm text-muted-foreground">{t("paymentVerifyingDesc")}</p>
            </div>
          ) : verified && result?.order ? (
            <div className="space-y-6">
              <div className="flex flex-col items-center gap-3 text-center">
                <CheckCircle2 className="h-12 w-12 text-green-600" />
                <h1 className="font-serif text-3xl font-semibold text-foreground">{t("paymentConfirmed")}</h1>
                <p className="max-w-xl text-sm text-muted-foreground">{t("paymentConfirmedDesc")}</p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm text-muted-foreground">{t("orderNumber")}</p>
                    <p className="text-lg font-semibold text-foreground">#{result.order.id}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">{t("paymentAmountPaid")}</p>
                    <p className="text-xl font-bold text-primary">{result.order.total_eur.toFixed(2)} €</p>
                  </div>
                </div>

                {Array.isArray(result.items) && result.items.length > 0 && (
                  <div className="mt-5">
                    <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                      {t("cart")}
                    </h2>
                    <ul className="divide-y divide-border rounded-xl border border-border">
                      {result.items.map((item, index) => (
                        <li key={`${item.product_name}-${index}`} className="flex items-center justify-between gap-4 px-4 py-3 text-sm">
                          <span className="font-medium text-foreground">{item.product_name}</span>
                          <span className="shrink-0 text-muted-foreground">
                            {t("quantity")}: {item.quantity}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                {receiptUrl && (
                  <Button asChild>
                    <a href={receiptUrl} download>
                      <Download className="mr-2 h-4 w-4" />
                      {t("paymentReceiptDownload")}
                    </a>
                  </Button>
                )}
                <Button variant="outline" asChild>
                  <Link to="/shop">{t("paymentBackToShop")}</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link to="/account">{t("paymentBackToAccount")}</Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <XCircle className="h-12 w-12 text-destructive" />
              <h1 className="font-serif text-2xl font-semibold text-foreground">{t("paymentNotConfirmed")}</h1>
              <p className="max-w-xl text-sm text-muted-foreground">{error || t("paymentNotConfirmedDesc")}</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button onClick={retry} disabled={!csrfToken || !orderId || !sessionId || loading}>
                  {t("paymentRetry")}
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/shop">{t("paymentBackToShop")}</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
