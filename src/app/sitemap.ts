import type { MetadataRoute } from "next";
import { ALL_TOOLS } from "@/data/all-tools";
import {
  HASH_CALCULATOR_ALGORITHMS,
  JPG_CONVERTER_FORMATS,
  PDF_CONVERTER_FORMATS,
  SSH_KEY_ALGORITHMS,
} from "@/data/prerender-segments";
import { getAllFaqStaticParams } from "@/data/faq-data";
import {
  ANGLE_HUB_KEYS,
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
  getTimeKeys,
  getVolumeKeys,
  getWeightKeys,
  PRESSURE_HUB_KEYS,
  SPEED_HUB_KEYS,
  TEMPERATURE_HUB_KEYS,
} from "@/utils/conversions";
import { getAllNumberSystemPairSlugs } from "@/utils/numberSystemConversion";
import { getAllColorFormatPairs, getCanonicalColorPairSlug } from "@/utils/colorFormatConversions";

const BASE_URL = "https://withustools.com";

/**
 * Sitemap section order (oldest / core first → newest / long-tail last):
 * 1. Site foundation (home, search, tools index)
 * 2. Legal & settings
 * 3. All registered tool URLs from ALL_TOOLS (sorted by path; includes unit-converter hubs)
 * 4. Hash calculator algorithm sub-routes
 * 5. SSH algorithm sub-routes
 * 6. JPG converter format sub-routes
 * 7. PDF converter format sub-routes
 * 8. Unit converter dedicated pair pages (bulk programmatic URLs; Power pairs are appended after FAQ — see below)
 * 9. FAQ articles (content pages)
 * 10. Power Converter dedicated pair pages (newest unit-converter bulk URLs)
 * 11. Number System Converter dedicated pair pages (developer)
 * 12. Color Picker format pair pages (HEX, RGB, RGBA, HSL, HSV, CMYK — 30 URLs)
 *
 * Excluded on purpose:
 * - `/tools/[id]` landing IDs (redirect to canonical paths; avoid duplicate URLs)
 * - API routes, not-found
 *
 * Dynamic segments must match `prerender-segments.ts` and each route's `generateStaticParams`.
 *
 * GPA-related URLs (calculator sub-page + FAQ) are included automatically:
 * - `/tools/calculator/gpa-calculator/target-gpa` — `PATH_TITLES` in `all-tools.ts` → `ALL_TOOLS` → `toolPagesSorted`
 * - `/faq/gpa/what-is-weighted-gpa` — `FAQ_ENTRIES` in `faq-data.ts` → `getAllFaqStaticParams` → `faqPages`
 */

function dedupeSitemapByUrl(entries: MetadataRoute.Sitemap): MetadataRoute.Sitemap {
  const seen = new Set<string>();
  const out: MetadataRoute.Sitemap = [];
  for (const e of entries) {
    if (seen.has(e.url)) continue;
    seen.add(e.url);
    out.push(e);
  }
  return out;
}

