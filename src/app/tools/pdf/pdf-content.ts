/**
 * PDF Tools content: usage, how it works, about, advantages, use cases.
 */

export type PdfGuideSection = {
  usage: string[];
  howItWorks: string[];
  about: string[];
  advantages: string[];
  useCases: string[];
};

export const PDF_INDEX_GUIDE: PdfGuideSection = {
  usage: [
    "Open Image to PDF to combine JPG, PNG, HEIC, HEIF, WEBP, AVIF, BMP, TIFF, and other images into a single PDF—mixed formats in one upload are supported.",
    "Or choose a format-specific converter under PDF Converter for targeted flows (e.g. HEIC only, PNG only) and SEO-friendly URLs.",
    "Drag files onto the drop zone or click to browse. Reorder is by upload order; remove unwanted thumbnails before converting.",
    "Choose page size: Fit to image (each page matches the image—no white margins) or A4 with optional portrait/landscape.",
    "Download the generated PDF when conversion finishes. Everything runs in your browser—no server upload.",
  ],
  howItWorks: [
    "Images are decoded in the browser (createImageBitmap with EXIF orientation, heic2any for HEIC/HEIF, UTIF or browser for TIFF).",
    "pdf-lib embeds each raster as a JPEG or PNG page depending on source, preserving aspect ratio.",
    "Fit mode sets each PDF page size to the pixel dimensions of the decoded image—no extra margins.",
    "A4 mode scales each image to fit inside a fixed page; letterboxing may appear if aspect ratios differ.",
  ],
  about: [
    "PDF Tools centralize utilities for working with PDFs on WithusTools. The main entry is Image to PDF for arbitrary and mixed image batches.",
    "Format-specific converters under /tools/pdf-converter/[format] offer the same engine with a single-format upload filter—useful when you only handle one type of file.",
    "No account is required. Processing stays on your device for privacy.",
  ],
  advantages: [
    "Mixed formats: Drop HEIC, PNG, and JPG together; each file is decoded with the right pipeline.",
    "Privacy: No cloud upload; files never leave your browser.",
    "Flexible layout: Fit-to-image pages or A4 with orientation control.",
    "Free and fast: Runs entirely client-side in modern browsers.",
  ],
  useCases: [
    "Scanning: Combine phone photos and screenshots into one document.",
    "Archiving: Turn mixed camera rolls into a single PDF for sharing or printing.",
    "Workflow: Merge receipts (PNG) and DSLR shots (JPEG) without converting files first.",
  ],
};

export const IMAGE_TO_PDF_PAGE_GUIDE: PdfGuideSection = {
  usage: [
    "Add one or more image files of any supported type. You can mix JPG, PNG, HEIC, WEBP, TIFF, and others in the same batch.",
    "Preview thumbnails load automatically. Remove any file you do not want in the final PDF.",
    "Pick Fit to image for full-bleed pages sized to each picture, or A4 for standard paper with scaling.",
    "Click Convert to PDF, then Download PDF. Use Reset to start over.",
  ],
  howItWorks: [
    "Each file is inspected: HEIC/HEIF go through heic2any; TIFF through UTIF (or browser decode); other raster types use the browser’s image decoder with EXIF orientation.",
    "Pages are built with pdf-lib and embedded as JPEG or PNG depending on the source.",
    "Order follows your file list top to bottom.",
  ],
  about: [
    "Image to PDF is the universal entry point for turning arbitrary images into one PDF without caring about extensions or MIME types upfront.",
    "If a file cannot be decoded in your browser, remove it or convert it with Image Format Converter or JPG Converter first.",
  ],
  advantages: [
    "One tool for mixed camera and screenshot formats.",
    "No white margins in Fit mode.",
    "Local-only processing.",
  ],
  useCases: [
    "Combine iPhone HEIC and desktop PNG screenshots into one report.",
    "Bundle TIFF scans and JPEG photos for a single email attachment.",
  ],
};

export const MERGE_PDF_PAGE_GUIDE: PdfGuideSection = {
  usage: [
    "Add two or more PDF files (drag-and-drop or click to browse). The output order follows the list from top to bottom.",
    "Optionally reorder files using Move up / Move down for precise control.",
    "Click Merge PDFs to generate one combined file. Processing runs entirely in your browser—no server upload.",
    "Download the merged PDF. Use Reset to start over anytime.",
  ],
  howItWorks: [
    "Each input PDF is loaded in your browser using pdf-lib.",
    "All pages are copied in sequence into a new PDF document.",
    "If a PDF is encrypted or cannot be parsed by your browser, merging may fail—remove the problematic file and retry.",
  ],
  about: [
    "Merge PDF combines multiple PDF files into one document without uploading anything to a server.",
    "It’s ideal for bundling receipts, invoices, scanned pages, and exported reports into a single shareable PDF.",
  ],
  advantages: [
    "Privacy-first: PDFs never leave your device.",
    "Fast: merge happens locally with no waiting for uploads.",
    "Simple ordering: control output by arranging your file list.",
  ],
  useCases: [
    "Combine monthly invoices into a single PDF before emailing.",
    "Merge separate scan batches into one submission document.",
    "Bundle multiple exported reports into a single attachment.",
  ],
};
