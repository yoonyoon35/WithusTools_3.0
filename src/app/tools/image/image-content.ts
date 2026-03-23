/**
 * Image Tools content: usage, how it works, about, advantages, use cases.
 * Structure: 1. How to use, 2. How it works, 3. About, 4. Advantages, 5. Use cases.
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
    "Choose a tool from the grid above: Image Compressor, Image Format Converter, Image Editor, or Paint Board.",
    "Image Compressor: Upload images, set quality and max width, remove EXIF metadata, compare before/after. Download individually or as ZIP.",
    "Image Format Converter: Upload an image, select target format (PNG, JPG, WebP, GIF, BMP, TIFF, AVIF), adjust quality if needed, convert and download.",
    "Image Editor: Upload an image, adjust filters (brightness, contrast, saturation), apply instant effects, crop, resize, add watermark, draw annotations. Compare with original and save.",
    "Paint Board: Draw with brush, shapes, and colors. Use eraser, undo/redo, insert images, and save your artwork as PNG.",
    "All processing runs in your browser. Your files never leave your device—no upload, no server.",
    "No sign-up required. Free to use with no file limits beyond your device's memory.",
  ],
  howItWorks: [
    "Image Compressor uses the Canvas API to resize and re-encode images. Quality and max width control file size and dimensions. PNG/GIF keep original format; JPEG/WebP use lossy compression.",
    "Image Format Converter uses Canvas API to decode and re-encode images. HEIC/HEIF input is converted via heic2any before processing.",
    "Image Editor applies CSS filters (brightness, contrast, saturation) and canvas transforms (rotate, flip) in real time. Changes are non-destructive until you save.",
    "Paint Board uses HTML5 Canvas for drawing. Brush strokes, shapes, and images are rendered with 2D context. Undo/redo uses canvas snapshots.",
    "All tools are client-side. No server upload, no cloud storage—maximum privacy for your images and artwork.",
  ],
  about: [
    "Image Tools provide four essential utilities: compress images, convert between formats, edit photos with basic adjustments, and create digital art with a paint board.",
    "Image Compressor supports JPG, PNG, WebP, GIF. Batch process multiple images and download as ZIP. Quality control and optional max width for resizing.",
    "Image Format Converter supports PNG, JPG, WebP, GIF, BMP, TIFF, AVIF. HEIC and HEIF input supported. Quality control for lossy formats.",
    "Image Editor offers brightness, contrast, saturation, rotation, and flip. Ideal for quick photo adjustments before sharing.",
    "Paint Board includes brush, eraser, shapes (rectangle, circle, line), color picker, image insertion, undo/redo, and PNG export.",
  ],
  advantages: [
    "Privacy-first: All processing runs in your browser. Images never leave your device.",
    "No installation: Works in any modern browser. No plugins or downloads.",
    "Free and fast: No sign-up, no limits. Process images in seconds.",
    "Multiple tools: Compress, convert, edit, or create—all in one category.",
    "Batch support: Image Compressor handles multiple files. Download as ZIP.",
    "Format conversion: Convert between PNG, JPG, WebP, GIF, BMP, TIFF, AVIF. HEIC/HEIF input supported.",
  ],
  useCases: [
    "Web optimization: Compress images for faster website loading. Convert to WebP for better performance.",
    "Compatibility: Convert HEIC (iPhone) to JPG for sharing on non-Apple devices.",
    "Quick edits: Adjust brightness, contrast, or fix orientation before sharing photos.",
    "Digital art: Sketch, draw diagrams, create simple graphics with the paint board.",
    "Social media: Resize and compress images for Instagram, Facebook, or Twitter.",
    "Documentation: Insert screenshots or diagrams into drawings for tutorials.",
  ],
};
