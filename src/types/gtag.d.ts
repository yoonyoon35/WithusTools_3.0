declare global {
  interface Window {
    dataLayer?: unknown[];
    /** Google tag (gtag.js) — Consent Mode, config, events */
    gtag?: (...args: unknown[]) => void;
  }
}

export {};
