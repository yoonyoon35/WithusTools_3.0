"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";

function formatTime(ms: number) {
  const m = Math.floor(ms / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  const msPart = Math.floor((ms % 1000) / 10);
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}:${msPart.toString().padStart(2, "0")}`;
}

interface LapRecord {
  lapNum: number;
  lapTime: string;
  totalTime: string;
}

export default function Stopwatch() {
  const [elapsed, setElapsed] = useState(0);
  const [lapElapsed, setLapElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState<LapRecord[]>([]);
  const startRef = useRef<number>(0);
  const lapStartRef = useRef<number>(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const tick = useCallback(() => {
    const now = Date.now();
    setElapsed(now - startRef.current);
    setLapElapsed(now - lapStartRef.current);
  }, []);

  useEffect(() => {
    if (running) {
      timerRef.current = setInterval(tick, 10);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [running, tick]);

  const toggle = () => {
    if (running) {
      setRunning(false);
    } else {
      startRef.current = Date.now() - elapsed;
      lapStartRef.current = Date.now() - lapElapsed;
      setRunning(true);
    }
  };

  const recordLap = () => {
    if (!running) return;
    const now = Date.now();
    const total = now - startRef.current;
    const lap = now - lapStartRef.current;
    setLaps((p) => [
      {
        lapNum: p.length + 1,
        lapTime: formatTime(lap),
        totalTime: formatTime(total),
      },
      ...p,
    ]);
    lapStartRef.current = now;
    setLapElapsed(0);
  };

  const reset = () => {
    setRunning(false);
    setElapsed(0);
    setLapElapsed(0);
    setLaps([]);
  };

  const exportToText = () => {
    const name = prompt("Enter file name:", "Stopwatch Records")?.trim() || "Stopwatch Records";
    const records = [...laps].reverse();
    let content = "Stopwatch Records\n";
    content += `Total Time: ${formatTime(elapsed)}\n`;
    content += "Lap Times:\n";
    records.forEach((r) => {
      content += `Lap ${r.lapNum}\n  Lap Time: ${r.lapTime}\n  Total Time: ${r.totalTime}\n\n`;
    });
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${name}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportToWord = () => {
    const name = prompt("Enter file name:", "Stopwatch Records")?.trim() || "Stopwatch Records";
    const records = [...laps].reverse();
    let content = "Stopwatch Records\n";
    content += `Total Time: ${formatTime(elapsed)}\n`;
    content += "Lap Times:\n";
    records.forEach((r) => {
      content += `Lap ${r.lapNum}\n  Lap Time: ${r.lapTime}\n  Total Time: ${r.totalTime}\n\n`;
    });
    const blob = new Blob([content], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${name}.doc`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-6 rounded-xl border border-border bg-surface p-6 text-center">
        <div className="font-mono text-5xl font-bold text-slate-100 sm:text-6xl">
          {formatTime(elapsed)}
        </div>
        <div className="mt-2 font-mono text-2xl text-slate-500">{formatTime(lapElapsed)}</div>
      </div>

      <div className="mb-6 flex justify-center gap-4">
        <button
          onClick={toggle}
          className={`flex h-16 w-16 items-center justify-center rounded-full text-2xl text-white transition-transform hover:scale-105 ${
            running ? "bg-red-600 hover:bg-red-700" : "bg-emerald-600 hover:bg-emerald-700"
          }`}
          title={running ? "Pause" : "Start"}
        >
          {running ? (
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg className="ml-1 h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
        <button
          onClick={recordLap}
          disabled={!running}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-600 text-white transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
          title="Lap"
        >
          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
            />
          </svg>
        </button>
        <button
          onClick={reset}
          disabled={running}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-600 text-white transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
          title="Reset"
        >
          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </button>
      </div>

      <div className="mb-6 rounded-xl border border-border bg-surface p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-200">Lap Times</h3>
          <div className="flex gap-2">
            <button
              onClick={exportToWord}
              className="rounded-lg bg-slate-600 px-3 py-1.5 text-sm text-slate-200 hover:bg-slate-500"
            >
              Word
            </button>
            <button
              onClick={exportToText}
              className="rounded-lg bg-slate-600 px-3 py-1.5 text-sm text-slate-200 hover:bg-slate-500"
            >
              Text
            </button>
          </div>
        </div>
        <div className="max-h-64 space-y-2 overflow-y-auto">
          {laps.length === 0 ? (
            <p className="py-8 text-center text-slate-500">No lap times recorded</p>
          ) : (
            laps.map((lap) => (
              <div
                key={lap.lapNum}
                className="flex justify-between rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3"
              >
                <span className="text-slate-400">Lap {lap.lapNum}</span>
                <span className="font-mono text-slate-300">{lap.lapTime}</span>
                <span className="font-mono text-slate-500">{lap.totalTime}</span>
              </div>
            ))
          )}
        </div>
      </div>

      <Link
        href="/tools/time"
        className="inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        ← Back to Time Tools
      </Link>
    </div>
  );
}
