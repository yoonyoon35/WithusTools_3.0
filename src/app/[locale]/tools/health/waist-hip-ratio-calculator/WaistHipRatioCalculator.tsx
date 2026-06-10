"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import NumberInputWithStepper from "@/components/NumberInputWithStepper";
import useToolPageContent from "@/hooks/useToolPageContent";
import { formatToolUiString } from "@/lib/tool-content";

type MeasureUnit = "metric" | "us";
type Sex = "male" | "female" | "";
type UiMap = Record<string, unknown>;
const META_PATH = "/tools/health/waist-hip-ratio-calculator";

const WHR_MALE_REF = 0.9;
const WHR_FEMALE_REF = 0.85;

const WAIST_M_M1 = 94;
const WAIST_M_M2 = 102;
const WAIST_F_M1 = 80;
const WAIST_F_M2 = 88;

const SAMPLE_METRIC = { waistCm: "88", hipCm: "102" };
const SAMPLE_US = { waistIn: "34.6", hipIn: "40.2" };

function asMap(value: unknown): UiMap {
  return value && typeof value === "object" ? (value as UiMap) : {};
}

function asText(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function interpretWhr(
  whr: number,
  sex: Sex,
  interpretUi: UiMap,
): { label: string; detail: string; bg: string } | null {
  const maleUi = asMap(interpretUi.male);
  const femaleUi = asMap(interpretUi.female);
  if (sex === "male") {
    if (whr > WHR_MALE_REF) {
      const groupUi = asMap(maleUi.above);
      return {
        label: asText(groupUi.label),
        detail: formatToolUiString(asText(groupUi.detail), {
          threshold: WHR_MALE_REF,
        }),
        bg: "#c27b1a",
      };
    }
    const groupUi = asMap(maleUi.atOrBelow);
    return {
      label: asText(groupUi.label),
      detail: formatToolUiString(asText(groupUi.detail), {
        threshold: WHR_MALE_REF,
      }),
      bg: "#2d8659",
    };
  }
  if (sex === "female") {
    if (whr > WHR_FEMALE_REF) {
      const groupUi = asMap(femaleUi.above);
      return {
        label: asText(groupUi.label),
        detail: formatToolUiString(asText(groupUi.detail), {
          threshold: WHR_FEMALE_REF,
          maleThreshold: WHR_MALE_REF,
        }),
        bg: "#c27b1a",
      };
    }
    const groupUi = asMap(femaleUi.atOrBelow);
    return {
      label: asText(groupUi.label),
      detail: formatToolUiString(asText(groupUi.detail), {
        threshold: WHR_FEMALE_REF,
      }),
      bg: "#2d8659",
    };
  }
  return null;
}

function waistBandNote(waistCm: number, sex: "male" | "female", waistBandUi: UiMap): string {
  const maleUi = asMap(waistBandUi.male);
  const femaleUi = asMap(waistBandUi.female);
  const rounded = Math.round(waistCm);
  if (sex === "male") {
    if (waistCm >= WAIST_M_M2) {
      return formatToolUiString(asText(maleUi.high), { waist: rounded });
    }
    if (waistCm >= WAIST_M_M1) {
      return formatToolUiString(asText(maleUi.medium), { waist: rounded });
    }
    return formatToolUiString(asText(maleUi.low), { waist: rounded });
  }
  if (waistCm >= WAIST_F_M2) {
    return formatToolUiString(asText(femaleUi.high), { waist: rounded });
  }
  if (waistCm >= WAIST_F_M1) {
    return formatToolUiString(asText(femaleUi.medium), { waist: rounded });
  }
  return formatToolUiString(asText(femaleUi.low), { waist: rounded });
}

export default function WaistHipRatioCalculator() {
  const page = useToolPageContent(META_PATH);
  const ui = page?.ui as Record<string, unknown> | undefined;
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

  const whrUi = asMap(ui);
  const sexUi = asMap(whrUi.sex);
  const unitUi = asMap(whrUi.unit);
  const labelsUi = asMap(whrUi.labels);
  const placeholdersUi = asMap(whrUi.placeholders);
  const buttonsUi = asMap(whrUi.buttons);
  const resultUi = asMap(whrUi.result);
  const interpretUi = asMap(whrUi.interpret);
  const waistBandUi = asMap(whrUi.waistBand);
  const errorUi = asMap(whrUi.error);
  const toastUi = asMap(whrUi.toast);

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
        setError(asText(errorUi.enterMetric));
        return;
      }
      if (Number.isNaN(w) || Number.isNaN(h)) {
        setError(asText(errorUi.usePlainNumbers));
        return;
      }
      if (w <= 0 || h <= 0) {
        setError(asText(errorUi.positive));
        return;
      }
      wCm = w;
      hCm = h;
    } else {
      const w = parseFloat(waistIn);
      const h = parseFloat(hipIn);
      if (waistIn.trim() === "" || hipIn.trim() === "") {
        setError(asText(errorUi.enterUs));
        return;
      }
      if (Number.isNaN(w) || Number.isNaN(h)) {
        setError(asText(errorUi.usePlainNumbers));
        return;
      }
      if (w <= 0 || h <= 0) {
        setError(asText(errorUi.positive));
        return;
      }
      wCm = w * 2.54;
      hCm = h * 2.54;
    }

    const whr = wCm / hCm;
    if (!Number.isFinite(whr) || whr <= 0) {
      setError(asText(errorUi.unusableRatio));
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
    showToast(asText(toastUi.cleared));
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
    showToast(asText(toastUi.sampleLoaded), "info");
  };

  const copyResults = async () => {
    if (!result) return;
    const interp = interpretWhr(result.whr, sex, interpretUi);
    const unitLabel = measureUnit === "metric" ? "cm" : "in";
    const wShow = measureUnit === "metric" ? waistCm : waistIn;
    const hShow = measureUnit === "metric" ? hipCm : hipIn;
    const lines = [
      `${asText(resultUi.title)}: ${result.whr.toFixed(3)}`,
      `${wShow} ${unitLabel}, ${hShow} ${unitLabel}`,
      sex
        ? `${asText(sexUi.legend)}: ${sex === "male" ? asText(sexUi.male) : asText(sexUi.female)}`
        : `${asText(sexUi.legend)}: ${asText(sexUi.skip)}`,
      interp ? interp.label : "",
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

  const interp = result && sex ? interpretWhr(result.whr, sex, interpretUi) : null;

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

  const waistNote = result && (sex === "male" || sex === "female") ? waistBandNote(result.waistCm, sex, waistBandUi) : null;

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
        <h3 className="mb-4 text-lg font-semibold text-slate-200">{asText(whrUi.title)}</h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-400">{asText(whrUi.intro)}</p>

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
            onClick={() => switchMeasureUnit("metric")}
            className={
              measureUnit === "metric"
                ? `${btnPrimary} min-h-[2.75rem] touch-manipulation`
                : `${btnSecondary} min-h-[2.75rem] touch-manipulation`
            }
            aria-pressed={measureUnit === "metric"}
          >
            {asText(unitUi.metric)}
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
            {asText(unitUi.us)}
          </button>
        </div>

        {measureUnit === "metric" ? (
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="whr-waist-cm" className="mb-1 block text-sm text-slate-400">
                {asText(labelsUi.waistCm)}
              </label>
              <NumberInputWithStepper
                id="whr-waist-cm"
                value={waistCm}
                onChange={(v) => setWaistCm(v)}
                placeholder={asText(placeholdersUi.waistCm)}
                min={0}
                step={0.1}
                className="flex-1"
                aria-label={asText(labelsUi.waistCm)}
              />
            </div>
            <div>
              <label htmlFor="whr-hip-cm" className="mb-1 block text-sm text-slate-400">
                {asText(labelsUi.hipCm)}
              </label>
              <NumberInputWithStepper
                id="whr-hip-cm"
                value={hipCm}
                onChange={(v) => setHipCm(v)}
                placeholder={asText(placeholdersUi.hipCm)}
                min={0}
                step={0.1}
                className="flex-1"
                aria-label={asText(labelsUi.hipCm)}
              />
            </div>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="whr-waist-in" className="mb-1 block text-sm text-slate-400">
                {asText(labelsUi.waistIn)}
              </label>
              <NumberInputWithStepper
                id="whr-waist-in"
                value={waistIn}
                onChange={(v) => setWaistIn(v)}
                placeholder={asText(placeholdersUi.waistIn)}
                min={0}
                step={0.1}
                className="flex-1"
                aria-label={asText(labelsUi.waistIn)}
              />
            </div>
            <div>
              <label htmlFor="whr-hip-in" className="mb-1 block text-sm text-slate-400">
                {asText(labelsUi.hipIn)}
              </label>
              <NumberInputWithStepper
                id="whr-hip-in"
                value={hipIn}
                onChange={(v) => setHipIn(v)}
                placeholder={asText(placeholdersUi.hipIn)}
                min={0}
                step={0.1}
                className="flex-1"
                aria-label={asText(labelsUi.hipIn)}
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
          <section className="mt-6 space-y-4" aria-label={asText(whrUi.title)}>
            <div className="rounded-lg border border-slate-600 bg-slate-800/50 p-6 text-center">
              <p className="text-sm text-slate-500">{asText(resultUi.title)}</p>
              <p className="text-4xl font-bold tabular-nums text-slate-100">{result.whr.toFixed(3)}</p>
              <p className="mt-1 text-xs text-slate-500">{asText(resultUi.formula)}</p>
              {interp ? (
                <p
                  className="mt-3 inline-block rounded-lg px-4 py-2 text-base font-semibold text-white"
                  style={{ background: interp.bg }}
                >
                  {interp.label}
                </p>
              ) : (
                <p className="mt-3 text-sm text-slate-400">
                  {asText(resultUi.selectSex)}
                </p>
              )}
            </div>

            {interp && (
              <p className="text-center text-sm leading-relaxed text-slate-400">{interp.detail}</p>
            )}

            {waistNote && (
              <div className="rounded-lg border border-slate-700 bg-slate-900/30 px-4 py-3 text-sm leading-relaxed text-slate-400">
                <p className="font-medium text-slate-300">{asText(resultUi.waistContextTitle)}</p>
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
                  {formatToolUiString(asText(resultUi.barCaption), {
                    threshold: scale.threshold,
                    sex: sex === "male" ? asText(sexUi.male).toLowerCase() : asText(sexUi.female).toLowerCase(),
                  })}
                </p>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
