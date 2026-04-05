import type { Metadata } from "next";
import { Suspense } from "react";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import Link from "next/link";
import { getFaqEntriesByCategory } from "@/data/faq-data";
import PercentageCalculator from "./PercentageCalculator";
import PercentageGuideFormulas from "./PercentageGuideFormulas";

const PERCENTAGE_FAQ_LINKS = getFaqEntriesByCategory("percentage-calculator");

export const metadata: Metadata = createMetadata({
  title: "Calculate Percentages Easily",
  description:
    "Calculate percentages easily: part of a number, change between values, what percent one value is of another, and value after a percent increase or decrease—with history and comma-formatted numbers.",
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
    "Percentage Of: Enter total (A) and part (B) to see what percent B is of A.",
    "Value After Change: Enter a starting value and a percent change (negative for decrease) to get the final value.",
    "Results update as you type. Use Reset to clear the current tab. Recent calculations are saved locally (up to five).",
  ],
  howItWorks: [
    "Basic: Result = (Percentage ÷ 100) × Number.",
    "Change: ((New Value − Old Value) ÷ Old Value) × 100.",
    "Percentage Of: (Part ÷ Total) × 100.",
    "Value After Change: Starting Value × (1 + Change% ÷ 100).",
    "All calculations run in your browser. History is stored only in your browser (localStorage).",
  ],
  about: [
    "Free online percentage calculator for everyday math. Calculate discounts, tax, growth rates, and more.",
    "Use it for shopping, investments, grades, or any percentage-related calculation.",
  ],
  advantages: [
    "Four modes: Basic, change, part-of-whole, and value after a percent change.",
    "Real-time results, comma-formatted numbers, and a short sentence explaining each result.",
    "Recent history with one-click restore. No signup required.",
    "Works on any device with a browser.",
  ],
  useCases: [
    "Shopping: Calculate discount amounts and final prices.",
    "Finance: Investment returns, interest, and tax.",
    "Academics: Test scores and grade percentages.",
    "Business: Sales growth and revenue change.",
  ],
};

function CalculatorFallback() {
  return (
    <div
      className="mx-auto max-w-5xl rounded-xl border border-border bg-surface p-8 text-center text-sm text-slate-500"
      aria-busy="true"
    >
      Loading calculator…
    </div>
  );
}

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

      <Suspense fallback={<CalculatorFallback />}>
        <PercentageCalculator />
      </Suspense>

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-4 text-base font-semibold text-slate-200">Common questions (FAQ)</h2>
        <p className="mb-4 text-sm text-slate-500">
          {PERCENTAGE_FAQ_LINKS.length} quick answers with worked examples and links to the matching FAQ page. Open the
          Percentage Calculator above to try the same patterns with your numbers.
        </p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {PERCENTAGE_FAQ_LINKS.map((faq) => (
            <li key={faq.slug}>
              <Link
                href={`/faq/${faq.category}/${faq.slug}`}
                className="block rounded-lg border border-slate-600/80 bg-slate-800/30 px-4 py-2.5 text-sm text-slate-300 transition-colors hover:border-slate-500 hover:bg-slate-800/60 hover:text-slate-100"
              >
                {faq.question}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-2 text-lg font-semibold text-slate-200">Guide</h2>
        <p className="mb-8 text-sm text-slate-500">
          Formulas in LaTeX notation, numeric walkthroughs, and quick links into each calculator tab.
        </p>
        <PercentageGuideFormulas />
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
