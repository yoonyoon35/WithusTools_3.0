/**
 * GIF Converter hub + 형식별 toolContent 데이터 생성
 * 실행: node scripts/build-gif-tool-data.mjs
 */
import fs from "node:fs";
import path from "node:path";

const FORMATS = [
  "heic", "heif", "avif", "bmp", "png", "svg", "tiff", "webp", "psd",
  "jfif", "ico", "ai", "dng", "cr2", "cr3", "tga", "jpg", "pdf",
];

const FORMAT_META_EN = {
  heic: { displayName: "HEIC", description: "Combine multiple HEIC photos into one animated GIF in your browser. Set frame order, delay, canvas size, and quality. No upload—local HEIC decode and gif.js encoding." },
  heif: { displayName: "HEIF", description: "Merge HEIF/HEIC images into an animated GIF locally. Control delay, dimensions, and palette quality—no server upload." },
  avif: { displayName: "AVIF", description: "Turn multiple AVIF images into one animated GIF in your browser. Client-side decode and gif.js encoding." },
  bmp: { displayName: "BMP", description: "Build an animated GIF from BMP frames. Upload BMP files, order frames, set delay and output size—all locally." },
  png: { displayName: "PNG", description: "Combine PNG images into one animated GIF with letterbox background for transparency. Browser-only processing." },
  svg: { displayName: "SVG", description: "Rasterize multiple SVG files to frames and export one animated GIF. Set canvas size, delay, and quality locally." },
  tiff: { displayName: "TIFF", description: "Merge TIFF scans or photos into an animated GIF. UTIF/browser decode, gif.js encoding, no upload." },
  webp: { displayName: "WEBP", description: "Combine WEBP images into an animated GIF in your browser. Frame controls and local gif.js encoding." },
  psd: { displayName: "PSD", description: "Use flattened PSD composites as frames for one animated GIF. Client-side ag-psd read and gif.js output." },
  jfif: { displayName: "JFIF", description: "Merge JFIF/JPEG interchange files into an animated GIF. Set delay, canvas size, and quality—no upload." },
  ico: { displayName: "ICO", description: "Combine ICO icon files into an animated GIF with letterboxing. Local decode and gif.js encoding." },
  ai: { displayName: "AI", description: "Render Illustrator .ai (PDF-compatible) pages as frames for an animated GIF. First page per file; pdf.js runs locally." },
  dng: { displayName: "DNG", description: "Build an animated GIF from DNG RAW previews. Decodes in-browser with UTIF or embedded JPEG—no upload." },
  cr2: { displayName: "CR2", description: "Combine Canon CR2 RAW previews into an animated GIF. Client-side decode aligned with CR2 to JPG flows." },
  cr3: { displayName: "CR3", description: "Turn Canon CR3 embedded previews into GIF frames and export one animated GIF in your browser." },
  tga: { displayName: "TGA", description: "Merge Targa TGA images into an animated GIF. TGA decode and gif.js locally with no server upload." },
  jpg: { displayName: "JPG", description: "Combine JPG, JPEG, or JFIF files into one animated GIF. Frame order, delay, canvas size, and quality—browser-only." },
  pdf: { displayName: "PDF", description: "Turn PDF pages into one animated GIF. Each page is a frame (up to 60). pdf.js and gif.js run locally—no upload." },
};

