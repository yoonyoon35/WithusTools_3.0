"use client";

import { useState, useCallback, useRef, useEffect } from "react";

const HANGUL_DATA = [
  { char: "ㄱ", romaji: "g/k", strokes: 2, tip: "Top horizontal, then the angled stroke." },
  { char: "ㄴ", romaji: "n", strokes: 2, tip: "Horizontal, then the vertical on the left." },
  { char: "ㄷ", romaji: "d/t", strokes: 3, tip: "Top horizontal, two verticals, then bottom horizontal." },
  { char: "ㄹ", romaji: "r/l", strokes: 5, tip: "Two small horizontals, vertical, then the bottom shape." },
  { char: "ㅁ", romaji: "m", strokes: 4, tip: "Square: left vertical, top and bottom horizontals, right vertical." },
  { char: "ㅂ", romaji: "b/p", strokes: 4, tip: "Outer box with two horizontals inside." },
  { char: "ㅅ", romaji: "s", strokes: 2, tip: "V shape: left diagonal, then right diagonal." },
  { char: "ㅇ", romaji: "-/ng", strokes: 1, tip: "Single stroke: circle (oval)." },
  { char: "ㅈ", romaji: "j", strokes: 3, tip: "Top horizontal, then the shape below (like ㅅ with a bar)." },
  { char: "ㅊ", romaji: "ch", strokes: 4, tip: "Like ㅈ with an extra stroke on top." },
  { char: "ㅋ", romaji: "k", strokes: 3, tip: "Vertical with two horizontals and a small stroke." },
  { char: "ㅌ", romaji: "t", strokes: 4, tip: "Top horizontal, then the shape below." },
  { char: "ㅍ", romaji: "p", strokes: 4, tip: "Vertical through two horizontals, plus top stroke." },
  { char: "ㅎ", romaji: "h", strokes: 3, tip: "Horizontal, vertical through it, then the curve on top." },
  { char: "ㅏ", romaji: "a", strokes: 2, tip: "Vertical line, then the short horizontal on the right." },
  { char: "ㅑ", romaji: "ya", strokes: 3, tip: "Vertical, then two short horizontals on the right." },
  { char: "ㅓ", romaji: "eo", strokes: 2, tip: "Vertical line, then the short horizontal on the left." },
  { char: "ㅕ", romaji: "yeo", strokes: 3, tip: "Vertical, then two short horizontals on the left." },
  { char: "ㅗ", romaji: "o", strokes: 2, tip: "Horizontal, then the short vertical on top." },
  { char: "ㅛ", romaji: "yo", strokes: 3, tip: "Horizontal, then two short verticals on top." },
  { char: "ㅜ", romaji: "u", strokes: 2, tip: "Horizontal, then the short vertical below." },
  { char: "ㅠ", romaji: "yu", strokes: 3, tip: "Horizontal, then two short verticals below." },
  { char: "ㅡ", romaji: "eu", strokes: 1, tip: "Single horizontal stroke." },
  { char: "ㅣ", romaji: "i", strokes: 1, tip: "Single vertical stroke." },
  { char: "ㄲ", romaji: "kk", strokes: 2, tip: "Double ㄱ. Two strokes like ㄱ, written twice." },
  { char: "ㄸ", romaji: "tt", strokes: 3, tip: "Double ㄷ. Strong t sound." },
  { char: "ㅃ", romaji: "pp", strokes: 4, tip: "Double ㅂ. Strong p sound." },
  { char: "ㅆ", romaji: "ss", strokes: 2, tip: "Double ㅅ. Two ㅅ shapes stacked." },
  { char: "ㅉ", romaji: "jj", strokes: 3, tip: "Double ㅈ. Strong j sound." },
  { char: "ㅐ", romaji: "ae", strokes: 3, tip: "ㅏ + ㅣ. Open e sound." },
  { char: "ㅒ", romaji: "yae", strokes: 4, tip: "ㅑ + ㅣ. Y plus ae." },
  { char: "ㅔ", romaji: "e", strokes: 3, tip: "ㅓ + ㅣ. Close e sound." },
  { char: "ㅖ", romaji: "ye", strokes: 4, tip: "ㅕ + ㅣ. Y plus e." },
  { char: "ㅘ", romaji: "wa", strokes: 3, tip: "ㅗ + ㅏ. W plus a." },
  { char: "ㅙ", romaji: "wae", strokes: 4, tip: "ㅗ + ㅐ. W plus ae." },
  { char: "ㅚ", romaji: "oe", strokes: 3, tip: "ㅗ + ㅣ. O plus i." },
  { char: "ㅝ", romaji: "wo", strokes: 3, tip: "ㅜ + ㅓ. W plus eo." },
  { char: "ㅞ", romaji: "we", strokes: 4, tip: "ㅜ + ㅔ. W plus e." },
  { char: "ㅟ", romaji: "wi", strokes: 3, tip: "ㅜ + ㅣ. W plus i." },
  { char: "ㅢ", romaji: "ui", strokes: 2, tip: "ㅡ + ㅣ. Eu plus i." },
];

