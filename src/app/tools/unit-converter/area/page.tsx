import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import UnitConverter from "../UnitConverter";

export const metadata: Metadata = createMetadata({
  title: "Area Converter | Square Meters, Square Feet, Acres, Hectares",
  description:
    "Convert area units: square meters, square feet, acres, hectares, square kilometers. Free online area converter for real estate and construction.",
  path: "/tools/unit-converter/area",
  keywords: [
    "area converter",
    "square meters to square feet",
    "acres to hectares",
    "m2 to ft2",
    "land area",
    "real estate area",
    "withustools",
  ],
});

const AREA_GUIDE = {
  usage: [
    "Enter a value and select source unit (e.g., m², ft²). Select target unit.",
    "Result updates in real time. Use swap button to switch units. Copy result with one click.",
  ],
  howItWorks: [
    "Square meters to square feet: ft² = m² × 10.7639.",
    "Square feet to square meters: m² = ft² ÷ 10.7639.",
    "Acres to hectares: 1 acre ≈ 0.4047 hectares. All conversions use standard factors.",
  ],
  about: [
    "Free online area converter for square meters, square feet, acres, hectares, square miles, square yards, square inches, and square centimeters. All calculations run in your browser.",
  ],
  advantages: [
    "Real-time conversion as you type.",
    "Metric and imperial area units supported.",
    "All Unit Conversions panel shows value in every unit.",
    "Copy result to clipboard.",
  ],
  useCases: [
    "Real estate: Property area in m² or ft².",
    "Agriculture: Land area in acres or hectares.",
    "Construction: Floor area, room sizes.",
  ],
};

export default function AreaConverterPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="ruler" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Area Converter</h1>
            <p className="mt-1 text-sm text-slate-500">unit-converter</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Convert between square meters, square feet, acres, hectares, square miles,
        square yards, and more. All Unit Conversions panel included.
      </p>

      <UnitConverter category="area" title="Convert Area" />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {AREA_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {AREA_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About Area Converter</h3>
            <div className="space-y-2">
              {AREA_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {AREA_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Real-World Use Cases</h3>
            <ul className="list-disc space-y-2 pl-5">
              {AREA_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Link
        href="/tools/unit-converter"
        className="mt-8 inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        ← Back to Unit Converter
      </Link>
    </div>
  );
}
