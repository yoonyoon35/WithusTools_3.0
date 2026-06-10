export type UiMap = Record<string, unknown>;

const SHARED_UI_KEYS = [
  "copy",
  "copied",
  "copyFailed",
  "clear",
  "cleared",
  "reset",
  "upload",
  "download",
  "open",
  "close",
  "success",
  "error",
  "loading",
  "noResult",
] as const;

export function asMap(value: unknown): UiMap {
  return value && typeof value === "object" ? (value as UiMap) : {};
}

/** nested shared.copy와 평탄 copy 모두 지원 (현지화 패치 호환) */
export function getSharedUi(toolUi: UiMap): UiMap {
  const nested = asMap(toolUi.shared);
  const out: UiMap = {};
  for (const key of SHARED_UI_KEYS) {
    out[key] = nested[key] ?? toolUi[key];
  }
  return out;
}

export function asText(value: unknown): string {
  return typeof value === "string" ? value : "";
}

export function formatUi(
  template: string,
  vars: Record<string, string | number>
): string {
  return Object.entries(vars).reduce(
    (s, [k, v]) => s.replaceAll(`{${k}}`, String(v)),
    template
  );
}
