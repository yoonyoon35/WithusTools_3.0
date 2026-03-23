import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import UnitConverter from "../UnitConverter";

export const metadata: Metadata = createMetadata({
  title: "Speed Converter | km/h, mph, m/s, Knots",
  description:
    "Convert speed units: kilometers per hour, miles per hour, meters per second, feet per second. Free online speed converter for transportation and sports.",
  path: "/tools/unit-converter/speed",
  keywords: [
    "speed converter",
    "km/h to mph",
    "mph to km/h",
    "meters per second",
    "speed conversion",
    "velocity converter",
    "withustools",
  ],
});

const SPEED_GUIDE = {
  usage: [
    "Enter a value and select source unit (e.g., km/h, mph). Select target unit.",
    "Result updates in real time. Use swap button to switch units. Copy result with one click.",
  ],
  howItWorks: [
    "km/h to mph: mph = km/h × 0.621371. mph to km/h: km/h = mph × 1.60934.",
    "m/s to km/h: km/h = m/s × 3.6. Meters per second is the SI unit for speed.",
  ],
  about: [
    "Free online speed converter for km/h, mph, m/s, ft/s, and knots. Supports metric and imperial units. All calculations run in your browser.",
  ],
  advantages: [
    "Real-time conversion as you type.",
    "Metric and imperial units supported.",
    "All Unit Conversions panel shows value in every unit.",
    "Common conversions for quick access.",
    "Copy result to clipboard.",
  ],
  useCases: [
    "Transportation: Speed limits in km/h or mph.",
    "Sports: Running pace, cycling speed.",
    "Physics: Velocity in m/s for calculations.",
  ],
};

export default function SpeedConverterPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="ruler" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Speed Converter</h1>
            <p className="mt-1 text-sm text-slate-500">unit-converter</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Convert between km/h, mph, m/s, ft/s, and knots for transportation and sports.
        All Unit Conversions panel included.
      </p>

      <UnitConverter category="speed" title="Convert Speed" />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {SPEED_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {SPEED_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About Speed Converter</h3>
            <div className="space-y-2">
              {SPEED_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {SPEED_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Real-World Use Cases</h3>
            <ul className="list-disc space-y-2 pl-5">
              {SPEED_GUIDE.useCases.map((item, i) => (
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
