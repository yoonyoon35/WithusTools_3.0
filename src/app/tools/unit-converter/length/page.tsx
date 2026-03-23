import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import UnitConverter from "../UnitConverter";

export const metadata: Metadata = createMetadata({
  title: "Length Converter | Meters, Feet, Inches, Kilometers, Miles",
  description:
    "Convert length units: kilometers, meters, feet, inches, miles, yards, centimeters, millimeters. Free online length converter. Metric and imperial support.",
  path: "/tools/unit-converter/length",
  keywords: [
    "length converter",
    "meters to feet",
    "feet to meters",
    "km to miles",
    "inches to cm",
    "metric length",
    "imperial length",
    "distance converter",
    "withustools",
  ],
});

const LENGTH_GUIDE = {
  usage: [
    "Enter a value and select source unit (e.g., meters, feet). Select target unit (e.g., feet, meters).",
    "Result updates in real time. Use swap button to switch units. Copy result with one click.",
  ],
  howItWorks: [
    "Meters to feet: ft = m × 3.28084. Feet to meters: m = ft × 0.3048.",
    "Centimeters to inches: in = cm ÷ 2.54. Inches to centimeters: cm = in × 2.54.",
    "All conversions use internationally recognized conversion factors.",
  ],
  about: [
    "Free online length converter for metric (km, m, cm, mm, µm, nm) and imperial (miles, yards, feet, inches) units. Includes nautical miles. All calculations run in your browser.",
  ],
  advantages: [
    "Real-time conversion as you type.",
    "Metric and imperial units supported.",
    "All Unit Conversions panel shows value in every unit.",
    "Common conversions for quick access.",
    "Copy result to clipboard.",
  ],
  useCases: [
    "Construction: Room dimensions, material lengths.",
    "Real estate: Property measurements in m² or ft².",
    "Travel: Distance in km or miles.",
  ],
};

export default function LengthConverterPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="ruler" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Length Converter</h1>
            <p className="mt-1 text-sm text-slate-500">unit-converter</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Convert between kilometers, meters, feet, inches, miles, yards, and more.
        Metric and imperial support. All Unit Conversions panel included.
      </p>

      <UnitConverter category="length" title="Convert Length" />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {LENGTH_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {LENGTH_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About Length Converter</h3>
            <div className="space-y-2">
              {LENGTH_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {LENGTH_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Real-World Use Cases</h3>
            <ul className="list-disc space-y-2 pl-5">
              {LENGTH_GUIDE.useCases.map((item, i) => (
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
