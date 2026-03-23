"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import NumberInputWithStepper from "@/components/NumberInputWithStepper";

function getSecureRandomInt(min: number, max: number): number {
  const range = max - min + 1;
  if (typeof crypto !== "undefined" && crypto.getRandomValues && range > 0) {
    let randomValue: number;
    if (range <= 256) {
      const maxValid = Math.floor(256 / range) * range - 1;
      do {
        const arr = new Uint8Array(1);
        crypto.getRandomValues(arr);
        randomValue = arr[0];
      } while (randomValue > maxValid);
    } else {
      const MAX_U32 = 4294967295;
      const maxValid = Math.min(MAX_U32, Math.floor(4294967296 / range) * range - 1);
      do {
        const arr = new Uint32Array(1);
        crypto.getRandomValues(arr);
        randomValue = arr[0];
      } while (randomValue > maxValid);
    }
    return min + (randomValue % range);
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function RandomNumberGenerator() {
  const [minValue, setMinValue] = useState("1");
  const [maxValue, setMaxValue] = useState("100");
  const [quantity, setQuantity] = useState("10");
  const [separator, setSeparator] = useState<"space" | "comma" | "newline">("space");
  const [allowDuplicates, setAllowDuplicates] = useState(true);
  const [sortNumbers, setSortNumbers] = useState(false);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" | "warning" } | null>(null);
  const [stats, setStats] = useState<{ count: number; min: number; max: number; avg: string } | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ min?: string; max?: string; qty?: string }>({});
  const messageTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearFieldErrors = useCallback(() => setFieldErrors({}), []);

  const showMessage = useCallback((text: string, type: "success" | "error" | "warning" = "success") => {
    if (messageTimerRef.current) {
      clearTimeout(messageTimerRef.current);
      messageTimerRef.current = null;
    }
    setMessage({ text, type });
    messageTimerRef.current = setTimeout(() => {
      setMessage(null);
      messageTimerRef.current = null;
    }, 3000);
  }, []);

  useEffect(() => {
    return () => {
      if (messageTimerRef.current) {
        clearTimeout(messageTimerRef.current);
      }
    };
  }, []);

  const parseNum = useCallback((val: string): number | null => {
    if (val.trim() === "") return null;
    const n = Number(val);
    return isNaN(n) ? null : n;
  }, []);

  const validateRange = useCallback(() => {
    const min = parseNum(minValue);
    const max = parseNum(maxValue);
    if (min === null) {
      showMessage("Please enter a minimum value", "error");
      return false;
    }
    if (max === null) {
      showMessage("Please enter a maximum value", "error");
      return false;
    }
    if (min > max) {
      setMaxValue(String(min));
      showMessage("Maximum value adjusted to match minimum value", "warning");
      return false;
    }
    return true;
  }, [minValue, maxValue, parseNum, showMessage]);

  const validateQuantity = useCallback(() => {
    const q = parseNum(quantity);
    const min = parseNum(minValue);
    const max = parseNum(maxValue);
    if (q === null) {
      showMessage("Please enter a quantity", "error");
      return false;
    }
    if (q < 1) {
      showMessage("Quantity must be at least 1", "error");
      return false;
    }
    if (q > 1000) {
      setQuantity("1000");
      showMessage("Maximum quantity is 1000", "warning");
      return false;
    }
    if (!allowDuplicates && min !== null && max !== null) {
      const range = max - min + 1;
      if (range >= 1 && q > range) {
        setQuantity(String(range));
        showMessage(`Maximum unique numbers possible in this range: ${range}`, "warning");
        return false;
      }
    }
    return true;
  }, [quantity, minValue, maxValue, allowDuplicates, parseNum, showMessage]);

  const generate = useCallback(() => {
    if (!validateRange() || !validateQuantity()) return;

    const min = Math.floor(Number(minValue));
    const max = Math.floor(Number(maxValue));
    const qty = Math.max(1, Math.floor(Number(quantity)));

    setLoading(true);

    requestAnimationFrame(() => {
      try {
        let numbers: number[];

        if (allowDuplicates) {
          numbers = Array.from({ length: qty }, () => getSecureRandomInt(min, max));
        } else {
          const range = max - min + 1;
          if (qty > range) {
            setLoading(false);
            showMessage(`Cannot generate ${qty} unique numbers in this range`, "error");
            return;
          }
          const allNumbers = Array.from({ length: range }, (_, i) => i + min);
          for (let i = allNumbers.length - 1; i > 0; i--) {
            const j = getSecureRandomInt(0, i);
            [allNumbers[i], allNumbers[j]] = [allNumbers[j], allNumbers[i]];
          }
          numbers = allNumbers.slice(-qty);
        }

        if (sortNumbers) {
          numbers.sort((a, b) => a - b);
        }

        const sep = separator === "space" ? " " : separator === "comma" ? ", " : "\n";
        setResult(numbers.join(sep));

        const numMin = Math.min(...numbers);
        const numMax = Math.max(...numbers);
        const sum = numbers.reduce((a, b) => a + b, 0);
        setStats({
          count: numbers.length,
          min: numMin,
          max: numMax,
          avg: (sum / numbers.length).toFixed(2),
        });

        showMessage(`Generated ${numbers.length} random number${numbers.length !== 1 ? "s" : ""} successfully`);
      } catch (error) {
        showMessage("Failed to generate numbers", "error");
      } finally {
        setLoading(false);
      }
    });
  }, [
    minValue,
    maxValue,
    quantity,
    allowDuplicates,
    sortNumbers,
    separator,
    validateRange,
    validateQuantity,
    showMessage,
  ]);

  const copyToClipboard = useCallback(async () => {
    if (!result) {
      showMessage("No numbers to copy", "error");
      return;
    }
    try {
      await navigator.clipboard.writeText(result);
      showMessage("Numbers copied to clipboard");
    } catch {
      showMessage("Failed to copy numbers to clipboard", "error");
    }
  }, [result, showMessage]);

  const download = useCallback(() => {
    if (!result) {
      showMessage("No numbers to download", "error");
      return;
    }
    const blob = new Blob([result], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `random_numbers_${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showMessage("Numbers downloaded successfully");
  }, [result, showMessage]);

  const clear = useCallback(() => {
    setResult("");
    setStats(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        generate();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [generate]);

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 px-4 py-3">
        <p className="flex items-center gap-2 font-semibold text-amber-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          All number generation runs in your browser. Data is never sent to any server.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <h2 className="mb-4 text-lg font-semibold text-slate-100">Settings</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <label htmlFor="minValue" className="mb-2 block text-sm text-slate-400">
              Minimum Value
            </label>
            <NumberInputWithStepper
              id="minValue"
              value={minValue}
              onChange={(v) => setMinValue(v)}
              onBlur={validateRange}
              min={-999999}
              max={999999}
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="maxValue" className="mb-2 block text-sm text-slate-400">
              Maximum Value
            </label>
            <NumberInputWithStepper
              id="maxValue"
              value={maxValue}
              onChange={(v) => setMaxValue(v)}
              onBlur={validateRange}
              min={-999999}
              max={999999}
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="quantity" className="mb-2 block text-sm text-slate-400">
              Quantity
            </label>
            <NumberInputWithStepper
              id="quantity"
              value={quantity}
              onChange={(v) => setQuantity(v)}
              onBlur={validateQuantity}
              min={1}
              max={1000}
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="separator" className="mb-2 block text-sm text-slate-400">
              Separator
            </label>
            <select
              id="separator"
              value={separator}
              onChange={(e) => setSeparator(e.target.value as "space" | "comma" | "newline")}
              className="w-full rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 focus:border-blue-500 focus:outline-none"
            >
              <option value="space">Space</option>
              <option value="comma">Comma</option>
              <option value="newline">New Line</option>
            </select>
          </div>
          <div className="flex flex-col justify-end gap-2">
            <label className="flex cursor-pointer items-center gap-2 text-slate-400">
              <input
                type="checkbox"
                checked={allowDuplicates}
                onChange={(e) => setAllowDuplicates(e.target.checked)}
              />
              Allow Duplicates
            </label>
          </div>
          <div className="flex flex-col justify-end gap-2">
            <label className="flex cursor-pointer items-center gap-2 text-slate-400">
              <input
                type="checkbox"
                checked={sortNumbers}
                onChange={(e) => setSortNumbers(e.target.checked)}
              />
              Sort Numbers
            </label>
          </div>
        </div>
        <button
          onClick={generate}
          disabled={loading}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Generating...
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
                <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                <path d="M16 21h5v-5" />
              </svg>
              Generate Numbers
            </>
          )}
        </button>
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-lg font-semibold text-slate-100">Generated Numbers</h2>
          <div className="flex gap-2">
            <button
              onClick={copyToClipboard}
              disabled={!result}
              className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-slate-300 transition-colors hover:bg-slate-700 disabled:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
              Copy
            </button>
            <button
              onClick={download}
              disabled={!result}
              className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-slate-300 transition-colors hover:bg-slate-700 disabled:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              Download
            </button>
            <button
              onClick={clear}
              disabled={!result}
              className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-slate-300 transition-colors hover:bg-slate-700 disabled:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                <line x1="10" x2="10" y1="11" y2="17" />
                <line x1="14" x2="14" y1="11" y2="17" />
              </svg>
              Clear
            </button>
          </div>
        </div>
        {stats && result && (
          <div className="mb-4 flex flex-wrap gap-6 rounded-lg border-l-4 border-blue-500 bg-slate-950/50 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="text-slate-500">Count:</span>
              <span className="font-semibold text-slate-200">{stats.count}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-500">Min:</span>
              <span className="font-semibold text-slate-200">{stats.min}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-500">Max:</span>
              <span className="font-semibold text-slate-200">{stats.max}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-500">Average:</span>
              <span className="font-semibold text-slate-200">{stats.avg}</span>
            </div>
          </div>
        )}
        <div
          className={`scrollbar-thin min-h-[100px] max-h-[300px] overflow-y-auto rounded-lg p-4 pr-2 font-mono text-sm ${
            result ? "bg-slate-950 text-slate-300" : "bg-slate-950/50 text-slate-500"
          }`}
          style={{ whiteSpace: "pre-wrap" }}
        >
          {result || "Generated numbers will appear here..."}
        </div>
      </div>

      {message && (
        <div
          className={`fixed right-4 top-4 z-50 flex items-center gap-2 rounded-lg px-4 py-3 shadow-lg ${
            message.type === "success"
              ? "border-l-4 border-green-500 bg-green-500/20 text-green-400"
              : message.type === "error"
                ? "border-l-4 border-red-500 bg-red-500/20 text-red-400"
                : "border-l-4 border-amber-500 bg-amber-500/20 text-amber-400"
          }`}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}
