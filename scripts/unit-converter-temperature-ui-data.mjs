/** Temperature converter hub, pair pages, UnitConverter, FAQ page UI — EN/KO */

export const TEMPERATURE_UNIT_KEYS = ["c", "f", "k", "r"];

export const TEMPERATURE_KEY_TO_SLUG = {
  c: "celsius",
  f: "fahrenheit",
  k: "kelvin",
  r: "rankine",
};

export const TEMPERATURE_HUB_KEYS = ["c", "f", "k", "r"];

const unitDescriptionsEn = {
  c: "Celsius is a metric scale where 0 °C is the freezing point of water and 100 °C is the boiling point at standard atmospheric pressure. It shares the same step size as kelvin (1 K = 1 °C interval).",
  f: "Fahrenheit is common in the United States for weather and cooking. Water freezes at 32 °F and boils at 212 °F at standard pressure. Convert via Celsius or direct offset formulas.",
  k: "Kelvin is the SI base unit for thermodynamic temperature. 0 K is absolute zero. The triple point of water is 273.16 K by definition; this tool uses 273.15 for °C ↔ K in everyday conversions.",
  r: "Rankine is an absolute scale with the same degree size as Fahrenheit (1 R interval = 1 °F interval). 0 R is absolute zero. Relationship: R = °F + 459.67, and R = (9/5) × K (exact ratio to kelvin).",
};

const unitDescriptionsKo = {
  c: "섭씨는 0°C가 물의 어는점, 100°C가 표준 대기압에서 끓는점인 미터법 온도 척도입니다. 켈빈과 같은 간격(1K = 1°C)을 공유합니다.",
  f: "화씨는 미국에서 날씨·요리에 흔합니다. 표준 압력에서 물은 32°F에서 얼고 212°F에서 끓습니다. 섭씨 또는 직접 오프셋 수식으로 변환합니다.",
  k: "켈빈은 열역학 온도의 SI 기본 단위입니다. 0K는 절대영입니다. 물의 삼중점은 정의상 273.16K이며, 이 도구는 일상 °C↔K 변환에 273.15를 씁니다.",
  r: "랭킨은 화씨와 같은 도(°) 크기의 절대 척도입니다(1R 간격 = 1°F 간격). 0R은 절대영입니다. R = °F + 459.67, R = (9/5)×K 관계가 성립합니다.",
};

const pairSummariesEn = {
  "c-f": "From Celsius to Fahrenheit: °F = (°C × 9/5) + 32. The 9/5 factor matches the ratio of degree sizes; +32 aligns the zero points.",
  "f-c": "From Fahrenheit to Celsius: °C = (°F − 32) × 5/9. Subtract 32 to remove the offset, then scale by 5/9.",
  "c-k": "From Celsius to Kelvin: K = °C + 273.15. Kelvin uses the same step as Celsius with a different zero at absolute zero.",
  "k-c": "From Kelvin to Celsius: °C = K − 273.15.",
  "f-k": "From Fahrenheit to Kelvin: first convert to Celsius with (°F − 32) × 5/9, then add 273.15.",
  "k-f": "From Kelvin to Fahrenheit: first subtract 273.15 for Celsius, then °F = (°C × 9/5) + 32.",
  "k-r": "From Kelvin to Rankine: R = K × (9/5). The two absolute scales differ only by this exact factor between their degree sizes.",
  "r-k": "From Rankine to Kelvin: K = R × (5/9), the inverse of the kelvin-to-rankine rule.",
  "f-r": "From Fahrenheit to Rankine: R = °F + 459.67 (same degree size; rankine starts at absolute zero).",
  "r-f": "From Rankine to Fahrenheit: °F = R − 459.67.",
  "c-r": "From Celsius to Rankine: R = (°C + 273.15) × (9/5), i.e. convert to kelvin then multiply by 9/5.",
  "r-c": "From Rankine to Celsius: °C = R × (5/9) − 273.15, i.e. convert to kelvin then subtract 273.15.",
};

