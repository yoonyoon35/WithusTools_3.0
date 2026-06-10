import type { Metadata } from "next";
import { Suspense } from "react";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/components/I18nLink";
import { generatePageMetadata } from "@/lib/page-metadata";
import { routing, type Locale } from "@/i18n/routing";
import { loadToolContent } from "@/lib/load-tool-content";
import { getToolContentEntry } from "@/lib/tool-content";
import ToolIcon from "@/components/ToolIcon";
import ToolPageGuide from "@/components/ToolPageGuide";
import TargetGPACalculator from "./TargetGPACalculator";

const META_PATH = "/tools/calculator/gpa-calculator/target-gpa";

function CalculatorFallback() {
  return (
    <div className="rounded-xl border border-border bg-surface p-8 text-center text-slate-400">
      Loading calculator…
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

export default async function TargetGPAPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = routing.locales.includes(params.locale as Locale)
    ? (params.locale as Locale)
    : routing.defaultLocale;
  setRequestLocale(locale);

  const content = getToolContentEntry(await loadToolContent(locale), META_PATH);
  if (!content) {
    throw new Error(`Missing toolContent for ${META_PATH}`);
  }

  const hubContent = getToolContentEntry(
    await loadToolContent(locale),
    "/tools/calculator"
  );

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="calculator" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">{content.h1}</h1>
            <p className="mt-1 text-sm text-slate-500">{content.subtitle}</p>
          </div>
        </div>
      </div>

      <Suspense fallback={<CalculatorFallback />}>
        <TargetGPACalculator />
      </Suspense>

      <ToolPageGuide
        title={content.guideTitle}
        intro={content.guideIntro}
        sections={content.sections}
        className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8"
      />

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/tools/calculator/gpa-calculator"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          ← GPA Calculator
        </Link>
        <Link
          href="/tools/calculator"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          {content.backToHub ?? hubContent?.ui?.backToHub}
        </Link>
        <Link href="/" className="text-slate-400 underline transition-colors hover:text-slate-200">
          {hubContent?.backToHome}
        </Link>
      </div>
    </div>
  );
}
