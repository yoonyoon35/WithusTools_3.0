/**
 * Formula-focused conversion notes for the pair calculator (minimal prose).
 */

import {
  type NumberSystemBase,
  formatCharForDisplay,
  NUMBER_SYSTEM_BASE_LABELS,
} from "@/utils/numberSystemConversion";

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

const MAX_DIV_STEPS = 24;

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
    return [`chr(${decimal})=${output}  [${formatCharForDisplay(decimal)}]`];
  }
  const b = parseInt(toBase, 10);
  const label = toBase === "2" ? "₂" : toBase === "8" ? "₈" : "₁₆";
  const head = toBase === "2" ? `(10→2)` : toBase === "8" ? `(10→8)` : `(10→16)`;
  const divLines = divisionsToBase(decimal, b, label);
  if (divLines.length === 0) {
    return [`${head}`, `N₁₀=${decimal} → ${output}`];
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
    let exp: string[] = [];
    if (fromBase === "2") exp = binaryExpansionFull(cleaned);
    else if (fromBase === "8") exp = octalExpansionFull(cleaned);
    else if (fromBase === "16") exp = hexExpansionFull(cleaned);
    else if (fromBase === "10") exp = decimalExpansionDisplay(cleaned);

    if (exp.length) lines.push(...exp);
    else {
      const B = parseInt(fromBase, 10);
      lines.push(`N = Σ d_k×${B}^k  ⟹  N₁₀=${decimal}`);
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
