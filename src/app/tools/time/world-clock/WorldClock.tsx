"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import NumberInputWithStepper from "@/components/NumberInputWithStepper";

const TIME_ZONES = [
  { id: "UTC", label: "UTC", city: "UTC", flag: "un", mapId: null as string | null },
  { id: "America/Los_Angeles", label: "Pacific", city: "Los Angeles", flag: "us", mapId: "us" },
  { id: "America/Vancouver", label: "Pacific", city: "Vancouver", flag: "ca", mapId: "ca" },
  { id: "America/Denver", label: "Mountain", city: "Denver", flag: "us", mapId: "us" },
  { id: "America/Chicago", label: "Central", city: "Chicago", flag: "us", mapId: "us" },
  { id: "America/New_York", label: "Eastern", city: "New York", flag: "us", mapId: "us" },
  { id: "America/Toronto", label: "Eastern", city: "Toronto", flag: "ca", mapId: "ca" },
  { id: "America/Toronto", label: "Eastern", city: "Ottawa", flag: "ca", mapId: "ca" },
  { id: "America/Mexico_City", label: "CST", city: "Mexico City", flag: "mx", mapId: "mx" },
  { id: "America/Caracas", label: "VET", city: "Caracas", flag: "ve", mapId: "ve" },
  { id: "America/La_Paz", label: "BOT", city: "La Paz", flag: "bo", mapId: "bo" },
  { id: "America/Sao_Paulo", label: "BRT", city: "São Paulo", flag: "br", mapId: "br" },
  { id: "Europe/London", label: "GMT/BST", city: "London", flag: "gb", mapId: "gb" },
  { id: "Atlantic/Azores", label: "AZOT", city: "Azores", flag: "pt", mapId: "pt" },
  { id: "Europe/Paris", label: "CET", city: "Paris", flag: "fr", mapId: "fr" },
  { id: "Europe/Berlin", label: "CET", city: "Berlin", flag: "de", mapId: "de" },
  { id: "Europe/Rome", label: "CET", city: "Rome", flag: "it", mapId: "it" },
  { id: "Europe/Moscow", label: "MSK", city: "Moscow", flag: "ru", mapId: "ru" },
  { id: "Europe/Istanbul", label: "TRT", city: "Istanbul", flag: "tr", mapId: "tr" },
  { id: "Africa/Cairo", label: "EET", city: "Cairo", flag: "eg", mapId: "eg" },
  { id: "Asia/Dubai", label: "GST", city: "Dubai", flag: "ae", mapId: "ae" },
  { id: "Asia/Riyadh", label: "AST", city: "Riyadh", flag: "sa", mapId: "sa" },
  { id: "Asia/Tehran", label: "IRST", city: "Tehran", flag: "ir", mapId: "ir" },
  { id: "Asia/Karachi", label: "PKT", city: "Karachi", flag: "pk", mapId: "pk" },
  { id: "Asia/Dhaka", label: "BST", city: "Dhaka", flag: "bd", mapId: "bd" },
  { id: "Asia/Kolkata", label: "IST", city: "Mumbai", flag: "in", mapId: "in" },
  { id: "Asia/Bangkok", label: "ICT", city: "Bangkok", flag: "th", mapId: "th" },
  { id: "Asia/Singapore", label: "SGT", city: "Singapore", flag: "sg", mapId: "sg" },
  { id: "Asia/Jakarta", label: "WIB", city: "Jakarta", flag: "id", mapId: "id" },
  { id: "Asia/Manila", label: "PHT", city: "Manila", flag: "ph", mapId: "ph" },
  { id: "Asia/Ho_Chi_Minh", label: "ICT", city: "Ho Chi Minh", flag: "vn", mapId: "vn" },
  { id: "Asia/Shanghai", label: "CST", city: "Shanghai", flag: "cn", mapId: "cn" },
  { id: "Asia/Seoul", label: "KST", city: "Seoul", flag: "kr", mapId: "kr" },
  { id: "Asia/Tokyo", label: "JST", city: "Tokyo", flag: "jp", mapId: "jp" },
  { id: "Australia/Sydney", label: "AEST", city: "Sydney", flag: "au", mapId: "au" },
  { id: "Africa/Johannesburg", label: "SAST", city: "Johannesburg", flag: "za", mapId: "za" },
] as const;

const VISIBLE_ROWS = 4;
const COLS = 3;
const VISIBLE_COUNT = VISIBLE_ROWS * COLS; // 12

