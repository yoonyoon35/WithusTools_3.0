import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import DateDifference from "./DateDifference";

export const metadata: Metadata = createMetadata({
  title: "Date Difference Calculator | Days, Weeks, Months",
  description:
    "Calculate the difference between two dates in days, weeks, and months. D-day countdown for project deadlines, travel, and exam dates. Free online date calculator.",
  path: "/tools/time/date-difference",
  keywords: [
    "date difference",
    "d-day calculator",
    "days between dates",
    "date calculator",
    "countdown",
    "project deadline",
    "withustools",
  ],
});

const DATE_DIFF_GUIDE = {
  usage: [
    "Enter the start date and end date (target date). Use 'Use today' to quickly set today as the start date.",
    "For D-day countdown: Set start date to today and end date to your target (exam, trip, deadline).",
    "Results show: total days, weeks, months (with extra days), and direction (future/past).",
    "When the end date is in the future, a live D-day countdown updates every second.",
  ],
  howItWorks: [
    "Date difference is calculated in calendar days. Weeks = days ÷ 7. Months count full calendar months plus remaining days.",
    "D-day uses the local timezone. The live countdown shows time remaining until midnight of the target date.",
    "All calculations run in your browser. No data is sent to any server.",
  ],
  about: [
    "Free online date difference calculator. Compare any two dates to see days, weeks, and months between them.",
    "Supports D-day style countdown for future targets: project deadlines, trip dates, exam days, and more.",
  ],
  advantages: [
    "Simple: Two date inputs, instant results.",
    "D-day mode: Live countdown when the target is in the future.",
    "Flexible: Compare any two dates, past or future.",
    "Private: All calculations run locally in your browser.",
  ],
  useCases: [
    "Project deadlines: Days left until release or submission.",
    "Travel: Countdown to vacation or return date.",
    "Exams: D-day for test dates and application deadlines.",
    "Events: Weeks and months until weddings, anniversaries.",
    "Contracts: Days elapsed since start or until end.",
  ],
};

export default function DateDifferencePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="calendar" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Date Difference Calculator</h1>
            <p className="mt-1 text-sm text-slate-500">time</p>
          </div>
        </div>
      </div>

      <DateDifference />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I find the days or weeks between two dates with this tool?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {DATE_DIFF_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does this date calculator measure spans and handle calendars?
            </h3>
            <div className="space-y-2">
              {DATE_DIFF_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What kinds of date gaps can I measure, and how should I read the results?
            </h3>
            <div className="space-y-2">
              {DATE_DIFF_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why use a browser date calculator for planning instead of mental math?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {DATE_DIFF_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When are date differences used for projects, contracts, or travel?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {DATE_DIFF_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
