"use client";

import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import NumberInputWithStepper from "@/components/NumberInputWithStepper";
import { formatResultNumber } from "@/lib/numberFormat";

type Tab = "basic" | "change" | "of" | "after";

function tabFromQuery(value: string | null): Tab | null {
  if (value === "basic" || value === "change" || value === "of" || value === "after") return value;
  return null;
}

const STORAGE_KEY = "percentage-calculator-history";
const HISTORY_LIMIT = 5;
const HISTORY_DEBOUNCE_MS = 550;

const SAMPLE_BASIC = { percentage: "20", number: "100" };
const SAMPLE_CHANGE = { oldValue: "80", newValue: "100" };
const SAMPLE_OF = { ofBase: "100", ofPart: "20" };
const SAMPLE_AFTER = { afterStart: "100", afterPercent: "20" };

type InputSnapshot = {
  percentage: string;
  number: string;
  oldValue: string;
  newValue: string;
  ofBase: string;
  ofPart: string;
  afterStart: string;
  afterPercent: string;
};

type HistoryEntry = {
  id: string;
  tab: Tab;
  inputs: InputSnapshot;
  resultDisplay: string;
  resultDetail: string;
};

function parseNum(s: string): number | null {
  const t = s.replace(/,/g, "").trim();
  if (t === "" || t === "-" || t === ".") return null;
  const n = parseFloat(t);
  if (Number.isNaN(n) || !Number.isFinite(n)) return null;
  return n;
}

function sameInputs(a: InputSnapshot, b: InputSnapshot): boolean {
  return (
    a.percentage === b.percentage &&
    a.number === b.number &&
    a.oldValue === b.oldValue &&
    a.newValue === b.newValue &&
    a.ofBase === b.ofBase &&
    a.ofPart === b.ofPart &&
    a.afterStart === b.afterStart &&
    a.afterPercent === b.afterPercent
  );
}

type ComputeResult = {
  resultDisplay: string | null;
  resultDetail: string | null;
};

function compute(tab: Tab, snap: InputSnapshot): ComputeResult {
  if (tab === "basic") {
    const p = parseNum(snap.percentage);
    const n = parseNum(snap.number);
    if (p === null || n === null) return { resultDisplay: null, resultDetail: null };
    const res = (p / 100) * n;
    const fd = formatResultNumber(res);
    const detail = `${formatResultNumber(p)}% of ${formatResultNumber(n)} is ${fd}.`;
    return { resultDisplay: fd, resultDetail: detail };
  }

  if (tab === "change") {
    const oldV = parseNum(snap.oldValue);
    const newV = parseNum(snap.newValue);
    if (oldV === null || newV === null) return { resultDisplay: null, resultDetail: null };
    if (oldV === 0) return { resultDisplay: null, resultDetail: null };
    const change = ((newV - oldV) / oldV) * 100;
    const fd = `${formatResultNumber(change)}%`;
    let detail: string;
    if (change > 0) {
      detail = `Change from ${formatResultNumber(oldV)} to ${formatResultNumber(newV)} is a ${formatResultNumber(change)}% increase.`;
    } else if (change < 0) {
      detail = `Change from ${formatResultNumber(oldV)} to ${formatResultNumber(newV)} is a ${formatResultNumber(Math.abs(change))}% decrease.`;
    } else {
      detail = `Change from ${formatResultNumber(oldV)} to ${formatResultNumber(newV)} shows no percentage change.`;
    }
    return { resultDisplay: fd, resultDetail: detail };
  }

  if (tab === "of") {
    const a = parseNum(snap.ofBase);
    const b = parseNum(snap.ofPart);
    if (a === null || b === null) return { resultDisplay: null, resultDetail: null };
    if (a === 0) return { resultDisplay: null, resultDetail: null };
    const pct = (b / a) * 100;
    const fd = `${formatResultNumber(pct)}%`;
    const detail = `${formatResultNumber(b)} is ${formatResultNumber(pct)}% of ${formatResultNumber(a)}.`;
    return { resultDisplay: fd, resultDetail: detail };
  }

  const start = parseNum(snap.afterStart);
  const pc = parseNum(snap.afterPercent);
  if (start === null || pc === null) return { resultDisplay: null, resultDetail: null };
  const final = start * (1 + pc / 100);
  const fd = formatResultNumber(final);
  let detail: string;
  if (pc > 0) {
    detail = `${formatResultNumber(start)} increased by ${formatResultNumber(pc)}% is ${fd}.`;
  } else if (pc < 0) {
    detail = `${formatResultNumber(start)} decreased by ${formatResultNumber(Math.abs(pc))}% is ${fd}.`;
  } else {
    detail = `${formatResultNumber(start)} with no percentage change remains ${fd}.`;
  }
  return { resultDisplay: fd, resultDetail: detail };
}

