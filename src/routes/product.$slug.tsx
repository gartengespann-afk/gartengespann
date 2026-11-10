import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState, useEffect, useCallback, useRef, useMemo, type FormEvent } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/lib/cart";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang, pickName, pickDesc, pickSubtitle } from "@/lib/i18n";
import { getProductBySlug, getSimilarProducts, getNavProducts, productHasWarranty, categories as allCategories } from "@/lib/data";
import { toast } from "sonner";
import {
  ChevronUp,
  ChevronDown,
  Maximize2,
  Heart,
  Star,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Check,
  Truck,
  Shield,
  RefreshCw,
  Clock,
  Award,
} from "lucide-react";

const THUMB_SIZE = 72;
const THUMB_GAP = 8;
const VISIBLE_THUMBS = 4;

function ProductNotFound() {
  const { t } = useLang();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-16 text-center flex-1">
        <h1 className="text-3xl font-bold">{t("pageNotFound")}</h1>
        <Link to="/shop" className="text-accent underline mt-4 inline-block">{t("shop")}</Link>
      </div>
      <Footer />
    </div>
  );
}

function ProductError() {
  const { t } = useLang();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-16 text-center flex-1">
        <h1 className="text-3xl font-bold">{t("pageError")}</h1>
        <p className="mt-3 text-muted-foreground">{t("pageErrorDesc")}</p>
      </div>
      <Footer />
    </div>
  );
}

export const Route = createFileRoute("/product/$slug")({
  component: ProductPage,
  notFoundComponent: () => <ProductNotFound />,
  errorComponent: ProductError,
});