const FORMAT_META_KO = {
  heic: { displayName: "HEIC", description: "여러 HEIC 사진을 브라우저에서 하나의 애니메이션 GIF로 합칩니다. 프레임 순서, 지연, 캔버스 크기, 품질을 설정할 수 있습니다. 업로드 없이 로컬 HEIC 디코드 및 gif.js 인코딩." },
  heif: { displayName: "HEIF", description: "HEIF/HEIC 이미지를 로컬에서 애니메이션 GIF로 병합합니다. 지연, 크기, 팔레트 품질을 조절할 수 있습니다." },
  avif: { displayName: "AVIF", description: "여러 AVIF 이미지를 브라우저에서 하나의 애니메이션 GIF로 변환합니다. 클라이언트 측 디코드 및 gif.js 인코딩." },
  bmp: { displayName: "BMP", description: "BMP 프레임으로 애니메이션 GIF를 만듭니다. BMP 파일을 업로드하고 프레임 순서, 지연, 출력 크기를 설정합니다." },
  png: { displayName: "PNG", description: "PNG 이미지를 투명 배경용 레터박스와 함께 애니메이션 GIF로 합칩니다. 브라우저에서만 처리됩니다." },
  svg: { displayName: "SVG", description: "여러 SVG를 프레임으로 래스터화해 애니메이션 GIF로보냅니다. 캔버스 크기, 지연, 품질을 로컬에서 설정합니다." },
  tiff: { displayName: "TIFF", description: "TIFF 스캔·사진을 애니메이션 GIF로 병합합니다. UTIF/브라우저 디코드, gif.js 인코딩, 업로드 없음." },
  webp: { displayName: "WEBP", description: "WEBP 이미지를 브라우저에서 애니메이션 GIF로 합칩니다. 프레임 제어 및 로컬 gif.js 인코딩." },
  psd: { displayName: "PSD", description: "합성된 PSD를 프레임으로 사용해 애니메이션 GIF를 만듭니다. ag-psd 읽기 및 gif.js 출력." },
  jfif: { displayName: "JFIF", description: "JFIF/JPEG 파일을 애니메이션 GIF로 병합합니다. 지연, 캔버스 크기, 품질을 설정할 수 있습니다." },
  ico: { displayName: "ICO", description: "ICO 아이콘을 레터박스와 함께 애니메이션 GIF로 합칩니다. 로컬 디코드 및 gif.js 인코딩." },
  ai: { displayName: "AI", description: "Illustrator .ai(PDF 호환) 페이지를 프레임으로 렌더링합니다. 파일당 첫 페이지, pdf.js 로컬 실행." },
  dng: { displayName: "DNG", description: "DNG RAW 미리보기로 애니메이션 GIF를 만듭니다. UTIF 또는 내장 JPEG로 브라우저에서 디코드." },
  cr2: { displayName: "CR2", description: "Canon CR2 RAW 미리보기를 애니메이션 GIF로 합칩니다. CR2→JPG 흐름과 동일한 클라이언트 디코드." },
  cr3: { displayName: "CR3", description: "Canon CR3 내장 미리보기를 GIF 프레임으로 변환해 브라우저에서 애니메이션 GIF로보냅니다." },
  tga: { displayName: "TGA", description: "Targa TGA 이미지를 애니메이션 GIF로 병합합니다. TGA 디코드 및 gif.js 로컬 처리." },
  jpg: { displayName: "JPG", description: "JPG, JPEG, JFIF 파일을 하나의 애니메이션 GIF로 합칩니다. 프레임 순서, 지연, 캔버스 크기, 품질 설정." },
  pdf: { displayName: "PDF", description: "PDF 페이지를 애니메이션 GIF로 변환합니다. 각 페이지가 프레임(최대 60페이지). pdf.js와 gif.js 로컬 실행." },
};

