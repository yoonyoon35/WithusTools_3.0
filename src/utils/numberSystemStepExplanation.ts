/**
 * Formula-focused conversion notes for the pair calculator (minimal prose).
 */

import { type NumberSystemBase, formatCharForDisplay } from "@/utils/numberSystemConversion";

const HEX_DIGITS = "0123456789ABCDEF";

function stripInputForExplain(raw: string, base: NumberSystemBase): string {
  const t = raw.trim().toLowerCase();
  if (base === "char") return t;
  let s = t;
  if (base === "2" && s.startsWith("0b")) s = s.slice(2);
  if (base === "16" && s.startsWith("0x")) s = s.slice(2);
  if (base === "8" && s.length > 1 && s.startsWith("0")) s = s.slice(1);
  return s;
}

/** Full positional expansion: d_{n-1}×B^{n-1} + … + d_0×B^0 = N */
function binaryExpansionFull(cleaned: string): string[] {
  if (!/^[01]+$/.test(cleaned) || cleaned.length > 24) return [];
  const bits = cleaned.replace(/^0+/, "") || "0";
  const n = bits.length;
  const terms: string[] = [];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const power = n - 1 - i;
    const b = bits[i] === "1" ? 1 : 0;
    terms.push(`${b}×2^${power}`);
    sum += b * 2 ** power;
  }
  return [`(2→10)  ${terms.join(" + ")} = ${sum}`];
}

function octalExpansionFull(cleaned: string): string[] {
  if (!/^[0-7]+$/.test(cleaned) || cleaned.length > 16) return [];
  const s = cleaned.replace(/^0+/, "") || "0";
  const n = s.length;
  const terms: string[] = [];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const power = n - 1 - i;
    const d = parseInt(s[i], 10);
    terms.push(`${d}×8^${power}`);
    sum += d * 8 ** power;
  }
  return [`(8→10)  ${terms.join(" + ")} = ${sum}`];
}

function hexExpansionFull(cleaned: string): string[] {
  if (!/^[0-9a-f]+$/i.test(cleaned) || cleaned.length > 16) return [];
  const s = cleaned.toLowerCase().replace(/^0+/, "") || "0";
  const n = s.length;
  const terms: string[] = [];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const power = n - 1 - i;
    const d = parseInt(s[i], 16);
    terms.push(`${d}×16^${power}`);
    sum += d * 16 ** power;
  }
  return [`(16→10)  ${terms.join(" + ")} = ${sum}`];
}

function decimalExpansionDisplay(cleaned: string): string[] {
  if (!/^[0-9]+$/.test(cleaned) || cleaned.length > 16) return [];
  const s = cleaned.replace(/^0+/, "") || "0";
  const n = s.length;
  const terms: string[] = [];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const power = n - 1 - i;
    const d = parseInt(s[i], 10);
    terms.push(`${d}×10^${power}`);
    sum += d * 10 ** power;
  }
  return [`(10)  ${terms.join(" + ")} = ${sum}`];
}

/** Trim trailing zeros for readable formula lines. */
function formatExplainNum(n: number): string {
  if (!Number.isFinite(n)) return String(n);
  if (n === 0) return "0";
  const s = n.toFixed(12).replace(/\.?0+$/, "");
  return s === "-0" ? "0" : s;
}

/** Max digits per side of `.` for step-by-step expansion text. */
const MAX_POS_DIGITS = 24;

function splitRadixPoint(cleaned: string): [string, string] | null {
  const i = cleaned.indexOf(".");
  if (i === -1) return null;
  if (cleaned.indexOf(".", i + 1) !== -1) return null;
  return [cleaned.slice(0, i), cleaned.slice(i + 1)];
}

