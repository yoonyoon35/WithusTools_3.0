import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import Link from "next/link";
import GPACalculator from "./GPACalculator";

export const metadata: Metadata = createMetadata({
  title: "Calculate Your Grade Point Average",
  description:
    "Calculate your semester or cumulative GPA. Support for 4.0, 4.3, 4.5, and 5.0 grading scales and credit hours. Free online tool.",
  path: "/tools/calculator/gpa-calculator",
  keywords: [
    "gpa calculator",
    "grade point average",
    "college gpa",
    "semester gpa",
    "cumulative gpa",
    "grading scale",
    "credit hours",
    "withustools",
  ],
});

const GPA_GUIDE = {
  usage: [
    "Select your school's grading scale (4.0, 4.3, 4.5, or 5.0). The 4.0 scale is most common.",
    "Click Add Course to add each course. Enter course name, credit hours, and letter grade.",
    "GPA updates automatically as you change grades or credits.",
    "Use Reset All to start over.",
  ],
  howItWorks: [
    "GPA = Sum of (Grade Points × Credit Hours) ÷ Total Credit Hours.",
    "Letter grades are converted to numeric points based on your selected scale.",
    "All calculations run in your browser. No data is sent to any server.",
  ],
  about: [
    "Free online GPA calculator for students. Supports multiple grading scales used by universities and colleges worldwide.",
    "Use it to plan your semester, track progress, or prepare for college applications and scholarships.",
  ],
  advantages: [
    "Multiple grading scales: 4.0, 4.3, 4.5, and 5.0 (weighted).",
    "Credit hour weighting for accurate weighted GPA.",
    "Real-time updates as you edit grades.",
    "Add or remove courses anytime.",
  ],
  useCases: [
    "Semester planning: See how different grades would affect your GPA.",
    "College applications: Calculate cumulative GPA for applications.",
    "Scholarship eligibility: Check if you meet GPA requirements.",
    "Academic advising: Track progress toward graduation.",
  ],
};

const GPA_FAQ_LINKS: { href: string; question: string }[] = [
  {
    href: "/tools/calculator/gpa-calculator/target-gpa?goal=3.5",
    question: "How much GPA do I need this term to reach a 3.5 cumulative?",
  },
  {
    href: "/tools/calculator/gpa-calculator/target-gpa?goal=3.7",
    question: "What semester GPA do I need for a 3.7 cumulative average?",
  },
  {
    href: "/tools/calculator/gpa-calculator/target-gpa?goal=3.0",
    question: "How can I raise my cumulative GPA to 3.0? (target planner)",
  },
  {
    href: "/tools/calculator/gpa-calculator/target-gpa?reset=1",
    question: "Target cumulative GPA calculator — plan any GPA goal (fresh form)",
  },
  {
    href: "#gpa-conversion-table",
    question: "Letter grade to GPA points chart (4.0, 4.3, 4.5 & 5.0 weighted)",
  },
  {
    href: "/faq/gpa/what-is-weighted-gpa",
    question: "What is weighted GPA? AP, honors & 5.0 scale vs unweighted",
  },
  {
    href: "#gpa-guide-how-to-use",
    question: "How do I use this GPA calculator? Step-by-step quick start",
  },
  {
    href: "/tools/calculator/percentage-calculator",
    question: "Free online percentage calculator for grades & everyday math",
  },
  {
    href: "/tools/calculator",
    question: "Browse all calculators: average, BMI, percentage & scientific",
  },
  {
    href: "/tools/calculator/average-calculator",
    question: "Average calculator (mean) for test scores, grades & numbers",
  },
];

