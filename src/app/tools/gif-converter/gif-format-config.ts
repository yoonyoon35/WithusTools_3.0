import type { GifConverterFormat } from "@/data/prerender-segments";

/** Formats handled by `ImagesToAnimatedGif` (multi-file frames). PDF uses `PdfToAnimatedGif`. */
export type MultiFileGifFormat = Exclude<GifConverterFormat, "pdf">;

export type GifFormatUiMeta = {
  displayName: string;
  acceptTypes: string;
};

export const GIF_FORMAT_UI: Record<MultiFileGifFormat, GifFormatUiMeta> = {
  heic: { displayName: "HEIC", acceptTypes: ".heic,.heif,image/heic,image/heif" },
  heif: { displayName: "HEIF", acceptTypes: ".heif,.heic,image/heif,image/heic" },
  avif: { displayName: "AVIF", acceptTypes: ".avif,image/avif" },
  bmp: { displayName: "BMP", acceptTypes: ".bmp,image/bmp" },
  png: { displayName: "PNG", acceptTypes: ".png,image/png" },
  svg: { displayName: "SVG", acceptTypes: ".svg,image/svg+xml" },
  tiff: { displayName: "TIFF", acceptTypes: ".tiff,.tif,image/tiff" },
  webp: { displayName: "WEBP", acceptTypes: ".webp,image/webp" },
  psd: { displayName: "PSD", acceptTypes: ".psd,image/vnd.adobe.photoshop" },
  jfif: { displayName: "JFIF", acceptTypes: ".jfif,.jfi,image/jpeg" },
  ico: { displayName: "ICO", acceptTypes: ".ico,image/x-icon" },
  ai: { displayName: "AI", acceptTypes: ".ai" },
  dng: { displayName: "DNG", acceptTypes: ".dng,image/x-adobe-dng" },
  cr2: { displayName: "CR2", acceptTypes: ".cr2,image/x-canon-cr2" },
  cr3: { displayName: "CR3", acceptTypes: ".cr3,image/x-canon-cr3" },
  tga: { displayName: "TGA", acceptTypes: ".tga,image/x-tga" },
  jpg: { displayName: "JPG", acceptTypes: ".jpg,.jpeg,.jfif,.jfi,image/jpeg" },
};

export function fileMatchesGifFormat(file: File, format: MultiFileGifFormat): boolean {
  const n = file.name.toLowerCase();
  const t = file.type.toLowerCase();
  switch (format) {
    case "heic":
    case "heif":
      return (
        t === "image/heic" ||
        t === "image/heif" ||
        n.endsWith(".heic") ||
        n.endsWith(".heif")
      );
    case "avif":
      return t === "image/avif" || n.endsWith(".avif");
    case "bmp":
      return t === "image/bmp" || n.endsWith(".bmp");
    case "png":
      return t === "image/png" || n.endsWith(".png");
    case "webp":
      return t === "image/webp" || n.endsWith(".webp");
    case "svg":
      return t === "image/svg+xml" || n.endsWith(".svg");
    case "tiff":
      return t === "image/tiff" || n.endsWith(".tiff") || n.endsWith(".tif");
    case "psd":
      return t === "image/vnd.adobe.photoshop" || n.endsWith(".psd");
    case "jfif":
      return n.endsWith(".jfif") || n.endsWith(".jfi");
    case "ico":
      return t === "image/x-icon" || n.endsWith(".ico");
    case "ai":
      return n.endsWith(".ai");
    case "dng":
      return n.endsWith(".dng");
    case "cr2":
      return n.endsWith(".cr2");
    case "cr3":
      return n.endsWith(".cr3");
    case "tga":
      return n.endsWith(".tga");
    case "jpg":
      return t === "image/jpeg" || t === "image/jpg" || t === "image/pjpeg" || /\.(jpe?g|jfif|jfi)$/i.test(n);
    default:
      return false;
  }
}
