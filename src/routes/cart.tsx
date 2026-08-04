import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { useLang } from "@/lib/i18n";
import { Trash2 } from "lucide-react";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Panier — GARTEN-GESPANN" }] }),
  component: CartPage,
});

function CartPage() {
  const { items, updateQty, remove, total } = useCart();
  const { t } = useLang();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageHeader title={t("cart")} />
      <div className="container mx-auto px-4 py-8 flex-1">
        {items.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground mb-4">{t("emptyCart")}</p>
            <Link to="/shop"><Button>{t("continueShopping")}</Button></Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_360px] gap-6 md:gap-8">
            <div className="space-y-3">
              {items.map((it) => (
                <div key={it.id} className="flex gap-3 md:gap-4 rounded-lg border p-3 md:p-4 bg-card">
                  {it.image && <img src={it.image} alt={it.name} className="h-20 w-20 md:h-24 md:w-24 rounded object-cover shrink-0" />}
                  <div className="flex-1 min-w-0">
                    <Link to="/product/$slug" params={{ slug: it.slug }} className="font-medium text-sm md:text-base hover:text-accent line-clamp-2">
                      {it.name}
                    </Link>
                    <div className="text-sm text-muted-foreground mt-1">{it.price.toFixed(2)} €</div>
                    <div className="mt-2 flex items-center gap-3">
                      <div className="flex items-center border rounded">
                        <button className="px-2 py-1 hover:bg-muted text-sm" onClick={() => updateQty(it.id, it.quantity - 1)}>−</button>
                        <span className="px-3 text-sm">{it.quantity}</span>
                        <button className="px-2 py-1 hover:bg-muted text-sm" onClick={() => updateQty(it.id, it.quantity + 1)}>+</button>
                      </div>
                      <button onClick={() => remove(it.id)} className="text-muted-foreground hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="font-bold text-sm md:text-base shrink-0">{(it.price * it.quantity).toFixed(2)} €</div>
                </div>
              ))}
            </div>
            <aside className="rounded-lg border p-5 md:p-6 bg-card h-fit sticky lg:top-24">
              <div className="flex justify-between mb-2 text-sm"><span>{t("subtotal")}</span><span>{total.toFixed(2)} €</span></div>
              <div className="flex justify-between font-bold text-base md:text-lg border-t pt-3 mt-3"><span>{t("total")}</span><span>{total.toFixed(2)} €</span></div>
              <Button className="w-full mt-6 bg-accent text-accent-foreground hover:bg-accent/90" size="lg" onClick={() => navigate({ to: "/checkout" })}>{t("checkout")} →</Button>
            </aside>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}