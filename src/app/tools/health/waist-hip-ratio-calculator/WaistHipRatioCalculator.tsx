"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import NumberInputWithStepper from "@/components/NumberInputWithStepper";

type MeasureUnit = "metric" | "us";
type Sex = "male" | "female" | "";

const WHR_MALE_REF = 0.9;
const WHR_FEMALE_REF = 0.85;

const WAIST_M_M1 = 94;
const WAIST_M_M2 = 102;
const WAIST_F_M1 = 80;
const WAIST_F_M2 = 88;

const SAMPLE_METRIC = { waistCm: "88", hipCm: "102" };
const SAMPLE_US = { waistIn: "34.6", hipIn: "40.2" };

function interpretWhr(whr: number, sex: Sex): { label: string; detail: string; bg: string } | null {
  if (sex === "male") {
    if (whr > WHR_MALE_REF) {
      return {
        label: "Above the usual male WHR line",
        detail: `WHO materials often cite ${WHR_MALE_REF} as the point where waist-to-hip ratio in men tends to signal more central fat storage. It is a pattern marker, not a disease label.`,
        bg: "#c27b1a",
      };
    }
    return {
      label: "At or below the usual male WHR line",
      detail: `Ratio is ${WHR_MALE_REF} or lower on that scale. Pear-shaped people can still have other risk factors; apple-shaped people above the line are not automatically unwell.`,
      bg: "#2d8659",
    };
  }
  if (sex === "female") {
    if (whr > WHR_FEMALE_REF) {
      return {
        label: "Above the usual female WHR line",
        detail: `Many WHO summaries use ${WHR_FEMALE_REF} for women the same way they use ${WHR_MALE_REF} for men. Hormones, bone width, and how tight the tape sits all nudge the number.`,
        bg: "#c27b1a",
      };
    }
    return {
      label: "At or below the usual female WHR line",
      detail: `Ratio is ${WHR_FEMALE_REF} or lower on that reference. It does not replace blood pressure, lipids, or how you actually feel on a walk upstairs.`,
      bg: "#2d8659",
    };
  }
  return null;
}

function waistBandNote(waistCm: number, sex: "male" | "female"): string {
  if (sex === "male") {
    if (waistCm >= WAIST_M_M2) {
      return `Waist ${Math.round(waistCm)} cm crosses the 102 cm band that many Europid-focused charts pair with higher metabolic risk (not a diagnosis on its own).`;
    }
    if (waistCm >= WAIST_M_M1) {
      return `Waist ${Math.round(waistCm)} cm sits in the 94–102 cm range where a lot of public-health charts tell men to pay closer attention, especially with other risk factors.`;
    }
    return `Waist ${Math.round(waistCm)} cm is under 94 cm on those broad Europid-style charts—useful context only if the tape was horizontal and mid-breath.`;
  }
  if (waistCm >= WAIST_F_M2) {
    return `Waist ${Math.round(waistCm)} cm is at or above 88 cm on the same family of charts aimed at women—often bundled with WHR in research, not swapped for it.`;
  }
  if (waistCm >= WAIST_F_M1) {
    return `Waist ${Math.round(waistCm)} cm falls between 80 and 88 cm, where several guidelines flag women for a closer look when other risks exist.`;
  }
  return `Waist ${Math.round(waistCm)} cm is under 80 cm on those charts—still not a guarantee either way if the measurement was loose or clothing got in the way.`;
}

