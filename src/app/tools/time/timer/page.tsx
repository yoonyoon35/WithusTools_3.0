import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import Timer from "./Timer";

export const metadata: Metadata = createMetadata({
  title: "Free Countdown Timer Online",
  description:
    "Free online countdown timer for cooking, workouts, and focused work. Runs in browser with optional sound and notifications.",
  path: "/tools/time/timer",
  keywords: ["countdown timer", "online timer", "pomodoro", "timer app", "withustools"],
});

const TIMER_GUIDE = {
  usage: [
    "Set your time directly or use quick presets.",
    "Press Start to begin and Pause if you need to stop mid-way.",
    "At zero, you get a popup, sound (if on), and optional browser notification.",
    "Use the sound toggle when you need silent mode.",
  ],
  howItWorks: [
    "This online timer calculates an end timestamp and updates remaining time in the browser.",
    "Visual progress updates while it runs, so you can check status at a glance.",
    "When it ends, alert methods trigger based on your sound and notification settings.",
  ],
  about: [
    "Use this browser countdown timer for desk work, kitchen steps, workouts, or meeting pacing.",
    "No signup or install needed.",
  ],
  advantages: [
    "Preset time buttons.",
    "Pause and resume.",
    "Popup, sound, and browser alerts.",
    "Simple progress visuals.",
  ],
  useCases: [
    "Set a 10-minute review block before a standup.",
    "Run kitchen or coffee brew checkpoints.",
    "Track rest gaps between exercise sets.",
    "Keep meetings from running over.",
  ],
};

const FAQ_ITEMS = [
  {
    question: "How can I set a countdown and get notified when the timer ends?",
    answer:
      "Set a duration, press Start, and allow notifications if you want browser alerts when the countdown finishes.",
  },
  {
    question: "How does this countdown timer run locally in my browser?",
    answer:
      "It calculates the end time in your browser and updates remaining time continuously until it reaches zero.",
  },
  {
    question: "What is a countdown timer best for compared to a stopwatch?",
    answer:
      "A countdown timer is best when you already know the target duration and want an end alert.",
  },
  {
    question: "Why use a browser countdown for cooking, workouts, or meetings?",
    answer:
      "It is quick to open on desktop and keeps alerts near your active work tab.",
  },
  {
    question: "When is a simple web countdown faster than a calendar or phone timer?",
    answer:
      "It is faster for short tasks where you need a timer immediately without opening another app.",
  },
];

export default function TimerPage() {
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
            <h1 className="text-3xl font-bold text-slate-100">Countdown Timer</h1>
            <p className="mt-1 text-sm text-slate-500">
              Online countdown timer in browser
            </p>
          </div>
        </div>
      </div>

      <Timer />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">
          Countdown Timer Guide
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-slate-400">
          Great for short deadlines while you work in a tab. Need elapsed time
          tracking? Use{" "}
          <Link href="/tools/time/stopwatch" className="text-slate-200 underline">
            Stopwatch
          </Link>
          . For focus cycles, try{" "}
          <Link href="/tools/time/pomodoro" className="text-slate-200 underline">
            Pomodoro Timer
          </Link>
          .
        </p>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I set a countdown and get notified when the timer ends?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {TIMER_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does this countdown timer run locally in my browser?
            </h3>
            <div className="space-y-2">
              {TIMER_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What is a countdown timer best for compared to a stopwatch?
            </h3>
            <div className="space-y-2">
              {TIMER_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why use a browser countdown for cooking, workouts, or meetings?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {TIMER_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When is a simple web countdown faster than a calendar or phone timer?
            </h3>
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
