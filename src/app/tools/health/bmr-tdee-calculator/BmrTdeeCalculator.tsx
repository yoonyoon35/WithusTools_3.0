"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import NumberInputWithStepper from "@/components/NumberInputWithStepper";

type BodyUnit = "metric" | "us";
type Sex = "male" | "female" | "";

const ACTIVITY_LEVELS = [
  {
    id: "sedentary",
    label: "Sedentary",
    detail: "Little or no structured exercise; mostly sitting.",
    factor: 1.2,
  },
  {
    id: "light",
    label: "Light",
    detail: "Light workouts or brisk walks about one to three days a week.",
    factor: 1.375,
  },
  {
    id: "moderate",
    label: "Moderate",
    detail: "Planned exercise roughly three to five days a week.",
    factor: 1.55,
  },
  {
    id: "active",
    label: "Active",
    detail: "Hard training or a physical job most days—six or seven days a week.",
    factor: 1.725,
  },
  {
    id: "very_active",
    label: "Very active",
    detail: "Athlete-style schedule or heavy labour plus evening sessions.",
    factor: 1.9,
  },
] as const;

type ActivityId = (typeof ACTIVITY_LEVELS)[number]["id"];

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
      setError("Pick male or female—the Mifflin–St Jeor coefficients differ.");
      return;
    }

    const ageYears = parseFloat(age);
    if (age.trim() === "" || Number.isNaN(ageYears)) {
      setError("Enter age in whole years.");
      return;
    }
    if (ageYears < 15 || ageYears > 100) {
      setError("This form is aimed at adults roughly 15–100 years old.");
      return;
    }

    let kg = 0;
    let cm = 0;

    if (bodyUnit === "metric") {
      const h = parseFloat(heightCm);
      const w = parseFloat(weightKg);
      if (heightCm.trim() === "" || weightKg.trim() === "") {
        setError("Enter height (cm) and weight (kg).");
        return;
      }
      if (Number.isNaN(h) || Number.isNaN(w)) {
        setError("Use plain numbers (decimals allowed).");
        return;
      }
      if (h <= 0 || w <= 0) {
        setError("Height and weight need to be greater than zero.");
        return;
      }
      cm = h;
      kg = w;
    } else {
      const feet = parseFloat(heightFt) || 0;
      const inches = parseFloat(heightIn) || 0;
      const wLb = parseFloat(weightLbs);
      if (heightFt.trim() === "" && heightIn.trim() === "") {
        setError("Enter height in feet and/or inches.");
        return;
      }
      if (weightLbs.trim() === "") {
        setError("Enter weight in pounds.");
        return;
      }
      if (Number.isNaN(feet) || Number.isNaN(inches) || Number.isNaN(wLb)) {
        setError("Use plain numbers (decimals allowed).");
        return;
      }
      if (feet < 0 || inches < 0) {
        setError("Height cannot be negative.");
        return;
      }
      const totalIn = feet * 12 + inches;
      if (totalIn <= 0 || wLb <= 0) {
        setError("Height and weight need to be greater than zero.");
        return;
      }
      cm = totalIn * 2.54;
      kg = lbsToKg(wLb);
    }

    const bmr = mifflinStJeorBmr(kg, cm, Math.floor(ageYears), sex);
    if (!Number.isFinite(bmr) || bmr < 400 || bmr > 5500) {
      setError("That combination gives an unrealistic BMR—please re-check the inputs.");
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
    showToast("Cleared");
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
    showToast("Sample values filled in", "info");
  };

  const copyResults = async () => {
    if (!result) return;
    const level = ACTIVITY_LEVELS.find((a) => a.id === activityId);
    const lines = [
      `BMR (Mifflin–St Jeor): ${Math.round(result.bmr)} kcal/day`,
      `TDEE (${level?.label ?? "activity"} × ${result.factor}): ${Math.round(result.tdee)} kcal/day`,
      `Sex: ${sex === "male" ? "Male" : "Female"}`,
    ];
    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopyFeedback(true);
      showToast("Copied");
      setTimeout(() => setCopyFeedback(false), 2000);
    } catch {
      showToast("Copy did not go through", "info");
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
        <h3 className="mb-4 text-lg font-semibold text-slate-200">BMR and TDEE</h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-400">
          BMR is an estimate of calories burned at complete rest. TDEE multiplies BMR by an activity
          factor so you get a rough maintenance budget. Both numbers are models, not lab measurements.
        </p>

        <fieldset className="mb-4">
          <legend className="mb-2 text-sm text-slate-400">Sex</legend>
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
              Male
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
              Female
            </button>
          </div>
        </fieldset>

        <div className="mb-4">
          <label htmlFor="bmr-age" className="mb-1 block text-sm text-slate-400">
            Age (years)
          </label>
          <NumberInputWithStepper
            id="bmr-age"
            value={age}
            onChange={(v) => setAge(v)}
            placeholder="e.g. 34"
            min={0}
            max={120}
            className="max-w-xs flex-1"
            aria-label="Age in years"
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
            Metric
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
            US units
          </button>
        </div>

        {bodyUnit === "metric" ? (
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="bmr-height-cm" className="mb-1 block text-sm text-slate-400">
                Height (cm)
              </label>
              <NumberInputWithStepper
                id="bmr-height-cm"
                value={heightCm}
                onChange={(v) => setHeightCm(v)}
                placeholder="e.g. 175"
                min={0}
                step={0.1}
                className="flex-1"
                aria-label="Height centimeters"
              />
            </div>
            <div>
              <label htmlFor="bmr-weight-kg" className="mb-1 block text-sm text-slate-400">
                Weight (kg)
              </label>
              <NumberInputWithStepper
                id="bmr-weight-kg"
                value={weightKg}
                onChange={(v) => setWeightKg(v)}
                placeholder="e.g. 73"
                min={0}
                step={0.1}
                className="flex-1"
                aria-label="Weight kilograms"
              />
            </div>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label htmlFor="bmr-height-ft" className="mb-1 block text-sm text-slate-400">
                Height (ft)
              </label>
              <NumberInputWithStepper
                id="bmr-height-ft"
                value={heightFt}
                onChange={(v) => setHeightFt(v)}
                placeholder="Ft"
                min={0}
                className="flex-1"
                aria-label="Height feet"
              />
            </div>
            <div>
              <label htmlFor="bmr-height-in" className="mb-1 block text-sm text-slate-400">
                Height (in)
              </label>
              <NumberInputWithStepper
                id="bmr-height-in"
                value={heightIn}
                onChange={(v) => setHeightIn(v)}
                placeholder="In"
                min={0}
                max={11}
                className="flex-1"
                aria-label="Height inches"
              />
            </div>
            <div>
              <label htmlFor="bmr-weight-lbs" className="mb-1 block text-sm text-slate-400">
                Weight (lbs)
              </label>
              <NumberInputWithStepper
                id="bmr-weight-lbs"
                value={weightLbs}
                onChange={(v) => setWeightLbs(v)}
                placeholder="lbs"
                min={0}
                step={0.1}
                className="flex-1"
                aria-label="Weight pounds"
              />
            </div>
          </div>
        )}

        <fieldset className="mt-6">
          <legend className="mb-2 text-sm font-medium text-slate-300">Activity level</legend>
          <p className="mb-3 text-xs text-slate-500">
            Pick the row that best matches the last few typical weeks, not a single heroic day.
          </p>
          <div className="space-y-2" role="radiogroup" aria-label="Activity level for TDEE">
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
                  <span className="font-medium text-slate-200">{lvl.label}</span>
                  <span className="text-slate-500"> · ×{lvl.factor}</span>
                  <span className="mt-0.5 block text-slate-400">{lvl.detail}</span>
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
            Calculate
          </button>
          <button
            type="button"
            onClick={reset}
            className={`${btnSecondary} min-h-[2.75rem] touch-manipulation`}
          >
            Reset
          </button>
          <button
            type="button"
            onClick={useSample}
            className={`${btnSecondary} min-h-[2.75rem] touch-manipulation`}
          >
            Use sample data
          </button>
          {result && (
            <button
              type="button"
              onClick={copyResults}
              className={`${btnSecondary} min-h-[2.75rem] touch-manipulation ${copyFeedback ? "border-emerald-500 text-emerald-400" : ""}`}
            >
              {copyFeedback ? "Copied" : "Copy results"}
            </button>
          )}
        </div>

        {error && (
          <p role="alert" className="mt-3 text-sm text-amber-400">
            {error}
          </p>
        )}

        {result && (
          <section className="mt-6 space-y-4" aria-label="BMR and TDEE results">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-600 bg-slate-800/50 p-5 text-center">
                <p className="text-sm text-slate-500">Estimated BMR</p>
                <p className="text-3xl font-bold tabular-nums text-slate-100">{Math.round(result.bmr)}</p>
                <p className="text-xs text-slate-500">kcal/day</p>
              </div>
              <div className="rounded-lg border border-slate-600 bg-slate-800/50 p-5 text-center">
                <p className="text-sm text-slate-500">Estimated TDEE</p>
                <p className="text-3xl font-bold tabular-nums text-slate-100">{Math.round(result.tdee)}</p>
                <p className="text-xs text-slate-500">kcal/day (maintenance)</p>
              </div>
            </div>
            <p className="text-center text-sm leading-relaxed text-slate-400">
              TDEE here is BMR × {result.factor} ({activityLevel?.label ?? "selected activity"}). Small
              daily tweaks—steps, fidgeting, sleep—can swing real burn by a few hundred calories either
              way.
            </p>
          </section>
        )}
      </div>
    </div>
  );
}
