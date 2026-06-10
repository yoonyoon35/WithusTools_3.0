/**
 * Developer Tools hub + 하위 페이지 + pair 페이지 + UI 데이터 생성
 * 실행: node scripts/build-developer-tool-data.mjs
 */
import fs from "node:fs";
import path from "node:path";

function sectionsFromGuide(guide) {
  return [
    { title: guide.s1, type: "ordered", items: guide.usage },
    { title: guide.s2, type: "paragraphs", items: guide.howItWorks },
    { title: guide.s3, type: "paragraphs", items: guide.about },
    { title: guide.s4, type: "unordered", items: guide.advantages },
    { title: guide.s5, type: "unordered", items: guide.useCases },
  ];
}

function sectionsFromGuide3(guide) {
  return [
    { title: guide.s1, type: "unordered", items: guide.quickStart },
    { title: guide.s2, type: "paragraphs", items: guide.deeper },
    { title: guide.s3, type: "unordered", items: guide.exampleUses },
  ];
}

function buildEntry(raw, mode = "five") {
  if (mode === "three") {
    const { s1, s2, s3, quickStart, deeper, exampleUses, ...rest } = raw;
    return {
      ...rest,
      sections: sectionsFromGuide3({ s1, s2, s3, quickStart, deeper, exampleUses }),
      faq: raw.faq,
    };
  }

  const { s1, s2, s3, s4, s5, usage, howItWorks, about, advantages, useCases, ...rest } = raw;
  return {
    ...rest,
    sections: sectionsFromGuide({ s1, s2, s3, s4, s5, usage, howItWorks, about, advantages, useCases }),
    faq: raw.faq,
  };
}

const COLOR_FORMAT_KEYS = ["hex", "rgb", "rgba", "hsl", "hsv", "cmyk"];
const NUMBER_SYSTEM_KEYS = ["bin", "oct", "dec", "hex", "char"];

const COLOR_LABEL_EN = {
  hex: "HEX",
  rgb: "RGB",
  rgba: "RGBA",
  hsl: "HSL",
  hsv: "HSV",
  cmyk: "CMYK",
};

const COLOR_LABEL_KO = {
  hex: "HEX",
  rgb: "RGB",
  rgba: "RGBA",
  hsl: "HSL",
  hsv: "HSV",
  cmyk: "CMYK",
};

const NUMBER_LABEL_EN = {
  bin: "Binary",
  oct: "Octal",
  dec: "Decimal",
  hex: "Hexadecimal",
  char: "Character",
};

const NUMBER_LABEL_KO = {
  bin: "2진수",
  oct: "8진수",
  dec: "10진수",
  hex: "16진수",
  char: "문자",
};

const colorFormatDescriptionEn = {
  hex: "Hexadecimal color uses six (or eight with alpha) base-16 digits and is common in CSS and design tools.",
  rgb: "RGB represents red, green, and blue channels as 0-255 values in the sRGB color space.",
  rgba: "RGBA extends RGB with alpha transparency from 0 (transparent) to 1 (opaque).",
  hsl: "HSL represents hue, saturation, and lightness, which is convenient for perceptual color tweaks.",
  hsv: "HSV (HSB) represents hue, saturation, and value/brightness, commonly used in color pickers.",
  cmyk: "CMYK represents cyan, magenta, yellow, and black percentages for print-oriented workflows.",
};

const colorFormatDescriptionKo = {
  hex: "HEX 색상은 16진수 6자리(또는 알파 포함 8자리)로 표현하며 CSS와 디자인 도구에서 널리 사용됩니다.",
  rgb: "RGB는 sRGB 공간에서 빨강, 초록, 파랑 채널을 0-255 값으로 표현합니다.",
  rgba: "RGBA는 RGB에 투명도(alpha) 0~1을 추가한 형식입니다.",
  hsl: "HSL은 색상환(H), 채도(S), 명도(L)로 표현해 체감 밝기 조정에 편리합니다.",
  hsv: "HSV(HSB)는 색상(H), 채도(S), 명도/밝기(V)로 표현하며 색상 선택기에서 자주 사용됩니다.",
  cmyk: "CMYK는 시안, 마젠타, 노랑, 검정 잉크 비율로 표현하는 인쇄 지향 모델입니다.",
};

const numberFormatDescriptionEn = {
  bin: "Binary (base 2) uses digits 0 and 1 and maps directly to bit operations.",
  oct: "Octal (base 8) uses digits 0-7 and groups binary digits in chunks of three.",
  dec: "Decimal (base 10) is the everyday number system with digits 0-9.",
  hex: "Hexadecimal (base 16) uses 0-9 and A-F and is compact for bytes and memory values.",
  char: "Character mode maps one symbol to its UTF-16 code unit value in the valid range.",
};

const numberFormatDescriptionKo = {
  bin: "2진수(base 2)는 0과 1만 사용하며 비트 연산과 직접 연결됩니다.",
  oct: "8진수(base 8)는 0-7을 사용하며 이진수 3비트 묶음과 잘 대응됩니다.",
  dec: "10진수(base 10)는 0-9를 사용하는 일상 숫자 체계입니다.",
  hex: "16진수(base 16)는 0-9, A-F를 사용하며 바이트/메모리 값을 간결하게 표현합니다.",
  char: "문자 모드는 한 글자를 UTF-16 코드 단위 값으로 매핑합니다.",
};

