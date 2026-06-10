"use client";

import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import { Link } from "@/i18n/navigation";
import useToolPageContent from "@/hooks/useToolPageContent";
import { asMap, asText, formatUi } from "@/lib/tool-ui-helpers";
import {
  COLOR_FORMAT_LABELS,
  getAllColorFormatPairs,
  getCanonicalColorPairSlug,
  rgbToCmyk,
} from "@/utils/colorFormatConversions";

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

function getWcagBadge(
  ratio: number,
  wcagUi: { fail: string; aaLarge: string; aa: string; aaa: string }
): { label: string; className: string } {
  if (ratio < 3) return { label: wcagUi.fail, className: "bg-red-500/20 text-red-400" };
  if (ratio < 4.5) return { label: wcagUi.aaLarge, className: "bg-amber-500/20 text-amber-400" };
  if (ratio < 7) return { label: wcagUi.aa, className: "bg-green-500/20 text-green-400" };
  return { label: wcagUi.aaa, className: "bg-green-500/20 text-green-400" };
}

const COMPARISON_COLORS: { key: string; defaultName: string; hex: string; rgb: [number, number, number] }[] = [
  { key: "white", defaultName: "White", hex: "#FFFFFF", rgb: [255, 255, 255] },
  { key: "black", defaultName: "Black", hex: "#000000", rgb: [0, 0, 0] },
  { key: "red", defaultName: "Red", hex: "#FF0000", rgb: [255, 0, 0] },
  { key: "yellow", defaultName: "Yellow", hex: "#FFFF00", rgb: [255, 255, 0] },
  { key: "green", defaultName: "Green", hex: "#008000", rgb: [0, 128, 0] },
  { key: "blue", defaultName: "Blue", hex: "#0000FF", rgb: [0, 0, 255] },
  { key: "navy", defaultName: "Navy", hex: "#000080", rgb: [0, 0, 128] },
  { key: "purple", defaultName: "Purple", hex: "#800080", rgb: [128, 0, 128] },
  { key: "gray", defaultName: "Gray", hex: "#808080", rgb: [128, 128, 128] },
];

const COLOR_HISTORY_KEY = "colorHistory";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900";

export type DedicatedConvertersFaqLink = {
  slug: string;
  question: string;
  category: string;
};

type ColorPickerProps = {
  dedicatedConvertersFaq?: DedicatedConvertersFaqLink[];
};

const META_PATH = "/tools/developer/color-picker";

