/**
 * PDF Converter 허브 + 형식별 toolContent 데이터 생성
 * 실행: node scripts/build-pdf-converter-tool-data.mjs
 */
import fs from "node:fs";
import path from "node:path";

const FORMATS = ["jpg", "heic", "heif", "png", "webp", "avif", "bmp", "tiff"];

const FORMAT_META_EN = {
  jpg: { displayName: "JPG", description: "Free JPG to PDF converter. Convert JPG images to PDF with zero white margins and preserved aspect ratio. Combine multiple images into one PDF. No upload—processing runs in your browser." },
  heic: { displayName: "HEIC", description: "Free HEIC to PDF converter. Convert iPhone HEIC/HEIF photos to PDF with zero white margins and preserved aspect ratio. Combine multiple HEIC files into one PDF. Uses heic2any in your browser—no upload." },
  heif: { displayName: "HEIF", description: "Free HEIF to PDF converter. Convert HEIF/HEIC images to PDF with zero white margins and preserved aspect ratio. Combine multiple files into one PDF. Uses heic2any in your browser—no upload." },
  png: { displayName: "PNG", description: "Free PNG to PDF converter. Convert PNG images to PDF with zero white margins and preserved aspect ratio. Combine multiple PNGs into one PDF. Supports transparency. No upload—processing runs in your browser." },
  webp: { displayName: "WEBP", description: "Free WEBP to PDF converter. Convert WEBP images to PDF with zero white margins and preserved aspect ratio. Combine multiple WEBP files into one PDF. No upload—processing runs in your browser." },
  avif: { displayName: "AVIF", description: "Free AVIF to PDF converter. Convert AVIF images to PDF with zero white margins and preserved aspect ratio. Combine multiple AVIF files into one PDF. Browser-native decode—no upload." },
  bmp: { displayName: "BMP", description: "Free BMP to PDF converter. Convert BMP bitmap images to PDF with zero white margins and preserved aspect ratio. Combine multiple BMP files into one PDF. No upload—processing runs in your browser." },
  tiff: { displayName: "TIFF", description: "Free TIFF to PDF converter. Convert TIFF/TIF scans and photos to PDF with zero white margins and preserved aspect ratio. Combine multiple TIFF files into one PDF. Uses UTIF in your browser—no upload." },
};

const FORMAT_META_KO = {
  jpg: { displayName: "JPG", description: "무료 JPG→PDF 변환기. JPG 이미지를 여백 없이 종횡비를 유지하며 PDF로 변환합니다. 여러 이미지를 하나의 PDF로 합칩니다. 업로드 없이 브라우저에서 처리합니다." },
  heic: { displayName: "HEIC", description: "무료 HEIC→PDF 변환기. iPhone HEIC/HEIF 사진을 여백 없는 PDF로 변환합니다. heic2any로 브라우저에서 처리하며 여러 파일을 하나의 PDF로 합칠 수 있습니다." },
  heif: { displayName: "HEIF", description: "무료 HEIF→PDF 변환기. HEIF/HEIC 이미지를 여백 없는 PDF로 변환합니다. heic2any로 브라우저에서 처리하며 여러 파일을 하나의 PDF로 합칠 수 있습니다." },
  png: { displayName: "PNG", description: "무료 PNG→PDF 변환기. PNG 이미지를 여백 없이 PDF로 변환합니다. 투명도를 지원하며 여러 PNG를 하나의 PDF로 합칩니다. 업로드 없이 브라우저에서 처리합니다." },
  webp: { displayName: "WEBP", description: "무료 WEBP→PDF 변환기. WEBP 이미지를 여백 없이 PDF로 변환합니다. 여러 WEBP를 하나의 PDF로 합칩니다. 업로드 없이 브라우저에서 처리합니다." },
  avif: { displayName: "AVIF", description: "무료 AVIF→PDF 변환기. AVIF 이미지를 여백 없이 PDF로 변환합니다. 브라우저 네이티브 디코드, 여러 파일을 하나의 PDF로 합칩니다." },
  bmp: { displayName: "BMP", description: "무료 BMP→PDF 변환기. BMP 비트맵을 여백 없이 PDF로 변환합니다. 여러 BMP를 하나의 PDF로 합칩니다. 업로드 없이 브라우저에서 처리합니다." },
  tiff: { displayName: "TIFF", description: "무료 TIFF→PDF 변환기. TIFF/TIF 스캔·사진을 여백 없이 PDF로 변환합니다. UTIF로 브라우저에서 처리하며 여러 파일을 하나의 PDF로 합칩니다." },
};

