"use client";

import { useState, useCallback, useRef, useEffect, useMemo } from "react";

type Format = "dec" | "hex" | "bin";
type Direction = "text-to-ascii" | "ascii-to-text";
type TableRange = "printable" | "extended";

/** C1 control character names (Unicode 128–159) – displayed instead of replacement char */
const C1_NAMES: Record<number, string> = {
  128: "PADDING CHARACTER",
  129: "HIGH OCTET PRESET",
  130: "BREAK PERMITTED HERE",
  131: "NO BREAK HERE",
  132: "INDEX",
  133: "NEXT LINE",
  134: "START OF SELECTED AREA",
  135: "END OF SELECTED AREA",
  136: "CHARACTER TABULATION SET",
  137: "CHARACTER TABULATION WITH JUSTIFICATION",
  138: "LINE TABULATION SET",
  139: "PARTIAL LINE FORWARD",
  140: "PARTIAL LINE BACKWARD",
  141: "REVERSE LINE FEED",
  142: "SINGLE SHIFT TWO",
  143: "SINGLE SHIFT THREE",
  144: "DEVICE CONTROL STRING",
  145: "PRIVATE USE ONE",
  146: "PRIVATE USE TWO",
  147: "SET TRANSMIT STATE",
  148: "CANCEL CHARACTER",
  149: "MESSAGE WAITING",
  150: "START OF GUARDED AREA",
  151: "END OF GUARDED AREA",
  152: "START OF STRING",
  153: "SINGLE GRAPHIC CHARACTER INTRODUCER",
  154: "SINGLE CHARACTER INTRODUCER",
  155: "OPERATING SYSTEM COMMAND",
  156: "PRIVACY MESSAGE",
  157: "APPLICATION PROGRAM COMMAND",
};

