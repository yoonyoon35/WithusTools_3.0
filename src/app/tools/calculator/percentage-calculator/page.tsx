import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import Link from "next/link";
import PercentageCalculator from "./PercentageCalculator";

export const metadata: Metadata = createMetadata({
  title: "Percentage Calculator | Calculate Percentages Easily",
  description:
    "Calculate percentages easily. Find percentage of a number, percentage increase/decrease. Free online percentage calculator.",
  path: "/tools/calculator/percentage-calculator",
  keywords: [
    "percentage calculator",
    "percent calculator",
    "percentage increase",
    "percentage decrease",
    "discount calculator",
    "percentage change",
    "withustools",
  ],
});

const PERCENTAGE_GUIDE = {
  usage: [
    "Basic Percentage: Enter a percentage and a number to find X% of that number.",
    "Percentage Change: Enter original and new values to calculate the percentage increase or decrease.",
    "Press Enter or click Calculate for results. Use Reset to clear inputs.",
  ],
  howItWorks: [
    "Basic: Result = (Percentage ÷ 100) × Number.",
    "Change: ((New Value − Old Value) ÷ Old Value) × 100.",
    "All calculations run in your browser. No data is sent to any server.",
  ],
  about: [
    "Free online percentage calculator for everyday math. Calculate discounts, tax, growth rates, and more.",
    "Use it for shopping, investments, grades, or any percentage-related calculation.",
  ],
  advantages: [
    "Two modes: Basic percentage and percentage change.",
    "Instant results. No signup required.",
    "Works on any device with a browser.",
  ],
  useCases: [
    "Shopping: Calculate discount amounts and final prices.",
    "Finance: Investment returns, interest, and tax.",
    "Academics: Test scores and grade percentages.",
    "Business: Sales growth and revenue change.",
  ],
};

export default function PercentageCalculatorPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="calculator" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Percentage Calculator</h1>
            <p className="mt-1 text-sm text-slate-500">calculator</p>
          </div>
        </div>
      </div>

      <PercentageCalculator />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="scrollbar-thin space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {PERCENTAGE_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {PERCENTAGE_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About Percentage Calculator</h3>
            <div className="space-y-2">
              {PERCENTAGE_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {PERCENTAGE_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Real-World Use Cases</h3>
            <ul className="list-disc space-y-2 pl-5">
              {PERCENTAGE_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-8 flex gap-4">
        <Link
          href="/tools/calculator"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          ← Back to Calculator
        </Link>
        <Link
          href="/"
          className="text-slate-400 underline transition-colors hover:text-slate-200"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
