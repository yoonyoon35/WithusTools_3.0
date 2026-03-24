import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import UnitConverter from "../UnitConverter";

export const metadata: Metadata = createMetadata({
  title: "Volume Converter | Liters, Gallons, Milliliters, Cubic Meters",
  description:
    "Convert volume units: liters, gallons, milliliters, cubic meters, quarts, pints. Free online volume converter for cooking and chemistry.",
  path: "/tools/unit-converter/volume",
  keywords: [
    "volume converter",
    "liters to gallons",
    "gallons to liters",
    "ml to cups",
    "cubic meters",
    "fluid ounces",
    "withustools",
  ],
});

const VOLUME_GUIDE = {
  usage: [
    "Enter a value and select source unit (e.g., liters, gallons). Select target unit.",
    "Result updates in real time. Use swap button to switch units. Copy result with one click.",
  ],
  howItWorks: [
    "Liters to US gallons: 1 L ≈ 0.264172 US gallons.",
    "Gallons to liters: 1 US gallon ≈ 3.78541 liters.",
    "Milliliters to liters: ml = L × 0.001. All conversions use standard US fluid measures.",
  ],
  about: [
    "Free online volume converter for liters, gallons, milliliters, cups, fluid ounces, and cubic units. Supports US and UK fluid measures. All calculations run in your browser.",
  ],
  advantages: [
    "Real-time conversion as you type.",
    "US and UK fluid units supported.",
    "All Unit Conversions panel shows value in every unit.",
    "Copy result to clipboard.",
  ],
  useCases: [
    "Cooking: Recipe volumes in ml, cups, or liters.",
    "Chemistry: Lab measurements in ml or L.",
    "Shipping: Container volumes in m³ or ft³.",
  ],
};

export default function VolumeConverterPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="ruler" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Volume Converter</h1>
            <p className="mt-1 text-sm text-slate-500">unit-converter</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Convert between liters, gallons, milliliters, cups, fluid ounces, and cubic units.
        US and UK fluid measures. All Unit Conversions panel included.
      </p>

      <UnitConverter category="volume" title="Convert Volume" />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {VOLUME_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {VOLUME_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About Volume Converter</h3>
            <div className="space-y-2">
              {VOLUME_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {VOLUME_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Real-World Use Cases</h3>
            <ul className="list-disc space-y-2 pl-5">
              {VOLUME_GUIDE.useCases.map((item, i) => (
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
