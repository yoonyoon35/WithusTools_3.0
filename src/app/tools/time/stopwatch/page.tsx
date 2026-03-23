import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import Stopwatch from "./Stopwatch";

export const metadata: Metadata = createMetadata({
  title: "Precise Online Stopwatch",
  description:
    "Track elapsed time with millisecond precision. Record lap times and export to Word or Text. Free online stopwatch.",
  path: "/tools/time/stopwatch",
  keywords: ["stopwatch", "lap timer", "time tracking", "chronometer", "withustools"],
});

const STOPWATCH_GUIDE = {
  usage: [
    "Click the green play button to start the stopwatch. Elapsed time updates every 10ms for millisecond precision.",
    "Click the Lap button while running to record a split time. Each lap shows its duration and total elapsed time.",
    "Click the Reset button (when stopped) to clear the time and lap list.",
    "Export lap times to Word or Text for records, analysis, or sharing.",
  ],
  howItWorks: [
    "The stopwatch uses Date.now() and setInterval(10ms) for high-precision timing. Elapsed = now - startTime.",
    "Lap times are recorded by storing the current timestamp; each lap's duration = currentTime - previousLapTime.",
    "Export creates a blob and triggers a download. Data is formatted as plain text with lap numbers and times.",
  ],
  about: [
    "Free online stopwatch with lap recording and export. Ideal for sports, fitness, study sessions, and any activity requiring precise time measurement.",
  ],
  advantages: [
    "Millisecond precision: Accurate to 10ms.",
    "Unlimited laps: Record as many splits as needed.",
    "Export: Save lap data to Word or text files.",
    "No signup: Use immediately in any browser.",
  ],
  useCases: [
    "Sports training: Track interval times and rest periods.",
    "Workouts: Time exercise sets and circuit stations.",
    "Study sessions: Monitor focus time and breaks.",
    "Cooking: Time recipe steps and processes.",
  ],
};

export default function StopwatchPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="clock" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Stopwatch</h1>
            <p className="mt-1 text-sm text-slate-500">time</p>
          </div>
        </div>
      </div>

      <Stopwatch />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {STOPWATCH_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {STOPWATCH_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About Stopwatch</h3>
            <div className="space-y-2">
              {STOPWATCH_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {STOPWATCH_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Real-World Use Cases</h3>
            <ul className="list-disc space-y-2 pl-5">
              {STOPWATCH_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