function calculateTextSize(text: string): string {
  const bytes = new TextEncoder().encode(text).length;
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function parseAsciiToText(input: string, format: Format): { result: string; error: string | null } {
  const tokens = input.split(/[\s,]+/).filter(Boolean);
  if (tokens.length === 0) return { result: "", error: null };

  const codes: number[] = [];
  for (const token of tokens) {
    let code: number;
    try {
      if (format === "dec") {
        code = parseInt(token, 10);
      } else if (format === "hex") {
        const cleaned = token.toLowerCase().startsWith("0x") ? token.slice(2) : token;
        code = parseInt(cleaned, 16);
      } else {
        const cleaned = token.toLowerCase().startsWith("0b") ? token.slice(2) : token;
        code = parseInt(cleaned, 2);
      }
      if (isNaN(code) || code < 0 || code > 65535) continue;
      codes.push(code);
    } catch {
      continue;
    }
  }
  return { result: String.fromCharCode(...codes), error: null };
}

export default function ASCIIConverter() {
  const [direction, setDirection] = useState<Direction>("text-to-ascii");
  const [text, setText] = useState("");
  const [asciiInput, setAsciiInput] = useState("");
  const [format, setFormat] = useState<Format>("dec");
  const [tableRange, setTableRange] = useState<TableRange>("printable");
  const [toast, setToast] = useState<{ text: string; type: "success" | "error" } | null>(null);
  const messageTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const showToast = useCallback((msg: string, type: "success" | "error" = "success") => {
    if (messageTimerRef.current) {
      clearTimeout(messageTimerRef.current);
      messageTimerRef.current = null;
    }
    setToast({ text: msg, type });
    messageTimerRef.current = setTimeout(() => {
      setToast(null);
      messageTimerRef.current = null;
    }, 3000);
  }, []);

  useEffect(() => {
    return () => {
      if (messageTimerRef.current) {
        clearTimeout(messageTimerRef.current);
      }
    };
  }, []);

  const convertTextToAscii = useCallback(() => {
    const result: string[] = [];
    for (let i = 0; i < text.length; i++) {
      const code = text.charCodeAt(i);
      switch (format) {
        case "dec":
          result.push(String(code));
          break;
        case "hex":
          result.push("0x" + code.toString(16).toUpperCase());
          break;
        case "bin":
          result.push("0b" + code.toString(2).padStart(8, "0"));
          break;
      }
    }
    return result.join(" ");
  }, [text, format]);

  const asciiOutput = direction === "text-to-ascii" ? convertTextToAscii() : "";
  const textOutput = direction === "ascii-to-text" ? parseAsciiToText(asciiInput, format).result : "";

  const copyText = useCallback(
    (target: "input" | "output") => {
      let value: string;
      if (direction === "text-to-ascii") {
        value = target === "input" ? text : asciiOutput;
      } else {
        value = target === "input" ? asciiInput : textOutput;
      }
      if (!value) return;
      navigator.clipboard
        .writeText(value)
        .then(() => showToast("Text copied to clipboard!", "success"))
        .catch(() => showToast("Failed to copy text.", "error"));
    },
    [direction, text, asciiInput, asciiOutput, textOutput, showToast]
  );

  const loadFromFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        if (typeof result === "string") {
          if (direction === "text-to-ascii") {
            setText(result);
          } else {
            setAsciiInput(result);
          }
          showToast(`Loaded: ${file.name}`, "success");
        } else {
          showToast("Failed to read file (binary)", "error");
        }
      };
      reader.onerror = () => showToast("Failed to read file", "error");
      reader.readAsText(file, "UTF-8");
      e.target.value = "";
    },
    [direction, showToast]
  );

  const clearAll = useCallback(() => {
    setText("");
    setAsciiInput("");
    showToast("Cleared", "success");
  }, [showToast]);

  const charCount = text.length;
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const textSize = calculateTextSize(text);

  const asciiTableRows = useMemo(() => {
    const [start, end] = tableRange === "printable" ? [32, 126] : [128, 255];
    const rows = [];
    for (let i = start; i <= end; i++) {
      const isC1 = tableRange === "extended" && i >= 128 && i <= 159;
      const char = isC1 ? (C1_NAMES[i] ?? String.fromCharCode(i)) : String.fromCharCode(i);
      rows.push({
        char,
        isC1,
        dec: i,
        hex: "0x" + i.toString(16).toUpperCase(),
        bin: "0b" + i.toString(2).padStart(8, "0"),
      });
    }
    return rows;
  }, [tableRange]);

  const btnBase =
    "rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900";
  const btnActive = "border border-blue-500 bg-blue-500/20 text-blue-300";
  const btnInactive = "border border-border text-slate-400 hover:border-slate-600 hover:text-slate-200";

  return (
    <div className="space-y-6" role="main" aria-label="ASCII Code Converter">
      <div className="flex gap-2" role="group" aria-label="Conversion direction">
        <button
          type="button"
          onClick={() => setDirection("text-to-ascii")}
          aria-pressed={direction === "text-to-ascii"}
          className={`${btnBase} ${direction === "text-to-ascii" ? btnActive : btnInactive}`}
        >
          Text → ASCII
        </button>
        <button
          type="button"
          onClick={() => setDirection("ascii-to-text")}
          aria-pressed={direction === "ascii-to-text"}
          className={`${btnBase} ${direction === "ascii-to-text" ? btnActive : btnInactive}`}
        >
          ASCII → Text
        </button>
      </div>

      {direction === "text-to-ascii" ? (
        <>
          <div className="rounded-xl border border-border bg-surface p-6">
            <h2 id="text-input-label" className="mb-3 text-lg font-semibold text-slate-100">Text Input</h2>
            <textarea
              id="text-input"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text to convert to ASCII codes"
              aria-labelledby="text-input-label"
              aria-describedby="text-stats"
              className="scrollbar-thin max-h-[50vh] w-full resize-none overflow-y-auto rounded-lg border border-border bg-slate-950 px-4 py-3 pr-2 font-mono text-sm text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              rows={4}
            />
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <input ref={fileInputRef} type="file" accept=".txt,text/plain" className="sr-only" onChange={loadFromFile} aria-label="Load text from file" />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                aria-label="Load text from TXT file"
                className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-700 hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                </svg>
                Load TXT
              </button>
            </div>
            <div id="text-stats" className="mt-3 flex flex-wrap items-center justify-between gap-4 rounded-lg bg-slate-950/80 px-4 py-2 text-sm">
              <span className="text-slate-400">
                Characters: <span className="font-medium text-slate-200">{charCount}</span>
              </span>
              <span className="text-slate-400">
                Words: <span className="font-medium text-slate-200">{wordCount}</span>
              </span>
              <span className="text-slate-400">
                Size: <span className="font-medium text-slate-200">{textSize}</span>
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => copyText("input")}
                  disabled={!text}
                  aria-label="Copy input text"
                  className="rounded-lg border border-border px-4 py-2 text-sm text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-700 hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-border disabled:hover:bg-transparent"
                >
                  Copy
                </button>
                <button
                  type="button"
                  onClick={clearAll}
                  aria-label="Clear all input"
                  className="rounded-lg border border-border px-4 py-2 text-sm text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-700 hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-4">
              <h2 id="ascii-codes-label" className="text-lg font-semibold text-slate-100">ASCII Codes</h2>
              <div className="flex gap-2" role="group" aria-label="Output format">
                {(["dec", "hex", "bin"] as const).map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFormat(f)}
                    aria-pressed={format === f}
                    className={`${btnBase} ${format === f ? btnActive : btnInactive}`}
                  >
                    {f === "dec" ? "Decimal" : f === "hex" ? "Hexadecimal" : "Binary"}
                  </button>
                ))}
              </div>
            </div>
            <textarea
              id="ascii-output"
              value={asciiOutput}
              readOnly
              aria-labelledby="ascii-codes-label"
              aria-label="ASCII codes output"
              className="scrollbar-thin max-h-[50vh] w-full resize-none overflow-y-auto rounded-lg border border-border bg-slate-950 px-4 py-3 pr-2 font-mono text-sm text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              rows={4}
            />
            <div className="mt-3 flex gap-2">
              <button
                type="button"
                onClick={() => copyText("output")}
                disabled={!asciiOutput}
                aria-label="Copy ASCII codes output"
                className="rounded-lg border border-border px-4 py-2 text-sm text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-700 hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-border disabled:hover:bg-transparent"
              >
                Copy
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="rounded-xl border border-border bg-surface p-6">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-4">
              <h2 id="ascii-input-label" className="text-lg font-semibold text-slate-100">ASCII Codes Input</h2>
              <div className="flex gap-2" role="group" aria-label="Input format">
                {(["dec", "hex", "bin"] as const).map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFormat(f)}
                    aria-pressed={format === f}
                    className={`${btnBase} ${format === f ? btnActive : btnInactive}`}
                  >
                    {f === "dec" ? "Decimal" : f === "hex" ? "Hexadecimal" : "Binary"}
                  </button>
                ))}
              </div>
            </div>
            <textarea
              id="ascii-input"
              value={asciiInput}
              onChange={(e) => setAsciiInput(e.target.value)}
              aria-labelledby="ascii-input-label"
              placeholder={`Enter ASCII codes (space or comma separated). Example: ${format === "dec" ? "72 101 108 108 111" : format === "hex" ? "0x48 0x65 0x6C 0x6C 0x6F" : "0b01001000 0b01100101 0b01101100 0b01101100 0b01101111"}`}
              className="scrollbar-thin max-h-[50vh] w-full resize-none overflow-y-auto rounded-lg border border-border bg-slate-950 px-4 py-3 pr-2 font-mono text-sm text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              rows={4}
            />
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <input ref={fileInputRef} type="file" accept=".txt,text/plain" className="sr-only" onChange={loadFromFile} aria-label="Load ASCII codes from file" />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                aria-label="Load ASCII codes from TXT file"
                className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-700 hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                </svg>
                Load TXT
              </button>
              <button
                type="button"
                onClick={() => copyText("input")}
                disabled={!asciiInput}
                aria-label="Copy ASCII codes input"
                className="rounded-lg border border-border px-4 py-2 text-sm text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-700 hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-border disabled:hover:bg-transparent"
              >
                Copy
              </button>
              <button
                type="button"
                onClick={clearAll}
                aria-label="Clear all input"
                className="rounded-lg border border-border px-4 py-2 text-sm text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-700 hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                Clear
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6">
            <h2 id="decoded-label" className="mb-3 text-lg font-semibold text-slate-100">Decoded Text</h2>
            <textarea
              id="decoded-output"
              value={textOutput}
              readOnly
              aria-labelledby="decoded-label"
              aria-label="Decoded text output"
              className="scrollbar-thin max-h-[50vh] w-full resize-none overflow-y-auto rounded-lg border border-border bg-slate-950 px-4 py-3 pr-2 font-mono text-sm text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              rows={4}
            />
            <div className="mt-3 flex gap-2">
              <button
                type="button"
                onClick={() => copyText("output")}
                disabled={!textOutput}
                aria-label="Copy decoded text output"
                className="rounded-lg border border-border px-4 py-2 text-sm text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-700 hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-border disabled:hover:bg-transparent"
              >
                Copy
              </button>
            </div>
          </div>
        </>
      )}

      <div className="rounded-xl border border-border bg-surface p-6">
        <div className="mb-3 flex items-center justify-between gap-4">
          <h2 id="ascii-table-label" className="text-lg font-semibold text-slate-100">ASCII Table</h2>
          <div className="flex gap-2" role="group" aria-label="Table range">
            <button
              type="button"
              onClick={() => setTableRange("printable")}
              aria-pressed={tableRange === "printable"}
              className={`${btnBase} ${tableRange === "printable" ? btnActive : btnInactive}`}
            >
              Printable (32-126)
            </button>
            <button
              type="button"
              onClick={() => setTableRange("extended")}
              aria-pressed={tableRange === "extended"}
              className={`${btnBase} ${tableRange === "extended" ? btnActive : btnInactive}`}
            >
              Extended (128-255)
            </button>
          </div>
        </div>
        <div className="scrollbar-thin max-h-[50vh] overflow-auto" role="region" aria-labelledby="ascii-table-label">
          <table className="w-full table-fixed border-collapse text-sm" aria-label="ASCII character code reference table">
            <caption className="sr-only">
              {tableRange === "printable"
                ? "Printable ASCII characters (32–126) with decimal, hexadecimal, and binary codes"
                : "Extended ASCII characters (128–255) with decimal, hexadecimal, and binary codes"}
            </caption>
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="w-1/4 px-4 py-3 text-left font-medium text-slate-300">Char</th>
                <th scope="col" className="w-1/4 px-4 py-3 text-center font-medium text-slate-300">Dec</th>
                <th scope="col" className="w-1/4 px-4 py-3 text-center font-medium text-slate-300">Hex</th>
                <th scope="col" className="w-1/4 px-4 py-3 text-center font-medium text-slate-300">Bin</th>
              </tr>
            </thead>
            <tbody>
              {asciiTableRows.map((row) => (
                <tr key={row.dec} className="border-b border-border/50 transition-colors hover:bg-slate-800/30">
                  <td
                    className={`w-1/4 px-4 py-2.5 font-mono text-slate-200 ${row.isC1 ? "text-xs leading-snug text-slate-400" : ""}`}
                  >
                    {row.char}
                  </td>
                  <td className="w-1/4 px-4 py-2.5 text-center font-mono text-slate-400 tabular-nums">{row.dec}</td>
                  <td className="w-1/4 px-4 py-2.5 text-center font-mono text-slate-400 tabular-nums">{row.hex}</td>
                  <td className="w-1/4 px-4 py-2.5 text-center font-mono text-slate-400 tabular-nums">{row.bin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {toast && (
        <div
          className={`fixed right-4 top-4 z-50 rounded-lg px-4 py-2 text-sm font-medium text-white shadow-lg ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
          role="alert"
          aria-live="polite"
          aria-atomic="true"
        >
          {toast.text}
        </div>
      )}
    </div>
  );
}
