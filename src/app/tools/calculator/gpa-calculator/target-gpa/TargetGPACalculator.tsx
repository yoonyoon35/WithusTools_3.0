"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import NumberInputWithStepper from "@/components/NumberInputWithStepper";

const SCALE_OPTIONS = [
  { value: "4.0", label: "4.0 Scale (A = 4.0) - Most Common" },
  { value: "5.0", label: "5.0 Scale (A+ = 5.0)" },
  { value: "4.5", label: "4.5 Scale (A+ = 4.5)" },
  { value: "4.3", label: "4.3 Scale (A+ = 4.3)" },
] as const;

function getLetterGrade(gpa: number, scale: string): string {
  const s = parseFloat(scale);
  if (s >= 5) {
    if (gpa >= s) return "A+";
    if (gpa >= 4.49) return "A";
    if (gpa >= 4.19) return "A-";
    if (gpa >= 3.79) return "B+";
    if (gpa >= 3.49) return "B";
    if (gpa >= 3.19) return "B-";
    if (gpa >= 2.79) return "C+";
    if (gpa >= 2.49) return "C";
    if (gpa >= 2.19) return "C-";
    if (gpa >= 1.79) return "D+";
    if (gpa >= 1.49) return "D";
    if (gpa >= 1.19) return "D-";
  } else {
    if (gpa >= 3.99) return "A";
    if (gpa >= 3.69) return "A-";
    if (gpa >= 3.29) return "B+";
    if (gpa >= 2.99) return "B";
    if (gpa >= 2.69) return "B-";
    if (gpa >= 2.29) return "C+";
    if (gpa >= 1.99) return "C";
    if (gpa >= 1.69) return "C-";
    if (gpa >= 1.29) return "D+";
    if (gpa >= 0.99) return "D";
    if (gpa >= 0.69) return "D-";
  }
  return "F";
}

function parseNum(v: string): number | null {
  const n = parseFloat(v);
  return Number.isFinite(n) ? n : null;
}

const cardCls = "rounded-xl border border-border bg-surface p-6";
const inputCls =
  "rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";
const selectCls =
  "rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-100 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";