const pairSummariesKo = {
  "c-f": "섭씨→화씨: °F = (°C × 9/5) + 32. 9/5는 도 크기 비율, +32는 영점 차이를 맞춥니다.",
  "f-c": "화씨→섭씨: °C = (°F − 32) × 5/9. 먼저 32를 빼 오프셋을 제거한 뒤 5/9를 곱합니다.",
  "c-k": "섭씨→켈빈: K = °C + 273.15. 켈빈은 섭씨와 같은 간격이며 영점만 절대영입니다.",
  "k-c": "켈빈→섭씨: °C = K − 273.15.",
  "f-k": "화씨→켈빈: 먼저 (°F − 32) × 5/9로 섭씨를 구한 뒤 273.15를 더합니다.",
  "k-f": "켈빈→화씨: K − 273.15로 섭씨를 구한 뒤 °F = (°C × 9/5) + 32를 적용합니다.",
  "k-r": "켈빈→랭킨: R = K × (9/5). 두 절대 척도는 도 크기 비율 9/5만 다릅니다.",
  "r-k": "랭킨→켈빈: K = R × (5/9), 켈빈→랭킨의 역변환입니다.",
  "f-r": "화씨→랭킨: R = °F + 459.67 (같은 도 크기, 랭킨은 절대영에서 시작).",
  "r-f": "랭킨→화씨: °F = R − 459.67.",
  "c-r": "섭씨→랭킨: R = (°C + 273.15) × (9/5), 즉 켈빈으로 바꾼 뒤 9/5를 곱합니다.",
  "r-c": "랭킨→섭씨: °C = R × (5/9) − 273.15, 켈빈으로 바꾼 뒤 273.15를 뺍니다.",
};

const pairExtraEn = {
  "c-f": "Sanity check: 0 °C = 32 °F and 100 °C = 212 °F at 1 atm (by definition of the Celsius scale).",
  "f-c": "Sanity check: 32 °F = 0 °C and 212 °F = 100 °C at 1 atm.",
  "c-k": "0 °C = 273.15 K exactly with the usual ITS-90–aligned offset used in general science.",
  "k-c": "273.15 K is exactly 0 °C with the same offset convention.",
  "f-k": "Convert through Celsius: (°F − 32) × 5/9 gives °C, then add 273.15 for kelvin.",
  "k-f": "Convert through Celsius: K − 273.15 gives °C, then (°C × 9/5) + 32 gives °F.",
  "k-r": "Check: 0 K = 0 R; 273.15 K = 491.67 R (same as 0 °C).",
  "r-k": "491.67 R corresponds to 273.15 K (ice point on both absolute scales).",
  "f-r": "0 °F = 459.67 R; each °F step is one rankine step on the absolute scale.",
  "r-f": "459.67 R = 0 °F by the usual 459.67 offset used in this tool.",
  "c-r": "0 °C = 491.67 R; 100 °C = 671.67 R (water boiling at 1 atm).",
  "r-c": "491.67 R = 0 °C with these definitions.",
};

const pairExtraKo = {
  "c-f": "검산: 1기압에서 0°C = 32°F, 100°C = 212°F(섭씨 척도 정의).",
  "f-c": "검산: 32°F = 0°C, 212°F = 100°C(1기압).",
  "c-k": "0°C = 273.15K(일반 과학에서 쓰는 ITS-90 정렬 오프셋).",
  "k-c": "273.15K는 동일 오프셋 규약으로 정확히 0°C입니다.",
  "f-k": "섭씨 경유: (°F − 32) × 5/9 → °C, 여기에 273.15를 더해 켈빈.",
  "k-f": "섭씨 경유: K − 273.15 → °C, (°C × 9/5) + 32 → °F.",
  "k-r": "검산: 0K = 0R, 273.15K = 491.67R(0°C와 같음).",
  "r-k": "491.67R은 273.15K(두 절대 척도의 어는점)에 해당합니다.",
  "f-r": "0°F = 459.67R, 화씨 1도 간격 = 랭킨 1도 간격.",
  "r-f": "459.67R = 0°F(이 도구의 459.67 오프셋).",
  "c-r": "0°C = 491.67R, 100°C = 671.67R(1기압 끓는점).",
  "r-c": "491.67R = 0°C(이 정의 기준).",
};

