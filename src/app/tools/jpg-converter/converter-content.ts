/**
 * JPG Converter content: usage, how it works, about, advantages, use cases.
 * Structure: 1. How to use, 2. How it works, 3. About, 4. Advantages, 5. Use cases.
 */

export type ConverterGuideSection = {
  usage: string[];
  howItWorks: string[];
  about: string[];
  advantages: string[];
  useCases: string[];
};

export const JPG_CONVERTER_INDEX_GUIDE: ConverterGuideSection = {
  usage: [
    "Select a format from the grid above (e.g., HEIC, WEBP, PNG, PDF). Each link opens a dedicated converter for that format.",
    "Upload your files using drag-and-drop or click to browse. Most converters support batch processing so you can convert multiple images to JPG at once.",
    "Adjust quality settings (1–100%) and any format-specific options (e.g., background color for PNG transparency, custom dimensions for SVG rasterization).",
    "Click Convert to process your files. This free online JPG converter runs entirely in your browser—your data never leaves your device.",
    "Download converted files individually, use Download All, or Download as ZIP to bundle all converted JPGs in one archive.",
    "Use Reset to start over with new files at any time. No sign-up or account required.",
  ],
  howItWorks: [
    "Image conversion uses the browser's Canvas API and modern image decoding. Each format is decoded into raw pixel data, then re-encoded as JPEG with your chosen quality.",
    "HEIC/HEIF (Apple formats) use the heic2any library to decode. AVIF uses native browser support. BMP, PNG, WEBP are rendered via the Canvas 2D context.",
    "SVG (vector) is rasterized at your chosen width/height. TIFF uses UTIF for decoding. PDF pages are rendered with Mozilla's pdf.js and exported as JPG.",
    "All processing is client-side with no server upload. Your privacy is fully protected—ideal for sensitive documents and personal photos.",
    "The conversion happens locally in milliseconds. No cloud storage, no third-party APIs, no file limits beyond your device's memory.",
  ],
  about: [
    "JPG Converter supports 17 formats: HEIC, HEIF, AVIF, BMP, PNG, SVG, TIFF, WEBP, PSD, JFIF, ICO, AI, DNG, CR2, CR3, TGA, and PDF. Convert images and documents to universally compatible JPG format with this free online tool.",
    "JPG (JPEG) is the most widely supported image format across devices, operating systems, and web browsers. Ideal for sharing, web optimization, and compatibility with legacy systems.",
    "Perfect for iPhone users (HEIC to JPG), web developers (WEBP/AVIF), designers (PNG, SVG, PSD), photographers (TIFF), and anyone who needs to extract PDF pages as images.",
    "Whether you need to batch convert images to JPG, reduce BMP file size, or prepare graphics for social media—this tool handles it all without uploading to any server.",
  ],
  advantages: [
    "Privacy-first: All conversion runs in your browser. Files never leave your device—no server upload, no cloud storage.",
    "17 formats supported: HEIC, HEIF, AVIF, BMP, PNG, SVG, TIFF, WEBP, PSD, JFIF, ICO, AI, DNG, CR2, CR3, TGA, PDF. One hub for all your image conversion needs.",
    "Batch processing: Convert multiple images to JPG at once with consistent quality settings. Download all as a single ZIP file.",
    "Quality control: Adjust output quality from 1% to 100%. Use higher quality for print, lower for web and email.",
    "No installation: Works in any modern browser without plugins. Free to use with no sign-up required.",
    "File preview: See uploaded files before converting. Progress bar shows conversion status for multiple files.",
  ],
  useCases: [
    "iPhone photos: Convert HEIC to JPG for sharing on Instagram, Facebook, WhatsApp, or via email. Open HEIC files on Windows or Android without installing extra software.",
    "Web optimization: Convert WEBP or AVIF to JPG for legacy browser compatibility. Many older apps and email clients don't support modern formats.",
    "Transparent PNGs: Add a background color (white, black, or custom) and convert PNG to JPG for use where transparency isn't supported.",
    "Vector graphics: Rasterize SVG to JPG for presentations, print materials, or platforms that don't support vector images.",
    "Photoshop files: Convert PSD to JPG for sharing designs, web previews, or use in apps that don't support PSD. Flattened composite export.",
    "JFIF files: Convert JFIF to JPG for standard .jpg extension and broader compatibility. Re-encode with quality control.",
    "ICO icons: Convert ICO to JPG with background color for transparency. Favicons and Windows icons.",
    "Adobe Illustrator: Convert .ai files to JPG using pdf.js. AI files contain PDF data—rendered client-side, no server.",
    "Digital Negative: Convert DNG RAW to JPG via UTIF or embedded JPEG preview. Most DNG cameras embed a preview—convert without specialized software.",
    "Canon RAW: Convert CR2 (TIFF-based) or CR3 (ISO BMFF) to JPG. Uses embedded JPEG preview—no Lightroom or DPP required.",
    "Targa: Convert TGA (Truevision TARGA) to JPG with background color for transparency. Common in game textures and 3D assets.",
    "PDF documents: Extract PDF pages as JPG images for thumbnails, web display, or social sharing. Download all pages as ZIP.",
    "Scans and screenshots: Reduce BMP or TIFF file size by converting to JPG. Ideal for email attachments and web uploads.",
  ],
};

