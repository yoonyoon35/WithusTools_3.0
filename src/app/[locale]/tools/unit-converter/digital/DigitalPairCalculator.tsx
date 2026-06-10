"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import NumberInputWithStepper from "@/components/NumberInputWithStepper";
import {
  DIGITAL_UNITS,
  convertDigital,
  formatDigitalResult,
  formatWithThousands,
  getDigitalFormulaLine,
} from "@/utils/conversions";

interface DigitalPairCalculatorProps {
  fromKey: string;
  toKey: string;
}

export default function DigitalPairCalculator({ fromKey, toKey }: DigitalPairCalculatorProps) {
  const [fromValue, setFromValue] = useState("1");
  const [toValue, setToValue] = useState("");
  const [formulaText, setFormulaText] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fromLabel = DIGITAL_UNITS[fromKey].nameSg ?? DIGITAL_UNITS[fromKey].name;
  const toLabel = DIGITAL_UNITS[toKey].nameSg ?? DIGITAL_UNITS[toKey].name;

  const showToast = (message: string) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToast(message);
    toastTimeoutRef.current = setTimeout(() => {
      setToast(null);
      toastTimeoutRef.current = null;
    }, 2500);
  };

  const convert = useCallback(() => {
    const val = parseFloat(fromValue);
    if (fromValue === "" || isNaN(val)) {
      setToValue("");
      setFormulaText("Enter a valid number");
      return;
    }
    const result = convertDigital(val, fromKey, toKey);
    setToValue(formatDigitalResult(result));
    setFormulaText(getDigitalFormulaLine(val, fromKey, toKey));
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
              Input ({fromLabel})
            </label>
            <NumberInputWithStepper
              value={fromValue}
              onChange={(v) => setFromValue(v)}
              placeholder="Enter value"
              className="flex-1"
              aria-label={`Value in ${fromLabel}`}
            />
            <p className="text-sm text-slate-400">
              From: <span className="font-medium text-slate-200">{fromLabel}</span> ({fromKey})
            </p>
          </div>

          <div className="hidden shrink-0 pb-8 text-slate-500 sm:block" aria-hidden>
            →
          </div>

          <div className="flex flex-1 flex-col gap-2">
            <label className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Result ({toLabel})
            </label>
            <input
              type="text"
              value={toValue ? formatWithThousands(toValue) : ""}
              readOnly
              className={`${inputCls} cursor-default bg-slate-800/70`}
              aria-label={`Result in ${toLabel}`}
            />
            <p className="text-sm text-slate-400">
              To: <span className="font-medium text-slate-200">{toLabel}</span> ({toKey})
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2 rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="break-all font-mono text-sm text-slate-400">{formulaText}</span>
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
