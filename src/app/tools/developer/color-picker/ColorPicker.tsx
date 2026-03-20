"use client";

import { useState, useCallback, useEffect, useRef, useMemo } from "react";

function rgbToHex(r: number, g: number, b: number): string {
  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
      .toUpperCase()
  );
}

function hexToRgb(hex: string): [number, number, number] | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
    : null;
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function hslToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0,
    g = 0,
    b = 0;
  if (h >= 0 && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (h >= 60 && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (h >= 180 && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (h >= 240 && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else {
    r = c;
    g = 0;
    b = x;
  }
  return rgbToHex(
    Math.round((r + m) * 255),
    Math.round((g + m) * 255),
    Math.round((b + m) * 255)
  );
}

function rgbToHsv(r: number, g: number, b: number): [number, number, number] {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  let h = 0;
  const v = max * 100;
  const s = max === 0 ? 0 : (delta / max) * 100;
  if (delta !== 0) {
    if (max === r) h = 60 * (((g - b) / delta) % 6);
    else if (max === g) h = 60 * ((b - r) / delta + 2);
    else h = 60 * ((r - g) / delta + 4);
    if (h < 0) h += 360;
  }
  return [Math.round(h), Math.round(s), Math.round(v)];
}

function rgbToCmyk(r: number, g: number, b: number): [number, number, number, number] {
  let rn = r / 255;
  let gn = g / 255;
  let bn = b / 255;
  const k = 1 - Math.max(rn, gn, bn);
  if (k === 1) return [0, 0, 0, 100];
  const c = ((1 - rn - k) / (1 - k)) * 100;
  const m = ((1 - gn - k) / (1 - k)) * 100;
  const y = ((1 - bn - k) / (1 - k)) * 100;
  return [Math.round(c), Math.round(m), Math.round(y), Math.round(k * 100)];
}

function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((val) => {
    val = val / 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function getContrast(r1: number, g1: number, b1: number, r2: number, g2: number, b2: number): number {
  const l1 = getLuminance(r1, g1, b1);
  const l2 = getLuminance(r2, g2, b2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

function getWcagBadge(ratio: number): { label: string; className: string } {
  if (ratio < 3) return { label: "Fail", className: "bg-red-500/20 text-red-400" };
  if (ratio < 4.5) return { label: "AA (Large)", className: "bg-amber-500/20 text-amber-400" };
  if (ratio < 7) return { label: "AA", className: "bg-green-500/20 text-green-400" };
  return { label: "AAA", className: "bg-green-500/20 text-green-400" };
}

const COMPARISON_COLORS: { name: string; hex: string; rgb: [number, number, number] }[] = [
  { name: "White", hex: "#FFFFFF", rgb: [255, 255, 255] },
  { name: "Black", hex: "#000000", rgb: [0, 0, 0] },
  { name: "Red", hex: "#FF0000", rgb: [255, 0, 0] },
  { name: "Yellow", hex: "#FFFF00", rgb: [255, 255, 0] },
  { name: "Green", hex: "#008000", rgb: [0, 128, 0] },
  { name: "Blue", hex: "#0000FF", rgb: [0, 0, 255] },
  { name: "Navy", hex: "#000080", rgb: [0, 0, 128] },
  { name: "Purple", hex: "#800080", rgb: [128, 0, 128] },
  { name: "Gray", hex: "#808080", rgb: [128, 128, 128] },
];

const COLOR_HISTORY_KEY = "colorHistory";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900";

export default function ColorPicker() {
  const [hex, setHex] = useState("#000000");
  const [alpha, setAlpha] = useState(100);
  const [customCompareHex, setCustomCompareHex] = useState<string>("#6B7280");
  const [toast, setToast] = useState<{ text: string; type: "success" | "error" } | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const rgb = hexToRgb(hex);
  const r = rgb?.[0] ?? 0;
  const g = rgb?.[1] ?? 0;
  const b = rgb?.[2] ?? 0;
  const [h, s, l] = rgb ? rgbToHsl(r, g, b) : [0, 0, 0];
  const [hv, sv, vv] = rgb ? rgbToHsv(r, g, b) : [0, 0, 0];
  const [c, m, y, k] = rgb ? rgbToCmyk(r, g, b) : [0, 0, 0, 0];
  const alphaVal = alpha / 100;

  useEffect(() => {
    try {
      const saved = localStorage.getItem(COLOR_HISTORY_KEY);
      if (saved) setHistory(JSON.parse(saved));
    } catch {
      // ignore
    }
  }, []);

  const showToast = useCallback((msg: string, type: "success" | "error" = "success") => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
      toastTimerRef.current = null;
    }
    setToast({ text: msg, type });
    toastTimerRef.current = setTimeout(() => {
      setToast(null);
      toastTimerRef.current = null;
    }, 3000);
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  const updateColor = useCallback(
    (newHex: string) => {
      if (!/^#[0-9A-Fa-f]{6}$/.test(newHex)) return;
      setHex(newHex.toUpperCase());
      if (!history.includes(newHex.toUpperCase())) {
        const next = [newHex.toUpperCase(), ...history].slice(0, 20);
        setHistory(next);
        try {
          localStorage.setItem(COLOR_HISTORY_KEY, JSON.stringify(next));
        } catch {
          // ignore
        }
      }
    },
    [history]
  );

  const copyValue = useCallback(
    (value: string) => {
      navigator.clipboard
        .writeText(value)
        .then(() => showToast("Copied!", "success"))
        .catch(() => showToast("Failed to copy", "error"));
    },
    [showToast]
  );

  const activateEyedropper = useCallback(async () => {
    if (!("EyeDropper" in window)) {
      showToast("Eyedropper API is not supported in your browser", "error");
      return;
    }
    try {
      const eyeDropper = new (window as unknown as { EyeDropper: new () => { open: () => Promise<{ sRGBHex: string }> } }).EyeDropper();
      const result = await eyeDropper.open();
      updateColor(result.sRGBHex);
      showToast("Color picked!", "success");
    } catch (err) {
      if ((err as Error).name !== "AbortError") showToast("Failed to pick color", "error");
    }
  }, [showToast, updateColor]);

  const activateEyedropperForCustom = useCallback(async () => {
    if (!("EyeDropper" in window)) {
      showToast("Eyedropper API is not supported in your browser", "error");
      return;
    }
    try {
      const eyeDropper = new (window as unknown as { EyeDropper: new () => { open: () => Promise<{ sRGBHex: string }> } }).EyeDropper();
      const result = await eyeDropper.open();
      setCustomCompareHex(result.sRGBHex.toUpperCase());
      showToast("Comparison color picked!", "success");
    } catch (err) {
      if ((err as Error).name !== "AbortError") showToast("Failed to pick color", "error");
    }
  }, [showToast]);

  const contrastResults = useMemo(() => {
    if (!rgb) return [];
    const customRgb = hexToRgb(customCompareHex);
    const customItem =
      customRgb && /^#[0-9A-Fa-f]{6}$/.test(customCompareHex)
        ? { name: "Custom", hex: customCompareHex.toUpperCase(), ratio: getContrast(r, g, b, customRgb[0], customRgb[1], customRgb[2]) }
        : null;
    const presetItems = COMPARISON_COLORS.map(({ name, hex: ch, rgb: [cr, cg, cb] }) => ({
      name,
      hex: ch,
      ratio: getContrast(r, g, b, cr, cg, cb),
    }));
    return customItem ? [customItem, ...presetItems] : presetItems;
  }, [rgb, r, g, b, customCompareHex]);

  const palette = useMemo(() =>
    rgb
    ? [
        { color: hex, label: "Original" },
        { color: hslToHex((h + 180) % 360, s, l), label: "Complementary" },
        { color: hslToHex((h + 30) % 360, s, l), label: "Analogous 1" },
        { color: hslToHex((h - 30 + 360) % 360, s, l), label: "Analogous 2" },
        { color: hslToHex((h + 120) % 360, s, l), label: "Triadic 1" },
        { color: hslToHex((h + 240) % 360, s, l), label: "Triadic 2" },
        { color: hslToHex(h, s, Math.min(100, l + 20)), label: "Lighter" },
        { color: hslToHex(h, s, Math.max(0, l - 20)), label: "Darker" },
      ]
    : [],
  [rgb, hex, h, s, l]);

  const clearHistory = useCallback(() => {
    if (window.confirm("Clear all saved colors?")) {
      setHistory([]);
      localStorage.removeItem(COLOR_HISTORY_KEY);
      showToast("History cleared", "success");
    }
  }, [showToast]);

  return (
    <div className="space-y-6" role="main" aria-label="Color Picker">
      <div className="rounded-xl border border-border bg-surface p-6">
        <div className="flex flex-wrap items-start gap-6">
          <div className="flex flex-col items-stretch gap-3">
            <div
              className="aspect-square w-full min-w-0 rounded-lg border-2 border-border"
              style={{ backgroundColor: `rgba(${r}, ${g}, ${b}, ${alphaVal})` }}
              role="img"
              aria-label={`Selected color: ${hex}`}
            />
            <div className="flex gap-2">
              <input
                type="color"
                value={hex}
                onChange={(e) => updateColor(e.target.value)}
                aria-label="Select color"
                className={`h-10 w-14 cursor-pointer rounded border-0 bg-transparent p-0 ${focusRing}`}
              />
              <button
                type="button"
                onClick={activateEyedropper}
                aria-label="Pick color from screen using eyedropper"
                className={`flex items-center justify-center rounded-lg border border-border p-2.5 text-slate-300 hover:border-slate-600 hover:bg-slate-700 ${focusRing}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="m2 22 1-1h3l9-9" />
                  <path d="M3 21v-3l9-9" />
                  <path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex-1 space-y-3">
            {[
              { label: "HEX", value: hex },
              { label: "RGB", value: `rgb(${r}, ${g}, ${b})` },
              { label: "RGBA", value: `rgba(${r}, ${g}, ${b}, ${alphaVal.toFixed(2)})` },
              { label: "HSL", value: `hsl(${h}, ${s}%, ${l}%)` },
              { label: "HSV", value: `hsv(${hv}, ${sv}%, ${vv}%)` },
              { label: "CMYK", value: `cmyk(${c}%, ${m}%, ${y}%, ${k}%)` },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center gap-2">
                <label htmlFor={`color-${label}`} className="w-14 shrink-0 text-sm text-slate-400">
                  {label}
                </label>
                <input
                  id={`color-${label}`}
                  type="text"
                  value={value}
                  readOnly
                  aria-label={`${label} value`}
                  className="flex-1 rounded border border-border bg-slate-950 px-3 py-2 font-mono text-sm text-slate-200"
                />
                <button
                  type="button"
                  onClick={() => copyValue(value)}
                  aria-label={`Copy ${label}`}
                  className={`rounded border border-border px-3 py-2 text-sm text-slate-400 hover:border-slate-600 hover:text-slate-200 ${focusRing}`}
                >
                  Copy
                </button>
              </div>
            ))}
            <div>
              <label htmlFor="alpha-slider" className="text-sm text-slate-400">
                Alpha: {alpha}%
              </label>
              <input
                id="alpha-slider"
                type="range"
                min="0"
                max="100"
                value={alpha}
                onChange={(e) => setAlpha(Number(e.target.value))}
                aria-label="Alpha transparency"
                className={`mt-1 w-full ${focusRing}`}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <h3 className="mb-4 text-lg font-semibold text-slate-100">Contrast Ratio</h3>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch sm:gap-6">
          <div className="flex shrink-0 flex-col items-center gap-2">
            <span className="text-sm text-slate-500">Custom color</span>
            <div className="inline-flex w-fit flex-col items-stretch gap-1 rounded-lg border border-border bg-slate-950 px-3 py-2">
              <span
                className="aspect-square w-full min-w-[8rem] rounded border border-border"
                style={{ backgroundColor: customCompareHex }}
                aria-hidden
              />
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={customCompareHex}
                  onChange={(e) => setCustomCompareHex(e.target.value)}
                  aria-label="Select comparison color"
                  className={`h-7 w-9 cursor-pointer rounded border-0 bg-transparent p-0 ${focusRing}`}
                />
              <button
                type="button"
                onClick={activateEyedropperForCustom}
                aria-label="Pick comparison color from screen using eyedropper"
                className={`flex shrink-0 items-center justify-center rounded p-1.5 text-slate-400 hover:bg-slate-700 hover:text-slate-200 ${focusRing}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="m2 22 1-1h3l9-9" />
                  <path d="M3 21v-3l9-9" />
                  <path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4" />
                </svg>
              </button>
              <span className="font-mono text-sm text-slate-200">{customCompareHex.toUpperCase()}</span>
              </div>
            </div>
          </div>

          <div className="flex min-w-0 flex-1 items-center justify-center rounded-lg border border-border bg-slate-950 p-4">
            <div className="grid w-fit grid-cols-2 gap-x-6 gap-y-3 text-sm sm:gap-x-8">
          {contrastResults.map(({ name, hex: ch, ratio }) => {
            const badge = getWcagBadge(ratio);
            return (
              <div key={name} className="flex flex-nowrap items-center gap-2">
                <span className="flex shrink-0 items-center gap-2 text-slate-400">
                  <span className="w-5">vs</span>
                  <span
                    className="inline-block h-4 w-4 shrink-0 rounded border border-border"
                    style={{ backgroundColor: ch }}
                    aria-hidden
                  />
                  <span className="min-w-[4.5rem] font-mono text-slate-300">{ch}</span>
                  <span className="shrink-0 text-slate-400">{name}</span>
                </span>
                <span className="shrink-0 font-mono text-slate-200">{ratio.toFixed(2)} : 1</span>
                <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${badge.className}`}>{badge.label}</span>
              </div>
            );
          })}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <h3 className="mb-3 text-lg font-semibold text-slate-100">Color Palette</h3>
        <div className="flex flex-wrap gap-2">
          {palette.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => updateColor(item.color)}
              aria-label={`Select ${item.label} color: ${item.color}`}
              className={`h-12 w-12 rounded-lg border-2 border-border transition-transform hover:scale-110 ${focusRing}`}
              style={{ backgroundColor: item.color }}
            />
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-100">Saved Colors</h3>
          <button
            type="button"
            onClick={clearHistory}
            aria-label="Clear saved colors history"
            className={`text-sm text-slate-400 hover:text-slate-200 ${focusRing}`}
          >
            Clear
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {history.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() => updateColor(color)}
              aria-label={`Select saved color ${color}`}
              className={`h-10 w-10 rounded-lg border border-border transition-transform hover:scale-110 ${focusRing}`}
              style={{ backgroundColor: color }}
            />
          ))}
          {history.length === 0 && (
            <p className="text-sm text-slate-500">Select colors to save them here</p>
          )}
        </div>
      </div>

      {toast && (
        <div
          className={`fixed right-4 top-4 z-50 rounded-lg px-4 py-2 text-sm font-medium text-white shadow-lg ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
          role="alert"
          aria-live="polite"
          aria-atomic="true"
        >
          {toast.text}
        </div>
      )}
    </div>
  );
}
