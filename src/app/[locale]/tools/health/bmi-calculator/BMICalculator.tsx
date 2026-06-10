"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import NumberInputWithStepper from "@/components/NumberInputWithStepper";
import useToolPageContent from "@/hooks/useToolPageContent";

type Unit = "metric" | "us";
type UiMap = Record<string, unknown>;
const META_PATH = "/tools/health/bmi-calculator";

const SAMPLE_METRIC = { heightCm: "170", weightKg: "70" };
const SAMPLE_US = { heightFt: "5", heightIn: "10", weightLbs: "154" };

function asMap(value: unknown): UiMap {
  return value && typeof value === "object" ? (value as UiMap) : {};
}

function asText(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function getCategory(bmi: number, ui: UiMap): { category: string; bg: string } {
  const categoryUi = asMap(ui.category);
  if (bmi < 18.5) return { category: asText(categoryUi.underweight), bg: "#4a90e2" };
  if (bmi < 25) return { category: asText(categoryUi.normalWeight), bg: "#2ecc71" };
  if (bmi < 30) return { category: asText(categoryUi.overweight), bg: "#f1c40f" };
  if (bmi < 35) return { category: asText(categoryUi.obese), bg: "#e67e22" };
  return { category: asText(categoryUi.severelyObese), bg: "#e74c3c" };
}

export default function BMICalculator() {
  const page = useToolPageContent(META_PATH);
  const ui = page?.ui as Record<string, unknown> | undefined;
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

  const bmiUi = asMap(ui);
  const unitUi = asMap(bmiUi.unit);
  const labelsUi = asMap(bmiUi.labels);
  const placeholdersUi = asMap(bmiUi.placeholders);
  const buttonsUi = asMap(bmiUi.buttons);
  const resultUi = asMap(bmiUi.result);
  const resultLabelsUi = asMap(resultUi.labels);
  const errorUi = asMap(bmiUi.error);
  const toastUi = asMap(bmiUi.toast);
  const ariaUi = asMap(bmiUi.aria);

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
        setError(asText(errorUi.enterBoth));
        return;
      }
      if (Number.isNaN(hRaw) || Number.isNaN(w)) {
        setError(asText(errorUi.enterValid));
        return;
      }
      const h = hRaw / 100;
      if (h <= 0 || w <= 0) {
        setError(asText(errorUi.positive));
        return;
      }
      bmi = w / (h * h);
    } else {
      const feet = parseFloat(heightFt) || 0;
      const inches = parseFloat(heightIn) || 0;
      const w = parseFloat(weightLbs);

      if (heightFt.trim() === "" && heightIn.trim() === "") {
        setError(asText(errorUi.enterHeightUs));
        return;
      }
      if (weightLbs.trim() === "") {
        setError(asText(errorUi.enterWeight));
        return;
      }
      if (Number.isNaN(feet) || Number.isNaN(inches) || Number.isNaN(w)) {
        setError(asText(errorUi.enterValid));
        return;
      }
      if (feet < 0 || inches < 0) {
        setError(asText(errorUi.nonNegativeHeight));
        return;
      }
      const totalInches = feet * 12 + inches;
      if (totalInches <= 0 || w <= 0) {
        setError(asText(errorUi.positive));
        return;
      }
      bmi = (w * 703) / (totalInches * totalInches);
    }

    if (!Number.isFinite(bmi)) {
      setError(asText(errorUi.invalidCalculation));
      return;
    }

    const { category, bg } = getCategory(bmi, bmiUi);
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
    showToast(asText(toastUi.cleared));
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
    showToast(asText(toastUi.sampleLoaded), "info");
  };

  const copyResults = async () => {
    if (!result) return;
    const text = `${asText(resultUi.title)}: ${result.bmi.toFixed(1)}\n${result.category}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopyFeedback(true);
      showToast(asText(toastUi.copied));
      setTimeout(() => setCopyFeedback(false), 2000);
    } catch {
      showToast(asText(toastUi.copyFailed), "info");
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
    { min: 16, max: 18.5, color: "#4a90e2", label: asText(resultLabelsUi.underweight) },
    { min: 18.5, max: 25, color: "#2ecc71", label: asText(resultLabelsUi.normal) },
    { min: 25, max: 30, color: "#f1c40f", label: asText(resultLabelsUi.overweight) },
    { min: 30, max: 35, color: "#e67e22", label: asText(resultLabelsUi.obese) },
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

  if (!ui) return null;

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
        <h3 className="mb-4 text-lg font-semibold text-slate-200">{asText(bmiUi.title)}</h3>

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
            {asText(unitUi.metric)}
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
            {asText(unitUi.us)}
          </button>
        </div>

        {unit === "metric" ? (
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="height-cm" className="mb-1 block text-sm text-slate-400">
                {asText(labelsUi.heightCm)}
              </label>
              <NumberInputWithStepper
                id="height-cm"
                value={heightCm}
                onChange={(v) => setHeightCm(v)}
                placeholder={asText(placeholdersUi.height)}
                min={0}
                className="flex-1"
                aria-label={asText(ariaUi.heightCm)}
              />
            </div>
            <div>
              <label htmlFor="weight-kg" className="mb-1 block text-sm text-slate-400">
                {asText(labelsUi.weightKg)}
              </label>
              <NumberInputWithStepper
                id="weight-kg"
                value={weightKg}
                onChange={(v) => setWeightKg(v)}
                placeholder={asText(placeholdersUi.weight)}
                min={0}
                className="flex-1"
                aria-label={asText(ariaUi.weightKg)}
              />
            </div>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label htmlFor="height-ft" className="mb-1 block text-sm text-slate-400">
                {asText(labelsUi.heightFt)}
              </label>
              <NumberInputWithStepper
                id="height-ft"
                value={heightFt}
                onChange={(v) => setHeightFt(v)}
                placeholder={asText(placeholdersUi.feet)}
                min={0}
                className="flex-1"
                aria-label={asText(ariaUi.heightFt)}
              />
            </div>
            <div>
              <label htmlFor="height-in" className="mb-1 block text-sm text-slate-400">
                {asText(labelsUi.heightIn)}
              </label>
              <NumberInputWithStepper
                id="height-in"
                value={heightIn}
                onChange={(v) => setHeightIn(v)}
                placeholder={asText(placeholdersUi.inches)}
                min={0}
                max={11}
                className="flex-1"
                aria-label={asText(ariaUi.heightIn)}
              />
            </div>
            <div>
              <label htmlFor="weight-lbs" className="mb-1 block text-sm text-slate-400">
                {asText(labelsUi.weightLbs)}
              </label>
              <NumberInputWithStepper
                id="weight-lbs"
                value={weightLbs}
                onChange={(v) => setWeightLbs(v)}
                placeholder={asText(placeholdersUi.weight)}
                min={0}
                className="flex-1"
                aria-label={asText(ariaUi.weightLbs)}
              />
            </div>
          </div>
        )}

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            onClick={() => runCalculate()}
            className={`${btnPrimary} min-h-[2.75rem] touch-manipulation`}
            aria-label={asText(ariaUi.calculate)}
          >
            {asText(buttonsUi.calculate)}
          </button>
          <button
            onClick={reset}
            className={`${btnSecondary} min-h-[2.75rem] touch-manipulation`}
            aria-label={asText(ariaUi.reset)}
          >
            {asText(buttonsUi.reset)}
          </button>
          <button
            onClick={useSample}
            className={`${btnSecondary} min-h-[2.75rem] touch-manipulation`}
            aria-label={asText(ariaUi.sample)}
          >
            {asText(buttonsUi.sample)}
          </button>
          {result && (
            <button
              onClick={copyResults}
              className={`${btnSecondary} min-h-[2.75rem] touch-manipulation ${copyFeedback ? "border-emerald-500 text-emerald-400" : ""}`}
              aria-label={asText(ariaUi.copy)}
            >
              {copyFeedback ? asText(buttonsUi.copied) : asText(buttonsUi.copy)}
            </button>
          )}
        </div>
        {error && (
          <p role="alert" className="mt-3 text-sm text-amber-400" id="bmi-error">
            {error}
          </p>
        )}

        {result && (
          <section role="region" aria-label={asText(ariaUi.resultRegion)} className="mt-6 space-y-4">
            <div className="rounded-lg border border-slate-600 bg-slate-800/50 p-6 text-center">
              <p className="text-sm text-slate-500">{asText(resultUi.title)}</p>
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
                <span>{scaleMin}</span>
                <span>{scaleMax}</span>
              </div>
              <div
                className="relative flex h-4 overflow-hidden rounded-full"
                role="img"
                aria-label={asText(ariaUi.scale)}
              >
                {segments.map((seg) => {
                  const widthPct = ((seg.max - seg.min) / (scaleMax - scaleMin)) * 100;
                  return (
                    <div
                      key={seg.label}
                      className="flex-shrink-0"
                      style={{
                        width: `${widthPct}%`,
                        minWidth: seg.label === asText(resultLabelsUi.normal) ? 4 : 2,
                        background: seg.color,
                        opacity: seg.label === asText(resultLabelsUi.normal) ? 1 : 0.85,
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
                <span>{asText(resultLabelsUi.underweight)}</span>
                <span className="font-medium text-emerald-400">{asText(resultUi.normalRecommended)}</span>
                <span>{asText(resultLabelsUi.overweight)}</span>
                <span>{asText(resultLabelsUi.obese)}</span>
              </div>
              {recommendedWeight ? (
                <p className="mt-2 text-center text-sm text-slate-400">
                  {asText(resultUi.recommendedRange)}{" "}
                  <span className="font-medium text-emerald-400">
                    {recommendedWeight.min.toFixed(1)} - {recommendedWeight.max.toFixed(1)}{" "}
                    {recommendedWeight.unit}
                  </span>
                </p>
              ) : null}
              <p className="mt-3 text-center text-xs text-slate-500">{asText(resultUi.note)}</p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
