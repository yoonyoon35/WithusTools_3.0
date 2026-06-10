/**
 * toolContent.json에 SSH 허브 + 알고리즘 페이지 + UI 문자열 병합
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

function algoSections(locale, alg) {
  const data = locale === "en" ? algoEn[alg] : algoKo[alg];
  const name = alg === "ed25519" ? "Ed25519" : alg === "rsa" ? "RSA" : "ECDSA";
  const titles =
    locale === "en"
      ? {
          usage: `1. How can I generate ${name} SSH keys with this tool?`,
          howItWorks: `2. How does this generator create ${name} keys in my browser?`,
          about: `3. What are ${name} SSH keys, and when should I use them?`,
          advantages: `4. Why choose ${name} SSH keys over other algorithms?`,
          useCases: `5. Where are ${name} SSH keys used for servers, Git, and cloud?`,
        }
      : {
          usage: `1. 이 도구로 ${name} SSH 키를 생성하려면?`,
          howItWorks: `2. 이 생성기는 브라우저에서 ${name} 키를 어떻게 만드나요?`,
          about: `3. ${name} SSH 키란 무엇이며 언제 쓰나요?`,
          advantages: `4. 다른 알고리즘 대신 ${name} SSH 키를 선택하는 이유는?`,
          useCases: `5. ${name} SSH 키는 서버, Git, 클라우드에서 어디에 쓰이나요?`,
        };

  return [
    { title: titles.usage, type: "ordered", items: data.usage },
    { title: titles.howItWorks, type: "paragraphs", items: data.howItWorks },
    { title: titles.about, type: "paragraphs", items: data.about },
    { title: titles.advantages, type: "unordered", items: data.advantages },
    { title: titles.useCases, type: "unordered", items: data.useCases },
  ];
}

const hubEn = {
  h1: "SSH Key Generator",
  subtitle: "Online SSH key generator for server access",
  intro:
    "Generate SSH key pairs for server login, Git access, and key rotation workflows.",
  guideTitle: "SSH Key Generator Guide",
  guideIntro:
    "Pick Ed25519 for most new setups, RSA for older environments, and ECDSA when your stack expects NIST curves.",
  sections: [
    {
      title: "1. How do I generate RSA, ED25519, or other SSH keys from this page?",
      type: "ordered",
      items: [
        "Choose Ed25519, RSA, or ECDSA first.",
        "Set options only when needed (RSA size or ECDSA curve).",
        "Add a passphrase if you want private-key encryption.",
        "Generate the pair, then copy/download both keys.",
        "Put only the public key on servers and keep the private key private.",
      ],
    },
    {
      title: "2. How does the SSH key generator create keys without sending them to a server?",
      type: "paragraphs",
      items: [
        "SSH uses asymmetric keys: public key for servers, private key for your local device.",
        "The generator creates random private-key material and derives the matching public key.",
        "Ed25519 and ECDSA use elliptic-curve math; RSA uses modular arithmetic with large integers.",
        "Generation is done locally in your browser runtime.",
      ],
    },
    {
      title: "3. What SSH key types are available, and which should I pick for my server?",
      type: "paragraphs",
      items: [
        "This SSH key generator creates OpenSSH-compatible keys for common server and Git workflows.",
        "Use it when you need quick key setup on a machine without local tooling.",
        "Keys are generated client-side and are not uploaded to a backend.",
      ],
    },
    {
      title: "4. Why use a browser-based SSH key generator for onboarding or rotation?",
      type: "unordered",
      items: [
        "Client-side key generation.",
        "OpenSSH key format support.",
        "Ed25519, RSA, and ECDSA options.",
        "Optional passphrase protection.",
        "No install required.",
      ],
    },
    {
      title: "5. When should I create a new SSH key pair for servers or Git hosting?",
      type: "unordered",
      items: [
        "Set up SSH login for Linux servers.",
        "Add keys to GitHub or GitLab accounts.",
        "Create rotation keys for CI/CD jobs.",
        "Register SSH keys on cloud instances.",
      ],
    },
  ],
  faq: [
    {
      question: "How do I generate RSA, ED25519, or other SSH keys from this page?",
      answer:
        "Choose an algorithm, set optional parameters, generate the pair, and store the private key securely.",
    },
    {
      question: "How does the SSH key generator create keys without sending them to a server?",
      answer:
        "Key creation runs in browser runtime and does not require server-side key processing.",
    },
    {
      question: "What SSH key types are available, and which should I pick for my server?",
      answer:
        "Use Ed25519 by default, RSA for broad legacy compatibility, and ECDSA when curve-based compatibility is needed.",
    },
    {
      question: "When should I create a new SSH key pair for servers or Git hosting?",
      answer:
        "Create a new pair during device setup, key rotation, account separation, or when credentials are exposed.",
    },
  ],
  backToHome: "← Back to home",
  ui: {
    securityNotice: "Keys are never stored on the server. All generation runs in your browser.",
    algorithm: "Algorithm",
    keySize: "Key Size",
    bits: "bits",
    passphraseTitle: "Passphrase (optional)",
    passphraseHelp: "Encrypts the private key. Leave empty to generate an unencrypted key.",
    passphrasePlaceholder: "Enter passphrase...",
    ed25519PassphraseWarning:
      "Ed25519 does not support passphrase encryption yet. Use RSA or ECDSA instead.",
    generateKeyPair: "Generate Key Pair",
    generating: "Generating...",
    verifyKeyPair: "Verify Key Pair",
    verified: "Verified",
    verificationFailed: "Verification failed",
    privateKey: "Private Key",
    publicKey: "Public Key",
    fingerprint: "Fingerprint",
    copy: "Copy",
    copied: "Copied!",
    backToHub: "← Back to SSH Key Generator",
    backToHome: "← Back to home",
    errorCopyFailed: "Failed to copy to clipboard",
    errorKeyGenFailed: "Key generation failed",
    errorDsaUnsupported: "DSA key generation is not yet supported. Please use RSA, Ed25519, or ECDSA.",
    errorInvalidPassphrase: "Invalid passphrase or key",
    errorExtractEcKey: "Could not extract EC public key",
    errorCouldNotParseEcKey: "Could not parse EC key",
    errorVerificationFailed: "Verification failed",
  },
};

const hubKo = {
  h1: "SSH 키 생성기",
  subtitle: "서버 접속용 온라인 SSH 키 생성기",
  intro: "서버 로그인, Git 접속, 키 로테이션을 위한 SSH 키 쌍을 생성합니다.",
  guideTitle: "SSH 키 생성기 가이드",
  guideIntro:
    "대부분의 새 환경에는 Ed25519, 구형 환경에는 RSA, NIST 곡선이 필요하면 ECDSA를 선택하세요.",
  sections: [
    {
      title: "1. 이 페이지에서 RSA, ED25519 등 SSH 키를 생성하려면?",
      type: "ordered",
      items: [
        "먼저 Ed25519, RSA, ECDSA 중 하나를 선택합니다.",
        "필요할 때만 옵션을 설정합니다(RSA 크기 또는 ECDSA 곡선).",
        "개인키 암호화가 필요하면 패스프레이즈를 추가합니다.",
        "키 쌍을 생성한 뒤 두 키를 복사하거나 다운로드합니다.",
        "공개키만 서버에 등록하고 개인키는 비공개로 보관합니다.",
      ],
    },
    {
      title: "2. SSH 키 생성기는 서버로 보내지 않고 어떻게 키를 만드나요?",
      type: "paragraphs",
      items: [
        "SSH는 비대칭 키를 사용합니다. 공개키는 서버, 개인키는 로컬 기기용입니다.",
        "생성기는 무작위 개인키 재료를 만들고 짝이 되는 공개키를 유도합니다.",
        "Ed25519와 ECDSA는 타원곡선 연산, RSA는 큰 정수 연산을 사용합니다.",
        "생성은 브라우저에서 로컬로 수행됩니다.",
      ],
    },
    {
      title: "3. 어떤 SSH 키 종류가 있으며 서버에는 무엇을 선택해야 하나요?",
      type: "paragraphs",
      items: [
        "일반적인 서버·Git 워크플로용 OpenSSH 호환 키를 만듭니다.",
        "로컬 도구 없이 빠르게 키를 설정해야 할 때 사용합니다.",
        "키는 클라이언트에서 생성되며 백엔드로 업로드되지 않습니다.",
      ],
    },
    {
      title: "4. 온보딩·로테이션에 브라우저 SSH 키 생성기를 쓰는 이유는?",
      type: "unordered",
      items: [
        "클라이언트 측 키 생성.",
        "OpenSSH 키 형식 지원.",
        "Ed25519, RSA, ECDSA 옵션.",
        "선택적 패스프레이즈 보호.",
        "설치 불필요.",
      ],
    },
    {
      title: "5. 서버·Git 호스팅용 새 SSH 키 쌍은 언제 만들어야 하나요?",
      type: "unordered",
      items: [
        "Linux 서버 SSH 로그인 설정.",
        "GitHub·GitLab 계정에 키 등록.",
        "CI/CD 작업용 로테이션 키 생성.",
        "클라우드 인스턴스에 SSH 키 등록.",
      ],
    },
  ],
  faq: [
    {
      question: "이 페이지에서 RSA, ED25519 등 SSH 키를 생성하려면?",
      answer:
        "알고리즘을 선택하고 필요한 옵션을 설정한 뒤 키 쌍을 생성하고 개인키를 안전하게 보관하세요.",
    },
    {
      question: "SSH 키 생성기는 서버로 보내지 않고 어떻게 키를 만드나요?",
      answer:
        "키 생성은 브라우저 런타임에서 실행되며 서버 측 키 처리가 필요하지 않습니다.",
    },
    {
      question: "어떤 SSH 키 종류가 있으며 서버에는 무엇을 선택해야 하나요?",
      answer:
        "기본은 Ed25519, 레거시 호환은 RSA, 곡선 기반 호환이 필요하면 ECDSA를 사용하세요.",
    },
    {
      question: "서버·Git 호스팅용 새 SSH 키 쌍은 언제 만들어야 하나요?",
      answer:
        "기기 설정, 키 로테이션, 계정 분리, 자격 증명 노출 시 새 쌍을 만드세요.",
    },
  ],
  backToHome: "← 홈으로 돌아가기",
  ui: {
    securityNotice: "키는 서버에 저장되지 않습니다. 모든 생성은 브라우저에서 실행됩니다.",
    algorithm: "알고리즘",
    keySize: "키 크기",
    bits: "비트",
    passphraseTitle: "패스프레이즈 (선택)",
    passphraseHelp: "개인키를 암호화합니다. 비워 두면 암호화되지 않은 키가 생성됩니다.",
    passphrasePlaceholder: "패스프레이즈 입력...",
    ed25519PassphraseWarning:
      "Ed25519는 아직 패스프레이즈 암호화를 지원하지 않습니다. RSA 또는 ECDSA를 사용하세요.",
    generateKeyPair: "키 쌍 생성",
    generating: "생성 중...",
    verifyKeyPair: "키 쌍 검증",
    verified: "검증됨",
    verificationFailed: "검증 실패",
    privateKey: "개인키",
    publicKey: "공개키",
    fingerprint: "지문",
    copy: "복사",
    copied: "복사됨!",
    backToHub: "← SSH 키 생성기로 돌아가기",
    backToHome: "← 홈으로 돌아가기",
    errorCopyFailed: "클립보드 복사에 실패했습니다",
    errorKeyGenFailed: "키 생성에 실패했습니다",
    errorDsaUnsupported:
      "DSA 키 생성은 아직 지원하지 않습니다. RSA, Ed25519 또는 ECDSA를 사용하세요.",
    errorInvalidPassphrase: "패스프레이즈 또는 키가 올바르지 않습니다",
    errorExtractEcKey: "EC 공개키를 추출할 수 없습니다",
    errorCouldNotParseEcKey: "EC 키를 파싱할 수 없습니다",
    errorVerificationFailed: "검증에 실패했습니다",
  },
};

const algoEn = {
  ed25519: {
    h1: "Ed25519 SSH Key Generator",
    subtitle: "Online SSH key generator",
    guideTitle: "Ed25519 Guide",
    guideIntro:
      "Use Ed25519 for most new setups. It is fast, compact, and widely supported.",
    faq: [
      {
        question: "How can I generate Ed25519 SSH keys with this tool?",
        answer:
          "Choose the algorithm, set any optional parameters, generate the key pair, and save the private key securely.",
      },
      {
        question: "How does this generator create Ed25519 keys in my browser?",
        answer:
          "The page uses browser-side cryptography, so key generation runs locally without server-side key handling.",
      },
      {
        question: "When should I use Ed25519 SSH keys?",
        answer: "Use Ed25519 for most modern SSH setups.",
      },
    ],
    usage: [
      "Click Generate to create an Ed25519 key pair.",
      "Copy the public key to your server or Git provider.",
      "Store the private key in a secure local path.",
      "Use ssh -i or your SSH config to reference the private key.",
      "Never share the private key.",
    ],
    howItWorks: [
      "Ed25519 creates a random private key and derives a matching public key using curve math.",
      "It is fast and designed for modern signature safety in SSH workflows.",
      "Generation runs in your browser and outputs OpenSSH-compatible keys.",
    ],
    about: [
      "Ed25519 is the default choice for most new SSH key setups.",
      "It gives compact keys, good speed, and broad support on modern platforms.",
      "Use it for server access, Git hosting, and daily developer workflows.",
    ],
    advantages: [
      "Fast key generation and signing.",
      "Small key size.",
      "Strong modern security profile.",
      "Good default for new deployments.",
    ],
    useCases: [
      "New Linux server onboarding.",
      "GitHub/GitLab SSH login.",
      "CI/CD key rotation.",
      "Cloud instance access setup.",
    ],
  },
  rsa: {
    h1: "RSA SSH Key Generator",
    subtitle: "Online SSH key generator",
    guideTitle: "RSA Guide",
    guideIntro: "Use RSA when you need compatibility with older SSH environments.",
    faq: [
      {
        question: "How can I generate RSA SSH keys with this tool?",
        answer:
          "Choose the algorithm, set any optional parameters, generate the key pair, and save the private key securely.",
      },
      {
        question: "How does this generator create RSA keys in my browser?",
        answer:
          "The page uses browser-side cryptography, so key generation runs locally without server-side key handling.",
      },
      {
        question: "When should I use RSA SSH keys?",
        answer: "Use RSA when broad legacy compatibility is required.",
      },
    ],
    usage: [
      "Pick RSA key size first (4096 recommended).",
      "Generate the key pair and download or copy both keys.",
      "Add optional passphrase protection if needed.",
      "Register the public key on your target server or service.",
      "Store private key securely and keep backups under control.",
    ],
    howItWorks: [
      "RSA generates a public/private pair from large-integer operations.",
      "Larger key sizes increase security and generation cost.",
      "The resulting keys are emitted in OpenSSH-compatible format.",
    ],
    about: [
      "RSA is still the safest choice for broad compatibility across old and new systems.",
      "Use it when tooling or policy requires RSA keys.",
      "Generation can be slower than Ed25519, especially at larger sizes.",
    ],
    advantages: [
      "Very broad compatibility.",
      "Configurable key sizes.",
      "Well-known operational behavior.",
      "Works with most enterprise stacks.",
    ],
    useCases: [
      "Legacy host access.",
      "Enterprise policy compliance.",
      "Mixed-environment deployments.",
      "Audit or compatibility-driven key rollout.",
    ],
  },
  ecdsa: {
    h1: "ECDSA SSH Key Generator",
    subtitle: "Online SSH key generator",
    guideTitle: "ECDSA Guide",
    guideIntro:
      "Use ECDSA when your environment expects NIST curves and compact keys.",
    faq: [
      {
        question: "How can I generate ECDSA SSH keys with this tool?",
        answer:
          "Choose the algorithm, set any optional parameters, generate the key pair, and save the private key securely.",
      },
      {
        question: "How does this generator create ECDSA keys in my browser?",
        answer:
          "The page uses browser-side cryptography, so key generation runs locally without server-side key handling.",
      },
      {
        question: "When should I use ECDSA SSH keys?",
        answer: "Use ECDSA when your environment requires NIST-curve SSH keys.",
      },
    ],
    usage: [
      "Choose a curve (P-256, P-384, or P-521).",
      "Generate the key pair and copy/download outputs.",
      "Set passphrase protection if your workflow needs it.",
      "Add the public key to authorized_keys or Git provider settings.",
      "Keep the private key local and protected.",
    ],
    howItWorks: [
      "ECDSA generates keys from elliptic-curve operations on the selected curve.",
      "Curve choice affects key size and security margin.",
      "The output keys are compatible with standard OpenSSH flows.",
    ],
    about: [
      "ECDSA is a practical middle option when you need curve-based SSH keys.",
      "It is often used in environments that prefer NIST curves.",
      "Use it when Ed25519 is unavailable but smaller keys than RSA are desired.",
    ],
    advantages: [
      "Smaller keys than RSA.",
      "Multiple NIST curve options.",
      "Good interoperability on modern stacks.",
      "Balanced security-to-size profile.",
    ],
    useCases: [
      "NIST-curve-required environments.",
      "SSH setups without Ed25519 support.",
      "Cloud and enterprise key onboarding.",
      "Key rotation in mixed compatibility environments.",
    ],
  },
};

const algoKo = {
  ed25519: {
    h1: "Ed25519 SSH 키 생성기",
    subtitle: "온라인 SSH 키 생성기",
    guideTitle: "Ed25519 가이드",
    guideIntro:
      "대부분의 새 환경에는 Ed25519를 사용하세요. 빠르고 작으며 널리 지원됩니다.",
    faq: [
      {
        question: "이 도구로 Ed25519 SSH 키를 생성하려면?",
        answer:
          "알고리즘을 선택하고 필요한 옵션을 설정한 뒤 키 쌍을 생성하고 개인키를 안전하게 보관하세요.",
      },
      {
        question: "이 생성기는 브라우저에서 Ed25519 키를 어떻게 만드나요?",
        answer:
          "브라우저 암호화를 사용하므로 키 생성이 로컬에서 실행되며 서버 처리가 없습니다.",
      },
      {
        question: "Ed25519 SSH 키는 언제 쓰나요?",
        answer: "대부분의 최신 SSH 환경에 Ed25519를 사용하세요.",
      },
    ],
    usage: [
      "생성을 클릭해 Ed25519 키 쌍을 만듭니다.",
      "공개키를 서버 또는 Git 제공자에 복사합니다.",
      "개인키를 안전한 로컬 경로에 보관합니다.",
      "ssh -i 또는 SSH 설정으로 개인키를 참조합니다.",
      "개인키는 절대 공유하지 마세요.",
    ],
    howItWorks: [
      "Ed25519는 무작위 개인키를 만들고 곡선 연산으로 짝이 되는 공개키를 유도합니다.",
      "SSH 워크플로에서 빠르고 현대적인 서명 안전성을 위해 설계되었습니다.",
      "브라우저에서 생성되며 OpenSSH 호환 키를 출력합니다.",
    ],
    about: [
      "Ed25519는 대부분의 새 SSH 키 설정에 권장되는 기본값입니다.",
      "키가 작고 빠르며 최신 플랫폼에서 널리 지원됩니다.",
      "서버 접속, Git 호스팅, 일상 개발 워크플로에 사용하세요.",
    ],
    advantages: [
      "빠른 키 생성·서명.",
      "작은 키 크기.",
      "강력한 최신 보안 프로필.",
      "새 배포에 적합한 기본값.",
    ],
    useCases: [
      "새 Linux 서버 온보딩.",
      "GitHub/GitLab SSH 로그인.",
      "CI/CD 키 로테이션.",
      "클라우드 인스턴스 접속 설정.",
    ],
  },
  rsa: {
    h1: "RSA SSH 키 생성기",
    subtitle: "온라인 SSH 키 생성기",
    guideTitle: "RSA 가이드",
    guideIntro: "구형 SSH 환경과의 호환이 필요할 때 RSA를 사용하세요.",
    faq: [
      {
        question: "이 도구로 RSA SSH 키를 생성하려면?",
        answer:
          "알고리즘을 선택하고 필요한 옵션을 설정한 뒤 키 쌍을 생성하고 개인키를 안전하게 보관하세요.",
      },
      {
        question: "이 생성기는 브라우저에서 RSA 키를 어떻게 만드나요?",
        answer:
          "브라우저 암호화를 사용하므로 키 생성이 로컬에서 실행되며 서버 처리가 없습니다.",
      },
      {
        question: "RSA SSH 키는 언제 쓰나요?",
        answer: "넓은 레거시 호환이 필요할 때 RSA를 사용하세요.",
      },
    ],
    usage: [
      "먼저 RSA 키 크기를 선택합니다(4096 권장).",
      "키 쌍을 생성하고 두 키를 복사하거나 다운로드합니다.",
      "필요하면 패스프레이즈 보호를 추가합니다.",
      "대상 서버 또는 서비스에 공개키를 등록합니다.",
      "개인키를 안전하게 보관하고 백업을 관리합니다.",
    ],
    howItWorks: [
      "RSA는 큰 정수 연산으로 공개/개인 키 쌍을 생성합니다.",
      "키 크기가 클수록 보안과 생성 비용이 증가합니다.",
      "결과 키는 OpenSSH 호환 형식으로 출력됩니다.",
    ],
    about: [
      "RSA는 구형·신형 시스템 전반에서 가장 넓은 호환성을 제공합니다.",
      "도구나 정책상 RSA가 필요할 때 사용하세요.",
      "Ed25519보다 느릴 수 있으며 크기가 클수록 더 느려집니다.",
    ],
    advantages: [
      "매우 넓은 호환성.",
      "설정 가능한 키 크기.",
      "잘 알려진 운영 특성.",
      "대부분의 엔터프라이즈 스택에서 동작.",
    ],
    useCases: [
      "레거시 호스트 접속.",
      "엔터프라이즈 정책 준수.",
      "혼합 환경 배포.",
      "호환성·감사 목적의 키 롤아웃.",
    ],
  },
  ecdsa: {
    h1: "ECDSA SSH 키 생성기",
    subtitle: "온라인 SSH 키 생성기",
    guideTitle: "ECDSA 가이드",
    guideIntro:
      "NIST 곡선과 컴팩트한 키가 필요한 환경에서는 ECDSA를 사용하세요.",
    faq: [
      {
        question: "이 도구로 ECDSA SSH 키를 생성하려면?",
        answer:
          "알고리즘을 선택하고 필요한 옵션을 설정한 뒤 키 쌍을 생성하고 개인키를 안전하게 보관하세요.",
      },
      {
        question: "이 생성기는 브라우저에서 ECDSA 키를 어떻게 만드나요?",
        answer:
          "브라우저 암호화를 사용하므로 키 생성이 로컬에서 실행되며 서버 처리가 없습니다.",
      },
      {
        question: "ECDSA SSH 키는 언제 쓰나요?",
        answer: "NIST 곡선 SSH 키가 필요한 환경에서 ECDSA를 사용하세요.",
      },
    ],
    usage: [
      "곡선을 선택합니다(P-256, P-384, P-521).",
      "키 쌍을 생성하고 출력을 복사하거나 다운로드합니다.",
      "워크플로에 필요하면 패스프레이즈 보호를 설정합니다.",
      "공개키를 authorized_keys 또는 Git 제공자 설정에 추가합니다.",
      "개인키는 로컬에 보관하고 보호합니다.",
    ],
    howItWorks: [
      "ECDSA는 선택한 곡선의 타원곡선 연산으로 키를 생성합니다.",
      "곡선 선택은 키 크기와 보안 여유에 영향을 줍니다.",
      "출력 키는 표준 OpenSSH 흐름과 호환됩니다.",
    ],
    about: [
      "ECDSA는 곡선 기반 SSH 키가 필요할 때 실용적인 중간 선택입니다.",
      "NIST 곡선을 선호하는 환경에서 자주 사용됩니다.",
      "Ed25519를 쓸 수 없지만 RSA보다 작은 키가 필요할 때 사용하세요.",
    ],
    advantages: [
      "RSA보다 작은 키.",
      "여러 NIST 곡선 옵션.",
      "최신 스택에서 좋은 상호 운용성.",
      "보안 대비 크기 균형.",
    ],
    useCases: [
      "NIST 곡선이 요구되는 환경.",
      "Ed25519 미지원 SSH 설정.",
      "클라우드·엔터프라이즈 키 온보딩.",
      "혼합 호환 환경의 키 로테이션.",
    ],
  },
};

for (const locale of ["en", "ko"]) {
  const file = path.join(root, "messages", locale, "toolContent.json");
  const data = JSON.parse(fs.readFileSync(file, "utf-8"));
  const hub = locale === "en" ? hubEn : hubKo;

  data.byPath["tools.ssh"] = hub;

  for (const alg of ["ed25519", "rsa", "ecdsa"]) {
    const src = locale === "en" ? algoEn[alg] : algoKo[alg];
    data.byPath[`tools.ssh.${alg}`] = {
      h1: src.h1,
      subtitle: src.subtitle,
      intro: "",
      guideTitle: src.guideTitle,
      guideIntro: src.guideIntro,
      sections: algoSections(locale, alg),
      faq: src.faq,
      backToHub: hub.ui.backToHub,
    };
  }

  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
  console.log(`Patched ${locale}/toolContent.json with SSH entries`);
}
