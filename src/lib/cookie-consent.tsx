import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type CookieConsentChoice = "accepted" | "rejected";

const STORAGE_KEY = "cookie_consent_v1";

type CookieConsentContextValue = {
  consent: CookieConsentChoice | null;
  isPreferencesOpen: boolean;
  accept: () => void;
  reject: () => void;
  openPreferences: () => void;
  closePreferences: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

function readStoredConsent(): CookieConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "accepted" || v === "rejected" ? v : null;
  } catch {
    return null;
  }
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookieConsentChoice | null>(null);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setConsent(readStoredConsent());
    setHydrated(true);
  }, []);

  const persist = (choice: CookieConsentChoice) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // Ignore storage failures; keep in-memory choice for this session.
    }
    setConsent(choice);
    setIsPreferencesOpen(false);
  };

  const value = useMemo<CookieConsentContextValue>(
    () => ({
      consent: hydrated ? consent : null,
      isPreferencesOpen: hydrated ? isPreferencesOpen || consent === null : false,
      accept: () => persist("accepted"),
      reject: () => persist("rejected"),
      openPreferences: () => setIsPreferencesOpen(true),
      closePreferences: () => {
        setIsPreferencesOpen(false);
      },
    }),
    [consent, hydrated, isPreferencesOpen],
  );

  return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>;
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) throw new Error("useCookieConsent must be used within CookieConsentProvider");
  return ctx;
}
