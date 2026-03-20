"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import NumberInputWithStepper from "@/components/NumberInputWithStepper";

const PRESETS = [
  { time: 300, label: "5", unit: "min" },
  { time: 600, label: "10", unit: "min" },
  { time: 900, label: "15", unit: "min" },
  { time: 1800, label: "30", unit: "min" },
  { time: 3600, label: "1", unit: "hour" },
];

const CIRCUMFERENCE = 2 * Math.PI * 130;

export default function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [soundOn, setSoundOn] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  const initialTotal = useRef(0);

  const tick = useCallback(() => {
    if (!endTime) return;
    const remaining = endTime - Date.now();
    if (remaining <= 0) {
      setRunning(false);
      setEndTime(null);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      setModalOpen(true);
      if (soundOn && audioRef.current) {
        audioRef.current.play().catch(() => {});
      }
      if ("Notification" in window && Notification.permission === "granted") {
        new Notification("Timer Complete!", {
          body: "The set time has ended.",
          icon: "/favicon.ico",
          tag: "timer-notification",
        });
      }
      return;
    }
    const h = Math.floor(remaining / 3600000);
    const m = Math.floor((remaining % 3600000) / 60000);
    const s = Math.floor((remaining % 60000) / 1000);
    setHours(h);
    setMinutes(m);
    setSeconds(s);
  }, [endTime, soundOn]);

  useEffect(() => {
    if (running && endTime) {
      timerRef.current = setInterval(tick, 100);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [running, endTime, tick]);

  useEffect(() => {
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission();
    }
    audioRef.current = new Audio(
      "https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3"
    );
    audioRef.current.loop = true;
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const start = () => {
    const total = hours * 3600 + minutes * 60 + seconds;
    if (total <= 0) return;
    initialTotal.current = total;
    setEndTime(Date.now() + total * 1000);
    setRunning(true);
  };

  const pause = () => {
    setRunning(false);
    setEndTime(null);
  };

  const reset = () => {
    setRunning(false);
    setEndTime(null);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setModalOpen(false);
    initialTotal.current = 0;
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const applyPreset = (totalSec: number) => {
    if (running) return;
    setHours(Math.floor(totalSec / 3600));
    setMinutes(Math.floor((totalSec % 3600) / 60));
    setSeconds(totalSec % 60);
  };

  const remainingSec = hours * 3600 + minutes * 60 + seconds;
  const progress =
    initialTotal.current > 0
      ? Math.min(100, ((initialTotal.current - remainingSec) / initialTotal.current) * 100)
      : 0;

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="mx-auto max-w-2xl">
      <audio ref={audioRef} />

      <div
        className={`mb-6 rounded-xl border border-border bg-surface p-6 text-center transition-all ${
          running ? "ring-2 ring-blue-500/30" : ""
        }`}
      >
        <div className="relative mx-auto mb-4 inline-block">
          <svg className="h-72 w-72 -rotate-90" viewBox="0 0 280 280">
            <circle
              cx="140"
              cy="140"
              r="130"
              fill="none"
              stroke="currentColor"
              strokeWidth="12"
              className="text-slate-700"
            />
            <circle
              cx="140"
              cy="140"
              r="130"
              fill="none"
              stroke="currentColor"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE}
              className={`transition-all duration-300 ${
                progress >= 90 ? "text-red-500" : progress >= 75 ? "text-amber-500" : "text-blue-500"
              }`}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-1 font-mono text-4xl font-bold text-slate-100 sm:text-5xl">
              <NumberInputWithStepper
                value={pad(hours)}
                onChange={(v) => setHours(Math.min(99, parseInt(v) || 0))}
                min={0}
                max={99}
                disabled={running}
                className="w-24 [&_input]:bg-transparent [&_input]:text-center [&_input]:text-inherit [&_input]:font-mono [&_input]:font-bold"
              />
              <span className="opacity-60">:</span>
              <NumberInputWithStepper
                value={pad(minutes)}
                onChange={(v) => setMinutes(Math.min(59, parseInt(v) || 0))}
                min={0}
                max={59}
                disabled={running}
                className="w-24 [&_input]:bg-transparent [&_input]:text-center [&_input]:text-inherit [&_input]:font-mono [&_input]:font-bold"
              />
              <span className="opacity-60">:</span>
              <NumberInputWithStepper
                value={pad(seconds)}
                onChange={(v) => setSeconds(Math.min(59, parseInt(v) || 0))}
                min={0}
                max={59}
                disabled={running}
                className="w-24 [&_input]:bg-transparent [&_input]:text-center [&_input]:text-inherit [&_input]:font-mono [&_input]:font-bold"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-700">
            <div
              className="h-full rounded-full bg-blue-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="min-w-[45px] text-right font-semibold text-slate-400">
            {Math.round(progress)}%
          </span>
        </div>
      </div>

      <div className="mb-6 flex justify-center gap-4">
        <button
          onClick={running ? pause : start}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-2xl text-white transition-transform hover:scale-105 hover:bg-emerald-700"
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
        <button
          onClick={() => setSoundOn(!soundOn)}
          className={`flex h-16 w-16 items-center justify-center rounded-full transition-transform hover:scale-105 ${
            soundOn ? "bg-blue-600" : "bg-slate-600 opacity-60"
          }`}
          title={soundOn ? "Mute" : "Unmute"}
        >
          {soundOn ? (
            <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
          ) : (
            <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
            </svg>
          )}
        </button>
      </div>

      <div className="mb-6 flex flex-wrap justify-center gap-3">
        {PRESETS.map((p) => (
          <button
            key={p.time}
            onClick={() => applyPreset(p.time)}
            disabled={running}
            className="flex flex-col items-center rounded-xl border border-slate-600 bg-surface px-3 py-2 transition-colors hover:border-slate-500 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span className="text-lg font-bold text-slate-200">{p.label}</span>
            <span className="text-xs text-slate-500">{p.unit}</span>
          </button>
        ))}
      </div>

      {/* Time's Up Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={reset}
        >
          <div
            className="rounded-xl border border-slate-600 bg-slate-800 p-8 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 text-5xl">🔔</div>
            <h2 className="mb-2 text-2xl font-bold text-slate-100">Time&apos;s Up!</h2>
            <p className="mb-6 text-slate-400">The timer has completed.</p>
            <button
              onClick={reset}
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
            >
              Stop
            </button>
          </div>
        </div>
      )}

      <Link
        href="/tools/time"
        className="inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        ← Back to Time Tools
      </Link>
    </div>
  );
}
