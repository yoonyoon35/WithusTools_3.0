"use client";

import { useState, useCallback, useRef, useEffect } from "react";

const HIRAGANA_DATA = [
  { char: "あ", romaji: "a", strokes: 3, tip: "Start with the horizontal stroke, then the vertical, then the curve." },
  { char: "い", romaji: "i", strokes: 2, tip: "Two strokes: left down, then right down." },
  { char: "う", romaji: "u", strokes: 3, tip: "Vertical stroke first, then the curve from top right." },
  { char: "え", romaji: "e", strokes: 2, tip: "One horizontal, then the angled stroke with a hook." },
  { char: "お", romaji: "o", strokes: 3, tip: "Horizontal, then the crossing stroke, then the loop." },
  { char: "か", romaji: "ka", strokes: 2, tip: "Horizontal and vertical cross, then the curve on the right." },
  { char: "き", romaji: "ki", strokes: 3, tip: "Two horizontals, then vertical through them, then the hook." },
  { char: "く", romaji: "ku", strokes: 1, tip: "Single stroke: angle down from left to right." },
  { char: "け", romaji: "ke", strokes: 3, tip: "Vertical stroke, then two horizontals." },
  { char: "こ", romaji: "ko", strokes: 2, tip: "Two horizontal strokes, one above the other." },
  { char: "さ", romaji: "sa", strokes: 2, tip: "Cross shape first, then the curved part on the right." },
  { char: "し", romaji: "shi", strokes: 1, tip: "Single curved stroke from top to bottom." },
  { char: "す", romaji: "su", strokes: 2, tip: "Vertical stroke, then the loop at the bottom." },
  { char: "せ", romaji: "se", strokes: 3, tip: "Vertical line with two horizontals crossing it." },
  { char: "そ", romaji: "so", strokes: 1, tip: "One continuous stroke: curve and zigzag." },
  { char: "た", romaji: "ta", strokes: 4, tip: "Two horizontals, vertical, then the small cross at bottom." },
  { char: "ち", romaji: "chi", strokes: 2, tip: "Curved stroke on the left, then the right part." },
  { char: "つ", romaji: "tsu", strokes: 1, tip: "Single stroke: small curve opening to the right." },
  { char: "て", romaji: "te", strokes: 1, tip: "One stroke: horizontal, then down and hook." },
  { char: "と", romaji: "to", strokes: 2, tip: "Horizontal stroke, then the curved part below." },
  { char: "な", romaji: "na", strokes: 4, tip: "Cross, then the vertical with a curve and loop." },
  { char: "に", romaji: "ni", strokes: 3, tip: "Vertical stroke, then two horizontals on the right." },
  { char: "ぬ", romaji: "nu", strokes: 2, tip: "Curve on the left, then the loop crossing it." },
  { char: "ね", romaji: "ne", strokes: 2, tip: "Vertical with curve, then the loop at the bottom." },
  { char: "の", romaji: "no", strokes: 1, tip: "Single stroke: circle with a small opening." },
  { char: "は", romaji: "ha", strokes: 3, tip: "Vertical line, then two horizontals, then the right curve." },
  { char: "ひ", romaji: "hi", strokes: 2, tip: "Two curved strokes forming an arc shape." },
  { char: "ふ", romaji: "fu", strokes: 4, tip: "Horizontal, then three strokes: vertical and two curves." },
  { char: "へ", romaji: "he", strokes: 1, tip: "Single stroke: diagonal down to the right." },
  { char: "ほ", romaji: "ho", strokes: 4, tip: "Vertical, two horizontals, then the right side curve." },
  { char: "ま", romaji: "ma", strokes: 3, tip: "Vertical through two horizontals, then the right curve." },
  { char: "み", romaji: "mi", strokes: 2, tip: "Vertical stroke, then the curved part with a loop." },
  { char: "む", romaji: "mu", strokes: 3, tip: "Horizontal, vertical, then the loop at the bottom." },
  { char: "め", romaji: "me", strokes: 2, tip: "Curved stroke on the left, then the right curve with loop." },
  { char: "も", romaji: "mo", strokes: 3, tip: "Vertical through two horizontals, then the bottom curve." },
  { char: "や", romaji: "ya", strokes: 2, tip: "Left stroke first, then the right stroke crossing it." },
  { char: "ゆ", romaji: "yu", strokes: 2, tip: "Curved stroke on the left, then the loop on the right." },
  { char: "よ", romaji: "yo", strokes: 2, tip: "Vertical stroke, then the curved part at the bottom." },
  { char: "ら", romaji: "ra", strokes: 2, tip: "Short horizontal, then the curved stroke below." },
  { char: "り", romaji: "ri", strokes: 2, tip: "Two vertical strokes with a small hook at the top." },
  { char: "る", romaji: "ru", strokes: 1, tip: "One stroke: loop with a tail at the bottom." },
  { char: "れ", romaji: "re", strokes: 2, tip: "Vertical with a hook, then the curved part on the right." },
  { char: "ろ", romaji: "ro", strokes: 1, tip: "Single stroke: curve and zigzag similar to る but simpler." },
  { char: "わ", romaji: "wa", strokes: 2, tip: "Vertical with a hook, then the right curve." },
  { char: "を", romaji: "wo", strokes: 3, tip: "Horizontal, then the vertical and the curve (used as object particle)." },
  { char: "ん", romaji: "n", strokes: 1, tip: "Single stroke: two connected curves." },
];

