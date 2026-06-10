"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("footer");
  const tCommon = useTranslations("common");
  const currentYear = 2024;

  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="text-lg font-semibold text-slate-200">
              {tCommon("siteName")}
            </span>
            <span className="text-sm">© {currentYear}</span>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm text-slate-400">
            <Link
              href="/"
              className="transition-colors hover:text-slate-200"
            >
              {t("home")}
            </Link>
            <Link
              href="/tools"
              className="transition-colors hover:text-slate-200"
            >
              {t("tools")}
            </Link>
            <Link
              href="/search"
              className="transition-colors hover:text-slate-200"
            >
              {t("search")}
            </Link>
            <Link
              href="/licenses"
              className="transition-colors hover:text-slate-200"
            >
              {t("licenses")}
            </Link>
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-slate-200"
            >
              {t("privacyPolicy")}
            </Link>
            <Link
              href="/terms-of-use"
              className="transition-colors hover:text-slate-200"
            >
              {t("termsOfUse")}
            </Link>
            <Link
              href="/cookie-settings"
              className="transition-colors hover:text-slate-200"
            >
              {t("cookieSettings")}
            </Link>
            <a
              href="mailto:dbsghkwns553@gmail.com"
              className="transition-colors hover:text-slate-200"
              title={t("feedbackTitle")}
            >
              {t("feedback")}
            </a>
          </nav>
        </div>
        <div className="mt-4 text-sm text-slate-500">
          <p>{t("tagline")}</p>
          <p className="mt-1">
            {t("feedbackLabel")}{" "}
            <a
              href="mailto:dbsghkwns553@gmail.com"
              className="text-slate-400 hover:text-slate-200 transition-colors"
            >
              dbsghkwns553@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