const developerEn = {
  developer: buildEntry({
    h1: "Developer Tools",
    subtitle: "Browser utilities for encoding, formatting, color, and QR workflows",
    metaDescription:
      "Free online developer tools for ASCII, Base64, code formatting, color conversion, CSS sprites, number system conversion, and QR generation/reading.",
    intro:
      "Use fast browser-based developer tools for encoding, formatting, color work, and QR tasks. No signup required.",
    guideTitle: "Developer Tools Guide",
    guideIntroBefore: "Popular starting points are",
    guideIntroLink1: "Base64 Encoder & Decoder",
    guideIntroBetween: ",",
    guideIntroLink2: "Code Formatter",
    guideIntroLink3: "QR Code Generator",
    guideIntroAfter: ".",
    s1: "1. How do I open and use a developer utility from this index?",
    s2: "2. How do developer tools on this site run locally in my browser?",
    s3: "3. What developer tools are available and what problems do they solve?",
    s4: "4. Why use browser-based encoders, formatters, and generators?",
    s5: "5. When are quick developer utilities faster than a full IDE or CLI?",
    usage: [
      "Choose the utility you need from the list: converter, formatter, color, sprite, or QR tool.",
      "Paste or upload your input, then run the action (convert, format, generate, or scan).",
      "Copy the result immediately or download output files when available.",
      "Switch tools quickly when you are debugging different data formats in one workflow.",
    ],
    howItWorks: [
      "All developer tools run in your browser, so input data stays on your device.",
      "Converters and encoders process text and files in real time with client-side APIs.",
      "Formatting, color picking, sprite generation, and QR handling are all processed locally.",
    ],
    about: [
      "Developer Tools is a fast browser toolkit for everyday coding and debugging tasks.",
      "It helps with encoding, formatting, color values, sprite output, and QR workflows.",
      "No signup or installation is required.",
    ],
    advantages: [
      "Keeps data local with in-browser processing.",
      "Covers common developer utilities in one place.",
      "Works quickly without account setup.",
      "Supports desktop and mobile usage.",
    ],
    useCases: [
      "Checking encoded payloads while testing APIs.",
      "Cleaning up code snippets before sharing or committing.",
      "Converting number systems during low-level debugging.",
      "Generating QR codes for links, Wi-Fi, and contact cards.",
      "Scanning QR images captured from docs, slides, or screenshots.",
    ],
    faq: [
      {
        question: "What can I do in Developer Tools?",
        answer:
          "You can convert text and number formats, encode or decode Base64, format code, pick colors, generate CSS sprites, and work with QR codes.",
      },
      {
        question: "Are these online developer tools free to use?",
        answer: "Yes. All tools on this page are available without signup.",
      },
      {
        question: "Does data leave my browser while using these tools?",
        answer: "No. Processing runs locally in your browser for most workflows on this page.",
      },
    ],
    backToHome: "← Back to home",
  }),
  "developer.ascii-code-converter": buildEntry({
    h1: "ASCII Code Converter",
    subtitle: "Convert text and ASCII values in decimal, hexadecimal, and binary",
    metaDescription:
      "Convert text to ASCII and ASCII to text with decimal, hex, and binary support plus printable and extended table reference.",
    intro:
      "Convert text and ASCII values quickly in decimal, hex, or binary with a built-in ASCII reference.",
    guideTitle: "ASCII Code Converter Guide",
    guideIntroBefore: "If you are also working with encoded payloads, open the",
    guideIntroLink1: "Base64 Encoder & Decoder",
    guideIntroBetween: "and",
    guideIntroLink2: "Number System Converter",
    guideIntroAfter: ".",
    s1: "1. How can I convert text to ASCII and back on this page?",
    s2: "2. How does this ASCII converter map characters locally in the browser?",
    s3: "3. What is the ASCII table, and how does this tool help students or engineers?",
    s4: "4. Why use an in-browser ASCII reference for quick byte-level checks?",
    s5: "5. When do serial protocols, logs, or embedded workflows hinge on ASCII values?",
    usage: [
      "Text -> ASCII: enter text and get decimal, hex, or binary codes immediately.",
      "ASCII -> Text: enter space- or comma-separated codes in the selected format.",
      "Use the table tabs for Printable (32-126) and Extended (128-255) reference.",
      "Copy outputs or reset quickly with clear actions.",
    ],
    howItWorks: [
      "The converter maps each character to numeric code values for the selected format.",
      "It supports standard and extended ranges in one interface.",
      "Decoding parses tokens and reconstructs text locally in your browser.",
      "No input is uploaded to a server.",
    ],
    about: [
      "Free online ASCII converter for decimal, hexadecimal, and binary workflows.",
      "Useful for protocol debugging, data checks, and encoding education.",
    ],
    advantages: [
      "Bidirectional conversion between text and ASCII values.",
      "Multiple output formats in one screen.",
      "Built-in table reference with two ranges.",
      "Copy and file-load support for quick testing.",
    ],
    useCases: [
      "Debugging low-level text encoding issues.",
      "Validating device or serial protocol payloads.",
      "Learning character codes and binary representation.",
      "Inspecting logs that include raw byte values.",
    ],
    faq: [
      {
        question: "Can I convert both text to ASCII and ASCII to text?",
        answer: "Yes. You can switch both directions and choose decimal, hexadecimal, or binary format.",
      },
      {
        question: "What separators are supported for ASCII input?",
        answer: "Use spaces or commas between ASCII codes when decoding back to text.",
      },
      {
        question: "Does this ASCII converter run online or locally?",
        answer: "It runs in your browser, so conversion happens locally.",
      },
    ],
    backToHub: "← Back to Developer Tools",
  }),
  "developer.base64-encoder-decoder": buildEntry({
    h1: "Base64 Encoder & Decoder",
    subtitle: "Encode and decode Base64 for text and files",
    metaDescription:
      "Free Base64 encoder and decoder with text/file modes, URL-safe option, clipboard copy, and file download.",
    intro: "Encode or decode Base64 for text and files, including URL-safe Base64 output.",
    guideTitle: "Base64 Encoder & Decoder Guide",
    guideIntroBefore: "For related data checks, try the",
    guideIntroLink1: "ASCII Code Converter",
    guideIntroBetween: "and",
    guideIntroLink2: "Code Formatter",
    guideIntroAfter: ".",
    s1: "1. How can I encode or decode Base64 from text or files?",
    s2: "2. How does this Base64 tool process data entirely in my browser?",
    s3: "3. What does this Base64 page include for practical payload workflows?",
    s4: "4. Why handle Base64 locally instead of pasting secrets into unknown sites?",
    s5: "5. When do APIs, data URIs, or attachments rely on Base64 strings?",
    usage: [
      "Text mode: paste text, then choose Encode or Decode.",
      "File mode: upload one file, copy generated Base64, or download decoded output.",
      "Enable URL-safe option when output is used in URLs or tokens.",
    ],
    howItWorks: [
      "Text conversion uses browser Base64 APIs with UTF-8 handling.",
      "File conversion reads local files as data URLs and extracts Base64 safely.",
      "Processing runs entirely on-device in your browser.",
    ],
    about: [
      "Free online Base64 utility for text and files with URL-safe support.",
      "Designed for quick API, storage, and payload handling workflows.",
    ],
    advantages: [
      "Text and file workflows in one tool.",
      "URL-safe conversion option.",
      "Clipboard copy and decoded download.",
      "No signup or server processing required.",
    ],
    useCases: [
      "Encoding binary payloads for API transport.",
      "Storing binary data in JSON or text stores.",
      "Preparing MIME-safe encoded file content.",
    ],
    faq: [
      {
        question: "Can I use this Base64 tool for files as well as text?",
        answer: "Yes. You can encode and decode both plain text and uploaded files.",
      },
      {
        question: "What is URL-safe Base64?",
        answer: "It replaces + and / with - and _ so encoded strings are safer in URLs.",
      },
      {
        question: "Does this Base64 encoder upload my data?",
        answer: "No. Processing runs in your browser.",
      },
    ],
    backToHub: "← Back to Developer Tools",
  }),
  "developer.code-formatter": buildEntry({
    h1: "Code Formatter",
    subtitle: "Format JavaScript, HTML, CSS, and JSON quickly",
    metaDescription:
      "Browser-based code formatter for JavaScript, HTML, CSS, and JSON with file load, copy, and clean output.",
    intro: "Format HTML, CSS, JavaScript, and JSON quickly for cleaner reviews, docs, and commits.",
    guideTitle: "Code Formatter Guide",
    guideIntroBefore: "You can pair this with",
    guideIntroLink1: "Base64 Encoder & Decoder",
    guideIntroBetween: "and",
    guideIntroLink2: "ASCII Code Converter",
    guideIntroAfter: "during API and payload debugging.",
    s1: "1. How can I format HTML, CSS, JavaScript, or JSON with this tool?",
    s2: "2. How does this formatter pretty-print code locally in my browser?",
    s3: "3. What does this formatter change and which languages are supported?",
    s4: "4. Why format snippets in the browser before commits, docs, or chat?",
    s5: "5. When do developers reach for a quick formatter during debugging or reviews?",
    usage: [
      "Paste code or load a file, then choose the target language.",
      "Run Format Code to normalize indentation and spacing.",
      "Copy the result or clear content to restart.",
    ],
    howItWorks: [
      "Formatting uses a Prettier-based pipeline for supported languages.",
      "All work is done in your browser without uploading code.",
    ],
    about: [
      "Free browser code formatter for common web formats.",
      "Useful for readable snippets in docs, pull requests, and support tickets.",
    ],
    advantages: [
      "Supports JavaScript, HTML, CSS, and JSON.",
      "File-load support for fast edits.",
      "Live line/character counters.",
    ],
    useCases: [
      "Normalizing pasted snippets before review.",
      "Cleaning tutorial or documentation examples.",
      "Learning standard style conventions quickly.",
    ],
    faq: [
      {
        question: "Which languages are supported in this code formatter?",
        answer: "You can format JavaScript, HTML, CSS, and JSON.",
      },
      {
        question: "Can I load code from a file?",
        answer: "Yes. You can load a file, format it, then copy the result.",
      },
      {
        question: "Is formatting done server-side?",
        answer: "No. Formatting runs locally in your browser.",
      },
    ],
    backToHub: "← Back to Developer Tools",
  }),
  "developer.color-picker": buildEntry(
    {
      h1: "Color Picker",
      subtitle: "Copy HEX, RGB(A), HSL, HSV, and CMYK from one selected color",
      metaDescription:
        "Pick colors, copy major color formats, check contrast ratio, and open dedicated pair converters in one browser tool.",
      intro:
        "Pick a color once and copy all major formats with contrast checks, saved colors, and dedicated converter links.",
      guideTitle: "Color Picker Guide",
      guideIntroBefore: "Need precise pair conversion pages? Open dedicated converters here, or jump to",
      guideIntroLink1: "Code Formatter",
      guideIntroBetween: "and",
      guideIntroLink2: "CSS Sprites Generator",
      guideIntroAfter: "for frontend workflows.",
      s1: "Quick start",
      s2: "Formulas and deeper content",
      s3: "Example uses",
      quickStart: [
        "Use color input or eyedropper to choose a color; HEX, RGB, RGBA, HSL, HSV, and CMYK update instantly.",
        "Adjust alpha when transparency is needed and copy any format in one click.",
        "Open dedicated format-pair converters for fixed input/output workflows.",
      ],
      deeper: [
        "Detailed conversion formulas and worked examples are provided on each pair converter page.",
        "CMYK output is a practical on-screen approximation; print pipelines may differ by profile.",
      ],
      exampleUses: [
        "Web styling with HEX, rgb(), rgba(), or hsl() output.",
        "Accessibility checks using WCAG contrast comparison.",
        "Palette exploration with complementary/analogous/triadic variants.",
      ],
      faq: [
        {
          question: "Which color formats can I copy from this color picker?",
          answer: "You can copy HEX, RGB, RGBA, HSL, HSV, and CMYK values from one selected color.",
        },
        {
          question: "Can I pick colors directly from the screen?",
          answer: "Yes. Use the eyedropper when your browser supports the API.",
        },
        {
          question: "Does this tool keep a history of picked colors?",
          answer: "Yes. Saved colors can be revisited and used to open pair converters.",
        },
      ],
      backToHub: "← Back to Developer Tools",
    },
    "three"
  ),
  "developer.css-sprites-generator": buildEntry({
    h1: "CSS Sprites Generator",
    subtitle: "Combine images into one sprite sheet with generated CSS",
    metaDescription:
      "Create a CSS sprite sheet from multiple images, control padding/columns/background, and copy generated CSS classes.",
    intro: "Merge multiple images into one sprite sheet and get matching CSS classes instantly.",
    guideTitle: "CSS Sprites Generator Guide",
    guideIntroBefore: "For related frontend utilities, use the",
    guideIntroLink1: "Color Picker",
    guideIntroBetween: "and",
    guideIntroLink2: "Code Formatter",
    guideIntroAfter: ".",
    s1: "1. How can I pack images into one sprite sheet and export CSS?",
    s2: "2. How does this sprite tool lay out tiles and emit background-position CSS?",
    s3: "3. What is a CSS sprite sheet and when is it still useful?",
    s4: "4. Why build sprites in the browser for fast front-end iteration?",
    s5: "5. When do teams prefer one sprite over many icon requests?",
    usage: [
      "Upload images by drag-and-drop or file picker and remove items if needed.",
      "Set padding, max columns, and background color before generation.",
      "Generate, preview, download sprite.png, and copy CSS classes.",
      "Reset the workspace to start a new sheet.",
    ],
    howItWorks: [
      "Canvas API composites all input images into one PNG atlas.",
      "CSS output includes shared .sprite and per-image .sprite-name classes.",
      "Background-position values are generated from actual layout coordinates.",
    ],
    about: [
      "Free online CSS sprite generator with auto CSS output.",
      "Useful for legacy icon workflows and request reduction strategies.",
    ],
    advantages: [
      "Reduces HTTP requests by combining assets.",
      "Configurable spacing and layout.",
      "Auto-generated classes with coordinates.",
      "One-click PNG download and CSS copy.",
    ],
    useCases: [
      "Combining icon sets for legacy front-end bundles.",
      "Building UI sprite sheets for repeated small graphics.",
      "Performance tuning for image-heavy static pages.",
    ],
    faq: [
      {
        question: "Can I generate both sprite image and CSS together?",
        answer: "Yes. The tool exports a sprite PNG and matching CSS classes with positions.",
      },
      {
        question: "Can I control spacing and layout?",
        answer: "Yes. You can set padding, max columns, and background color before generating.",
      },
      {
        question: "Does this sprite generator require installation?",
        answer: "No. It runs in your browser without setup.",
      },
    ],
    backToHub: "← Back to Developer Tools",
  }),
  "developer.numbersystem-converter": buildEntry(
    {
      h1: "Number System Converter",
      subtitle: "Convert binary, octal, decimal, hexadecimal, and character values",
      metaDescription:
        "Convert between binary, octal, decimal, hexadecimal, and character modes with fractional support for numeric bases.",
      intro:
        "Convert binary, octal, decimal, hexadecimal, and character values quickly, including fractional numeric input.",
      guideTitle: "Number System Converter Guide",
      guideIntroBefore: "If you also need text encoding checks, open the",
      guideIntroLink1: "ASCII Code Converter",
      guideIntroBetween: "and",
      guideIntroLink2: "Base64 Encoder & Decoder",
      guideIntroAfter: ".",
      s1: "Quick start",
      s2: "Dedicated pair pages and FAQ",
      s3: "Example uses",
      quickStart: [
        "Select input format: Binary, Octal, Decimal, Hexadecimal, or Character.",
        "Enter value with optional prefixes (0b, 0x, leading 0 for octal) and optional fractional dot on numeric modes.",
        "Read all converted outputs at once, then copy all or clear.",
      ],
      deeper: [
        "Open dedicated pair pages when you only need one fixed input/output direction.",
        "Pair pages keep the same parsing rules and add step-by-step explanation blocks.",
      ],
      exampleUses: [
        "Programming and low-level base conversion tasks.",
        "Character code inspection during debugging.",
        "Learning radix math and fractional conversion behavior.",
      ],
      faq: [
        {
          question: "Which number formats can I convert on this page?",
          answer: "You can convert binary, octal, decimal, hexadecimal, and character formats.",
        },
        {
          question: "Are fractional values supported?",
          answer: "Yes. Numeric base modes support one radix point and fractional digits.",
        },
        {
          question: "Can I open fixed pair converters like binary to hex?",
          answer: "Yes. Dedicated pair pages are listed below the main converter.",
        },
      ],
      backToHub: "← Back to Developer Tools",
    },
    "three"
  ),
  "developer.qr-code-generator": buildEntry({
    h1: "QR Code Generator",
    subtitle: "Generate QR codes for URLs, contacts, Wi-Fi, and more",
    metaDescription:
      "Create QR codes for multiple payload types with custom colors, logo, error correction, and PNG/JPG/SVG/PDF download.",
    intro: "Create custom QR codes for URLs, Wi-Fi, contacts, and campaigns with quick export options.",
    guideTitle: "QR Code Generator Guide",
    guideIntroBefore: "Want to verify scans right away? Open the",
    guideIntroLink1: "QR Code Reader",
    guideIntroBetween: ". For payload text cleanup, use",
    guideIntroLink2: "Code Formatter",
    guideIntroAfter: ".",
    s1: "1. How can I create QR codes for URL, Wi-Fi, vCard, and other payloads?",
    s2: "2. How does this QR generator build images locally in my browser?",
    s3: "3. Which payload types are supported and how should I test before printing?",
    s4: "4. Why generate QR codes online when content stays on-device?",
    s5: "5. When do marketers and developers ship static QR codes for apps or events?",
    usage: [
      "Choose content type, then fill required fields for that payload.",
      "Adjust size, foreground/background colors, error correction, and output format.",
      "Optionally upload a logo and set logo size for branded QR output.",
      "Download as PNG, JPG, SVG, or PDF after preview is generated.",
    ],
    howItWorks: [
      "The QR library builds encoded symbols from selected payload schema.",
      "Rendering is done on canvas with optional logo overlay.",
      "Download export is generated in-browser without server roundtrips.",
    ],
    about: [
      "Free online QR generator with broad payload support and style controls.",
      "Ideal for campaign links, contact sharing, and Wi-Fi onboarding.",
    ],
    advantages: [
      "Supports major payload types in one UI.",
      "Branding options with logo and colors.",
      "Multiple export formats.",
      "Local processing in browser.",
    ],
    useCases: [
      "Marketing campaign and event QR assets.",
      "Wi-Fi and contact sharing in offices or venues.",
      "Generating static QR for product docs or onboarding.",
    ],
    faq: [
      {
        question: "What content types can I encode in this QR generator?",
        answer:
          "You can create QR codes for URL, text, email, phone, SMS, WhatsApp, Wi-Fi, vCard, location, Bitcoin, and image URL.",
      },
      {
        question: "Can I add a logo and custom colors?",
        answer: "Yes. You can customize colors and place a center logo with size control.",
      },
      {
        question: "Which file formats can I download?",
        answer: "You can download QR output as PNG, JPG, SVG, or PDF.",
      },
    ],
    backToHub: "← Back to Developer Tools",
  }),
  "developer.qr-code-reader": buildEntry({
    h1: "QR Code Reader",
    subtitle: "Scan QR from camera or uploaded image",
    metaDescription:
      "Read QR codes from live camera or uploaded images and copy/open decoded content locally in your browser.",
    intro: "Scan QR codes from camera or image uploads and get decoded content right away.",
    guideTitle: "QR Code Reader Guide",
    guideIntroBefore: "To create new QR assets, use the",
    guideIntroLink1: "QR Code Generator",
    guideIntroBetween: ".",
    guideIntroLink2: "QR Code Generator",
    guideIntroAfter: " then verify output here.",
    s1: "1. How can I scan QR codes from camera or uploaded image?",
    s2: "2. How does this QR reader decode content locally in my browser?",
    s3: "3. What can this reader decode and how does privacy work?",
    s4: "4. Why use a browser reader instead of unknown scanner apps?",
    s5: "5. When are web QR readers useful for tickets, Wi-Fi, or account setup?",
    usage: [
      "Camera mode: allow access, align QR in frame, and wait for auto-detection.",
      "Upload mode: drop or select image files and decode once.",
      "Copy decoded text or open URL results directly from output panel.",
    ],
    howItWorks: [
      "A QR decoding library reads image pixels from camera frames or uploaded files.",
      "Camera mode continuously scans until a valid symbol is found.",
      "Upload mode performs one decode pass per image.",
    ],
    about: [
      "Free browser QR scanner with camera and image upload support.",
      "Decodes URL, text, contact, Wi-Fi, and similar payload types locally.",
    ],
    advantages: [
      "Camera and upload modes in one tool.",
      "Quick copy/open actions after decode.",
      "No account required.",
      "Runs locally after load.",
    ],
    useCases: [
      "Scanning QR from posters, slides, and printed docs.",
      "Decoding screenshots or saved QR images.",
      "Validating generated QR assets before release.",
    ],
    faq: [
      {
        question: "Can I scan QR codes from both camera and image files?",
        answer: "Yes. You can scan live camera input or upload common image formats.",
      },
      {
        question: "What can I do with the decoded result?",
        answer: "You can copy decoded text or open URL-type results directly.",
      },
      {
        question: "Does QR scanning happen on a server?",
        answer: "No. Decoding runs locally in your browser.",
      },
    ],
    backToHub: "← Back to Developer Tools",
  }),
};

