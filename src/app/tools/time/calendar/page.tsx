import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import Calendar from "./Calendar";

export const metadata: Metadata = createMetadata({
  title: "Free Online Calendar & Event Planner",
  description:
    "Free online calendar for quick event planning in your browser. Add, edit, and manage date-based reminders with no signup.",
  path: "/tools/time/calendar",
  keywords: ["calendar", "event planner", "schedule", "withustools"],
});

const CALENDAR_GUIDE = {
  usage: [
    "Move month to month with the arrows and pick a date.",
    "Add events from the side panel with title and optional note.",
    "Edit or delete events anytime from the list.",
    "Your events stay saved in the same browser.",
  ],
  howItWorks: [
    "The calendar renders a monthly grid and keeps selected-date details in the side panel.",
    "Events are saved by date key in browser local storage.",
    "Today and the selected date are highlighted for quick scanning.",
  ],
  about: [
    "This browser calendar is built for lightweight planning without opening a full scheduling suite.",
    "Use it for personal reminders, deadlines, and weekly check-ins.",
  ],
  advantages: [
    "Quick add/edit/delete flow.",
    "No signup required.",
    "Local browser storage.",
    "Works on mobile and desktop.",
  ],
  useCases: [
    "Track class deadlines and exam dates.",
    "Keep personal appointments visible this month.",
    "Plan team check-ins and milestone dates.",
    "Store family events and reminders.",
  ],
};

const FAQ_ITEMS = [
  {
    question: "How can I browse months, pick dates, and use this calendar on the page?",
    answer:
      "Navigate months with arrows, select a date, then add or manage events from the panel.",
  },
  {
    question: "How does this calendar widget work in the browser?",
    answer:
      "It renders a month grid and stores events in local browser data keyed by date.",
  },
  {
    question: "What does this online calendar offer for quick planning and reference?",
    answer:
      "It offers lightweight date-based event tracking with fast add, edit, and delete actions.",
  },
  {
    question: "Why keep a lightweight web calendar open while scheduling?",
    answer:
      "It is useful for fast checks and edits without switching to heavier calendar apps.",
  },
  {
    question: "When is a quick calendar view enough without a full scheduling app?",
    answer:
      "It is enough for personal reminders, weekly planning, and small team schedules.",
  },
];

export default function CalendarPage() {
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
          <ToolIcon name="clock" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Calendar</h1>
            <p className="mt-1 text-sm text-slate-500">
              Online calendar for quick event planning
            </p>
          </div>
        </div>
      </div>

      <Calendar />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">
          Calendar Guide
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-slate-400">
          Good for day-to-day reminders and lightweight schedule tracking. If
          you need day-gap math, use{" "}
          <Link
            href="/tools/time/date-difference"
            className="text-slate-200 underline"
          >
            Date Difference Calculator
          </Link>
          .
        </p>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I browse months, pick dates, and use this calendar on the page?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {CALENDAR_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does this calendar widget work in the browser?
            </h3>
            <div className="space-y-2">
              {CALENDAR_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What does this online calendar offer for quick planning and reference?
            </h3>
            <div className="space-y-2">
              {CALENDAR_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why keep a lightweight web calendar open while scheduling?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {CALENDAR_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When is a quick calendar view enough without a full scheduling app?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {CALENDAR_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
