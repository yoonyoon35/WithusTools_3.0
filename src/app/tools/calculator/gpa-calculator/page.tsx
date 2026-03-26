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

      <section className="mt-8 rounded-xl border border-border bg-surface p-6 sm:p-8" aria-labelledby="gpa-conversion-table">
        <h2 id="gpa-conversion-table" className="mb-4 text-lg font-semibold text-slate-200">GPA Conversion Table</h2>
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

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="scrollbar-thin space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {GPA_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {GPA_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About GPA Calculator</h3>
            <div className="space-y-2">
              {GPA_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {GPA_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Real-World Use Cases</h3>
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
