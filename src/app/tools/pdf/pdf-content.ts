/**
 * PDF Tools content: usage, how it works, about, advantages, use cases.
 * Merge PDF and Image to PDF guide titles (question-style) live in each tool page.tsx.
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
    "Pick `Image to PDF`, `Merge PDF`, or a format-specific PDF converter.",
    "Drop files, check order, and remove anything you do not need.",
    "Choose page layout options when converting images to PDF.",
    "Run conversion/merge and download the result.",
    "Repeat with new files using reset.",
  ],
  howItWorks: [
    "PDF tools decode files locally and build output documents in browser memory.",
    "Image-to-PDF uses image decoders plus PDF generation logic for page embedding.",
    "Merge PDF copies pages from multiple source PDFs into one sequence.",
    "Layout options control scaling and margins for image-based pages.",
  ],
  about: [
    "PDF Tools is a browser-based set for creating and combining PDF files quickly.",
    "It covers mixed image batches, PDF merging, and format-focused conversion paths.",
    "No signup and no upload to a conversion server.",
  ],
  advantages: [
    "Client-side processing.",
    "Mixed-format image support.",
    "Flexible page layout options.",
    "Fast one-off workflow.",
  ],
  useCases: [
    "Bundle photos and screenshots into one PDF report.",
    "Merge separate PDFs before email submission.",
    "Prepare print-friendly docs from image folders.",
  ],
};

export const IMAGE_TO_PDF_PAGE_GUIDE: PdfGuideSection = {
  usage: [
    "Upload one or more images (mixed formats are allowed).",
    "Remove unwanted files before conversion.",
    "Choose Fit-to-image or A4 layout.",
    "Convert and download the generated PDF.",
  ],
  howItWorks: [
    "Image files are decoded locally and inserted as PDF pages in sequence.",
    "Format-specific decoders are used when needed (for example HEIC or TIFF).",
    "Page order follows your file list.",
  ],
  about: [
    "Image to PDF is the fastest path when you need one document from many image files.",
    "If a source file fails to decode, convert it first, then re-add it.",
  ],
  advantages: [
    "Mixed-format image support.",
    "Flexible Fit or A4 layout.",
    "Browser-local processing.",
  ],
  useCases: [
    "Combine phone photos and screenshots into one report PDF.",
    "Bundle scanned pages for a single upload or email.",
  ],
};

export const MERGE_PDF_PAGE_GUIDE: PdfGuideSection = {
  usage: [
    "Upload two or more PDF files.",
    "Reorder files if needed.",
    "Run merge and download the combined PDF.",
    "Reset when you want to start a new set.",
  ],
  howItWorks: [
    "Each PDF is parsed in browser memory.",
    "Pages are copied into a new output document in list order.",
    "Encrypted or damaged files may fail and should be removed before retrying.",
  ],
  about: [
    "Merge PDF combines separate documents into one file for easier sharing.",
    "It is useful for submissions, reports, and invoice bundles.",
  ],
  advantages: [
    "Client-side PDF merge.",
    "Fast local processing.",
    "Simple file order control.",
  ],
  useCases: [
    "Combine invoice PDFs before sending.",
    "Merge scans into one submission file.",
    "Bundle exported reports into one attachment.",
  ],
};