function buildFormatGuideEn(displayName, isPdf) {
  if (isPdf) {
    return {
      guideIntro: "Use this page when you have one multi-page PDF and want each page as a frame in a single animated GIF.",
      sections: [
        { title: "1. How can I use this PDF to GIF tool on this page?", type: "ordered", items: [
          "Upload one PDF—each page becomes an animation frame in order (up to 60 pages).",
          "Adjust frame delay, output width and height, letterbox color, GIF quality, and looping.",
          "Click Create animated GIF when at least two pages are loaded, then preview and download your .gif file.",
        ]},
        { title: "2. How does this page turn PDF into an animated GIF without uploading?", type: "paragraphs", items: [
          "pdf.js renders each PDF page to a canvas in your browser; frames are then letterboxed to your chosen output size.",
          "gif.js quantizes and encodes the sequence in Web Workers—no server upload.",
        ]},
        { title: "3. How does this route fit the GIF Converter hub pattern?", type: "paragraphs", items: [
          "PDF to GIF is useful for flipping through slides, storyboards, or lightweight document previews as a single GIF file.",
          "For multiple separate image files instead of one multi-page PDF, use the other format cards or Images to Animated GIF.",
        ]},
        { title: "4. Why run PDF-to-GIF encoding in the browser?", type: "unordered", items: [
          "All rendering and encoding stay local to your device.",
          "Page order matches the PDF; no manual frame ordering unless you re-upload.",
          "Same delay, size, and quality controls as other GIF Converter tools.",
        ]},
        { title: "5. When is PDF to GIF a practical choice?", type: "unordered", items: [
          "Share a short slide deck as one GIF attachment.",
          "Preview multi-page layouts in contexts that prefer GIF over video.",
        ]},
      ],
      faq: [
        { question: "How can I use this PDF to GIF tool on this page?", answer: "Upload one PDF, wait for pages to render as frames, adjust delay and canvas options, then create and download a single GIF file." },
        { question: "How does this page build an animated GIF from PDF without uploading?", answer: "pdf.js renders each page to a canvas locally; gif.js encodes frames in Web Workers on your device." },
        { question: "What if I need mixed image types in one GIF?", answer: "Use Images to Animated GIF under Image Tools—it accepts many image types with the same frame and delay controls." },
        { question: "When is PDF to GIF a good fit?", answer: "When you already have a multi-page PDF and want one lightweight GIF preview or shareable animation." },
      ],
    };
  }
  return {
    guideIntro: `Use this page when every animation frame is a ${displayName} file and you want the same client-side GIF controls as other format routes.`,
    sections: [
      { title: `1. How can I use this ${displayName} to GIF tool on this page?`, type: "ordered", items: [
        `Open this ${displayName} to GIF page, then add two or more ${displayName} files as frames in the order you want.`,
        "Reorder frames with ↑ / ↓, remove any you do not need, then set frame delay, output width and height, letterbox color, and GIF quality.",
        "Choose whether the animation loops forever, click Create animated GIF, then preview and download a single .gif file.",
      ]},
      { title: `2. How does this page turn ${displayName} into an animated GIF without uploading?`, type: "paragraphs", items: [
        `Each ${displayName} file is decoded in your browser (using the same decoding approach as the ${displayName} to JPG tool where applicable), then drawn onto a shared canvas with letterboxing.`,
        "gif.js encodes frames in Web Workers and builds one animated GIF file locally—nothing is uploaded to a server.",
        "For mixed image types in one animation, use Images to Animated GIF under Image Tools.",
      ]},
      { title: "3. How does this route fit the GIF Converter hub pattern?", type: "paragraphs", items: [
        "This route follows the GIF Converter hub pattern: one index plus dedicated URLs per source format, similar to JPG Converter.",
        `When every frame is ${displayName}, intake rules stay simple and defaults match that pipeline.`,
      ]},
      { title: `4. Why run ${displayName}-to-GIF encoding in the browser?`, type: "unordered", items: [
        "Client-side only: your files stay on your device.",
        "Control frame order, delay, canvas size, background, loop, and palette quality.",
        "Consistent WithusTools layout, metadata, FAQ JSON-LD, and guide sections.",
      ]},
      { title: `5. When is ${displayName} to GIF a practical choice?`, type: "unordered", items: [
        "Slideshow-style GIFs from sequential exports or scans.",
        "Lightweight motion for chat, forums, or embeds where video is awkward.",
        "Quick previews from like-formatted assets without desktop apps.",
      ]},
    ],
    faq: [
      { question: `How can I use this ${displayName} to GIF tool on this page?`, answer: `Add two or more ${displayName} files as frames, set delay and canvas options, create the GIF, and download it—all in your browser.` },
      { question: `How does this page build an animated GIF from ${displayName} without uploading?`, answer: "Files are decoded in memory, drawn to a canvas per frame, and encoded with gif.js in Web Workers so data stays local." },
      { question: "What if I need mixed image types in one GIF?", answer: "Use Images to Animated GIF under Image Tools—it accepts many image types with the same frame and delay controls." },
      { question: `When is ${displayName} to GIF a good fit?`, answer: `When every frame is already ${displayName}, so decoding and color behavior stay consistent across the sequence.` },
    ],
  };
}

