import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import IntervalTimer from "./IntervalTimer";

export const metadata: Metadata = createMetadata({
  title: "Custom Interval Timer for Workouts & Routines",
  description:
    "Free online interval timer for workouts and routines. Build custom rounds, add rest, and repeat cycles in your browser.",
  path: "/tools/time/interval-timer",
  keywords: ["interval timer", "workout timer", "routine timer", "HIIT", "withustools"],
});

const INTERVAL_GUIDE = {
  usage: [
    "Add your actions with duration in seconds.",
    "Turn on rest between actions if you need recovery time.",
    "Set repeat count, or leave it open for continuous rounds.",
    "Press Start and the routine runs in sequence.",
  ],
  howItWorks: [
    "The interval timer builds a phase list from your actions and optional rest steps.",
    "Each phase counts down in order, then moves to the next.",
    "When repeat is enabled, the list starts again after one full cycle.",
    "Phase changes trigger sound and optional browser notifications.",
  ],
  about: [
    "This browser interval timer is useful for HIIT, study rounds, and repeat task routines.",
    "You control the sequence instead of forcing a fixed template.",
  ],
  advantages: [
    "Custom action list.",
    "Optional rest phases.",
    "Repeat controls.",
    "Color-based phase view.",
  ],
  useCases: [
    "Run a 40s work / 20s rest circuit at home.",
    "Alternate study subjects with fixed break slots.",
    "Time multi-step drills for coaching sessions.",
    "Keep rehearsals paced section by section.",
  ],
};

const FAQ_ITEMS = [
  {
    question: "How can I set work and rest rounds with this interval timer?",
    answer:
      "Add actions with durations, enable rest if needed, choose repeat settings, and start the routine.",
  },
  {
    question: "How does this HIIT-style timer chain rounds in the browser?",
    answer:
      "It runs phases in order and automatically advances through action and rest blocks, then repeats by your setting.",
  },
  {
    question: "What is interval training, and how does this timer support it?",
    answer:
      "Interval training alternates effort and recovery. This tool supports it with custom phase durations and repeats.",
  },
  {
    question: "Why use a browser interval timer for workouts or focus blocks?",
    answer:
      "You can launch it instantly on desktop and keep timing beside your workout notes or task list.",
  },
  {
    question: "When do athletes and coaches use repeating interval timers?",
    answer:
      "They use them for circuits, conditioning rounds, drill blocks, and recovery pacing.",
  },
];

export default function IntervalTimerPage() {
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
            <h1 className="text-3xl font-bold text-slate-100">Interval Timer</h1>
            <p className="mt-1 text-sm text-slate-500">
              Online interval timer for custom rounds
            </p>
          </div>
        </div>
      </div>

      <IntervalTimer />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">
          Interval Timer Guide
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-slate-400">
          Build your own round flow with action and rest steps. For simple
          single-duration countdowns, use{" "}
          <Link href="/tools/time/timer" className="text-slate-200 underline">
            Countdown Timer
          </Link>
          .
        </p>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I set work and rest rounds with this interval timer?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {INTERVAL_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does this HIIT-style timer chain rounds in the browser?
            </h3>
            <div className="space-y-2">
              {INTERVAL_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What is interval training, and how does this timer support it?
            </h3>
            <div className="space-y-2">
              {INTERVAL_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why use a browser interval timer for workouts or focus blocks?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {INTERVAL_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When do athletes and coaches use repeating interval timers?
            </h3>
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
