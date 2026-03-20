"use client";

import { useState, useEffect, useCallback } from "react";

export default function Calculator() {
  const [currentOperand, setCurrentOperand] = useState("0");
  const [previousOperand, setPreviousOperand] = useState("");
  const [operation, setOperation] = useState<"add" | "subtract" | "multiply" | "divide" | undefined>();
  const [shouldResetScreen, setShouldResetScreen] = useState(false);
  const [memory, setMemory] = useState(0);
  const [hasMemory, setHasMemory] = useState(false);

  /** 결과 저장용: 콤마 없이, 부동소수점 노이즈 제거 */
  const formatForStorage = useCallback((num: number): string => {
    if (!Number.isFinite(num)) return "Error";
    const rounded = Math.round(num * 1e10) / 1e10;
    return rounded.toString();
  }, []);

  /** 표시용: 천 단위 구분 기호 적용 (저장값에는 콤마 없음) */
  const formatDisplay = useCallback((s: string) => {
    if (s === "Error" || s === "" || s === "-") return s;
    const isNeg = s.startsWith("-");
    const s2 = (isNeg ? s.slice(1) : s).replace(/,/g, "");
    const [intPart, decPart] = s2.split(".");
    if (intPart === undefined || !/^\d*$/.test(intPart)) return s;
    const formatted = intPart ? intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "0";
    return (isNeg ? "-" : "") + (decPart != null ? `${formatted}.${decPart}` : formatted);
  }, []);

  const parseOperand = useCallback((s: string) => parseFloat(s.replace(/,/g, "")) || 0, []);
  const reset = useCallback(() => {
    setCurrentOperand("0");
    setPreviousOperand("");
    setOperation(undefined);
    setShouldResetScreen(false);
  }, []);

  const appendNumber = (num: string) => {
    setCurrentOperand((prev) => {
      if (shouldResetScreen) {
        setShouldResetScreen(false);
        return num === "." ? "0." : num;
      }
      if (num === "." && prev.includes(".")) return prev;
      if (prev === "0" && num !== ".") return num;
      return prev + num;
    });
  };

  const handleOperation = (op: "add" | "subtract" | "multiply" | "divide") => {
    const current = parseOperand(currentOperand);
    if (operation && !shouldResetScreen && previousOperand) {
      const prev = parseOperand(previousOperand);
      let result = 0;
      switch (operation) {
        case "add": result = prev + current; break;
        case "subtract": result = prev - current; break;
        case "multiply": result = prev * current; break;
        case "divide": result = current === 0 ? NaN : prev / current; break;
      }
      if (isNaN(result)) {
        setCurrentOperand("Error");
        setShouldResetScreen(true);
        return;
      }
      const resultStr = formatForStorage(result);
      setCurrentOperand(resultStr);
      setPreviousOperand(resultStr);
    } else {
      setPreviousOperand(currentOperand);
    }
    setOperation(op);
    setShouldResetScreen(true);
  };

  const calculate = () => {
    if (!operation || previousOperand === "") return;
    const prev = parseOperand(previousOperand);
    const current = parseOperand(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    let result = 0;
    switch (operation) {
      case "add": result = prev + current; break;
      case "subtract": result = prev - current; break;
      case "multiply": result = prev * current; break;
      case "divide":
        if (current === 0) {
          setCurrentOperand("Error");
          setShouldResetScreen(true);
          setOperation(undefined);
          setPreviousOperand("");
          return;
        }
        result = prev / current;
        break;
    }
    setCurrentOperand(formatForStorage(result));
    setOperation(undefined);
    setPreviousOperand("");
    setShouldResetScreen(true);
  };

  const deleteLast = () => {
    if (shouldResetScreen) return;
    setCurrentOperand((prev) => {
      const cleaned = prev.replace(/,/g, "");
      const next = cleaned.slice(0, -1);
      return next === "" ? "0" : next;
    });
  };

  const negate = () => {
    const current = parseOperand(currentOperand);
    if (current !== 0) setCurrentOperand(formatForStorage(-current));
  };

  const percent = () => {
    setCurrentOperand(formatForStorage(parseOperand(currentOperand) / 100));
  };

  const sqrt = () => {
    const current = parseOperand(currentOperand);
    if (current < 0) {
      setCurrentOperand("Error");
      setShouldResetScreen(true);
      return;
    }
    setCurrentOperand(formatForStorage(Math.sqrt(current)));
  };

  const square = () => {
    setCurrentOperand(formatForStorage(parseOperand(currentOperand) ** 2));
  };

  const reciprocal = () => {
    const current = parseOperand(currentOperand);
    if (current === 0) {
      setCurrentOperand("Error");
      setShouldResetScreen(true);
      return;
    }
    setCurrentOperand(formatForStorage(1 / current));
  };

  const memoryAdd = () => {
    setMemory((m) => m + parseOperand(currentOperand));
    setHasMemory(true);
    setShouldResetScreen(true);
  };
  const memorySubtract = () => {
    setMemory((m) => m - parseOperand(currentOperand));
    setHasMemory(true);
    setShouldResetScreen(true);
  };
  const memoryRecall = () => {
    if (hasMemory) setCurrentOperand(formatForStorage(memory));
  };
  const memoryStore = () => {
    setMemory(parseOperand(currentOperand));
    setHasMemory(true);
    setShouldResetScreen(true);
  };
  const memoryClear = () => {
    setMemory(0);
    setHasMemory(false);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key >= "0" && e.key <= "9" || e.key === ".") {
        e.preventDefault();
        appendNumber(e.key);
        return;
      }
      const map: Record<string, () => void> = {
        Enter: calculate,
        "=": calculate,
        "+": () => handleOperation("add"),
        "-": () => handleOperation("subtract"),
        "*": () => handleOperation("multiply"),
        "/": () => handleOperation("divide"),
        Backspace: deleteLast,
        Delete: reset,
        Escape: reset,
      };
      if (map[e.key]) {
        e.preventDefault();
        map[e.key]();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [currentOperand, previousOperand, operation, shouldResetScreen]);

  const btnBase = "rounded-lg border py-2 min-h-[2.5rem] transition-colors";
  const btn =
    `${btnBase} border-slate-600 bg-slate-700/80 text-slate-100 hover:bg-slate-600 active:bg-slate-800`;
  const btnOperator = `${btnBase} border-slate-600 bg-slate-700/80 text-blue-400 hover:bg-slate-600 hover:text-blue-300 active:bg-slate-800`;
  const btnEquals = `${btnBase} border-blue-600 bg-blue-600/80 text-white hover:bg-blue-500 active:bg-blue-700`;
  const btnFunction = `${btnBase} border-slate-600 bg-slate-800/80 text-slate-300 hover:bg-slate-600 active:bg-slate-800`;
  const btnMemory = "rounded-lg border border-slate-600 bg-slate-800/80 py-2 min-h-[2.5rem] text-xs text-slate-400 transition-colors hover:bg-slate-600 hover:text-slate-300 active:bg-slate-800";

  return (
    <div className="mx-auto max-w-sm">
      <div className="rounded-xl border border-border bg-surface p-4">
        <div className="mb-4 rounded-lg border border-slate-600 bg-slate-900/50 p-4 text-right">
          <div className="flex min-h-[1.25rem] items-center justify-between text-sm text-slate-500">
            <span>{hasMemory && <span className="rounded bg-slate-600 px-1.5 py-0.5 font-medium text-slate-300" title={`Memory: ${formatDisplay(formatForStorage(memory))}`}>M</span>}</span>
            <span>
            {operation && previousOperand && (
              <>
                {formatDisplay(previousOperand)}{" "}
                {operation === "add" ? "+" : operation === "subtract" ? "−" : operation === "multiply" ? "×" : "÷"}
              </>
            )}
            </span>
          </div>
          <div className="scrollbar-thin overflow-x-auto text-2xl font-semibold text-slate-100">
            {formatDisplay(currentOperand)}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {/* Row 1: Memory - 5 narrower buttons, same total width as rows below */}
          <div className="col-span-4 flex gap-2">
            {(["mc", "mr", "m+", "m-", "ms"] as const).map((a) => (
              <button key={a} type="button" className={`${btnMemory} min-w-0 flex-1`} onClick={{ mc: memoryClear, mr: memoryRecall, "m+": memoryAdd, "m-": memorySubtract, ms: memoryStore }[a]}>
                {a.toUpperCase()}
              </button>
            ))}
          </div>
          {/* Rows 2–7: 3 content + 1 operator */}
            <button type="button" className={btnFunction} onClick={percent}>%</button>
            <button type="button" className={btnFunction} onClick={() => setCurrentOperand("0")}>CE</button>
            <button type="button" className={btnFunction} onClick={reset}>C</button>
            <button type="button" className={btnFunction} onClick={deleteLast}>⌫</button>
            <button type="button" className={btnFunction} onClick={reciprocal}>1/x</button>
            <button type="button" className={btnFunction} onClick={square}>x²</button>
            <button type="button" className={btnFunction} onClick={sqrt}>²√x</button>
            <button type="button" className={btnOperator} onClick={() => handleOperation("divide")}>÷</button>
            {[7, 8, 9].map((n) => (
              <button key={n} type="button" className={btn} onClick={() => appendNumber(String(n))}>{n}</button>
            ))}
            <button type="button" className={btnOperator} onClick={() => handleOperation("multiply")}>×</button>
            {[4, 5, 6].map((n) => (
              <button key={n} type="button" className={btn} onClick={() => appendNumber(String(n))}>{n}</button>
            ))}
            <button type="button" className={btnOperator} onClick={() => handleOperation("subtract")}>−</button>
            {[1, 2, 3].map((n) => (
              <button key={n} type="button" className={btn} onClick={() => appendNumber(String(n))}>{n}</button>
            ))}
            <button type="button" className={btnOperator} onClick={() => handleOperation("add")}>+</button>
            <button type="button" className={btnFunction} onClick={negate}>±</button>
            <button type="button" className={btn} onClick={() => appendNumber("0")}>0</button>
            <button type="button" className={btn} onClick={() => appendNumber(".")}>.</button>
            <button type="button" className={btnEquals} onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}
