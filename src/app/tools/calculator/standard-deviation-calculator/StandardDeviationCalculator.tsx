"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const SAMPLE_DATA = "12, 15, 18, 14, 16, 19, 13, 17";

interface StdDevStats {
  n: number;
  sum: number;
  mean: number;
  min: number;
  max: number;
  range: number;
  /** Mean absolute deviation from the mean: (1/n) Σ|xᵢ − x̄| */
  mad: number;
  /** CV = s / |x̄| when |x̄| > 0 */
  cvSample: number | null;
  /** CV = σ / |x̄| when |x̄| > 0 */
  cvPopulation: number | null;
  /** Degrees of freedom for sample variance: n − 1 (n ≥ 2) */
  degreesOfFreedom: number | null;
  /** Sum of squared deviations: SS = Σ(xᵢ − x̄)² */
  sumOfSquares: number;
  variancePopulation: number;
  varianceSample: number | null;
  sdPopulation: number;
  sdSample: number | null;
  semSample: number | null;
  sorted: number[];
}

function computeStats(numbers: number[]): StdDevStats | null {
  if (numbers.length === 0) return null;
  const sorted = [...numbers].sort((a, b) => a - b);
  const n = numbers.length;
  const sum = numbers.reduce((a, b) => a + b, 0);
  const mean = sum / n;
  const sumSqDiff = numbers.reduce((acc, x) => acc + (x - mean) ** 2, 0);
  const variancePopulation = sumSqDiff / n;
  const sdPopulation = Math.sqrt(variancePopulation);
  const varianceSample = n > 1 ? sumSqDiff / (n - 1) : null;
  const sdSample = varianceSample !== null ? Math.sqrt(varianceSample) : null;
  const semSample = sdSample !== null && n > 0 ? sdSample / Math.sqrt(n) : null;
  const min = sorted[0]!;
  const max = sorted[n - 1]!;
  const range = max - min;
  const mad = numbers.reduce((acc, x) => acc + Math.abs(x - mean), 0) / n;
  const absMean = Math.abs(mean);
  const cvPopulation = absMean > 0 ? sdPopulation / absMean : null;
  const cvSample = absMean > 0 && sdSample !== null ? sdSample / absMean : null;
  const degreesOfFreedom = n > 1 ? n - 1 : null;
  return {
    n,
    sum,
    mean,
    min,
    max,
    range,
    mad,
    cvSample,
    cvPopulation,
    degreesOfFreedom,
    sumOfSquares: sumSqDiff,
    variancePopulation,
    varianceSample,
    sdPopulation,
    sdSample,
    semSample,
    sorted,
  };
}

function parseNumbers(raw: string): number[] | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  const parts = trimmed
    .split(/[,\s]+/)
    .map((s) => s.trim())
    .filter(Boolean);
  if (parts.length === 0) return null;
  const nums = parts.map((s) => parseFloat(s));
  if (nums.some((x) => Number.isNaN(x))) return null;
  return nums;
}

