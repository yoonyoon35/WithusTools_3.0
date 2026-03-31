/**
 * Number system (radix) conversion — shared by hub and dedicated pair pages.
 */

export type NumberSystemBase = "2" | "8" | "10" | "16" | "char";

/** Short URL keys for pair slugs (e.g. bin-to-hex). */
export const NUMBER_SYSTEM_PAIR_KEYS = ["bin", "oct", "dec", "hex", "char"] as const;
export type NumberSystemPairKey = (typeof NUMBER_SYSTEM_PAIR_KEYS)[number];

const PAIR_KEY_TO_BASE: Record<NumberSystemPairKey, NumberSystemBase> = {
  bin: "2",
  oct: "8",
  dec: "10",
  hex: "16",
  char: "char",
};

const BASE_TO_PAIR_KEY: Record<NumberSystemBase, NumberSystemPairKey> = {
  "2": "bin",
  "8": "oct",
  "10": "dec",
  "16": "hex",
  char: "char",
};

export function pairKeyToBase(key: NumberSystemPairKey): NumberSystemBase {
  return PAIR_KEY_TO_BASE[key];
}

export function baseToPairKey(base: NumberSystemBase): NumberSystemPairKey {
  return BASE_TO_PAIR_KEY[base];
}

export function getCanonicalNumberSystemSlug(
  from: NumberSystemPairKey,
  to: NumberSystemPairKey
): string {
  return `${from}-to-${to}`;
}

export function parseNumberSystemPairSlug(slug: string): {
  from: NumberSystemPairKey;
  to: NumberSystemPairKey;
} | null {
  const idx = slug.indexOf("-to-");
  if (idx <= 0) return null;
  const from = slug.slice(0, idx) as NumberSystemPairKey;
  const to = slug.slice(idx + 4) as NumberSystemPairKey;
  if (!NUMBER_SYSTEM_PAIR_KEYS.includes(from) || !NUMBER_SYSTEM_PAIR_KEYS.includes(to)) return null;
  if (from === to) return null;
  return { from, to };
}

export function getAllNumberSystemPairSlugs(): string[] {
  const slugs: string[] = [];
  for (const from of NUMBER_SYSTEM_PAIR_KEYS) {
    for (const to of NUMBER_SYSTEM_PAIR_KEYS) {
      if (from === to) continue;
      slugs.push(getCanonicalNumberSystemSlug(from, to));
    }
  }
  return slugs;
}

/** C0 control character names (0–31) and DEL (127) – displayed instead of raw char */
const C0_NAMES: Record<number, string> = {
  0: "NUL",
  1: "SOH",
  2: "STX",
  3: "ETX",
  4: "EOT",
  5: "ENQ",
  6: "ACK",
  7: "BEL",
  8: "BS",
  9: "TAB",
  10: "LF",
  11: "VT",
  12: "FF",
  13: "CR",
  14: "SO",
  15: "SI",
  16: "DLE",
  17: "DC1",
  18: "DC2",
  19: "DC3",
  20: "DC4",
  21: "NAK",
  22: "SYN",
  23: "ETB",
  24: "CAN",
  25: "EM",
  26: "SUB",
  27: "ESC",
  28: "FS",
  29: "GS",
  30: "RS",
  31: "US",
  127: "DEL",
};

/** C1 control character names (128–159) – displayed instead of replacement char */
const C1_NAMES: Record<number, string> = {
  128: "PADDING CHARACTER",
  129: "HIGH OCTET PRESET",
  130: "BREAK PERMITTED HERE",
  131: "NO BREAK HERE",
  132: "INDEX",
  133: "NEXT LINE",
  134: "START OF SELECTED AREA",
  135: "END OF SELECTED AREA",
  136: "CHARACTER TABULATION SET",
  137: "CHARACTER TABULATION WITH JUSTIFICATION",
  138: "LINE TABULATION SET",
  139: "PARTIAL LINE FORWARD",
  140: "PARTIAL LINE BACKWARD",
  141: "REVERSE LINE FEED",
  142: "SINGLE SHIFT TWO",
  143: "SINGLE SHIFT THREE",
  144: "DEVICE CONTROL STRING",
  145: "PRIVATE USE ONE",
  146: "PRIVATE USE TWO",
  147: "SET TRANSMIT STATE",
  148: "CANCEL CHARACTER",
  149: "MESSAGE WAITING",
  150: "START OF GUARDED AREA",
  151: "END OF GUARDED AREA",
  152: "START OF STRING",
  153: "SINGLE GRAPHIC CHARACTER INTRODUCER",
  154: "SINGLE CHARACTER INTRODUCER",
  155: "OPERATING SYSTEM COMMAND",
  156: "PRIVACY MESSAGE",
  157: "APPLICATION PROGRAM COMMAND",
  158: "OPERATING SYSTEM COMMAND",
  159: "APPLICATION PROGRAM COMMAND",
};

