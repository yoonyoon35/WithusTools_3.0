"use client";

import { useState, useCallback, useRef, useEffect } from "react";

interface DiffItem {
  type: "same" | "added" | "removed";
  text: string;
  words?: number[];
  wordArray?: string[];
}

function escapeHtml(text: string) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function stripHtml(html: string): string {
  if (typeof document === "undefined") return html.replace(/<[^>]*>/g, "");
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent ?? "";
}

function LineNumberedContent({ html }: { html: string }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const stripped = stripHtml(html);
  const logicalLines = stripped.split(/\r\n|\r|\n/);
  const minLineCount = Math.max(logicalLines.length || 1, 1);
  const [lineCount, setLineCount] = useState(minLineCount);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const measure = () => {
      requestAnimationFrame(() => {
        if (!el) return;
        const style = getComputedStyle(el);
        const lineHeight = parseFloat(style.lineHeight) || 22;
        const paddingTop = parseFloat(style.paddingTop) || 0;
        const paddingBottom = parseFloat(style.paddingBottom) || 0;
        const contentHeight = el.scrollHeight - paddingTop - paddingBottom;
        const visualLines = Math.max(
          minLineCount,
          Math.ceil(contentHeight / lineHeight) || 1
        );
        setLineCount(visualLines);
      });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [html, minLineCount]);

  const lineNums = Array.from({ length: lineCount }, (_, i) => i + 1).join("\n");

  return (
    <div className="flex overflow-hidden rounded-lg border border-border bg-slate-950 font-mono text-sm leading-relaxed">
      <pre className="shrink-0 select-none border-r border-border bg-slate-900/50 px-3 py-4 text-right text-slate-500" aria-hidden>
        {lineNums}
      </pre>
      <div
        ref={contentRef}
        className="min-w-0 flex-1 overflow-auto whitespace-pre-wrap p-4 text-slate-300 [&_span]:whitespace-pre-wrap"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

function getTextStats(text: string): { chars: number; words: number; lines: number } {
  const chars = text.length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const lines = text ? (text.split(/\r\n|\r|\n/).length || 1) : 0;
  return { chars, words, lines };
}

interface CompareOptions {
  trim: boolean;
  ignoreWhitespace: boolean;
  ignoreCase: boolean;
}

function normalizeForCompare(text: string, opts: CompareOptions): string {
  let t = text;
  if (opts.trim) t = t.trim();
  if (opts.ignoreWhitespace) t = t.replace(/\s+/g, " ").trim();
  return t;
}

/** LCS 기반: 두 단어 배열에서 실제로 다른 단어만 반환 (인덱스 기반이 아닌 정렬 기반) */
function computeWordDiff(
  words1: string[],
  words2: string[],
  eq: (a: string, b: string) => boolean
): { diff1: number[]; diff2: number[] } {
  const n = words1.length;
  const m = words2.length;
  const diff1: number[] = [];
  const diff2: number[] = [];

  // LCS length table
  const dp: number[][] = Array(n + 1)
    .fill(null)
    .map(() => Array(m + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (eq(words1[i - 1], words2[j - 1])) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Backtrace: collect indices that are NOT in LCS (i.e. actually different)
  let i = n,
    j = m;
  const lcs1 = new Set<number>();
  const lcs2 = new Set<number>();
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && eq(words1[i - 1], words2[j - 1])) {
      lcs1.add(i - 1);
      lcs2.add(j - 1);
      i--;
      j--;
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      j--;
    } else {
      i--;
    }
  }

  for (let k = 0; k < n; k++) if (!lcs1.has(k)) diff1.push(k);
  for (let k = 0; k < m; k++) if (!lcs2.has(k)) diff2.push(k);
  return { diff1, diff2 };
}

function findDifferences(text1: string, text2: string, opts: CompareOptions): DiffItem[] {
  const lines1 = text1.split(/\r\n|\r|\n/);
  const lines2 = text2.split(/\r\n|\r|\n/);
  const result: DiffItem[] = [];

  const eq = (a: string, b: string) =>
    opts.ignoreCase ? a.toLowerCase() === b.toLowerCase() : a === b;

  // Line-level LCS alignment
  const n = lines1.length;
  const m = lines2.length;
  const dp: number[][] = Array(n + 1)
    .fill(null)
    .map(() => Array(m + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (eq(lines1[i - 1], lines2[j - 1])) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Backtrace to build edit script
  const edits: { op: "same" | "removed" | "added"; line1?: string; line2?: string; i?: number; j?: number }[] = [];
  let i = n,
    j = m;
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && eq(lines1[i - 1], lines2[j - 1])) {
      edits.push({ op: "same", line1: lines1[i - 1], line2: lines2[j - 1], i: i - 1, j: j - 1 });
      i--;
      j--;
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      edits.push({ op: "added", line2: lines2[j - 1], j: j - 1 });
      j--;
    } else {
      edits.push({ op: "removed", line1: lines1[i - 1], i: i - 1 });
      i--;
    }
  }
  edits.reverse();

  const lineEnding = "\n";
  let idx = 0;
  while (idx < edits.length) {
    const e = edits[idx];

    if (e.op === "same" && e.line1 != null) {
      result.push({ type: "same", text: e.line1 + lineEnding, words: [] });
      idx++;
      continue;
    }

    // LCS backtrace 순서가 removed,removed,...,added,added 일 수 있음.
    // 1:1 페어링(첫 번째 removed↔첫 번째 added)으로 정확한 비교가 되도록 함.
    const removedRun: string[] = [];
    while (idx < edits.length && edits[idx].op === "removed" && edits[idx].line1 != null) {
      removedRun.push(edits[idx].line1!);
      idx++;
    }
    const addedRun: string[] = [];
    while (idx < edits.length && edits[idx].op === "added" && edits[idx].line2 != null) {
      addedRun.push(edits[idx].line2!);
      idx++;
    }

    const pairedCount = Math.min(removedRun.length, addedRun.length);
    for (let k = 0; k < pairedCount; k++) {
      const words1 = removedRun[k].split(/(\s+)/).filter(Boolean);
      const words2 = addedRun[k].split(/(\s+)/).filter(Boolean);
      const { diff1, diff2 } = computeWordDiff(words1, words2, eq);
      result.push({ type: "removed", text: removedRun[k] + lineEnding, words: diff1, wordArray: words1 });
      result.push({ type: "added", text: addedRun[k] + lineEnding, words: diff2, wordArray: words2 });
    }
    for (let k = pairedCount; k < removedRun.length; k++) {
      const line = removedRun[k];
      const words = line.split(/(\s+)/).filter(Boolean);
      result.push({
        type: "removed",
        text: line + lineEnding,
        words: Array.from({ length: words.length }, (_, i) => i),
        wordArray: words,
      });
    }
    for (let k = pairedCount; k < addedRun.length; k++) {
      const line = addedRun[k];
      const words = line.split(/(\s+)/).filter(Boolean);
      result.push({
        type: "added",
        text: line + lineEnding,
        words: Array.from({ length: words.length }, (_, i) => i),
        wordArray: words,
      });
    }
  }

  return result;
}

export default function StringComparison() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [html1, setHtml1] = useState("");
  const [html2, setHtml2] = useState("");
  const [diffCount, setDiffCount] = useState<number | null>(null);
  const [diffDetails, setDiffDetails] = useState<{ line: number; word1: string; word2: string }[]>([]);
  const [toast, setToast] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);
  const isSyncingScroll = useRef(false);

  const [trim, setTrim] = useState(false);
  const [ignoreWhitespace, setIgnoreWhitespace] = useState(false);
  const [ignoreCase, setIgnoreCase] = useState(false);

  useEffect(() => {
    const el1 = scrollRef1.current;
    const el2 = scrollRef2.current;
    if (!el1 || !el2) return;

    const syncTo2 = () => {
      if (isSyncingScroll.current) return;
      isSyncingScroll.current = true;
      el2.scrollTop = el1.scrollTop;
      el2.scrollLeft = el1.scrollLeft;
      requestAnimationFrame(() => { isSyncingScroll.current = false; });
    };
    const syncTo1 = () => {
      if (isSyncingScroll.current) return;
      isSyncingScroll.current = true;
      el1.scrollTop = el2.scrollTop;
      el1.scrollLeft = el2.scrollLeft;
      requestAnimationFrame(() => { isSyncingScroll.current = false; });
    };

    el1.addEventListener("scroll", syncTo2, { passive: true });
    el2.addEventListener("scroll", syncTo1, { passive: true });
    return () => {
      el1.removeEventListener("scroll", syncTo2);
      el2.removeEventListener("scroll", syncTo1);
    };
  }, [html1, html2]);

  const showToast = useCallback((text: string, type: "success" | "error" = "success") => {
    setToast({ text, type });
    setTimeout(() => setToast(null), 3000);
  }, []);

  const compare = useCallback(() => {
    if (!text1 || !text2) {
      showToast("Please enter both texts to compare", "error");
      return;
    }

    const opts: CompareOptions = { trim, ignoreWhitespace, ignoreCase };
    const t1 = normalizeForCompare(text1, opts);
    const t2 = normalizeForCompare(text2, opts);
    const differences = findDifferences(t1, t2, opts);
    let out1 = "";
    let out2 = "";
    let count = 0;
    let pos1 = 0;
    const details: { line: number; word1: string; word2: string }[] = [];

    for (let idx = 0; idx < differences.length; idx++) {
      const diff = differences[idx];
      switch (diff.type) {
        case "added":
          out1 += "";
          if (diff.words && diff.words.length > 0 && diff.wordArray) {
            diff.wordArray.forEach((word, index) => {
              if (diff.words!.includes(index)) {
                out2 += `<span class="text-green-900 font-semibold bg-green-400 rounded px-0.5">${escapeHtml(word)}</span>`;
              } else {
                out2 += escapeHtml(word);
              }
            });
            out2 += "\n";
          } else {
            out2 += escapeHtml(diff.text);
          }
          break;
        case "removed":
          out2 += "";
          const lineNum = t1.substring(0, pos1).split(/\r\n|\r|\n/).length || 1;
          if (diff.words && diff.words.length > 0 && diff.wordArray) {
            diff.wordArray.forEach((word, index) => {
              if (diff.words!.includes(index)) {
                out1 += `<span class="text-red-50 font-semibold bg-red-500 rounded px-0.5">${escapeHtml(word)}</span>`;
              } else {
                out1 += escapeHtml(word);
              }
            });
            out1 += "\n";
            const addedDiff = differences[idx + 1];
            if (addedDiff?.type === "added" && addedDiff.wordArray && addedDiff.words) {
              const words1 = diff.words!.map((i) => diff.wordArray![i] ?? "");
              const words2 = addedDiff.words.map((i) => addedDiff.wordArray![i] ?? "");
              const maxLen = Math.max(words1.length, words2.length);
              for (let k = 0; k < maxLen; k++) {
                const w1 = words1[k] ?? "";
                const w2 = words2[k] ?? "";
                if (w1 || w2) details.push({ line: lineNum, word1: w1, word2: w2 });
              }
            }
          } else {
            out1 += escapeHtml(diff.text);
            const addedDiff = differences[idx + 1];
            if (addedDiff?.type === "added") {
              details.push({ line: lineNum, word1: diff.text.trim(), word2: addedDiff.text.trim() });
            }
          }
          pos1 += diff.text.length;
          if (diff.text.trim()) count++;
          break;
        default:
          out1 += escapeHtml(diff.text);
          out2 += escapeHtml(diff.text);
          pos1 += diff.text.length;
      }
    }

    setHtml1(out1);
    setHtml2(out2);
    setDiffCount(count);
    setDiffDetails(details);
    showToast(`Found ${count} difference${count !== 1 ? "s" : ""}`);
  }, [text1, text2, trim, ignoreWhitespace, ignoreCase, showToast]);

  const reset = useCallback(() => {
    setText1("");
    setText2("");
    setHtml1("");
    setHtml2("");
    setDiffCount(null);
    setDiffDetails([]);
    showToast("All inputs have been cleared");
  }, [showToast]);

  const copyText = useCallback(
    (text: string) => {
      navigator.clipboard
        .writeText(text)
        .then(() => showToast("Text copied to clipboard!"))
        .catch(() => showToast("Failed to copy text", "error"));
    },
    [showToast]
  );

  const fileInput1Ref = useRef<HTMLInputElement>(null);
  const fileInput2Ref = useRef<HTMLInputElement>(null);

  const loadFromFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, setText: (value: string) => void) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        if (typeof result === "string") {
          setText(result);
          showToast(`Loaded: ${file.name}`);
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
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-surface p-6">
          <h2 className="mb-3 text-lg font-semibold text-slate-100">First Text</h2>
          <textarea
            id="text1"
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            placeholder="Enter first text to compare"
            className="scrollbar-thin max-h-[50vh] w-full resize-none overflow-y-auto rounded-lg border border-border bg-slate-950 px-4 py-3 pr-2 text-slate-100 placeholder-slate-500 focus:border-slate-600 focus:outline-none focus:ring-1 focus:ring-slate-600"
            rows={6}
          />
          <div className="mt-3 flex flex-wrap gap-2">
            <input
              ref={fileInput1Ref}
              type="file"
              accept=".txt,text/plain"
              className="hidden"
              onChange={(e) => loadFromFile(e, setText1)}
            />
            <button
              type="button"
              onClick={() => fileInput1Ref.current?.click()}
              className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-700 hover:text-slate-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
              </svg>
              Load TXT
            </button>
            <button
              type="button"
              onClick={() => copyText(text1)}
              className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-700 hover:text-slate-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16V4a2 2 0 0 1 2-2h10" />
              </svg>
              Copy
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-surface p-6">
          <h2 className="mb-3 text-lg font-semibold text-slate-100">Second Text</h2>
          <textarea
            id="text2"
            value={text2}
            onChange={(e) => setText2(e.target.value)}
            placeholder="Enter second text to compare"
            className="scrollbar-thin max-h-[50vh] w-full resize-none overflow-y-auto rounded-lg border border-border bg-slate-950 px-4 py-3 pr-2 text-slate-100 placeholder-slate-500 focus:border-slate-600 focus:outline-none focus:ring-1 focus:ring-slate-600"
            rows={6}
          />
          <div className="mt-3 flex flex-wrap gap-2">
            <input
              ref={fileInput2Ref}
              type="file"
              accept=".txt,text/plain"
              className="hidden"
              onChange={(e) => loadFromFile(e, setText2)}
            />
            <button
              type="button"
              onClick={() => fileInput2Ref.current?.click()}
              className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-700 hover:text-slate-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
              </svg>
              Load TXT
            </button>
            <button
              type="button"
              onClick={() => copyText(text2)}
              className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-700 hover:text-slate-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16V4a2 2 0 0 1 2-2h10" />
              </svg>
              Copy
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <h2 className="mb-3 text-lg font-semibold text-slate-100">Comparison Options</h2>
        <div className="flex flex-wrap gap-6">
          <label className="flex cursor-pointer items-center gap-2 text-slate-300">
            <input
              type="checkbox"
              checked={trim}
              onChange={(e) => setTrim(e.target.checked)}
              className="rounded border-border bg-slate-950 text-blue-500 focus:ring-blue-500"
            />
            <span>Trim (ignore leading/trailing whitespace)</span>
          </label>
          <label className="flex cursor-pointer items-center gap-2 text-slate-300">
            <input
              type="checkbox"
              checked={ignoreWhitespace}
              onChange={(e) => setIgnoreWhitespace(e.target.checked)}
              className="rounded border-border bg-slate-950 text-blue-500 focus:ring-blue-500"
            />
            <span>Ignore whitespace (spaces, tabs, line breaks)</span>
          </label>
          <label className="flex cursor-pointer items-center gap-2 text-slate-300">
            <input
              type="checkbox"
              checked={ignoreCase}
              onChange={(e) => setIgnoreCase(e.target.checked)}
              className="rounded border-border bg-slate-950 text-blue-500 focus:ring-blue-500"
            />
            <span>Ignore case (A vs a)</span>
          </label>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={compare}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition-colors hover:bg-blue-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="8" height="14" rx="1" />
            <rect x="13" y="5" width="8" height="14" rx="1" />
            <path d="M6 9h4M6 12h4M6 15h3" />
            <path d="M16 9h4M16 12h4M16 15h3" />
          </svg>
          Compare Texts
        </button>
        <button
          type="button"
          onClick={reset}
          className="flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 font-medium text-slate-300 transition-colors hover:border-slate-600 hover:text-slate-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
          </svg>
          Reset
        </button>
      </div>

      {(html1 || html2) && (() => {
        const resultLineCount = Math.max(
          stripHtml(html1).split(/\r\n|\r|\n/).length,
          stripHtml(html2).split(/\r\n|\r|\n/).length
        );
        const resultScrollClass =
          resultLineCount >= 25
            ? "scrollbar-thin min-h-[200px] max-h-[600px] overflow-y-auto pr-2 rounded-lg border border-border bg-slate-950 p-4"
            : "min-h-[200px] overflow-auto rounded-lg border border-border bg-slate-950 p-4";
        return (
          <div className="rounded-xl border border-border bg-surface p-6">
            <h2 className="mb-3 text-lg font-semibold text-slate-100">Comparison Result</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="mb-2 text-sm text-slate-400">First Text Result</p>
                <div ref={scrollRef1} className={resultScrollClass}>
                  <LineNumberedContent html={html1} />
                </div>
              </div>
              <div>
                <p className="mb-2 text-sm text-slate-400">Second Text Result</p>
                <div ref={scrollRef2} className={resultScrollClass}>
                  <LineNumberedContent html={html2} />
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      <div className="rounded-xl border border-border bg-surface p-6">
        <h2 className="mb-3 text-lg font-semibold text-slate-100">Statistics</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-medium text-slate-400">First Text</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="text-slate-300">
                Characters: <span className="font-semibold text-slate-100">{getTextStats(text1).chars}</span>
              </span>
              <span className="text-slate-300">
                Words: <span className="font-semibold text-slate-100">{getTextStats(text1).words}</span>
              </span>
              <span className="text-slate-300">
                Lines: <span className="font-semibold text-slate-100">{getTextStats(text1).lines}</span>
              </span>
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-slate-400">Second Text</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="text-slate-300">
                Characters: <span className="font-semibold text-slate-100">{getTextStats(text2).chars}</span>
              </span>
              <span className="text-slate-300">
                Words: <span className="font-semibold text-slate-100">{getTextStats(text2).words}</span>
              </span>
              <span className="text-slate-300">
                Lines: <span className="font-semibold text-slate-100">{getTextStats(text2).lines}</span>
              </span>
            </div>
          </div>
        </div>
        {diffCount !== null && (
          <div className="mt-4 space-y-3 border-t border-border pt-4">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-slate-300">
                Differences: <span className="font-semibold text-slate-100">{diffCount}</span>
              </span>
              <span
                className={`rounded-md px-2 py-1 text-sm font-medium ${
                  diffCount === 0 ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                }`}
              >
                {diffCount === 0 ? "Same" : "Different"}
              </span>
            </div>
            {diffDetails.length > 0 && (
              <div className="space-y-1.5 text-sm">
                <p className="text-slate-400">Difference details:</p>
                <div
                  className={
                    diffDetails.length > 5
                      ? "scrollbar-thin max-h-[240px] overflow-y-auto space-y-1.5 pr-2"
                      : "space-y-1.5"
                  }
                >
                  {diffDetails.map((d, i) => (
                    <div key={i} className="rounded-lg border border-border bg-slate-950/50 px-3 py-2 font-mono">
                      <span className="text-slate-500">Line {d.line}:</span>{" "}
                      <span className="text-red-400">&quot;{d.word1}&quot;</span>
                      <span className="mx-2 text-slate-500">→</span>
                      <span className="text-green-400">&quot;{d.word2}&quot;</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {toast && (
        <div
          className={`fixed right-4 top-4 z-50 animate-in slide-in-from-right-2 rounded-lg px-4 py-2 text-sm font-medium ${
            toast.type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"
          }`}
          role="alert"
        >
          {toast.text}
        </div>
      )}
    </div>
  );
}
