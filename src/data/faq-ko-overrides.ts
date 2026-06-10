import type { FaqEntry } from "./faq-data";

export type FaqKoOverride = Pick<
  FaqEntry,
  | "question"
  | "directAnswer"
  | "detailedExplanation"
  | "relationshipContext"
  | "relatedConverterLabel"
  | "metaDescription"
>;

/** Korean copy keyed by `category/slug`. */
export const FAQ_KO_OVERRIDES: Record<string, FaqKoOverride> = {
  "color-picker/free-hex-to-rgb-converter-for-css-and-html-color-codes": {
    question:
      "CSS·HTML용 무료 HEX→RGB 변환기 — #RRGGBB를 스타일시트용 rgb() 값으로 바꾸려면?",
    directAnswer:
      "6자리 16진수를 세 쌍으로 나누면 각 쌍이 0–255 채널입니다. 예: #3498DB → R=0x34=52, G=0x98=152, B=0xDB=219 → rgb(52, 152, 219). HEX→RGB 전용 페이지에서 #코드를 입력하고 결과를 복사하세요.",
    detailedExplanation:
      "16진수는 16진 기반이므로 두 자리가 채널 하나(0–255)를 표현합니다. CSS에서는 #RGB처럼 반복 축약도 가능합니다(#abc = #aabbcc). 전용 변환기는 컬러 피커와 동일한 sRGB 계산을 사용하며, 계산기 아래에 단계별 설명을 표시합니다.",
    relationshipContext:
      "HEX와 RGB는 화면에서 같은 sRGB 색을 다른 표기로 쓴 것입니다. HEX는 팔레트·API에 간결하고, rgb()는 CSS·디자인 토큰에 명시적입니다.",
    relatedConverterLabel: "HEX → RGB",
    metaDescription:
      "CSS·HTML용 무료 HEX→RGB 변환기. #RRGGBB를 rgb()로 변환하고, 수식·예시·브라우저 컬러 피커를 WithUsTools에서 이용하세요.",
  },
  "color-picker/rgb-to-hex-converter-online-paste-rgb-color-codes": {
    question:
      "온라인 RGB→HEX 변환기 — rgb(255, 87, 51)을 Figma·CSS·Slack용 #hex로 바꾸려면?",
    directAnswer:
      "각 채널을 0–255로 맞춘 뒤 두 자리 16진수로 바꿔 #로 이어 붙입니다. 예: rgb(52, 152, 219) → #3498DB. RGB→HEX 도구는 많은 디자인 앱처럼 대문자 HEX를 출력합니다.",
    detailedExplanation:
      "rgb(r, g, b) 또는 쉼표로 구분한 세 숫자를 입력하세요. 정수로 반올림한 뒤 메인 컬러 피커와 같은 패킹 규칙을 적용하고, 계산기 패널에 중간 단계를 보여 줍니다. 최종 문자열을 #RRGGBB를 기대하는 도구에 붙여 넣으면 됩니다.",
    relationshipContext:
      "RGB는 채널 강도를 직접 나열하고, HEX는 같은 정보를 16진으로 표현합니다. 워크플로에 맞는 쪽을 쓰면 됩니다.",
    relatedConverterLabel: "RGB → HEX",
    metaDescription:
      "온라인 RGB→HEX 변환기. rgb() 값을 붙여 넣어 Figma·CSS·디자인 핸드오프용 #hex 코드를 무료로 얻으세요.",
  },
  "color-picker/hsl-vs-hsv-color-picker-difference-saturation-brightness": {
    question:
      "컬러 피커의 HSL vs HSV — 채도, 명도(lightness), 명도(value/밝기) 차이는?",
    directAnswer:
      "둘 다 색상 0–360°를 쓰지만, HSL의 세 번째 축은 명도(회색과의 혼합)이고 HSV의 세 번째 축은 value(최대 채널 밝기)입니다. 같은 RGB라도 HSL·HSV 숫자는 달라질 수 있으며, 가장자리가 밝아지는 휠은 보통 HSV 스타일입니다.",
    detailedExplanation:
      "HSL(색상·채도·명도)은 명도를 바꿔 밝기를 조절합니다. HSV(색상·채도·value)는 value가 높을 때 휠 가장자리가 선명합니다. 컬러 피커는 CSS hsl()과 HSB/HSV 라벨 도구 모두에 맞추기 위해 둘 다 표시하며, 전용 페이지에서 모든 쌍 변환과 계산 과정을 볼 수 있습니다.",
    relationshipContext:
      "HSL과 HSV는 틀린 것이 아니라 sRGB의 다른 원통 좌표입니다. 정수 반올림 때문에 역변환 시 고른 HEX와 ±1 차이가 날 수 있습니다.",
    relatedConverterLabel: "HSL → HSV",
    metaDescription:
      "컬러 피커용 HSL vs HSV 설명: 채도·명도·밝기 비교와 무료 변환기 링크.",
  },
  "color-picker/cmyk-to-hex-rgb-converter-print-colors-on-screen": {
    question:
      "인쇄 디자이너용 CMYK→HEX/RGB 변환기 — 브로슈어 잉크 색을 모니터에서 미리 보려면?",
    directAnswer:
      "화면 미리보기에는 단순 CMYK→sRGB 공식을 씁니다: 각 채널 255×(1−잉크)×(1−검정). 이 사이트는 컬러 피커와 같은 모델을 쓰며, 피커에서 복사한 CMYK는 옆 HEX/RGB와 맞도록 변환합니다(정수 CMYK는 여러 RGB에 대응할 수 있음).",
    detailedExplanation:
      "실제 인쇄는 종이·잉크·ICC 프로필에 따라 달라지며, 브라우저 도구는 근사치입니다. cmyk(c%, m%, y%, k%)를 CMYK→HEX 또는 CMYK→RGB에 입력하고, 화면 색에서 시작했다면 메인 컬러 피커와 비교하세요.",
    relationshipContext:
      "CMYK는 감산(잉크), RGB는 가산(빛)입니다. 프로필 없이는 하나의 ‘정확한’ 쌍이 없고 수학 모델로 만납니다.",
    relatedConverterLabel: "CMYK → HEX",
    metaDescription:
      "인쇄 디자인 미리보기용 CMYK→HEX·RGB 변환기. CMYK 퍼센트를 화면 코드로 바꾸세요.",
  },
  "color-picker/why-cmyk-numbers-differ-from-rgb-hex-same-color": {
    question:
      "Illustrator·브라우저·무료 피커에서 CMYK 퍼센트가 RGB/HEX와 왜 다르게 보이나요?",
    directAnswer:
      "앱마다 프로필·검정 생성·반올림 규칙이 다릅니다. 여기서 CMYK는 0–100% 단순 미리보기 모델이며, 정수 CMYK는 반올림 후 여러 RGB에 대응할 수 있어 CMYK→HEX 역변환이 다른 앱과 다를 수 있습니다.",
    detailedExplanation:
      "UI 작업에서는 HEX/RGB를 기준으로 두세요. CMYK는 인쇄소와 소통할 때의 힌트입니다. 컬러 피커 가이드와 전용 변환기는 피커에서 복사한 값이 옆 HEX/RGB와 일치하도록 맞춥니다.",
    relationshipContext:
      "화면 스와치에 ‘유일한 정답 CMYK’보다, 같은 규칙·프로필을 쓰는 일관성이 더 중요합니다. 인쇄 시에는 시안으로 확인하세요.",
    relatedConverterLabel: "컬러 피커",
    metaDescription:
      "CMYK와 RGB/HEX가 앱마다 다른 이유: 프로필, 반올림, 미리보기 한계 — 컬러 피커 링크 포함.",
  },
  "color-picker/wcag-contrast-ratio-calculator-hex-text-background-accessibility": {
    question:
      "HEX 색의 WCAG 대비비 — 텍스트와 배경이 AA·AAA 접근성을 만족하는지 확인하려면?",
    directAnswer:
      "sRGB 상대 휘도를 구한 뒤 대비 = (밝은 L + 0.05) / (어두운 L + 0.05). 컬러 피커는 비율과 Fail·AA Large·AA·AAA 배지를 표시합니다. 텍스트 색을 고르고 비교 스와치(프리셋 또는 HEX)를 설정하면 즉시 확인할 수 있습니다.",
    detailedExplanation:
      "WCAG 2.1은 일반 텍스트 AA 4.5:1, AAA 7:1, 큰 텍스트 AA 3:1을 씁니다. 스포이드로 UI 픽셀을 샘플링할 수 있습니다. 공식 감사에는 WCAG 문서를 참고하고, 빠른 디자인 반복에는 이 도구가 적합합니다.",
    relationshipContext:
      "접근성은 실제 기기에서의 인지 대비에 관한 것이며, 계산기는 입력한 sRGB 값을 가정합니다.",
    relatedConverterLabel: "컬러 피커 (대비)",
    metaDescription:
      "HEX·RGB 텍스트/배경 WCAG 대비비 검사. AA/AAA 배지와 스포이드가 있는 무료 컬러 피커.",
  },
  "color-picker/hex-to-rgba-converter-alpha-transparency-css-overlay": {
    question:
      "투명 UI용 HEX→RGBA 변환기 — 불투명 #hex에 알파를 넣어 오버레이·글래스 효과를 만들려면?",
    directAnswer:
      "불투명 RGB에서 α를 0–1로 설정합니다. 최신 브라우저는 #RRGGBBAA도 지원합니다. HEX→RGBA 페이지는 rgba(r, g, b, a)를 출력하고, α<1이면 HEX 출력 페이지에서 8자리 HEX를 씁니다.",
    detailedExplanation:
      "투명도는 R·G·B를 바꾸지 않고 배경이 비치는 정도만 조절합니다. #RRGGBB를 붙이거나 컬러 피커 알파 슬라이더를 쓴 뒤 rgba()를 CSS·스펙에 복사하세요.",
    relationshipContext:
      "RGBA는 sRGB에 알파 채널 하나를 더한 것입니다. 프리멀티플라이 형식은 그래픽 파이프라인에서 별도 주제입니다.",
    relatedConverterLabel: "HEX → RGBA",
    metaDescription:
      "CSS 투명도용 HEX→RGBA 변환기. #hex에 알파를 더해 오버레이에 사용 — 온라인 컬러 피커와 연동.",
  },
  "color-picker/browser-eyedropper-color-picker-screen-to-hex-rgb-online": {
    question:
      "브라우저 스포이드 컬러 피커 — 설치 없이 화면 색을 HEX·RGB로 가져오려면?",
    directAnswer:
      "EyeDropper API를 지원하는 Chromium 계열 브라우저에서 컬러 피커를 열고 스포이드를 누른 뒤 픽셀을 클릭하세요. #RRGGBB와 RGB·HSL·HSV·CMYK·대비 패널이 갱신됩니다. 두 번째 스포이드는 WCAG 비교 색을 설정합니다.",
    detailedExplanation:
      "EyeDropper를 지원하지 않으면 기본 색 입력이나 수동 붙여넣기를 쓰세요. 모든 처리는 로컬에서 이루어지며, 저장 색(최대 20개)은 localStorage에 보관됩니다.",
    relationshipContext:
      "화면 샘플링은 표시된 sRGB 픽셀을 읽습니다. HDR·색 관리 창은 다른 모니터와 차이가 날 수 있습니다.",
    relatedConverterLabel: "컬러 피커",
    metaDescription:
      "무료 브라우저 스포이드: 화면 픽셀을 HEX·RGB로 샘플링 — WithUsTools 컬러 피커.",
  },
};
