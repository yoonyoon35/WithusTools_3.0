import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import AlarmClock from "./AlarmClock";

export const metadata: Metadata = createMetadata({
  title: "Online Alarm Clock with Multiple Alarms",
  description:
    "Set multiple browser alarms with optional notifications—free online alarm clock, no signup. Meetings, pills, or quick tab-side reminders.",
  path: "/tools/time/alarm-clock",
  keywords: ["alarm clock", "online alarm", "multiple alarms", "time reminder", "withustools"],
});

const ALARM_GUIDE = {
  usage: [
    "Pick a name if you want (otherwise it stays \"My Alarm\"), then set AM/PM, hour, and minute.",
    "Hit Add Alarm. It lands in your list and stays there—same browser, next visit included.",
    "If the browser asks for notification permission, allow it if you want pings even when this tab isn't up front.",
    "Bell icon = on/off. Pencil = change time or label.",
    "Delete removes it for good. When it fires, you get a popup and a sound.",
  ],
  howItWorks: [
    "It compares the clock once per second to each active alarm. Same hour and minute → it goes off.",
    "You'll see a modal, hear a beep (Web Audio, with a fallback if needed), and get a system-style notification if you turned those on.",
    "Everything is saved in localStorage by day: id, name, time (stored as 24h), and whether it's on.",
  ],
  about: [
    "It's a simple online alarm in the tab—no install, any normal browser. Good when you already have the laptop open and don't want to fish for your phone.",
    "Handy for \"call starts in 20 minutes,\" pill times, stretching breaks, that kind of thing. Nothing gets uploaded; it's all on your machine. If you close the site or the browser blocks audio/notifications, you might miss it—same as any browser alarm.",
  ],
  advantages: [
    "Stack as many alarms as you like.",
    "Notifications can catch you when the tab is in the background.",
    "No account—open the page and go.",
    "Your list survives refresh and coming back later.",
  ],
  useCases: [
    "You're at the desk and the phone's across the room.",
    "You want a spare timer next to your calendar or docs.",
    "Quick \"don't forget this\" without installing another app.",
  ],
};

const FAQ_ITEMS = [
  {
    question: "How can I set a one-time alarm with sound in this browser tool?",
    answer:
      "Pick AM/PM, hour, and minute, then add your alarm. Keep notification permission on if you want browser alerts while working in other tabs.",
  },
  {
    question: "How does this alarm clock notify me while the page or tab is open?",
    answer:
      "This browser alarm checks time every second and triggers a popup, sound, and optional browser notification when your alarm time matches.",
  },
  {
    question: "What is this online alarm for, and what are its practical limits?",
    answer:
      "Use this online alarm clock for desk reminders like meetings or medication. It runs in your browser, so closing the site or blocked audio/notifications can affect alerts.",
  },
  {
    question: "Why set quick alarms in the browser for tasks or routines?",
    answer:
      "You can stack multiple alarms, keep them saved in the same browser, and use them instantly with no signup.",
  },
  {
    question: "When might a web alarm complement or replace a phone alarm?",
    answer:
      "A web alarm is useful when you already work on your laptop and want quick reminders beside your calendar, notes, or docs.",
  },
];

export default function AlarmClockPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
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
            <h1 className="text-3xl font-bold text-slate-100">Alarm Clock</h1>
            <p className="mt-1 text-sm text-slate-500">
              Free online alarm clock for browser reminders
            </p>
          </div>
        </div>
      </div>

      <AlarmClock />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">
          Online Alarm Guide
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-slate-400">
          This browser alarm helps with quick meeting checks, medication reminders,
          and short task timers while you work. If you need other time tools, try{" "}
          <Link href="/tools/time/countdown-timer" className="text-slate-200 underline">
            Countdown Timer
          </Link>{" "}
          or{" "}
          <Link href="/tools/time/stopwatch" className="text-slate-200 underline">
            Stopwatch
          </Link>
          .
        </p>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I set a one-time alarm with sound in this browser tool?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {ALARM_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does this alarm clock notify me while the page or tab is open?
            </h3>
            <div className="space-y-2">
              {ALARM_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What is this online alarm for, and what are its practical limits?
            </h3>
            <div className="space-y-2">
              {ALARM_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why set quick alarms in the browser for tasks or routines?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {ALARM_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When might a web alarm complement or replace a phone alarm?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {ALARM_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
