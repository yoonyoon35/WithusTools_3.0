"use client";

import { useState, useCallback, useRef } from "react";

const ALWAYS_CAPITALIZE = new Set([
  "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday",
  "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december",
  "english", "spanish", "chinese", "japanese", "korean", "french", "german", "italian", "russian", "portuguese", "arabic", "hindi",
  "afghanistan", "albania", "algeria", "andorra", "angola", "argentina", "armenia", "australia", "austria", "azerbaijan",
  "bahrain", "bangladesh", "barbados", "belarus", "belgium", "belize", "benin", "bhutan", "bolivia", "bosnia", "herzegovina", "botswana", "brazil", "brunei", "bulgaria", "burundi",
  "cambodia", "cameroon", "canada", "chad", "chile", "china", "colombia", "comoros", "congo", "costa", "rica", "croatia", "cuba", "cyprus", "czech",
  "denmark", "djibouti", "dominica", "dominican", "ecuador", "egypt", "estonia", "ethiopia",
  "fiji", "finland", "france", "gabon", "gambia", "georgia", "germany", "ghana", "greece", "guatemala", "guinea", "guyana",
  "haiti", "honduras", "hungary", "iceland", "india", "indonesia", "iran", "iraq", "ireland", "israel", "italy",
  "jamaica", "japan", "jordan", "kazakhstan", "kenya", "kuwait", "kyrgyzstan",
  "laos", "latvia", "lebanon", "liberia", "libya", "lithuania", "luxembourg",
  "madagascar", "malawi", "malaysia", "maldives", "mali", "malta", "mauritius", "mexico", "moldova", "monaco", "mongolia", "montenegro", "morocco", "mozambique", "myanmar",
  "namibia", "nepal", "netherlands", "nicaragua", "niger", "nigeria", "norway", "oman",
  "pakistan", "palau", "panama", "paraguay", "peru", "philippines", "poland", "portugal", "qatar",
  "romania", "russia", "rwanda", "samoa", "senegal", "serbia", "singapore", "slovakia", "slovenia", "somalia", "spain", "sudan", "suriname", "sweden", "switzerland", "syria",
  "tajikistan", "tanzania", "thailand", "togo", "tonga", "trinidad", "tobago", "tunisia", "turkey", "turkmenistan", "tuvalu",
  "uganda", "ukraine", "uruguay", "uzbekistan", "vanuatu", "venezuela", "vietnam", "yemen", "zambia", "zimbabwe",
]);

function processWord(
  word: string,
  shouldCapitalize: boolean,
  isWordStartBoundary: boolean,
  isWordEndBoundary: boolean
): string {
  const wordLower = word.toLowerCase();

  if (ALWAYS_CAPITALIZE.has(wordLower) && isWordStartBoundary && isWordEndBoundary) {
    return wordLower.charAt(0).toUpperCase() + wordLower.slice(1);
  }

  if (shouldCapitalize) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  return word.toLowerCase();
}

function capitalizeText(text: string): string {
  if (!text) return text;

  let result = "";
  let shouldCapitalize = true;
  let currentWord = "";
  let isWordStartBoundary = true;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const isAlphabet = /[a-zA-Z]/.test(char);

    if (char === "." || char === "!" || char === "?") {
      if (currentWord) {
        result += processWord(currentWord, shouldCapitalize, isWordStartBoundary, true);
        currentWord = "";
        isWordStartBoundary = true;
      }
      result += char;
      shouldCapitalize = true;
      isWordStartBoundary = true;
    } else if (char === "\n" || char === "\r") {
      if (currentWord) {
        result += processWord(currentWord, shouldCapitalize, isWordStartBoundary, true);
        currentWord = "";
        isWordStartBoundary = true;
      }
      result += char;
      shouldCapitalize = true;
      isWordStartBoundary = true;
    } else if (/\s/.test(char)) {
      if (currentWord) {
        result += processWord(currentWord, shouldCapitalize, isWordStartBoundary, true);
        currentWord = "";
        shouldCapitalize = false;
        isWordStartBoundary = true;
      }
      result += char;
      isWordStartBoundary = true;
    } else if (isAlphabet) {
      if (currentWord === "") {
        isWordStartBoundary = i === 0 || !/[a-zA-Z]/.test(text[i - 1]);
      }
      currentWord += char;
    } else {
      if (currentWord) {
        result += processWord(currentWord, shouldCapitalize, isWordStartBoundary, true);
        currentWord = "";
        shouldCapitalize = false;
        isWordStartBoundary = true;
      }
      result += char;
      isWordStartBoundary = true;
    }
  }

  if (currentWord) {
    result += processWord(currentWord, shouldCapitalize, isWordStartBoundary, true);
  }

  return result;
}

