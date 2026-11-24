import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { useCookieConsent } from "@/lib/cookie-consent";

export function Footer() {
  const { t } = useLang();
  const { openPreferences } = useCookieConsent();
  return (
    <footer className="mt-16 border-t bg-primary text-primary-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-2 md:grid-cols-4 md:py-12">
        <div className="md:pl-8 lg:pl-16">
          <div className="flex items-center gap-2">
            <img
              src="/Icône_Bout.webp"
              alt=""
              width={44}
              height={44}
              loading="lazy"
              decoding="async"
              className="h-11 w-11 shrink-0 object-contain"
            />
            <span className="text-lg font-extrabold tracking-tight text-white sm:text-xl">
              GARTEN-GESPANN
            </span>
          </div>
          <p className="mt-3 text-sm leading-6 opacity-80">{t("aboutText")}</p>
        </div>
        <div className="md:pl-4">
          <div className="mb-3 text-sm font-semibold md:text-base">{t("termsTitle")}</div>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="/privacy" className="transition-opacity hover:opacity-100">{t("privacy")}</a></li>
            <li><a href="/delivery" className="transition-opacity hover:opacity-100">{t("deliveryInfo")}</a></li>
            <li><a href="/legal" className="transition-opacity hover:opacity-100">{t("legalNotice")}</a></li>
            <li><a href="/returns" className="transition-opacity hover:opacity-100">{t("returnsAndRefunds")}</a></li>
            <li><a href="/terms" className="transition-opacity hover:opacity-100">{t("termsOfSale")}</a></li>
            <li><a href="/payment" className="transition-opacity hover:opacity-100">{t("paymentMethods")}</a></li>
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
        <div className="mt-2">
          <button type="button" onClick={openPreferences} className="underline underline-offset-2 opacity-80 transition-opacity hover:opacity-100">
            {t("cookieConsentManage")}
          </button>
        </div>
        <div className="mx-auto mt-3 flex max-w-md flex-wrap items-center justify-center gap-2">
          {[
            { src: "/card1.webp", alt: "Visa" },
            { src: "/card2.webp", alt: "Mastercard" },
            { src: "/card3.webp", alt: "PayPal" },
            { src: "/card4.webp", alt: "American Express" },
            { src: "/card5.webp", alt: "Visa Electron" },
            { src: "/card6.webp", alt: "Maestro" },
          ].map((p) => (
            <img
              key={p.alt}
              src={p.src}
              alt={p.alt}
              width={64}
              height={32}
              loading="lazy"
              decoding="async"
              className="h-8 w-auto"
            />
          ))}
        </div>
      </div>
    </footer>
  );
}