const commonContextsEn = [
  "Freezing point of water",
  "Boiling point of water",
  "Standard baking temperature (Golden rule)",
  "Normal human body temperature",
  "Unique point where Celsius and Fahrenheit are equal",
  "US standard for normal body temperature",
  "Threshold for a high fever",
  "High-heat oven setting for pizza or searing",
  "Commonly recommended indoor room temperature",
  "Extremely cold winter day reference",
  "Absolute Zero - the lowest possible temperature",
  "Standard freezing point in scientific Kelvin scale",
  "Standard laboratory room temperature (SATP)",
  "Water boiling point in thermodynamic scale",
  "Approximate melting point of iron",
  "Ice-water equilibrium point",
  "Human body temperature in Kelvin",
  "Steam point of water at standard pressure",
  "Boiling point of liquid nitrogen",
  "Effective surface temperature of the Sun",
  "Absolute Zero in the Rankine scale",
  "Freezing point of water for US engineering",
  "Boiling point of water in Rankine scale",
  "US engineering standard room temperature",
  "Fahrenheit zero reference in absolute terms",
  "Rankine conversion back to water's freezing point",
  "Rankine conversion back to water's boiling point",
  "Standard ambient temperature for US aerospace",
  "Rankine scale origin in Fahrenheit",
  "Common temperature in gas turbine calculations",
  "The ratio between SI and Imperial absolute scales",
  "Water's freezing point across absolute scales",
  "Water's boiling point across absolute scales",
  "The shared starting point: Absolute Zero",
  "Human body temperature in absolute units",
  "Basic conversion factor for absolute units",
  "Scientific freezing point comparison",
  "Scientific boiling point comparison",
  "Round numbers often used in engineering exams",
  "High-temperature thermal analysis point",
];

const commonContextsKo = [
  "물의 어는점",
  "물의 끓는점",
  "표준 베이킹 온도(골든 룰)",
  "정상 체온",
  "섭씨와 화씨가 같은 유일한 점",
  "미국 표준 정상 체온",
  "고열(발열) 기준",
  "피자·고온 시어링용 고온 오븐",
  "권장 실내 온도",
  "극한 추운 겨울 참고값",
  "절대영 — 가능한 최저 온도",
  "과학 켈빈 척도의 표준 어는점",
  "표준 실험실 실온(SATP)",
  "열역학 척도에서 물의 끓는점",
  "철의 대략적 융점",
  "얼음-물 평형점",
  "켈빈으로 표현한 체온",
  "표준 압력에서 물의 증기점",
  "액체 질소의 끓는점",
  "태양 표면 유효 온도",
  "랭킨 척도의 절대영",
  "미국 공학에서 물의 어는점",
  "랭킨 척도에서 물의 끓는점",
  "미국 공학 표준 실온",
  "화씨 영점의 절대 척도 표현",
  "랭킨→화씨, 물 어는점",
  "랭킨→화씨, 물 끓는점",
  "미국 항공우주 표준 주변 온도",
  "랭킨 척도 원점(화씨 기준)",
  "가스 터빈 계산에서 흔한 온도",
  "SI와 야드파운드 절대 척도 비율",
  "절대 척도 간 물의 어는점",
  "절대 척도 간 물의 끓는점",
  "공통 시작점: 절대영",
  "절대 단위로 표현한 체온",
  "절대 단위 기본 변환 계수",
  "과학적 어는점 비교",
  "과학적 끓는점 비교",
  "공학 시험에서 자주 쓰는 깔끔한 수",
  "고온 열해석 참고점",
];

