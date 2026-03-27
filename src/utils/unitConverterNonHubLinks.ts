import {
  ANGLE_HUB_KEYS,
  ANGLE_KEY_TO_SLUG,
  ANGLE_UNITS,
  AREA_HUB_KEYS,
  AREA_KEY_TO_SLUG,
  AREA_UNITS,
  DIGITAL_HUB_KEYS,
  DIGITAL_KEY_TO_SLUG,
  DIGITAL_UNITS,
  ENERGY_HUB_KEYS,
  ENERGY_KEY_TO_SLUG,
  ENERGY_UNITS,
  POWER_HUB_KEYS,
  POWER_KEY_TO_SLUG,
  POWER_UNITS,
  getAngleKeys,
  getAreaKeys,
  getCanonicalAngleSlug,
  getCanonicalAreaSlug,
  getCanonicalDigitalSlug,
  getCanonicalEnergySlug,
  getCanonicalLengthSlug,
  getCanonicalPowerSlug,
  getCanonicalPressureSlug,
  getCanonicalSpeedSlug,
  getCanonicalTemperatureSlug,
  getCanonicalTimeSlug,
  getCanonicalVolumeSlug,
  getCanonicalWeightSlug,
  getDigitalKeys,
  getEnergyKeys,
  getPowerKeys,
  getLengthKeys,
  getPressureKeys,
  getSpeedKeys,
  getTemperatureKeys,
  getTimeKeys,
  getVolumeKeys,
  getWeightKeys,
  LENGTH_HUB_KEYS,
  LENGTH_KEY_TO_SLUG,
  LENGTH_UNITS,
  PRESSURE_HUB_KEYS,
  PRESSURE_KEY_TO_SLUG,
  PRESSURE_UNITS,
  SPEED_HUB_KEYS,
  SPEED_KEY_TO_SLUG,
  SPEED_UNITS,
  TEMPERATURE_HUB_KEYS,
  TEMPERATURE_KEY_TO_SLUG,
  TEMPERATURE_UNITS,
  TIME_HUB_KEYS,
  TIME_KEY_TO_SLUG,
  TIME_UNITS,
  VOLUME_HUB_KEYS,
  VOLUME_KEY_TO_SLUG,
  VOLUME_UNITS,
  WEIGHT_HUB_KEYS,
  WEIGHT_KEY_TO_SLUG,
  WEIGHT_UNITS,
} from "@/utils/conversions";

export type UnitConverterNonHubCategory =
  | "length"
  | "weight"
  | "area"
  | "volume"
  | "time"
  | "digital"
  | "energy"
  | "power"
  | "temperature"
  | "speed"
  | "pressure"
  | "angle";

export interface NonHubPairLinkItem {
  href: string;
  line1: string;
  line2: string;
}

function isDedicatedHubPair(a: string, b: string, hub: Set<string>): boolean {
  return hub.has(a) && hub.has(b);
}

/**
 * For hub×hub pair pages (linked from Dedicated converters): up to `limit` links to pair pages
 * that are NOT hub×hub (at least one unit outside the hub list). Empty when the category has no
 * such pairs or the current page is not hub×hub.
 */
