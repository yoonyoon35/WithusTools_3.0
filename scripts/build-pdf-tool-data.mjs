/**
 * PDF Tools hub + 하위 페이지 toolContent 데이터 생성
 * 실행: node scripts/build-pdf-tool-data.mjs
 */
import fs from "node:fs";
import path from "node:path";

function sectionsFromGuide(guide, locale) {
  const isKo = locale === "ko";
  const ordered = (title, items) => ({ title, type: "ordered", items });
  const paragraphs = (title, items) => ({ title, type: "paragraphs", items });
  const unordered = (title, items) => ({ title, type: "unordered", items });
  return [
    ordered(guide.s1, guide.usage),
    paragraphs(guide.s2, guide.howItWorks),
    paragraphs(guide.s3, guide.about),
    unordered(guide.s4, guide.advantages),
    unordered(guide.s5, guide.useCases),
  ];
}

const HUB_EN = {
  h1: "PDF Tools",
  subtitle: "Online PDF tools for conversion and merging",
  metaDescription: "Free online PDF tools. Convert images to PDF, merge PDF files, and use format-specific converters—all in your browser with no upload.",
  intro: "Create PDFs from images or merge existing PDFs in browser. Good for quick document assembly without extra software.",
  guideTitle: "PDF Tools Guide",
  guideIntro: "Use Image to PDF for mixed photos/screenshots, Merge PDF for joining existing documents, and PDF Converter for format-focused flows.",
  s1: "1. How do I merge PDFs or turn images into PDFs from this page?",
  s2: "2. How do PDF tools handle files entirely in the browser?",
  s3: "3. What PDF utilities are included, and what are their practical limits?",
  s4: "4. Why choose in-browser PDF tools for quick one-off document tasks?",
  s5: "5. When is merging or converting PDFs online faster than desktop software?",
  usage: [
    "Pick Image to PDF, Merge PDF, or a format-specific PDF converter.",
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
  faq: [
    { question: "How do I merge PDFs or turn images into PDFs from this page?", answer: "Choose the right PDF tool, upload files, set options, then generate and download the result." },
    { question: "How do PDF tools handle files entirely in the browser?", answer: "Files are parsed and processed in browser runtime, so conversion and merging happen locally on your device." },
    { question: "What PDF utilities are included, and what are their practical limits?", answer: "You can convert images to PDF, merge PDF files, and use format-specific converters, but very large files depend on local device memory." },
    { question: "When is merging or converting PDFs online faster than desktop software?", answer: "It is faster for one-off document tasks when you need immediate output without installing additional tools." },
  ],
  backToHome: "← Back to home",
};

const HUB_KO = {
  h1: "PDF 도구",
  subtitle: "변환·병합을 위한 온라인 PDF 도구",
  metaDescription: "무료 온라인 PDF 도구. 이미지를 PDF로 변환하고, PDF를 병합하며, 형식별 변환기를 사용합니다. 업로드 없이 브라우저에서 처리합니다.",
  intro: "브라우저에서 이미지로 PDF를 만들거나 기존 PDF를 병합합니다. 별도 소프트웨어 없이 빠르게 문서를 조립할 때 적합합니다.",
  guideTitle: "PDF 도구 가이드",
  guideIntro: "혼합 사진·스크린샷은 이미지→PDF, 기존 문서 결합은 PDF 병합, 형식별 흐름은 PDF 변환기를 사용하세요.",
  s1: "1. 이 페이지에서 PDF를 병합하거나 이미지를 PDF로 바꾸려면?",
  s2: "2. PDF 도구는 브라우저에서만 파일을 어떻게 처리하나요?",
  s3: "3. 어떤 PDF 유틸리티가 포함되며, 실용적인 한계는?",
  s4: "4. 빠른 일회성 문서 작업에 브라우저 PDF 도구를 쓰는 이유는?",
  s5: "5. 데스크톱 소프트웨어보다 온라인 PDF 병합·변환이 빠른 경우는?",
  usage: [
    "이미지→PDF, PDF 병합, 또는 형식별 PDF 변환기를 선택하세요.",
    "파일을 올리고 순서를 확인한 뒤 불필요한 항목을 제거하세요.",
    "이미지→PDF 변환 시 페이지 레이아웃 옵션을 선택하세요.",
    "변환/병합을 실행하고 결과를 받으세요.",
    "초기화 후 새 파일로 반복하세요.",
  ],
  howItWorks: [
    "PDF 도구는 파일을 로컬에서 디코딩하고 브라우저 메모리에서 출력 문서를 만듭니다.",
    "이미지→PDF는 이미지 디코더와 페이지 삽입용 PDF 생성 로직을 사용합니다.",
    "PDF 병합은 여러 원본 PDF의 페이지를 하나의 순서로 복사합니다.",
    "레이아웃 옵션은 이미지 기반 페이지의 크기 조절과 여백을 제어합니다.",
  ],
  about: [
    "PDF 도구는 PDF 파일을 빠르게 만들고 합치는 브라우저 기반 도구 모음입니다.",
    "혼합 이미지 일괄 처리, PDF 병합, 형식별 변환 경로를 제공합니다.",
    "가입이나 변환 서버 업로드가 필요 없습니다.",
  ],
  advantages: [
    "클라이언트 측 처리.",
    "혼합 형식 이미지 지원.",
    "유연한 페이지 레이아웃 옵션.",
    "빠른 일회성 워크플로.",
  ],
  useCases: [
    "사진과 스크린샷을 하나의 PDF 보고서로 묶을 때.",
    "이메일 제출 전에 별도 PDF를 병합할 때.",
    "이미지 폴더에서 인쇄용 문서를 준비할 때.",
  ],
  faq: [
    { question: "이 페이지에서 PDF를 병합하거나 이미지를 PDF로 바꾸려면?", answer: "적합한 PDF 도구를 선택하고, 파일을 업로드한 뒤 옵션을 설정하고 결과를 생성·다운로드하세요." },
    { question: "PDF 도구는 브라우저에서만 파일을 어떻게 처리하나요?", answer: "파일이 브라우저 런타임에서 파싱·처리되므로 변환과 병합이 기기에서 로컬로 이루어집니다." },
    { question: "어떤 PDF 유틸리티가 포함되며, 실용적인 한계는?", answer: "이미지→PDF, PDF 병합, 형식별 변환기를 사용할 수 있으나, 매우 큰 파일은 기기 메모리에 따라 달라집니다." },
    { question: "데스크톱 소프트웨어보다 온라인 PDF 병합·변환이 빠른 경우는?", answer: "추가 도구 설치 없이 즉시 결과가 필요한 일회성 문서 작업에서 더 빠릅니다." },
  ],
  backToHome: "← 홈으로",
};

const MERGE_EN = {
  h1: "Merge PDF",
  subtitle: "Online PDF merger in browser",
  metaDescription: "Free online PDF merger. Combine multiple PDF files into one document in your browser. No upload—files stay on your device.",
  intro: "Combine multiple PDFs into one file quickly with local browser processing.",
  guideTitle: "Merge PDF Guide",
  s1: "1. How can I merge multiple PDFs into one file on this page?",
  s2: "2. How does this tool combine PDFs locally in my browser?",
  s3: "3. What is this merge PDF tool for, and what are its practical limits?",
  s4: "4. Why merge PDFs in the browser instead of installing desktop software?",
  s5: "5. When do people combine PDFs for work, school, or official filings?",
  usage: ["Upload two or more PDF files.", "Reorder files if needed.", "Run merge and download the combined PDF.", "Reset when you want to start a new set."],
  howItWorks: [
    "Each PDF is parsed in browser memory.",
    "Pages are copied into a new output document in list order.",
    "Encrypted or damaged files may fail and should be removed before retrying.",
  ],
  about: [
    "Merge PDF combines separate documents into one file for easier sharing.",
    "It is useful for submissions, reports, and invoice bundles.",
  ],
  advantages: ["Client-side PDF merge.", "Fast local processing.", "Simple file order control."],
  useCases: [
    "Combine invoice PDFs before sending.",
    "Merge scans into one submission file.",
    "Bundle exported reports into one attachment.",
  ],
  faq: [
    { question: "How can I merge multiple PDFs into one file on this page?", answer: "Upload files, arrange order, run merge, and download the combined PDF." },
    { question: "How does this tool combine PDFs locally in my browser?", answer: "It reads source PDFs in browser memory and copies their pages into one output file." },
    { question: "What is this merge PDF tool for, and what are its practical limits?", answer: "It is for fast document bundling; encrypted or broken PDFs may fail and should be removed." },
    { question: "When do people combine PDFs for work, school, or official filings?", answer: "People merge PDFs for submissions, invoice bundles, report packets, and archive handoff." },
  ],
  backToHub: "← Back to PDF Tools",
};

const MERGE_KO = {
  h1: "PDF 병합",
  subtitle: "브라우저에서 온라인 PDF 병합",
  metaDescription: "무료 온라인 PDF 병합기. 여러 PDF를 브라우저에서 하나의 문서로 합칩니다. 업로드 없이 기기에만 파일이 남습니다.",
  intro: "로컬 브라우저 처리로 여러 PDF를 빠르게 하나의 파일로 합칩니다.",
  guideTitle: "PDF 병합 가이드",
  s1: "1. 이 페이지에서 여러 PDF를 하나로 병합하려면?",
  s2: "2. 이 도구는 브라우저에서 PDF를 로컬로 어떻게 합치나요?",
  s3: "3. 이 PDF 병합 도구의 용도와 실용적인 한계는?",
  s4: "4. 데스크톱 소프트웨어 대신 브라우저에서 PDF를 병합하는 이유는?",
  s5: "5. 업무·학교·공식 제출을 위해 PDF를 합치는 경우는?",
  usage: ["PDF 파일 2개 이상을 업로드하세요.", "필요하면 파일 순서를 바꾸세요.", "병합을 실행하고 합쳐진 PDF를 받으세요.", "새 작업을 시작하려면 초기화하세요."],
  howItWorks: [
    "각 PDF는 브라우저 메모리에서 파싱됩니다.",
    "페이지가 목록 순서대로 새 출력 문서에 복사됩니다.",
    "암호화되거나 손상된 파일은 실패할 수 있으므로 재시도 전에 제거하세요.",
  ],
  about: [
    "PDF 병합은 여러 문서를 하나로 묶어 공유를 쉽게 합니다.",
    "제출, 보고서, 인보이스 묶음에 유용합니다.",
  ],
  advantages: ["클라이언트 측 PDF 병합.", "빠른 로컬 처리.", "간단한 파일 순서 제어."],
  useCases: [
    "보내기 전에 인보이스 PDF를 합칠 때.",
    "스캔을 하나의 제출 파일로 병합할 때.",
    "보낸 보고서를 하나의 첨부로 묶을 때.",
  ],
  faq: [
    { question: "이 페이지에서 여러 PDF를 하나로 병합하려면?", answer: "파일을 업로드하고 순서를 정한 뒤 병합을 실행하고 합쳐진 PDF를 받으세요." },
    { question: "이 도구는 브라우저에서 PDF를 로컬로 어떻게 합치나요?", answer: "원본 PDF를 브라우저 메모리에서 읽고 페이지를 하나의 출력 파일로 복사합니다." },
    { question: "이 PDF 병합 도구의 용도와 실용적인 한계는?", answer: "빠른 문서 묶음용입니다. 암호화·손상 PDF는 실패할 수 있으니 제거 후 다시 시도하세요." },
    { question: "업무·학교·공식 제출을 위해 PDF를 합치는 경우는?", answer: "제출, 인보이스 묶음, 보고서 패키지, 아카이브 전달 등에 PDF를 병합합니다." },
  ],
  backToHub: "← PDF 도구로",
};

const IMAGE_TO_PDF_EN = {
  h1: "Image to PDF",
  subtitle: "Online image-to-PDF converter in browser",
  metaDescription: "Free image to PDF converter. Combine JPG, PNG, HEIC, WEBP, TIFF, and more into one PDF. Fit-to-image or A4 layout. No upload.",
  intro: "Combine mixed image files into one PDF quickly, with local browser processing.",
  guideTitle: "Image to PDF Guide",
  converterLinksTitle: "PDF Converter format pages",
  converterLinksIntro: "Need a format-specific flow? Open any converter below:",
  s1: "1. How can I turn images into a single or multi-page PDF here?",
  s2: "2. How does image-to-PDF conversion run locally in my browser?",
  s3: "3. What image formats and page options does this Image to PDF tool support?",
  s4: "4. Why build a PDF from images online for privacy and quick batches?",
  s5: "5. When is converting photos or scans to PDF most useful?",
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
  advantages: ["Mixed-format image support.", "Flexible Fit or A4 layout.", "Browser-local processing."],
  useCases: [
    "Combine phone photos and screenshots into one report PDF.",
    "Bundle scanned pages for a single upload or email.",
  ],
  faq: [
    { question: "How can I turn images into a single or multi-page PDF here?", answer: "Upload one or more images, choose layout mode, convert, and download the PDF." },
    { question: "How does image-to-PDF conversion run locally in my browser?", answer: "Images are decoded and embedded into a PDF in browser runtime without server-side file processing." },
    { question: "What image formats and page options does this Image to PDF tool support?", answer: "It supports mixed image formats and offers fit-to-image or A4 page layout options." },
    { question: "When is converting photos or scans to PDF most useful?", answer: "It is useful for document submission, report building, and sharing grouped image evidence." },
  ],
  backToHub: "← Back to PDF Tools",
  relatedLinks: [
    { href: "/tools/pdf-converter/jpg", question: "JPG to PDF" },
    { href: "/tools/pdf-converter/heic", question: "HEIC to PDF" },
    { href: "/tools/pdf-converter/heif", question: "HEIF to PDF" },
    { href: "/tools/pdf-converter/png", question: "PNG to PDF" },
    { href: "/tools/pdf-converter/webp", question: "WEBP to PDF" },
    { href: "/tools/pdf-converter/avif", question: "AVIF to PDF" },
    { href: "/tools/pdf-converter/bmp", question: "BMP to PDF" },
    { href: "/tools/pdf-converter/tiff", question: "TIFF to PDF" },
  ],
};

const IMAGE_TO_PDF_KO = {
  h1: "이미지→PDF",
  subtitle: "브라우저에서 온라인 이미지→PDF 변환",
  metaDescription: "무료 이미지→PDF 변환기. JPG, PNG, HEIC, WEBP, TIFF 등을 하나의 PDF로 합칩니다. 이미지 맞춤 또는 A4 레이아웃. 업로드 없음.",
  intro: "로컬 브라우저 처리로 혼합 이미지 파일을 빠르게 하나의 PDF로 합칩니다.",
  guideTitle: "이미지→PDF 가이드",
  converterLinksTitle: "PDF 변환기 형식 페이지",
  converterLinksIntro: "형식별 흐름이 필요하면 아래 변환기를 여세요:",
  s1: "1. 이 페이지에서 이미지를 단일·다중 페이지 PDF로 바꾸려면?",
  s2: "2. 이미지→PDF 변환은 브라우저에서 로컬로 어떻게 동작하나요?",
  s3: "3. 이 이미지→PDF 도구가 지원하는 형식과 페이지 옵션은?",
  s4: "4. 프라이버시와 빠른 일괄 처리를 위해 온라인으로 이미지 PDF를 만드는 이유는?",
  s5: "5. 사진·스캔을 PDF로 변환하는 것이 가장 유용한 경우는?",
  usage: [
    "이미지 1개 이상을 업로드하세요(혼합 형식 가능).",
    "변환 전에 불필요한 파일을 제거하세요.",
    "이미지 맞춤 또는 A4 레이아웃을 선택하세요.",
    "변환 후 생성된 PDF를 받으세요.",
  ],
  howItWorks: [
    "이미지 파일은 로컬에서 디코딩되어 순서대로 PDF 페이지로 삽입됩니다.",
    "필요 시 형식별 디코더를 사용합니다(예: HEIC, TIFF).",
    "페이지 순서는 파일 목록 순서를 따릅니다.",
  ],
  about: [
    "이미지→PDF는 여러 이미지에서 하나의 문서가 필요할 때 가장 빠른 경로입니다.",
    "원본 파일 디코딩에 실패하면 먼저 변환한 뒤 다시 추가하세요.",
  ],
  advantages: ["혼합 형식 이미지 지원.", "이미지 맞춤 또는 A4 레이아웃.", "브라우저 로컬 처리."],
  useCases: [
    "휴대폰 사진과 스크린샷을 하나의 보고서 PDF로 합칠 때.",
    "스캔 페이지를 한 번에 업로드·이메일하기 위해 묶을 때.",
  ],
  faq: [
    { question: "이 페이지에서 이미지를 단일·다중 페이지 PDF로 바꾸려면?", answer: "이미지를 업로드하고 레이아웃 모드를 선택한 뒤 변환하고 PDF를 받으세요." },
    { question: "이미지→PDF 변환은 브라우저에서 로컬로 어떻게 동작하나요?", answer: "이미지가 브라우저 런타임에서 디코딩·PDF에 삽입되며 서버 측 파일 처리는 없습니다." },
    { question: "이 이미지→PDF 도구가 지원하는 형식과 페이지 옵션은?", answer: "혼합 이미지 형식을 지원하며 이미지 맞춤 또는 A4 페이지 레이아웃을 제공합니다." },
    { question: "사진·스캔을 PDF로 변환하는 것이 가장 유용한 경우는?", answer: "문서 제출, 보고서 작성, 그룹 이미지 증빙 공유에 유용합니다." },
  ],
  backToHub: "← PDF 도구로",
  relatedLinks: [
    { href: "/tools/pdf-converter/jpg", question: "JPG→PDF" },
    { href: "/tools/pdf-converter/heic", question: "HEIC→PDF" },
    { href: "/tools/pdf-converter/heif", question: "HEIF→PDF" },
    { href: "/tools/pdf-converter/png", question: "PNG→PDF" },
    { href: "/tools/pdf-converter/webp", question: "WEBP→PDF" },
    { href: "/tools/pdf-converter/avif", question: "AVIF→PDF" },
    { href: "/tools/pdf-converter/bmp", question: "BMP→PDF" },
    { href: "/tools/pdf-converter/tiff", question: "TIFF→PDF" },
  ],
};

function buildEntry(raw, locale) {
  const { s1, s2, s3, s4, s5, usage, howItWorks, about, advantages, useCases, relatedLinks, converterLinksTitle, converterLinksIntro, ...rest } = raw;
  const entry = {
    ...rest,
    sections: sectionsFromGuide({ s1, s2, s3, s4, s5, usage, howItWorks, about, advantages, useCases }, locale),
    faq: raw.faq,
  };
  if (relatedLinks) entry.relatedLinks = relatedLinks;
  if (converterLinksTitle) entry.converterLinksTitle = converterLinksTitle;
  if (converterLinksIntro) entry.converterLinksIntro = converterLinksIntro;
  return entry;
}

const pdfUiEn = {
  mergePdf: {
    privacyBanner: "All processing runs in your browser. Files never leave your device.",
    uploadTitle: "Upload Files",
    dropHint: "Drop PDF files here or click to upload",
    supportsMultiple: "Supports multiple files",
    uploadedFiles: "Uploaded files ({n})",
    previewOf: "Preview of {name}",
    moveUp: "Move up",
    moveDown: "Move down",
    remove: "Remove",
    mergeButton: "Merge PDFs",
    merging: "Merging...",
    reset: "Reset",
    add: "Add",
    mergingProgress: "Merging... {current} of {total}",
    filesSelected: "{n} file(s) selected · {size} MB total",
    mergeSuccessTitle: "PDFs merged successfully",
    downloadPdf: "Download PDF",
    loadingTool: "Loading tool...",
    messages: {
      addOnePdf: "Please add at least one PDF file.",
      needTwoPdfs: "Please add at least two PDF files to merge.",
      mergeSuccess: "PDFs merged successfully.",
      mergeFailed: "Failed to merge PDFs.",
    },
  },
  imageToPdf: {
    privacyBanner: "All conversion runs in your browser. Files never leave your device.",
    uploadTitle: "Upload Files",
    dropImages: "Drop images here or click to upload",
    dropFormat: "Drop {format} images here or click to upload",
    mixedFormatsHint: "JPG, PNG, HEIC, WEBP, TIFF, and more—mixed formats in one batch",
    supportsMultiple: "Supports multiple files",
    uploadedFiles: "Uploaded files ({n})",
    previewWarning: "Preview warning: {text}",
    failedPreviewList: "Failed ({n}): {names}",
    generatingPreviews: "Generating previews…",
    couldNotDecode: "Could not decode preview",
    stillConvertHint: "You can still convert to PDF. If conversion fails, remove this file.",
    remove: "Remove",
    options: "Options",
    pageSize: "Page size",
    fitToImage: "Fit to image",
    a4: "A4",
    fitHint: "Each page matches its image size (no margins)",
    a4Hint: "Fixed A4 size, image scaled to fit (may have margins)",
    pageOrientation: "Page orientation",
    portrait: "Portrait",
    landscape: "Landscape",
    convertButton: "Convert to PDF",
    converting: "Converting...",
    reset: "Reset",
    add: "Add",
    convertingProgress: "Converting... {current} of {total}",
    filesSelected: "{n} file(s) selected",
    pdfCreatedTitle: "PDF created successfully",
    downloadPdf: "Download PDF",
    loadingConverter: "Loading converter...",
    messages: {
      addSupportedImage: "Please add at least one supported image file.",
      selectFormatImages: "Please select {format} images.",
      addImagesFirst: "Please add images first.",
      pdfCreated: "PDF created successfully.",
      convertFailed: "Failed to convert to PDF.",
      somePreviewsFailed: "Some previews could not be generated. Check the file list below.",
    },
  },
};

const pdfUiKo = {
  mergePdf: {
    privacyBanner: "모든 처리는 브라우저에서 실행됩니다. 파일이 기기를 떠나지 않습니다.",
    uploadTitle: "파일 업로드",
    dropHint: "PDF 파일을 여기에 놓거나 클릭하여 업로드",
    supportsMultiple: "여러 파일 지원",
    uploadedFiles: "업로드된 파일 ({n})",
    previewOf: "{name} 미리보기",
    moveUp: "위로",
    moveDown: "아래로",
    remove: "제거",
    mergeButton: "PDF 병합",
    merging: "병합 중...",
    reset: "초기화",
    add: "추가",
    mergingProgress: "병합 중... {current} / {total}",
    filesSelected: "{n}개 파일 선택 · 총 {size} MB",
    mergeSuccessTitle: "PDF 병합 완료",
    downloadPdf: "PDF 다운로드",
    loadingTool: "도구 로딩 중...",
    messages: {
      addOnePdf: "PDF 파일을 1개 이상 추가해 주세요.",
      needTwoPdfs: "병합하려면 PDF 파일을 2개 이상 추가해 주세요.",
      mergeSuccess: "PDF 병합이 완료되었습니다.",
      mergeFailed: "PDF 병합에 실패했습니다.",
    },
  },
  imageToPdf: {
    privacyBanner: "모든 변환은 브라우저에서 실행됩니다. 파일이 기기를 떠나지 않습니다.",
    uploadTitle: "파일 업로드",
    dropImages: "이미지를 여기에 놓거나 클릭하여 업로드",
    dropFormat: "{format} 이미지를 여기에 놓거나 클릭하여 업로드",
    mixedFormatsHint: "JPG, PNG, HEIC, WEBP, TIFF 등 — 한 번에 혼합 형식 가능",
    supportsMultiple: "여러 파일 지원",
    uploadedFiles: "업로드된 파일 ({n})",
    previewWarning: "미리보기 경고: {text}",
    failedPreviewList: "실패 ({n}): {names}",
    generatingPreviews: "미리보기 생성 중…",
    couldNotDecode: "미리보기를 디코딩할 수 없습니다",
    stillConvertHint: "PDF 변환은 시도할 수 있습니다. 변환에 실패하면 이 파일을 제거하세요.",
    remove: "제거",
    options: "옵션",
    pageSize: "페이지 크기",
    fitToImage: "이미지 맞춤",
    a4: "A4",
    fitHint: "각 페이지가 이미지 크기에 맞습니다(여백 없음)",
    a4Hint: "고정 A4 크기, 이미지가 맞게 축소됩니다(여백 있을 수 있음)",
    pageOrientation: "페이지 방향",
    portrait: "세로",
    landscape: "가로",
    convertButton: "PDF로 변환",
    converting: "변환 중...",
    reset: "초기화",
    add: "추가",
    convertingProgress: "변환 중... {current} / {total}",
    filesSelected: "{n}개 파일 선택",
    pdfCreatedTitle: "PDF 생성 완료",
    downloadPdf: "PDF 다운로드",
    loadingConverter: "변환기 로딩 중...",
    messages: {
      addSupportedImage: "지원되는 이미지 파일을 1개 이상 추가해 주세요.",
      selectFormatImages: "{format} 이미지를 선택해 주세요.",
      addImagesFirst: "먼저 이미지를 추가해 주세요.",
      pdfCreated: "PDF가 생성되었습니다.",
      convertFailed: "PDF 변환에 실패했습니다.",
      somePreviewsFailed: "일부 미리보기를 생성할 수 없습니다. 아래 파일 목록을 확인하세요.",
    },
  },
};

const pdfEn = {
  pdf: buildEntry(HUB_EN, "en"),
  "pdf.merge-pdf": buildEntry(MERGE_EN, "en"),
  "pdf.image-to-pdf": buildEntry(IMAGE_TO_PDF_EN, "en"),
};

const pdfKo = {
  pdf: buildEntry(HUB_KO, "ko"),
  "pdf.merge-pdf": buildEntry(MERGE_KO, "ko"),
  "pdf.image-to-pdf": buildEntry(IMAGE_TO_PDF_KO, "ko"),
};

const root = process.cwd();
fs.writeFileSync(path.join(root, "scripts", "pdf-en-data.mjs"), `export const pdfEn = ${JSON.stringify(pdfEn, null, 2)};\n`);
fs.writeFileSync(path.join(root, "scripts", "pdf-ko-data.mjs"), `export const pdfKo = ${JSON.stringify(pdfKo, null, 2)};\n`);
fs.writeFileSync(
  path.join(root, "scripts", "pdf-ui-data.mjs"),
  `export const pdfUiEn = ${JSON.stringify(pdfUiEn, null, 2)};\n\nexport const pdfUiKo = ${JSON.stringify(pdfUiKo, null, 2)};\n`
);
console.log("Generated pdf-en-data.mjs, pdf-ko-data.mjs, pdf-ui-data.mjs");
