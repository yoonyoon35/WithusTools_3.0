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

export function parseNumberSystemInput(input: string, base: NumberSystemBase): number {
  const trimmed = input.trim().toLowerCase();
  if (base === "char") {
    if (trimmed.length !== 1) throw new Error("Please enter a single character");
    return trimmed.charCodeAt(0);
  }
  let cleaned = trimmed;
  if (cleaned.startsWith("0b") && base === "2") cleaned = cleaned.slice(2);
  else if (cleaned.startsWith("0x") && base === "16") cleaned = cleaned.slice(2);
  else if (cleaned.startsWith("0") && base === "8") cleaned = cleaned.slice(1);
  const validChars: Record<string, string> = {
    "2": "01",
    "8": "0-7",
    "10": "0-9",
    "16": "0-9a-f",
  };
  const re = new RegExp(`^[${validChars[base]}]+$`);
  if (!cleaned.match(re)) throw new Error(`Invalid characters for base ${base}`);
  return parseInt(cleaned, parseInt(base));
}

export function convertNumberSystemFromDecimal(decimal: number, base: NumberSystemBase): string {
  if (base === "char") {
    if (decimal < 0 || decimal > 65535) throw new Error("Character code must be between 0 and 65535");
    return formatCharForDisplay(decimal);
  }
  const b = parseInt(base);
  if (decimal === 0) return "0";
  const isNeg = decimal < 0;
  decimal = Math.abs(decimal);
  let result = "";
  while (decimal > 0) {
    const rem = decimal % b;
    result = (rem < 10 ? rem.toString() : String.fromCharCode(87 + rem)) + result;
    decimal = Math.floor(decimal / b);
  }
  if (base === "2") result = "0b" + result;
  else if (base === "16") result = "0x" + result;
  else if (base === "8") result = "0" + result;
  return isNeg ? "-" + result : result;
}

export const NUMBER_SYSTEM_INPUT_PLACEHOLDERS: Record<NumberSystemBase, string> = {
  "2": "e.g. 0b1010 or 1010 (0 and 1 only)",
  "8": "e.g. 0777 or 777 (0–7 only)",
  "10": "e.g. 255 (0–9 only)",
  "16": "e.g. 0xFF or FF (0–9, A–F)",
  char: "e.g. A (single character)",
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
