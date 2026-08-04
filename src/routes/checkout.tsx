import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/lib/cart";
import { useAuth } from "@/lib/auth";
import { useLang } from "@/lib/i18n";
import { saveOrder } from "@/lib/data";
import { toast } from "sonner";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Commande — GARTEN-GESPANN" }] }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const { items, total, clear } = useCart();
  const { user } = useAuth();
  const { t } = useLang();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: user?.email ?? "",
    full_name: "", address: "", city: "", postal_code: "", country: "Deutschland", phone: "",
  });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    setLoading(true);
    saveOrder({
      email: form.email,
      full_name: form.full_name,
      address: form.address,
      city: form.city,
      postal_code: form.postal_code,
      country: form.country,
      phone: form.phone ?? null,
      notes: null,
      total_eur: total,
      order_items: items.map((it) => ({
        product_name: it.name,
        unit_price_eur: it.price,
        quantity: it.quantity,
      })),
    });
    clear();
    toast.success(t("orderConfirmed"));
    navigate({ to: "/" });
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageHeader title={t("checkout")} />
      <form onSubmit={submit} className="container mx-auto px-4 py-8 flex-1 grid lg:grid-cols-[1fr_360px] gap-6 md:gap-8">
        <div className="space-y-4 order-2 lg:order-1">
          {fields.map(({ k, label, req }) => (
            <div key={k}>
              <Label htmlFor={k} className="text-sm md:text-base">{t(label as never)}</Label>
              <Input id={k} required={req} value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} />
            </div>
          ))}
          <div className="lg:hidden">
            <Button type="submit" disabled={loading} size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              {loading ? "..." : t("placeOrder")}
            </Button>
          </div>
        </div>
        <aside className="rounded-lg border p-5 md:p-6 bg-card h-fit sticky lg:top-24 order-1 lg:order-2">
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
          <Button type="submit" disabled={loading} size="lg" className="hidden lg:flex w-full mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
            {loading ? "..." : t("placeOrder")}
          </Button>
        </aside>
      </form>
      <Footer />
    </div>
  );
}