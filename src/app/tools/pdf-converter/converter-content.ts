/**
 * PDF Converter content: usage, how it works, about, advantages, use cases.
 * Structure: 1. How to use, 2. How it works, 3. About, 4. Advantages, 5. Use cases.
 */

export type ConverterGuideSection = {
  usage: string[];
  howItWorks: string[];
  about: string[];
  advantages: string[];
  useCases: string[];
};

export const PDF_CONVERTER_INDEX_GUIDE: ConverterGuideSection = {
  usage: [
    "Select a format from the grid above (e.g., JPG). Each link opens a dedicated converter for that format.",
    "Upload your images using drag-and-drop or click to browse. You can upload multiple images at once to combine into a single PDF.",
    "Images are added in the order you upload them. Remove individual images or clear all before converting.",
    "Click Convert to PDF to create your document. Processing runs entirely in your browser—your files never leave your device.",
    "Download the resulting PDF. Each image becomes a separate page with its exact dimensions—no white margins, no aspect ratio distortion.",
    "Use Reset to start over with new images at any time. No sign-up or account required.",
  ],
  howItWorks: [
    "Each image is loaded to obtain its natural dimensions (naturalWidth × naturalHeight). The PDF library creates a page with those exact dimensions—no fixed A4 or letter size.",
    "Images are embedded at full resolution without compression or downscaling. Your original quality is preserved.",
    "pdf-lib creates a multi-page PDF where each page size matches its image. Page 1 might be 1920×1080, page 2 might be 800×600—each page is sized to fit its image perfectly.",
    "All processing runs in your browser. No server upload, no cloud storage. Your privacy is fully protected.",
  ],
  about: [
    "PDF Converter transforms images into PDF documents. Each image becomes a PDF page with dimensions that exactly match the image—zero white margin, zero aspect ratio distortion.",
    "Unlike tools that force images onto A4 or letter paper (adding margins or stretching), this converter creates pixel-perfect pages. A 1920×1080 photo becomes a 1920×1080 PDF page.",
    "Ideal for photo albums, scanned documents, screenshots, and any image collection that should be shared as a single PDF while preserving original proportions.",
  ],
  advantages: [
    "Zero white margins: Each PDF page is exactly the size of its image. No letter/A4 padding.",
    "100% aspect ratio preservation: Images are never stretched or distorted. 1:1 pixel mapping where applicable.",
    "Original quality: Images are embedded without recompression or downscaling.",
    "Privacy-first: All conversion runs in your browser. Files never leave your device.",
    "Multi-format input: JPG and other common image formats supported.",
  ],
  useCases: [
    "Photo albums: Combine vacation photos into a single PDF. Each photo keeps its native size—no awkward letter-size frames.",
    "Scanned documents: Convert multi-page scans to PDF. Each scan becomes a page with its original dimensions.",
    "Screenshots: Merge screenshots into one PDF. Preserves exact resolution for technical documentation.",
    "Design comps: Combine design mockups into a client-ready PDF. No quality loss, no distortion.",
  ],
};

export const PDF_FORMAT_GUIDE: Record<string, ConverterGuideSection> = {
  jpg: {
    usage: [
      "Upload JPG images via drag-and-drop or click to browse. Supports multiple files—they will be combined into one PDF in the order you add them.",
      "Review the file list. Remove individual files or click Clear All to start over.",
      "Click Convert to PDF. Each image becomes a separate PDF page sized exactly to its dimensions—no white margins, no aspect ratio distortion.",
      "Download the generated PDF. Use Convert More to reset and create another.",
    ],
    howItWorks: [
      "Each JPG is loaded to get its naturalWidth and naturalHeight. pdf-lib creates a page with those exact dimensions (in PDF points, 1:1 with pixels).",
      "The image is embedded at (0, 0) with width and height matching the page. No scaling, no cropping—pixel-perfect placement.",
      "JPEG data is embedded as-is without recompression. Original quality is preserved.",
      "Multiple images produce a multi-page PDF with varying page sizes. Page 1 might be 4032×3024, page 2 might be 1920×1080.",
    ],
    about: [
      "JPG to PDF converts JPEG images to PDF with no quality loss and no layout compromises. Each image gets its own page sized to fit exactly.",
      "Common use cases: photo albums, scanned documents, screenshots, design exports. All processing happens in your browser—no server upload.",
    ],
    advantages: [
      "Zero white margins. Page size = image size.",
      "100% aspect ratio preservation.",
      "Original JPG quality preserved. No recompression.",
      "Client-side only. Your images never leave your device.",
    ],
    useCases: [
      "Photo albums: Combine iPhone/Android photos into a shareable PDF.",
      "Scanned docs: Turn multi-page scans into a single PDF.",
      "Screenshots: Merge screenshots for documentation or tickets.",
      "Design exports: Bundle design comps into one PDF for client review.",
    ],
  },
  png: {
    usage: [
      "Upload PNG images via drag-and-drop or click to browse. Supports multiple files—they will be combined into one PDF in the order you add them.",
      "Review the file list. Remove individual files or click Clear All to start over.",
      "Click Convert to PDF. Each image becomes a separate PDF page sized exactly to its dimensions—no white margins, no aspect ratio distortion.",
      "Download the generated PDF. Use Reset to start over with new images.",
    ],
    howItWorks: [
      "Each PNG is loaded to get its naturalWidth and naturalHeight. pdf-lib creates a page with those exact dimensions (in PDF points, 1:1 with pixels).",
      "The image is embedded at (0, 0) with width and height matching the page. Transparency is preserved where supported by PDF.",
      "PNG data is embedded without recompression. Original quality and transparency are preserved.",
      "Multiple images produce a multi-page PDF with varying page sizes.",
    ],
    about: [
      "PNG to PDF converts PNG images to PDF with no quality loss and no layout compromises. Each image gets its own page sized to fit exactly.",
      "PNG supports transparency—ideal for screenshots, logos, and design assets. All processing happens in your browser—no server upload.",
    ],
    advantages: [
      "Zero white margins. Page size = image size.",
      "100% aspect ratio preservation.",
      "Original PNG quality and transparency preserved.",
      "Client-side only. Your images never leave your device.",
    ],
    useCases: [
      "Screenshots: Merge screenshots with transparency into a single PDF.",
      "Logos & graphics: Combine PNG assets into a client-ready PDF.",
      "Design exports: Bundle design comps with transparency preserved.",
      "Documentation: Turn multiple PNG diagrams into one PDF.",
    ],
  },
};