const STROKE_TEMPLATES = [
  "M 18 50 L 82 50",
  "M 50 18 L 50 82",
  "M 22 22 L 78 78",
  "M 50 22 Q 82 50 50 78",
  "M 30 30 L 70 30 L 70 70 L 30 70 Z",
];

const HANGUL_SVG_CDN = "https://cdn.jsdelivr.net/gh/MagisterAdamus/hangeul-stroke-order@main/svg";
const HANGUL_SVG_FILES = [
  "01_giyeok", "02_nieun", "03_digeut", "04_rieul", "05_mieum", "06_bieup", "07_siot", "08_ieung",
  "09_jieut", "10_chieut", "11_kieuk", "12_tieut", "13_pieup", "14_hieut",
  "15_a", "16_ya", "17_eo", "18_yeo", "19_o", "20_yo", "21_u", "22_yu", "23_eu", "24_i",
];
const HANGUL_COMPOUND_VOWEL_SVG: Record<number, string> = {
  29: "25_ae", 30: "26_yae", 31: "27_e", 32: "28_ye", 33: "32_wa", 34: "34_wae",
  35: "29_oe", 36: "33_wo", 37: "35_we", 38: "30_wi", 39: "31_ui",
};
const HANGUL_DOUBLE_CONSONANT_BASE: Record<number, number> = { 24: 0, 25: 2, 26: 5, 27: 6, 28: 8 };

const STROKE_ANIM_DURATION = 0.5;
const STROKE_ANIM_GAP = 0.35;

const HANGUL_ROWS: [string, number, number][] = [
  ["Consonants", 0, 14],
  ["Vowels", 14, 10],
  ["Double consonants (쌍자음)", 24, 5],
  ["Compound vowels (복합모음)", 29, 11],
];

type PracticeSet = "all" | "consonants" | "vowels" | "double" | "compound";

type HangulItem = (typeof HANGUL_DATA)[number];

