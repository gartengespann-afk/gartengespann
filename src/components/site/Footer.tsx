import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="mt-16 border-t bg-primary text-primary-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-2 md:grid-cols-4 md:py-12">
        <div className="md:pl-8 lg:pl-16">
          <img src="/logo-ft.jpg" alt="GARTEN-GESPANN" className="h-16 w-auto md:h-20" />
          <p className="mt-3 text-sm leading-6 opacity-80">{t("aboutText").slice(0, 120)}…</p>
        </div>
        <div className="md:pl-4">
          <div className="mb-3 text-sm font-semibold md:text-base">{t("termsTitle")}</div>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/privacy" className="transition-opacity hover:opacity-100">{t("privacy")}</Link></li>
            <li><Link to="/delivery" className="transition-opacity hover:opacity-100">{t("deliveryInfo")}</Link></li>
            <li><Link to="/legal" className="transition-opacity hover:opacity-100">{t("legalNotice")}</Link></li>
            <li><Link to="/returns" className="transition-opacity hover:opacity-100">{t("returnsAndRefunds")}</Link></li>
            <li><Link to="/terms" className="transition-opacity hover:opacity-100">{t("termsOfSale")}</Link></li>
            <li><Link to="/payment" className="transition-opacity hover:opacity-100">{t("paymentMethods")}</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-sm font-semibold md:text-base">{t("menu")}</div>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/" className="transition-opacity hover:opacity-100">{t("home")}</Link></li>
            <li><Link to="/shop" className="transition-opacity hover:opacity-100">{t("shop")}</Link></li>
            <li><Link to="/about" className="transition-opacity hover:opacity-100">{t("about")}</Link></li>
            <li><Link to="/contact" className="transition-opacity hover:opacity-100">{t("contact")}</Link></li>
            <li><Link to="/account" className="transition-opacity hover:opacity-100">{t("account")}</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-sm font-semibold md:text-base">{t("contact")}</div>
          <ul className="space-y-2 break-words text-sm opacity-80">
            <li>📞 +491784228814</li>
            <li>✉ Kontakt@gartengespann.de</li>
            <li>📍 Goethestraße 51, 56743 Mendig-Niedermendig</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs">
        © 2018 GARTEN-GESPANN. {t("allRightsReserved")}.
        <div className="mx-auto mt-3 flex max-w-md flex-wrap items-center justify-center gap-2">
          {[
            { src: "/card1.jpg", alt: "Visa" },
            { src: "/card2.png", alt: "Mastercard" },
            { src: "/card3.png", alt: "PayPal" },
            { src: "/card4.webp", alt: "American Express" },
            { src: "/card5.png", alt: "Visa Electron" },
            { src: "/card6.png", alt: "Maestro" },
          ].map((p) => (
            <img key={p.alt} src={p.src} alt={p.alt} className="h-8 w-auto" />
          ))}
        </div>
      </div>
    </footer>
  );
}