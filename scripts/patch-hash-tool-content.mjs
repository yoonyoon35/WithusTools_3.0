/**
 * toolContent.json에 Hash Calculator 허브 + 알고리즘 페이지 + UI 문자열 병합
 */
import fs from "node:fs";
import path from "node:path";
import { algoKo } from "./hash-algorithm-ko-data.mjs";

const root = process.cwd();
const PASSWORD_HASHERS = new Set(["bcrypt", "argon2", "pbkdf2", "scrypt"]);

const ALGORITHMS = [
  "md5",
  "sha1",
  "sha224",
  "sha256",
  "sha384",
  "sha512",
  "sha3",
  "keccak256",
  "crc32",
  "adler32",
  "xxhash",
  "blake2",
  "ripemd160",
  "bcrypt",
  "argon2",
  "pbkdf2",
  "scrypt",
  "whirlpool",
  "fnv1a",
];

const ALGORITHM_META = {
  md5: { displayName: "MD5" },
  sha1: { displayName: "SHA-1" },
  sha224: { displayName: "SHA-224" },
  sha256: { displayName: "SHA-256" },
  sha384: { displayName: "SHA-384" },
  sha512: { displayName: "SHA-512" },
  sha3: { displayName: "SHA-3" },
  keccak256: { displayName: "Keccak-256" },
  crc32: { displayName: "CRC32" },
  adler32: { displayName: "Adler-32" },
  xxhash: { displayName: "xxHash" },
  blake2: { displayName: "BLAKE2" },
  ripemd160: { displayName: "RIPEMD-160" },
  bcrypt: { displayName: "Bcrypt" },
  argon2: { displayName: "Argon2" },
  pbkdf2: { displayName: "PBKDF2" },
  scrypt: { displayName: "Scrypt" },
  whirlpool: { displayName: "Whirlpool" },
  fnv1a: { displayName: "FNV-1a" },
};

function loadAlgorithmGuides() {
  const file = path.join(
    root,
    "src/app/[locale]/tools/hash-calculator/algorithm-content.ts"
  );
  let src = fs.readFileSync(file, "utf8");
  src = src.replace(/^\/\*[\s\S]*?\*\//m, "");
  src = src.replace(/export type[\s\S]*?};/g, "");
  src = src.replace(/export const /g, "const ");
  src = src.replace(/: AlgorithmGuideSection/g, "");
  src = src.replace(/: Record<string, AlgorithmGuideSection>/g, "");
  const fn = new Function(`${src}; return { HASH_INDEX_GUIDE, ALGORITHM_GUIDE };`);
  return fn();
}

function sectionTitles(locale, name) {
  if (locale === "en") {
    return {
      usage: `1. How can I use this ${name} hash calculator on this page?`,
      howItWorks: `2. How does this calculator compute ${name} locally in my browser?`,
      about: `3. What is ${name}, and when should I use it?`,
      advantages: `4. Why choose ${name} over other hash or checksum algorithms?`,
      useCases: `5. Where is ${name} commonly used in apps and infrastructure?`,
    };
  }
  return {
    usage: `1. 이 페이지에서 ${name} 해시 계산기를 어떻게 쓰나요?`,
    howItWorks: `2. 이 계산기는 브라우저에서 ${name}을 어떻게 계산하나요?`,
    about: `3. ${name}이란 무엇이며 언제 써야 하나요?`,
    advantages: `4. 다른 해시·체크섬 대신 ${name}을 선택하는 이유는?`,
    useCases: `5. ${name}은 앱·인프라에서 어디에 쓰이나요?`,
  };
}

function buildSections(locale, name, guide) {
  const titles = sectionTitles(locale, name);
  return [
    { title: titles.usage, type: "ordered", items: guide.usage },
    { title: titles.howItWorks, type: "paragraphs", items: guide.howItWorks },
    { title: titles.about, type: "paragraphs", items: guide.about },
    { title: titles.advantages, type: "unordered", items: guide.advantages },
    { title: titles.useCases, type: "unordered", items: guide.useCases },
  ];
}

