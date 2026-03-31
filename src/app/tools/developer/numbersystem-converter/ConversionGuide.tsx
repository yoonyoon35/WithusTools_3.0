import type { ReactNode } from "react";
import {
  type NumberSystemBase,
  convertNumberSystemFromDecimal,
  parseNumberSystemInput,
} from "@/utils/numberSystemConversion";

export interface ConversionGuideProps {
  fromBase: NumberSystemBase;
  toBase: NumberSystemBase;
  className?: string;
  title?: string;
}

type BaseMeta = {
  label: string;
  /** Beginner-facing symbol rules (no prefix jargon) */
  beginnerSymbols: string;
  /** IDE / C-style notation — shown in Dev note only */
  devNote: string | null;
  radix: number | null;
};

const BASE_META: Record<NumberSystemBase, BaseMeta> = {
  "2": {
    label: "Binary",
    beginnerSymbols: "Each position is either 0 or 1.",
    devNote: "Many tools allow a 0b prefix (e.g. 0b1010).",
    radix: 2,
  },
  "8": {
    label: "Octal",
    beginnerSymbols: "Each digit is 0–7 (eight possibilities per position).",
    devNote: "A leading 0 is often used to mark octal (e.g. 012).",
    radix: 8,
  },
  "10": {
    label: "Decimal",
    beginnerSymbols: "Ordinary digits 0–9; each position is a power of ten.",
    devNote: null,
    radix: 10,
  },
  "16": {
    label: "Hexadecimal",
    beginnerSymbols: "Digits 0–9 plus letters A–F for values ten through fifteen.",
    devNote: "0x is a common prefix (e.g. 0xFF).",
    radix: 16,
  },
  char: {
    label: "Character",
    beginnerSymbols: "Exactly one symbol; its numeric code is the value you convert.",
    devNote: "This tool uses the UTF-16 code unit (0–65535 for BMP).",
    radix: null,
  },
};

const HEX_DIGITS = "0123456789ABCDEF";

const HEX_VALUE_ROWS: { d: string; v: number }[] = [
  { d: "0", v: 0 },
  { d: "1", v: 1 },
  { d: "2", v: 2 },
  { d: "3", v: 3 },
  { d: "4", v: 4 },
  { d: "5", v: 5 },
  { d: "6", v: 6 },
  { d: "7", v: 7 },
  { d: "8", v: 8 },
  { d: "9", v: 9 },
  { d: "A", v: 10 },
  { d: "B", v: 11 },
  { d: "C", v: 12 },
  { d: "D", v: 13 },
  { d: "E", v: 14 },
  { d: "F", v: 15 },
];

/** Two fixed literals per source format (both must parse with `parseNumberSystemInput`). */
function pickExampleRaws(fromBase: NumberSystemBase): readonly [string, string] {
  switch (fromBase) {
    case "2":
      return ["1010", "1111"] as const;
    case "8":
      return ["12", "377"] as const;
    case "10":
      return ["26", "100"] as const;
    case "16":
      return ["1A", "FF"] as const;
    case "char":
      return ["A", "*"] as const;
    default:
      return ["10", "1"] as const;
  }
}

/** Third worked example: fractional part (not used for character input/output). */
function pickFractionalExampleRaw(fromBase: NumberSystemBase): string | null {
  switch (fromBase) {
    case "2":
      return "1010.101";
    case "8":
      return "12.4";
    case "10":
      return "10.625";
    case "16":
      return "A.8";
    default:
      return null;
  }
}

function cleanedNumericInput(raw: string, fromBase: Exclude<NumberSystemBase, "char">): string {
  const t = raw.trim().toLowerCase();
  if (fromBase === "2" && t.startsWith("0b")) return t.slice(2);
  if (fromBase === "16" && t.startsWith("0x")) return t.slice(2);
  if (fromBase === "8" && t.length > 1 && t.startsWith("0")) return t.slice(1);
  return t;
}

