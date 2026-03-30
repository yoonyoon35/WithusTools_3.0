"use client";

import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import {
  type NumberSystemBase,
  convertNumberSystemFromDecimal,
  NUMBER_SYSTEM_BASE_LABELS,
  NUMBER_SYSTEM_INPUT_PLACEHOLDERS,
  parseNumberSystemInput,
} from "@/utils/numberSystemConversion";
import {
  buildCalculatorExplanationLines,
  calculatorExplanationError,
  calculatorExplanationPlaceholder,
} from "@/utils/numberSystemStepExplanation";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900";

const sharedIOBox =
  "scrollbar-thin max-h-[min(40vh,12rem)] min-h-[5rem] w-full rounded-lg border border-slate-600 px-3 py-2 font-mono text-sm leading-relaxed text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";

export interface NumberSystemPairCalculatorProps {
  fromBase: NumberSystemBase;
  toBase: NumberSystemBase;
}

export default function NumberSystemPairCalculator({ fromBase, toBase }: NumberSystemPairCalculatorProps) {
  const [input, setInput] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fromLabel = NUMBER_SYSTEM_BASE_LABELS[fromBase];
  const toLabel = NUMBER_SYSTEM_BASE_LABELS[toBase];

  const showToast = useCallback((msg: string) => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
      toastTimerRef.current = null;
    }
    setToast(msg);
    toastTimerRef.current = setTimeout(() => {
      setToast(null);
      toastTimerRef.current = null;
    }, 2500);
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  const { output, explanationLines } = useMemo(() => {
    const trimmed = input.trim();
    if (!trimmed) {
      return { output: "" as string, explanationLines: null as string[] | null };
    }
    try {
      const decimal = parseNumberSystemInput(trimmed, fromBase);
      const value = convertNumberSystemFromDecimal(decimal, toBase);
      return {
        output: value,
        explanationLines: buildCalculatorExplanationLines(trimmed, decimal, fromBase, toBase, value),
      };
    } catch (err) {
      return {
        output: "",
        explanationLines: calculatorExplanationError(err instanceof Error ? err.message : String(err)),
      };
    }
  }, [input, fromBase, toBase]);

  const copyResult = useCallback(async () => {
    if (!output) {
      showToast("No result to copy");
      return;
    }
    try {
      await navigator.clipboard.writeText(output);
      showToast("Result copied to clipboard!");
    } catch {
      showToast("Failed to copy");
    }
  }, [output, showToast]);

  const displayLines = explanationLines ?? [calculatorExplanationPlaceholder()];

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
        <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch">
          <div className="flex flex-1 flex-col gap-2">
            <label className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Input ({fromLabel})
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={NUMBER_SYSTEM_INPUT_PLACEHOLDERS[fromBase]}
              aria-label={`Value in ${fromLabel}`}
              className={`${sharedIOBox} resize-y bg-slate-800 ${focusRing}`}
              rows={4}
            />
            <p className="text-sm text-slate-400">
              From: <span className="font-medium text-slate-200">{fromLabel}</span>
            </p>
          </div>

          <div className="hidden shrink-0 self-center text-slate-500 sm:block sm:pt-10" aria-hidden>
            →
          </div>

          <div className="flex flex-1 flex-col gap-2">
            <label className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Result ({toLabel})
            </label>
            <textarea
              value={output}
              readOnly
              placeholder="—"
              aria-label={`Result in ${toLabel}`}
              className={`${sharedIOBox} resize-none cursor-default bg-slate-800/70 text-slate-200 ${focusRing}`}
              rows={4}
            />
            <p className="text-sm text-slate-400">
              To: <span className="font-medium text-slate-200">{toLabel}</span>
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-3 rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1 space-y-2 text-sm leading-relaxed text-slate-300">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Formulas</p>
            {displayLines && (
              <div className="space-y-1.5 border-l border-slate-600 pl-3 font-mono text-[13px] leading-snug text-slate-300 sm:text-sm">
                {displayLines.map((line, i) => (
                  <div key={i} className="whitespace-pre-wrap break-all">
                    {line}
                  </div>
                ))}
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={copyResult}
            className="shrink-0 rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-700 sm:mt-0"
          >
            Copy Result
          </button>
        </div>
      </div>
    </div>
  );
}
