import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import UnitConverter from "../UnitConverter";

export const metadata: Metadata = createMetadata({
  title: "Angle Converter | Degrees, Radians, Gradians",
  description:
    "Convert angle units: degrees, radians, gradians, arcminutes, arcseconds, turns. Free online plane angle converter. For math, astronomy, and engineering.",
  path: "/tools/unit-converter/angle",
  keywords: [
    "angle converter",
    "degrees to radians",
    "radians to degrees",
    "gradian converter",
    "arcminute",
    "arcsecond",
    "plane angle",
    "withustools",
  ],
});

const ANGLE_GUIDE = {
  usage: [
    "Enter a value and select source unit (e.g., degrees, radians). Select target unit (e.g., radians, degrees).",
    "Result updates in real time. Use swap button to switch units. Copy result with one click.",
  ],
  howItWorks: [
    "Degrees to radians: rad = deg × π/180. Radians to degrees: deg = rad × 180/π.",
    "Gradians (gon): 400 gradians = 360 degrees. 1 grad = π/200 rad.",
    "Arcminutes and arcseconds: 1° = 60′, 1′ = 60″. Used in astronomy and navigation.",
  ],
  about: [
    "Free online angle converter for degrees, radians, gradians, arcminutes, arcseconds, milliradians, and turns. Supports geometry, trigonometry, and surveying applications.",
  ],
  advantages: [
    "Multiple angle systems: Degrees, radians, gradians, and more.",
    "Real-time conversion and All Unit Conversions panel.",
    "Thousand separators and 6-decimal precision.",
    "Copy result to clipboard.",
  ],
  useCases: [
    "Mathematics: Trigonometry, geometry, calculus.",
    "Astronomy: Right ascension, declination in arcminutes/arcseconds.",
    "Engineering: Angular measurements, CAD, surveying.",
  ],
};

export default function AngleConverterPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="ruler" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Angle Converter</h1>
            <p className="mt-1 text-sm text-slate-500">unit-converter</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Convert between degrees, radians, gradians, arcminutes, arcseconds, and
        more. For geometry, trigonometry, and surveying.
      </p>

      <UnitConverter category="angle" title="Convert Angle" />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {ANGLE_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {ANGLE_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About Angle Converter</h3>
            <div className="space-y-2">
              {ANGLE_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {ANGLE_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Real-World Use Cases</h3>
            <ul className="list-disc space-y-2 pl-5">
              {ANGLE_GUIDE.useCases.map((item, i) => (
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
