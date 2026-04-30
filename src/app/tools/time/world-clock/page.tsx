import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import WorldClock from "./WorldClock";

export const metadata: Metadata = createMetadata({
  title: "World Clock & Time Zone Converter",
  description:
    "Free online world clock and time zone converter for global meetings and travel planning. Compare city times in your browser.",
  path: "/tools/time/world-clock",
  keywords: ["world clock", "time zone", "timezone converter", "international time", "withustools"],
});

const WORLD_CLOCK_GUIDE = {
  usage: [
    "Check live time across major cities in one view.",
    "Enter a date, time, and source timezone to convert globally.",
    "Use the Now button to fill your current local time fast.",
  ],
  howItWorks: [
    "The world clock uses browser timezone APIs with IANA zone data.",
    "City clocks refresh continuously to show current local time.",
    "The converter maps your input to equivalent times in other zones.",
  ],
  about: [
    "Use it when scheduling calls across countries or checking travel arrivals.",
    "No signup or install needed.",
  ],
  advantages: [
    "Live multi-city clock view.",
    "Timezone conversion in one step.",
    "Browser-local calculations.",
    "DST-aware timezone data.",
  ],
  useCases: [
    "Plan meetings across US, EU, and Asia teams.",
    "Convert departure and arrival times before flights.",
    "Check local time for friends or family abroad.",
  ],
};

const FAQ_ITEMS = [
  {
    question: "How can I compare time zones and cities with this world clock?",
    answer:
      "View live city clocks, then use the converter with your source timezone to see matching times elsewhere.",
  },
  {
    question: "How does this world clock show multiple zones in my browser?",
    answer:
      "It relies on browser timezone formatting APIs and updates each city clock from the same current moment.",
  },
  {
    question: "What is this world clock for, and who uses it most often?",
    answer:
      "It is commonly used by remote teams, travelers, and anyone coordinating schedules across regions.",
  },
  {
    question: "Why use an online world clock instead of searching each city?",
    answer:
      "You can compare all needed zones at once without repeated searches.",
  },
  {
    question: "When do teams rely on world clocks for meetings and travel?",
    answer:
      "Teams use them when planning cross-timezone calls, launch windows, and international travel schedules.",
  },
];

export default function WorldClockPage() {
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
            <h1 className="text-3xl font-bold text-slate-100">World Clock</h1>
            <p className="mt-1 text-sm text-slate-500">
              Online world clock and timezone converter
            </p>
          </div>
        </div>
      </div>

      <WorldClock />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">
          World Clock Guide
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-slate-400">
          Useful for remote teams and international travel planning. Need a
          simple timer for local tasks? Open{" "}
          <Link href="/tools/time/timer" className="text-slate-200 underline">
            Countdown Timer
          </Link>
          .
        </p>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I compare time zones and cities with this world clock?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {WORLD_CLOCK_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does this world clock show multiple zones in my browser?
            </h3>
            <div className="space-y-2">
              {WORLD_CLOCK_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What is this world clock for, and who uses it most often?
            </h3>
            <div className="space-y-2">
              {WORLD_CLOCK_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why use an online world clock instead of searching each city?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {WORLD_CLOCK_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When do teams rely on world clocks for meetings and travel?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {WORLD_CLOCK_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