export const temperatureUiEn = {
  shared: { copy: "Copy", copied: "Copied!", copyFailed: "Failed to copy" },
  unitDescriptions: unitDescriptionsEn,
  temperatureConverter: {
    converterTitle: "Convert Temperature",
    allConversionsTitle: "All Unit Conversions",
    labels: {
      fromValue: "From value",
      toValue: "To value",
      fromUnit: "From unit",
      toUnit: "To unit",
      swapUnits: "Swap units",
      copyResult: "Copy Result",
    },
    messages: {
      enterValue: "Enter value",
      formulaPlaceholder: "Formula will appear here",
      enterValidNumber: "Enter a valid number",
      noResultToCopy: "No result to copy",
      copied: "Result copied to clipboard!",
      copyFailed: "Failed to copy result",
    },
  },
  temperatureHub: {
    subtitleBadge: "unit-converter",
    pairGridTitle: "Dedicated converters (Celsius, Fahrenheit, Kelvin, Rankine — all 12 directed pairs)",
    pairGridDesc:
      "{count} pages — each pair with fixed input/output, formulas, examples, and conversion tables.",
    pairLinkTemplate: "{fromSlug} to {toSlug} ({fromName} to {toName})",
    faqSectionTitle: "Common questions (FAQ)",
    faqSectionDesc: "{count} quick answers with guides and links to the matching converter.",
    guideTitle: "Temperature Converter Guide",
  },
  commonConversions: {
    title: "Common Temperature Conversions",
    description:
      "Reference values for weather, health, cooking, and engineering. Click a row to open the matching dedicated temperature converter with that input pre-filled.",
    colContext: "Context",
    colFrom: "From",
    colTo: "To",
    colResult: "Result",
    tableAria: "Common temperature conversions table, scroll for more rows",
    contexts: commonContextsEn,
  },
  temperaturePairCalculator: {
    labels: {
      calculator: "Calculator",
      input: "Input",
      result: "Result",
      copyResult: "Copy Result",
      fromPrefix: "From:",
      toPrefix: "To:",
      enterValue: "Enter value",
    },
    messages: {
      enterValidNumber: "Enter a valid number",
      noResultToCopy: "No result to copy",
      copied: "Result copied to clipboard!",
      copyFailed: "Failed to copy result",
    },
  },
  temperaturePairPage: {
    subtitleBadge: "Temperature · unit-converter",
    aboutTitle: "About {unit}",
    summaryTitle: "Summary",
    relationshipTitle: "Relationship context",
    conversionTablesTitle: "Conversion tables",
    introTemplate:
      "Convert {fromName} to {toName} with offset-aware formulas (not simple ratio scaling), step-by-step lines, and reference tables. Uses 273.15 for Celsius–Kelvin offsets, R = (9/5) × K for kelvin–rankine, and °F–R offset 459.67.",
    h1Template: "{fromName} to {toName} Converter",
    relationshipTemplate:
      "Converting {fromName} to {toName} uses different zeros and step sizes. You cannot multiply by a single ratio alone for every pair—you first express the same physical temperature in an intermediate form (Celsius is used inside this tool), then map to {toName}. Unlike length or energy units, offsets matter for Celsius and Fahrenheit; kelvin and rankine are absolute scales linked by the exact factor 9/5.",
    summaryFallback:
      "Converting {fromName} to {toName} uses the offset-aware rules above (via Celsius internally in this tool, except kelvin–rankine which is a pure ratio).",
    pairSummaries: pairSummariesEn,
    backToTemperatureHub: "← Temperature Converter (all scales)",
    backToUnitConverter: "Unit Converter home",
    nonHubTitle: "Conversions outside the hub list",
    nonHubIntro:
      "The grid on the category page lists hub units only. These pairs include at least one unit outside that hub set (same tools: formulas and tables on each page).",
    nonHubLine1: "{fromSlug} to {toSlug}",
    nonHubLine2: "{fromName} to {toName}",
  },
  howToConvert: {
    titleTemplate: "How to convert {fromPlural} to {toPlural}",
    intervalNote:
      "Unlike units with a single fixed ratio (meters to feet), absolute temperatures include an offset. Always use the full formula for this pair—do not “multiply only” by a scale factor unless you are computing a temperature difference (interval), where offsets cancel.",
    examplesTitle: "Examples",
    exampleTitleTemplate: "Example #{n}: Convert {value} {fromKey} to {toSg}",
    extraDerivations: pairExtraEn,
  },
  faqPage: {
    converterLabel: "Temperature Converter",
    navFaqLabel: "FAQ",
    detailedAnswerSr: "Detailed answer",
    relationshipTitle: "Relationship context",
    quickTableTitle: "Quick conversion table",
    ctaTemplate: "Need a precise calculation? Go to {label}",
    backUnitConverter: "Unit Converter",
    moreConvertersTitle: "More {unit} converters",
    moreConvertersIntro:
      "Dedicated pages from {unitSg} to the other scales (Celsius, Fahrenheit, Kelvin, Rankine).",
    moreConvertersLink: "{fromSlug} to {toSlug} ({fromName} to {toName})",
  },
};

