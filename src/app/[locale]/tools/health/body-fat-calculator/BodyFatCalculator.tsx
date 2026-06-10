"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import NumberInputWithStepper from "@/components/NumberInputWithStepper";
import useToolPageContent from "@/hooks/useToolPageContent";

type MeasureUnit = "metric" | "us";
type Sex = "male" | "female" | "";
type UiMap = Record<string, unknown>;
const META_PATH = "/tools/health/body-fat-calculator";

function asMap(value: unknown): UiMap {
  return value && typeof value === "object" ? (value as UiMap) : {};
}

function asText(value: unknown): string {
  return typeof value === "string" ? value : "";
}

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

function interpretAce(
  pct: number,
  sex: "male" | "female",
  interpretUi: UiMap,
): {
  label: string;
  detail: string;
  bg: string;
} {
  const maleUi = asMap(interpretUi.male);
  const femaleUi = asMap(interpretUi.female);

  if (sex === "male") {
    if (pct < 6) {
      const groupUi = asMap(maleUi.veryLow);
      return {
        label: asText(groupUi.label),
        detail: asText(groupUi.detail),
        bg: "#4a6fa5",
      };
    }
    if (pct <= 13) {
      const groupUi = asMap(maleUi.athlete);
      return {
        label: asText(groupUi.label),
        detail: asText(groupUi.detail),
        bg: "#2d8659",
      };
    }
    if (pct <= 17) {
      const groupUi = asMap(maleUi.fitness);
      return {
        label: asText(groupUi.label),
        detail: asText(groupUi.detail),
        bg: "#3d8f6a",
      };
    }
    if (pct <= 24) {
      const groupUi = asMap(maleUi.average);
      return {
        label: asText(groupUi.label),
        detail: asText(groupUi.detail),
        bg: "#c2a01a",
      };
    }
    const groupUi = asMap(maleUi.aboveAverage);
    return {
      label: asText(groupUi.label),
      detail: asText(groupUi.detail),
      bg: "#c27b1a",
    };
  }
  if (pct < 14) {
    const groupUi = asMap(femaleUi.veryLow);
    return {
      label: asText(groupUi.label),
      detail: asText(groupUi.detail),
      bg: "#4a6fa5",
    };
  }
  if (pct <= 20) {
    const groupUi = asMap(femaleUi.athlete);
    return {
      label: asText(groupUi.label),
      detail: asText(groupUi.detail),
      bg: "#2d8659",
    };
  }
  if (pct <= 24) {
    const groupUi = asMap(femaleUi.fitness);
    return {
      label: asText(groupUi.label),
      detail: asText(groupUi.detail),
      bg: "#3d8f6a",
    };
  }
  if (pct <= 31) {
    const groupUi = asMap(femaleUi.average);
    return {
      label: asText(groupUi.label),
      detail: asText(groupUi.detail),
      bg: "#c2a01a",
    };
  }
  const groupUi = asMap(femaleUi.aboveAverage);
  return {
    label: asText(groupUi.label),
    detail: asText(groupUi.detail),
    bg: "#c27b1a",
  };
}

const SAMPLE_M_METRIC = { heightCm: "178", neckCm: "38", waistCm: "90" };
const SAMPLE_M_US = { heightFt: "5", heightIn: "10", neckIn: "15", waistIn: "35.5" };
const SAMPLE_F_METRIC = { heightCm: "165", neckCm: "32", waistCm: "76", hipCm: "98" };
const SAMPLE_F_US = { heightFt: "5", heightIn: "5", neckIn: "12.5", waistIn: "30", hipIn: "38.5" };