const HIRAGANA_DAKUON: Record<string, { char: string; romaji: string; strokes: number; tip: string }> = {
  "か": { char: "が", romaji: "ga", strokes: 2, tip: "Same as か with voiced mark (゛)." },
  "き": { char: "ぎ", romaji: "gi", strokes: 3, tip: "Same as き with voiced mark (゛)." },
  "く": { char: "ぐ", romaji: "gu", strokes: 1, tip: "Same as く with voiced mark (゛)." },
  "け": { char: "げ", romaji: "ge", strokes: 3, tip: "Same as け with voiced mark (゛)." },
  "こ": { char: "ご", romaji: "go", strokes: 2, tip: "Same as こ with voiced mark (゛)." },
  "さ": { char: "ざ", romaji: "za", strokes: 2, tip: "Same as さ with voiced mark (゛)." },
  "し": { char: "じ", romaji: "ji", strokes: 1, tip: "Same as し with voiced mark (゛)." },
  "す": { char: "ず", romaji: "zu", strokes: 2, tip: "Same as す with voiced mark (゛)." },
  "せ": { char: "ぜ", romaji: "ze", strokes: 3, tip: "Same as せ with voiced mark (゛)." },
  "そ": { char: "ぞ", romaji: "zo", strokes: 1, tip: "Same as そ with voiced mark (゛)." },
  "た": { char: "だ", romaji: "da", strokes: 4, tip: "Same as た with voiced mark (゛)." },
  "ち": { char: "ぢ", romaji: "ji", strokes: 2, tip: "Same as ち with voiced mark (゛)." },
  "つ": { char: "づ", romaji: "zu", strokes: 1, tip: "Same as つ with voiced mark (゛)." },
  "て": { char: "で", romaji: "de", strokes: 1, tip: "Same as て with voiced mark (゛)." },
  "と": { char: "ど", romaji: "do", strokes: 2, tip: "Same as と with voiced mark (゛)." },
  "は": { char: "ば", romaji: "ba", strokes: 3, tip: "Same as は with voiced mark (゛)." },
  "ひ": { char: "び", romaji: "bi", strokes: 2, tip: "Same as ひ with voiced mark (゛)." },
  "ふ": { char: "ぶ", romaji: "bu", strokes: 4, tip: "Same as ふ with voiced mark (゛)." },
  "へ": { char: "べ", romaji: "be", strokes: 1, tip: "Same as へ with voiced mark (゛)." },
  "ほ": { char: "ぼ", romaji: "bo", strokes: 4, tip: "Same as ほ with voiced mark (゛)." },
};

const HIRAGANA_HANDAKUON: Record<string, { char: string; romaji: string; strokes: number; tip: string }> = {
  "は": { char: "ぱ", romaji: "pa", strokes: 3, tip: "Same as は with semi-voiced mark (゜)." },
  "ひ": { char: "ぴ", romaji: "pi", strokes: 2, tip: "Same as ひ with semi-voiced mark (゜)." },
  "ふ": { char: "ぷ", romaji: "pu", strokes: 4, tip: "Same as ふ with semi-voiced mark (゜)." },
  "へ": { char: "ぺ", romaji: "pe", strokes: 1, tip: "Same as へ with semi-voiced mark (゜)." },
  "ほ": { char: "ぽ", romaji: "po", strokes: 4, tip: "Same as ほ with semi-voiced mark (゜)." },
};

