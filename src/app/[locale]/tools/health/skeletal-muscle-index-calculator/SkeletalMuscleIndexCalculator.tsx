"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import NumberInputWithStepper from "@/components/NumberInputWithStepper";
import useToolPageContent from "@/hooks/useToolPageContent";
import { formatToolUiString } from "@/lib/tool-content";

type HeightUnit = "metric" | "us";
type Sex = "male" | "female" | "";
type UiMap = Record<string, unknown>;
const META_PATH = "/tools/health/skeletal-muscle-index-calculator";

const THRESHOLD_MALE = 7.0;
const THRESHOLD_FEMALE = 5.5;

const SAMPLE_METRIC = { heightCm: "172", asmKg: "29.4" };
const SAMPLE_US = { heightFt: "5", heightIn: "8", asmLbs: "64.8" };

function asMap(value: unknown): UiMap {
  return value && typeof value === "object" ? (value as UiMap) : {};
}

function asText(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function asmLbsToKg(lbs: number): number {
  return lbs * 0.45359237;
}

function interpret(
  smi: number,
  sex: Sex,
  interpretUi: UiMap,
): {
  label: string;
  detail: string;
  bg: string;
} | null {
  const maleUi = asMap(interpretUi.male);
  const femaleUi = asMap(interpretUi.female);
  if (sex === "male") {
    if (smi < THRESHOLD_MALE) {
      const groupUi = asMap(maleUi.below);
      return {
        label: asText(groupUi.label),
        detail: formatToolUiString(asText(groupUi.detail), { threshold: THRESHOLD_MALE }),
        bg: "#c27b1a",
      };
    }
    const groupUi = asMap(maleUi.atOrAbove);
    return {
      label: asText(groupUi.label),
      detail: formatToolUiString(asText(groupUi.detail), { threshold: THRESHOLD_MALE }),
      bg: "#2d8659",
    };
  }
  if (sex === "female") {
    if (smi < THRESHOLD_FEMALE) {
      const groupUi = asMap(femaleUi.below);
      return {
        label: asText(groupUi.label),
        detail: formatToolUiString(asText(groupUi.detail), { threshold: THRESHOLD_FEMALE }),
        bg: "#c27b1a",
      };
    }
    const groupUi = asMap(femaleUi.atOrAbove);
    return {
      label: asText(groupUi.label),
      detail: formatToolUiString(asText(groupUi.detail), { threshold: THRESHOLD_FEMALE }),
      bg: "#2d8659",
    };
  }
  return null;
}

export default function SkeletalMuscleIndexCalculator() {
  const page = useToolPageContent(META_PATH);
  const ui = page?.ui as Record<string, unknown> | undefined;
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

  const smiUi = asMap(ui);
  const sexUi = asMap(smiUi.sex);
  const unitUi = asMap(smiUi.unit);
  const labelsUi = asMap(smiUi.labels);
  const placeholdersUi = asMap(smiUi.placeholders);
  const buttonsUi = asMap(smiUi.buttons);
  const resultUi = asMap(smiUi.result);
  const interpretUi = asMap(smiUi.interpret);
  const errorUi = asMap(smiUi.error);
  const toastUi = asMap(smiUi.toast);

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
        setError(asText(errorUi.enterMetric));
        return;
      }
      if (Number.isNaN(hCm) || Number.isNaN(asm)) {
        setError(asText(errorUi.usePlainNumbers));
        return;
      }
      if (hCm <= 0 || asm <= 0) {
        setError(asText(errorUi.positive));
        return;
      }
      heightM = hCm / 100;
      asmKgVal = asm;
    } else {
      const feet = parseFloat(heightFt) || 0;
      const inches = parseFloat(heightIn) || 0;
      const asmLb = parseFloat(asmLbs);
      if (heightFt.trim() === "" && heightIn.trim() === "") {
        setError(asText(errorUi.enterUsHeight));
        return;
      }
      if (asmLbs.trim() === "") {
        setError(asText(errorUi.enterUsAsm));
        return;
      }
      if (Number.isNaN(feet) || Number.isNaN(inches) || Number.isNaN(asmLb)) {
        setError(asText(errorUi.usePlainNumbers));
        return;
      }
      if (feet < 0 || inches < 0) {
        setError(asText(errorUi.nonNegativeHeight));
        return;
      }
      const totalInches = feet * 12 + inches;
      if (totalInches <= 0 || asmLb <= 0) {
        setError(asText(errorUi.positive));
        return;
      }
      heightM = totalInches * 0.0254;
      asmKgVal = asmLbsToKg(asmLb);
    }

    const h2 = heightM * heightM;
    if (h2 <= 0) {
      setError(asText(errorUi.tinyHeight));
      return;
    }
    const smi = asmKgVal / h2;
    if (!Number.isFinite(smi) || smi <= 0) {
      setError(asText(errorUi.unusableIndex));
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
    showToast(asText(toastUi.cleared));
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
    showToast(asText(toastUi.sampleLoaded), "info");
  };

  const copyResults = async () => {
    if (!result) return;
    const interp = interpret(result.smi, sex, interpretUi);
    const lines = [
      `${asText(resultUi.title)}: ${result.smi.toFixed(2)} ${asText(resultUi.unit)}`,
      sex
        ? `${asText(sexUi.legend)}: ${sex === "male" ? asText(sexUi.male) : asText(sexUi.female)}`
        : `${asText(sexUi.legend)}: ${asText(sexUi.skip)}`,
      interp ? `${interp.label}` : "",
    ].filter(Boolean);
    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopyFeedback(true);
      showToast(asText(toastUi.copied));
      setTimeout(() => setCopyFeedback(false), 2000);
    } catch {
      showToast(asText(toastUi.copyFailed), "info");
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

  const interp = result && sex ? interpret(result.smi, sex, interpretUi) : null;

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
        <h3 className="mb-4 text-lg font-semibold text-slate-200">{asText(smiUi.title)}</h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-400">{asText(smiUi.intro)}</p>

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
              {asText(sexUi.skip)}
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
            {asText(unitUi.metric)}
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
            {asText(unitUi.us)}
          </button>
        </div>

        {heightUnit === "metric" ? (
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="smi-height-cm" className="mb-1 block text-sm text-slate-400">
                {asText(labelsUi.heightCm)}
              </label>
              <NumberInputWithStepper
                id="smi-height-cm"
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
              <label htmlFor="smi-asm-kg" className="mb-1 block text-sm text-slate-400">
                {asText(labelsUi.asmKg)}
              </label>
              <NumberInputWithStepper
                id="smi-asm-kg"
                value={asmKg}
                onChange={(v) => setAsmKg(v)}
                placeholder={asText(placeholdersUi.asmKg)}
                min={0}
                step={0.1}
                className="flex-1"
                aria-label={asText(labelsUi.asmKg)}
              />
            </div>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <label htmlFor="smi-height-ft" className="mb-1 block text-sm text-slate-400">
                {asText(labelsUi.heightFt)}
              </label>
              <NumberInputWithStepper
                id="smi-height-ft"
                value={heightFt}
                onChange={(v) => setHeightFt(v)}
                placeholder={asText(placeholdersUi.ft)}
                min={0}
                className="flex-1"
                aria-label={asText(labelsUi.heightFt)}
              />
            </div>
            <div>
              <label htmlFor="smi-height-in" className="mb-1 block text-sm text-slate-400">
                {asText(labelsUi.heightIn)}
              </label>
              <NumberInputWithStepper
                id="smi-height-in"
                value={heightIn}
                onChange={(v) => setHeightIn(v)}
                placeholder={asText(placeholdersUi.in)}
                min={0}
                max={11}
                className="flex-1"
                aria-label={asText(labelsUi.heightIn)}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="smi-asm-lbs" className="mb-1 block text-sm text-slate-400">
                {asText(labelsUi.asmLbs)}
              </label>
              <NumberInputWithStepper
                id="smi-asm-lbs"
                value={asmLbs}
                onChange={(v) => setAsmLbs(v)}
                placeholder={asText(placeholdersUi.asmLbs)}
                min={0}
                step={0.1}
                className="flex-1"
                aria-label={asText(labelsUi.asmLbs)}
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
          <section className="mt-6 space-y-4" aria-label={asText(smiUi.title)}>
            <div className="rounded-lg border border-slate-600 bg-slate-800/50 p-6 text-center">
              <p className="text-sm text-slate-500">{asText(resultUi.title)}</p>
              <p className="text-4xl font-bold tabular-nums text-slate-100">{result.smi.toFixed(2)}</p>
              <p className="text-sm text-slate-500">{asText(resultUi.unit)}</p>
              {interp ? (
                <p
                  className="mt-3 inline-block rounded-lg px-4 py-2 text-base font-semibold text-white"
                  style={{ background: interp.bg }}
                >
                  {interp.label}
                </p>
              ) : (
                <p className="mt-3 text-sm text-slate-400">
                  {formatToolUiString(asText(resultUi.selectSex), {
                    maleThreshold: THRESHOLD_MALE,
                    femaleThreshold: THRESHOLD_FEMALE,
                  })}
                </p>
              )}
            </div>

            {interp && (
              <p className="text-center text-sm leading-relaxed text-slate-400">{interp.detail}</p>
            )}

            {result && scale && (
              <div>
                <div className="mb-1 flex justify-between text-xs text-slate-500">
                  <span>
                    {scale.min} {asText(resultUi.unit)}
                  </span>
                  <span>
                    {scale.max} {asText(resultUi.unit)}
                  </span>
                </div>
                <div className="relative h-3 rounded-full bg-slate-700/80">
                  <div
                    className="absolute bottom-full mb-1 -translate-x-1/2 text-[10px] font-medium text-slate-400"
                    style={{ left: `${thresholdPct}%` }}
                  >
                    {formatToolUiString(asText(resultUi.cutoff), { threshold: scale.threshold })}
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
                <p className="mt-2 text-center text-xs text-slate-500">{asText(resultUi.barNote)}</p>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
