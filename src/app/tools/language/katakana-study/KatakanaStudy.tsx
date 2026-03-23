"use client";

import { useState, useCallback, useRef, useEffect } from "react";

const KATAKANA_DATA = [
  { char: "ア", romaji: "a", strokes: 2, tip: "Diagonal stroke down-right, then the vertical stroke on the right." },
  { char: "イ", romaji: "i", strokes: 2, tip: "Short diagonal, then the longer vertical stroke." },
  { char: "ウ", romaji: "u", strokes: 3, tip: "Short horizontal, then two strokes forming the top and right side." },
  { char: "エ", romaji: "e", strokes: 3, tip: "Horizontal, then vertical through it, then the bottom horizontal." },
  { char: "オ", romaji: "o", strokes: 3, tip: "Horizontal, then the vertical and the curve on the right." },
  { char: "カ", romaji: "ka", strokes: 2, tip: "Horizontal and vertical cross, then the angled stroke on the right." },
  { char: "キ", romaji: "ki", strokes: 3, tip: "Two horizontals, then the vertical through them with a hook." },
  { char: "ク", romaji: "ku", strokes: 2, tip: "Horizontal stroke, then the angled stroke below." },
  { char: "ケ", romaji: "ke", strokes: 3, tip: "Vertical, then two horizontals with the right stroke angled." },
  { char: "コ", romaji: "ko", strokes: 2, tip: "Top horizontal, then the vertical and bottom horizontal." },
  { char: "サ", romaji: "sa", strokes: 3, tip: "Cross shape first, then the two strokes on the right." },
  { char: "シ", romaji: "shi", strokes: 3, tip: "Three short strokes: two on top, one below (like 3 dots)." },
  { char: "ス", romaji: "su", strokes: 2, tip: "Horizontal with a hook, then the diagonal stroke." },
  { char: "セ", romaji: "se", strokes: 2, tip: "Vertical with a curve, then the horizontal at the bottom." },
  { char: "ソ", romaji: "so", strokes: 2, tip: "Two diagonals: top-right down, then lower-left down." },
  { char: "タ", romaji: "ta", strokes: 3, tip: "Horizontal, then vertical, then the two strokes at bottom." },
  { char: "チ", romaji: "chi", strokes: 3, tip: "Horizontal, then the curved stroke and the dot." },
  { char: "ツ", romaji: "tsu", strokes: 3, tip: "Three short strokes: two on top, one longer below." },
  { char: "テ", romaji: "te", strokes: 2, tip: "Horizontal stroke, then the vertical with a hook on the right." },
  { char: "ト", romaji: "to", strokes: 2, tip: "Vertical stroke, then the small horizontal at top right." },
  { char: "ナ", romaji: "na", strokes: 2, tip: "Horizontal, then the diagonal stroke down-left." },
  { char: "ニ", romaji: "ni", strokes: 2, tip: "Two horizontal strokes, one above the other." },
  { char: "ヌ", romaji: "nu", strokes: 2, tip: "Horizontal with a curve, then the diagonal stroke." },
  { char: "ネ", romaji: "ne", strokes: 3, tip: "Horizontal, then the vertical with two cross strokes." },
  { char: "ノ", romaji: "no", strokes: 1, tip: "Single diagonal stroke from top-left down." },
  { char: "ハ", romaji: "ha", strokes: 2, tip: "Two diagonals: left down-right, right down-left." },
  { char: "ヒ", romaji: "hi", strokes: 2, tip: "Vertical stroke, then the horizontal with a curve." },
  { char: "フ", romaji: "fu", strokes: 1, tip: "Single stroke: horizontal then curve down." },
  { char: "ヘ", romaji: "he", strokes: 1, tip: "Single curved stroke (same as hiragana へ)." },
  { char: "ホ", romaji: "ho", strokes: 4, tip: "Vertical through two horizontals, then the two strokes on the right." },
  { char: "マ", romaji: "ma", strokes: 2, tip: "Horizontal, then the diagonal and horizontal below." },
  { char: "ミ", romaji: "mi", strokes: 3, tip: "Three horizontal strokes with a vertical through them." },
  { char: "ム", romaji: "mu", strokes: 2, tip: "Horizontal stroke, then the diagonal down-left." },
  { char: "メ", romaji: "me", strokes: 2, tip: "Two diagonals crossing: one down-right, one down-left." },
  { char: "モ", romaji: "mo", strokes: 3, tip: "Horizontal, then vertical through it, then the bottom horizontal." },
  { char: "ヤ", romaji: "ya", strokes: 2, tip: "Vertical stroke, then the two diagonals on the right." },
  { char: "ユ", romaji: "yu", strokes: 2, tip: "Horizontal with a hook, then the vertical stroke." },
  { char: "ヨ", romaji: "yo", strokes: 3, tip: "Vertical, then top horizontal, then bottom horizontal." },
  { char: "ラ", romaji: "ra", strokes: 2, tip: "Horizontal, then the vertical with a hook." },
  { char: "リ", romaji: "ri", strokes: 2, tip: "Two vertical strokes, slightly apart." },
  { char: "ル", romaji: "ru", strokes: 2, tip: "Vertical with a hook, then the small stroke at bottom." },
  { char: "レ", romaji: "re", strokes: 2, tip: "Vertical stroke, then the angled stroke (like ノ)." },
  { char: "ロ", romaji: "ro", strokes: 3, tip: "Vertical, top horizontal, then bottom horizontal (box shape)." },
  { char: "ワ", romaji: "wa", strokes: 2, tip: "Vertical with a hook, then the horizontal at bottom." },
  { char: "ヲ", romaji: "wo", strokes: 3, tip: "Horizontal, then vertical, then the small stroke on the right." },
  { char: "ン", romaji: "n", strokes: 2, tip: "Horizontal stroke, then the diagonal down-right." },
];

