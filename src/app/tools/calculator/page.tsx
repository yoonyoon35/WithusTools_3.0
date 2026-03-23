import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";

export const metadata: Metadata = createMetadata({
  title: "Calculator Tools",
  description:
    "Free online calculators: average calculator, BMI calculator, GPA calculator, percentage calculator, and simple scientific calculator. Quick and accurate math tools.",
  path: "/tools/calculator",
  keywords: [
    "average calculator",
    "BMI calculator",
    "GPA calculator",
    "percentage calculator",
    "calculator",
    "mean median mode",
    "body mass index",
    "grade point average",
    "withustools",
  ],
});

const CALCULATOR_TOOLS = [
  {
    slug: "average-calculator",
    name: "Average Calculator",
    description: "Calculate mean, median, mode, and range from your data. Enter numbers separated by commas or spaces for statistical analysis.",
    path: "/tools/calculator/average-calculator",
  },
  {
    slug: "bmi-calculator",
    name: "BMI Calculator",
    description: "Calculate your Body Mass Index with metric or US units. Get health category and recommendations instantly.",
    path: "/tools/calculator/bmi-calculator",
  },
  {
    slug: "calculator",
    name: "Simple Calculator",
    description: "Basic and scientific calculator with memory, square root, percentage, and more. Keyboard support included.",
    path: "/tools/calculator/calculator",
  },
  {
    slug: "gpa-calculator",
    name: "GPA Calculator",
    description: "Calculate semester or cumulative GPA. Support for 4.0, 4.3, 4.5, and 5.0 grading scales with credit hours.",
    path: "/tools/calculator/gpa-calculator",
  },
  {
    slug: "percentage-calculator",
    name: "Percentage Calculator",
    description: "Calculate percentages, percentage change, and more. Perfect for discounts, growth rates, and conversions.",
    path: "/tools/calculator/percentage-calculator",
  },
] as const;

const CALC_INDEX_GUIDE = {
  usage: [
    "Choose a calculator from the grid above: Average, BMI, GPA, Percentage, or Simple Calculator.",
    "Average Calculator: Enter numbers separated by commas or spaces, then click Calculate for mean, median, mode, and range.",
    "BMI Calculator: Enter height and weight in metric (cm/kg) or US (ft/in, lbs). Switch units with the toggle button.",
    "Simple Calculator: Use on-screen buttons or keyboard for basic and scientific operations including memory functions.",
    "GPA Calculator: Add courses with grades and credits, select grading scale, then click Calculate GPA.",
    "Percentage Calculator: Use Basic tab for X% of a number, or Percentage Change tab for increase/decrease between two values.",
  ],
  howItWorks: [
    "All calculators run in your browser. No data is sent to any server. Your input and results stay on your device.",
    "Average Calculator parses your input, validates numbers, and computes mean (average), median (middle value), mode (most frequent), and range.",
    "BMI Calculator uses the standard formula: weight ÷ height². Metric uses kg/m²; US units use (lbs × 703) ÷ height(in)².",
    "GPA Calculator converts letter grades to points based on your selected scale, multiplies by credits, and divides by total credits.",
    "Percentage Calculator: Basic = (percentage × number) ÷ 100; Change = ((new − old) ÷ old) × 100.",
  ],
  about: [
    "Free online calculators for everyday math. No signup required. Works on desktop and mobile.",
    "Designed for students, professionals, and anyone who needs quick, accurate calculations.",
  ],
  advantages: [
    "Private: All calculations run locally in your browser.",
    "No signup: Use immediately without creating an account.",
    "Responsive: Works on phones, tablets, and desktops.",
    "Accurate: Uses standard formulas and handles edge cases.",
  ],
  useCases: [
    "Academic: Grade analysis, GPA tracking, statistical assignments.",
    "Health: BMI monitoring, fitness goals, body composition tracking.",
    "Finance: Discounts, tax, percentage change, ROI calculations.",
    "Daily: Recipe scaling, tips, budget planning, quick math.",
  ],
};

export default function CalculatorIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="calculator" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Calculator Tools</h1>
            <p className="mt-1 text-sm text-slate-500">calculator</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Average calculator, BMI calculator, GPA calculator, percentage calculator, and simple scientific calculator.
        All tools run in your browser—no signup required.
      </p>

      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        {CALCULATOR_TOOLS.map((tool) => (
          <Link
            key={tool.slug}
            href={tool.path}
            className="rounded-xl border border-border bg-surface p-6 transition-all hover:border-slate-600 hover:shadow-lg hover:shadow-black/20"
          >
            <h2 className="text-lg font-semibold text-slate-100">{tool.name}</h2>
            <p className="mt-2 text-sm text-slate-400">{tool.description}</p>
            <span className="mt-3 inline-block text-sm text-blue-400">
              Open {tool.name} →
            </span>
          </Link>
        ))}
      </div>

      <section className="mb-8 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {CALC_INDEX_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {CALC_INDEX_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About Calculator Tools</h3>
            <div className="space-y-2">
              {CALC_INDEX_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {CALC_INDEX_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Real-World Use Cases</h3>
            <ul className="list-disc space-y-2 pl-5">
              {CALC_INDEX_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Link
        href="/"
        className="inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        ← Back to home
      </Link>
    </div>
  );
}