function buildFaqEn(name, isPassword) {
  return [
    {
      question: `How can I use this ${name} hash calculator on this page?`,
      answer: isPassword
        ? `Enter text input, configure parameters, generate the ${name} output, then use Verify to test matches.`
        : `Paste text or upload a file, generate ${name}, then compare with expected values using Verify.`,
    },
    {
      question: `How does this calculator compute ${name} locally in my browser?`,
      answer: `The ${name} algorithm runs in your browser runtime, so inputs are processed client-side on your device.`,
    },
    {
      question: `What is ${name}, and when should I use it?`,
      answer: isPassword
        ? `${name} is used for password hashing or key derivation where brute-force resistance matters.`
        : `${name} is used for integrity checks, compatibility workflows, or algorithm-specific development tasks.`,
    },
    {
      question: `Where is ${name} commonly used in apps and infrastructure?`,
      answer: isPassword
        ? `Common use cases include auth systems, account security, and password verification workflows.`
        : `Common use cases include file verification, release checks, protocol debugging, and data processing pipelines.`,
    },
  ];
}

function buildHubSections(locale, indexGuide) {
  const titles =
    locale === "en"
      ? {
          usage: "1. How do I compute MD5, SHA, or other hashes from this index?",
          howItWorks:
            "2. How do hash calculators derive digests entirely in my browser?",
          about:
            "3. What hash algorithms are supported here, and how do I choose one?",
          advantages:
            "4. Why generate checksums online when files never leave your device?",
          useCases:
            "5. When do developers and IT teams rely on quick hash utilities?",
        }
      : {
          usage: "1. 이 인덱스에서 MD5, SHA 등 해시를 계산하려면?",
          howItWorks: "2. 해시 계산기는 브라우저에서만 다이제스트를 만드나요?",
          about: "3. 어떤 해시 알고리즘이 지원되며 어떻게 고르나요?",
          advantages: "4. 파일이 기기를 떠나지 않을 때 온라인 체크섬을 쓰는 이유는?",
          useCases: "5. 개발자·IT 팀이 빠른 해시 유틸을 언제 쓰나요?",
        };

  return [
    { title: titles.usage, type: "ordered", items: indexGuide.usage },
    { title: titles.howItWorks, type: "paragraphs", items: indexGuide.howItWorks },
    { title: titles.about, type: "paragraphs", items: indexGuide.about },
    { title: titles.advantages, type: "unordered", items: indexGuide.advantages },
    { title: titles.useCases, type: "unordered", items: indexGuide.useCases },
  ];
}

