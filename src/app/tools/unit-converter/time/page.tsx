import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import UnitConverter from "../UnitConverter";

export const metadata: Metadata = createMetadata({
  title: "Time Converter | Seconds, Minutes, Hours, Days, Years",
  description:
    "Convert time units: seconds, minutes, hours, days, weeks, months, years. Free online time converter for scheduling and project management.",
  path: "/tools/unit-converter/time",
  keywords: [
    "time converter",
    "seconds to minutes",
    "hours to days",
    "time conversion",
    "duration converter",
    "withustools",
  ],
});

const TIME_GUIDE = {
  usage: [
    "Enter a value and select source unit (e.g., hours, days). Select target unit.",
    "Result updates in real time. Use swap button to switch units. Copy result with one click.",
  ],
  howItWorks: [
    "All time units convert to seconds as base. 1 minute = 60s, 1 hour = 3600s, 1 day = 86400s.",
    "Months and years use average values (30 days, 365 days) for conversion.",
  ],
  about: [
    "Free online time converter for seconds, minutes, hours, days, weeks, months, years. Includes milliseconds, microseconds, nanoseconds. All calculations run in your browser.",
  ],
  advantages: [
    "Real-time conversion as you type.",
    "Seconds to years and all common units supported.",
    "All Unit Conversions panel shows value in every unit.",
    "Copy result to clipboard.",
  ],
  useCases: [
    "Scheduling: Convert hours to days for project timelines.",
    "Payroll: Work hours to days or weeks.",
    "Science: Duration in seconds for physics calculations.",
  ],
};

export default function TimeConverterPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="ruler" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Time Converter</h1>
            <p className="mt-1 text-sm text-slate-500">unit-converter</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Convert between seconds, minutes, hours, days, weeks, months, and years.
        All Unit Conversions panel included.
      </p>

      <UnitConverter category="time" title="Convert Time" />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {TIME_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {TIME_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About Time Converter</h3>
            <div className="space-y-2">
              {TIME_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {TIME_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Real-World Use Cases</h3>
            <ul className="list-disc space-y-2 pl-5">
              {TIME_GUIDE.useCases.map((item, i) => (
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
