"use client";

import { useState, useCallback, useRef, useEffect } from "react";

type Mode = "text" | "file";

const btnBase =
  "rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900";
const btnSecondary =
  "rounded-lg border border-border px-4 py-2 text-sm text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-700 hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-border disabled:hover:bg-transparent";

export default function Base64Encoder() {
  const [mode, setMode] = useState<Mode>("text");
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [urlSafe, setUrlSafe] = useState(false);
  const [fileOutput, setFileOutput] = useState("");
  const [fileInfo, setFileInfo] = useState<{ name: string; type: string; size: string } | null>(null);
  const [toast, setToast] = useState<{ text: string; type: "success" | "error" } | null>(null);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currentFileRef = useRef<File | null>(null);
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

  const encodeText = useCallback(() => {
    if (!inputText) return;
    try {
      let encoded = btoa(unescape(encodeURIComponent(inputText)));
      if (urlSafe) {
        encoded = encoded.replace(/\+/g, "-").replace(/\//g, "_");
      }
      setOutputText(encoded);
      showToast("Text encoded successfully!", "success");
    } catch {
      showToast("Failed to encode text", "error");
    }
  }, [inputText, urlSafe, showToast]);

  const decodeText = useCallback(() => {
    if (!inputText) return;
    try {
      let text = inputText;
      if (urlSafe) {
        text = text.replace(/-/g, "+").replace(/_/g, "/");
      }
      const decoded = decodeURIComponent(escape(atob(text)));
      setOutputText(decoded);
      showToast("Text decoded successfully!", "success");
    } catch {
      showToast("Failed to decode text. Invalid Base64 string.", "error");
    }
  }, [inputText, urlSafe, showToast]);

  const clearAll = useCallback(() => {
    setInputText("");
    setOutputText("");
    showToast("Cleared", "success");
  }, [showToast]);

  const handleFile = useCallback(
    (file: File) => {
      currentFileRef.current = file;
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        const base64 = result.split(",")[1];
        setFileOutput(base64 || "");
        setFileInfo({
          name: file.name,
          type: file.type || "Unknown",
          size: (file.size / 1024).toFixed(2) + " KB",
        });
      };
      reader.readAsDataURL(file);
    },
    []
  );

  const downloadFile = useCallback(() => {
    const file = currentFileRef.current;
    const base64 = fileOutput;
    if (!file || !base64) return;
    try {
      const binary = atob(base64);
      const array = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) {
        array[i] = binary.charCodeAt(i);
      }
      const blob = new Blob([array], { type: file.type });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `decoded-${file.name}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      showToast("File downloaded successfully!", "success");
    } catch {
      showToast("Failed to download file", "error");
    }
  }, [fileOutput, showToast]);

  const copyToClipboard = useCallback(
    (text: string) => {
      if (!text) return;
      navigator.clipboard
        .writeText(text)
        .then(() => showToast("Copied to clipboard!", "success"))
        .catch(() => showToast("Failed to copy", "error"));
    },
    [showToast]
  );

  const resetFile = useCallback(() => {
    currentFileRef.current = null;
    setFileOutput("");
    setFileInfo(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    showToast("Reset", "success");
  }, [showToast]);

  const btnActive = "border border-blue-500 bg-blue-500/20 text-blue-300";
  const btnInactive = "border border-border text-slate-400 hover:border-slate-600 hover:text-slate-200";

  return (
    <div className="space-y-6" role="main" aria-label="Base64 Encoder Decoder">
      <div className="flex gap-2" role="group" aria-label="Mode">
        <button
          type="button"
          onClick={() => setMode("text")}
          aria-pressed={mode === "text"}
          className={`${btnBase} ${mode === "text" ? btnActive : btnInactive}`}
        >
          Text Mode
        </button>
        <button
          type="button"
          onClick={() => setMode("file")}
          aria-pressed={mode === "file"}
          className={`${btnBase} ${mode === "file" ? btnActive : btnInactive}`}
        >
          File Mode
        </button>
      </div>

      {mode === "text" && (
        <>
          <div className="rounded-xl border border-border bg-surface p-6">
            <h2 id="input-label" className="mb-3 text-lg font-semibold text-slate-100">Input</h2>
            <textarea
              id="b64-input"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              aria-labelledby="input-label"
              placeholder="Enter text to encode/decode"
              className="scrollbar-thin max-h-[50vh] w-full resize-none overflow-y-auto rounded-lg border border-border bg-slate-950 px-4 py-3 pr-2 font-mono text-sm text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              rows={6}
            />
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={encodeText}
                aria-label="Encode text to Base64"
                className={btnSecondary}
              >
                Encode
              </button>
              <button
                type="button"
                onClick={decodeText}
                aria-label="Decode Base64 to text"
                className={btnSecondary}
              >
                Decode
              </button>
              <button
                type="button"
                onClick={() => copyToClipboard(inputText)}
                disabled={!inputText}
                aria-label="Copy input text"
                className={btnSecondary}
              >
                Copy
              </button>
              <button
                type="button"
                onClick={clearAll}
                aria-label="Clear all input and output"
                className={btnSecondary}
              >
                Clear
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6">
            <h2 id="output-label" className="mb-3 text-lg font-semibold text-slate-100">Output</h2>
            <textarea
              id="b64-output"
              value={outputText}
              readOnly
              aria-labelledby="output-label"
              aria-label="Base64 encode/decode output"
              className="scrollbar-thin max-h-[50vh] w-full resize-none overflow-y-auto rounded-lg border border-border bg-slate-950 px-4 py-3 pr-2 font-mono text-sm text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              rows={6}
            />
            <div className="mt-3 flex gap-2">
              <button
                type="button"
                onClick={() => copyToClipboard(outputText)}
                disabled={!outputText}
                aria-label="Copy output"
                className={btnSecondary}
              >
                Copy
              </button>
            </div>
          </div>

          <label className="flex cursor-pointer items-center gap-2 text-slate-400">
            <input
              type="checkbox"
              checked={urlSafe}
              onChange={(e) => setUrlSafe(e.target.checked)}
              aria-describedby="url-safe-desc"
              className="rounded border-border bg-slate-950 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            />
            <span id="url-safe-desc">URL-safe Base64 (replace + with - and / with _)</span>
          </label>
        </>
      )}

      {mode === "file" && (
        <>
          <div className="rounded-xl border border-border bg-surface p-6">
            <h2 id="upload-label" className="mb-3 text-lg font-semibold text-slate-100">Upload File</h2>
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const file = e.dataTransfer.files[0];
                if (file) handleFile(file);
              }}
              onClick={() => fileInputRef.current?.click()}
              className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-surface p-8 transition-colors hover:border-slate-600"
            >
              <span className="mb-2 text-4xl text-slate-500" aria-hidden>📁</span>
              <p className="text-slate-400">Drop file here or click to upload</p>
              <p className="mt-1 text-sm text-slate-500">Single file</p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              aria-label="Choose file to encode to Base64"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFile(file);
              }}
            />
            {fileInfo && (
              <div className="mt-3 rounded-lg bg-slate-950/80 px-4 py-2 text-sm text-slate-400">
                File: {fileInfo.name}<br />
                Type: {fileInfo.type}<br />
                Size: {fileInfo.size}
              </div>
            )}
          </div>

          <div className="rounded-xl border border-border bg-surface p-6">
            <h2 id="file-output-label" className="mb-3 text-lg font-semibold text-slate-100">Base64 Output</h2>
            <textarea
              id="file-output"
              value={fileOutput}
              readOnly
              aria-labelledby="file-output-label"
              aria-label="Base64 encoded file output"
              className="scrollbar-thin max-h-[50vh] w-full resize-none overflow-y-auto rounded-lg border border-border bg-slate-950 px-4 py-3 pr-2 font-mono text-sm text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              rows={6}
            />
            <div className="mt-3 flex gap-2">
              <button
                type="button"
                onClick={() => copyToClipboard(fileOutput)}
                disabled={!fileOutput}
                aria-label="Copy Base64 output"
                className={btnSecondary}
              >
                Copy Base64
              </button>
              <button
                type="button"
                onClick={downloadFile}
                disabled={!fileOutput}
                aria-label="Download decoded file"
                className={btnSecondary}
              >
                Download File
              </button>
              <button
                type="button"
                onClick={resetFile}
                aria-label="Reset and clear file"
                className={btnSecondary}
              >
                Reset
              </button>
            </div>
          </div>
        </>
      )}

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