export const temperatureUiKo = {
  shared: { copy: "복사", copied: "복사되었습니다!", copyFailed: "복사에 실패했습니다" },
  unitDescriptions: unitDescriptionsKo,
  temperatureConverter: {
    converterTitle: "온도 변환",
    allConversionsTitle: "모든 단위 변환",
    labels: {
      fromValue: "입력 값",
      toValue: "결과 값",
      fromUnit: "입력 단위",
      toUnit: "출력 단위",
      swapUnits: "단위 바꾸기",
      copyResult: "결과 복사",
    },
    messages: {
      enterValue: "값을 입력하세요",
      formulaPlaceholder: "수식이 여기에 표시됩니다",
      enterValidNumber: "유효한 숫자를 입력하세요",
      noResultToCopy: "복사할 결과가 없습니다",
      copied: "결과가 복사되었습니다!",
      copyFailed: "결과 복사에 실패했습니다",
    },
  },
  temperatureHub: {
    subtitleBadge: "unit-converter",
    pairGridTitle: "전용 변환기 (섭씨, 화씨, 켈빈, 랭킨 — 12개 방향 쌍)",
    pairGridDesc:
      "{count}개 페이지 — 고정 입·출력, 수식, 예시, 변환 표가 포함된 각 쌍.",
    pairLinkTemplate: "{fromSlug} → {toSlug} ({fromName} → {toName})",
    faqSectionTitle: "자주 묻는 질문",
    faqSectionDesc: "{count}개의 빠른 답변과 해당 변환기 링크를 제공합니다.",
    guideTitle: "온도 변환기 가이드",
  },
  commonConversions: {
    title: "자주 쓰는 온도 변환",
    description:
      "날씨·건강·요리·공학 참고값입니다. 행을 클릭하면 해당 입력값이 미리 채워진 전용 온도 변환기로 이동합니다.",
    colContext: "맥락",
    colFrom: "입력",
    colTo: "출력",
    colResult: "결과",
    tableAria: "자주 쓰는 온도 변환 표, 스크롤하여 더 보기",
    contexts: commonContextsKo,
  },
  temperaturePairCalculator: {
    labels: {
      calculator: "계산기",
      input: "입력",
      result: "결과",
      copyResult: "결과 복사",
      fromPrefix: "입력:",
      toPrefix: "출력:",
      enterValue: "값 입력",
    },
    messages: {
      enterValidNumber: "유효한 숫자를 입력하세요",
      noResultToCopy: "복사할 결과가 없습니다",
      copied: "결과가 복사되었습니다!",
      copyFailed: "결과 복사에 실패했습니다",
    },
  },
  temperaturePairPage: {
    subtitleBadge: "온도 · unit-converter",
    aboutTitle: "{unit} 소개",
    summaryTitle: "요약",
    relationshipTitle: "관계 설명",
    conversionTablesTitle: "변환 표",
    introTemplate:
      "{fromName}을(를) {toName}(으)로 변환합니다. 단순 비율이 아닌 오프셋을 반영한 수식, 단계별 설명, 참고 표를 제공합니다. °C↔K는 273.15, K↔R은 9/5, °F↔R은 459.67 오프셋을 사용합니다.",
    h1Template: "{fromName} → {toName} 변환기",
    relationshipTemplate:
      "{fromName}→{toName} 변환은 영점과 도 크기가 다릅니다. 모든 쌍에 단일 비율만 곱할 수 없으며, 이 도구는 내부적으로 섭씨를 거쳐 {toName}으로 매핑합니다. 길이·에너지와 달리 섭씨·화씨에는 오프셋이 중요하고, 켈빈·랭킨은 9/5 정확 비율로 연결된 절대 척도입니다.",
    summaryFallback:
      "{fromName}→{toName}은 위 오프셋 규칙(내부적으로 섭씨 경유, K↔R은 순수 비율)으로 변환합니다.",
    pairSummaries: pairSummariesKo,
    backToTemperatureHub: "← 온도 변환기 (모든 척도)",
    backToUnitConverter: "단위 변환기 홈",
    nonHubTitle: "허브 목록 밖 변환",
    nonHubIntro:
      "카테고리 페이지 그리드는 허브 단위만 나열합니다. 아래 쌍은 허브 밖 단위를 하나 이상 포함합니다(동일한 수식·표 도구).",
    nonHubLine1: "{fromSlug} → {toSlug}",
    nonHubLine2: "{fromName} → {toName}",
  },
  howToConvert: {
    titleTemplate: "{fromPlural}을(를) {toPlural}(으)로 변환하는 방법",
    intervalNote:
      "고정 비율만 있는 단위(미터→피트)와 달리 절대 온도에는 오프셋이 있습니다. 이 쌍에는 전체 수식을 사용하세요. 온도 차(간격)를 구할 때만 오프셋이 상쇄되어 비율만 곱해도 됩니다.",
    examplesTitle: "예시",
    exampleTitleTemplate: "예시 #{n}: {value} {fromKey}를 {toSg}(으)로 변환",
    extraDerivations: pairExtraKo,
  },
  faqPage: {
    converterLabel: "온도 변환기",
    navFaqLabel: "자주 묻는 질문",
    detailedAnswerSr: "상세 답변",
    relationshipTitle: "관계 설명",
    quickTableTitle: "빠른 변환 표",
    ctaTemplate: "정확한 계산이 필요하면 {label}(으)로 이동",
    backUnitConverter: "단위 변환기",
    moreConvertersTitle: "{unit} 관련 변환기",
    moreConvertersIntro:
      "{unitSg}에서 다른 척도(섭씨, 화씨, 켈빈, 랭킨)로 가는 전용 페이지입니다.",
    moreConvertersLink: "{fromSlug} → {toSlug} ({fromName} → {toName})",
  },
};

