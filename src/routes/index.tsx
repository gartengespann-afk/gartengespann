import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Footer } from "@/components/site/Footer";
import { ProductCard } from "@/components/site/ProductCard";
import { Testimonials } from "@/components/site/Testimonials";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLang, pickName } from "@/lib/i18n";
import { getFeaturedProducts, categories as allCategories } from "@/lib/data";
import { Search, Shield, Headphones, Truck } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { t, lang } = useLang();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate({ to: "/shop", search: { q: searchQuery.trim() } });
    }
  };

  const featured = getFeaturedProducts();
  const categories = allCategories;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <Hero />

      {/* Advantages */}
      <section className="container mx-auto px-4 py-10 md:py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {[
          { icon: Shield, title: t("securePayment"), desc: t("securePaymentDesc") },
          { icon: Headphones, title: t("support"), desc: t("supportDesc") },
          { icon: Truck, title: t("quality"), desc: t("qualityDesc") },
        ].map((f, i) => (
          <div key={i} className="flex gap-3 md:gap-4 rounded-lg border p-4 md:p-6 bg-card">
            <f.icon className="h-8 w-8 md:h-10 md:w-10 text-accent shrink-0" />
            <div>
              <h3 className="font-semibold text-sm md:text-base">{f.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">{f.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Search */}
      <section className="container mx-auto px-4 py-6 md:py-8">
        <form onSubmit={handleSearch} className="mx-auto flex max-w-2xl flex-col gap-2 sm:flex-row">
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder={t("searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-10 pl-4 pr-12 text-sm md:h-12 md:text-base"
            />
          </div>
          <Button type="submit" size="icon" className="h-10 w-full shrink-0 sm:w-12 md:h-12 md:w-12">
            <Search className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </form>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6">{t("categories")}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {categories.map((c) => (
            <Link
              key={c.id}
              to="/shop"
              search={{ category: c.slug }}
              className="rounded-lg border bg-card p-3 md:p-4 text-center hover:border-accent hover:shadow-md transition-all"
            >
              <div className="font-medium text-xs md:text-sm">{pickName(c, lang)}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex items-end justify-between mb-4 md:mb-6">
          <h2 className="text-xl md:text-3xl font-bold">{t("featured")}</h2>
          <Link to="/shop" className="text-xs md:text-sm text-accent font-medium hover:underline shrink-0 ml-2">
            {t("viewAll")} →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

{/* Chainsaw Promo Banner */}
      <section className="w-full overflow-hidden">
        <div className="grid md:grid-cols-[1fr_2fr_1fr]">
          <div className="relative hidden md:block min-h-[600px]">
            <img
              src="/img-g.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col items-center bg-white px-5 py-10 text-center sm:px-8 sm:py-12 md:px-16 md:py-16">
            <p className="mb-3 text-xs text-gray-400 md:mb-4 md:text-sm">{t("fastDelivery")}</p>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-6xl">
              <span className="text-black">{t("heroPromoPrefix")}</span>
              <br />
              <span className="text-orange-500">{t("heroBadge")}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-gray-400 md:mt-6 md:text-base">
              {t("heroDescription")}
            </p>
            <Link
              to="/shop"
              className="mt-6 border-b-2 border-orange-500 pb-1 text-sm font-bold uppercase tracking-wider text-black transition-colors hover:text-orange-500 md:mt-8 md:text-base"
            >
              {t("showMore")}
            </Link>
            <div className="relative mt-10 md:mt-16 w-full max-w-xs sm:max-w-sm md:max-w-md">
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage: "radial-gradient(circle, #3b82f6 2.5px, transparent 2.5px)",
                  backgroundSize: "28px 28px",
                }}
              />
              <img
                src="/img-b.jpg"
                alt={t("chainsawAlt")}
                className="relative mx-auto w-4/5 -mb-10 max-w-[280px] md:-mb-16"
              />
            </div>
          </div>

          <div className="relative hidden md:block min-h-[600px]">
            <img
              src="/img-d.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <Testimonials />
      <Footer />
    </div>
  );
}
