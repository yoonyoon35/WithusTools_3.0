"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import * as prettier from "prettier/standalone";
import * as babelPlugin from "prettier/plugins/babel";
import * as estreePlugin from "prettier/plugins/estree";
import * as htmlPlugin from "prettier/plugins/html";
import * as postcssPlugin from "prettier/plugins/postcss";

type Language = "javascript" | "html" | "css" | "json";

const btnSecondary =
  "rounded-lg border border-border px-4 py-2 text-sm text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-700 hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-border disabled:hover:bg-transparent";

export default function CodeFormatter() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState<Language>("javascript");
  const [toast, setToast] = useState<{ text: string; type: "success" | "error" } | null>(null);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const showToast = useCallback((msg: string, type: "success" | "error" = "success") => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
      toastTimerRef.current = null;
    }
    setToast({ text: msg, type });
    toastTimerRef.current = setTimeout(() => {
      setToast(null);
      toastTimerRef.current = null;
    }, 3000);
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  const lineCount = code.split("\n").length;
  const charCount = code.length;

  const formatCode = useCallback(async () => {
    const trimmed = code.trim();
    if (!trimmed) {
      showToast("Please enter some code to format", "error");
      return;
    }
    try {
      const lang = language;
      let formatted: string;
      const jsPlugins = [babelPlugin, estreePlugin];
      const opts = { tabWidth: 2, printWidth: 80 };

      switch (lang) {
        case "html":
          formatted = await prettier.format(trimmed, { ...opts, parser: "html", plugins: [htmlPlugin] });
          break;
        case "css":
          formatted = await prettier.format(trimmed, { ...opts, parser: "css", plugins: [postcssPlugin] });
          break;
        case "json":
          formatted = await prettier.format(trimmed, { ...opts, parser: "json", plugins: jsPlugins });
          break;
        default:
          formatted = await prettier.format(trimmed, { ...opts, parser: "babel", plugins: jsPlugins });
      }
      setCode(formatted);
      showToast(`Code formatted as ${lang.toUpperCase()}!`, "success");
    } catch (err) {
      showToast("Error formatting code: " + (err instanceof Error ? err.message : String(err)), "error");
    }
  }, [code, language, showToast]);

  const copyCode = useCallback(() => {
    if (!code.trim()) return;
    navigator.clipboard
      .writeText(code)
      .then(() => showToast("Code copied to clipboard!", "success"))
      .catch(() => showToast("Failed to copy code", "error"));
  }, [code, showToast]);

  const clearCode = useCallback(() => {
    if (code.trim() && window.confirm("Are you sure you want to clear all code?")) {
      setCode("");
      showToast("Code cleared!", "success");
    }
  }, [code, showToast]);

  const loadFromFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        if (typeof result === "string") {
          setCode(result);
          showToast(`Loaded: ${file.name}`, "success");
        } else {
          showToast("Failed to read file (binary)", "error");
        }
      };
      reader.onerror = () => showToast("Failed to read file", "error");
      reader.readAsText(file, "UTF-8");
      e.target.value = "";
    },
    [showToast]
  );

  return (
    <div className="space-y-6" role="main" aria-label="Code Formatter">
      <div className="rounded-xl border border-border bg-surface p-6">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <label htmlFor="language-select" className="text-sm font-medium text-slate-300">
              Language
            </label>
            <select
              id="language-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              aria-label="Select code language"
              className="rounded-lg border border-border bg-slate-950 px-3 py-2 text-sm text-slate-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <option value="javascript">JavaScript</option>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="json">JSON</option>
            </select>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span>{lineCount.toLocaleString()} lines</span>
            <span>{charCount.toLocaleString()} chars</span>
          </div>
        </div>
        <div className="mb-3 flex flex-wrap gap-2">
          <input
            ref={fileInputRef}
            type="file"
            accept=".js,.jsx,.ts,.tsx,.html,.css,.json,.txt,text/*"
            className="hidden"
            aria-label="Load code from file"
            onChange={loadFromFile}
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            aria-label="Load code from file"
            className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-700 hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
            </svg>
            Load File
          </button>
          <button
            type="button"
            onClick={formatCode}
            aria-label="Format code"
            className="rounded-lg border border-blue-500 bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-300 transition-colors hover:bg-blue-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            Format Code
          </button>
          <button type="button" onClick={copyCode} disabled={!code.trim()} aria-label="Copy code" className={btnSecondary}>
            Copy
          </button>
          <button
            type="button"
            onClick={clearCode}
            aria-label="Clear all code"
            className="rounded-lg border border-red-500/50 px-4 py-2 text-sm text-red-400 transition-colors hover:bg-red-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            Clear
          </button>
        </div>
        <textarea
          id="code-input"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          aria-label="Code input"
          placeholder="Paste your code here or start typing..."
          className="scrollbar-thin max-h-[50vh] w-full resize-none overflow-y-auto rounded-lg border border-border bg-slate-950 px-4 py-3 pr-2 font-mono text-sm text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          rows={16}
        />
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