function binaryExpansionWithFraction(rawInt: string, rawFrac: string, decimal: number): string[] {
  if (!/^[01]*$/.test(rawInt) || !/^[01]*$/.test(rawFrac)) return [];
  if (rawInt.length > MAX_POS_DIGITS || rawFrac.length > MAX_POS_DIGITS) return [];

  const intBits = rawInt === "" ? "0" : rawInt.replace(/^0+/, "") || "0";
  const it: string[] = [];
  let intSum = 0;
  const n = intBits.length;
  for (let k = 0; k < n; k++) {
    const power = n - 1 - k;
    const d = intBits[k] === "1" ? 1 : 0;
    it.push(`${d}×2^${power}`);
    intSum += d * 2 ** power;
  }

  const ft: string[] = [];
  let fracSum = 0;
  for (let j = 0; j < rawFrac.length; j++) {
    const d = rawFrac[j] === "1" ? 1 : 0;
    const negPow = -(j + 1);
    ft.push(`${d}×2^${negPow}`);
    fracSum += d * 2 ** negPow;
  }

  const lines: string[] = [];
  lines.push(`(2→10)  left of . : ${it.join(" + ")} = ${intSum}`);
  if (rawFrac.length > 0) {
    lines.push(`(2→10)  right of .: ${ft.join(" + ")} = ${formatExplainNum(fracSum)}`);
    lines.push(
      intSum === 0
        ? `⇒  N₁₀ = ${formatExplainNum(decimal)}`
        : `⇒  N₁₀ = ${intSum} + ${formatExplainNum(fracSum)} = ${formatExplainNum(decimal)}`
    );
  } else {
    lines.push(`⇒  N₁₀ = ${formatExplainNum(decimal)}`);
  }
  return lines;
}

function octalExpansionWithFraction(rawInt: string, rawFrac: string, decimal: number): string[] {
  if (!/^[0-7]*$/.test(rawInt) || !/^[0-7]*$/.test(rawFrac)) return [];
  if (rawInt.length > MAX_POS_DIGITS || rawFrac.length > MAX_POS_DIGITS) return [];

  const intDigits = rawInt === "" ? "0" : rawInt.replace(/^0+/, "") || "0";
  const it: string[] = [];
  let intSum = 0;
  const n = intDigits.length;
  for (let k = 0; k < n; k++) {
    const power = n - 1 - k;
    const d = parseInt(intDigits[k]!, 10);
    it.push(`${d}×8^${power}`);
    intSum += d * 8 ** power;
  }

  const ft: string[] = [];
  let fracSum = 0;
  for (let j = 0; j < rawFrac.length; j++) {
    const d = parseInt(rawFrac[j]!, 10);
    const negPow = -(j + 1);
    ft.push(`${d}×8^${negPow}`);
    fracSum += d * 8 ** negPow;
  }

  const lines: string[] = [];
  lines.push(`(8→10)  left of . : ${it.join(" + ")} = ${intSum}`);
  if (rawFrac.length > 0) {
    lines.push(`(8→10)  right of .: ${ft.join(" + ")} = ${formatExplainNum(fracSum)}`);
    lines.push(
      intSum === 0
        ? `⇒  N₁₀ = ${formatExplainNum(decimal)}`
        : `⇒  N₁₀ = ${intSum} + ${formatExplainNum(fracSum)} = ${formatExplainNum(decimal)}`
    );
  } else {
    lines.push(`⇒  N₁₀ = ${formatExplainNum(decimal)}`);
  }
  return lines;
}

function hexExpansionWithFraction(rawInt: string, rawFrac: string, decimal: number): string[] {
  if (!/^[0-9a-f]*$/i.test(rawInt) || !/^[0-9a-f]*$/i.test(rawFrac)) return [];
  if (rawInt.length > MAX_POS_DIGITS || rawFrac.length > MAX_POS_DIGITS) return [];

  const ri = rawInt.toLowerCase();
  const rf = rawFrac.toLowerCase();
  const intDigits = ri === "" ? "0" : ri.replace(/^0+/, "") || "0";
  const it: string[] = [];
  let intSum = 0;
  const n = intDigits.length;
  for (let k = 0; k < n; k++) {
    const power = n - 1 - k;
    const d = parseInt(intDigits[k]!, 16);
    const dShow = d >= 10 ? HEX_DIGITS[d] : String(d);
    it.push(`${dShow}×16^${power}`);
    intSum += d * 16 ** power;
  }

  const ft: string[] = [];
  let fracSum = 0;
  for (let j = 0; j < rf.length; j++) {
    const d = parseInt(rf[j]!, 16);
    const negPow = -(j + 1);
    const dShow = d >= 10 ? HEX_DIGITS[d] : String(d);
    ft.push(`${dShow}×16^${negPow}`);
    fracSum += d * 16 ** negPow;
  }

  const lines: string[] = [];
  lines.push(`(16→10)  left of . : ${it.join(" + ")} = ${intSum}`);
  if (rf.length > 0) {
    lines.push(`(16→10)  right of .: ${ft.join(" + ")} = ${formatExplainNum(fracSum)}`);
    lines.push(
      intSum === 0
        ? `⇒  N₁₀ = ${formatExplainNum(decimal)}`
        : `⇒  N₁₀ = ${intSum} + ${formatExplainNum(fracSum)} = ${formatExplainNum(decimal)}`
    );
  } else {
    lines.push(`⇒  N₁₀ = ${formatExplainNum(decimal)}`);
  }
  return lines;
}