function unitConverterPairSitemapEntries(
  now: Date,
  basePath: string,
  keys: readonly string[],
  getCanonicalSlug: (fromKey: string, toKey: string) => string
): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const from of keys) {
    for (const to of keys) {
      if (from === to) continue;
      entries.push({
        url: `${BASE_URL}${basePath}/${getCanonicalSlug(from, to)}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.65,
      });
    }
  }
  return entries;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const siteFoundation: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/search`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/tools`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
  ];

  const legalAndMeta: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/terms-of-use`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/cookie-settings`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.55,
    },
    {
      url: `${BASE_URL}/licenses`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.45,
    },
  ];

  const toolPagesSorted: MetadataRoute.Sitemap = [...ALL_TOOLS]
    .sort((a, b) => a.path.localeCompare(b.path))
    .map(({ path }) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

  const hashAlgorithmPages: MetadataRoute.Sitemap = HASH_CALCULATOR_ALGORITHMS.map((algorithm) => ({
    url: `${BASE_URL}/tools/hash-calculator/${algorithm}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.72,
  }));

  const sshAlgorithmPages: MetadataRoute.Sitemap = SSH_KEY_ALGORITHMS.map((algorithm) => ({
    url: `${BASE_URL}/tools/ssh/${algorithm}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.72,
  }));

  const jpgConverterPages: MetadataRoute.Sitemap = JPG_CONVERTER_FORMATS.map((format) => ({
    url: `${BASE_URL}/tools/jpg-converter/${format}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const pdfConverterPages: MetadataRoute.Sitemap = PDF_CONVERTER_FORMATS.map((format) => ({
    url: `${BASE_URL}/tools/pdf-converter/${format}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const unitConverterPairPages: MetadataRoute.Sitemap = [
    ...unitConverterPairSitemapEntries(now, "/tools/unit-converter/length", getLengthKeys(), getCanonicalLengthSlug),
    ...unitConverterPairSitemapEntries(now, "/tools/unit-converter/weight", getWeightKeys(), getCanonicalWeightSlug),
    ...unitConverterPairSitemapEntries(now, "/tools/unit-converter/area", getAreaKeys(), getCanonicalAreaSlug),
    ...unitConverterPairSitemapEntries(now, "/tools/unit-converter/volume", getVolumeKeys(), getCanonicalVolumeSlug),
    ...unitConverterPairSitemapEntries(now, "/tools/unit-converter/time", getTimeKeys(), getCanonicalTimeSlug),
    ...unitConverterPairSitemapEntries(now, "/tools/unit-converter/digital", getDigitalKeys(), getCanonicalDigitalSlug),
    ...unitConverterPairSitemapEntries(now, "/tools/unit-converter/energy", getEnergyKeys(), getCanonicalEnergySlug),
    ...unitConverterPairSitemapEntries(
      now,
      "/tools/unit-converter/temperature",
      [...TEMPERATURE_HUB_KEYS],
      getCanonicalTemperatureSlug
    ),
    ...unitConverterPairSitemapEntries(now, "/tools/unit-converter/speed", [...SPEED_HUB_KEYS], getCanonicalSpeedSlug),
    ...unitConverterPairSitemapEntries(
      now,
      "/tools/unit-converter/pressure",
      [...PRESSURE_HUB_KEYS],
      getCanonicalPressureSlug
    ),
    ...unitConverterPairSitemapEntries(now, "/tools/unit-converter/angle", [...ANGLE_HUB_KEYS], getCanonicalAngleSlug),
  ];

  const faqPages: MetadataRoute.Sitemap = getAllFaqStaticParams().map(({ category, slug }) => ({
    url: `${BASE_URL}/faq/${category}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  const powerConverterPairPages: MetadataRoute.Sitemap = unitConverterPairSitemapEntries(
    now,
    "/tools/unit-converter/power",
    getPowerKeys(),
    getCanonicalPowerSlug
  );

  const numberSystemPairPages: MetadataRoute.Sitemap = getAllNumberSystemPairSlugs().map((slug) => ({
    url: `${BASE_URL}/tools/developer/numbersystem-converter/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  const colorFormatPairPages: MetadataRoute.Sitemap = getAllColorFormatPairs().map(({ from, to }) => ({
    url: `${BASE_URL}/tools/developer/color-picker/converter/${getCanonicalColorPairSlug(from, to)}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return dedupeSitemapByUrl([
    ...siteFoundation,
    ...legalAndMeta,
    ...toolPagesSorted,
    ...hashAlgorithmPages,
    ...sshAlgorithmPages,
    ...jpgConverterPages,
    ...pdfConverterPages,
    ...unitConverterPairPages,
    ...faqPages,
    ...powerConverterPairPages,
    ...numberSystemPairPages,
    ...colorFormatPairPages,
  ]);
}
