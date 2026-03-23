import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import UnitConverter from "../UnitConverter";

export const metadata: Metadata = createMetadata({
  title: "Energy Converter | Joules, Calories, kWh, Kilojoules",
  description:
    "Convert energy units: joules, kilojoules, calories, kilocalories, kilowatt-hours. Free online energy converter for physics and energy management.",
  path: "/tools/unit-converter/energy",
  keywords: [
    "energy converter",
    "joules to calories",
    "kWh to joules",
    "energy conversion",
    "kilowatt hours",
    "withustools",
  ],
});

const ENERGY_GUIDE = {
  usage: [
    "Enter a value and select source unit (e.g., joules, kWh). Select target unit.",
    "Result updates in real time. Use swap button to switch units. Copy result with one click.",
  ],
  howItWorks: [
    "1 calorie = 4.184 joules. 1 kcal = 4,184 J.",
    "1 kWh = 3,600,000 J. 1 BTU ≈ 1,055 J. Joule is the SI unit for energy.",
  ],
  about: [
    "Free online energy converter for joules, kilojoules, calories, kilocalories, kilowatt-hours, watt-hours, BTU, therm, foot-pounds, and electronvolts. For physics, nutrition, and utilities. All calculations run in your browser.",
  ],
  advantages: [
    "Real-time conversion as you type.",
    "SI and imperial units supported.",
    "All Unit Conversions panel shows value in every unit.",
    "Common conversions for quick access.",
  ],
  useCases: [
    "Physics: Energy in joules for calculations.",
    "Nutrition: Food energy in calories or kilocalories.",
    "Utilities: Electricity consumption in kWh.",
  ],
};

export default function EnergyConverterPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="ruler" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Energy Converter</h1>
            <p className="mt-1 text-sm text-slate-500">unit-converter</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Convert between joules, calories, kWh, BTU, and more. For physics,
        nutrition, and utilities. All Unit Conversions panel included.
      </p>

      <UnitConverter category="energy" title="Convert Energy" />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {ENERGY_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {ENERGY_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About Energy Converter</h3>
            <div className="space-y-2">
              {ENERGY_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {ENERGY_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Real-World Use Cases</h3>
            <ul className="list-disc space-y-2 pl-5">
              {ENERGY_GUIDE.useCases.map((item, i) => (
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
