import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import UnitConverter from "../UnitConverter";

export const metadata: Metadata = createMetadata({
  title: "Weight Converter | Kilograms, Pounds, Ounces, Grams",
  description:
    "Convert weight units: kilograms, pounds, ounces, grams, milligrams. Free online weight converter. Metric and imperial support for cooking, shipping, and health.",
  path: "/tools/unit-converter/weight",
  keywords: [
    "weight converter",
    "kg to pounds",
    "pounds to kg",
    "grams to ounces",
    "mass converter",
    "metric weight",
    "imperial weight",
    "withustools",
  ],
});

const WEIGHT_GUIDE = {
  usage: [
    "Enter a value and select source unit (e.g., kg, lb). Select target unit.",
    "Result updates in real time. Use swap button to switch units. Copy result with one click.",
  ],
  howItWorks: [
    "Kilograms to pounds: lb = kg × 2.20462. Pounds to kilograms: kg = lb × 0.453592.",
    "Grams to ounces: oz = g ÷ 28.3495. All conversions use standard conversion factors.",
  ],
  about: [
    "Free online weight converter for metric (tons, kg, g, mg, µg) and imperial (pounds, ounces, stone, long tons, US tons) units. Essential for cooking, shipping, and health monitoring. All calculations run in your browser.",
  ],
  advantages: [
    "Real-time conversion as you type.",
    "Metric and imperial units supported.",
    "All Unit Conversions panel shows value in every unit.",
    "Common conversions for quick access.",
    "Copy result to clipboard.",
  ],
  useCases: [
    "Cooking: Recipe ingredients in grams or ounces.",
    "Shipping: Package weight in kg or lb.",
    "Health: Body weight in kg or pounds.",
  ],
};

export default function WeightConverterPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="ruler" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Weight Converter</h1>
            <p className="mt-1 text-sm text-slate-500">unit-converter</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Convert between kilograms, pounds, ounces, grams, metric tons, and more.
        Metric and imperial support. All Unit Conversions panel included.
      </p>

      <UnitConverter category="weight" title="Convert Weight" />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {WEIGHT_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {WEIGHT_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About Weight Converter</h3>
            <div className="space-y-2">
              {WEIGHT_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {WEIGHT_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Real-World Use Cases</h3>
            <ul className="list-disc space-y-2 pl-5">
              {WEIGHT_GUIDE.useCases.map((item, i) => (
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