const developerKo = {
  developer: buildEntry({
    h1: "개발자 도구",
    subtitle: "인코딩, 포맷팅, 색상, QR 작업을 위한 브라우저 유틸리티",
    metaDescription:
      "ASCII, Base64, 코드 포맷팅, 색상 변환, CSS 스프라이트, 진법 변환, QR 생성/리더를 제공하는 무료 개발자 도구.",
    intro:
      "인코딩, 포맷팅, 색상 작업, QR 업무를 브라우저에서 빠르게 처리하세요. 가입 없이 바로 사용할 수 있습니다.",
    guideTitle: "개발자 도구 가이드",
    guideIntroBefore: "처음 시작하기 좋은 도구는",
    guideIntroLink1: "Base64 인코더/디코더",
    guideIntroBetween: ",",
    guideIntroLink2: "코드 포맷터",
    guideIntroLink3: "QR 코드 생성기",
    guideIntroAfter: "입니다.",
    s1: "1. 이 인덱스에서 필요한 개발 도구를 어떻게 선택하고 사용하나요?",
    s2: "2. 이 사이트의 개발 도구는 브라우저에서 로컬로 어떻게 동작하나요?",
    s3: "3. 어떤 개발 도구가 있고 어떤 문제를 해결하나요?",
    s4: "4. 브라우저 기반 인코더/포맷터/생성기를 쓰는 이유는?",
    s5: "5. 언제 IDE나 CLI보다 빠른 유틸리티가 유리한가요?",
    usage: [
      "목적에 맞는 도구(변환, 포맷, 색상, 스프라이트, QR)를 선택합니다.",
      "입력값을 붙여 넣거나 업로드한 뒤 변환/생성/스캔을 실행합니다.",
      "결과를 즉시 복사하거나 필요한 파일을 다운로드합니다.",
      "한 워크플로에서 형식이 바뀔 때 도구를 빠르게 전환합니다.",
    ],
    howItWorks: [
      "개발자 도구는 브라우저에서 실행되어 입력 데이터가 기기에 남습니다.",
      "변환기/인코더는 클라이언트 API로 실시간 처리합니다.",
      "포맷팅, 색상 계산, 스프라이트 생성, QR 처리도 로컬로 수행됩니다.",
    ],
    about: [
      "개발자 도구는 일상적인 코딩·디버깅을 위한 빠른 브라우저 툴킷입니다.",
      "인코딩, 포맷팅, 색상 값, 스프라이트 출력, QR 워크플로를 지원합니다.",
      "가입이나 설치가 필요 없습니다.",
    ],
    advantages: [
      "브라우저 로컬 처리로 데이터 보존.",
      "자주 쓰는 개발 유틸리티를 한곳에 제공.",
      "계정 없이 즉시 사용.",
      "데스크톱·모바일 사용 가능.",
    ],
    useCases: [
      "API 테스트 중 인코딩 페이로드 확인.",
      "공유/커밋 전 코드 스니펫 정리.",
      "저수준 디버깅 중 진법 변환.",
      "링크/와이파이/연락처용 QR 생성.",
      "문서/슬라이드/스크린샷의 QR 즉시 스캔.",
    ],
    faq: [
      {
        question: "개발자 도구에서 무엇을 할 수 있나요?",
        answer: "텍스트·진법 변환, Base64 인코딩/디코딩, 코드 포맷팅, 색상 작업, CSS 스프라이트, QR 작업을 할 수 있습니다.",
      },
      {
        question: "이 개발자 도구는 무료인가요?",
        answer: "예. 가입 없이 모두 사용할 수 있습니다.",
      },
      {
        question: "사용 중 데이터가 외부로 전송되나요?",
        answer: "아니요. 대부분의 처리 흐름은 브라우저 로컬에서 실행됩니다.",
      },
    ],
    backToHome: "← 홈으로",
  }),
  "developer.ascii-code-converter": buildEntry({
    h1: "ASCII 코드 변환",
    subtitle: "텍스트와 ASCII 값을 10진/16진/2진으로 변환",
    metaDescription:
      "텍스트↔ASCII 변환과 Printable/Extended 테이블을 제공하는 ASCII 변환기.",
    intro: "내장 ASCII 표와 함께 텍스트와 ASCII 값을 10진, 16진, 2진으로 빠르게 변환합니다.",
    guideTitle: "ASCII 코드 변환 가이드",
    guideIntroBefore: "인코딩 페이로드를 함께 확인하려면",
    guideIntroLink1: "Base64 인코더/디코더",
    guideIntroBetween: "와",
    guideIntroLink2: "진법 변환기",
    guideIntroAfter: "를 사용하세요.",
    s1: "1. 이 페이지에서 텍스트↔ASCII를 어떻게 변환하나요?",
    s2: "2. 이 ASCII 변환기는 브라우저에서 문자를 어떻게 매핑하나요?",
    s3: "3. ASCII 표와 이 도구의 활용 포인트는 무엇인가요?",
    s4: "4. 빠른 바이트 점검에 브라우저 ASCII 표가 유리한 이유는?",
    s5: "5. 언제 ASCII 값이 여전히 중요한가요?",
    usage: [
      "Text -> ASCII: 텍스트를 입력하면 10진/16진/2진 코드로 변환됩니다.",
      "ASCII -> Text: 공백/콤마로 구분한 코드를 입력해 텍스트로 복원합니다.",
      "Printable(32-126), Extended(128-255) 표를 전환해 참조합니다.",
      "복사/초기화로 반복 테스트를 빠르게 진행합니다.",
    ],
    howItWorks: [
      "문자 코드를 선택한 형식의 숫자로 변환합니다.",
      "표준/확장 범위를 한 UI에서 지원합니다.",
      "디코딩은 토큰 파싱 후 브라우저에서 텍스트를 재구성합니다.",
      "서버 업로드가 없습니다.",
    ],
    about: [
      "10진/16진/2진을 지원하는 무료 ASCII 변환기입니다.",
      "프로토콜 디버깅, 데이터 검증, 인코딩 학습에 유용합니다.",
    ],
    advantages: [
      "텍스트↔ASCII 양방향 변환.",
      "여러 숫자 형식을 한 화면에서 제공.",
      "두 범위의 ASCII 테이블 포함.",
      "복사/파일 로드 지원.",
    ],
    useCases: [
      "저수준 텍스트 인코딩 이슈 디버깅.",
      "직렬/장치 프로토콜 페이로드 점검.",
      "문자 코드와 이진 표현 학습.",
      "원시 바이트 값이 포함된 로그 분석.",
    ],
    faq: [
      { question: "텍스트→ASCII와 ASCII→텍스트를 모두 지원하나요?", answer: "예. 두 방향 모두 지원하며 형식도 선택할 수 있습니다." },
      { question: "ASCII 입력 구분자는 무엇을 지원하나요?", answer: "복원 시 공백 또는 콤마 구분자를 지원합니다." },
      { question: "온라인 처리인가요, 로컬 처리인가요?", answer: "브라우저 로컬에서 처리됩니다." },
    ],
    backToHub: "← 개발자 도구로",
  }),
  "developer.base64-encoder-decoder": buildEntry({
    h1: "Base64 인코더/디코더",
    subtitle: "텍스트와 파일 Base64 인코딩/디코딩",
    metaDescription:
      "텍스트/파일 모드, URL-safe 옵션, 복사, 파일 다운로드를 제공하는 Base64 도구.",
    intro: "텍스트와 파일을 Base64로 인코딩/디코딩하고 URL-safe 출력도 바로 사용할 수 있습니다.",
    guideTitle: "Base64 인코더/디코더 가이드",
    guideIntroBefore: "연관 확인 도구로",
    guideIntroLink1: "ASCII 코드 변환",
    guideIntroBetween: "과",
    guideIntroLink2: "코드 포맷터",
    guideIntroAfter: "를 함께 사용해 보세요.",
    s1: "1. 텍스트/파일 Base64 인코딩·디코딩은 어떻게 하나요?",
    s2: "2. 브라우저에서 데이터가 어떻게 처리되나요?",
    s3: "3. 실무 페이로드 처리에 어떤 기능이 포함되나요?",
    s4: "4. 민감 정보를 로컬에서 처리해야 하는 이유는?",
    s5: "5. 언제 Base64 문자열이 필요한가요?",
    usage: [
      "텍스트 모드에서 Encode/Decode를 실행합니다.",
      "파일 모드에서 업로드 후 Base64를 복사하거나 복원 파일을 다운로드합니다.",
      "URL이나 토큰에 쓸 때 URL-safe 옵션을 켭니다.",
    ],
    howItWorks: [
      "텍스트는 브라우저 Base64 API와 UTF-8 처리로 변환합니다.",
      "파일은 data URL로 읽어 Base64 본문을 추출합니다.",
      "모든 처리는 브라우저에서 실행됩니다.",
    ],
    about: [
      "텍스트·파일을 함께 처리하는 무료 Base64 도구입니다.",
      "API, 저장, 전달용 페이로드 작업에 적합합니다.",
    ],
    advantages: [
      "텍스트/파일 통합 워크플로.",
      "URL-safe 옵션 제공.",
      "클립보드 복사와 파일 다운로드 지원.",
      "서버 업로드 없음.",
    ],
    useCases: [
      "API 전송용 바이너리 페이로드 인코딩.",
      "텍스트 저장소에 바이너리 데이터 저장.",
      "첨부/전달용 MIME 인코딩 문자열 준비.",
    ],
    faq: [
      { question: "텍스트와 파일 모두 지원하나요?", answer: "예. 텍스트와 업로드 파일 모두 인코딩/디코딩할 수 있습니다." },
      { question: "URL-safe Base64란 무엇인가요?", answer: "+, / 문자를 -, _로 바꿔 URL에서 안전하게 쓰는 방식입니다." },
      { question: "데이터가 업로드되나요?", answer: "아니요. 브라우저 로컬에서 처리됩니다." },
    ],
    backToHub: "← 개발자 도구로",
  }),
  "developer.code-formatter": buildEntry({
    h1: "코드 포맷터",
    subtitle: "JavaScript, HTML, CSS, JSON 빠른 정렬",
    metaDescription: "JavaScript/HTML/CSS/JSON을 브라우저에서 정돈하는 코드 포맷터.",
    intro: "HTML, CSS, JavaScript, JSON 코드를 빠르게 정리해 리뷰·문서·커밋 가독성을 높입니다.",
    guideTitle: "코드 포맷터 가이드",
    guideIntroBefore: "API/페이로드 디버깅 시",
    guideIntroLink1: "Base64 인코더/디코더",
    guideIntroBetween: "와",
    guideIntroLink2: "ASCII 코드 변환",
    guideIntroAfter: "을 같이 쓰면 편리합니다.",
    s1: "1. 이 도구로 코드 포맷팅을 어떻게 하나요?",
    s2: "2. 브라우저에서 코드 정렬은 어떻게 동작하나요?",
    s3: "3. 어떤 변경을 수행하고 어떤 언어를 지원하나요?",
    s4: "4. 커밋·문서·채팅 전에 브라우저 포맷팅이 유용한 이유는?",
    s5: "5. 언제 빠른 포맷터가 특히 도움이 되나요?",
    usage: [
      "코드를 붙여 넣거나 파일을 불러오고 언어를 선택합니다.",
      "Format Code를 실행해 들여쓰기/공백을 정규화합니다.",
      "결과를 복사하거나 초기화합니다.",
    ],
    howItWorks: [
      "Prettier 기반 포맷팅 파이프라인을 사용합니다.",
      "코드 업로드 없이 브라우저에서 처리합니다.",
    ],
    about: [
      "웹 개발에서 자주 쓰는 형식을 지원하는 무료 코드 포맷터입니다.",
      "문서, PR, 문의 대응용 스니펫 정리에 유용합니다.",
    ],
    advantages: [
      "JS/HTML/CSS/JSON 지원.",
      "파일 불러오기 가능.",
      "라인/문자 수 확인 가능.",
    ],
    useCases: [
      "리뷰 전에 코드 스타일 정리.",
      "문서 예제 코드 정돈.",
      "표준 포맷 스타일 학습.",
    ],
    faq: [
      { question: "지원 언어는 무엇인가요?", answer: "JavaScript, HTML, CSS, JSON을 지원합니다." },
      { question: "파일에서 코드 로드가 가능한가요?", answer: "예. 파일 로드 후 포맷팅하고 복사할 수 있습니다." },
      { question: "서버에서 포맷팅하나요?", answer: "아니요. 브라우저 로컬에서 실행됩니다." },
    ],
    backToHub: "← 개발자 도구로",
  }),
  "developer.color-picker": buildEntry(
    {
      h1: "컬러 피커",
      subtitle: "한 번 선택으로 HEX, RGB(A), HSL, HSV, CMYK 복사",
      metaDescription:
        "색상 선택, 주요 포맷 복사, 대비 확인, 전용 페어 변환기 이동을 한 번에 제공하는 컬러 도구.",
      intro: "색상을 한 번 선택하면 주요 포맷 복사, 대비 확인, 전용 변환기 이동까지 한 화면에서 처리할 수 있습니다.",
      guideTitle: "컬러 피커 가이드",
      guideIntroBefore: "정밀 페어 변환이 필요하면 전용 변환기를 열고, 프론트엔드 작업은",
      guideIntroLink1: "코드 포맷터",
      guideIntroBetween: "와",
      guideIntroLink2: "CSS 스프라이트 생성기",
      guideIntroAfter: "를 함께 사용하세요.",
      s1: "빠른 시작",
      s2: "수식 및 심화 내용",
      s3: "활용 예시",
      quickStart: [
        "색상 입력/아이드로퍼로 선택하면 HEX, RGB, RGBA, HSL, HSV, CMYK가 즉시 갱신됩니다.",
        "투명도가 필요하면 알파를 조정하고 원하는 형식을 바로 복사합니다.",
        "입출력 형식을 고정하고 싶다면 전용 페어 변환 페이지를 엽니다.",
      ],
      deeper: [
        "자세한 변환 수식과 계산 예시는 각 페어 변환 페이지에서 확인할 수 있습니다.",
        "CMYK는 화면 기준 근사치이며 실제 인쇄 프로파일과 차이가 날 수 있습니다.",
      ],
      exampleUses: [
        "웹 스타일링용 HEX, rgb(), rgba(), hsl() 코드 생성.",
        "WCAG 대비 기준으로 접근성 점검.",
        "보색/유사색/삼각색 조합으로 팔레트 탐색.",
      ],
      faq: [
        { question: "어떤 색상 형식을 복사할 수 있나요?", answer: "HEX, RGB, RGBA, HSL, HSV, CMYK를 모두 복사할 수 있습니다." },
        { question: "화면에서 직접 색상을 집을 수 있나요?", answer: "예. 브라우저가 API를 지원하면 아이드로퍼를 사용할 수 있습니다." },
        { question: "선택한 색상 이력이 저장되나요?", answer: "예. 저장한 색상을 다시 열고 전용 변환기로 이동할 수 있습니다." },
      ],
      backToHub: "← 개발자 도구로",
    },
    "three"
  ),
  "developer.css-sprites-generator": buildEntry({
    h1: "CSS 스프라이트 생성",
    subtitle: "이미지를 한 장으로 합치고 CSS 클래스 자동 생성",
    metaDescription:
      "여러 이미지를 스프라이트 시트로 합치고 padding/열/배경을 조정해 CSS를 생성합니다.",
    intro: "여러 이미지를 하나의 스프라이트 시트로 합치고 대응 CSS 클래스를 즉시 생성합니다.",
    guideTitle: "CSS 스프라이트 생성기 가이드",
    guideIntroBefore: "연관 프론트엔드 도구로",
    guideIntroLink1: "컬러 피커",
    guideIntroBetween: "와",
    guideIntroLink2: "코드 포맷터",
    guideIntroAfter: "를 활용하세요.",
    s1: "1. 이 페이지에서 스프라이트와 CSS를 어떻게 만들까요?",
    s2: "2. 타일 배치와 background-position CSS는 어떻게 생성되나요?",
    s3: "3. CSS 스프라이트가 여전히 유용한 상황은?",
    s4: "4. 브라우저에서 빠르게 반복 제작하는 장점은?",
    s5: "5. 언제 개별 아이콘 대신 스프라이트를 선택하나요?",
    usage: [
      "이미지를 드래그/업로드하고 필요 없는 항목은 제거합니다.",
      "padding, 최대 열 수, 배경색을 설정합니다.",
      "생성 후 미리보기, sprite.png 다운로드, CSS 복사를 진행합니다.",
      "Reset으로 새 작업을 시작합니다.",
    ],
    howItWorks: [
      "Canvas API로 이미지를 하나의 PNG로 합성합니다.",
      ".sprite 공통 클래스와 .sprite-name 클래스가 자동 생성됩니다.",
      "좌표 기반 background-position 값이 함께 출력됩니다.",
    ],
    about: [
      "자동 CSS 출력을 제공하는 무료 온라인 스프라이트 생성기입니다.",
      "요청 수 절감이 필요한 아이콘 워크플로에 적합합니다.",
    ],
    advantages: [
      "이미지 요청 수 감소.",
      "여백/레이아웃 설정 가능.",
      "좌표 포함 CSS 자동 생성.",
      "PNG 다운로드 + 코드 복사 일체형.",
    ],
    useCases: [
      "레거시 프론트엔드 아이콘 통합.",
      "반복 UI 그래픽용 스프라이트 제작.",
      "정적 페이지 이미지 성능 개선.",
    ],
    faq: [
      { question: "스프라이트 이미지와 CSS를 함께 만들 수 있나요?", answer: "예. PNG와 위치가 포함된 CSS를 동시에 생성합니다." },
      { question: "간격/레이아웃 조정이 가능한가요?", answer: "예. padding, 최대 열 수, 배경색을 설정할 수 있습니다." },
      { question: "설치가 필요한가요?", answer: "아니요. 브라우저에서 바로 동작합니다." },
    ],
    backToHub: "← 개발자 도구로",
  }),
  "developer.numbersystem-converter": buildEntry(
    {
      h1: "진법 변환기",
      subtitle: "2진수, 8진수, 10진수, 16진수, 문자 변환",
      metaDescription:
        "2/8/10/16진수와 문자 모드를 상호 변환하며 숫자 모드에서 소수점 입력을 지원합니다.",
      intro: "2진수, 8진수, 10진수, 16진수, 문자 값을 빠르게 변환하고 숫자 모드 소수점 입력도 처리합니다.",
      guideTitle: "진법 변환기 가이드",
      guideIntroBefore: "문자 인코딩 확인이 필요하면",
      guideIntroLink1: "ASCII 코드 변환",
      guideIntroBetween: "과",
      guideIntroLink2: "Base64 인코더/디코더",
      guideIntroAfter: "를 함께 사용하세요.",
      s1: "빠른 시작",
      s2: "전용 페어 페이지와 FAQ",
      s3: "활용 예시",
      quickStart: [
        "입력 형식(2진수/8진수/10진수/16진수/문자)을 선택합니다.",
        "필요 시 접두(0b, 0x, 선행 0)와 소수점(숫자 모드)을 사용해 값을 입력합니다.",
        "모든 결과를 한 번에 확인하고 전체 복사 또는 초기화를 수행합니다.",
      ],
      deeper: [
        "특정 방향만 필요하면 전용 페어 페이지를 사용하세요.",
        "페어 페이지는 동일 파싱 규칙 + 단계별 설명을 제공합니다.",
      ],
      exampleUses: [
        "프로그래밍/저수준 디버깅 진법 변환.",
        "문자 코드 확인.",
        "기수법과 소수 진법 이해 학습.",
      ],
      faq: [
        { question: "어떤 형식을 변환할 수 있나요?", answer: "2진수, 8진수, 10진수, 16진수, 문자 형식을 지원합니다." },
        { question: "소수점 값을 지원하나요?", answer: "예. 숫자 모드에서 소수점 한 개와 소수 자릿수를 지원합니다." },
        { question: "binary to hex 같은 고정 페어 페이지가 있나요?", answer: "예. 메인 변환기 아래 전용 페어 목록에서 열 수 있습니다." },
      ],
      backToHub: "← 개발자 도구로",
    },
    "three"
  ),
  "developer.qr-code-generator": buildEntry({
    h1: "QR 코드 생성기",
    subtitle: "URL, 연락처, Wi-Fi 등 다양한 QR 생성",
    metaDescription:
      "다양한 콘텐츠 타입 QR 생성, 색상/로고/오류정정 설정, PNG/JPG/SVG/PDF 다운로드 지원.",
    intro: "URL, Wi-Fi, 연락처, 캠페인용 QR 코드를 빠르게 생성하고 여러 형식으로 내보낼 수 있습니다.",
    guideTitle: "QR 코드 생성기 가이드",
    guideIntroBefore: "즉시 스캔 검증하려면",
    guideIntroLink1: "QR 코드 리더",
    guideIntroBetween: "를 열고, 페이로드 텍스트 정리는",
    guideIntroLink2: "코드 포맷터",
    guideIntroAfter: "를 사용하세요.",
    s1: "1. URL, Wi-Fi, vCard 등 QR은 어떻게 생성하나요?",
    s2: "2. 브라우저에서 QR 이미지는 어떻게 만들어지나요?",
    s3: "3. 지원 타입과 출력 전 테스트 포인트는 무엇인가요?",
    s4: "4. 로컬 처리 기반 QR 생성의 장점은?",
    s5: "5. 언제 정적 QR을 배포하나요?",
    usage: [
      "콘텐츠 타입을 선택하고 필수 입력값을 채웁니다.",
      "크기, 전경/배경색, 오류 정정, 다운로드 형식을 설정합니다.",
      "필요하면 로고를 업로드하고 크기를 조절합니다.",
      "미리보기 확인 후 PNG/JPG/SVG/PDF로 다운로드합니다.",
    ],
    howItWorks: [
      "선택한 스키마에 맞춰 QR 페이로드를 인코딩합니다.",
      "캔버스 렌더링 후 로고 오버레이를 적용합니다.",
      "브라우저에서 바로 내보내기 파일을 생성합니다.",
    ],
    about: [
      "여러 페이로드 타입과 스타일 옵션을 지원하는 무료 QR 생성기입니다.",
      "마케팅 링크, 연락처 공유, Wi-Fi 안내에 적합합니다.",
    ],
    advantages: [
      "다양한 콘텐츠 타입 지원.",
      "로고/색상 브랜딩 옵션.",
      "여러 다운로드 형식 제공.",
      "브라우저 로컬 처리.",
    ],
    useCases: [
      "이벤트/캠페인 QR 제작.",
      "사무실·매장 Wi-Fi 및 연락처 공유.",
      "배포 전 문서용 정적 QR 생성.",
    ],
    faq: [
      { question: "어떤 콘텐츠 타입을 인코딩할 수 있나요?", answer: "URL, 텍스트, 이메일, 전화, SMS, WhatsApp, Wi-Fi, vCard, 위치, Bitcoin, 이미지 URL을 지원합니다." },
      { question: "로고와 커스텀 색상을 넣을 수 있나요?", answer: "예. 전경/배경색과 중앙 로고 크기를 설정할 수 있습니다." },
      { question: "다운로드 형식은 무엇인가요?", answer: "PNG, JPG, SVG, PDF로 저장할 수 있습니다." },
    ],
    backToHub: "← 개발자 도구로",
  }),
  "developer.qr-code-reader": buildEntry({
    h1: "QR 코드 리더",
    subtitle: "카메라 또는 이미지 업로드로 QR 스캔",
    metaDescription:
      "카메라/업로드 이미지에서 QR을 해독하고 결과 복사·열기를 제공하는 브라우저 QR 리더.",
    intro: "카메라 또는 이미지 업로드로 QR 코드를 스캔하고 해독 결과를 즉시 확인합니다.",
    guideTitle: "QR 코드 리더 가이드",
    guideIntroBefore: "새 QR을 만들려면",
    guideIntroLink1: "QR 코드 생성기",
    guideIntroBetween: "를 사용하세요.",
    guideIntroLink2: "QR 코드 생성기",
    guideIntroAfter: " 결과를 여기서 바로 검증할 수 있습니다.",
    s1: "1. 카메라/이미지로 QR을 어떻게 스캔하나요?",
    s2: "2. 브라우저에서 QR 해독은 어떻게 동작하나요?",
    s3: "3. 어떤 내용이 해독되며 프라이버시는 어떻게 보장되나요?",
    s4: "4. 브라우저 리더를 쓰는 장점은 무엇인가요?",
    s5: "5. 언제 웹 QR 리더가 특히 편리한가요?",
    usage: [
      "카메라 모드에서 권한 허용 후 프레임 안에 QR을 맞춥니다.",
      "업로드 모드에서 이미지 파일을 드롭/선택해 해독합니다.",
      "결과 텍스트를 복사하거나 URL이면 바로 열 수 있습니다.",
    ],
    howItWorks: [
      "카메라 프레임 또는 업로드 이미지 픽셀에서 QR을 해석합니다.",
      "카메라는 성공할 때까지 연속 스캔합니다.",
      "업로드는 이미지당 1회 해독을 수행합니다.",
    ],
    about: [
      "카메라/업로드를 지원하는 무료 브라우저 QR 스캐너입니다.",
      "URL, 텍스트, 연락처, Wi-Fi 등 주요 QR 내용을 로컬 해독합니다.",
    ],
    advantages: [
      "카메라 + 업로드 통합 지원.",
      "복사/열기 후처리 제공.",
      "가입 불필요.",
      "로컬 실행.",
    ],
    useCases: [
      "포스터/문서/슬라이드 QR 스캔.",
      "스크린샷에 포함된 QR 해독.",
      "생성된 QR 품질 검증.",
    ],
    faq: [
      { question: "카메라와 이미지 파일 둘 다 지원하나요?", answer: "예. 라이브 카메라 또는 업로드 이미지로 스캔할 수 있습니다." },
      { question: "해독 결과로 무엇을 할 수 있나요?", answer: "텍스트 복사 또는 URL 직접 열기를 사용할 수 있습니다." },
      { question: "서버에서 스캔하나요?", answer: "아니요. 브라우저에서 로컬 해독합니다." },
    ],
    backToHub: "← 개발자 도구로",
  }),
};