export function getNonHubDiscoveryLinks(
  category: UnitConverterNonHubCategory,
  fromKey: string,
  toKey: string,
  limit = 12
): NonHubPairLinkItem[] {
  const hubKeys: readonly string[] =
    category === "length"
      ? LENGTH_HUB_KEYS
      : category === "weight"
        ? WEIGHT_HUB_KEYS
        : category === "area"
          ? AREA_HUB_KEYS
          : category === "volume"
            ? VOLUME_HUB_KEYS
            : category === "time"
              ? TIME_HUB_KEYS
              : category === "digital"
                ? DIGITAL_HUB_KEYS
                : category === "energy"
                  ? ENERGY_HUB_KEYS
                  : category === "power"
                    ? POWER_HUB_KEYS
                    : category === "temperature"
                    ? TEMPERATURE_HUB_KEYS
                    : category === "speed"
                      ? SPEED_HUB_KEYS
                      : category === "pressure"
                        ? PRESSURE_HUB_KEYS
                        : ANGLE_HUB_KEYS;

  const allKeys: string[] =
    category === "length"
      ? getLengthKeys()
      : category === "weight"
        ? getWeightKeys()
        : category === "area"
          ? getAreaKeys()
          : category === "volume"
            ? getVolumeKeys()
            : category === "time"
              ? getTimeKeys()
              : category === "digital"
                ? getDigitalKeys()
                : category === "energy"
                  ? getEnergyKeys()
                  : category === "power"
                    ? getPowerKeys()
                    : category === "temperature"
                    ? getTemperatureKeys()
                    : category === "speed"
                      ? getSpeedKeys()
                      : category === "pressure"
                        ? getPressureKeys()
                        : getAngleKeys();

  const hub = new Set(hubKeys);
  const hasUnitOutsideHub = allKeys.some((k) => !hub.has(k));
  if (!hasUnitOutsideHub) return [];

  if (!hub.has(fromKey) || !hub.has(toKey)) return [];

  const basePath = `/tools/unit-converter/${category}`;

  const slug =
    category === "length"
      ? getCanonicalLengthSlug
      : category === "weight"
        ? getCanonicalWeightSlug
        : category === "area"
          ? getCanonicalAreaSlug
          : category === "volume"
            ? getCanonicalVolumeSlug
            : category === "time"
              ? getCanonicalTimeSlug
              : category === "digital"
                ? getCanonicalDigitalSlug
                : category === "energy"
                  ? getCanonicalEnergySlug
                  : category === "power"
                    ? getCanonicalPowerSlug
                    : category === "temperature"
                    ? getCanonicalTemperatureSlug
                    : category === "speed"
                      ? getCanonicalSpeedSlug
                      : category === "pressure"
                        ? getCanonicalPressureSlug
                        : getCanonicalAngleSlug;

  const keyToSlug =
    category === "length"
      ? (k: string) => LENGTH_KEY_TO_SLUG[k] ?? k
      : category === "weight"
        ? (k: string) => WEIGHT_KEY_TO_SLUG[k] ?? k
        : category === "area"
          ? (k: string) => AREA_KEY_TO_SLUG[k] ?? k
          : category === "volume"
            ? (k: string) => VOLUME_KEY_TO_SLUG[k] ?? k
            : category === "time"
              ? (k: string) => TIME_KEY_TO_SLUG[k] ?? k
              : category === "digital"
                ? (k: string) => DIGITAL_KEY_TO_SLUG[k] ?? k
                : category === "energy"
                  ? (k: string) => ENERGY_KEY_TO_SLUG[k] ?? k
                  : category === "power"
                    ? (k: string) => POWER_KEY_TO_SLUG[k] ?? k
                    : category === "temperature"
                      ? (k: string) => TEMPERATURE_KEY_TO_SLUG[k] ?? k
                      : category === "speed"
                        ? (k: string) => SPEED_KEY_TO_SLUG[k] ?? k
                        : category === "pressure"
                          ? (k: string) => PRESSURE_KEY_TO_SLUG[k] ?? k
                          : (k: string) => ANGLE_KEY_TO_SLUG[k] ?? k;

  const unitName = (k: string): string => {
    const u =
      category === "length"
        ? LENGTH_UNITS[k]
        : category === "weight"
          ? WEIGHT_UNITS[k]
          : category === "area"
            ? AREA_UNITS[k]
            : category === "volume"
              ? VOLUME_UNITS[k]
              : category === "time"
                ? TIME_UNITS[k]
                : category === "digital"
                  ? DIGITAL_UNITS[k]
                  : category === "energy"
                    ? ENERGY_UNITS[k]
                    : category === "power"
                      ? POWER_UNITS[k]
                      : category === "temperature"
                      ? TEMPERATURE_UNITS[k]
                      : category === "speed"
                        ? SPEED_UNITS[k]
                        : category === "pressure"
                          ? PRESSURE_UNITS[k]
                          : ANGLE_UNITS[k];
    if (!u) return k;
    return "nameSg" in u && u.nameSg ? u.nameSg : u.name;
  };

  const makeItem = (a: string, b: string): NonHubPairLinkItem => ({
    href: `${basePath}/${slug(a, b)}`,
    line1: `${keyToSlug(a)} to ${keyToSlug(b)}`,
    line2: `${unitName(a)} to ${unitName(b)}`,
  });

  const seen = new Set<string>();
  const out: NonHubPairLinkItem[] = [];

  const push = (a: string, b: string) => {
    if (a === b) return;
    if (isDedicatedHubPair(a, b, hub)) return;
    if (a === fromKey && b === toKey) return;
    const href = `${basePath}/${slug(a, b)}`;
    if (seen.has(href)) return;
    seen.add(href);
    out.push(makeItem(a, b));
  };

  for (const b of allKeys) {
    push(fromKey, b);
    if (out.length >= limit) return out;
  }

  for (const a of allKeys) {
    push(a, toKey);
    if (out.length >= limit) return out;
  }

  const rest: { a: string; b: string; sortKey: string }[] = [];
  for (const a of allKeys) {
    for (const b of allKeys) {
      if (a === b) continue;
      if (isDedicatedHubPair(a, b, hub)) continue;
      if (a === fromKey && b === toKey) continue;
      const href = `${basePath}/${slug(a, b)}`;
      if (seen.has(href)) continue;
      rest.push({ a, b, sortKey: slug(a, b) });
    }
  }
  rest.sort((x, y) => x.sortKey.localeCompare(y.sortKey));

  for (const { a, b } of rest) {
    push(a, b);
    if (out.length >= limit) break;
  }

  return out;
}
