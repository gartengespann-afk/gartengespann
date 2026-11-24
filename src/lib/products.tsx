import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { apiRequest } from "@/lib/api";
import type { Product } from "@/lib/data";

type ProductsContextValue = {
  products: Product[];
  loading: boolean;
  error: string | null;
};

const ProductsContext = createContext<ProductsContextValue>({
  products: [],
  loading: true,
  error: null,
});

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    apiRequest<{ products: Product[] }>("/api/products.php")
      .then(({ products: loadedProducts }) => {
        if (!active) return;
        setProducts(loadedProducts);
        setError(null);
      })
      .catch((cause: unknown) => {
        if (active) {
          setError(cause instanceof Error ? cause.message : "Le catalogue n’a pas pu être chargé.");
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <ProductsContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductsContext.Provider>
  );
}

export const useProducts = () => useContext(ProductsContext);
