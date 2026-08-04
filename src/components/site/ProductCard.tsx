import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { useLang, pickName } from "@/lib/i18n";
import { toast } from "sonner";

type Product = {
  id: string;
  slug: string;
  name_de: string;
  name_fr: string;
  name_en: string;
  price_eur: number;
  image_url: string | null;
  is_hot: boolean | null;
};

export function ProductCard({ product }: { product: Product }) {
  const { add, openCart } = useCart();
  const { lang, t } = useLang();
  const name = pickName(product, lang);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border bg-card transition-shadow hover:shadow-lg">
      {product.is_hot && (
        <div className="absolute top-3 left-3 z-10 w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
          <span className="text-white text-[10px] font-bold tracking-wide">{t("chaud")}</span>
        </div>
      )}
      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
        className="aspect-square overflow-hidden bg-muted"
      >
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-muted" />
        )}
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <Link
          to="/product/$slug"
          params={{ slug: product.slug }}
          className="line-clamp-2 text-sm font-medium hover:text-accent transition-colors min-h-[2.5rem]"
        >
          {name}
        </Link>
        <div className="mt-3 flex flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <span className="text-lg font-bold text-primary">{product.price_eur.toFixed(2)} €</span>
          <Button
            size="sm"
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto"
            onClick={() => {
              add({
                id: product.id,
                slug: product.slug,
                name,
                price: Number(product.price_eur),
                image: product.image_url ?? "",
              });
              openCart();
              toast.success(t("addToCart") + " ✓");
            }}
          >
            {t("addToCart")}
          </Button>
        </div>
      </div>
    </div>
  );
}