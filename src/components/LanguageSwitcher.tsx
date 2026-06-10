"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const t = useTranslations("languageSwitcher");
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  return (
    <nav
      className="flex shrink-0 items-center gap-1 rounded-lg border border-border bg-surface p-0.5"
      aria-label={t("label")}
    >
      {routing.locales.map((loc) => {
        const isActive = locale === loc;
        return (
          <Link
            key={loc}
            href={pathname}
            locale={loc}
            className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors sm:px-3 sm:py-1.5 sm:text-sm ${
              isActive
                ? "bg-slate-700 text-slate-100"
                : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            {t(loc)}
          </Link>
        );
      })}
    </nav>
  );
}
