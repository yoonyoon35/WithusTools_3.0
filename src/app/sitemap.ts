import type { MetadataRoute } from "next";
import { ALL_TOOLS } from "@/data/all-tools";
import { getAllFaqStaticParams } from "@/data/faq-data";
import {
  ANGLE_HUB_KEYS,
  getAreaKeys,
  getCanonicalAngleSlug,
  getCanonicalAreaSlug,
  getCanonicalDigitalSlug,
  getCanonicalEnergySlug,
  getCanonicalLengthSlug,
  getCanonicalPressureSlug,
  getCanonicalSpeedSlug,
  getCanonicalTemperatureSlug,
  getCanonicalTimeSlug,
  getCanonicalVolumeSlug,
  getCanonicalWeightSlug,
  getDigitalKeys,
  getEnergyKeys,
  getLengthKeys,
  getTimeKeys,
  getVolumeKeys,
  getWeightKeys,
  PRESSURE_HUB_KEYS,
  SPEED_HUB_KEYS,
  TEMPERATURE_HUB_KEYS,
} from "@/utils/conversions";

const BASE_URL = "https://withustools.com";

/** JPG Converter format pages */
const JPG_CONVERTER_FORMATS = [
  "heic", "heif", "avif", "bmp", "png", "svg", "tiff", "webp",
  "psd", "jfif", "ico", "ai", "dng", "cr2", "cr3", "tga", "pdf",
] as const;

/** PDF Converter format pages */
const PDF_CONVERTER_FORMATS = ["jpg", "png"] as const;

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

  /** Static pages: home, search, tools */
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/search`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/tools`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
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

  /** All tool pages from all-tools.ts */
  const toolPages: MetadataRoute.Sitemap = ALL_TOOLS.map(({ path }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  /** JPG Converter format pages */
  const jpgConverterPages: MetadataRoute.Sitemap = JPG_CONVERTER_FORMATS.map((format) => ({
    url: `${BASE_URL}/tools/jpg-converter/${format}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  /** PDF Converter format pages */
  const pdfConverterPages: MetadataRoute.Sitemap = PDF_CONVERTER_FORMATS.map((format) => ({
    url: `${BASE_URL}/tools/pdf-converter/${format}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ---------------------------------------------------------------------------
  // Unit Converter — dedicated pair pages (matches each [slug]/generateStaticParams)
  // ---------------------------------------------------------------------------
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

  // ---------------------------------------------------------------------------
  // FAQ — /faq/[category]/[slug] (same set as generateStaticParams)
  // ---------------------------------------------------------------------------
  const faqPages: MetadataRoute.Sitemap = getAllFaqStaticParams().map(({ category, slug }) => ({
    url: `${BASE_URL}/faq/${category}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [
    ...staticPages,
    ...toolPages,
    ...jpgConverterPages,
    ...pdfConverterPages,
    ...unitConverterPairPages,
    ...faqPages,
  ];
}
