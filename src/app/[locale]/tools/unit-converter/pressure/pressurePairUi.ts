import { asMap, asText } from "@/lib/tool-ui-helpers";
import { PRESSURE_KEY_TO_SLUG, PRESSURE_UNITS } from "@/utils/conversions";

/** Unit names stay in English (Bar, PSI, …) even on localized pages. */
export function pressureUnitLabel(
  _ui: unknown,
  key: string,
  variant: "name" | "nameSg" = "nameSg"
): string {
  const unit = PRESSURE_UNITS[key];
  if (!unit) return key;
  return variant === "nameSg" ? unit.nameSg ?? unit.name : unit.name;
}

export function pressureUnitSlug(key: string): string {
  return PRESSURE_KEY_TO_SLUG[key] ?? key;
}

export function pressureUnitDescription(ui: unknown, key: string): string {
  const descriptions = asMap(asMap(ui).unitDescriptions);
  return asText(descriptions[key]) || "";
}
