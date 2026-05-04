import type { GifConverterFormat } from "@/data/prerender-segments";

export type GifFormatPageMeta = {
  title: string;
  description: string;
  displayName: string;
  keywords: string[];
};

export const GIF_FORMAT_PAGE_META: Record<GifConverterFormat, GifFormatPageMeta> = {
  heic: {
    title: "HEIC to GIF",
    description:
      "Combine multiple HEIC photos into one animated GIF in your browser. Set frame order, delay, canvas size, and quality. No upload—local HEIC decode and gif.js encoding.",
    displayName: "HEIC",
    keywords: ["HEIC to GIF", "HEIC animated GIF", "iPhone HEIC to GIF", "browser HEIC GIF"],
  },
  heif: {
    title: "HEIF to GIF",
    description:
      "Merge HEIF/HEIC images into an animated GIF locally. Control delay, dimensions, and palette quality—no server upload.",
    displayName: "HEIF",
    keywords: ["HEIF to GIF", "HEIF animated GIF", "HEIF to GIF online"],
  },
  avif: {
    title: "AVIF to GIF",
    description:
      "Turn multiple AVIF images into one animated GIF in your browser. Client-side decode and gif.js encoding.",
    displayName: "AVIF",
    keywords: ["AVIF to GIF", "AVIF animated GIF", "convert AVIF to GIF"],
  },
  bmp: {
    title: "BMP to GIF",
    description:
      "Build an animated GIF from BMP frames. Upload BMP files, order frames, set delay and output size—all locally.",
    displayName: "BMP",
    keywords: ["BMP to GIF", "BMP animated GIF", "bitmap to GIF"],
  },
  png: {
    title: "PNG to GIF",
    description:
      "Combine PNG images into one animated GIF with letterbox background for transparency. Browser-only processing.",
    displayName: "PNG",
    keywords: ["PNG to GIF", "PNG animated GIF", "transparent PNG to GIF"],
  },
  svg: {
    title: "SVG to GIF",
    description:
      "Rasterize multiple SVG files to frames and export one animated GIF. Set canvas size, delay, and quality locally.",
    displayName: "SVG",
    keywords: ["SVG to GIF", "vector to GIF", "SVG animated GIF"],
  },
  tiff: {
    title: "TIFF to GIF",
    description:
      "Merge TIFF scans or photos into an animated GIF. UTIF/browser decode, gif.js encoding, no upload.",
    displayName: "TIFF",
    keywords: ["TIFF to GIF", "TIFF animated GIF", "TIF to GIF"],
  },
  webp: {
    title: "WEBP to GIF",
    description:
      "Combine WEBP images into an animated GIF in your browser. Frame controls and local gif.js encoding.",
    displayName: "WEBP",
    keywords: ["WEBP to GIF", "WebP animated GIF", "convert WebP to GIF"],
  },
  psd: {
    title: "PSD to GIF",
    description:
      "Use flattened PSD composites as frames for one animated GIF. Client-side ag-psd read and gif.js output.",
    displayName: "PSD",
    keywords: ["PSD to GIF", "Photoshop to GIF", "PSD animated GIF"],
  },
  jfif: {
    title: "JFIF to GIF",
    description:
      "Merge JFIF/JPEG interchange files into an animated GIF. Set delay, canvas size, and quality—no upload.",
    displayName: "JFIF",
    keywords: ["JFIF to GIF", "JFIF animated GIF", "JPEG to GIF"],
  },
  ico: {
    title: "ICO to GIF",
    description:
      "Combine ICO icon files into an animated GIF with letterboxing. Local decode and gif.js encoding.",
    displayName: "ICO",
    keywords: ["ICO to GIF", "icon to GIF", "ICO animated GIF"],
  },
  ai: {
    title: "AI to GIF",
    description:
      "Render Illustrator .ai (PDF-compatible) pages as frames for an animated GIF. First page per file; pdf.js runs locally.",
    displayName: "AI",
    keywords: ["AI to GIF", "Illustrator to GIF", "AI file animated GIF"],
  },
  dng: {
    title: "DNG to GIF",
    description:
      "Build an animated GIF from DNG RAW previews. Decodes in-browser with UTIF or embedded JPEG—no upload.",
    displayName: "DNG",
    keywords: ["DNG to GIF", "RAW to GIF", "Digital Negative GIF"],
  },
  cr2: {
    title: "CR2 to GIF",
    description:
      "Combine Canon CR2 RAW previews into an animated GIF. Client-side decode aligned with CR2 to JPG flows.",
    displayName: "CR2",
    keywords: ["CR2 to GIF", "Canon CR2 GIF", "RAW CR2 animated"],
  },
  cr3: {
    title: "CR3 to GIF",
    description:
      "Turn Canon CR3 embedded previews into GIF frames and export one animated GIF in your browser.",
    displayName: "CR3",
    keywords: ["CR3 to GIF", "Canon CR3 GIF", "CR3 animated"],
  },
  tga: {
    title: "TGA to GIF",
    description:
      "Merge Targa TGA images into an animated GIF. TGA decode and gif.js locally with no server upload.",
    displayName: "TGA",
    keywords: ["TGA to GIF", "Targa to GIF", "TGA animated GIF"],
  },
  jpg: {
    title: "JPG to GIF",
    description:
      "Combine JPG, JPEG, or JFIF files into one animated GIF. Frame order, delay, canvas size, and quality—browser-only.",
    displayName: "JPG",
    keywords: ["JPG to GIF", "JPEG to GIF", "multiple JPG animated GIF"],
  },
  pdf: {
    title: "PDF to GIF",
    description:
      "Turn PDF pages into one animated GIF. Each page is a frame (up to 60). pdf.js and gif.js run locally—no upload.",
    displayName: "PDF",
    keywords: ["PDF to GIF", "PDF pages to GIF", "PDF animated GIF"],
  },
};
