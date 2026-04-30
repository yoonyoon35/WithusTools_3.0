import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import Stopwatch from "./Stopwatch";

export const metadata: Metadata = createMetadata({
  title: "Precise Online Stopwatch",
  description:
    "Free online stopwatch for lap timing and quick elapsed tracking in your browser. Start, lap, reset, and export records.",
  path: "/tools/time/stopwatch",
  keywords: ["stopwatch", "lap timer", "time tracking", "chronometer", "withustools"],
});

const STOPWATCH_GUIDE = {
  usage: [
    "Hit Start and the stopwatch begins right away.",
    "Press Lap anytime to save split points while it keeps running.",
    "Pause when needed, then Reset to clear everything.",
    "Export laps to Word or Text if you want a saved log.",
  ],
  howItWorks: [
    "The browser stopwatch updates elapsed time from the current timestamp while running.",
    "Each lap stores a split point, so you can compare sections without stopping.",
    "Export generates a simple file with lap numbers and times.",
  ],
  about: [
    "This online stopwatch is for quick timing at your desk: workouts, practice drills, presentations, or focused study blocks.",
    "No signup and no install. Open the page and run it in your browser.",
  ],
  advantages: [
    "Fast Start/Lap/Reset controls.",
    "Unlimited lap recording.",
    "Word and Text export.",
    "Works instantly in browser.",
  ],
  useCases: [
    "Track set rest times during gym circuits.",
    "Time speaking drills before a meeting.",
    "Measure short study sprints between classes.",
    "Run quick kitchen prep checkpoints.",
  ],
};

const FAQ_ITEMS = [
  {
    question: "How can I start, lap, and reset the stopwatch on this page?",
    answer:
      "Press Start to begin, Lap to mark splits, Pause when needed, and Reset to clear the timer and lap list.",
  },
  {
    question: "How does this stopwatch measure elapsed time in the browser?",
    answer:
      "It uses browser time updates while running and calculates elapsed and lap values from timestamps.",
  },
  {
    question: "What can this online stopwatch do, and how accurate is it?",
    answer:
      "It provides real-time elapsed tracking with lap recording and export for practical day-to-day timing tasks.",
  },
  {
    question: "Why use a web stopwatch instead of switching to a phone app?",
    answer:
      "It is faster when you are already on your laptop and want timing beside your docs, sheets, or slides.",
  },
  {
    question: "When is a stopwatch useful for sports, labs, or presentations?",
    answer:
      "Use it for workout intervals, rehearsal timing, classroom exercises, and quick process checks.",
  },
];

export default function StopwatchPage() {
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
            <h1 className="text-3xl font-bold text-slate-100">Stopwatch</h1>
            <p className="mt-1 text-sm text-slate-500">
              Online stopwatch with lap timer in browser
            </p>
          </div>
        </div>
      </div>

      <Stopwatch />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">
          Stopwatch Guide
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-slate-400">
          Good for workouts, speaking practice, and short work sprints. Need a
          reverse timer instead? Try{" "}
          <Link href="/tools/time/timer" className="text-slate-200 underline">
            Countdown Timer
          </Link>{" "}
          or{" "}
          <Link href="/tools/time/pomodoro" className="text-slate-200 underline">
            Pomodoro Timer
          </Link>
          .
        </p>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I start, lap, and reset the stopwatch on this page?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {STOPWATCH_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does this stopwatch measure elapsed time in the browser?
            </h3>
            <div className="space-y-2">
              {STOPWATCH_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What can this online stopwatch do, and how accurate is it?
            </h3>
            <div className="space-y-2">
              {STOPWATCH_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why use a web stopwatch instead of switching to a phone app?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {STOPWATCH_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When is a stopwatch useful for sports, labs, or presentations?
            </h3>
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