export default function WaistHipRatioCalculator() {
  const [measureUnit, setMeasureUnit] = useState<MeasureUnit>("metric");
  const [sex, setSex] = useState<Sex>("");
  const [waistCm, setWaistCm] = useState("");
  const [hipCm, setHipCm] = useState("");
  const [waistIn, setWaistIn] = useState("");
  const [hipIn, setHipIn] = useState("");
  const [result, setResult] = useState<{
    whr: number;
    waistCm: number;
    hipCm: number;
  } | null>(null);
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

    let wCm = 0;
    let hCm = 0;

    if (measureUnit === "metric") {
      const w = parseFloat(waistCm);
      const h = parseFloat(hipCm);
      if (waistCm.trim() === "" || hipCm.trim() === "") {
        setError("Enter both waist and hip circumference.");
        return;
      }
      if (Number.isNaN(w) || Number.isNaN(h)) {
        setError("Use plain numbers (decimals allowed).");
        return;
      }
      if (w <= 0 || h <= 0) {
        setError("Circumferences need to be greater than zero.");
        return;
      }
      wCm = w;
      hCm = h;
    } else {
      const w = parseFloat(waistIn);
      const h = parseFloat(hipIn);
      if (waistIn.trim() === "" || hipIn.trim() === "") {
        setError("Enter both waist and hip in inches.");
        return;
      }
      if (Number.isNaN(w) || Number.isNaN(h)) {
        setError("Use plain numbers (decimals allowed).");
        return;
      }
      if (w <= 0 || h <= 0) {
        setError("Circumferences need to be greater than zero.");
        return;
      }
      wCm = w * 2.54;
      hCm = h * 2.54;
    }

    const whr = wCm / hCm;
    if (!Number.isFinite(whr) || whr <= 0) {
      setError("That pair does not produce a usable ratio.");
      return;
    }
    setResult({ whr, waistCm: wCm, hipCm: hCm });
  }, [measureUnit, waistCm, hipCm, waistIn, hipIn]);

  useEffect(() => {
    const hasInput =
      measureUnit === "metric"
        ? waistCm.trim() || hipCm.trim()
        : waistIn.trim() || hipIn.trim();
    if (!hasInput) {
      setResult(null);
      setError("");
      return;
    }
    const tid = setTimeout(() => runCalculate(), 300);
    return () => clearTimeout(tid);
  }, [measureUnit, waistCm, hipCm, waistIn, hipIn, runCalculate]);

  const reset = () => {
    setWaistCm("");
    setHipCm("");
    setWaistIn("");
    setHipIn("");
    setSex("");
    setResult(null);
    setError("");
    showToast("Cleared");
  };

  const useSample = () => {
    if (measureUnit === "metric") {
      setWaistCm(SAMPLE_METRIC.waistCm);
      setHipCm(SAMPLE_METRIC.hipCm);
      setWaistIn("");
      setHipIn("");
    } else {
      setWaistCm("");
      setHipCm("");
      setWaistIn(SAMPLE_US.waistIn);
      setHipIn(SAMPLE_US.hipIn);
    }
    setSex("female");
    showToast("Sample values filled in", "info");
  };

  const copyResults = async () => {
    if (!result) return;
    const interp = interpretWhr(result.whr, sex);
    const unitLabel = measureUnit === "metric" ? "cm" : "in";
    const wShow = measureUnit === "metric" ? waistCm : waistIn;
    const hShow = measureUnit === "metric" ? hipCm : hipIn;
    const lines = [
      `Waist-to-hip ratio: ${result.whr.toFixed(3)}`,
      `Waist ${wShow} ${unitLabel}, hip ${hShow} ${unitLabel}`,
      sex ? `Sex for cut-offs: ${sex === "male" ? "Male" : "Female"}` : "Sex: not selected",
      interp ? interp.label : "",
    ].filter(Boolean);
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
    setWaistCm("");
    setHipCm("");
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

  const interp = result && sex ? interpretWhr(result.whr, sex) : null;

  const scale =
    sex === "male"
      ? { min: 0.72, max: 1.08, threshold: WHR_MALE_REF }
      : sex === "female"
        ? { min: 0.65, max: 1.02, threshold: WHR_FEMALE_REF }
        : null;

  const markerPct =
    result && scale
      ? Math.max(0, Math.min(100, ((result.whr - scale.min) / (scale.max - scale.min)) * 100))
      : 0;
  const thresholdPct =
    scale
      ? Math.max(0, Math.min(100, ((scale.threshold - scale.min) / (scale.max - scale.min)) * 100))
      : 0;

  const waistNote =
    result && (sex === "male" || sex === "female") ? waistBandNote(result.waistCm, sex) : null;

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
        <h3 className="mb-4 text-lg font-semibold text-slate-200">Waist, hip, and ratio</h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-400">
          Measure waist at the narrowest spot between ribs and hip bone, usually after a normal breath
          out. Measure hips at the widest part of the buttocks. Keep the tape snug but not digging in;
          stand with feet together.
        </p>

        <fieldset className="mb-4">
          <legend className="mb-2 text-sm text-slate-400">Sex (for WHR and waist bands)</legend>
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
            <button
              type="button"
              onClick={() => setSex("")}
              className={
                sex === ""
                  ? `${btnPrimary} min-h-[2.75rem] touch-manipulation`
                  : `${btnSecondary} min-h-[2.75rem] touch-manipulation`
              }
              aria-pressed={sex === ""}
            >
              Skip
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
            Metric (cm)
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
            US (in)
          </button>
        </div>

        {measureUnit === "metric" ? (
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="whr-waist-cm" className="mb-1 block text-sm text-slate-400">
                Waist (cm)
              </label>
              <NumberInputWithStepper
                id="whr-waist-cm"
                value={waistCm}
                onChange={(v) => setWaistCm(v)}
                placeholder="e.g. 82"
                min={0}
                step={0.1}
                className="flex-1"
                aria-label="Waist circumference in centimeters"
              />
            </div>
            <div>
              <label htmlFor="whr-hip-cm" className="mb-1 block text-sm text-slate-400">
                Hip (cm)
              </label>
              <NumberInputWithStepper
                id="whr-hip-cm"
                value={hipCm}
                onChange={(v) => setHipCm(v)}
                placeholder="e.g. 98"
                min={0}
                step={0.1}
                className="flex-1"
                aria-label="Hip circumference in centimeters"
              />
            </div>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="whr-waist-in" className="mb-1 block text-sm text-slate-400">
                Waist (in)
              </label>
              <NumberInputWithStepper
                id="whr-waist-in"
                value={waistIn}
                onChange={(v) => setWaistIn(v)}
                placeholder="e.g. 32"
                min={0}
                step={0.1}
                className="flex-1"
                aria-label="Waist circumference in inches"
              />
            </div>
            <div>
              <label htmlFor="whr-hip-in" className="mb-1 block text-sm text-slate-400">
                Hip (in)
              </label>
              <NumberInputWithStepper
                id="whr-hip-in"
                value={hipIn}
                onChange={(v) => setHipIn(v)}
                placeholder="e.g. 38.5"
                min={0}
                step={0.1}
                className="flex-1"
                aria-label="Hip circumference in inches"
              />
            </div>
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

        {result && (
          <section className="mt-6 space-y-4" aria-label="Calculation results">
            <div className="rounded-lg border border-slate-600 bg-slate-800/50 p-6 text-center">
              <p className="text-sm text-slate-500">Waist-to-hip ratio</p>
              <p className="text-4xl font-bold tabular-nums text-slate-100">{result.whr.toFixed(3)}</p>
              <p className="mt-1 text-xs text-slate-500">Waist ÷ hip (unitless)</p>
              {interp ? (
                <p
                  className="mt-3 inline-block rounded-lg px-4 py-2 text-base font-semibold text-white"
                  style={{ background: interp.bg }}
                >
                  {interp.label}
                </p>
              ) : (
                <p className="mt-3 text-sm text-slate-400">
                  Choose male or female for the coloured band and the waist-circumference note. WHR
                  itself is already above.
                </p>
              )}
            </div>

            {interp && (
              <p className="text-center text-sm leading-relaxed text-slate-400">{interp.detail}</p>
            )}

            {waistNote && (
              <div className="rounded-lg border border-slate-700 bg-slate-900/30 px-4 py-3 text-sm leading-relaxed text-slate-400">
                <p className="font-medium text-slate-300">Waist circumference (chart context)</p>
                <p className="mt-2">{waistNote}</p>
              </div>
            )}

            {result && scale && (
              <div>
                <div className="mb-1 flex justify-between text-xs text-slate-500">
                  <span>{scale.min}</span>
                  <span>{scale.max}</span>
                </div>
                <div className="relative h-3 rounded-full bg-slate-700/80">
                  <div
                    className="absolute bottom-full mb-1 -translate-x-1/2 text-[10px] font-medium text-slate-400"
                    style={{ left: `${thresholdPct}%` }}
                  >
                    {scale.threshold}
                  </div>
                  <div
                    className="absolute top-0 h-full w-0.5 -translate-x-1/2 bg-slate-300/90"
                    style={{ left: `${thresholdPct}%` }}
                    aria-hidden
                  />
                  <div
                    className="absolute top-1/2 z-10 h-5 w-2 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-white shadow ring-1 ring-slate-900"
                    style={{ left: `${markerPct}%` }}
                    aria-hidden
                  />
                </div>
                <p className="mt-2 text-center text-xs text-slate-500">
                  Bar shows where your WHR sits next to the common {scale.threshold} reference for{" "}
                  {sex === "male" ? "men" : "women"}.
                </p>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