/** Superscript digits for powers in chalk blocks */
const SUP = "⁰¹²³⁴⁵⁶⁷⁸⁹";
function supDigit(n: number): string {
  return String(n)
    .split("")
    .map((d) => SUP[parseInt(d, 10)] ?? d)
    .join("");
}

const DIGIT_TEST: Record<Exclude<NumberSystemBase, "char">, RegExp> = {
  "2": /^[01]$/,
  "8": /^[0-7]$/,
  "10": /^[0-9]$/,
  "16": /^[0-9a-f]$/i,
};

function buildPowerExpansionChalk(
  raw: string,
  fromBase: Exclude<NumberSystemBase, "char">
): string | null {
  const c = cleanedNumericInput(raw, fromBase);
  const r = BASE_META[fromBase].radix;
  if (r === null) return null;

  const dot = c.indexOf(".");
  if (dot === -1) {
    if (fromBase === "2" && !/^[01]+$/.test(c)) return null;
    if (fromBase === "8" && !/^[0-7]+$/.test(c)) return null;
    if (fromBase === "16" && !/^[0-9a-f]+$/i.test(c)) return null;
    if (fromBase === "10" && !/^[0-9]+$/.test(c)) return null;

    const s = c.replace(/^0+/, "") || "0";
    const n = s.length;
    const termLines: string[] = [];
    const valueLines: string[] = [];
    let sum = 0;

    for (let i = 0; i < n; i++) {
      const power = n - 1 - i;
      let d: number;
      if (fromBase === "16") d = parseInt(s[i], 16);
      else if (fromBase === "8") d = parseInt(s[i], 8);
      else d = parseInt(s[i], fromBase === "2" ? 2 : 10);
      const ch = fromBase === "16" ? s[i].toUpperCase() : s[i];
      const term = d * r ** power;
      sum += term;
      if (fromBase === "2") {
        termLines.push(`${d}×${r}${supDigit(power)}`);
      } else {
        termLines.push(`${ch}×${r}${supDigit(power)}`);
      }
      if (d) valueLines.push(String(term));
    }

    const label = BASE_META[fromBase].label;
    const expansion = termLines.join(" + ");
    const numericPart = valueLines.length ? valueLines.join(" + ") : "0";
    return `${label} "${raw}"\n= ${expansion}\n= ${numericPart}\n= ${sum}  (decimal)`;
  }

  if (c.indexOf(".", dot + 1) !== -1) return null;
  const rawInt = c.slice(0, dot);
  const rawFrac = c.slice(dot + 1);
  const validInt =
    rawInt === "" ||
    (fromBase === "2" && /^[01]*$/.test(rawInt)) ||
    (fromBase === "8" && /^[0-7]*$/.test(rawInt)) ||
    (fromBase === "16" && /^[0-9a-f]*$/i.test(rawInt)) ||
    (fromBase === "10" && /^[0-9]*$/.test(rawInt));
  const validFrac =
    rawFrac === "" ||
    (fromBase === "2" && /^[01]*$/.test(rawFrac)) ||
    (fromBase === "8" && /^[0-7]*$/.test(rawFrac)) ||
    (fromBase === "16" && /^[0-9a-f]*$/i.test(rawFrac)) ||
    (fromBase === "10" && /^[0-9]*$/.test(rawFrac));
  if (!validInt || !validFrac) return null;
  if (rawInt === "" && rawFrac === "") return null;

  const intStr = rawInt === "" ? "0" : rawInt.replace(/^0+/, "") || "0";
  const label = BASE_META[fromBase].label;
  const lines: string[] = [`${label} "${raw}"`];

  let intSum = 0;
  const intTerms: string[] = [];
  const intValues: string[] = [];
  const ni = intStr.length;
  for (let i = 0; i < ni; i++) {
    const power = ni - 1 - i;
    let d: number;
    if (fromBase === "16") d = parseInt(intStr[i], 16);
    else if (fromBase === "8") d = parseInt(intStr[i], 8);
    else d = parseInt(intStr[i], fromBase === "2" ? 2 : 10);
    const ch = fromBase === "16" ? intStr[i].toUpperCase() : intStr[i];
    const term = d * r ** power;
    intSum += term;
    if (fromBase === "2") intTerms.push(`${d}×${r}${supDigit(power)}`);
    else intTerms.push(`${ch}×${r}${supDigit(power)}`);
    if (d) intValues.push(String(term));
  }
  lines.push(`Left of . : ${intTerms.join(" + ")} = ${intSum}`);

  let fracSum = 0;
  if (rawFrac.length > 0) {
    const fracTerms: string[] = [];
    const fracValues: string[] = [];
    for (let j = 0; j < rawFrac.length; j++) {
      const ch = rawFrac[j];
      if (!DIGIT_TEST[fromBase].test(ch)) return null;
      let d: number;
      if (fromBase === "16") d = parseInt(ch, 16);
      else if (fromBase === "8") d = parseInt(ch, 8);
      else d = parseInt(ch, fromBase === "2" ? 2 : 10);
      const negPow = j + 1;
      const term = d * r ** -negPow;
      fracSum += term;
      const disp = fromBase === "16" ? ch.toUpperCase() : ch;
      if (fromBase === "2") fracTerms.push(`${d}×${r}^-${negPow}`);
      else fracTerms.push(`${disp}×${r}^-${negPow}`);
      if (d) fracValues.push(String(term));
    }
    const fv = fracValues.length ? fracValues.join(" + ") : "0";
    lines.push(`Right of .: ${fracTerms.join(" + ")} = ${fv}`);
  }

  const total = intSum + fracSum;
  lines.push(`= ${total}  (decimal)`);
  return lines.join("\n");
}