function sectionsFromGuide(guide) {
  return [
    { title: guide.s1, type: "ordered", items: guide.usage },
    { title: guide.s2, type: "paragraphs", items: guide.howItWorks },
    { title: guide.s3, type: "paragraphs", items: guide.about },
    { title: guide.s4, type: "unordered", items: guide.advantages },
    { title: guide.s5, type: "unordered", items: guide.useCases },
  ];
}

function buildRasterGuide(locale, displayName) {
  const isKo = locale === "ko";
  if (isKo) {
    return {
      guideIntro: `파일이 이미 ${displayName}이고 로컬 처리로 빠른 PDF 출력이 필요할 때 이 페이지를 사용하세요.`,
      s1: `1. 이 페이지에서 ${displayName}→PDF 변환기는 어떻게 사용하나요?`,
      s2: `2. 이 도구는 브라우저에서 ${displayName}을 PDF로 어떻게 변환하나요?`,
      s3: `3. ${displayName}→PDF에 대해 알아야 할 점과 적합한 경우는?`,
      s4: `4. 프라이버시와 속도를 위해 브라우저에서 ${displayName}을 PDF로 변환하는 이유는?`,
      s5: `5. 공유·보관을 위해 ${displayName} 파일을 PDF로 변환하는 경우는?`,
      usage: [
        `${displayName} 이미지를 드래그 앤 드롭하거나 클릭하여 업로드하세요. 여러 파일을 추가 순서대로 하나의 PDF로 합칩니다.`,
        "파일 목록을 확인하고 불필요한 파일을 제거하거나 전체 초기화하세요.",
        "PDF로 변환을 클릭하세요. 각 이미지가 여백 없이 원본 크기에 맞는 별도 PDF 페이지가 됩니다.",
        "생성된 PDF를 다운로드하세요. 초기화 후 다른 배치를 반복할 수 있습니다.",
      ],
      howItWorks: [
        `각 ${displayName}은 브라우저에서 디코딩되어 너비·높이를 얻고, pdf-lib가 동일한 크기의 페이지를 만듭니다.`,
        "이미지는 (0,0)에 페이지 크기와 동일한 너비·높이로 삽입됩니다. 강제 늘리기나 잘림 없이 종횡비가 유지됩니다.",
        "여러 이미지는 업로드 순서대로 크기가 다를 수 있는 다중 페이지 PDF가 됩니다.",
        "모든 처리가 로컬에서 이루어지며 서버 업로드는 없습니다.",
      ],
      about: [
        `${displayName}→PDF는 품질·레이아웃 손실 없이 이미지를 PDF 페이지로 변환합니다.`,
        "브라우저에서만 처리되므로 파일이 기기를 떠나지 않습니다.",
      ],
      advantages: [
        "여백 없음. 페이지 크기 = 이미지 크기.",
        "100% 종횡비 유지.",
        "클라이언트 전용 처리.",
        "여러 파일을 하나의 PDF로 일괄 결합.",
      ],
      useCases: [
        "여러 스크린샷·사진을 하나의 공유용 PDF로 묶을 때.",
        "제출·보고용으로 스캔 이미지를 패키징할 때.",
        "클라이언트 검토용 디자인 컴프를 하나의 PDF로 보낼 때.",
        "사진 세트를 단일 문서로 아카이브할 때.",
      ],
      faq: [
        { question: `이 페이지에서 ${displayName}→PDF 변환기는 어떻게 사용하나요?`, answer: "원본 파일을 업로드하고 순서를 확인한 뒤 변환하고 생성된 PDF를 받으세요." },
        { question: `이 도구는 브라우저에서 ${displayName}을 PDF로 어떻게 변환하나요?`, answer: "파일이 브라우저 런타임에서 디코딩·PDF 페이지로 조립되며 서버 측 변환은 없습니다." },
        { question: `${displayName}→PDF에 대해 알아야 할 점과 적합한 경우는?`, answer: "입력 형식이 고정되어 있고 형식별 예측 가능한 변환 동작이 필요할 때 사용하세요." },
        { question: `공유·보관을 위해 ${displayName} 파일을 PDF로 변환하는 경우는?`, answer: "제출, 문서 묶음, 장기 보관용 패키징 워크플로에서 흔히 사용합니다." },
      ],
    };
  }
  return {
    guideIntro: `Use this page when your files are already in ${displayName} and you want a quick PDF output with local processing.`,
    s1: `1. How can I use this ${displayName} to PDF converter on this page?`,
    s2: `2. How does this tool convert ${displayName} to PDF in my browser?`,
    s3: `3. What should I know about ${displayName} to PDF, and when is it the right choice?`,
    s4: `4. Why convert ${displayName} to PDF in the browser for privacy and speed?`,
    s5: `5. When do people convert ${displayName} files to PDF for sharing or archiving?`,
    usage: [
      `Upload ${displayName} images via drag-and-drop or click to browse. Multiple files are combined into one PDF in the order you add them.`,
      "Review the file list. Remove individual files or clear all to start over.",
      "Click Convert to PDF. Each image becomes a separate PDF page sized to its dimensions—no white margins, no aspect ratio distortion.",
      "Download the generated PDF. Reset to run another batch.",
    ],
    howItWorks: [
      `Each ${displayName} is decoded in the browser to obtain width and height. pdf-lib creates a page with those exact dimensions.`,
      "The image is embedded at (0, 0) with width and height matching the page. No forced stretching or cropping.",
      "Multiple images produce a multi-page PDF in upload order with varying page sizes.",
      "All processing runs locally—no server upload.",
    ],
    about: [
      `${displayName} to PDF converts images to PDF with no layout compromises. Each image gets its own page sized to fit exactly.`,
      "All processing happens in your browser—no server upload.",
    ],
    advantages: [
      "Zero white margins. Page size = image size.",
      "100% aspect ratio preservation.",
      "Client-side only. Your images never leave your device.",
      "Batch combine multiple files into one PDF.",
    ],
    useCases: [
      "Combine screenshots or photos into one shareable PDF.",
      "Bundle scans for submissions or reports.",
      "Package design comps for client review.",
      "Archive photo sets as one document.",
    ],
    faq: [
      { question: `How can I use this ${displayName} to PDF converter on this page?`, answer: "Upload source files, review order, convert, and download the generated PDF." },
      { question: `How does this tool convert ${displayName} to PDF in my browser?`, answer: "The file is decoded and assembled into PDF pages in browser runtime without server-side conversion." },
      { question: `What should I know about ${displayName} to PDF, and when is it the right choice?`, answer: "Use it when your input format is fixed and you want predictable format-specific conversion behavior." },
      { question: `When do people convert ${displayName} files to PDF for sharing or archiving?`, answer: "It is common for submissions, documentation bundles, and long-term file packaging workflows." },
    ],
  };
}