export function formatCharForDisplay(code: number): string {
  if (code >= 0 && code <= 31) return C0_NAMES[code] ?? `U+${code.toString(16).toUpperCase().padStart(4, "0")}`;
  if (code === 127) return "DEL";
  if (code >= 128 && code <= 159) return C1_NAMES[code] ?? `U+${code.toString(16).toUpperCase().padStart(4, "0")}`;
  return String.fromCharCode(code);
}

/** Max digits after the radix point when converting to another base (floating‑precision limit). */
export const NUMBER_SYSTEM_MAX_FRACTION_DIGITS = 32;

const VALID_REGEX: Record<Exclude<NumberSystemBase, "char">, RegExp> = {
  "2": /^[01]+$/,
  "8": /^[0-7]+$/,
  "10": /^[0-9]+$/,
  "16": /^[0-9a-f]+$/,
};

function stripNumericPrefix(intPart: string, base: Exclude<NumberSystemBase, "char">): string {
  let s = intPart.toLowerCase();
  if (base === "2" && s.startsWith("0b")) s = s.slice(2);
  else if (base === "16" && s.startsWith("0x")) s = s.slice(2);
  else if (base === "8" && s.length > 1 && s.startsWith("0")) s = s.slice(1);
  return s;
}

function parseFractionalPart(frac: string, radix: number): number {
  if (frac === "") return 0;
  if (!VALID_REGEX[String(radix) as keyof typeof VALID_REGEX].test(frac)) {
    throw new Error(`Invalid fractional digits for base ${radix}`);
  }
  let sum = 0;
  let pow = 1 / radix;
  for (let i = 0; i < frac.length; i++) {
    const ch = frac[i]!;
    const d = parseInt(ch, radix);
    if (Number.isNaN(d) || d >= radix) throw new Error(`Invalid fractional digits for base ${radix}`);
    sum += d * pow;
    pow /= radix;
  }
  return sum;
}

export function parseNumberSystemInput(input: string, base: NumberSystemBase): number {
  const trimmed = input.trim().toLowerCase();
  if (base === "char") {
    if (trimmed.length !== 1) throw new Error("Please enter a single character");
    if (trimmed.includes(".")) throw new Error("Character input cannot include a decimal point");
    return trimmed.charCodeAt(0);
  }

  let s = trimmed;
  let neg = false;
  if (s.startsWith("-")) {
    neg = true;
    s = s.slice(1).trimStart();
  } else if (s.startsWith("+")) {
    s = s.slice(1).trimStart();
  }

  const dot = s.indexOf(".");
  if (dot !== s.lastIndexOf(".")) throw new Error("Only one decimal point is allowed");

  const rawInt = dot === -1 ? s : s.slice(0, dot);
  const rawFrac = dot === -1 ? "" : s.slice(dot + 1);

  if (rawInt === "" && rawFrac === "") throw new Error("Empty input");

  const radix = parseInt(base, 10);
  const intStripped = stripNumericPrefix(rawInt, base);
  const intPartStr = intStripped === "" ? "0" : intStripped;

  if (!VALID_REGEX[base].test(intPartStr)) {
    throw new Error(`Invalid characters for base ${base}`);
  }

  const intVal = parseInt(intPartStr, radix);
  if (!Number.isFinite(intVal)) throw new Error(`Invalid value for base ${base}`);

  const fracVal = parseFractionalPart(rawFrac, radix);
  const out = intVal + fracVal;
  return neg ? -out : out;
}

function digitToChar(d: number): string {
  return d < 10 ? String(d) : String.fromCharCode(87 + d);
}