function ProductPage() {
  const { slug } = Route.useParams();
  const { add, openCart } = useCart();
  const { t, lang } = useLang();
  const [qty, setQty] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [thumbScroll, setThumbScroll] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, closeLightbox]);
  const [reviews, setReviews] = useState<Array<{ id: number; name: string; rating: number; comment: string }>>([]);
  const [reviewForm, setReviewForm] = useState({ name: "", email: "", rating: 0, comment: "" });
  const [ratingError, setRatingError] = useState(false);

  const product = getProductBySlug(slug);

  const similarProducts = product?.category_id
    ? getSimilarProducts(product.category_id, product.id, 999)
    : [];

  const navProducts = product?.category_id
    ? getNavProducts(product.category_id).map((p) => p.slug)
    : [];

  if (!product) {
    return <ProductNotFound />;
  }

  const category = product.category_id ? allCategories.find((c) => c.id === product.category_id) ?? null : null;
  const name = pickName(product, lang);
  const subtitle = pickSubtitle(product, lang);
  const desc = pickDesc(product, lang);
  const gallery = product.gallery ?? [];
  const images = gallery.length ? gallery : product.image_url ? [product.image_url] : [];

  const currentIndex = navProducts.indexOf(product.slug);
  const prevSlug = currentIndex > 0 ? navProducts[currentIndex - 1] : null;
  const nextSlug = currentIndex >= 0 && currentIndex < navProducts.length - 1 ? navProducts[currentIndex + 1] : null;

  const maxThumbScroll = Math.max(0, images.length - VISIBLE_THUMBS);
  const sellingInfo = [
    { icon: Truck, text: t("freeShippingShort") },
    { icon: Shield, text: t("securePaymentShort") },
    { icon: RefreshCw, text: t("returns30") },
    { icon: Clock, text: t("deliveryTime") },
    ...(productHasWarranty(product) ? [{ icon: Award, text: t("warranty3") }] : []),
  ] as const;

  const handleReviewSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRatingError(false);
    if (!reviewForm.name.trim() || !reviewForm.comment.trim()) return;
    if (reviewForm.rating === 0) {
      setRatingError(true);
      return;
    }
    setReviews((prev) => [
      {
        id: Date.now(),
        name: reviewForm.name.trim(),
        rating: reviewForm.rating,
        comment: reviewForm.comment.trim(),
      },
      ...prev,
    ]);
    setReviewForm({ name: "", email: "", rating: 0, comment: "" });
    toast.success(t("reviewPosted"));
  };

  const averageRating = reviews.length
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : "0.0";

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <PageHeader title={name} />
      <div className="container mx-auto px-4 py-8 flex-1">

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          <div className="lg:w-[55%]">
            <div className="flex gap-3">
              {images.length > 0 && (
                <div className="hidden lg:flex flex-col items-center gap-1.5 shrink-0">
                  <button
                    className="flex items-center justify-center w-9 h-9 rounded-md border hover:bg-muted disabled:opacity-30"
                    onClick={() => setThumbScroll((s) => Math.max(0, s - 1))}
                    disabled={thumbScroll === 0}
                    aria-label={t("previous")}
                  >
                    <ChevronUp className="w-4 h-4" />
                  </button>

                  <div
                    className="overflow-hidden rounded-md"
                    style={{ height: THUMB_SIZE * VISIBLE_THUMBS + THUMB_GAP * (VISIBLE_THUMBS - 1) }}
                  >
                    <div
                      className="flex flex-col gap-2 transition-transform duration-200"
                      style={{ transform: `translateY(-${thumbScroll * (THUMB_SIZE + THUMB_GAP)}px)` }}
                    >
                      {images.map((src, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedImage(i)}
                          className={`w-[72px] h-[72px] shrink-0 rounded-md overflow-hidden border-2 bg-white transition-all ${
                            i === selectedImage
                              ? "border-accent ring-1 ring-accent"
                              : "border-border hover:border-muted-foreground/40"
                          }`}
                        >
                          <img
                            src={src}
                            alt={`${name} ${i + 1}`}
                            className="w-full h-full object-contain"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    className="flex items-center justify-center w-9 h-9 rounded-md border hover:bg-muted disabled:opacity-30"
                    onClick={() => setThumbScroll((s) => Math.min(maxThumbScroll, s + 1))}
                    disabled={thumbScroll >= maxThumbScroll}
                    aria-label={t("next")}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              )}

              <div className="relative flex-1 aspect-[4/3] bg-white rounded-xl overflow-hidden border group">
                {product.is_hot && (
                  <div className="absolute top-3 left-3 z-10 w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                    <span className="text-white text-[10px] font-bold tracking-wide">{t("chaud")}</span>
                  </div>
                )}

                <img
                  src={images[selectedImage] ?? "/placeholder.svg"}
                  alt={name}
                  className="w-full h-full object-contain p-4"
                />

                {images.length > 1 && (
                  <>
                    <button
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 border shadow-sm flex items-center justify-center lg:opacity-0 lg:group-hover:opacity-100 transition-opacity hover:bg-white disabled:opacity-20"
                      onClick={() => setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                      aria-label={t("previous")}
                    >
                      <ChevronLeft className="w-4 h-4 text-foreground" />
                    </button>
                    <button
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 border shadow-sm flex items-center justify-center lg:opacity-0 lg:group-hover:opacity-100 transition-opacity hover:bg-white disabled:opacity-20"
                      onClick={() => setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                      aria-label={t("next")}
                    >
                      <ChevronRight className="w-4 h-4 text-foreground" />
                    </button>
                  </>
                )}

                <button
                  className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 border shadow-sm flex items-center justify-center hover:bg-white transition-colors"
                  aria-label={t("zoom")}
                  title={t("zoom")}
                  onClick={() => setLightboxOpen(true)}
                >
                  <Maximize2 className="w-4 h-4 text-foreground" />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:w-[45%] flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <nav className="text-xs text-muted-foreground">
                <Link to="/" className="hover:text-accent transition-colors">{t("home")}</Link>
                <span className="mx-1.5">/</span>
                <Link to="/shop" className="hover:text-accent transition-colors">{t("shop")}</Link>
                {category && (
                  <>
                    <span className="mx-1.5">/</span>
                    <Link to="/shop" search={{ category: category.slug }} className="hover:text-accent transition-colors">
                      {pickName(category, lang)}
                    </Link>
                  </>
                )}
                <span className="mx-1.5">/</span>
                <span className="text-foreground/70 font-medium truncate max-w-[120px] inline-block align-bottom">
                  {name.length > 30 ? name.slice(0, 28) + "…" : name}
                </span>
              </nav>
              <div className="flex items-center gap-1">
                {prevSlug ? (
                  <Link
                    to="/product/$slug"
                    params={{ slug: prevSlug }}
                    className="w-8 h-8 rounded-md border flex items-center justify-center hover:bg-muted transition-colors"
                    aria-label={t("previous")}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Link>
                ) : (
                  <span className="w-8 h-8 rounded-md border flex items-center justify-center opacity-30 cursor-default">
                    <ChevronLeft className="w-4 h-4" />
                  </span>
                )}
                <Link
                  to="/shop"
                  className="w-8 h-8 rounded-md border flex items-center justify-center hover:bg-muted transition-colors"
                  aria-label={t("gridView")}
                  title={t("gridView")}
                >
                  <LayoutGrid className="w-4 h-4" />
                </Link>
                {nextSlug ? (
                  <Link
                    to="/product/$slug"
                    params={{ slug: nextSlug }}
                    className="w-8 h-8 rounded-md border flex items-center justify-center hover:bg-muted transition-colors"
                    aria-label={t("next")}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <span className="w-8 h-8 rounded-md border flex items-center justify-center opacity-30 cursor-default">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                )}
              </div>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">{name}</h1>

            {subtitle && (
              <p className="mt-2 text-base text-muted-foreground">{subtitle}</p>
            )}

            <div className="mt-4 text-3xl lg:text-4xl font-bold text-accent">
              {Number(product.price_eur).toFixed(2).replace(".", ",")} €
            </div>

            <ul className="mt-5 space-y-2.5">
              {sellingInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <Icon className="w-4 h-4 text-accent shrink-0" />
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-accent" />
              <span>
                <strong className="text-foreground">{product.stock ?? 0}</strong> {t("inStock")}
              </span>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="flex items-center self-start rounded-md border">
                <button
                  className="px-3 py-2.5 text-lg hover:bg-muted transition-colors"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  aria-label={t("decreaseQty")}
                >
                  −
                </button>
                <span className="min-w-10 px-4 text-center text-base font-medium">{qty}</span>
                <button
                  className="px-3 py-2.5 text-lg hover:bg-muted transition-colors"
                  onClick={() => setQty(qty + 1)}
                  aria-label={t("increaseQty")}
                >
                  +
                </button>
              </div>
              <Button
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-sm font-bold uppercase tracking-wide sm:w-auto sm:flex-1"
                onClick={() => {
                  add(
                    {
                      id: product.id,
                      slug: product.slug,
                      name,
                      price: Number(product.price_eur),
                      image: product.image_url ?? "",
                    },
                    qty,
                  );
                  openCart();
                  toast.success(t("addToCart") + " ✓");
                }}
              >
                {t("addToCart")}
              </Button>
            </div>

            <div className="mt-5 flex items-center gap-6 text-sm text-muted-foreground">
              <button className="flex items-center gap-1.5 hover:text-accent transition-colors">
                <Heart className="w-4 h-4" />
                {t("addToWishlist")}
              </button>
            </div>

          </div>
        </div>

        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition-colors text-xl"
              onClick={closeLightbox}
            >
              ✕
            </button>
            <img
              src={images[selectedImage] ?? "/placeholder.svg"}
              alt={name}
              className="max-w-[90vw] max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        <Tabs defaultValue="description" className="mt-10">
          <TabsList className="w-full sm:w-auto">
            <TabsTrigger value="description">{t("descriptionTab")}</TabsTrigger>
            <TabsTrigger value="reviews">{t("reviewsTab")} ({reviews.length})</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-6">
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="text-sm leading-relaxed text-muted-foreground" dangerouslySetInnerHTML={{ __html: desc || t("reviewEmpty") }} />
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <section className="rounded-2xl border bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-xl font-semibold">{t("reviewCustomers")} ({reviews.length})</h2>
                  <div className="flex items-center gap-1">
                    {reviews.length > 0 ? (
                      <>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${Number(averageRating) >= star ? 'fill-accent text-accent' : 'fill-muted text-muted'}`}
                          />
                        ))}
                        <span className="ml-1.5 text-sm font-medium text-muted-foreground">{averageRating}/5</span>
                      </>
                    ) : (
                      <span className="text-sm text-muted-foreground">{t("reviewEmpty")}</span>
                    )}
                  </div>
                </div>

                {reviews.length === 0 ? (
                  <div className="mt-6 rounded-lg border border-dashed p-6 text-center text-sm text-muted-foreground">
                    {t("reviewEmpty")}
                  </div>
                ) : (
                  <div className="mt-6 space-y-4">
                    {reviews.map((review) => (
                      <div key={review.id} className="rounded-lg border bg-background p-4">
                        <div className="flex items-center justify-between gap-3">
                          <div className="font-medium">{review.name}</div>
                          <div className="flex items-center gap-0.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`w-3.5 h-3.5 ${review.rating >= star ? 'fill-accent text-accent' : 'fill-muted text-muted'}`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              <section className="rounded-2xl border bg-card p-6 shadow-sm">
                <h2 className="text-xl font-semibold">{t("leaveReview")}</h2>
                <form onSubmit={handleReviewSubmit} className="mt-6 space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="review-name">{t("reviewName")}</label>
                    <Input
                      id="review-name"
                      value={reviewForm.name}
                      onChange={(e) => setReviewForm((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder={t("reviewNamePlaceholder")}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="review-email">{t("email")}</label>
                    <Input
                      id="review-email"
                      type="email"
                      value={reviewForm.email}
                      onChange={(e) => setReviewForm((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder={t("reviewEmailPlaceholder")}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t("reviewRating")}</label>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => {
                            setReviewForm((prev) => ({ ...prev, rating: star }));
                            setRatingError(false);
                          }}
                          className="transition-colors"
                        >
                          <Star
                            className={`w-6 h-6 cursor-pointer ${
                              reviewForm.rating >= star
                                ? 'fill-accent text-accent'
                                : 'fill-muted text-muted hover:fill-accent/30 hover:text-accent/30'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                    {ratingError && (
                      <p className="text-sm text-destructive">{t("ratingError")}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="review-comment">{t("reviewComment")}</label>
                    <Textarea
                      id="review-comment"
                      value={reviewForm.comment}
                      onChange={(e) => setReviewForm((prev) => ({ ...prev, comment: e.target.value }))}
                      placeholder={t("reviewCommentPlaceholder")}
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full sm:w-auto">
                    {t("submitReview")}
                  </Button>
                </form>
              </section>
            </div>
          </TabsContent>
        </Tabs>

        {similarProducts.length > 0 && (
          <SimilarProductsCarousel products={similarProducts} />
        )}
      </div>
      <Footer />
    </div>
  );
}

function SimilarProductsCarousel({ products }: { products: any[] }) {
  const { lang, t } = useLang();
  const { add, openCart } = useCart();
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  useEffect(() => {
    const onResize = () => setVisibleCards(window.innerWidth < 640 ? 2 : 4);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const totalPages = useMemo(() => Math.max(1, Math.ceil(products.length / visibleCards)), [products.length, visibleCards]);

  const scroll = (dir: number) => {
    setCurrentPage((prev) => {
      const next = prev + dir;
      if (next < 0) return 0;
      if (next >= totalPages) return totalPages - 1;
      return next;
    });
  };

  const startIndex = currentPage * visibleCards;
  const visibleItems = products.slice(startIndex, startIndex + visibleCards);

  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold mb-4">{t("similarProducts")}</h2>
      <div className="relative group">
        {totalPages > 1 && (
          <>
            <button
              onClick={() => scroll(-1)}
              disabled={currentPage === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-10 h-10 rounded-full bg-white border shadow-md flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity hover:bg-muted disabled:opacity-30 sm:disabled:opacity-0"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll(1)}
              disabled={currentPage >= totalPages - 1}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-10 h-10 rounded-full bg-white border shadow-md flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity hover:bg-muted disabled:opacity-30 sm:disabled:opacity-0"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
        <div ref={containerRef} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {visibleItems.map((item: any) => {
            const similarName = pickName(item, lang);
            return (
              <div key={item.id} className="overflow-hidden rounded-xl border bg-card transition-shadow hover:shadow-md">
                <Link to="/product/$slug" params={{ slug: item.slug }}>
                  <div className="aspect-square bg-muted">
                    <img src={item.image_url ?? ""} alt={similarName} className="h-full w-full object-cover" />
                  </div>
                </Link>
                <div className="p-4">
                  <Link to="/product/$slug" params={{ slug: item.slug }}>
                    <h3 className="line-clamp-2 text-sm font-semibold hover:text-accent transition-colors">{similarName}</h3>
                  </Link>
                  <div className="mt-2 text-sm font-bold text-primary">{Number(item.price_eur).toFixed(2)} €</div>
                  <Button
                    size="sm"
                    className="mt-3 w-full bg-accent text-accent-foreground hover:bg-accent/90"
                    onClick={() => {
                      add({
                        id: item.id,
                        slug: item.slug,
                        name: similarName,
                        price: Number(item.price_eur),
                        image: item.image_url ?? "",
                      });
                      openCart();
                      toast.success(t("addToCart") + " ✓");
                    }}
                  >
                    {t("addToCart")}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentPage ? "bg-accent" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
