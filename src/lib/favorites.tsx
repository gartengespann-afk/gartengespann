import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { toast } from "sonner";
import { useAuth } from "@/lib/auth";
import { apiRequest } from "@/lib/api";
import { useLang } from "@/lib/i18n";

type FavoritesContextValue = {
  slugs: string[];
  toggle: (product: FavoriteProduct) => Promise<void>;
};

const FavoritesContext = createContext<FavoritesContextValue>({
  slugs: [],
  toggle: async () => {},
});

type FavoritesResponse = {
  favorites: Array<{ slug: string }>;
};

type ToggleFavoriteResponse = {
  favorite: boolean;
};

export type FavoriteProduct = {
  slug: string;
  name: string;
  price_eur: number;
  image_url: string | null;
};

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const { user, loading: authLoading, csrfToken } = useAuth();
  const { t, lang } = useLang();
  const [slugs, setSlugs] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (authLoading) return;
    let active = true;
    setLoaded(false);

    if (!user) {
      setSlugs([]);
      setLoaded(true);
      return () => {
        active = false;
      };
    }

    setSlugs([]);
    apiRequest<FavoritesResponse>("/api/favorites.php")
      .then((response) => {
        if (active) setSlugs(response.favorites.map((favorite) => favorite.slug));
      })
      .catch((cause: unknown) => {
        if (!active) return;
        console.error("Could not load account favorites.", cause);
        toast.error(cause instanceof Error ? cause.message : t("errorGeneric"));
      })
      .finally(() => {
        if (active) setLoaded(true);
      });

    return () => {
      active = false;
    };
  }, [user, authLoading, lang, t]);

  const toggle = async (product: FavoriteProduct) => {
    if (!loaded) throw new Error(t("loading"));
    if (!user) throw new Error(t("loginToFavorite"));

    const { slug } = product;
    const shouldBeFavorite = !slugs.includes(slug);
    const response = await apiRequest<ToggleFavoriteResponse>("/api/favorites.php", {
      method: "POST",
      headers: { "X-CSRF-Token": csrfToken },
      body: JSON.stringify({
        action: shouldBeFavorite ? "add" : "remove",
        slug,
        name: product.name,
        price_eur: product.price_eur,
        image_url: product.image_url,
      }),
    });

    setSlugs((previous) =>
      response.favorite
        ? previous.includes(slug)
          ? previous
          : [...previous, slug]
        : previous.filter((favoriteSlug) => favoriteSlug !== slug),
    );
  };

  return (
    <FavoritesContext.Provider value={{ slugs, toggle }}>{children}</FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);
