"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const SAMPLE_DATA = "85, 92, 78, 96, 88, 91, 85, 89, 94, 87";

function medianOfArray(arr: number[]): number {
  if (arr.length === 0) return NaN;
  const s = [...arr].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? (s[m - 1] + s[m]) / 2 : s[m];
}

/** Quartiles: median of lower/upper half (exclusive median). Matches common textbook/box-plot method. */
function getQuartilesMedianOfHalves(sorted: number[]): { q1: number; q3: number } {
  const n = sorted.length;
  if (n === 0) return { q1: NaN, q3: NaN };
  const mid = Math.floor(n / 2);
  const lowerHalf = sorted.slice(0, mid);
  const upperHalf = n % 2 === 1 ? sorted.slice(mid + 1, n) : sorted.slice(mid, n);
  return { q1: medianOfArray(lowerHalf), q3: medianOfArray(upperHalf) };
}

function calculateStatistics(numbers: number[], useSampleVariance: boolean) {
  if (numbers.length === 0) return null;

  const sorted = [...numbers].sort((a, b) => a - b);
  const n = numbers.length;
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const mean = sum / n;
  const mid = Math.floor(n / 2);
  const median = n % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];

  const frequency: Record<number, number> = {};
  numbers.forEach((num) => {
    frequency[num] = (frequency[num] || 0) + 1;
  });
  let maxFreq = 0;
  let modes: string[] = [];
  for (const num in frequency) {
    const freq = frequency[Number(num)];
    if (freq > maxFreq) {
      maxFreq = freq;
      modes = [num];
    } else if (freq === maxFreq && maxFreq > 0) {
      modes.push(num);
    }
  }
  const mode = maxFreq <= 1 ? "N/A" : modes.join(", ");

  const min = sorted[0];
  const max = sorted[n - 1];
  const range = max - min;

  // Variance & Standard deviation: sample (n-1) or population (n)
  const sumSqDiff = numbers.reduce((acc, x) => acc + (x - mean) ** 2, 0);
  const varianceDivisor = useSampleVariance && n > 1 ? n - 1 : n;
  const variance = n === 0 ? 0 : sumSqDiff / varianceDivisor;
  const stdDev = Math.sqrt(variance);

  // Quartiles: median of lower/upper half
  const { q1, q3 } = getQuartilesMedianOfHalves(sorted);
  const iqr = q3 - q1;

  // Geometric mean (all positive)
  const allPositive = numbers.every((x) => x > 0);
  const geometricMean = allPositive
    ? Math.exp(numbers.reduce((acc, x) => acc + Math.log(x), 0) / n)
    : null;

  // Harmonic mean (all positive, non-zero)
  const harmonicMean =
    allPositive && numbers.every((x) => x !== 0)
      ? n / numbers.reduce((acc, x) => acc + 1 / x, 0)
      : null;

  return {
    mean,
    median,
    mode,
    range,
    min,
    max,
    count: n,
    sum,
    variance,
    stdDev,
    q1,
    q3,
    iqr,
    geometricMean,
    harmonicMean,
    sorted,
    varianceType: useSampleVariance ? "sample" : "population",
  };
}