function formatInZone(date: Date, timeZone: string, options: Intl.DateTimeFormatOptions = {}) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    ...options,
  }).format(date);
}

function formatDateInZone(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(date);
}

function getSortKeyInZone(date: Date, timeZone: string): string {
  return new Intl.DateTimeFormat("sv-SE", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

function findMomentInZone(
  dateStr: string,
  hour: number,
  minute: number,
  timeZone: string
): Date {
  const [y, m, d] = dateStr.split("-").map(Number);
  const baseUtc = Date.UTC(y, (m || 1) - 1, d || 1, 0, 0, 0);
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  for (let offsetMs = -12 * 60 * 60 * 1000; offsetMs <= 14 * 60 * 60 * 1000; offsetMs += 60 * 1000) {
    const cand = new Date(baseUtc + offsetMs);
    const parts = fmt.formatToParts(cand);
    const partMap: Record<string, string> = {};
    parts.forEach((p) => {
      if (p.type !== "literal") partMap[p.type] = p.value;
    });
    const h = parseInt(partMap.hour || "0", 10);
    const mn = parseInt(partMap.minute || "0", 10);
    const mo = parseInt(partMap.month || "1", 10);
    const dy = parseInt(partMap.day || "1", 10);
    if (h === hour && mn === minute && mo === (m || 1) && dy === (d || 1)) {
      return cand;
    }
  }
  return new Date(y!, (m || 1) - 1, d || 1, hour, minute, 0);
}

export default function WorldClock() {
  const [now, setNow] = useState<Date | null>(null);
  const [converterDate, setConverterDate] = useState("");
  const [fromZone, setFromZone] = useState<string>(TIME_ZONES[1].id);
  const [converterHour, setConverterHour] = useState("14");
  const [converterMinute, setConverterMinute] = useState("30");
  const [hoveredMapId, setHoveredMapId] = useState<string | null>(null);
  const mapObjectRef = useRef<HTMLObjectElement>(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/css/flag-icons.min.css";
    document.head.appendChild(link);
    return () => link.remove();
  }, []);

  useEffect(() => {
    setNow(new Date());
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const today = new Date();
    setConverterDate(today.toISOString().slice(0, 10));
  }, []);

  useEffect(() => {
    const doc = mapObjectRef.current?.contentDocument;
    if (!doc?.documentElement) return;
    const svg = doc.documentElement;
    let style: Element | null = doc.getElementById("world-map-hover-style");
    if (!style) {
      style = doc.createElementNS("http://www.w3.org/2000/svg", "style");
      style.id = "world-map-hover-style";
      svg.insertBefore(style, svg.firstChild);
    }
    style.textContent = hoveredMapId
      ? `#${hoveredMapId}, #${hoveredMapId} path, #${hoveredMapId} .mainland { fill: rgba(16, 185, 129, 0.65) !important; stroke: #10b981 !important; stroke-width: 1.2; }`
      : "";
  }, [hoveredMapId]);

  const convMoment = (() => {
    const dateStr = converterDate || (now ? now.toISOString().slice(0, 10) : "");
    if (!dateStr) return now || new Date();
    const hour = parseInt(converterHour || "0", 10);
    const min = parseInt(converterMinute || "0", 10);
    return findMomentInZone(dateStr, hour, min, fromZone);
  })();

  return (
    <div className="mx-auto max-w-5xl overflow-x-hidden">
      <div className="mb-6 rounded-xl border border-border bg-surface p-6">
        <h3 className="mb-4 text-lg font-semibold text-slate-200">World clocks</h3>
        <p className="mb-4 text-sm text-slate-500">Hover over a time zone to highlight its region on the map.</p>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch">
          {now ? (
            <div className="flex min-w-0 shrink-0 flex-col lg:w-[400px]">
              <div className="scrollbar-thin grid max-h-[420px] grid-cols-2 gap-3 overflow-x-hidden overflow-y-auto pr-1 sm:grid-cols-3 sm:min-w-[340px]">
                {TIME_ZONES.map((tz) => (
                  <div
                    key={tz.id}
                    className="flex min-w-0 aspect-[1.1] min-h-[100px] flex-col items-center justify-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-3 text-center transition-colors hover:border-emerald-500/50"
                    onMouseEnter={() => tz.mapId && setHoveredMapId(tz.mapId)}
                    onMouseLeave={() => setHoveredMapId(null)}
                  >
                    <span className={`fi fi-${tz.flag} inline-block rounded-sm shadow-sm`} style={{ width: 28, height: 21 }} title={tz.city} />
                    <span className="flex w-full min-w-0 flex-col items-center gap-0.5 text-sm text-slate-200">
                      <span className="truncate text-center font-medium leading-tight" title={tz.city}>{tz.city}</span>
                      <span className="text-xs font-normal text-slate-500">({tz.label})</span>
                    </span>
                    <span className="font-mono text-base text-slate-100" suppressHydrationWarning>
                      {formatInZone(now, tz.id)}
                    </span>
                  </div>
                ))}
              </div>
              {TIME_ZONES.length > VISIBLE_COUNT && (
                <p className="mt-2 text-xs text-slate-500">Scroll to see {TIME_ZONES.length - VISIBLE_COUNT} more</p>
              )}
            </div>
          ) : (
            <div className="flex shrink-0 items-center lg:w-[400px]">
              <p className="text-slate-500">Loading...</p>
            </div>
          )}
          <div className="relative min-h-[200px] flex-1 overflow-hidden rounded-lg bg-slate-900 lg:min-h-[240px]">
            <object
              ref={mapObjectRef}
              data="/world-map.svg"
              type="image/svg+xml"
              className="h-full w-full object-contain"
              style={{ minHeight: 200 }}
            />
          </div>
        </div>
      </div>

      <div className="mb-6 rounded-xl border border-border bg-surface p-6">
        <h3 className="mb-4 text-lg font-semibold text-slate-200">Time zone converter</h3>
        <p className="mb-4 text-sm text-slate-500">
          Enter a time and select the timezone it&apos;s in. See the equivalent time in other zones.
        </p>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <div>
              <label className="mb-1 block text-xs text-slate-500">Date</label>
              <input
                type="date"
                value={converterDate}
                onChange={(e) => setConverterDate(e.target.value)}
                className="rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-slate-100"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-slate-500">Time (24h)</label>
              <div className="flex gap-2 items-center">
                <NumberInputWithStepper
                  value={converterHour}
                  onChange={(v) => setConverterHour(v.padStart(2, "0").slice(-2))}
                  min={0}
                  max={23}
                  className="w-20"
                />
                <span className="flex items-center text-slate-500">:</span>
                <NumberInputWithStepper
                  value={converterMinute}
                  onChange={(v) => setConverterMinute(v.padStart(2, "0").slice(-2))}
                  min={0}
                  max={59}
                  className="w-20"
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-xs text-slate-500">Timezone</label>
              <select
                value={fromZone}
                onChange={(e) => setFromZone(e.target.value)}
                className="rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-slate-100"
              >
                {TIME_ZONES.map((tz) => (
                  <option key={tz.id} value={tz.id}>
                    {tz.city} ({tz.label})
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <span className="text-xs text-slate-500">Use current time</span>
            <button
              onClick={() => {
                if (now) {
                  setConverterDate(now.toISOString().slice(0, 10));
                  const h = now.getHours();
                  const m = now.getMinutes();
                  setConverterHour(h.toString());
                  setConverterMinute(m.toString());
                  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
              const found = TIME_ZONES.find((t) => t.id === tz)?.id || TIME_ZONES[0].id;
              setFromZone(found);
                }
              }}
              className="ml-2 rounded bg-slate-600 px-2 py-1 text-xs text-white hover:bg-slate-500"
            >
              Now
            </button>
          </div>
        </div>

        <div className="mt-6 border-t border-slate-700 pt-4">
          <h4 className="mb-3 text-sm font-medium text-slate-300">Converted times</h4>
          {convMoment && (
            <div className="grid gap-2 sm:grid-cols-2">
              {[...TIME_ZONES]
                .sort((a, b) =>
                  getSortKeyInZone(convMoment, a.id).localeCompare(getSortKeyInZone(convMoment, b.id))
                )
                .map((tz) => (
                <div
                  key={`${tz.id}-${tz.city}`}
                  className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2"
                >
                  <span className="flex items-center gap-2 text-sm text-slate-400">
                    <span className={`fi fi-${tz.flag} inline-block rounded-sm`} style={{ width: 24, height: 18 }} />
                    {tz.city}
                  </span>
                  <span className="font-mono text-slate-100" suppressHydrationWarning>
                    {formatInZone(convMoment, tz.id)} {formatDateInZone(convMoment, tz.id)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Link href="/tools/time" className="inline-block text-slate-400 underline transition-colors hover:text-slate-200">
        ← Back to Time Tools
      </Link>
    </div>
  );
}
