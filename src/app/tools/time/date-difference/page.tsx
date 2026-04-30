import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import DateDifference from "./DateDifference";

export const metadata: Metadata = createMetadata({
  title: "Date Difference Calculator | Days, Weeks, Months",
  description:
    "Free online date difference calculator for days between dates and D-day planning. Compare past or future dates in your browser.",
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
    "Set a start date and an end date.",
    "Use 'today' for quick D-day checks.",
    "Read total days, weeks, months, and whether the date is upcoming or passed.",
    "Future targets also show a live countdown.",
  ],
  howItWorks: [
    "The tool calculates calendar-day gaps between two dates.",
    "Weeks and months are derived from the same span for quick reading.",
    "All date calculations run locally in your browser.",
  ],
  about: [
    "Use this date calculator for deadline planning, trip countdowns, or contract checks.",
    "It is quick when you just need days between dates without opening a full planner app.",
  ],
  advantages: [
    "Simple two-date input.",
    "Live D-day style countdown.",
    "Works for past and future ranges.",
    "Browser-local processing.",
  ],
  useCases: [
    "Check days left before a launch deadline.",
    "Count down to flights or event dates.",
    "Track exam timelines and application windows.",
    "Measure elapsed time in contracts and projects.",
  ],
};

const FAQ_ITEMS = [
  {
    question: "How can I find the days or weeks between two dates with this tool?",
    answer:
      "Pick start and end dates. The tool returns total days, weeks, and month-based breakdowns instantly.",
  },
  {
    question: "How does this date calculator measure spans and handle calendars?",
    answer:
      "It computes date spans in calendar days and derives weekly and monthly summaries from that span.",
  },
  {
    question: "What kinds of date gaps can I measure, and how should I read the results?",
    answer:
      "You can measure both future and past ranges for deadlines, anniversaries, schedules, and elapsed periods.",
  },
  {
    question: "Why use a browser date calculator for planning instead of mental math?",
    answer:
      "It avoids calendar mistakes and gives immediate totals when plans shift.",
  },
  {
    question: "When are date differences used for projects, contracts, or travel?",
    answer:
      "They are used for deadline tracking, trip prep, exam planning, and contract date checks.",
  },
];

export default function DateDifferencePage() {
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
          <ToolIcon name="calendar" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Date Difference Calculator</h1>
            <p className="mt-1 text-sm text-slate-500">
              Days between dates and D-day calculator
            </p>
          </div>
        </div>
      </div>

      <DateDifference />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">
          Date Difference Guide
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-slate-400">
          Great for release dates, exam prep, and trip planning. Need event
          tracking too? Pair it with{" "}
          <Link href="/tools/time/calendar" className="text-slate-200 underline">
            Calendar
          </Link>
          .
        </p>
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