const FORMAT_GUIDE_OVERRIDES = {
  heic: {
    en: {
      howItWorks: [
        "HEIC/HEIF is decoded with heic2any in your browser (same pipeline as HEIC to JPG). Output is rasterized at full quality before embedding.",
        "createImageBitmap applies EXIF orientation so photos appear upright in the PDF.",
        "pdf-lib embeds pixels via PNG for PDF compatibility. Page dimensions match the oriented image.",
        "All processing runs locally—no server upload.",
      ],
      about: [
        "HEIC to PDF turns Apple's default photo format into a single shareable PDF. Useful for emailing albums or opening on Windows without extra codecs.",
        "HEIF container files (.heif) are accepted alongside .heic. Everything stays on your device.",
      ],
      useCases: [
        "iPhone photos: Combine vacation shots into one PDF for email or printing.",
        "Cross-platform sharing: Recipients can open PDF on any OS without HEIC support.",
        "Workflow: Turn AirDropped HEIC files into a single attachment.",
        "Archiving: Package HEIC collections as one portable document.",
      ],
    },
    ko: {
      howItWorks: [
        "HEIC/HEIF는 브라우저에서 heic2any로 디코딩됩니다(HEIC→JPG와 동일 파이프라인). 삽입 전 전체 품질로 래스터화됩니다.",
        "createImageBitmap이 EXIF 방향을 적용해 사진이 PDF에서 올바르게 표시됩니다.",
        "pdf-lib가 PNG로 픽셀을 삽입합니다. 페이지 크기는 방향이 적용된 이미지와 일치합니다.",
        "모든 처리가 로컬에서 이루어지며 서버 업로드는 없습니다.",
      ],
      about: [
        "HEIC→PDF는 Apple 기본 사진 형식을 하나의 공유 가능한 PDF로 바꿉니다. 이메일 앨범이나 Windows 공유에 유용합니다.",
        ".heif 컨테이너와 .heic 모두 받습니다. 모든 파일이 기기에만 남습니다.",
      ],
      useCases: [
        "iPhone 사진: 여행 사진을 이메일·인쇄용 PDF 하나로 합칠 때.",
        "크로스 플랫폼 공유: HEIC 코덱 없이 PDF를 열 수 있습니다.",
        "AirDrop HEIC를 하나의 첨부로 묶을 때.",
        "HEIC 컬렉션을 휴대용 문서 하나로 아카이브할 때.",
      ],
    },
  },
  heif: {
    en: {
      about: [
        "HEIF is the ISO container format; HEIC is Apple's common extension for HEIF still images. This tool handles both .heif and .heic with the same behavior as HEIC to PDF.",
        "Use this page when your files are primarily HEIF-labeled.",
      ],
    },
    ko: {
      about: [
        "HEIF는 ISO 컨테이너 형식이고, HEIC는 Apple의 일반적인 HEIF 정지 이미지 확장자입니다. .heif와 .heic 모두 HEIC→PDF와 동일하게 처리됩니다.",
        "파일이 주로 HEIF로 표기될 때 이 페이지를 사용하세요.",
      ],
    },
  },
  tiff: {
    en: {
      usage: [
        "Upload TIFF or TIF files via drag-and-drop or click to browse. Multiple files are combined into one PDF in upload order.",
        "For multi-page TIFFs, the primary image (largest frame) is used for that file's PDF page.",
        "Review the file list. Remove unwanted files or clear all before converting.",
        "Click Convert to PDF. Each decoded image becomes a PDF page sized to its dimensions.",
        "Download the generated PDF. Reset to start over.",
      ],
      howItWorks: [
        "TIFF is decoded with UTIF in your browser (same stack as TIFF to JPG). The largest displayable IFD is chosen when multiple sub-images exist.",
        "Decoded RGBA pixels are drawn to a canvas; pdf-lib embeds them via PNG.",
        "If UTIF cannot decode a file, the tool falls back to native browser TIFF rendering when available.",
        "All processing runs locally—no server upload.",
      ],
      about: [
        "TIFF to PDF converts .tif / .tiff without forcing A4 paper. Each source file yields at least one PDF page sized to the decoded bitmap.",
        "Common for scans, print workflows, and archival photography.",
      ],
      useCases: [
        "Scanned documents: Combine TIFF scans into one PDF.",
        "Photography: Package archival TIFF exports for sharing as PDF.",
        "Print prep: Merge TIFF proofs into a single review document.",
        "Archiving: Turn a folder of TIFFs into one portable PDF.",
      ],
    },
    ko: {
      usage: [
        "TIFF 또는 TIF 파일을 드래그 앤 드롭하거나 클릭하여 업로드하세요. 여러 파일이 업로드 순서대로 하나의 PDF로 합쳐집니다.",
        "다중 페이지 TIFF는 해당 파일의 PDF 페이지에 가장 큰 프레임이 사용됩니다.",
        "파일 목록을 확인하고 불필요한 파일을 제거하거나 전체 초기화하세요.",
        "PDF로 변환을 클릭하세요. 디코딩된 각 이미지가 원본 크기에 맞는 PDF 페이지가 됩니다.",
        "생성된 PDF를 다운로드하세요. 초기화 후 다시 시작할 수 있습니다.",
      ],
      howItWorks: [
        "TIFF는 브라우저에서 UTIF로 디코딩됩니다(TIFF→JPG와 동일 스택). 여러 서브 이미지가 있으면 가장 큰 IFD를 선택합니다.",
        "디코딩된 RGBA 픽셀을 캔버스에 그린 뒤 pdf-lib가 PNG로 삽입합니다.",
        "UTIF 디코딩이 실패하면 브라우저 네이티브 TIFF 렌더링으로 대체합니다(지원 시).",
        "모든 처리가 로컬에서 이루어지며 서버 업로드는 없습니다.",
      ],
      about: [
        "TIFF→PDF는 A4 용지를 강제하지 않습니다. 각 원본 파일은 디코딩된 비트맵 크기에 맞는 최소 1페이지를 만듭니다.",
        "스캔, 인쇄 워크플로, 아카이브 사진에 흔히 사용됩니다.",
      ],
      useCases: [
        "스캔 문서: TIFF 스캔을 하나의 PDF로 합칠 때.",
        "사진: 아카이브 TIFF를 PDF로 공유할 때.",
        "인쇄 준비: TIFF 교정본을 하나의 검토 문서로 병합할 때.",
        "아카이브: TIFF 폴더를 휴대용 PDF 하나로 변환할 때.",
      ],
    },
  },
  png: {
    en: { about: ["PNG to PDF preserves transparency where supported by PDF. Ideal for screenshots, logos, and design assets."] },
    ko: { about: ["PNG→PDF는 PDF에서 지원되는 범위에서 투명도를 유지합니다. 스크린샷, 로고, 디자인 자산에 적합합니다."] },
  },
};

