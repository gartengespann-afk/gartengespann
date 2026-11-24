import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { useFavorites } from "@/lib/favorites";
import { useLang, pickName } from "@/lib/i18n";
import type { Product } from "@/lib/data";
import { ProductImage } from "@/components/site/ProductImage";
import { toast } from "sonner";
import { Heart } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  const { add, openCart } = useCart();
  const { slugs: favoriteSlugs, toggle } = useFavorites();
  const { lang, t } = useLang();
  const name = pickName(product, lang);
  const isFavorite = favoriteSlugs.includes(product.slug);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border bg-card transition-shadow hover:shadow-lg">
      <button
        type="button"
        onClick={() => {
          void toggle({
            slug: product.slug,
            name,
            price_eur: Number(product.price_eur),
            image_url: product.image_url,
          }).catch((cause: unknown) =>
            toast.error(cause instanceof Error ? cause.message : t("errorGeneric")),
          );
        }}
        aria-label={isFavorite ? t("removeFromWishlist") : t("addToWishlist")}
        aria-pressed={isFavorite}
        title={isFavorite ? t("removeFromWishlist") : t("addToWishlist")}
        className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border bg-background/90 shadow-sm transition-colors hover:bg-background"
      >
        <Heart
          className={`h-4 w-4 ${isFavorite ? "fill-red-500 text-red-500" : "text-foreground"}`}
        />
      </button>
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
        <ProductImage
          src={product.image_url}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          alt={name}
          width={600}
          height={600}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
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
