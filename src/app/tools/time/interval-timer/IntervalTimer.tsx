"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import NumberInputWithStepper from "@/components/NumberInputWithStepper";

const COLOR_OPTIONS = [
  { id: "emerald", value: "#10b981", bg: "bg-emerald-500", stroke: "stroke-emerald-500" },
  { id: "blue", value: "#3b82f6", bg: "bg-blue-500", stroke: "stroke-blue-500" },
  { id: "amber", value: "#f59e0b", bg: "bg-amber-500", stroke: "stroke-amber-500" },
  { id: "rose", value: "#f43f5e", bg: "bg-rose-500", stroke: "stroke-rose-500" },
  { id: "violet", value: "#8b5cf6", bg: "bg-violet-500", stroke: "stroke-violet-500" },
  { id: "cyan", value: "#06b6d4", bg: "bg-cyan-500", stroke: "stroke-cyan-500" },
  { id: "orange", value: "#f97316", bg: "bg-orange-500", stroke: "stroke-orange-500" },
  { id: "pink", value: "#ec4899", bg: "bg-pink-500", stroke: "stroke-pink-500" },
];

const REST_COLOR = { id: "rest", value: "#64748b" };
const colorMap: Record<string, { id: string; value: string }> = {
  ...Object.fromEntries(COLOR_OPTIONS.map((c) => [c.id, c])),
  rest: REST_COLOR,
};

interface Action {
  id: string;
  name: string;
  duration: number;
  colorId: string;
}

interface SavedRoutine {
  id: string;
  name: string;
  actions: Action[];
  restEnabled: boolean;
  restDuration: number;
  repeatEnabled: boolean;
  repeatCount: number | "";
}

const CIRCUMFERENCE = 2 * Math.PI * 130;
const DEFAULT_REST_SECONDS = 60;
const DEFAULT_ACTION: Action = { id: "a-0", name: "", duration: 60, colorId: "emerald" };
const STORAGE_KEY_SAVED_ROUTINES = "intervalTimerSavedRoutines";

