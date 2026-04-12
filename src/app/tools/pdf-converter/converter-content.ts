/**
 * PDF Converter content: usage, how it works, about, advantages, use cases.
 * Per-format guide titles (question-style) live in the dynamic pdf-converter route page.
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
    "Select a format from the grid above (e.g., JPG, HEIC, HEIF, PNG, WEBP, AVIF, BMP, or TIFF). Each link opens a dedicated converter for that format.",
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
    "Multi-format input: JPG, HEIC, HEIF, PNG, WEBP, AVIF, BMP, TIFF, and other common image formats supported.",
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
  heic: {
    usage: [
      "Upload HEIC or HEIF files from your iPhone, iPad, or Mac via drag-and-drop or click to browse. Multiple files are combined into one PDF in upload order.",
      "Review the file list. Remove individual files or click Clear All to start over.",
      "Click Convert to PDF. Each photo becomes a separate PDF page sized to the decoded image—no white margins, no aspect ratio distortion.",
      "Download the generated PDF. Use Reset to start over with new images.",
    ],
    howItWorks: [
      "HEIC/HEIF is decoded with the heic2any library in your browser (same pipeline as HEIC to JPG). Output is rasterized at full quality (JPEG quality 1.0) before embedding.",
      "createImageBitmap applies EXIF orientation so photos appear upright in the PDF.",
      "pdf-lib embeds pixels via PNG for PDF compatibility. Page dimensions match the oriented image.",
      "All processing runs locally—no server upload.",
    ],
    about: [
      "HEIC to PDF turns Apple’s default photo format into a single shareable PDF. Useful for emailing albums, submitting documents, or opening on Windows without extra codecs.",
      "HEIF container files (.heif) are accepted alongside .heic. Everything stays on your device.",
    ],
    advantages: [
      "Zero white margins in Fit to image mode.",
      "Batch multiple HEIC files into one multi-page PDF.",
      "No upload: heic2any runs in the browser.",
      "Orientation from EXIF is respected after decode.",
    ],
    useCases: [
      "iPhone photos: Combine vacation shots into one PDF for email or printing.",
      "Cross-platform sharing: Recipients can open PDF on any OS without HEIC support.",
      "Workflow: Turn AirDropped HEIC files into a single attachment.",
      "Archiving: Package HEIC collections as one portable document.",
    ],
  },
  heif: {
    usage: [
      "Upload HEIF or HEIC files via drag-and-drop or click to browse (same as HEIC to PDF—both extensions are accepted). Multiple files are combined into one PDF in upload order.",
      "Review the file list. Remove individual files or click Clear All to start over.",
      "Click Convert to PDF. Each image becomes a separate PDF page sized to the decoded bitmap—no white margins, no aspect ratio distortion.",
      "Download the generated PDF. Use Reset to start over with new images.",
    ],
    howItWorks: [
      "HEIF (High Efficiency Image Format) is decoded with heic2any in your browser—the same library as HEIC to PDF and HEIF to JPG. Decoded output uses JPEG quality 1.0 before rasterization.",
      "createImageBitmap applies EXIF orientation. pdf-lib embeds pixels via PNG for PDF compatibility.",
      "All processing runs locally—no server upload.",
    ],
    about: [
      "HEIF is the ISO/IEC 23008-12 container format; HEIC is Apple’s common file extension for HEIF still images. This tool targets the same HEVC-based images whether they use .heif or .heic.",
      "Use this page when your files are primarily HEIF-labeled; HEIC to PDF is equivalent in behavior.",
    ],
    advantages: [
      "Zero white margins in Fit to image mode.",
      "Batch HEIF/HEIC into one multi-page PDF.",
      "Client-side heic2any—no cloud upload.",
      "EXIF orientation respected after decode.",
    ],
    useCases: [
      "HEIF exports from cameras or phones: combine into one PDF.",
      "Cross-platform delivery: PDF opens everywhere without HEIF codecs.",
      "Mixed .heif/.heic libraries: one converter, one workflow.",
      "Archiving: single PDF from multiple HEIF files.",
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
  webp: {
    usage: [
      "Upload WEBP images via drag-and-drop or click to browse. Supports multiple files—they will be combined into one PDF in the order you add them.",
      "Review the file list. Remove individual files or click Clear All to start over.",
      "Click Convert to PDF. Each image becomes a separate PDF page sized exactly to its dimensions—no white margins, no aspect ratio distortion.",
      "Download the generated PDF. Use Reset to start over with new images.",
    ],
    howItWorks: [
      "Each WEBP is decoded in the browser (createImageBitmap) to obtain width and height. pdf-lib creates a page with those exact dimensions (in PDF points, 1:1 with pixels).",
      "Pixels are embedded via PNG encoding for PDF compatibility. Visual appearance matches the decoded WEBP; transparency is preserved where applicable.",
      "Multiple images produce a multi-page PDF with varying page sizes.",
      "All processing runs locally—no server upload.",
    ],
    about: [
      "WEBP to PDF converts WEBP images to PDF with no layout compromises. Each image gets its own page sized to fit exactly.",
      "Ideal for web-optimized assets, screenshots saved as WEBP, and modern image workflows. All processing happens in your browser—no server upload.",
    ],
    advantages: [
      "Zero white margins. Page size = image size.",
      "100% aspect ratio preservation.",
      "Client-side decode and embed. Your images never leave your device.",
      "Batch combine multiple WEBP files into one PDF.",
    ],
    useCases: [
      "Web assets: Turn WEBP graphics into a shareable PDF.",
      "Screenshots: Merge WEBP screenshots into documentation.",
      "Photo sets: Combine camera or app exports in WEBP format.",
      "Archiving: Package WEBP collections as a single PDF.",
    ],
  },
  avif: {
    usage: [
      "Upload AVIF images via drag-and-drop or click to browse. Supports multiple files—they will be combined into one PDF in the order you add them.",
      "Review the file list. Remove individual files or click Clear All to start over.",
      "Click Convert to PDF. Each image becomes a separate PDF page sized exactly to its dimensions—no white margins, no aspect ratio distortion.",
      "Download the generated PDF. Use Reset to start over with new images.",
    ],
    howItWorks: [
      "Each AVIF is decoded in the browser with createImageBitmap (where supported—e.g. Chromium-based browsers and recent Firefox). Width and height come from the decoded bitmap.",
      "EXIF orientation is applied via imageOrientation: from-image when the browser provides it.",
      "Pixels are embedded via PNG for PDF compatibility. Transparency is preserved where applicable.",
      "All processing runs locally—no server upload.",
    ],
    about: [
      "AVIF (AV1 Image File Format) offers strong compression and quality. This converter turns AVIF still images into PDF pages sized to the decoded raster—same concept as WEBP to PDF.",
      "If your browser cannot decode AVIF, conversion will fail; use an up-to-date browser or convert AVIF to JPG first.",
    ],
    advantages: [
      "Zero white margins in Fit to image mode.",
      "Aspect ratio preserved.",
      "Client-side decode—no cloud upload.",
      "Batch multiple AVIF files into one PDF.",
    ],
    useCases: [
      "Web-optimized photos: bundle AVIF exports into one PDF.",
      "Documentation: merge AVIF screenshots or assets.",
      "Sharing: recipients open PDF without AVIF codec support.",
      "Archiving: single PDF from multiple AVIF files.",
    ],
  },
  bmp: {
    usage: [
      "Upload BMP images via drag-and-drop or click to browse. Supports multiple files—they will be combined into one PDF in the order you add them.",
      "Review the file list. Remove individual files or click Clear All to start over.",
      "Click Convert to PDF. Each image becomes a separate PDF page sized exactly to its dimensions—no white margins, no aspect ratio distortion.",
      "Download the generated PDF. Use Reset to start over with new images.",
    ],
    howItWorks: [
      "Each BMP is decoded in the browser (createImageBitmap) to obtain width and height. pdf-lib creates a page with those exact dimensions (in PDF points, 1:1 with pixels).",
      "Pixels are embedded via PNG encoding for PDF compatibility. Visual appearance matches the decoded bitmap.",
      "Multiple images produce a multi-page PDF with varying page sizes.",
      "All processing runs locally—no server upload.",
    ],
    about: [
      "BMP to PDF converts Windows bitmap (.bmp) images to PDF with no layout compromises. Each image gets its own page sized to fit exactly.",
      "Useful for legacy graphics, scanned software exports, and uncompressed raster assets. All processing happens in your browser—no server upload.",
    ],
    advantages: [
      "Zero white margins. Page size = image size.",
      "100% aspect ratio preservation.",
      "Client-side decode and embed. Your images never leave your device.",
      "Batch combine multiple BMP files into one PDF.",
    ],
    useCases: [
      "Legacy assets: Package old BMP graphics into a single PDF.",
      "Documentation: Merge bitmap screenshots or diagrams from older tools.",
      "Printing: Share BMP collections as one print-ready PDF.",
      "Archiving: Consolidate BMP files without desktop software.",
    ],
  },
  tiff: {
    usage: [
      "Upload TIFF or TIF files via drag-and-drop or click to browse. Supports multiple files—they will be combined into one PDF in the order you add them.",
      "For multi-page TIFFs, the primary image (largest frame) is used for that file’s PDF page—the same approach as TIFF to JPG in JPG Converter.",
      "Review the file list. Remove individual files or click Clear All to start over.",
      "Click Convert to PDF. Each decoded image becomes a separate PDF page sized to its dimensions—no white margins, no aspect ratio distortion.",
      "Download the generated PDF. Use Reset to start over with new images.",
    ],
    howItWorks: [
      "TIFF is decoded with the UTIF library in your browser (same stack as TIFF to JPG). The largest displayable IFD is chosen when multiple sub-images exist.",
      "Decoded RGBA pixels are drawn to a canvas; pdf-lib embeds them via PNG for PDF compatibility.",
      "If UTIF cannot decode a file, the tool falls back to the browser’s native TIFF rendering when available.",
      "All processing runs locally—no server upload.",
    ],
    about: [
      "TIFF to PDF converts Tagged Image File Format (.tif / .tiff) to PDF without forcing A4 or letter paper. Each source file yields at least one PDF page sized to the decoded bitmap.",
      "Common for scans, print workflows, and high-bit-depth photography. Your files stay on your device.",
    ],
    advantages: [
      "Zero white margins in “Fit to image” mode. Page size matches the decoded TIFF dimensions.",
      "Aspect ratio preserved—no stretching.",
      "Client-side UTIF decoding plus pdf-lib. No cloud upload.",
      "Batch multiple TIFF files into a single multi-page PDF.",
    ],
    useCases: [
      "Scanned documents: Combine TIFF scans from copiers or scanners into one PDF.",
      "Photography: Package archival TIFF exports for sharing as PDF.",
      "Print prep: Merge TIFF proofs into a single review document.",
      "Archiving: Turn a folder of TIFFs into one portable PDF.",
    ],
  },
};
