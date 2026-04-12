import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import AlarmClock from "./AlarmClock";

export const metadata: Metadata = createMetadata({
  title: "Online Alarm Clock with Multiple Alarms",
  description:
    "Set multiple alarms with browser notifications. Wake up on time, remember meetings, or schedule reminders. Free online alarm clock.",
  path: "/tools/time/alarm-clock",
  keywords: ["alarm clock", "online alarm", "multiple alarms", "time reminder", "withustools"],
});

const ALARM_GUIDE = {
  usage: [
    "Enter an alarm name (optional, defaults to 'My Alarm') and select time using AM/PM, hour, and minute.",
    "Click 'Add Alarm' to add the alarm to your list. Alarms are stored in your browser and persist across sessions.",
    "Enable browser notifications when prompted for reliable alerts even when the tab is in the background.",
    "Toggle the bell icon to enable or disable an alarm. Click the edit icon to change the time or name.",
    "Click 'Delete' to remove an alarm. When an alarm triggers, a modal and sound will notify you.",
  ],
  howItWorks: [
    "The alarm clock checks the current time every second against your set alarms. When the hour and minute match and the alarm is active, it triggers.",
    "Multiple notification channels are used: a visual modal popup, Web Audio API beep sound (or fallback audio), and browser Notification API if permitted.",
    "Alarms are stored in localStorage by date. Each alarm has id, name, time (24h format), and active status.",
  ],
  about: [
    "This free online alarm clock lets you set multiple alarms with browser notifications. No app install required—works in any modern browser.",
    "Ideal for wake-up calls, meeting reminders, medication reminders, or any time-based alerts. All data stays in your browser.",
  ],
  advantages: [
    "Multiple alarms: Set and manage unlimited alarms.",
    "Browser notifications: Get alerted even when the tab is not focused.",
    "No signup: Use immediately without creating an account.",
    "Persistent: Alarms are saved in your browser.",
  ],
  useCases: [
    "Morning wake-up and daily routines.",
    "Meeting and appointment reminders.",
    "Medication and break reminders.",
    "Pomodoro and focus session scheduling.",
  ],
};

export default function AlarmClockPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="clock" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Alarm Clock</h1>
            <p className="mt-1 text-sm text-slate-500">time</p>
          </div>
        </div>
      </div>

      <AlarmClock />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
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
