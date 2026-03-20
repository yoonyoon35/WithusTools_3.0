"use client";

import { useState, useCallback, useRef, useEffect } from "react";

const STROKE_ANIM_DURATION = 0.6;
const STROKE_ANIM_GAP = 0.25;

const ALPHABET_DATA = [
  { char: "A", lower: "a", name: "ei", strokes: 3, tip: "Slanted line left, slanted line right, then horizontal across the middle.", lowerTip: "Curve like a circle, then a vertical line with a small hook on the right." },
  { char: "B", lower: "b", name: "bee", strokes: 3, tip: "Vertical line, then two curves: top half and bottom half.", lowerTip: "Vertical line up, then a curve for the rounded part on the right." },
  { char: "C", lower: "c", name: "see", strokes: 1, tip: "One curve open to the right, like a crescent.", lowerTip: "One curve open to the right, like a small crescent." },
  { char: "D", lower: "d", name: "dee", strokes: 2, tip: "Vertical line, then a curve from top to bottom on the right.", lowerTip: "Curve first (like c), then a tall vertical line on the right." },
  { char: "E", lower: "e", name: "e", strokes: 4, tip: "Vertical line left, then three horizontals: top, middle, bottom.", lowerTip: "Horizontal line in the middle, then a curve closing to the left." },
  { char: "F", lower: "f", name: "eff", strokes: 3, tip: "Vertical line, then top and middle horizontal strokes.", lowerTip: "Curve at top, cross stroke, then vertical down (often with descender)." },
  { char: "G", lower: "g", name: "gee", strokes: 2, tip: "Curve like C, then add a horizontal and a small vertical inside.", lowerTip: "Curve like c, then add a vertical down and a loop or curve at the bottom." },
  { char: "H", lower: "h", name: "aitch", strokes: 3, tip: "Two vertical lines, then a horizontal line in the middle.", lowerTip: "Vertical line up, then a curve from the top going right and down." },
  { char: "I", lower: "i", name: "ai", strokes: 3, tip: "Short horizontal, long vertical, short horizontal at the bottom.", lowerTip: "Dot on top, then a vertical line down." },
  { char: "J", lower: "j", name: "jay", strokes: 2, tip: "Curve at the top, then a vertical line with a hook to the left.", lowerTip: "Dot on top, then a vertical line with a hook to the left." },
  { char: "K", lower: "k", name: "kay", strokes: 3, tip: "Vertical line, then two diagonal lines from the middle.", lowerTip: "Vertical line up, then two diagonal lines from the middle." },
  { char: "L", lower: "l", name: "el", strokes: 2, tip: "Vertical line down, then horizontal to the right at the bottom.", lowerTip: "One vertical line down, sometimes with a small hook at the bottom." },
  { char: "M", lower: "m", name: "em", strokes: 4, tip: "Vertical down, two diagonals up to a point, then vertical down.", lowerTip: "Vertical down, curve up and down, then another curve." },
  { char: "N", lower: "n", name: "en", strokes: 3, tip: "Vertical, diagonal to the bottom right, then vertical up.", lowerTip: "Vertical down, then a curve up to the right." },
  { char: "O", lower: "o", name: "oh", strokes: 1, tip: "One continuous oval or circle.", lowerTip: "One continuous oval or circle." },
  { char: "P", lower: "p", name: "pee", strokes: 2, tip: "Vertical line, then a curve for the top half only.", lowerTip: "Vertical line down from the top, then a curve for the rounded part." },
  { char: "Q", lower: "q", name: "cue", strokes: 2, tip: "Circle like O, then a small diagonal tail on the right.", lowerTip: "Circle first, then a vertical line with a hook going down-right." },
  { char: "R", lower: "r", name: "are", strokes: 3, tip: "Like P, then add a small diagonal leg from the curve.", lowerTip: "Vertical down, then a small curve at the top right." },
  { char: "S", lower: "s", name: "ess", strokes: 1, tip: "One curved line: curve forward at top, backward at bottom.", lowerTip: "One curved line: curve forward at top, backward at bottom." },
  { char: "T", lower: "t", name: "tee", strokes: 2, tip: "Horizontal line on top, then vertical line down the center.", lowerTip: "Vertical line down, then horizontal cross near the top." },
  { char: "U", lower: "u", name: "yoo", strokes: 1, tip: "One stroke: vertical down, curve at bottom, vertical up.", lowerTip: "One stroke: vertical down, curve at bottom, vertical up." },
  { char: "V", lower: "v", name: "vee", strokes: 2, tip: "Two diagonal lines meeting at the bottom.", lowerTip: "Two diagonal lines meeting at the bottom." },
  { char: "W", lower: "w", name: "double-yoo", strokes: 4, tip: "Two V shapes side by side.", lowerTip: "Down, up, down, up—like two v's connected." },
  { char: "X", lower: "x", name: "ex", strokes: 2, tip: "One diagonal from top-left to bottom-right, cross with the other.", lowerTip: "One diagonal, then cross with the other." },
  { char: "Y", lower: "y", name: "why", strokes: 3, tip: "Two diagonals meeting at the top, then vertical down.", lowerTip: "Two diagonals meeting, then a vertical with a descender curve." },
  { char: "Z", lower: "z", name: "zee", strokes: 3, tip: "Top horizontal, diagonal to bottom-left, bottom horizontal.", lowerTip: "One stroke: horizontal, diagonal, horizontal." },
];