function integerAbsToRadixString(n: number, b: number): string {
  let x = Math.floor(n);
  if (x === 0) return "0";
  let result = "";
  while (x > 0) {
    const rem = x % b;
    result = digitToChar(rem) + result;
    x = Math.floor(x / b);
  }
  return result;
}

function fractionalPartToRadixString(frac: number, b: number, maxDigits: number): string {
  if (frac <= 1e-15) return "";
  let f = frac;
  let digits = "";
  for (let i = 0; i < maxDigits; i++) {
    if (f < 1e-15) break;
    f *= b;
    const d = Math.min(b - 1, Math.floor(f + 1e-10));
    f -= d;
    digits += digitToChar(d);
    if (f < 1e-12) break;
  }
  return digits;
}

function applyNumericPrefix(integerAndRest: string, base: Exclude<NumberSystemBase, "char">): string {
  if (base === "2") return "0b" + integerAndRest;
  if (base === "16") return "0x" + integerAndRest;
  if (base === "8") return "0" + integerAndRest;
  return integerAndRest;
}

const CHAR_INT_EPS = 1e-9;

export function convertNumberSystemFromDecimal(decimal: number, base: NumberSystemBase): string {
  if (!Number.isFinite(decimal)) throw new Error("Value is not a finite number");

  if (base === "char") {
    const r = Math.round(decimal);
    if (Math.abs(decimal - r) > CHAR_INT_EPS) {
      throw new Error("Character output requires a whole number (0–65535)");
    }
    if (r < 0 || r > 65535) throw new Error("Character code must be between 0 and 65535");
    return formatCharForDisplay(r);
  }

  const b = parseInt(base, 10);
  const isNeg = decimal < 0;
  const x = Math.abs(decimal);
  if (x < 1e-15) return "0";

  const intPart = Math.floor(x);
  const frac = x - intPart;

  const intStr = integerAbsToRadixString(intPart, b);
  const fracStr = fractionalPartToRadixString(frac, b, NUMBER_SYSTEM_MAX_FRACTION_DIGITS);

  const body = fracStr === "" ? intStr : `${intStr}.${fracStr}`;
  const prefixed = applyNumericPrefix(body, base);
  return isNeg ? "-" + prefixed : prefixed;
}

export const NUMBER_SYSTEM_INPUT_PLACEHOLDERS: Record<NumberSystemBase, string> = {
  "2": "e.g. 0b1010, 1010.101 (0 and 1; optional .fraction)",
  "8": "e.g. 0777, 12.4 (0–7; optional .fraction)",
  "10": "e.g. 255, 0.625 (0–9; optional .fraction)",
  "16": "e.g. 0xFF, A.F (0–9, A–F; optional .fraction)",
  char: "e.g. A (single character, no fraction)",
};

export const NUMBER_SYSTEM_BASE_LABELS: Record<NumberSystemBase, string> = {
  "2": "Binary",
  "8": "Octal",
  "10": "Decimal",
  "16": "Hexadecimal",
  char: "Character",
};

/** Display names for pair keys (matches BASE_LABELS). */
export const NUMBER_SYSTEM_PAIR_KEY_LABELS: Record<NumberSystemPairKey, string> = {
  bin: "Binary",
  oct: "Octal",
  dec: "Decimal",
  hex: "Hexadecimal",
  char: "Character",
};

export const ALL_NUMBER_SYSTEM_BASES: NumberSystemBase[] = ["2", "8", "10", "16", "char"];

/** All directed pair pages whose input format matches `from` (for FAQ hub cards). */
export function getNumberSystemPairsFrom(from: NumberSystemPairKey): {
  href: string;
  line1: string;
  line2: string;
}[] {
  const links: { href: string; line1: string; line2: string }[] = [];
  for (const to of NUMBER_SYSTEM_PAIR_KEYS) {
    if (to === from) continue;
    const slug = getCanonicalNumberSystemSlug(from, to);
    const fn = NUMBER_SYSTEM_PAIR_KEY_LABELS[from];
    const tn = NUMBER_SYSTEM_PAIR_KEY_LABELS[to];
    links.push({
      href: `/tools/developer/numbersystem-converter/${slug}`,
      line1: `${from} to ${to} (${fn} to ${tn})`,
      line2: "Fixed input/output · same parsing as hub",
    });
  }
  links.sort((a, b) => a.href.localeCompare(b.href));
  return links;
}
