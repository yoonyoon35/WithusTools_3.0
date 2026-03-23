import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import Pomodoro from "./Pomodoro";

export const metadata: Metadata = createMetadata({
  title: "Pomodoro Timer for Focus & Productivity",
  description:
    "Pomodoro technique timer: 25-minute focus sessions with 5-minute breaks. Stay productive with structured work intervals. Free online Pomodoro timer.",
  path: "/tools/time/pomodoro",
  keywords: ["pomodoro", "pomodoro timer", "focus timer", "productivity", "time management", "withustools"],
});

const POMODORO_GUIDE = {
  usage: [
    "Click Start to begin a 25-minute focus session. The timer counts down automatically.",
    "When the focus phase ends, a 5-minute short break starts. After 4 focus sessions, you get a 15-minute long break.",
    "Use Skip to move to the next phase immediately. Use Pause to stop the timer.",
    "Enable browser notifications to get alerted when a phase ends, even when the tab is not focused.",
  ],
  howItWorks: [
    "The Pomodoro technique alternates focused work (25 min) with short breaks (5 min). Every 4 work sessions, a long break (15 min) is taken.",
    "This tool auto-advances: when the focus timer ends, it starts a break; when the break ends, it starts the next focus session.",
    "The dots above the timer show progress through the current set of 4 pomodoros. A sound and notification play when each phase completes.",
  ],
  about: [
    "The Pomodoro Technique was developed by Francesco Cirillo in the late 1980s. It uses a kitchen timer (pomodoro is Italian for tomato) to break work into intervals.",
    "Studies suggest that regular breaks improve focus and prevent burnout. The 25/5 minute rhythm is widely used for study, coding, and creative work.",
  ],
  advantages: [
    "Structured focus: Clear work and break boundaries.",
    "Auto-cycling: No need to manually start each phase.",
    "Visual progress: See how many sessions you've completed.",
    "Notifications: Get alerted even when the tab is in the background.",
  ],
  useCases: [
    "Study sessions: 25 minutes of focused reading or practice.",
    "Deep work: Uninterrupted coding or writing.",
    "Meetings: Time-box discussions to stay on schedule.",
    "Creative work: Design, writing, or problem-solving in sprints.",
  ],
};

export default function PomodoroPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="clock" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Pomodoro Timer</h1>
            <p className="mt-1 text-sm text-slate-500">time</p>
          </div>
        </div>
      </div>

      <Pomodoro />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {POMODORO_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {POMODORO_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About the Pomodoro Technique</h3>
            <div className="space-y-2">
              {POMODORO_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {POMODORO_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Real-World Use Cases</h3>
            <ul className="list-disc space-y-2 pl-5">
              {POMODORO_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
