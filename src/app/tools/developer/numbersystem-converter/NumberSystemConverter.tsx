"use client";

import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import {
  type NumberSystemBase,
  ALL_NUMBER_SYSTEM_BASES,
  convertNumberSystemFromDecimal,
  NUMBER_SYSTEM_BASE_LABELS,
  NUMBER_SYSTEM_INPUT_PLACEHOLDERS,
  parseNumberSystemInput,
} from "@/utils/numberSystemConversion";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900";

/** Matches `CHAR_INT_EPS` in numberSystemConversion — non-integers cannot map to a single character. */
function hasNonIntegerValue(n: number): boolean {
  return Number.isFinite(n) && Math.abs(n - Math.round(n)) > 1e-9;
}

const CHAR_FRACTION_MESSAGE = "integers only (no fractional part)";

export default function NumberSystemConverter() {
  const [fromBase, setFromBase] = useState<NumberSystemBase>("10");
  const [input, setInput] = useState("");
  const [toast, setToast] = useState<{ text: string; type: "success" | "error" } | null>(null);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  const results = useMemo((): { label: string; value: string }[] | null => {
    const trimmed = input.trim();
    if (!trimmed) return null;
    try {
      const decimal = parseNumberSystemInput(trimmed, fromBase);
      return ALL_NUMBER_SYSTEM_BASES.map((base) => ({
        label: NUMBER_SYSTEM_BASE_LABELS[base],
        value:
          base === "char" && hasNonIntegerValue(decimal)
            ? CHAR_FRACTION_MESSAGE
            : convertNumberSystemFromDecimal(decimal, base),
      }));
    } catch (err) {
      return [{ label: "Error", value: err instanceof Error ? err.message : String(err) }];
    }
  }, [input, fromBase]);

  const hasError = results !== null && results[0]?.label === "Error";
  const resultText =
    results && !hasError ? results.map((r) => `${r.label}: ${r.value}`).join("\n") : results?.[0]?.value ?? "";

  const copyAll = useCallback(() => {
    if (!results || hasError) return;
    navigator.clipboard
      .writeText(resultText)
      .then(() => showToast("Copied!", "success"))
      .catch(() => showToast("Failed to copy", "error"));
  }, [results, hasError, resultText, showToast]);

  const clearInput = useCallback(() => {
    setInput("");
    showToast("Cleared", "success");
  }, [showToast]);

  return (
    <div className="space-y-6" role="main" aria-label="Number System Converter">
      <div className="rounded-xl border border-border bg-surface p-6">
        <div className="mb-3 flex flex-wrap gap-4">
          <div>
            <label htmlFor="ns-from-base" className="mb-1 block text-sm text-slate-400">
              Input as
            </label>
            <select
              id="ns-from-base"
              value={fromBase}
              onChange={(e) => setFromBase(e.target.value as NumberSystemBase)}
              aria-label="Input number format"
              className={`rounded-lg border border-border bg-slate-950 px-3 py-2 text-slate-200 ${focusRing}`}
            >
              <option value="2">Binary (2)</option>
              <option value="8">Octal (8)</option>
              <option value="10">Decimal (10)</option>
              <option value="16">Hexadecimal (16)</option>
              <option value="char">Character</option>
            </select>
          </div>
        </div>
        <div className="flex gap-2">
          <textarea
            id="ns-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={NUMBER_SYSTEM_INPUT_PLACEHOLDERS[fromBase]}
            aria-label="Number or character input"
            className={`scrollbar-thin max-h-[50vh] flex-1 resize-none overflow-y-auto rounded-lg border border-border bg-slate-950 px-4 py-3 font-mono text-sm text-slate-100 placeholder-slate-500 ${focusRing}`}
            rows={4}
          />
          <button
            type="button"
            onClick={clearInput}
            disabled={!input.trim()}
            aria-label="Clear input"
            className={`self-start rounded-lg border border-border px-4 py-2 text-sm text-slate-300 hover:border-slate-600 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-border disabled:hover:bg-transparent ${focusRing}`}
          >
            Clear
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-100">Result</h3>
          <button
            type="button"
            onClick={copyAll}
            disabled={!results || hasError}
            aria-label="Copy all results"
            className={`rounded-lg border border-border px-4 py-2 text-sm text-slate-300 hover:border-slate-600 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-border disabled:hover:bg-transparent ${focusRing}`}
          >
            Copy All
          </button>
        </div>
        <div
          className="min-h-[4rem] rounded-lg border border-border bg-slate-950 px-4 py-3 font-mono text-sm text-slate-200"
          aria-label="Conversion results"
        >
          {results ? (
            hasError ? (
              <span className="text-red-400">{results[0].value}</span>
            ) : (
              <div className="space-y-2">
                {results.map(({ label, value }) => (
                  <div key={label} className="flex flex-wrap gap-2">
                    <span className="text-slate-500">{label}:</span>
                    <span className="text-slate-200">{value}</span>
                  </div>
                ))}
              </div>
            )
          ) : (
            "—"
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
