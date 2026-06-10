import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { generatePageMetadata } from "@/lib/page-metadata";
import { routing, type Locale } from "@/i18n/routing";
import { loadToolContent } from "@/lib/load-tool-content";
import {
  buildFaqJsonLd,
  formatToolUiString,
  getToolContentEntry,
} from "@/lib/tool-content";
import { Link } from "@/components/I18nLink";
import ToolIcon from "@/components/ToolIcon";
import ToolPageGuide from "@/components/ToolPageGuide";
import GPACalculator from "./GPACalculator";

const META_PATH = "/tools/calculator/gpa-calculator";

const GRADE_ROWS = [
  ["A+", "4.0", "4.3", "4.5", "5.0"],
  ["A", "4.0", "4.0", "4.3", "4.5"],
  ["A-", "3.7", "3.7", "4.0", "4.2"],
  ["B+", "3.3", "3.3", "3.5", "3.8"],
  ["B", "3.0", "3.0", "3.3", "3.5"],
  ["B-", "2.7", "2.7", "3.0", "3.2"],
  ["C+", "2.3", "2.3", "2.5", "2.8"],
  ["C", "2.0", "2.0", "2.3", "2.5"],
  ["C-", "1.7", "1.7", "2.0", "2.2"],
  ["D+", "1.3", "1.3", "1.5", "1.8"],
  ["D", "1.0", "1.0", "1.3", "1.5"],
  ["D-", "0.7", "0.7", "1.0", "1.2"],
  ["F", "0.0", "0.0", "0.0", "0.0"],
] as const;

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return generatePageMetadata(params.locale, META_PATH);
}

export default async function GPACalculatorPage({
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

  const hubContent = getToolContentEntry(toolContent, "/tools/calculator");
  const ui = content.ui as Record<string, string>;
  const faqJsonLd = buildFaqJsonLd(content.faq);
  const relatedLinks = content.relatedLinks ?? [];

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

      <GPACalculator />

      <section
        id="gpa-conversion-table"
        className="mt-8 scroll-mt-24 rounded-xl border border-border bg-surface p-6 sm:p-8"
        aria-labelledby="gpa-conversion-table-title"
      >
        <h2 id="gpa-conversion-table-title" className="mb-4 text-lg font-semibold text-slate-200">
          {ui.conversionTableTitle}
        </h2>
        <p className="mb-4 text-sm text-slate-400">{ui.conversionTableIntro}</p>
        <div className="scrollbar-thin overflow-x-auto">
          <table className="w-full min-w-[400px] text-sm">
            <thead>
              <tr className="border-b border-slate-600">
                <th className="px-3 py-2 text-left font-medium text-slate-300">{ui.colGrade}</th>
                <th className="px-3 py-2 text-center font-medium text-slate-300">
                  {ui.colScale40}
                </th>
                <th className="px-3 py-2 text-center font-medium text-slate-300">
                  {ui.colScale43}
                </th>
                <th className="px-3 py-2 text-center font-medium text-slate-300">
                  {ui.colScale45}
                </th>
                <th className="px-3 py-2 text-center font-medium text-slate-300">
                  {ui.colScale50}
                </th>
              </tr>
            </thead>
            <tbody>
              {GRADE_ROWS.map((row) => (
                <tr key={row[0]} className="border-b border-slate-700/50">
                  <td className="px-3 py-2 font-medium text-slate-200">{row[0]}</td>
                  <td className="px-3 py-2 text-center text-slate-300">{row[1]}</td>
                  <td className="px-3 py-2 text-center text-slate-300">{row[2]}</td>
                  <td className="px-3 py-2 text-center text-slate-300">{row[3]}</td>
                  <td className="px-3 py-2 text-center text-slate-300">{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {relatedLinks.length > 0 && (
        <section className="mt-8 rounded-xl border border-border bg-surface p-6 sm:p-8" aria-labelledby="gpa-faq">
          <h3 id="gpa-faq" className="mb-4 text-base font-semibold text-slate-200">
            {ui.faqSectionTitle}
          </h3>
          <p className="mb-4 text-sm text-slate-500">
            {formatToolUiString(ui.faqSectionIntro, { count: relatedLinks.length })}
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {relatedLinks.map((faq) => {
              const className =
                "block rounded-lg border border-slate-600/80 bg-slate-800/30 px-4 py-2.5 text-sm text-slate-300 transition-colors hover:border-slate-500 hover:bg-slate-800/60 hover:text-slate-100";
              return (
                <li key={faq.href + faq.question}>
                  {faq.href.startsWith("#") ? (
                    <a href={faq.href} className={className}>
                      {faq.question}
                    </a>
                  ) : (
                    <Link href={faq.href} className={className}>
                      {faq.question}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      )}

      <ToolPageGuide
        title={content.guideTitle}
        intro={content.guideIntro}
        sections={content.sections}
        className="mt-12"
      />

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
