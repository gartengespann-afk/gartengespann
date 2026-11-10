import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProductCard } from "@/components/site/ProductCard";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang, pickName } from "@/lib/i18n";
import { products as allProducts, categories as allCategories } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const searchSchema = z.object({ category: z.string().optional(), q: z.string().optional() });

export const Route = createFileRoute("/shop")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Boutique — GARTEN-GESPANN" },
      { name: "description", content: "Catalogue complet : remorques, tondeuses, tronçonneuses, bois de chauffage." },
      { property: "og:title", content: "Boutique — GARTEN-GESPANN" },
      { property: "og:description", content: "Découvrez notre catalogue complet." },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const { category, q } = Route.useSearch();
  const { t, lang } = useLang();
  const [filterOpen, setFilterOpen] = useState(false);

  const categories = allCategories;

  const products = allProducts.filter((p) => {
    if (category && p.category_id) {
      const cat = allCategories.find((c) => c.slug === category);
      if (cat && p.category_id !== cat.id) return false;
    }
    if (q) {
      const name = pickName(p, lang).toLowerCase();
      if (!name.includes(q.toLowerCase())) return false;
    }
    return true;
  }).sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageHeader title={q ? `\u201c${q}\u201d` : t("shop")} />
      <div className="container mx-auto px-4 py-8 flex-1">

        <div className="grid md:grid-cols-[240px_1fr] gap-6 md:gap-8">
          <aside>
            <button
              className="flex md:hidden items-center justify-between w-full font-semibold text-sm uppercase tracking-wide mb-3 p-3 rounded-lg border bg-card"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              {t("filterByCategory")}
              {filterOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            <div className={`${filterOpen ? "block" : "hidden"} md:block`}>
              <div className="hidden md:block font-semibold mb-3 text-sm uppercase tracking-wide">{t("filterByCategory")}</div>
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/shop"
                    search={{ q }}
                    onClick={() => setFilterOpen(false)}
                    className={`block px-3 py-2 rounded text-sm ${!category ? "bg-accent text-accent-foreground font-medium" : "hover:bg-muted"}`}
                  >
                    {t("all")}
                  </Link>
                </li>
                {categories.map((c) => (
                  <li key={c.id}>
                    <Link
                      to="/shop"
                      search={{ category: c.slug, q }}
                      onClick={() => setFilterOpen(false)}
                      className={`block px-3 py-2 rounded text-sm ${category === c.slug ? "bg-accent text-accent-foreground font-medium" : "hover:bg-muted"}`}
                    >
                      {pickName(c, lang)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div>
            {products.length === 0 ? (
              <div className="text-muted-foreground">{t("noProducts")}</div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                {products.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