const ALPHABET_STROKES: Record<string, string[]> = {
  A: ["M 50 15 L 20 85", "M 50 15 L 80 85", "M 35 55 L 65 55"],
  B: ["M 22 12 L 22 88", "M 22 12 C 50 12 78 14 78 35 C 78 44 78 50 22 50", "M 22 50 C 50 50 78 50 78 68 C 78 82 78 88 22 88"],
  C: ["M 75 25 Q 75 12 50 12 Q 22 12 22 50 Q 22 88 50 88 Q 75 88 75 75"],
  D: ["M 22 12 L 22 88", "M 22 12 L 55 12 Q 78 12 78 50 Q 78 88 55 88 L 22 88"],
  E: ["M 22 12 L 22 88", "M 22 12 L 72 12", "M 22 50 L 65 50", "M 22 88 L 72 88"],
  F: ["M 22 12 L 22 88", "M 22 12 L 72 12", "M 22 50 L 62 50"],
  G: ["M 75 28 Q 75 12 50 12 Q 22 12 22 50 Q 22 88 50 88 Q 75 88 75 72 L 75 55 L 50 55"],
  H: ["M 22 12 L 22 88", "M 78 12 L 78 88", "M 22 50 L 78 50"],
  I: ["M 35 12 L 65 12", "M 50 12 L 50 88", "M 35 88 L 65 88"],
  J: ["M 30 20 L 70 20", "M 50 20 L 50 72 C 50 88 28 88 22 78"],
  K: ["M 22 12 L 22 88", "M 22 50 L 72 18", "M 22 50 L 72 82"],
  L: ["M 22 12 L 22 88", "M 22 88 L 72 88"],
  M: ["M 18 12 L 18 88", "M 18 12 L 50 45", "M 50 45 L 82 12", "M 82 12 L 82 88"],
  N: ["M 22 12 L 22 88", "M 22 12 L 78 88", "M 78 88 L 78 12"],
  O: ["M 50 12 Q 78 12 78 50 Q 78 88 50 88 Q 22 88 22 50 Q 22 12 50 12 Z"],
  P: ["M 22 12 L 22 88", "M 22 12 Q 78 12 78 32 Q 78 52 22 52"],
  Q: ["M 50 12 Q 78 12 78 50 Q 78 88 50 88 Q 22 88 22 50 Q 22 12 50 12 Z", "M 55 55 L 82 85"],
  R: ["M 22 12 L 22 88", "M 22 12 Q 72 12 72 42 Q 72 55 50 55 L 22 55", "M 50 55 L 78 88"],
  S: ["M 72 22 Q 72 12 50 12 Q 22 12 28 35 Q 72 65 72 78 Q 72 88 50 88 Q 22 88 22 72"],
  T: ["M 18 12 L 82 12", "M 50 12 L 50 88"],
  U: ["M 22 12 L 22 62 Q 22 88 50 88 Q 78 88 78 62 L 78 12"],
  V: ["M 18 12 L 50 88", "M 50 88 L 82 12"],
  W: ["M 15 12 L 32 88", "M 32 88 L 50 35", "M 50 35 L 68 88", "M 68 88 L 85 12"],
  X: ["M 22 18 L 78 82", "M 78 18 L 22 82"],
  Y: ["M 22 12 L 50 48", "M 78 12 L 50 48", "M 50 48 L 50 88"],
  Z: ["M 22 12 L 78 12", "M 78 12 L 22 88", "M 22 88 L 78 88"],
};

