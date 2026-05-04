/**
 * Image Tools content: usage, how it works, about, advantages, use cases.
 * Per-tool guide titles (question-style) live in each tool's page.tsx under image/.
 */

export type ImageGuideSection = {
  usage: string[];
  howItWorks: string[];
  about: string[];
  advantages: string[];
  useCases: string[];
};

export const IMAGE_INDEX_GUIDE: ImageGuideSection = {
  usage: [
    "Pick the tool by task: compress, convert, animate, edit, or draw.",
    "Drop an image, adjust options, and export in one flow.",
    "Use Image Compressor when upload speed or file size matters.",
    "Use Format Converter when an app only accepts specific formats.",
    "Use Images to Animated GIF when you want several stills as one looping GIF.",
    "Use Image Editor for quick fixes before sharing.",
    "Use Paint Board for sketches, annotations, and simple graphics.",
  ],
  howItWorks: [
    "The tools decode and process image data in browser memory.",
    "Compression and conversion re-encode files with your selected settings.",
    "Images to Animated GIF letterboxes each still onto a shared canvas, then gif.js encodes frames in Web Workers.",
    "Editing tools apply filters and transforms before export.",
    "Paint Board renders strokes and shapes on an HTML canvas.",
    "No image processing is sent to a backend server.",
  ],
  about: [
    "Image Tools is a browser-based set for everyday image tasks.",
    "It covers common needs: smaller files, format compatibility, simple animated GIFs from image lists, quick edits, and lightweight drawing.",
    "Great when you need results fast without opening heavy desktop software.",
  ],
  advantages: [
    "Client-side image processing.",
    "No installation or signup.",
    "Fast workflow for small jobs.",
    "Compression, conversion, GIF-from-images, editing, and drawing in one place.",
    "Useful format support for modern and legacy needs.",
  ],
  useCases: [
    "Shrink product images before uploading to a website.",
    "Convert HEIC photos to JPG for easy sharing.",
    "Fix brightness or orientation before posting images.",
    "Sketch UI ideas or annotate screenshots quickly.",
    "Prepare social media images with smaller file sizes.",
    "Chain screenshots or photos into a single GIF for chat or forums.",
  ],
};