function readHistoryFromStorage(): HistoryEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.slice(0, HISTORY_LIMIT) as HistoryEntry[];
  } catch {
    return [];
  }
}

export default function PercentageCalculator() {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState<Tab>(() => tabFromQuery(searchParams.get("tab")) ?? "basic");

  useEffect(() => {
    const t = tabFromQuery(searchParams.get("tab"));
    if (t) setTab(t);
  }, [searchParams]);
  const [percentage, setPercentage] = useState("");
  const [number, setNumber] = useState("");
  const [oldValue, setOldValue] = useState("");
  const [newValue, setNewValue] = useState("");
  const [ofBase, setOfBase] = useState("");
  const [ofPart, setOfPart] = useState("");
  const [afterStart, setAfterStart] = useState("");
  const [afterPercent, setAfterPercent] = useState("");

  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const skipNextHistoryPersist = useRef(true);

  useEffect(() => {
    setHistory(readHistoryFromStorage());
  }, []);

  useEffect(() => {
    if (skipNextHistoryPersist.current) {
      skipNextHistoryPersist.current = false;
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    } catch {
      /* ignore quota / private mode */
    }
  }, [history]);

  const snapshot: InputSnapshot = useMemo(
    () => ({
      percentage,
      number,
      oldValue,
      newValue,
      ofBase,
      ofPart,
      afterStart,
      afterPercent,
    }),
    [percentage, number, oldValue, newValue, ofBase, ofPart, afterStart, afterPercent],
  );

  const { resultDisplay, resultDetail } = useMemo(
    () => compute(tab, snapshot),
    [tab, snapshot],
  );

  useEffect(() => {
    if (!resultDisplay || !resultDetail) return;
    const handle = window.setTimeout(() => {
      setHistory((prev) => {
        const entry: HistoryEntry = {
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
          tab,
          inputs: { ...snapshot },
          resultDisplay,
          resultDetail,
        };
        const top = prev[0];
        if (top && top.tab === entry.tab && sameInputs(top.inputs, entry.inputs)) {
          return prev;
        }
        return [entry, ...prev].slice(0, HISTORY_LIMIT);
      });
    }, HISTORY_DEBOUNCE_MS);
    return () => window.clearTimeout(handle);
  }, [tab, snapshot, resultDisplay, resultDetail]);

  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);
  const messageTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showMessage = useCallback((text: string, type: "success" | "error" = "success") => {
    if (messageTimeoutRef.current) clearTimeout(messageTimeoutRef.current);
    setMessage({ text, type });
    messageTimeoutRef.current = setTimeout(() => {
      setMessage(null);
      messageTimeoutRef.current = null;
    }, 2500);
  }, []);

  const resetBasic = () => {
    setPercentage("");
    setNumber("");
    showMessage("Calculator has been reset");
  };

  const resetChange = () => {
    setOldValue("");
    setNewValue("");
    showMessage("Calculator has been reset");
  };

  const resetOf = () => {
    setOfBase("");
    setOfPart("");
    showMessage("Calculator has been reset");
  };

  const resetAfter = () => {
    setAfterStart("");
    setAfterPercent("");
    showMessage("Calculator has been reset");
  };

  const useSampleBasic = () => {
    setPercentage(SAMPLE_BASIC.percentage);
    setNumber(SAMPLE_BASIC.number);
    showMessage("Sample data loaded");
  };

  const useSampleChange = () => {
    setOldValue(SAMPLE_CHANGE.oldValue);
    setNewValue(SAMPLE_CHANGE.newValue);
    showMessage("Sample data loaded");
  };

  const useSampleOf = () => {
    setOfBase(SAMPLE_OF.ofBase);
    setOfPart(SAMPLE_OF.ofPart);
    showMessage("Sample data loaded");
  };

  const useSampleAfter = () => {
    setAfterStart(SAMPLE_AFTER.afterStart);
    setAfterPercent(SAMPLE_AFTER.afterPercent);
    showMessage("Sample data loaded");
  };

  const applyHistoryEntry = (entry: HistoryEntry) => {
    setTab(entry.tab);
    setPercentage(entry.inputs.percentage);
    setNumber(entry.inputs.number);
    setOldValue(entry.inputs.oldValue);
    setNewValue(entry.inputs.newValue);
    setOfBase(entry.inputs.ofBase);
    setOfPart(entry.inputs.ofPart);
    setAfterStart(entry.inputs.afterStart);
    setAfterPercent(entry.inputs.afterPercent);
    showMessage("Values restored from history");
  };

  const copyResults = async () => {
    if (resultDisplay === null || resultDetail === null) return;
    const text = `${resultDisplay}\n${resultDetail}`;
    try {
      await navigator.clipboard.writeText(text);
      showMessage("Copied to clipboard");
    } catch {
      showMessage("Copy failed", "error");
    }
  };

  const tabBtn = (t: Tab, label: string, controls: string, tid: string) => (
    <button
      type="button"
      role="tab"
      aria-selected={tab === t}
      aria-controls={controls}
      id={tid}
      onClick={() => setTab(t)}
      className={`rounded-lg px-3 py-2 text-xs font-medium transition-colors min-h-[2.5rem] touch-manipulation sm:px-4 sm:text-sm ${
        tab === t
          ? "bg-slate-700 text-slate-100 ring-1 ring-slate-600"
          : "bg-slate-800/50 text-slate-400 hover:bg-slate-700 hover:text-slate-200"
      }`}
    >
      {label}
    </button>
  );

  const btnCls =
    "rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-slate-100 transition-colors hover:bg-slate-600 min-h-[2.5rem] touch-manipulation";

  const inputProps = { commaFormat: true as const };

  const changeBlocked = tab === "change" && parseNum(oldValue) === 0 && oldValue.replace(/,/g, "").trim() !== "";
  const ofBlocked = tab === "of" && parseNum(ofBase) === 0 && ofBase.replace(/,/g, "").trim() !== "";

  return (
    <div id="percentage-calculator-tool" className="mx-auto max-w-5xl scroll-mt-24">
      {message && (
        <div
          role="status"
          aria-live="polite"
          className={`fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-lg px-4 py-3 text-sm shadow-lg ${
            message.type === "error" ? "bg-red-900/90 text-red-100" : "bg-emerald-900/90 text-emerald-100"
          }`}
        >
          {message.text}
        </div>
      )}

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="min-w-0 flex-1 rounded-xl border border-border bg-surface p-6">
          <div className="mb-4 flex flex-wrap gap-2" role="tablist" aria-label="Calculator mode">
            {tabBtn("basic", "Basic Percentage", "basic-panel", "tab-basic")}
            {tabBtn("change", "Percentage Change", "change-panel", "tab-change")}
            {tabBtn("of", "Percentage Of", "of-panel", "tab-of")}
            {tabBtn("after", "Value After Change", "after-panel", "tab-after")}
          </div>

          {tab === "basic" && (
            <div id="basic-panel" role="tabpanel" aria-labelledby="tab-basic">
              <p className="mb-3 text-sm text-slate-500">
                Find how much a given percent of a number is. Same as (Percentage ÷ 100) × Number.
              </p>
              <div className="space-y-4">
                <div>
                  <label htmlFor="percentage" className="mb-1 block text-sm text-slate-400">
                    Percentage (%)
                  </label>
                  <NumberInputWithStepper
                    id="percentage"
                    value={percentage}
                    onChange={setPercentage}
                    placeholder="Enter percentage"
                    step={0.1}
                    aria-label="Percentage"
                    {...inputProps}
                  />
                </div>
                <div>
                  <label htmlFor="number" className="mb-1 block text-sm text-slate-400">
                    Number
                  </label>
                  <NumberInputWithStepper
                    id="number"
                    value={number}
                    onChange={setNumber}
                    placeholder="Enter number"
                    step={1}
                    aria-label="Number"
                    {...inputProps}
                  />
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <button type="button" className={btnCls} onClick={resetBasic}>
                  Reset
                </button>
                <button type="button" className={btnCls} onClick={useSampleBasic}>
                  Use sample data
                </button>
              </div>
            </div>
          )}

          {tab === "change" && (
            <div id="change-panel" role="tabpanel" aria-labelledby="tab-change">
              <p className="mb-3 text-sm text-slate-500">
                See how much a value went up or down from the original to the new amount. Same as ((New − Original) ÷ Original) × 100.
              </p>
              <div className="space-y-4">
                <div>
                  <label htmlFor="oldValue" className="mb-1 block text-sm text-slate-400">
                    Original Value
                  </label>
                  <NumberInputWithStepper
                    id="oldValue"
                    value={oldValue}
                    onChange={setOldValue}
                    placeholder="Enter original value"
                    step={1}
                    aria-label="Original value"
                    {...inputProps}
                  />
                </div>
                <div>
                  <label htmlFor="newValue" className="mb-1 block text-sm text-slate-400">
                    New Value
                  </label>
                  <NumberInputWithStepper
                    id="newValue"
                    value={newValue}
                    onChange={setNewValue}
                    placeholder="Enter new value"
                    step={1}
                    aria-label="New value"
                    {...inputProps}
                  />
                </div>
                {changeBlocked && (
                  <p className="text-sm text-amber-400/90" role="note">
                    Original value cannot be zero for percentage change.
                  </p>
                )}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <button type="button" className={btnCls} onClick={resetChange}>
                  Reset
                </button>
                <button type="button" className={btnCls} onClick={useSampleChange}>
                  Use sample data
                </button>
              </div>
            </div>
          )}

          {tab === "of" && (
            <div id="of-panel" role="tabpanel" aria-labelledby="tab-of">
              <p className="mb-3 text-sm text-slate-500">
                What percentage is the part (B) of the total (A)? Same as (B ÷ A) × 100.
              </p>
              <div className="space-y-4">
                <div>
                  <label htmlFor="ofBase" className="mb-1 block text-sm text-slate-400">
                    Total (A)
                  </label>
                  <NumberInputWithStepper
                    id="ofBase"
                    value={ofBase}
                    onChange={setOfBase}
                    placeholder="Enter total"
                    step={1}
                    aria-label="Total value A"
                    {...inputProps}
                  />
                </div>
                <div>
                  <label htmlFor="ofPart" className="mb-1 block text-sm text-slate-400">
                    Part (B)
                  </label>
                  <NumberInputWithStepper
                    id="ofPart"
                    value={ofPart}
                    onChange={setOfPart}
                    placeholder="Enter part"
                    step={1}
                    aria-label="Part value B"
                    {...inputProps}
                  />
                </div>
                {ofBlocked && (
                  <p className="text-sm text-amber-400/90" role="note">
                    Total (A) cannot be zero.
                  </p>
                )}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <button type="button" className={btnCls} onClick={resetOf}>
                  Reset
                </button>
                <button type="button" className={btnCls} onClick={useSampleOf}>
                  Use sample data
                </button>
              </div>
            </div>
          )}

          {tab === "after" && (
            <div id="after-panel" role="tabpanel" aria-labelledby="tab-after">
              <p className="mb-3 text-sm text-slate-500">
                Final value after increasing or decreasing the starting amount by a percentage. Use a negative
                percentage for a decrease.
              </p>
              <div className="space-y-4">
                <div>
                  <label htmlFor="afterStart" className="mb-1 block text-sm text-slate-400">
                    Starting Value
                  </label>
                  <NumberInputWithStepper
                    id="afterStart"
                    value={afterStart}
                    onChange={setAfterStart}
                    placeholder="Enter starting value"
                    step={1}
                    aria-label="Starting value"
                    {...inputProps}
                  />
                </div>
                <div>
                  <label htmlFor="afterPercent" className="mb-1 block text-sm text-slate-400">
                    Change (%)
                  </label>
                  <NumberInputWithStepper
                    id="afterPercent"
                    value={afterPercent}
                    onChange={setAfterPercent}
                    placeholder="e.g. 20 or -10"
                    step={0.1}
                    aria-label="Percentage change"
                    {...inputProps}
                  />
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <button type="button" className={btnCls} onClick={resetAfter}>
                  Reset
                </button>
                <button type="button" className={btnCls} onClick={useSampleAfter}>
                  Use sample data
                </button>
              </div>
            </div>
          )}

          {resultDisplay !== null && resultDetail !== null && (
            <div
              role="region"
              aria-labelledby="percentage-result-label"
              id="percentage-result"
              className="mt-6 rounded-lg border border-slate-600 bg-slate-800/50 p-4 text-center"
            >
              <p id="percentage-result-label" className="text-sm text-slate-500">
                Result
              </p>
              <p className="mt-1 text-2xl font-semibold text-slate-100">{resultDisplay}</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-400 sm:text-sm">{resultDetail}</p>
              <button
                type="button"
                onClick={copyResults}
                className="mt-3 rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-sm text-slate-100 transition-colors hover:bg-slate-600 min-h-[2.5rem] touch-manipulation"
                aria-label="Copy result to clipboard"
              >
                Copy results
              </button>
            </div>
          )}
        </div>

        <aside
          className="w-full shrink-0 rounded-xl border border-border bg-surface p-4 lg:w-72"
          aria-labelledby="history-heading"
        >
          <h2 id="history-heading" className="mb-3 text-sm font-semibold text-slate-200">
            Recent calculations
          </h2>
          <p className="mb-3 text-xs text-slate-500">Up to {HISTORY_LIMIT} items stored on this device. Click an entry to restore inputs.</p>
          {history.length === 0 ? (
            <p className="text-sm text-slate-500">No history yet. Enter values to see results here.</p>
          ) : (
            <ul className="max-h-[360px] space-y-2 overflow-y-auto pr-1 scrollbar-thin">
              {history.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => applyHistoryEntry(item)}
                    className="w-full rounded-lg border border-slate-600/80 bg-slate-800/40 p-3 text-left text-sm transition-colors hover:border-slate-500 hover:bg-slate-800/70 touch-manipulation"
                  >
                    <span className="block text-xs font-medium uppercase tracking-wide text-slate-500">
                      {item.tab === "basic" && "Basic"}
                      {item.tab === "change" && "Change"}
                      {item.tab === "of" && "Percentage Of"}
                      {item.tab === "after" && "After Change"}
                    </span>
                    <span className="mt-1 block font-semibold text-slate-100">{item.resultDisplay}</span>
                    <span className="mt-0.5 line-clamp-2 block text-xs text-slate-400">{item.resultDetail}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </aside>
      </div>
    </div>
  );
}