export default function StandardDeviationCalculator() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<StdDevStats | null>(null);
  const [error, setError] = useState("");
  const [decimals, setDecimals] = useState(4);
  const [thousandsSep, setThousandsSep] = useState(false);
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
    return parseNumbers(input);
  }, [input]);

  const runCalculate = useCallback(() => {
    setError("");
    const numbers = parseAndValidate();
    if (!numbers || numbers.length === 0) {
      if (input.trim()) setError("Please enter valid numbers");
      setResults(null);
      return;
    }
    setResults(computeStats(numbers));
  }, [input, parseAndValidate]);

  useEffect(() => {
    if (!input.trim()) {
      setResults(null);
      setError("");
      return;
    }
    const tid = setTimeout(() => {
      const numbers = parseAndValidate();
      if (numbers && numbers.length > 0) {
        setResults(computeStats(numbers));
        setError("");
      } else {
        setResults(null);
        setError("Please enter valid numbers");
      }
    }, 300);
    return () => clearTimeout(tid);
  }, [input, parseAndValidate]);

  const reset = () => {
    setInput("");
    setResults(null);
    setError("");
    showToast("Cleared");
  };

  const loadSample = () => {
    setInput(SAMPLE_DATA);
    showToast("Sample data loaded", "info");
  };

  const sortInputAscending = () => {
    const numbers = parseNumbers(input);
    if (!numbers || numbers.length === 0) {
      showToast("Enter valid numbers first", "info");
      return;
    }
    const sorted = [...numbers].sort((a, b) => a - b);
    setInput(sorted.join(", "));
    showToast("Sorted ascending", "info");
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

  const formatDf = (df: number | null): string =>
    df === null ? "N/A" : String(df);

  const copyResults = async () => {
    if (!results) return;
    const lines = [
      "Standard Deviation Calculator — Results",
      "--------------------------------------",
      `Count (n): ${results.n}`,
      `Sum: ${formatValue(results.sum)}`,
      `Mean: ${formatValue(results.mean)}`,
      `Range (max − min): ${formatValue(results.range)}`,
      `Minimum: ${formatValue(results.min)}`,
      `Maximum: ${formatValue(results.max)}`,
      `MAD (mean |x − x̄|, ÷n): ${formatValue(results.mad)}`,
      `Degrees of freedom (n − 1): ${formatDf(results.degreesOfFreedom)}`,
      `Variance (population, ÷n): ${formatValue(results.variancePopulation)}`,
      `Variance (sample, ÷(n−1)): ${formatValue(results.varianceSample)}`,
      `Std dev (population): ${formatValue(results.sdPopulation)}`,
      `Std dev (sample): ${formatValue(results.sdSample)}`,
      `CV — population (σ / |x̄|): ${formatValue(results.cvPopulation)}`,
      `CV — sample (s / |x̄|): ${formatValue(results.cvSample)}`,
      `Sum of squares SS (Σ(x − x̄)²): ${formatValue(results.sumOfSquares)}`,
      `Standard error of the mean (s/√n): ${formatValue(results.semSample)}`,
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
    <div className="relative mx-auto w-full max-w-6xl">
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
        <h2 className="mb-4 text-lg font-semibold text-slate-200">
          Variance, standard deviation &amp; standard error
        </h2>

        <div>
          <label htmlFor="sd-numbers" className="mb-1 block text-sm text-slate-400">
            Enter numbers (commas, spaces, or line breaks)
          </label>
          <textarea
            id="sd-numbers"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            inputMode="decimal"
            rows={5}
            placeholder={"Example:\n12, 15, 18\n14 16"}
            className={`${inputCls} scrollbar-thin max-h-[50vh] w-full overflow-y-auto font-mono text-sm`}
            aria-label="Number list separated by commas, spaces, or new lines"
            aria-describedby="sd-numbers-hint"
            aria-invalid={!!error}
            aria-errormessage={error ? "sd-numbers-error" : undefined}
          />
          <p id="sd-numbers-hint" className="mt-1 text-xs text-slate-500">
            Paste from a spreadsheet or type one value per line—mobile numeric entry is supported.
          </p>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={runCalculate}
            className={`${btnPrimary} min-h-[2.75rem] touch-manipulation`}
            aria-label="Calculate standard deviation"
          >
            Calculate
          </button>
          <button
            type="button"
            onClick={sortInputAscending}
            className={`${btnSecondary} min-h-[2.75rem] touch-manipulation`}
            aria-label="Sort entered numbers ascending"
          >
            Sort ascending
          </button>
          <button
            type="button"
            onClick={reset}
            className={`${btnSecondary} min-h-[2.75rem] touch-manipulation`}
            aria-label="Reset input and results"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={loadSample}
            className={`${btnSecondary} min-h-[2.75rem] touch-manipulation`}
            aria-label="Load sample data"
          >
            Sample data
          </button>
          {results && (
            <button
              type="button"
              onClick={copyResults}
              className={`${btnSecondary} min-h-[2.75rem] touch-manipulation ${copyFeedback ? "border-emerald-500 text-emerald-400" : ""}`}
            >
              {copyFeedback ? "Copied!" : "Copy results"}
            </button>
          )}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-slate-700 pt-4">
          <div className="flex items-center gap-2">
            <label htmlFor="sd-decimals" className="text-sm text-slate-400">
              Decimals:
            </label>
            <select
              id="sd-decimals"
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
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              checked={thousandsSep}
              onChange={(e) => setThousandsSep(e.target.checked)}
              className="rounded border-slate-600 bg-slate-800 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-slate-400">Thousands separator</span>
          </label>
        </div>

        {error && (
          <p id="sd-numbers-error" role="alert" className="mt-3 text-sm text-amber-400">
            {error}
          </p>
        )}

        {results && (
          <section role="region" aria-label="Calculation results" className="mt-6 space-y-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Count (n)", value: results.n.toString() },
                { label: "Sum", value: formatValue(results.sum) },
                { label: "Mean (average)", value: formatValue(results.mean) },
                { label: "Range (max − min)", value: formatValue(results.range) },
                { label: "Minimum", value: formatValue(results.min) },
                { label: "Maximum", value: formatValue(results.max) },
                {
                  label: "MAD — mean absolute deviation (÷ n)",
                  value: formatValue(results.mad),
                },
                {
                  label: "Degrees of freedom (n − 1)",
                  value: formatDf(results.degreesOfFreedom),
                },
                { label: "Variance — population (÷ n)", value: formatValue(results.variancePopulation) },
                { label: "Variance — sample (÷ (n − 1))", value: formatValue(results.varianceSample) },
                { label: "Std dev — population", value: formatValue(results.sdPopulation) },
                { label: "Std dev — sample", value: formatValue(results.sdSample) },
                {
                  label: "CV — population (σ / |x̄|)",
                  value: formatValue(results.cvPopulation),
                },
                {
                  label: "CV — sample (s / |x̄|)",
                  value: formatValue(results.cvSample),
                },
                {
                  label: "Sum of squares (SS), Σ(xᵢ − x̄)²",
                  value: formatValue(results.sumOfSquares),
                },
                {
                  label: "Standard error of mean (s / √n)",
                  value: formatValue(results.semSample),
                },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="min-h-[4.5rem] rounded-lg border border-slate-600 bg-slate-800/50 p-4 touch-manipulation"
                >
                  <p className="text-xs text-slate-500">{label}</p>
                  <p className="mt-1 font-mono text-lg font-semibold text-slate-100">{value}</p>
                </div>
              ))}
            </div>
            <div>
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
