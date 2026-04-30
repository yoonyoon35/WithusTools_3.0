import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import Pomodoro from "./Pomodoro";

export const metadata: Metadata = createMetadata({
  title: "Pomodoro Timer for Focus & Productivity",
  description:
    "Free online Pomodoro timer for focus sessions in your browser. Run 25/5 cycles, short breaks, and long breaks with alerts.",
  path: "/tools/time/pomodoro",
  keywords: ["pomodoro", "pomodoro timer", "focus timer", "productivity", "time management", "withustools"],
});

const POMODORO_GUIDE = {
  usage: [
    "Press Start to begin a focus session.",
    "After focus ends, break phases move automatically.",
    "Use Skip to jump ahead or Pause to stop for a moment.",
    "Turn on browser notifications if you want phase-end alerts in background tabs.",
  ],
  howItWorks: [
    "The browser Pomodoro timer cycles focus and break phases on a fixed rhythm.",
    "After several focus rounds, it inserts a longer break automatically.",
    "Progress markers, sound, and optional notifications help you keep pace.",
  ],
  about: [
    "This online Pomodoro timer is built for focused desk work: coding, writing, studying, or review sessions.",
    "It keeps work blocks short and breaks visible so you can sustain concentration longer.",
  ],
  advantages: [
    "Focus/break cycle automation.",
    "Quick Start, Pause, Skip controls.",
    "Session progress indicators.",
    "Optional browser notifications.",
  ],
  useCases: [
    "Run deep-work blocks before checking messages.",
    "Use study rounds with short reset breaks.",
    "Time-box writing or design sessions.",
    "Keep team review sessions on a steady cadence.",
  ],
};

const FAQ_ITEMS = [
  {
    question: "How can I run Pomodoro work and break intervals on this page?",
    answer:
      "Press Start to begin focus time. The timer cycles into breaks automatically, and you can Pause or Skip anytime.",
  },
  {
    question: "How does this timer run focus and rest cycles in the browser?",
    answer:
      "It manages phase durations in browser time and switches phases when each interval completes.",
  },
  {
    question: "What is the Pomodoro Technique, and how does this tool support it?",
    answer:
      "Pomodoro is a focus-and-break rhythm. This tool runs that rhythm with automatic transitions and clear progress cues.",
  },
  {
    question: "Why use a browser Pomodoro timer for study or deep work?",
    answer:
      "It is quick to open, keeps your timing near your work tab, and reduces context switching.",
  },
  {
    question: "Where are Pomodoro timers most helpful for students and remote work?",
    answer:
      "They help in study blocks, coding sessions, writing sprints, and meeting prep.",
  },
];

export default function PomodoroPage() {
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
            <h1 className="text-3xl font-bold text-slate-100">Pomodoro Timer</h1>
            <p className="mt-1 text-sm text-slate-500">
              Online Pomodoro timer for focus cycles
            </p>
          </div>
        </div>
      </div>

      <Pomodoro />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">
          Pomodoro Guide
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-slate-400">
          Best when you want short focus bursts and planned breaks. Need a
          simple end-time alert? Use{" "}
          <Link href="/tools/time/timer" className="text-slate-200 underline">
            Countdown Timer
          </Link>
          . If you only need elapsed tracking, go with{" "}
          <Link href="/tools/time/stopwatch" className="text-slate-200 underline">
            Stopwatch
          </Link>
          .
        </p>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I run Pomodoro work and break intervals on this page?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {POMODORO_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does this timer run focus and rest cycles in the browser?
            </h3>
            <div className="space-y-2">
              {POMODORO_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What is the Pomodoro Technique, and how does this tool support it?
            </h3>
            <div className="space-y-2">
              {POMODORO_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why use a browser Pomodoro timer for study or deep work?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {POMODORO_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. Where are Pomodoro timers most helpful for students and remote work?
            </h3>
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
