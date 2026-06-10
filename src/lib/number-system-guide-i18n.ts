import { asMap, asText, formatUi, type UiMap } from "@/lib/tool-ui-helpers";
import type { NumberSystemBase } from "@/utils/numberSystemConversion";

export type GuideBaseMeta = {
  label: string;
  beginnerSymbols: string;
  devNote: string | null;
};

function guideMap(ui: unknown): UiMap {
  return asMap(asMap(ui).conversionGuide);
}

export function guideText(ui: unknown, key: string, fallback: string): string {
  const v = asText(guideMap(ui)[key]);
  return v || fallback;
}

export function guideBaseMeta(
  ui: unknown,
  baseLabels: UiMap
): Record<NumberSystemBase, GuideBaseMeta> {
  const g = guideMap(ui);
  const bases = asMap(g.bases);
  const fallback: Record<NumberSystemBase, GuideBaseMeta> = {
    "2": {
      label: asText(baseLabels.bin) || "Binary",
      beginnerSymbols: "Each position is either 0 or 1.",
      devNote: "Many tools allow a 0b prefix (e.g. 0b1010).",
    },
    "8": {
      label: asText(baseLabels.oct) || "Octal",
      beginnerSymbols: "Each digit is 0–7 (eight possibilities per position).",
      devNote: "A leading 0 is often used to mark octal (e.g. 012).",
    },
    "10": {
      label: asText(baseLabels.dec) || "Decimal",
      beginnerSymbols: "Ordinary digits 0–9; each position is a power of ten.",
      devNote: null,
    },
    "16": {
      label: asText(baseLabels.hex) || "Hexadecimal",
      beginnerSymbols: "Digits 0–9 plus letters A–F for values ten through fifteen.",
      devNote: "0x is a common prefix (e.g. 0xFF).",
    },
    char: {
      label: asText(baseLabels.char) || "Character",
      beginnerSymbols: "Exactly one symbol; its numeric code is the value you convert.",
      devNote: "This tool uses the UTF-16 code unit (0–65535 for BMP).",
    },
  };

  const out = { ...fallback };
  for (const key of Object.keys(out) as NumberSystemBase[]) {
    const b = asMap(bases[key]);
    if (asText(b.beginnerSymbols)) out[key].beginnerSymbols = asText(b.beginnerSymbols);
    if (b.devNote === null || typeof b.devNote === "string") {
      out[key].devNote = b.devNote === null ? null : asText(b.devNote) || null;
    }
    if (asText(b.label)) out[key].label = asText(b.label);
  }
  return out;
}

export function localizeParseError(msg: string, ui: unknown): string {
  const errors = asMap(asMap(ui).errorMessages);
  return asText(errors[msg]) || msg;
}

export function guideFormat(ui: unknown, key: string, fallback: string, vars: Record<string, string | number>): string {
  return formatUi(guideText(ui, key, fallback), vars);
}