export default function IntervalTimer() {
  const [actions, setActions] = useState<Action[]>([DEFAULT_ACTION]);
  const [restEnabled, setRestEnabled] = useState(false);
  const [restDuration, setRestDuration] = useState(DEFAULT_REST_SECONDS);
  const [repeatEnabled, setRepeatEnabled] = useState(false);
  const [repeatCount, setRepeatCount] = useState<number | "">("");
  const [running, setRunning] = useState(false);
  const [remaining, setRemaining] = useState(0);
  const [currentLabel, setCurrentLabel] = useState("");
  const [currentColorId, setCurrentColorId] = useState("emerald");
  const [currentRound, setCurrentRound] = useState(1);
  const [soundOn, setSoundOn] = useState(true);
  const [routineComplete, setRoutineComplete] = useState(false);
  const [savedRoutines, setSavedRoutines] = useState<SavedRoutine[]>([]);

  const sequenceRef = useRef<{ type: "action" | "rest"; index?: number; duration: number; label: string; colorId?: string }[]>([]);
  const sequenceIndexRef = useRef(0);
  const roundRef = useRef(1);
  const endTimeRef = useRef<number | null>(null);
  const initialTotalRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("intervalTimerActions");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) setActions(parsed);
      } catch {}
    }
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY_SAVED_ROUTINES);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setSavedRoutines(parsed);
      } catch {}
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("intervalTimerActions", JSON.stringify(actions));
  }, [actions]);

  const buildOneRound = useCallback(() => {
    const seq: typeof sequenceRef.current = [];
    actions.forEach((a, i) => {
      seq.push({
        type: "action",
        index: i,
        duration: a.duration,
        label: a.name.trim() || `Action ${i + 1}`,
        colorId: a.colorId,
      });
      if (restEnabled && i < actions.length - 1) {
        seq.push({ type: "rest", duration: restDuration, label: "Rest", colorId: "rest" });
      }
    });
    return seq;
  }, [actions, restEnabled, restDuration]);

  const repeatCountRef = useRef<number | "">("");
  const repeatEnabledRef = useRef(false);
  const restEnabledRef = useRef(false);
  const restDurationRef = useRef(DEFAULT_REST_SECONDS);
  const betweenRoundsRestRef = useRef(false);
  useEffect(() => {
    repeatCountRef.current = repeatCount;
    repeatEnabledRef.current = repeatEnabled;
    restEnabledRef.current = restEnabled;
    restDurationRef.current = restDuration;
  }, [repeatCount, repeatEnabled, restEnabled, restDuration]);

  const startTimer = useCallback(() => {
    const seq = buildOneRound();
    if (seq.length === 0) return;
    sequenceRef.current = seq;
    sequenceIndexRef.current = 0;
    roundRef.current = 1;
    const item = seq[0];
    setCurrentLabel(item.label);
    setCurrentColorId(item.colorId || "blue");
    setRemaining(item.duration);
    initialTotalRef.current = item.duration;
    endTimeRef.current = Date.now() + item.duration * 1000;
    setCurrentRound(1);
    setRunning(true);
  }, [buildOneRound]);

  const advanceToNext = useCallback(() => {
    const seq = sequenceRef.current;
    let idx = sequenceIndexRef.current + 1;

    if (betweenRoundsRestRef.current) {
      betweenRoundsRestRef.current = false;
      roundRef.current += 1;
      setCurrentRound(roundRef.current);
      idx = 0;
      sequenceIndexRef.current = 0;
      const item = seq[0];
      setCurrentLabel(item.label);
      setCurrentColorId(item.colorId || "emerald");
      setRemaining(item.duration);
      initialTotalRef.current = item.duration;
      endTimeRef.current = Date.now() + item.duration * 1000;
      setRunning(true);
      return;
    }

    if (idx >= seq.length) {
      if (repeatEnabledRef.current) {
        const maxRounds = repeatCountRef.current === "" ? null : Math.max(1, repeatCountRef.current);
        if (maxRounds === null || roundRef.current < maxRounds) {
          if (restEnabledRef.current && restDurationRef.current > 0 && (maxRounds === null || maxRounds >= 2)) {
            betweenRoundsRestRef.current = true;
            setCurrentLabel("Rest");
            setCurrentColorId("rest");
            setRemaining(restDurationRef.current);
            initialTotalRef.current = restDurationRef.current;
            endTimeRef.current = Date.now() + restDurationRef.current * 1000;
            setRunning(true);
          } else {
            roundRef.current += 1;
            setCurrentRound(roundRef.current);
            idx = 0;
            sequenceIndexRef.current = 0;
            const item = seq[0];
            setCurrentLabel(item.label);
            setCurrentColorId(item.colorId || "emerald");
            setRemaining(item.duration);
            initialTotalRef.current = item.duration;
            endTimeRef.current = Date.now() + item.duration * 1000;
            setRunning(true);
          }
        } else {
          setRunning(false);
          endTimeRef.current = null;
          setRemaining(0);
          setCurrentLabel("");
          setRoutineComplete(true);
          return;
        }
      } else {
        setRunning(false);
        endTimeRef.current = null;
        setRemaining(0);
        setCurrentLabel("");
        setRoutineComplete(true);
        return;
      }
    } else {
      sequenceIndexRef.current = idx;
      const item = seq[idx];
      setCurrentLabel(item.label);
      setCurrentColorId(item.colorId || "emerald");
      setRemaining(item.duration);
      initialTotalRef.current = item.duration;
      endTimeRef.current = Date.now() + item.duration * 1000;
      setRunning(true);
    }
  }, []);

  const tick = useCallback(() => {
    if (!endTimeRef.current) return;
    const ms = endTimeRef.current - Date.now();
    if (ms <= 0) {
      if (soundOn && audioRef.current) {
        audioRef.current.play().catch(() => {});
      }
      const item = sequenceRef.current[sequenceIndexRef.current];
      if ("Notification" in window && Notification.permission === "granted") {
        new Notification("Interval Timer", {
          body: `${item?.label || "Phase"} complete!`,
          icon: "/favicon.ico",
          tag: "interval-timer-" + Date.now(),
        });
      }
      advanceToNext();
      return;
    }
    setRemaining(Math.ceil(ms / 1000));
  }, [soundOn, advanceToNext]);

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
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission();
    }
    audioRef.current = new Audio(
      "https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3"
    );
    audioRef.current.loop = false;
    return () => {
      if (audioRef.current) audioRef.current.pause();
    };
  }, []);

  const addAction = () => {
    setActions((p) => [
      ...p,
      {
        id: `a-${Date.now()}-${Math.random().toString(36).slice(2)}`,
        name: "",
        duration: 60,
        colorId: COLOR_OPTIONS[p.length % COLOR_OPTIONS.length].id,
      },
    ]);
  };

  const removeAction = (id: string) => {
    if (actions.length <= 1) return;
    setActions((p) => p.filter((a) => a.id !== id));
  };

  const updateAction = (id: string, updates: Partial<Action>) => {
    setActions((p) => p.map((a) => (a.id === id ? { ...a, ...updates } : a)));
  };

  const saveRoutine = () => {
    const name = window.prompt("Routine name?");
    if (!name?.trim()) return;
    const routine: SavedRoutine = {
      id: `r-${Date.now()}`,
      name: name.trim(),
      actions: JSON.parse(JSON.stringify(actions)),
      restEnabled,
      restDuration,
      repeatEnabled,
      repeatCount,
    };
    const next = [...savedRoutines, routine];
    setSavedRoutines(next);
    localStorage.setItem(STORAGE_KEY_SAVED_ROUTINES, JSON.stringify(next));
  };

  const loadRoutine = (routine: SavedRoutine) => {
    setActions(routine.actions.map((a) => ({ ...a, id: `a-${Date.now()}-${Math.random().toString(36).slice(2)}` })));
    setRestEnabled(routine.restEnabled);
    setRestDuration(routine.restDuration);
    setRepeatEnabled(routine.repeatEnabled);
    setRepeatCount(routine.repeatCount);
  };

  const deleteRoutine = (id: string) => {
    const next = savedRoutines.filter((r) => r.id !== id);
    setSavedRoutines(next);
    localStorage.setItem(STORAGE_KEY_SAVED_ROUTINES, JSON.stringify(next));
  };

  const skip = () => {
    advanceToNext();
  };

  const reset = () => {
    setRunning(false);
    endTimeRef.current = null;
    sequenceIndexRef.current = 0;
    roundRef.current = 1;
    betweenRoundsRestRef.current = false;
    setRemaining(0);
    setCurrentLabel("");
    setCurrentRound(1);
    setRoutineComplete(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const toggle = () => {
    if (running) {
      setRunning(false);
      endTimeRef.current = null;
    } else {
      if (sequenceRef.current.length === 0) {
        startTimer();
      } else if (sequenceIndexRef.current > 0 || remaining > 0) {
        endTimeRef.current = Date.now() + remaining * 1000;
        setRunning(true);
      } else {
        startTimer();
      }
    }
  };

  const progress = initialTotalRef.current > 0 ? ((initialTotalRef.current - remaining) / initialTotalRef.current) * 100 : 0;
  const pad = (n: number) => n.toString().padStart(2, "0");
  const mins = Math.floor(remaining / 60);
  const secs = remaining % 60;
  const colorConfig = routineComplete ? REST_COLOR : (colorMap[currentColorId] || colorMap.emerald);

  return (
    <div className="mx-auto max-w-2xl">
      <audio ref={audioRef} />

      {/* Actions Setup - only when not running and not showing completion */}
      {!running && remaining === 0 && !routineComplete && (
        <div className="mb-6 space-y-4 rounded-xl border border-border bg-surface p-6">
          <h3 className="text-lg font-semibold text-slate-200">Actions</h3>
          <p className="text-sm text-slate-500">Add actions with duration (required) and optional name. Assign a color to each.</p>
          <div className="space-y-4">
            {actions.map((a) => (
              <div key={a.id} className="flex flex-wrap items-center gap-3 rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                <input
                  type="text"
                  placeholder="Action name (optional)"
                  value={a.name}
                  onChange={(e) => updateAction(a.id, { name: e.target.value })}
                  className="flex-1 min-w-[120px] rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-slate-100 placeholder-slate-500"
                />
                <NumberInputWithStepper
                  value={String(a.duration)}
                  onChange={(v) => updateAction(a.id, { duration: Math.max(1, parseInt(v) || 0) })}
                  min={1}
                  max={999}
                  className="w-28"
                />
                <span className="text-slate-500">sec</span>
                <div className="flex gap-1">
                  {COLOR_OPTIONS.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => updateAction(a.id, { colorId: c.id })}
                      className={`h-8 w-8 rounded-full border-2 transition-all ${
                        a.colorId === c.id ? "border-white scale-110" : "border-transparent"
                      }`}
                      style={{ backgroundColor: c.value }}
                    />
                  ))}
                </div>
                <button
                  onClick={() => removeAction(a.id)}
                  disabled={actions.length <= 1}
                  className="rounded-lg bg-red-600/80 p-2 text-white hover:bg-red-600 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={addAction}
              className="flex items-center gap-2 rounded-lg border border-dashed border-slate-600 bg-slate-800/50 px-4 py-2 text-slate-400 hover:border-slate-500 hover:text-slate-300"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add action
            </button>
            <button
              onClick={saveRoutine}
              className="ml-auto rounded-lg bg-emerald-600/80 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600"
            >
              Save routine
            </button>
          </div>

          <div className="mt-4 space-y-3 border-t border-slate-700 pt-4">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={restEnabled}
                onChange={(e) => setRestEnabled(e.target.checked)}
                className="h-4 w-4 rounded border-slate-600 accent-emerald-500"
              />
              <span className="text-slate-300">Rest between actions</span>
            </label>
            {restEnabled && (
              <div className="flex items-center gap-2 pl-7">
                <NumberInputWithStepper
                  value={String(restDuration)}
                  onChange={(v) => setRestDuration(Math.max(1, parseInt(v) || 0))}
                  min={1}
                  max={600}
                  className="w-28"
                />
                <span className="text-slate-500">sec</span>
              </div>
            )}

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={repeatEnabled}
                onChange={(e) => setRepeatEnabled(e.target.checked)}
                className="h-4 w-4 rounded border-slate-600 accent-emerald-500"
              />
              <span className="text-slate-300">Repeat routine</span>
            </label>
            {repeatEnabled && (
              <div className="flex items-center gap-2 pl-7">
                <NumberInputWithStepper
                  value={repeatCount === "" ? "" : String(repeatCount)}
                  onChange={(v) => setRepeatCount(v === "" ? "" : Math.max(1, parseInt(v) || 1))}
                  min={1}
                  placeholder="Infinite"
                  className="w-32"
                />
                <span className="text-slate-500">times (empty = infinite)</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Timer Display */}
      <div
        className={`mb-6 rounded-xl border border-border bg-surface p-6 text-center transition-all ${
          running ? "ring-2 ring-offset-2 ring-offset-slate-900" : ""
        } ${running && remaining > 0 && remaining <= 5 ? "animate-timer-flash" : ""}`}
        style={running ? { ["--tw-ring-color" as string]: colorConfig.value } : undefined}
      >
        {running || remaining > 0 || routineComplete ? (
          <>
            <p className={`mb-2 text-lg font-semibold`} style={{ color: colorConfig.value }}>
              {routineComplete ? "Routine Complete!" : currentLabel}
            </p>
            {repeatEnabled && (repeatCount !== "" || actions.length > 0) && (
              <p className="mb-1 text-xs text-slate-500">Round {currentRound}</p>
            )}
            <div className="relative mx-auto mb-4 inline-block">
              <svg className="h-72 w-72 -rotate-90" viewBox="0 0 280 280">
                <circle cx="140" cy="140" r="130" fill="none" stroke="currentColor" strokeWidth="12" className="text-slate-700" />
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
                  style={{ stroke: colorConfig.value }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-5xl font-bold text-slate-100 sm:text-6xl">
                  {pad(mins)}:{pad(secs)}
                </span>
              </div>
            </div>
          </>
        ) : (
          <div className="text-left">
            <h3 className="mb-4 text-lg font-semibold text-slate-200">Saved routines</h3>
            {savedRoutines.length === 0 ? (
              <p className="text-slate-500">No saved routines yet.</p>
            ) : (
              <ul className="space-y-2">
                {savedRoutines.map((r) => (
                  <li
                    key={r.id}
                    className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3"
                  >
                    <span className="text-slate-200">{r.name}</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => loadRoutine(r)}
                        className="rounded bg-emerald-600/80 px-3 py-1.5 text-sm text-white hover:bg-emerald-600"
                      >
                        Load
                      </button>
                      <button
                        onClick={() => deleteRoutine(r.id)}
                        className="rounded bg-red-600/80 px-3 py-1.5 text-sm text-white hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="mb-6 flex justify-center gap-4">
        {routineComplete && (
          <button
            onClick={reset}
            className="flex h-14 items-center rounded-full bg-emerald-600 px-6 font-medium text-white transition-transform hover:scale-105 hover:bg-emerald-700"
          >
            Complete
          </button>
        )}
        <button
          onClick={toggle}
          disabled={routineComplete || actions.length === 0 || actions.some((a) => a.duration < 1)}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-2xl text-white transition-transform hover:scale-105 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
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
          disabled={!running}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-600 text-white transition-transform hover:scale-105 hover:bg-slate-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </button>
        {!routineComplete && (
          <button
            onClick={reset}
            className={`flex h-14 w-14 items-center justify-center rounded-full text-white transition-transform hover:scale-105 ${
              !running && remaining > 0 ? "bg-red-600 hover:bg-red-500" : "bg-slate-600 hover:bg-slate-500"
            }`}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        )}
        <button
          onClick={() => setSoundOn((s) => !s)}
          className={`flex h-14 w-14 items-center justify-center rounded-full ${soundOn ? "bg-blue-600" : "bg-slate-600 opacity-60"}`}
        >
          <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            {soundOn ? (
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
            ) : (
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
            )}
          </svg>
        </button>
      </div>

      <Link href="/tools/time" className="inline-block text-slate-400 underline transition-colors hover:text-slate-200">
        ← Back to Time Tools
      </Link>
    </div>
  );
}