const KATAKANA_DAKUON = [
  { char: "ガ", romaji: "ga", strokes: 2, tip: "Same as カ with voiced mark (゛)." },
  { char: "ギ", romaji: "gi", strokes: 3, tip: "Same as キ with voiced mark (゛)." },
  { char: "グ", romaji: "gu", strokes: 2, tip: "Same as ク with voiced mark (゛)." },
  { char: "ゲ", romaji: "ge", strokes: 3, tip: "Same as ケ with voiced mark (゛)." },
  { char: "ゴ", romaji: "go", strokes: 2, tip: "Same as コ with voiced mark (゛)." },
  { char: "ザ", romaji: "za", strokes: 3, tip: "Same as サ with voiced mark (゛)." },
  { char: "ジ", romaji: "ji", strokes: 3, tip: "Same as シ with voiced mark (゛)." },
  { char: "ズ", romaji: "zu", strokes: 2, tip: "Same as ス with voiced mark (゛)." },
  { char: "ゼ", romaji: "ze", strokes: 2, tip: "Same as セ with voiced mark (゛)." },
  { char: "ゾ", romaji: "zo", strokes: 2, tip: "Same as ソ with voiced mark (゛)." },
  { char: "ダ", romaji: "da", strokes: 3, tip: "Same as タ with voiced mark (゛)." },
  { char: "ヂ", romaji: "ji", strokes: 3, tip: "Same as チ with voiced mark (゛)." },
  { char: "ヅ", romaji: "zu", strokes: 3, tip: "Same as ツ with voiced mark (゛)." },
  { char: "デ", romaji: "de", strokes: 2, tip: "Same as テ with voiced mark (゛)." },
  { char: "ド", romaji: "do", strokes: 2, tip: "Same as ト with voiced mark (゛)." },
  { char: "バ", romaji: "ba", strokes: 2, tip: "Same as ハ with voiced mark (゛)." },
  { char: "ビ", romaji: "bi", strokes: 2, tip: "Same as ヒ with voiced mark (゛)." },
  { char: "ブ", romaji: "bu", strokes: 1, tip: "Same as フ with voiced mark (゛)." },
  { char: "ベ", romaji: "be", strokes: 1, tip: "Same as ヘ with voiced mark (゛)." },
  { char: "ボ", romaji: "bo", strokes: 4, tip: "Same as ホ with voiced mark (゛)." },
];

const KATAKANA_HANDAKUON = [
  { char: "パ", romaji: "pa", strokes: 2, tip: "Same as ハ with semi-voiced mark (゜)." },
  { char: "ピ", romaji: "pi", strokes: 2, tip: "Same as ヒ with semi-voiced mark (゜)." },
  { char: "プ", romaji: "pu", strokes: 1, tip: "Same as フ with semi-voiced mark (゜)." },
  { char: "ペ", romaji: "pe", strokes: 1, tip: "Same as ヘ with semi-voiced mark (゜)." },
  { char: "ポ", romaji: "po", strokes: 4, tip: "Same as ホ with semi-voiced mark (゜)." },
];