export const FORMAT_GUIDE: Record<string, ConverterGuideSection> = {
  heic: {
    usage: [
      "Upload HEIC or HEIF files from your iPhone, iPad, or Mac using drag-and-drop or click to browse. Supports multiple files for batch conversion.",
      "Adjust the quality slider (1–100%). Use 90–100% for archival or print, 70–85% for web, social media, and email to balance quality and file size.",
      "Click Convert to JPG to process. Download individual files, use Download All, or Download as ZIP to get all converted images in one archive.",
      "This HEIC to JPG converter requires no upload—all processing happens locally in your browser for maximum privacy.",
    ],
    howItWorks: [
      "HEIC (High Efficiency Image Container) is Apple's default photo format on iPhone and iPad. It offers up to 50% better compression than JPEG at similar visual quality.",
      "The heic2any library decodes HEIC in your browser and re-encodes to JPEG. No files are sent to any server—100% client-side conversion.",
      "Works offline after initial page load. Your iPhone photos stay on your device throughout the entire conversion process.",
    ],
    about: [
      "HEIC is the default image format on iPhones since iOS 11. While efficient and space-saving, it has limited support outside the Apple ecosystem—Windows 10/11 can view HEIC with add-ons, but many apps cannot.",
      "Converting HEIC to JPG ensures compatibility with Windows PCs, Android phones, web services, email clients, and social media platforms that don't support HEIC natively.",
      "A free HEIC to JPG converter online that works without installing software. Perfect for users who receive HEIC files via email or AirDrop and need to open them on non-Apple devices.",
    ],
    advantages: [
      "No server upload: Convert HEIC to JPG entirely in your browser. Your photos never leave your device.",
      "Batch support: Convert multiple iPhone photos to JPG at once. Download all as ZIP for convenience.",
      "Quality control: Customize output quality. Preserve detail for print or reduce size for sharing.",
      "Free and fast: No sign-up, no limits. Process HEIC files in seconds.",
    ],
    useCases: [
      "Share iPhone photos on Instagram, Facebook, Twitter, or via email. Most platforms prefer or require JPG.",
      "Open HEIC files on Windows or Android. Windows Photos may not display HEIC without extras—convert to JPG for instant compatibility.",
      "Upload to Google Drive, Dropbox, or OneDrive. Some cloud services have better JPG support for preview and sharing.",
      "Print iPhone photos at a lab or from home. Many print services expect JPG format.",
    ],
  },
  heif: {
    usage: [
      "Upload HEIF files (also accepts HEIC) using drag-and-drop or click to browse. Both .heif and .heic extensions are supported.",
      "Set quality (1–100%) and click Convert to JPG. Higher quality preserves more detail; lower quality reduces file size for email or web.",
      "Download converted files individually, use Download All, or Download as ZIP to bundle multiple images at once.",
      "Batch convert HEIF to JPG: select multiple files and process them all with the same quality setting.",
    ],
    howItWorks: [
      "HEIF (High Efficiency Image Format) is the ISO-standard container; HEIC is Apple's implementation for photos. Both use HEVC (H.265) for compression.",
      "Same conversion pipeline as HEIC: the heic2any library decodes in your browser and re-encodes to JPEG. No upload, no server processing.",
      "HEIF can store single images or sequences. This converter extracts single images and outputs standard JPG—compatible with any device.",
    ],
    about: [
      "HEIF supports single images and image sequences (e.g., Live Photos, burst mode). Our converter handles single-frame HEIF and HEIC files.",
      "Ideal for users with HEIF files from digital cameras, older Apple devices, or exported from photo editing apps. HEIF to JPG conversion on Windows is often needed since native support is limited.",
      "A free HEIF to JPG converter that works in-browser. No need to install HEIF codecs or third-party software on your computer.",
    ],
    advantages: [
      "Supports both HEIF and HEIC file types. One tool for all Apple HEVC images.",
      "100% client-side processing. Your images never leave your device.",
      "Batch conversion: Convert multiple HEIF files to JPG at once. ZIP download for bulk results.",
      "Quality control and preview before conversion.",
    ],
    useCases: [
      "Convert HEIF photos for cross-platform sharing. Send to Windows users, Android friends, or upload to non-Apple services.",
      "Prepare images for web or print with JPG output. JPG is the universal format for portfolios, presentations, and documents.",
      "Export HEIF from camera or editor, then convert to JPG for email attachments or legacy software that doesn't support HEIF.",
    ],
  },
  avif: {
    usage: [
      "Upload AVIF files via drag-and-drop or file picker. Supports batch conversion—select multiple AVIF images to convert at once.",
      "Adjust quality (1–100%). AVIF often yields smaller files at similar quality; JPG output may be larger but offers universal compatibility across browsers and apps.",
      "Click Convert to JPG and download. Use Download All or Download as ZIP when converting multiple files.",
      "This AVIF to JPG converter runs in your browser. No upload, no cloud—your images stay local.",
    ],
    howItWorks: [
      "AVIF uses the AV1 video codec for image compression. It delivers better quality at smaller file sizes than JPEG, but requires modern decoder support.",
      "Modern browsers (Chrome, Firefox, Safari, Edge) can decode AVIF natively. The Canvas API renders the image and exports it as JPEG at your chosen quality.",
      "Client-side conversion means no server round-trip. Convert AVIF to JPG quickly without uploading your images anywhere.",
    ],
    about: [
      "AVIF is a next-generation image format with superior compression. Support is growing—Chrome, Firefox, Safari, and Edge support it—but many older browsers, email clients, and apps do not.",
      "Converting AVIF to JPG ensures compatibility with legacy systems, older Android devices, and platforms that haven't adopted AVIF yet.",
      "Useful for web developers who have AVIF assets for modern browsers but need JPG fallbacks, or anyone who received AVIF files and needs to open them in unsupported software.",
    ],
    advantages: [
      "Handles high-quality AVIF source images. Preserve or adjust quality in the output JPG.",
      "Client-side conversion for privacy. No upload, no server processing.",
      "Batch processing: Convert multiple AVIF files to JPG at once. ZIP download available.",
      "Free AVIF to JPG converter online with no sign-up required.",
    ],
    useCases: [
      "Legacy browser compatibility: Provide JPG fallbacks for web assets when AVIF isn't supported.",
      "Share AVIF images on platforms that don't support them—social media, email, or older apps.",
      "Convert downloaded or exported AVIF files for use in presentations, documents, or print.",
    ],
  },
  bmp: {
    usage: [
      "Upload BMP (bitmap) files. Supports standard Windows BMP format—including 24-bit and 32-bit color. Multiple files supported for batch conversion.",
      "Set output quality (1–100%) and click Convert to JPG. Higher quality keeps more detail; lower quality further reduces file size for email or web.",
      "Download converted files individually or use Download All / Download as ZIP. BMP to JPG typically reduces file size by 80–95%.",
      "Preview uploaded BMP files before converting. See thumbnails of your images in the upload area.",
    ],
    howItWorks: [
      "BMP (Bitmap) stores raw pixel data with minimal or no compression. A 1920×1080 BMP can be 6MB or more—unwieldy for sharing.",
      "The browser decodes BMP and re-encodes to JPEG using lossy compression. Visual quality is preserved at typical viewing sizes while file size drops dramatically.",
      "All processing happens in your browser. No upload, no server—convert BMP to JPG locally and keep your files private.",
    ],
    about: [
      "BMP is an older, uncompressed format commonly used in Windows screenshots, paint programs, and legacy scanning software. File sizes can be very large.",
      "Converting BMP to JPG reduces file size for sharing via email, web upload, or cloud storage. JPG is also better supported for web display and mobile viewing.",
      "A free BMP to JPG converter that reduces file size significantly. Ideal for screenshots, scans, and images exported from older applications.",
    ],
    advantages: [
      "Dramatic file size reduction: BMP to JPG often shrinks files by 80–95% with minimal visual loss.",
      "Simple, fast conversion. No installation—works in any modern browser.",
      "Batch processing: Convert multiple BMP files to JPG at once. Download all as ZIP.",
      "Privacy-first: No upload. Convert BMP images locally on your device.",
    ],
    useCases: [
      "Reduce BMP screenshot or scan file size. Send via email without hitting attachment limits.",
      "Prepare BMP images for web or email. JPG loads faster and displays in more contexts.",
      "Convert Windows Paint or Snipping Tool outputs (often saved as BMP) for sharing or archiving.",
      "Shrink scanned documents or diagrams saved as BMP for easier storage and transfer.",
    ],
  },
  png: {
    usage: [
      "Upload PNG files. Supports transparent PNGs—logos, icons, screenshots, and graphics with alpha channel.",
      "Choose a background color for transparent areas. JPG does not support transparency; transparent pixels will be filled with your selected color (e.g., white, black, or a custom hex color).",
      "Adjust quality (1–100%) and click Convert. Use white background for documents and print; black or custom for dark-themed designs.",
      "Batch convert PNG to JPG: upload multiple files, set one background color, and convert all at once. Download individually or as ZIP.",
    ],
    howItWorks: [
      "PNG supports transparency (alpha channel); JPG does not. The converter draws each PNG onto a canvas with your chosen background color, then exports as JPEG.",
      "This ensures transparent areas render correctly—no unexpected black or white artifacts. Convert PNG to JPG with white background for a clean, professional look.",
      "All processing runs in your browser. No upload, no server. Your PNG files stay on your device.",
    ],
    about: [
      "PNG is ideal for graphics with transparency—logos, icons, UI assets, screenshots with transparency. JPG is better for photos and when you need smaller file sizes or universal compatibility.",
      "Converting PNG to JPG with a background color lets you use transparent graphics in contexts that don't support PNG (e.g., some email clients, older software).",
      "A free PNG to JPG converter with background color option. Convert transparent PNG to JPG with white background, black, or any custom color.",
    ],
    advantages: [
      "Background color option: Convert transparent PNG to JPG with white background, black, or custom color. No more gray boxes or wrong transparency.",
      "Quality control and batch processing. Convert multiple PNGs with the same settings.",
      "Client-side processing. No upload—privacy-first conversion.",
      "File preview before conversion. See your PNGs before converting.",
    ],
    useCases: [
      "Convert PNG logos for use where transparency isn't needed—presentations, Word docs, print. Use white background for a clean result.",
      "Create smaller JPG versions of PNG screenshots for email or web. JPG typically compresses better for photo-like content.",
      "Prepare graphics for social media. Many platforms prefer JPG; convert PNG with appropriate background.",
      "Archive or share PNG graphics in JPG format when file size or compatibility matters more than transparency.",
    ],
  },
  svg: {
    usage: [
      "Upload SVG vector files. Supports logos, icons, illustrations, and diagrams. Batch conversion available.",
      "Set output dimensions (width × height) or check Use original size to rasterize at the SVG's native dimensions. Adjust width and height for custom output (e.g., 1024×1024 for social media).",
      "Adjust quality (1–100%) and click Convert to JPG. The SVG is rasterized at your chosen size, then exported as JPEG.",
      "Download converted files individually or use Download All / Download as ZIP when converting multiple SVGs.",
    ],
    howItWorks: [
      "SVG is a vector format—resolution-independent, scalable without pixelation. JPG is raster (pixel-based). The converter rasterizes the SVG at your specified dimensions, then exports as JPEG.",
      "You control the output resolution. Use higher dimensions (e.g., 2048×2048) for print; lower (e.g., 512×512) for web thumbnails. Original size uses the SVG's intrinsic size.",
      "All processing runs in your browser. No upload—convert SVG to JPG locally with full control over output dimensions.",
    ],
    about: [
      "SVG is perfect for logos, icons, and illustrations. It scales infinitely but isn't always supported—many apps, email clients, and print workflows expect raster formats like JPG.",
      "Rasterizing SVG to JPG gives you a pixel image at a fixed size. Useful for presentations, print, social media, or any platform that doesn't handle SVG well.",
      "A free SVG to JPG converter online. Rasterize vector graphics with custom dimensions—ideal for converting SVG logo to JPG for Facebook, Instagram, or print.",
    ],
    advantages: [
      "Custom output dimensions: Set width and height (up to 4096px). Use original size or your own.",
      "Aspect ratio control. Resize SVG to any dimensions for your use case.",
      "Batch processing: Convert multiple SVG files to JPG at once. ZIP download available.",
      "Client-side: No upload. Rasterize SVG to JPG entirely in your browser.",
    ],
    useCases: [
      "Create JPG versions of SVG logos for social media—Facebook, Instagram, LinkedIn. Use square dimensions (e.g., 1080×1080) for profile or post images.",
      "Rasterize vector graphics for print. Export SVG at high resolution (e.g., 300 DPI equivalent) for brochures, banners, or signage.",
      "Convert SVG to JPG for presentations. PowerPoint, Keynote, and Google Slides handle JPG well.",
      "Prepare SVG icons or illustrations for platforms that don't support SVG—email signatures, document embeds, legacy software.",
    ],
  },
  tiff: {
    usage: [
      "Upload TIFF or TIF files. Supports standard TIFF images—including those from scanners, cameras, and professional photo software. Batch conversion available.",
      "Set output quality (1–100%). TIFF is often uncompressed or lightly compressed; JPG will significantly reduce file size. Use 90–100% for archival quality, 75–85% for web.",
      "Click Convert to JPG. For multi-page TIFFs, the main image (largest frame) is converted. Download individually or use Download All / Download as ZIP.",
      "Preview uploaded TIFF files before converting. Thumbnails shown when browser supports TIFF rendering.",
    ],
    howItWorks: [
      "TIFF (Tagged Image File Format) can store high-bit-depth, uncompressed images. Common in professional photography, scanning, and print workflows. File sizes can be very large.",
      "UTIF decodes TIFF in your browser. The converter extracts the primary image and re-encodes it as JPEG at your chosen quality. Fallback to browser rendering for complex TIFFs.",
      "All conversion runs client-side. No upload—convert TIFF to JPG locally. Your high-resolution scans and photos stay on your device.",
    ],
    about: [
      "TIFF is common in professional photography, scanning, and archival. It preserves quality but creates large files—often tens or hundreds of MB. JPG offers a practical balance of size and quality for sharing and web.",
      "Converting TIFF to JPG reduces file size for email, web display, and cloud storage. Many online platforms and apps don't accept TIFF—JPG is the universal fallback.",
      "A free TIFF to JPG converter online. Ideal for converting scanned documents, professional photos, or archival images to a more widely supported format.",
    ],
    advantages: [
      "Handles high-quality TIFF source images. Supports complex TIFF structures including multi-IFD and EXIF-embedded thumbnails.",
      "Client-side conversion. No upload—privacy-first. Your scans and photos never leave your device.",
      "Batch processing: Convert multiple TIFF files to JPG at once. Download all as ZIP.",
      "Significant file size reduction. TIFF to JPG can shrink files by 80–95% with good visual quality.",
    ],
    useCases: [
      "Convert scanned documents to JPG for email, web upload, or document management systems that prefer JPG.",
      "Prepare professional photos for web display. Portfolio sites, galleries, and social media often expect JPG.",
      "Shrink TIFF archives for backup or sharing. Keep TIFF originals; create JPG copies for distribution.",
      "Convert TIFF exports from Photoshop, Lightroom, or scanning software for use in presentations or general-purpose viewing.",
    ],
  },
  psd: {
    usage: [
      "Upload PSD (Adobe Photoshop) files via drag-and-drop or file picker. Supports RGB color mode PSDs. Batch conversion available.",
      "Adjust quality (1–100%). The flattened composite image (all layers merged) is exported as JPG.",
      "Click Convert to JPG and download. Use Download All or Download as ZIP when converting multiple PSD files.",
      "Note: CMYK, LAB, Indexed, and 16-bit PSDs are not supported. Use RGB 8-bit for best compatibility.",
    ],
    howItWorks: [
      "PSD is Adobe Photoshop's native format. The ag-psd library decodes PSD files in your browser and extracts the composite (flattened) image.",
      "The composite canvas—equivalent to 'Flatten Image' in Photoshop—is exported as JPEG at your chosen quality. All processing runs client-side; no upload.",
      "Supports standard RGB 8-bit PSDs. Complex features (smart objects, some layer effects) may render with limitations.",
    ],
    about: [
      "PSD files contain layers, masks, and editing metadata. This converter exports the flattened composite—what you see when all layers are merged—as JPG.",
      "Useful for sharing Photoshop work as a standard image, creating web previews, or converting PSD to JPG for use in other apps that don't support PSD.",
      "A free PSD to JPG converter online. No Photoshop required—convert PSD to JPG directly in your browser without uploading files.",
    ],
    advantages: [
      "No Photoshop needed: Convert PSD to JPG in any modern browser.",
      "Client-side processing: Your PSD files never leave your device.",
      "Batch conversion: Convert multiple PSD files to JPG at once. ZIP download available.",
      "Quality control: Adjust JPG output quality from 1% to 100%.",
    ],
    useCases: [
      "Share Photoshop designs as JPG for client preview, social media, or email.",
      "Convert PSD to JPG for web display. Many CMS and platforms prefer JPG over PSD.",
      "Create flattened exports for print or presentation when you don't have Photoshop available.",
      "Archive or backup PSD work as JPG for quick viewing without specialized software.",
    ],
  },
  webp: {
    usage: [
      "Upload WEBP files via drag-and-drop or file picker. Google's modern image format—common on websites, Android, and Chrome. Batch conversion supported.",
      "Adjust quality (1–100%). WEBP often yields smaller files than JPG; converting to JPG may increase size but ensures compatibility with any device or app.",
      "Click Convert to JPG and download. Use Download All or Download as ZIP when processing multiple WEBP images.",
      "Preview uploaded WEBP files before converting. Most modern browsers display WEBP thumbnails.",
    ],
    howItWorks: [
      "WEBP offers good compression—often 25–35% smaller than JPEG at similar quality. Modern browsers decode it natively; the Canvas API renders and exports to JPEG.",
      "Conversion runs entirely in your browser. No upload, no server. Convert WEBP to JPG locally for privacy and speed.",
      "Supports both lossy and lossless WEBP source images. Output is always lossy JPEG at your chosen quality.",
    ],
    about: [
      "WEBP is used widely on the web—especially from Google services, Android devices, and web-optimized image delivery. Support is growing but not universal.",
      "Converting WEBP to JPG ensures compatibility with older browsers, email clients, Windows Photo Viewer, and apps that don't support WEBP. JPG remains the most universally supported format.",
      "A free WEBP to JPG converter online. Useful when you've downloaded or received WEBP images and need to open them in software that expects JPG.",
    ],
    advantages: [
      "Fast conversion. WEBP decodes quickly; JPG encoding is instantaneous in the browser.",
      "Batch support: Convert multiple WEBP files to JPG at once. Download all as ZIP.",
      "Quality control: Adjust output JPG quality from 1% to 100%.",
      "Client-side: No upload. Your WEBP images stay on your device.",
    ],
    useCases: [
      "Share WEBP images on platforms that don't support them—social media, email, or file sharing services.",
      "Legacy system compatibility: Open WEBP in older software, print from apps that expect JPG, or embed in documents.",
      "Convert downloaded web images. Many sites serve WEBP; convert to JPG for editing in software that doesn't support WEBP.",
      "Prepare images for presentations or print. PowerPoint, Word, and many print services work best with JPG.",
    ],
  },
  ai: {
    usage: [
      "Upload .ai (Adobe Illustrator) files via drag-and-drop or click to browse. Only files saved with PDF compatibility (default in modern Illustrator) are supported.",
      "Wait for the document to load. pdf.js renders the embedded PDF data. Progress bar shows loading and rendering status.",
      "Review page previews. Adjust quality (1–100%) and click Convert to JPG. Multi-artboard files produce one JPG per page.",
      "Download individual pages or use Download as ZIP to get all pages in one archive. Navigate between multiple .ai files with Previous/Next.",
    ],
    howItWorks: [
      "Adobe Illustrator .ai files contain PDF data internally when saved with 'Create PDF Compatible File' (enabled by default). pdf.js—the same library used for PDF—parses this embedded PDF and renders it to canvas.",
      "Each page/artboard is rendered at 2× scale for sharp output, then exported as JPEG at your quality setting. All processing runs in your browser—no server, no Ghostscript, no Node.js.",
      "No files are uploaded. Your .ai designs stay on your device throughout the conversion process.",
    ],
    about: [
      "Adobe Illustrator (.ai) is a vector graphics format. Modern .ai files embed a PDF representation for compatibility. pdf.js can read this PDF layer and render it as raster images.",
      "Converting AI to JPG is useful for sharing designs with clients, creating previews for web or email, or using Illustrator work in apps that don't support .ai.",
      "A free AI to JPG converter that runs entirely in your browser. No Adobe software, no server upload—just drag, drop, and convert.",
    ],
    advantages: [
      "No Illustrator needed: Convert .ai to JPG in any modern browser.",
      "No server, no Ghostscript: Client-side only. pdf.js handles everything.",
      "Multi-page support: Multi-artboard .ai files produce one JPG per page. ZIP download available.",
      "Progress bar: See loading and rendering status. Quality control from 1% to 100%.",
    ],
    useCases: [
      "Share Illustrator designs as JPG for client review, proposals, or social media.",
      "Create JPG previews of .ai files for design portfolios or asset catalogs.",
      "Convert .ai exports for use in presentations, documents, or platforms that expect JPG.",
      "Archive or backup Illustrator work as JPG for quick viewing without Illustrator.",
    ],
  },
  ico: {
    usage: [
      "Upload ICO (icon) files via drag-and-drop or file picker. ICO is used for favicons and Windows icons; it often contains multiple sizes and may have transparency.",
      "Choose a background color for transparent areas. JPG does not support transparency; transparent pixels will use your selected color (e.g., white for a clean look).",
      "Adjust quality (1–100%) and click Convert to JPG. For multi-size ICOs, the largest available size is typically used.",
      "Download individually or use Download All / Download as ZIP. Batch conversion supported.",
    ],
    howItWorks: [
      "ICO files can contain multiple resolutions (16×16, 32×32, 48×48, etc.) and often use transparency. The browser loads the ICO and renders it; we draw it onto a canvas with your background color and export as JPEG.",
      "Transparent areas are filled with your chosen background. Use white for document/print contexts, or match your design's background.",
      "All processing runs in your browser. No upload—convert ICO to JPG locally.",
    ],
    about: [
      "ICO is the Windows icon format, also used for favicons on websites. ICO files can have transparency and multiple embedded sizes.",
      "Converting ICO to JPG produces a standard image—useful for sharing icon designs, creating previews, or using in contexts that don't support ICO.",
      "A free ICO to JPG converter online. Convert favicons and Windows icons to JPG with background color for transparency.",
    ],
    advantages: [
      "Background color option for transparent ICOs. No more black or gray transparency artifacts.",
      "Client-side conversion. Your icon files never leave your device.",
      "Batch processing: Convert multiple ICO files at once. ZIP download available.",
      "Quality control and file preview before conversion.",
    ],
    useCases: [
      "Convert favicon or app icon designs to JPG for sharing or documentation.",
      "Create JPG previews of ICO files for design portfolios or asset catalogs.",
      "Use ICO images in apps or documents that expect JPG format.",
    ],
  },
  dng: {
    usage: [
      "Upload DNG (Digital Negative) files from Adobe cameras, smartphones, or RAW converters. Supports batch conversion.",
      "Set output quality (1–100%) and click Convert to JPG. UTIF decodes DNG where possible; otherwise the embedded JPEG preview is extracted.",
      "Note: Pure RAW DNG without an embedded preview may fail. Most cameras and Adobe DNG Converter include a preview by default.",
      "Download converted files individually or use Download All / Download as ZIP when converting multiple DNG files.",
    ],
    howItWorks: [
      "DNG (Digital Negative) is a TIFF-based RAW format. The converter tries UTIF first—if the IFD contains displayable pixel data, it is decoded and exported as JPG.",
      "If UTIF cannot decode (e.g., pure CFA raw without RGB conversion), the tool scans the file for embedded JPEG previews (SOI/EOI markers) and extracts the largest one.",
      "Most DNG files contain at least one embedded preview—from camera or Adobe DNG Converter. All processing runs in your browser. No upload.",
    ],
    about: [
      "DNG is Adobe's open RAW format. It stores raw sensor data and often one or more JPEG previews for quick display. This converter uses the preview or UTIF decoding—not full raw demosaicing.",
      "Converting DNG to JPG is useful for sharing RAW photos without specialized software, creating quick previews, or using DNG in apps that don't support RAW.",
      "A free DNG to JPG converter online. Works with DNG from Adobe cameras, smartphones (e.g., Google Pixel), and DNG exports from Lightroom or Adobe DNG Converter.",
    ],
    advantages: [
      "No server upload: Convert DNG to JPG entirely in your browser.",
      "Fallback strategies: UTIF decode or embedded JPEG extraction. Handles most common DNG files.",
      "Batch processing: Convert multiple DNG files at once. ZIP download available.",
      "Quality control: Adjust output JPG quality from 1% to 100%.",
    ],
    useCases: [
      "Share RAW photos as JPG without installing Lightroom or Camera Raw. Quick preview or sharing to social media.",
      "Convert smartphone DNG (e.g., Google Pixel) to JPG for editing in apps that don't support DNG.",
      "Create JPG previews from DNG archives for web galleries or client review.",
      "Use DNG files in workflows that expect JPG—email, presentations, or legacy software.",
    ],
  },
  cr2: {
    usage: [
      "Upload CR2 (Canon RAW) files from EOS DSLRs and PowerShot cameras. Supports batch conversion.",
      "Set output quality (1–100%) and click Convert to JPG. UTIF decodes where possible; otherwise the embedded JPEG preview is extracted.",
      "CR2 is TIFF-based. Most Canon CR2 files include an embedded preview. Download individually or use Download All / Download as ZIP.",
    ],
    howItWorks: [
      "CR2 is Canon's TIFF-based RAW format. The converter tries UTIF first to decode IFD image data, then falls back to extracting the embedded JPEG preview (SOI/EOI scan) or TIFF strip data.",
      "Canon cameras embed a full-resolution or reduced JPEG for LCD preview. This converter extracts that preview—no Digital Photo Professional or Lightroom required.",
      "All processing runs in your browser. No upload.",
    ],
    about: [
      "CR2 is used by Canon EOS DSLRs (5D, 6D, 80D, Rebel series) and higher-end PowerShot models. CR3 has replaced it in newer cameras (EOS R, M50, etc.) but CR2 remains common in archives.",
      "Converting CR2 to JPG is useful for quick sharing, creating proofs, or using Canon RAW files in apps that don't support RAW.",
      "A free CR2 to JPG converter online. No Canon software needed—works in any modern browser.",
    ],
    advantages: [
      "No server upload: Convert CR2 to JPG entirely in your browser.",
      "UTIF + embedded JPEG extraction. Handles most Canon CR2 files.",
      "Batch processing and ZIP download. Quality control from 1% to 100%.",
      "EXIF orientation applied for correct portrait/landscape display.",
    ],
    useCases: [
      "Share Canon RAW photos as JPG without installing DPP or Lightroom.",
      "Create quick proofs from CR2 files for client review or social media.",
      "Convert CR2 for use in email, presentations, or legacy software.",
      "Extract preview from CR2 when full raw processing isn't needed.",
    ],
  },
  cr3: {
    usage: [
      "Upload CR3 (Canon RAW) files from newer EOS cameras (EOS R, M50, R5, R6, etc.). Supports batch conversion.",
      "Set output quality (1–100%) and click Convert to JPG. The embedded JPEG preview is extracted from the CR3 container.",
      "CR3 uses ISO Base Media format. Download converted files individually or use Download All / Download as ZIP.",
    ],
    howItWorks: [
      "CR3 is Canon's modern RAW format based on ISO Base Media (similar to HEIF/MP4). It contains an embedded JPEG preview for the camera LCD.",
      "The converter scans the file for JPEG data (FFD8–FFD9 markers) and extracts the largest embedded preview. No server upload—all processing runs in your browser.",
      "The extracted preview typically includes EXIF; the browser applies orientation when displaying.",
    ],
    about: [
      "CR3 replaced CR2 in Canon's EOS R, EOS M, and newer DSLR lines. It supports both lossless and compact (CRAW) raw compression.",
      "Converting CR3 to JPG extracts the embedded preview—ideal for quick sharing or when full raw development isn't needed.",
      "A free CR3 to JPG converter online. Works without Canon Digital Photo Professional.",
    ],
    advantages: [
      "Client-side conversion. Your CR3 files never leave your device.",
      "Extracts embedded JPEG preview from CR3 container. Handles most modern Canon RAW files.",
      "Batch processing and ZIP download. Quality control from 1% to 100%.",
      "No Canon software required. Works in any modern browser.",
    ],
    useCases: [
      "Share Canon CR3 photos as JPG without DPP or Lightroom.",
      "Create quick previews from EOS R, M50, or similar cameras.",
      "Convert CR3 for email, web galleries, or apps that don't support RAW.",
      "Extract preview from CR3 for client proofs or social media.",
    ],
  },
  tga: {
    usage: [
      "Upload TGA (Targa) files via drag-and-drop or file picker. TGA is common in game development, 3D texturing, and older graphics software. Batch conversion supported.",
      "Choose a background color for transparent areas. JPG does not support transparency; transparent pixels use your selected color (e.g., white for documents).",
      "Adjust quality (1–100%) and click Convert to JPG. Download individually or use Download All / Download as ZIP.",
    ],
    howItWorks: [
      "TGA (Truevision TARGA) supports up to 32 bits per pixel including alpha. The @lunapaint/tga-codec library decodes TGA in your browser—including RLE compression and color-mapped images.",
      "Transparent areas are composited onto your chosen background color before export. All processing runs in your browser. No upload.",
    ],
    about: [
      "TGA was developed by Truevision for graphics cards. It remains common in game textures, 3D modeling (Blender, Maya), and legacy creative software.",
      "Converting TGA to JPG is useful for sharing textures, creating web-compatible previews, or using TGA assets in apps that don't support it.",
      "A free TGA to JPG converter online. Handles uncompressed and RLE-compressed TGA, with background color for alpha.",
    ],
    advantages: [
      "Background color option for transparent TGA. No unexpected black or gray artifacts.",
      "Client-side conversion. Your TGA files never leave your device.",
      "Handles 8, 15, 16, 24, and 32-bit TGA. RLE compression supported.",
      "Batch processing and ZIP download. Quality control from 1% to 100%.",
    ],
    useCases: [
      "Convert game textures (TGA) to JPG for web display or documentation.",
      "Create JPG previews from Blender or 3D software exports.",
      "Share TGA assets with clients or collaborators who don't have TGA support.",
      "Convert legacy TGA archives for use in modern workflows.",
    ],
  },
  jfif: {
    usage: [
      "Upload JFIF files (.jfif or .jfi) via drag-and-drop or file picker. JFIF is JPEG File Interchange Format—essentially JPEG with a specific container. Batch conversion supported.",
      "Adjust quality (1–100%). Re-encoding lets you control output quality. Use 90–100% to preserve detail, lower for smaller files.",
      "Click Convert to JPG and download. Use Download All or Download as ZIP when converting multiple JFIF files.",
      "Browsers decode JFIF natively. Conversion runs entirely in your browser—no upload required.",
    ],
    howItWorks: [
      "JFIF (JPEG File Interchange Format) is a file format that wraps JPEG-compressed image data. It uses the same compression as JPG/JPEG; the main difference is the file structure and extension.",
      "The browser loads JFIF as an image and re-exports it as standard JPG at your chosen quality. This normalizes the file to the more common .jpg extension and ensures compatibility.",
      "All processing is client-side. Your JFIF files never leave your device.",
    ],
    about: [
      "JFIF was an early standard for storing JPEG images. Some cameras, scanners, and legacy software still output .jfif files. Standard JPG (.jpg, .jpeg) is now more widely used.",
      "Converting JFIF to JPG produces a standard JPEG file with the .jpg extension—better recognized by modern apps, cloud services, and social media platforms.",
      "A free JFIF to JPG converter online. Normalize JFIF files to standard JPG format without uploading.",
    ],
    advantages: [
      "Quick conversion. JFIF and JPG use the same compression; re-encoding is fast.",
      "Client-side: No upload. Convert locally in your browser.",
      "Batch support: Convert multiple JFIF files to JPG at once. ZIP download available.",
      "Quality control: Adjust output JPG quality. Useful for resizing or recompressing.",
    ],
    useCases: [
      "Normalize JFIF from cameras or scanners to standard JPG for broader compatibility.",
      "Re-encode JFIF with different quality for web, email, or archival.",
      "Convert legacy .jfif files for use in modern apps that expect .jpg.",
    ],
  },
  pdf: {
    usage: [
      "Upload PDF files. You can process multiple PDFs—navigate between them with Previous/Next buttons. Each PDF loads with a progress indicator.",
      "Review page previews after loading. Adjust quality (1–100%) if needed. Higher quality preserves text and graphics; lower reduces file size.",
      "Click Convert to JPG to render each page as a JPG image. Each page becomes a separate image file.",
      "Download individual pages or use Download as ZIP to get all pages from the current PDF in one archive. Filenames follow the pattern: document-name-page-1.jpg, page-2.jpg, etc.",
    ],
    howItWorks: [
      "Mozilla's pdf.js renders each PDF page to a canvas at 2× resolution for sharp output. The canvas is exported as JPEG at your quality setting.",
      "Multi-page PDFs produce one JPG per page. No page limit—convert entire documents, presentations, or manuals to image format.",
      "All processing runs in your browser. No upload to any server. Your PDFs stay on your device. A free PDF to JPG converter that respects your privacy.",
    ],
    about: [
      "PDF to JPG extracts each page as an image. Useful for thumbnails, web display, social sharing, or converting documents to image format for editing or archival.",
      "Many workflows require images rather than PDFs—presentation slides, image galleries, document previews, or platforms that don't accept PDF. Converting PDF pages to JPG solves this.",
      "A free PDF to JPG converter online. Extract PDF pages as JPG images without installing software. Works with multi-page PDFs, scanned documents, and presentations.",
    ],
    advantages: [
      "Multi-page PDF support: Convert entire documents. Each page becomes a separate JPG.",
      "ZIP download: Get all pages from a PDF in one ZIP file. No need to download page by page.",
      "Page-by-page preview: See rendered pages before converting. Navigate between multiple PDF files.",
      "Client-side processing: No upload. Your PDFs never leave your device. Privacy-first conversion.",
      "Quality control: Adjust JPG quality from 1% to 100%. Balance file size and clarity.",
    ],
    useCases: [
      "Create image thumbnails from PDF documents for web galleries, document management systems, or preview cards.",
      "Convert PDF presentations to images for slideshows, Keynote/PowerPoint import, or video editing.",
      "Extract PDF pages for web display or social sharing. Share individual pages as images on Twitter, Instagram, or email.",
      "Convert scanned PDF documents to JPG for OCR, editing in image software, or archival in image format.",
    ],
  },
};
