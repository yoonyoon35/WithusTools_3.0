import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import {
  COLOR_FORMAT_LABELS,
  getAllColorFormatPairs,
  getCanonicalColorPairSlug,
  parseColorPairSlug,
} from "@/utils/colorFormatConversions";
import ColorPairCalculator from "../ColorPairCalculator";
import HowToConvertColor from "../HowToConvertColor";
import ColorConversionExamples from "../ColorConversionExamples";
import ColorPairCrossLinks from "../ColorPairCrossLinks";
import {
  getDetailedFormulaExplanation,
  getFormatDescription,
  getRelationshipContext,
} from "../colorPairContent";
import CmykAccuracyNote from "../CmykAccuracyNote";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const pair = parseColorPairSlug(params.slug);
  if (!pair) {
    return createMetadata({ title: "Color Format Conversion", noIndex: true });
  }

  const { from, to } = pair;
  const fromS = COLOR_FORMAT_LABELS[from].short;
  const toS = COLOR_FORMAT_LABELS[to].short;

  const title = `${fromS} to ${toS} Converter | Color Code Conversion`;
  const description = `Convert ${fromS} to ${toS} online. Free ${fromS} to ${toS} converter with examples and copy-ready output. Works in your browser.`;

  return createMetadata({
    title,
    description,
    path: `/tools/developer/color-picker/converter/${params.slug}`,
    keywords: [
      `${fromS} to ${toS}`,
      `${fromS.toLowerCase()} to ${toS.toLowerCase()}`,
      "color converter",
      "hex rgb hsl",
      "withustools",
    ],
  });
}

export function generateStaticParams() {
  return getAllColorFormatPairs().map(({ from, to }) => ({
    slug: getCanonicalColorPairSlug(from, to),
  }));
}

export default function ColorFormatPairPage({ params }: { params: { slug: string } }) {
  const pair = parseColorPairSlug(params.slug);
  if (!pair) notFound();

  const { from: fromKey, to: toKey } = pair;
  const fromS = COLOR_FORMAT_LABELS[fromKey].short;
  const toS = COLOR_FORMAT_LABELS[toKey].short;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="code" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">
              {fromS} to {toS} Converter
            </h1>
            <p className="mt-1 text-sm text-slate-500">Color Picker · developer</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Convert {fromS} values to {toS} with a fixed input and output format, live preview of the conversion line, and
        copy-ready results. All processing runs locally in your browser.
      </p>

      <ColorPairCalculator fromKey={fromKey} toKey={toKey} />

      <CmykAccuracyNote fromKey={fromKey} toKey={toKey} />

      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-surface p-6">
          <h2 className="mb-3 text-lg font-semibold text-slate-200">About {fromS}</h2>
          <p className="text-sm leading-relaxed text-slate-400">{getFormatDescription(fromKey)}</p>
        </div>
        <div className="rounded-xl border border-border bg-surface p-6">
          <h2 className="mb-3 text-lg font-semibold text-slate-200">About {toS}</h2>
          <p className="text-sm leading-relaxed text-slate-400">{getFormatDescription(toKey)}</p>
        </div>
      </section>

      <div className="mt-10">
        <HowToConvertColor fromKey={fromKey} toKey={toKey} />
      </div>

      <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-4 text-lg font-semibold text-slate-200">Summary</h2>
        <p className="text-sm leading-relaxed text-slate-400">{getDetailedFormulaExplanation(fromKey, toKey)}</p>
      </section>

      <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-4 text-lg font-semibold text-slate-200">Relationship context</h2>
        <p className="text-sm leading-relaxed text-slate-400">{getRelationshipContext(fromKey, toKey)}</p>
      </section>

      <ColorConversionExamples fromKey={fromKey} toKey={toKey} />

      <ColorPairCrossLinks fromKey={fromKey} toKey={toKey} />

      <div className="mt-10 flex flex-wrap gap-4 text-sm">
        <Link
          href="/tools/developer/color-picker"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          ← Color Picker (all formats)
        </Link>
        <Link href="/tools/developer" className="text-slate-400 underline transition-colors hover:text-slate-200">
          Developer Tools home
        </Link>
      </div>
    </div>
  );
}