function buildFormatEntry(locale, slug) {
  const isKo = locale === "ko";
  const meta = isKo ? FORMAT_META_KO[slug] : FORMAT_META_EN[slug];
  const base = buildRasterGuide(locale, meta.displayName);
  const overrides = FORMAT_GUIDE_OVERRIDES[slug]?.[locale] ?? {};
  const guide = { ...base, ...overrides };
  const toPdf = isKo ? `${meta.displayName}→PDF` : `${meta.displayName} to PDF`;
  return {
    h1: toPdf,
    subtitle: isKo
      ? `브라우저에서 온라인 ${meta.displayName}→PDF 변환`
      : `Online ${meta.displayName} to PDF converter in browser`,
    metaDescription: meta.description,
    displayName: meta.displayName,
    guideTitle: isKo ? `${meta.displayName}→PDF 가이드` : `${meta.displayName} to PDF Guide`,
    guideIntro: guide.guideIntro,
    sections: sectionsFromGuide(guide),
    faq: guide.faq,
    backToHub: isKo ? "← PDF 변환기로" : "← Back to PDF Converter",
  };
}

function buildHub(locale) {
  const isKo = locale === "ko";
  if (isKo) {
    return {
      h1: "PDF 변환기",
      subtitle: "이미지 형식용 온라인 PDF 변환기",
      metaDescription: "무료 온라인 PDF 변환기. JPG, HEIC, PNG, WEBP, AVIF, BMP, TIFF를 PDF로 변환합니다. 업로드 없이 브라우저에서 처리합니다.",
      intro: "브라우저에서 형식별 이미지 배치를 하나의 PDF로 변환합니다. 업로드부터 다운로드까지 빠른 흐름을 제공합니다.",
      introNote: "로컬 처리, 가입 불필요, 서버 측 변환 업로드 없음.",
      mixedFormatsTitle: "혼합 형식이 필요하신가요?",
      mixedFormatsBefore: "JPG, PNG, HEIC 등",
      mixedFormatsEmphasis: "여러 이미지 형식",
      mixedFormatsAfter: "을(를) 한 번에 올리려면",
      mixedFormatsAfterLink: "을(를) 사용하세요.",
      guideTitle: "PDF 변환기 가이드",
      guideIntro: "원본 형식에 맞는 변환기 페이지를 선택하세요. 혼합 형식은 이미지→PDF를 사용하세요.",
      sections: sectionsFromGuide({
        s1: "1. 이 허브에서 Office 또는 이미지 파일을 PDF로 변환하려면?",
        s2: "2. 이 사이트의 클라이언트 측 PDF 변환은 어떻게 동작하나요?",
        s3: "3. 여기에 연결된 PDF 변환 옵션과 선택 방법은?",
        s4: "4. 프라이버시와 빠른 일괄 처리를 위해 브라우저 PDF 변환을 쓰는 이유는?",
        s5: "5. 범용 앱 대신 형식별 변환기를 열어야 하는 경우는?",
        usage: [
          "원본 형식에 맞는 변환기 페이지를 여세요(JPG, HEIC, PNG, WEBP, AVIF, BMP, TIFF).",
          "이미지 1개 이상을 업로드하고 파일 순서를 확인하세요.",
          "PDF 생성 전에 불필요한 파일을 제거하세요.",
          "변환 후 출력 문서를 받으세요.",
          "필요 시 초기화 후 다른 배치를 실행하세요.",
        ],
        howItWorks: [
          "각 원본 이미지는 브라우저 메모리에서 디코딩되어 PDF 페이지로 삽입됩니다.",
          "페이지 크기는 강제 늘리기 없이 이미지 크기를 따릅니다.",
          "파일은 업로드 순서대로 하나의 출력 문서로 병합됩니다.",
          "변환 업로드는 백엔드 서버로 전송되지 않습니다.",
        ],
        about: [
          "PDF 변환기는 형식별 이미지 배치를 하나의 PDF로 바꾸기 위한 도구입니다.",
          "업로드, 순서 변경, 변환, 다운로드의 단순한 흐름을 유지합니다.",
          "범용 문서 도구보다 명확한 제어가 필요할 때 사용하세요.",
        ],
        advantages: [
          "브라우저 로컬 PDF 변환.",
          "형식별 업로드 필터.",
          "이미지=페이지 레이아웃 처리.",
          "빠른 다중 파일 워크플로.",
          "가입 불필요.",
        ],
        useCases: [
          "여러 스크린샷에서 PDF 하나 만들기.",
          "제출용 스캔 이미지 묶기.",
          "클라이언트 검토용 디자인 PDF 준비.",
          "사진 세트를 하나의 문서로 아카이브.",
        ],
      }),
      faq: [
        { question: "이 허브에서 Office 또는 이미지 파일을 PDF로 변환하려면?", answer: "맞는 형식 페이지를 선택하고, 파일을 업로드한 뒤 변환하고 생성된 PDF를 받으세요." },
        { question: "이 사이트의 클라이언트 측 PDF 변환은 어떻게 동작하나요?", answer: "원본 파일이 브라우저 런타임에서 디코딩·PDF 페이지로 조립되며 서버 측 처리는 없습니다." },
        { question: "여기에 연결된 PDF 변환 옵션과 선택 방법은?", answer: "JPG, HEIC, PNG, WEBP, AVIF, BMP, TIFF 등 입력 형식에 맞는 페이지를 고르면 올바른 업로드 필터와 옵션을 쓸 수 있습니다." },
        { question: "범용 앱 대신 형식별 변환기를 열어야 하는 경우는?", answer: "원본 파일에 전용 디코딩 동작과 예측 가능한 기본값이 필요할 때 형식별 페이지를 사용하세요." },
      ],
      backToHome: "← 홈으로",
    };
  }
  return {
    h1: "PDF Converter",
    subtitle: "Online PDF converter for image formats",
    metaDescription: "Free online PDF converter. Turn JPG, HEIC, PNG, WEBP, AVIF, BMP, and TIFF into PDFs in your browser. No upload—local processing.",
    intro: "Convert format-specific image batches into one PDF in browser with a quick upload-to-download flow.",
    introNote: "Local processing, no signup, and no server-side conversion upload.",
    mixedFormatsTitle: "Prefer mixed formats?",
    mixedFormatsBefore: "If you want",
    mixedFormatsEmphasis: "any image formats",
    mixedFormatsAfter: "in one upload (mixed batch), use",
    mixedFormatsAfterLink: ".",
    guideTitle: "PDF Converter Guide",
    guideIntro: "Pick the converter page for your source format. For mixed formats, use Image to PDF under PDF Tools.",
    sections: sectionsFromGuide({
      s1: "1. How do I convert Office or image files to PDF from this hub?",
      s2: "2. How does client-side PDF conversion work on this site?",
      s3: "3. What PDF conversion options are linked here, and how do I pick one?",
      s4: "4. Why use browser-based PDF conversion for privacy and quick batches?",
      s5: "5. When should I open a format-specific converter instead of a generic app?",
      usage: [
        "Open the converter page for your source format (JPG, HEIC, PNG, WEBP, AVIF, BMP, or TIFF).",
        "Upload one or more images and check file order.",
        "Remove unwanted files before generating the PDF.",
        "Convert and download the output document.",
        "Reset and run another batch when needed.",
      ],
      howItWorks: [
        "Each source image is decoded and inserted as a PDF page in browser memory.",
        "Page dimensions follow image dimensions to avoid forced stretching.",
        "Files are merged in upload order into a single output document.",
        "No conversion upload is sent to a backend server.",
      ],
      about: [
        "PDF Converter is for turning format-specific image batches into one PDF.",
        "It keeps a simple flow: upload, reorder, convert, download.",
        "Use it when you want cleaner control than generic document tools.",
      ],
      advantages: [
        "Browser-local PDF conversion.",
        "Format-specific upload filters.",
        "Image-as-page layout handling.",
        "Quick multi-file workflow.",
        "No signup required.",
      ],
      useCases: [
        "Create one PDF from many screenshots.",
        "Bundle scanned images for submissions.",
        "Prepare client-ready design review PDFs.",
        "Archive photo sets as one document.",
      ],
    }),
    faq: [
      { question: "How do I convert Office or image files to PDF from this hub?", answer: "Choose the matching format page, upload files, convert, and download the generated PDF." },
      { question: "How does client-side PDF conversion work on this site?", answer: "Source files are decoded and assembled into PDF pages in browser runtime without server-side processing." },
      { question: "What PDF conversion options are linked here, and how do I pick one?", answer: "Pick by input format such as JPG, HEIC, PNG, WEBP, AVIF, BMP, or TIFF to get the correct upload filter and options." },
      { question: "When should I open a format-specific converter instead of a generic app?", answer: "Use format-specific pages when your source files need dedicated decoding behavior and predictable conversion defaults." },
    ],
    backToHome: "← Back to home",
  };
}

const pdfConverterEn = { "pdf-converter": buildHub("en") };
const pdfConverterKo = { "pdf-converter": buildHub("ko") };

for (const slug of FORMATS) {
  pdfConverterEn[`pdf-converter.${slug}`] = buildFormatEntry("en", slug);
  pdfConverterKo[`pdf-converter.${slug}`] = buildFormatEntry("ko", slug);
}

const root = process.cwd();
fs.writeFileSync(
  path.join(root, "scripts", "pdf-converter-en-data.mjs"),
  `export const pdfConverterEn = ${JSON.stringify(pdfConverterEn, null, 2)};\n`
);
fs.writeFileSync(
  path.join(root, "scripts", "pdf-converter-ko-data.mjs"),
  `export const pdfConverterKo = ${JSON.stringify(pdfConverterKo, null, 2)};\n`
);
console.log("Generated pdf-converter-en-data.mjs, pdf-converter-ko-data.mjs");