const hubEn = {
  h1: "Hash Calculator",
  subtitle: "Online hash calculator for files and text",
  intro:
    "Generate hash values for files or text in your browser. Good for checksum checks, password-hash testing, and quick dev verification.",
  guideTitle: "Hash Calculator Guide",
  guideIntro:
    "Pick the algorithm by purpose: SHA-256 for file integrity, Argon2 or Bcrypt for passwords, CRC32 or xxHash for fast checks.",
  sections: null,
  faq: [
    {
      question: "How do I compute MD5, SHA, or other hashes from this index?",
      answer:
        "Choose an algorithm, paste text or upload a file, and generate the digest. Then use Verify to compare known hashes.",
    },
    {
      question: "How do hash calculators derive digests entirely in my browser?",
      answer:
        "The tool runs algorithm implementations in browser runtime so input data stays on your device.",
    },
    {
      question: "What hash algorithms are supported here, and how do I choose one?",
      answer:
        "Use SHA-256 or SHA-3 for integrity, Bcrypt or Argon2 for passwords, and CRC32 or xxHash for fast non-cryptographic checks.",
    },
    {
      question: "Why generate checksums online when files never leave your device?",
      answer:
        "You can verify downloads and file consistency quickly without installing extra software or uploading sensitive files.",
    },
    {
      question: "When do developers and IT teams rely on quick hash utilities?",
      answer:
        "They use them for release verification, password-hash checks, protocol debugging, and data-integrity workflows.",
    },
  ],
  backToHome: "← Back to home",
  ui: {
    securityNotice: "All hashing runs in your browser. Data is never sent to any server.",
    pbkdf2GuideSummary: "📋 Salt interpretation · Output format · Verification guide",
    pbkdf2SaltTitle: "Salt interpretation",
    pbkdf2SaltHex: "Even length + only 0-9, a-f, A-F → decoded as hex (e.g. a1b2c3d4...)",
    pbkdf2SaltUtf8: "Otherwise → used as UTF-8 text",
    pbkdf2OutputTitle: "Output format",
    pbkdf2OutputBody:
      "Only the derived key is output as a hex string. Salt, iterations, hash, and key length must be stored separately.",
    pbkdf2VerifyTitle: "Verification",
    pbkdf2VerifyBody:
      "Password, Salt, Iterations, Hash, and Derived key (hex) must all match for verification to succeed.",
    pbkdf2CompareTitle: "Comparing with other sites",
    pbkdf2CompareBody:
      "Other tools may use different salt encoding (hex vs UTF-8) or output formats. Our implementation produces the same results as Node.js/Python standard libraries.",
    passwordInput: "Password Input",
    textInput: "Text Input",
    placeholderPassword: "Enter password to hash...",
    placeholderText: "Enter or paste text...",
    showPassword: "Show",
    hidePassword: "Hide",
    clear: "Clear",
    saltOptional: "Salt (optional, leave empty for random)",
    saltCrossSitePlaceholder: "Same salt for cross-site verification",
    saltPlainHexPlaceholder: "Plain text or hex (e.g. a1b2c3...)",
    random: "Random",
    saltFormatAutoTitle: "Auto: hex decode if valid hex, else UTF-8. Use UTF-8 for cross-site verification.",
    saltFormatPrefix: "Salt:",
    iterationsTimeCost: "Iterations (time cost)",
    memoryCost: "Memory Cost",
    parallelism: "Parallelism",
    hashLength: "Hash Length",
    type: "Type",
    nCost: "N (cost)",
    rBlockSize: "r (block size)",
    pParallel: "p (parallel)",
    keyLength: "Key Length",
    iterations: "Iterations",
    hash: "Hash",
    saltRounds: "Salt Rounds",
    sha3Variant: "SHA3 Variant",
    xxhashVariant: "xxHash Variant",
    fnv1aSize: "FNV-1a Size",
    blake2Variant: "BLAKE2 Variant",
    generateHash: "Generate {name} Hash",
    processing: "Processing...",
    fileInput: "File Input",
    fileDropHint: "Drag & drop a file or click to select",
    selectFile: "Select File",
    generatedHash: "Generated Hash",
    copy: "Copy",
    copied: "Copied!",
    parametersUsed: "Parameters used",
    verifyPassword: "Verify Password",
    hashVerification: "Hash Verification",
    placeholderVerifyPassword: "Enter password to verify...",
    placeholderDerivedKey: "Derived key (hex)...",
    placeholderArgon2Hash: "Enter Argon2 encoded hash to verify...",
    placeholderBcryptHash: "Enter Bcrypt hash to verify...",
    placeholderSaltPlainHex: "Salt (plain or hex)",
    placeholderCompareHash: "Enter hash to compare...",
    verify: "Verify",
    match: "✓ Match",
    noMatch: "✗ No match",
    backToHub: "← Back to Hash Calculator",
    backToHome: "← Back to home",
    errorEnterText: "Enter text to hash.",
    errorHashGenFailed: "Hash generation failed",
    errorFileReadFailed: "Failed to read file",
    errorFileHashFailed: "File hash failed",
    errorEnterPasswordHash: "Enter password and hash to verify.",
    errorEnterPasswordArgon2: "Enter password and Argon2 hash to verify.",
    errorEnterPasswordSaltKey: "Enter password, salt, and derived key (hex) to verify.",
    errorVerificationFailed: "Verification failed",
    errorCopyFailed: "Failed to copy",
  },
};

