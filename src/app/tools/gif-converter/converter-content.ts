/**
 * GIF Converter hub content and per-format guide helpers.
 */

export type ConverterGuideSection = {
  usage: string[];
  howItWorks: string[];
  about: string[];
  advantages: string[];
  useCases: string[];
};

/** Generic guide for multi-file “{Display} to GIF” routes (shared template). */
export function buildGifFormatGuide(displayName: string): ConverterGuideSection {
  return {
    usage: [
      `Open this ${displayName} to GIF page, then add two or more ${displayName} files as frames in the order you want.`,
      "Reorder frames with ↑ / ↓, remove any you do not need, then set frame delay, output width and height, letterbox color, and GIF quality.",
      "Choose whether the animation loops forever, click Create animated GIF, then preview and download a single .gif file.",
    ],
    howItWorks: [
      `Each ${displayName} file is decoded in your browser (using the same decoding approach as the ${displayName} to JPG tool where applicable), then drawn onto a shared canvas with letterboxing.`,
      "gif.js encodes frames in Web Workers and builds one animated GIF file locally—nothing is uploaded to a server.",
      "For mixed image types in one animation, use Images to Animated GIF under Image Tools.",
    ],
    about: [
      "This route follows the GIF Converter hub pattern: one index plus dedicated URLs per source format, similar to JPG Converter.",
      `When every frame is ${displayName}, intake rules stay simple and defaults match that pipeline.`,
    ],
    advantages: [
      "Client-side only: your files stay on your device.",
      "Control frame order, delay, canvas size, background, loop, and palette quality.",
      "Consistent WithusTools layout, metadata, FAQ JSON-LD, and guide sections.",
    ],
    useCases: [
      "Slideshow-style GIFs from sequential exports or scans.",
      "Lightweight motion for chat, forums, or embeds where video is awkward.",
      "Quick previews from like-formatted assets without desktop apps.",
    ],
  };
}

export const GIF_PDF_GUIDE: ConverterGuideSection = {
  usage: [
    "Upload one PDF—each page becomes an animation frame in order (up to 60 pages).",
    "Adjust frame delay, output width and height, letterbox color, GIF quality, and looping.",
    "Click Create animated GIF when at least two pages are loaded, then preview and download your .gif file.",
  ],
  howItWorks: [
    "pdf.js renders each PDF page to a canvas in your browser; frames are then letterboxed to your chosen output size.",
    "gif.js quantizes and encodes the sequence in Web Workers—no server upload.",
  ],
  about: [
    "PDF to GIF is useful for flipping through slides, storyboards, or lightweight document previews as a single GIF file.",
    "For multiple separate image files instead of one multi-page PDF, use the other format cards or Images to Animated GIF.",
  ],
  advantages: [
    "All rendering and encoding stay local to your device.",
    "Page order matches the PDF; no manual frame ordering unless you re-upload.",
    "Same delay, size, and quality controls as other GIF Converter tools.",
  ],
  useCases: [
    "Share a short slide deck as one GIF attachment.",
    "Preview multi-page layouts in contexts that prefer GIF over video.",
  ],
};

export const GIF_CONVERTER_INDEX_GUIDE: ConverterGuideSection = {
  usage: [
    "Pick a format card below—each opens a dedicated “format to GIF” route with matching upload rules and decoding.",
    "Most tools accept multiple files of the same type as animation frames; PDF to GIF uses one PDF and turns each page into a frame.",
    "For mixed image types in one animation, use Images to Animated GIF under Image Tools.",
  ],
  howItWorks: [
    "GIF is palette-based (often 256 colors) with optional animation frames.",
    "Each format page decodes sources in the browser, draws frames to a canvas, and encodes with gif.js in Web Workers.",
    "Quality, dimensions, transparency handling, and delay are under your control on every route.",
  ],
  about: [
    "GIF remains popular for stickers, memes, simple UI motion, and platforms that prefer lightweight animation over video.",
    "This hub mirrors the JPG Converter pattern: one index plus format-specific URLs for clearer defaults and SEO.",
    "All processing stays client-side so your files never leave your device.",
  ],
  advantages: [
    "No upload: processing in your browser.",
    "Predictable intake per format page.",
    "Consistent WithusTools layout, metadata, and FAQ-style documentation.",
  ],
  useCases: [
    "Prepare GIF fallbacks when you need universal embed support.",
    "Animate sequential assets that already share a file format.",
    "Chain format-specific pages when your pipeline standardizes on one source type.",
  ],
};