const HA_ROW_INDICES = [25, 26, 27, 28, 29]; // は ひ ふ へ ほ

const STROKE_TEMPLATES = [
  "M 18 50 L 82 50",
  "M 50 18 L 50 82",
  "M 22 22 L 78 78",
  "M 50 22 Q 82 50 50 78",
];

const STROKESVG_CDN = "https://cdn.jsdelivr.net/gh/zhengkyl/strokesvg@main/dist/hiragana";
const STROKE_ANIM_DURATION = 0.6;
const STROKE_ANIM_GAP = 0.5;

const HIRAGANA_ROWS: [string, number, number][] = [
  ["あ行 (a-row)", 0, 5],
  ["か行 (ka-row)", 5, 5],
  ["さ行 (sa-row)", 10, 5],
  ["た行 (ta-row)", 15, 5],
  ["な行 (na-row)", 20, 5],
  ["は行 (ha-row)", 25, 5],
  ["ま行 (ma-row)", 30, 5],
  ["や行 (ya-row)", 35, 3],
  ["ら行 (ra-row)", 38, 5],
  ["わ行 (wa-row)", 43, 3],
];

type HiraganaItem = (typeof HIRAGANA_DATA)[number];

export default function HiraganaStudy() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [variantMode, setVariantMode] = useState<"base" | "dakuon" | "handakuon">("base");
  const [showPractice, setShowPractice] = useState(false);
  const [replayKey, setReplayKey] = useState(0);
  const [practiceSheetMode, setPracticeSheetMode] = useState<"basic" | "dakuon" | "all">("basic");

  const baseItem = selectedIndex !== null ? HIRAGANA_DATA[selectedIndex] : null;
  const isHaRow = selectedIndex !== null && HA_ROW_INDICES.includes(selectedIndex);
  const dakuonItem = baseItem && HIRAGANA_DAKUON[baseItem.char];
  const handakuonItem = baseItem && HIRAGANA_HANDAKUON[baseItem.char];

  const selectedItem =
    variantMode === "dakuon" && dakuonItem
      ? dakuonItem
      : variantMode === "handakuon" && handakuonItem
        ? handakuonItem
        : baseItem;

  const strokeContainerRef = useRef<HTMLDivElement>(null);
  const svgCacheRef = useRef<Record<string, string>>({});

  useEffect(() => {
    if (!selectedItem || !strokeContainerRef.current) return;
    const container = strokeContainerRef.current;
    const char = selectedItem.char;
    const cached = svgCacheRef.current[char];

    const injectFallback = () => {
      const n = Math.min(selectedItem.strokes, STROKE_TEMPLATES.length);
      const paths = STROKE_TEMPLATES.slice(0, n);
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("viewBox", "0 0 100 100");
      svg.setAttribute("class", "lang-stroke-svg hiragana h-full w-full text-slate-100");
      paths.forEach((d) => {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", d);
        path.setAttribute("fill", "none");
        path.setAttribute("stroke", "#ffffff");
        path.setAttribute("stroke-width", "6");
        path.setAttribute("stroke-linecap", "round");
        path.setAttribute("stroke-linejoin", "round");
        const len = 400;
        const i = paths.indexOf(d);
        const delay = i * (STROKE_ANIM_DURATION + STROKE_ANIM_GAP);
        path.style.strokeDasharray = String(len);
        path.style.strokeDashoffset = String(len);
        path.style.animation = `hiragana-stroke-draw ${STROKE_ANIM_DURATION}s ease-out forwards`;
        path.style.animationDelay = `${delay}s`;
        svg.appendChild(path);
      });
      container.innerHTML = "";
      container.appendChild(svg);
    };

    const injectRealSvg = (svgText: string) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(svgText, "image/svg+xml");
      const svg = doc.querySelector("svg");
      if (!svg) {
        injectFallback();
        return;
      }
      svg.classList.add("lang-stroke-svg", "hiragana", "h-full", "w-full", "text-slate-100");
      const shadowsGroup = svg.querySelector('[data-strokesvg="shadows"]');
      if (shadowsGroup) shadowsGroup.setAttribute("visibility", "hidden");
      const strokesGroup = svg.querySelector('[data-strokesvg="strokes"]');
      if (strokesGroup) {
        let strokeIndex = 0;
        Array.from(strokesGroup.children).forEach((node) => {
          const i = strokeIndex++;
          const paths = node instanceof SVGPathElement ? [node] : node.querySelectorAll("path");
          paths.forEach((path) => {
            const len = path.getTotalLength?.() ?? 500;
            const delay = i * (STROKE_ANIM_DURATION + STROKE_ANIM_GAP);
            path.style.strokeDasharray = String(len);
            path.style.strokeDashoffset = String(len);
            path.style.animation = `hiragana-stroke-draw ${STROKE_ANIM_DURATION}s ease-out forwards`;
            path.style.animationDelay = `${delay}s`;
            path.setAttribute("fill", "none");
            path.setAttribute("stroke", "#ffffff");
            path.setAttribute("stroke-width", "80");
          });
        });
      }
      container.innerHTML = "";
      container.appendChild(svg);
    };

    if (cached) {
      injectRealSvg(cached);
      return;
    }

    container.innerHTML = '<span class="text-slate-500 text-sm" aria-hidden="true">…</span>';
    const url = `${STROKESVG_CDN}/${encodeURIComponent(char)}.svg`;
    fetch(url)
      .then((r) => (r.ok ? r.text() : Promise.reject(new Error("Not found"))))
      .then((svgText) => {
        svgCacheRef.current[char] = svgText;
        injectRealSvg(svgText);
      })
      .catch(() => injectFallback());
  }, [selectedItem, replayKey]);

  const speak = useCallback((text: string) => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "ja-JP";
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

  const handleVariantClick = useCallback(
    (mode: "dakuon" | "handakuon") => {
      if (!baseItem || !isHaRow) return;
      const hasDakuon = !!HIRAGANA_DAKUON[baseItem.char];
      const hasHandakuon = !!HIRAGANA_HANDAKUON[baseItem.char];
      if (mode === "dakuon" && hasDakuon) setVariantMode("dakuon");
      if (mode === "handakuon" && hasHandakuon) setVariantMode("handakuon");
    },
    [baseItem, isHaRow]
  );

  const handleSelectChar = useCallback((idx: number) => {
    setSelectedIndex(idx);
    setVariantMode("base");
  }, []);

  const buildPracticeSheetHTML = useCallback(() => {
    const list: { char: string; romaji: string }[] = [];
    HIRAGANA_DATA.forEach((item) => {
      list.push({ char: item.char, romaji: item.romaji });
      if (practiceSheetMode === "dakuon" || practiceSheetMode === "all") {
        const d = HIRAGANA_DAKUON[item.char];
        if (d) list.push({ char: d.char, romaji: d.romaji });
      }
      if (practiceSheetMode === "all") {
        const h = HIRAGANA_HANDAKUON[item.char];
        if (h) list.push({ char: h.char, romaji: h.romaji });
      }
    });
    const rows = list.map(
      ({ char, romaji }) =>
        `<tr>
          <td class="sample border border-slate-600 p-0 w-[10%] align-middle text-center font-serif font-bold bg-slate-100 text-slate-900 relative">
            <span class="block">${char}</span>
            <span class="pronunciation absolute right-1 bottom-1 text-sm font-bold text-slate-600">${romaji}</span>
          </td>
          ${Array(4).fill(`<td class="trace border border-slate-600 p-0 w-[10%] align-middle text-center font-serif">${char}</td>`).join("")}
          ${Array(5).fill('<td class="blank border border-slate-600 p-0 w-[10%] align-middle text-center bg-white"></td>').join("")}
        </tr>`
    );
    return `<table class="practice-sheet-table w-full min-w-[56rem] border-collapse table-fixed"><colgroup>${Array(10).fill("<col />").join("")}</colgroup><tbody>${rows.join("")}</tbody></table>`;
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
      <head><meta charset="UTF-8"><title>Hiragana Writing Practice</title>
      <style>@page{size:A4 landscape;margin:12mm}
      *{print-color-adjust:exact;-webkit-print-color-adjust:exact}
      body{font-family:'Hiragino Kaku Gothic Pro','Yu Gothic',sans-serif;margin:.5rem}
      table{width:100%;border-collapse:collapse}td{border:1px solid #333;width:10%;height:5.6rem;font-size:4.55rem;text-align:center;vertical-align:middle}
      td:first-child{position:relative}
      td .pronunciation{font-size:0.875rem;position:absolute;right:0.25rem;bottom:0.25rem;font-weight:bold;color:#475569}
      td.sample{font-weight:bold;background:#f1f5f9 !important}td.trace{color:rgba(0,0,0,.25);background:#f8fafc !important}td.blank{background:#fff}
      </style></head>
      <body><h1 style="font-size:1.1rem;margin-bottom:.5rem">Hiragana Writing Practice</h1>${tableHTML}</body>
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
            Full character list (gojūon order)
          </h2>
          <div className="space-y-6">
            {HIRAGANA_ROWS.map(([rowLabel, start, count]) => (
              <section key={rowLabel}>
                <h3 className="mb-2 text-sm font-semibold text-slate-200">{rowLabel}</h3>
                <ul className="flex flex-wrap gap-2">
                  {HIRAGANA_DATA.slice(start, start + count).map((item, i) => {
                    const idx = start + i;
                    const isSelected = selectedIndex === idx;
                    return (
                      <li
                        key={item.char}
                        role="button"
                        tabIndex={0}
                        onClick={() => handleSelectChar(idx)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            handleSelectChar(idx);
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
              <div className="font-serif text-5xl text-slate-100">{selectedItem.char}</div>
              <div className="text-lg text-slate-500">{selectedItem.romaji}</div>
              <div className="w-full rounded-lg bg-background p-3">
                <h3 className="mb-1 text-sm font-medium text-slate-200">
                  Stroke order{" "}
                  <span className="font-normal text-slate-500">
                    ({selectedItem.strokes} stroke{selectedItem.strokes > 1 ? "s" : ""})
                  </span>
                </h3>
                {isHaRow && (
                  <div className="mb-2 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => handleVariantClick("dakuon")}
                      aria-pressed={variantMode === "dakuon"}
                      className={`rounded px-2 py-1 text-xs ${variantMode === "dakuon" ? "border-blue-500 bg-slate-700" : "border-border"} border`}
                    >
                      Dakuon (濁音)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleVariantClick("handakuon")}
                      aria-pressed={variantMode === "handakuon"}
                      className={`rounded px-2 py-1 text-xs ${variantMode === "handakuon" ? "border-blue-500 bg-slate-700" : "border-border"} border`}
                    >
                      Handakuon (半濁音)
                    </button>
                  </div>
                )}
                <div
                  key={replayKey}
                  ref={strokeContainerRef}
                  className="lang-stroke-svg mx-auto mb-2 flex aspect-square max-w-[140px] items-center justify-center [&>svg]:h-full [&>svg]:w-full"
                />
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
          <strong>Column 1</strong> = model character → <strong>Columns 2–5</strong> = trace →{" "}
          <strong>Columns 6–10</strong> = write in blank cells.
        </p>
        <div className="mb-4 flex flex-wrap gap-4">
          {(["basic", "dakuon", "all"] as const).map((mode) => (
            <label key={mode} className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="practiceCharSet"
                value={mode}
                checked={practiceSheetMode === mode}
                onChange={() => setPracticeSheetMode(mode)}
              />
              <span className="text-sm text-slate-300">
                {mode === "basic" && "Basic Hiragana (46 chars)"}
                {mode === "dakuon" && "Basic + Dakuon (濁音)"}
                {mode === "all" && "Basic + Dakuon + Handakuon (半濁音)"}
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
              .practice-sheet-table td.sample{font-weight:bold;background:#f1f5f9}
              .practice-sheet-table td.trace{color:rgba(0,0,0,0.25);background:#f8fafc}
              .practice-sheet-table td.blank{background:#fff}
              .practice-sheet-table td:first-child{position:relative}
              .practice-sheet-table td .pronunciation{font-size:0.875rem;position:absolute;right:0.25rem;bottom:0.25rem;font-weight:bold;color:#475569}
            `}</style>
            <div className="font-serif" dangerouslySetInnerHTML={{ __html: buildPracticeSheetHTML() }} />
          </div>
        )}
      </section>
    </div>
  );
}