function fmtChalk(n: number): string {
  if (!Number.isFinite(n)) return String(n);
  if (n === 0) return "0";
  return n.toFixed(8).replace(/\.?0+$/, "");
}

function buildDivisionChalk(decimal: number, toBase: "2" | "8" | "16"): string {
  const r = toBase === "2" ? 2 : toBase === "8" ? 8 : 16;
  const lines: string[] = [];
  const maxSteps = 24;
  const maxFrac = 12;

  const intN = Math.floor(Math.abs(decimal));
  const frac = Math.abs(decimal) - intN;

  if (intN === 0 && frac <= 1e-15) {
    lines.push(`0 ÷ ${r} = 0  R 0`);
    lines.push("");
    lines.push("Read remainders bottom → top: 0");
    return lines.join("\n");
  }

  if (intN > 0) {
    lines.push("Whole part — repeated division:");
    let x = intN;
    const rems: number[] = [];
    let step = 0;
    while (x > 0 && step < maxSteps) {
      const q = Math.floor(x / r);
      const rem = x % r;
      rems.push(rem);
      const remDisplay = toBase === "16" && rem >= 10 ? `${rem} (${HEX_DIGITS[rem]})` : String(rem);
      lines.push(`${x} ÷ ${r} = ${q}  R ${remDisplay}`);
      x = q;
      step++;
    }
    if (x > 0) lines.push("…");
    const digits = [...rems].reverse().map((v) => (toBase === "16" ? HEX_DIGITS[v] : String(v))).join("");
    lines.push("");
    lines.push(`Read remainders bottom → top → ${digits}`);
  } else {
    lines.push("Whole part: 0");
  }

  if (frac > 1e-12) {
    lines.push("");
    lines.push(`Fractional part — multiply by ${r}, integer of each product = next digit after .`);
    let f = frac;
    const fracDigits: string[] = [];
    for (let step = 0; step < maxFrac && f > 1e-12; step++) {
      const p = f * r;
      const d = Math.min(r - 1, Math.floor(p + 1e-9));
      const dShow = toBase === "16" && d >= 10 ? HEX_DIGITS[d] : String(d);
      lines.push(`  ${fmtChalk(f)}×${r} = ${fmtChalk(p)}  →  ${dShow}`);
      fracDigits.push(dShow);
      f = p - d;
    }
    lines.push(`Digits after . (in order): .${fracDigits.join("")}`);
  }

  return lines.join("\n");
}

