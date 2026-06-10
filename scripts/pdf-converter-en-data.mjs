export const pdfConverterEn = {
  "pdf-converter": {
    "h1": "PDF Converter",
    "subtitle": "Online PDF converter for image formats",
    "metaDescription": "Free online PDF converter. Turn JPG, HEIC, PNG, WEBP, AVIF, BMP, and TIFF into PDFs in your browser. No upload—local processing.",
    "intro": "Convert format-specific image batches into one PDF in browser with a quick upload-to-download flow.",
    "introNote": "Local processing, no signup, and no server-side conversion upload.",
    "mixedFormatsTitle": "Prefer mixed formats?",
    "mixedFormatsBefore": "If you want",
    "mixedFormatsEmphasis": "any image formats",
    "mixedFormatsAfter": "in one upload (mixed batch), use",
    "mixedFormatsAfterLink": ".",
    "guideTitle": "PDF Converter Guide",
    "guideIntro": "Pick the converter page for your source format. For mixed formats, use Image to PDF under PDF Tools.",
    "sections": [
      {
        "title": "1. How do I convert Office or image files to PDF from this hub?",
        "type": "ordered",
        "items": [
          "Open the converter page for your source format (JPG, HEIC, PNG, WEBP, AVIF, BMP, or TIFF).",
          "Upload one or more images and check file order.",
          "Remove unwanted files before generating the PDF.",
          "Convert and download the output document.",
          "Reset and run another batch when needed."
        ]
      },
      {
        "title": "2. How does client-side PDF conversion work on this site?",
        "type": "paragraphs",
        "items": [
          "Each source image is decoded and inserted as a PDF page in browser memory.",
          "Page dimensions follow image dimensions to avoid forced stretching.",
          "Files are merged in upload order into a single output document.",
          "No conversion upload is sent to a backend server."
        ]
      },
      {
        "title": "3. What PDF conversion options are linked here, and how do I pick one?",
        "type": "paragraphs",
        "items": [
          "PDF Converter is for turning format-specific image batches into one PDF.",
          "It keeps a simple flow: upload, reorder, convert, download.",
          "Use it when you want cleaner control than generic document tools."
        ]
      },
      {
        "title": "4. Why use browser-based PDF conversion for privacy and quick batches?",
        "type": "unordered",
        "items": [
          "Browser-local PDF conversion.",
          "Format-specific upload filters.",
          "Image-as-page layout handling.",
          "Quick multi-file workflow.",
          "No signup required."
        ]
      },
      {
        "title": "5. When should I open a format-specific converter instead of a generic app?",
        "type": "unordered",
        "items": [
          "Create one PDF from many screenshots.",
          "Bundle scanned images for submissions.",
          "Prepare client-ready design review PDFs.",
          "Archive photo sets as one document."
        ]
      }
    ],
    "faq": [
      {
        "question": "How do I convert Office or image files to PDF from this hub?",
        "answer": "Choose the matching format page, upload files, convert, and download the generated PDF."
      },
      {
        "question": "How does client-side PDF conversion work on this site?",
        "answer": "Source files are decoded and assembled into PDF pages in browser runtime without server-side processing."
      },
      {
        "question": "What PDF conversion options are linked here, and how do I pick one?",
        "answer": "Pick by input format such as JPG, HEIC, PNG, WEBP, AVIF, BMP, or TIFF to get the correct upload filter and options."
      },
      {
        "question": "When should I open a format-specific converter instead of a generic app?",
        "answer": "Use format-specific pages when your source files need dedicated decoding behavior and predictable conversion defaults."
      }
    ],
    "backToHome": "← Back to home"
  },
  "pdf-converter.jpg": {
    "h1": "JPG to PDF",
    "subtitle": "Online JPG to PDF converter in browser",
    "metaDescription": "Free JPG to PDF converter. Convert JPG images to PDF with zero white margins and preserved aspect ratio. Combine multiple images into one PDF. No upload—processing runs in your browser.",
    "displayName": "JPG",
    "guideTitle": "JPG to PDF Guide",
    "guideIntro": "Use this page when your files are already in JPG and you want a quick PDF output with local processing.",
    "sections": [
      {
        "title": "1. How can I use this JPG to PDF converter on this page?",
        "type": "ordered",
        "items": [
          "Upload JPG images via drag-and-drop or click to browse. Multiple files are combined into one PDF in the order you add them.",
          "Review the file list. Remove individual files or clear all to start over.",
          "Click Convert to PDF. Each image becomes a separate PDF page sized to its dimensions—no white margins, no aspect ratio distortion.",
          "Download the generated PDF. Reset to run another batch."
        ]
      },
      {
        "title": "2. How does this tool convert JPG to PDF in my browser?",
        "type": "paragraphs",
        "items": [
          "Each JPG is decoded in the browser to obtain width and height. pdf-lib creates a page with those exact dimensions.",
          "The image is embedded at (0, 0) with width and height matching the page. No forced stretching or cropping.",
          "Multiple images produce a multi-page PDF in upload order with varying page sizes.",
          "All processing runs locally—no server upload."
        ]
      },
      {
        "title": "3. What should I know about JPG to PDF, and when is it the right choice?",
        "type": "paragraphs",
        "items": [
          "JPG to PDF converts images to PDF with no layout compromises. Each image gets its own page sized to fit exactly.",
          "All processing happens in your browser—no server upload."
        ]
      },
      {
        "title": "4. Why convert JPG to PDF in the browser for privacy and speed?",
        "type": "unordered",
        "items": [
          "Zero white margins. Page size = image size.",
          "100% aspect ratio preservation.",
          "Client-side only. Your images never leave your device.",
          "Batch combine multiple files into one PDF."
        ]
      },
      {
        "title": "5. When do people convert JPG files to PDF for sharing or archiving?",
        "type": "unordered",
        "items": [
          "Combine screenshots or photos into one shareable PDF.",
          "Bundle scans for submissions or reports.",
          "Package design comps for client review.",
          "Archive photo sets as one document."
        ]
      }
    ],
    "faq": [
      {
        "question": "How can I use this JPG to PDF converter on this page?",
        "answer": "Upload source files, review order, convert, and download the generated PDF."
      },
      {
        "question": "How does this tool convert JPG to PDF in my browser?",
        "answer": "The file is decoded and assembled into PDF pages in browser runtime without server-side conversion."
      },
      {
        "question": "What should I know about JPG to PDF, and when is it the right choice?",
        "answer": "Use it when your input format is fixed and you want predictable format-specific conversion behavior."
      },
      {
        "question": "When do people convert JPG files to PDF for sharing or archiving?",
        "answer": "It is common for submissions, documentation bundles, and long-term file packaging workflows."
      }
    ],
    "backToHub": "← Back to PDF Converter"
  },
  "pdf-converter.heic": {
    "h1": "HEIC to PDF",
    "subtitle": "Online HEIC to PDF converter in browser",
    "metaDescription": "Free HEIC to PDF converter. Convert iPhone HEIC/HEIF photos to PDF with zero white margins and preserved aspect ratio. Combine multiple HEIC files into one PDF. Uses heic2any in your browser—no upload.",
    "displayName": "HEIC",
    "guideTitle": "HEIC to PDF Guide",
    "guideIntro": "Use this page when your files are already in HEIC and you want a quick PDF output with local processing.",
    "sections": [
      {
        "title": "1. How can I use this HEIC to PDF converter on this page?",
        "type": "ordered",
        "items": [
          "Upload HEIC images via drag-and-drop or click to browse. Multiple files are combined into one PDF in the order you add them.",
          "Review the file list. Remove individual files or clear all to start over.",
          "Click Convert to PDF. Each image becomes a separate PDF page sized to its dimensions—no white margins, no aspect ratio distortion.",
          "Download the generated PDF. Reset to run another batch."
        ]
      },
      {
        "title": "2. How does this tool convert HEIC to PDF in my browser?",
        "type": "paragraphs",
        "items": [
          "HEIC/HEIF is decoded with heic2any in your browser (same pipeline as HEIC to JPG). Output is rasterized at full quality before embedding.",
          "createImageBitmap applies EXIF orientation so photos appear upright in the PDF.",
          "pdf-lib embeds pixels via PNG for PDF compatibility. Page dimensions match the oriented image.",
          "All processing runs locally—no server upload."
        ]
      },
      {
        "title": "3. What should I know about HEIC to PDF, and when is it the right choice?",
        "type": "paragraphs",
        "items": [
          "HEIC to PDF turns Apple's default photo format into a single shareable PDF. Useful for emailing albums or opening on Windows without extra codecs.",
          "HEIF container files (.heif) are accepted alongside .heic. Everything stays on your device."
        ]
      },
      {
        "title": "4. Why convert HEIC to PDF in the browser for privacy and speed?",
        "type": "unordered",
        "items": [
          "Zero white margins. Page size = image size.",
          "100% aspect ratio preservation.",
          "Client-side only. Your images never leave your device.",
          "Batch combine multiple files into one PDF."
        ]
      },
      {
        "title": "5. When do people convert HEIC files to PDF for sharing or archiving?",
        "type": "unordered",
        "items": [
          "iPhone photos: Combine vacation shots into one PDF for email or printing.",
          "Cross-platform sharing: Recipients can open PDF on any OS without HEIC support.",
          "Workflow: Turn AirDropped HEIC files into a single attachment.",
          "Archiving: Package HEIC collections as one portable document."
        ]
      }
    ],
    "faq": [
      {
        "question": "How can I use this HEIC to PDF converter on this page?",
        "answer": "Upload source files, review order, convert, and download the generated PDF."
      },
      {
        "question": "How does this tool convert HEIC to PDF in my browser?",
        "answer": "The file is decoded and assembled into PDF pages in browser runtime without server-side conversion."
      },
      {
        "question": "What should I know about HEIC to PDF, and when is it the right choice?",
        "answer": "Use it when your input format is fixed and you want predictable format-specific conversion behavior."
      },
      {
        "question": "When do people convert HEIC files to PDF for sharing or archiving?",
        "answer": "It is common for submissions, documentation bundles, and long-term file packaging workflows."
      }
    ],
    "backToHub": "← Back to PDF Converter"
  },
  "pdf-converter.heif": {
    "h1": "HEIF to PDF",
    "subtitle": "Online HEIF to PDF converter in browser",
    "metaDescription": "Free HEIF to PDF converter. Convert HEIF/HEIC images to PDF with zero white margins and preserved aspect ratio. Combine multiple files into one PDF. Uses heic2any in your browser—no upload.",
    "displayName": "HEIF",
    "guideTitle": "HEIF to PDF Guide",
    "guideIntro": "Use this page when your files are already in HEIF and you want a quick PDF output with local processing.",
    "sections": [
      {
        "title": "1. How can I use this HEIF to PDF converter on this page?",
        "type": "ordered",
        "items": [
          "Upload HEIF images via drag-and-drop or click to browse. Multiple files are combined into one PDF in the order you add them.",
          "Review the file list. Remove individual files or clear all to start over.",
          "Click Convert to PDF. Each image becomes a separate PDF page sized to its dimensions—no white margins, no aspect ratio distortion.",
          "Download the generated PDF. Reset to run another batch."
        ]
      },
      {
        "title": "2. How does this tool convert HEIF to PDF in my browser?",
        "type": "paragraphs",
        "items": [
          "Each HEIF is decoded in the browser to obtain width and height. pdf-lib creates a page with those exact dimensions.",
          "The image is embedded at (0, 0) with width and height matching the page. No forced stretching or cropping.",
          "Multiple images produce a multi-page PDF in upload order with varying page sizes.",
          "All processing runs locally—no server upload."
        ]
      },
      {
        "title": "3. What should I know about HEIF to PDF, and when is it the right choice?",
        "type": "paragraphs",
        "items": [
          "HEIF is the ISO container format; HEIC is Apple's common extension for HEIF still images. This tool handles both .heif and .heic with the same behavior as HEIC to PDF.",
          "Use this page when your files are primarily HEIF-labeled."
        ]
      },
      {
        "title": "4. Why convert HEIF to PDF in the browser for privacy and speed?",
        "type": "unordered",
        "items": [
          "Zero white margins. Page size = image size.",
          "100% aspect ratio preservation.",
          "Client-side only. Your images never leave your device.",
          "Batch combine multiple files into one PDF."
        ]
      },
      {
        "title": "5. When do people convert HEIF files to PDF for sharing or archiving?",
        "type": "unordered",
        "items": [
          "Combine screenshots or photos into one shareable PDF.",
          "Bundle scans for submissions or reports.",
          "Package design comps for client review.",
          "Archive photo sets as one document."
        ]
      }
    ],
    "faq": [
      {
        "question": "How can I use this HEIF to PDF converter on this page?",
        "answer": "Upload source files, review order, convert, and download the generated PDF."
      },
      {
        "question": "How does this tool convert HEIF to PDF in my browser?",
        "answer": "The file is decoded and assembled into PDF pages in browser runtime without server-side conversion."
      },
      {
        "question": "What should I know about HEIF to PDF, and when is it the right choice?",
        "answer": "Use it when your input format is fixed and you want predictable format-specific conversion behavior."
      },
      {
        "question": "When do people convert HEIF files to PDF for sharing or archiving?",
        "answer": "It is common for submissions, documentation bundles, and long-term file packaging workflows."
      }
    ],
    "backToHub": "← Back to PDF Converter"
  },
  "pdf-converter.png": {
    "h1": "PNG to PDF",
    "subtitle": "Online PNG to PDF converter in browser",
    "metaDescription": "Free PNG to PDF converter. Convert PNG images to PDF with zero white margins and preserved aspect ratio. Combine multiple PNGs into one PDF. Supports transparency. No upload—processing runs in your browser.",
    "displayName": "PNG",
    "guideTitle": "PNG to PDF Guide",
    "guideIntro": "Use this page when your files are already in PNG and you want a quick PDF output with local processing.",
    "sections": [
      {
        "title": "1. How can I use this PNG to PDF converter on this page?",
        "type": "ordered",
        "items": [
          "Upload PNG images via drag-and-drop or click to browse. Multiple files are combined into one PDF in the order you add them.",
          "Review the file list. Remove individual files or clear all to start over.",
          "Click Convert to PDF. Each image becomes a separate PDF page sized to its dimensions—no white margins, no aspect ratio distortion.",
          "Download the generated PDF. Reset to run another batch."
        ]
      },
      {
        "title": "2. How does this tool convert PNG to PDF in my browser?",
        "type": "paragraphs",
        "items": [
          "Each PNG is decoded in the browser to obtain width and height. pdf-lib creates a page with those exact dimensions.",
          "The image is embedded at (0, 0) with width and height matching the page. No forced stretching or cropping.",
          "Multiple images produce a multi-page PDF in upload order with varying page sizes.",
          "All processing runs locally—no server upload."
        ]
      },
      {
        "title": "3. What should I know about PNG to PDF, and when is it the right choice?",
        "type": "paragraphs",
        "items": [
          "PNG to PDF preserves transparency where supported by PDF. Ideal for screenshots, logos, and design assets."
        ]
      },
      {
        "title": "4. Why convert PNG to PDF in the browser for privacy and speed?",
        "type": "unordered",
        "items": [
          "Zero white margins. Page size = image size.",
          "100% aspect ratio preservation.",
          "Client-side only. Your images never leave your device.",
          "Batch combine multiple files into one PDF."
        ]
      },
      {
        "title": "5. When do people convert PNG files to PDF for sharing or archiving?",
        "type": "unordered",
        "items": [
          "Combine screenshots or photos into one shareable PDF.",
          "Bundle scans for submissions or reports.",
          "Package design comps for client review.",
          "Archive photo sets as one document."
        ]
      }
    ],
    "faq": [
      {
        "question": "How can I use this PNG to PDF converter on this page?",
        "answer": "Upload source files, review order, convert, and download the generated PDF."
      },
      {
        "question": "How does this tool convert PNG to PDF in my browser?",
        "answer": "The file is decoded and assembled into PDF pages in browser runtime without server-side conversion."
      },
      {
        "question": "What should I know about PNG to PDF, and when is it the right choice?",
        "answer": "Use it when your input format is fixed and you want predictable format-specific conversion behavior."
      },
      {
        "question": "When do people convert PNG files to PDF for sharing or archiving?",
        "answer": "It is common for submissions, documentation bundles, and long-term file packaging workflows."
      }
    ],
    "backToHub": "← Back to PDF Converter"
  },
  "pdf-converter.webp": {
    "h1": "WEBP to PDF",
    "subtitle": "Online WEBP to PDF converter in browser",
    "metaDescription": "Free WEBP to PDF converter. Convert WEBP images to PDF with zero white margins and preserved aspect ratio. Combine multiple WEBP files into one PDF. No upload—processing runs in your browser.",
    "displayName": "WEBP",
    "guideTitle": "WEBP to PDF Guide",
    "guideIntro": "Use this page when your files are already in WEBP and you want a quick PDF output with local processing.",
    "sections": [
      {
        "title": "1. How can I use this WEBP to PDF converter on this page?",
        "type": "ordered",
        "items": [
          "Upload WEBP images via drag-and-drop or click to browse. Multiple files are combined into one PDF in the order you add them.",
          "Review the file list. Remove individual files or clear all to start over.",
          "Click Convert to PDF. Each image becomes a separate PDF page sized to its dimensions—no white margins, no aspect ratio distortion.",
          "Download the generated PDF. Reset to run another batch."
        ]
      },
      {
        "title": "2. How does this tool convert WEBP to PDF in my browser?",
        "type": "paragraphs",
        "items": [
          "Each WEBP is decoded in the browser to obtain width and height. pdf-lib creates a page with those exact dimensions.",
          "The image is embedded at (0, 0) with width and height matching the page. No forced stretching or cropping.",
          "Multiple images produce a multi-page PDF in upload order with varying page sizes.",
          "All processing runs locally—no server upload."
        ]
      },
      {
        "title": "3. What should I know about WEBP to PDF, and when is it the right choice?",
        "type": "paragraphs",
        "items": [
          "WEBP to PDF converts images to PDF with no layout compromises. Each image gets its own page sized to fit exactly.",
          "All processing happens in your browser—no server upload."
        ]
      },
      {
        "title": "4. Why convert WEBP to PDF in the browser for privacy and speed?",
        "type": "unordered",
        "items": [
          "Zero white margins. Page size = image size.",
          "100% aspect ratio preservation.",
          "Client-side only. Your images never leave your device.",
          "Batch combine multiple files into one PDF."
        ]
      },
      {
        "title": "5. When do people convert WEBP files to PDF for sharing or archiving?",
        "type": "unordered",
        "items": [
          "Combine screenshots or photos into one shareable PDF.",
          "Bundle scans for submissions or reports.",
          "Package design comps for client review.",
          "Archive photo sets as one document."
        ]
      }
    ],
    "faq": [
      {
        "question": "How can I use this WEBP to PDF converter on this page?",
        "answer": "Upload source files, review order, convert, and download the generated PDF."
      },
      {
        "question": "How does this tool convert WEBP to PDF in my browser?",
        "answer": "The file is decoded and assembled into PDF pages in browser runtime without server-side conversion."
      },
      {
        "question": "What should I know about WEBP to PDF, and when is it the right choice?",
        "answer": "Use it when your input format is fixed and you want predictable format-specific conversion behavior."
      },
      {
        "question": "When do people convert WEBP files to PDF for sharing or archiving?",
        "answer": "It is common for submissions, documentation bundles, and long-term file packaging workflows."
      }
    ],
    "backToHub": "← Back to PDF Converter"
  },
  "pdf-converter.avif": {
    "h1": "AVIF to PDF",
    "subtitle": "Online AVIF to PDF converter in browser",
    "metaDescription": "Free AVIF to PDF converter. Convert AVIF images to PDF with zero white margins and preserved aspect ratio. Combine multiple AVIF files into one PDF. Browser-native decode—no upload.",
    "displayName": "AVIF",
    "guideTitle": "AVIF to PDF Guide",
    "guideIntro": "Use this page when your files are already in AVIF and you want a quick PDF output with local processing.",
    "sections": [
      {
        "title": "1. How can I use this AVIF to PDF converter on this page?",
        "type": "ordered",
        "items": [
          "Upload AVIF images via drag-and-drop or click to browse. Multiple files are combined into one PDF in the order you add them.",
          "Review the file list. Remove individual files or clear all to start over.",
          "Click Convert to PDF. Each image becomes a separate PDF page sized to its dimensions—no white margins, no aspect ratio distortion.",
          "Download the generated PDF. Reset to run another batch."
        ]
      },
      {
        "title": "2. How does this tool convert AVIF to PDF in my browser?",
        "type": "paragraphs",
        "items": [
          "Each AVIF is decoded in the browser to obtain width and height. pdf-lib creates a page with those exact dimensions.",
          "The image is embedded at (0, 0) with width and height matching the page. No forced stretching or cropping.",
          "Multiple images produce a multi-page PDF in upload order with varying page sizes.",
          "All processing runs locally—no server upload."
        ]
      },
      {
        "title": "3. What should I know about AVIF to PDF, and when is it the right choice?",
        "type": "paragraphs",
        "items": [
          "AVIF to PDF converts images to PDF with no layout compromises. Each image gets its own page sized to fit exactly.",
          "All processing happens in your browser—no server upload."
        ]
      },
      {
        "title": "4. Why convert AVIF to PDF in the browser for privacy and speed?",
        "type": "unordered",
        "items": [
          "Zero white margins. Page size = image size.",
          "100% aspect ratio preservation.",
          "Client-side only. Your images never leave your device.",
          "Batch combine multiple files into one PDF."
        ]
      },
      {
        "title": "5. When do people convert AVIF files to PDF for sharing or archiving?",
        "type": "unordered",
        "items": [
          "Combine screenshots or photos into one shareable PDF.",
          "Bundle scans for submissions or reports.",
          "Package design comps for client review.",
          "Archive photo sets as one document."
        ]
      }
    ],
    "faq": [
      {
        "question": "How can I use this AVIF to PDF converter on this page?",
        "answer": "Upload source files, review order, convert, and download the generated PDF."
      },
      {
        "question": "How does this tool convert AVIF to PDF in my browser?",
        "answer": "The file is decoded and assembled into PDF pages in browser runtime without server-side conversion."
      },
      {
        "question": "What should I know about AVIF to PDF, and when is it the right choice?",
        "answer": "Use it when your input format is fixed and you want predictable format-specific conversion behavior."
      },
      {
        "question": "When do people convert AVIF files to PDF for sharing or archiving?",
        "answer": "It is common for submissions, documentation bundles, and long-term file packaging workflows."
      }
    ],
    "backToHub": "← Back to PDF Converter"
  },
  "pdf-converter.bmp": {
    "h1": "BMP to PDF",
    "subtitle": "Online BMP to PDF converter in browser",
    "metaDescription": "Free BMP to PDF converter. Convert BMP bitmap images to PDF with zero white margins and preserved aspect ratio. Combine multiple BMP files into one PDF. No upload—processing runs in your browser.",
    "displayName": "BMP",
    "guideTitle": "BMP to PDF Guide",
    "guideIntro": "Use this page when your files are already in BMP and you want a quick PDF output with local processing.",
    "sections": [
      {
        "title": "1. How can I use this BMP to PDF converter on this page?",
        "type": "ordered",
        "items": [
          "Upload BMP images via drag-and-drop or click to browse. Multiple files are combined into one PDF in the order you add them.",
          "Review the file list. Remove individual files or clear all to start over.",
          "Click Convert to PDF. Each image becomes a separate PDF page sized to its dimensions—no white margins, no aspect ratio distortion.",
          "Download the generated PDF. Reset to run another batch."
        ]
      },
      {
        "title": "2. How does this tool convert BMP to PDF in my browser?",
        "type": "paragraphs",
        "items": [
          "Each BMP is decoded in the browser to obtain width and height. pdf-lib creates a page with those exact dimensions.",
          "The image is embedded at (0, 0) with width and height matching the page. No forced stretching or cropping.",
          "Multiple images produce a multi-page PDF in upload order with varying page sizes.",
          "All processing runs locally—no server upload."
        ]
      },
      {
        "title": "3. What should I know about BMP to PDF, and when is it the right choice?",
        "type": "paragraphs",
        "items": [
          "BMP to PDF converts images to PDF with no layout compromises. Each image gets its own page sized to fit exactly.",
          "All processing happens in your browser—no server upload."
        ]
      },
      {
        "title": "4. Why convert BMP to PDF in the browser for privacy and speed?",
        "type": "unordered",
        "items": [
          "Zero white margins. Page size = image size.",
          "100% aspect ratio preservation.",
          "Client-side only. Your images never leave your device.",
          "Batch combine multiple files into one PDF."
        ]
      },
      {
        "title": "5. When do people convert BMP files to PDF for sharing or archiving?",
        "type": "unordered",
        "items": [
          "Combine screenshots or photos into one shareable PDF.",
          "Bundle scans for submissions or reports.",
          "Package design comps for client review.",
          "Archive photo sets as one document."
        ]
      }
    ],
    "faq": [
      {
        "question": "How can I use this BMP to PDF converter on this page?",
        "answer": "Upload source files, review order, convert, and download the generated PDF."
      },
      {
        "question": "How does this tool convert BMP to PDF in my browser?",
        "answer": "The file is decoded and assembled into PDF pages in browser runtime without server-side conversion."
      },
      {
        "question": "What should I know about BMP to PDF, and when is it the right choice?",
        "answer": "Use it when your input format is fixed and you want predictable format-specific conversion behavior."
      },
      {
        "question": "When do people convert BMP files to PDF for sharing or archiving?",
        "answer": "It is common for submissions, documentation bundles, and long-term file packaging workflows."
      }
    ],
    "backToHub": "← Back to PDF Converter"
  },
  "pdf-converter.tiff": {
    "h1": "TIFF to PDF",
    "subtitle": "Online TIFF to PDF converter in browser",
    "metaDescription": "Free TIFF to PDF converter. Convert TIFF/TIF scans and photos to PDF with zero white margins and preserved aspect ratio. Combine multiple TIFF files into one PDF. Uses UTIF in your browser—no upload.",
    "displayName": "TIFF",
    "guideTitle": "TIFF to PDF Guide",
    "guideIntro": "Use this page when your files are already in TIFF and you want a quick PDF output with local processing.",
    "sections": [
      {
        "title": "1. How can I use this TIFF to PDF converter on this page?",
        "type": "ordered",
        "items": [
          "Upload TIFF or TIF files via drag-and-drop or click to browse. Multiple files are combined into one PDF in upload order.",
          "For multi-page TIFFs, the primary image (largest frame) is used for that file's PDF page.",
          "Review the file list. Remove unwanted files or clear all before converting.",
          "Click Convert to PDF. Each decoded image becomes a PDF page sized to its dimensions.",
          "Download the generated PDF. Reset to start over."
        ]
      },
      {
        "title": "2. How does this tool convert TIFF to PDF in my browser?",
        "type": "paragraphs",
        "items": [
          "TIFF is decoded with UTIF in your browser (same stack as TIFF to JPG). The largest displayable IFD is chosen when multiple sub-images exist.",
          "Decoded RGBA pixels are drawn to a canvas; pdf-lib embeds them via PNG.",
          "If UTIF cannot decode a file, the tool falls back to native browser TIFF rendering when available.",
          "All processing runs locally—no server upload."
        ]
      },
      {
        "title": "3. What should I know about TIFF to PDF, and when is it the right choice?",
        "type": "paragraphs",
        "items": [
          "TIFF to PDF converts .tif / .tiff without forcing A4 paper. Each source file yields at least one PDF page sized to the decoded bitmap.",
          "Common for scans, print workflows, and archival photography."
        ]
      },
      {
        "title": "4. Why convert TIFF to PDF in the browser for privacy and speed?",
        "type": "unordered",
        "items": [
          "Zero white margins. Page size = image size.",
          "100% aspect ratio preservation.",
          "Client-side only. Your images never leave your device.",
          "Batch combine multiple files into one PDF."
        ]
      },
      {
        "title": "5. When do people convert TIFF files to PDF for sharing or archiving?",
        "type": "unordered",
        "items": [
          "Scanned documents: Combine TIFF scans into one PDF.",
          "Photography: Package archival TIFF exports for sharing as PDF.",
          "Print prep: Merge TIFF proofs into a single review document.",
          "Archiving: Turn a folder of TIFFs into one portable PDF."
        ]
      }
    ],
    "faq": [
      {
        "question": "How can I use this TIFF to PDF converter on this page?",
        "answer": "Upload source files, review order, convert, and download the generated PDF."
      },
      {
        "question": "How does this tool convert TIFF to PDF in my browser?",
        "answer": "The file is decoded and assembled into PDF pages in browser runtime without server-side conversion."
      },
      {
        "question": "What should I know about TIFF to PDF, and when is it the right choice?",
        "answer": "Use it when your input format is fixed and you want predictable format-specific conversion behavior."
      },
      {
        "question": "When do people convert TIFF files to PDF for sharing or archiving?",
        "answer": "It is common for submissions, documentation bundles, and long-term file packaging workflows."
      }
    ],
    "backToHub": "← Back to PDF Converter"
  }
};
