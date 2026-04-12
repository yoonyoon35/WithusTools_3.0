import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import Calendar from "./Calendar";

export const metadata: Metadata = createMetadata({
  title: "Free Online Calendar & Event Planner",
  description:
    "Create and manage events with an easy-to-use calendar. Track important dates and organize your schedule. Free online calendar tool.",
  path: "/tools/time/calendar",
  keywords: ["calendar", "event planner", "schedule", "withustools"],
});

const CALENDAR_GUIDE = {
  usage: [
    "Use the arrows to navigate between months. Click any date to select it and view its events.",
    "Click '+ Add' in the events panel to create a new event for the selected date. Enter title and optional description.",
    "Click 'Edit' on an event to update it. Click 'Delete' to remove an event.",
    "Events are stored in your browser's localStorage and persist across sessions.",
  ],
  howItWorks: [
    "The calendar renders a 7×6 grid. The first row is padded with days from the previous month, then the current month's days, then next month's to fill 42 cells.",
    "Events are stored as an object keyed by date (YYYY-MM-DD). Each date maps to an array of { id, title, description }.",
    "Selecting a date updates the events panel. The calendar highlights today and the selected date.",
  ],
  about: [
    "Free online calendar with event management. Create, edit, and delete events. All data stays in your browser.",
  ],
  advantages: [
    "Simple: No signup, no complex setup.",
    "Private: Data never leaves your device.",
    "Persistent: Events saved in localStorage.",
    "Responsive: Works on desktop and mobile.",
  ],
  useCases: [
    "Personal scheduling: Track appointments and reminders.",
    "Work: Meeting and deadline management.",
    "Study: Exam dates and assignment due dates.",
    "Family: Birthdays and events.",
  ],
};

export default function CalendarPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="clock" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Calendar</h1>
            <p className="mt-1 text-sm text-slate-500">time</p>
          </div>
        </div>
      </div>

      <Calendar />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
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