export default function GPACalculatorPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="calculator" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">GPA Calculator</h1>
            <p className="mt-1 text-sm text-slate-500">calculator</p>
          </div>
        </div>
      </div>

      <GPACalculator />

      <section
        id="gpa-conversion-table"
        className="mt-8 scroll-mt-24 rounded-xl border border-border bg-surface p-6 sm:p-8"
        aria-labelledby="gpa-conversion-table-title"
      >
        <h2 id="gpa-conversion-table-title" className="mb-4 text-lg font-semibold text-slate-200">
          GPA Conversion Table
        </h2>
        <p className="mb-4 text-sm text-slate-400">
          Reference for converting letter grades to GPA points by scale. This table matches the values used in the calculator above.
        </p>
        <div className="scrollbar-thin overflow-x-auto">
          <table className="w-full min-w-[400px] text-sm">
            <thead>
              <tr className="border-b border-slate-600">
                <th className="px-3 py-2 text-left font-medium text-slate-300">Grade</th>
                <th className="px-3 py-2 text-center font-medium text-slate-300">4.0 Scale (Unweighted)</th>
                <th className="px-3 py-2 text-center font-medium text-slate-300">4.3 Scale (A+ Scale)</th>
                <th className="px-3 py-2 text-center font-medium text-slate-300">4.5 Scale</th>
                <th className="px-3 py-2 text-center font-medium text-slate-300">5.0 Scale (Weighted)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["A+", "4.0", "4.3", "4.5", "5.0"],
                ["A", "4.0", "4.0", "4.3", "4.5"],
                ["A-", "3.7", "3.7", "4.0", "4.2"],
                ["B+", "3.3", "3.3", "3.5", "3.8"],
                ["B", "3.0", "3.0", "3.3", "3.5"],
                ["B-", "2.7", "2.7", "3.0", "3.2"],
                ["C+", "2.3", "2.3", "2.5", "2.8"],
                ["C", "2.0", "2.0", "2.3", "2.5"],
                ["C-", "1.7", "1.7", "2.0", "2.2"],
                ["D+", "1.3", "1.3", "1.5", "1.8"],
                ["D", "1.0", "1.0", "1.3", "1.5"],
                ["D-", "0.7", "0.7", "1.0", "1.2"],
                ["F", "0.0", "0.0", "0.0", "0.0"],
              ].map((row) => (
                <tr key={row[0]} className="border-b border-slate-700/50">
                  <td className="px-3 py-2 font-medium text-slate-200">{row[0]}</td>
                  <td className="px-3 py-2 text-center text-slate-300">{row[1]}</td>
                  <td className="px-3 py-2 text-center text-slate-300">{row[2]}</td>
                  <td className="px-3 py-2 text-center text-slate-300">{row[3]}</td>
                  <td className="px-3 py-2 text-center text-slate-300">{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-surface p-6 sm:p-8" aria-labelledby="gpa-faq">
        <h3 id="gpa-faq" className="mb-4 text-base font-semibold text-slate-200">
          Common questions (FAQ)
        </h3>
        <p className="mb-4 text-sm text-slate-500">
          {GPA_FAQ_LINKS.length} quick links to GPA planners, this page, and related calculators.
        </p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {GPA_FAQ_LINKS.map((faq) => {
            const className =
              "block rounded-lg border border-slate-600/80 bg-slate-800/30 px-4 py-2.5 text-sm text-slate-300 transition-colors hover:border-slate-500 hover:bg-slate-800/60 hover:text-slate-100";
            return (
              <li key={faq.href + faq.question}>
                {faq.href.startsWith("#") ? (
                  <a href={faq.href} className={className}>
                    {faq.question}
                  </a>
                ) : (
                  <Link href={faq.href} className={className}>
                    {faq.question}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="scrollbar-thin space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 id="gpa-guide-how-to-use" className="mb-3 font-semibold text-slate-200 scroll-mt-24">
              1. How can I calculate GPA, course grades, or a target GPA with this tool?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {GPA_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 id="gpa-guide-how-it-works" className="mb-3 font-semibold text-slate-200 scroll-mt-24">
              2. How does this GPA calculator handle weighted GPA and credit hours?
            </h3>
            <div className="space-y-2">
              {GPA_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 id="gpa-guide-about" className="mb-3 font-semibold text-slate-200 scroll-mt-24">
              3. What grading scales and features does this GPA calculator support?
            </h3>
            <div className="space-y-2">
              {GPA_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why plan GPA and semester goals with a browser-based calculator?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {GPA_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When do students use GPA tools for applications and degree planning?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {GPA_GUIDE.useCases.map((item, i) => (
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
