import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import Timer from "./Timer";

export const metadata: Metadata = createMetadata({
  title: "Free Countdown Timer Online",
  description:
    "Set countdown timers for cooking, workouts, or focus sessions. Preset times and notification alerts. Free online timer.",
  path: "/tools/time/timer",
  keywords: ["countdown timer", "online timer", "pomodoro", "timer app", "withustools"],
});

const TIMER_GUIDE = {
  usage: [
    "Enter hours, minutes, and seconds manually or click a preset button (5 min, 10 min, 15 min, 30 min, 1 hour).",
    "Click the green play button to start the countdown. Click again to pause.",
    "When the timer reaches zero, you'll see a modal, hear a sound (if enabled), and receive a browser notification.",
    "Use the sound button to toggle audio alerts on or off.",
  ],
  howItWorks: [
    "The timer computes endTime = Date.now() + duration. Every 100ms it checks remaining = endTime - Date.now() and updates the display.",
    "Progress is shown as a circular ring and a bar. Color shifts to amber at 75% and red at 90% remaining.",
    "On completion, a modal opens, an audio file plays (if enabled), and the Notification API is used for browser alerts.",
  ],
  about: [
    "Free online countdown timer with preset options and notification alerts. Ideal for cooking, workouts, Pomodoro sessions, and time management.",
  ],
  advantages: [
    "Preset times: Quick 5–60 minute options.",
    "Visual progress: Circular and bar progress indicators.",
    "Multiple alerts: Modal, sound, and browser notifications.",
    "Pause and resume: Full control during the countdown.",
  ],
  useCases: [
    "Cooking: Time recipe steps and baking.",
    "Pomodoro: 25-minute focus with 5-minute breaks.",
    "Workouts: Interval and rest period timing.",
    "Meetings: Keep discussions on schedule.",
  ],
};

export default function TimerPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="clock" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Countdown Timer</h1>
            <p className="mt-1 text-sm text-slate-500">time</p>
          </div>
        </div>
      </div>

      <Timer />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {TIMER_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {TIMER_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About Countdown Timer</h3>
            <div className="space-y-2">
              {TIMER_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {TIMER_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Real-World Use Cases</h3>
            <ul className="list-disc space-y-2 pl-5">
              {TIMER_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
