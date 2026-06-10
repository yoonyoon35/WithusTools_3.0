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
  "length/how-many-feet-in-a-yard": {
    question: "1야드는 몇 피트인가요?",
    directAnswer: "1야드는 3피트입니다.",
    detailedExplanation:
      "야드파운드에서 1야드는 정확히 3피트로 정의됩니다. 야드→피트는 3을 곱하고, 피트→야드는 3으로 나눕니다. 국제 야드의 미터 정의와 무관하게 이 비율은 정확합니다.",
    relationshipContext:
      "야드와 피트는 야드파운드 길이 단위입니다. 12인치 = 1피트, 3피트 = 1야드이며, 오늘날 미터(1yd = 0.9144m, 1ft = 0.3048m)에 고정되어 있습니다.",
    relatedConverterLabel: "야드 → 피트",
  },
  "length/how-many-inches-in-feet": {
    question: "1피트는 몇 인치인가요?",
    directAnswer: "1피트는 12인치입니다.",
    detailedExplanation:
      "1피트 = 12인치입니다. 피트→인치는 12를 곱하고, 인치→피트는 12로 나눕니다. 인치는 국제적으로 2.54cm로 정의되어 SI와 연결됩니다.",
    relationshipContext:
      "인치와 피트는 같은 야드파운드 계열입니다. 미국 등에서 건축·신장 표기에 널리 쓰입니다.",
    relatedConverterLabel: "피트 → 인치",
  },
  "length/how-many-centimeters-in-an-inch": {
    question: "1인치는 몇 센티미터인가요?",
    directAnswer: "1인치는 정확히 2.54센티미터입니다.",
    detailedExplanation:
      "1959년부터 국제 인치는 2.54cm로 정의됩니다. 인치→cm는 2.54를 곱하고, cm→인치는 2.54로 나눕니다.",
    relationshipContext:
      "인치는 야드파운드, 센티미터는 미터법(SI)입니다. 화면·공구·신체 치수 변환에 자주 쓰입니다.",
    relatedConverterLabel: "인치 → 센티미터",
  },
  "length/how-many-millimeters-in-a-centimeter": {
    question: "1센티미터는 몇 밀리미터인가요?",
    directAnswer: "1센티미터는 10밀리미터입니다.",
    detailedExplanation:
      "미터법은 10진 체계입니다. 1cm = 1/100m, 1mm = 1/1000m이므로 1cm = 10mm입니다.",
    relationshipContext:
      "둘 다 SI 파생 길이 단위로, 십진 관계 덕분에 계산이 간단합니다.",
    relatedConverterLabel: "센티미터 → 밀리미터",
  },
  "length/how-many-meters-in-a-kilometer": {
    question: "1킬로미터는 몇 미터인가요?",
    directAnswer: "1킬로미터는 1,000미터입니다.",
    detailedExplanation:
      "킬로(kilo-)는 1,000을 뜻합니다. km→m은 1,000을 곱하고, m→km는 1,000으로 나눕니다.",
    relationshipContext:
      "킬로미터와 미터는 모두 미터법이며, 도로·지리 거리와 과학·건축 규모에 각각 쓰입니다.",
    relatedConverterLabel: "킬로미터 → 미터",
  },
  "length/how-many-yards-in-a-mile": {
    question: "1마일은 몇 야드인가요?",
    directAnswer: "1 statute mile(육상 마일)은 1,760야드입니다.",
    detailedExplanation:
      "육상 마일은 5,280피트이고, 1야드 = 3피트이므로 5,280 ÷ 3 = 1,760야드입니다.",
    relationshipContext:
      "마일과 야드는 야드파운드 단위로, 국제 야드(0.9144m) 정의에 기반합니다.",
    relatedConverterLabel: "마일 → 야드",
  },
  "length/how-many-feet-in-a-mile": {
    question: "1마일은 몇 피트인가요?",
    directAnswer: "1 statute mile은 5,280피트입니다.",
    detailedExplanation:
      "육상 마일은 정확히 5,280피트로 정의됩니다. 마일→피트는 5,280을 곱하고, 피트→마일은 5,280으로 나눕니다.",
    relationshipContext:
      "피트와 마일은 야드파운드 길이 단위로, 미국 도로·육상 거리에 흔합니다.",
    relatedConverterLabel: "마일 → 피트",
  },
  "length/how-many-feet-in-a-meter": {
    question: "1미터는 몇 피트인가요?",
    directAnswer:
      "1미터는 약 3.28084피트입니다(정확히: 1m = 1÷0.3048 ft, 1ft = 0.3048m).",
    detailedExplanation:
      "미터는 SI 기본 단위, 피트는 0.3048m로 정의됩니다. 실무에서는 3.28084로 충분한 경우가 많으며, 고정밀은 계산기를 사용하세요.",
    relationshipContext:
      "미터는 미터법, 피트는 야드파운드입니다. 공학·여행·건축에서 상호 변환이 필수입니다.",
    relatedConverterLabel: "미터 → 피트",
  },
  "length/how-many-centimeters-in-a-meter": {
    question: "1미터는 몇 센티미터인가요?",
    directAnswer: "1미터는 100센티미터입니다.",
    detailedExplanation:
      "센티미터는 미터의 1/100입니다. m→cm는 100을 곱하고, cm→m은 100으로 나눕니다.",
    relationshipContext:
      "미터와 센티미터는 모두 미터법(SI)이며 정확한 십진 배수 관계입니다.",
    relatedConverterLabel: "미터 → 센티미터",
  },
  "length/how-many-inches-in-a-yard": {
    question: "1야드는 몇 인치인가요?",
    directAnswer: "1야드는 36인치입니다.",
    detailedExplanation:
      "1야드 = 3피트, 1피트 = 12인치이므로 3 × 12 = 36인치입니다. 야드→인치는 36을 곱합니다.",
    relationshipContext:
      "야드·피트·인치는 1yd = 3ft = 36in으로 연결되며, 인치·야드의 미터 정의에 묶여 있습니다.",
    relatedConverterLabel: "야드 → 인치",
  },
  "weight/how-many-pounds-in-a-kilogram": {
    question: "1킬로그램은 몇 파운드인가요?",
    directAnswer: "1킬로그램은 약 2.20462파운드(국제 avoirdupois)입니다.",
    detailedExplanation:
      "킬로그램은 SI 기본 질량 단위이고, 국제 파운드는 정확히 0.45359237kg으로 정의됩니다. 따라서 1kg = 1 ÷ 0.45359237 lb ≈ 2.20462262185lb입니다. 일상에서는 2.20462로 충분한 경우가 많으며, 정밀 무역에는 계산기를 사용하세요.",
    relationshipContext:
      "킬로그램은 미터법, 파운드는 미국 관습/야드파운드(avoirdupois)입니다. 체중·수하물·요리에서 양쪽 체계 간 변환이 흔합니다.",
    relatedConverterLabel: "킬로그램 → 파운드",
  },
  "weight/how-many-ounces-in-a-pound": {
    question: "1파운드는 몇 온스인가요?",
    directAnswer: "1 avoirdupois 파운드는 16온스입니다.",
    detailedExplanation:
      "미국·영국 일상 무게의 avoirdupois 체계에서 1파운드 = 정확히 16온스입니다. lb→oz는 16을 곱하고, oz→lb는 16으로 나눕니다.",
    relationshipContext:
      "온스와 파운드는 같은 미국 관습/야드파운드 계열입니다. 이 16:1 비율은 avoirdupois 온스(유체 온스 아님)에 정확합니다.",
    relatedConverterLabel: "파운드 → 온스",
  },
  "weight/how-many-grams-in-an-ounce": {
    question: "1온스는 몇 그램인가요?",
    directAnswer: "1 avoirdupois 온스는 약 28.3495그램입니다.",
    detailedExplanation:
      "국제 avoirdupois 온스는 국제 파운드(0.45359237kg)의 1/16로 정의되어 온스당 약 28.349523125g입니다. 요리·우편 무게를 oz와 g 사이에서 변환할 때 이 계수를 씁니다.",
    relationshipContext:
      "그램은 미터법, 온스는 야드파운드 avoirdupois입니다. 미국 레시피와 미터법 주방 사이 변환에 자주 필요합니다.",
    relatedConverterLabel: "온스 → 그램",
  },
  "weight/how-many-grams-in-a-kilogram": {
    question: "1킬로그램은 몇 그램인가요?",
    directAnswer: "1킬로그램은 1,000그램입니다.",
    detailedExplanation:
      "킬로(kilo-)는 1,000을 뜻합니다. 1kg = 1,000g입니다. kg→g는 1,000을 곱하고, g→kg는 1,000으로 나눕니다.",
    relationshipContext:
      "킬로그램과 그램은 모두 미터법(SI) 질량 단위로, 십진 관계 덕분에 계산이 간단합니다.",
    relatedConverterLabel: "킬로그램 → 그램",
  },
  "weight/how-many-pounds-in-a-stone": {
    question: "1스톤(stone)은 몇 파운드인가요?",
    directAnswer: "1스톤(영국·아일랜드 avoirdupois)은 14파운드입니다.",
    detailedExplanation:
      "영국·아일랜드에서 체중에 쓰는 스톤은 정확히 14 avoirdupois 파운드입니다. stone→lb는 14를 곱하고, lb→stone은 14로 나눕니다.",
    relationshipContext:
      "스톤과 파운드는 모두 야드파운드 avoirdupois 단위입니다. 스톤은 전 세계 무역용은 아니지만 영국·아일랜드 체중 표기에 흔합니다.",
    relatedConverterLabel: "스톤 → 파운드",
  },
  "weight/how-many-kilograms-in-a-metric-ton": {
    question: "1미터 톤은 몇 킬로그램인가요?",
    directAnswer: "1미터 톤(tonne)은 1,000킬로그램입니다.",
    detailedExplanation:
      "미터 톤은 정의상 1,000kg입니다. t→kg는 1,000을 곱하고, kg→t는 1,000으로 나눕니다.",
    relationshipContext:
      "미터 톤과 킬로그램은 모두 SI 호환 미터법 질량 단위입니다. 톤은 화물·벌크에, kg는 소량·일상에 쓰입니다.",
    relatedConverterLabel: "미터 톤 → 킬로그램",
  },
  "weight/how-many-milligrams-in-a-gram": {
    question: "1그램은 몇 밀리그램인가요?",
    directAnswer: "1그램은 1,000밀리그램입니다.",
    detailedExplanation:
      "밀리그램은 그램의 1/1,000입니다. 1g = 1,000mg입니다. g→mg는 1,000을 곱하고, mg→g는 1,000으로 나눕니다.",
    relationshipContext:
      "밀리그램과 그램은 모두 미터법(SI) 질량 단위입니다. mg는 약물·미소 질량, g는 주방·실험에 흔합니다.",
    relatedConverterLabel: "그램 → 밀리그램",
  },
  "weight/how-many-pounds-in-a-us-short-ton": {
    question: "1미국 단 톤(short ton)은 몇 파운드인가요?",
    directAnswer: "1미국 단 톤은 2,000파운드입니다.",
    detailedExplanation:
      "미국 short ton은 정확히 2,000 avoirdupois 파운드로 정의됩니다. short ton→lb는 2,000을 곱하고, lb→short ton은 2,000으로 나눕니다.",
    relationshipContext:
      "short ton은 미국 관습 화물·산업 질량 단위입니다. 미터 톤(1,000kg)이나 영국 long ton(2,240lb)과 혼동하지 마세요.",
    relatedConverterLabel: "미국 톤 → 파운드",
  },
  "weight/how-many-kilograms-in-a-pound": {
    question: "1파운드는 몇 킬로그램인가요?",
    directAnswer: "1국제 avoirdupois 파운드는 정확히 0.45359237킬로그램입니다.",
    detailedExplanation:
      "1959년부터 국제 avoirdupois 파운드는 정확히 0.45359237kg입니다. lb→kg는 이 계수를 곱하고, kg→lb는 역수(약 2.20462)를 곱합니다.",
    relationshipContext:
      "파운드는 미국 관습/야드파운드, 킬로그램은 미터법(SI)입니다. 체중·배송 라벨·요리에서 양쪽 체계 변환이 흔합니다.",
    relatedConverterLabel: "파운드 → 킬로그램",
  },
  "weight/how-many-micrograms-in-a-milligram": {
    question: "1밀리그램은 몇 마이크로그램인가요?",
    directAnswer: "1밀리그램은 1,000마이크로그램입니다.",
    detailedExplanation:
      "마이크로그램은 그램의 백만분의 일, 밀리그램은 천분의 일입니다. 1mg = 1,000µg입니다. mg→µg는 1,000을 곱하고, µg→mg는 1,000으로 나눕니다.",
    relationshipContext:
      "둘 다 미터법(SI) 단위입니다. µg는 초저용량 약물·미량 분석, mg는 영양·보충제 라벨에 더 흔합니다.",
    relatedConverterLabel: "밀리그램 → 마이크로그램",
  },
  "temperature/how-to-convert-celsius-to-fahrenheit": {
    question: "섭씨를 화씨로 어떻게 변환하나요?",
    directAnswer: "°F = (°C × 9/5) + 32 를 사용합니다.",
    detailedExplanation:
      "섭씨에 9/5(1.8)를 곱한 뒤 32를 더해 영점 차이를 맞춥니다. 예: 0°C → 32°F, 100°C → 212°F.",
    relationshipContext:
      "섭씨는 미터법, 화씨는 미국에서 흔합니다. 도 크기와 영점이 달라 단순 곱셈만으로는 변환할 수 없습니다.",
    relatedConverterLabel: "섭씨 → 화씨",
  },
  "temperature/how-to-convert-fahrenheit-to-celsius": {
    question: "화씨를 섭씨로 어떻게 변환하나요?",
    directAnswer: "°C = (°F − 32) × 5/9 를 사용합니다.",
    detailedExplanation:
      "먼저 32를 빼 화씨 오프셋을 제거한 뒤 5/9를 곱합니다. 예: 32°F → 0°C, 212°F → 100°C.",
    relationshipContext:
      "섭씨→화씨 공식의 역변환입니다. 5/9 ≈ 0.555…로 암산해도 되고, 정밀도가 필요하면 정확한 분수를 쓰세요.",
    relatedConverterLabel: "화씨 → 섭씨",
  },
  "temperature/how-to-convert-celsius-to-kelvin": {
    question: "섭씨를 켈빈으로 어떻게 변환하나요?",
    directAnswer: "K = °C + 273.15 를 사용합니다.",
    detailedExplanation:
      "켈빈은 섭씨와 같은 도 간격이지만 절대영에서 시작합니다. 일반 과학 변환에는 273.15를 더합니다.",
    relationshipContext:
      "켈빈은 열역학 온도의 SI 기본 단위입니다. 273.15 오프셋이 섭씨와 절대영을 연결합니다.",
    relatedConverterLabel: "섭씨 → 켈빈",
  },
  "temperature/how-to-convert-kelvin-to-celsius": {
    question: "켈빈을 섭씨로 어떻게 변환하나요?",
    directAnswer: "°C = K − 273.15 를 사용합니다.",
    detailedExplanation:
      "켈빈에서 273.15를 빼 섭씨를 구합니다. 예: 273.15K = 0°C.",
    relationshipContext:
      "실험·물리 데이터는 켈빈, 일상·날씨는 섭씨를 쓰는 경우가 많습니다.",
    relatedConverterLabel: "켈빈 → 섭씨",
  },
  "temperature/how-to-convert-fahrenheit-to-kelvin": {
    question: "화씨를 켈빈으로 어떻게 변환하나요?",
    directAnswer: "먼저 섭씨로 바꾼 뒤 273.15를 더합니다: K = ((°F − 32) × 5/9) + 273.15.",
    detailedExplanation:
      "절대 온도에는 단순 비율만으로는 부족합니다. (°F − 32) × 5/9로 °C를 구한 뒤 273.15를 더해 켈빈으로 만듭니다.",
    relationshipContext:
      "미국 관습 화씨 읽기를 SI 과학·공학 단위와 맞출 때 유용합니다.",
    relatedConverterLabel: "화씨 → 켈빈",
  },
  "temperature/how-to-convert-kelvin-to-fahrenheit": {
    question: "켈빈을 화씨로 어떻게 변환하나요?",
    directAnswer: "먼저 섭씨로 바꾼 뒤 °F = (°C × 9/5) + 32 를 적용합니다.",
    detailedExplanation:
      "°C = K − 273.15로 섭씨를 구한 다음 섭씨→화씨 공식을 적용합니다. 오프셋 순서가 중요합니다.",
    relationshipContext:
      "SI 데이터를 미국 청중용 화씨로 보여줄 때 자주 씁니다.",
    relatedConverterLabel: "켈빈 → 화씨",
  },
  "temperature/how-are-kelvin-and-rankine-related": {
    question: "켈빈과 랭킨은 어떤 관계인가요?",
    directAnswer: "R = K × (9/5), 또는 K = R × (5/9) 입니다.",
    detailedExplanation:
      "둘 다 절대 척도입니다. 켈빈 1도 간격 = 섭씨 1도, 랭킨 1도 간격 = 화씨 1도이므로 절대영 기준으로 9/5 비율이 성립합니다.",
    relationshipContext:
      "랭킨은 미국 공학 열역학 문헌에서 BTU 등과 함께 등장합니다.",
    relatedConverterLabel: "켈빈 → 랭킨",
  },
  "temperature/how-to-convert-fahrenheit-to-rankine": {
    question: "화씨를 랭킨으로 어떻게 변환하나요?",
    directAnswer: "R = °F + 459.67 (이 도구의 오프셋) 를 사용합니다.",
    detailedExplanation:
      "랭킨은 화씨와 같은 도 크기이지만 절대영에서 시작합니다. 459.67을 더해 화씨 영점을 0R로 옮깁니다. 예: 32°F → 491.67R.",
    relationshipContext:
      "화씨 기반 절대 단위로 쓰인 방정식에 유용합니다.",
    relatedConverterLabel: "화씨 → 랭킨",
  },
  "temperature/how-to-convert-celsius-to-rankine": {
    question: "섭씨를 랭킨으로 어떻게 변환하나요?",
    directAnswer: "R = (°C + 273.15) × (9/5) 를 사용합니다.",
    detailedExplanation:
      "273.15를 더해 켈빈으로 만든 뒤 9/5를 곱해 랭킨으로 바꿉니다. 예: 0°C → 491.67R.",
    relationshipContext:
      "일상 섭씨를 절대 화씨 기반 척도로 연결할 때 씁니다.",
    relatedConverterLabel: "섭씨 → 랭킨",
  },
  "temperature/how-to-convert-rankine-to-celsius": {
    question: "랭킨을 섭씨로 어떻게 변환하나요?",
    directAnswer: "°C = R × (5/9) − 273.15 를 사용합니다.",
    detailedExplanation:
      "랭킨에 5/9를 곱해 켈빈으로 바꾼 뒤 273.15를 빼 섭씨를 구합니다. 섭씨→랭킨의 역과정입니다.",
    relationshipContext:
      "랭킨 결과를 SI 친화적인 섭씨로 되돌릴 때 씁니다.",
    relatedConverterLabel: "랭킨 → 섭씨",
  },
  "area/how-many-square-feet-in-an-acre": {
    question: "1에이커(acre)는 몇 제곱피트(ft²)인가요?",
    directAnswer: "1국제 에이커는 43,560제곱피트입니다.",
    detailedExplanation:
      "국제 에이커는 정의상 4,046.8564224m²이며, 국제 피트(0.3048m/ft) 기준 43,560ft²에 해당합니다. acre→ft²는 43,560을 곱하고, ft²→acre는 43,560으로 나눕니다.",
    relationshipContext:
      "에이커와 제곱피트는 미국 부동산·농지에서 흔한 야드파운드 면적 단위입니다. 43,560ft²/acre 비율이 표준입니다.",
    relatedConverterLabel: "에이커 → 제곱피트",
  },
  "area/how-many-square-meters-in-a-hectare": {
    question: "1헥타르(ha)는 몇 제곱미터(m²)인가요?",
    directAnswer: "1헥타르는 10,000제곱미터입니다.",
    detailedExplanation:
      "헥타르는 정의상 10,000m²(100m×100m)입니다. ha→m²는 10,000을 곱하고, m²→ha는 10,000으로 나눕니다.",
    relationshipContext:
      "헥타르와 제곱미터는 모두 미터법(SI) 면적 단위입니다. ha는 농지·대규모 부지, m²는 건물·상세 평면에 쓰입니다.",
    relatedConverterLabel: "헥타르 → 제곱미터",
  },
  "area/how-many-acres-in-a-hectare": {
    question: "1헥타르는 몇 에이커인가요?",
    directAnswer: "1헥타르는 약 2.47105에이커(국제)입니다.",
    detailedExplanation:
      "1ha = 10,000m², 1국제 acre = 4,046.8564224m²이므로 1ha ≈ 2.4710538147acre입니다. 정밀 프로젝트에는 계산기를 사용하세요.",
    relationshipContext:
      "헥타르는 미터법, 에이커는 미국·영국 토지 단위입니다. 국가 간 농지·부지 비교에 자주 필요합니다.",
    relatedConverterLabel: "헥타르 → 에이커",
  },
  "area/how-many-square-feet-in-a-square-meter": {
    question: "1제곱미터(m²)는 몇 제곱피트(ft²)인가요?",
    directAnswer: "1m²는 약 10.7639ft²(국제 피트)입니다.",
    detailedExplanation:
      "1ft = 0.3048m이므로 1ft² = 0.09290304m², 따라서 1m² ≈ 10.76391041671ft²입니다. 미국·미터법 부동산 면적 변환의 표준 계수입니다.",
    relationshipContext:
      "제곱미터는 미터법, 제곱피트는 미국 주거 매물에 지배적입니다. 국제 부동산·건축에서 필수 변환입니다.",
    relatedConverterLabel: "제곱미터 → 제곱피트",
  },
  "area/how-many-square-meters-in-a-square-kilometer": {
    question: "1제곱킬로미터(km²)는 몇 제곱미터(m²)인가요?",
    directAnswer: "1km²는 1,000,000m²입니다.",
    detailedExplanation:
      "1km = 1,000m이므로 1km² = 1,000 × 1,000 = 1,000,000m²입니다. km²→m²는 1,000,000을 곱하고, m²→km²는 1,000,000으로 나눕니다.",
    relationshipContext:
      "둘 다 미터법 단위입니다. km²는 지역·도시 규모, m²는 국소 상세에 쓰이며 10의 거듭제곱 관계가 정확합니다.",
    relatedConverterLabel: "제곱킬로미터 → 제곱미터",
  },
  "area/how-many-square-inches-in-a-square-foot": {
    question: "1ft²(제곱피트)는 몇 제곱인치(in²)인가요?",
    directAnswer: "1ft²는 144in²입니다.",
    detailedExplanation:
      "1ft²는 12in × 12in 정사각형 면적이므로 144in²입니다. 야드파운드에서 이 비율은 정확합니다.",
    relationshipContext:
      "제곱인치와 제곱피트는 같은 미국 관습/야드파운드 계열입니다. 소형 면적은 in², 방 면적은 ft²를 씁니다.",
    relatedConverterLabel: "제곱피트 → 제곱인치",
  },
  "area/how-many-square-feet-in-a-square-yard": {
    question: "1제곱야드(yd²)는 몇 제곱피트(ft²)인가요?",
    directAnswer: "1yd²는 9ft²입니다.",
    detailedExplanation:
      "1yd² = 3ft × 3ft = 9ft²입니다. yd²→ft²는 9를 곱하고, ft²→yd²는 9로 나눕니다.",
    relationshipContext:
      "제곱야드와 제곱피트는 야드·피트 관계에 묶인 야드파운드 면적 단위로, 비율이 정확합니다.",
    relatedConverterLabel: "제곱야드 → 제곱피트",
  },
  "area/how-many-square-kilometers-in-a-square-mile": {
    question: "1제곱마일(mi²)은 몇 제곱킬로미터(km²)인가요?",
    directAnswer: "1mi²는 약 2.58999km²(국제)입니다.",
    detailedExplanation:
      "국제 1mile = 1,609.344m이므로 1mi² ≈ 2,589,988.110336m² ≈ 2.589988km²입니다. 측량급 작업에는 정밀 계수를 사용하세요.",
    relationshipContext:
      "mi²는 미국·영국 대규모 토지, km²는 미터법 지리 데이터에 쓰입니다.",
    relatedConverterLabel: "제곱마일 → 제곱킬로미터",
  },
  "area/how-many-square-centimeters-in-a-square-meter": {
    question: "1제곱미터(m²)는 몇 제곱센티미터(cm²)인가요?",
    directAnswer: "1m²는 10,000cm²입니다.",
    detailedExplanation:
      "1m = 100cm이므로 1m² = 100 × 100 = 10,000cm²입니다. m²→cm²는 10,000을 곱하고, cm²→m²는 10,000으로 나눕니다.",
    relationshipContext:
      "둘 다 미터법(SI)입니다. cm²는 소형 물체, m²는 방·건물에 쓰입니다.",
    relatedConverterLabel: "제곱미터 → 제곱센티미터",
  },
  "area/how-many-square-yards-in-an-acre": {
    question: "1에이커는 몇 제곱야드(yd²)인가요?",
    directAnswer: "1국제 에이커는 4,840yd²입니다.",
    detailedExplanation:
      "1acre = 43,560ft², 1yd² = 9ft²이므로 43,560 ÷ 9 = 4,840yd²입니다. 이 정의에서는 비율이 정확합니다.",
    relationshipContext:
      "에이커와 제곱야드는 미국 관습/야드파운드 토지 단위입니다. yd²는 원단·스포츠, acre는 부지에 쓰입니다.",
    relatedConverterLabel: "에이커 → 제곱야드",
  },
  "volume/how-many-liters-in-a-us-gallon": {
    question: "1미국 액량 갤런(US gallon)은 몇 리터(L)인가요?",
    directAnswer: "1미국 액량 갤런은 약 3.78541리터입니다.",
    detailedExplanation:
      "미국 액량 갤런은 231in³로 정의되며, 여기서 쓰는 현대 정의상 정확히 3.785411784L입니다. gallon→L은 이 계수를 곱하고, L→gallon은 나눕니다.",
    relationshipContext:
      "미국 갤런은 미국 관습 액량, 리터는 미터법입니다. 연비·레시피·용기 용량 변환에 자주 필요합니다.",
    relatedConverterLabel: "US Gallon → Liter",
  },
  "volume/how-many-us-gallons-in-a-liter": {
    question: "1리터(L)는 몇 미국 액량 갤런(US gallon)인가요?",
    directAnswer: "1리터는 약 0.264172미국 액량 갤런입니다.",
    detailedExplanation:
      "1 US gal = 3.78541178L이므로 1L = 1 / 3.78541178 ≈ 0.26417205236 gal입니다. 대량 변환에는 계산기를 사용하세요.",
    relationshipContext:
      "리터는 전 세계 표준에 가깝고, 미국 갤런은 미국 액체·연료에 쓰입니다. 라벨·레시피 비교에 필요합니다.",
    relatedConverterLabel: "Liter → US Gallon",
  },
  "volume/how-many-liters-in-a-cubic-meter": {
    question: "1세제곱미터(m³)는 몇 리터(L)인가요?",
    directAnswer: "1m³는 1,000리터입니다.",
    detailedExplanation:
      "1m³는 1m 정육면체 부피이고, 1L는 1dm³(0.1m)³이므로 10×10×10 = 1,000L가 1m³에 들어갑니다.",
    relationshipContext:
      "둘 다 미터법(SI)입니다. m³는 탱크·공간, L는 병·화학에 쓰입니다.",
    relatedConverterLabel: "Cubic Meter → Liter",
  },
  "volume/how-many-teaspoons-in-a-us-tablespoon": {
    question: "1미국 큰술(US tbsp)은 몇 미국 작은술(US tsp)인가요?",
    directAnswer: "1미국 큰술은 3미국 작은술입니다.",
    detailedExplanation:
      "미국 요리 단위에서 1tbsp = 1/2 US fl oz, 1tsp = 1/6 US fl oz이므로 1tbsp = 3tsp(정확)입니다.",
    relationshipContext:
      "큰술·작은술은 미국 액량 계열로, 미국 레시피에서 3:1 비율이 정확합니다.",
    relatedConverterLabel: "US Tablespoon → US Teaspoon",
  },
  "volume/how-many-tablespoons-in-a-us-fluid-ounce": {
    question: "1미국 액량 온스(US fl oz)는 몇 미국 큰술(US tbsp)인가요?",
    directAnswer: "1미국 액량 온스는 2미국 큰술입니다.",
    detailedExplanation:
      "1 US fl oz = US gal의 1/128, 1 US tbsp = 1/256이므로 1 fl oz = 2 tbsp(정확)입니다.",
    relationshipContext:
      "액량 온스와 큰술은 미국 요리에서 흔하며, 온스당 2큰술을 기억하기 쉽습니다.",
    relatedConverterLabel: "US Fluid Ounce → US Tablespoon",
  },
  "volume/how-many-cubic-feet-in-a-us-gallon": {
    question: "1미국 액량 갤런은 몇 세제곱피트(ft³)인가요?",
    directAnswer: "1미국 액량 갤런은 약 0.133681세제곱피트입니다.",
    detailedExplanation:
      "L 기준: 1 US gal ≈ 3.78541178L, 1 ft³ ≈ 28.316846592L이므로 1 gal ≈ 3.78541178 / 28.316846592 ft³입니다.",
    relationshipContext:
      "ft³는 공간·공기 유량, gallon은 액체에 쓰입니다. HVAC·저수 시설에서 변환이 필요할 수 있습니다.",
    relatedConverterLabel: "US Gallon → Cubic Foot",
  },
  "volume/how-many-liters-in-a-cubic-foot": {
    question: "1세제곱피트(ft³)는 몇 리터(L)인가요?",
    directAnswer: "1ft³는 약 28.3168리터입니다.",
    detailedExplanation:
      "국제 1ft³ = (0.3048m)³ ≈ 0.028316846592m³ = 28.316846592L입니다. 야드파운드 길이와 미터법 부피를 연결합니다.",
    relationshipContext:
      "ft³는 미국 관습/야드파운드 부피, L는 미터법입니다. 공학·가전 사양에서 자주 변환합니다.",
    relatedConverterLabel: "Cubic Foot → Liter",
  },
  "volume/how-many-us-fluid-ounces-in-a-liter": {
    question: "1리터(L)는 몇 미국 액량 온스(US fl oz)인가요?",
    directAnswer: "1리터는 약 33.814미국 액량 온스입니다.",
    detailedExplanation:
      "1L = 1dm³, 1 US fl oz ≈ 29.5735295625mL이므로 1L ≈ 1000 / 29.5735295625 ≈ 33.8140227 fl oz입니다.",
    relationshipContext:
      "리터는 전 세계적이고, US fl oz는 미국 음료·레시피 라벨에 쓰입니다.",
    relatedConverterLabel: "Liter → US Fluid Ounce",
  },
  "volume/how-many-cubic-inches-in-a-us-gallon": {
    question: "1미국 액량 갤런은 몇 세제곱인치(in³)인가요?",
    directAnswer: "1미국 액량 갤런은 231세제곱인치입니다.",
    detailedExplanation:
      "미국 액량 갤런은 정의상 정확히 231in³입니다. 이는 근사가 아닌 정의 관계입니다.",
    relationshipContext:
      "in³는 엔진 배기량, gallon은 연료 탱크에 쓰입니다. US gallon 정의로 연결됩니다.",
    relatedConverterLabel: "US Gallon → Cubic Inch",
  },
  "volume/how-many-us-teaspoons-in-a-us-fluid-ounce": {
    question: "1미국 액량 온스(US fl oz)는 몇 미국 작은술(US tsp)인가요?",
    directAnswer: "1미국 액량 온스는 6미국 작은술입니다.",
    detailedExplanation:
      "1 US fl oz = 2 tbsp, 1 tbsp = 3 tsp이므로 1 fl oz = 2 × 3 = 6 tsp(정확)입니다.",
    relationshipContext:
      "작은술은 미국 주방 최소 단위, 액량 온스는 같은 미국 액량 체계의 큰 단위입니다.",
    relatedConverterLabel: "US Fluid Ounce → US Teaspoon",
  },
  "speed/how-to-convert-kmh-to-mph": {
    question: "km/h를 mph로 어떻게 변환하나요?",
    directAnswer: "km/h에 약 0.621371을 곱하면 mph가 됩니다(정확: 1mph = 1.609344km/h, mph = km/h ÷ 1.609344).",
    detailedExplanation:
      "km/h와 mph는 모두 ‘시간당 거리’이며, mile와 km 길이 정의만 다릅니다. 국제 mile = 1.609344km이므로 mph = km/h ÷ 1.609344입니다. 역수 0.621371…은 대략 계산에 편합니다.",
    relationshipContext:
      "도로 속도·차량 사양은 미터법과 미국/영국 mph가 혼용됩니다. 항공은 knot를 쓰지만 자동차 문화에서는 mph 변환이 자주 필요합니다.",
    relatedConverterLabel: "Kilometer per Hour → Mile per Hour",
  },
  "speed/how-to-convert-mps-to-kmh": {
    question: "m/s를 km/h로 어떻게 변환하나요?",
    directAnswer: "m/s에 3.6을 곱하면 km/h가 됩니다(정확).",
    detailedExplanation:
      "1km = 1,000m, 1시간 = 3,600초이므로 1m/s = (1/1000 km)/(1/3600 h) = 3.6 km/h입니다. 역변환은 3.6으로 나눕니다.",
    relationshipContext:
      "SI 물리·공학은 m/s, 기상·운전은 많은 지역에서 km/h를 씁니다.",
    relatedConverterLabel: "Meter per Second → Kilometer per Hour",
  },
  "speed/how-many-mph-in-a-knot": {
    question: "1노트(knot)는 몇 mph인가요?",
    directAnswer: "1노트는 약 1.15078mph입니다(정확: 1kn = 1.852km/h, 1mph = 1.609344km/h).",
    detailedExplanation:
      "knot는 1해리/시간입니다. 국제 해리는 1,852m이므로 1kn = 1,852m/h. mile당 미터(1,609.344m/mi)로 나누면 mph가 됩니다.",
    relationshipContext:
      "해상·항공 항해는 knot가 표준이며, 도로 mph와 비교할 때 이 계수가 필요합니다.",
    relatedConverterLabel: "Knot → Mile per Hour",
  },
  "speed/what-is-mach-1-in-meters-per-second": {
    question: "Mach 1은 m/s로 몇인가요(ISA 해수면)?",
    directAnswer: "이 사이트에서는 Mach 1을 340.29m/s(ISA 해수면 기준)로 둡니다.",
    detailedExplanation:
      "Mach는 국소 음속 대비 속도로, 온도에 따라 달라집니다. 고정 계산기를 위해 ISA 해수면 Mach 1 = 340.29m/s를 사용합니다. 실제 환경이 다르면 근사치로 취급하세요.",
    relationshipContext:
      "항공은 Mach와 m/s·knot를 혼용하며, 학습용으로 m/s 기준점이 필요합니다.",
    relatedConverterLabel: "Mach → Meter per Second",
  },
  "speed/what-wind-speed-is-beaufort-5": {
    question: "Beaufort 풍력 5는 어느 정도 바람 속도인가요?",
    directAnswer: "이 사이트에서 Beaufort 5는 9.35m/s(10m WMO식 대역 중간값)로 매핑된 뒤 knot, mph 등으로 변환됩니다.",
    detailedExplanation:
      "Beaufort는 0–12 풍력 척도입니다. 이 변환기는 10m WMO식 평균풍 m/s 대역을 쓰고, 각 풍력의 대표 m/s로 다른 단위를 변환합니다. 5는 ‘산들바람(fresh breeze)’ 구간입니다.",
    relationshipContext:
      "해상 예보는 Beaufort를 쓰고, 풍속계·수치모델은 knot·m/s를 씁니다.",
    relatedConverterLabel: "Beaufort → Knot",
  },
  "speed/how-to-convert-mph-to-kmh": {
    question: "mph를 km/h로 어떻게 변환하나요?",
    directAnswer: "mph에 약 1.60934를 곱하면 km/h가 됩니다(정확: 1mph = 1.609344km/h).",
    detailedExplanation:
      "mph와 km/h는 mile 정의 차이만큼 같은 비율로 스케일됩니다. 국제 mile은 정확히 1.609344km입니다.",
    relationshipContext:
      "미국·영국 도로 표지·계기판은 mph, 대부분의 세계는 km/h를 씁니다.",
    relatedConverterLabel: "Mile per Hour → Kilometer per Hour",
  },
  "speed/how-to-convert-kmh-to-mps": {
    question: "km/h를 m/s로 어떻게 변환하나요?",
    directAnswer: "km/h를 3.6으로 나누면 m/s가 됩니다(정확). m/s→km/h는 3.6을 곱합니다.",
    detailedExplanation:
      "1km/h = (1,000m)/(3,600s) = 1/3.6 m/s이므로 m/s = km/h ÷ 3.6입니다. m/s→km/h의 ×3.6과 역관계입니다.",
    relationshipContext:
      "기상 km/h와 실험·CFD m/s, 탄도학 과제에서 같은 브리지를 씁니다.",
    relatedConverterLabel: "Kilometer per Hour → Meter per Second",
  },
  "speed/how-to-convert-feet-per-second-to-mps": {
    question: "ft/s를 m/s로 어떻게 변환하나요?",
    directAnswer: "ft/s에 0.3048을 곱하면 m/s가 됩니다(정확: 1국제 ft = 0.3048m). m/s→ft/s는 0.3048로 나눕니다.",
    detailedExplanation:
      "ft/s는 야드파운드 길이를 SI 시간으로 나눈 속도입니다. 국제 피트 0.3048m이므로 선형 속도도 0.3048배로 m/s가 됩니다.",
    relationshipContext:
      "미국 공학·탄도학·일부 HVAC 유속은 ft/s와 SI m/s를 함께 씁니다.",
    relatedConverterLabel: "Feet per Second → Meter per Second",
  },
  "speed/how-to-convert-mach-to-mph": {
    question: "Mach를 mph로 어떻게 변환하나요?",
    directAnswer: "Mach를 고정 Mach 1 = 340.29m/s(ISA 해수면)의 배수로 보고, m/s로 바꾼 뒤 국제 mile 정의로 mph로 변환합니다.",
    detailedExplanation:
      "Mach의 mph는 음속에 따라 달라집니다. Mach 1을 340.29m/s에 고정하면 Mach 값→m/s→mph 순으로 다른 선형 속도 단위와 같이 변환할 수 있습니다.",
    relationshipContext:
      "대중 과학·비행 추적에서 Mach와 도로 mph를 비교할 때 ISA 기준이 교실용 숫자를 일관되게 합니다.",
    relatedConverterLabel: "Mach → Mile per Hour",
  },
  "speed/what-fraction-of-c-is-one-meter-per-second": {
    question: "1m/s는 광속(c)의 몇 분의 1인가요?",
    directAnswer: "진공에서 1m/s는 c의 1/299,792,458(약 3.34×10⁻⁹ c, SI 정의)입니다.",
    detailedExplanation:
      "진공 광속 c는 정확히 299,792,458m/s로 정의됩니다. m/s를 이 상수로 나누면 c의 분수가 됩니다. 일상 속도는 c에 비해 극히 작습니다.",
    relationshipContext:
      "천체물리·입자물리는 c 분수를 쓰고, 실험실 m/s는 이 작은 분수로 이해하기 쉽습니다.",
    relatedConverterLabel: "Meter per Second → Speed of light (c)",
  },
  "time/how-many-seconds-in-a-minute": {
    question: "1분(minute)은 몇 초(second)인가요?",
    directAnswer: "1분은 60초입니다.",
    detailedExplanation:
      "정의상 1분 = 60초입니다. 분→초는 60을 곱하고, 초→분은 60으로 나눕니다. 이 변환기와 일상 시계에서 정확합니다.",
    relationshipContext:
      "분과 초는 시·초 미만 단위 사이의 중간·세밀 단계로, 타임스탬프·미디어 길이·일정에 쓰입니다.",
    relatedConverterLabel: "Minute → Second",
  },
  "time/how-many-minutes-in-an-hour": {
    question: "1시간(hour)은 몇 분(minute)인가요?",
    directAnswer: "1시간은 60분입니다.",
    detailedExplanation:
      "1시간 = 60분입니다. 시→분은 60을 곱하고, 분→시는 60으로 나눕니다. 60진 시간 나눗셈의 표준입니다.",
    relationshipContext:
      "시간은 긴 활동을 묶고, 분은 세분화합니다. 디지털 시계·ISO-8601 기간과 함께 쓰입니다.",
    relatedConverterLabel: "Hour → Minute",
  },
  "time/how-many-hours-in-a-day": {
    question: "1일(day)은 몇 시간(hour)인가요?",
    directAnswer: "1민간일은 24시간입니다(이 도구 기준).",
    detailedExplanation:
      "이 변환기는 1일 = 24시간(86,400초)로 봅니다. 일→시는 24를 곱하고, 시→일은 24로 나눕니다. 윤초·천문 일은 모델링하지 않습니다.",
    relationshipContext:
      "일은 지구 자전에 맞춘 민간 시간이고, 시간은 근무·이동·로그를 나눕니다.",
    relatedConverterLabel: "Day → Hour",
  },
  "time/how-many-days-in-a-week": {
    question: "1주(week)는 몇 일(day)인가요?",
    directAnswer: "1주는 7일입니다.",
    detailedExplanation:
      "1주 = 7일(여기서 604,800초)입니다. 주→일은 7을 곱하고, 일→주는 7로 나눕니다. 일반 달력 주와 정확히 맞습니다.",
    relationshipContext:
      "주는 급여·스프린트·반복 일정을 묶고, 일은 그 아래 계획 단위입니다.",
    relatedConverterLabel: "Week → Day",
  },
  "time/how-many-milliseconds-in-a-second": {
    question: "1초(second)는 몇 밀리초(millisecond)인가요?",
    directAnswer: "1초는 1,000밀리초입니다.",
    detailedExplanation:
      "milli-는 1/1,000이므로 1초 = 1,000ms입니다. 초→ms는 1,000을 곱하고, ms→초는 1,000으로 나눕니다.",
    relationshipContext:
      "밀리초는 사람 체감 초와 컴퓨터·오디오 타이밍을 잇습니다.",
    relatedConverterLabel: "Second → Millisecond",
  },
  "time/how-many-days-in-a-year": {
    question: "변환용으로 1년(year)은 몇 일(day)인가요?",
    directAnswer: "이 변환기에서 1년 = 365일(정확)입니다.",
    detailedExplanation:
      "이 도구는 1년을 365일(31,536,000초)로 고정합니다. 달력 연도는 365·366일일 수 있으며, 기간 추정용 계수입니다.",
    relationshipContext:
      "년은 장기 계획, 일은 중기 계획에 쓰이며, 365일 고정 연도는 계산기·소프트웨어에서 흔한 단순화입니다.",
    relatedConverterLabel: "Year → Day",
  },
  "time/how-many-days-in-a-month": {
    question: "변환용으로 1개월(month)은 몇 일(day)인가요?",
    directAnswer: "이 변환기에서 1개월 = 30일(정확)입니다.",
    detailedExplanation:
      "실제 달력 월은 28–31일입니다. 여기서는 30일(2,592,000초)로 고정해 안정적인 비율을 씁니다.",
    relationshipContext:
      "월은 불규칙한 달력 구간을 가리키고, 30일 월은 많은 API·변환기의 평균값입니다.",
    relatedConverterLabel: "Month → Day",
  },
  "time/how-many-seconds-in-an-hour": {
    question: "1시간(hour)은 몇 초(second)인가요?",
    directAnswer: "1시간은 3,600초입니다.",
    detailedExplanation:
      "1시간 = 60분, 1분 = 60초이므로 1시간 = 60×60 = 3,600초입니다.",
    relationshipContext:
      "초는 SI 친화 기본 단계, 시간은 과금·미디어에 실용적입니다. 고정 정의로 비율이 정확합니다.",
    relatedConverterLabel: "Hour → Second",
  },
  "time/how-many-minutes-in-a-day": {
    question: "1일(day)은 몇 분(minute)인가요?",
    directAnswer: "1일은 1,440분(24×60)입니다.",
    detailedExplanation:
      "24시간/일 × 60분/시간 = 1,440분/일입니다.",
    relationshipContext:
      "분 단위 일정과 일 단위 수면·업무·리포팅을 연결합니다.",
    relatedConverterLabel: "Day → Minute",
  },
  "time/how-many-hours-in-a-week": {
    question: "1주(week)는 몇 시간(hour)인가요?",
    directAnswer: "1주는 168시간(7×24)입니다.",
    detailedExplanation:
      "1주 = 7일, 1일 = 24시간이므로 7×24 = 168시간/주입니다.",
    relationshipContext:
      "주간 근로·용량 계획에서 주-일-시간 사다리를 묶습니다.",
    relatedConverterLabel: "Week → Hour",
  },
  "digital/how-many-bytes-in-a-kilobyte-decimal": {
    question: "십진 킬로바이트(kilobyte)에는 몇 바이트(byte)가 있나요?",
    directAnswer: "십진 1킬로바이트(kB)에는 1,000바이트가 있습니다.",
    detailedExplanation:
      "이 사이트의 십진 킬로바이트는 SI식 접두를 따릅니다: 1 kB = 10³바이트 = 1,000 B. 이진 키비바이트(KiB)는 1,024 B이며 메인 변환기의 별도 단위입니다.",
    relationshipContext:
      "저장 용량 표기는 제조사·OS에 따라 십진 kB/MB/GB와 이진 KiB/MiB/GiB가 섞입니다. 어떤 정의인지 확인하세요.",
    relatedConverterLabel: "Kilobyte → Byte",
  },
  "digital/how-many-kilobytes-in-a-megabyte-decimal": {
    question: "십진 메가바이트(megabyte)에는 몇 킬로바이트(kilobyte)가 있나요?",
    directAnswer: "십진 1메가바이트(MB)에는 1,000킬로바이트가 있습니다.",
    detailedExplanation:
      "십진 MB: 1 MB = 10⁶바이트, 1 kB = 10³바이트이므로 1 MB = 1,000 kB. MB×1,000=kB, kB÷1,000=MB입니다.",
    relationshipContext:
      "파일 크기·다운로드는 십진 MB를 쓰는 경우가 많고, 메모리는 MiB로 표기되기도 합니다. 단계마다 약 2.4% 차이납니다.",
    relatedConverterLabel: "Megabyte → Kilobyte",
  },
  "digital/how-many-megabytes-in-a-gigabyte-decimal": {
    question: "십진 기가바이트(gigabyte)에는 몇 메가바이트(megabyte)가 있나요?",
    directAnswer: "십진 1기가바이트(GB)에는 1,000메가바이트가 있습니다.",
    detailedExplanation:
      "1 GB = 10⁹바이트, 1 MB = 10⁶바이트이므로 10⁹÷10⁶ = 1,000 MB/GB. 드라이브 용량·클라우드 티어 표기와 맞습니다.",
    relationshipContext:
      "기가바이트는 큰 파일·파티션을, 메가바이트는 작은 자산을 묶습니다. 전용 허브 페이지는 여기서 십진 정의를 씁니다.",
    relatedConverterLabel: "Gigabyte → Megabyte",
  },
  "digital/how-many-gigabytes-in-a-terabyte-decimal": {
    question: "십진 테라바이트(terabyte)에는 몇 기가바이트(gigabyte)가 있나요?",
    directAnswer: "십진 1테라바이트(TB)에는 1,000기가바이트가 있습니다.",
    detailedExplanation:
      "1 TB = 10¹²바이트, 1 GB = 10⁹바이트이므로 10¹²÷10⁹ = 1,000 GB/TB. TB×1,000=GB입니다.",
    relationshipContext:
      "소비자용 드라이브·백업 용량은 십진 TB로 표기되는 경우가 많습니다.",
    relatedConverterLabel: "Terabyte → Gigabyte",
  },
  "digital/how-many-terabytes-in-a-petabyte-decimal": {
    question: "십진 페타바이트(petabyte)에는 몇 테라바이트(terabyte)가 있나요?",
    directAnswer: "십진 1페타바이트(PB)에는 1,000테라바이트가 있습니다.",
    detailedExplanation:
      "1 PB = 10¹⁵바이트, 1 TB = 10¹²바이트이므로 1 PB = 1,000 TB. 십진 사다리는 단계마다 1,000을 곱합니다.",
    relationshipContext:
      "데이터센터·아카이브는 PB 규모를, 워크스테이션은 TB 규모를 흔히 씁니다.",
    relatedConverterLabel: "Petabyte → Terabyte",
  },
  "digital/how-many-bits-in-a-byte": {
    question: "1바이트(byte)에는 몇 비트(bit)가 있나요?",
    directAnswer: "1바이트에는 8비트가 있습니다.",
    detailedExplanation:
      "바이트는 8개의 이진 비트를 묶은 단위입니다. 바이트×8=비트, 비트÷8=바이트. 이 변환기는 1비트=0.125 B로 저장합니다.",
    relationshipContext:
      "바이트는 파일·RAM을, 회선 속도는 보통 bps(예: Mbps)로 표기합니다.",
    relatedConverterLabel: "Byte → Bit",
  },
  "digital/how-many-bytes-in-a-megabit-decimal": {
    question: "십진 메가비트(megabit)에는 몇 바이트(byte)가 있나요?",
    directAnswer: "십진 1메가비트(Mb)에는 125,000바이트가 있습니다.",
    detailedExplanation:
      "1 Mb = 10⁶비트. 8비트=1바이트이므로 10⁶÷8 = 125,000바이트. 네트워크 Mbps와 파일 바이트/kB를 비교할 때 씁니다.",
    relationshipContext:
      "ISP 속도는 Mbps, 다운로드는 MB로 보이는 경우가 많습니다. 오버헤드 전 대략 Mb/s÷8≈MB/s 상한입니다.",
    relatedConverterLabel: "Megabit → Byte",
  },
  "digital/how-many-bytes-in-a-gigabyte-decimal": {
    question: "십진 기가바이트(gigabyte)에는 몇 바이트(byte)가 있나요?",
    directAnswer: "십진 1기가바이트(GB)에는 1,000,000,000바이트가 있습니다.",
    detailedExplanation:
      "이 십진 모델에서 1 GB = 10⁹바이트(정확). GB×1e9=바이트, 바이트÷1e9=GB입니다.",
    relationshipContext:
      "할당량·API에서 정확한 바이트 수가 중요하며, 허브 기본은 십진 GB입니다.",
    relatedConverterLabel: "Gigabyte → Byte",
  },
  "digital/how-many-megabytes-in-a-terabyte-decimal": {
    question: "십진 테라바이트(terabyte)에는 몇 메가바이트(megabyte)가 있나요?",
    directAnswer: "십진 1테라바이트(TB)에는 1,000,000메가바이트가 있습니다.",
    detailedExplanation:
      "1 TB = 10¹²바이트, 1 MB = 10⁶바이트이므로 10¹²÷10⁶ = 1,000,000 MB/TB입니다.",
    relationshipContext:
      "대용량 백업·영상 아카이브는 TB, 세그먼트는 MB로 보고되는 경우가 있습니다.",
    relatedConverterLabel: "Terabyte → Megabyte",
  },
  "digital/how-many-megabits-in-a-gigabyte-decimal": {
    question: "십진 기가바이트(gigabyte)에는 몇 메가비트(megabit)가 있나요?",
    directAnswer: "십진 1기가바이트(GB)에는 8,000메가비트가 있습니다.",
    detailedExplanation:
      "1 GB = 8×10⁹비트(바이트당 8비트×10⁹바이트). 1메가비트=10⁶비트이므로 (8×10⁹)÷10⁶ = 8,000 Mb/GB입니다.",
    relationshipContext:
      "GB 단위 파일 크기와 Mbps 회선 속도를 비교할 때 유용합니다.",
    relatedConverterLabel: "Gigabyte → Megabit",
  },
  "pressure/how-many-pascal-in-a-bar": {
    question: "1바(bar)에는 몇 파스칼(pascal)이 있나요?",
    directAnswer: "1바는 정확히 100,000파스칼(100 kPa)입니다.",
    detailedExplanation:
      "바(bar)는 SI 비공식 단위로 10⁵ Pa로 고정됩니다. bar→Pa는 100,000을 곱하고, Pa→bar는 100,000으로 나눕니다.",
    relationshipContext:
      "바는 산업·대기압 근사에 흔하고, 파스칼은 과학·정밀 공학의 SI 단위입니다.",
    relatedConverterLabel: "Bar → Pascal",
  },
  "pressure/how-to-convert-psi-to-bar": {
    question: "PSI를 bar로 어떻게 변환하나요?",
    directAnswer:
      "PSI에 약 0.0689476을 곱하면 bar가 됩니다(정확 계수는 정의된 PSI Pa 값÷100,000).",
    detailedExplanation:
      "PSI는 제곱인치당 파운드력이며 SI 길이·힘 정의에 따라 1 PSI ≈ 6,894.757 Pa입니다. 1 bar = 100,000 Pa이므로 bar = PSI × (6894.757… / 100,000).",
    relationshipContext:
      "미국 타이어·유압 사양은 PSI, 유럽 장비·스쿠버 실린더는 bar를 쓰는 경우가 많습니다.",
    relatedConverterLabel: "PSI → Bar",
  },
  "pressure/how-many-kilopascal-in-one-atmosphere": {
    question: "1대기압(atmosphere)에는 몇 킬로파스칼(kilopascal)이 있나요?",
    directAnswer: "표준 대기압 1atm은 정확히 101.325 kPa입니다.",
    detailedExplanation:
      "표준 대기압은 101,325 Pa로 정의됩니다. 1 kPa = 1,000 Pa이므로 101,325 Pa = 101.325 kPa(정확).",
    relationshipContext:
      "화학·물리 문제는 1 atm을 쓰고, 기상·건축은 kPa 또는 hPa를 씁니다.",
    relatedConverterLabel: "Atmosphere → Kilopascal",
  },
  "pressure/how-to-convert-hectopascal-to-mmhg": {
    question: "헥토파스칼(hPa)을 mmHg로 어떻게 변환하나요?",
    directAnswer:
      "hPa×100으로 Pa를 구한 뒤, 참고 mmHg당 Pa(여기서 101325/760, torr와 동일)로 나눕니다.",
    detailedExplanation:
      "1 hPa = 100 Pa. 이 도구의 mmHg는 관습적 torr 정의 101325/760 Pa/mmHg를 씁니다. mmHg = (hPa × 100) / (101325/760).",
    relationshipContext:
      "기상 차트는 hPa, 임상 혈압·일부 진공 게이지는 mmHg를 씁니다.",
    relatedConverterLabel: "Hectopascal → mmHg",
  },
  "pressure/how-many-torr-in-one-atmosphere": {
    question: "1대기압(atmosphere)에는 몇 torr가 있나요?",
    directAnswer: "표준 대기압 1atm은 정확히 760 torr입니다.",
    detailedExplanation:
      "정의상 1 torr = 1/760 atm이므로 1 atm = 760 torr. 파스칼로는 760 × (101325/760) = 101,325 Pa입니다.",
    relationshipContext:
      "torr는 진공 과학에 표준이고, atm은 화학·STP 논의와 연결됩니다.",
    relatedConverterLabel: "Atmosphere → Torr",
  },
  "pressure/how-to-convert-mmhg-to-kilopascal": {
    question: "mmHg를 킬로파스칼(kPa)로 어떻게 변환하나요?",
    directAnswer:
      "mmHg×(101325/760)으로 Pa를 구한 뒤 1,000으로 나누면 kPa — 한 단계: kPa = mmHg × (101325/760) / 1000.",
    detailedExplanation:
      "여기서 1 mmHg = 101325/760 Pa. kPa는 1000 Pa이므로 kPa = mmHg × (101325/760) / 1000.",
    relationshipContext:
      "혈압(mmHg)을 연구·기기 보정용 kPa와 비교할 때 씁니다.",
    relatedConverterLabel: "mmHg → Kilopascal",
  },
  "pressure/how-many-hectopascal-in-a-bar": {
    question: "1바(bar)에는 몇 헥토파스칼(hPa)이 있나요?",
    directAnswer: "1바는 1,000 hPa와 같습니다.",
    detailedExplanation:
      "1 bar = 100,000 Pa, 1 hPa = 100 Pa이므로 1 bar = 100,000 / 100 = 1,000 hPa. 기상에서 mbar = hPa와 같습니다.",
    relationshipContext:
      "기상은 hPa·mbar를, 산업 게이지는 bar를 씁니다.",
    relatedConverterLabel: "Bar → Hectopascal",
  },
  "pressure/how-to-convert-pascal-to-psi": {
    question: "파스칼(pascal)을 PSI로 어떻게 변환하나요?",
    directAnswer: "Pa를 약 6,894.757로 나누면 PSI입니다(정확: 1 PSI = 6894.757293168 Pa).",
    detailedExplanation:
      "PSI는 SI 기본 단위로 고정되어 약 6,894.757 Pa/PSI입니다. PSI = Pa ÷ 6894.757293168.",
    relationshipContext:
      "실험실 Pa 데이터를 미국 기계 분야 PSI로 표현할 때 씁니다.",
    relatedConverterLabel: "Pascal → PSI",
  },
  "pressure/how-many-pascal-in-one-torr": {
    question: "1torr에는 몇 파스칼(pascal)이 있나요?",
    directAnswer: "1 torr = 101325/760 Pa(약 133.322 Pa)입니다.",
    detailedExplanation:
      "torr는 표준 대기압의 1/760; 1 atm = 101,325 Pa이므로 1 torr = 101325/760 Pa.",
    relationshipContext:
      "진공은 torr·micron으로, SI 보고는 Pa를 씁니다.",
    relatedConverterLabel: "Torr → Pascal",
  },
  "pressure/how-to-convert-kilopascal-to-psi": {
    question: "킬로파스칼(kPa)을 PSI로 어떻게 변환하나요?",
    directAnswer: "kPa×1000으로 Pa를 구한 뒤 약 6,894.757로 나누면 PSI입니다.",
    detailedExplanation:
      "1 kPa = 1,000 Pa, 1 PSI ≈ 6,894.757 Pa이므로 PSI = kPa × (1000 / 6894.757293168).",
    relationshipContext:
      "미터법 압력(kPa)과 미국 관습 PSI를 자동차·산업 시장에서 비교할 때 씁니다.",
    relatedConverterLabel: "Kilopascal → PSI",
  },
  "energy/how-many-joules-in-a-calorie": {
    question: "열화학 칼로리(calorie) 1개에는 몇 줄(joule)이 있나요?",
    directAnswer: "열화학 1칼로리(cal)에는 4.184줄(J)이 있습니다.",
    detailedExplanation:
      "이 변환기는 열화학 칼로리를 씁니다: 1 cal = 4.184 J(정확). cal×4.184=J, J÷4.184=cal. 소칼로리(cal)와 식품 kcal을 혼동하지 마세요.",
    relationshipContext:
      "영양 라벨은 kcal을 ‘Calorie’로 표기하는 경우가 많고, 화학·물리 문제는 cal/kcal을 씁니다.",
    relatedConverterLabel: "Calorie → Joule",
  },
  "energy/how-many-calories-in-a-kilocalorie": {
    question: "1킬로칼로리(kilocalorie)에는 몇 칼로리(calorie)가 있나요?",
    directAnswer: "1킬로칼로리(kcal)에는 1,000칼로리(cal)가 있습니다.",
    detailedExplanation:
      "kilo- 접두는 1,000입니다. 식품 1 kcal = 1,000 열화학 cal이므로 1 kcal = 4,184 J입니다.",
    relationshipContext:
      "식품 에너지는 거의 항상 kcal로 표기되며, 대문자 ‘Calorie’로도 불립니다.",
    relatedConverterLabel: "Kilocalorie → Calorie",
  },
  "energy/how-many-joules-in-a-kilowatt-hour": {
    question: "1킬로와트시(kilowatt-hour)에는 몇 줄(joule)이 있나요?",
    directAnswer: "1킬로와트시(kWh)에는 3,600,000줄(J)이 있습니다.",
    detailedExplanation:
      "전력×시간: 1 kW = 1,000 J/s. 3,600초(1시간) 동안 1,000×3,600 = 3,600,000 J = 1 kWh.",
    relationshipContext:
      "전기 계량기·요금은 kWh, 물리·SI 작업은 줄로 환산합니다.",
    relatedConverterLabel: "Kilowatt Hour → Joule",
  },
  "energy/how-many-joules-in-a-kilojoule": {
    question: "1킬로줄(kilojoule)에는 몇 줄(joule)이 있나요?",
    directAnswer: "1킬로줄(kJ)에는 1,000줄(J)이 있습니다.",
    detailedExplanation:
      "SI 접두 kilo-는 1,000입니다. kJ×1,000=J, J÷1,000=kJ.",
    relationshipContext:
      "일부 식품 라벨(미국 외)과 공학 열 표에 kJ가 나타납니다.",
    relatedConverterLabel: "Kilojoule → Joule",
  },
  "energy/how-many-joules-in-a-watt-hour": {
    question: "1와트시(watt-hour)에는 몇 줄(joule)이 있나요?",
    directAnswer: "1와트시(Wh)에는 3,600줄(J)이 있습니다.",
    detailedExplanation:
      "1 W = 1 J/s. 1시간(3,600 s) 동안 1×3,600 = 3,600 J. 1 kWh = 1,000 Wh이므로 3.6 MJ입니다.",
    relationshipContext:
      "소형 기기·배터리 용량은 Wh로 비교하기 쉽습니다.",
    relatedConverterLabel: "Watt Hour → Joule",
  },
  "energy/how-many-joules-in-a-btu-it": {
    question: "IT 영국열량단위(BTU) 1개에는 몇 줄(joule)이 있나요?",
    directAnswer: "IT BTU 1개는 약 1,055.056줄(J)입니다.",
    detailedExplanation:
      "이 도구는 국제표 BTU(IT)를 씁니다: 1 BTU ≈ 1,055.05585262 J. HVAC·미국 자료에 흔합니다.",
    relationshipContext:
      "BTU는 난방·냉방 등급을 SI 줄과 비교할 때 씁니다.",
    relatedConverterLabel: "BTU → Joule",
  },
  "energy/how-many-joules-in-an-electronvolt": {
    question: "전자볼트(electronvolt) 1개에는 몇 줄(joule)이 있나요?",
    directAnswer: "1 eV = 1.602176634×10⁻¹⁹ J(SI 정의, 정확)입니다.",
    detailedExplanation:
      "eV는 1 기본전하가 1 V를 가로질 때 얻는 에너지입니다. 2019년 이후 줄 값은 SI 정의로 정확합니다.",
    relationshipContext:
      "입자 물리·밴드갭·화학 결합 에너지에 eV/keV가 쓰입니다.",
    relatedConverterLabel: "Electronvolt → Joule",
  },
  "energy/how-many-kilowatt-hours-in-a-kilocalorie": {
    question: "1킬로칼로리(kilocalorie)에는 몇 킬로와트시(kilowatt-hour)가 있나요?",
    directAnswer: "1 kcal은 약 0.00116222 kWh입니다.",
    detailedExplanation:
      "1 kcal = 4,184 J, 1 kWh = 3,600,000 J이므로 1 kcal = 4,184 / 3,600,000 kWh. 정밀 값은 변환기를 사용하세요.",
    relationshipContext:
      "식품 에너지(kcal)와 전기 에너지(kWh) 규모 차이를 이해하는 데 도움이 됩니다.",
    relatedConverterLabel: "Kilocalorie → Kilowatt Hour",
  },
  "energy/how-many-kilowatt-hours-in-a-btu-it": {
    question: "IT BTU 1개에는 몇 킬로와트시(kilowatt-hour)가 있나요?",
    directAnswer: "IT BTU 1개는 약 0.000293071 kWh입니다.",
    detailedExplanation:
      "줄/BTU ÷ 줄/kWh: (≈1,055.056 J/BTU) ÷ (3,600,000 J/kWh). BTU/h 장비와 kW 비교에 유용합니다.",
    relationshipContext:
      "난방·냉방 부하를 BTU와 kWh로 에너지 감사할 때 씁니다.",
    relatedConverterLabel: "BTU → Kilowatt Hour",
  },
  "energy/how-many-kilocalories-in-a-kilojoule": {
    question: "1킬로줄(kilojoule)에는 몇 킬로칼로리(kilocalorie)가 있나요?",
    directAnswer: "1 kJ는 약 0.239006 kcal입니다.",
    detailedExplanation:
      "1 kJ = 1,000 J. 1 kcal = 4,184 J이므로 1 kJ = 1,000 / 4,184 kcal. kJ 라벨을 kcal로 비교할 때 씁니다.",
    relationshipContext:
      "kJ 표기 지역에서도 식단 계획은 kcal로 생각하는 경우가 많습니다.",
    relatedConverterLabel: "Kilojoule → Kilocalorie",
  },
  "power/how-many-watts-in-a-kilowatt": {
    question: "1킬로와트(kilowatt)에는 몇 와트(watt)가 있나요?",
    directAnswer: "1킬로와트(kW)에는 1,000와트(W)가 있습니다.",
    detailedExplanation:
      "SI 접두 kilo-는 1,000입니다. kW×1,000=W, W÷1,000=kW. SI에서 정확합니다.",
    relationshipContext:
      "kW와 W는 같은 전력의 다른 십진 스케일입니다. 모터·전력·히터 등급에서 자주 바뀝니다.",
    relatedConverterLabel: "Kilowatt → Watt",
  },
  "power/how-many-watts-is-a-1.5-hp-motor": {
    question: "1.5마력(hp) 모터는 몇 와트(watt)인가요?",
    directAnswer:
      "약 1,119 W: 1.5 기계 마력(550 ft·lbf/s)은 이 도구 정의(~745.70 W/hp)로 약 1,118.55 W입니다.",
    detailedExplanation:
      "미국 기계 마력: 1 hp = 550 ft·lbf/s ≈ 745.69987 W. 1.5를 곱하면 샤프트 전력(와트)입니다. 실제 전기 입력은 효율 손실로 더 큽니다.",
    relationshipContext:
      "모터 명판은 hp, 전기 설계·차단기는 와트·kW로 잡는 경우가 많습니다. PS(미터법 마력)는 약간 다릅니다.",
    relatedConverterLabel: "Horsepower → Watt",
  },
  "power/how-many-btu-hr-in-1-ton-of-air-conditioning": {
    question: "에어컨 1톤(냉동톤)에는 몇 BTU/h가 있나요?",
    directAnswer: "미국 HVAC에서 1 냉동톤은 12,000 BTU/h(냉각 속도)로 정의됩니다. 질량 톤이 아닙니다.",
    detailedExplanation:
      "에어컨 ‘톤’은 1시간에 12,000 BTU 냉각 능력을 뜻합니다. 역사적 얼음 용량 관습이며 2,000 lb 단축톤과 무관합니다. 장비 비교는 BTU/h·kW를 쓰세요.",
    relationshipContext:
      "BTU/h와 kW 모두 열전력입니다. 12,000 BTU/h/톤을 알면 IT BTU/h→W 계수로 kW·W와 비교할 수 있습니다.",
    relatedConverterLabel: "BTU per Hour → Kilowatt",
  },
  "power/convert-5-hp-to-kw-for-industrial-pump": {
    question: "산업용 펌프 5마력(hp)을 kW로 변환하면?",
    directAnswer: "약 3.728 kW: 5 기계 hp × ~0.74570 kW/hp ≈ 3.7285 kW.",
    detailedExplanation:
      "hp에 와트 계수(~745.70 W/hp)를 곱한 뒤 1,000으로 나누면 kW입니다. 샤프트 전력이며, 흡수·전기 입력은 효율·서비스 팩터를 더합니다.",
    relationshipContext:
      "펌프 곡선·모터는 hp, VFD·유틸·IEC는 kW인 경우가 많습니다. 고정 hp 정의로 사양을 맞춥니다.",
    relatedConverterLabel: "Horsepower → Kilowatt",
  },
  "power/convert-1500-watts-to-btu-hr-for-space-heater": {
    question: "1500와트 전기 히터는 몇 BTU/h인가요?",
    directAnswer: "약 5,118 BTU/h(IT): 1,500 W ÷ (이 도구의 W/BTU/h) ≈ 5,118.2 BTU/h.",
    detailedExplanation:
      "IT BTU/h 속도 정의: BTU/h당 ≈0.293071 W. W를 이 값으로 나눕니다. 저항식(역률≈1)인지 확인하세요.",
    relationshipContext:
      "전기 히터는 와트, 가스·혼합 HVAC는 BTU/h로 표기됩니다. 비교에 유용합니다.",
    relatedConverterLabel: "Watt → BTU per Hour",
  },
  "power/how-many-mw-is-1-watt-of-power": {
    question: "1와트(watt)에는 몇 밀리와트(milliwatt)가 있나요?",
    directAnswer: "1 W에는 1,000 mW가 있습니다.",
    detailedExplanation:
      "접두 milli-는 1/1,000입니다. W×1,000=mW, mW÷1,000=W.",
    relationshipContext:
      "mW는 RF·LED·센서에, W는 가전 부하에 흔합니다. 둘 다 선형 SI 스케일입니다.",
    relatedConverterLabel: "Watt → Milliwatt",
  },
  "power/what-is-the-difference-between-2000-va-and-2000-watts": {
    question: "2000 VA와 2000 와트의 차이는?",
    directAnswer:
      "VA는 피상전력, W는 유효전력입니다. 역률 1이면 이 도구에서 2,000 VA = 2,000 W로 같습니다. 무효 부하면 W < VA입니다.",
    detailedExplanation:
      "VA = 전압×전류(위상 무시). W는 역률을 반영합니다. UPS·변압기는 VA, 저항 히터는 ~1 W/VA. 여기서 1 VA = 1 W로 변환합니다.",
    relationshipContext:
      "UPS·발전기 용량은 VA(전류 한계), 요금·발열은 W에 가깝습니다. 역률을 확인하세요.",
    relatedConverterLabel: "Volt-Ampere → Watt",
  },
  "power/how-many-kcal-h-is-a-1000w-electric-heater": {
    question: "1000 W 전기 히터는 몇 kcal/h인가요?",
    directAnswer:
      "약 860 kcal/h(열화학): 1,000 W는 이 도구 kcal/h 계수(4,184 J/kcal, 1시간)로 대략 859.5–860 kcal/h입니다.",
    detailedExplanation:
      "1 kcal/h = 4,184/3,600 W. kcal/h = W ÷ (4,184/3,600). 순수 저항 히터는 전력을 거의 모두 열로 바꿉니다.",
    relationshipContext:
      "일부 유럽 열 라벨은 kcal/h, 전기는 W·kW입니다. 열화학 kcal 정의가 고정이면 선형 변환입니다.",
    relatedConverterLabel: "Watt → Kilocalorie per Hour",
  },
  "power/how-many-kilowatts-is-1-mw-of-power-plant": {
    question: "발전소 1 MW에는 몇 kW가 있나요?",
    directAnswer: "1 메가와트(MW)에는 1,000 kW가 있습니다.",
    detailedExplanation:
      "mega-는 10⁶ W, kilo-는 10³ W이므로 1 MW = 1,000,000 W = 1,000 kW. SI에서 정확합니다.",
    relationshipContext:
      "발전 설비는 MW, 배전·대형 모터는 kW로 논의하는 경우가 많습니다.",
    relatedConverterLabel: "Megawatt → Kilowatt",
  },
  "power/how-many-watts-does-a-5000-btu-hr-ac-use": {
    question: "5000 BTU/h 에어컨은 몇 와트를 쓰나요?",
    directAnswer:
      "냉각 용량 5,000 BTU/h는 열전력 약 1,465 W; 플러그 전력(와트)은 EER/COP 효율에 따라 보통 더 큽니다.",
    detailedExplanation:
      "IT BTU/h 계수: 5,000 × (~0.293071 W/BTU/h) ≈ 1,465 W(냉각 전력). 전류·소비전력은 명판·SEER/EER를 보세요.",
    relationshipContext:
      "창문형은 BTU/h 냉각, 소비자는 발전기·태양용 와트를 원합니다. 냉각 W와 전기 입력 W를 구분하세요.",
    relatedConverterLabel: "BTU per Hour → Watt",
  },
  "angle/how-to-convert-degrees-to-radians": {
    question: "도(degree)를 라디안(radian)으로 어떻게 변환하나요?",
    directAnswer: "도에 π/180을 곱하면 라디안입니다(정확).",
    detailedExplanation:
      "한 바퀴는 360°이자 2π rad이므로 1° = π/180 rad. 예: 180° = π rad, 90° = π/2 rad.",
    relationshipContext:
      "라디안은 SI 각도 단위이며, 많은 프로그래밍 수학 라이브러리는 라디안을 씁니다.",
    relatedConverterLabel: "Degree → Radian",
  },
  "angle/how-to-convert-radians-to-degrees": {
    question: "라디안(radian)을 도(degree)로 어떻게 변환하나요?",
    directAnswer: "라디안에 180/π를 곱하면 도입니다(정확).",
    detailedExplanation:
      "2π rad = 360°이므로 1 rad = 180/π°(약 57.2958°). 도→라디안의 역변환입니다.",
    relationshipContext:
      "센서·미적분은 라디안, 보고·UI는 도가 흔합니다.",
    relatedConverterLabel: "Radian → Degree",
  },
  "angle/how-many-degrees-in-one-revolution": {
    question: "1회전(revolution)에는 몇 도(degree)가 있나요?",
    directAnswer: "한 바퀴는 정확히 360°입니다.",
    detailedExplanation:
      "도의 정의상 1회전 = 360°. 같은 회전은 2π rad입니다.",
    relationshipContext:
      "RPM·회전수는 기계 설계에서 도·라디안과 함께 쓰입니다.",
    relatedConverterLabel: "Revolution → Degree",
  },
  "angle/how-to-convert-gradians-to-degrees": {
    question: "그라디안(gradian)을 도(degree)로 어떻게 변환하나요?",
    directAnswer: "그라디안에 9/10을 곱하면 도입니다(100 grad = 90°, 400 grad = 360°).",
    detailedExplanation:
      "그라디안은 직각을 100등분하므로 1 grad = (360/400)° = 0.9°.",
    relationshipContext:
      "일부 유럽 측량 도구·계산기에 그라디안이 나타납니다.",
    relatedConverterLabel: "Gradian → Degree",
  },
  "angle/how-many-arcminutes-in-one-degree": {
    question: "1도(degree)에는 몇 각분(arc minute)이 있나요?",
    directAnswer: "1°에는 정확히 60 arc minute이 있습니다.",
    detailedExplanation:
      "육십진법: 1° = 60′, 1′ = 60″(arc second).",
    relationshipContext:
      "천문 좌표와 MOA 조준 모두 각분을 씁니다.",
    relatedConverterLabel: "Degree → Arc Minute",
  },
  "angle/how-to-convert-milliradians-to-degrees": {
    question: "밀리라디안(milliradian)을 도(degree)로 어떻게 변환하나요?",
    directAnswer: "mrad × 180/(1000π) = 도. 즉 (180/π)/1000을 곱합니다.",
    detailedExplanation:
      "1 mrad = 0.001 rad. 1 rad = 180/π°이므로 1 mrad ≈ 0.0572958°.",
    relationshipContext:
      "장거리 광학·공학 소각 근사에 mrad가 쓰입니다.",
    relatedConverterLabel: "Milliradian → Degree",
  },
  "angle/how-many-nato-mils-in-a-full-circle": {
    question: "한 바퀴에 NATO mil은 몇 개인가요?",
    directAnswer: "한 바퀴는 정확히 6,400 NATO mil입니다.",
    detailedExplanation:
      "NATO mil 정의: 6,400 mil = 360°. 1 mil = 360°/6400 = 0.05625° = 2π/6400 rad.",
    relationshipContext:
      "포병·전술 조준망에서 6400 분할을 씁니다.",
    relatedConverterLabel: "Mil (NATO) → Degree",
  },
  "angle/how-to-convert-arcseconds-to-arcminutes": {
    question: "각초(arc second)를 각분(arc minute)으로 어떻게 변환하나요?",
    directAnswer: "각초를 60으로 나누면 각분입니다(정확).",
    detailedExplanation:
      "1 arc minute = 60 arc second이므로 arcmin = arcsec ÷ 60.",
    relationshipContext:
      "망원경 해상도·천문 측정에서 각초·각분을 오갑니다.",
    relatedConverterLabel: "Arc Second → Arc Minute",
  },
  "angle/how-to-convert-degrees-to-nato-mils": {
    question: "도(degree)를 NATO mil로 어떻게 변환하나요?",
    directAnswer: "도 × 6400/360 = 160/9. 360° = 6400 mil이므로 1° = 6400/360 mil.",
    detailedExplanation:
      "변환기는 일관성을 위해 라디안 경유 비율을 적용합니다.",
    relationshipContext:
      "도 기반 지도와 mil 기반 사격·조준을 맞출 때 흔한 작업입니다.",
    relatedConverterLabel: "Degree → Mil (NATO)",
  },
  "angle/how-to-convert-gradians-to-radians": {
    question: "그라디안(gradian)을 라디안(radian)으로 어떻게 변환하나요?",
    directAnswer: "그라디안에 π/200을 곱하면 라디안입니다(정확).",
    detailedExplanation:
      "직각 100 grad = π/2 rad이므로 1 grad = π/200 rad. 1회전 = 400 grad = 2π rad.",
    relationshipContext:
      "일부 CAD·측량 모드는 gradian, 물리 라이브러리는 radian을 씁니다.",
    relatedConverterLabel: "Gradian → Radian",
  },
};
