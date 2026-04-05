"use client";

import { useRef, useLayoutEffect } from "react";
import {
  sanitizeNumericInput,
  formatWithCommas,
  rawPrefixLengthFromDisplay,
  displayCursorFromRawPrefix,
} from "@/lib/numberFormat";

interface NumberInputWithStepperProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
  "aria-label"?: string;
  className?: string;
  inputClassName?: string;
  disabled?: boolean;
  /** When true, shows thousands separators while typing (text input + parsing). */
  commaFormat?: boolean;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export default function NumberInputWithStepper({
  id,
  value,
  onChange,
  placeholder,
  min,
  max,
  step = 1,
  "aria-label": ariaLabel,
  className = "",
  inputClassName = "",
  disabled = false,
  commaFormat = false,
  onKeyDown,
  onBlur,
}: NumberInputWithStepperProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const pendingCursorRawPrefix = useRef<number | null>(null);

  const num = parseFloat(value.replace(/,/g, "")) || 0;
  const stepVal = step;

  const adjust = (delta: number) => {
    const next = num + delta;
    const clamped = min != null && max != null
      ? Math.max(min, Math.min(max, next))
      : min != null
        ? Math.max(min, next)
        : max != null
          ? Math.min(max, next)
          : next;
    const formatted =
      stepVal >= 1
        ? Math.round(clamped).toString()
        : clamped.toFixed(String(stepVal).split(".")[1]?.length ?? 1);
    onChange(formatted);
    if (commaFormat && inputRef.current) {
      pendingCursorRawPrefix.current = sanitizeNumericInput(formatted).length;
    }
  };

  const atMin = min != null && num <= min;
  const atMax = max != null && num >= max;

  const displayValue = commaFormat ? formatWithCommas(value) : value;

  useLayoutEffect(() => {
    if (!commaFormat || pendingCursorRawPrefix.current === null) return;
    const el = inputRef.current;
    if (!el) return;
    const len = pendingCursorRawPrefix.current;
    pendingCursorRawPrefix.current = null;
    const pos = displayCursorFromRawPrefix(formatWithCommas(value), len);
    el.setSelectionRange(pos, pos);
  }, [commaFormat, value]);

  const handleCommaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const el = e.target;
    const cursor = el.selectionStart ?? 0;
    const rawPrefix = rawPrefixLengthFromDisplay(el.value, cursor);
    const raw = sanitizeNumericInput(el.value);
    onChange(raw);
    pendingCursorRawPrefix.current = rawPrefix;
  };

  const baseInputCls =
    "w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none";
  const stepperBtnCls =
    "flex min-h-[1.25rem] flex-1 items-center justify-center text-slate-400 transition-all duration-150 ease-out hover:bg-blue-500/20 hover:text-blue-400 active:bg-blue-500/30 active:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-slate-400 touch-manipulation";
  const chevronCls = "w-3.5 h-3.5 text-current stroke-[2.25]";

  return (
    <div className={`flex overflow-hidden rounded-lg border border-slate-600 bg-slate-800 shadow-sm ${disabled ? "opacity-60 pointer-events-none" : ""} ${className}`}>
      <input
        ref={inputRef}
        type={commaFormat ? "text" : "number"}
        id={id}
        inputMode={commaFormat ? "decimal" : undefined}
        value={displayValue}
        onChange={(e) => (commaFormat ? handleCommaChange(e) : onChange(e.target.value))}
        disabled={disabled}
        onBlur={onBlur}
        onKeyDown={(e) => {
          if (e.key === "ArrowUp") {
            e.preventDefault();
            adjust(stepVal);
          } else if (e.key === "ArrowDown") {
            e.preventDefault();
            adjust(-stepVal);
          } else {
            onKeyDown?.(e);
          }
        }}
        placeholder={placeholder}
        min={commaFormat ? undefined : min}
        max={commaFormat ? undefined : max}
        step={commaFormat ? undefined : step}
        aria-label={ariaLabel}
        className={`${baseInputCls} rounded-r-none border-r-0 ${inputClassName}`}
      />
      <div className="flex flex-col border-l border-slate-600 bg-slate-800/60">
        <button
          type="button"
          onClick={() => adjust(stepVal)}
          disabled={atMax || disabled}
          className={`${stepperBtnCls} border-b border-slate-600/80`}
          aria-label="Increase"
          tabIndex={-1}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className={chevronCls}>
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => adjust(-stepVal)}
          disabled={atMin || disabled}
          className={stepperBtnCls}
          aria-label="Decrease"
          tabIndex={-1}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className={chevronCls}>
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    </div>
  );
}
