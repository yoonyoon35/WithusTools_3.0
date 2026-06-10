"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header() {
  const locale = useLocale();
  const t = useTranslations("header");
  const tCommon = useTranslations("common");

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 text-xl font-semibold text-slate-100 transition-colors hover:text-white"
        >
          <span className="flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
            <img
              src="/favicon-package/apple-touch-icon.png"
              alt={tCommon("siteName")}
              width={32}
              height={32}
              className="h-full w-full object-cover"
            />
          </span>
          {tCommon("siteName")}
        </Link>

        <form
          action={`/${locale}/search`}
          method="get"
          className="relative flex min-w-0 flex-1 max-w-xl items-center"
        >
          <input
            type="search"
            name="q"
            placeholder={t("searchPlaceholder")}
            className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 pr-10 text-slate-100 placeholder-slate-500 outline-none transition-colors focus:border-slate-600 focus:ring-1 focus:ring-slate-600"
            aria-label={t("searchAria")}
          />
          <button
            type="submit"
            className="absolute right-2.5 text-slate-400 transition-colors hover:text-slate-200"
            aria-label={t("submitSearchAria")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
        </form>

        <LanguageSwitcher />
      </div>
    </header>
  );
}
