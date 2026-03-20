import type { Metadata } from "next";

const SITE_URL = "https://withustools.com";

export interface PageMetadataParams {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  path?: string;
  noIndex?: boolean;
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
  noIndex = false,
}: PageMetadataParams): Metadata {
  const url = path ? `${SITE_URL}${path}` : SITE_URL;
  const imageUrl = ogImage
    ? (ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`)
    : `${SITE_URL}/og-default.png`;

  return {
    title: title ? `${title} | WithusTools` : "WithusTools - Free Online Web Tools",
    description:
      description ||
      "50+ free online web tools. No signup required.",
    keywords: keywords.length > 0 ? keywords : ["online tools", "web utilities", "free tools", "withustools"],
    openGraph: {
      title: title || "WithusTools - Free Online Web Tools",
      description: description || "50+ free online web tools",
      url,
      siteName: "WithusTools",
      type: "website",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title || "WithusTools" }],
    },
    twitter: {
      card: "summary_large_image",
      title: title || "WithusTools",
      description: description || "50+ free online web tools",
    },
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
