import type { MetadataRoute } from "next";

const BASE_URL = "https://withustools.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/", // API 라우트는 크롤링 불필요 (미래 확장 대비)
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