function getStep2Title(fromBase: NumberSystemBase, toBase: NumberSystemBase): string {
  const bridge = fromBase !== "10" && toBase !== "10";
  if (bridge) return "Step 2 — The Two-Step Method (via Decimal)";

  if (fromBase === "10" && toBase === "2") return "Step 2 — Repeated Division by 2";
  if (fromBase === "10" && toBase === "8") return "Step 2 — Repeated Division by 8";
  if (fromBase === "10" && toBase === "16") return "Step 2 — Repeated Division by 16";
  if (fromBase === "10" && toBase === "char") return "Step 2 — Decimal Code → Character";

  if (fromBase === "2" && toBase === "10") return "Step 2 — Binary Place Weights";
  if (fromBase === "8" && toBase === "10") return "Step 2 — Octal Place Weights";
  if (fromBase === "16" && toBase === "10") return "Step 2 — Hex Place Weights";
  if (fromBase === "char" && toBase === "10") return "Step 2 — Character → Decimal Code";

  if (fromBase === "char") return "Step 2 — Character Code, Then Target Base";
  if (toBase === "char") return "Step 2 — Decimal Value → Character";

  return "Step 2 — Convert";
}

function ChalkBlock({ label, code }: { label: string; code: string }) {
  return (
    <div className="mt-3">
      <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-slate-500">{label}</p>
      <pre className="overflow-x-auto rounded-md border border-slate-700/60 bg-black/30 p-3 font-mono text-[13px] leading-relaxed text-slate-200 shadow-inner sm:text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function HexDigitTable() {
  return (
    <div className="mt-3 overflow-x-auto rounded-lg border border-slate-600 bg-slate-950/50">
      <table className="w-full min-w-[280px] border-collapse text-left text-sm text-slate-300">
        <caption className="border-b border-slate-600 px-3 py-2 text-left text-xs font-medium text-slate-400">
          Hex digit → value (for place weights)
        </caption>
        <thead>
          <tr className="border-b border-slate-600 text-slate-400">
            <th className="px-3 py-2 font-semibold">Digit</th>
            <th className="px-3 py-2 font-semibold">Value</th>
            <th className="px-3 py-2 font-semibold">Digit</th>
            <th className="px-3 py-2 font-semibold">Value</th>
          </tr>
        </thead>
        <tbody className="font-mono text-slate-200">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <tr key={i} className="border-b border-slate-700/80">
              <td className="px-3 py-1.5">{HEX_VALUE_ROWS[i].d}</td>
              <td className="px-3 py-1.5">{HEX_VALUE_ROWS[i].v}</td>
              <td className="px-3 py-1.5">{HEX_VALUE_ROWS[i + 8].d}</td>
              <td className="px-3 py-1.5">{HEX_VALUE_ROWS[i + 8].v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DevNoteBadge({ notes }: { notes: string[] }) {
  if (notes.length === 0) return null;
  return (
    <div className="mt-5 flex flex-col gap-2 rounded-lg border border-amber-900/50 bg-amber-950/20 px-3 py-2.5">
      <span className="inline-flex w-fit items-center rounded-full border border-amber-700/60 bg-amber-950/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-200/90">
        Dev note
      </span>
      <ul className="list-disc space-y-1 pl-4 text-xs leading-relaxed text-amber-100/70">
        {notes.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

function StepIdentify({ fromBase, toBase }: { fromBase: NumberSystemBase; toBase: NumberSystemBase }) {
  const from = BASE_META[fromBase];
  const to = BASE_META[toBase];
  const showHexTable = fromBase === "16" || toBase === "16";
  const devNotes = [from.devNote, to.devNote].filter(Boolean) as string[];

  return (
    <div className="rounded-lg border border-slate-700/80 bg-slate-800/40 p-5">
      <h3 className="mb-3 text-base font-semibold text-slate-100">Step 1 — Identify the symbols</h3>
      <p className="text-sm leading-relaxed text-slate-400">
        <strong className="font-medium text-slate-200">Input</strong> ({from.label}): {from.beginnerSymbols}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        <strong className="font-medium text-slate-200">Output</strong> ({to.label}): {to.beginnerSymbols}
      </p>
      {showHexTable && (
        <>
          <p className="mt-4 text-sm text-slate-400">Hex conversions use this letter-to-number map:</p>
          <HexDigitTable />
        </>
      )}
      <DevNoteBadge notes={devNotes} />
    </div>
  );
}

function StepProcess({ fromBase, toBase }: { fromBase: NumberSystemBase; toBase: NumberSystemBase }) {
  const from = BASE_META[fromBase];
  const to = BASE_META[toBase];
  const bridge = fromBase !== "10" && toBase !== "10";

  const partAHeading = bridge ? "Part A — Into decimal" : null;
  const partBHeading = bridge ? "Part B — Out of decimal" : null;

  /** Content for “source → decimal” when source is not already decimal */
  const renderSourceToDecimal = (): ReactNode => {
    if (fromBase === "char") {
      return (
        <p className="text-sm leading-relaxed text-slate-400">
          Look up the numeric code for your character. That integer <strong className="text-slate-200">is</strong> the
          decimal value for the next step.
        </p>
      );
    }
    if (fromBase === "10") return null;

    const extraHex =
      fromBase === "16" ? (
        <p className="mt-2 text-sm text-slate-400">
          <strong className="text-slate-200">A–F reminder:</strong> treat A as 10, B as 11, …, F as 15 when you
          multiply by powers of 16 (see Step 1 table).
        </p>
      ) : null;

    return (
      <>
        <p className="text-sm leading-relaxed text-slate-400">
          Number positions from the <strong className="text-slate-200">right</strong>, starting at 0. At each position,{" "}
          multiply that digit by <strong className="text-slate-200">{from.radix} raised to the position index</strong>,
          then add every term. The total is your decimal number.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          <strong className="text-slate-200">Digits after the dot:</strong> use negative powers of {from.radix} (
          {from.radix}
          <sup>−1</sup>, {from.radix}
          <sup>−2</sup>, …). Each place is still (digit × weight); add the fractional side to the whole side.
        </p>
        {extraHex}
      </>
    );
  };

  const renderDecimalToTarget = (): ReactNode => {
    if (toBase === "char") {
      return (
        <p className="text-sm leading-relaxed text-slate-400">
          Take the decimal value. If it is in range, the tool maps it to the matching character (or a standard control
          label).
        </p>
      );
    }
    if (toBase === "10") return null;

    const isBinary = toBase === "2";
    const intro = isBinary ? (
      <p className="text-sm leading-relaxed text-slate-400">
        <strong className="text-slate-200">Repeated division by 2:</strong> divide the decimal number by 2, write each
        remainder, replace the number with the whole quotient, repeat until the quotient is 0. Read the remainders{" "}
        <strong className="text-slate-200">from last division to first</strong> to read the binary digits.
      </p>
    ) : toBase === "8" ? (
      <p className="text-sm leading-relaxed text-slate-400">
        <strong className="text-slate-200">Repeated division by 8:</strong> same idea as binary, but divide by 8 each
        time. Remainders are octal digits (0–7), read bottom-up.
      </p>
    ) : (
      <p className="text-sm leading-relaxed text-slate-400">
        <strong className="text-slate-200">Repeated division by 16:</strong> each remainder is one hex digit; values 10–
        15 become A–F. Read remainders from last step to first.
      </p>
    );

    return (
      <>
        {intro}
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          <strong className="text-slate-200">Fractional decimal values:</strong> convert the <em>whole</em> part with
          repeated division, then multiply the <em>fractional</em> part by the target base over and over; each integer
          you get is the next digit after the radix point (same idea the calculator shows in Formulas).
        </p>
      </>
    );
  };

  const title = getStep2Title(fromBase, toBase);

  if (!bridge) {
    if (fromBase === "10" && toBase !== "char") {
      return (
        <div className="rounded-lg border border-slate-700/80 bg-slate-800/40 p-5">
          <h3 className="mb-3 text-base font-semibold text-slate-100">{title}</h3>
          {renderDecimalToTarget()}
        </div>
      );
    }
    if (toBase === "10" && fromBase !== "char") {
      return (
        <div className="rounded-lg border border-slate-700/80 bg-slate-800/40 p-5">
          <h3 className="mb-3 text-base font-semibold text-slate-100">{title}</h3>
          {fromBase === "16" && (
            <p className="mb-3 text-sm text-slate-400">
              <strong className="text-slate-200">A–F mapping:</strong> use 10–15 for letters when applying place weights.
            </p>
          )}
          {renderSourceToDecimal()}
        </div>
      );
    }
    if (fromBase === "char" && toBase === "10") {
      return (
        <div className="rounded-lg border border-slate-700/80 bg-slate-800/40 p-5">
          <h3 className="mb-3 text-base font-semibold text-slate-100">{title}</h3>
          {renderSourceToDecimal()}
        </div>
      );
    }
    if (fromBase === "10" && toBase === "char") {
      return (
        <div className="rounded-lg border border-slate-700/80 bg-slate-800/40 p-5">
          <h3 className="mb-3 text-base font-semibold text-slate-100">{title}</h3>
          {renderDecimalToTarget()}
        </div>
      );
    }
  }

  return (
    <div className="rounded-lg border border-slate-700/80 bg-slate-800/40 p-5">
      <h3 className="mb-3 text-base font-semibold text-slate-100">{title}</h3>
      <div className="mb-4 border-l-4 border-blue-500 bg-slate-900/40 py-2 pl-3 text-sm text-slate-300">
        First express the <strong className="text-slate-100">left</strong> format as a decimal value (one optional{" "}
        <code className="rounded bg-slate-800 px-1">.</code> for a fractional part is allowed on numeric bases), then
        rewrite that value in the <strong className="text-slate-100">right</strong> format. The calculator automates
        both steps.
      </div>
      {partAHeading && <h4 className="mb-2 text-sm font-semibold text-slate-200">{partAHeading}</h4>}
      {fromBase !== "10" ? (
        renderSourceToDecimal()
      ) : (
        <p className="text-sm text-slate-400">You already start in decimal — skip to Part B.</p>
      )}
      {partBHeading && <h4 className="mb-2 mt-5 text-sm font-semibold text-slate-200">{partBHeading}</h4>}
      {toBase !== "10" ? (
        renderDecimalToTarget()
      ) : (
        <p className="text-sm text-slate-400">Your goal is decimal — Part A already finished the job.</p>
      )}
    </div>
  );
}

function WorkedExampleBlock({
  fromBase,
  toBase,
  raw,
  exampleIndex,
}: {
  fromBase: NumberSystemBase;
  toBase: NumberSystemBase;
  raw: string;
  exampleIndex: number;
}) {
  let decimal: number;
  let output: string;
  try {
    decimal = parseNumberSystemInput(raw, fromBase);
    output = convertNumberSystemFromDecimal(decimal, toBase);
  } catch {
    return (
      <div className="rounded-lg border border-red-900/40 bg-red-950/20 p-4 text-sm text-red-300/90">
        Example {exampleIndex}: could not parse <span className="font-mono">{raw}</span> for this pair.
      </div>
    );
  }

  const fromName = BASE_META[fromBase].label;
  const toName = BASE_META[toBase].label;
  const showQuotes = fromBase !== "char";

  const showTowardDecimal = fromBase !== "10";
  const expansion = fromBase !== "char" ? buildPowerExpansionChalk(raw, fromBase) : null;
  const towardCode =
    fromBase === "char"
      ? `Character '${raw}'\n→ code point (decimal) N₁₀ = ${decimal}`
      : expansion ?? `N₁₀ = ${decimal}`;

  const showFromDecimalNonDec = toBase !== "10";

  const fromDecimalCode =
    toBase === "char"
      ? `Decimal ${decimal}\n→ character display: ${output}`
      : toBase === "2" || toBase === "8" || toBase === "16"
        ? `${buildDivisionChalk(decimal, toBase)}\n\n→ tool: ${output}`
        : "";

  return (
    <div className={exampleIndex > 1 ? "mt-8 border-t border-slate-700 pt-8" : ""}>
      <h4 className="mb-2 text-sm font-semibold text-slate-200">Example {exampleIndex}</h4>
      <p className="mb-4 text-sm text-slate-500">
        {showQuotes ? `"${raw}"` : `‘${raw}’`} ({fromName}) → {toName}.
      </p>

      {showTowardDecimal && <ChalkBlock label="Toward decimal" code={towardCode} />}

      {fromBase === "10" && showFromDecimalNonDec && fromDecimalCode && (
        <ChalkBlock label="From decimal" code={`N₁₀ = ${decimal}\n\n${fromDecimalCode}`.trim()} />
      )}

      {fromBase !== "10" && showFromDecimalNonDec && fromDecimalCode && (
        <ChalkBlock label="From decimal to output" code={fromDecimalCode} />
      )}

      <p className="mt-4 rounded-md border border-slate-600 bg-slate-950/50 px-3 py-2 text-center font-mono text-xs text-slate-400 sm:text-sm">
        Verify: {showQuotes ? `"${raw}"` : raw} → {output}
      </p>
    </div>
  );
}

function StepCalculate({ fromBase, toBase }: { fromBase: NumberSystemBase; toBase: NumberSystemBase }) {
  const [raw1, raw2] = pickExampleRaws(fromBase);
  const rawFrac = pickFractionalExampleRaw(fromBase);
  const showFracExample = rawFrac !== null && fromBase !== "char" && toBase !== "char";
  const fromName = BASE_META[fromBase].label;
  const toName = BASE_META[toBase].label;

  return (
    <div className="rounded-lg border border-slate-700/80 bg-slate-800/40 p-5">
      <h3 className="mb-2 text-base font-semibold text-slate-100">Step 3 — Worked examples</h3>
      <p className="mb-6 text-sm leading-relaxed text-slate-500">
        Two practice values in {fromName}, converted to {toName} using the same rules as Step 2.
        {showFracExample ? (
          <>
            {" "}
            Example 3 uses a <strong className="font-medium text-slate-400">fractional part</strong> (digits after the
            radix point); the hub and pair calculators accept a single <code className="text-slate-400">.</code> on
            binary, octal, decimal, and hex inputs.
          </>
        ) : null}
      </p>

      <WorkedExampleBlock fromBase={fromBase} toBase={toBase} raw={raw1} exampleIndex={1} />
      <WorkedExampleBlock fromBase={fromBase} toBase={toBase} raw={raw2} exampleIndex={2} />
      {showFracExample && rawFrac ? (
        <WorkedExampleBlock fromBase={fromBase} toBase={toBase} raw={rawFrac} exampleIndex={3} />
      ) : null}
    </div>
  );
}

export default function ConversionGuide({ fromBase, toBase, className = "", title }: ConversionGuideProps) {
  return (
    <section
      className={`rounded-xl border border-slate-700 bg-slate-900 p-6 sm:p-8 ${className}`.trim()}
      aria-labelledby="conversion-guide-heading"
    >
      <h2 id="conversion-guide-heading" className="mb-6 text-lg font-semibold tracking-tight text-slate-100">
        {title ?? "Step-by-step guide"}
      </h2>
      <p className="mb-8 text-sm leading-relaxed text-slate-400">
        Three steps: symbols → the right math move for <em>this</em> pair → worked examples you can copy on paper.
        Numeric bases (binary, octal, decimal, hex) also support one radix point and digits after it; character mode
        stays a single code unit.
      </p>
      <div className="space-y-8">
        <StepIdentify fromBase={fromBase} toBase={toBase} />
        <StepProcess fromBase={fromBase} toBase={toBase} />
        <StepCalculate fromBase={fromBase} toBase={toBase} />
      </div>
    </section>
  );
}