function buildFormatGuideKo(displayName, isPdf) {
  if (isPdf) {
    return {
      guideIntro: "여러 페이지 PDF의 각 페이지를 하나의 애니메이션 GIF 프레임으로 만들 때 이 페이지를 사용하세요.",
      sections: [
        { title: "1. 이 페이지에서 PDF→GIF 도구는 어떻게 사용하나요?", type: "ordered", items: [
          "PDF 하나를 업로드하면 각 페이지가 순서대로 애니메이션 프레임이 됩니다(최대 60페이지).",
          "프레임 지연, 출력 너비·높이, 레터박스 색, GIF 품질, 반복 설정을 조절하세요.",
          "최소 2페이지가 로드되면 애니메이션 GIF 만들기를 클릭한 뒤 미리보기하고 .gif 파일을 받으세요.",
        ]},
        { title: "2. 이 페이지는 업로드 없이 PDF를 애니메이션 GIF로 어떻게 변환하나요?", type: "paragraphs", items: [
          "pdf.js가 브라우저에서 각 PDF 페이지를 캔버스로 렌더링하고, 선택한 출력 크기에 맞게 레터박스 처리합니다.",
          "gif.js가 Web Workers에서 시퀀스를 양자화·인코딩합니다. 서버 업로드는 없습니다.",
        ]},
        { title: "3. 이 경로는 GIF 변환기 허브 패턴에 어떻게 맞나요?", type: "paragraphs", items: [
          "PDF→GIF는 슬라이드, 스토리보드, 가벼운 문서 미리보기를 하나의 GIF로 공유할 때 유용합니다.",
          "여러 개별 이미지 파일이 있다면 다른 형식 카드나 이미지→애니메이션 GIF를 사용하세요.",
        ]},
        { title: "4. 브라우저에서 PDF→GIF 인코딩을 하는 이유는?", type: "unordered", items: [
          "렌더링과 인코딩이 모두 기기에서 로컬로 이루어집니다.",
          "페이지 순서가 PDF와 일치합니다. 재업로드 없이 수동 정렬이 필요 없습니다.",
          "다른 GIF 변환기 도구와 동일한 지연, 크기, 품질 제어를 제공합니다.",
        ]},
        { title: "5. PDF→GIF가 실용적인 경우는?", type: "unordered", items: [
          "짧은 슬라이드 덱을 하나의 GIF 첨부로 공유할 때.",
          "비디오보다 GIF를 선호하는 환경에서 여러 페이지 레이아웃을 미리볼 때.",
        ]},
      ],
      faq: [
        { question: "이 페이지에서 PDF→GIF 도구는 어떻게 사용하나요?", answer: "PDF 하나를 업로드하고 페이지가 프레임으로 렌더링될 때까지 기다린 뒤, 지연·캔버스 옵션을 설정하고 GIF를 만들어 받으세요." },
        { question: "이 페이지는 업로드 없이 PDF에서 애니메이션 GIF를 어떻게 만드나요?", answer: "pdf.js가 각 페이지를 로컬 캔버스로 렌더링하고, gif.js가 Web Workers에서 프레임을 인코딩합니다." },
        { question: "한 GIF에 여러 이미지 형식이 섞여 있으면 어떻게 하나요?", answer: "이미지 도구의 이미지→애니메이션 GIF를 사용하세요. 동일한 프레임·지연 제어로 여러 이미지 형식을 받습니다." },
        { question: "PDF→GIF가 적합한 경우는?", answer: "이미 여러 페이지 PDF가 있고 가벼운 GIF 미리보기나 공유용 애니메이션이 필요할 때입니다." },
      ],
    };
  }
  return {
    guideIntro: `모든 애니메이션 프레임이 ${displayName} 파일일 때, 다른 형식 경로와 동일한 클라이언트 GIF 제어를 위해 이 페이지를 사용하세요.`,
    sections: [
      { title: `1. 이 페이지에서 ${displayName}→GIF 도구는 어떻게 사용하나요?`, type: "ordered", items: [
        `이 ${displayName}→GIF 페이지를 열고 원하는 순서대로 ${displayName} 파일 2개 이상을 프레임으로 추가하세요.`,
        "↑ / ↓로 프레임 순서를 바꾸고 불필요한 프레임을 제거한 뒤, 프레임 지연, 출력 너비·높이, 레터박스 색, GIF 품질을 설정하세요.",
        "애니메이션을 무한 반복할지 선택하고, 애니메이션 GIF 만들기를 클릭한 뒤 미리보기하고 .gif 파일을 받으세요.",
      ]},
      { title: `2. 이 페이지는 업로드 없이 ${displayName}을 애니메이션 GIF로 어떻게 변환하나요?`, type: "paragraphs", items: [
        `각 ${displayName} 파일은 브라우저에서 디코딩되고(해당 시 ${displayName}→JPG 도구와 동일한 방식), 공유 캔버스에 레터박스와 함께 그려집니다.`,
        "gif.js가 Web Workers에서 프레임을 인코딩해 하나의 애니메이션 GIF를 로컬로 만듭니다. 서버에 업로드되지 않습니다.",
        "한 애니메이션에 여러 이미지 형식이 섞여 있으면 이미지 도구의 이미지→애니메이션 GIF를 사용하세요.",
      ]},
      { title: "3. 이 경로는 GIF 변환기 허브 패턴에 어떻게 맞나요?", type: "paragraphs", items: [
        "이 경로는 GIF 변환기 허브 패턴을 따릅니다. JPG 변환기와 같이 인덱스와 형식별 전용 URL이 있습니다.",
        `모든 프레임이 ${displayName}이면 입력 규칙이 단순하고 기본값이 해당 파이프라인에 맞습니다.`,
      ]},
      { title: `4. 브라우저에서 ${displayName}→GIF 인코딩을 하는 이유는?`, type: "unordered", items: [
        "클라이언트 전용: 파일이 기기에만 남습니다.",
        "프레임 순서, 지연, 캔버스 크기, 배경, 반복, 팔레트 품질을 제어할 수 있습니다.",
        "WithusTools 레이아웃, 메타데이터, FAQ JSON-LD, 가이드 섹션이 일관됩니다.",
      ]},
      { title: `5. ${displayName}→GIF가 실용적인 경우는?`, type: "unordered", items: [
        "연속보내기나 스캔으로 슬라이드쇼 스타일 GIF를 만들 때.",
        "채팅, 포럼, 임베드 등 비디오가 불편한 곳에서 가벼운 모션을 공유할 때.",
        "데스크톱 앱 없이 동일 형식 자산으로 빠른 미리보기를 만들 때.",
      ]},
    ],
    faq: [
      { question: `이 페이지에서 ${displayName}→GIF 도구는 어떻게 사용하나요?`, answer: `${displayName} 파일 2개 이상을 프레임으로 추가하고, 지연·캔버스 옵션을 설정한 뒤 GIF를 만들어 브라우저에서 받으세요.` },
      { question: `이 페이지는 업로드 없이 ${displayName}에서 애니메이션 GIF를 어떻게 만드나요?`, answer: "파일이 메모리에서 디코딩되고 프레임마다 캔버스에 그려진 뒤, gif.js Web Workers로 로컬 인코딩됩니다." },
      { question: "한 GIF에 여러 이미지 형식이 섞여 있으면 어떻게 하나요?", answer: "이미지 도구의 이미지→애니메이션 GIF를 사용하세요. 동일한 프레임·지연 제어로 여러 형식을 받습니다." },
      { question: `${displayName}→GIF가 적합한 경우는?`, answer: `모든 프레임이 이미 ${displayName}이어서 디코딩과 색상 처리가 시퀀스 전체에서 일관될 때입니다.` },
    ],
  };
}

