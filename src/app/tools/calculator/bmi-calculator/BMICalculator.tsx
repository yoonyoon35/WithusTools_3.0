"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import NumberInputWithStepper from "@/components/NumberInputWithStepper";

type Unit = "metric" | "us";

const SAMPLE_METRIC = { heightCm: "170", weightKg: "70" };
const SAMPLE_US = { heightFt: "5", heightIn: "10", weightLbs: "154" };

function getCategory(bmi: number): { category: string; bg: string } {
  if (bmi < 18.5) return { category: "Underweight", bg: "#4a90e2" };
  if (bmi < 25) return { category: "Normal Weight", bg: "#2ecc71" };
  if (bmi < 30) return { category: "Overweight", bg: "#f1c40f" };
  if (bmi < 35) return { category: "Obese", bg: "#e67e22" };
  return { category: "Severely Obese", bg: "#e74c3c" };
}

export default function BMICalculator() {
  const [unit, setUnit] = useState<Unit>("metric");
  const [heightCm, setHeightCm] = useState("");
  const [weightKg, setWeightKg] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [weightLbs, setWeightLbs] = useState("");
  const [result, setResult] = useState<{ bmi: number; category: string; bg: string } | null>(null);
  const [error, setError] = useState("");
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

  const runCalculate = useCallback(() => {
    setError("");
    setResult(null);

    let bmi = 0;

    if (unit === "metric") {
      const hRaw = parseFloat(heightCm);
      const w = parseFloat(weightKg);

      if (heightCm.trim() === "" || weightKg.trim() === "") {
        setError("Please enter both height and weight");
        return;
      }
      if (Number.isNaN(hRaw) || Number.isNaN(w)) {
        setError("Please enter valid numbers");
        return;
      }
      const h = hRaw / 100;
      if (h <= 0 || w <= 0) {
        setError("Height and weight must be positive numbers");
        return;
      }
      bmi = w / (h * h);
    } else {
      const feet = parseFloat(heightFt) || 0;
      const inches = parseFloat(heightIn) || 0;
      const w = parseFloat(weightLbs);

      if (heightFt.trim() === "" && heightIn.trim() === "") {
        setError("Please enter height (feet and/or inches)");
        return;
      }
      if (weightLbs.trim() === "") {
        setError("Please enter weight");
        return;
      }
      if (Number.isNaN(feet) || Number.isNaN(inches) || Number.isNaN(w)) {
        setError("Please enter valid numbers");
        return;
      }
      if (feet < 0 || inches < 0) {
        setError("Height must not be negative");
        return;
      }
      const totalInches = feet * 12 + inches;
      if (totalInches <= 0 || w <= 0) {
        setError("Height and weight must be positive numbers");
        return;
      }
      bmi = (w * 703) / (totalInches * totalInches);
    }

    if (!Number.isFinite(bmi)) {
      setError("Invalid calculation");
      return;
    }

    const { category, bg } = getCategory(bmi);
    setResult({ bmi, category, bg });
  }, [unit, heightCm, weightKg, heightFt, heightIn, weightLbs]);

  useEffect(() => {
    const hasInput =
      unit === "metric"
        ? heightCm.trim() || weightKg.trim()
        : heightFt.trim() || heightIn.trim() || weightLbs.trim();
    if (!hasInput) {
      setResult(null);
      setError("");
      return;
    }
    const tid = setTimeout(() => runCalculate(), 300);
    return () => clearTimeout(tid);
  }, [unit, heightCm, weightKg, heightFt, heightIn, weightLbs, runCalculate]);

  const reset = () => {
    setHeightCm("");
    setWeightKg("");
    setHeightFt("");
    setHeightIn("");
    setWeightLbs("");
    setResult(null);
    setError("");
    showToast("Cleared");
  };

  const useSample = () => {
    if (unit === "metric") {
      setHeightCm(SAMPLE_METRIC.heightCm);
      setWeightKg(SAMPLE_METRIC.weightKg);
      setHeightFt("");
      setHeightIn("");
      setWeightLbs("");
    } else {
      setHeightCm("");
      setWeightKg("");
      setHeightFt(SAMPLE_US.heightFt);
      setHeightIn(SAMPLE_US.heightIn);
      setWeightLbs(SAMPLE_US.weightLbs);
    }
    showToast("Sample data loaded", "info");
  };

  const copyResults = async () => {
    if (!result) return;
    const text = `BMI: ${result.bmi.toFixed(1)}\nCategory: ${result.category}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopyFeedback(true);
      showToast("Results copied to clipboard");
      setTimeout(() => setCopyFeedback(false), 2000);
    } catch {
      showToast("Copy failed", "info");
    }
  };

  const switchUnit = (newUnit: Unit) => {
    if (newUnit === unit) return;
    setHeightCm("");
    setWeightKg("");
    setHeightFt("");
    setHeightIn("");
    setWeightLbs("");
    setResult(null);
    setError("");
    setUnit(newUnit);
  };

  const inputCls =
    "w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";
  const btnPrimary =
    "rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500";
  const btnSecondary =
    "rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-700";

  const scaleMin = 16;
  const scaleMax = 35;
  const markerPosition = result
    ? Math.max(0, Math.min(100, ((result.bmi - scaleMin) / (scaleMax - scaleMin)) * 100))
    : 0;

  const segments = [
    { min: 16, max: 18.5, color: "#4a90e2", label: "Underweight" },
    { min: 18.5, max: 25, color: "#2ecc71", label: "Normal" },
    { min: 25, max: 30, color: "#f1c40f", label: "Overweight" },
    { min: 30, max: 35, color: "#e67e22", label: "Obese" },
  ] as const;

  const getRecommendedWeight = (): { min: number; max: number; unit: string } | null => {
    if (unit === "metric") {
      const h = parseFloat(heightCm) / 100;
      if (!h || h <= 0) return null;
      return { min: 18.5 * h * h, max: 24.9 * h * h, unit: "kg" };
    }
    const feet = parseFloat(heightFt) || 0;
    const inches = parseFloat(heightIn) || 0;
    const totalInches = feet * 12 + inches;
    if (totalInches <= 0) return null;
    return {
      min: (18.5 * totalInches * totalInches) / 703,
      max: (24.9 * totalInches * totalInches) / 703,
      unit: "lbs",
    };
  };
  const recommendedWeight = result ? getRecommendedWeight() : null;

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
        <h3 className="mb-4 text-lg font-semibold text-slate-200">Calculate Your BMI</h3>

        <div className="mb-4 flex gap-2">
          <button
            onClick={() => switchUnit("metric")}
            className={
              unit === "metric"
                ? `${btnPrimary} min-h-[2.75rem] touch-manipulation`
                : `${btnSecondary} min-h-[2.75rem] touch-manipulation`
            }
            aria-pressed={unit === "metric"}
          >
            Metric
          </button>
          <button
            onClick={() => switchUnit("us")}
            className={
              unit === "us"
                ? `${btnPrimary} min-h-[2.75rem] touch-manipulation`
                : `${btnSecondary} min-h-[2.75rem] touch-manipulation`
            }
            aria-pressed={unit === "us"}
          >
            US Units
          </button>
        </div>

        {unit === "metric" ? (
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="height-cm" className="mb-1 block text-sm text-slate-400">
                Height (cm)
              </label>
              <NumberInputWithStepper
                id="height-cm"
                value={heightCm}
                onChange={(v) => setHeightCm(v)}
                placeholder="Enter height"
                min={0}
                className="flex-1"
                aria-label="Height in centimeters"
              />
            </div>
            <div>
              <label htmlFor="weight-kg" className="mb-1 block text-sm text-slate-400">
                Weight (kg)
              </label>
              <NumberInputWithStepper
                id="weight-kg"
                value={weightKg}
                onChange={(v) => setWeightKg(v)}
                placeholder="Enter weight"
                min={0}
                className="flex-1"
                aria-label="Weight in kilograms"
              />
            </div>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label htmlFor="height-ft" className="mb-1 block text-sm text-slate-400">
                Height (ft)
              </label>
              <NumberInputWithStepper
                id="height-ft"
                value={heightFt}
                onChange={(v) => setHeightFt(v)}
                placeholder="Feet"
                min={0}
                className="flex-1"
                aria-label="Height in feet"
              />
            </div>
            <div>
              <label htmlFor="height-in" className="mb-1 block text-sm text-slate-400">
                Height (in)
              </label>
              <NumberInputWithStepper
                id="height-in"
                value={heightIn}
                onChange={(v) => setHeightIn(v)}
                placeholder="Inches"
                min={0}
                max={11}
                className="flex-1"
                aria-label="Height in inches"
              />
            </div>
            <div>
              <label htmlFor="weight-lbs" className="mb-1 block text-sm text-slate-400">
                Weight (lbs)
              </label>
              <NumberInputWithStepper
                id="weight-lbs"
                value={weightLbs}
                onChange={(v) => setWeightLbs(v)}
                placeholder="Enter weight"
                min={0}
                className="flex-1"
                aria-label="Weight in pounds"
              />
            </div>
          </div>
        )}

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            onClick={() => runCalculate()}
            className={`${btnPrimary} min-h-[2.75rem] touch-manipulation`}
            aria-label="Calculate BMI"
          >
            Calculate BMI
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
          {result && (
            <button
              onClick={copyResults}
              className={`${btnSecondary} min-h-[2.75rem] touch-manipulation ${copyFeedback ? "border-emerald-500 text-emerald-400" : ""}`}
              aria-label="Copy results to clipboard"
            >
              {copyFeedback ? "Copied!" : "Copy results"}
            </button>
          )}
        </div>
        {error && (
          <p role="alert" className="mt-3 text-sm text-amber-400" id="bmi-error">
            {error}
          </p>
        )}

        {result && (
          <section
            role="region"
            aria-label="BMI calculation results"
            className="mt-6 space-y-4"
          >
            <div className="rounded-lg border border-slate-600 bg-slate-800/50 p-6 text-center">
              <p className="text-sm text-slate-500">Your BMI Result</p>
              <p className="text-4xl font-bold text-slate-100">{result.bmi.toFixed(1)}</p>
              <p
                className="mt-2 inline-block rounded-lg px-4 py-2 text-lg font-semibold text-white"
                style={{ background: result.bg }}
              >
                {result.category}
              </p>
            </div>
            <div>
              <div className="mb-1 flex justify-between text-xs text-slate-500">
                <span>16</span>
                <span>35</span>
              </div>
              <div
                className="relative flex h-4 overflow-hidden rounded-full"
                role="img"
                aria-label="BMI scale from 16 to 35 with recommended range 18.5 to 25"
              >
                {segments.map((seg) => {
                  const widthPct =
                    ((seg.max - seg.min) / (scaleMax - scaleMin)) * 100;
                  return (
                    <div
                      key={seg.label}
                      className="flex-shrink-0"
                      style={{
                        width: `${widthPct}%`,
                        minWidth: seg.label === "Normal" ? 4 : 2,
                        background: seg.color,
                        opacity: seg.label === "Normal" ? 1 : 0.85,
                      }}
                      title={seg.label}
                    />
                  );
                })}
                <div
                  className="absolute top-1/2 z-10 h-6 w-2 -translate-y-1/2 rounded bg-white shadow-md ring-2 ring-slate-800"
                  style={{ left: `${markerPosition}%`, marginLeft: -4 }}
                  aria-hidden
                />
              </div>
              <div className="mt-1 flex justify-between text-xs text-slate-500">
                <span>Underweight</span>
                <span className="font-medium text-emerald-400">Normal (Recommended)</span>
                <span>Overweight</span>
                <span>Obese</span>
              </div>
              {recommendedWeight ? (
                <p className="mt-2 text-center text-sm text-slate-400">
                  Recommended weight range:{" "}
                  <span className="font-medium text-emerald-400">
                    {recommendedWeight.min.toFixed(1)} - {recommendedWeight.max.toFixed(1)}{" "}
                    {recommendedWeight.unit}
                  </span>
                </p>
              ) : null}
              <p className="mt-3 text-center text-xs text-slate-500">
                Note: BMI does not reflect body composition, skeletal structure, age, or other individual factors.
              </p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
