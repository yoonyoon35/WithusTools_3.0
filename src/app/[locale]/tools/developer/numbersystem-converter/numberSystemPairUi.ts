import { asMap, asText } from "@/lib/tool-ui-helpers";
import {
  baseToPairKey,
  type NumberSystemBase,
  type NumberSystemPairKey,
} from "@/utils/numberSystemConversion";

const BASE_PLACEHOLDER_KEY: Record<NumberSystemBase, string> = {
  "2": "bin",
  "8": "oct",
  "10": "dec",
  "16": "hex",
  char: "char",
};

export function pairBaseLabel(ui: unknown, base: NumberSystemBase): string {
  const bases = asMap(asMap(ui).bases);
  const key = baseToPairKey(base);
  return asText(bases[key]);
}

export function pairPlaceholder(ui: unknown, base: NumberSystemBase): string {
  const placeholders = asMap(asMap(ui).placeholders);
  return asText(placeholders[BASE_PLACEHOLDER_KEY[base]]);
}

export function pairKeyLabel(ui: unknown, key: NumberSystemPairKey): string {
  const bases = asMap(asMap(ui).bases);
  return asText(bases[key]);
}