function colorPairSlug(from, to) {
  return `${from}-to-${to}`;
}

function numberPairSlug(from, to) {
  return `${from}-to-${to}`;
}

function buildColorPairEntries(locale) {
  const isKo = locale === "ko";
  const map = {};

  for (const from of COLOR_FORMAT_KEYS) {
    for (const to of COLOR_FORMAT_KEYS) {
      if (from === to) continue;
      const slug = colorPairSlug(from, to);
      const fromLabel = isKo ? COLOR_LABEL_KO[from] : COLOR_LABEL_EN[from];
      const toLabel = isKo ? COLOR_LABEL_KO[to] : COLOR_LABEL_EN[to];
      const key = `developer.color-picker.converter.${slug}`;

      map[key] = {
        h1: isKo ? `${fromLabel} -> ${toLabel} 변환기` : `${fromLabel} to ${toLabel} Converter`,
        subtitle: isKo
          ? `${fromLabel} 값을 ${toLabel} 형식으로 고정 변환`
          : `Fixed ${fromLabel} to ${toLabel} conversion`,
        intro: isKo
          ? `${fromLabel} 입력을 ${toLabel} 출력으로 변환합니다. 계산 줄과 결과를 바로 복사할 수 있습니다.`
          : `Convert ${fromLabel} input to ${toLabel} output with formula lines and copy-ready result.`,
        guideTitle: isKo ? `${fromLabel} -> ${toLabel} 변환 가이드` : `${fromLabel} to ${toLabel} Guide`,
        sections: [
          {
            title: isKo ? `${fromLabel} 형식 소개` : `About ${fromLabel}`,
            type: "paragraphs",
            items: [isKo ? colorFormatDescriptionKo[from] : colorFormatDescriptionEn[from]],
          },
          {
            title: isKo ? `${toLabel} 형식 소개` : `About ${toLabel}`,
            type: "paragraphs",
            items: [isKo ? colorFormatDescriptionKo[to] : colorFormatDescriptionEn[to]],
          },
          {
            title: isKo ? "요약" : "Summary",
            type: "paragraphs",
            items: [
              isKo
                ? `${fromLabel} 입력을 sRGB 기준으로 해석한 뒤 ${toLabel} 표기로 다시 인코딩합니다.`
                : `The converter parses ${fromLabel}, normalizes through sRGB, and encodes ${toLabel}.`,
            ],
          },
          {
            title: isKo ? "관계 설명" : "Relationship context",
            type: "paragraphs",
            items: [
              isKo
                ? `${fromLabel}와 ${toLabel}는 같은 색을 다른 표기 체계로 표현한 값입니다.`
                : `${fromLabel} and ${toLabel} describe the same color in different notations.`,
            ],
          },
        ],
        faq: [
          {
            question: isKo
              ? `이 페이지에서 ${fromLabel} -> ${toLabel} 변환은 어떻게 하나요?`
              : `How do I convert ${fromLabel} to ${toLabel} on this page?`,
            answer: isKo
              ? `${fromLabel} 값을 입력하면 ${toLabel} 결과가 즉시 계산됩니다.`
              : `Enter a ${fromLabel} value and the ${toLabel} result is generated immediately.`,
          },
          {
            question: isKo ? "변환은 로컬에서 실행되나요?" : "Does this conversion run locally?",
            answer: isKo ? "예. 브라우저에서 처리됩니다." : "Yes. Processing runs in your browser.",
          },
          {
            question: isKo ? "다른 색상 페어로 이동할 수 있나요?" : "Can I switch to other color pairs?",
            answer: isKo
              ? "예. 하단 크로스 링크에서 다른 전용 변환기로 이동할 수 있습니다."
              : "Yes. Use cross-links below to open other dedicated color converters.",
          },
        ],
        backToHub: isKo ? "← 컬러 피커(전체 형식)" : "← Color Picker (all formats)",
        backToDeveloper: isKo ? "개발자 도구 홈" : "Developer Tools home",
      };
    }
  }

  return map;
}

