"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import NumberInputWithStepper from "@/components/NumberInputWithStepper";

type Tab = "basic" | "change";

const SAMPLE_BASIC = { percentage: "20", number: "100" };
const SAMPLE_CHANGE = { oldValue: "80", newValue: "100" };

export default function PercentageCalculator() {
  const [tab, setTab] = useState<Tab>("basic");
  const [percentage, setPercentage] = useState("");
  const [number, setNumber] = useState("");
  const [oldValue, setOldValue] = useState("");
  const [newValue, setNewValue] = useState("");
  const [result, setResult] = useState<string | null>(null);
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

  const runBasic = useCallback(() => {
    const p = parseFloat(percentage);
    const n = parseFloat(number);
    if (percentage.trim() === "" || number.trim() === "") {
      setResult(null);
      return;
    }
    if (Number.isNaN(p) || Number.isNaN(n)) {
      setResult(null);
      showMessage("Please enter valid numbers", "error");
      return;
    }
    if (!Number.isFinite(p) || !Number.isFinite(n)) {
      setResult(null);
      return;
    }
    const res = (p / 100) * n;
    setResult(res.toFixed(2));
  }, [percentage, number, showMessage]);

  const runChange = useCallback(() => {
    const old = parseFloat(oldValue);
    const newVal = parseFloat(newValue);
    if (oldValue.trim() === "" || newValue.trim() === "") {
      setResult(null);
      return;
    }
    if (Number.isNaN(old) || Number.isNaN(newVal)) {
      setResult(null);
      showMessage("Please enter valid numbers", "error");
      return;
    }
    if (!Number.isFinite(old) || !Number.isFinite(newVal)) {
      setResult(null);
      return;
    }
    if (old === 0) {
      setResult(null);
      showMessage("Original value cannot be zero", "error");
      return;
    }
    const change = ((newVal - old) / old) * 100;
    setResult(change.toFixed(2) + "%");
  }, [oldValue, newValue, showMessage]);

  useEffect(() => {
    if (tab === "basic") {
      const tid = setTimeout(runBasic, 300);
      return () => clearTimeout(tid);
    }
    const tid = setTimeout(runChange, 300);
    return () => clearTimeout(tid);
  }, [tab, runBasic, runChange]);

  const resetBasic = () => {
    setPercentage("");
    setNumber("");
    setResult(null);
    showMessage("Calculator has been reset");
  };

  const resetChange = () => {
    setOldValue("");
    setNewValue("");
    setResult(null);
    showMessage("Calculator has been reset");
  };

  const switchTab = (t: Tab) => {
    setTab(t);
    setResult(null);
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

  const copyResults = async () => {
    if (result === null) return;
    const text = tab === "basic"
      ? `${percentage}% of ${number} = ${result}`
      : `Percentage change: ${oldValue} → ${newValue} = ${result}`;
    try {
      await navigator.clipboard.writeText(text);
      showMessage("Copied to clipboard");
    } catch {
      showMessage("Copy failed", "error");
    }
  };

  const btnCls =
    "rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-slate-100 transition-colors hover:bg-slate-600 min-h-[2.5rem] touch-manipulation";
  const btnPrimary =
    "rounded-lg border border-blue-600 bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-500 min-h-[2.5rem] touch-manipulation";
  return (
    <div className="mx-auto max-w-xl">
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

      <div className="rounded-xl border border-border bg-surface p-6">
        <div
          className="mb-4 flex gap-2"
          role="tablist"
          aria-label="Calculator mode"
        >
          <button
            type="button"
            role="tab"
            aria-selected={tab === "basic"}
            aria-controls="basic-panel"
            id="tab-basic"
            onClick={() => switchTab("basic")}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors min-h-[2.5rem] touch-manipulation ${
              tab === "basic"
                ? "bg-slate-700 text-slate-100 ring-1 ring-slate-600"
                : "bg-slate-800/50 text-slate-400 hover:bg-slate-700 hover:text-slate-200"
            }`}
          >
            Basic Percentage
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === "change"}
            aria-controls="change-panel"
            id="tab-change"
            onClick={() => switchTab("change")}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors min-h-[2.5rem] touch-manipulation ${
              tab === "change"
                ? "bg-slate-700 text-slate-100 ring-1 ring-slate-600"
                : "bg-slate-800/50 text-slate-400 hover:bg-slate-700 hover:text-slate-200"
            }`}
          >
            Percentage Change
          </button>
        </div>

        {tab === "basic" && (
          <div id="basic-panel" role="tabpanel" aria-labelledby="tab-basic">
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
                  onKeyDown={(e) => e.key === "Enter" && runBasic()}
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
                  onKeyDown={(e) => e.key === "Enter" && runBasic()}
                />
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <button type="button" className={btnPrimary} onClick={runBasic}>
                Calculate
              </button>
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
                  onKeyDown={(e) => e.key === "Enter" && runChange()}
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
                  onKeyDown={(e) => e.key === "Enter" && runChange()}
                />
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <button type="button" className={btnPrimary} onClick={runChange}>
                Calculate
              </button>
              <button type="button" className={btnCls} onClick={resetChange}>
                Reset
              </button>
              <button type="button" className={btnCls} onClick={useSampleChange}>
                Use sample data
              </button>
            </div>
          </div>
        )}

        {result !== null && (
          <div
            role="region"
            aria-labelledby="percentage-result-label"
            id="percentage-result"
            className="mt-6 rounded-lg border border-slate-600 bg-slate-800/50 p-4 text-center"
          >
            <p id="percentage-result-label" className="text-sm text-slate-500">
              Result
            </p>
            <p className="mt-1 text-2xl font-semibold text-slate-100">{result}</p>
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
    </div>
  );
}
