"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import NumberInputWithStepper from "@/components/NumberInputWithStepper";

type HeightUnit = "metric" | "us";
type Sex = "male" | "female" | "";

const THRESHOLD_MALE = 7.0;
const THRESHOLD_FEMALE = 5.5;

const SAMPLE_METRIC = { heightCm: "172", asmKg: "29.4" };
const SAMPLE_US = { heightFt: "5", heightIn: "8", asmLbs: "64.8" };

function asmLbsToKg(lbs: number): number {
  return lbs * 0.45359237;
}

function interpret(smi: number, sex: Sex): {
  label: string;
  detail: string;
  bg: string;
} | null {
  if (sex === "male") {
    if (smi < THRESHOLD_MALE) {
      return {
        label: "Below usual male cut-off",
        detail: `Under ${THRESHOLD_MALE} kg/m² on the EWGSOP2-style scale for appendicular muscle mass index—useful context, not a verdict on sarcopenia by itself.`,
        bg: "#c27b1a",
      };
    }
    return {
      label: "At or above male cut-off",
      detail: `At least ${THRESHOLD_MALE} kg/m² on that same reference scale. Still one number; grip strength, gait speed, and how you feel day to day carry more weight clinically.`,
      bg: "#2d8659",
    };
  }
  if (sex === "female") {
    if (smi < THRESHOLD_FEMALE) {
      return {
        label: "Below usual female cut-off",
        detail: `Under ${THRESHOLD_FEMALE} kg/m² on the EWGSOP2-style scale. Many guidelines pair this with strength tests—don’t read it in isolation.`,
        bg: "#c27b1a",
      };
    }
    return {
      label: "At or above female cut-off",
      detail: `At least ${THRESHOLD_FEMALE} kg/m² on that reference scale. A higher index does not rule out every strength or mobility issue.`,
      bg: "#2d8659",
    };
  }
  return null;
}