function buildNumberPairEntries(locale) {
  const isKo = locale === "ko";
  const map = {};

  for (const from of NUMBER_SYSTEM_KEYS) {
    for (const to of NUMBER_SYSTEM_KEYS) {
      if (from === to) continue;
      const slug = numberPairSlug(from, to);
      const fromLabel = isKo ? NUMBER_LABEL_KO[from] : NUMBER_LABEL_EN[from];
      const toLabel = isKo ? NUMBER_LABEL_KO[to] : NUMBER_LABEL_EN[to];
      const key = `developer.numbersystem-converter.${slug}`;

      map[key] = {
        h1: isKo ? `${fromLabel} -> ${toLabel} 변환기` : `${fromLabel} to ${toLabel} Converter`,
        subtitle: isKo ? `${fromLabel} 고정 입력에서 ${toLabel} 출력` : `Fixed ${fromLabel} input to ${toLabel} output`,
        intro: isKo
          ? `${fromLabel} 값을 ${toLabel}로 변환합니다. 단계별 계산 가이드와 표를 함께 제공합니다.`
          : `Convert ${fromLabel} values to ${toLabel} with step-by-step explanation and reference tables.`,
        guideTitle: isKo ? `${fromLabel} -> ${toLabel} 변환 가이드` : `${fromLabel} to ${toLabel} Guide`,
        sections: [
          {
            title: isKo ? `${fromLabel} 형식 소개` : `About ${fromLabel}`,
            type: "paragraphs",
            items: [isKo ? numberFormatDescriptionKo[from] : numberFormatDescriptionEn[from]],
          },
          {
            title: isKo ? `${toLabel} 형식 소개` : `About ${toLabel}`,
            type: "paragraphs",
            items: [isKo ? numberFormatDescriptionKo[to] : numberFormatDescriptionEn[to]],
          },
          {
            title: isKo ? "요약" : "Summary",
            type: "paragraphs",
            items: [
              isKo
                ? `${fromLabel} 입력을 공통 수치로 해석한 뒤 ${toLabel} 표기로 변환합니다.`
                : `Input is parsed as ${fromLabel}, normalized, then encoded as ${toLabel}.`,
            ],
          },
          {
            title: isKo ? "관계 설명" : "Relationship context",
            type: "paragraphs",
            items: [
              isKo
                ? `숫자 진법 간 변환은 같은 값을 다른 기수법으로 표기한 것입니다.`
                : `Base conversion rewrites the same value in a different radix representation.`,
            ],
          },
        ],
        faq: [
          {
            question: isKo
              ? `이 페이지에서 ${fromLabel} -> ${toLabel} 변환은 어떻게 하나요?`
              : `How do I convert ${fromLabel} to ${toLabel} on this page?`,
            answer: isKo
              ? `${fromLabel} 값을 입력하면 ${toLabel} 결과가 자동 계산됩니다.`
              : `Enter a ${fromLabel} value and the ${toLabel} result is generated automatically.`,
          },
          {
            question: isKo ? "소수점 입력을 지원하나요?" : "Are fractional values supported?",
            answer: isKo
              ? "숫자 모드에서 소수점 한 개를 지원합니다. 문자 모드는 정수 코드만 허용됩니다."
              : "Numeric bases support one radix point. Character mode requires integer code values.",
          },
          {
            question: isKo ? "다른 전용 페어로 빠르게 이동할 수 있나요?" : "Can I switch to other pair pages quickly?",
            answer: isKo
              ? "예. 하단의 관련 페어 링크에서 즉시 이동할 수 있습니다."
              : "Yes. Related pair links below let you switch quickly.",
          },
        ],
        backToHub: isKo ? "← 진법 변환기(전체 형식)" : "← Number System Converter (all formats)",
        backToDeveloper: isKo ? "개발자 도구 홈" : "Developer Tools home",
      };
    }
  }

  return map;
}

