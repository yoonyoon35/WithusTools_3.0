/**
 * Cookie / Google Consent Mode v2 preferences persisted in localStorage.
 * Keep storage key in sync with the beforeInteractive script in layout.tsx.
 */

export const COOKIE_CONSENT_STORAGE_KEY = "withus-cookie-consent";

/** Event name to reopen the banner (e.g. from footer "Cookie settings"). */
export const OPEN_COOKIE_SETTINGS_EVENT = "withus:open-cookie-settings";

const VALIDITY_DAYS = 180;

export type ConsentPreferences = {
  analytics: boolean;
  ads: boolean;
};

export type StoredConsent = ConsentPreferences & {
  expiresAt: string;
};

export function computeExpiryIso(): string {
  const d = new Date();
  d.setDate(d.getDate() + VALIDITY_DAYS);
  return d.toISOString();
}

export function saveConsent(prefs: ConsentPreferences): void {
  if (typeof window === "undefined") return;
  const record: StoredConsent = {
    ...prefs,
    expiresAt: computeExpiryIso(),
  };
  try {
    localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(record));
  } catch {
    /* quota / private mode */
  }
}

export function loadValidConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as Partial<StoredConsent>;
    if (
      typeof data.expiresAt !== "string" ||
      new Date(data.expiresAt) <= new Date()
    ) {
      return null;
    }
    if (typeof data.analytics !== "boolean" || typeof data.ads !== "boolean") {
      return null;
    }
    return {
      expiresAt: data.expiresAt,
      analytics: data.analytics,
      ads: data.ads,
    };
  } catch {
    return null;
  }
}

export function applyGtagConsent(prefs: ConsentPreferences): void {
  if (typeof window === "undefined") return;
  const gtag = window.gtag;
  if (typeof gtag !== "function") return;
  gtag("consent", "update", {
    analytics_storage: prefs.analytics ? "granted" : "denied",
    ad_storage: prefs.ads ? "granted" : "denied",
    ad_user_data: prefs.ads ? "granted" : "denied",
    ad_personalization: prefs.ads ? "granted" : "denied",
  });
}
