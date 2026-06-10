import type { Metadata } from "next";
import { routing, type Locale } from "@/i18n/routing";

const SITE_URL = "https://withustools.com";

export interface PageMetadataParams {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  path?: string;
  locale?: Locale;
  noIndex?: boolean;
}

/** localePrefix: 'always' — /en/tools/... 형태의 canonical path 생성 */
export function localizedPath(locale: Locale, path = ""): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const hasLocalePrefix = routing.locales.some(
    (loc) => normalized === `/${loc}` || normalized.startsWith(`/${loc}/`)
  );
  if (hasLocalePrefix) {
    return normalized.endsWith("/") ? normalized : `${normalized}/`;
  }
  if (!normalized || normalized === "/") return `/${locale}/`;
  const withLocale = `/${locale}${normalized}`;
  return withLocale.endsWith("/") ? withLocale : `${withLocale}/`;
}

function buildPageUrl(path: string, locale: Locale): string {
  return `${SITE_URL}${localizedPath(locale, path)}`;
}

/** hreflang alternates for all configured locales + x-default */
export function buildLanguageAlternates(path = ""): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = buildPageUrl(path, loc);
  }
  languages["x-default"] = buildPageUrl(path, routing.defaultLocale);
  return languages;
}

/**
 * Create dynamic metadata per page
 * Use inside generateMetadata on each page
 */
export function createMetadata({
  title,
  description,
  keywords = [],
  ogImage,
  path = "",
  locale = routing.defaultLocale,
  noIndex = false,
}: PageMetadataParams): Metadata {
  const url = buildPageUrl(path, locale);
  const imageUrl = ogImage
    ? (ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`)
    : `${SITE_URL}/og-default.png`;

  const ogTwitterTitle = title
    ? `${title} | WithusTools`
    : "WithusTools - Free Online Web Tools";

  return {
    ...(title ? { title } : {}),
    description:
      description ||
      "50+ free online web tools. No signup required.",
    keywords: keywords.length > 0 ? keywords : ["online tools", "web utilities", "free tools", "withustools"],
    openGraph: {
      title: ogTwitterTitle,
      description: description || "50+ free online web tools",
      url,
      siteName: "WithusTools",
      type: "website",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title || "WithusTools" }],
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | WithusTools` : "WithusTools",
      description: description || "50+ free online web tools",
    },
    alternates: {
      canonical: url,
      languages: buildLanguageAlternates(path),
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