export default function HangulStudy() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showPractice, setShowPractice] = useState(false);
  const [practiceSet, setPracticeSet] = useState<PracticeSet>("all");
  const [replayKey, setReplayKey] = useState(0);

  const selectedItem = selectedIndex !== null ? HANGUL_DATA[selectedIndex] : null;

  const speak = useCallback((text: string) => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "ko-KR";
      u.rate = 0.85;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    }
  }, []);

  const handleReplay = useCallback(() => {
    if (selectedItem) {
      setReplayKey((k) => k + 1);
      speak(selectedItem.char);
    }
  }, [selectedItem, speak]);

  const strokeContainerRef = useRef<HTMLDivElement>(null);
  const svgCacheRef = useRef<Record<number, string>>({});

  useEffect(() => {
    if (!selectedItem || selectedIndex === null || !strokeContainerRef.current) return;
    const container = strokeContainerRef.current;
    const index = selectedIndex;
    const cached = svgCacheRef.current[index];

    const buildDoubleConsonantSvgFromBase = (svgText: string): string | null => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(svgText, "image/svg+xml");
      const sourceSvg = doc.querySelector("svg");
      if (!sourceSvg) return null;
      const viewBox = sourceSvg.getAttribute("viewBox") || "0 0 100 100";
      const parts = viewBox.split(/\s+/).map(Number);
      const w = parts[2] || 100;
      const h = parts[3] || 100;
      const overlap = w * 0.12;
      const totalW = w * 2 - overlap;
      const newSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      newSvg.setAttribute("viewBox", `0 0 ${totalW} ${h}`);
      const g1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
      const g2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g2.setAttribute("transform", `translate(${w - overlap},0)`);
      Array.from(sourceSvg.childNodes).forEach((node) => {
        g1.appendChild(node.cloneNode(true));
        g2.appendChild(node.cloneNode(true));
      });
      newSvg.appendChild(g1);
      newSvg.appendChild(g2);
      return new XMLSerializer().serializeToString(newSvg);
    };

    /** hangeul-stroke-order CDN SVG: 정적 표시 (숫자·화살표·자모 포함). 애니메이션 적용 안 함. */
    const injectReal = (svgText: string) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(svgText, "image/svg+xml");
      const svg = doc.querySelector("svg");
      if (!svg) {
        container.innerHTML = "";
        return;
      }
      svg.classList.add("lang-stroke-svg", "hangul", "hangul-stroke-svg-real", "h-full", "w-full");
      container.innerHTML = "";
      container.appendChild(svg);
    };

    const buildFallback = () => {
      const n = Math.min(selectedItem.strokes, STROKE_TEMPLATES.length);
      const paths = STROKE_TEMPLATES.slice(0, n);
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("viewBox", "0 0 100 100");
      svg.setAttribute("class", "lang-stroke-svg hangul h-full w-full text-slate-100");
      paths.forEach((d) => {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", d);
        path.setAttribute("fill", "none");
        path.setAttribute("stroke", "#ffffff");
        path.setAttribute("stroke-width", "6");
        const len = 400;
        const i = paths.indexOf(d);
        const delay = i * (STROKE_ANIM_DURATION + STROKE_ANIM_GAP);
        path.style.strokeDasharray = String(len);
        path.style.strokeDashoffset = String(len);
        path.style.animation = `hangul-stroke-draw ${STROKE_ANIM_DURATION}s ease-out forwards`;
        path.style.animationDelay = `${delay}s`;
        svg.appendChild(path);
      });
      container.innerHTML = "";
      container.appendChild(svg);
    };

    const doubleBase = HANGUL_DOUBLE_CONSONANT_BASE[index];
    const compoundFile = HANGUL_COMPOUND_VOWEL_SVG[index];
    const basicFile = index < HANGUL_SVG_FILES.length ? HANGUL_SVG_FILES[index] : undefined;

    const doFetch = () => {
      if (cached) {
        injectReal(cached);
        return;
      }
      container.innerHTML = '<span class="text-slate-500 text-sm">…</span>';

      if (doubleBase !== undefined) {
        const url = `${HANGUL_SVG_CDN}/${HANGUL_SVG_FILES[doubleBase]}.svg`;
        fetch(url)
          .then((r) => (r.ok ? r.text() : Promise.reject(new Error("Not found"))))
          .then((baseSvgText) => {
            const combined = buildDoubleConsonantSvgFromBase(baseSvgText);
            if (combined) {
              svgCacheRef.current[index] = combined;
              injectReal(combined);
            } else {
              buildFallback();
            }
          })
          .catch(() => buildFallback());
        return;
      }

      const svgFile = basicFile ?? compoundFile;
      if (!svgFile) {
        buildFallback();
        return;
      }
      const url = `${HANGUL_SVG_CDN}/${svgFile}.svg`;
      fetch(url)
        .then((r) => (r.ok ? r.text() : Promise.reject(new Error("Not found"))))
        .then((svgText) => {
          svgCacheRef.current[index] = svgText;
          injectReal(svgText);
        })
        .catch(() => buildFallback());
    };

    doFetch();
  }, [selectedItem, selectedIndex, replayKey]);

  const getPracticeCharList = useCallback((): { char: string; romaji: string }[] => {
    if (practiceSet === "all") return HANGUL_DATA.map(({ char, romaji }) => ({ char, romaji }));
    if (practiceSet === "consonants") return HANGUL_DATA.slice(0, 14).map(({ char, romaji }) => ({ char, romaji }));
    if (practiceSet === "vowels") return HANGUL_DATA.slice(14, 24).map(({ char, romaji }) => ({ char, romaji }));
    if (practiceSet === "double") return HANGUL_DATA.slice(24, 29).map(({ char, romaji }) => ({ char, romaji }));
    if (practiceSet === "compound") return HANGUL_DATA.slice(29, 40).map(({ char, romaji }) => ({ char, romaji }));
    return HANGUL_DATA.map(({ char, romaji }) => ({ char, romaji }));
  }, [practiceSet]);

  const buildPracticeSheetHTML = useCallback(() => {
    const items = getPracticeCharList();
    const rows = items.map(
      ({ char, romaji }) =>
        `<tr>
          <td class="sample border border-slate-600 p-0 w-[10%] align-middle text-center font-bold bg-slate-100 text-slate-900 relative">
            <span class="block">${char}</span>
            <span class="pronunciation absolute right-1 bottom-1 text-sm font-bold text-slate-600">${romaji}</span>
          </td>
          ${Array(4).fill(`<td class="trace border border-slate-600 p-0 w-[10%] align-middle text-center">${char}</td>`).join("")}
          ${Array(5).fill('<td class="blank border border-slate-600 p-0 w-[10%] align-middle text-center bg-white"></td>').join("")}
        </tr>`
    );
    return `<table class="practice-sheet-table w-full min-w-[56rem] border-collapse table-fixed"><colgroup>${Array(10).fill("<col />").join("")}</colgroup><tbody>${rows.join("")}</tbody></table>`;
  }, [getPracticeCharList]);

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
      <head><meta charset="UTF-8"><title>Hangul Writing Practice</title>
      <style>@page{size:A4 landscape;margin:12mm}
      *{print-color-adjust:exact;-webkit-print-color-adjust:exact}
      body{font-family:'Malgun Gothic','Noto Sans KR',sans-serif;margin:.5rem}
      table{width:100%;border-collapse:collapse}td{border:1px solid #333;width:10%;height:5.6rem;font-size:4.55rem;text-align:center;vertical-align:middle}
      td:first-child{position:relative}
      td .pronunciation{font-size:0.875rem;position:absolute;right:0.25rem;bottom:0.25rem;font-weight:bold;color:#475569}
      td.sample{font-weight:bold;background:#f1f5f9 !important}td.trace{color:rgba(0,0,0,.25);background:#f8fafc !important}td.blank{background:#fff}
      </style></head>
      <body><h1 style="font-size:1.1rem;margin-bottom:.5rem">Hangul Writing Practice</h1>${tableHTML}</body>
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
        <div className="flex-shrink-0 rounded-xl border border-border bg-surface p-6">
          <h2 className="mb-4 border-b-2 border-blue-500 pb-2 text-lg font-semibold text-slate-100">
            Full character list
          </h2>
          <div className="space-y-6">
            {HANGUL_ROWS.map(([rowLabel, start, count]) => (
              <section key={rowLabel}>
                <h3 className="mb-2 text-sm font-semibold text-slate-200">{rowLabel}</h3>
                <ul className="grid grid-cols-5 gap-2">
                  {HANGUL_DATA.slice(start, start + count).map((item, i) => {
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
                        <span className="mb-1 font-serif text-4xl text-slate-100">{item.char}</span>
                        <span className="text-sm text-slate-500">{item.romaji}</span>
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
            Character details
          </h2>
          {!selectedItem ? (
            <p className="text-slate-500">Click a character to see writing tip and pronunciation.</p>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <div className="text-5xl text-slate-100">{selectedItem.char}</div>
              <div className="text-lg text-slate-500">{selectedItem.romaji}</div>
              <div className="w-full rounded-lg bg-background p-3">
                <h3 className="mb-1 text-sm font-medium text-slate-200">
                  Stroke order{" "}
                  <span className="font-normal text-slate-500">
                    ({selectedItem.strokes} stroke{selectedItem.strokes > 1 ? "s" : ""})
                  </span>
                </h3>
                <div
                  key={replayKey}
                  ref={strokeContainerRef}
                  className="mx-auto mb-2 flex aspect-square max-w-[140px] min-h-[140px] items-center justify-center"
                />
                <button
                  type="button"
                  onClick={handleReplay}
                  className="flex items-center gap-2 rounded-lg border border-border px-3 py-1.5 text-sm hover:border-slate-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                  </svg>
                  Replay
                </button>
              </div>
              <div className="w-full rounded-lg bg-background p-3">
                <h3 className="mb-1 text-sm font-medium text-slate-200">Writing tip</h3>
                <p className="text-sm text-slate-400">{selectedItem.tip}</p>
              </div>
              <button
                type="button"
                onClick={() => speak(selectedItem.char)}
                className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 hover:border-slate-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
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
          <strong>Column 1</strong> = model character → <strong>Columns 2–5</strong> = trace the faint character →{" "}
          <strong>Columns 6–10</strong> = write in the blank cells.
        </p>
        <div className="mb-4 flex flex-wrap gap-4">
          {(
            [
              ["all", "All Jamo (40 chars)"],
              ["consonants", "Consonants only (14)"],
              ["vowels", "Vowels only (10)"],
              ["double", "Double consonants (5)"],
              ["compound", "Compound vowels (11)"],
            ] as const
          ).map(([value, label]) => (
            <label key={value} className="flex cursor-pointer items-center gap-2 text-sm text-slate-400">
              <input
                type="radio"
                name="practiceCharSet"
                value={value}
                checked={practiceSet === value}
                onChange={() => setPracticeSet(value)}
              />
              {label}
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
              .practice-sheet-table td.sample{font-weight:bold;background:#f1f5f9}
              .practice-sheet-table td.trace{color:rgba(0,0,0,0.25);background:#f8fafc}
              .practice-sheet-table td.blank{background:#fff}
              .practice-sheet-table td:first-child{position:relative}
              .practice-sheet-table td .pronunciation{font-size:0.875rem;position:absolute;right:0.25rem;bottom:0.25rem;font-weight:bold;color:#475569}
            `}</style>
            <div className="text-slate-900" dangerouslySetInnerHTML={{ __html: buildPracticeSheetHTML() }} />
          </div>
        )}
      </section>
    </div>
  );
}
