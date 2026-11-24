import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { ProductImage } from "@/components/site/ProductImage";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/lib/auth";
import { useLang } from "@/lib/i18n";
import { apiRequest } from "@/lib/api";
import { useCart } from "@/lib/cart";
import {
  Heart,
  LayoutDashboard,
  LogOut,
  Menu,
  Package,
  ReceiptText,
  ShoppingCart,
} from "lucide-react";

type DashboardData = {
  orders: Array<{ id: number; status: string; total_eur: string; created_at: string }>;
  invoices: Array<{
    id: number;
    invoice_number: string;
    status: string;
    total_eur: string;
    issued_at: string;
    order_id: number;
  }>;
  receipts?: Array<{
    id: number;
    order_id: number;
    status: string;
    total_eur: string;
    paid_at: string | null;
    created_at: string;
    stripe_session_id: string | null;
  }>;
  cart: Array<{
    product_id: number;
    slug: string;
    name: string;
    price_eur: string;
    image_url: string | null;
    quantity: number;
  }>;
  favorites: Array<{
    product_id: number;
    slug: string;
    name: string;
    price_eur: string;
    image_url: string | null;
  }>;
};

type AccountSection = "overview" | "orders" | "invoices" | "cart" | "favorites";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "Mein Konto – GARTEN-GESPANN" },
      {
        name: "description",
        content:
          "Verwalten Sie Bestellungen, Rechnungen, Belege, Warenkorb und Favoriten in Ihrem Kundenkonto.",
      },
    ],
  }),
  component: AccountPage,
});

