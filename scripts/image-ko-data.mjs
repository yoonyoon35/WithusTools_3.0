export const imageKo = {
  image: {
    h1: "이미지 도구",
    subtitle: "브라우저에서 압축·변환·애니메이션·편집·그리기",
    intro:
      "이미지 압축, 형식 변환, 애니 GIF 만들기, 이미지 편집기, 페인트 보드를 한곳에서. 파일 압축, 형식 변경, 프레임 GIF 합치기, 사진 보정, 스케치까지 서버 업로드 없이 처리합니다.",
    guideTitle: "이미지 도구 가이드",
    guideIntro:
      "형식별 GIF 변환 경로는 GIF 변환기를, 여러 이미지를 PDF로 합치려면 PDF 도구를 함께 활용하세요.",
    sections: [
      {
        title: "1. 어떤 이미지 도구를 고르고 어떻게 사용하나요?",
        type: "ordered",
        items: [
          "작업에 맞는 도구를 선택하세요: 압축, 변환, 애니메이션, 편집, 그리기.",
          "이미지를 올리고 옵션을 조정한 뒤 한 번에 보내세요.",
          "업로드 속도나 용량이 중요하면 이미지 압축을 사용하세요.",
          "앱이 특정 형식만 받을 때는 형식 변환기를 사용하세요.",
          "여러 정지 이미지를 하나의 반복 GIF로 만들 때는 이미지→애니 GIF를 사용하세요.",
          "공유 전 빠른 보정에는 이미지 편집기를 사용하세요.",
          "스케치, 주석, 간단한 그래픽에는 페인트 보드를 사용하세요.",
        ],
      },
      {
        title: "2. 브라우저 기반 이미지 처리는 어떻게 동작하나요?",
        type: "paragraphs",
        items: [
          "도구는 브라우저 메모리에서 이미지 데이터를 디코딩하고 처리합니다.",
          "압축과 변환은 선택한 설정으로 파일을 다시 인코딩합니다.",
          "이미지→애니 GIF는 각 프레임을 공통 캔버스에 레터박스한 뒤 gif.js가 Web Worker로 프레임을 인코딩합니다.",
          "편집 도구는 필터와 변환을 적용한 뒤보냅니다.",
          "페인트 보드는 HTML 캔버스에 선과 도형을 그립니다.",
          "이미지 처리 데이터는 백엔드 서버로 전송되지 않습니다.",
        ],
      },
      {
        title: "3. 이 카테고리에서 어떤 일상적인 이미지 작업을 할 수 있나요?",
        type: "paragraphs",
        items: [
          "이미지 도구는 일상적인 이미지 작업을 브라우저에서 처리하는 묶음입니다.",
          "용량 줄이기, 형식 호환, 이미지 목록 GIF, 빠른 편집, 가벼운 그리기 등 흔한 니즈를 다룹니다.",
          "무거운 데스크톱 프로그램 없이 빠르게 결과가 필요할 때 적합합니다.",
        ],
      },
      {
        title: "4. 무거운 데스크톱 소프트웨어 대신 온라인 이미지 도구를 쓰는 이유는?",
        type: "unordered",
        items: [
          "클라이언트 측 이미지 처리.",
          "설치·가입 불필요.",
          "짧은 작업에 빠른 워크플로.",
          "압축, 변환, GIF, 편집, 그리기를 한곳에서.",
          "최신·레거시 형식 지원.",
        ],
      },
      {
        title: "5. 압축·변환·GIF·편집·그리기 도구는 언제 가장 유용한가요?",
        type: "unordered",
        items: [
          "웹사이트 업로드 전 상품 이미지 용량 줄이기.",
          "HEIC 사진을 JPG로 바꿔 쉽게 공유하기.",
          "게시 전 밝기·방향 보정하기.",
          "UI 아이디어 스케치나 스크린샷 주석 달기.",
          "소셜 미디어용 작은 파일 준비하기.",
          "채팅·포럼용 스크린샷·사진을 하나의 GIF로 이어 붙이기.",
        ],
      },
    ],
    faq: [
      {
        question: "어떤 이미지 도구를 고르고 어떻게 사용하나요?",
        answer:
          "그리드에서 압축·변환·GIF·편집·그리기를 고르고, 이미지를 올려 옵션을 조정한 뒤 브라우저에서 바로 내면 됩니다.",
      },
      {
        question: "브라우저 기반 이미지 처리는 어떻게 동작하나요?",
        answer:
          "이미지는 브라우저 메모리에서 디코딩·재인코딩되고, GIF 프레임은 캔버스에 그려 gif.js로 인코딩됩니다. 서버 업로드는 없습니다.",
      },
      {
        question: "이 카테고리에서 어떤 일상적인 이미지 작업을 할 수 있나요?",
        answer:
          "용량 줄이기, 형식 변경, 정지 이미지 GIF, 빠른 사진 보정, 가벼운 스케치·주석 등을 처리할 수 있습니다.",
      },
      {
        question: "무거운 데스크톱 소프트웨어 대신 온라인 이미지 도구를 쓰는 이유는?",
        answer:
          "즉시 열리고 설치·가입 없이 기기 안에서 처리해 짧은 작업에 빠르게 쓸 수 있습니다.",
      },
      {
        question: "압축·변환·GIF·편집·그리기 도구는 언제 가장 유용한가요?",
        answer:
          "웹 업로드, SNS 게시, HEIC 공유, 스크린샷 표시, 채팅·포럼용 빠른 GIF 제작에 유용합니다.",
      },
    ],
    backToHome: "← 홈으로",
  },
  "image.image-compressor": {
    h1: "이미지 압축",
    subtitle: "용량을 줄이는 온라인 이미지 압축기",
    guideTitle: "이미지 압축 가이드",
    guideIntro:
      "업로드·이메일 전 용량을 줄일 때 사용하세요. 형식 변경이 필요하면 같은 허브의 이미지 형식 변환기를 이용하세요.",
    sections: [
      {
        title: "1. 이 도구로 이미지를 압축하고 용량을 줄이려면?",
        type: "ordered",
        items: [
          "이미지를 하나 이상 올린 뒤 품질 수준을 선택하세요.",
          "가로 크기도 줄이려면 최대 너비만 설정하세요.",
          "카메라·위치 메타데이터를 제거하려면 EXIF 제거를 켜세요.",
          "압축을 실행하고 전·후를 빠르게 비교하세요.",
          "파일을 개별로 받거나 ZIP으로 일괄 다운로드하세요.",
        ],
      },
      {
        title: "2. 이 이미지 압축기는 브라우저에서 어떻게 로컬 처리하나요?",
        type: "paragraphs",
        items: [
          "브라우저가 선택한 설정으로 이미지 데이터를 디코딩하고 다시 인코딩합니다.",
          "품질과 선택적 리사이즈 값이 최종 용량과 화질을 결정합니다.",
          "처리는 기기 안에서만 이루어집니다.",
        ],
      },
      {
        title: "3. 이 이미지 압축기는 무엇에 쓰이며, 품질 트레이드오프는?",
        type: "paragraphs",
        items: [
          "업로드, 이메일, 웹 페이지에 이미지가 너무 클 때 사용하세요.",
          "데스크톱 프로그램 없이 빠르게 용량을 줄이도록 만들어졌습니다.",
        ],
      },
      {
        title: "4. 무거운 데스크톱 소프트웨어 대신 온라인으로 압축하는 이유는?",
        type: "unordered",
        items: [
          "브라우저 로컬 압축.",
          "ZIP 일괄 출력 워크플로.",
          "빠른 품질 조절과 시각 비교.",
          "가입 불필요.",
        ],
      },
      {
        title: "5. 웹사이트·이메일·SNS에서 작은 이미지가 중요한 때는?",
        type: "unordered",
        items: [
          "웹사이트 업로드 전 상품 이미지 준비.",
          "이메일 첨부 한도에 맞게 사진 축소.",
          "소셜 미디어 게시용 용량 줄이기.",
          "스크린샷을 적은 저장 공간으로 보관.",
        ],
      },
    ],
    faq: [
      {
        question: "이 도구로 이미지를 압축하고 용량을 줄이려면?",
        answer:
          "이미지를 올리고 품질·크기 옵션을 조정한 뒤, 개별 파일 또는 ZIP으로 내면 됩니다.",
      },
      {
        question: "이 이미지 압축기는 브라우저에서 어떻게 로컬 처리하나요?",
        answer:
          "브라우저 메모리에서 디코딩·재인코딩하며 서버로 이미지를 업로드하지 않습니다.",
      },
      {
        question: "이 이미지 압축기는 무엇에 쓰이며, 품질 트레이드오프는?",
        answer:
          "빠른 용량 줄이기용입니다. 품질을 낮출수록 파일은 작아지지만 디테일이 줄어들 수 있습니다.",
      },
      {
        question: "웹사이트·이메일·SNS에서 작은 이미지가 중요한 때는?",
        answer:
          "작은 이미지는 로딩 속도를 높이고 업로드 제한을 통과하며 저장·전송 비용을 줄입니다.",
      },
    ],
  },
  "image.image-format-converter": {
    h1: "이미지 형식 변환",
    subtitle: "브라우저에서 하는 온라인 이미지 형식 변환",
    guideTitle: "이미지 형식 변환 가이드",
    guideIntro:
      "앱이나 사이트가 PNG, JPG, WebP 등 특정 형식을 요구할 때 사용하세요. 다양한 소스를 JPG로 일괄 변환하려면 JPG 변환기도 참고하세요.",
    sections: [
      {
        title: "1. 이 도구로 PNG, JPG, WebP 등 형식을 변환하려면?",
        type: "ordered",
        items: [
          "이미지를 올리고 대상 형식을 선택하세요.",
          "손실 형식으로 변환할 때는 품질을 설정하세요.",
          "변환 후 결과를 미리 보고 다운로드하세요.",
          "다음 파일을 위해 초기화하고 반복하세요.",
        ],
      },
      {
        title: "2. 이 형식 변환기는 브라우저에서 어떻게 디코딩·인코딩하나요?",
        type: "paragraphs",
        items: [
          "원본을 디코딩한 뒤 선택한 형식으로 다시 인코딩합니다.",
          "HEIC/HEIF 입력은 먼저 정규화한 뒤 대상 형식으로보냅니다.",
          "처리는 브라우저 메모리에서 로컬로 이루어집니다.",
        ],
      },
      {
        title: "3. 어떤 이미지 형식을 지원하며, 각각 언제 고르나요?",
        type: "paragraphs",
        items: [
          "앱이 다른 이미지 형식을 요구할 때 사용하세요.",
          "웹 업로드, 기기 간 공유, 워크플로 호환에 유용합니다.",
        ],
      },
      {
        title: "4. 프라이버시와 속도를 위해 브라우저에서 형식을 변환하는 이유는?",
        type: "unordered",
        items: [
          "브라우저 로컬 변환.",
          "흔한 최신 형식 지원.",
          "손실 출력 품질 조절.",
          "HEIC/HEIF 입력 호환.",
          "가입 불필요.",
        ],
      },
      {
        title: "5. 팀이 웹·앱용 이미지 자산을 일괄 변환하는 때는?",
        type: "unordered",
        items: [
          "HEIC 사진을 공유하기 쉬운 JPG로 변환.",
          "웹 성능을 위해 WebP·AVIF로 보내기.",
          "디자인·CMS 도구가 요구하는 형식 맞추기.",
          "효율적인 이미지 형식으로 저장 공간 절약.",
        ],
      },
    ],
    faq: [
      {
        question: "이 도구로 PNG, JPG, WebP 등 형식을 변환하려면?",
        answer:
          "파일을 올리고 대상 형식과 선택적 품질을 설정한 뒤 변환하고 다운로드하면 됩니다.",
      },
      {
        question: "이 형식 변환기는 브라우저에서 어떻게 디코딩·인코딩하나요?",
        answer:
          "원본 이미지 데이터를 브라우저 런타임에서 처리해 대상 형식으로 바로보냅니다.",
      },
      {
        question: "어떤 이미지 형식을 지원하며, 각각 언제 고르나요?",
        answer:
          "작은 파일에는 JPG/WebP/AVIF, 무손실 그래픽에는 PNG, 워크플로 호환에는 형식별 선택이 적합합니다.",
      },
      {
        question: "팀이 웹·앱용 이미지 자산을 일괄 변환하는 때는?",
        answer:
          "업로드, 시스템 이전, 성능 최적화 작업 중에 자산을 변환할 때 자주 사용합니다.",
      },
    ],
  },
  "image.images-to-animated-gif": {
    h1: "이미지→애니 GIF",
    subtitle: "여러 이미지를 브라우저에서 하나의 반복 GIF로 합치기",
    guideTitle: "이미지→애니 GIF 가이드",
    guideIntro:
      "순서대로 올린 정지 이미지를 반복 GIF로 만듭니다. 형식별 GIF 변환기 경로(JPG 전용 등)는 GIF 변환기 허브를 이용하세요.",
    sections: [
      {
        title: "1. 이 도구로 여러 이미지를 하나의 애니 GIF로 합치려면?",
        type: "ordered",
        items: [
          "애니메이션 프레임 순서대로 이미지 두 장 이상을 추가하세요.",
          "↑ / ↓로 프레임 순서를 바꾸고, 불필요한 프레임은 제거하세요.",
          "프레임 지연(각 이미지 표시 시간), 출력 가로·세로, 레터박스 색을 설정하세요.",
          "GIF 품질을 조정하고 무한 반복 여부를 선택하세요.",
          "애니 GIF 만들기를 누른 뒤 미리 보고 단일 .gif 파일을 다운로드하세요.",
        ],
      },
      {
        title: "2. 이 도구는 파일을 업로드하지 않고 어떻게 애니 GIF를 만드나요?",
        type: "paragraphs",
        items: [
          "각 이미지를 고정 크기 캔버스(레터박스 맞춤)에 순서대로 그립니다.",
          "gif.js가 Web Worker에서 프레임을 인코딩해 기기 안에서 하나의 GIF 파일을 만듭니다.",
          "HEIC/HEIF는 heic2any로 먼저 디코딩한 뒤 다른 이미지와 같이 래스터화합니다.",
        ],
      },
      {
        title: "3. 프레임 수와 출력 크기에는 어떤 제한이 있나요?",
        type: "paragraphs",
        items: [
          "여러 정지 화면을 간단한 애니메이션—슬라이드쇼 GIF, 밈, UI 목업—으로 바꿀 때 사용합니다.",
          "완전한 영상 편집기가 아니며, 성능과 브라우저 메모리를 위해 프레임 수가 제한됩니다.",
        ],
      },
      {
        title: "4. 빠른 애니메이션에 브라우저 GIF 빌더를 쓰는 이유는?",
        type: "unordered",
        items: [
          "클라이언트 전용: 서버 업로드 없음.",
          "보내기 전 프레임 순서 변경.",
          "지연, 크기, 배경, 반복, 팔레트 품질 조절.",
        ],
      },
      {
        title: "5. 이미지 시퀀스 GIF가 영상 파일보다 나은 때는?",
        type: "unordered",
        items: [
          "연사·연속 사진을 공유 가능한 GIF로 만들기.",
          "채팅·이메일용 빠른 스토리보드·전후 비교 애니메이션.",
          "정적 UI 스크린샷으로 모션 프로토타입 만들기.",
        ],
      },
    ],
    faq: [
      {
        question: "이 도구로 여러 이미지를 하나의 애니 GIF로 합치려면?",
        answer:
          "순서대로 이미지를 올리고 지연·캔버스 크기를 조정한 뒤 GIF를 만들고 단일 파일로 다운로드하면 됩니다.",
      },
      {
        question: "이 도구는 파일을 업로드하지 않고 어떻게 애니 GIF를 만드나요?",
        answer:
          "브라우저에서 이미지를 디코딩해 캔버스 프레임으로 그린 뒤 gif.js와 Web Worker로 로컬 인코딩합니다.",
      },
      {
        question: "프레임 수와 출력 크기에는 어떤 제한이 있나요?",
        answer:
          "최대 60프레임을 지원합니다. 매우 큰 해상도는 기기에 따라 느리거나 메모리를 많이 쓸 수 있습니다.",
      },
      {
        question: "이미지 시퀀스 GIF가 영상 파일보다 나은 때는?",
        answer:
          "영상 코덱·자동 재생이 어려운 채팅, 포럼, 단순 임베드에서 GIF가 널리 지원됩니다.",
      },
    ],
  },
  "image.image-editor": {
    h1: "이미지 편집기",
    subtitle: "빠른 보정용 온라인 이미지 편집기",
    guideTitle: "이미지 편집기 가이드",
    guideIntro:
      "자르기, 조정, 주석,  보내기를 공유 전에 처리하세요. 편집 후 형식 변경이 필요하면 이미지 형식 변환기를 이용하세요.",
    sections: [
      {
        title: "1. 이 편집기로 이미지를 자르고, 크기를 바꾸고, 조정하려면?",
        type: "ordered",
        items: [
          "이미지를 올린 뒤 구도가 어긋나면 자르기·회전부터 하세요.",
          "밝기/대비/채도를 조정하고 필요하면 빠른 효과를 적용하세요.",
          "주석이 필요하면 텍스트, 화살표, 도형을 추가하세요.",
          "보내기 전 워터마크와 비교 보기를 사용하세요.",
          "원하는 품질 수준으로 저장하세요.",
        ],
      },
      {
        title: "2. 이 이미지 편집기는 브라우저에서 어떻게 로컬로 편집을 적용하나요?",
        type: "paragraphs",
        items: [
          "편집기는 브라우저 렌더링 레이어에 변환과 효과를 적용합니다.",
          "주석과 워터마크 오버레이는보낼 때 합쳐집니다.",
          "모든 편집은 브라우저 안에서 로컬로 처리됩니다.",
        ],
      },
      {
        title: "3. 이미지 편집기 소개",
        type: "paragraphs",
        items: [
          "이미지를 공유하기 전 빠른 보정에 사용하세요.",
          "실용적인 작업용이며, 본격적인 레이어 디자인용이 아닙니다.",
        ],
      },
      {
        title: "4. 빠른 보정에 가벼운 웹 이미지 편집기를 쓰는 이유는?",
        type: "unordered",
        items: [
          "브라우저 로컬 이미지 편집.",
          "자르기·조정·주석용 빠른 도구.",
          "워터마크와 전·후 비교.",
          "가입·설치 불필요.",
        ],
      },
      {
        title: "5. 상품 사진·썸네일에 빠른 브라우저 편집만으로 충분한 때는?",
        type: "unordered",
        items: [
          "사진 방향·노출을 빠르게 고치기.",
          "문서·지원 티켓용 스크린샷 주석.",
          "게시 전 브랜드 워터마크 추가.",
          "SNS용 시각 자료 크기·자르기 조정.",
        ],
      },
    ],
    faq: [
      {
        question: "이 편집기로 이미지를 자르고, 크기를 바꾸고, 조정하려면?",
        answer:
          "이미지를 올리고 자르기/크기·조정 컨트롤을 사용한 뒤 미리보기가 맞으면 내면 됩니다.",
      },
      {
        question: "이 이미지 편집기는 브라우저에서 어떻게 로컬로 편집을 적용하나요?",
        answer:
          "브라우저 이미지 처리 API로 클라이언트 측에서 렌더링하고보냅니다.",
      },
      {
        question: "이 편집기로 할 수 있는 것과 실질적인 한계는?",
        answer:
          "빠른 실용 편집은 가능하지만, 고급 레이어 데스크톱 편집기를 완전히 대체하지는 않습니다.",
      },
      {
        question: "상품 사진·썸네일에 빠른 브라우저 편집만으로 충분한 때는?",
        answer:
          "일상적인 정리, 주석, 크기 조정, SNS/웹용 보내기에는 충분합니다.",
      },
    ],
  },
  "image.paint-board": {
    h1: "페인트 보드",
    subtitle: "스케치·주석용 온라인 페인트 보드",
    guideTitle: "페인트 보드 가이드",
    guideIntro:
      "와이어프레임 스케치, 스크린샷 주석, 캔버스에 시각 메모를 남기세요. 완료 후 PNG로보냅니다.",
    sections: [
      {
        title: "1. 이 페인트 보드로 그리고, 스케치하고, 주석을 달려면?",
        type: "ordered",
        items: [
          "도구(브러시, 지우개, 도형, 이미지 삽입)를 고르세요.",
          "색과 브러시 크기를 설정한 뒤 캔버스에 직접 그리세요.",
          "스케치를 다듬을 때 실행 취소/다시 실행을 사용하세요.",
          "필요하면 참고 이미지를 삽입하세요.",
          "결과를 PNG로 보내세요.",
        ],
      },
      {
        title: "2. 이 캔버스 기반 페인트 보드는 브라우저에서 어떻게 동작하나요?",
        type: "paragraphs",
        items: [
          "페인트 보드는 HTML5 캔버스에 동작을 렌더링합니다.",
          "실행 취소/다시 실행은 로컬 스냅샷 기록에 기반합니다.",
          "그리기와 보내기 단계는 모두 브라우저에서 실행됩니다.",
        ],
      },
      {
        title: "3. 이 온라인 페인트 보드로 무엇을 만들 수 있으며, 한계는?",
        type: "paragraphs",
        items: [
          "빠른 스케치, 주석, 간단한 다이어그램에 사용하세요.",
          "복잡한 다층 아트 프로젝트보다 빠른 시각 메모용으로 설계되었습니다.",
        ],
      },
      {
        title: "4. 빠른 다이어그램·메모에 브라우저 스케치패드를 쓰는 이유는?",
        type: "unordered",
        items: [
          "브라우저 로컬 그리기 워크플로.",
          "일상 스케치용 빠른 도구 세트.",
          "실행 취소/다시 실행과 이미지 삽입.",
          "가입·설치 불필요.",
        ],
      },
      {
        title: "5. 목업·화이트보드 아이디어에 단순 페인트 도구만으로 충분한 때는?",
        type: "unordered",
        items: [
          "빠른 플로차트·UI 와이어프레임 그리기.",
          "기획 회의 중 아이디어 스케치.",
          "피드백용 스크린샷 주석.",
          "간단한 교육용 시각 자료 만들기.",
        ],
      },
    ],
    faq: [
      {
        question: "이 페인트 보드로 그리고, 스케치하고, 주석을 달려면?",
        answer:
          "그리기 도구를 고르고 색·크기를 조정한 뒤 캔버스에서 작업하고 PNG로 내면 됩니다.",
      },
      {
        question: "이 캔버스 기반 페인트 보드는 브라우저에서 어떻게 동작하나요?",
        answer:
          "브라우저 캔버스 렌더링과 로컬 기록 스냅샷으로 그리기와 실행 취소/다시 실행을 처리합니다.",
      },
      {
        question: "이 온라인 페인트 보드로 무엇을 만들 수 있으며, 한계는?",
        answer:
          "빠른 스케치·주석에 적합하지만, 고급 레이어 일러스트 워크플로를 목표로 하지 않습니다.",
      },
      {
        question: "목업·화이트보드 아이디어에 단순 페인트 도구만으로 충분한 때는?",
        answer:
          "빠른 시각 전달, 가벼운 다이어그램, 짧은 컨셉 초안에 충분합니다.",
      },
    ],
  },
};

