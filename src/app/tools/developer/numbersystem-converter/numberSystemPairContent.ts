import {
  getCanonicalNumberSystemSlug,
  NUMBER_SYSTEM_PAIR_KEYS,
  NUMBER_SYSTEM_PAIR_KEY_LABELS,
  type NumberSystemPairKey,
} from "@/utils/numberSystemConversion";

const FORMAT_DESCRIPTIONS: Record<NumberSystemPairKey, string> = {
  bin: "Binary (base 2) uses digits 0 and 1. This tool accepts an optional 0b prefix. Each position is a power of two; it is the native representation for digital logic and bitwise operations.",
  oct: "Octal (base 8) uses digits 0–7. A leading 0 denotes octal in this converter (e.g. 0777). Grouping binary digits in threes maps cleanly to octal, which is why Unix file permissions often use it.",
  dec: "Decimal (base 10) is everyday positional notation using digits 0–9. No prefix is required. Internally, values are parsed to an integer and then re-encoded into any other selected format.",
  hex: "Hexadecimal (base 16) uses 0–9 and A–F. This tool accepts an optional 0x prefix. Each hex digit covers four bits, so it is compact for memory addresses, colors, and byte dumps.",
  char: "Character mode treats exactly one character as its Unicode (UTF-16 code unit) scalar value in the range 0–65535. Control and C1 characters are labeled by name in the output when relevant.",
};

export function getNumberSystemFormatDescription(key: NumberSystemPairKey): string {
  return FORMAT_DESCRIPTIONS[key];
}

export function getNumberSystemSummary(from: NumberSystemPairKey, to: NumberSystemPairKey): string {
  const fromName = NUMBER_SYSTEM_PAIR_KEY_LABELS[from];
  const toName = NUMBER_SYSTEM_PAIR_KEY_LABELS[to];
  return (
    `To convert ${fromName} to ${toName}, the tool first parses your input strictly as ${fromName.toLowerCase()}, producing an integer in decimal. ` +
    `That integer is then formatted as ${toName.toLowerCase()} using the same rules as the main Number System Converter (prefixes 0b, 0, 0x where applicable; character output uses symbolic names for common controls). ` +
    `The transformation is exact for integers that fit the parser and character range; there is no separate rounding step.`
  );
}

export function getNumberSystemRelationshipContext(from: NumberSystemPairKey, to: NumberSystemPairKey): string {
  const fromName = NUMBER_SYSTEM_PAIR_KEY_LABELS[from];
  const toName = NUMBER_SYSTEM_PAIR_KEY_LABELS[to];
  if (from === to) return "";
  const groupNumeric = ["bin", "oct", "dec", "hex"] as const;
  const fromIsNum = groupNumeric.includes(from as (typeof groupNumeric)[number]);
  const toIsNum = groupNumeric.includes(to as (typeof groupNumeric)[number]);
  if (fromIsNum && toIsNum) {
    return `${fromName}, ${toName}, and the other numeric bases on this site all describe the same integer; only the radix changes. ` +
      `Moving between them is equivalent to changing how the value is written, not to scaling or unit conversion. ` +
      `Binary, octal, and hex align with bit boundaries (powers of two), while decimal is optimized for human arithmetic.`;
  }
  if (from === "char") {
    return `Character input maps one code point to an integer, which is then shown in ${toName.toLowerCase()}. ` +
      `That integer is the numeric value the character occupies in UTF-16 (BMP code units 0–65535).`;
  }
  if (to === "char") {
    return `Numeric input is interpreted in ${fromName.toLowerCase()}, converted to an integer, then displayed as the corresponding character (or a standard control-character name when applicable). ` +
      `Values outside 0–65535 are rejected for character output.`;
  }
  return `You are converting between ${fromName} and ${toName} via a shared integer representation. ` +
    `Parsing rules match the hub converter so results stay consistent across every directed pair page.`;
}

export function getNumberSystemOtherPairLinks(
  from: NumberSystemPairKey,
  to: NumberSystemPairKey,
  limit = 12
): { href: string; line1: string; line2: string }[] {
  const links: { href: string; line1: string; line2: string }[] = [];
  for (const f of NUMBER_SYSTEM_PAIR_KEYS) {
    for (const t of NUMBER_SYSTEM_PAIR_KEYS) {
      if (f === t) continue;
      if (f === from && t === to) continue;
      const slug = getCanonicalNumberSystemSlug(f, t);
      const fn = NUMBER_SYSTEM_PAIR_KEY_LABELS[f];
      const tn = NUMBER_SYSTEM_PAIR_KEY_LABELS[t];
      links.push({
        href: `/tools/developer/numbersystem-converter/${slug}`,
        line1: `${f} to ${t} (${fn} to ${tn})`,
        line2: "Fixed input/output · same parsing as hub",
      });
    }
  }
  links.sort((a, b) => a.href.localeCompare(b.href));
  return links.slice(0, limit);
}