Object.assign(developerEn, buildColorPairEntries("en"), buildNumberPairEntries("en"));
Object.assign(developerKo, buildColorPairEntries("ko"), buildNumberPairEntries("ko"));

const developerUiEn = {
  shared: {
    copy: "Copy",
    copied: "Copied!",
    copyFailed: "Failed to copy",
    clear: "Clear",
    cleared: "Cleared",
    reset: "Reset",
    upload: "Upload",
    download: "Download",
    open: "Open",
    close: "Close",
    success: "Success",
    error: "Error",
    loading: "Loading",
    noResult: "No result",
  },
  asciiConverter: {
    title: "ASCII Code Converter",
    directions: {
      textToAscii: "Text -> ASCII",
      asciiToText: "ASCII -> Text",
    },
    labels: {
      textInput: "Text Input",
      asciiCodes: "ASCII Codes",
      asciiCodesInput: "ASCII Codes Input",
      decodedText: "Decoded Text",
      table: "ASCII Table",
      printable: "Printable (32-126)",
      extended: "Extended (128-255)",
      characters: "Characters:",
      words: "Words:",
      size: "Size:",
      tableChar: "Char",
      tableDec: "Dec",
      tableHex: "Hex",
      tableBin: "Bin",
    },
    formats: {
      dec: "Decimal",
      hex: "Hexadecimal",
      bin: "Binary",
    },
    placeholders: {
      textInput: "Enter text to convert to ASCII codes",
      asciiInputPrefix: "Enter ASCII codes (space or comma separated). Example:",
      asciiExampleDec: "72 101 108 108 111",
      asciiExampleHex: "0x48 0x65 0x6C 0x6C 0x6F",
      asciiExampleBin: "0b01001000 0b01100101 0b01101100 0b01101100 0b01101111",
    },
    actions: {
      loadTxt: "Load TXT",
      copyAll: "Copy",
      clear: "Clear",
    },
    messages: {
      copied: "Text copied to clipboard!",
      copyFailed: "Failed to copy text.",
      loaded: "Loaded file",
      loadFailed: "Failed to read file",
    },
    aria: {
      conversionDirection: "Conversion direction",
      outputFormat: "Output format",
      inputFormat: "Input format",
      tableRange: "Table range",
      printableCaption: "Printable ASCII characters (32–126) with decimal, hexadecimal, and binary codes",
      extendedCaption: "Extended ASCII characters (128–255) with decimal, hexadecimal, and binary codes",
    },
  },
  base64Encoder: {
    modes: { text: "Text Mode", file: "File Mode" },
    labels: { input: "Input", output: "Output", uploadFile: "Upload File", base64Output: "Base64 Output" },
    actions: {
      encode: "Encode",
      decode: "Decode",
      copyBase64: "Copy Base64",
      downloadFile: "Download File",
      reset: "Reset",
    },
    placeholders: {
      text: "Enter text to encode/decode",
      dropZone: "Drop file here or click to upload",
    },
    options: { urlSafe: "URL-safe Base64 (replace + with - and / with _)" },
  },
  codeFormatter: {
    labels: { language: "Language", format: "Format Code", loadFile: "Load File" },
    languages: { javascript: "JavaScript", html: "HTML", css: "CSS", json: "JSON" },
    placeholders: { input: "Paste your code here or start typing..." },
    messages: {
      needCode: "Please enter some code to format",
      formatted: "Code formatted successfully",
      copied: "Code copied to clipboard!",
      clearConfirm: "Are you sure you want to clear all code?",
    },
  },
  colorPicker: {
    labels: {
      contrastRatio: "Contrast Ratio",
      customColor: "Custom color",
      palette: "Color Palette",
      savedColors: "Saved Colors",
      dedicatedConverters: "Dedicated converters",
      quickFaq: "Common questions (FAQ)",
      alpha: "Alpha",
      vs: "vs",
      emptySavedColors: "Select colors to save them here",
      dedicatedConvertersDesc:
        "{count} pages - every pair of HEX, RGB, RGBA, HSL, HSV, and CMYK below, with fixed input/output and copy-ready results.",
      converterTitle: "{from} to {to} Converter",
      converterSubtitle: "{from} to {to}",
      quickFaqDesc: "{count} quick answers with guides and links to the matching converter.",
    },
    paletteNames: {
      original: "Original",
      complementary: "Complementary",
      analogous1: "Analogous 1",
      analogous2: "Analogous 2",
      triadic1: "Triadic 1",
      triadic2: "Triadic 2",
      lighter: "Lighter",
      darker: "Darker",
    },
    wcag: {
      fail: "Fail",
      aaLarge: "AA (Large)",
      aa: "AA",
      aaa: "AAA",
    },
    messages: {
      copied: "Copied!",
      pickFailed: "Failed to pick color",
      unsupportedEyedropper: "Eyedropper API is not supported in your browser",
      clearHistoryConfirm: "Clear all saved colors?",
      historyCleared: "History cleared",
      colorPicked: "Color picked!",
      comparisonColorPicked: "Comparison color picked!",
    },
    colorNames: {
      custom: "Custom",
      white: "White",
      black: "Black",
      red: "Red",
      yellow: "Yellow",
      green: "Green",
      blue: "Blue",
      navy: "Navy",
      purple: "Purple",
      gray: "Gray",
    },
    aria: {
      selectedColor: "Selected color: {color}",
      selectColor: "Select color",
      pickColor: "Pick color from screen using eyedropper",
      valueByFormat: "{format} value",
      copyByFormat: "Copy {format}",
      alpha: "Alpha transparency",
      selectComparisonColor: "Select comparison color",
      pickComparisonColor: "Pick comparison color from screen using eyedropper",
      selectPaletteColor: "Select {label} color: {color}",
      clearSavedColors: "Clear saved colors history",
      selectSavedColor: "Select saved color {color}",
    },
  },
  colorPairCalculator: {
    labels: { calculator: "Calculator", input: "Input", result: "Result", formulas: "Formulas", copyResult: "Copy Result" },
    messages: {
      noResultToCopy: "No result to copy",
      copied: "Result copied to clipboard!",
      copyFailed: "Failed to copy result",
    },
  },
  cssSprites: {
    labels: {
      uploadFiles: "Upload Files",
      images: "Images",
      settings: "Settings",
      spritePreview: "Sprite Preview",
      cssCode: "CSS Code",
      padding: "Padding (px)",
      maxColumns: "Max Columns",
      background: "Background",
    },
    actions: {
      addMore: "Add more images",
      generate: "Generate Sprite",
      copyCss: "Copy CSS",
      remove: "Remove",
    },
    messages: {
      selectImageFiles: "Please select image files",
      failedLoadImages: "Failed to load images",
      generated: "Sprite generated!",
      downloaded: "Downloaded!",
    },
  },
  numberSystemConverter: {
    labels: {
      inputAs: "Input as",
      result: "Result",
      copyAll: "Copy All",
      inputPlaceholder: "Enter value",
      error: "Error",
      charFraction: "integers only (no fractional part)",
    },
    bases: {
      bin: "Binary (2)",
      oct: "Octal (8)",
      dec: "Decimal (10)",
      hex: "Hexadecimal (16)",
      char: "Character",
    },
  },
  numberSystemPairCalculator: {
    labels: { calculator: "Calculator", formulas: "Formulas", input: "Input", result: "Result", copyResult: "Copy Result" },
    messages: {
      noResultToCopy: "No result to copy",
      copied: "Result copied to clipboard!",
      copyFailed: "Failed to copy",
    },
  },
  qrCodeGenerator: {
    labels: {
      contentType: "Content Type",
      content: "Content",
      appearance: "Appearance Settings",
      logo: "Logo (Optional)",
      downloadFormat: "Download Format",
      errorCorrectionLevel: "Error Correction Level",
      qrCodeSize: "QR Code Size",
      foregroundColor: "Foreground Color",
      backgroundColor: "Background Color",
      logoSize: "Logo Size",
      imageHint:
        "Enter a public URL to an image. When scanned, the QR code will open this URL to display the image.",
      logoPreviewAlt: "Logo preview",
      emptyPreview: "Enter content to generate QR code",
    },
    actions: {
      uploadLogo: "Upload Logo",
      removeLogo: "Remove",
      download: "Download",
      downloadWithFormat: "Download {format}",
    },
    contentTypes: {
      text: "Text / URL",
      email: "Email",
      phone: "Phone Number",
      sms: "SMS",
      whatsapp: "WhatsApp",
      wifi: "Wi-Fi Network",
      vcard: "vCard (Contact)",
      geo: "Location (Geo)",
      bitcoin: "Bitcoin",
      image: "Image URL",
    },
    optionLabels: {
      wifiWpa: "WPA/WPA2",
      wifiWep: "WEP",
      wifiNoPassword: "No Password",
      sizeSmall: "Small (200x200)",
      sizeMedium: "Medium (300x300)",
      sizeLarge: "Large (400x400)",
      sizeExtraLarge: "Extra Large (500x500)",
      errorL: "L (Low ~7%)",
      errorM: "M (Medium ~15%)",
      errorQ: "Q (Quartile ~25%)",
      errorH: "H (High ~30%)",
      logoSizeSmall: "Small (10%)",
      logoSizeMedium: "Medium (15%)",
      logoSizeLarge: "Large (20%)",
      logoSizeExtraLarge: "Extra Large (25%)",
    },
    placeholders: {
      text: "Enter URL or text",
      email: "Email address",
      phone: "Phone number",
      wifiSsid: "Network name (SSID)",
      imageUrl: "Image URL",
      emailSubject: "Subject (optional)",
      emailBody: "Body (optional)",
      smsNumber: "Phone number",
      smsMessage: "Message (optional)",
      wifiPassword: "Password",
      vcardName: "Name *",
      vcardPhone: "Phone (optional)",
      vcardEmail: "Email (optional)",
      vcardOrg: "Organization (optional)",
      vcardUrl: "Website (optional)",
      vcardAddr: "Address (optional)",
      geoLat: "Latitude * (e.g. 37.5665)",
      geoLng: "Longitude * (e.g. 126.9780)",
      geoAlt: "Altitude (optional, meters)",
      bitcoinAddr: "Bitcoin address *",
      bitcoinAmount: "Amount in BTC (optional, e.g. 0.001)",
      whatsappNumber: "Phone number * (with country code, e.g. 821012345678)",
      whatsappMessage: "Pre-filled message (optional)",
    },
    messages: {
      generateFailed: "Failed to generate QR code",
      downloaded: "Downloaded!",
      logoImageOnly: "Please upload an image file",
      logoTooLarge: "Image file is too large. Max 5MB.",
      logoReadFailed: "Failed to read image",
    },
    aria: {
      contentType: "Content type for QR code",
      text: "URL or text content",
      email: "Email address",
      emailSubject: "Email subject",
      emailBody: "Email body",
      phone: "Phone number",
      smsNumber: "SMS recipient number",
      smsMessage: "SMS message",
      wifiSsid: "Wi-Fi network name",
      wifiPassword: "Wi-Fi password",
      wifiSecurity: "Wi-Fi security type",
      vcardName: "Contact name",
      vcardPhone: "Contact phone",
      vcardEmail: "Contact email",
      vcardOrg: "Contact organization",
      vcardUrl: "Contact website",
      vcardAddr: "Contact address",
      geoLat: "Latitude",
      geoLng: "Longitude",
      geoAlt: "Altitude",
      bitcoinAddr: "Bitcoin address",
      bitcoinAmount: "Bitcoin amount",
      whatsappNumber: "WhatsApp phone number",
      whatsappMessage: "WhatsApp message",
      imageUrl: "Image URL",
      qrCodeSize: "QR code size",
      foregroundColor: "Foreground color",
      backgroundColor: "Background color",
      errorCorrectionLevel: "Error correction level",
      downloadFormat: "Download format",
      uploadLogo: "Upload logo image",
      removeLogo: "Remove logo",
      logoSize: "Logo size",
      preview: "QR Code preview",
      downloadAs: "Download QR code as {format}",
    },
    note: "Use high contrast colors and Q/H error correction when adding logos.",
  },
  qrCodeReader: {
    modes: { camera: "Camera", upload: "Upload Image" },
    labels: {
      uploadImage: "Upload Image",
      scannedResult: "Scanned Result",
      dropZone: "Drop image here or click to upload",
      dropZoneHint: "Select an image containing a QR code (PNG, JPG, WebP, GIF)",
      emptyResult: "QR code result will appear here",
      frameHint: "Position QR code within the frame",
    },
    actions: { copy: "Copy", openIfUrl: "Open (if URL)" },
    messages: {
      cameraDenied: "Camera access denied or not available.",
      noQr: "No QR code found in image.",
      invalidUrl: "Not a valid URL",
      imageLoadFailed: "Failed to load image. Please try another file.",
      imageOnly: "Please select an image file (PNG, JPG, WebP, GIF, etc.)",
    },
    aria: {
      cameraMode: "Scan with camera",
      uploadMode: "Upload image to scan",
      dropZone: "Drop image here or click to upload",
      copyResult: "Copy result to clipboard",
      openResult: "Open result in new tab if URL",
    },
  },
  colorPickerHub: {
    subtitleBadge: "developer",
  },
  colorPairPage: {
    subtitleBadge: "Color Picker · developer",
    aboutTitle: "About {format}",
    summaryTitle: "Summary",
    relationshipTitle: "Relationship context",
    howToConvertTitle: "How to convert {from} to {to}",
    conversionProcedure: "Conversion procedure",
    exampleTitle: "Example",
    inputLabel: "Input ({format}):",
    outputLabel: "Output ({format}):",
    examplesTitle: "Examples",
    crossLinksTitle: "Other color format pairs",
    cmykNoteTitle: "CMYK accuracy note",
  },
  numberSystemHub: {
    subtitleBadge: "developer",
    universalGuideTitle: "Universal guide (example: binary → hexadecimal)",
    universalGuideNote:
      "Every dedicated pair below uses this same three-step layout with bases filled in for that page.",
    pairGridTitle: "Dedicated converters (binary, octal, decimal, hexadecimal, character)",
    pairGridDesc:
      "{count} pages — every directed pair of formats below, with fixed input/output and the same parsing rules as the main converter (including optional fractional input on numeric bases).",
    pairLinkTemplate: "{from} to {to} ({fromName} to {toName})",
    faqSectionTitle: "Common questions (FAQ)",
    faqSectionDesc: "{count} quick answers with guides and links to the matching converter.",
  },
  numberSystemPairPage: {
    subtitleBadge: "developer · number system",
    aboutTitle: "About {format}",
    summaryTitle: "Summary",
    relationshipTitle: "Relationship context",
    conversionTablesTitle: "Conversion tables",
    howToConvertTitle: "How to convert {from} to {to}",
    otherPairsTitle: "Other number system pairs",
    pairLinkLine2: "Fixed input/output · same parsing as hub",
    bases: {
      bin: "Binary",
      oct: "Octal",
      dec: "Decimal",
      hex: "Hexadecimal",
      char: "Character",
    },
  },
};