export const imageUiKo = {
  imageCompressor: {
    backToHub: "← 이미지 도구로",
    upload: {
      dragDrop: "이미지를 끌어다 놓거나",
      chooseFiles: "파일 선택",
    },
    summary: {
      totalFiles: "총 {n}개 파일",
      originalSize: "원본 용량: {size}",
      compressedSize: "압축 용량: {size}",
      percentReduced: "{percent}% 감소",
      noChange: "변화 없음",
    },
    labels: {
      compressionQuality: "압축 품질",
      maxWidthOptional: "최대 너비 (선택)",
      originalWidthPlaceholder: "원본 너비",
      removeExif: "EXIF 메타데이터 제거",
      exifHint: "압축 결과에서 카메라/위치 메타데이터 제거",
    },
    buttons: {
      compressAll: "전체 압축",
      downloadAllZip: "전체 다운로드 (ZIP)",
      reset: "초기화",
      download: "다운로드",
      remove: "제거",
    },
    status: {
      pending: "대기",
      compressing: "압축 중",
      done: "완료",
      error: "오류",
    },
    preview: {
      compare: "비교: 원본 vs 압축",
      preview: "미리보기",
      compressedView: "압축 보기 {percent}%",
      sizeLine: "원본: {original} · 압축: {compressed}",
      compressToCompare: "{size} · 압축 후 비교",
    },
    fileInfo: {
      originalSize: "원본 용량: {size}",
      resolution: "해상도: {width} × {height}px",
      compressedSize: "압축 용량: {size}",
      percentReduced: "({percent}% 감소)",
      errorPrefix: "오류: {message}",
    },
    messages: {
      onlyImages: "이미지 파일만 업로드할 수 있습니다.",
      filesAdded: "이미지 {n}개가 추가되었습니다.",
      loadError: "파일을 불러오는 중 오류가 발생했습니다.",
      uploadFirst: "먼저 이미지를 업로드하세요.",
      allCompressed: "모든 이미지가 성공적으로 압축되었습니다.",
      partialCompressed: "이미지 {n}개가 성공적으로 압축되었습니다.",
      compressFailed: "이미지 압축에 실패했습니다.",
      compressFirst: "먼저 이미지를 압축하세요.",
      zipStarted: "ZIP 다운로드가 시작되었습니다.",
      zipError: "ZIP 파일 생성 중 오류가 발생했습니다.",
      noCompressedFile: "압축된 파일이 없습니다.",
      fileRemoved: "{name}이(가) 목록에서 제거되었습니다.",
      resetDone: "도구가 초기화되었습니다.",
    },
  },
  imageFormatConverter: {
    backToHub: "← 이미지 도구로",
    privacyBanner: "모든 변환은 브라우저에서 실행됩니다. 파일은 기기를 떠나지 않습니다.",
    uploadTitle: "파일 업로드",
    upload: {
      loading: "불러오는 중...",
      dropOrClick: "이미지를 끌어다 놓거나 클릭하여 업로드",
    },
    supportedFormats: "PNG, JPG, WebP, GIF, BMP, TIFF, AVIF, HEIC, HEIF",
    preview: "미리보기",
    fileInfo: {
      originalFormat: "원본 형식: {format}",
      size: "용량: {size}",
      dimensions: "크기: {width} × {height} px",
      convertedSize: "변환 용량: 약 {size}",
    },
    labels: {
      convertTo: "변환 대상",
      quality: "품질 (JPG, WebP, AVIF)",
      background: "배경 (투명 이미지용)",
    },
    formatOptions: {
      png: "PNG (무손실)",
      jpeg: "JPG (고압축)",
      webp: "WEBP (최적화)",
      gif: "GIF (애니메이션)",
      bmp: "BMP (비압축)",
      tiff: "TIFF (고품질)",
      avif: "AVIF (차세대)",
    },
    formatDescriptions: {
      png: "무손실 압축, 투명도 지원",
      jpeg: "작은 용량, 사진에 적합",
      webp: "웹 최적화, 투명도 지원",
      gif: "애니메이션 지원, 256색",
      bmp: "비압축, 큰 용량",
      tiff: "전문용, 다중 이미지 지원",
      avif: "차세대 형식, 높은 효율",
    },
    buttons: {
      convert: "변환",
      download: "다운로드",
      reset: "초기화",
    },
    messages: {
      onlyImages: "이미지 파일만 업로드할 수 있습니다.",
      loadFailed: "이미지를 불러오지 못했습니다.",
      loadError: "파일을 불러오는 중 오류가 발생했습니다.",
      uploadFirst: "먼저 이미지를 업로드하세요.",
      canvasError: "캔버스 컨텍스트를 가져오지 못했습니다.",
      converted: "이미지가 성공적으로 변환되었습니다.",
      formatUnsupported: "브라우저가 이 형식으로의 변환을 지원하지 않습니다.",
      resetDone: "도구가 초기화되었습니다.",
    },
  },
  imagesToAnimatedGif: {
    backToHub: "← 이미지 도구로",
    privacyBanner: "모든 변환은 브라우저에서 실행됩니다. 파일은 기기를 떠나지 않습니다.",
    uploadTitle: "파일 업로드",
    upload: {
      dropImages: "이미지를 끌어다 놓거나 클릭하여 업로드",
      dropFormat: "{format} 파일을 끌어다 놓거나 클릭하여 업로드",
      supportsMultiple: "여러 파일 지원",
      formatHint:
        "PNG, JPG, WebP, GIF, BMP, AVIF, TIFF, HEIC/HEIF — 최대 {max}프레임 · 순서 = 애니메이션 프레임",
      ariaUploadImages: "이미지 파일 업로드",
      ariaUploadFormat: "{format} 파일 업로드",
    },
    frames: {
      countOrder: "{n}프레임 · 위에서 아래 = GIF에서 첫 프레임부터",
      addMoreImages: "이미지 더 추가",
      addMoreFormat: "{format} 더 추가",
      frameNumber: "#{n}",
      moveUp: "위로",
      moveDown: "아래로",
      remove: "제거",
    },
    labels: {
      frameDelay: "프레임 지연 (ms)",
      frameDelayHint: "다음 프레임 전에 각 프레임이 보이는 시간입니다.",
      gifQuality: "GIF 품질",
      gifQualityHint: "높을수록 색이 선명합니다(파일도 커짐). gif.js 팔레트 샘플링을 사용합니다.",
      outputWidth: "출력 너비",
      outputHeight: "출력 높이",
      letterboxBackground: "레터박스 배경",
      loopForever: "무한 반복",
    },
    buttons: {
      createGif: "애니 GIF 만들기",
      encoding: "인코딩 중… {percent}%",
      downloadGif: "GIF 다운로드",
      reset: "초기화",
    },
    preview: {
      title: "미리보기",
      alt: "애니 GIF 미리보기",
      fileSize: "파일 용량: {size}",
    },
    encoding: {
      label: "프레임 인코딩 중…",
    },
    messages: {
      onlyImages: "이미지 파일만 추가할 수 있습니다.",
      onlyFormat: "{format} 파일만 선택하세요.",
      maxFrames: "최대 {max}프레임까지 허용됩니다.",
      partialAdded: "처음 {n}개 파일만 추가되었습니다(한도 {max}프레임).",
      imagesAdded: "이미지 {n}개가 프레임 목록에 추가되었습니다.",
      formatAdded: "{format} 파일 {n}개가 프레임 목록에 추가되었습니다.",
      minFrames: "애니 GIF를 만들려면 이미지를 최소 {min}개 추가하세요.",
      gifCreated: "애니 GIF가 생성되었습니다. 아래에서 다운로드하세요.",
      gifFailed: "GIF 생성에 실패했습니다",
      createFirst: "먼저 GIF를 만드세요.",
      downloadStarted: "다운로드가 시작되었습니다.",
      resetDone: "초기화되었습니다.",
    },
  },
  imageEditor: {
    backToHub: "← 이미지 도구로",
    privacyBanner: "모든 편집은 브라우저에서 실행됩니다. 파일은 기기를 떠나지 않습니다.",
    uploadTitle: "파일 업로드",
    upload: {
      loading: "불러오는 중...",
      dropOrClick: "이미지를 끌어다 놓거나 클릭하여 업로드",
    },
    supportedFormats: "PNG, JPG, WebP, GIF, BMP, TIFF, AVIF, HEIC, HEIF",
    textModal: {
      label: "텍스트 입력",
      placeholder: "여기에 입력...",
      add: "추가",
      cancel: "취소",
    },
    sections: {
      filters: "필터",
      instantEffects: "즉시 효과",
      transform: "변환",
      drawAnnotate: "그리기·주석",
      utilities: "유틸리티",
      actions: "작업",
    },
    filters: {
      brightness: "밝기",
      contrast: "대비",
      saturation: "채도",
      warmth: "색온도",
      warmthCool: "차갑게",
      warmthWarm: "따뜻하게",
      warmthNeutral: "중립",
      sharpness: "선명도",
      sharpnessSoft: "부드럽게",
      sharpnessSharp: "선명하게",
      sharpnessNormal: "보통",
      exposure: "노출",
    },
    effects: {
      grayscale: "흑백",
      sepia: "세피아",
      invert: "반전",
      noir: "느와르",
      vintage: "빈티지",
      blur: "블러",
      saturated: "채도 강화",
      fade: "페이드",
      toggleHint: "클릭하여 적용, 다시 클릭하여 해제",
    },
    transform: {
      rotateLeft: "왼쪽 회전",
      rotateRight: "오른쪽 회전",
      flipHorizontal: "좌우 뒤집기",
      flipVertical: "상하 뒤집기",
      crop: "자르기",
      cropFree: "자유",
      applyCrop: "자르기 적용",
      resize: "크기 조절",
      widthPlaceholder: "너비",
      heightPlaceholder: "높이",
      maintainAspect: "비율 유지",
      applyResize: "크기 적용",
    },
    draw: {
      text: "텍스트",
      arrow: "화살표",
      rectangle: "사각형",
      brush: "브러시",
      color: "색상",
      size: "크기",
      sizePx: "{n}px",
      hintText: "캔버스를 클릭한 뒤 텍스트를 입력하세요",
      hintDraw: "캔버스에서 클릭하고 드래그하여 그리세요",
    },
    utilities: {
      addWatermark: "워터마크 추가",
      watermarkPlaceholder: "워터마크 텍스트",
      position: "위치",
      positions: {
        topLeft: "왼쪽 위",
        topRight: "오른쪽 위",
        center: "가운데",
        bottomLeft: "왼쪽 아래",
        bottomRight: "오른쪽 아래",
        tiled: "타일",
      },
      opacity: "불투명도",
      watermarkPreview: "위 캔버스에서 미리보기",
      compareOriginal: "원본과 비교",
      showingOriginal: "원본 표시 중",
      showingEdited: "편집본 표시 중",
    },
    actions: {
      reset: "초기화",
      saveImage: "이미지 저장",
      qualityHigh: "높음 (100%)",
      qualityMedium: "보통 (80%)",
      qualityLow: "낮음 (60%)",
    },
  },
  paintBoard: {
    backToHub: "← 이미지 도구로",
    tools: {
      brush: "브러시",
      eraser: "지우개",
      rectangle: "사각형",
      circle: "원",
      line: "선",
      insertImage: "이미지 삽입",
    },
    colors: {
      foreground: "전경색",
      background: "배경색",
    },
    history: {
      undo: "실행 취소",
      redo: "다시 실행",
      clear: "지우기",
      save: "저장",
    },
    brushSize: "{n}px",
    pendingImage: "캔버스를 클릭하여 이미지를 삽입하세요",
  },
};