function decimalExpansionWithFraction(rawInt: string, rawFrac: string, decimal: number): string[] {
  if (!/^[0-9]*$/.test(rawInt) || !/^[0-9]*$/.test(rawFrac)) return [];
  if (rawInt.length > MAX_POS_DIGITS || rawFrac.length > MAX_POS_DIGITS) return [];

  const intDigits = rawInt === "" ? "0" : rawInt.replace(/^0+/, "") || "0";
  const it: string[] = [];
  let intSum = 0;
  const n = intDigits.length;
  for (let k = 0; k < n; k++) {
    const power = n - 1 - k;
    const d = parseInt(intDigits[k]!, 10);
    it.push(`${d}×10^${power}`);
    intSum += d * 10 ** power;
  }

  const ft: string[] = [];
  let fracSum = 0;
  for (let j = 0; j < rawFrac.length; j++) {
    const d = parseInt(rawFrac[j]!, 10);
    const negPow = -(j + 1);
    ft.push(`${d}×10^${negPow}`);
    fracSum += d * 10 ** negPow;
  }

  const lines: string[] = [];
  lines.push(`(10)  left of . : ${it.join(" + ")} = ${intSum}`);
  if (rawFrac.length > 0) {
    lines.push(`(10)  right of .: ${ft.join(" + ")} = ${formatExplainNum(fracSum)}`);
    lines.push(
      intSum === 0
        ? `⇒  N₁₀ = ${formatExplainNum(decimal)}`
        : `⇒  N₁₀ = ${intSum} + ${formatExplainNum(fracSum)} = ${formatExplainNum(decimal)}`
    );
  } else {
    lines.push(`⇒  N₁₀ = ${formatExplainNum(decimal)}`);
  }
  return lines;
}

function expansionLinesFromCleaned(
  cleaned: string,
  fromBase: Exclude<NumberSystemBase, "char">,
  decimal: number
): string[] {
  const sp = splitRadixPoint(cleaned);
  if (!sp) {
    if (fromBase === "2") return binaryExpansionFull(cleaned);
    if (fromBase === "8") return octalExpansionFull(cleaned);
    if (fromBase === "16") return hexExpansionFull(cleaned);
    return decimalExpansionDisplay(cleaned);
  }
  const [ri, rf] = sp;
  if (fromBase === "2") return binaryExpansionWithFraction(ri, rf, decimal);
  if (fromBase === "8") return octalExpansionWithFraction(ri, rf, decimal);
  if (fromBase === "16") return hexExpansionWithFraction(ri, rf, decimal);
  return decimalExpansionWithFraction(ri, rf, decimal);
}

const MAX_DIV_STEPS = 24;
const MAX_FRAC_STEPS = 24;

/**
 * Textbook-style fractional conversion: repeatedly multiply by `base`;
 * integer part of each product is the next digit after the radix point.
 */
function fractionalMultiplyChain(frac: number, base: number, radixLabel: string): string[] {
  if (frac <= 1e-15) return [];
  const lines: string[] = [];
  lines.push(`fractional×${base}  (take integer part each time → digits after .)`);
  let f = frac;
  const digitChars: string[] = [];
  let step = 0;
  while (f > 1e-14 && step < MAX_FRAC_STEPS) {
    const prod = f * base;
    const d = Math.min(base - 1, Math.floor(prod + 1e-9));
    const nextF = prod - d;
    const dStr = base === 16 ? HEX_DIGITS[d] : String(d);
    lines.push(`  ${formatExplainNum(f)}×${base} = ${formatExplainNum(prod)}  ⟹  ${dStr}`);
    digitChars.push(dStr);
    f = nextF;
    step++;
    if (f < 1e-12) break;
  }
  if (f > 1e-10 && step >= MAX_FRAC_STEPS) {
    lines.push(`  … (truncated after ${MAX_FRAC_STEPS} steps)`);
  }
  if (digitChars.length > 0) {
    lines.push(`∴ .${digitChars.join("")}${radixLabel}`);
  }
  return lines;
}

