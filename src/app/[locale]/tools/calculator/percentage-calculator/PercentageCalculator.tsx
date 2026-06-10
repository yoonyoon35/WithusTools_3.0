"use client";

import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import NumberInputWithStepper from "@/components/NumberInputWithStepper";
import { formatResultNumber } from "@/lib/numberFormat";
import { formatToolUiString } from "@/lib/tool-content";
import { useToolPageContent } from "@/hooks/useToolPageContent";

type Tab = "basic" | "change" | "of" | "after";

function tabFromQuery(value: string | null): Tab | null {
  if (value === "basic" || value === "change" || value === "of" || value === "after") return value;
  return null;
}

const STORAGE_KEY = "percentage-calculator-history";
const HISTORY_LIMIT = 5;
const HISTORY_DEBOUNCE_MS = 550;
const META_PATH = "/tools/calculator/percentage-calculator";

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

type ResultTemplates = Record<string, string>;

function compute(tab: Tab, snap: InputSnapshot, results: ResultTemplates): ComputeResult {
  if (tab === "basic") {
    const p = parseNum(snap.percentage);
    const n = parseNum(snap.number);
    if (p === null || n === null) return { resultDisplay: null, resultDetail: null };
    const res = (p / 100) * n;
    const fd = formatResultNumber(res);
    const detail = formatToolUiString(results.basicDetail, {
      p: formatResultNumber(p),
      n: formatResultNumber(n),
      res: fd,
    });
    return { resultDisplay: fd, resultDetail: detail };
  }

  if (tab === "change") {
    const oldV = parseNum(snap.oldValue);
    const newV = parseNum(snap.newValue);
    if (oldV === null || newV === null) return { resultDisplay: null, resultDetail: null };
    if (oldV === 0) return { resultDisplay: null, resultDetail: null };
    const change = ((newV - oldV) / oldV) * 100;
    const fd = `${formatResultNumber(change)}%`;
    const oldS = formatResultNumber(oldV);
    const newS = formatResultNumber(newV);
    const pctS = formatResultNumber(Math.abs(change));
    let detail: string;
    if (change > 0) {
      detail = formatToolUiString(results.changeIncrease, { old: oldS, new: newS, pct: pctS });
    } else if (change < 0) {
      detail = formatToolUiString(results.changeDecrease, { old: oldS, new: newS, pct: pctS });
    } else {
      detail = formatToolUiString(results.changeNone, { old: oldS, new: newS });
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
    const detail = formatToolUiString(results.ofDetail, {
      a: formatResultNumber(a),
      b: formatResultNumber(b),
      pct: formatResultNumber(pct),
    });
    return { resultDisplay: fd, resultDetail: detail };
  }

  const start = parseNum(snap.afterStart);
  const pc = parseNum(snap.afterPercent);
  if (start === null || pc === null) return { resultDisplay: null, resultDetail: null };
  const final = start * (1 + pc / 100);
  const fd = formatResultNumber(final);
  const startS = formatResultNumber(start);
  let detail: string;
  if (pc > 0) {
    detail = formatToolUiString(results.afterIncrease, {
      start: startS,
      pc: formatResultNumber(pc),
      res: fd,
    });
  } else if (pc < 0) {
    detail = formatToolUiString(results.afterDecrease, {
      start: startS,
      pc: formatResultNumber(Math.abs(pc)),
      res: fd,
    });
  } else {
    detail = formatToolUiString(results.afterNone, { start: startS, res: fd });
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
  const page = useToolPageContent(META_PATH);
  const ui = page?.ui;
  const uiRecord = (ui as Record<string, unknown> | undefined) ?? {};
  const tabs = (uiRecord.tabs as Record<string, string> | undefined) ?? {};
  const labels = (uiRecord.labels as Record<string, string> | undefined) ?? {};
  const placeholders = (uiRecord.placeholders as Record<string, string> | undefined) ?? {};
  const tabIntro = (uiRecord.tabIntro as Record<string, string> | undefined) ?? {};
  const resultTemplates = (uiRecord.results as ResultTemplates | undefined) ?? {};
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
    () => compute(tab, snapshot, resultTemplates),
    [tab, snapshot, resultTemplates],
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
    showMessage((uiRecord.resetDone as string | undefined) ?? "Calculator has been reset");
  };

  const resetChange = () => {
    setOldValue("");
    setNewValue("");
    showMessage((uiRecord.resetDone as string | undefined) ?? "Calculator has been reset");
  };

  const resetOf = () => {
    setOfBase("");
    setOfPart("");
    showMessage((uiRecord.resetDone as string | undefined) ?? "Calculator has been reset");
  };

  const resetAfter = () => {
    setAfterStart("");
    setAfterPercent("");
    showMessage((uiRecord.resetDone as string | undefined) ?? "Calculator has been reset");
  };

  const useSampleBasic = () => {
    setPercentage(SAMPLE_BASIC.percentage);
    setNumber(SAMPLE_BASIC.number);
    showMessage((uiRecord.sampleLoaded as string | undefined) ?? "Sample data loaded");
  };

  const useSampleChange = () => {
    setOldValue(SAMPLE_CHANGE.oldValue);
    setNewValue(SAMPLE_CHANGE.newValue);
    showMessage((uiRecord.sampleLoaded as string | undefined) ?? "Sample data loaded");
  };

  const useSampleOf = () => {
    setOfBase(SAMPLE_OF.ofBase);
    setOfPart(SAMPLE_OF.ofPart);
    showMessage((uiRecord.sampleLoaded as string | undefined) ?? "Sample data loaded");
  };

  const useSampleAfter = () => {
    setAfterStart(SAMPLE_AFTER.afterStart);
    setAfterPercent(SAMPLE_AFTER.afterPercent);
    showMessage((uiRecord.sampleLoaded as string | undefined) ?? "Sample data loaded");
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
    showMessage((uiRecord.restoredFromHistory as string | undefined) ?? "Values restored from history");
  };

  const copyResults = async () => {
    if (resultDisplay === null || resultDetail === null) return;
    const text = `${resultDisplay}\n${resultDetail}`;
    try {
      await navigator.clipboard.writeText(text);
      showMessage((uiRecord.copiedToClipboard as string | undefined) ?? "Copied to clipboard");
    } catch {
      showMessage((uiRecord.copyFailed as string | undefined) ?? "Copy failed", "error");
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

  if (!ui) return null;

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
          <div
            className="mb-4 flex flex-wrap gap-2"
            role="tablist"
            aria-label={(uiRecord.tabModeAriaLabel as string | undefined) ?? "Calculator mode"}
          >
            {tabBtn("basic", tabs.basic ?? "Basic Percentage", "basic-panel", "tab-basic")}
            {tabBtn("change", tabs.change ?? "Percentage Change", "change-panel", "tab-change")}
            {tabBtn("of", tabs.of ?? "Percentage Of", "of-panel", "tab-of")}
            {tabBtn("after", tabs.after ?? "Value After Change", "after-panel", "tab-after")}
          </div>

          {tab === "basic" && (
            <div id="basic-panel" role="tabpanel" aria-labelledby="tab-basic">
              <p className="mb-3 text-sm text-slate-500">{tabIntro.basic}</p>
              <div className="space-y-4">
                <div>
                  <label htmlFor="percentage" className="mb-1 block text-sm text-slate-400">
                    {labels.percentage ?? "Percentage (%)"}
                  </label>
                  <NumberInputWithStepper
                    id="percentage"
                    value={percentage}
                    onChange={setPercentage}
                    placeholder={placeholders.percentage ?? "Enter percentage"}
                    step={0.1}
                    aria-label={labels.percentage ?? "Percentage"}
                    {...inputProps}
                  />
                </div>
                <div>
                  <label htmlFor="number" className="mb-1 block text-sm text-slate-400">
                    {labels.number ?? "Number"}
                  </label>
                  <NumberInputWithStepper
                    id="number"
                    value={number}
                    onChange={setNumber}
                    placeholder={placeholders.number ?? "Enter number"}
                    step={1}
                    aria-label={labels.number ?? "Number"}
                    {...inputProps}
                  />
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <button type="button" className={btnCls} onClick={resetBasic}>
                  {(uiRecord.reset as string | undefined) ?? "Reset"}
                </button>
                <button type="button" className={btnCls} onClick={useSampleBasic}>
                  {(uiRecord.useSampleData as string | undefined) ?? "Use sample data"}
                </button>
              </div>
            </div>
          )}

          {tab === "change" && (
            <div id="change-panel" role="tabpanel" aria-labelledby="tab-change">
              <p className="mb-3 text-sm text-slate-500">{tabIntro.change}</p>
              <div className="space-y-4">
                <div>
                  <label htmlFor="oldValue" className="mb-1 block text-sm text-slate-400">
                    {labels.originalValue ?? "Original Value"}
                  </label>
                  <NumberInputWithStepper
                    id="oldValue"
                    value={oldValue}
                    onChange={setOldValue}
                    placeholder={placeholders.originalValue ?? "Enter original value"}
                    step={1}
                    aria-label={labels.originalValue ?? "Original value"}
                    {...inputProps}
                  />
                </div>
                <div>
                  <label htmlFor="newValue" className="mb-1 block text-sm text-slate-400">
                    {labels.newValue ?? "New Value"}
                  </label>
                  <NumberInputWithStepper
                    id="newValue"
                    value={newValue}
                    onChange={setNewValue}
                    placeholder={placeholders.newValue ?? "Enter new value"}
                    step={1}
                    aria-label={labels.newValue ?? "New value"}
                    {...inputProps}
                  />
                </div>
                {changeBlocked && (
                  <p className="text-sm text-amber-400/90" role="note">
                    {(uiRecord.errorOriginalZero as string | undefined) ?? "Original value cannot be zero for percentage change."}
                  </p>
                )}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <button type="button" className={btnCls} onClick={resetChange}>
                  {(uiRecord.reset as string | undefined) ?? "Reset"}
                </button>
                <button type="button" className={btnCls} onClick={useSampleChange}>
                  {(uiRecord.useSampleData as string | undefined) ?? "Use sample data"}
                </button>
              </div>
            </div>
          )}

          {tab === "of" && (
            <div id="of-panel" role="tabpanel" aria-labelledby="tab-of">
              <p className="mb-3 text-sm text-slate-500">{tabIntro.of}</p>
              <div className="space-y-4">
                <div>
                  <label htmlFor="ofBase" className="mb-1 block text-sm text-slate-400">
                    {labels.totalA ?? "Total (A)"}
                  </label>
                  <NumberInputWithStepper
                    id="ofBase"
                    value={ofBase}
                    onChange={setOfBase}
                    placeholder={placeholders.totalA ?? "Enter total"}
                    step={1}
                    aria-label={labels.totalA ?? "Total value A"}
                    {...inputProps}
                  />
                </div>
                <div>
                  <label htmlFor="ofPart" className="mb-1 block text-sm text-slate-400">
                    {labels.partB ?? "Part (B)"}
                  </label>
                  <NumberInputWithStepper
                    id="ofPart"
                    value={ofPart}
                    onChange={setOfPart}
                    placeholder={placeholders.partB ?? "Enter part"}
                    step={1}
                    aria-label={labels.partB ?? "Part value B"}
                    {...inputProps}
                  />
                </div>
                {ofBlocked && (
                  <p className="text-sm text-amber-400/90" role="note">
                    {(uiRecord.errorTotalZero as string | undefined) ?? "Total (A) cannot be zero."}
                  </p>
                )}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <button type="button" className={btnCls} onClick={resetOf}>
                  {(uiRecord.reset as string | undefined) ?? "Reset"}
                </button>
                <button type="button" className={btnCls} onClick={useSampleOf}>
                  {(uiRecord.useSampleData as string | undefined) ?? "Use sample data"}
                </button>
              </div>
            </div>
          )}

          {tab === "after" && (
            <div id="after-panel" role="tabpanel" aria-labelledby="tab-after">
              <p className="mb-3 text-sm text-slate-500">{tabIntro.after}</p>
              <div className="space-y-4">
                <div>
                  <label htmlFor="afterStart" className="mb-1 block text-sm text-slate-400">
                    {labels.startingValue ?? "Starting Value"}
                  </label>
                  <NumberInputWithStepper
                    id="afterStart"
                    value={afterStart}
                    onChange={setAfterStart}
                    placeholder={placeholders.startingValue ?? "Enter starting value"}
                    step={1}
                    aria-label={labels.startingValue ?? "Starting value"}
                    {...inputProps}
                  />
                </div>
                <div>
                  <label htmlFor="afterPercent" className="mb-1 block text-sm text-slate-400">
                    {labels.changePercent ?? "Change (%)"}
                  </label>
                  <NumberInputWithStepper
                    id="afterPercent"
                    value={afterPercent}
                    onChange={setAfterPercent}
                    placeholder={placeholders.changePercent ?? "e.g. 20 or -10"}
                    step={0.1}
                    aria-label={labels.changePercent ?? "Percentage change"}
                    {...inputProps}
                  />
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <button type="button" className={btnCls} onClick={resetAfter}>
                  {(uiRecord.reset as string | undefined) ?? "Reset"}
                </button>
                <button type="button" className={btnCls} onClick={useSampleAfter}>
                  {(uiRecord.useSampleData as string | undefined) ?? "Use sample data"}
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
                {(uiRecord.result as string | undefined) ?? "Result"}
              </p>
              <p className="mt-1 text-2xl font-semibold text-slate-100">{resultDisplay}</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-400 sm:text-sm">{resultDetail}</p>
              <button
                type="button"
                onClick={copyResults}
                className="mt-3 rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-sm text-slate-100 transition-colors hover:bg-slate-600 min-h-[2.5rem] touch-manipulation"
                aria-label={(uiRecord.copyResultAriaLabel as string | undefined) ?? "Copy result to clipboard"}
              >
                {(uiRecord.copyResults as string | undefined) ?? "Copy results"}
              </button>
            </div>
          )}
        </div>

        <aside
          className="w-full shrink-0 rounded-xl border border-border bg-surface p-4 lg:w-72"
          aria-labelledby="history-heading"
        >
          <h2 id="history-heading" className="mb-3 text-sm font-semibold text-slate-200">
            {(uiRecord.recentCalculations as string | undefined) ?? "Recent calculations"}
          </h2>
          <p className="mb-3 text-xs text-slate-500">
            {((uiRecord.historyHint as string | undefined) ?? `Up to ${HISTORY_LIMIT} items stored on this device.`)}{" "}
            {(uiRecord.historyClickHint as string | undefined) ?? "Click an entry to restore inputs."}
          </p>
          {history.length === 0 ? (
            <p className="text-sm text-slate-500">
              {(uiRecord.historyEmpty as string | undefined) ?? "No history yet. Enter values to see results here."}
            </p>
          ) : (
            <ul className="max-h-[360px] space-y-2 overflow-y-auto pr-1 scrollbar-thin">
              {history.map((item) => {
                const localized = compute(item.tab, item.inputs, resultTemplates);
                const histDisplay = localized.resultDisplay ?? item.resultDisplay;
                const histDetail = localized.resultDetail ?? item.resultDetail;

                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => applyHistoryEntry(item)}
                      className="w-full rounded-lg border border-slate-600/80 bg-slate-800/40 p-3 text-left text-sm transition-colors hover:border-slate-500 hover:bg-slate-800/70 touch-manipulation"
                    >
                      <span className="block text-xs font-medium uppercase tracking-wide text-slate-500">
                        {item.tab === "basic" && (tabs.basic ?? "Basic")}
                        {item.tab === "change" && (tabs.change ?? "Change")}
                        {item.tab === "of" && (tabs.of ?? "Percentage Of")}
                        {item.tab === "after" && (tabs.after ?? "After Change")}
                      </span>
                      <span className="mt-1 block font-semibold text-slate-100">{histDisplay}</span>
                      <span className="mt-0.5 line-clamp-2 block text-xs text-slate-400">{histDetail}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </aside>
      </div>
    </div>
  );
}