function AccountPage() {
  const { user, loading, signOut } = useAuth();
  const { items: cartItems, count: cartCount, total: cartTotal, updateQty, remove } = useCart();
  const navigate = useNavigate();
  const { t, lang } = useLang();
  const [dashboard, setDashboard] = useState<DashboardData | null>(null);
  const [dashboardError, setDashboardError] = useState<string | null>(null);
  const [dashboardLoading, setDashboardLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<AccountSection>("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [downloadingReceiptId, setDownloadingReceiptId] = useState<number | null>(null);

  useEffect(() => {
    if (!loading && !user) void navigate({ to: "/auth" });
  }, [user, loading, navigate]);

  useEffect(() => {
    if (!user || loading) return;
    let active = true;
    apiRequest<DashboardData>("/api/dashboard.php")
      .then((data) => {
        if (active) setDashboard(data);
      })
      .catch((cause: unknown) => {
        if (active)
          setDashboardError(
            cause instanceof Error ? cause.message : "Impossible de charger votre espace.",
          );
      })
      .finally(() => {
        if (active) setDashboardLoading(false);
      });

    return () => {
      active = false;
    };
  }, [user, loading]);

  const handleSignOut = async () => {
    try {
      await signOut();
      await navigate({ to: "/" });
    } catch (cause) {
      setDashboardError(cause instanceof Error ? cause.message : "La déconnexion a échoué.");
    }
  };

  const downloadReceipt = async (orderId: number) => {
    setDashboardError(null);
    setDownloadingReceiptId(orderId);
    try {
      const baseUrl = (import.meta.env.VITE_API_BASE_URL ?? "").replace(/\/+$/, "");
      const response = await fetch(`${baseUrl}/api/payment.php?action=receipt&order_id=${orderId}`, {
        method: "GET",
        credentials: "include",
      });
      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || t("errorGeneric"));
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `quittung-bestellung-${orderId}.html`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (cause) {
      setDashboardError(cause instanceof Error ? cause.message : t("errorGeneric"));
    } finally {
      setDownloadingReceiptId(null);
    }
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        {t("loading")}
      </div>
    );
  }

  const sections: Array<{
    category: string;
    items: Array<{ id: AccountSection; label: string; icon: typeof LayoutDashboard }>;
  }> = [
    {
      category: t("accountMenu"),
      items: [{ id: "overview", label: t("accountOverview"), icon: LayoutDashboard }],
    },
    {
      category: t("purchaseHistory"),
      items: [
        { id: "orders", label: t("myOrders"), icon: Package },
        { id: "invoices", label: t("invoices"), icon: ReceiptText },
      ],
    },
    {
      category: t("shopping"),
      items: [
        { id: "cart", label: t("cart"), icon: ShoppingCart },
        { id: "favorites", label: t("favorites"), icon: Heart },
      ],
    },
  ];

  const selectSection = (section: AccountSection) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  const sidebar = (
    <>
      <div className="flex items-center gap-3 border-b px-5 py-5">
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground"
          aria-hidden="true"
        >
          {user.first_name.charAt(0).toLocaleUpperCase(lang)}
        </span>
        <div className="min-w-0">
          <p className="truncate font-semibold">
            {user.first_name} {user.last_name}
          </p>
          <p className="truncate text-xs text-muted-foreground">{user.email}</p>
        </div>
      </div>
      <nav className="flex-1 space-y-6 p-3" aria-label={t("accountMenu")}>
        {sections.map((group) => (
          <div key={group.category}>
            <h2 className="px-3 pb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {group.category}
            </h2>
            <ul className="space-y-1">
              {group.items.map(({ id, label, icon: Icon }) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => selectSection(id)}
                    aria-current={activeSection === id ? "page" : undefined}
                    className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                      activeSection === id
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
      <div className="border-t p-3">
        <button
          type="button"
          onClick={() => void handleSignOut()}
          className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
        >
          <LogOut className="h-4 w-4" />
          {t("logout")}
        </button>
      </div>
    </>
  );

  const content: Record<AccountSection, ReactNode> = {
    overview: dashboard ? (
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {[
          {
            label: t("myOrders"),
            count: dashboard.orders.length,
            icon: Package,
            section: "orders" as const,
          },
          {
            label: t("invoices"),
            count: (dashboard.receipts?.length ?? 0) + dashboard.invoices.length,
            icon: ReceiptText,
            section: "invoices" as const,
          },
          {
            label: t("favorites"),
            count: dashboard.favorites.length,
            icon: Heart,
            section: "favorites" as const,
          },
        ].map(({ label, count, icon: Icon, section }) => (
          <button
            type="button"
            key={section}
            onClick={() => selectSection(section)}
            className="rounded-lg border bg-card p-5 text-left transition-colors hover:border-primary/50 hover:bg-muted/40"
          >
            <span className="flex items-center justify-between text-sm text-muted-foreground">
              {label}
              <Icon className="h-4 w-4" />
            </span>
            <span className="mt-3 block text-3xl font-bold">{count}</span>
          </button>
        ))}
        <button
          type="button"
          onClick={() => selectSection("cart")}
          className="rounded-lg border bg-card p-5 text-left transition-colors hover:border-primary/50 hover:bg-muted/40"
        >
          <span className="flex items-center justify-between text-sm text-muted-foreground">
            {t("cart")}
            <ShoppingCart className="h-4 w-4" />
          </span>
          <span className="mt-3 block text-3xl font-bold">{cartCount}</span>
        </button>
        <div className="rounded-lg border bg-card p-5 sm:col-span-2 xl:col-span-3">
          <h2 className="mb-2 font-semibold">{t("myOrders")}</h2>
          {dashboard.orders.length === 0 ? (
            <p className="text-sm text-muted-foreground">{t("noOrders")}</p>
          ) : (
            <div className="space-y-3">
              {dashboard.orders.slice(0, 3).map((order) => (
                <div
                  key={order.id}
                  className="flex flex-wrap justify-between gap-2 border-t pt-3 text-sm"
                >
                  <span className="font-mono">#{order.id}</span>
                  <span className="text-muted-foreground">
                    {new Date(order.created_at).toLocaleDateString(lang)}
                  </span>
                  <span className="font-semibold">{Number(order.total_eur).toFixed(2)} €</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    ) : null,
    orders: dashboard ? (
      dashboard.orders.length === 0 ? (
        <p className="rounded-lg border bg-card p-5 text-muted-foreground">{t("noOrders")}</p>
      ) : (
        <div className="space-y-3">
          {dashboard.orders.map((order) => (
            <article key={order.id} className="rounded-lg border bg-card p-4">
              <div className="flex flex-wrap justify-between gap-3 text-sm">
                <span className="font-mono">#{order.id}</span>
                <time dateTime={order.created_at}>
                  {new Date(order.created_at).toLocaleDateString(lang)}
                </time>
              </div>
              <div className="mt-3 flex justify-between text-sm">
                <span className="text-muted-foreground">{order.status}</span>
                <span className="font-semibold">{Number(order.total_eur).toFixed(2)} €</span>
              </div>
            </article>
          ))}
        </div>
      )
    ) : null,
    invoices: dashboard ? (
      (dashboard.receipts?.length ?? 0) === 0 && dashboard.invoices.length === 0 ? (
        <p className="rounded-lg border bg-card p-5 text-muted-foreground">{t("noInvoices")}</p>
      ) : (
        <div className="space-y-4">
          {(dashboard.receipts?.length ?? 0) > 0 && (
            <ul className="space-y-3">
              {dashboard.receipts!.map((receipt) => {
                const dateValue = receipt.paid_at ?? receipt.created_at;
                return (
                  <li
                    key={receipt.id}
                    className="flex flex-col gap-3 rounded-lg border bg-card p-4 text-sm sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="min-w-0">
                      <span className="block font-medium">{t("orderNumber")} #{receipt.order_id}</span>
                      <span className="block text-muted-foreground">
                        {t("paymentConfirmed")}
                        {dateValue ? ` · ${new Date(dateValue).toLocaleDateString(lang)}` : ""}
                      </span>
                    </span>
                    <span className="flex flex-wrap items-center gap-3 sm:justify-end">
                      <span className="font-semibold">{Number(receipt.total_eur).toFixed(2)} €</span>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => void downloadReceipt(receipt.order_id)}
                        disabled={downloadingReceiptId === receipt.order_id}
                      >
                        {downloadingReceiptId === receipt.order_id ? t("loading") : t("paymentReceiptDownload")}
                      </Button>
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
          {dashboard.invoices.length > 0 && (
            <ul className="space-y-3">
              {dashboard.invoices.map((invoice) => (
                <li
                  key={invoice.id}
                  className="flex justify-between gap-3 rounded-lg border bg-card p-4 text-sm"
                >
                  <span>
                    <span className="block font-medium">{invoice.invoice_number}</span>
                    <span className="text-muted-foreground">
                      {t("orderNumber")} #{invoice.order_id}
                    </span>
                  </span>
                  <span className="text-right">
                    <span className="block font-semibold">
                      {Number(invoice.total_eur).toFixed(2)} €
                    </span>
                    <span className="text-muted-foreground">{invoice.status}</span>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )
    ) : null,
    cart:
      cartItems.length === 0 ? (
        <div className="rounded-lg border bg-card p-5">
          <p className="text-muted-foreground">{t("emptyCart")}</p>
          <Button asChild className="mt-4">
            <Link to="/shop">{t("continueShopping")}</Link>
          </Button>
        </div>
      ) : (
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_280px]">
          <ul className="space-y-3">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex gap-3 rounded-lg border bg-card p-3 sm:gap-4 sm:p-4"
              >
                {item.image && (
                  <ProductImage
                    src={item.image}
                    alt={item.name}
                    width={96}
                    height={96}
                    loading="lazy"
                    decoding="async"
                    className="h-20 w-20 shrink-0 rounded object-cover sm:h-24 sm:w-24"
                  />
                )}
                <div className="min-w-0 flex-1">
                  <Link
                    to="/product/$slug"
                    params={{ slug: item.slug }}
                    className="line-clamp-2 font-medium hover:text-accent"
                  >
                    {item.name}
                  </Link>
                  <p className="mt-1 text-sm text-muted-foreground">{item.price.toFixed(2)} €</p>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <div className="flex items-center rounded border">
                      <button
                        type="button"
                        aria-label={t("decreaseQty")}
                        onClick={() => updateQty(item.id, item.quantity - 1)}
                        className="px-3 py-1 hover:bg-muted"
                      >
                        −
                      </button>
                      <span className="min-w-8 text-center text-sm">{item.quantity}</span>
                      <button
                        type="button"
                        aria-label={t("increaseQty")}
                        onClick={() => updateQty(item.id, item.quantity + 1)}
                        className="px-3 py-1 hover:bg-muted"
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => remove(item.id)}
                      className="text-sm text-muted-foreground hover:text-destructive"
                    >
                      {t("remove")}
                    </button>
                  </div>
                </div>
                <span className="shrink-0 font-semibold">
                  {(item.price * item.quantity).toFixed(2)} €
                </span>
              </li>
            ))}
          </ul>
          <aside className="h-fit rounded-lg border bg-card p-5">
            <h2 className="font-semibold">{t("subtotal")}</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {cartCount} {t("quantity").toLowerCase()}
            </p>
            <p className="mt-3 border-t pt-3 text-xl font-bold">{cartTotal.toFixed(2)} €</p>
            <Button
              asChild
              className="mt-4 w-full bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link to="/checkout">{t("checkout")}</Link>
            </Button>
          </aside>
        </div>
      ),
    favorites: dashboard ? (
      dashboard.favorites.length === 0 ? (
        <p className="rounded-lg border bg-card p-5 text-muted-foreground">{t("noFavorites")}</p>
      ) : (
        <ul className="space-y-3">
          {dashboard.favorites.map((favorite) => (
            <li
              key={favorite.product_id}
              className="flex justify-between gap-3 rounded-lg border bg-card p-4 text-sm"
            >
              <Link
                to="/product/$slug"
                params={{ slug: favorite.slug }}
                className="font-medium hover:text-accent"
              >
                {favorite.name}
              </Link>
              <span className="shrink-0 font-semibold">
                {Number(favorite.price_eur).toFixed(2)} €
              </span>
            </li>
          ))}
        </ul>
      )
    ) : null,
  };
  const activeLabel =
    sections.flatMap((group) => group.items).find((item) => item.id === activeSection)?.label ??
    t("account");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto flex-1 px-4 py-6 md:py-10">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm text-muted-foreground">{t("account")}</p>
            <h1 className="text-2xl font-bold md:text-3xl">{activeLabel}</h1>
          </div>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="gap-2 md:hidden">
                <Menu className="h-4 w-4" />
                {t("accountMenu")}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex w-[min(85vw,20rem)] flex-col p-0">
              <SheetHeader className="sr-only">
                <SheetTitle>{t("accountMenu")}</SheetTitle>
              </SheetHeader>
              {sidebar}
            </SheetContent>
          </Sheet>
        </div>
        <div className="grid items-start gap-6 md:grid-cols-[250px_minmax(0,1fr)] lg:gap-8">
          <aside className="sticky top-24 hidden min-h-[min(70vh,680px)] flex-col overflow-hidden rounded-xl border bg-card md:flex">
            {sidebar}
          </aside>
          <main className="min-w-0">
            {dashboardError && (
              <p
                className="mb-6 rounded-md border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive"
                role="alert"
              >
                {dashboardError}
              </p>
            )}
            {dashboardLoading ? (
              <p className="rounded-lg border bg-card p-5 text-muted-foreground">{t("loading")}</p>
            ) : (
              (content[activeSection] ?? (
                <p className="rounded-lg border bg-card p-5 text-muted-foreground">
                  {dashboardError ?? t("pageError")}
                </p>
              ))
            )}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
