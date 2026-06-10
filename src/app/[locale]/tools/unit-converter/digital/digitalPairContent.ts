import { DIGITAL_UNITS, getDigitalMultiplier } from "@/utils/conversions";
import { formatRatioDisplay } from "../length/lengthPairContent";

export { formatRatioDisplay };

const UNIT_DESCRIPTIONS: Record<string, string> = {
  gb:
    "The gigabyte (GB) here is a decimal unit: 1 GB = 10⁹ bytes. Storage marketing and many OS dialogs use decimal GB; some systems still show binary (GiB) labels—check context when comparing numbers.",
  tb:
    "The terabyte (TB) is 10¹² bytes in this tool (decimal SI). Large drives and cloud tiers are usually quoted in TB using powers of ten.",
  mb:
    "The megabyte (MB) is 10⁶ bytes (decimal). File sizes and download speeds are often discussed in MB alongside megabits per second (Mb/s) for networks.",
  b:
    "The byte is eight bits and is the usual addressable unit for files and memory. This converter expresses every unit in byte-equivalents using fixed factors.",
  kb:
    "The kilobyte (KB) is 10³ bytes (decimal kB). Binary KiB (1024 B) is a separate unit in the main converter (kibibyte).",
  pb:
    "The petabyte (PB) is 10¹⁵ bytes. Datacenter capacity and archival scale often reach PB using decimal definitions.",
  bit:
    "A bit is a binary digit. Here 1 byte = 8 bits, so the byte-equivalent of one bit is 0.125 bytes. Networking speeds often use bits per second.",
  mbit:
    "The megabit (Mb) is 10⁶ bits. Dividing by 8 gives byte-equivalents for data size; ISP speeds (Mbps) refer to megabits per second, not megabytes.",
};

export function getUnitDescription(key: string): string {
  return (
    UNIT_DESCRIPTIONS[key] ??
    `${DIGITAL_UNITS[key]?.name ?? key} uses the same byte-based factors as the main Digital Storage Converter.`
  );
}

export type DigitalKind = "byteUnit" | "bitUnit";

export function getDigitalKind(key: string): DigitalKind {
  if (key === "bit" || key.endsWith("bit")) return "bitUnit";
  return "byteUnit";
}

function kindLabel(k: DigitalKind): string {
  if (k === "bitUnit") return "bit-based units (converted via 8 bits per byte)";
  return "byte-based units (decimal SI: kB, MB, GB, …)";
}

export function getRelationshipContext(fromKey: string, toKey: string): string {
  const mult = getDigitalMultiplier(fromKey, toKey);
  const fromName = DIGITAL_UNITS[fromKey].nameSg ?? DIGITAL_UNITS[fromKey].name;
  const toName = DIGITAL_UNITS[toKey].nameSg ?? DIGITAL_UNITS[toKey].name;
  const fk = getDigitalKind(fromKey);
  const tk = getDigitalKind(toKey);

  if (fk === tk) {
    return `Both units are ${kindLabel(fk)}. Factors are fixed relative to one byte, so conversions are exact in floating-point arithmetic for this tool. The factor from ${fromName} to ${toName} is ${mult.toExponential(6)} (1 ${fromKey} = ${mult} ${toKey}).`;
  }

  return `You are converting between ${kindLabel(fk)} (${DIGITAL_UNITS[fromKey].name}) and ${kindLabel(tk)} (${DIGITAL_UNITS[toKey].name}). Bit units are mapped through 8 bits per byte, then scaled with the same decimal prefixes as byte units. The numeric factor is ${mult.toExponential(6)}.`;
}

export function getDetailedFormulaExplanation(fromKey: string, toKey: string): string {
  const m = getDigitalMultiplier(fromKey, toKey);
  const fromName = DIGITAL_UNITS[fromKey].nameSg ?? DIGITAL_UNITS[fromKey].name;
  const toName = DIGITAL_UNITS[toKey].nameSg ?? DIGITAL_UNITS[toKey].name;
  const Ff = DIGITAL_UNITS[fromKey].factor;
  const Ft = DIGITAL_UNITS[toKey].factor;
  return (
    `To convert ${fromName} to ${toName}, multiply the value in ${fromKey} by the ratio of bytes per ${fromKey} divided by bytes per ${toKey}. ` +
    `Equivalently: value_${toKey} = value_${fromKey} × (${Ff} / ${Ft}). ` +
    `Numerically, 1 ${fromKey} equals ${m} ${toKey}.`
  );
}

export function getExtraDerivation(fromKey: string, toKey: string): string | null {
  if (fromKey === "bit" && toKey === "b") {
    return `8 bits make 1 byte, so 1 bit = 1/8 byte (0.125 B).`;
  }
  if (fromKey === "b" && toKey === "bit") {
    return `1 byte = 8 bits exactly.`;
  }
  if (fromKey === "kb" && toKey === "b") {
    return `Decimal kilobyte: 1 kB = 1,000 bytes (10³).`;
  }
  if (fromKey === "mb" && toKey === "kb") {
    return `Decimal steps: 1 MB = 1,000 kB (10³ kilobytes per megabyte).`;
  }
  if (fromKey === "gb" && toKey === "mb") {
    return `1 GB = 1,000 MB (decimal gigabyte).`;
  }
  if (fromKey === "tb" && toKey === "gb") {
    return `1 TB = 1,000 GB (decimal terabyte).`;
  }
  if (fromKey === "pb" && toKey === "tb") {
    return `1 PB = 1,000 TB (decimal petabyte).`;
  }
  if (fromKey === "mbit" && toKey === "b") {
    return `1 megabit = 10⁶ bits = (10⁶ ÷ 8) bytes = 125,000 bytes with decimal definitions used here.`;
  }
  return null;
}
