/**
 * Breadcrumb path segment to display name mapping for JSON-LD
 */
import { TOOLS } from "@/data/tools";
import {
  extractLocaleFromPathname,
  stripLocalePrefix,
} from "@/lib/strip-locale-prefix";
import { routing } from "@/i18n/routing";
import {
  getBreadcrumbHomeLabel,
  getBreadcrumbPathOverride,
  getBreadcrumbSlugLabel,
  getLocalizedTool,
  type CatalogMessages,
} from "@/lib/i18n-catalog";

const SITE_URL = "https://withustools.com";

/** Build breadcrumb items from pathname */
export function buildBreadcrumb(
  pathname: string,
  messages: CatalogMessages = {}
): { name: string; item: string }[] {
  const locale =
    extractLocaleFromPathname(pathname || "/") ?? routing.defaultLocale;
  const items: { name: string; item: string }[] = [
    { name: getBreadcrumbHomeLabel(messages), item: `${SITE_URL}/${locale}/` },
  ];
  const pathWithoutLocale = stripLocalePrefix(pathname || "/");
  if (!pathWithoutLocale || pathWithoutLocale === "/") return items;

  const segments = pathWithoutLocale.split("/").filter(Boolean);
  let currentPath = "";

  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    currentPath += `/${segment}`;

    const tool = TOOLS.find((t) => t.path === currentPath);
    const name =
      getBreadcrumbPathOverride(currentPath, messages) ??
      (tool ? getLocalizedTool(tool, messages).title : getBreadcrumbSlugLabel(segment, messages));
    const item = `${SITE_URL}/${locale}${currentPath}/`;
    items.push({ name, item });
  }

  return items;
}