const KATAKANA_DAKUON_FROM_BASE: Record<string, string> = {
  カ: "ガ", キ: "ギ", ク: "グ", ケ: "ゲ", コ: "ゴ",
  サ: "ザ", シ: "ジ", ス: "ズ", セ: "ゼ", ソ: "ゾ",
  タ: "ダ", チ: "ヂ", ツ: "ヅ", テ: "デ", ト: "ド",
  ハ: "バ", ヒ: "ビ", フ: "ブ", ヘ: "ベ", ホ: "ボ",
};

const KATAKANA_HANDAKUON_FROM_BASE: Record<string, string> = {
  ハ: "パ", ヒ: "ピ", フ: "プ", ヘ: "ペ", ホ: "ポ",
};

const STROKE_TEMPLATES = [
  "M 18 50 L 82 50",
  "M 50 18 L 50 82",
  "M 22 22 L 78 78",
  "M 50 22 Q 82 50 50 78",
];

const STROKESVG_CDN = "https://cdn.jsdelivr.net/gh/zhengkyl/strokesvg@main/dist/katakana";
const STROKE_ANIM_DURATION = 0.6;
const STROKE_ANIM_GAP = 0.5;

const KATAKANA_ROWS: [string, number, number][] = [
  ["ア行 (a-row)", 0, 5],
  ["カ行 (ka-row)", 5, 5],
  ["サ行 (sa-row)", 10, 5],
  ["タ行 (ta-row)", 15, 5],
  ["ナ行 (na-row)", 20, 5],
  ["ハ行 (ha-row)", 25, 5],
  ["マ行 (ma-row)", 30, 5],
  ["ヤ行 (ya-row)", 35, 3],
  ["ラ行 (ra-row)", 38, 5],
  ["ワ行 (wa-row)", 43, 3],
];

type KatakanaItem = (typeof KATAKANA_DATA)[number];