export default function AverageCalculator() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<ReturnType<typeof calculateStatistics> | null>(null);
  const [error, setError] = useState("");
  const [decimals, setDecimals] = useState(2);
  const [thousandsSep, setThousandsSep] = useState(false);
  const [useSampleVariance, setUseSampleVariance] = useState(true);
  const [copyFeedback, setCopyFeedback] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "info" } | null>(null);

  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const showToast = (message: string, type: "success" | "info" = "success") => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToast({ message, type });
    toastTimeoutRef.current = setTimeout(() => {
      setToast(null);
      toastTimeoutRef.current = null;
    }, 2500);
  };

  const parseAndValidate = useCallback((): number[] | null => {
    const trimmed = input.trim();
    if (!trimmed) return null;
    const parts = trimmed
      .split(/[,\s]+/)
      .map((s) => s.trim())
      .filter(Boolean);
    if (parts.length === 0) return null;
    const numbers = parts.map((s) => parseFloat(s));
    if (numbers.some(isNaN)) return null;
    return numbers;
  }, [input]);

  const runCalculate = useCallback(() => {
    setError("");
    const numbers = parseAndValidate();
    if (!numbers || numbers.length === 0) {
      if (input.trim()) setError("Please enter valid numbers");
      setResults(null);
      return;
    }
    const stats = calculateStatistics(numbers, useSampleVariance);
    setResults(stats);
  }, [input, parseAndValidate, useSampleVariance]);

  useEffect(() => {
    if (!input.trim()) {
      setResults(null);
      setError("");
      return;
    }
    const tid = setTimeout(() => {
      const numbers = parseAndValidate();
      if (numbers && numbers.length > 0) {
        const stats = calculateStatistics(numbers, useSampleVariance);
        setResults(stats);
        setError("");
      } else {
        setResults(null);
        setError("Please enter valid numbers");
      }
    }, 300);
    return () => clearTimeout(tid);
  }, [input, parseAndValidate, useSampleVariance]);

  const reset = () => {
    setInput("");
    setResults(null);
    setError("");
    showToast("Cleared");
  };

  const useSample = () => {
    setInput(SAMPLE_DATA);
    showToast("Sample data loaded", "info");
  };

  const formatValue = (val: number | null): string => {
    if (val === null || Number.isNaN(val)) return "N/A";
    const s = val.toFixed(decimals);
    if (thousandsSep) {
      const [int, dec] = s.split(".");
      const withSep = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return dec != null ? `${withSep}.${dec}` : withSep;
    }
    return s;
  };

  const copyResults = async () => {
    if (!results) return;
    const lines = [
      "Average Calculator Results",
      "------------------------",
      `Count: ${results.count}`,
      `Sum: ${formatValue(results.sum)}`,
      `Mean: ${formatValue(results.mean)}`,
      `Median: ${formatValue(results.median)}`,
      `Mode: ${results.mode}`,
      `Min: ${formatValue(results.min)}`,
      `Max: ${formatValue(results.max)}`,
      `Range: ${formatValue(results.range)}`,
      `Variance (${results.varianceType}): ${formatValue(results.variance)}`,
      `Std Dev (${results.varianceType}): ${formatValue(results.stdDev)}`,
      `Q1: ${formatValue(results.q1)}`,
      `Q3: ${formatValue(results.q3)}`,
      `IQR: ${formatValue(results.iqr)}`,
      `Geometric Mean: ${formatValue(results.geometricMean)}`,
      `Harmonic Mean: ${formatValue(results.harmonicMean)}`,
      "",
      `Sorted: ${results.sorted.join(", ")}`,
    ];
    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopyFeedback(true);
      showToast("Results copied to clipboard");
      setTimeout(() => setCopyFeedback(false), 2000);
    } catch {
      setCopyFeedback(false);
      showToast("Copy failed", "info");
    }
  };

  const inputCls =
    "rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-100 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";
  const btnPrimary =
    "rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500";
  const btnSecondary =
    "rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-700";

  return (
    <div className="mx-auto max-w-2xl relative">
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-sm text-slate-100 shadow-lg ring-1 ring-slate-700"
        >
          {toast.message}
        </div>
      )}
      <div className="rounded-xl border border-border bg-surface p-6">
        <h3 className="mb-4 text-lg font-semibold text-slate-200">
          Calculate Mean, Median, Mode, and More
        </h3>

        <div>
          <label htmlFor="numbers" className="mb-1 block text-sm text-slate-400">
            Enter numbers (separated by commas or spaces)
          </label>
          <textarea
            id="numbers"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && !e.shiftKey && (e.preventDefault(), runCalculate())
            }
            rows={4}
            placeholder="Example: 1, 2, 3, 4, 5"
            className={`${inputCls} scrollbar-thin w-full max-h-[50vh] overflow-y-auto`}
            aria-label="Enter numbers separated by commas or spaces"
            aria-describedby="numbers-hint"
            aria-invalid={!!error}
            aria-errormessage={error ? "numbers-error" : undefined}
          />
          <p id="numbers-hint" className="sr-only">
            Example: 1, 2, 3, 4, 5. Supports CSV paste from Excel.
          </p>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            onClick={runCalculate}
            className={`${btnPrimary} min-h-[2.75rem] touch-manipulation`}
            aria-label="Calculate statistics"
          >
            Calculate
          </button>
          <button
            onClick={reset}
            className={`${btnSecondary} min-h-[2.75rem] touch-manipulation`}
            aria-label="Reset all inputs and results"
          >
            Reset
          </button>
          <button
            onClick={useSample}
            className={`${btnSecondary} min-h-[2.75rem] touch-manipulation`}
            aria-label="Load sample data"
          >
            Use sample data
          </button>
          {results && (
            <button
              onClick={copyResults}
              className={`${btnSecondary} ${copyFeedback ? "border-emerald-500 text-emerald-400" : ""}`}
            >
              {copyFeedback ? "Copied!" : "Copy results"}
            </button>
          )}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-slate-700 pt-4">
          <div className="flex items-center gap-2">
            <label htmlFor="decimals" className="text-sm text-slate-400">
              Decimals:
            </label>
            <select
              id="decimals"
              value={decimals}
              onChange={(e) => setDecimals(Number(e.target.value))}
              className={`${inputCls} w-16 py-1.5`}
            >
              {[0, 1, 2, 3, 4, 5, 6].map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-400">Variance:</span>
            <select
              value={useSampleVariance ? "sample" : "population"}
              onChange={(e) => setUseSampleVariance(e.target.value === "sample")}
              className={`${inputCls} w-24 py-1.5`}
            >
              <option value="sample">Sample (n−1)</option>
              <option value="population">Population (n)</option>
            </select>
          </div>
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              checked={thousandsSep}
              onChange={(e) => setThousandsSep(e.target.checked)}
              className="rounded border-slate-600 bg-slate-800 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-slate-400">Thousands separator (1,234.56)</span>
          </label>
        </div>

        {error && (
          <p
            id="numbers-error"
            role="alert"
            className="mt-3 text-sm text-amber-400"
          >
            {error}
          </p>
        )}

        {results && (
          <section
            role="region"
            aria-label="Calculation results"
            className="mt-6"
          >
            {/* Min / Max / Range 강조 블록 */}
            <div
              className="mb-4 grid grid-cols-3 gap-3 rounded-lg border-2 border-blue-500/40 bg-blue-500/10 p-4"
              aria-label="Range and extremes"
            >
              <div className="text-center">
                <p className="text-xs font-medium uppercase tracking-wider text-blue-400">Min</p>
                <p className="text-xl font-bold text-slate-100 sm:text-2xl">{formatValue(results.min)}</p>
              </div>
              <div className="text-center">
                <p className="text-xs font-medium uppercase tracking-wider text-blue-400">Max</p>
                <p className="text-xl font-bold text-slate-100 sm:text-2xl">{formatValue(results.max)}</p>
              </div>
              <div className="text-center">
                <p className="text-xs font-medium uppercase tracking-wider text-blue-400">Range</p>
                <p className="text-xl font-bold text-slate-100 sm:text-2xl">{formatValue(results.range)}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {[
                { label: "Count", value: results.count.toString() },
                { label: "Sum", value: formatValue(results.sum) },
                { label: "Mean", value: formatValue(results.mean) },
                { label: "Median", value: formatValue(results.median) },
                { label: "Mode", value: results.mode },
                {
                  label: `Variance (${results.varianceType})`,
                  value: formatValue(results.variance),
                },
                {
                  label: `Std Dev (${results.varianceType})`,
                  value: formatValue(results.stdDev),
                },
                { label: "Q1", value: formatValue(results.q1) },
                { label: "Q3", value: formatValue(results.q3) },
                { label: "IQR", value: formatValue(results.iqr) },
                { label: "Geometric Mean", value: formatValue(results.geometricMean) },
                { label: "Harmonic Mean", value: formatValue(results.harmonicMean) },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="min-h-[4rem] touch-manipulation rounded-lg border border-slate-600 bg-slate-800/50 p-4 text-center"
                >
                  <p className="text-xs text-slate-500">{label}</p>
                  <p className="text-lg font-semibold text-slate-100 sm:text-xl">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <p className="mb-2 text-sm text-slate-400">Sorted data (ascending)</p>
              <div className="scrollbar-thin max-h-[120px] overflow-y-auto rounded-lg border border-slate-600 bg-slate-800/50 px-3 py-2 font-mono text-sm text-slate-300">
                {results.sorted.join(", ")}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
