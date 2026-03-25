"use client";

import { useCallback, useEffect, useState } from "react";
import {
  applyGtagConsent,
  loadValidConsent,
  saveConsent,
  type ConsentPreferences,
} from "@/lib/cookie-consent-storage";

export default function CookiePreferencesPanel() {
  const [analytics, setAnalytics] = useState(false);
  const [ads, setAds] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const existing = loadValidConsent();
    if (existing) {
      setAnalytics(existing.analytics);
      setAds(existing.ads);
    }
  }, []);

  const persist = useCallback((prefs: ConsentPreferences) => {
    saveConsent(prefs);
    applyGtagConsent(prefs);
    setAnalytics(prefs.analytics);
    setAds(prefs.ads);
    setSaved(true);
    window.setTimeout(() => setSaved(false), 4000);
  }, []);

  const onAcceptAll = useCallback(() => {
    persist({ analytics: true, ads: true });
  }, [persist]);

  const onEssentialOnly = useCallback(() => {
    persist({ analytics: false, ads: false });
  }, [persist]);

  const onSaveCustom = useCallback(() => {
    persist({ analytics, ads });
  }, [persist, analytics, ads]);

  return (
    <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
      <h2 className="text-lg font-semibold text-slate-100">
        Your choices
      </h2>
      <p className="mt-2 text-sm text-slate-400">
        Update consent for analytics and advertising cookies. Preferences are
        stored in your browser for 180 days.
      </p>

      <div className="mt-6 space-y-4">
        <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-100 sm:text-[0.9375rem]">
          <input
            type="checkbox"
            checked={analytics}
            onChange={(e) => setAnalytics(e.target.checked)}
            className="mt-0.5 h-5 w-5 shrink-0 rounded border-slate-500 bg-slate-800 text-sky-500 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          />
          <span>Usage analytics (Google Analytics)</span>
        </label>
        <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-100 sm:text-[0.9375rem]">
          <input
            type="checkbox"
            checked={ads}
            onChange={(e) => setAds(e.target.checked)}
            className="mt-0.5 h-5 w-5 shrink-0 rounded border-slate-500 bg-slate-800 text-sky-500 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          />
          <span>Personalized ads (Google ads and cookies)</span>
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
        <button
          type="button"
          onClick={onAcceptAll}
          className="min-h-11 rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-500"
        >
          Accept all
        </button>
        <button
          type="button"
          onClick={onEssentialOnly}
          className="min-h-11 rounded-lg border-2 border-slate-400 bg-transparent px-5 py-2.5 text-sm font-semibold text-slate-100 transition-colors hover:border-slate-300 hover:bg-slate-800/60"
        >
          Essential only
        </button>
        <button
          type="button"
          onClick={onSaveCustom}
          className="min-h-11 rounded-lg border border-slate-600 bg-slate-800/50 px-5 py-2.5 text-sm font-semibold text-slate-100 transition-colors hover:bg-slate-800"
        >
          Save choices
        </button>
      </div>

      {saved ? (
        <p className="mt-4 text-sm font-medium text-emerald-400" role="status">
          Your preferences have been saved.
        </p>
      ) : null}
    </div>
  );
}
