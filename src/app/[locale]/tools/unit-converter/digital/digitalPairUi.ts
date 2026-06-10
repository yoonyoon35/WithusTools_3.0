import { asMap, asText } from "@/lib/tool-ui-helpers";
import { DIGITAL_KEY_TO_SLUG, DIGITAL_UNITS } from "@/utils/conversions";

/** Unit names stay in English (Gigabyte, Byte, …) even on localized pages. */
export function digitalUnitLabel(
  _ui: unknown,
  key: string,
  variant: "name" | "nameSg" = "nameSg"
): string {
  const unit = DIGITAL_UNITS[key];
  if (!unit) return key;
  return variant === "nameSg" ? unit.nameSg ?? unit.name : unit.name;
}

export function digitalUnitSlug(key: string): string {
  return DIGITAL_KEY_TO_SLUG[key] ?? key;
}

export function digitalUnitDescription(ui: unknown, key: string): string {
  const descriptions = asMap(asMap(ui).unitDescriptions);
  return asText(descriptions[key]) || "";
}
