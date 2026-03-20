import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import IntervalTimer from "./IntervalTimer";

export const metadata: Metadata = createMetadata({
  title: "Custom Interval Timer for Workouts & Routines",
  description:
    "Create custom interval timers with your own actions. Set duration and optional names, add rest between actions, and repeat your routine. Free online interval timer.",
  path: "/tools/time/interval-timer",
  keywords: ["interval timer", "workout timer", "routine timer", "HIIT", "withustools"],
});

const INTERVAL_GUIDE = {
  usage: [
    "Add one or more actions. Each action requires a duration (seconds). The action name is optional.",
    "Choose a color for each action. The timer ring uses the current action's color.",
    "Check 'Rest between actions' to insert a rest period between every action. Set the rest duration in seconds.",
    "Check 'Repeat routine' to loop your routine. Enter a number for limited repeats, or leave empty for infinite.",
    "Click Start to begin. The timer cycles through your actions (and rests if enabled) in order.",
  ],
  howItWorks: [
    "Each action has a required duration and optional name. You can add unlimited actions.",
    "When rest is enabled, the sequence becomes: Action1, Rest, Action2, Rest, ...",
    "When repeat is enabled with a count, the routine runs that many times. With no count, it runs until you stop.",
    "The current phase (action or rest) is shown with a countdown. A sound and notification play when each phase ends.",
  ],
  about: [
    "The Interval Timer lets you define custom workflows—workout circuits, study blocks, focus sessions, or any timed routine. Unlike fixed templates, you design the sequence.",
  ],
  advantages: [
    "Fully customizable: Define your own actions and durations.",
    "Color-coded: Each action has a color; the timer reflects the current phase.",
    "Optional rest: Insert rest between actions for recovery.",
    "Repeat: Run your routine once, a set number of times, or indefinitely.",
  ],
  useCases: [
    "Workouts: Circuit training with timed exercises and rest.",
    "Study: Alternating subjects with break intervals.",
    "Cooking: Timed steps with rest for prep.",
    "Presentations: Time-boxed sections with pause between.",
  ],
};

export default function IntervalTimerPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="clock" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Interval Timer</h1>
            <p className="mt-1 text-sm text-slate-500">time</p>
          </div>
        </div>
      </div>

      <IntervalTimer />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {INTERVAL_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {INTERVAL_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About Interval Timer</h3>
            <div className="space-y-2">
              {INTERVAL_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {INTERVAL_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Real-World Use Cases</h3>
            <ul className="list-disc space-y-2 pl-5">
              {INTERVAL_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