export const temperatureHubContentEn = {
  h1: "Temperature Converter",
  subtitle: "unit-converter",
  intro:
    "Convert between Celsius, Fahrenheit, Kelvin, and Rankine. Offset-aware formulas. All Unit Conversions panel included.",
  guideTitle: "Temperature Converter Guide",
  sections: [
    {
      title: "Quick start",
      type: "unordered",
      items: [
        "Enter a value and pick source and target scales. The result updates as you type.",
        "Use swap to reverse scales and copy to copy the result. Temperature uses offsets—not just multiplying by a ratio.",
        "The All Unit Conversions panel lists your value in Celsius, Fahrenheit, and Kelvin at once.",
      ],
    },
    {
      title: "Formulas & deeper content",
      type: "paragraphs",
      items: [
        "Need worked examples and tables for one direction (e.g. Celsius to Fahrenheit)? Open a dedicated converter from the list below.",
        "Short answers to common questions are in the FAQ section. Celsius–Kelvin uses a 273.15 offset here.",
      ],
    },
    {
      title: "Example uses",
      type: "unordered",
      items: [
        "Weather: °C and °F forecasts.",
        "Cooking: oven and recipe temperatures.",
        "Science: kelvin for physics and chemistry.",
      ],
    },
  ],
  faq: [
    {
      question: "Which temperature scales can I convert?",
      answer: "You can convert Celsius, Fahrenheit, Kelvin, and Rankine on this page.",
    },
    {
      question: "Does this converter handle offsets correctly?",
      answer: "Yes. Temperature conversions use offset-aware formulas, not only ratio scaling.",
    },
    {
      question: "Are dedicated pair pages available?",
      answer: "Yes. This page links to dedicated pair converters with formulas, examples, and tables.",
    },
  ],
  backToHub: "← Back to Unit Converter",
};

export const temperatureHubContentKo = {
  h1: "온도 변환기",
  subtitle: "unit-converter",
  intro:
    "섭씨, 화씨, 켈빈, 랭킨을 변환합니다. 오프셋을 반영한 수식을 사용하며, 모든 단위 변환 패널이 포함되어 있습니다.",
  guideTitle: "온도 변환기 가이드",
  sections: [
    {
      title: "빠른 시작",
      type: "unordered",
      items: [
        "값을 입력하고 입력·출력 척도를 선택하세요. 입력과 동시에 결과가 갱신됩니다.",
        "단위 바꾸기로 입·출력을 뒤집고, 복사로 결과를 가져갈 수 있습니다. 온도는 비율만이 아니라 오프셋이 있습니다.",
        "‘모든 단위 변환’ 패널에서 섭씨·화씨·켈빈 값을 한 번에 볼 수 있습니다.",
      ],
    },
    {
      title: "수식 및 상세 내용",
      type: "paragraphs",
      items: [
        "한 방향(예: 섭씨→화씨)의 예시·표가 필요하면 아래 목록의 전용 변환기를 여세요.",
        "자주 묻는 질문은 FAQ 섹션에 있습니다. °C↔K 변환에는 273.15 오프셋을 사용합니다.",
      ],
    },
    {
      title: "활용 예시",
      type: "unordered",
      items: [
        "날씨: °C·°F 예보.",
        "요리: 오븐·레시피 온도.",
        "과학: 물리·화학의 켈빈.",
      ],
    },
  ],
  faq: [
    {
      question: "어떤 온도 척도를 변환할 수 있나요?",
      answer: "이 페이지에서 섭씨, 화씨, 켈빈, 랭킨을 변환할 수 있습니다.",
    },
    {
      question: "오프셋이 올바르게 처리되나요?",
      answer: "예. 비율만이 아니라 오프셋을 반영한 수식으로 변환합니다.",
    },
    {
      question: "전용 쌍 페이지가 있나요?",
      answer: "예. 수식, 예시, 표가 있는 전용 쌍 변환기 링크가 있습니다.",
    },
  ],
  backToHub: "← 단위 변환기로 돌아가기",
};
