import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/components/I18nLink";
import { createMetadata } from "@/lib/metadata";
import type { Locale } from "@/i18n/routing";
import { readFile } from "fs/promises";
import path from "path";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "legal" });
  return createMetadata({
    title: t("licenses.title"),
    description: t("licenses.description"),
    path: "/licenses",
    locale: params.locale as Locale,
  });
}

export default async function LicensesPage({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale: params.locale, namespace: "legal" });
  const noticePath = path.join(process.cwd(), "NOTICE");
  let noticeContent: string;
  try {
    noticeContent = await readFile(noticePath, "utf-8");
  } catch {
    noticeContent = "License information is not available.";
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-100">{t("licenses.h1")}</h1>
        <p className="mt-2 text-slate-400">{t("licenses.subtitle")}</p>
      </div>

      <article className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-relaxed text-slate-300">
          {noticeContent}
        </pre>
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
        <Link
          href="/cookie-settings"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          Cookie settings
        </Link>
      </div>
    </div>
  );
}
