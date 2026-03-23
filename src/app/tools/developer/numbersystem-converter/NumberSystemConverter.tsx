"use client";

import { useState, useCallback, useMemo, useRef, useEffect } from "react";

type Base = "2" | "8" | "10" | "16" | "char";

/** C0 control character names (0–31) and DEL (127) – displayed instead of raw char */
const C0_NAMES: Record<number, string> = {
  0: "NUL",
  1: "SOH",
  2: "STX",
  3: "ETX",
  4: "EOT",
  5: "ENQ",
  6: "ACK",
  7: "BEL",
  8: "BS",
  9: "TAB",
  10: "LF",
  11: "VT",
  12: "FF",
  13: "CR",
  14: "SO",
  15: "SI",
  16: "DLE",
  17: "DC1",
  18: "DC2",
  19: "DC3",
  20: "DC4",
  21: "NAK",
  22: "SYN",
  23: "ETB",
  24: "CAN",
  25: "EM",
  26: "SUB",
  27: "ESC",
  28: "FS",
  29: "GS",
  30: "RS",
  31: "US",
  127: "DEL",
};

/** C1 control character names (128–159) – displayed instead of replacement char */
const C1_NAMES: Record<number, string> = {
  128: "PADDING CHARACTER",
  129: "HIGH OCTET PRESET",
  130: "BREAK PERMITTED HERE",
  131: "NO BREAK HERE",
  132: "INDEX",
  133: "NEXT LINE",
  134: "START OF SELECTED AREA",
  135: "END OF SELECTED AREA",
  136: "CHARACTER TABULATION SET",
  137: "CHARACTER TABULATION WITH JUSTIFICATION",
  138: "LINE TABULATION SET",
  139: "PARTIAL LINE FORWARD",
  140: "PARTIAL LINE BACKWARD",
  141: "REVERSE LINE FEED",
  142: "SINGLE SHIFT TWO",
  143: "SINGLE SHIFT THREE",
  144: "DEVICE CONTROL STRING",
  145: "PRIVATE USE ONE",
  146: "PRIVATE USE TWO",
  147: "SET TRANSMIT STATE",
  148: "CANCEL CHARACTER",
  149: "MESSAGE WAITING",
  150: "START OF GUARDED AREA",
  151: "END OF GUARDED AREA",
  152: "START OF STRING",
  153: "SINGLE GRAPHIC CHARACTER INTRODUCER",
  154: "SINGLE CHARACTER INTRODUCER",
  155: "OPERATING SYSTEM COMMAND",
  156: "PRIVACY MESSAGE",
  157: "APPLICATION PROGRAM COMMAND",
  158: "OPERATING SYSTEM COMMAND",
  159: "APPLICATION PROGRAM COMMAND",
};

function formatCharForDisplay(code: number): string {
  if (code >= 0 && code <= 31) return C0_NAMES[code] ?? `U+${code.toString(16).toUpperCase().padStart(4, "0")}`;
  if (code === 127) return "DEL";
  if (code >= 128 && code <= 159) return C1_NAMES[code] ?? `U+${code.toString(16).toUpperCase().padStart(4, "0")}`;
  return String.fromCharCode(code);
}

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900";

function parseInput(input: string, base: Base): number {
  const trimmed = input.trim().toLowerCase();
  if (base === "char") {
    if (trimmed.length !== 1) throw new Error("Please enter a single character");
    return trimmed.charCodeAt(0);
  }
  let cleaned = trimmed;
  if (cleaned.startsWith("0b") && base === "2") cleaned = cleaned.slice(2);
  else if (cleaned.startsWith("0x") && base === "16") cleaned = cleaned.slice(2);
  else if (cleaned.startsWith("0") && base === "8") cleaned = cleaned.slice(1);
  const validChars: Record<string, string> = {
    "2": "01",
    "8": "0-7",
    "10": "0-9",
    "16": "0-9a-f",
  };
  const re = new RegExp(`^[${validChars[base]}]+$`);
  if (!cleaned.match(re)) throw new Error(`Invalid characters for base ${base}`);
  return parseInt(cleaned, parseInt(base));
}

function convertToBase(decimal: number, base: Base): string {
  if (base === "char") {
    if (decimal < 0 || decimal > 65535) throw new Error("Character code must be between 0 and 65535");
    return formatCharForDisplay(decimal);
  }
  const b = parseInt(base);
  if (decimal === 0) return "0";
  const isNeg = decimal < 0;
  decimal = Math.abs(decimal);
  let result = "";
  while (decimal > 0) {
    const rem = decimal % b;
    result = (rem < 10 ? rem.toString() : String.fromCharCode(87 + rem)) + result;
    decimal = Math.floor(decimal / b);
  }
  if (base === "2") result = "0b" + result;
  else if (base === "16") result = "0x" + result;
  else if (base === "8") result = "0" + result;
  return isNeg ? "-" + result : result;
}

const INPUT_PLACEHOLDERS: Record<Base, string> = {
  "2": "e.g. 0b1010 or 1010 (0 and 1 only)",
  "8": "e.g. 0777 or 777 (0–7 only)",
  "10": "e.g. 255 (0–9 only)",
  "16": "e.g. 0xFF or FF (0–9, A–F)",
  char: "e.g. A (single character)",
};

const BASE_LABELS: Record<Base, string> = {
  "2": "Binary",
  "8": "Octal",
  "10": "Decimal",
  "16": "Hexadecimal",
  char: "Character",
};

const ALL_BASES: Base[] = ["2", "8", "10", "16", "char"];

export default function NumberSystemConverter() {
  const [fromBase, setFromBase] = useState<Base>("10");
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
      const decimal = parseInput(trimmed, fromBase);
      return ALL_BASES.map((base) => ({
        label: BASE_LABELS[base],
        value: convertToBase(decimal, base),
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
              onChange={(e) => setFromBase(e.target.value as Base)}
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
            placeholder={INPUT_PLACEHOLDERS[fromBase]}
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