function buildHub(locale) {
  const isKo = locale === "ko";
  if (isKo) {
    return {
      h1: "GIF 변환기",
      subtitle: "온라인 GIF 변환기 허브 — 형식별 페이지",
      metaDescription: "무료 온라인 GIF 변환기. HEIC, PNG, WEBP, JPG, PDF 등 다양한 형식을 애니메이션 GIF로 변환합니다. 브라우저에서 처리, 업로드 없음.",
      intro: "WithusTools의 클라이언트 측 GIF 워크플로: 업로드 없이, 프라이버시 우선 처리. 아래 형식 카드를 열어 JPG 변환기와 동일한 허브 패턴으로 형식별 경로를 사용하세요.",
      introNoteBefore: "PNG, WebP, HEIC 등 여러 형식을 한 애니메이션에 넣으려면",
      introNoteAfter: "을(를) 이미지 도구에서 사용하세요.",
      guideTitle: "GIF 변환기 가이드",
      guideIntro: "원본 형식이 맞을 때 형식별 페이지를 사용하세요(예: JPG 프레임만 있을 때 JPG→GIF). 새 경로가 추가되면 여기에 카드가 표시됩니다.",
      sections: [
        { title: "1. 오늘 이 GIF 변환기 허브로 무엇을 할 수 있나요?", type: "ordered", items: [
          "아래 형식 카드를 선택하세요. 각 카드는 맞는 업로드 규칙과 디코딩을 가진 전용 경로를 엽니다.",
          "대부분의 도구는 같은 형식의 여러 파일을 프레임으로 받습니다. PDF→GIF는 PDF 하나로 각 페이지를 프레임으로 만듭니다.",
          "한 애니메이션에 여러 이미지 형식이 섞여 있으면 이미지 도구의 이미지→애니메이션 GIF를 사용하세요.",
        ]},
        { title: "2. 이 사이트에서 클라이언트 측 GIF 인코딩은 어떻게 동작하나요?", type: "paragraphs", items: [
          "GIF는 팔레트 기반(보통 256색)이며 선택적으로 애니메이션 프레임을 가집니다.",
          "각 형식 페이지는 브라우저에서 원본을 디코딩하고, 프레임을 캔버스에 그린 뒤 gif.js Web Workers로 인코딩합니다.",
          "품질, 크기, 투명도 처리, 지연은 모든 경로에서 직접 제어할 수 있습니다.",
        ]},
        { title: "3. 이 허브는 JPG 변환기 패턴과 어떻게 연결되나요?", type: "paragraphs", items: [
          "GIF는 스티커, 밈, 단순 UI 모션, 비디오보다 가벼운 애니메이션을 선호하는 플랫폼에서 여전히 인기 있습니다.",
          "이 허브는 JPG 변환기와 같이 인덱스와 형식별 URL로 더 명확한 기본값과 SEO를 제공합니다.",
          "모든 처리가 클라이언트 측이므로 파일이 기기를 떠나지 않습니다.",
        ]},
        { title: "4. 브라우저에서 GIF 변환을 하는 이유는?", type: "unordered", items: [
          "업로드 없음: 브라우저에서 처리.",
          "형식별 페이지마다 예측 가능한 입력 규칙.",
          "일관된 WithusTools 레이아웃, 메타데이터, FAQ 스타일 문서.",
        ]},
        { title: "5. GIF가 실용적인 출력 형식인 경우는?", type: "unordered", items: [
          "범용 임베드 지원이 필요한 GIF 대체용을 준비할 때.",
          "이미 같은 파일 형식을 공유하는 순차 자산을 애니메이션할 때.",
          "파이프라인이 한 원본 형식으로 표준화될 때 형식별 페이지를 연결할 때.",
        ]},
      ],
      faq: [
        { question: "WithusTools의 GIF 변환기 허브란?", answer: "브라우저에서 실행되는 GIF 관련 도구의 랜딩 페이지입니다. HEIC→GIF, PNG→GIF, PDF→GIF, JPG→GIF 등 형식 카드로 전용 경로를 엽니다." },
        { question: "사진을 업로드하지 않고 JPG→GIF는 어떻게 동작하나요?", answer: "JPEG 프레임이 메모리에서 디코딩되고, 캔버스에 합성된 뒤 gif.js Web Workers로 기기에서 인코딩됩니다." },
        { question: "PNG, WebP, HEIC를 하나의 GIF로 합치려면?", answer: "이미지 도구의 이미지→애니메이션 GIF를 사용하세요. 동일한 프레임·지연 제어로 여러 이미지 형식을 받습니다." },
        { question: "단순 모션에 GIF를 비디오 대신 쓰는 이유는?", answer: "GIF는 자동재생 비디오나 코덱이 제한된 환경에서도 널리 지원되며, 채팅·이메일·가벼운 웹 맥락에 쉽게 임베드됩니다." },
      ],
      backToHome: "← 홈으로",
    };
  }
  return {
    h1: "GIF Converter",
    subtitle: "Online GIF converter hub—format-specific pages",
    metaDescription: "Free online GIF converter. Turn HEIC, PNG, WEBP, JPG, PDF, and more into animated GIFs in your browser. No upload—local processing.",
    intro: "Client-side GIF workflows on WithusTools: no upload, privacy-first processing. Open a format card below—the same hub pattern as JPG Converter—one card per source format.",
    introNoteBefore: "Need PNG, WebP, HEIC, or other formats in one animation? Use",
    introNoteAfter: "under Image Tools.",
    guideTitle: "GIF Converter Guide",
    guideIntro: "Use the format-specific page when your source type matches (for example only JPEG frames for JPG to GIF). More cards will appear here as new routes ship.",
    sections: [
      { title: "1. What can I use this GIF Converter hub for today?", type: "ordered", items: [
        "Pick a format card below—each opens a dedicated “format to GIF” route with matching upload rules and decoding.",
        "Most tools accept multiple files of the same type as animation frames; PDF to GIF uses one PDF and turns each page into a frame.",
        "For mixed image types in one animation, use Images to Animated GIF under Image Tools.",
      ]},
      { title: "2. How will client-side GIF encoding work on this site?", type: "paragraphs", items: [
        "GIF is palette-based (often 256 colors) with optional animation frames.",
        "Each format page decodes sources in the browser, draws frames to a canvas, and encodes with gif.js in Web Workers.",
        "Quality, dimensions, transparency handling, and delay are under your control on every route.",
      ]},
      { title: "3. How does this hub relate to the JPG Converter pattern?", type: "paragraphs", items: [
        "GIF remains popular for stickers, memes, simple UI motion, and platforms that prefer lightweight animation over video.",
        "This hub mirrors the JPG Converter pattern: one index plus format-specific URLs for clearer defaults and SEO.",
        "All processing stays client-side so your files never leave your device.",
      ]},
      { title: "4. Why run GIF conversion in the browser?", type: "unordered", items: [
        "No upload: processing in your browser.",
        "Predictable intake per format page.",
        "Consistent WithusTools layout, metadata, and FAQ-style documentation.",
      ]},
      { title: "5. When is GIF a practical output format?", type: "unordered", items: [
        "Prepare GIF fallbacks when you need universal embed support.",
        "Animate sequential assets that already share a file format.",
        "Chain format-specific pages when your pipeline standardizes on one source type.",
      ]},
    ],
    faq: [
      { question: "What is the GIF Converter hub on WithusTools?", answer: "It is the landing page for GIF-related tools that run in your browser. Use the format cards to open a dedicated route such as HEIC to GIF, PNG to GIF, PDF to GIF, or JPG to GIF." },
      { question: "How does JPG to GIF work without uploading my photos?", answer: "JPEG frames are decoded in memory, composited on a canvas, and encoded with gif.js in Web Workers on your device." },
      { question: "Where can I merge PNG, WebP, or HEIC images into one GIF?", answer: "Use Images to Animated GIF under Image Tools for mixed image types with the same frame and delay controls." },
      { question: "Why use GIF instead of video for simple motion?", answer: "GIF is widely supported where autoplay video or codecs may be limited, and it is easy to embed in chat, email, and lightweight web contexts." },
    ],
    backToHome: "← Back to home",
  };
}

