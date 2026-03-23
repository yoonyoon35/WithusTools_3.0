import type { MetadataRoute } from "next";
import { ALL_TOOLS } from "@/data/all-tools";

const BASE_URL = "https://withustools.com";

/** JPG Converter format pages */
const JPG_CONVERTER_FORMATS = [
  "heic", "heif", "avif", "bmp", "png", "svg", "tiff", "webp",
  "psd", "jfif", "ico", "ai", "dng", "cr2", "cr3", "tga", "pdf",
] as const;

/** PDF Converter format pages */
const PDF_CONVERTER_FORMATS = ["jpg", "png"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  /** Static pages: home, search, tools */
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/search`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/tools`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
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

  return [
    ...staticPages,
    ...toolPages,
    ...jpgConverterPages,
    ...pdfConverterPages,
  ];
}
