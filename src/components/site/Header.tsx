import { Link } from "@tanstack/react-router";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { useAuth } from "@/lib/auth";
import { useLang, type Lang } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export function Header() {
  const { count } = useCart();
  const { user } = useAuth();
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/" as const, label: t("home") },
    { to: "/shop" as const, label: t("shop") },
    { to: "/about" as const, label: t("about") },
    { to: "/contact" as const, label: t("contact") },
    { to: "/account" as const, label: t("account") },
  ];

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="bg-primary text-primary-foreground text-xs">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-2 sm:flex-row">
          <span className="text-center sm:text-left">🚚 {t("freeShipping")}</span>
          <div className="flex flex-wrap items-center justify-center gap-1 sm:justify-end">
            {(["de", "fr", "en"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-0.5 rounded uppercase text-[10px] font-semibold ${
                  lang === l ? "bg-accent text-accent-foreground" : "opacity-70 hover:opacity-100"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto flex items-center justify-between gap-2 px-4 py-2">
        <Link to="/" aria-label="GARTEN-GESPANN" className="flex items-center gap-2">
          <img
            src="/Icône_Bout.png"
            alt=""
            className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11"
          />
          <span className="text-lg font-extrabold tracking-tight text-primary sm:text-xl">
            GARTEN-GESPANN
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium hover:text-accent transition-colors"
              activeProps={{ className: "text-accent" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <Link to={user ? "/account" : "/auth"}>
            <Button variant="ghost" size="icon" aria-label={t("account")}>
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon" aria-label={t("cart")}>
              <ShoppingCart className="h-5 w-5" />
            </Button>
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-accent-foreground">
                {count}
              </span>
            )}
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(!open)} aria-label={t("menu")}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <nav className="border-t bg-background md:hidden">
          <div className="container mx-auto flex flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-2 text-sm font-medium">
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}