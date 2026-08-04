import { Link } from "@tanstack/react-router";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { useLang } from "@/lib/i18n";
import { Trash2 } from "lucide-react";

export function MiniCart() {
  const { items, updateQty, remove, total, isOpen, closeCart } = useCart();
  const { t } = useLang();

  return (
    <Sheet open={isOpen} onOpenChange={(open) => { if (!open) closeCart(); }}>
      <SheetContent className="flex flex-col w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>{t("cart")}</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
            <p className="text-muted-foreground mb-4">{t("emptyCart")}</p>
            <Button variant="outline" onClick={closeCart} asChild>
              <Link to="/shop">{t("continueShopping")}</Link>
            </Button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto space-y-3 py-4">
            {items.map((it) => (
              <div key={it.id} className="flex gap-3 rounded-lg border p-3 bg-card">
                {it.image && (
                  <img src={it.image} alt={it.name} className="h-16 w-16 rounded object-cover shrink-0" />
                )}
                <div className="flex-1 min-w-0">
                  <Link
                    to="/product/$slug"
                    params={{ slug: it.slug }}
                    onClick={closeCart}
                    className="font-medium text-sm hover:text-accent line-clamp-1"
                  >
                    {it.name}
                  </Link>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {it.price.toFixed(2)} € × {it.quantity}
                  </div>
                  <div className="font-bold text-sm mt-1">
                    {(it.price * it.quantity).toFixed(2)} €
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center border rounded text-xs">
                      <button className="px-1.5 py-0.5 hover:bg-muted" onClick={() => updateQty(it.id, it.quantity - 1)}>−</button>
                      <span className="px-2">{it.quantity}</span>
                      <button className="px-1.5 py-0.5 hover:bg-muted" onClick={() => updateQty(it.id, it.quantity + 1)}>+</button>
                    </div>
                    <button onClick={() => remove(it.id)} className="text-muted-foreground hover:text-destructive">
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {items.length > 0 && (
          <div className="border-t pt-4 space-y-3">
            <div className="flex justify-between text-sm">
              <span>{t("subtotal")}</span>
              <span className="font-bold">{total.toFixed(2)} €</span>
            </div>
            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="sm" asChild>
              <Link to="/cart" onClick={closeCart}>
                {t("viewCart")}
              </Link>
            </Button>
            <Button className="w-full" size="sm" asChild>
              <Link to="/checkout" onClick={closeCart}>
                {t("checkout")} →
              </Link>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