const developerUiKo = {
  shared: {
    copy: "복사",
    copied: "복사됨!",
    copyFailed: "복사 실패",
    clear: "지우기",
    cleared: "초기화됨",
    reset: "리셋",
    upload: "업로드",
    download: "다운로드",
    open: "열기",
    close: "닫기",
    success: "성공",
    error: "오류",
    loading: "불러오는 중",
    noResult: "결과 없음",
  },
  asciiConverter: {
    title: "ASCII 코드 변환기",
    directions: { textToAscii: "텍스트 → ASCII", asciiToText: "ASCII → 텍스트" },
    labels: {
      textInput: "텍스트 입력",
      asciiCodes: "ASCII 코드",
      asciiCodesInput: "ASCII 코드 입력",
      decodedText: "복원 텍스트",
      table: "ASCII 표",
      printable: "출력 가능 (32–126)",
      extended: "확장 (128–255)",
      characters: "글자 수:",
      words: "단어 수:",
      size: "크기:",
      tableChar: "문자",
      tableDec: "10진",
      tableHex: "16진",
      tableBin: "2진",
    },
    formats: {
      dec: "10진수",
      hex: "16진수",
      bin: "2진수",
    },
    placeholders: {
      textInput: "ASCII 코드로 변환할 텍스트를 입력하세요",
      asciiInputPrefix: "ASCII 코드를 입력하세요(공백 또는 쉼표로 구분). 예:",
      asciiExampleDec: "72 101 108 108 111",
      asciiExampleHex: "0x48 0x65 0x6C 0x6C 0x6F",
      asciiExampleBin: "0b01001000 0b01100101 0b01101100 0b01101100 0b01101111",
    },
    actions: { loadTxt: "TXT 불러오기", copyAll: "복사", clear: "지우기" },
    messages: {
      copied: "클립보드에 복사되었습니다!",
      copyFailed: "텍스트 복사에 실패했습니다.",
      loaded: "파일을 불러왔습니다",
      loadFailed: "파일을 읽지 못했습니다",
    },
    aria: {
      conversionDirection: "변환 방향",
      outputFormat: "출력 형식",
      inputFormat: "입력 형식",
      tableRange: "표 범위",
      printableCaption: "출력 가능 ASCII 문자(32–126)의 10·16·2진 코드",
      extendedCaption: "확장 ASCII 문자(128–255)의 10·16·2진 코드",
    },
  },
  base64Encoder: {
    modes: { text: "텍스트 모드", file: "파일 모드" },
    labels: { input: "입력", output: "출력", uploadFile: "파일 업로드", base64Output: "Base64 출력" },
    actions: {
      encode: "인코딩",
      decode: "디코딩",
      copyBase64: "Base64 복사",
      downloadFile: "파일 다운로드",
      reset: "리셋",
    },
    placeholders: { text: "인코딩/디코딩할 텍스트를 입력하세요", dropZone: "파일을 놓거나 클릭하여 업로드" },
    options: { urlSafe: "URL-safe Base64 (+를 -, /를 _로 대체)" },
  },
  codeFormatter: {
    labels: { language: "언어", format: "코드 포맷", loadFile: "파일 불러오기" },
    languages: { javascript: "JavaScript", html: "HTML", css: "CSS", json: "JSON" },
    placeholders: { input: "코드를 붙여 넣거나 입력하세요..." },
    messages: {
      needCode: "포맷할 코드를 입력해 주세요",
      formatted: "코드 포맷이 완료되었습니다",
      copied: "코드가 복사되었습니다!",
      clearConfirm: "모든 코드를 지우시겠습니까?",
    },
  },
  colorPicker: {
    labels: {
      contrastRatio: "대비 비율",
      customColor: "사용자 색상",
      palette: "색상 팔레트",
      savedColors: "저장된 색상",
      dedicatedConverters: "전용 변환기",
      quickFaq: "자주 묻는 질문",
      alpha: "알파",
      vs: "대비",
      emptySavedColors: "색상을 선택하면 여기에 저장됩니다",
      dedicatedConvertersDesc:
        "{count}개 페이지 - 아래 HEX, RGB, RGBA, HSL, HSV, CMYK의 모든 쌍을 고정 입출력과 복사 가능한 결과로 제공합니다.",
      converterTitle: "{from} -> {to} 변환기",
      converterSubtitle: "{from} -> {to}",
      quickFaqDesc: "{count}개의 빠른 답변과 해당 변환기 링크를 제공합니다.",
    },
    paletteNames: {
      original: "원본",
      complementary: "보색",
      analogous1: "유사색 1",
      analogous2: "유사색 2",
      triadic1: "삼각색 1",
      triadic2: "삼각색 2",
      lighter: "더 밝게",
      darker: "더 어둡게",
    },
    wcag: { fail: "실패", aaLarge: "AA (큰 글자)", aa: "AA", aaa: "AAA" },
    messages: {
      copied: "복사됨!",
      pickFailed: "색상 추출에 실패했습니다",
      unsupportedEyedropper: "현재 브라우저는 아이드로퍼 API를 지원하지 않습니다",
      clearHistoryConfirm: "저장된 색상을 모두 지울까요?",
      historyCleared: "이력이 삭제되었습니다",
      colorPicked: "색상을 선택했습니다!",
      comparisonColorPicked: "비교 색상을 선택했습니다!",
    },
    colorNames: {
      custom: "사용자",
      white: "White",
      black: "Black",
      red: "Red",
      yellow: "Yellow",
      green: "Green",
      blue: "Blue",
      navy: "Navy",
      purple: "Purple",
      gray: "Gray",
    },
    aria: {
      selectedColor: "선택된 색상: {color}",
      selectColor: "색상 선택",
      pickColor: "아이드로퍼로 화면에서 색상 선택",
      valueByFormat: "{format} 값",
      copyByFormat: "{format} 복사",
      alpha: "알파 투명도",
      selectComparisonColor: "비교 색상 선택",
      pickComparisonColor: "아이드로퍼로 비교 색상 선택",
      selectPaletteColor: "{label} 색상 선택: {color}",
      clearSavedColors: "저장된 색상 기록 지우기",
      selectSavedColor: "저장된 색상 선택 {color}",
    },
  },
  colorPairCalculator: {
    labels: { calculator: "계산기", input: "입력", result: "결과", formulas: "수식", copyResult: "결과 복사" },
    messages: {
      noResultToCopy: "복사할 결과가 없습니다",
      copied: "결과가 복사되었습니다!",
      copyFailed: "결과 복사에 실패했습니다",
    },
  },
  cssSprites: {
    labels: {
      uploadFiles: "파일 업로드",
      images: "이미지",
      settings: "설정",
      spritePreview: "스프라이트 미리보기",
      cssCode: "CSS 코드",
      padding: "간격(px)",
      maxColumns: "최대 열 수",
      background: "배경",
    },
    actions: { addMore: "이미지 추가", generate: "스프라이트 생성", copyCss: "CSS 복사", remove: "삭제" },
    messages: {
      selectImageFiles: "이미지 파일을 선택해 주세요",
      failedLoadImages: "이미지를 불러오지 못했습니다",
      generated: "스프라이트가 생성되었습니다!",
      downloaded: "다운로드되었습니다!",
    },
  },
  numberSystemConverter: {
    labels: {
      inputAs: "입력 형식",
      result: "결과",
      copyAll: "전체 복사",
      inputPlaceholder: "값을 입력하세요",
      error: "오류",
      charFraction: "정수만 허용(소수 불가)",
    },
    bases: { bin: "2진수", oct: "8진수", dec: "10진수", hex: "16진수", char: "문자" },
  },
  numberSystemPairCalculator: {
    labels: { calculator: "계산기", formulas: "수식", input: "입력", result: "결과", copyResult: "결과 복사" },
    messages: {
      noResultToCopy: "복사할 결과가 없습니다",
      copied: "결과가 복사되었습니다!",
      copyFailed: "복사에 실패했습니다",
    },
  },
  qrCodeGenerator: {
    labels: {
      contentType: "콘텐츠 타입",
      content: "콘텐츠",
      appearance: "스타일 설정",
      logo: "로고(선택)",
      downloadFormat: "다운로드 형식",
      errorCorrectionLevel: "오류 정정 레벨",
      qrCodeSize: "QR 코드 크기",
      foregroundColor: "전경색",
      backgroundColor: "배경색",
      logoSize: "로고 크기",
      imageHint: "공개 이미지 URL을 입력하세요. 스캔 시 해당 URL을 열어 이미지를 표시합니다.",
      logoPreviewAlt: "로고 미리보기",
      emptyPreview: "콘텐츠를 입력하면 QR 코드가 생성됩니다",
    },
    actions: {
      uploadLogo: "로고 업로드",
      removeLogo: "제거",
      download: "다운로드",
      downloadWithFormat: "{format} 다운로드",
    },
    contentTypes: {
      text: "텍스트 / URL",
      email: "이메일",
      phone: "전화번호",
      sms: "SMS",
      whatsapp: "WhatsApp",
      wifi: "Wi-Fi 네트워크",
      vcard: "vCard (연락처)",
      geo: "위치 (Geo)",
      bitcoin: "Bitcoin",
      image: "이미지 URL",
    },
    optionLabels: {
      wifiWpa: "WPA/WPA2",
      wifiWep: "WEP",
      wifiNoPassword: "비밀번호 없음",
      sizeSmall: "작게 (200x200)",
      sizeMedium: "중간 (300x300)",
      sizeLarge: "크게 (400x400)",
      sizeExtraLarge: "매우 크게 (500x500)",
      errorL: "L (낮음 ~7%)",
      errorM: "M (중간 ~15%)",
      errorQ: "Q (중상 ~25%)",
      errorH: "H (높음 ~30%)",
      logoSizeSmall: "작게 (10%)",
      logoSizeMedium: "중간 (15%)",
      logoSizeLarge: "크게 (20%)",
      logoSizeExtraLarge: "매우 크게 (25%)",
    },
    placeholders: {
      text: "URL 또는 텍스트 입력",
      email: "이메일 주소",
      phone: "전화번호",
      wifiSsid: "네트워크 이름(SSID)",
      imageUrl: "이미지 URL",
      emailSubject: "제목 (선택)",
      emailBody: "본문 (선택)",
      smsNumber: "전화번호",
      smsMessage: "메시지 (선택)",
      wifiPassword: "비밀번호",
      vcardName: "이름 *",
      vcardPhone: "전화번호 (선택)",
      vcardEmail: "이메일 (선택)",
      vcardOrg: "조직 (선택)",
      vcardUrl: "웹사이트 (선택)",
      vcardAddr: "주소 (선택)",
      geoLat: "위도 * (예: 37.5665)",
      geoLng: "경도 * (예: 126.9780)",
      geoAlt: "고도 (선택, 미터)",
      bitcoinAddr: "비트코인 주소 *",
      bitcoinAmount: "BTC 수량 (선택, 예: 0.001)",
      whatsappNumber: "전화번호 * (국가 코드 포함, 예: 821012345678)",
      whatsappMessage: "미리 입력할 메시지 (선택)",
    },
    messages: {
      generateFailed: "QR 코드 생성에 실패했습니다",
      downloaded: "다운로드되었습니다!",
      logoImageOnly: "이미지 파일을 업로드해 주세요",
      logoTooLarge: "이미지 파일이 너무 큽니다. 최대 5MB까지 가능합니다.",
      logoReadFailed: "이미지를 읽지 못했습니다",
    },
    aria: {
      contentType: "QR 코드 콘텐츠 타입",
      text: "URL 또는 텍스트 콘텐츠",
      email: "이메일 주소",
      emailSubject: "이메일 제목",
      emailBody: "이메일 본문",
      phone: "전화번호",
      smsNumber: "SMS 수신 번호",
      smsMessage: "SMS 메시지",
      wifiSsid: "Wi-Fi 네트워크 이름",
      wifiPassword: "Wi-Fi 비밀번호",
      wifiSecurity: "Wi-Fi 보안 유형",
      vcardName: "연락처 이름",
      vcardPhone: "연락처 전화번호",
      vcardEmail: "연락처 이메일",
      vcardOrg: "연락처 조직",
      vcardUrl: "연락처 웹사이트",
      vcardAddr: "연락처 주소",
      geoLat: "위도",
      geoLng: "경도",
      geoAlt: "고도",
      bitcoinAddr: "비트코인 주소",
      bitcoinAmount: "비트코인 수량",
      whatsappNumber: "WhatsApp 전화번호",
      whatsappMessage: "WhatsApp 메시지",
      imageUrl: "이미지 URL",
      qrCodeSize: "QR 코드 크기",
      foregroundColor: "전경색",
      backgroundColor: "배경색",
      errorCorrectionLevel: "오류 정정 레벨",
      downloadFormat: "다운로드 형식",
      uploadLogo: "로고 이미지 업로드",
      removeLogo: "로고 제거",
      logoSize: "로고 크기",
      preview: "QR 코드 미리보기",
      downloadAs: "{format} 형식으로 QR 코드 다운로드",
    },
    note: "로고 사용 시 대비를 높이고 오류 정정 레벨 Q/H 사용을 권장합니다.",
  },
  qrCodeReader: {
    modes: { camera: "카메라", upload: "이미지 업로드" },
    labels: {
      uploadImage: "이미지 업로드",
      scannedResult: "스캔 결과",
      dropZone: "이미지를 놓거나 클릭하여 업로드",
      dropZoneHint: "QR 코드가 포함된 이미지를 선택하세요 (PNG, JPG, WebP, GIF)",
      emptyResult: "QR 결과가 여기에 표시됩니다",
      frameHint: "프레임 안에 QR 코드를 맞춰주세요",
    },
    actions: { copy: "복사", openIfUrl: "열기(URL일 때)" },
    messages: {
      cameraDenied: "카메라 권한이 없거나 사용할 수 없습니다.",
      noQr: "이미지에서 QR 코드를 찾지 못했습니다.",
      invalidUrl: "유효한 URL이 아닙니다",
      imageLoadFailed: "이미지를 불러오지 못했습니다. 다른 파일을 시도해 주세요.",
      imageOnly: "이미지 파일을 선택해 주세요 (PNG, JPG, WebP, GIF 등)",
    },
    aria: {
      cameraMode: "카메라로 스캔",
      uploadMode: "이미지 업로드로 스캔",
      dropZone: "이미지를 놓거나 클릭하여 업로드",
      copyResult: "결과를 클립보드에 복사",
      openResult: "결과가 URL이면 새 탭에서 열기",
    },
  },
  colorPickerHub: {
    subtitleBadge: "developer",
  },
  colorPairPage: {
    subtitleBadge: "색상 선택기 · developer",
    aboutTitle: "{format} 소개",
    summaryTitle: "요약",
    relationshipTitle: "관계 설명",
    howToConvertTitle: "{from}을(를) {to}(으)로 변환하는 방법",
    conversionProcedure: "변환 절차",
    exampleTitle: "예시",
    inputLabel: "입력 ({format}):",
    outputLabel: "출력 ({format}):",
    examplesTitle: "예시",
    crossLinksTitle: "다른 색상 형식 쌍",
    cmykNoteTitle: "CMYK 정확도 안내",
  },
  numberSystemHub: {
    subtitleBadge: "developer",
    universalGuideTitle: "공통 가이드 (예: 2진수 → 16진수)",
    universalGuideNote: "아래 전용 쌍 페이지는 모두 같은 3단계 레이아웃을 사용하며, 해당 페이지의 진법으로 채워집니다.",
    pairGridTitle: "전용 변환기 (2진수, 8진수, 10진수, 16진수, 문자)",
    pairGridDesc:
      "{count}개 페이지 — 아래 모든 방향 쌍. 고정 입·출력과 메인 변환기와 동일한 파싱 규칙(숫자 진법의 선택적 소수 입력 포함).",
    pairLinkTemplate: "{from} → {to} ({fromName} → {toName})",
    faqSectionTitle: "자주 묻는 질문 (FAQ)",
    faqSectionDesc: "{count}개의 빠른 답변과 해당 변환기 링크가 포함된 가이드.",
  },
  numberSystemPairPage: {
    subtitleBadge: "developer · 진법",
    aboutTitle: "{format} 소개",
    summaryTitle: "요약",
    relationshipTitle: "관계 설명",
    conversionTablesTitle: "변환 표",
    howToConvertTitle: "{from}을(를) {to}(으)로 변환하는 방법",
    otherPairsTitle: "다른 진법 쌍",
    pairLinkLine2: "고정 입·출력 · 허브와 동일 파싱",
    bases: {
      bin: "2진수",
      oct: "8진수",
      dec: "10진수",
      hex: "16진수",
      char: "문자",
    },
  },
};

const root = process.cwd();
fs.writeFileSync(path.join(root, "scripts", "developer-en-data.mjs"), `export const developerEn = ${JSON.stringify(developerEn, null, 2)};\n`);
fs.writeFileSync(path.join(root, "scripts", "developer-ko-data.mjs"), `export const developerKo = ${JSON.stringify(developerKo, null, 2)};\n`);
fs.writeFileSync(
  path.join(root, "scripts", "developer-ui-data.mjs"),
  `export const developerUiEn = ${JSON.stringify(developerUiEn, null, 2)};\n\nexport const developerUiKo = ${JSON.stringify(developerUiKo, null, 2)};\n`
);

console.log("Generated developer-en-data.mjs, developer-ko-data.mjs, developer-ui-data.mjs");
