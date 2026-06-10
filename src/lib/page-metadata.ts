import type { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { createMetadata } from "@/lib/metadata";

/** `/` → `home`, `/tools/hash-calculator` → `tools.hash-calculator` */
export function metaPathToKey(metaPath: string): string {
  if (!metaPath || metaPath === "/") return "home";
  return metaPath.replace(/^\//, "").replace(/\//g, ".");
}

export type PageMetaEntry = {
  title: string;
  description: string;
  keywords?: string[];
};

export type PageMetaMessages = {
  byPath?: Record<string, PageMetaEntry>;
};

/**
 * byPath 키는 `tools.image.image-compressor`처럼 점이 포함된 플랫 문자열.
 * next-intl dot-notation(`byPath.tools.image...`)과 충돌하므로 직접 조회한다.
 */
export function getPageMetaEntry(
  pageMeta: PageMetaMessages | undefined,
  metaPath: string
): PageMetaEntry | undefined {
  return pageMeta?.byPath?.[metaPathToKey(metaPath)];
}

export async function generatePageMetadata(
  locale: string,
  metaPath: string
): Promise<Metadata> {
  const loc = routing.locales.includes(locale as Locale)
    ? (locale as Locale)
    : routing.defaultLocale;
  const messages = await getMessages({ locale: loc });
  const entry = getPageMetaEntry(
    messages.pageMeta as PageMetaMessages | undefined,
    metaPath
  );

  if (!entry) {
    return createMetadata({ path: metaPath, locale: loc });
  }

  return createMetadata({
    title: entry.title,
    description: entry.description,
    path: metaPath,
    locale: loc,
    keywords: entry.keywords ?? [],
  });
}