const hubKo = {
  h1: "해시 계산기",
  subtitle: "파일·텍스트용 온라인 해시 계산기",
  intro:
    "브라우저에서 파일·텍스트 해시를 생성합니다. 체크섬 확인, 비밀번호 해시 테스트, 개발 검증에 활용할 수 있습니다.",
  guideTitle: "해시 계산기 가이드",
  guideIntro:
    "목적에 맞게 선택하세요. 파일 무결성은 SHA-256, 비밀번호는 Argon2·Bcrypt, 빠른 체크섬은 CRC32·xxHash.",
  sections: null,
  faq: [
    {
      question: "이 인덱스에서 MD5, SHA 등 해시를 계산하려면?",
      answer:
        "알고리즘을 선택하고 텍스트를 붙여넣거나 파일을 업로드한 뒤 다이제스트를 생성합니다. 검증으로 알려진 해시와 비교하세요.",
    },
    {
      question: "해시 계산기는 브라우저에서만 다이제스트를 만드나요?",
      answer:
        "알고리즘 구현이 브라우저에서 실행되므로 입력 데이터가 기기에만 남습니다.",
    },
    {
      question: "어떤 해시 알고리즘이 지원되며 어떻게 고르나요?",
      answer:
        "무결성은 SHA-256·SHA-3, 비밀번호는 Bcrypt·Argon2, 비암호 빠른 체크섬은 CRC32·xxHash를 사용하세요.",
    },
    {
      question: "파일이 기기를 떠나지 않을 때 온라인 체크섬을 쓰는 이유는?",
      answer:
        "추가 소프트웨어 설치나 민감 파일 업로드 없이 다운로드·파일 일관성을 빠르게 확인할 수 있습니다.",
    },
    {
      question: "개발자·IT 팀이 빠른 해시 유틸을 언제 쓰나요?",
      answer:
        "릴리스 검증, 비밀번호 해시 확인, 프로토콜 디버깅, 데이터 무결성 워크플로에 활용합니다.",
    },
  ],
  backToHome: "← 홈으로",
  ui: {
    securityNotice: "모든 해시 연산은 브라우저에서 실행됩니다. 데이터는 서버로 전송되지 않습니다.",
    pbkdf2GuideSummary: "📋 Salt 해석 · 출력 형식 · 검증 가이드",
    pbkdf2SaltTitle: "Salt 해석",
    pbkdf2SaltHex: "짝수 길이 + 0-9, a-f, A-F만 → hex로 디코딩 (예: a1b2c3d4...)",
    pbkdf2SaltUtf8: "그 외 → UTF-8 텍스트로 사용",
    pbkdf2OutputTitle: "출력 형식",
    pbkdf2OutputBody:
      "유도 키만 hex 문자열로 출력됩니다. Salt, 반복 횟수, 해시, 키 길이는 별도로 보관해야 합니다.",
    pbkdf2VerifyTitle: "검증",
    pbkdf2VerifyBody:
      "비밀번호, Salt, 반복 횟수, 해시, 유도 키(hex)가 모두 일치해야 검증에 성공합니다.",
    pbkdf2CompareTitle: "다른 사이트와 비교",
    pbkdf2CompareBody:
      "다른 도구는 Salt 인코딩(hex vs UTF-8)이나 출력 형식이 다를 수 있습니다. 이 구현은 Node.js/Python 표준 라이브러리와 동일한 결과를 냅니다.",
    passwordInput: "비밀번호 입력",
    textInput: "텍스트 입력",
    placeholderPassword: "해시할 비밀번호 입력...",
    placeholderText: "텍스트 입력 또는 붙여넣기...",
    showPassword: "표시",
    hidePassword: "숨기기",
    clear: "지우기",
    saltOptional: "Salt(선택, 비우면 무작위)",
    saltCrossSitePlaceholder: "사이트 간 검증용 동일 Salt",
    saltPlainHexPlaceholder: "일반 텍스트 또는 hex (예: a1b2c3...)",
    random: "무작위",
    saltFormatAutoTitle: "자동: 유효 hex면 디코딩, 아니면 UTF-8. 사이트 간 검증은 UTF-8 사용.",
    saltFormatPrefix: "Salt:",
    iterationsTimeCost: "반복(시간 비용)",
    memoryCost: "메모리 비용",
    parallelism: "병렬 처리",
    hashLength: "해시 길이",
    type: "유형",
    nCost: "N(비용)",
    rBlockSize: "r(블록 크기)",
    pParallel: "p(병렬)",
    keyLength: "키 길이",
    iterations: "반복 횟수",
    hash: "해시",
    saltRounds: "Salt 라운드",
    sha3Variant: "SHA3 변형",
    xxhashVariant: "xxHash 변형",
    fnv1aSize: "FNV-1a 크기",
    blake2Variant: "BLAKE2 변형",
    generateHash: "{name} 해시 생성",
    processing: "처리 중...",
    fileInput: "파일 입력",
    fileDropHint: "파일을 끌어다 놓거나 클릭해 선택",
    selectFile: "파일 선택",
    generatedHash: "생성된 해시",
    copy: "복사",
    copied: "복사됨!",
    parametersUsed: "사용된 매개변수",
    verifyPassword: "비밀번호 검증",
    hashVerification: "해시 검증",
    placeholderVerifyPassword: "검증할 비밀번호 입력...",
    placeholderDerivedKey: "유도 키(hex)...",
    placeholderArgon2Hash: "검증할 Argon2 인코딩 해시 입력...",
    placeholderBcryptHash: "검증할 Bcrypt 해시 입력...",
    placeholderSaltPlainHex: "Salt(일반 또는 hex)",
    placeholderCompareHash: "비교할 해시 입력...",
    verify: "검증",
    match: "✓ 일치",
    noMatch: "✗ 불일치",
    backToHub: "← 해시 계산기로",
    backToHome: "← 홈으로",
    errorEnterText: "해시할 텍스트를 입력하세요.",
    errorHashGenFailed: "해시 생성에 실패했습니다",
    errorFileReadFailed: "파일 읽기에 실패했습니다",
    errorFileHashFailed: "파일 해시에 실패했습니다",
    errorEnterPasswordHash: "검증할 비밀번호와 해시를 입력하세요.",
    errorEnterPasswordArgon2: "검증할 비밀번호와 Argon2 해시를 입력하세요.",
    errorEnterPasswordSaltKey: "비밀번호, Salt, 유도 키(hex)를 입력하세요.",
    errorVerificationFailed: "검증에 실패했습니다",
    errorCopyFailed: "복사에 실패했습니다",
  },
};

