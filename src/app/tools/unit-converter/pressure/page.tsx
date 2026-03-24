import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import UnitConverter from "../UnitConverter";

export const metadata: Metadata = createMetadata({
  title: "Pressure Converter | Pascal, Bar, PSI, Atmosphere",
  description:
    "Convert pressure units: Pascal, kilopascal, bar, PSI, atmosphere, torr. Free online pressure converter for engineering and meteorology.",
  path: "/tools/unit-converter/pressure",
  keywords: [
    "pressure converter",
    "psi to bar",
    "bar to pascal",
    "atmosphere pressure",
    "pressure conversion",
    "withustools",
  ],
});

const PRESSURE_GUIDE = {
  usage: [
    "Enter a value and select source unit (e.g., PSI, bar). Select target unit.",
    "Result updates in real time. Use swap button to switch units. Copy result with one click.",
  ],
  howItWorks: [
    "1 bar = 100,000 Pa. 1 atm (atmosphere) ≈ 101,325 Pa.",
    "PSI to bar: bar = psi × 0.0689476. Torr: 1 torr = 101325/760 Pa. Pascal is the SI unit.",
  ],
  about: [
    "Free online pressure converter for Pascal, kilopascal, bar, PSI, atmosphere, and torr. For engineering, meteorology, and industrial applications. All calculations run in your browser.",
  ],
  advantages: [
    "Real-time conversion as you type.",
    "Supports metric (Pa, bar) and imperial (PSI) units.",
    "All Unit Conversions panel shows value in every unit.",
  ],
  useCases: [
    "Engineering: Tire pressure, hydraulic systems.",
    "Meteorology: Atmospheric pressure in bar or hPa.",
    "Scuba: Tank pressure in bar or PSI.",
  ],
};

export default function PressureConverterPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="ruler" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Pressure Converter</h1>
            <p className="mt-1 text-sm text-slate-500">unit-converter</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Convert between Pascal, bar, PSI, atmosphere, and torr. For engineering
        and meteorology. All Unit Conversions panel included.
      </p>

      <UnitConverter category="pressure" title="Convert Pressure" />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {PRESSURE_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {PRESSURE_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About Pressure Converter</h3>
            <div className="space-y-2">
              {PRESSURE_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {PRESSURE_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Real-World Use Cases</h3>
            <ul className="list-disc space-y-2 pl-5">
              {PRESSURE_GUIDE.useCases.map((item, i) => (
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
