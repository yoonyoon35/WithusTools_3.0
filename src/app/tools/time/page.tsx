import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";

export const metadata: Metadata = createMetadata({
  title: "Time Tools",
  description:
    "Free online time tools in one place: alarm clock, online timer, stopwatch, Pomodoro, calendar, and world clock. Runs in your browser with no signup.",
  path: "/tools/time",
  keywords: [
    "alarm clock",
    "stopwatch",
    "timer",
    "pomodoro",
    "interval timer",
    "date difference",
    "d-day calculator",
    "calendar",
    "world clock",
    "time zone",
    "time management",
    "countdown",
    "withustools",
  ],
});

const TIME_TOOLS = [
  {
    slug: "alarm-clock",
    name: "Alarm Clock",
    description: "Set multiple alarms with browser notifications. Wake up on time, remember meetings, or schedule reminders.",
    path: "/tools/time/alarm-clock",
    icon: "bell",
  },
  {
    slug: "stopwatch",
    name: "Stopwatch",
    description: "Track elapsed time with millisecond precision. Record lap times and export results for sports, fitness, or study.",
    path: "/tools/time/stopwatch",
    icon: "stopwatch",
  },
  {
    slug: "timer",
    name: "Countdown Timer",
    description: "Set countdown timers for cooking, workouts, or focus sessions. Preset times and notification alerts included.",
    path: "/tools/time/timer",
    icon: "timer",
  },
  {
    slug: "pomodoro",
    name: "Pomodoro Timer",
    description: "25-min focus, 5-min short break, 15-min long break. Auto-cycles through work and break phases for productivity.",
    path: "/tools/time/pomodoro",
    icon: "timer",
  },
  {
    slug: "interval-timer",
    name: "Interval Timer",
    description: "Create custom routines with your own actions. Set duration, optional names, colors, rest between actions, and repeat.",
    path: "/tools/time/interval-timer",
    icon: "timer",
  },
  {
    slug: "date-difference",
    name: "Date Difference Calculator",
    description: "Calculate days, weeks, and months between two dates. D-day countdown for project deadlines, travel, and exam dates.",
    path: "/tools/time/date-difference",
    icon: "calendar",
  },
  {
    slug: "calendar",
    name: "Calendar",
    description: "Create and manage events with an easy-to-use calendar. Track important dates and organize your schedule.",
    path: "/tools/time/calendar",
    icon: "calendar",
  },
  {
    slug: "world-clock",
    name: "World Clock",
    description: "View current time in major cities worldwide. Convert times between time zones for meetings, travel, or remote work.",
    path: "/tools/time/world-clock",
    icon: "clock",
  },
] as const;

const TIME_INDEX_GUIDE = {
  usage: [
    "Pick a tool from the grid: alarm clock, stopwatch, countdown timer, Pomodoro, interval timer, date difference, calendar, or world clock.",
    "Set the values you need, start it, and keep the tab open while you work.",
    "Allow browser notifications if you want alerts when the tab is in the background.",
    "Use the right tool for the moment: meeting reminder, focus sprint, workout set, or timezone check.",
  ],
  howItWorks: [
    "These tools run in your browser, so alarms, lap times, and calendar entries stay on your device.",
    "Alarms and timers check time continuously and trigger popup, sound, and optional browser notifications.",
    "Stopwatch tracks elapsed time and laps, date difference calculates day spans, and world clock converts across time zones.",
    "Calendar events are saved locally, so your schedule is still there when you come back in the same browser.",
  ],
  about: [
    "This page bundles practical online time tools for day-to-day work: alarm clock, online timer, stopwatch, Pomodoro, calendar, and world clock.",
    "Use them for quick desk reminders, meeting pacing, study blocks, cooking, or deadline tracking.",
    "No signup, no install. Open and use.",
  ],
  advantages: [
    "Data stays in your browser.",
    "No signup needed.",
    "Works on desktop and mobile.",
    "Optional browser notifications.",
    "Stopwatch lap export support.",
  ],
  useCases: [
    "Start an alarm clock before a meeting so you do not miss handoff time.",
    "Run an online timer for cooking, breaks, or short focused tasks.",
    "Use Pomodoro for study sprints and the stopwatch for workout sets.",
    "Check date difference for D-day planning and world clock for remote calls.",
  ],
};

const FAQ_ITEMS = [
  {
    question: "How do I start using timers, clocks, or calendar tools here?",
    answer:
      "Pick a tool from the grid, set your values, and start. Allow notifications if you want alerts while working in other tabs.",
  },
  {
    question: "How do time tools stay accurate while running in the browser?",
    answer:
      "They rely on browser timing and date APIs to track elapsed time, trigger alarms, and update countdowns in real time.",
  },
  {
    question: "What time and productivity tools can I use from this category?",
    answer:
      "You can use alarm clock, stopwatch, countdown timer, Pomodoro timer, interval timer, date difference calculator, calendar, and world clock.",
  },
  {
    question: "Why use browser clocks and timers instead of installing separate apps?",
    answer:
      "They open instantly, need no signup, and keep your data in the same browser for quick repeat use.",
  },
  {
    question: "When are Pomodoro timers, alarms, and world clocks most useful?",
    answer:
      "They are useful for focus sessions, meeting reminders, deadline planning, and scheduling across time zones.",
  },
];

export default function TimeToolsIndexPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
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
            <h1 className="text-3xl font-bold text-slate-100">Time Tools</h1>
            <p className="mt-1 text-sm text-slate-500">time</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Alarm clock, stopwatch, online timer, Pomodoro, calendar, and world
        clock in one place. Good for meeting reminders, focus sessions, and
        daily planning.
      </p>

      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        {TIME_TOOLS.map((tool) => (
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
          Time Tools Guide
        </h2>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How do I start using timers, clocks, or calendar tools here?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {TIME_INDEX_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How do time tools stay accurate while running in the browser?
            </h3>
            <div className="space-y-2">
              {TIME_INDEX_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What time and productivity tools can I use from this category?
            </h3>
            <div className="space-y-2">
              {TIME_INDEX_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why use browser clocks and timers instead of installing separate apps?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {TIME_INDEX_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When are Pomodoro timers, alarms, and world clocks most useful?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {TIME_INDEX_GUIDE.useCases.map((item, i) => (
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
