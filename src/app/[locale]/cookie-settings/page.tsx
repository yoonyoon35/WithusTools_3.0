import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/components/I18nLink";
import CookiePreferencesPanel from "@/components/CookiePreferencesPanel";
import { createMetadata } from "@/lib/metadata";
import type { Locale } from "@/i18n/routing";

const LAST_UPDATED = "March 25, 2026";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "legal" });
  return createMetadata({
    title: t("cookieSettings.title"),
    description: t("cookieSettings.description"),
    path: "/cookie-settings",
    locale: params.locale as Locale,
  });
}

export default async function CookieSettingsPage({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale: params.locale, namespace: "legal" });

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-100">{t("cookieSettings.h1")}</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {LAST_UPDATED}</p>
        <p className="mt-3 text-slate-400">
          Control optional cookies for analytics and ads. Essential cookies
          needed to run the site may still be used.
        </p>
      </div>

      <article className="space-y-8 text-sm leading-relaxed text-slate-300 sm:text-[0.9375rem]">
        <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-slate-100">
            What are cookies?
          </h2>
          <p className="mt-2">
            Cookies are small text files stored on your device. We use them
            together with similar technologies (for example local storage for
            your consent choices) to remember preferences and, if you allow, to
            measure traffic and show relevant ads.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-slate-100">
            Categories we use
          </h2>
          <ul className="mt-3 list-inside list-disc space-y-2">
            <li>
              <strong className="text-slate-200">Essential.</strong> Required for
              basic site operation (for example security or load balancing). You
              cannot turn these off from this panel.
            </li>
            <li>
              <strong className="text-slate-200">Analytics.</strong> Helps us
              understand how the site is used (Google Analytics). Only enabled if
              you consent.
            </li>
            <li>
              <strong className="text-slate-200">Advertising.</strong> Used to
              deliver and measure ads (for example Google AdSense). Only enabled
              if you consent.
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-slate-100">
            Google Consent Mode
          </h2>
          <p className="mt-2">
            We use Google&apos;s Consent Mode so that Google tags respect your
            choices. When you deny optional categories, storage for analytics and
            ads stays denied until you change your mind here or via the banner
            when it appears.
          </p>
        </section>

        <CookiePreferencesPanel />
      </article>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link
          href="/"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          ← Back to home
        </Link>
        <Link
          href="/privacy-policy"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms-of-use"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          Terms of Use
        </Link>
      </div>
    </div>
  );
}