const { HASH_INDEX_GUIDE, ALGORITHM_GUIDE } = loadAlgorithmGuides();

hubEn.sections = buildHubSections("en", HASH_INDEX_GUIDE);
hubKo.sections = buildHubSections("ko", {
  usage: [
    "먼저 알고리즘을 선택합니다. 파일 무결성은 SHA-256, 비밀번호는 Bcrypt/Argon2, 빠른 체크섬은 CRC32/xxHash.",
    "알고리즘 페이지에서 텍스트를 붙여넣거나 파일을 업로드한 뒤 해시를 생성합니다.",
    "비밀번호 해시는 Salt, 라운드, 메모리, 반복 횟수 등 매개변수를 함께 보관하세요.",
    "검증으로 알려진 해시와 새 입력을 비교합니다.",
    "다운로드 검증 시 파일을 해시해 공개 체크섬과 대조합니다.",
  ],
  howItWorks: [
    "해시 함수는 입력에서 고정 길이 다이제스트를 만듭니다.",
    "암호 해시(SHA-2, SHA-3, BLAKE2 등)는 무결성·변조 탐지용입니다.",
    "비밀번호 해셔(Bcrypt, Argon2, PBKDF2, Scrypt)는 무차별 대입을 어렵게 하도록 느리게 설계되었습니다.",
    "빠른 체크섬(CRC32, Adler-32, xxHash, FNV-1a)은 속도·손상 확인용이며 보안용이 아닙니다.",
    "모든 연산은 브라우저에서 클라이언트 측으로 실행됩니다.",
  ],
  about: [
    "일반적인 암호 해시, 비밀번호 해싱, 빠른 체크섬 도구를 한곳에서 제공합니다.",
    "파일 검증, 비밀번호 해시 테스트, 개발 점검에 활용할 수 있습니다.",
    "설치·서버 업로드 없이 사용할 수 있습니다.",
  ],
  advantages: [
    "클라이언트 측 처리",
    "텍스트·파일 지원",
    "해시 검증 흐름",
    "다양한 알고리즘",
    "설치 불필요",
  ],
  useCases: [
    "SHA-256 체크섬으로 설치 파일 검증",
    "인증 기능 개발 시 Bcrypt·Argon2 해시 생성",
    "Git·인증서·블록체인 관련 해시 디버깅",
    "xxHash·CRC32로 빠른 중복·무결성 확인",
  ],
});

for (const locale of ["en", "ko"]) {
  const file = path.join(root, "messages", locale, "toolContent.json");
  const data = JSON.parse(fs.readFileSync(file, "utf-8"));
  const hub = locale === "en" ? hubEn : hubKo;

  data.byPath["tools.hash-calculator"] = hub;

  for (const alg of ALGORITHMS) {
    const isPassword = PASSWORD_HASHERS.has(alg);
    const meta = ALGORITHM_META[alg];

    if (locale === "en") {
      const guide = ALGORITHM_GUIDE[alg];
      const name = meta.displayName;
      data.byPath[`tools.hash-calculator.${alg}`] = {
        h1: `${name} Hash Calculator`,
        subtitle: `Online ${name} hash tool in browser`,
        intro: "",
        guideTitle: `${name} Guide`,
        guideIntro: isPassword
          ? `Use ${name} when you need password-oriented hashing with verification support.`
          : `Use ${name} when you need a quick digest for integrity checks and development workflows.`,
        sections: buildSections("en", name, guide),
        faq: buildFaqEn(name, isPassword),
        backToHub: hub.ui.backToHub,
      };
    } else {
      const src = algoKo[alg];
      const name = meta.displayName;
      data.byPath[`tools.hash-calculator.${alg}`] = {
        h1: src.h1,
        subtitle: src.subtitle,
        intro: "",
        guideTitle: src.guideTitle,
        guideIntro: src.guideIntro,
        sections: buildSections("ko", name, src),
        faq: src.faq,
        backToHub: hub.ui.backToHub,
      };
    }
  }

  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
  console.log(`Patched ${locale}/toolContent.json with Hash Calculator entries`);
}
