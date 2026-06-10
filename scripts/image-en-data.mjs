export const imageEn = {
  image: {
    h1: "Image Tools",
    subtitle: "Compress, convert, animate, edit, and draw in your browser",
    intro:
      "Image Compressor, Format Converter, Images to Animated GIF, Image Editor, and Paint Board in one place. Compress files, change formats, merge frames into GIF, fix photos, and sketch—all without uploading to a server.",
    guideTitle: "Image Tools Guide",
    guideIntro:
      "For format-specific GIF routes, see GIF Converter. To combine images into PDF, use PDF Tools.",
    sections: [
      {
        title: "1. How do I pick the right image tool and run a workflow?",
        type: "ordered",
        items: [
          "Pick the tool by task: compress, convert, animate, edit, or draw.",
          "Drop an image, adjust options, and export in one flow.",
          "Use Image Compressor when upload speed or file size matters.",
          "Use Format Converter when an app only accepts specific formats.",
          "Use Images to Animated GIF when you want several stills as one looping GIF.",
          "Use Image Editor for quick fixes before sharing.",
          "Use Paint Board for sketches, annotations, and simple graphics.",
        ],
      },
      {
        title: "2. How does browser-based image processing work here?",
        type: "paragraphs",
        items: [
          "The tools decode and process image data in browser memory.",
          "Compression and conversion re-encode files with your selected settings.",
          "Images to Animated GIF letterboxes each still onto a shared canvas, then gif.js encodes frames in Web Workers.",
          "Editing tools apply filters and transforms before export.",
          "Paint Board renders strokes and shapes on an HTML canvas.",
          "No image processing is sent to a backend server.",
        ],
      },
      {
        title: "3. What everyday image tasks does this category cover?",
        type: "paragraphs",
        items: [
          "Image Tools is a browser-based set for everyday image tasks.",
          "It covers common needs: smaller files, format compatibility, simple animated GIFs from image lists, quick edits, and lightweight drawing.",
          "Great when you need results fast without opening heavy desktop software.",
        ],
      },
      {
        title: "4. Why use online image tools instead of heavy desktop software?",
        type: "unordered",
        items: [
          "Client-side image processing.",
          "No installation or signup.",
          "Fast workflow for small jobs.",
          "Compression, conversion, GIF-from-images, editing, and drawing in one place.",
          "Useful format support for modern and legacy needs.",
        ],
      },
      {
        title: "5. When are compress, convert, GIF, edit, and draw tools most useful?",
        type: "unordered",
        items: [
          "Shrink product images before uploading to a website.",
          "Convert HEIC photos to JPG for easy sharing.",
          "Fix brightness or orientation before posting images.",
          "Sketch UI ideas or annotate screenshots quickly.",
          "Prepare social media images with smaller file sizes.",
          "Chain screenshots or photos into a single GIF for chat or forums.",
        ],
      },
    ],
    faq: [
      {
        question: "How do I pick the right image tool and run a workflow?",
        answer:
          "Choose compress, convert, GIF, edit, or draw from the grid, upload images, adjust options, and export—all in the browser.",
      },
      {
        question: "How does browser-based image processing work here?",
        answer:
          "Images are decoded and re-encoded locally in browser memory; GIF frames are built on canvas and encoded with gif.js—nothing is uploaded to a server.",
      },
      {
        question: "What everyday image tasks does this category cover?",
        answer:
          "Smaller files, format changes, simple animated GIFs from stills, quick photo fixes, and lightweight sketches or annotations.",
      },
      {
        question: "Why use online image tools instead of heavy desktop software?",
        answer:
          "They open instantly, need no install, and keep processing on your device for fast one-off jobs.",
      },
      {
        question: "When are compress, convert, GIF, edit, and draw tools most useful?",
        answer:
          "Use them for web uploads, social posts, HEIC sharing, screenshot markup, and quick GIFs for chat or forums.",
      },
    ],
    backToHome: "← Back to home",
  },
  "image.image-compressor": {
    h1: "Image Compressor",
    subtitle: "Online image compressor for smaller file sizes",
    guideTitle: "Image Compressor Guide",
    guideIntro:
      "Reduce file size before upload or email. For format changes, try Image Format Converter on this hub.",
    sections: [
      {
        title: "1. How can I compress images and reduce file size with this tool?",
        type: "ordered",
        items: [
          "Drop one or more images, then choose a quality level.",
          "Set max width only when you want smaller dimensions too.",
          "Turn on EXIF removal if you want to strip camera/location metadata.",
          "Run compression and compare before/after quickly.",
          "Download files one by one or as a ZIP batch.",
        ],
      },
      {
        title: "2. How does this image compressor process files locally in my browser?",
        type: "paragraphs",
        items: [
          "The browser decodes and re-encodes image data with your selected settings.",
          "Quality and optional resize values control final size and visual detail.",
          "Processing stays local to your device.",
        ],
      },
      {
        title: "3. What is this image compressor for, and what quality trade-offs exist?",
        type: "paragraphs",
        items: [
          "Use this tool when images are too large for upload, email, or web pages.",
          "It is built for fast size reduction without opening desktop software.",
        ],
      },
      {
        title: "4. Why compress images online instead of heavy desktop software?",
        type: "unordered",
        items: [
          "Browser-local compression.",
          "Batch workflow with ZIP output.",
          "Quick quality tuning and visual comparison.",
          "No signup required.",
        ],
      },
      {
        title: "5. When do smaller images matter for websites, email, or social posts?",
        type: "unordered",
        items: [
          "Prepare product images before website upload.",
          "Shrink photos to fit email attachment limits.",
          "Reduce file size for social media posting.",
          "Archive screenshots with less storage usage.",
        ],
      },
    ],
    faq: [
      {
        question: "How can I compress images and reduce file size with this tool?",
        answer:
          "Upload images, tune quality and size options, then export compressed files individually or as ZIP.",
      },
      {
        question: "How does this image compressor process files locally in my browser?",
        answer:
          "It decodes and re-encodes images in browser memory with no server-side image upload.",
      },
      {
        question: "What is this image compressor for, and what quality trade-offs exist?",
        answer:
          "It is for reducing file size quickly. Lower quality gives smaller files but may reduce detail.",
      },
      {
        question: "When do smaller images matter for websites, email, or social posts?",
        answer:
          "Smaller images improve load speed, pass upload limits, and reduce storage and transfer costs.",
      },
    ],
  },
  "image.image-format-converter": {
    h1: "Image Format Converter",
    subtitle: "Online image format converter in browser",
    guideTitle: "Image Format Converter Guide",
    guideIntro:
      "Switch formats when an app or site requires PNG, JPG, WebP, or another type. For batch JPG output from many sources, see JPG Converter.",
    sections: [
      {
        title: "1. How can I convert PNG, JPG, WebP, or other formats with this tool?",
        type: "ordered",
        items: [
          "Upload an image and choose the target format.",
          "Set quality when converting to lossy formats.",
          "Convert, preview the result, then download.",
          "Reset and repeat for the next file.",
        ],
      },
      {
        title: "2. How does this format converter decode and encode images in my browser?",
        type: "paragraphs",
        items: [
          "The converter decodes the source and re-encodes it in your selected format.",
          "HEIC/HEIF inputs are normalized first, then exported to the target type.",
          "Processing happens locally in browser memory.",
        ],
      },
      {
        title: "3. What image formats are supported, and when should I pick each one?",
        type: "paragraphs",
        items: [
          "Use this tool when apps require a different image format.",
          "It is useful for web uploads, cross-device sharing, and workflow compatibility.",
        ],
      },
      {
        title: "4. Why convert image formats in the browser for privacy and batch speed?",
        type: "unordered",
        items: [
          "Browser-local conversion.",
          "Support for common modern formats.",
          "Quality control for lossy outputs.",
          "HEIC/HEIF input compatibility.",
          "No signup needed.",
        ],
      },
      {
        title: "5. When do teams batch-convert image assets for the web or apps?",
        type: "unordered",
        items: [
          "Convert HEIC photos to JPG for easier sharing.",
          "Export to WebP or AVIF for web performance.",
          "Match required format for design or CMS tools.",
          "Reduce storage with more efficient image types.",
        ],
      },
    ],
    faq: [
      {
        question: "How can I convert PNG, JPG, WebP, or other formats with this tool?",
        answer:
          "Upload a file, select target format, set optional quality, then convert and download.",
      },
      {
        question: "How does this format converter decode and encode images in my browser?",
        answer:
          "It processes source image data and exports the target format directly in browser runtime.",
      },
      {
        question: "What image formats are supported, and when should I pick each one?",
        answer:
          "Use JPG/WebP/AVIF for smaller files, PNG for lossless graphics, and format-specific choices for workflow compatibility.",
      },
      {
        question: "When do teams batch-convert image assets for the web or apps?",
        answer:
          "Teams convert assets during uploads, migration between systems, and performance optimization passes.",
      },
    ],
  },
  "image.images-to-animated-gif": {
    h1: "Images to Animated GIF",
    subtitle: "Merge multiple images into one looping GIF in your browser",
    guideTitle: "Images to Animated GIF Guide",
    guideIntro:
      "Turn ordered stills into a looping GIF. For format-specific GIF Converter routes (e.g. JPG-only), see the GIF Converter hub.",
    sections: [
      {
        title: "1. How do I combine several images into one animated GIF with this tool?",
        type: "ordered",
        items: [
          "Add two or more images in the order you want them to appear as animation frames.",
          "Use ↑ / ↓ to change frame order; remove frames you do not need.",
          "Set frame delay (how long each image shows), output width and height, and letterbox color.",
          "Adjust GIF quality and choose whether the animation loops forever.",
          "Click Create animated GIF, then preview and download a single .gif file.",
        ],
      },
      {
        title: "2. How does this tool build an animated GIF without uploading my files?",
        type: "paragraphs",
        items: [
          "Each image is drawn onto a fixed-size canvas (letterboxed to fit) in sequence.",
          "gif.js encodes frames in Web Workers and builds one animated GIF file on your device.",
          "HEIC/HEIF files are decoded with heic2any first, then rasterized like other images.",
        ],
      },
      {
        title: "3. What limits apply to frame count and output size?",
        type: "paragraphs",
        items: [
          "This tool is for turning a series of stills into a simple animation—slideshow GIFs, memes, or UI mockups.",
          "It is not a full video editor; frame count is limited for performance and browser memory.",
        ],
      },
      {
        title: "4. Why use a browser-based GIF builder for quick animations?",
        type: "unordered",
        items: [
          "Client-side only: no server upload.",
          "Reorder frames before export.",
          "Control delay, dimensions, background, loop, and palette quality.",
        ],
      },
      {
        title: "5. When is an image-sequence GIF better than a video file?",
        type: "unordered",
        items: [
          "Turn burst or sequential photos into a shareable GIF.",
          "Quick storyboard or before/after animation for chat or email.",
          "Prototype motion from static UI screenshots.",
        ],
      },
    ],
    faq: [
      {
        question: "How do I combine several images into one animated GIF with this tool?",
        answer:
          "Upload images in order, adjust delay and canvas size, then create and download a single GIF file.",
      },
      {
        question: "How does this tool build an animated GIF without uploading my files?",
        answer:
          "Images are decoded in the browser, drawn to canvas frames, and encoded with gif.js locally using Web Workers.",
      },
      {
        question: "What limits apply to frame count and output size?",
        answer:
          "Up to 60 frames are supported; very large dimensions may be slow or memory-heavy depending on your device.",
      },
      {
        question: "When is an image-sequence GIF better than a video file?",
        answer:
          "GIFs are widely supported in chat, forums, and simple embeds where video codecs or autoplay are not ideal.",
      },
    ],
  },
  "image.image-editor": {
    h1: "Image Editor",
    subtitle: "Online image editor for quick fixes",
    guideTitle: "Image Editor Guide",
    guideIntro:
      "Crop, adjust, annotate, and export before sharing. For format changes after editing, use Image Format Converter.",
    sections: [
      {
        title: "1. How can I crop, resize, or adjust images with this editor?",
        type: "ordered",
        items: [
          "Upload an image, then start with crop or rotate if framing is off.",
          "Adjust brightness/contrast/saturation and apply quick effects as needed.",
          "Add text, arrows, or shapes when you need annotations.",
          "Use watermark and compare view before export.",
          "Save with your preferred quality level.",
        ],
      },
      {
        title: "2. How does this image editor apply edits locally in my browser?",
        type: "paragraphs",
        items: [
          "The editor applies transforms and effects in browser rendering layers.",
          "Annotations and watermark overlays are merged on export.",
          "All edits are processed locally in your browser.",
        ],
      },
      {
        title: "3. About Image Editor",
        type: "paragraphs",
        items: [
          "Use this editor for quick fixes before sharing images.",
          "It is built for practical tasks, not full-scale layered design work.",
        ],
      },
      {
        title: "4. Why use a lightweight web image editor instead of desktop apps for quick fixes?",
        type: "unordered",
        items: [
          "Browser-local image editing.",
          "Fast tools for crop, adjust, and annotate.",
          "Watermark and before/after comparison.",
          "No signup or install required.",
        ],
      },
      {
        title: "5. When are quick browser edits enough for product photos or thumbnails?",
        type: "unordered",
        items: [
          "Fix photo orientation and exposure quickly.",
          "Annotate screenshots for docs or support tickets.",
          "Add branding watermarks before publishing.",
          "Resize/crop visuals for social posts.",
        ],
      },
    ],
    faq: [
      {
        question: "How can I crop, resize, or adjust images with this editor?",
        answer:
          "Upload an image, use crop/resize and adjustment controls, then export when the preview looks right.",
      },
      {
        question: "How does this image editor apply edits locally in my browser?",
        answer:
          "Edits are rendered and exported client-side using browser image-processing APIs.",
      },
      {
        question: "What can this editor do, and what are its practical limits?",
        answer:
          "It handles quick practical edits, but it is not a full replacement for advanced layered desktop editors.",
      },
      {
        question: "When are quick browser edits enough for product photos or thumbnails?",
        answer:
          "They are enough for routine cleanup, annotations, resizing, and social/web-ready exports.",
      },
    ],
  },
  "image.paint-board": {
    h1: "Paint Board",
    subtitle: "Online paint board for sketches and annotations",
    guideTitle: "Paint Board Guide",
    guideIntro:
      "Sketch wireframes, annotate screenshots, or jot visual notes on canvas. Export PNG when done.",
    sections: [
      {
        title: "1. How can I draw, sketch, or annotate with this paint board?",
        type: "ordered",
        items: [
          "Pick a tool (brush, eraser, shape, or image insert).",
          "Set color and brush size, then draw directly on canvas.",
          "Use undo/redo while iterating on your sketch.",
          "Insert reference images when needed.",
          "Export the result as PNG.",
        ],
      },
      {
        title: "2. How does this canvas-based paint board run in the browser?",
        type: "paragraphs",
        items: [
          "The paint board renders actions on an HTML5 canvas.",
          "Undo and redo are based on local snapshot history.",
          "All drawing and export steps run in your browser.",
        ],
      },
      {
        title: "3. What can I create with this online paint board, and what are its limits?",
        type: "paragraphs",
        items: [
          "Use this board for fast sketches, annotations, and simple diagrams.",
          "It is designed for quick visual notes rather than complex multi-layer art projects.",
        ],
      },
      {
        title: "4. Why use a browser sketchpad for quick diagrams or notes?",
        type: "unordered",
        items: [
          "Browser-local drawing workflow.",
          "Quick tool set for everyday sketching.",
          "Undo/redo and image insertion.",
          "No signup or installation.",
        ],
      },
      {
        title: "5. When is a simple paint tool enough for mockups or whiteboard ideas?",
        type: "unordered",
        items: [
          "Draw quick flowcharts or UI wireframes.",
          "Sketch ideas during planning calls.",
          "Annotate screenshots for feedback.",
          "Create simple teaching visuals.",
        ],
      },
    ],
    faq: [
      {
        question: "How can I draw, sketch, or annotate with this paint board?",
        answer:
          "Choose a drawing tool, adjust color and size, and work directly on canvas before exporting PNG.",
      },
      {
        question: "How does this canvas-based paint board run in the browser?",
        answer:
          "It uses browser canvas rendering and local history snapshots for drawing and undo/redo.",
      },
      {
        question: "What can I create with this online paint board, and what are its limits?",
        answer:
          "It is great for quick sketches and annotations, but not aimed at advanced layered illustration workflows.",
      },
      {
        question: "When is a simple paint tool enough for mockups or whiteboard ideas?",
        answer:
          "It is enough when you need fast visual communication, lightweight diagrams, and quick concept drafts.",
      },
    ],
  },
};