function divisionsToBase(
  n: number,
  base: number,
  radixLabel: string
): string[] {
  if (!Number.isInteger(n) || n < 0) return [];
  if (n === 0) return [`${n} = ${base}×0 + 0  ⟹  (0)${radixLabel}`];
  const lines: string[] = [];
  let x = n;
  const rems: number[] = [];
  let step = 0;
  while (x > 0 && step < MAX_DIV_STEPS) {
    const q = Math.floor(x / base);
    const r = x % base;
    rems.push(r);
    lines.push(`${x} = ${base}×${q} + ${r}`);
    x = q;
    step++;
  }
  if (x > 0) lines.push(`… (truncated after ${MAX_DIV_STEPS} steps)`);
  const digits = [...rems].reverse();
  let digitStr: string;
  if (base === 16) {
    digitStr = digits.map((r) => HEX_DIGITS[r]).join("");
  } else {
    digitStr = digits.join("");
  }
  lines.push(`∴ (${digitStr})${radixLabel}`);
  return lines;
}

function buildToTargetLines(decimal: number, toBase: NumberSystemBase, output: string): string[] {
  if (toBase === "10") {
    return [`output: ${output}`];
  }
  if (toBase === "char") {
    const r = Math.round(decimal);
    return [`chr(${decimal})=${output}  [${formatCharForDisplay(r)}]`];
  }
  const b = parseInt(toBase, 10);
  const label = toBase === "2" ? "₂" : toBase === "8" ? "₈" : "₁₆";
  const head = toBase === "2" ? `(10→2)` : toBase === "8" ? `(10→8)` : `(10→16)`;
  const intN = Math.floor(Math.abs(decimal));
  const hasFrac = Math.abs(Math.abs(decimal) - intN) > 1e-12;
  const divLines = divisionsToBase(intN, b, label);
  if (divLines.length === 0) {
    return [`${head}`, `N₁₀=${decimal} → ${output}`];
  }
  if (hasFrac) {
    const fracPart = Math.abs(decimal) - intN;
    const fracLines = fractionalMultiplyChain(fracPart, b, label);
    return [head, ...divLines, ...(fracLines.length ? fracLines : [`+ fractional×${b} (see output)`]), `→ ${output}`];
  }
  return [head, ...divLines, `→ ${output}`];
}

/**
 * Formula lines for the pair calculator (mostly equations; little prose).
 */
export function buildCalculatorExplanationLines(
  rawTrimmed: string,
  decimal: number,
  fromBase: NumberSystemBase,
  toBase: NumberSystemBase,
  output: string
): string[] {
  const lines: string[] = [];

  if (fromBase === "char") {
    const cp = rawTrimmed.length === 1 ? rawTrimmed.charCodeAt(0) : decimal;
    lines.push(`U+${cp.toString(16).toUpperCase().padStart(4, "0")}  ⟹  N₁₀=${decimal}`);
  } else {
    const cleaned = stripInputForExplain(rawTrimmed, fromBase);
    const exp = expansionLinesFromCleaned(cleaned, fromBase, decimal);
    if (exp.length) lines.push(...exp);
    else {
      const B = parseInt(fromBase, 10);
      lines.push(
        `Place values: left of . → weights ${B}^0, ${B}^1, ${B}^2, …  |  right of . → ${B}^-1, ${B}^-2, …`
      );
      lines.push(`Add each (digit × its weight) → N₁₀ = ${formatExplainNum(decimal)}`);
    }
  }

  const targetLines = buildToTargetLines(decimal, toBase, output);
  lines.push(...targetLines);

  return lines;
}

export function calculatorExplanationPlaceholder(): string {
  return "Enter a value → place-value expansion + division chain.";
}

export function calculatorExplanationError(message: string): string[] {
  return [`parse error: ${message}`];
}
