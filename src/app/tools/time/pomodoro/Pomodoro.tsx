"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";

type Phase = "focus" | "shortBreak" | "longBreak";

const DEFAULT_WORK = 25 * 60; // 25 min
const DEFAULT_SHORT_BREAK = 5 * 60; // 5 min
const DEFAULT_LONG_BREAK = 15 * 60; // 15 min
const POMODOROS_BEFORE_LONG = 4;
const AUTO_ADVANCE_SECONDS = 10;

const CIRCUMFERENCE = 2 * Math.PI * 130;

export default function Pomodoro() {
  const [phase, setPhase] = useState<Phase>("focus");
  const [remaining, setRemaining] = useState(DEFAULT_WORK);
  const [running, setRunning] = useState(false);
  const [pomodoroCount, setPomodoroCount] = useState(0);
  const [soundOn, setSoundOn] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [autoAdvanceCountdown, setAutoAdvanceCountdown] = useState(AUTO_ADVANCE_SECONDS);
  const endTimeRef = useRef<number | null>(null);
  const initialTotalRef = useRef(DEFAULT_WORK);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const advanceTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const countdownIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const getPhaseConfig = useCallback((p: Phase) => {
    switch (p) {
      case "focus":
        return { duration: DEFAULT_WORK, label: "Focus", color: "text-emerald-500" };
      case "shortBreak":
        return { duration: DEFAULT_SHORT_BREAK, label: "Short Break", color: "text-blue-500" };
      case "longBreak":
        return { duration: DEFAULT_LONG_BREAK, label: "Long Break", color: "text-amber-500" };
    }
  }, []);

  const startPhase = useCallback(
    (p: Phase) => {
      const config = getPhaseConfig(p);
      setPhase(p);
      setRemaining(config.duration);
      initialTotalRef.current = config.duration;
      endTimeRef.current = Date.now() + config.duration * 1000;
      setRunning(true);
    },
    [getPhaseConfig]
  );

  const tick = useCallback(() => {
    if (!endTimeRef.current) return;
    const ms = endTimeRef.current - Date.now();
    if (ms <= 0) {
      setRunning(false);
      endTimeRef.current = null;

      if (soundOn && audioRef.current) {
        audioRef.current.play().catch(() => {});
      }
      if ("Notification" in window && Notification.permission === "granted") {
        const config = getPhaseConfig(phase);
        new Notification(`Pomodoro: ${config.label} Complete!`, {
          body: phase === "focus" ? "Time for a break!" : "Time to focus!",
          icon: "/favicon.ico",
          tag: "pomodoro-notification",
        });
      }

      if (phase === "focus") {
        const nextCount = pomodoroCount + 1;
        setPomodoroCount(nextCount);
        setModalMessage("Great work! Time for a break.");
        setAutoAdvanceCountdown(AUTO_ADVANCE_SECONDS);
        setModalOpen(true);

        const nextPhase: Phase = nextCount % POMODOROS_BEFORE_LONG === 0 ? "longBreak" : "shortBreak";
        advanceTimeoutRef.current = setTimeout(() => {
          setModalOpen(false);
          startPhase(nextPhase);
          advanceTimeoutRef.current = null;
        }, AUTO_ADVANCE_SECONDS * 1000);
      } else {
        setModalMessage("Break over! Ready to focus?");
        setAutoAdvanceCountdown(AUTO_ADVANCE_SECONDS);
        setModalOpen(true);
        advanceTimeoutRef.current = setTimeout(() => {
          setModalOpen(false);
          startPhase("focus");
          advanceTimeoutRef.current = null;
        }, AUTO_ADVANCE_SECONDS * 1000);
      }
      return;
    }
    setRemaining(Math.ceil(ms / 1000));
  }, [phase, soundOn, pomodoroCount, getPhaseConfig, startPhase]);

  useEffect(() => {
    if (running && endTimeRef.current) {
      timerRef.current = setInterval(tick, 100);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [running, tick]);

  useEffect(() => {
    if (!modalOpen) return;
    countdownIntervalRef.current = setInterval(() => {
      setAutoAdvanceCountdown((c) => {
        if (c <= 1) {
          if (countdownIntervalRef.current) {
            clearInterval(countdownIntervalRef.current);
            countdownIntervalRef.current = null;
          }
          return 0;
        }
        return c - 1;
      });
    }, 1000);
    return () => {
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
        countdownIntervalRef.current = null;
      }
    };
  }, [modalOpen]);

  useEffect(() => {
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission();
    }
    audioRef.current = new Audio(
      "https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3"
    );
    audioRef.current.loop = false;
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggle = () => {
    if (running) {
      setRunning(false);
      endTimeRef.current = null;
    } else {
      endTimeRef.current = Date.now() + remaining * 1000;
      setRunning(true);
    }
  };

  const skip = () => {
    if (advanceTimeoutRef.current) {
      clearTimeout(advanceTimeoutRef.current);
      advanceTimeoutRef.current = null;
    }
    if (phase === "focus") {
      const nextCount = pomodoroCount + 1;
      if (nextCount % POMODOROS_BEFORE_LONG === 0) {
        startPhase("longBreak");
      } else {
        startPhase("shortBreak");
      }
    } else {
      startPhase("focus");
    }
    setModalOpen(false);
  };

  const reset = () => {
    if (advanceTimeoutRef.current) {
      clearTimeout(advanceTimeoutRef.current);
      advanceTimeoutRef.current = null;
    }
    setRunning(false);
    endTimeRef.current = null;
    setPhase("focus");
    setRemaining(DEFAULT_WORK);
    setPomodoroCount(0);
    setModalOpen(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const config = getPhaseConfig(phase);
  const progress =
    initialTotalRef.current > 0
      ? ((initialTotalRef.current - remaining) / initialTotalRef.current) * 100
      : 0;
  const pad = (n: number) => n.toString().padStart(2, "0");
  const mins = Math.floor(remaining / 60);
  const secs = remaining % 60;

  return (
    <div className="mx-auto max-w-2xl">
      <audio ref={audioRef} />

      <div className="mb-4 flex justify-center gap-2">
        {Array.from({ length: POMODOROS_BEFORE_LONG }, (_, i) => (
          <div
            key={i}
            className={`h-3 w-3 rounded-full ${
              i < pomodoroCount % POMODOROS_BEFORE_LONG ? "bg-emerald-500" : "bg-slate-600"
            }`}
          />
        ))}
      </div>

      <div
        className={`mb-6 rounded-xl border border-border bg-surface p-6 text-center transition-all ${
          running ? "ring-2 ring-emerald-500/30" : ""
        }`}
      >
        <p className={`mb-2 text-lg font-semibold ${config.color}`}>{config.label}</p>
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
                phase === "focus" ? "text-emerald-500" : phase === "longBreak" ? "text-amber-500" : "text-blue-500"
              }`}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-5xl font-bold text-slate-100 sm:text-6xl">
              {pad(mins)}:{pad(secs)}
            </span>
          </div>
        </div>
        <p className="text-sm text-slate-500">
          {phase === "focus" ? `Session ${(pomodoroCount % POMODOROS_BEFORE_LONG) + 1} of ${POMODOROS_BEFORE_LONG}` : "Take a break"}
        </p>
      </div>

      <div className="mb-6 flex justify-center gap-4">
        <button
          onClick={toggle}
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
          onClick={skip}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-600 text-white transition-transform hover:scale-105 hover:bg-slate-500"
          title="Skip to next phase"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </button>
        <button
          onClick={reset}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-600 text-white transition-transform hover:scale-105 hover:bg-slate-500"
          title="Reset"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          className={`flex h-14 w-14 items-center justify-center rounded-full transition-transform hover:scale-105 ${
            soundOn ? "bg-blue-600" : "bg-slate-600 opacity-60"
          }`}
          title={soundOn ? "Mute" : "Unmute"}
        >
          {soundOn ? (
            <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
            </svg>
          ) : (
            <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
            </svg>
          )}
        </button>
      </div>

      <div className="mb-4 rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-center text-sm text-slate-400">
        <span className="font-medium text-slate-300">25</span> min focus ·{" "}
        <span className="font-medium text-slate-300">5</span> min short break ·{" "}
        <span className="font-medium text-slate-300">15</span> min long break (every 4 pomodoros)
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="rounded-xl border border-slate-600 bg-slate-800 p-8 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 text-5xl">🍅</div>
            <h2 className="mb-2 text-2xl font-bold text-slate-100">Phase Complete!</h2>
            <p className="mb-2 text-slate-400">{modalMessage}</p>
            <p className="mb-6 text-sm text-slate-500">
              Auto-advancing in {autoAdvanceCountdown} second{autoAdvanceCountdown !== 1 ? "s" : ""}
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={skip}
                className="rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white hover:bg-emerald-700"
              >
                Continue
              </button>
              <button
                onClick={() => {
                  if (advanceTimeoutRef.current) {
                    clearTimeout(advanceTimeoutRef.current);
                    advanceTimeoutRef.current = null;
                  }
                  setModalOpen(false);
                  setRunning(false);
                  endTimeRef.current = null;
                }}
                className="rounded-lg bg-slate-600 px-6 py-3 font-medium text-slate-200 hover:bg-slate-500"
              >
                Pause
              </button>
            </div>
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
