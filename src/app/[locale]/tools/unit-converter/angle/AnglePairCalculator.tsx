"use client";

import { useState, useEffect, useLayoutEffect, useCallback, useRef } from "react";
import { useSearchParams } from "next/navigation";
import NumberInputWithStepper from "@/components/NumberInputWithStepper";
import {
  ANGLE_UNITS,
  convertAngle,
  formatAngleResult,
  formatWithThousands,
  getAngleFormulaLine,
} from "@/utils/conversions";

interface AnglePairCalculatorProps {
  fromKey: string;
  toKey: string;
}

export default function AnglePairCalculator({ fromKey, toKey }: AnglePairCalculatorProps) {
  const searchParams = useSearchParams();
  const [fromValue, setFromValue] = useState("1");
  const [toValue, setToValue] = useState("");
  const [formulaText, setFormulaText] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fromLabel = ANGLE_UNITS[fromKey]?.nameSg ?? ANGLE_UNITS[fromKey]?.name ?? fromKey;
  const toLabel = ANGLE_UNITS[toKey]?.nameSg ?? ANGLE_UNITS[toKey]?.name ?? toKey;

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
    const result = convertAngle(val, fromKey, toKey);
    if (!Number.isFinite(result)) {
      setToValue("");
      setFormulaText("Cannot convert this pair");
      return;
    }
    setToValue(formatAngleResult(result));
    setFormulaText(getAngleFormulaLine(val, fromKey, toKey));
  }, [fromValue, fromKey, toKey]);

  useLayoutEffect(() => {
    const q = searchParams.get("val");
    if (q != null && q.trim() !== "") {
      setFromValue(q.trim());
    }
  }, [searchParams]);

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
      showToast("Failed to copy");
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
          <div className="flex min-w-0 flex-1 flex-col gap-2">
            <label className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Input ({fromLabel})
            </label>
            <NumberInputWithStepper
              value={fromValue}
              onChange={(v) => setFromValue(v)}
              placeholder="Enter value"
              className="min-w-0 flex-1"
              aria-label={`Value in ${fromLabel}`}
            />
            <p className="text-sm text-slate-400">
              From: <span className="font-medium text-slate-200">{fromLabel}</span> ({fromKey})
            </p>
          </div>

          <div className="hidden shrink-0 pb-8 text-slate-500 sm:block" aria-hidden>
            →
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-2">
            <label className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Result ({toLabel})
            </label>
            <input
              type="text"
              value={toValue ? formatWithThousands(toValue) : ""}
              readOnly
              className={`${inputCls} min-w-0 w-full cursor-default bg-slate-800/70`}
              aria-label={`Result in ${toLabel}`}
            />
            <p className="text-sm text-slate-400">
              To: <span className="font-medium text-slate-200">{toLabel}</span> ({toKey})
            </p>
          </div>
        </div>

        <div className="mt-4 flex min-w-0 flex-col gap-2 rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="min-w-0 flex-1 break-all font-mono text-sm text-slate-400">{formulaText}</span>
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
