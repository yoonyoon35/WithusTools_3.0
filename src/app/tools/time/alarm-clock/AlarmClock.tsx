"use client";

import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";

interface Alarm {
  id: number;
  name: string;
  time: string;
  active: boolean;
}

function escapeHtml(text: string) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function formatTime12(time24: string) {
  const [h, m] = time24.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 || 12;
  return `${hour12.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")} ${period}`;
}

export default function AlarmClock() {
  const [alarms, setAlarms] = useState<Alarm[]>(() => {
    if (typeof window === "undefined") return [];
    return JSON.parse(localStorage.getItem("alarms") || "[]");
  });
  const [currentTime, setCurrentTime] = useState("00:00:00");
  const [alarmName, setAlarmName] = useState("My Alarm");
  const [period, setPeriod] = useState<"AM" | "PM">("AM");
  const [hour, setHour] = useState("12");
  const [minute, setMinute] = useState("00");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");
  const [editPeriod, setEditPeriod] = useState<"AM" | "PM">("AM");
  const [editHour, setEditHour] = useState("12");
  const [editMinute, setEditMinute] = useState("00");
  const [modalAlarm, setModalAlarm] = useState<Alarm | null>(null);
  const soundIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const fallbackAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    localStorage.setItem("alarms", JSON.stringify(alarms));
  }, [alarms]);

  const playAlarmSound = useCallback(() => {
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const playBeep = () => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = 800;
        osc.type = "sine";
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.5);
      };
      playBeep();
      soundIntervalRef.current = setInterval(playBeep, 500);
    } catch {
      const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3");
      audio.loop = true;
      fallbackAudioRef.current = audio;
      audio.play();
    }
  }, []);

  const stopAlarmSound = useCallback(() => {
    if (soundIntervalRef.current) {
      clearInterval(soundIntervalRef.current);
      soundIntervalRef.current = null;
    }
    if (fallbackAudioRef.current) {
      fallbackAudioRef.current.pause();
      fallbackAudioRef.current.currentTime = 0;
      fallbackAudioRef.current = null;
    }
  }, []);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const time24 = now.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentTime(time24);

      const currentHM = now.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      });

      setAlarms((prev) => {
        let updated = false;
        const next = prev.map((a) => {
          if (a.active && a.time === currentHM) {
            updated = true;
            return { ...a, active: false };
          }
          return a;
        });
        if (updated) {
          const triggered = prev.find((a) => a.active && a.time === currentHM);
          if (triggered) {
            setModalAlarm(triggered);
            playAlarmSound();
            if ("Notification" in window && Notification.permission === "granted") {
              new Notification(triggered.name, {
                body: `Time: ${formatTime12(triggered.time)}`,
                icon: "/favicon.ico",
                tag: `alarm-${triggered.id}`,
                requireInteraction: true,
              });
            }
          }
        }
        return next;
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [playAlarmSound]);

  useEffect(() => {
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission();
    }
  }, []);

  const addAlarm = () => {
    let hour24 = parseInt(hour);
    if (period === "PM" && hour24 !== 12) hour24 += 12;
    if (period === "AM" && hour24 === 12) hour24 = 0;
    const time = `${hour24.toString().padStart(2, "0")}:${minute.padStart(2, "0")}`;
    const name = alarmName.trim() || "My Alarm";
    if (alarms.some((a) => a.time === time && a.name === name)) {
      alert("An alarm with the same time and name already exists.");
      return;
    }
    setAlarms((p) => [...p, { id: Date.now(), name, time, active: true }]);
    setAlarmName("My Alarm");
  };

  const toggleAlarm = (id: number) => {
    setAlarms((p) => p.map((a) => (a.id === id ? { ...a, active: !a.active } : a)));
  };

  const deleteAlarm = (id: number) => {
    if (confirm("Are you sure you want to delete this alarm?")) {
      setAlarms((p) => p.filter((a) => a.id !== id));
    }
  };

  const startEdit = (alarm: Alarm) => {
    const [h, m] = alarm.time.split(":").map(Number);
    setEditingId(alarm.id);
    setEditName(alarm.name);
    setEditPeriod(h >= 12 ? "PM" : "AM");
    setEditHour((h % 12 || 12).toString());
    setEditMinute(m.toString().padStart(2, "0"));
  };

  const saveEdit = () => {
    if (!editingId) return;
    let hour24 = parseInt(editHour);
    if (editPeriod === "PM" && hour24 !== 12) hour24 += 12;
    if (editPeriod === "AM" && hour24 === 12) hour24 = 0;
    const time = `${hour24.toString().padStart(2, "0")}:${editMinute.padStart(2, "0")}`;
    setAlarms((p) =>
      p.map((a) =>
        a.id === editingId ? { ...a, name: editName.trim() || "My Alarm", time } : a
      )
    );
    setEditingId(null);
  };

  const dismissModal = () => {
    setModalAlarm(null);
    stopAlarmSound();
  };

  const sortedAlarms = [...alarms].sort((a, b) => {
    const toMin = (t: string) => {
      const [h, m] = t.split(":").map(Number);
      return h * 60 + m;
    };
    return toMin(a.time) - toMin(b.time);
  });

  const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0"));
  const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-6 rounded-xl border border-border bg-surface p-6 text-center">
        <div className="font-mono text-4xl font-bold text-slate-100 sm:text-5xl">
          {currentTime}
        </div>
      </div>

      <div className="mb-6 rounded-xl border border-border bg-surface p-6">
        <h3 className="mb-4 text-lg font-semibold text-slate-200">Add Alarm</h3>
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm text-slate-400">Alarm Name</label>
            <input
              type="text"
              value={alarmName}
              onChange={(e) => setAlarmName(e.target.value)}
              placeholder="Enter alarm name"
              maxLength={50}
              className="w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-400">Time</label>
            <div className="flex flex-wrap gap-2">
              <select
                value={period}
                onChange={(e) => setPeriod(e.target.value as "AM" | "PM")}
                className="rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-slate-100 focus:border-blue-500 focus:outline-none"
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
              <select
                value={hour}
                onChange={(e) => setHour(e.target.value)}
                className="rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-slate-100 focus:border-blue-500 focus:outline-none"
              >
                {hours.map((h) => (
                  <option key={h} value={h}>
                    {h}
                  </option>
                ))}
              </select>
              <select
                value={minute}
                onChange={(e) => setMinute(e.target.value)}
                className="rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-slate-100 focus:border-blue-500 focus:outline-none"
              >
                {minutes.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            onClick={addAlarm}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Alarm
          </button>
        </div>
      </div>

      <div className="mb-6 rounded-xl border border-border bg-surface p-6">
        <h3 className="mb-4 text-lg font-semibold text-slate-200">Alarms List</h3>
        {sortedAlarms.length === 0 ? (
          <div className="py-12 text-center text-slate-500">
            <svg
              className="mx-auto mb-4 h-16 w-16 text-slate-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <p className="font-medium">No alarms set</p>
            <p className="text-sm">Add an alarm to get started</p>
          </div>
        ) : (
          <div className="space-y-3">
            {sortedAlarms.map((alarm) => (
              <div
                key={alarm.id}
                className={`flex items-center justify-between rounded-lg border p-4 transition-all ${
                  alarm.active
                    ? "border-slate-600 bg-slate-800/50"
                    : "border-slate-700/50 bg-slate-800/30 opacity-70"
                }`}
              >
                <div
                  className="flex-1 cursor-pointer"
                  onClick={() => startEdit(alarm)}
                >
                  <div className="font-medium text-slate-200">{escapeHtml(alarm.name)}</div>
                  <div className="font-mono text-slate-400">{formatTime12(alarm.time)}</div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleAlarm(alarm.id)}
                    className={`rounded-lg p-2 transition-colors ${
                      alarm.active ? "bg-emerald-600 hover:bg-emerald-700" : "bg-slate-600 hover:bg-slate-500"
                    }`}
                    title={alarm.active ? "Disable" : "Enable"}
                  >
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={alarm.active ? "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" : "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"}
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => startEdit(alarm)}
                    className="rounded-lg bg-blue-600 p-2 text-white transition-colors hover:bg-blue-700"
                    title="Edit"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => deleteAlarm(alarm.id)}
                    className="rounded-lg bg-red-600 p-2 text-white transition-colors hover:bg-red-700"
                    title="Delete"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {editingId !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setEditingId(null)}
        >
          <div
            className="w-full max-w-md rounded-xl border border-slate-600 bg-slate-800 p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="mb-4 text-lg font-semibold text-slate-200">Edit Alarm</h3>
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm text-slate-400">Alarm Name</label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-slate-100"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-400">Time</label>
                <div className="flex gap-2">
                  <select
                    value={editPeriod}
                    onChange={(e) => setEditPeriod(e.target.value as "AM" | "PM")}
                    className="rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-slate-100"
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                  <select
                    value={editHour}
                    onChange={(e) => setEditHour(e.target.value)}
                    className="rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-slate-100"
                  >
                    {hours.map((h) => (
                      <option key={h} value={h}>
                        {h}
                      </option>
                    ))}
                  </select>
                  <select
                    value={editMinute}
                    onChange={(e) => setEditMinute(e.target.value)}
                    className="rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-slate-100"
                  >
                    {minutes.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={saveEdit}
                  className="flex-1 rounded-lg bg-blue-600 py-2 font-medium text-white hover:bg-blue-700"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="flex-1 rounded-lg bg-slate-600 py-2 font-medium text-slate-200 hover:bg-slate-500"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Alarm Triggered Modal */}
      {modalAlarm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={dismissModal}
        >
          <div
            className="animate-bounce rounded-xl border border-slate-600 bg-slate-800 p-8 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 text-5xl">🔔</div>
            <h2 className="mb-2 text-2xl font-bold text-slate-100">{modalAlarm.name}</h2>
            <p className="mb-6 text-slate-400">Time: {formatTime12(modalAlarm.time)}</p>
            <button
              onClick={dismissModal}
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
            >
              Stop Alarm
            </button>
          </div>
        </div>
      )}

      <Link
        href="/tools/time"
        className="mt-6 inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        ← Back to Time Tools
      </Link>
    </div>
  );
}
