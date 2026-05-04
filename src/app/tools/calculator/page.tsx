import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";

export const metadata: Metadata = createMetadata({
  title: "Calculator Tools",
  description:
    "Free online calculator tools in one place: average calculator, standard deviation calculator, GPA calculator, percentage calculator, programmer calculator, scientific calculator, and more.",
  path: "/tools/calculator",
  keywords: [
    "average calculator",
    "standard deviation calculator",
    "GPA calculator",
    "percentage calculator",
    "programmer calculator",
    "binary calculator",
    "hex calculator",
    "calculator",
    "mean median mode",
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
    slug: "standard-deviation-calculator",
    name: "Standard Deviation Calculator",
    description:
      "Population and sample variance & standard deviation, mean, sum, count, and standard error of the mean. Paste comma-, space-, or line-separated values.",
    path: "/tools/calculator/standard-deviation-calculator",
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
  {
    slug: "programmer-calculator",
    name: "Programmer Calculator",
    description:
      "Binary, hex, octal, and decimal in one view. 64-bit unsigned (QWORD), keypad or bit-toggle grid, bitwise shifts, and memory.",
    path: "/tools/calculator/programmer-calculator",
  },
] as const;

const CALC_INDEX_GUIDE = {
  usage: [
    "Pick the calculator that fits your task: average, standard deviation, GPA, percentage, programmer, or simple calculator.",
    "Enter your values and click Calculate to get results right away.",
    "If you need repeated checks, change only the input values and recalculate.",
    "Switch tools by use case: stats, grades, percentages, or number systems.",
  ],
  howItWorks: [
    "All calculations run in your browser, so your inputs and outputs stay on your device.",
    "Each calculator applies formulas that match its specific task.",
    "You can move between stats, GPA, percentage, and programmer tools from the same hub page.",
  ],
  about: [
    "This page is an online calculator hub for quick day-to-day math tasks.",
    "It is useful for assignments, work checks, budgeting, and general numeric work.",
  ],
  advantages: [
    "Runs directly in browser.",
    "No signup required.",
    "Works on mobile and desktop.",
    "Task-focused calculator set.",
  ],
  useCases: [
    "Check GPA or averages before grading submissions.",
    "Calculate discount rates and percentage changes for reports.",
    "Verify base conversions and bit logic during coding.",
  ],
};

const FAQ_ITEMS = [
  {
    question: "How do I find and use the right calculator for my task?",
    answer:
      "Pick the calculator that matches your task, enter values, and run the calculation. Switch tools when the task changes.",
  },
  {
    question: "How do calculator tools compute results in the browser?",
    answer:
      "Each tool applies its own formula in-browser, so inputs and outputs stay on your device.",
  },
  {
    question: "What calculators are offered here, and what is each one for?",
    answer:
      "You can use average, standard deviation, GPA, percentage, programmer, and simple calculator tools for daily math tasks.",
  },
  {
    question: "Why use dedicated online calculators for GPA or percentages?",
    answer:
      "They cut transcription mistakes and give you the same formula every time you re-run the numbers.",
  },
  {
    question: "When are these calculators useful for school or finance?",
    answer:
      "They are useful for assignments, budgeting, reporting, and quick numeric checks at work.",
  },
];

export default function CalculatorIndexPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="calculator" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Calculator Tools</h1>
            <p className="mt-1 text-sm text-slate-500">
              Online calculator tools for daily math
            </p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Average calculator, standard deviation calculator, GPA calculator, percentage
        calculator, programmer calculator, scientific calculator, and more. For BMI,
        body fat, waist-to-hip, BMR, and TDEE, use{" "}
        <Link href="/tools/health" className="text-slate-200 underline">
          Health Tools
        </Link>
        .
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
        <h2 className="mb-3 text-xl font-semibold text-slate-200">
          Calculator Tools Guide
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-slate-400">
          Choose the tool that matches your goal first. If you also need
          scheduling support, try{" "}
          <Link href="/tools/time" className="text-slate-200 underline">
            Time Tools
          </Link>
          . For measurement and unit changes, use{" "}
          <Link href="/tools/unit-converter" className="text-slate-200 underline">
            Unit Converter
          </Link>
          . For BMI, tape body fat, waist-to-hip ratio, muscle index, and calorie estimates, use{" "}
          <Link href="/tools/health" className="text-slate-200 underline">
            Health Tools
          </Link>
          .
        </p>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How do I find and use the right calculator for my task?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {CALC_INDEX_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How do calculator tools compute results in the browser?
            </h3>
            <div className="space-y-2">
              {CALC_INDEX_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What calculators are offered here, and what is each one for?
            </h3>
            <div className="space-y-2">
              {CALC_INDEX_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why use dedicated online calculators for GPA or percentages?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {CALC_INDEX_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When are these calculators useful for school or finance?
            </h3>
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
