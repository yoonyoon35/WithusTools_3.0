import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import Link from "next/link";
import Calculator from "./Calculator";

export const metadata: Metadata = createMetadata({
  title: "Simple & Scientific Calculator",
  description:
    "Simple calculator for basic arithmetic operations. Free online calculator with memory functions, square root, percentage, and more. No installation required.",
  path: "/tools/calculator/calculator",
  keywords: [
    "calculator",
    "online calculator",
    "scientific calculator",
    "math calculator",
    "basic calculator",
    "percentage calculator",
    "withustools",
  ],
});

const CALC_GUIDE = {
  usage: [
    "Use the on-screen buttons or your keyboard for input. Numbers (0-9), decimal point (.), and operators (+, −, ×, ÷) are supported.",
    "Memory: MC (clear), MR (recall), M+ (add to memory), M− (subtract from memory), MS (store).",
    "Functions: % (percent), √ (square root), x² (square), 1/x (reciprocal), ± (negate).",
    "CE clears the current entry; C clears all. Backspace or ⌫ removes the last digit.",
    "Press Enter or = to calculate. Escape or Delete to clear all.",
  ],
  howItWorks: [
    "The calculator uses floating-point arithmetic. All processing runs in your browser; no data is sent to any server.",
    "Memory operations (M+, M−, MR, MC, MS) store a value that persists until cleared or the page is refreshed.",
  ],
  about: [
    "Free online calculator for basic and scientific calculations. Supports memory, percentages, square root, and reciprocal.",
    "Works on desktop and mobile. No signup required.",
  ],
  advantages: [
    "Keyboard support for fast input.",
    "Memory functions for multi-step calculations.",
    "Scientific functions: square root, square, reciprocal, percent.",
    "Responsive design for all screen sizes.",
  ],
  useCases: [
    "Quick arithmetic: shopping, splitting bills, tip calculations.",
    "Academic: homework, basic math practice.",
    "Finance: simple interest, percentage calculations.",
    "Daily use: unit conversions, recipe scaling.",
  ],
};

export default function CalculatorPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="calculator" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Calculator</h1>
            <p className="mt-1 text-sm text-slate-500">calculator</p>
          </div>
        </div>
      </div>

      <Calculator />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I use this online calculator on the page (keyboard, memory, history)?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {CALC_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does this calculator evaluate expressions locally in my browser?
            </h3>
            <div className="space-y-2">
              {CALC_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What can this calculator do, and what are its practical limits?
            </h3>
            <div className="space-y-2">
              {CALC_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why use a browser calculator instead of a phone or desktop app?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {CALC_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When is a quick web calculator most helpful for homework or work?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {CALC_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-8">
        <Link
          href="/tools/calculator"
          className="inline-block text-slate-400 underline transition-colors hover:text-slate-200"
        >
          ← Back to Calculator
        </Link>
      </div>
    </div>
  );
}
