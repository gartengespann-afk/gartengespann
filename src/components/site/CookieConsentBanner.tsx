import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { useCookieConsent } from "@/lib/cookie-consent";
import { Button } from "@/components/ui/button";

export function CookieConsentBanner() {
  const { t } = useLang();
  const { isPreferencesOpen, accept, reject, closePreferences, consent } = useCookieConsent();

  if (!isPreferencesOpen) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t bg-background/98 p-4 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/90 sm:p-5"
      role="dialog"
      aria-modal="false"
      aria-label={t("cookieConsentTitle")}
    >
      <div className="container mx-auto flex max-w-5xl flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl space-y-2">
          <p className="text-sm font-semibold text-foreground sm:text-base">{t("cookieConsentTitle")}</p>
          <p className="text-sm leading-6 text-muted-foreground">{t("cookieConsentText")}</p>
          <Link to="/privacy" className="inline-block text-sm font-medium text-primary underline-offset-4 hover:underline">
            {t("cookieConsentLearnMore")}
          </Link>
        </div>
        <div className="flex w-full flex-col gap-2 sm:w-auto sm:min-w-[280px] sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
          <Button type="button" variant="outline" className="w-full" onClick={reject}>
            {t("cookieConsentReject")}
          </Button>
          <Button type="button" variant="outline" className="w-full" onClick={accept}>
            {t("cookieConsentAccept")}
          </Button>
          {consent !== null ? (
            <Button type="button" variant="ghost" className="w-full sm:col-span-2 lg:col-span-1" onClick={closePreferences}>
              {t("cookieConsentClose")}
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