export default function ColorPicker({ dedicatedConvertersFaq = [] }: ColorPickerProps) {
  const page = useToolPageContent(META_PATH);
  const ui = page?.ui;
  const toolUi = asMap(ui);
  const labels = asMap(toolUi.labels);
  const paletteNames = asMap(toolUi.paletteNames);
  const wcag = asMap(toolUi.wcag);
  const messages = asMap(toolUi.messages);
  const aria = asMap(toolUi.aria);
  const colorNames = asMap(toolUi.colorNames);

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
        .then(() => showToast(asText(messages.copied), "success"))
        .catch(() => showToast(asText(toolUi.copyFailed), "error"));
    },
    [messages.copied, showToast, toolUi.copyFailed]
  );

  const activateEyedropper = useCallback(async () => {
    if (!("EyeDropper" in window)) {
      showToast(asText(messages.unsupportedEyedropper), "error");
      return;
    }
    try {
      const eyeDropper = new (window as unknown as { EyeDropper: new () => { open: () => Promise<{ sRGBHex: string }> } }).EyeDropper();
      const result = await eyeDropper.open();
      updateColor(result.sRGBHex);
      showToast(asText(messages.colorPicked), "success");
    } catch (err) {
      if ((err as Error).name !== "AbortError") showToast(asText(messages.pickFailed), "error");
    }
  }, [messages.colorPicked, messages.pickFailed, messages.unsupportedEyedropper, showToast, updateColor]);

  const activateEyedropperForCustom = useCallback(async () => {
    if (!("EyeDropper" in window)) {
      showToast(asText(messages.unsupportedEyedropper), "error");
      return;
    }
    try {
      const eyeDropper = new (window as unknown as { EyeDropper: new () => { open: () => Promise<{ sRGBHex: string }> } }).EyeDropper();
      const result = await eyeDropper.open();
      setCustomCompareHex(result.sRGBHex.toUpperCase());
      showToast(asText(messages.comparisonColorPicked), "success");
    } catch (err) {
      if ((err as Error).name !== "AbortError") showToast(asText(messages.pickFailed), "error");
    }
  }, [messages.comparisonColorPicked, messages.pickFailed, messages.unsupportedEyedropper, showToast]);

  const contrastResults = useMemo(() => {
    if (!rgb) return [];
    const customRgb = hexToRgb(customCompareHex);
    const customItem =
      customRgb && /^#[0-9A-Fa-f]{6}$/.test(customCompareHex)
        ? {
            name: asText(colorNames.custom),
            hex: customCompareHex.toUpperCase(),
            ratio: getContrast(r, g, b, customRgb[0], customRgb[1], customRgb[2]),
          }
        : null;
    const presetItems = COMPARISON_COLORS.map(({ key, defaultName, hex: ch, rgb: [cr, cg, cb] }) => ({
      name: asText(colorNames[key]) || defaultName,
      hex: ch,
      ratio: getContrast(r, g, b, cr, cg, cb),
    }));
    return customItem ? [customItem, ...presetItems] : presetItems;
  }, [colorNames, customCompareHex, r, g, b, rgb]);

  const palette = useMemo(() =>
    rgb
    ? [
        { color: hex, label: asText(paletteNames.original) },
        { color: hslToHex((h + 180) % 360, s, l), label: asText(paletteNames.complementary) },
        { color: hslToHex((h + 30) % 360, s, l), label: asText(paletteNames.analogous1) },
        { color: hslToHex((h - 30 + 360) % 360, s, l), label: asText(paletteNames.analogous2) },
        { color: hslToHex((h + 120) % 360, s, l), label: asText(paletteNames.triadic1) },
        { color: hslToHex((h + 240) % 360, s, l), label: asText(paletteNames.triadic2) },
        { color: hslToHex(h, s, Math.min(100, l + 20)), label: asText(paletteNames.lighter) },
        { color: hslToHex(h, s, Math.max(0, l - 20)), label: asText(paletteNames.darker) },
      ]
    : [],
  [rgb, hex, h, s, l, paletteNames]);

  const clearHistory = useCallback(() => {
    if (window.confirm(asText(messages.clearHistoryConfirm))) {
      setHistory([]);
      localStorage.removeItem(COLOR_HISTORY_KEY);
      showToast(asText(messages.historyCleared), "success");
    }
  }, [messages.clearHistoryConfirm, messages.historyCleared, showToast]);

  const colorFormatPairs = useMemo(() => getAllColorFormatPairs(), []);
  const wcagUi = {
    fail: asText(wcag.fail),
    aaLarge: asText(wcag.aaLarge),
    aa: asText(wcag.aa),
    aaa: asText(wcag.aaa),
  };

  if (!ui) return null;

  return (
    <div className="space-y-6" role="main" aria-label={asText(page?.h1)}>
      <div className="rounded-xl border border-border bg-surface p-6">
        <div className="flex flex-wrap items-start gap-6">
          <div className="flex flex-col items-stretch gap-3">
            <div
              className="aspect-square w-full min-w-0 rounded-lg border-2 border-border"
              style={{ backgroundColor: `rgba(${r}, ${g}, ${b}, ${alphaVal})` }}
              role="img"
              aria-label={formatUi(asText(aria.selectedColor), { color: hex })}
            />
            <div className="flex gap-2">
              <input
                type="color"
                value={hex}
                onChange={(e) => updateColor(e.target.value)}
                aria-label={asText(aria.selectColor)}
                className={`h-10 w-14 cursor-pointer rounded border-0 bg-transparent p-0 ${focusRing}`}
              />
              <button
                type="button"
                onClick={activateEyedropper}
                aria-label={asText(aria.pickColor)}
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
                  aria-label={formatUi(asText(aria.valueByFormat), { format: label })}
                  className="flex-1 rounded border border-border bg-slate-950 px-3 py-2 font-mono text-sm text-slate-200"
                />
                <button
                  type="button"
                  onClick={() => copyValue(value)}
                  aria-label={formatUi(asText(aria.copyByFormat), { format: label })}
                  className={`rounded border border-border px-3 py-2 text-sm text-slate-400 hover:border-slate-600 hover:text-slate-200 ${focusRing}`}
                >
                  {asText(toolUi.copy)}
                </button>
              </div>
            ))}
            <div>
              <label htmlFor="alpha-slider" className="text-sm text-slate-400">
                {asText(labels.alpha)}: {alpha}%
              </label>
              <input
                id="alpha-slider"
                type="range"
                min="0"
                max="100"
                value={alpha}
                onChange={(e) => setAlpha(Number(e.target.value))}
                aria-label={asText(aria.alpha)}
                className={`mt-1 w-full ${focusRing}`}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <h3 className="mb-4 text-lg font-semibold text-slate-100">{asText(labels.contrastRatio)}</h3>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch sm:gap-6">
          <div className="flex shrink-0 flex-col items-center gap-2">
            <span className="text-sm text-slate-500">{asText(labels.customColor)}</span>
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
                  aria-label={asText(aria.selectComparisonColor)}
                  className={`h-7 w-9 cursor-pointer rounded border-0 bg-transparent p-0 ${focusRing}`}
                />
              <button
                type="button"
                onClick={activateEyedropperForCustom}
                aria-label={asText(aria.pickComparisonColor)}
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
            const badge = getWcagBadge(ratio, wcagUi);
            return (
              <div key={name} className="flex flex-nowrap items-center gap-2">
                <span className="flex shrink-0 items-center gap-2 text-slate-400">
                  <span className="w-5">{asText(labels.vs)}</span>
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
        <h3 className="mb-3 text-lg font-semibold text-slate-100">{asText(labels.palette)}</h3>
        <div className="flex flex-wrap gap-2">
          {palette.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => updateColor(item.color)}
              aria-label={formatUi(asText(aria.selectPaletteColor), { label: item.label, color: item.color })}
              className={`h-12 w-12 rounded-lg border-2 border-border transition-transform hover:scale-110 ${focusRing}`}
              style={{ backgroundColor: item.color }}
            />
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-100">{asText(labels.savedColors)}</h3>
          <button
            type="button"
            onClick={clearHistory}
            aria-label={asText(aria.clearSavedColors)}
            className={`text-sm text-slate-400 hover:text-slate-200 ${focusRing}`}
          >
            {asText(toolUi.clear)}
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {history.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() => updateColor(color)}
              aria-label={formatUi(asText(aria.selectSavedColor), { color })}
              className={`h-10 w-10 rounded-lg border border-border transition-transform hover:scale-110 ${focusRing}`}
              style={{ backgroundColor: color }}
            />
          ))}
          {history.length === 0 && (
            <p className="text-sm text-slate-500">{asText(labels.emptySavedColors)}</p>
          )}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <h3 className="mb-4 text-lg font-semibold text-slate-100">{asText(labels.dedicatedConverters)}</h3>
        <p className="mb-6 text-sm text-slate-500">
          {formatUi(asText(labels.dedicatedConvertersDesc), { count: colorFormatPairs.length })}
        </p>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {colorFormatPairs.map(({ from, to }) => {
            const href = `/tools/developer/color-picker/converter/${getCanonicalColorPairSlug(from, to)}`;
            const a = COLOR_FORMAT_LABELS[from].short;
            const b = COLOR_FORMAT_LABELS[to].short;
            return (
              <li key={`${from}-${to}`}>
                <Link
                  href={href}
                  className="flex flex-col rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-sm transition-colors hover:border-slate-500 hover:bg-slate-800"
                >
                  <span className="font-medium text-slate-200">
                    {formatUi(asText(labels.converterTitle), { from: a, to: b })}
                  </span>
                  <span className="mt-1 text-xs text-slate-500">
                    {formatUi(asText(labels.converterSubtitle), { from: a, to: b })}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {dedicatedConvertersFaq.length > 0 ? (
          <div className="mt-10 border-t border-slate-700 pt-8">
            <h3 className="mb-4 text-base font-semibold text-slate-200">{asText(labels.quickFaq)}</h3>
            <p className="mb-4 text-sm text-slate-500">
              {formatUi(asText(labels.quickFaqDesc), { count: dedicatedConvertersFaq.length })}
            </p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {dedicatedConvertersFaq.map((faq) => (
                <li key={faq.slug}>
                  <Link
                    href={`/faq/${faq.category}/${faq.slug}`}
                    className="block rounded-lg border border-slate-600/80 bg-slate-800/30 px-4 py-2.5 text-sm text-slate-300 transition-colors hover:border-slate-500 hover:bg-slate-800/60 hover:text-slate-100"
                  >
                    {faq.question}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
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