export default function KatakanaStudy() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showPractice, setShowPractice] = useState(false);
  const [replayKey, setReplayKey] = useState(0);
  const [practiceCharSet, setPracticeCharSet] = useState<"basic" | "dakuon" | "all">("basic");
  const [activeVariant, setActiveVariant] = useState<"base" | "dakuon" | "handakuon">("base");
  const [variantItem, setVariantItem] = useState<KatakanaItem | null>(null);

  const selectedItem = selectedIndex !== null ? KATAKANA_DATA[selectedIndex] : null;
  const isHaRow = selectedIndex !== null && selectedIndex >= 25 && selectedIndex <= 29;
  const displayItem = variantItem ?? selectedItem;

  const dakuonChar = selectedItem && KATAKANA_DAKUON_FROM_BASE[selectedItem.char];
  const handakuonChar = selectedItem && KATAKANA_HANDAKUON_FROM_BASE[selectedItem.char];

  const speak = useCallback((text: string) => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "ja-JP";
      u.rate = 0.85;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    }
  }, []);

  const handleVariantClick = useCallback(
    (mode: "dakuon" | "handakuon") => {
      if (!selectedItem) return;
      const targetChar = mode === "dakuon" ? dakuonChar : handakuonChar;
      if (!targetChar) return;
      const list = mode === "dakuon" ? KATAKANA_DAKUON : KATAKANA_HANDAKUON;
      const item = list.find((x) => x.char === targetChar);
      if (item) {
        setVariantItem(item);
        setActiveVariant(mode);
      }
    },
    [selectedItem, dakuonChar, handakuonChar]
  );

  const handleSelectChar = useCallback((idx: number) => {
    setSelectedIndex(idx);
    setVariantItem(null);
    setActiveVariant("base");
  }, []);

  const handleReplay = useCallback(() => {
    if (displayItem) {
      setReplayKey((k) => k + 1);
      speak(displayItem.char);
    }
  }, [displayItem, speak]);

  const strokeContainerRef = useRef<HTMLDivElement>(null);
  const svgCacheRef = useRef<Record<string, string>>({});

  useEffect(() => {
    if (!displayItem || !strokeContainerRef.current) return;
    const container = strokeContainerRef.current;
    const cached = svgCacheRef.current[displayItem.char];
    const injectReal = (svgText: string) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(svgText, "image/svg+xml");
      const svg = doc.querySelector("svg");
      if (!svg) {
        container.innerHTML = "";
        return;
      }
      svg.classList.add("lang-stroke-svg", "katakana", "h-full", "w-full", "text-slate-100");
      const shadowsGroup = svg.querySelector('[data-strokesvg="shadows"]');
      if (shadowsGroup) shadowsGroup.setAttribute("visibility", "hidden");
      const strokesGroup = svg.querySelector('[data-strokesvg="strokes"]');
      if (strokesGroup) {
        let strokeIndex = 0;
        Array.from(strokesGroup.children).forEach((node) => {
          const i = strokeIndex++;
          const paths = node.tagName.toLowerCase() === "path" ? [node as SVGPathElement] : Array.from(node.querySelectorAll("path"));
          paths.forEach((path) => {
            const len = path.getTotalLength ? path.getTotalLength() : 500;
            const delay = i * (STROKE_ANIM_DURATION + STROKE_ANIM_GAP);
            path.setAttribute("fill", "none");
            path.setAttribute("stroke", "#ffffff");
            path.setAttribute("stroke-width", "80");
            path.style.strokeDasharray = String(len);
            path.style.strokeDashoffset = String(len);
            path.style.animation = `katakana-stroke-draw ${STROKE_ANIM_DURATION}s ease-out forwards`;
            path.style.animationDelay = `${delay}s`;
          });
        });
      }
      container.innerHTML = "";
      container.appendChild(svg);
    };
    const buildFallback = () => {
      const n = Math.min(displayItem.strokes, STROKE_TEMPLATES.length);
      const paths = STROKE_TEMPLATES.slice(0, n);
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("viewBox", "0 0 100 100");
      svg.setAttribute("class", "lang-stroke-svg katakana h-full w-full text-slate-100");
      paths.forEach((d) => {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", d);
        path.setAttribute("fill", "none");
        path.setAttribute("stroke", "#ffffff");
        path.setAttribute("stroke-width", "6");
        const len = path.getTotalLength ? path.getTotalLength() : 400;
        const delay = paths.indexOf(d) * (STROKE_ANIM_DURATION + STROKE_ANIM_GAP);
        path.style.strokeDasharray = String(len);
        path.style.strokeDashoffset = String(len);
        path.style.animation = `katakana-stroke-draw ${STROKE_ANIM_DURATION}s ease-out forwards`;
        path.style.animationDelay = `${delay}s`;
        svg.appendChild(path);
      });
      container.innerHTML = "";
      container.appendChild(svg);
    };
    if (cached) {
      injectReal(cached);
      return;
    }
    container.innerHTML = '<span class="text-slate-500 text-sm">…</span>';
    const url = `${STROKESVG_CDN}/${encodeURIComponent(displayItem.char)}.svg`;
    fetch(url)
      .then((r) => (r.ok ? r.text() : Promise.reject(new Error("Not found"))))
      .then((svgText) => {
        svgCacheRef.current[displayItem.char] = svgText;
        injectReal(svgText);
      })
      .catch(() => buildFallback());
  }, [displayItem, replayKey]);

  const buildPracticeSheetHTML = useCallback(() => {
    let items: { char: string; romaji: string }[];
    if (practiceCharSet === "basic") {
      items = KATAKANA_DATA.map((item) => ({ char: item.char, romaji: item.romaji }));
    } else {
      const list: { char: string; romaji: string }[] = [];
      KATAKANA_DATA.forEach((item) => {
        list.push({ char: item.char, romaji: item.romaji });
        if (practiceCharSet === "dakuon" || practiceCharSet === "all") {
          const d = KATAKANA_DAKUON_FROM_BASE[item.char];
          if (d) {
            const found = KATAKANA_DAKUON.find((x) => x.char === d);
            list.push({ char: d, romaji: found?.romaji ?? "" });
          }
        }
        if (practiceCharSet === "all") {
          const h = KATAKANA_HANDAKUON_FROM_BASE[item.char];
          if (h) {
            const found = KATAKANA_HANDAKUON.find((x) => x.char === h);
            list.push({ char: h, romaji: found?.romaji ?? "" });
          }
        }
      });
      items = list;
    }
    const rows = items.map(
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
  }, [practiceCharSet]);

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
      <head><meta charset="UTF-8"><title>Katakana Writing Practice</title>
      <style>@page{size:A4 landscape;margin:12mm}
      *{print-color-adjust:exact;-webkit-print-color-adjust:exact}
      body{font-family:'Hiragino Kaku Gothic Pro','Yu Gothic','Meiryo',sans-serif;margin:.5rem}
      table{width:100%;border-collapse:collapse}td{border:1px solid #333;width:10%;height:5.6rem;font-size:4.55rem;text-align:center;vertical-align:middle}
      td:first-child{position:relative}
      td .pronunciation{font-size:0.875rem;position:absolute;right:0.25rem;bottom:0.25rem;font-weight:bold;color:#475569}
      td.sample{font-weight:bold;background:#f1f5f9 !important}td.trace{color:rgba(0,0,0,.25);background:#f8fafc !important}td.blank{background:#fff}
      </style></head>
      <body><h1 style="font-size:1.1rem;margin-bottom:.5rem">Katakana Writing Practice</h1>${tableHTML}</body>
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
            {KATAKANA_ROWS.map(([rowLabel, start, count]) => (
              <section key={rowLabel}>
                <h3 className="mb-2 text-sm font-semibold text-slate-200">{rowLabel}</h3>
                <ul className="flex flex-wrap gap-2">
                  {KATAKANA_DATA.slice(start, start + count).map((item, i) => {
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
          {!displayItem ? (
            <p className="text-slate-500">Click a character to see writing tip and pronunciation.</p>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <div className="font-serif text-5xl text-slate-100">{displayItem.char}</div>
              <div className="text-lg text-slate-500">{displayItem.romaji}</div>
              <div className="w-full rounded-lg bg-background p-3">
                <h3 className="mb-1 text-sm font-medium text-slate-200">
                  Stroke order{" "}
                  <span className="font-normal text-slate-500">
                    ({displayItem.strokes} stroke{displayItem.strokes > 1 ? "s" : ""})
                  </span>
                </h3>
                {isHaRow && (
                  <div className="mb-2 flex gap-2">
                    <button
                      type="button"
                      onClick={() => handleVariantClick("dakuon")}
                      aria-pressed={activeVariant === "dakuon"}
                      className={`rounded px-2 py-1 text-xs ${
                        activeVariant === "dakuon"
                          ? "border-blue-500 bg-blue-600/30 text-slate-100"
                          : "border border-border text-slate-400 hover:border-slate-600"
                      }`}
                    >
                      Dakuon (濁音)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleVariantClick("handakuon")}
                      aria-pressed={activeVariant === "handakuon"}
                      className={`rounded px-2 py-1 text-xs ${
                        activeVariant === "handakuon"
                          ? "border-blue-500 bg-blue-600/30 text-slate-100"
                          : "border border-border text-slate-400 hover:border-slate-600"
                      }`}
                    >
                      Handakuon (半濁音)
                    </button>
                  </div>
                )}
                <div className="mx-auto mb-2 flex aspect-square max-w-[140px] items-center justify-center">
                  <div
                    ref={strokeContainerRef}
                    key={replayKey}
                    className="h-full w-full [&_svg]:h-full [&_svg]:w-full"
                  />
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
              </div>
              <div className="w-full rounded-lg bg-background p-3">
                <h3 className="mb-1 text-sm font-medium text-slate-200">Writing tip</h3>
                <p className="text-sm text-slate-400">{displayItem.tip}</p>
              </div>
              <button
                type="button"
                onClick={() => speak(displayItem.char)}
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
          <strong>Column 1</strong> = model character → <strong>Columns 2–5</strong> = trace the faint character →{" "}
          <strong>Columns 6–10</strong> = write in the blank cells. Choose a range, then generate and print.
        </p>
        <div className="mb-4 flex flex-wrap gap-4">
          {(["basic", "dakuon", "all"] as const).map((value) => (
            <label key={value} className="flex cursor-pointer items-center gap-2 text-sm text-slate-400">
              <input
                type="radio"
                name="katakanaPracticeCharSet"
                value={value}
                checked={practiceCharSet === value}
                onChange={() => setPracticeCharSet(value)}
              />
              <span>
                {value === "basic" && "Basic Katakana (46 chars)"}
                {value === "dakuon" && "Basic + Dakuon (濁音)"}
                {value === "all" && "Basic + Dakuon + Handakuon (半濁音)"}
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
