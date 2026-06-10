export const gifEn = {
  "gif-converter": {
    "h1": "GIF Converter",
    "subtitle": "Online GIF converter hub—format-specific pages",
    "metaDescription": "Free online GIF converter. Turn HEIC, PNG, WEBP, JPG, PDF, and more into animated GIFs in your browser. No upload—local processing.",
    "intro": "Client-side GIF workflows on WithusTools: no upload, privacy-first processing. Open a format card below—the same hub pattern as JPG Converter—one card per source format.",
    "introNoteBefore": "Need PNG, WebP, HEIC, or other formats in one animation? Use",
    "introNoteAfter": "under Image Tools.",
    "guideTitle": "GIF Converter Guide",
    "guideIntro": "Use the format-specific page when your source type matches (for example only JPEG frames for JPG to GIF). More cards will appear here as new routes ship.",
    "sections": [
      {
        "title": "1. What can I use this GIF Converter hub for today?",
        "type": "ordered",
        "items": [
          "Pick a format card below—each opens a dedicated “format to GIF” route with matching upload rules and decoding.",
          "Most tools accept multiple files of the same type as animation frames; PDF to GIF uses one PDF and turns each page into a frame.",
          "For mixed image types in one animation, use Images to Animated GIF under Image Tools."
        ]
      },
      {
        "title": "2. How will client-side GIF encoding work on this site?",
        "type": "paragraphs",
        "items": [
          "GIF is palette-based (often 256 colors) with optional animation frames.",
          "Each format page decodes sources in the browser, draws frames to a canvas, and encodes with gif.js in Web Workers.",
          "Quality, dimensions, transparency handling, and delay are under your control on every route."
        ]
      },
      {
        "title": "3. How does this hub relate to the JPG Converter pattern?",
        "type": "paragraphs",
        "items": [
          "GIF remains popular for stickers, memes, simple UI motion, and platforms that prefer lightweight animation over video.",
          "This hub mirrors the JPG Converter pattern: one index plus format-specific URLs for clearer defaults and SEO.",
          "All processing stays client-side so your files never leave your device."
        ]
      },
      {
        "title": "4. Why run GIF conversion in the browser?",
        "type": "unordered",
        "items": [
          "No upload: processing in your browser.",
          "Predictable intake per format page.",
          "Consistent WithusTools layout, metadata, and FAQ-style documentation."
        ]
      },
      {
        "title": "5. When is GIF a practical output format?",
        "type": "unordered",
        "items": [
          "Prepare GIF fallbacks when you need universal embed support.",
          "Animate sequential assets that already share a file format.",
          "Chain format-specific pages when your pipeline standardizes on one source type."
        ]
      }
    ],
    "faq": [
      {
        "question": "What is the GIF Converter hub on WithusTools?",
        "answer": "It is the landing page for GIF-related tools that run in your browser. Use the format cards to open a dedicated route such as HEIC to GIF, PNG to GIF, PDF to GIF, or JPG to GIF."
      },
      {
        "question": "How does JPG to GIF work without uploading my photos?",
        "answer": "JPEG frames are decoded in memory, composited on a canvas, and encoded with gif.js in Web Workers on your device."
      },
      {
        "question": "Where can I merge PNG, WebP, or HEIC images into one GIF?",
        "answer": "Use Images to Animated GIF under Image Tools for mixed image types with the same frame and delay controls."
      },
      {
        "question": "Why use GIF instead of video for simple motion?",
        "answer": "GIF is widely supported where autoplay video or codecs may be limited, and it is easy to embed in chat, email, and lightweight web contexts."
      }
    ],
    "backToHome": "← Back to home"
  },
  "gif-converter.heic": {
    "h1": "HEIC to GIF",
    "subtitle": "Online HEIC to animated GIF in your browser",
    "metaDescription": "Combine multiple HEIC photos into one animated GIF in your browser. Set frame order, delay, canvas size, and quality. No upload—local HEIC decode and gif.js encoding.",
    "displayName": "HEIC",
    "guideTitle": "HEIC to GIF Guide",
    "guideIntro": "Use this page when every animation frame is a HEIC file and you want the same client-side GIF controls as other format routes.",
    "sections": [
      {
        "title": "1. How can I use this HEIC to GIF tool on this page?",
        "type": "ordered",
        "items": [
          "Open this HEIC to GIF page, then add two or more HEIC files as frames in the order you want.",
          "Reorder frames with ↑ / ↓, remove any you do not need, then set frame delay, output width and height, letterbox color, and GIF quality.",
          "Choose whether the animation loops forever, click Create animated GIF, then preview and download a single .gif file."
        ]
      },
      {
        "title": "2. How does this page turn HEIC into an animated GIF without uploading?",
        "type": "paragraphs",
        "items": [
          "Each HEIC file is decoded in your browser (using the same decoding approach as the HEIC to JPG tool where applicable), then drawn onto a shared canvas with letterboxing.",
          "gif.js encodes frames in Web Workers and builds one animated GIF file locally—nothing is uploaded to a server.",
          "For mixed image types in one animation, use Images to Animated GIF under Image Tools."
        ]
      },
      {
        "title": "3. How does this route fit the GIF Converter hub pattern?",
        "type": "paragraphs",
        "items": [
          "This route follows the GIF Converter hub pattern: one index plus dedicated URLs per source format, similar to JPG Converter.",
          "When every frame is HEIC, intake rules stay simple and defaults match that pipeline."
        ]
      },
      {
        "title": "4. Why run HEIC-to-GIF encoding in the browser?",
        "type": "unordered",
        "items": [
          "Client-side only: your files stay on your device.",
          "Control frame order, delay, canvas size, background, loop, and palette quality.",
          "Consistent WithusTools layout, metadata, FAQ JSON-LD, and guide sections."
        ]
      },
      {
        "title": "5. When is HEIC to GIF a practical choice?",
        "type": "unordered",
        "items": [
          "Slideshow-style GIFs from sequential exports or scans.",
          "Lightweight motion for chat, forums, or embeds where video is awkward.",
          "Quick previews from like-formatted assets without desktop apps."
        ]
      }
    ],
    "faq": [
      {
        "question": "How can I use this HEIC to GIF tool on this page?",
        "answer": "Add two or more HEIC files as frames, set delay and canvas options, create the GIF, and download it—all in your browser."
      },
      {
        "question": "How does this page build an animated GIF from HEIC without uploading?",
        "answer": "Files are decoded in memory, drawn to a canvas per frame, and encoded with gif.js in Web Workers so data stays local."
      },
      {
        "question": "What if I need mixed image types in one GIF?",
        "answer": "Use Images to Animated GIF under Image Tools—it accepts many image types with the same frame and delay controls."
      },
      {
        "question": "When is HEIC to GIF a good fit?",
        "answer": "When every frame is already HEIC, so decoding and color behavior stay consistent across the sequence."
      }
    ],
    "backToHub": "← Back to GIF Converter"
  },
  "gif-converter.heif": {
    "h1": "HEIF to GIF",
    "subtitle": "Online HEIF to animated GIF in your browser",
    "metaDescription": "Merge HEIF/HEIC images into an animated GIF locally. Control delay, dimensions, and palette quality—no server upload.",
    "displayName": "HEIF",
    "guideTitle": "HEIF to GIF Guide",
    "guideIntro": "Use this page when every animation frame is a HEIF file and you want the same client-side GIF controls as other format routes.",
    "sections": [
      {
        "title": "1. How can I use this HEIF to GIF tool on this page?",
        "type": "ordered",
        "items": [
          "Open this HEIF to GIF page, then add two or more HEIF files as frames in the order you want.",
          "Reorder frames with ↑ / ↓, remove any you do not need, then set frame delay, output width and height, letterbox color, and GIF quality.",
          "Choose whether the animation loops forever, click Create animated GIF, then preview and download a single .gif file."
        ]
      },
      {
        "title": "2. How does this page turn HEIF into an animated GIF without uploading?",
        "type": "paragraphs",
        "items": [
          "Each HEIF file is decoded in your browser (using the same decoding approach as the HEIF to JPG tool where applicable), then drawn onto a shared canvas with letterboxing.",
          "gif.js encodes frames in Web Workers and builds one animated GIF file locally—nothing is uploaded to a server.",
          "For mixed image types in one animation, use Images to Animated GIF under Image Tools."
        ]
      },
      {
        "title": "3. How does this route fit the GIF Converter hub pattern?",
        "type": "paragraphs",
        "items": [
          "This route follows the GIF Converter hub pattern: one index plus dedicated URLs per source format, similar to JPG Converter.",
          "When every frame is HEIF, intake rules stay simple and defaults match that pipeline."
        ]
      },
      {
        "title": "4. Why run HEIF-to-GIF encoding in the browser?",
        "type": "unordered",
        "items": [
          "Client-side only: your files stay on your device.",
          "Control frame order, delay, canvas size, background, loop, and palette quality.",
          "Consistent WithusTools layout, metadata, FAQ JSON-LD, and guide sections."
        ]
      },
      {
        "title": "5. When is HEIF to GIF a practical choice?",
        "type": "unordered",
        "items": [
          "Slideshow-style GIFs from sequential exports or scans.",
          "Lightweight motion for chat, forums, or embeds where video is awkward.",
          "Quick previews from like-formatted assets without desktop apps."
        ]
      }
    ],
    "faq": [
      {
        "question": "How can I use this HEIF to GIF tool on this page?",
        "answer": "Add two or more HEIF files as frames, set delay and canvas options, create the GIF, and download it—all in your browser."
      },
      {
        "question": "How does this page build an animated GIF from HEIF without uploading?",
        "answer": "Files are decoded in memory, drawn to a canvas per frame, and encoded with gif.js in Web Workers so data stays local."
      },
      {
        "question": "What if I need mixed image types in one GIF?",
        "answer": "Use Images to Animated GIF under Image Tools—it accepts many image types with the same frame and delay controls."
      },
      {
        "question": "When is HEIF to GIF a good fit?",
        "answer": "When every frame is already HEIF, so decoding and color behavior stay consistent across the sequence."
      }
    ],
    "backToHub": "← Back to GIF Converter"
  },
  "gif-converter.avif": {
    "h1": "AVIF to GIF",
    "subtitle": "Online AVIF to animated GIF in your browser",
    "metaDescription": "Turn multiple AVIF images into one animated GIF in your browser. Client-side decode and gif.js encoding.",
    "displayName": "AVIF",
    "guideTitle": "AVIF to GIF Guide",
    "guideIntro": "Use this page when every animation frame is a AVIF file and you want the same client-side GIF controls as other format routes.",
    "sections": [
      {
        "title": "1. How can I use this AVIF to GIF tool on this page?",
        "type": "ordered",
        "items": [
          "Open this AVIF to GIF page, then add two or more AVIF files as frames in the order you want.",
          "Reorder frames with ↑ / ↓, remove any you do not need, then set frame delay, output width and height, letterbox color, and GIF quality.",
          "Choose whether the animation loops forever, click Create animated GIF, then preview and download a single .gif file."
        ]
      },
      {
        "title": "2. How does this page turn AVIF into an animated GIF without uploading?",
        "type": "paragraphs",
        "items": [
          "Each AVIF file is decoded in your browser (using the same decoding approach as the AVIF to JPG tool where applicable), then drawn onto a shared canvas with letterboxing.",
          "gif.js encodes frames in Web Workers and builds one animated GIF file locally—nothing is uploaded to a server.",
          "For mixed image types in one animation, use Images to Animated GIF under Image Tools."
        ]
      },
      {
        "title": "3. How does this route fit the GIF Converter hub pattern?",
        "type": "paragraphs",
        "items": [
          "This route follows the GIF Converter hub pattern: one index plus dedicated URLs per source format, similar to JPG Converter.",
          "When every frame is AVIF, intake rules stay simple and defaults match that pipeline."
        ]
      },
      {
        "title": "4. Why run AVIF-to-GIF encoding in the browser?",
        "type": "unordered",
        "items": [
          "Client-side only: your files stay on your device.",
          "Control frame order, delay, canvas size, background, loop, and palette quality.",
          "Consistent WithusTools layout, metadata, FAQ JSON-LD, and guide sections."
        ]
      },
      {
        "title": "5. When is AVIF to GIF a practical choice?",
        "type": "unordered",
        "items": [
          "Slideshow-style GIFs from sequential exports or scans.",
          "Lightweight motion for chat, forums, or embeds where video is awkward.",
          "Quick previews from like-formatted assets without desktop apps."
        ]
      }
    ],
    "faq": [
      {
        "question": "How can I use this AVIF to GIF tool on this page?",
        "answer": "Add two or more AVIF files as frames, set delay and canvas options, create the GIF, and download it—all in your browser."
      },
      {
        "question": "How does this page build an animated GIF from AVIF without uploading?",
        "answer": "Files are decoded in memory, drawn to a canvas per frame, and encoded with gif.js in Web Workers so data stays local."
      },
      {
        "question": "What if I need mixed image types in one GIF?",
        "answer": "Use Images to Animated GIF under Image Tools—it accepts many image types with the same frame and delay controls."
      },
      {
        "question": "When is AVIF to GIF a good fit?",
        "answer": "When every frame is already AVIF, so decoding and color behavior stay consistent across the sequence."
      }
    ],
    "backToHub": "← Back to GIF Converter"
  },
  "gif-converter.bmp": {
    "h1": "BMP to GIF",
    "subtitle": "Online BMP to animated GIF in your browser",
    "metaDescription": "Build an animated GIF from BMP frames. Upload BMP files, order frames, set delay and output size—all locally.",
    "displayName": "BMP",
    "guideTitle": "BMP to GIF Guide",
    "guideIntro": "Use this page when every animation frame is a BMP file and you want the same client-side GIF controls as other format routes.",
    "sections": [
      {
        "title": "1. How can I use this BMP to GIF tool on this page?",
        "type": "ordered",
        "items": [
          "Open this BMP to GIF page, then add two or more BMP files as frames in the order you want.",
          "Reorder frames with ↑ / ↓, remove any you do not need, then set frame delay, output width and height, letterbox color, and GIF quality.",
          "Choose whether the animation loops forever, click Create animated GIF, then preview and download a single .gif file."
        ]
      },
      {
        "title": "2. How does this page turn BMP into an animated GIF without uploading?",
        "type": "paragraphs",
        "items": [
          "Each BMP file is decoded in your browser (using the same decoding approach as the BMP to JPG tool where applicable), then drawn onto a shared canvas with letterboxing.",
          "gif.js encodes frames in Web Workers and builds one animated GIF file locally—nothing is uploaded to a server.",
          "For mixed image types in one animation, use Images to Animated GIF under Image Tools."
        ]
      },
      {
        "title": "3. How does this route fit the GIF Converter hub pattern?",
        "type": "paragraphs",
        "items": [
          "This route follows the GIF Converter hub pattern: one index plus dedicated URLs per source format, similar to JPG Converter.",
          "When every frame is BMP, intake rules stay simple and defaults match that pipeline."
        ]
      },
      {
        "title": "4. Why run BMP-to-GIF encoding in the browser?",
        "type": "unordered",
        "items": [
          "Client-side only: your files stay on your device.",
          "Control frame order, delay, canvas size, background, loop, and palette quality.",
          "Consistent WithusTools layout, metadata, FAQ JSON-LD, and guide sections."
        ]
      },
      {
        "title": "5. When is BMP to GIF a practical choice?",
        "type": "unordered",
        "items": [
          "Slideshow-style GIFs from sequential exports or scans.",
          "Lightweight motion for chat, forums, or embeds where video is awkward.",
          "Quick previews from like-formatted assets without desktop apps."
        ]
      }
    ],
    "faq": [
      {
        "question": "How can I use this BMP to GIF tool on this page?",
        "answer": "Add two or more BMP files as frames, set delay and canvas options, create the GIF, and download it—all in your browser."
      },
      {
        "question": "How does this page build an animated GIF from BMP without uploading?",
        "answer": "Files are decoded in memory, drawn to a canvas per frame, and encoded with gif.js in Web Workers so data stays local."
      },
      {
        "question": "What if I need mixed image types in one GIF?",
        "answer": "Use Images to Animated GIF under Image Tools—it accepts many image types with the same frame and delay controls."
      },
      {
        "question": "When is BMP to GIF a good fit?",
        "answer": "When every frame is already BMP, so decoding and color behavior stay consistent across the sequence."
      }
    ],
    "backToHub": "← Back to GIF Converter"
  },
  "gif-converter.png": {
    "h1": "PNG to GIF",
    "subtitle": "Online PNG to animated GIF in your browser",
    "metaDescription": "Combine PNG images into one animated GIF with letterbox background for transparency. Browser-only processing.",
    "displayName": "PNG",
    "guideTitle": "PNG to GIF Guide",
    "guideIntro": "Use this page when every animation frame is a PNG file and you want the same client-side GIF controls as other format routes.",
    "sections": [
      {
        "title": "1. How can I use this PNG to GIF tool on this page?",
        "type": "ordered",
        "items": [
          "Open this PNG to GIF page, then add two or more PNG files as frames in the order you want.",
          "Reorder frames with ↑ / ↓, remove any you do not need, then set frame delay, output width and height, letterbox color, and GIF quality.",
          "Choose whether the animation loops forever, click Create animated GIF, then preview and download a single .gif file."
        ]
      },
      {
        "title": "2. How does this page turn PNG into an animated GIF without uploading?",
        "type": "paragraphs",
        "items": [
          "Each PNG file is decoded in your browser (using the same decoding approach as the PNG to JPG tool where applicable), then drawn onto a shared canvas with letterboxing.",
          "gif.js encodes frames in Web Workers and builds one animated GIF file locally—nothing is uploaded to a server.",
          "For mixed image types in one animation, use Images to Animated GIF under Image Tools."
        ]
      },
      {
        "title": "3. How does this route fit the GIF Converter hub pattern?",
        "type": "paragraphs",
        "items": [
          "This route follows the GIF Converter hub pattern: one index plus dedicated URLs per source format, similar to JPG Converter.",
          "When every frame is PNG, intake rules stay simple and defaults match that pipeline."
        ]
      },
      {
        "title": "4. Why run PNG-to-GIF encoding in the browser?",
        "type": "unordered",
        "items": [
          "Client-side only: your files stay on your device.",
          "Control frame order, delay, canvas size, background, loop, and palette quality.",
          "Consistent WithusTools layout, metadata, FAQ JSON-LD, and guide sections."
        ]
      },
      {
        "title": "5. When is PNG to GIF a practical choice?",
        "type": "unordered",
        "items": [
          "Slideshow-style GIFs from sequential exports or scans.",
          "Lightweight motion for chat, forums, or embeds where video is awkward.",
          "Quick previews from like-formatted assets without desktop apps."
        ]
      }
    ],
    "faq": [
      {
        "question": "How can I use this PNG to GIF tool on this page?",
        "answer": "Add two or more PNG files as frames, set delay and canvas options, create the GIF, and download it—all in your browser."
      },
      {
        "question": "How does this page build an animated GIF from PNG without uploading?",
        "answer": "Files are decoded in memory, drawn to a canvas per frame, and encoded with gif.js in Web Workers so data stays local."
      },
      {
        "question": "What if I need mixed image types in one GIF?",
        "answer": "Use Images to Animated GIF under Image Tools—it accepts many image types with the same frame and delay controls."
      },
      {
        "question": "When is PNG to GIF a good fit?",
        "answer": "When every frame is already PNG, so decoding and color behavior stay consistent across the sequence."
      }
    ],
    "backToHub": "← Back to GIF Converter"
  },
  "gif-converter.svg": {
    "h1": "SVG to GIF",
    "subtitle": "Online SVG to animated GIF in your browser",
    "metaDescription": "Rasterize multiple SVG files to frames and export one animated GIF. Set canvas size, delay, and quality locally.",
    "displayName": "SVG",
    "guideTitle": "SVG to GIF Guide",
    "guideIntro": "Use this page when every animation frame is a SVG file and you want the same client-side GIF controls as other format routes.",
    "sections": [
      {
        "title": "1. How can I use this SVG to GIF tool on this page?",
        "type": "ordered",
        "items": [
          "Open this SVG to GIF page, then add two or more SVG files as frames in the order you want.",
          "Reorder frames with ↑ / ↓, remove any you do not need, then set frame delay, output width and height, letterbox color, and GIF quality.",
          "Choose whether the animation loops forever, click Create animated GIF, then preview and download a single .gif file."
        ]
      },
      {
        "title": "2. How does this page turn SVG into an animated GIF without uploading?",
        "type": "paragraphs",
        "items": [
          "Each SVG file is decoded in your browser (using the same decoding approach as the SVG to JPG tool where applicable), then drawn onto a shared canvas with letterboxing.",
          "gif.js encodes frames in Web Workers and builds one animated GIF file locally—nothing is uploaded to a server.",
          "For mixed image types in one animation, use Images to Animated GIF under Image Tools."
        ]
      },
      {
        "title": "3. How does this route fit the GIF Converter hub pattern?",
        "type": "paragraphs",
        "items": [
          "This route follows the GIF Converter hub pattern: one index plus dedicated URLs per source format, similar to JPG Converter.",
          "When every frame is SVG, intake rules stay simple and defaults match that pipeline."
        ]
      },
      {
        "title": "4. Why run SVG-to-GIF encoding in the browser?",
        "type": "unordered",
        "items": [
          "Client-side only: your files stay on your device.",
          "Control frame order, delay, canvas size, background, loop, and palette quality.",
          "Consistent WithusTools layout, metadata, FAQ JSON-LD, and guide sections."
        ]
      },
      {
        "title": "5. When is SVG to GIF a practical choice?",
        "type": "unordered",
        "items": [
          "Slideshow-style GIFs from sequential exports or scans.",
          "Lightweight motion for chat, forums, or embeds where video is awkward.",
          "Quick previews from like-formatted assets without desktop apps."
        ]
      }
    ],
    "faq": [
      {
        "question": "How can I use this SVG to GIF tool on this page?",
        "answer": "Add two or more SVG files as frames, set delay and canvas options, create the GIF, and download it—all in your browser."
      },
      {
        "question": "How does this page build an animated GIF from SVG without uploading?",
        "answer": "Files are decoded in memory, drawn to a canvas per frame, and encoded with gif.js in Web Workers so data stays local."
      },
      {
        "question": "What if I need mixed image types in one GIF?",
        "answer": "Use Images to Animated GIF under Image Tools—it accepts many image types with the same frame and delay controls."
      },
      {
        "question": "When is SVG to GIF a good fit?",
        "answer": "When every frame is already SVG, so decoding and color behavior stay consistent across the sequence."
      }
    ],
    "backToHub": "← Back to GIF Converter"
  },
  "gif-converter.tiff": {
    "h1": "TIFF to GIF",
    "subtitle": "Online TIFF to animated GIF in your browser",
    "metaDescription": "Merge TIFF scans or photos into an animated GIF. UTIF/browser decode, gif.js encoding, no upload.",
    "displayName": "TIFF",
    "guideTitle": "TIFF to GIF Guide",
    "guideIntro": "Use this page when every animation frame is a TIFF file and you want the same client-side GIF controls as other format routes.",
    "sections": [
      {
        "title": "1. How can I use this TIFF to GIF tool on this page?",
        "type": "ordered",
        "items": [
          "Open this TIFF to GIF page, then add two or more TIFF files as frames in the order you want.",
          "Reorder frames with ↑ / ↓, remove any you do not need, then set frame delay, output width and height, letterbox color, and GIF quality.",
          "Choose whether the animation loops forever, click Create animated GIF, then preview and download a single .gif file."
        ]
      },
      {
        "title": "2. How does this page turn TIFF into an animated GIF without uploading?",
        "type": "paragraphs",
        "items": [
          "Each TIFF file is decoded in your browser (using the same decoding approach as the TIFF to JPG tool where applicable), then drawn onto a shared canvas with letterboxing.",
          "gif.js encodes frames in Web Workers and builds one animated GIF file locally—nothing is uploaded to a server.",
          "For mixed image types in one animation, use Images to Animated GIF under Image Tools."
        ]
      },
      {
        "title": "3. How does this route fit the GIF Converter hub pattern?",
        "type": "paragraphs",
        "items": [
          "This route follows the GIF Converter hub pattern: one index plus dedicated URLs per source format, similar to JPG Converter.",
          "When every frame is TIFF, intake rules stay simple and defaults match that pipeline."
        ]
      },
      {
        "title": "4. Why run TIFF-to-GIF encoding in the browser?",
        "type": "unordered",
        "items": [
          "Client-side only: your files stay on your device.",
          "Control frame order, delay, canvas size, background, loop, and palette quality.",
          "Consistent WithusTools layout, metadata, FAQ JSON-LD, and guide sections."
        ]
      },
      {
        "title": "5. When is TIFF to GIF a practical choice?",
        "type": "unordered",
        "items": [
          "Slideshow-style GIFs from sequential exports or scans.",
          "Lightweight motion for chat, forums, or embeds where video is awkward.",
          "Quick previews from like-formatted assets without desktop apps."
        ]
      }
    ],
    "faq": [
      {
        "question": "How can I use this TIFF to GIF tool on this page?",
        "answer": "Add two or more TIFF files as frames, set delay and canvas options, create the GIF, and download it—all in your browser."
      },
      {
        "question": "How does this page build an animated GIF from TIFF without uploading?",
        "answer": "Files are decoded in memory, drawn to a canvas per frame, and encoded with gif.js in Web Workers so data stays local."
      },
      {
        "question": "What if I need mixed image types in one GIF?",
        "answer": "Use Images to Animated GIF under Image Tools—it accepts many image types with the same frame and delay controls."
      },
      {
        "question": "When is TIFF to GIF a good fit?",
        "answer": "When every frame is already TIFF, so decoding and color behavior stay consistent across the sequence."
      }
    ],
    "backToHub": "← Back to GIF Converter"
  },
  "gif-converter.webp": {
    "h1": "WEBP to GIF",
    "subtitle": "Online WEBP to animated GIF in your browser",
    "metaDescription": "Combine WEBP images into an animated GIF in your browser. Frame controls and local gif.js encoding.",
    "displayName": "WEBP",
    "guideTitle": "WEBP to GIF Guide",
    "guideIntro": "Use this page when every animation frame is a WEBP file and you want the same client-side GIF controls as other format routes.",
    "sections": [
      {
        "title": "1. How can I use this WEBP to GIF tool on this page?",
        "type": "ordered",
        "items": [
          "Open this WEBP to GIF page, then add two or more WEBP files as frames in the order you want.",
          "Reorder frames with ↑ / ↓, remove any you do not need, then set frame delay, output width and height, letterbox color, and GIF quality.",
          "Choose whether the animation loops forever, click Create animated GIF, then preview and download a single .gif file."
        ]
      },
      {
        "title": "2. How does this page turn WEBP into an animated GIF without uploading?",
        "type": "paragraphs",
        "items": [
          "Each WEBP file is decoded in your browser (using the same decoding approach as the WEBP to JPG tool where applicable), then drawn onto a shared canvas with letterboxing.",
          "gif.js encodes frames in Web Workers and builds one animated GIF file locally—nothing is uploaded to a server.",
          "For mixed image types in one animation, use Images to Animated GIF under Image Tools."
        ]
      },
      {
        "title": "3. How does this route fit the GIF Converter hub pattern?",
        "type": "paragraphs",
        "items": [
          "This route follows the GIF Converter hub pattern: one index plus dedicated URLs per source format, similar to JPG Converter.",
          "When every frame is WEBP, intake rules stay simple and defaults match that pipeline."
        ]
      },
      {
        "title": "4. Why run WEBP-to-GIF encoding in the browser?",
        "type": "unordered",
        "items": [
          "Client-side only: your files stay on your device.",
          "Control frame order, delay, canvas size, background, loop, and palette quality.",
          "Consistent WithusTools layout, metadata, FAQ JSON-LD, and guide sections."
        ]
      },
      {
        "title": "5. When is WEBP to GIF a practical choice?",
        "type": "unordered",
        "items": [
          "Slideshow-style GIFs from sequential exports or scans.",
          "Lightweight motion for chat, forums, or embeds where video is awkward.",
          "Quick previews from like-formatted assets without desktop apps."
        ]
      }
    ],
    "faq": [
      {
        "question": "How can I use this WEBP to GIF tool on this page?",
        "answer": "Add two or more WEBP files as frames, set delay and canvas options, create the GIF, and download it—all in your browser."
      },
      {
        "question": "How does this page build an animated GIF from WEBP without uploading?",
        "answer": "Files are decoded in memory, drawn to a canvas per frame, and encoded with gif.js in Web Workers so data stays local."
      },
      {
        "question": "What if I need mixed image types in one GIF?",
        "answer": "Use Images to Animated GIF under Image Tools—it accepts many image types with the same frame and delay controls."
      },
      {
        "question": "When is WEBP to GIF a good fit?",
        "answer": "When every frame is already WEBP, so decoding and color behavior stay consistent across the sequence."
      }
    ],
    "backToHub": "← Back to GIF Converter"
  },
  "gif-converter.psd": {
    "h1": "PSD to GIF",
    "subtitle": "Online PSD to animated GIF in your browser",
    "metaDescription": "Use flattened PSD composites as frames for one animated GIF. Client-side ag-psd read and gif.js output.",
    "displayName": "PSD",
    "guideTitle": "PSD to GIF Guide",
    "guideIntro": "Use this page when every animation frame is a PSD file and you want the same client-side GIF controls as other format routes.",
    "sections": [
      {
        "title": "1. How can I use this PSD to GIF tool on this page?",
        "type": "ordered",
        "items": [
          "Open this PSD to GIF page, then add two or more PSD files as frames in the order you want.",
          "Reorder frames with ↑ / ↓, remove any you do not need, then set frame delay, output width and height, letterbox color, and GIF quality.",
          "Choose whether the animation loops forever, click Create animated GIF, then preview and download a single .gif file."
        ]
      },
      {
        "title": "2. How does this page turn PSD into an animated GIF without uploading?",
        "type": "paragraphs",
        "items": [
          "Each PSD file is decoded in your browser (using the same decoding approach as the PSD to JPG tool where applicable), then drawn onto a shared canvas with letterboxing.",
          "gif.js encodes frames in Web Workers and builds one animated GIF file locally—nothing is uploaded to a server.",
          "For mixed image types in one animation, use Images to Animated GIF under Image Tools."
        ]
      },
      {
        "title": "3. How does this route fit the GIF Converter hub pattern?",
        "type": "paragraphs",
        "items": [
          "This route follows the GIF Converter hub pattern: one index plus dedicated URLs per source format, similar to JPG Converter.",
          "When every frame is PSD, intake rules stay simple and defaults match that pipeline."
        ]
      },
      {
        "title": "4. Why run PSD-to-GIF encoding in the browser?",
        "type": "unordered",
        "items": [
          "Client-side only: your files stay on your device.",
          "Control frame order, delay, canvas size, background, loop, and palette quality.",
          "Consistent WithusTools layout, metadata, FAQ JSON-LD, and guide sections."
        ]
      },
      {
        "title": "5. When is PSD to GIF a practical choice?",
        "type": "unordered",
        "items": [
          "Slideshow-style GIFs from sequential exports or scans.",
          "Lightweight motion for chat, forums, or embeds where video is awkward.",
          "Quick previews from like-formatted assets without desktop apps."
        ]
      }
    ],
    "faq": [
      {
        "question": "How can I use this PSD to GIF tool on this page?",
        "answer": "Add two or more PSD files as frames, set delay and canvas options, create the GIF, and download it—all in your browser."
      },
      {
        "question": "How does this page build an animated GIF from PSD without uploading?",
        "answer": "Files are decoded in memory, drawn to a canvas per frame, and encoded with gif.js in Web Workers so data stays local."
      },
      {
        "question": "What if I need mixed image types in one GIF?",
        "answer": "Use Images to Animated GIF under Image Tools—it accepts many image types with the same frame and delay controls."
      },
      {
        "question": "When is PSD to GIF a good fit?",
        "answer": "When every frame is already PSD, so decoding and color behavior stay consistent across the sequence."
      }
    ],
    "backToHub": "← Back to GIF Converter"
  },
  "gif-converter.jfif": {
    "h1": "JFIF to GIF",
    "subtitle": "Online JFIF to animated GIF in your browser",
    "metaDescription": "Merge JFIF/JPEG interchange files into an animated GIF. Set delay, canvas size, and quality—no upload.",
    "displayName": "JFIF",
    "guideTitle": "JFIF to GIF Guide",
    "guideIntro": "Use this page when every animation frame is a JFIF file and you want the same client-side GIF controls as other format routes.",
    "sections": [
      {
        "title": "1. How can I use this JFIF to GIF tool on this page?",
        "type": "ordered",
        "items": [
          "Open this JFIF to GIF page, then add two or more JFIF files as frames in the order you want.",
          "Reorder frames with ↑ / ↓, remove any you do not need, then set frame delay, output width and height, letterbox color, and GIF quality.",
          "Choose whether the animation loops forever, click Create animated GIF, then preview and download a single .gif file."
        ]
      },
      {
        "title": "2. How does this page turn JFIF into an animated GIF without uploading?",
        "type": "paragraphs",
        "items": [
          "Each JFIF file is decoded in your browser (using the same decoding approach as the JFIF to JPG tool where applicable), then drawn onto a shared canvas with letterboxing.",
          "gif.js encodes frames in Web Workers and builds one animated GIF file locally—nothing is uploaded to a server.",
          "For mixed image types in one animation, use Images to Animated GIF under Image Tools."
        ]
      },
      {
        "title": "3. How does this route fit the GIF Converter hub pattern?",
        "type": "paragraphs",
        "items": [
          "This route follows the GIF Converter hub pattern: one index plus dedicated URLs per source format, similar to JPG Converter.",
          "When every frame is JFIF, intake rules stay simple and defaults match that pipeline."
        ]
      },
      {
        "title": "4. Why run JFIF-to-GIF encoding in the browser?",
        "type": "unordered",
        "items": [
          "Client-side only: your files stay on your device.",
          "Control frame order, delay, canvas size, background, loop, and palette quality.",
          "Consistent WithusTools layout, metadata, FAQ JSON-LD, and guide sections."
        ]
      },
      {
        "title": "5. When is JFIF to GIF a practical choice?",
        "type": "unordered",
        "items": [
          "Slideshow-style GIFs from sequential exports or scans.",
          "Lightweight motion for chat, forums, or embeds where video is awkward.",
          "Quick previews from like-formatted assets without desktop apps."
        ]
      }
    ],
    "faq": [
      {
        "question": "How can I use this JFIF to GIF tool on this page?",
        "answer": "Add two or more JFIF files as frames, set delay and canvas options, create the GIF, and download it—all in your browser."
      },
      {
        "question": "How does this page build an animated GIF from JFIF without uploading?",
        "answer": "Files are decoded in memory, drawn to a canvas per frame, and encoded with gif.js in Web Workers so data stays local."
      },
      {
        "question": "What if I need mixed image types in one GIF?",
        "answer": "Use Images to Animated GIF under Image Tools—it accepts many image types with the same frame and delay controls."
      },
      {
        "question": "When is JFIF to GIF a good fit?",
        "answer": "When every frame is already JFIF, so decoding and color behavior stay consistent across the sequence."
      }
    ],
    "backToHub": "← Back to GIF Converter"
  },
  "gif-converter.ico": {
    "h1": "ICO to GIF",
    "subtitle": "Online ICO to animated GIF in your browser",
    "metaDescription": "Combine ICO icon files into an animated GIF with letterboxing. Local decode and gif.js encoding.",
    "displayName": "ICO",
    "guideTitle": "ICO to GIF Guide",
    "guideIntro": "Use this page when every animation frame is a ICO file and you want the same client-side GIF controls as other format routes.",
    "sections": [
      {
        "title": "1. How can I use this ICO to GIF tool on this page?",
        "type": "ordered",
        "items": [
          "Open this ICO to GIF page, then add two or more ICO files as frames in the order you want.",
          "Reorder frames with ↑ / ↓, remove any you do not need, then set frame delay, output width and height, letterbox color, and GIF quality.",
          "Choose whether the animation loops forever, click Create animated GIF, then preview and download a single .gif file."
        ]
      },
      {
        "title": "2. How does this page turn ICO into an animated GIF without uploading?",
        "type": "paragraphs",
        "items": [
          "Each ICO file is decoded in your browser (using the same decoding approach as the ICO to JPG tool where applicable), then drawn onto a shared canvas with letterboxing.",
          "gif.js encodes frames in Web Workers and builds one animated GIF file locally—nothing is uploaded to a server.",
          "For mixed image types in one animation, use Images to Animated GIF under Image Tools."
        ]
      },
      {
        "title": "3. How does this route fit the GIF Converter hub pattern?",
        "type": "paragraphs",
        "items": [
          "This route follows the GIF Converter hub pattern: one index plus dedicated URLs per source format, similar to JPG Converter.",
          "When every frame is ICO, intake rules stay simple and defaults match that pipeline."
        ]
      },
      {
        "title": "4. Why run ICO-to-GIF encoding in the browser?",
        "type": "unordered",
        "items": [
          "Client-side only: your files stay on your device.",
          "Control frame order, delay, canvas size, background, loop, and palette quality.",
          "Consistent WithusTools layout, metadata, FAQ JSON-LD, and guide sections."
        ]
      },
      {
        "title": "5. When is ICO to GIF a practical choice?",
        "type": "unordered",
        "items": [
          "Slideshow-style GIFs from sequential exports or scans.",
          "Lightweight motion for chat, forums, or embeds where video is awkward.",
          "Quick previews from like-formatted assets without desktop apps."
        ]
      }
    ],
    "faq": [
      {
        "question": "How can I use this ICO to GIF tool on this page?",
        "answer": "Add two or more ICO files as frames, set delay and canvas options, create the GIF, and download it—all in your browser."
      },
      {
        "question": "How does this page build an animated GIF from ICO without uploading?",
        "answer": "Files are decoded in memory, drawn to a canvas per frame, and encoded with gif.js in Web Workers so data stays local."
      },
      {
        "question": "What if I need mixed image types in one GIF?",
        "answer": "Use Images to Animated GIF under Image Tools—it accepts many image types with the same frame and delay controls."
      },
      {
        "question": "When is ICO to GIF a good fit?",
        "answer": "When every frame is already ICO, so decoding and color behavior stay consistent across the sequence."
      }
    ],
    "backToHub": "← Back to GIF Converter"
  },
  "gif-converter.ai": {
    "h1": "AI to GIF",
    "subtitle": "Online AI to animated GIF in your browser",
    "metaDescription": "Render Illustrator .ai (PDF-compatible) pages as frames for an animated GIF. First page per file; pdf.js runs locally.",
    "displayName": "AI",
    "guideTitle": "AI to GIF Guide",
    "guideIntro": "Use this page when every animation frame is a AI file and you want the same client-side GIF controls as other format routes.",
    "sections": [
      {
        "title": "1. How can I use this AI to GIF tool on this page?",
        "type": "ordered",
        "items": [
          "Open this AI to GIF page, then add two or more AI files as frames in the order you want.",
          "Reorder frames with ↑ / ↓, remove any you do not need, then set frame delay, output width and height, letterbox color, and GIF quality.",
          "Choose whether the animation loops forever, click Create animated GIF, then preview and download a single .gif file."
        ]
      },
      {
        "title": "2. How does this page turn AI into an animated GIF without uploading?",
        "type": "paragraphs",
        "items": [
          "Each AI file is decoded in your browser (using the same decoding approach as the AI to JPG tool where applicable), then drawn onto a shared canvas with letterboxing.",
          "gif.js encodes frames in Web Workers and builds one animated GIF file locally—nothing is uploaded to a server.",
          "For mixed image types in one animation, use Images to Animated GIF under Image Tools."
        ]
      },
      {
        "title": "3. How does this route fit the GIF Converter hub pattern?",
        "type": "paragraphs",
        "items": [
          "This route follows the GIF Converter hub pattern: one index plus dedicated URLs per source format, similar to JPG Converter.",
          "When every frame is AI, intake rules stay simple and defaults match that pipeline."
        ]
      },
      {
        "title": "4. Why run AI-to-GIF encoding in the browser?",
        "type": "unordered",
        "items": [
          "Client-side only: your files stay on your device.",
          "Control frame order, delay, canvas size, background, loop, and palette quality.",
          "Consistent WithusTools layout, metadata, FAQ JSON-LD, and guide sections."
        ]
      },
      {
        "title": "5. When is AI to GIF a practical choice?",
        "type": "unordered",
        "items": [
          "Slideshow-style GIFs from sequential exports or scans.",
          "Lightweight motion for chat, forums, or embeds where video is awkward.",
          "Quick previews from like-formatted assets without desktop apps."
        ]
      }
    ],
    "faq": [
      {
        "question": "How can I use this AI to GIF tool on this page?",
        "answer": "Add two or more AI files as frames, set delay and canvas options, create the GIF, and download it—all in your browser."
      },
      {
        "question": "How does this page build an animated GIF from AI without uploading?",
        "answer": "Files are decoded in memory, drawn to a canvas per frame, and encoded with gif.js in Web Workers so data stays local."
      },
      {
        "question": "What if I need mixed image types in one GIF?",
        "answer": "Use Images to Animated GIF under Image Tools—it accepts many image types with the same frame and delay controls."
      },
      {
        "question": "When is AI to GIF a good fit?",
        "answer": "When every frame is already AI, so decoding and color behavior stay consistent across the sequence."
      }
    ],
    "backToHub": "← Back to GIF Converter"
  },
  "gif-converter.dng": {
    "h1": "DNG to GIF",
    "subtitle": "Online DNG to animated GIF in your browser",
    "metaDescription": "Build an animated GIF from DNG RAW previews. Decodes in-browser with UTIF or embedded JPEG—no upload.",
    "displayName": "DNG",
    "guideTitle": "DNG to GIF Guide",
    "guideIntro": "Use this page when every animation frame is a DNG file and you want the same client-side GIF controls as other format routes.",
    "sections": [
      {
        "title": "1. How can I use this DNG to GIF tool on this page?",
        "type": "ordered",
        "items": [
          "Open this DNG to GIF page, then add two or more DNG files as frames in the order you want.",
          "Reorder frames with ↑ / ↓, remove any you do not need, then set frame delay, output width and height, letterbox color, and GIF quality.",
          "Choose whether the animation loops forever, click Create animated GIF, then preview and download a single .gif file."
        ]
      },
      {
        "title": "2. How does this page turn DNG into an animated GIF without uploading?",
        "type": "paragraphs",
        "items": [
          "Each DNG file is decoded in your browser (using the same decoding approach as the DNG to JPG tool where applicable), then drawn onto a shared canvas with letterboxing.",
          "gif.js encodes frames in Web Workers and builds one animated GIF file locally—nothing is uploaded to a server.",
          "For mixed image types in one animation, use Images to Animated GIF under Image Tools."
        ]
      },
      {
        "title": "3. How does this route fit the GIF Converter hub pattern?",
        "type": "paragraphs",
        "items": [
          "This route follows the GIF Converter hub pattern: one index plus dedicated URLs per source format, similar to JPG Converter.",
          "When every frame is DNG, intake rules stay simple and defaults match that pipeline."
        ]
      },
      {
        "title": "4. Why run DNG-to-GIF encoding in the browser?",
        "type": "unordered",
        "items": [
          "Client-side only: your files stay on your device.",
          "Control frame order, delay, canvas size, background, loop, and palette quality.",
          "Consistent WithusTools layout, metadata, FAQ JSON-LD, and guide sections."
        ]
      },
      {
        "title": "5. When is DNG to GIF a practical choice?",
        "type": "unordered",
        "items": [
          "Slideshow-style GIFs from sequential exports or scans.",
          "Lightweight motion for chat, forums, or embeds where video is awkward.",
          "Quick previews from like-formatted assets without desktop apps."
        ]
      }
    ],
    "faq": [
      {
        "question": "How can I use this DNG to GIF tool on this page?",
        "answer": "Add two or more DNG files as frames, set delay and canvas options, create the GIF, and download it—all in your browser."
      },
      {
        "question": "How does this page build an animated GIF from DNG without uploading?",
        "answer": "Files are decoded in memory, drawn to a canvas per frame, and encoded with gif.js in Web Workers so data stays local."
      },
      {
        "question": "What if I need mixed image types in one GIF?",
        "answer": "Use Images to Animated GIF under Image Tools—it accepts many image types with the same frame and delay controls."
      },
      {
        "question": "When is DNG to GIF a good fit?",
        "answer": "When every frame is already DNG, so decoding and color behavior stay consistent across the sequence."
      }
    ],
    "backToHub": "← Back to GIF Converter"
  },
  "gif-converter.cr2": {
    "h1": "CR2 to GIF",
    "subtitle": "Online CR2 to animated GIF in your browser",
    "metaDescription": "Combine Canon CR2 RAW previews into an animated GIF. Client-side decode aligned with CR2 to JPG flows.",
    "displayName": "CR2",
    "guideTitle": "CR2 to GIF Guide",
    "guideIntro": "Use this page when every animation frame is a CR2 file and you want the same client-side GIF controls as other format routes.",
    "sections": [
      {
        "title": "1. How can I use this CR2 to GIF tool on this page?",
        "type": "ordered",
        "items": [
          "Open this CR2 to GIF page, then add two or more CR2 files as frames in the order you want.",
          "Reorder frames with ↑ / ↓, remove any you do not need, then set frame delay, output width and height, letterbox color, and GIF quality.",
          "Choose whether the animation loops forever, click Create animated GIF, then preview and download a single .gif file."
        ]
      },
      {
        "title": "2. How does this page turn CR2 into an animated GIF without uploading?",
        "type": "paragraphs",
        "items": [
          "Each CR2 file is decoded in your browser (using the same decoding approach as the CR2 to JPG tool where applicable), then drawn onto a shared canvas with letterboxing.",
          "gif.js encodes frames in Web Workers and builds one animated GIF file locally—nothing is uploaded to a server.",
          "For mixed image types in one animation, use Images to Animated GIF under Image Tools."
        ]
      },
      {
        "title": "3. How does this route fit the GIF Converter hub pattern?",
        "type": "paragraphs",
        "items": [
          "This route follows the GIF Converter hub pattern: one index plus dedicated URLs per source format, similar to JPG Converter.",
          "When every frame is CR2, intake rules stay simple and defaults match that pipeline."
        ]
      },
      {
        "title": "4. Why run CR2-to-GIF encoding in the browser?",
        "type": "unordered",
        "items": [
          "Client-side only: your files stay on your device.",
          "Control frame order, delay, canvas size, background, loop, and palette quality.",
          "Consistent WithusTools layout, metadata, FAQ JSON-LD, and guide sections."
        ]
      },
      {
        "title": "5. When is CR2 to GIF a practical choice?",
        "type": "unordered",
        "items": [
          "Slideshow-style GIFs from sequential exports or scans.",
          "Lightweight motion for chat, forums, or embeds where video is awkward.",
          "Quick previews from like-formatted assets without desktop apps."
        ]
      }
    ],
    "faq": [
      {
        "question": "How can I use this CR2 to GIF tool on this page?",
        "answer": "Add two or more CR2 files as frames, set delay and canvas options, create the GIF, and download it—all in your browser."
      },
      {
        "question": "How does this page build an animated GIF from CR2 without uploading?",
        "answer": "Files are decoded in memory, drawn to a canvas per frame, and encoded with gif.js in Web Workers so data stays local."
      },
      {
        "question": "What if I need mixed image types in one GIF?",
        "answer": "Use Images to Animated GIF under Image Tools—it accepts many image types with the same frame and delay controls."
      },
      {
        "question": "When is CR2 to GIF a good fit?",
        "answer": "When every frame is already CR2, so decoding and color behavior stay consistent across the sequence."
      }
    ],
    "backToHub": "← Back to GIF Converter"
  },
  "gif-converter.cr3": {
    "h1": "CR3 to GIF",
    "subtitle": "Online CR3 to animated GIF in your browser",
    "metaDescription": "Turn Canon CR3 embedded previews into GIF frames and export one animated GIF in your browser.",
    "displayName": "CR3",
    "guideTitle": "CR3 to GIF Guide",
    "guideIntro": "Use this page when every animation frame is a CR3 file and you want the same client-side GIF controls as other format routes.",
    "sections": [
      {
        "title": "1. How can I use this CR3 to GIF tool on this page?",
        "type": "ordered",
        "items": [
          "Open this CR3 to GIF page, then add two or more CR3 files as frames in the order you want.",
          "Reorder frames with ↑ / ↓, remove any you do not need, then set frame delay, output width and height, letterbox color, and GIF quality.",
          "Choose whether the animation loops forever, click Create animated GIF, then preview and download a single .gif file."
        ]
      },
      {
        "title": "2. How does this page turn CR3 into an animated GIF without uploading?",
        "type": "paragraphs",
        "items": [
          "Each CR3 file is decoded in your browser (using the same decoding approach as the CR3 to JPG tool where applicable), then drawn onto a shared canvas with letterboxing.",
          "gif.js encodes frames in Web Workers and builds one animated GIF file locally—nothing is uploaded to a server.",
          "For mixed image types in one animation, use Images to Animated GIF under Image Tools."
        ]
      },
      {
        "title": "3. How does this route fit the GIF Converter hub pattern?",
        "type": "paragraphs",
        "items": [
          "This route follows the GIF Converter hub pattern: one index plus dedicated URLs per source format, similar to JPG Converter.",
          "When every frame is CR3, intake rules stay simple and defaults match that pipeline."
        ]
      },
      {
        "title": "4. Why run CR3-to-GIF encoding in the browser?",
        "type": "unordered",
        "items": [
          "Client-side only: your files stay on your device.",
          "Control frame order, delay, canvas size, background, loop, and palette quality.",
          "Consistent WithusTools layout, metadata, FAQ JSON-LD, and guide sections."
        ]
      },
      {
        "title": "5. When is CR3 to GIF a practical choice?",
        "type": "unordered",
        "items": [
          "Slideshow-style GIFs from sequential exports or scans.",
          "Lightweight motion for chat, forums, or embeds where video is awkward.",
          "Quick previews from like-formatted assets without desktop apps."
        ]
      }
    ],
    "faq": [
      {
        "question": "How can I use this CR3 to GIF tool on this page?",
        "answer": "Add two or more CR3 files as frames, set delay and canvas options, create the GIF, and download it—all in your browser."
      },
      {
        "question": "How does this page build an animated GIF from CR3 without uploading?",
        "answer": "Files are decoded in memory, drawn to a canvas per frame, and encoded with gif.js in Web Workers so data stays local."
      },
      {
        "question": "What if I need mixed image types in one GIF?",
        "answer": "Use Images to Animated GIF under Image Tools—it accepts many image types with the same frame and delay controls."
      },
      {
        "question": "When is CR3 to GIF a good fit?",
        "answer": "When every frame is already CR3, so decoding and color behavior stay consistent across the sequence."
      }
    ],
    "backToHub": "← Back to GIF Converter"
  },
  "gif-converter.tga": {
    "h1": "TGA to GIF",
    "subtitle": "Online TGA to animated GIF in your browser",
    "metaDescription": "Merge Targa TGA images into an animated GIF. TGA decode and gif.js locally with no server upload.",
    "displayName": "TGA",
    "guideTitle": "TGA to GIF Guide",
    "guideIntro": "Use this page when every animation frame is a TGA file and you want the same client-side GIF controls as other format routes.",
    "sections": [
      {
        "title": "1. How can I use this TGA to GIF tool on this page?",
        "type": "ordered",
        "items": [
          "Open this TGA to GIF page, then add two or more TGA files as frames in the order you want.",
          "Reorder frames with ↑ / ↓, remove any you do not need, then set frame delay, output width and height, letterbox color, and GIF quality.",
          "Choose whether the animation loops forever, click Create animated GIF, then preview and download a single .gif file."
        ]
      },
      {
        "title": "2. How does this page turn TGA into an animated GIF without uploading?",
        "type": "paragraphs",
        "items": [
          "Each TGA file is decoded in your browser (using the same decoding approach as the TGA to JPG tool where applicable), then drawn onto a shared canvas with letterboxing.",
          "gif.js encodes frames in Web Workers and builds one animated GIF file locally—nothing is uploaded to a server.",
          "For mixed image types in one animation, use Images to Animated GIF under Image Tools."
        ]
      },
      {
        "title": "3. How does this route fit the GIF Converter hub pattern?",
        "type": "paragraphs",
        "items": [
          "This route follows the GIF Converter hub pattern: one index plus dedicated URLs per source format, similar to JPG Converter.",
          "When every frame is TGA, intake rules stay simple and defaults match that pipeline."
        ]
      },
      {
        "title": "4. Why run TGA-to-GIF encoding in the browser?",
        "type": "unordered",
        "items": [
          "Client-side only: your files stay on your device.",
          "Control frame order, delay, canvas size, background, loop, and palette quality.",
          "Consistent WithusTools layout, metadata, FAQ JSON-LD, and guide sections."
        ]
      },
      {
        "title": "5. When is TGA to GIF a practical choice?",
        "type": "unordered",
        "items": [
          "Slideshow-style GIFs from sequential exports or scans.",
          "Lightweight motion for chat, forums, or embeds where video is awkward.",
          "Quick previews from like-formatted assets without desktop apps."
        ]
      }
    ],
    "faq": [
      {
        "question": "How can I use this TGA to GIF tool on this page?",
        "answer": "Add two or more TGA files as frames, set delay and canvas options, create the GIF, and download it—all in your browser."
      },
      {
        "question": "How does this page build an animated GIF from TGA without uploading?",
        "answer": "Files are decoded in memory, drawn to a canvas per frame, and encoded with gif.js in Web Workers so data stays local."
      },
      {
        "question": "What if I need mixed image types in one GIF?",
        "answer": "Use Images to Animated GIF under Image Tools—it accepts many image types with the same frame and delay controls."
      },
      {
        "question": "When is TGA to GIF a good fit?",
        "answer": "When every frame is already TGA, so decoding and color behavior stay consistent across the sequence."
      }
    ],
    "backToHub": "← Back to GIF Converter"
  },
  "gif-converter.jpg": {
    "h1": "JPG to GIF",
    "subtitle": "Online JPG to animated GIF in your browser",
    "metaDescription": "Combine JPG, JPEG, or JFIF files into one animated GIF. Frame order, delay, canvas size, and quality—browser-only.",
    "displayName": "JPG",
    "guideTitle": "JPG to GIF Guide",
    "guideIntro": "Use this page when every animation frame is a JPG file and you want the same client-side GIF controls as other format routes.",
    "sections": [
      {
        "title": "1. How can I use this JPG to GIF tool on this page?",
        "type": "ordered",
        "items": [
          "Open this JPG to GIF page, then add two or more JPG files as frames in the order you want.",
          "Reorder frames with ↑ / ↓, remove any you do not need, then set frame delay, output width and height, letterbox color, and GIF quality.",
          "Choose whether the animation loops forever, click Create animated GIF, then preview and download a single .gif file."
        ]
      },
      {
        "title": "2. How does this page turn JPG into an animated GIF without uploading?",
        "type": "paragraphs",
        "items": [
          "Each JPG file is decoded in your browser (using the same decoding approach as the JPG to JPG tool where applicable), then drawn onto a shared canvas with letterboxing.",
          "gif.js encodes frames in Web Workers and builds one animated GIF file locally—nothing is uploaded to a server.",
          "For mixed image types in one animation, use Images to Animated GIF under Image Tools."
        ]
      },
      {
        "title": "3. How does this route fit the GIF Converter hub pattern?",
        "type": "paragraphs",
        "items": [
          "This route follows the GIF Converter hub pattern: one index plus dedicated URLs per source format, similar to JPG Converter.",
          "When every frame is JPG, intake rules stay simple and defaults match that pipeline."
        ]
      },
      {
        "title": "4. Why run JPG-to-GIF encoding in the browser?",
        "type": "unordered",
        "items": [
          "Client-side only: your files stay on your device.",
          "Control frame order, delay, canvas size, background, loop, and palette quality.",
          "Consistent WithusTools layout, metadata, FAQ JSON-LD, and guide sections."
        ]
      },
      {
        "title": "5. When is JPG to GIF a practical choice?",
        "type": "unordered",
        "items": [
          "Slideshow-style GIFs from sequential exports or scans.",
          "Lightweight motion for chat, forums, or embeds where video is awkward.",
          "Quick previews from like-formatted assets without desktop apps."
        ]
      }
    ],
    "faq": [
      {
        "question": "How can I use this JPG to GIF tool on this page?",
        "answer": "Add two or more JPG files as frames, set delay and canvas options, create the GIF, and download it—all in your browser."
      },
      {
        "question": "How does this page build an animated GIF from JPG without uploading?",
        "answer": "Files are decoded in memory, drawn to a canvas per frame, and encoded with gif.js in Web Workers so data stays local."
      },
      {
        "question": "What if I need mixed image types in one GIF?",
        "answer": "Use Images to Animated GIF under Image Tools—it accepts many image types with the same frame and delay controls."
      },
      {
        "question": "When is JPG to GIF a good fit?",
        "answer": "When every frame is already JPG, so decoding and color behavior stay consistent across the sequence."
      }
    ],
    "backToHub": "← Back to GIF Converter"
  },
  "gif-converter.pdf": {
    "h1": "PDF to GIF",
    "subtitle": "Online PDF to animated GIF in your browser",
    "metaDescription": "Turn PDF pages into one animated GIF. Each page is a frame (up to 60). pdf.js and gif.js run locally—no upload.",
    "displayName": "PDF",
    "guideTitle": "PDF to GIF Guide",
    "guideIntro": "Use this page when you have one multi-page PDF and want each page as a frame in a single animated GIF.",
    "sections": [
      {
        "title": "1. How can I use this PDF to GIF tool on this page?",
        "type": "ordered",
        "items": [
          "Upload one PDF—each page becomes an animation frame in order (up to 60 pages).",
          "Adjust frame delay, output width and height, letterbox color, GIF quality, and looping.",
          "Click Create animated GIF when at least two pages are loaded, then preview and download your .gif file."
        ]
      },
      {
        "title": "2. How does this page turn PDF into an animated GIF without uploading?",
        "type": "paragraphs",
        "items": [
          "pdf.js renders each PDF page to a canvas in your browser; frames are then letterboxed to your chosen output size.",
          "gif.js quantizes and encodes the sequence in Web Workers—no server upload."
        ]
      },
      {
        "title": "3. How does this route fit the GIF Converter hub pattern?",
        "type": "paragraphs",
        "items": [
          "PDF to GIF is useful for flipping through slides, storyboards, or lightweight document previews as a single GIF file.",
          "For multiple separate image files instead of one multi-page PDF, use the other format cards or Images to Animated GIF."
        ]
      },
      {
        "title": "4. Why run PDF-to-GIF encoding in the browser?",
        "type": "unordered",
        "items": [
          "All rendering and encoding stay local to your device.",
          "Page order matches the PDF; no manual frame ordering unless you re-upload.",
          "Same delay, size, and quality controls as other GIF Converter tools."
        ]
      },
      {
        "title": "5. When is PDF to GIF a practical choice?",
        "type": "unordered",
        "items": [
          "Share a short slide deck as one GIF attachment.",
          "Preview multi-page layouts in contexts that prefer GIF over video."
        ]
      }
    ],
    "faq": [
      {
        "question": "How can I use this PDF to GIF tool on this page?",
        "answer": "Upload one PDF, wait for pages to render as frames, adjust delay and canvas options, then create and download a single GIF file."
      },
      {
        "question": "How does this page build an animated GIF from PDF without uploading?",
        "answer": "pdf.js renders each page to a canvas locally; gif.js encodes frames in Web Workers on your device."
      },
      {
        "question": "What if I need mixed image types in one GIF?",
        "answer": "Use Images to Animated GIF under Image Tools—it accepts many image types with the same frame and delay controls."
      },
      {
        "question": "When is PDF to GIF a good fit?",
        "answer": "When you already have a multi-page PDF and want one lightweight GIF preview or shareable animation."
      }
    ],
    "backToHub": "← Back to GIF Converter"
  }
};
