import { asMap, asText } from "@/lib/tool-ui-helpers";
import { VOLUME_KEY_TO_SLUG, VOLUME_UNITS } from "@/utils/conversions";

/** Unit names stay in English (Liter, US Gallon, …) even on localized pages. */
export function volumeUnitLabel(
  _ui: unknown,
  key: string,
  variant: "name" | "nameSg" = "nameSg"
): string {
  const unit = VOLUME_UNITS[key];
  if (!unit) return key;
  return variant === "nameSg" ? unit.nameSg ?? unit.name : unit.name;
}

export function volumeUnitSlug(key: string): string {
  return VOLUME_KEY_TO_SLUG[key] ?? key;
}

export function volumeUnitDescription(ui: unknown, key: string): string {
  const descriptions = asMap(asMap(ui).unitDescriptions);
  return asText(descriptions[key]) || "";
}
