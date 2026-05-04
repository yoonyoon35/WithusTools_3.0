"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import NumberInputWithStepper from "@/components/NumberInputWithStepper";

type MeasureUnit = "metric" | "us";
type Sex = "male" | "female" | "";

/** U.S. Navy circumference method; all lengths converted to inches before applying. */
function navyBodyFatPercentMale(waistIn: number, neckIn: number, heightIn: number): number {
  return 86.01 * Math.log10(waistIn - neckIn) - 70.041 * Math.log10(heightIn) + 36.76;
}

function navyBodyFatPercentFemale(
  waistIn: number,
  hipIn: number,
  neckIn: number,
  heightIn: number,
): number {
  return (
    163.205 * Math.log10(waistIn + hipIn - neckIn) - 97.684 * Math.log10(heightIn) - 78.387
  );
}

function cmToIn(cm: number): number {
  return cm / 2.54;
}

function interpretAce(pct: number, sex: "male" | "female"): {
  label: string;
  detail: string;
  bg: string;
} {
  if (sex === "male") {
    if (pct < 6) {
      return {
        label: "Very low for most men",
        detail:
          "Below the usual athlete band on many charts. Extremely low readings can reflect measurement error or medical context—this app does not judge either way.",
        bg: "#4a6fa5",
      };
    }
    if (pct <= 13) {
      return {
        label: "Athlete band (ACE-style chart)",
        detail:
          "Roughly the 6–13% bucket used in a lot of trainer handouts. Tape Navy math is not the same as a DEXA scan.",
        bg: "#2d8659",
      };
    }
    if (pct <= 17) {
      return {
        label: "Fitness band",
        detail:
          "Often labelled fitness on the same ACE-style reference. Still only a circumference model.",
        bg: "#3d8f6a",
      };
    }
    if (pct <= 24) {
      return {
        label: "Average band",
        detail:
          "Broad middle bucket on many population charts. Waist position and posture move this number easily.",
        bg: "#c2a01a",
      };
    }
    return {
      label: "Above average band on chart",
      detail:
        "Often grouped with higher adiposity patterns on tape-based charts—not a medical label by itself.",
      bg: "#c27b1a",
    };
  }
  if (pct < 14) {
    return {
      label: "Very low for most women",
      detail:
        "Below the usual athlete band on many charts. Hormones, bone structure, and where you sit the neck tape all shift this.",
      bg: "#4a6fa5",
    };
  }
  if (pct <= 20) {
    return {
      label: "Athlete band (ACE-style chart)",
      detail: "Roughly 14–20% on common trainer charts. Still not interchangeable with BIA or DXA.",
      bg: "#2d8659",
    };
  }
  if (pct <= 24) {
    return {
      label: "Fitness band",
      detail: "Typical fitness bucket on the same loose reference. One snapshot, not a trend line.",
      bg: "#3d8f6a",
    };
  }
  if (pct <= 31) {
    return {
      label: "Average band",
      detail: "Middle band on many published female ranges. Tape slack alone can swing a point or two.",
      bg: "#c2a01a",
    };
  }
  return {
    label: "Above average band on chart",
    detail: "Higher bucket on chart-based summaries—talk to a clinician if health questions are on your mind.",
    bg: "#c27b1a",
  };
}

const SAMPLE_M_METRIC = { heightCm: "178", neckCm: "38", waistCm: "90" };
const SAMPLE_M_US = { heightFt: "5", heightIn: "10", neckIn: "15", waistIn: "35.5" };
const SAMPLE_F_METRIC = { heightCm: "165", neckCm: "32", waistCm: "76", hipCm: "98" };
const SAMPLE_F_US = { heightFt: "5", heightIn: "5", neckIn: "12.5", waistIn: "30", hipIn: "38.5" };

