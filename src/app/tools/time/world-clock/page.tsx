import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import WorldClock from "./WorldClock";

export const metadata: Metadata = createMetadata({
  title: "World Clock & Time Zone Converter",
  description:
    "View current time in major cities worldwide. Convert times between time zones for meetings, travel, or remote work. Free online world clock and time zone converter.",
  path: "/tools/time/world-clock",
  keywords: ["world clock", "time zone", "timezone converter", "international time", "withustools"],
});

const WORLD_CLOCK_GUIDE = {
  usage: [
    "World clocks: See the current time in 10 major cities (UTC, New York, LA, London, Tokyo, Seoul, etc.). Updates every second.",
    "Time zone converter: Enter a date, time (24h), and the timezone it's in. Instantly see the equivalent time in all listed zones.",
    "Use the 'Now' button to quickly fill in your current local time and timezone for conversion.",
  ],
  howItWorks: [
    "Uses the browser's Intl.DateTimeFormat API with IANA time zone IDs. All calculations run locally—no server requests.",
    "World clocks refresh every second. The converter finds the UTC moment that corresponds to your specified local time in the chosen zone.",
  ],
  about: [
    "Free online world clock and time zone converter. Ideal for remote work, international meetings, travel planning, and staying in sync with global team members.",
    "Flag icons from flagicons.lipis.dev (MIT License).",
  ],
  advantages: [
    "No signup: Use immediately in your browser.",
    "Privacy: All calculations run locally.",
    "Accurate: Uses system time zone database (DST-aware).",
  ],
  useCases: [
    "Remote work: Schedule calls across time zones.",
    "Travel: Convert flight times and plan arrival.",
    "Family: Keep track of relatives abroad.",
  ],
};

export default function WorldClockPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="clock" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">World Clock</h1>
            <p className="mt-1 text-sm text-slate-500">time</p>
          </div>
        </div>
      </div>

      <WorldClock />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {WORLD_CLOCK_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {WORLD_CLOCK_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About World Clock</h3>
            <div className="space-y-2">
              {WORLD_CLOCK_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {WORLD_CLOCK_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Use Cases</h3>
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