function calculateTextSize(text: string): string {
  const bytes = new TextEncoder().encode(text).length;
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

/** 공백, _, -, camelCase 경계로 분리 후 소문자 배열 반환 */
function splitIntoWords(text: string): string[] {
  if (!text.trim()) return [];
  const normalized = text
    .replace(/_/g, " ")
    .replace(/-/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2");
  return normalized.split(/\s+/).filter(Boolean).map((w) => w.toLowerCase());
}

function toCamelCase(text: string): string {
  const words = splitIntoWords(text);
  if (words.length === 0) return text;
  const cap = (w: string) => w.charAt(0).toUpperCase() + w.slice(1);
  return words[0] + words.slice(1).map(cap).join("");
}

function toPascalCase(text: string): string {
  const words = splitIntoWords(text);
  if (words.length === 0) return text;
  const cap = (w: string) => w.charAt(0).toUpperCase() + w.slice(1);
  return words.map(cap).join("");
}

function toSnakeCase(text: string): string {
  return splitIntoWords(text).join("_");
}

function toKebabCase(text: string): string {
  return splitIntoWords(text).join("-");
}

/** 각 단어 첫 글자를 대문자로 변환 */
function toTitleCase(text: string): string {
  return text.replace(/\S+/g, (word) =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
}

/** 대소문자 반전 (대→소, 소→대) */
function toToggleCase(text: string): string {
  return text
    .split("")
    .map((char) => {
      if (char === char.toUpperCase() && char !== char.toLowerCase()) return char.toLowerCase();
      if (char === char.toLowerCase() && char !== char.toUpperCase()) return char.toUpperCase();
      return char;
    })
    .join("");
}

/** 짝/홀 인덱스마다 대소문자 번갈아 변환 (aLtErNaTiNg) */
function toAlternatingCase(text: string): string {
  let i = 0;
  return text
    .split("")
    .map((char) => {
      if (!/[a-zA-Z]/.test(char)) return char;
      const result = i % 2 === 0 ? char.toLowerCase() : char.toUpperCase();
      i++;
      return result;
    })
    .join("");
}

export default function TextConverter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [includeSpaces, setIncludeSpaces] = useState(true);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }, []);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const loadFromFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        if (typeof result === "string") {
          setInput(result);
          showToast(`Loaded: ${file.name}`);
        } else {
          showToast("Failed to read file (binary)");
        }
      };
      reader.onerror = () => showToast("Failed to read file");
      reader.readAsText(file, "UTF-8");
      e.target.value = "";
    },
    [showToast]
  );

  const charCount = includeSpaces ? input.length : input.replace(/\s/g, "").length;
  const wordCount = input.trim() ? input.trim().split(/\s+/).length : 0;
  const textSize = calculateTextSize(input);

  const handleAction = useCallback(
    (action: string) => {
      switch (action) {
        case "uppercase":
          setOutput(input.toUpperCase());
          break;
        case "lowercase":
          setOutput(input.toLowerCase());
          break;
        case "capitalize":
          setOutput(capitalizeText(input));
          break;
        case "camelCase":
          setOutput(toCamelCase(input));
          break;
        case "pascalCase":
          setOutput(toPascalCase(input));
          break;
        case "snake_case":
          setOutput(toSnakeCase(input));
          break;
        case "kebab-case":
          setOutput(toKebabCase(input));
          break;
        case "titleCase":
          setOutput(toTitleCase(input));
          break;
        case "toggleCase":
          setOutput(toToggleCase(input));
          break;
        case "alternatingCase":
          setOutput(toAlternatingCase(input));
          break;
        case "copy":
          if (output) {
            navigator.clipboard
              .writeText(output)
              .then(() => showToast("Text copied to clipboard!"))
              .catch(() => showToast("Failed to copy text."));
          }
          break;
        case "clear":
          setInput("");
          setOutput("");
          break;
      }
    },
    [input, output, showToast]
  );

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border bg-surface p-6">
        <h2 className="mb-3 text-lg font-semibold text-slate-100">Text Input</h2>
        <textarea
          id="inputText"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter or paste text..."
          className="scrollbar-thin max-h-[50vh] w-full resize-none overflow-y-auto rounded-lg border border-border bg-slate-950 px-4 py-3 pr-2 font-mono text-sm text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          rows={8}
        />
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <input
            ref={fileInputRef}
            type="file"
            accept=".txt,text/plain"
            className="hidden"
            onChange={loadFromFile}
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-700 hover:text-slate-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
            </svg>
            Load TXT
          </button>
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-4 rounded-lg bg-slate-950/80 px-4 py-2 text-sm">
          <span className="text-slate-400">
            Characters: <span className="font-medium text-slate-200">{charCount}</span>
          </span>
          <span className="text-slate-400">
            Words: <span className="font-medium text-slate-200">{wordCount}</span>
          </span>
          <span className="text-slate-400">
            Size: <span className="font-medium text-slate-200">{textSize}</span>
          </span>
          <label className="flex cursor-pointer items-center gap-2 text-slate-400 hover:text-slate-300">
            <input
              type="checkbox"
              checked={includeSpaces}
              onChange={(e) => setIncludeSpaces(e.target.checked)}
              className="rounded border-border bg-slate-950"
            />
            <span>Include spaces in character count</span>
          </label>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="grid grid-cols-5 gap-2">
            <button
              type="button"
              onClick={() => handleAction("uppercase")}
              className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-slate-600 hover:text-slate-100"
            >
              UPPERCASE
            </button>
            <button
              type="button"
              onClick={() => handleAction("lowercase")}
              className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-slate-600 hover:text-slate-100"
            >
              lowercase
            </button>
            <button
              type="button"
              onClick={() => handleAction("capitalize")}
              className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-slate-600 hover:text-slate-100"
            >
              Capitalize Sentences
            </button>
            <button
              type="button"
              onClick={() => handleAction("camelCase")}
              className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-slate-600 hover:text-slate-100"
            >
              camelCase
            </button>
            <button
              type="button"
              onClick={() => handleAction("pascalCase")}
              className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-slate-600 hover:text-slate-100"
            >
              PascalCase
            </button>
            <button
              type="button"
              onClick={() => handleAction("snake_case")}
              className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-slate-600 hover:text-slate-100"
            >
              snake_case
            </button>
            <button
              type="button"
              onClick={() => handleAction("kebab-case")}
              className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-slate-600 hover:text-slate-100"
            >
              kebab-case
            </button>
            <button
              type="button"
              onClick={() => handleAction("titleCase")}
              className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-slate-600 hover:text-slate-100"
            >
              Title Case
            </button>
            <button
              type="button"
              onClick={() => handleAction("toggleCase")}
              className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-slate-600 hover:text-slate-100"
            >
              tOGGLE cASE
            </button>
            <button
              type="button"
              onClick={() => handleAction("alternatingCase")}
              className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-slate-600 hover:text-slate-100"
            >
              Alternating Case
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => handleAction("copy")}
              className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-slate-600 hover:text-slate-100"
            >
              Copy
            </button>
            <button
              type="button"
              onClick={() => handleAction("clear")}
              className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-slate-600 hover:text-slate-100"
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <h2 className="mb-3 text-lg font-semibold text-slate-100">Converted Text</h2>
        <textarea
          id="outputText"
          value={output}
          readOnly
          placeholder="Converted text will appear here..."
          className="scrollbar-thin max-h-[50vh] w-full resize-none overflow-y-auto rounded-lg border border-border bg-slate-950 px-4 py-3 pr-2 font-mono text-sm text-slate-300 placeholder-slate-500"
          rows={8}
        />
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