export default function BodyFatCalculator() {
  const page = useToolPageContent(META_PATH);
  const ui = page?.ui as Record<string, unknown> | undefined;
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

  const bodyFatUi = asMap(ui);
  const sexUi = asMap(bodyFatUi.sex);
  const unitUi = asMap(bodyFatUi.unit);
  const labelsUi = asMap(bodyFatUi.labels);
  const placeholdersUi = asMap(bodyFatUi.placeholders);
  const buttonsUi = asMap(bodyFatUi.buttons);
  const resultUi = asMap(bodyFatUi.result);
  const interpretUi = asMap(bodyFatUi.interpret);
  const errorUi = asMap(bodyFatUi.error);
  const toastUi = asMap(bodyFatUi.toast);

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

    let heightInches = 0;
    let neckI = 0;
    let waistI = 0;
    let hipI = 0;

    if (measureUnit === "metric") {
      const h = parseFloat(heightCm);
      const n = parseFloat(neckCm);
      const w = parseFloat(waistCm);
      if (heightCm.trim() === "" || neckCm.trim() === "" || waistCm.trim() === "") {
        setError(asText(errorUi.enterMetricBase));
        return;
      }
      if (sex === "female" && hipCm.trim() === "") {
        setError(asText(errorUi.femaleNeedsHipMetric));
        return;
      }
      if (Number.isNaN(h) || Number.isNaN(n) || Number.isNaN(w)) {
        setError(asText(errorUi.usePlainNumbers));
        return;
      }
      const hipParsed = sex === "female" ? parseFloat(hipCm) : 0;
      if (sex === "female" && (Number.isNaN(hipParsed) || hipParsed <= 0)) {
        setError(asText(errorUi.hipPositive));
        return;
      }
      if (h <= 0 || n <= 0 || w <= 0) {
        setError(asText(errorUi.positiveBase));
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
        setError(asText(errorUi.enterUsHeight));
        return;
      }
      if (neckIn.trim() === "" || waistIn.trim() === "") {
        setError(asText(errorUi.enterUsBase));
        return;
      }
      if (sex === "female" && hipIn.trim() === "") {
        setError(asText(errorUi.femaleNeedsHipUs));
        return;
      }
      if (Number.isNaN(feet) || Number.isNaN(inches) || Number.isNaN(n) || Number.isNaN(w)) {
        setError(asText(errorUi.usePlainNumbers));
        return;
      }
      const hipParsed = sex === "female" ? parseFloat(hipIn) : 0;
      if (sex === "female" && (Number.isNaN(hipParsed) || hipParsed <= 0)) {
        setError(asText(errorUi.hipPositive));
        return;
      }
      const totalIn = feet * 12 + inches;
      if (totalIn <= 0 || n <= 0 || w <= 0) {
        setError(asText(errorUi.positiveBase));
        return;
      }
      heightInches = totalIn;
      neckI = n;
      waistI = w;
      hipI = sex === "female" ? hipParsed : 0;
    }

    if (heightInches < 20 || heightInches > 96) {
      setError(asText(errorUi.heightRange));
      return;
    }

    let pct = 0;
    if (sex === "male") {
      if (waistI - neckI <= 0.05) {
        setError(asText(errorUi.maleConstraint));
        return;
      }
      pct = navyBodyFatPercentMale(waistI, neckI, heightInches);
    } else {
      if (waistI + hipI - neckI <= 0.05) {
        setError(asText(errorUi.femaleConstraint));
        return;
      }
      pct = navyBodyFatPercentFemale(waistI, hipI, neckI, heightInches);
    }

    if (!Number.isFinite(pct) || pct < 2 || pct > 70) {
      setError(asText(errorUi.unrealistic));
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
    showToast(asText(toastUi.cleared));
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
    showToast(asText(toastUi.sampleLoaded), "info");
  };

  const copyResults = async () => {
    if (!result || (sex !== "male" && sex !== "female")) return;
    const interp = interpretAce(result.pct, sex, interpretUi);
    const lines = [
      `${asText(resultUi.title)} (${asText(resultUi.method)}): ${result.pct.toFixed(1)}%`,
      `${asText(sexUi.legend)}: ${sex === "male" ? asText(sexUi.male) : asText(sexUi.female)}`,
      interp.label,
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

  const interp = result && (sex === "male" || sex === "female") ? interpretAce(result.pct, sex, interpretUi) : null;

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
        <h3 className="mb-4 text-lg font-semibold text-slate-200">{asText(bodyFatUi.title)}</h3>
        <div className="mb-4 rounded-lg border border-amber-700/50 bg-amber-950/20 px-3 py-3 text-sm leading-relaxed text-amber-100/90">
          <strong className="font-semibold text-amber-100">{asText(bodyFatUi.warningTitle)}</strong>{" "}
          {asText(bodyFatUi.warningBody)}
        </div>
        <p className="mb-4 text-sm leading-relaxed text-slate-400">{asText(bodyFatUi.intro)}</p>

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
              <label htmlFor="bf-height-cm" className="mb-1 block text-sm text-slate-400">
                {asText(labelsUi.heightCm)}
              </label>
              <NumberInputWithStepper
                id="bf-height-cm"
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
              <label htmlFor="bf-neck-cm" className="mb-1 block text-sm text-slate-400">
                {asText(labelsUi.neckCm)}
              </label>
              <NumberInputWithStepper
                id="bf-neck-cm"
                value={neckCm}
                onChange={(v) => setNeckCm(v)}
                placeholder={asText(placeholdersUi.neckCm)}
                min={0}
                step={0.1}
                className="flex-1"
                aria-label={asText(labelsUi.neckCm)}
              />
            </div>
            <div>
              <label htmlFor="bf-waist-cm" className="mb-1 block text-sm text-slate-400">
                {asText(labelsUi.waistCm)}
              </label>
              <NumberInputWithStepper
                id="bf-waist-cm"
                value={waistCm}
                onChange={(v) => setWaistCm(v)}
                placeholder={asText(placeholdersUi.waistCm)}
                min={0}
                step={0.1}
                className="flex-1"
                aria-label={asText(labelsUi.waistCm)}
              />
            </div>
            {sex === "female" && (
              <div>
                <label htmlFor="bf-hip-cm" className="mb-1 block text-sm text-slate-400">
                  {asText(labelsUi.hipCm)}
                </label>
                <NumberInputWithStepper
                  id="bf-hip-cm"
                  value={hipCm}
                  onChange={(v) => setHipCm(v)}
                  placeholder={asText(placeholdersUi.hipCm)}
                  min={0}
                  step={0.1}
                  className="flex-1"
                  aria-label={asText(labelsUi.hipCm)}
                />
              </div>
            )}
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="bf-height-ft" className="mb-1 block text-sm text-slate-400">
                {asText(labelsUi.heightFt)}
              </label>
              <NumberInputWithStepper
                id="bf-height-ft"
                value={heightFt}
                onChange={(v) => setHeightFt(v)}
                placeholder={asText(placeholdersUi.ft)}
                min={0}
                className="flex-1"
                aria-label={asText(labelsUi.heightFt)}
              />
            </div>
            <div>
              <label htmlFor="bf-height-in" className="mb-1 block text-sm text-slate-400">
                {asText(labelsUi.heightIn)}
              </label>
              <NumberInputWithStepper
                id="bf-height-in"
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
              <label htmlFor="bf-neck-in" className="mb-1 block text-sm text-slate-400">
                {asText(labelsUi.neckIn)}
              </label>
              <NumberInputWithStepper
                id="bf-neck-in"
                value={neckIn}
                onChange={(v) => setNeckIn(v)}
                placeholder={asText(placeholdersUi.neckIn)}
                min={0}
                step={0.1}
                className="flex-1"
                aria-label={asText(labelsUi.neckIn)}
              />
            </div>
            <div>
              <label htmlFor="bf-waist-in" className="mb-1 block text-sm text-slate-400">
                {asText(labelsUi.waistIn)}
              </label>
              <NumberInputWithStepper
                id="bf-waist-in"
                value={waistIn}
                onChange={(v) => setWaistIn(v)}
                placeholder={asText(placeholdersUi.waistIn)}
                min={0}
                step={0.1}
                className="flex-1"
                aria-label={asText(labelsUi.waistIn)}
              />
            </div>
            {sex === "female" && (
              <div className="sm:col-span-2">
                <label htmlFor="bf-hip-in" className="mb-1 block text-sm text-slate-400">
                  {asText(labelsUi.hipIn)}
                </label>
                <NumberInputWithStepper
                  id="bf-hip-in"
                  value={hipIn}
                  onChange={(v) => setHipIn(v)}
                  placeholder={asText(placeholdersUi.hipIn)}
                  min={0}
                  step={0.1}
                  className="flex-1"
                  aria-label={asText(labelsUi.hipIn)}
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

        {result && interp && (
          <section className="mt-6 space-y-4" aria-label={asText(bodyFatUi.title)}>
            <div className="rounded-lg border border-slate-600 bg-slate-800/50 p-6 text-center">
              <p className="text-sm text-slate-500">{asText(resultUi.title)}</p>
              <p className="text-4xl font-bold tabular-nums text-slate-100">{result.pct.toFixed(1)}%</p>
              <p className="mt-1 text-xs text-slate-500">{asText(resultUi.method)}</p>
              <p
                className="mt-3 inline-block rounded-lg px-4 py-2 text-base font-semibold text-white"
                style={{ background: interp.bg }}
              >
                {interp.label}
              </p>
            </div>
            <p className="text-center text-sm leading-relaxed text-slate-400">{interp.detail}</p>
            <p className="text-center text-xs text-slate-500">{asText(resultUi.chartNote)}</p>
          </section>
        )}
      </div>
    </div>
  );
}
