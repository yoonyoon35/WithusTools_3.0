import type { MetadataRoute } from "next";
import { guideArticles } from "@/lib/guide/registry";
import { parseKoreanDateLabelToDate } from "@/lib/dates";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const staticPages: MetadataRoute.Sitemap = [
  { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
  { url: `${SITE_URL}/loan-calculator`, changeFrequency: "weekly", priority: 0.95 },
  { url: `${SITE_URL}/acquisition-tax-calculator`, changeFrequency: "weekly", priority: 0.85 },
  { url: `${SITE_URL}/brokerage-fee-calculator`, changeFrequency: "weekly", priority: 0.85 },
  { url: `${SITE_URL}/dsr-calculator`, changeFrequency: "weekly", priority: 0.85 },
  { url: `${SITE_URL}/dti-calculator`, changeFrequency: "weekly", priority: 0.85 },
  { url: `${SITE_URL}/ltv-calculator`, changeFrequency: "weekly", priority: 0.85 },
  { url: `${SITE_URL}/prepayment-fee-calculator`, changeFrequency: "weekly", priority: 0.85 },
  {
    url: `${SITE_URL}/comprehensive-property-tax-calculator`,
    changeFrequency: "weekly",
    priority: 0.85,
  },
  { url: `${SITE_URL}/guide`, changeFrequency: "weekly", priority: 0.7 },
  { url: `${SITE_URL}/about`, changeFrequency: "yearly", priority: 0.4 },
  { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
  { url: `${SITE_URL}/terms`, changeFrequency: "yearly", priority: 0.3 },
  { url: `${SITE_URL}/oss-notice`, changeFrequency: "yearly", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const guideEntries: MetadataRoute.Sitemap = guideArticles.map((article) => ({
    url: `${SITE_URL}/guide/${article.slug}`,
    lastModified: parseKoreanDateLabelToDate(article.updated) ?? undefined,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...staticPages, ...guideEntries];
}
