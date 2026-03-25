"use client";

/**
 * Floating cookie consent bar for Google Consent Mode v2 (analytics + ads).
 */

import { useCallback, useEffect, useState } from "react";
import {
  applyGtagConsent,
  loadValidConsent,
  OPEN_COOKIE_SETTINGS_EVENT,
  saveConsent,
  type ConsentPreferences,
} from "@/lib/cookie-consent-storage";

const BANNER_COPY =
  "Are our free conversion tools helpful? 😊 If you allow personalized ads and usage analytics, it helps us improve accuracy and convenience. You can change this anytime in settings.";

export default function CookieConsentBanner() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [draftAnalytics, setDraftAnalytics] = useState(false);
  const [draftAds, setDraftAds] = useState(false);

  const closeAndPersist = useCallback((prefs: ConsentPreferences) => {
    saveConsent(prefs);
    applyGtagConsent(prefs);
    setVisible(false);
    setDetailsOpen(false);
  }, []);

  const onAcceptAll = useCallback(() => {
    closeAndPersist({ analytics: true, ads: true });
  }, [closeAndPersist]);

  const onEssentialOnly = useCallback(() => {
    closeAndPersist({ analytics: false, ads: false });
  }, [closeAndPersist]);

  const onSaveCustom = useCallback(() => {
    closeAndPersist({ analytics: draftAnalytics, ads: draftAds });
  }, [closeAndPersist, draftAnalytics, draftAds]);

  useEffect(() => {
    setMounted(true);
    if (!loadValidConsent()) {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    const onOpen = () => {
      const existing = loadValidConsent();
      setDraftAnalytics(existing?.analytics ?? false);
      setDraftAds(existing?.ads ?? false);
      setDetailsOpen(true);
      setVisible(true);
    };
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, onOpen);
  }, []);

  if (!mounted || !visible) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[100] flex justify-center p-3 sm:p-4 md:p-5"
      role="region"
      aria-label="Cookie consent"
    >
      <div
        className={[
          "pointer-events-auto w-full max-w-4xl rounded-xl border shadow-2xl backdrop-blur-md",
          /* Site body is always dark — use one high-contrast theme (no OS-only mismatch). */
          "border-slate-500/50 bg-slate-950/95 text-slate-100",
        ].join(" ")}
      >
        <div className="px-4 py-4 sm:px-5 sm:py-5 md:px-6">
          <p className="text-sm leading-relaxed text-slate-100 sm:text-[0.9375rem] md:text-base">
            {BANNER_COPY}
          </p>

          {detailsOpen && (
            <div
              className="mt-4 space-y-3 rounded-lg border border-slate-600/70 bg-slate-900/80 p-3.5 sm:p-4"
              role="group"
              aria-label="Detailed cookie preferences"
            >
              <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-100 sm:text-[0.9375rem]">
                <input
                  type="checkbox"
                  checked={draftAnalytics}
                  onChange={(e) => setDraftAnalytics(e.target.checked)}
                  className="mt-0.5 h-5 w-5 shrink-0 rounded border-slate-500 bg-slate-800 text-sky-500 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                />
                <span>Usage analytics (Google Analytics)</span>
              </label>
              <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-100 sm:text-[0.9375rem]">
                <input
                  type="checkbox"
                  checked={draftAds}
                  onChange={(e) => setDraftAds(e.target.checked)}
                  className="mt-0.5 h-5 w-5 shrink-0 rounded border-slate-500 bg-slate-800 text-sky-500 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                />
                <span>Personalized ads (Google ads and cookies)</span>
              </label>
              <button
                type="button"
                onClick={onSaveCustom}
                className="mt-2 min-h-11 w-full rounded-lg bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-500 sm:min-h-12 sm:w-auto sm:px-5"
              >
                Save choices
              </button>
            </div>
          )}

          <div className="mt-4 flex flex-col gap-3 sm:mt-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
              <button
                type="button"
                onClick={onAcceptAll}
                className="min-h-12 rounded-lg bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sky-500 sm:min-h-11 sm:px-6"
              >
                Accept all
              </button>
              <button
                type="button"
                onClick={onEssentialOnly}
                className="min-h-12 rounded-lg border-2 border-slate-400 bg-transparent px-5 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-slate-300 hover:bg-slate-800/60 sm:min-h-11 sm:px-6"
              >
                Essential only
              </button>
            </div>
            <button
              type="button"
              onClick={() => {
                const existing = loadValidConsent();
                setDraftAnalytics(existing?.analytics ?? false);
                setDraftAds(existing?.ads ?? false);
                setDetailsOpen((o) => !o);
              }}
              className="self-start text-left text-xs font-medium text-sky-300 underline-offset-2 hover:text-sky-200 hover:underline sm:text-sm"
            >
              Customize
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