const ALPHABET_ROWS: [string, number, number][] = [
  ["A – E", 0, 5],
  ["F – J", 5, 5],
  ["K – O", 10, 5],
  ["P – T", 15, 5],
  ["U – Z", 20, 6],
];

type AlphabetItem = (typeof ALPHABET_DATA)[number];

export default function AlphabetStudy() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showPractice, setShowPractice] = useState(false);
  const [replayKey, setReplayKey] = useState(0);
  const [viewMode, setViewMode] = useState<"upper" | "lower">("upper");
  const [practiceSheetMode, setPracticeSheetMode] = useState<"upper" | "lower" | "both">("both");

  const selectedItem = selectedIndex !== null ? ALPHABET_DATA[selectedIndex] : null;
  const displayChar = selectedItem ? (viewMode === "upper" ? selectedItem.char : selectedItem.lower) : null;
  const displayTip = selectedItem ? (viewMode === "upper" ? selectedItem.tip : selectedItem.lowerTip) : null;
  const displayStrokes = selectedItem ? selectedItem.strokes : 0;
  const strokePaths = selectedItem && viewMode === "upper" ? ALPHABET_STROKES[selectedItem.char] : [];
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!selectedItem || !svgRef.current || viewMode !== "upper") return;
    const paths = svgRef.current.querySelectorAll("path");
    paths.forEach((path, i) => {
      const len = path.getTotalLength();
      const delay = i * (STROKE_ANIM_DURATION + STROKE_ANIM_GAP);
      path.style.strokeDasharray = String(len);
      path.style.strokeDashoffset = String(len);
      path.style.animation = `alphabet-stroke-draw ${STROKE_ANIM_DURATION}s cubic-bezier(0.4, 0, 0.2, 1) forwards`;
      path.style.animationDelay = `${delay}s`;
    });
  }, [selectedItem, replayKey, viewMode]);

  const speak = useCallback((text: string) => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "en-US";
      u.rate = 0.9;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    }
  }, []);

  const handleReplay = useCallback(() => {
    if (selectedItem) {
      setReplayKey((k) => k + 1);
      speak(selectedItem.name);
    }
  }, [selectedItem, speak]);

  const buildPracticeSheetHTML = useCallback(() => {
    const items = ALPHABET_DATA.map((item) => ({ char: item.char, lower: item.lower, name: item.name }));
    const row = (char: string, name: string) =>
      `<tr>
        <td class="sample border border-slate-600 p-0 w-[10%] align-middle text-center font-serif font-bold bg-slate-100 text-slate-900 relative">
          <span class="block">${char}</span>
          <span class="pronunciation absolute right-1 bottom-1 text-sm font-bold text-slate-600">${name}</span>
        </td>
        ${Array(4).fill(`<td class="trace border border-slate-600 p-0 w-[10%] align-middle text-center font-serif">${char}</td>`).join("")}
        ${Array(5).fill('<td class="blank border border-slate-600 p-0 w-[10%] align-middle text-center bg-white"></td>').join("")}
      </tr>`;
    const upperRows = items.map(({ char, name }) => row(char, name));
    const lowerRows = items.map(({ lower, name }) => row(lower, name));
    const sectionHeader = (label: string) =>
      `<tr><td colspan="10" class="section-header border border-slate-600 bg-slate-200 px-2 py-1 text-left text-sm font-semibold text-slate-800">${label}</td></tr>`;
    let tbody = "";
    if (practiceSheetMode === "upper") {
      tbody = sectionHeader("Uppercase (A–Z)") + upperRows.join("");
    } else if (practiceSheetMode === "lower") {
      tbody = sectionHeader("Lowercase (a–z)") + lowerRows.join("");
    } else {
      tbody = sectionHeader("Uppercase (A–Z)") + upperRows.join("") + sectionHeader("Lowercase (a–z)") + lowerRows.join("");
    }
    return `<table class="practice-sheet-table w-full min-w-[56rem] border-collapse table-fixed"><colgroup>${Array(10).fill("<col />").join("")}</colgroup><tbody>${tbody}</tbody></table>`;
  }, [practiceSheetMode]);

  const handlePrint = useCallback(() => {
    const tableHTML = buildPracticeSheetHTML();
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      alert("Popup blocked. Please allow popups in your browser.");
      return;
    }
    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head><meta charset="UTF-8"><title>Alphabet Writing Practice</title>
      <style>@page{size:A4 landscape;margin:12mm}
      *{print-color-adjust:exact;-webkit-print-color-adjust:exact}
      body{font-family:Georgia,serif;margin:.5rem}
      table{width:100%;border-collapse:collapse}td{border:1px solid #333;width:10%;height:5.6rem;font-size:4.55rem;text-align:center;vertical-align:middle}
      td.section-header{height:auto;font-size:0.875rem;font-weight:600;text-align:left;padding:0.25rem 0.5rem;background:#e2e8f0 !important}
      td:first-child{position:relative}
      td .pronunciation{font-size:0.875rem;position:absolute;right:0.25rem;bottom:0.25rem;font-weight:bold;color:#475569}
      td.sample{font-weight:bold;background:#f1f5f9 !important}td.trace{color:rgba(0,0,0,.25);background:#f8fafc !important}td.blank{background:#fff}
      </style></head>
      <body><h1 style="font-size:1.1rem;margin-bottom:.5rem">Alphabet Writing Practice</h1>${tableHTML}</body>
      </html>`);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 300);
  }, [buildPracticeSheetHTML]);

  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-center lg:items-start">
        <div className="flex-shrink-0 rounded-xl border border-border bg-surface p-6 text-center">
          <h2 className="mb-4 border-b-2 border-blue-500 pb-2 text-lg font-semibold text-slate-100">
            Full letter list (A–Z)
          </h2>
          <div className="space-y-6">
            {ALPHABET_ROWS.map(([rowLabel, start, count]) => (
              <section key={rowLabel}>
                <ul className="flex flex-wrap justify-start gap-2">
                  {ALPHABET_DATA.slice(start, start + count).map((item, i) => {
                    const idx = start + i;
                    const isSelected = selectedIndex === idx;
                    return (
                      <li
                        key={item.char}
                        role="button"
                        tabIndex={0}
                        onClick={() => setSelectedIndex(idx)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setSelectedIndex(idx);
                          }
                        }}
                        className={`flex w-[7rem] min-w-[7rem] flex-col items-center justify-center rounded-lg border px-2 py-3 transition-all cursor-pointer ${
                          isSelected
                            ? "border-blue-500 bg-slate-700 shadow-lg"
                            : "border-border bg-background hover:border-blue-500 hover:shadow-md"
                        }`}
                      >
                        <span className="mb-0.5 font-serif text-4xl text-slate-100">{item.char}</span>
                        <span className="mb-1 font-serif text-2xl text-slate-400">{item.lower}</span>
                        <span className="text-sm text-slate-500">{item.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>
        </div>

        <div className="sticky top-24 flex-shrink-0 rounded-xl border border-border bg-surface p-6 lg:w-[280px]">
          <h2 className="mb-4 border-b-2 border-blue-500 pb-2 text-lg font-semibold text-slate-100">
            Letter details
          </h2>
          {!selectedItem ? (
            <p className="text-slate-500">Click a letter to see writing tip and pronunciation.</p>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setViewMode("upper")}
                  className={`rounded px-3 py-1 text-sm ${viewMode === "upper" ? "border-blue-500 bg-slate-700 text-slate-100" : "border-border text-slate-400 hover:text-slate-200"} border`}
                >
                  Uppercase
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("lower")}
                  className={`rounded px-3 py-1 text-sm ${viewMode === "lower" ? "border-blue-500 bg-slate-700 text-slate-100" : "border-border text-slate-400 hover:text-slate-200"} border`}
                >
                  Lowercase
                </button>
              </div>
              <div className="font-serif text-5xl text-slate-100">{displayChar}</div>
              <div className="text-lg text-slate-500">{selectedItem.name}</div>
              <div className="w-full rounded-lg bg-background p-3">
                <h3 className="mb-1 text-sm font-medium text-slate-200">Stroke order</h3>
                {viewMode === "upper" ? (
                  <>
                    <span className="mb-2 block text-sm text-slate-500">
                      ({displayStrokes} stroke{displayStrokes > 1 ? "s" : ""})
                    </span>
                    <div className="mx-auto mb-2 flex aspect-square max-w-[140px] items-center justify-center">
                      <svg ref={svgRef} key={`${replayKey}-${selectedIndex}`} viewBox="0 0 100 100" className="lang-stroke-svg alphabet h-full w-full text-slate-100">
                        {strokePaths?.map((d, i) => (
                          <path
                            key={i}
                            d={d}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        ))}
                      </svg>
                    </div>
                    <button
                      type="button"
                      onClick={handleReplay}
                      className="flex items-center gap-2 rounded-lg border border-border px-3 py-1.5 text-sm hover:border-slate-600"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                        <path d="M3 3v5h5" />
                      </svg>
                      Replay
                    </button>
                  </>
                ) : (
                  <p className="text-sm text-slate-500">Stroke order is shown for uppercase letters only.</p>
                )}
              </div>
              <div className="w-full rounded-lg bg-background p-3">
                <h3 className="mb-1 text-sm font-medium text-slate-200">Writing tip</h3>
                <p className="text-sm text-slate-400">{displayTip}</p>
              </div>
              <button
                type="button"
                onClick={() => speak(selectedItem.name)}
                className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 hover:border-slate-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                </svg>
                Play
              </button>
            </div>
          )}
        </div>
      </div>

      <section className="rounded-xl border border-border bg-surface p-6">
        <h2 id="practice-sheet-heading" className="mb-2 border-b-2 border-blue-500 pb-2 text-lg font-semibold text-slate-100">
          Handwriting Practice Sheet
        </h2>
        <p className="mb-4 text-sm text-slate-500">
          <strong>Column 1</strong> = model letter → <strong>Columns 2–5</strong> = trace the faint letter →{" "}
          <strong>Columns 6–10</strong> = write in the blank cells. Generate and print below.
        </p>
        <div className="mb-4 flex flex-wrap gap-4">
          {(["upper", "lower", "both"] as const).map((mode) => (
            <label key={mode} className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="practiceSheetMode"
                value={mode}
                checked={practiceSheetMode === mode}
                onChange={() => setPracticeSheetMode(mode)}
              />
              <span className="text-sm text-slate-300">
                {mode === "upper" && "Uppercase (A–Z)"}
                {mode === "lower" && "Lowercase (a–z)"}
                {mode === "both" && "Both (Uppercase + Lowercase)"}
              </span>
            </label>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setShowPractice(true)}
            className="rounded-lg border border-blue-500 bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Generate sheet
          </button>
          <button
            type="button"
            onClick={handlePrint}
            className="rounded-lg border border-border px-4 py-2 text-sm hover:border-slate-600"
          >
            Print
          </button>
        </div>
        {showPractice && (
          <div className="scrollbar-thin mt-4 max-h-[70vh] overflow-auto rounded-lg border border-border bg-white p-4 pr-2 print:max-h-none">
            <style>{`
              .practice-sheet-table{width:100%;border-collapse:collapse;min-width:56rem}
              .practice-sheet-table td{border:1px solid #334155;width:10%;height:5.6rem;font-size:4.55rem;text-align:center;vertical-align:middle}
              .practice-sheet-table td.section-header{height:auto;font-size:0.875rem;font-weight:600;text-align:left;padding:0.25rem 0.5rem;background:#e2e8f0}
              .practice-sheet-table td.sample{font-weight:bold;background:#f1f5f9}
              .practice-sheet-table td.trace{color:rgba(0,0,0,0.25);background:#f8fafc}
              .practice-sheet-table td.blank{background:#fff}
              .practice-sheet-table td:first-child{position:relative}
              .practice-sheet-table td .pronunciation{font-size:0.875rem;position:absolute;right:0.25rem;bottom:0.25rem;font-weight:bold;color:#475569}
            `}</style>
            <div
              className="font-serif"
              dangerouslySetInnerHTML={{ __html: buildPracticeSheetHTML() }}
            />
          </div>
        )}
      </section>
    </div>
  );
}