function buildFormatEntry(locale, slug) {
  const isKo = locale === "ko";
  const meta = isKo ? FORMAT_META_KO[slug] : FORMAT_META_EN[slug];
  const isPdf = slug === "pdf";
  const guide = isKo ? buildFormatGuideKo(meta.displayName, isPdf) : buildFormatGuideEn(meta.displayName, isPdf);
  const toGif = isKo ? `${meta.displayName}→GIF` : `${meta.displayName} to GIF`;
  return {
    h1: toGif,
    subtitle: isKo
      ? `브라우저에서 온라인 ${meta.displayName}→애니메이션 GIF`
      : `Online ${meta.displayName} to animated GIF in your browser`,
    metaDescription: meta.description,
    displayName: meta.displayName,
    guideTitle: isKo ? `${meta.displayName}→GIF 가이드` : `${meta.displayName} to GIF Guide`,
    ...guide,
    backToHub: isKo ? "← GIF 변환기로" : "← Back to GIF Converter",
  };
}

function buildGifMap(locale) {
  const map = { "gif-converter": buildHub(locale) };
  for (const slug of FORMATS) {
    map[`gif-converter.${slug}`] = buildFormatEntry(locale, slug);
  }
  return map;
}

const gifUiEn = {
  pdfToGif: {
    privacyBanner: "All conversion runs in your browser. Files never leave your device.",
    uploadTitle: "Upload Files",
    uploadAriaLabel: "Upload PDF",
    dropHint: "Drop {displayName} files here or click to upload",
    pdfHint: "One PDF — each page becomes a frame (max {max})",
    replacePdf: "Replace PDF",
    loadingPages: " · Loading pages… {percent}%",
    pageCount: " · {n} page(s)",
    pageLabel: "Page {n}",
    frameDelay: "Frame delay (ms)",
    gifQuality: "GIF quality",
    outputWidth: "Output width",
    outputHeight: "Output height",
    letterboxBg: "Letterbox background",
    loopForever: "Loop forever",
    createButton: "Create animated GIF",
    encoding: "Encoding… {percent}%",
    downloadGif: "Download GIF",
    reset: "Reset",
    encodingPages: "Encoding pages…",
    preview: "Preview",
    previewAlt: "Animated GIF preview",
    fileSize: "File size: {size}",
    loadingConverter: "Loading converter...",
    messages: {
      pdfLibraryLoading: "PDF library is loading. Please wait.",
      pageLimit: "Only the first {max} pages are used (PDF has {total} pages).",
      loadedPages: "Loaded {n} page(s) from PDF.",
      failedLoadPdf: "Failed to load PDF",
      selectPdfOnly: "Please select a PDF file.",
      firstPdfOnly: "Using the first PDF only. Replace it by choosing another file.",
      resetComplete: "Reset complete.",
      minPages: "This PDF needs at least {min} pages to make an animated GIF.",
      gifCreated: "Animated GIF created. Download below.",
      failedCreateGif: "Failed to create GIF",
      createFirst: "Create a GIF first.",
      downloadStarted: "Download started.",
      canvasUnavailable: "Canvas not available",
    },
  },
};