export default function SkeletalMuscleIndexCalculator() {
  const [heightUnit, setHeightUnit] = useState<HeightUnit>("metric");
  const [sex, setSex] = useState<Sex>("");
  const [heightCm, setHeightCm] = useState("");
  const [asmKg, setAsmKg] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [asmLbs, setAsmLbs] = useState("");
  const [result, setResult] = useState<{ smi: number } | null>(null);
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

    let heightM = 0;
    let asmKgVal = 0;

    if (heightUnit === "metric") {
      const hCm = parseFloat(heightCm);
      const asm = parseFloat(asmKg);
      if (heightCm.trim() === "" || asmKg.trim() === "") {
        setError("Enter height and appendicular skeletal muscle mass.");
        return;
      }
      if (Number.isNaN(hCm) || Number.isNaN(asm)) {
        setError("Use plain numbers (decimals allowed).");
        return;
      }
      if (hCm <= 0 || asm <= 0) {
        setError("Height and muscle mass need to be greater than zero.");
        return;
      }
      heightM = hCm / 100;
      asmKgVal = asm;
    } else {
      const feet = parseFloat(heightFt) || 0;
      const inches = parseFloat(heightIn) || 0;
      const asmLb = parseFloat(asmLbs);
      if (heightFt.trim() === "" && heightIn.trim() === "") {
        setError("Enter height in feet and/or inches.");
        return;
      }
      if (asmLbs.trim() === "") {
        setError("Enter appendicular skeletal muscle mass in pounds.");
        return;
      }
      if (Number.isNaN(feet) || Number.isNaN(inches) || Number.isNaN(asmLb)) {
        setError("Use plain numbers (decimals allowed).");
        return;
      }
      if (feet < 0 || inches < 0) {
        setError("Height cannot be negative.");
        return;
      }
      const totalInches = feet * 12 + inches;
      if (totalInches <= 0 || asmLb <= 0) {
        setError("Height and muscle mass need to be greater than zero.");
        return;
      }
      heightM = totalInches * 0.0254;
      asmKgVal = asmLbsToKg(asmLb);
    }

    const h2 = heightM * heightM;
    if (h2 <= 0) {
      setError("Height looks too small to square safely.");
      return;
    }
    const smi = asmKgVal / h2;
    if (!Number.isFinite(smi) || smi <= 0) {
      setError("That combination does not produce a usable index.");
      return;
    }
    setResult({ smi });
  }, [heightUnit, heightCm, asmKg, heightFt, heightIn, asmLbs]);

  useEffect(() => {
    const hasInput =
      heightUnit === "metric"
        ? heightCm.trim() || asmKg.trim()
        : heightFt.trim() || heightIn.trim() || asmLbs.trim();
    if (!hasInput) {
      setResult(null);
      setError("");
      return;
    }
    const tid = setTimeout(() => runCalculate(), 300);
    return () => clearTimeout(tid);
  }, [heightUnit, heightCm, asmKg, heightFt, heightIn, asmLbs, runCalculate]);

  const reset = () => {
    setHeightCm("");
    setAsmKg("");
    setHeightFt("");
    setHeightIn("");
    setAsmLbs("");
    setSex("");
    setResult(null);
    setError("");
    showToast("Cleared");
  };

  const useSample = () => {
    if (heightUnit === "metric") {
      setHeightCm(SAMPLE_METRIC.heightCm);
      setAsmKg(SAMPLE_METRIC.asmKg);
      setHeightFt("");
      setHeightIn("");
      setAsmLbs("");
    } else {
      setHeightCm("");
      setAsmKg("");
      setHeightFt(SAMPLE_US.heightFt);
      setHeightIn(SAMPLE_US.heightIn);
      setAsmLbs(SAMPLE_US.asmLbs);
    }
    setSex("male");
    showToast("Sample values filled in", "info");
  };

  const copyResults = async () => {
    if (!result) return;
    const interp = interpret(result.smi, sex);
    const lines = [
      `Skeletal muscle index: ${result.smi.toFixed(2)} kg/m²`,
      sex ? `Sex for cut-offs: ${sex === "male" ? "Male" : "Female"}` : "Sex: not selected",
      interp ? `${interp.label}` : "",
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

  const switchHeightUnit = (next: HeightUnit) => {
    if (next === heightUnit) return;
    setHeightCm("");
    setAsmKg("");
    setHeightFt("");
    setHeightIn("");
    setAsmLbs("");
    setResult(null);
    setError("");
    setHeightUnit(next);
  };

  const btnPrimary =
    "rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500";
  const btnSecondary =
    "rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-700";

  const interp = result && sex ? interpret(result.smi, sex) : null;

  const scale =
    sex === "male"
      ? { min: 4, max: 11, threshold: THRESHOLD_MALE }
      : sex === "female"
        ? { min: 3.5, max: 9, threshold: THRESHOLD_FEMALE }
        : null;

  const markerPct =
    result && scale
      ? Math.max(0, Math.min(100, ((result.smi - scale.min) / (scale.max - scale.min)) * 100))
      : 0;
  const thresholdPct =
    scale
      ? Math.max(0, Math.min(100, ((scale.threshold - scale.min) / (scale.max - scale.min)) * 100))
      : 0;

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
        <h3 className="mb-4 text-lg font-semibold text-slate-200">Skeletal muscle index</h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-400">
          ASM is the sum of lean muscle in both arms and both legs from a body-composition report (BIA
          or DXA). This tool divides that mass by height squared—same definition most research papers use
          when they write &quot;kg/m²&quot; for appendicular muscle.
        </p>

        <fieldset className="mb-4">
          <legend className="mb-2 text-sm text-slate-400">Sex (for cut-off comparison only)</legend>
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
            onClick={() => switchHeightUnit("metric")}
            className={
              heightUnit === "metric"
                ? `${btnPrimary} min-h-[2.75rem] touch-manipulation`
                : `${btnSecondary} min-h-[2.75rem] touch-manipulation`
            }
            aria-pressed={heightUnit === "metric"}
          >
            Metric
          </button>
          <button
            type="button"
            onClick={() => switchHeightUnit("us")}
            className={
              heightUnit === "us"
                ? `${btnPrimary} min-h-[2.75rem] touch-manipulation`
                : `${btnSecondary} min-h-[2.75rem] touch-manipulation`
            }
            aria-pressed={heightUnit === "us"}
          >
            US units
          </button>
        </div>

        {heightUnit === "metric" ? (
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="smi-height-cm" className="mb-1 block text-sm text-slate-400">
                Height (cm)
              </label>
              <NumberInputWithStepper
                id="smi-height-cm"
                value={heightCm}
                onChange={(v) => setHeightCm(v)}
                placeholder="e.g. 172"
                min={0}
                step={0.1}
                className="flex-1"
                aria-label="Height in centimeters"
              />
            </div>
            <div>
              <label htmlFor="smi-asm-kg" className="mb-1 block text-sm text-slate-400">
                Appendicular skeletal muscle mass (kg)
              </label>
              <NumberInputWithStepper
                id="smi-asm-kg"
                value={asmKg}
                onChange={(v) => setAsmKg(v)}
                placeholder="From your report"
                min={0}
                step={0.1}
                className="flex-1"
                aria-label="Appendicular skeletal muscle mass in kilograms"
              />
            </div>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <label htmlFor="smi-height-ft" className="mb-1 block text-sm text-slate-400">
                Height (ft)
              </label>
              <NumberInputWithStepper
                id="smi-height-ft"
                value={heightFt}
                onChange={(v) => setHeightFt(v)}
                placeholder="Ft"
                min={0}
                className="flex-1"
                aria-label="Height feet"
              />
            </div>
            <div>
              <label htmlFor="smi-height-in" className="mb-1 block text-sm text-slate-400">
                Height (in)
              </label>
              <NumberInputWithStepper
                id="smi-height-in"
                value={heightIn}
                onChange={(v) => setHeightIn(v)}
                placeholder="In"
                min={0}
                max={11}
                className="flex-1"
                aria-label="Height inches"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="smi-asm-lbs" className="mb-1 block text-sm text-slate-400">
                Appendicular skeletal muscle mass (lb)
              </label>
              <NumberInputWithStepper
                id="smi-asm-lbs"
                value={asmLbs}
                onChange={(v) => setAsmLbs(v)}
                placeholder="Converted to kg internally"
                min={0}
                step={0.1}
                className="flex-1"
                aria-label="Appendicular skeletal muscle mass in pounds"
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
              <p className="text-sm text-slate-500">Skeletal muscle index</p>
              <p className="text-4xl font-bold tabular-nums text-slate-100">{result.smi.toFixed(2)}</p>
              <p className="text-sm text-slate-500">kg/m²</p>
              {interp ? (
                <p
                  className="mt-3 inline-block rounded-lg px-4 py-2 text-base font-semibold text-white"
                  style={{ background: interp.bg }}
                >
                  {interp.label}
                </p>
              ) : (
                <p className="mt-3 text-sm text-slate-400">
                  Pick male or female above if you want the coloured band against the EWGSOP2-style
                  thresholds ({THRESHOLD_MALE} / {THRESHOLD_FEMALE} kg/m²).
                </p>
              )}
            </div>

            {interp && (
              <p className="text-center text-sm leading-relaxed text-slate-400">{interp.detail}</p>
            )}

            {result && scale && (
              <div>
                <div className="mb-1 flex justify-between text-xs text-slate-500">
                  <span>{scale.min} kg/m²</span>
                  <span>{scale.max} kg/m²</span>
                </div>
                <div className="relative h-3 rounded-full bg-slate-700/80">
                  <div
                    className="absolute bottom-full mb-1 -translate-x-1/2 text-[10px] font-medium text-slate-400"
                    style={{ left: `${thresholdPct}%` }}
                  >
                    Cut-off {scale.threshold}
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
                  Bar is a visual aid only; the printed number above is what you would log or show a
                  clinician.
                </p>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
