"use client";

import { useState, useEffect } from "react";

function formatDate(date: Date) {
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
}

function getToday() {
  return formatDate(new Date());
}

function diffInDays(start: Date, end: Date): number {
  const msPerDay = 24 * 60 * 60 * 1000;
  const startDay = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  const endDay = new Date(end.getFullYear(), end.getMonth(), end.getDate());
  return Math.round((endDay.getTime() - startDay.getTime()) / msPerDay);
}

function getMonthsAndDays(start: Date, end: Date): { months: number; days: number } {
  if (end < start) {
    const rev = getMonthsAndDays(end, start);
    return { months: -rev.months, days: -rev.days };
  }
  let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  let days = end.getDate() - start.getDate();
  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
    days += prevMonth.getDate();
  }
  return { months, days };
}

interface DiffResult {
  days: number;
  hours: number;
  weeks: number;
  months: number;
  extraDays: number;
  isFuture: boolean;
}

function calculateDiff(startStr: string, endStr: string): DiffResult | null {
  if (!startStr || !endStr) return null;
  const start = new Date(startStr + "T00:00:00");
  const end = new Date(endStr + "T00:00:00");
  if (isNaN(start.getTime()) || isNaN(end.getTime())) return null;

  const days = diffInDays(start, end);
  const diffMs = end.getTime() - start.getTime();
  const hours = Math.round(diffMs / (1000 * 60 * 60));
  const { months, days: extraDays } = getMonthsAndDays(start, end);
  const weeks = days / 7;
  const isFuture = end > new Date();

  return { days, hours, weeks, months, extraDays, isFuture };
}

export default function DateDifference() {
  const today = getToday();
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState("");
  const [now, setNow] = useState<Date | null>(typeof window !== "undefined" ? new Date() : null);

  const result = calculateDiff(startDate, endDate);

  useEffect(() => {
    if (!result || !endDate) return;
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, [result, endDate]);

  const useToday = () => {
    setStartDate(today);
  };

  const ddayLive =
    result && endDate && now
      ? (() => {
          const targetStart = new Date(endDate + "T00:00:00");
          const diffMs = targetStart.getTime() - now.getTime();
          const calendarDays = diffInDays(now, new Date(endDate + "T00:00:00"));

          if (diffMs > 0) {
            if (calendarDays <= 0)
              return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
                totalHours: 0,
                label: "D-Day (Today)",
                isFuture: true,
              };
            const totalSeconds = Math.floor(diffMs / 1000);
            const totalHours = Math.floor(totalSeconds / 3600);
            const displayDays = Math.floor(totalHours / 24);
            const hours = totalHours % 24;
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;
            return {
              days: displayDays,
              hours,
              minutes,
              seconds,
              totalHours,
              label: `D-${calendarDays}`,
              isFuture: true,
            };
          }

          const elapsedMs = now.getTime() - targetStart.getTime();
          const totalSeconds = Math.floor(elapsedMs / 1000);
          const totalHours = Math.floor(totalSeconds / 3600);
          const daysPassed = Math.floor(totalHours / 24);
          const hours = totalHours % 24;
          const minutes = Math.floor((totalSeconds % 3600) / 60);
          const seconds = totalSeconds % 60;
          const calendarDaysPassed = Math.abs(calendarDays);
          return {
            days: daysPassed,
            hours,
            minutes,
            seconds,
            totalHours,
            label: calendarDaysPassed === 0 ? "D-Day" : `D+${calendarDaysPassed}`,
            isFuture: false,
          };
        })()
      : null;

  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-xl border border-border bg-surface p-6">
        <h3 className="mb-4 text-lg font-semibold text-slate-200">Calculate Between Two Dates</h3>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="startDate" className="mb-1 block text-sm text-slate-400">
              Start date
            </label>
            <input
              id="startDate"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-100 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={useToday}
              className="mt-2 text-sm text-blue-400 hover:text-blue-300 hover:underline"
            >
              Use today
            </button>
          </div>
          <div>
            <label htmlFor="endDate" className="mb-1 block text-sm text-slate-400">
              End date (target)
            </label>
            <input
              id="endDate"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-100 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {result && (
          <div className="mt-6 space-y-4">
            {ddayLive && (
              <div
                className={`flex min-h-[35vh] flex-col items-center justify-center rounded-lg px-6 py-12 text-center ${
                  ddayLive.isFuture ? "bg-emerald-500/10" : "bg-amber-500/10"
                }`}
              >
                <p
                  className={`text-8xl font-bold tracking-tight sm:text-9xl ${
                    ddayLive.isFuture ? "text-emerald-400" : "text-amber-400"
                  }`}
                >
                  {ddayLive.label}
                </p>
                {ddayLive.label !== "D-Day (Today)" && (
                  <p className="mt-6 text-2xl text-slate-400 sm:text-3xl">
                    {[
                      ddayLive.days > 0 && `${ddayLive.days} day${ddayLive.days !== 1 ? "s" : ""}`,
                      `${ddayLive.hours}h ${ddayLive.minutes}m ${ddayLive.seconds}s`,
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    {ddayLive.isFuture ? " left" : " ago"}
                  </p>
                )}
              </div>
            )}

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-lg border border-slate-600 bg-slate-800/50 p-4 text-center">
                <p className="text-xs text-slate-500">Hours</p>
                <p className="text-xl font-semibold text-slate-100">
                  {(ddayLive && "totalHours" in ddayLive
                    ? (ddayLive.isFuture ? 1 : -1) * ddayLive.totalHours
                    : result.hours
                  ).toLocaleString()}{" "}
                  hours
                </p>
              </div>
              <div className="rounded-lg border border-slate-600 bg-slate-800/50 p-4 text-center">
                <p className="text-xs text-slate-500">Days</p>
                <p className="text-xl font-semibold text-slate-100">{result.days.toLocaleString()} days</p>
              </div>
              <div className="rounded-lg border border-slate-600 bg-slate-800/50 p-4 text-center">
                <p className="text-xs text-slate-500">Weeks</p>
                <p className="text-xl font-semibold text-slate-100">
                  {result.weeks.toFixed(1)} weeks
                </p>
              </div>
              <div className="rounded-lg border border-slate-600 bg-slate-800/50 p-4 text-center">
                <p className="text-xs text-slate-500">Months</p>
                <p className="text-xl font-semibold text-slate-100">{result.months} months</p>
                {result.extraDays !== 0 && (
                  <p className="mt-1 text-sm text-slate-400">
                    {result.extraDays > 0 ? "+" : ""}
                    {result.extraDays} days
                  </p>
                )}
              </div>
              <div className="rounded-lg border border-slate-600 bg-slate-800/50 p-4 text-center sm:col-span-2 sm:col-start-2">
                <p className="text-xs text-slate-500">Direction</p>
                <p className="text-xl font-semibold text-slate-100">
                  {result.days >= 0 ? (
                    <span className="text-emerald-400">{result.days} days to future</span>
                  ) : (
                    <span className="text-amber-400">{Math.abs(result.days)} days ago</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        )}

        {!result && endDate && (
          <p className="mt-4 text-sm text-amber-400">Please enter valid dates.</p>
        )}
      </div>
    </div>
  );
}
