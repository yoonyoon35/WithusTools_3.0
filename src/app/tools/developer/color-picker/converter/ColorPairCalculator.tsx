"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  COLOR_FORMAT_LABELS,
  convertColorString,
  getDefaultColorInput,
  type ColorFormatKey,
} from "@/utils/colorFormatConversions";

interface ColorPairCalculatorProps {
  fromKey: ColorFormatKey;
  toKey: ColorFormatKey;
}

export default function ColorPairCalculator({ fromKey, toKey }: ColorPairCalculatorProps) {
  const [fromValue, setFromValue] = useState(() => getDefaultColorInput(fromKey));
  const [toValue, setToValue] = useState("");
  const [calculationLines, setCalculationLines] = useState<string[]>([]);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fromLabel = COLOR_FORMAT_LABELS[fromKey].long;
  const toLabel = COLOR_FORMAT_LABELS[toKey].long;

  useEffect(() => {
    setFromValue(getDefaultColorInput(fromKey));
  }, [fromKey]);

  const showToast = (message: string) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToast(message);
    toastTimeoutRef.current = setTimeout(() => {
      setToast(null);
      toastTimeoutRef.current = null;
    }, 2500);
  };

  const convert = useCallback(() => {
    const out = convertColorString(fromKey, toKey, fromValue);
    if (!out.ok) {
      setToValue("");
      setCalculationLines([out.error]);
      return;
    }
    setToValue(out.result);
    setCalculationLines(out.calculationSteps);
  }, [fromValue, fromKey, toKey]);

  useEffect(() => {
    convert();
  }, [convert]);

  const copyResult = async () => {
    if (!toValue) {
      showToast("No result to copy");
      return;
    }
    try {
      await navigator.clipboard.writeText(toValue);
      showToast("Result copied to clipboard!");
    } catch {
      showToast("Failed to copy result");
    }
  };

  const inputCls =
    "rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-100 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";

  return (
    <div className="relative">
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-sm text-slate-100 shadow-lg ring-1 ring-slate-700"
        >
          {toast}
        </div>
      )}
      <div className="rounded-xl border border-border bg-surface p-6">
        <h2 className="mb-4 text-lg font-semibold text-slate-200">Calculator</h2>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
          <div className="flex flex-1 flex-col gap-2">
            <label className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Input ({COLOR_FORMAT_LABELS[fromKey].short})
            </label>
            <input
              type="text"
              value={fromValue}
              onChange={(e) => setFromValue(e.target.value)}
              placeholder={getDefaultColorInput(fromKey)}
              className={`${inputCls} font-mono text-sm`}
              aria-label={`Color value in ${fromLabel}`}
              autoComplete="off"
              spellCheck={false}
            />
            <p className="text-sm text-slate-400">
              From: <span className="font-medium text-slate-200">{fromLabel}</span>
            </p>
          </div>

          <div className="hidden shrink-0 pb-8 text-slate-500 sm:block" aria-hidden>
            →
          </div>

          <div className="flex flex-1 flex-col gap-2">
            <label className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Result ({COLOR_FORMAT_LABELS[toKey].short})
            </label>
            <input
              type="text"
              value={toValue}
              readOnly
              className={`${inputCls} cursor-default bg-slate-800/70 font-mono text-sm`}
              aria-label={`Result in ${toLabel}`}
            />
            <p className="text-sm text-slate-400">
              To: <span className="font-medium text-slate-200">{toLabel}</span>
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-3 rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 sm:flex-row sm:items-start sm:justify-between">
          <div
            className="min-w-0 flex-1 space-y-2 font-mono text-xs leading-relaxed text-slate-400 sm:text-sm"
            aria-label="Conversion breakdown"
          >
            {calculationLines.map((line, i) => (
              <p key={i} className="break-words">
                {i === 0 ? <span className="text-slate-300">{line}</span> : line}
              </p>
            ))}
          </div>
          <button
            type="button"
            onClick={copyResult}
            className="shrink-0 rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-700"
          >
            Copy Result
          </button>
        </div>
      </div>
    </div>
  );
}