const gifUiKo = {
  pdfToGif: {
    privacyBanner: "모든 변환은 브라우저에서 실행됩니다. 파일이 기기를 떠나지 않습니다.",
    uploadTitle: "파일 업로드",
    uploadAriaLabel: "PDF 업로드",
    dropHint: "{displayName} 파일을 여기에 놓거나 클릭하여 업로드",
    pdfHint: "PDF 하나 — 각 페이지가 프레임이 됩니다(최대 {max})",
    replacePdf: "PDF 교체",
    loadingPages: " · 페이지 로딩 중… {percent}%",
    pageCount: " · {n}페이지",
    pageLabel: "페이지 {n}",
    frameDelay: "프레임 지연 (ms)",
    gifQuality: "GIF 품질",
    outputWidth: "출력 너비",
    outputHeight: "출력 높이",
    letterboxBg: "레터박스 배경",
    loopForever: "무한 반복",
    createButton: "애니메이션 GIF 만들기",
    encoding: "인코딩 중… {percent}%",
    downloadGif: "GIF 다운로드",
    reset: "초기화",
    encodingPages: "페이지 인코딩 중…",
    preview: "미리보기",
    previewAlt: "애니메이션 GIF 미리보기",
    fileSize: "파일 크기: {size}",
    loadingConverter: "변환기 로딩 중...",
    messages: {
      pdfLibraryLoading: "PDF 라이브러리 로딩 중입니다. 잠시 기다려 주세요.",
      pageLimit: "처음 {max}페이지만 사용됩니다(PDF 총 {total}페이지).",
      loadedPages: "PDF에서 {n}페이지를 불러왔습니다.",
      failedLoadPdf: "PDF를 불러오지 못했습니다",
      selectPdfOnly: "PDF 파일을 선택해 주세요.",
      firstPdfOnly: "첫 번째 PDF만 사용합니다. 다른 파일을 선택해 교체할 수 있습니다.",
      resetComplete: "초기화 완료.",
      minPages: "애니메이션 GIF를 만들려면 PDF에 최소 {min}페이지가 필요합니다.",
      gifCreated: "애니메이션 GIF가 만들어졌습니다. 아래에서 다운로드하세요.",
      failedCreateGif: "GIF를 만들지 못했습니다",
      createFirst: "먼저 GIF를 만드세요.",
      downloadStarted: "다운로드가 시작되었습니다.",
      canvasUnavailable: "캔버스를 사용할 수 없습니다",
    },
  },
};

const root = process.cwd();

for (const [locale, varName] of [["en", "gifEn"], ["ko", "gifKo"]]) {
  const data = buildGifMap(locale);
  const content = `export const ${varName} = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(path.join(root, "scripts", `gif-${locale}-data.mjs`), content);
}

const uiContent = `export const gifUiEn = ${JSON.stringify(gifUiEn, null, 2)};\n\nexport const gifUiKo = ${JSON.stringify(gifUiKo, null, 2)};\n`;
fs.writeFileSync(path.join(root, "scripts", "gif-ui-data.mjs"), uiContent);

console.log("Generated gif-en-data.mjs, gif-ko-data.mjs, gif-ui-data.mjs");