export default function TargetGPACalculator() {
  const searchParams = useSearchParams();
  const [scale, setScale] = useState("4.0");
  const [currentCredits, setCurrentCredits] = useState("60");
  const [currentGpa, setCurrentGpa] = useState("3.4");
  const [targetGpa, setTargetGpa] = useState("3.5");
  const [termCredits, setTermCredits] = useState("12");
  const [expectedTermGpa, setExpectedTermGpa] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastQuerySyncRef = useRef<string | null>(null);

  useEffect(() => {
    const key = searchParams.toString();
    if (lastQuerySyncRef.current === key) return;
    lastQuerySyncRef.current = key;

    const wantReset =
      searchParams.get("reset") === "1" || searchParams.get("reset") === "true";
    const g = searchParams.get("goal");

    if (wantReset) {
      setCurrentCredits("");
      setCurrentGpa("");
      setTargetGpa("");
      setTermCredits("");
      setExpectedTermGpa("");
      if (g != null && g !== "") {
        const parsed = parseNum(g);
        if (parsed !== null) setTargetGpa(String(parsed));
      }
      return;
    }

    if (g != null && g !== "") {
      const parsed = parseNum(g);
      if (parsed !== null) setTargetGpa(String(parsed));
    }
  }, [searchParams]);

  const showToast = (msg: string) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToast(msg);
    toastTimeoutRef.current = setTimeout(() => {
      setToast(null);
      toastTimeoutRef.current = null;
    }, 2500);
  };

  const C = parseNum(currentCredits);
  const G = parseNum(currentGpa);
  const T = parseNum(targetGpa);
  const N = parseNum(termCredits);
  const S = expectedTermGpa.trim() === "" ? null : parseNum(expectedTermGpa);

  const scaleMax = parseFloat(scale);
  let requiredTermGpa: number | null = null;
  let requiredCreditsFromExpected: number | null = null;
  let message: string | null = null;
  let infoNote: string | null = null;

  if (T === null || T < 0 || T > scaleMax) {
    message = "Enter a target GPA within your grading scale range.";
  } else if (G === null || G < 0 || G > scaleMax) {
    message = "Enter a valid current cumulative GPA.";
  } else if (C === null || C < 0) {
    message = "Enter valid cumulative credits (0 or more).";
  } else if (N === null || N <= 0) {
    message = "Enter planned credits for this term (greater than 0) to see the required term GPA.";
  } else if (C === 0) {
    requiredTermGpa = T;
  } else {
    requiredTermGpa = (T * (C + N) - C * G) / N;
    if (G >= T - 1e-9) {
      infoNote =
        "Your cumulative GPA already meets this target. The value below is the term GPA that keeps your cumulative at exactly the target after this term.";
    }
  }

  const achievable =
    requiredTermGpa !== null &&
    requiredTermGpa >= 0 &&
    requiredTermGpa <= scaleMax + 1e-6;

  if (
    S !== null &&
    S >= 0 &&
    S <= scaleMax &&
    C !== null &&
    C >= 0 &&
    G !== null &&
    G >= 0 &&
    G <= scaleMax &&
    T !== null &&
    T >= 0 &&
    T <= scaleMax &&
    Math.abs(S - T) > 1e-9
  ) {
    if (T > G && S > T) {
      requiredCreditsFromExpected = (C * (T - G)) / (S - T);
    } else if (T < G && S < T) {
      requiredCreditsFromExpected = (C * (G - T)) / (T - S);
    }
  }

  const letterApprox =
    requiredTermGpa !== null &&
    requiredTermGpa >= 0 &&
    requiredTermGpa <= scaleMax + 1e-6
      ? getLetterGrade(Math.min(requiredTermGpa, scaleMax), scale)
      : "—";

  const copyResults = async () => {
    if (requiredTermGpa === null) {
      showToast("Nothing to copy yet");
      return;
    }
    const lines = [
      `Target GPA Planner (${scale} Scale)`,
      "=".repeat(28),
      `Current credits: ${C?.toFixed(1) ?? "—"}`,
      `Current GPA: ${G?.toFixed(2) ?? "—"}`,
      `Target cumulative GPA: ${T?.toFixed(2) ?? "—"}`,
      `Planned term credits: ${N?.toFixed(1) ?? "—"}`,
      "",
      `Required term GPA: ${requiredTermGpa.toFixed(2)}`,
      `Approx. letter grade: ${letterApprox}`,
    ];
    if (requiredCreditsFromExpected !== null && requiredCreditsFromExpected > 0 && S !== null) {
      lines.push(
        "",
        `At term GPA ${S.toFixed(2)}, min. credits needed: ${requiredCreditsFromExpected.toFixed(2)}`
      );
    }
    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      showToast("Copied to clipboard");
    } catch {
      showToast("Copy failed");
    }
  };

  return (
    <div className="space-y-6">
      <div className={cardCls}>
        <h3 className="mb-4 text-lg font-semibold text-slate-200">Settings</h3>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <label htmlFor="targetGradeScale" className="shrink-0 text-sm text-slate-400">
            Grading Scale:
          </label>
          <select
            id="targetGradeScale"
            value={scale}
            onChange={(e) => setScale(e.target.value)}
            className={`${selectCls} min-w-0 flex-1 sm:max-w-sm`}
          >
            {SCALE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          💡 Use the same scale as your transcript and the main GPA calculator.
        </p>
      </div>

      <div className={cardCls}>
        <h3 className="mb-4 border-b-2 border-slate-500 pb-1 text-lg font-semibold text-slate-200">
          Your record &amp; goal
        </h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="curCredits" className="mb-1 block text-sm text-slate-400">
              Current cumulative credits
            </label>
            <NumberInputWithStepper
              id="curCredits"
              value={currentCredits}
              onChange={setCurrentCredits}
              placeholder="e.g. 60"
              min={0}
              max={999}
              step={0.5}
              className="max-w-[200px]"
              aria-label="Current cumulative credits"
            />
          </div>
          <div>
            <label htmlFor="curGpa" className="mb-1 block text-sm text-slate-400">
              Current cumulative GPA
            </label>
            <NumberInputWithStepper
              id="curGpa"
              value={currentGpa}
              onChange={setCurrentGpa}
              placeholder="e.g. 3.4"
              min={0}
              max={scaleMax}
              step={0.01}
              className="max-w-[200px]"
              aria-label="Current cumulative GPA"
            />
          </div>
          <div>
            <label htmlFor="targetG" className="mb-1 block text-sm text-slate-400">
              Target cumulative GPA
            </label>
            <NumberInputWithStepper
              id="targetG"
              value={targetGpa}
              onChange={setTargetGpa}
              placeholder="e.g. 3.5"
              min={0}
              max={scaleMax}
              step={0.01}
              className="max-w-[200px]"
              aria-label="Target cumulative GPA"
            />
          </div>
          <div>
            <label htmlFor="termCred" className="mb-1 block text-sm text-slate-400">
              Planned credits (this term)
            </label>
            <NumberInputWithStepper
              id="termCred"
              value={termCredits}
              onChange={setTermCredits}
              placeholder="e.g. 12"
              min={0}
              max={99}
              step={0.5}
              className="max-w-[200px]"
              aria-label="Planned credits this term"
            />
          </div>
          <div>
            <label htmlFor="expTerm" className="mb-1 block text-sm text-slate-400">
              Expected term GPA (optional)
            </label>
            <input
              id="expTerm"
              type="text"
              inputMode="decimal"
              value={expectedTermGpa}
              onChange={(e) => setExpectedTermGpa(e.target.value)}
              placeholder="e.g. 3.8 — for “credits needed” estimate"
              className={`${inputCls} max-w-md w-full`}
            />
            <p className="mt-1 text-xs text-slate-500">
              If you fill this in, we estimate how many term credits you would need at that GPA to reach the
              target (when mathematically possible).
            </p>
          </div>
        </div>

        <div
          role="region"
          aria-label="Target GPA results"
          className="mt-6 space-y-4 rounded-lg border border-slate-600 bg-slate-800/50 p-4"
        >
          {message && (
            <p className="text-center text-sm text-slate-300">{message}</p>
          )}
          {infoNote && !message && (
            <p className="text-center text-sm text-slate-400">{infoNote}</p>
          )}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="text-center">
              <p className="text-xs text-slate-500">Required term GPA</p>
              <p
                className={`mt-1 text-xl font-semibold ${
                  requiredTermGpa !== null && !achievable ? "text-amber-200/90" : "text-slate-100"
                }`}
              >
                {requiredTermGpa !== null ? requiredTermGpa.toFixed(2) : "—"}
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-500">Approx. letter</p>
              <p className="mt-1 text-xl font-semibold text-slate-100">{letterApprox}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-500">Credits at expected GPA</p>
              <p className="mt-1 text-xl font-semibold text-slate-100">
                {requiredCreditsFromExpected !== null &&
                requiredCreditsFromExpected > 0 &&
                Number.isFinite(requiredCreditsFromExpected)
                  ? requiredCreditsFromExpected.toFixed(2)
                  : S !== null && T !== null && G !== null && T > G && S <= T
                    ? "N/A*"
                    : "—"}
              </p>
            </div>
          </div>
          {requiredTermGpa !== null && requiredTermGpa > scaleMax + 1e-6 && N !== null && N > 0 && (
            <p className="text-center text-sm text-amber-400/90">
              That target is not reachable this term with {N.toFixed(1)} credits: you would need about a{" "}
              {requiredTermGpa.toFixed(2)} term GPA, above the {scaleMax.toFixed(1)} scale maximum. Try more
              credits or a lower target.
            </p>
          )}
          {requiredTermGpa !== null && requiredTermGpa < -1e-6 && (
            <p className="text-center text-sm text-slate-400">
              The math yields a term GPA below zero — the target is very easy relative to your current record
              for this credit load.
            </p>
          )}
          {S !== null && T !== null && G !== null && T > G && S <= T && (
            <p className="text-center text-xs text-slate-500">
              *To raise cumulative GPA, your expected term GPA must be higher than the target cumulative GPA.
            </p>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => {
              setCurrentCredits("60");
              setCurrentGpa("3.4");
              setTargetGpa("3.5");
              setTermCredits("12");
              setExpectedTermGpa("");
              showToast("Sample data loaded");
            }}
            className="min-h-[2.5rem] touch-manipulation rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-slate-100 transition-colors hover:bg-slate-600"
          >
            Use sample data
          </button>
          <button
            type="button"
            onClick={() => {
              setCurrentCredits("");
              setCurrentGpa("");
              setTargetGpa("");
              setTermCredits("");
              setExpectedTermGpa("");
              showToast("Reset complete");
            }}
            className="min-h-[2.5rem] touch-manipulation rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-slate-100 transition-colors hover:bg-slate-600"
          >
            Reset all
          </button>
          <button
            type="button"
            onClick={copyResults}
            className="min-h-[2.5rem] touch-manipulation rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-slate-100 transition-colors hover:bg-slate-600"
          >
            Copy results
          </button>
        </div>

        {toast && (
          <div
            role="status"
            aria-live="polite"
            className="mt-4 rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-sm text-slate-200"
          >
            {toast}
          </div>
        )}
      </div>
    </div>
  );
}
