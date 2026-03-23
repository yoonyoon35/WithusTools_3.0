"use client";

import { useState, useCallback, useEffect } from "react";
import { fallbackToHiragana, fallbackToKatakana } from "./kana-converter-utils";

const CHO = ["g", "kk", "n", "d", "tt", "r", "m", "b", "pp", "s", "ss", "", "j", "jj", "ch", "k", "t", "p", "h"];
const JUNG = ["a", "ae", "ya", "yae", "eo", "e", "yeo", "ye", "o", "wa", "wae", "oe", "yo", "u", "wo", "we", "wi", "yu", "eu", "ui", "i"];
const JONG = ["", "k", "kk", "k", "n", "n", "n", "t", "l", "k", "m", "l", "l", "l", "l", "l", "m", "p", "p", "s", "s", "ng", "j", "ch", "k", "t", "p", "h"];

function hangulToRomanization(str: string): string {
  let out = "";
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i);
    if (c >= 0xac00 && c <= 0xd7a3) {
      const s = c - 0xac00;
      const cho = Math.floor(s / 588);
      const jung = Math.floor((s % 588) / 28);
      const jong = s % 28;
      out += CHO[cho] + JUNG[jung] + JONG[jong];
    } else {
      out += str[i];
    }
  }
  return out;
}

function convert(raw: string): { hiragana: string; katakana: string } {
  let text = raw;
  if (/[\uac00-\ud7a3]/.test(text)) {
    text = hangulToRomanization(text);
  }
  try {
    const hiragana = fallbackToHiragana(text);
    const katakana = fallbackToKatakana(text);
    return { hiragana, katakana };
  } catch {
    return { hiragana: text, katakana: text };
  }
}

export default function KanaConverter() {
  const [input, setInput] = useState("");
  const [hiragana, setHiragana] = useState("");
  const [katakana, setKatakana] = useState("");
  const [toast, setToast] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 1500);
  }, []);

  useEffect(() => {
    const { hiragana: h, katakana: k } = convert(input);
    setHiragana(h);
    setKatakana(k);
  }, [input]);

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
        <section className="space-y-2" aria-labelledby="kana-input-label">
          <h2 id="kana-input-label" className="text-lg font-semibold text-slate-200">
            Input
          </h2>
          <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text in any language (romaji, English, Korean, etc.)..."
          rows={6}
          aria-label="Input text for conversion"
          className="scrollbar-thin w-full resize-none rounded-lg border border-border bg-slate-950 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        </section>
      </div>

      <div className="rounded-lg border border-border bg-surface p-4">
        <section className="space-y-4" aria-labelledby="kana-outputs-heading">
        <h2 id="kana-outputs-heading" className="text-lg font-semibold text-slate-200">
          Output
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-medium text-slate-200">Hiragana (ひらがな)</h3>
            <textarea
              value={hiragana}
              readOnly
              rows={6}
              aria-label="Hiragana result"
              className="scrollbar-thin w-full resize-none rounded-lg border border-border bg-slate-950 px-4 py-3 text-slate-300"
            />
            <button
              type="button"
              onClick={() => copyToClipboard(hiragana)}
              className="w-fit rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-slate-600 hover:text-slate-100"
            >
              Copy
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-medium text-slate-200">Katakana (カタカナ)</h3>
            <textarea
              value={katakana}
              readOnly
              rows={6}
              aria-label="Katakana result"
              className="scrollbar-thin w-full resize-none rounded-lg border border-border bg-slate-950 px-4 py-3 text-slate-300"
            />
            <button
              type="button"
              onClick={() => copyToClipboard(katakana)}
              className="w-fit rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-slate-600 hover:text-slate-100"
            >
              Copy
            </button>
          </div>
        </div>
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
