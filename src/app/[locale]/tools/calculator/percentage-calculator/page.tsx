import type { Metadata } from "next";
import { Suspense } from "react";
import { setRequestLocale } from "next-intl/server";
import { generatePageMetadata } from "@/lib/page-metadata";
import { routing, type Locale } from "@/i18n/routing";
import { loadToolContent } from "@/lib/load-tool-content";
import {
  buildFaqJsonLd,
  formatToolUiString,
  getToolContentEntry,
} from "@/lib/tool-content";
import ToolIcon from "@/components/ToolIcon";
import { Link } from "@/components/I18nLink";
import ToolPageGuide from "@/components/ToolPageGuide";
import PercentageCalculator from "./PercentageCalculator";
import PercentageGuideFormulas from "./PercentageGuideFormulas";

const META_PATH = "/tools/calculator/percentage-calculator";

function CalculatorFallback({ label }: { label: string }) {
  return (
    <div
      className="mx-auto max-w-5xl rounded-xl border border-border bg-surface p-8 text-center text-sm text-slate-500"
      aria-busy="true"
    >
      {label}
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return generatePageMetadata(params.locale, META_PATH);
}

export default async function PercentageCalculatorPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = routing.locales.includes(params.locale as Locale)
    ? (params.locale as Locale)
    : routing.defaultLocale;
  setRequestLocale(locale);

  const toolContent = await loadToolContent(locale);
  const content = getToolContentEntry(toolContent, META_PATH);
  if (!content) {
    throw new Error(`Missing toolContent for ${META_PATH}`);
  }

  const ui = content.ui as Record<string, string>;
  const relatedLinks = content.relatedLinks ?? [];
  const faqJsonLd = buildFaqJsonLd(content.faq);
  const hubContent = getToolContentEntry(toolContent, "/tools/calculator");

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="calculator" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">{content.h1}</h1>
            <p className="mt-1 text-sm text-slate-500">{content.subtitle}</p>
          </div>
        </div>
      </div>

      <Suspense fallback={<CalculatorFallback label={ui.loadingCalculator} />}>
        <PercentageCalculator />
      </Suspense>

      {relatedLinks.length > 0 && (
        <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
          <h2 className="mb-4 text-base font-semibold text-slate-200">{ui.faqSectionTitle}</h2>
          <p className="mb-4 text-sm text-slate-500">
            {formatToolUiString(ui.faqSectionIntro, { count: relatedLinks.length })}
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {relatedLinks.map((faq) => (
              <li key={faq.href + faq.question}>
                <Link
                  href={faq.href}
                  className="block rounded-lg border border-slate-600/80 bg-slate-800/30 px-4 py-2.5 text-sm text-slate-300 transition-colors hover:border-slate-500 hover:bg-slate-800/60 hover:text-slate-100"
                >
                  {faq.question}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <PercentageGuideFormulas />
        <ToolPageGuide
          title={content.guideTitle}
          intro={content.guideIntro}
          sections={content.sections}
          className="mt-8"
        />
      </section>

      <div className="mt-8 flex gap-4">
        <Link
          href="/tools/calculator"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          {content.backToHub}
        </Link>
        <Link href="/" className="text-slate-400 underline transition-colors hover:text-slate-200">
          {hubContent?.backToHome}
        </Link>
      </div>
    </div>
  );
}
