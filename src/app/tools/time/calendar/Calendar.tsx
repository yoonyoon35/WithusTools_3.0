"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

interface CalendarEvent {
  id: number;
  title: string;
  description: string;
}

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function formatDate(date: Date) {
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
}

export default function Calendar() {
  const today = new Date();
  const [current, setCurrent] = useState(new Date());
  const [selected, setSelected] = useState(formatDate(today));
  const [events, setEvents] = useState<Record<string, CalendarEvent[]>>(() => {
    if (typeof window === "undefined") return {};
    return JSON.parse(localStorage.getItem("calendarEvents") || "{}");
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDesc, setEventDesc] = useState("");

  useEffect(() => {
    localStorage.setItem("calendarEvents", JSON.stringify(events));
  }, [events]);

  const changeMonth = (delta: number) => {
    setCurrent((c) => {
      const next = new Date(c);
      next.setMonth(next.getMonth() + delta);
      return next;
    });
  };

  const getDays = useCallback(() => {
    const year = current.getFullYear();
    const month = current.getMonth();
    const first = new Date(year, month, 1);
    const last = new Date(year, month + 1, 0);
    const startPad = first.getDay();
    const days: { date: Date; otherMonth: boolean }[] = [];

    for (let i = startPad - 1; i >= 0; i--) {
      const d = new Date(year, month - 1, new Date(year, month, 0).getDate() - i);
      days.push({ date: d, otherMonth: true });
    }
    for (let i = 1; i <= last.getDate(); i++) {
      days.push({ date: new Date(year, month, i), otherMonth: false });
    }
    const remain = 42 - days.length;
    for (let i = 1; i <= remain; i++) {
      days.push({ date: new Date(year, month + 1, i), otherMonth: true });
    }
    return days;
  }, [current]);

  const openAddModal = () => {
    setEditId(null);
    setEventTitle("");
    setEventDesc("");
    setModalOpen(true);
  };

  const openEditModal = (event: CalendarEvent) => {
    setEditId(event.id);
    setEventTitle(event.title);
    setEventDesc(event.description);
    setModalOpen(true);
  };

  const saveEvent = () => {
    const title = eventTitle.trim();
    if (!title) return;

    if (editId) {
      setEvents((p) => ({
        ...p,
        [selected]: (p[selected] || []).map((e) =>
          e.id === editId ? { ...e, title, description: eventDesc.trim() } : e
        ),
      }));
    } else {
      setEvents((p) => ({
        ...p,
        [selected]: [...(p[selected] || []), { id: Date.now(), title, description: eventDesc.trim() }],
      }));
    }
    setModalOpen(false);
  };

  const deleteEvent = (id: number) => {
    if (!confirm("Are you sure you want to delete this event?")) return;
    setEvents((p) => {
      const next = (p[selected] || []).filter((e) => e.id !== id);
      if (next.length === 0) {
        const { [selected]: _, ...rest } = p;
        return rest;
      }
      return { ...p, [selected]: next };
    });
  };

  const days = getDays();
  const selectedEvents = events[selected] || [];
  const monthLabel = current.toLocaleString("en-US", { month: "long", year: "numeric" });
  const selectedDateLabel = new Date(selected + "T12:00:00").toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid gap-6 lg:grid-cols-[1fr,320px]">
        <div className="rounded-xl border border-border bg-surface overflow-hidden">
          <div className="flex items-center justify-between border-b border-slate-700 bg-slate-800/50 px-4 py-3">
            <button
              onClick={() => changeMonth(-1)}
              className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-700 hover:text-slate-200"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h2 className="text-lg font-semibold text-slate-200">{monthLabel}</h2>
            <button
              onClick={() => changeMonth(1)}
              className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-700 hover:text-slate-200"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-7 border-b border-slate-700 bg-slate-800/30 text-center text-sm font-medium text-slate-500">
            {WEEKDAYS.map((d) => (
              <div key={d} className="py-2">
                {d}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {days.map(({ date, otherMonth }, i) => {
              const dStr = formatDate(date);
              const isToday = dStr === formatDate(today);
              const isSelected = dStr === selected;
              const dayEvents = events[dStr] || [];
              return (
                <button
                  key={i}
                  onClick={() => setSelected(dStr)}
                  className={`min-h-[100px] border-b border-r border-slate-700/50 p-2 text-left transition-colors hover:bg-slate-800/50 ${
                    otherMonth ? "text-slate-600" : "text-slate-200"
                  } ${isToday ? "bg-blue-900/30" : ""} ${isSelected ? "ring-2 ring-inset ring-blue-500" : ""}`}
                >
                  <div className="mb-1 font-semibold">{date.getDate()}</div>
                  {dayEvents.slice(0, 2).map((e) => (
                    <div
                      key={e.id}
                      className="truncate rounded bg-blue-600/80 px-1 py-0.5 text-xs text-white"
                      title={e.title}
                    >
                      {e.title}
                    </div>
                  ))}
                  {dayEvents.length > 2 && (
                    <div className="mt-1 text-xs text-slate-500">+{dayEvents.length - 2} more</div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="rounded-xl border border-border bg-surface p-4">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold text-slate-200">Events for {selectedDateLabel}</h3>
            <button
              onClick={openAddModal}
              className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
            >
              + Add
            </button>
          </div>
          <div className="space-y-3">
            {selectedEvents.length === 0 ? (
              <p className="py-8 text-center text-slate-500">No events for this date</p>
            ) : (
              selectedEvents.map((event) => (
                <div
                  key={event.id}
                  className="group rounded-lg border border-slate-700 bg-slate-800/50 p-3"
                >
                  <div className="mb-1 font-medium text-slate-200">{event.title}</div>
                  {event.description && (
                    <div className="mb-2 text-sm text-slate-500">{event.description}</div>
                  )}
                  <div className="flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                    <button
                      onClick={() => openEditModal(event)}
                      className="text-sm text-blue-400 hover:text-blue-300"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteEvent(event.id)}
                      className="text-sm text-red-400 hover:text-red-300"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Event Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-xl border border-slate-600 bg-slate-800 p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="mb-4 text-lg font-semibold text-slate-200">
              {editId ? "Edit Event" : "Add Event"}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm text-slate-400">Event title</label>
                <input
                  type="text"
                  value={eventTitle}
                  onChange={(e) => setEventTitle(e.target.value)}
                  placeholder="Event title"
                  className="w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-slate-100 placeholder-slate-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-slate-400">Event description</label>
                <textarea
                  value={eventDesc}
                  onChange={(e) => setEventDesc(e.target.value)}
                  placeholder="Event description"
                  rows={3}
                  className="w-full resize-none rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-slate-100 placeholder-slate-500"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={saveEvent}
                  className="flex-1 rounded-lg bg-blue-600 py-2 font-medium text-white hover:bg-blue-700"
                >
                  Save
                </button>
                <button
                  onClick={() => setModalOpen(false)}
                  className="flex-1 rounded-lg bg-slate-600 py-2 font-medium text-slate-200 hover:bg-slate-500"
                >
                  Cancel
                </button>
              </div>
            </div>
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