export const imageUiEn = {
  imageCompressor: {
    backToHub: "← Back to Image Tools",
    upload: {
      dragDrop: "Drag & Drop images or",
      chooseFiles: "Choose Files",
    },
    summary: {
      totalFiles: "Total {n} file(s)",
      originalSize: "Original size: {size}",
      compressedSize: "Compressed size: {size}",
      percentReduced: "{percent}% reduced",
      noChange: "No change",
    },
    labels: {
      compressionQuality: "Compression Quality",
      maxWidthOptional: "Max Width (optional)",
      originalWidthPlaceholder: "Original width",
      removeExif: "Remove Exif Metadata",
      exifHint: "Strip camera/location metadata from compressed output",
    },
    buttons: {
      compressAll: "Compress All",
      downloadAllZip: "Download All (ZIP)",
      reset: "Reset",
      download: "Download",
      remove: "Remove",
    },
    status: {
      pending: "Pending",
      compressing: "Compressing",
      done: "Done",
      error: "Error",
    },
    preview: {
      compare: "Compare: Original vs Compressed",
      preview: "Preview",
      compressedView: "{percent}% compressed view",
      sizeLine: "Original: {original} · Compressed: {compressed}",
      compressToCompare: "{size} · Compress to compare",
    },
    fileInfo: {
      originalSize: "Original size: {size}",
      resolution: "Resolution: {width} × {height}px",
      compressedSize: "Compressed size: {size}",
      percentReduced: "({percent}% reduced)",
      errorPrefix: "Error: {message}",
    },
    messages: {
      onlyImages: "Only image files can be uploaded.",
      filesAdded: "{n} image(s) added.",
      loadError: "An error occurred while loading the files.",
      uploadFirst: "Please upload images first.",
      allCompressed: "All images were compressed successfully.",
      partialCompressed: "{n} image(s) were compressed successfully.",
      compressFailed: "Failed to compress images.",
      compressFirst: "Please compress the images first.",
      zipStarted: "ZIP download has started.",
      zipError: "An error occurred while generating the ZIP file.",
      noCompressedFile: "No compressed file is available.",
      fileRemoved: "{name} has been removed from the list.",
      resetDone: "The tool has been reset.",
    },
  },
  imageFormatConverter: {
    backToHub: "← Back to Image Tools",
    privacyBanner: "All conversion runs in your browser. Files never leave your device.",
    uploadTitle: "Upload File",
    upload: {
      loading: "Loading...",
      dropOrClick: "Drop image here or click to upload",
    },
    supportedFormats: "PNG, JPG, WebP, GIF, BMP, TIFF, AVIF, HEIC, HEIF",
    preview: "Preview",
    fileInfo: {
      originalFormat: "Original Format: {format}",
      size: "Size: {size}",
      dimensions: "Dimensions: {width} × {height} px",
      convertedSize: "Converted size: ~{size}",
    },
    labels: {
      convertTo: "Convert to",
      quality: "Quality (for JPG, WebP, AVIF)",
      background: "Background (for transparent images)",
    },
    formatOptions: {
      png: "PNG (Lossless)",
      jpeg: "JPG (High Compression)",
      webp: "WEBP (Optimized)",
      gif: "GIF (Animation)",
      bmp: "BMP (Uncompressed)",
      tiff: "TIFF (High Quality)",
      avif: "AVIF (Next-Gen)",
    },
    formatDescriptions: {
      png: "Lossless compression, supports transparency",
      jpeg: "Small file size, ideal for photos",
      webp: "Web optimized, supports transparency",
      gif: "Supports animation, 256 colors",
      bmp: "Uncompressed, large file size",
      tiff: "Professional use, multi-image support",
      avif: "Next-gen format, high efficiency",
    },
    buttons: {
      convert: "Convert",
      download: "Download",
      reset: "Reset",
    },
    messages: {
      onlyImages: "Only image files can be uploaded.",
      loadFailed: "Failed to load image.",
      loadError: "An error occurred while loading the file.",
      uploadFirst: "Please upload an image first.",
      canvasError: "Failed to get canvas context.",
      converted: "Image converted successfully.",
      formatUnsupported: "Browser does not support conversion to this format.",
      resetDone: "The tool has been reset.",
    },
  },
  imagesToAnimatedGif: {
    backToHub: "← Back to Image Tools",
    privacyBanner: "All conversion runs in your browser. Files never leave your device.",
    uploadTitle: "Upload Files",
    upload: {
      dropImages: "Drop images here or click to upload",
      dropFormat: "Drop {format} files here or click to upload",
      supportsMultiple: "Supports multiple files",
      formatHint:
        "PNG, JPG, WebP, GIF, BMP, AVIF, TIFF, HEIC/HEIF — up to {max} frames · order = animation frames",
      ariaUploadImages: "Upload image files",
      ariaUploadFormat: "Upload {format} files",
    },
    frames: {
      countOrder: "{n} frame(s) · Top to bottom = first to last in the GIF",
      addMoreImages: "Add more images",
      addMoreFormat: "Add more {format}",
      frameNumber: "#{n}",
      moveUp: "Move up",
      moveDown: "Move down",
      remove: "Remove",
    },
    labels: {
      frameDelay: "Frame delay (ms)",
      frameDelayHint: "Time each frame stays visible before the next.",
      gifQuality: "GIF quality",
      gifQualityHint: "Higher = sharper colors (larger file). Uses gif.js palette sampling.",
      outputWidth: "Output width",
      outputHeight: "Output height",
      letterboxBackground: "Letterbox background",
      loopForever: "Loop forever",
    },
    buttons: {
      createGif: "Create animated GIF",
      encoding: "Encoding… {percent}%",
      downloadGif: "Download GIF",
      reset: "Reset",
    },
    preview: {
      title: "Preview",
      alt: "Animated GIF preview",
      fileSize: "File size: {size}",
    },
    encoding: {
      label: "Encoding frames…",
    },
    messages: {
      onlyImages: "Only image files can be added.",
      onlyFormat: "Please select {format} files only.",
      maxFrames: "Maximum {max} frames allowed.",
      partialAdded: "Only the first {n} file(s) were added (limit {max} frames).",
      imagesAdded: "{n} image(s) added to the frame list.",
      formatAdded: "{n} {format} file(s) added to the frame list.",
      minFrames: "Add at least {min} images to build an animated GIF.",
      gifCreated: "Animated GIF created. Download below.",
      gifFailed: "Failed to create GIF",
      createFirst: "Create a GIF first.",
      downloadStarted: "Download started.",
      resetDone: "Reset complete.",
    },
  },
  imageEditor: {
    backToHub: "← Back to Image Tools",
    privacyBanner: "All editing runs in your browser. Files never leave your device.",
    uploadTitle: "Upload File",
    upload: {
      loading: "Loading...",
      dropOrClick: "Drop image here or click to upload",
    },
    supportedFormats: "PNG, JPG, WebP, GIF, BMP, TIFF, AVIF, HEIC, HEIF",
    textModal: {
      label: "Enter text",
      placeholder: "Type here...",
      add: "Add",
      cancel: "Cancel",
    },
    sections: {
      filters: "Filters",
      instantEffects: "Instant Effects",
      transform: "Transform",
      drawAnnotate: "Draw & Annotate",
      utilities: "Utilities",
      actions: "Actions",
    },
    filters: {
      brightness: "Brightness",
      contrast: "Contrast",
      saturation: "Saturation",
      warmth: "Warmth",
      warmthCool: "Cool",
      warmthWarm: "Warm",
      warmthNeutral: "Neutral",
      sharpness: "Sharpness",
      sharpnessSoft: "Soft",
      sharpnessSharp: "Sharp",
      sharpnessNormal: "Normal",
      exposure: "Exposure",
    },
    effects: {
      grayscale: "Grayscale",
      sepia: "Sepia",
      invert: "Invert",
      noir: "Noir",
      vintage: "Vintage",
      blur: "Blur",
      saturated: "Saturated",
      fade: "Fade",
      toggleHint: "Click to apply, click again to remove",
    },
    transform: {
      rotateLeft: "Rotate Left",
      rotateRight: "Rotate Right",
      flipHorizontal: "Flip Horizontal",
      flipVertical: "Flip Vertical",
      crop: "Crop",
      cropFree: "Free",
      applyCrop: "Apply Crop",
      resize: "Resize",
      widthPlaceholder: "Width",
      heightPlaceholder: "Height",
      maintainAspect: "Maintain Aspect Ratio",
      applyResize: "Apply Resize",
    },
    draw: {
      text: "Text",
      arrow: "Arrow",
      rectangle: "Rectangle",
      brush: "Brush",
      color: "Color",
      size: "Size",
      sizePx: "{n}px",
      hintText: "Click on canvas, then type your text",
      hintDraw: "Click and drag on canvas to draw",
    },
    utilities: {
      addWatermark: "Add Watermark",
      watermarkPlaceholder: "Watermark text",
      position: "Position",
      positions: {
        topLeft: "Top Left",
        topRight: "Top Right",
        center: "Center",
        bottomLeft: "Bottom Left",
        bottomRight: "Bottom Right",
        tiled: "Tiled",
      },
      opacity: "Opacity",
      watermarkPreview: "Preview on canvas above",
      compareOriginal: "Compare with Original",
      showingOriginal: "Showing original",
      showingEdited: "Showing edited",
    },
    actions: {
      reset: "Reset",
      saveImage: "Save Image",
      qualityHigh: "High (100%)",
      qualityMedium: "Medium (80%)",
      qualityLow: "Low (60%)",
    },
  },
  paintBoard: {
    backToHub: "← Back to Image Tools",
    tools: {
      brush: "Brush",
      eraser: "Eraser",
      rectangle: "Rectangle",
      circle: "Circle",
      line: "Line",
      insertImage: "Insert Image",
    },
    colors: {
      foreground: "Foreground",
      background: "Background",
    },
    history: {
      undo: "Undo",
      redo: "Redo",
      clear: "Clear",
      save: "Save",
    },
    brushSize: "{n}px",
    pendingImage: "Click on the canvas to insert the image",
  },
};