export default function BodyFatCalculator() {
  const [sex, setSex] = useState<Sex>("");
  const [measureUnit, setMeasureUnit] = useState<MeasureUnit>("metric");
  const [heightCm, setHeightCm] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [neckCm, setNeckCm] = useState("");
  const [waistCm, setWaistCm] = useState("");
  const [hipCm, setHipCm] = useState("");
  const [neckIn, setNeckIn] = useState("");
  const [waistIn, setWaistIn] = useState("");
  const [hipIn, setHipIn] = useState("");
  const [result, setResult] = useState<{ pct: number } | null>(null);
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
      setError("Pick male or female—the Navy tape equations differ.");
      return;
    }

    let heightInches = 0;
    let neckI = 0;
    let waistI = 0;
    let hipI = 0;

    if (measureUnit === "metric") {
      const h = parseFloat(heightCm);
      const n = parseFloat(neckCm);
      const w = parseFloat(waistCm);
      if (heightCm.trim() === "" || neckCm.trim() === "" || waistCm.trim() === "") {
        setError("Enter height, neck, and waist (abdomen at navel per Navy-style instructions).");
        return;
      }
      if (sex === "female" && hipCm.trim() === "") {
        setError("Women need a hip circumference as well—widest part of the buttocks.");
        return;
      }
      if (Number.isNaN(h) || Number.isNaN(n) || Number.isNaN(w)) {
        setError("Use plain numbers (decimals allowed).");
        return;
      }
      const hipParsed = sex === "female" ? parseFloat(hipCm) : 0;
      if (sex === "female" && (Number.isNaN(hipParsed) || hipParsed <= 0)) {
        setError("Hip needs to be a positive number.");
        return;
      }
      if (h <= 0 || n <= 0 || w <= 0) {
        setError("Height, neck, and waist must be greater than zero.");
        return;
      }
      heightInches = cmToIn(h);
      neckI = cmToIn(n);
      waistI = cmToIn(w);
      hipI = sex === "female" ? cmToIn(hipParsed) : 0;
    } else {
      const feet = parseFloat(heightFt) || 0;
      const inches = parseFloat(heightIn) || 0;
      const n = parseFloat(neckIn);
      const w = parseFloat(waistIn);
      if (heightFt.trim() === "" && heightIn.trim() === "") {
        setError("Enter standing height in feet and/or inches.");
        return;
      }
      if (neckIn.trim() === "" || waistIn.trim() === "") {
        setError("Enter neck and waist in inches.");
        return;
      }
      if (sex === "female" && hipIn.trim() === "") {
        setError("Women need hip circumference in inches.");
        return;
      }
      if (Number.isNaN(feet) || Number.isNaN(inches) || Number.isNaN(n) || Number.isNaN(w)) {
        setError("Use plain numbers (decimals allowed).");
        return;
      }
      const hipParsed = sex === "female" ? parseFloat(hipIn) : 0;
      if (sex === "female" && (Number.isNaN(hipParsed) || hipParsed <= 0)) {
        setError("Hip needs to be a positive number.");
        return;
      }
      const totalIn = feet * 12 + inches;
      if (totalIn <= 0 || n <= 0 || w <= 0) {
        setError("Height, neck, and waist must be greater than zero.");
        return;
      }
      heightInches = totalIn;
      neckI = n;
      waistI = w;
      hipI = sex === "female" ? hipParsed : 0;
    }

    if (heightInches < 20 || heightInches > 96) {
      setError("Height looks out of range after conversion—double-check units.");
      return;
    }

    let pct = 0;
    if (sex === "male") {
      if (waistI - neckI <= 0.05) {
        setError("Waist must be clearly larger than neck for the male Navy formula (check tape sites).");
        return;
      }
      pct = navyBodyFatPercentMale(waistI, neckI, heightInches);
    } else {
      if (waistI + hipI - neckI <= 0.05) {
        setError("Waist plus hip must exceed neck for the female Navy formula.");
        return;
      }
      pct = navyBodyFatPercentFemale(waistI, hipI, neckI, heightInches);
    }

    if (!Number.isFinite(pct) || pct < 2 || pct > 70) {
      setError(
        "That combination gives an unrealistic percentage—re-check measurements (Navy expects navel-level waist, standing straight).",
      );
      return;
    }

    setResult({ pct });
  }, [
    sex,
    measureUnit,
    heightCm,
    neckCm,
    waistCm,
    hipCm,
    heightFt,
    heightIn,
    neckIn,
    waistIn,
    hipIn,
  ]);

  useEffect(() => {
    const hasInput =
      sex !== "" ||
      (measureUnit === "metric"
        ? heightCm.trim() || neckCm.trim() || waistCm.trim() || hipCm.trim()
        : heightFt.trim() || heightIn.trim() || neckIn.trim() || waistIn.trim() || hipIn.trim());
    if (!hasInput) {
      setResult(null);
      setError("");
      return;
    }
    const tid = setTimeout(() => runCalculate(), 300);
    return () => clearTimeout(tid);
  }, [
    sex,
    measureUnit,
    heightCm,
    neckCm,
    waistCm,
    hipCm,
    heightFt,
    heightIn,
    neckIn,
    waistIn,
    hipIn,
    runCalculate,
  ]);

  const reset = () => {
    setSex("");
    setHeightCm("");
    setHeightFt("");
    setHeightIn("");
    setNeckCm("");
    setWaistCm("");
    setHipCm("");
    setNeckIn("");
    setWaistIn("");
    setHipIn("");
    setResult(null);
    setError("");
    showToast("Cleared");
  };

  const useSample = () => {
    const useFemale = sex === "female";
    setSex(useFemale ? "female" : "male");
    if (measureUnit === "metric") {
      if (useFemale) {
        setHeightCm(SAMPLE_F_METRIC.heightCm);
        setNeckCm(SAMPLE_F_METRIC.neckCm);
        setWaistCm(SAMPLE_F_METRIC.waistCm);
        setHipCm(SAMPLE_F_METRIC.hipCm);
      } else {
        setHeightCm(SAMPLE_M_METRIC.heightCm);
        setNeckCm(SAMPLE_M_METRIC.neckCm);
        setWaistCm(SAMPLE_M_METRIC.waistCm);
        setHipCm("");
      }
      setHeightFt("");
      setHeightIn("");
      setNeckIn("");
      setWaistIn("");
      setHipIn("");
    } else if (useFemale) {
      setHeightCm("");
      setNeckCm("");
      setWaistCm("");
      setHipCm("");
      setHeightFt(SAMPLE_F_US.heightFt);
      setHeightIn(SAMPLE_F_US.heightIn);
      setNeckIn(SAMPLE_F_US.neckIn);
      setWaistIn(SAMPLE_F_US.waistIn);
      setHipIn(SAMPLE_F_US.hipIn);
    } else {
      setHeightCm("");
      setNeckCm("");
      setWaistCm("");
      setHipCm("");
      setHeightFt(SAMPLE_M_US.heightFt);
      setHeightIn(SAMPLE_M_US.heightIn);
      setNeckIn(SAMPLE_M_US.neckIn);
      setWaistIn(SAMPLE_M_US.waistIn);
      setHipIn("");
    }
    showToast("Sample values filled in", "info");
  };

  const copyResults = async () => {
    if (!result || (sex !== "male" && sex !== "female")) return;
    const interp = interpretAce(result.pct, sex);
    const lines = [
      `Estimated body fat (U.S. Navy tape method): ${result.pct.toFixed(1)}%`,
      `Sex: ${sex === "male" ? "Male" : "Female"}`,
      interp.label,
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

  const switchMeasureUnit = (next: MeasureUnit) => {
    if (next === measureUnit) return;
    setHeightCm("");
    setHeightFt("");
    setHeightIn("");
    setNeckCm("");
    setWaistCm("");
    setHipCm("");
    setNeckIn("");
    setWaistIn("");
    setHipIn("");
    setResult(null);
    setError("");
    setMeasureUnit(next);
  };

  const btnPrimary =
    "rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500";
  const btnSecondary =
    "rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-700";

  const interp =
    result && (sex === "male" || sex === "female") ? interpretAce(result.pct, sex) : null;

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
        <h3 className="mb-4 text-lg font-semibold text-slate-200">Body fat (tape estimate)</h3>
        <div className="mb-4 rounded-lg border border-amber-700/50 bg-amber-950/20 px-3 py-3 text-sm leading-relaxed text-amber-100/90">
          <strong className="font-semibold text-amber-100">Not a lab value.</strong> This page uses
          the U.S. Navy circumference equations. Numbers from DXA, BIA, or underwater weighing often
          sit several points away—sometimes more—because they measure different things with different
          errors. Use this as a rough tape-based guess, not a diagnosis.
        </div>
        <p className="mb-4 text-sm leading-relaxed text-slate-400">
          Neck: slimmest point, standing tall. Waist: around the abdomen at navel level (Navy
          protocol). Hip (women only): widest part of the hips. Height: barefoot standing height.
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

        <div className="mb-4 flex gap-2">
          <button
            type="button"
            onClick={() => switchMeasureUnit("metric")}
            className={
              measureUnit === "metric"
                ? `${btnPrimary} min-h-[2.75rem] touch-manipulation`
                : `${btnSecondary} min-h-[2.75rem] touch-manipulation`
            }
            aria-pressed={measureUnit === "metric"}
          >
            Metric
          </button>
          <button
            type="button"
            onClick={() => switchMeasureUnit("us")}
            className={
              measureUnit === "us"
                ? `${btnPrimary} min-h-[2.75rem] touch-manipulation`
                : `${btnSecondary} min-h-[2.75rem] touch-manipulation`
            }
            aria-pressed={measureUnit === "us"}
          >
            US units
          </button>
        </div>

        {measureUnit === "metric" ? (
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="bf-height-cm" className="mb-1 block text-sm text-slate-400">
                Height (cm)
              </label>
              <NumberInputWithStepper
                id="bf-height-cm"
                value={heightCm}
                onChange={(v) => setHeightCm(v)}
                placeholder="e.g. 178"
                min={0}
                step={0.1}
                className="flex-1"
                aria-label="Height centimeters"
              />
            </div>
            <div>
              <label htmlFor="bf-neck-cm" className="mb-1 block text-sm text-slate-400">
                Neck (cm)
              </label>
              <NumberInputWithStepper
                id="bf-neck-cm"
                value={neckCm}
                onChange={(v) => setNeckCm(v)}
                placeholder="Slimmest point"
                min={0}
                step={0.1}
                className="flex-1"
                aria-label="Neck centimeters"
              />
            </div>
            <div>
              <label htmlFor="bf-waist-cm" className="mb-1 block text-sm text-slate-400">
                Waist at navel (cm)
              </label>
              <NumberInputWithStepper
                id="bf-waist-cm"
                value={waistCm}
                onChange={(v) => setWaistCm(v)}
                placeholder="Abdomen"
                min={0}
                step={0.1}
                className="flex-1"
                aria-label="Waist at navel centimeters"
              />
            </div>
            {sex === "female" && (
              <div>
                <label htmlFor="bf-hip-cm" className="mb-1 block text-sm text-slate-400">
                  Hip (cm)
                </label>
                <NumberInputWithStepper
                  id="bf-hip-cm"
                  value={hipCm}
                  onChange={(v) => setHipCm(v)}
                  placeholder="Widest hips"
                  min={0}
                  step={0.1}
                  className="flex-1"
                  aria-label="Hip centimeters"
                />
              </div>
            )}
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="bf-height-ft" className="mb-1 block text-sm text-slate-400">
                Height (ft)
              </label>
              <NumberInputWithStepper
                id="bf-height-ft"
                value={heightFt}
                onChange={(v) => setHeightFt(v)}
                placeholder="Ft"
                min={0}
                className="flex-1"
                aria-label="Height feet"
              />
            </div>
            <div>
              <label htmlFor="bf-height-in" className="mb-1 block text-sm text-slate-400">
                Height (in)
              </label>
              <NumberInputWithStepper
                id="bf-height-in"
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
              <label htmlFor="bf-neck-in" className="mb-1 block text-sm text-slate-400">
                Neck (in)
              </label>
              <NumberInputWithStepper
                id="bf-neck-in"
                value={neckIn}
                onChange={(v) => setNeckIn(v)}
                placeholder="Neck"
                min={0}
                step={0.1}
                className="flex-1"
                aria-label="Neck inches"
              />
            </div>
            <div>
              <label htmlFor="bf-waist-in" className="mb-1 block text-sm text-slate-400">
                Waist at navel (in)
              </label>
              <NumberInputWithStepper
                id="bf-waist-in"
                value={waistIn}
                onChange={(v) => setWaistIn(v)}
                placeholder="Waist"
                min={0}
                step={0.1}
                className="flex-1"
                aria-label="Waist at navel inches"
              />
            </div>
            {sex === "female" && (
              <div className="sm:col-span-2">
                <label htmlFor="bf-hip-in" className="mb-1 block text-sm text-slate-400">
                  Hip (in)
                </label>
                <NumberInputWithStepper
                  id="bf-hip-in"
                  value={hipIn}
                  onChange={(v) => setHipIn(v)}
                  placeholder="Widest hips"
                  min={0}
                  step={0.1}
                  className="flex-1"
                  aria-label="Hip inches"
                />
              </div>
            )}
          </div>
        )}

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

        {result && interp && (
          <section className="mt-6 space-y-4" aria-label="Body fat estimate">
            <div className="rounded-lg border border-slate-600 bg-slate-800/50 p-6 text-center">
              <p className="text-sm text-slate-500">Estimated body fat</p>
              <p className="text-4xl font-bold tabular-nums text-slate-100">{result.pct.toFixed(1)}%</p>
              <p className="mt-1 text-xs text-slate-500">U.S. Navy tape method</p>
              <p
                className="mt-3 inline-block rounded-lg px-4 py-2 text-base font-semibold text-white"
                style={{ background: interp.bg }}
              >
                {interp.label}
              </p>
            </div>
            <p className="text-center text-sm leading-relaxed text-slate-400">{interp.detail}</p>
            <p className="text-center text-xs text-slate-500">
              Chart bands are informal ACE-style buckets for context—they are not part of the Navy
              equation itself.
            </p>
          </section>
        )}
      </div>
    </div>
  );
}
