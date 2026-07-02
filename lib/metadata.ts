import type { Metadata } from "next";
import { SITE_DOMAIN, SITE_URL, ogImagePath } from "@/lib/site";

type CreatePageMetadataInput = {
  title: string;
  description: string;
  /** `/guide/foo` 형식. 홈은 `/` */
  path: string;
};

function pageUrl(path: string): string {
  if (path === "/" || path === "") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function socialTitle(title: string, path: string): string {
  if (path === "/" || path === "") return title;
  return `${title} | ${SITE_DOMAIN}`;
}

/** 페이지별 canonical·Open Graph·Twitter Card를 일관되게 생성합니다. */
export function createPageMetadata({ title, description, path }: CreatePageMetadataInput): Metadata {
  const url = pageUrl(path);
  const shareTitle = socialTitle(title, path);
  const images = [{ url: ogImagePath, width: 180, height: 180, alt: SITE_DOMAIN }];
  const isHome = path === "/" || path === "";

  return {
    title: isHome ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      url,
      title: shareTitle,
      description,
      images,
    },
    twitter: {
      card: "summary",
      title: shareTitle,
      description,
      images: [ogImagePath],
    },
  };
}
