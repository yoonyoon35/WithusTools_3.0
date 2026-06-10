import { routing, type Locale } from "@/i18n/routing";

/** pathname 첫 세그먼트에서 locale을 추출합니다. */
export function extractLocaleFromPathname(pathname: string): Locale | null {
  const segment = pathname.split("/").filter(Boolean)[0];
  if (segment && routing.locales.includes(segment as Locale)) {
    return segment as Locale;
  }
  return null;
}

/**
 * pathname에서 locale 접두사를 제거합니다.
 * localePrefix: 'always' — /en/..., /ko/... 모두 제거.
 */
export function stripLocalePrefix(pathname: string): string {
  const normalized =
    pathname.endsWith("/") && pathname.length > 1 ? pathname : `${pathname}/`;

  for (const locale of routing.locales) {
    const prefix = `/${locale}/`;
    if (normalized === `/${locale}/` || normalized.startsWith(prefix)) {
      const stripped = normalized.slice(`/${locale}`.length) || "/";
      return stripped.endsWith("/") ? stripped : `${stripped}/`;
    }
  }

  return normalized;
}
