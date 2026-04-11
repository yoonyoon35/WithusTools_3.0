"use client";

import { useState, useCallback, useEffect } from "react";
import { katakanaToHangulPronunciation } from "@/lib/hiragana-to-hangul-pronunciation";

export default function KatakanaToHangulConverter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    setOutput(katakanaToHangulPronunciation(input));
  }, [input]);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 1500);
  }, []);

  const copyToClipboard = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        showToast("Copied");
      } catch {
        showToast("Copy failed");
      }
    },
    [showToast]
  );

  return (
    <div className="w-full space-y-6">
      <div className="rounded-lg border border-border bg-surface p-4">
        <section className="space-y-2" aria-labelledby="kata-hangul-input-label">
          <h2 id="kata-hangul-input-label" className="text-lg font-semibold text-slate-200">
            Input
          </h2>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type or paste katakana (ア–ン syllables map to hiragana internally; hiragana and Hangul also work). Other characters pass through…"
            rows={6}
            aria-label="Katakana input"
            className="scrollbar-thin w-full resize-none rounded-lg border border-border bg-slate-950 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </section>
      </div>

      <div className="rounded-lg border border-border bg-surface p-4">
        <section className="space-y-4" aria-labelledby="kata-hangul-output-heading">
          <h2 id="kata-hangul-output-heading" className="text-lg font-semibold text-slate-200">
            Hangul (pronunciation)
          </h2>
          <textarea
            value={output}
            readOnly
            rows={6}
            aria-label="Hangul result"
            className="scrollbar-thin w-full resize-none rounded-lg border border-border bg-slate-950 px-4 py-3 text-slate-300"
          />
          <button
            type="button"
            onClick={() => copyToClipboard(output)}
            className="w-fit rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-slate-600 hover:text-slate-100"
          >
            Copy
          </button>
        </section>
      </div>

      {toast && (
        <div
          className="fixed right-4 top-4 z-50 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white"
          role="alert"
        >
          {toast}
        </div>
      )}
    </div>
  );
}
