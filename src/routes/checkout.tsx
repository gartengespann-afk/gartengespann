import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/lib/cart";
import { useAuth } from "@/lib/auth";
import { useLang } from "@/lib/i18n";
import { apiRequest } from "@/lib/api";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Bestellung abschließen – GARTEN-GESPANN" },
      {
        name: "description",
        content:
          "Geben Sie Ihre Lieferdaten ein und schließen Sie Ihre Bestellung sicher bei GARTEN-GESPANN ab.",
      },
    ],
  }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const { items, total, clear } = useCart();
  const { user, csrfToken, loading: authLoading } = useAuth();
  const { t } = useLang();
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [form, setForm] = useState({
    email: "",
    full_name: "",
    address: "",
    city: "",
    postal_code: "",
    country: "Deutschland",
    phone: "",
  });

  useEffect(() => {
    if (!user) return;
    setForm((prev) => ({
      ...prev,
      email: prev.email || user.email,
      full_name: prev.full_name || `${user.first_name} ${user.last_name}`.trim(),
    }));
  }, [user]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (items.length === 0) return;
    if (!csrfToken) {
      setSubmitError(t("reviewSessionError"));
      return;
    }

    setLoading(true);
    try {
      const response = await apiRequest<{ orderId: number; paymentUrl: string }>("/api/checkout.php", {
        method: "POST",
        headers: { "X-CSRF-Token": csrfToken },
        body: JSON.stringify({
          email: form.email.trim(),
          full_name: form.full_name.trim(),
          address: form.address.trim(),
          city: form.city.trim(),
          postal_code: form.postal_code.trim(),
          country: form.country.trim(),
          phone: form.phone.trim(),
          items: items.map((item) => ({
            slug: item.slug,
            quantity: item.quantity,
          })),
        }),
      });

      if (!response.paymentUrl) {
        throw new Error(t("errorGeneric"));
      }

      clear();
      window.location.href = response.paymentUrl;
    } catch (cause: unknown) {
      setSubmitError(cause instanceof Error ? cause.message : t("errorGeneric"));
      setLoading(false);
    }
  };

  const fields: Array<{ k: keyof typeof form; label: keyof typeof form | "fullName" | "postalCode"; req?: boolean }> = [
    { k: "email", label: "email", req: true },
    { k: "full_name", label: "fullName", req: true },
    { k: "address", label: "address", req: true },
    { k: "city", label: "city", req: true },
    { k: "postal_code", label: "postalCode", req: true },
    { k: "country", label: "country", req: true },
    { k: "phone", label: "phone" },
  ];

  const isSubmitDisabled = loading || authLoading || !csrfToken || items.length === 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageHeader title={t("checkout")} />
      <form
        onSubmit={submit}
        className="container mx-auto px-4 py-8 flex-1 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-6 md:gap-8"
      >
        <div className="min-w-0 space-y-4">
          {submitError && (
            <p role="alert" className="rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
              {submitError}
            </p>
          )}
          {fields.map(({ k, label, req }) => (
            <div key={k}>
              <Label htmlFor={k} className="text-sm md:text-base">{t(label as never)}</Label>
              <Input id={k} required={req} value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} />
            </div>
          ))}
        </div>
        <aside className="min-w-0 rounded-lg border p-4 md:p-6 bg-card h-fit lg:sticky lg:top-24">
          <h2 className="font-semibold mb-4 text-sm md:text-base">{t("subtotal")}</h2>
          {items.map((it) => (
            <div key={it.id} className="flex justify-between text-sm py-1 gap-2">
              <span className="truncate">{it.name} × {it.quantity}</span>
              <span className="shrink-0">{(it.price * it.quantity).toFixed(2)} €</span>
            </div>
          ))}
          <div className="flex justify-between font-bold text-base md:text-lg border-t pt-3 mt-3">
            <span>{t("total")}</span><span>{total.toFixed(2)} €</span>
          </div>
          <Button
            type="submit"
            disabled={isSubmitDisabled}
            size="lg"
            className="w-full mt-6 bg-accent text-accent-foreground hover:bg-accent/90"
          >
            {loading ? "..." : t("placeOrder")}
          </Button>
        </aside>
      </form>
      <Footer />
    </div>
  );
}