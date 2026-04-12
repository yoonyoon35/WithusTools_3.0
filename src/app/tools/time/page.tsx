import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";

export const metadata: Metadata = createMetadata({
  title: "Time Tools",
  description:
    "Free online time management tools: alarm clock, stopwatch, countdown timer, Pomodoro timer, date difference calculator, and calendar. Set reminders, track time, and manage your schedule.",
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
    "Choose a tool from the grid above: Alarm Clock, Stopwatch, Countdown Timer, Pomodoro Timer, Interval Timer, Date Difference Calculator, Calendar, or World Clock.",
    "Alarm Clock: Set time using AM/PM format, add alarm name, and enable browser notifications for reliable alerts.",
    "Stopwatch: Click Start to begin timing. Use Lap to record split times. Export laps as Word or Text for records.",
    "Countdown Timer: Enter hours, minutes, seconds or use preset buttons (5–60 min). Enable sound for completion alerts.",
    "Pomodoro Timer: 25-minute focus sessions with 5-min short breaks and 15-min long breaks. Auto-cycles work and break phases.",
    "Interval Timer: Define custom actions with duration and optional names. Add rest between actions and repeat your routine.",
    "Date Difference: Enter two dates to see days, weeks, and months between them. Use 'Use today' for D-day countdown.",
    "Calendar: Click any date to add events. Edit or delete events from the event panel. Data is stored locally in your browser.",
    "World Clock: View current time in major cities. Use the time zone converter to convert a specific time from one zone to others.",
  ],
  howItWorks: [
    "All time tools run entirely in your browser using JavaScript timing APIs. No data is sent to any server—alarms, lap times, and calendar events stay on your device.",
    "Alarm Clock checks the current time every second against your set alarms. When a match occurs, it triggers browser notifications, visual popups, and audio alerts.",
    "Stopwatch uses high-precision Date.now() and setInterval for millisecond-accurate elapsed time. Lap times are calculated from the difference between total and lap-start timestamps.",
    "Countdown Timer computes end-time as Date.now() + duration. It updates the display every 100ms and triggers notifications when remaining time reaches zero.",
    "Pomodoro Timer alternates 25-min focus, 5-min short break, and 15-min long break (after 4 focus sessions). When a phase ends, it auto-starts the next and plays a notification.",
    "Interval Timer builds a sequence from user-defined actions. Each action has duration (required) and optional name. Rest can be inserted between actions; the routine can repeat a set number of times or infinitely.",
    "Date Difference computes the span between two dates in calendar days, weeks, and months. When the end date is in the future, a live D-day countdown updates every second.",
    "Calendar stores events in localStorage by date (YYYY-MM-DD). The monthly grid is rendered from the current month, and events are displayed both on the calendar and in the side panel.",
    "World Clock uses Intl.DateTimeFormat with IANA time zones. It displays live times and converts any local time to equivalent times in other zones.",
  ],
  about: [
    "These free online time tools provide alarm clock, stopwatch, countdown timer, and calendar functionality. All processing runs locally in your browser—your schedule and timing data never leave your device.",
    "Designed for daily use: wake-up alarms, workout timing, cooking timers, Pomodoro focus sessions, and event scheduling. No signup, no installation required.",
    "Works on desktop and mobile. Enable browser notifications for alarms and timers to receive alerts even when the tab is not focused.",
  ],
  advantages: [
    "Privacy: All data stays in your browser. No server storage, no tracking.",
    "No signup: Use immediately without creating an account.",
    "Cross-device: Responsive design works on phones, tablets, and desktops.",
    "Notifications: Browser notifications for alarms and timer completion.",
    "Export: Stopwatch lap times can be exported to Word or text files.",
  ],
  useCases: [
    "Morning routine: Set multiple wake-up alarms and exercise reminders.",
    "Cooking: Use the countdown timer for recipe steps and baking.",
    "Workouts: Track lap times with the stopwatch for interval training.",
    "Pomodoro: 25-minute focus timer with 5-minute breaks.",
    "Meetings: Set timer to keep discussions on schedule.",
    "Study sessions: Time study blocks and break intervals.",
    "Deadlines: Use Date Difference for D-day countdown to project due dates, exams, or trips.",
    "Events: Use the calendar for appointments, deadlines, and reminders.",
    "Remote work: Use World Clock to schedule calls across time zones.",
  ],
};

export default function TimeToolsIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
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
        Alarm clock, stopwatch, countdown timer, Pomodoro timer, interval timer, date difference calculator, calendar, and world clock. Manage your time
        with tools that run entirely in your browser—no signup required.
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
