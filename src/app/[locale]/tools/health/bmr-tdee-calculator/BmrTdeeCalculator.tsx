"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import NumberInputWithStepper from "@/components/NumberInputWithStepper";
import useToolPageContent from "@/hooks/useToolPageContent";
import { formatToolUiString } from "@/lib/tool-content";

type BodyUnit = "metric" | "us";
type Sex = "male" | "female" | "";
type UiMap = Record<string, unknown>;
type ActivityId = "sedentary" | "light" | "moderate" | "active" | "veryActive";
const META_PATH = "/tools/health/bmr-tdee-calculator";

function asMap(value: unknown): UiMap {
  return value && typeof value === "object" ? (value as UiMap) : {};
}

function asText(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function lbsToKg(lbs: number): number {
  return lbs * 0.45359237;
}

function mifflinStJeorBmr(kg: number, cm: number, ageYears: number, sex: "male" | "female"): number {
  const core = 10 * kg + 6.25 * cm - 5 * ageYears;
  return sex === "male" ? core + 5 : core - 161;
}

const SAMPLE_METRIC = { age: "34", heightCm: "175", weightKg: "73" };
const SAMPLE_US = { age: "34", heightFt: "5", heightIn: "9", weightLbs: "161" };

export default function BmrTdeeCalculator() {
  const page = useToolPageContent(META_PATH);
  const ui = page?.ui as Record<string, unknown> | undefined;
  const [sex, setSex] = useState<Sex>("");
  const [age, setAge] = useState("");
  const [bodyUnit, setBodyUnit] = useState<BodyUnit>("metric");
  const [heightCm, setHeightCm] = useState("");
  const [weightKg, setWeightKg] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [weightLbs, setWeightLbs] = useState("");
  const [activityId, setActivityId] = useState<ActivityId>("moderate");
  const [result, setResult] = useState<{ bmr: number; tdee: number; factor: number } | null>(null);
  const [error, setError] = useState("");
  const [copyFeedback, setCopyFeedback] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "info" } | null>(null);

  const bmrUi = asMap(ui);
  const sexUi = asMap(bmrUi.sex);
  const ageUi = asMap(bmrUi.age);
  const unitUi = asMap(bmrUi.unit);
  const labelsUi = asMap(bmrUi.labels);
  const placeholdersUi = asMap(bmrUi.placeholders);
  const activityUi = asMap(bmrUi.activity);
  const buttonsUi = asMap(bmrUi.buttons);
  const resultUi = asMap(bmrUi.result);
  const errorUi = asMap(bmrUi.error);
  const toastUi = asMap(bmrUi.toast);

  const ACTIVITY_LEVELS = [
    {
      id: "sedentary" as const,
      ui: asMap(activityUi.sedentary),
      factor: 1.2,
    },
    {
      id: "light" as const,
      ui: asMap(activityUi.light),
      factor: 1.375,
    },
    {
      id: "moderate" as const,
      ui: asMap(activityUi.moderate),
      factor: 1.55,
    },
    {
      id: "active" as const,
      ui: asMap(activityUi.active),
      factor: 1.725,
    },
    {
      id: "veryActive" as const,
      ui: asMap(activityUi.veryActive),
      factor: 1.9,
    },
  ];

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

    if (sex !== "male" && sex !== "female") {
      setError(asText(errorUi.pickSex));
      return;
    }

    const ageYears = parseFloat(age);
    if (age.trim() === "" || Number.isNaN(ageYears)) {
      setError(asText(errorUi.enterAge));
      return;
    }
    if (ageYears < 15 || ageYears > 100) {
      setError(asText(errorUi.ageRange));
      return;
    }

    let kg = 0;
    let cm = 0;

    if (bodyUnit === "metric") {
      const h = parseFloat(heightCm);
      const w = parseFloat(weightKg);
      if (heightCm.trim() === "" || weightKg.trim() === "") {
        setError(asText(errorUi.enterMetric));
        return;
      }
      if (Number.isNaN(h) || Number.isNaN(w)) {
        setError(asText(errorUi.usePlainNumbers));
        return;
      }
      if (h <= 0 || w <= 0) {
        setError(asText(errorUi.positive));
        return;
      }
      cm = h;
      kg = w;
    } else {
      const feet = parseFloat(heightFt) || 0;
      const inches = parseFloat(heightIn) || 0;
      const wLb = parseFloat(weightLbs);
      if (heightFt.trim() === "" && heightIn.trim() === "") {
        setError(asText(errorUi.enterUsHeight));
        return;
      }
      if (weightLbs.trim() === "") {
        setError(asText(errorUi.enterUsWeight));
        return;
      }
      if (Number.isNaN(feet) || Number.isNaN(inches) || Number.isNaN(wLb)) {
        setError(asText(errorUi.usePlainNumbers));
        return;
      }
      if (feet < 0 || inches < 0) {
        setError(asText(errorUi.nonNegativeHeight));
        return;
      }
      const totalIn = feet * 12 + inches;
      if (totalIn <= 0 || wLb <= 0) {
        setError(asText(errorUi.positive));
        return;
      }
      cm = totalIn * 2.54;
      kg = lbsToKg(wLb);
    }

    const bmr = mifflinStJeorBmr(kg, cm, Math.floor(ageYears), sex);
    if (!Number.isFinite(bmr) || bmr < 400 || bmr > 5500) {
      setError(asText(errorUi.unrealisticBmr));
      return;
    }

    const level = ACTIVITY_LEVELS.find((a) => a.id === activityId);
    const factor = level?.factor ?? 1.55;
    const tdee = bmr * factor;
    setResult({ bmr, tdee, factor });
  }, [sex, age, bodyUnit, heightCm, weightKg, heightFt, heightIn, weightLbs, activityId]);

  useEffect(() => {
    const hasInput =
      sex !== "" ||
      age.trim() ||
      (bodyUnit === "metric"
        ? heightCm.trim() || weightKg.trim()
        : heightFt.trim() || heightIn.trim() || weightLbs.trim());
    if (!hasInput) {
      setResult(null);
      setError("");
      return;
    }
    const tid = setTimeout(() => runCalculate(), 300);
    return () => clearTimeout(tid);
  }, [sex, age, bodyUnit, heightCm, weightKg, heightFt, heightIn, weightLbs, activityId, runCalculate]);

  const reset = () => {
    setSex("");
    setAge("");
    setHeightCm("");
    setWeightKg("");
    setHeightFt("");
    setHeightIn("");
    setWeightLbs("");
    setActivityId("moderate");
    setResult(null);
    setError("");
    showToast(asText(toastUi.cleared));
  };

  const useSample = () => {
    setSex("male");
    setAge(SAMPLE_METRIC.age);
    if (bodyUnit === "metric") {
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
    setActivityId("light");
    showToast(asText(toastUi.sampleLoaded), "info");
  };

  const copyResults = async () => {
    if (!result) return;
    const level = ACTIVITY_LEVELS.find((a) => a.id === activityId);
    const selectedSexLabel = sex === "male" ? asText(sexUi.male) : asText(sexUi.female);
    const lines = [
      `${asText(resultUi.bmr)}: ${Math.round(result.bmr)} ${asText(resultUi.kcalDay)}`,
      `${asText(resultUi.tdee)} (${asText(level?.ui.label)} × ${result.factor}): ${Math.round(result.tdee)} ${asText(
        resultUi.kcalDay,
      )}`,
      `${asText(sexUi.legend)}: ${selectedSexLabel}`,
    ];
    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopyFeedback(true);
      showToast(asText(toastUi.copied));
      setTimeout(() => setCopyFeedback(false), 2000);
    } catch {
      showToast(asText(toastUi.copyFailed), "info");
    }
  };

  const switchBodyUnit = (next: BodyUnit) => {
    if (next === bodyUnit) return;
    setHeightCm("");
    setWeightKg("");
    setHeightFt("");
    setHeightIn("");
    setWeightLbs("");
    setResult(null);
    setError("");
    setBodyUnit(next);
  };

  const btnPrimary =
    "rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500";
  const btnSecondary =
    "rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-700";

  const activityLevel = ACTIVITY_LEVELS.find((a) => a.id === activityId);
  const summaryText = result
    ? formatToolUiString(asText(resultUi.summary), {
        factor: result.factor,
        activity: asText(activityLevel?.ui.label),
      })
    : "";

  if (!ui) return null;

  return (
    <div className="relative mx-auto max-w-2xl">
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
        <h3 className="mb-4 text-lg font-semibold text-slate-200">{asText(bmrUi.title)}</h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-400">{asText(bmrUi.intro)}</p>

        <fieldset className="mb-4">
          <legend className="mb-2 text-sm text-slate-400">{asText(sexUi.legend)}</legend>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setSex("male")}
              className={
                sex === "male"
                  ? `${btnPrimary} min-h-[2.75rem] touch-manipulation`
                  : `${btnSecondary} min-h-[2.75rem] touch-manipulation`
              }
              aria-pressed={sex === "male"}
            >
              {asText(sexUi.male)}
            </button>
            <button
              type="button"
              onClick={() => setSex("female")}
              className={
                sex === "female"
                  ? `${btnPrimary} min-h-[2.75rem] touch-manipulation`
                  : `${btnSecondary} min-h-[2.75rem] touch-manipulation`
              }
              aria-pressed={sex === "female"}
            >
              {asText(sexUi.female)}
            </button>
          </div>
        </fieldset>

        <div className="mb-4">
          <label htmlFor="bmr-age" className="mb-1 block text-sm text-slate-400">
            {asText(ageUi.label)}
          </label>
          <NumberInputWithStepper
            id="bmr-age"
            value={age}
            onChange={(v) => setAge(v)}
            placeholder={asText(ageUi.placeholder)}
            min={0}
            max={120}
            className="max-w-xs flex-1"
            aria-label={asText(ageUi.label)}
          />
        </div>

        <div className="mb-4 flex gap-2">
          <button
            type="button"
            onClick={() => switchBodyUnit("metric")}
            className={
              bodyUnit === "metric"
                ? `${btnPrimary} min-h-[2.75rem] touch-manipulation`
                : `${btnSecondary} min-h-[2.75rem] touch-manipulation`
            }
            aria-pressed={bodyUnit === "metric"}
          >
            {asText(unitUi.metric)}
          </button>
          <button
            type="button"
            onClick={() => switchBodyUnit("us")}
            className={
              bodyUnit === "us"
                ? `${btnPrimary} min-h-[2.75rem] touch-manipulation`
                : `${btnSecondary} min-h-[2.75rem] touch-manipulation`
            }
            aria-pressed={bodyUnit === "us"}
          >
            {asText(unitUi.us)}
          </button>
        </div>

        {bodyUnit === "metric" ? (
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="bmr-height-cm" className="mb-1 block text-sm text-slate-400">
                {asText(labelsUi.heightCm)}
              </label>
              <NumberInputWithStepper
                id="bmr-height-cm"
                value={heightCm}
                onChange={(v) => setHeightCm(v)}
                placeholder={asText(placeholdersUi.heightCm)}
                min={0}
                step={0.1}
                className="flex-1"
                aria-label={asText(labelsUi.heightCm)}
              />
            </div>
            <div>
              <label htmlFor="bmr-weight-kg" className="mb-1 block text-sm text-slate-400">
                {asText(labelsUi.weightKg)}
              </label>
              <NumberInputWithStepper
                id="bmr-weight-kg"
                value={weightKg}
                onChange={(v) => setWeightKg(v)}
                placeholder={asText(placeholdersUi.weightKg)}
                min={0}
                step={0.1}
                className="flex-1"
                aria-label={asText(labelsUi.weightKg)}
              />
            </div>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label htmlFor="bmr-height-ft" className="mb-1 block text-sm text-slate-400">
                {asText(labelsUi.heightFt)}
              </label>
              <NumberInputWithStepper
                id="bmr-height-ft"
                value={heightFt}
                onChange={(v) => setHeightFt(v)}
                placeholder={asText(placeholdersUi.ft)}
                min={0}
                className="flex-1"
                aria-label={asText(labelsUi.heightFt)}
              />
            </div>
            <div>
              <label htmlFor="bmr-height-in" className="mb-1 block text-sm text-slate-400">
                {asText(labelsUi.heightIn)}
              </label>
              <NumberInputWithStepper
                id="bmr-height-in"
                value={heightIn}
                onChange={(v) => setHeightIn(v)}
                placeholder={asText(placeholdersUi.in)}
                min={0}
                max={11}
                className="flex-1"
                aria-label={asText(labelsUi.heightIn)}
              />
            </div>
            <div>
              <label htmlFor="bmr-weight-lbs" className="mb-1 block text-sm text-slate-400">
                {asText(labelsUi.weightLbs)}
              </label>
              <NumberInputWithStepper
                id="bmr-weight-lbs"
                value={weightLbs}
                onChange={(v) => setWeightLbs(v)}
                placeholder={asText(placeholdersUi.lbs)}
                min={0}
                step={0.1}
                className="flex-1"
                aria-label={asText(labelsUi.weightLbs)}
              />
            </div>
          </div>
        )}

        <fieldset className="mt-6">
          <legend className="mb-2 text-sm font-medium text-slate-300">{asText(activityUi.legend)}</legend>
          <p className="mb-3 text-xs text-slate-500">{asText(activityUi.hint)}</p>
          <div className="space-y-2" role="radiogroup" aria-label={asText(activityUi.legend)}>
            {ACTIVITY_LEVELS.map((lvl) => (
              <label
                key={lvl.id}
                className={`flex cursor-pointer items-start gap-3 rounded-lg border px-3 py-3 text-sm transition-colors ${
                  activityId === lvl.id
                    ? "border-blue-500 bg-slate-800/80 ring-1 ring-blue-500/40"
                    : "border-slate-600 bg-slate-900/30 hover:border-slate-500"
                }`}
              >
                <input
                  type="radio"
                  name="activity"
                  value={lvl.id}
                  checked={activityId === lvl.id}
                  onChange={() => setActivityId(lvl.id)}
                  className="mt-1 border-slate-500 text-blue-600 focus:ring-blue-500"
                />
                <span>
                  <span className="font-medium text-slate-200">{asText(lvl.ui.label)}</span>
                  <span className="text-slate-500"> · ×{lvl.factor}</span>
                  <span className="mt-0.5 block text-slate-400">{asText(lvl.ui.detail)}</span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => runCalculate()}
            className={`${btnPrimary} min-h-[2.75rem] touch-manipulation`}
          >
            {asText(buttonsUi.calculate)}
          </button>
          <button
            type="button"
            onClick={reset}
            className={`${btnSecondary} min-h-[2.75rem] touch-manipulation`}
          >
            {asText(buttonsUi.reset)}
          </button>
          <button
            type="button"
            onClick={useSample}
            className={`${btnSecondary} min-h-[2.75rem] touch-manipulation`}
          >
            {asText(buttonsUi.sample)}
          </button>
          {result && (
            <button
              type="button"
              onClick={copyResults}
              className={`${btnSecondary} min-h-[2.75rem] touch-manipulation ${copyFeedback ? "border-emerald-500 text-emerald-400" : ""}`}
            >
              {copyFeedback ? asText(buttonsUi.copied) : asText(buttonsUi.copy)}
            </button>
          )}
        </div>

        {error && (
          <p role="alert" className="mt-3 text-sm text-amber-400">
            {error}
          </p>
        )}

        {result && (
          <section className="mt-6 space-y-4" aria-label={asText(bmrUi.title)}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-600 bg-slate-800/50 p-5 text-center">
                <p className="text-sm text-slate-500">{asText(resultUi.bmr)}</p>
                <p className="text-3xl font-bold tabular-nums text-slate-100">{Math.round(result.bmr)}</p>
                <p className="text-xs text-slate-500">{asText(resultUi.kcalDay)}</p>
              </div>
              <div className="rounded-lg border border-slate-600 bg-slate-800/50 p-5 text-center">
                <p className="text-sm text-slate-500">{asText(resultUi.tdee)}</p>
                <p className="text-3xl font-bold tabular-nums text-slate-100">{Math.round(result.tdee)}</p>
                <p className="text-xs text-slate-500">{asText(resultUi.maintenance)}</p>
              </div>
            </div>
            <p className="text-center text-sm leading-relaxed text-slate-400">{summaryText}</p>
          </section>
        )}
      </div>
    </div>
  );
}
