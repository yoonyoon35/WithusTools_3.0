/** Speed converter hub, pair pages, UnitConverter, FAQ page UI — EN/KO */

export const SPEED_UNIT_KEYS = [
  "mps", "kmps", "kph", "mph", "knots", "fpm", "fps", "ips", "cms", "mms", "mach", "beaufort", "c",
];

/** Dedicated pair pages only (subset of SPEED_UNIT_KEYS). */
export const SPEED_HUB_KEYS = [
  "mps", "kmps", "kph", "mph", "knots", "fps", "ips", "cms", "mms", "mach", "c",
];

export const SPEED_KEY_TO_SLUG = {
  mps: "mps",
  kmps: "kmps",
  kph: "kph",
  mph: "mph",
  knots: "knots",
  fpm: "fpm",
  fps: "fps",
  ips: "ips",
  cms: "cms",
  mms: "mms",
  mach: "mach",
  beaufort: "beaufort",
  c: "c",
};

const unitDescriptionsEn = {
  mps: "Meters per second is the SI derived unit for speed. It is the standard in physics and engineering for expressing velocity.",
  kmps: "Kilometers per second is used for very high speeds in space, astronomy, and physics contexts.",
  kph: "Kilometers per hour is common for road speeds, weather reports, and everyday travel outside countries that use miles per hour.",
  mph: "Miles per hour is used for road speeds primarily in the United States, the United Kingdom, and some other countries.",
  knots: "The knot is one nautical mile per hour (1852 m/h). It is standard in maritime and aviation navigation.",
  fpm: "Feet per minute is common for vertical speed in aviation and some HVAC airflow/velocity contexts.",
  fps: "Feet per second appears in ballistics, engineering, and some US sports contexts; it relates to imperial length per second.",
  ips: "Inches per second is used for small mechanical motion, machining feed rates, and vibration specs.",
  cms: "Centimeters per second is a fine-grained metric unit often used in labs and material testing.",
  mms: "Millimeters per second is common in machinery, 3D printer settings, and vibration measurements.",
  mach: "Mach number is the ratio of speed to the local speed of sound. Here Mach 1 is fixed at 340.29 m/s (ISA sea level, ~15 °C) for consistent numeric conversion.",
  beaufort: "The Beaufort wind force scale (0–12) describes mean wind at 10 m height. This tool maps forces to midpoint m/s (WMO-style bands) and maps m/s back to a force index.",
  c: "The speed of light in vacuum is exactly 299,792,458 m/s (SI definition). Enter speeds as a fraction of c (e.g. 0.001 c).",
};

const unitDescriptionsKo = {
  mps: "초당 미터(m/s)는 SI 유도 속도 단위로, 물리·공학에서 표준입니다.",
  kmps: "초당 킬로미터(km/s)는 우주·천문·고속 물리 맥락에 쓰입니다.",
  kph: "시속 킬로미터(km/h)는 도로 속도·기상·일상 이동에 흔합니다.",
  mph: "시속 마일(mph)은 미국·영국 등 일부 국가 도로 속도에 쓰입니다.",
  knots: "노트(knot)는 1해리/시간(1852m/h)으로, 해상·항공 항해 표준입니다.",
  fpm: "분당 피트(ft/min)는 항공 수직 속도·HVAC 유속에 쓰입니다.",
  fps: "초당 피트(ft/s)는 탄도학·공학·미국 스포츠 맥락에 등장합니다.",
  ips: "초당 인치(in/s)는 소형 기계·가공 이송·진동 사양에 쓰입니다.",
  cms: "초당 센티미터(cm/s)는 실험실·재료 시험 등 세밀한 미터법 단위입니다.",
  mms: "초당 밀리미터(mm/s)는 기계·3D 프린터·진동 측정에 흔합니다.",
  mach: "마하(Mach)는 국소 음속 대비 속도 비입니다. 여기서 Mach 1은 340.29m/s(ISA 해수면, ~15°C)로 고정합니다.",
  beaufort: "보퍼트(Beaufort) 풍력 0–12는 10m 높이 평균 바람을 나타냅니다. WMO식 m/s 대역 중간값으로 변환합니다.",
  c: "진공 광속(c)은 정확히 299,792,458m/s(SI 정의)입니다. c의 분수로 속도를 입력합니다(예: 0.001 c).",
};

export const speedUiEn = {
  shared: { copy: "Copy", copied: "Copied!", copyFailed: "Failed to copy" },
  unitDescriptions: unitDescriptionsEn,
  speedConverter: {
    converterTitle: "Convert Speed",
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
  speedHub: {
    subtitleBadge: "unit-converter",
    pairGridTitle: "Dedicated converters (SI, imperial, navigation, aviation, wind scale, and relativistic units)",
    pairGridDesc:
      "{count} pages — every pair of units below, with fixed input/output, formulas, examples, and conversion tables.",
    pairLinkTemplate: "{fromSlug} to {toSlug} ({fromName} to {toName})",
    faqSectionTitle: "Common questions (FAQ)",
    faqSectionDesc: "{count} quick answers with guides and links to the matching converter.",
    guideTitle: "Speed Converter Guide",
  },
  speedPairCalculator: {
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
      cannotConvertPair: "Cannot convert this pair",
      noResultToCopy: "No result to copy",
      copied: "Result copied to clipboard!",
      copyFailed: "Failed to copy result",
    },
  },
  speedPairPage: {
    subtitleBadge: "Speed · unit-converter",
    aboutTitle: "About {unit}",
    summaryTitle: "Summary",
    relationshipTitle: "Relationship context",
    conversionTablesTitle: "Conversion tables",
    introTemplate:
      "Convert {fromName} to {toName} with a fixed input and output unit, step-by-step formula line, and reference tables. All calculations bridge through meters per second with fixed definitions (knot, international mile, Mach 1 = ISA sea level, Beaufort WMO bands at 10 m, vacuum c, plus linear SI and imperial rate units).",
    h1Template: "{fromName} to {toName} Converter",
    summaryTemplate:
      "To convert {fromName} to {toName}, multiply the value in {fromKey} by ({fromFactor} m/s per {fromKey}) / ({toFactor} m/s per {toKey}). Equivalently: value_{toKey} = value_{fromKey} × ({fromFactor} / {toFactor}). Numerically, 1 {fromKey} equals {mult} {toKey}.",
    summaryBeaufort:
      "Beaufort conversions use the WMO-style mean wind m/s ranges at 10 m. From Beaufort: your value is rounded to force 0–12, then the midpoint m/s for that force is used. To Beaufort: the m/s equivalent of your input is classified into a force 0–12. Other pairs with {fromName} and {toName} still pass through that m/s bridge.",
    summaryMissingFactor:
      "To convert {fromName} to {toName}, this tool uses an intermediate value in meters per second.",
    relationshipBeaufort:
      "You are converting between {fromName} and {toName}. Beaufort is a discrete wind scale; conversions use WMO mean-wind m/s bands at 10 m. Linear units (m/s, km/h, mph, knots, etc.) bridge through an equivalent m/s value. Mach and c use fixed m/s definitions for Mach 1 and vacuum c.",
    relationshipC:
      "You are converting between {fromName} and {toName}. Speeds as a fraction of c are multiplied by 299,792,458 m/s to compare with everyday units.",
    relationshipMach:
      "You are converting between {fromName} and {toName}. Mach is treated as multiples of Mach 1 = 340.29 m/s (ISA reference). Actual Mach depends on altitude and temperature; this tool uses one reference sound speed for reproducible numbers.",
    relationshipLinear:
      "Both {fromName} and {toName} are expressed as fixed multiples of meters per second in this tool. Converting multiplies by the ratio of m/s per {fromKey} to m/s per {toKey}, so results stay consistent with SI-based definitions (international mile, knot, feet, etc.).",
    backToSpeedHub: "← Speed Converter (all units)",
    backToUnitConverter: "Unit Converter home",
    nonHubTitle: "Conversions outside the hub list",
    nonHubIntro:
      "The grid on the category page lists hub units only. These pairs include at least one unit outside that hub set (same tools: formulas and tables on each page).",
    nonHubLine1: "{fromSlug} to {toSlug}",
    nonHubLine2: "{fromName} to {toName}",
  },
  howToConvert: {
    titleTemplate: "How to convert {fromPlural} to {toPlural}",
    oneEquals: "1 {fromSg} equals {mult} {toSg} in this tool (via m/s):",
    factorExplain:
      "Each {fromSg} carries {fromFactor} m/s and each {toSg} {toFactor} m/s, so one {fromKey} equals {fromFactor} ÷ {toFactor} {toKey}.",
    letVFrom:
      "Let V({fromKey}) be the numeric speed in {fromSg} ({fromKey}), and V({toKey}) in {toSg} ({toKey}). Then:",
    divideExplain:
      "Equivalently, divide by how many {fromKey} fit into one {toKey} (m/s per {toKey} divided by m/s per {fromKey}):",
    orLine: "Or: {toSg} = {fromSg} ÷ {divisor}",
    examplesTitle: "Examples",
    exampleTitleTemplate: "Example #{n}: Convert {value} {fromKey} to {toSg}",
    resultLabel: "Result:",
    beaufortIntro:
      "The Beaufort scale is a discrete wind force (0–12) based on mean wind at 10 m. This tool converts by passing through an equivalent value in meters per second (WMO-style m/s bands; midpoints when starting from a force).",
    beaufortFromExplain:
      "From Beaufort: your input is rounded to the nearest whole force 0–12, then the midpoint m/s for that force is used before converting to {toSg}.",
    beaufortToExplain:
      "To Beaufort: your speed is converted to m/s, then classified into the matching force 0–12.",
    specialPairExplain:
      "This pair uses fixed m/s definitions per unit (Mach 1 and c are defined in m/s). Multiply by the ratio of m/s per {fromKey} to m/s per {toKey}, as shown in the formula line in the calculator above.",
  },
  faqPage: {
    converterLabel: "Speed Converter",
    navFaqLabel: "FAQ",
    detailedAnswerSr: "Detailed answer",
    relationshipTitle: "Relationship context",
    quickTableTitle: "Quick conversion table",
    ctaTemplate: "Need a precise calculation? Go to {label}",
    backUnitConverter: "Unit Converter",
    moreConvertersTitle: "More {unit} converters",
    moreConvertersIntro:
      "Dedicated pages from {unitSg} to every other hub speed unit (m/s, km/s, km/h, mph, knots, ft/s, in/s, cm/s, mm/s, Mach, c).",
    moreConvertersLink: "{fromSlug} to {toSlug} ({fromName} to {toName})",
  },
};

export const speedUiKo = {
  shared: { copy: "복사", copied: "복사되었습니다!", copyFailed: "복사에 실패했습니다" },
  unitDescriptions: unitDescriptionsKo,
  speedConverter: {
    converterTitle: "속도 변환",
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
  speedHub: {
    subtitleBadge: "unit-converter",
    pairGridTitle: "전용 변환기 (SI, 야드파운드, 항해, 항공, 풍력, 상대론 단위)",
    pairGridDesc:
      "{count}개 페이지 — 아래 모든 단위 쌍. 고정 입·출력, 수식, 예시, 변환 표가 포함됩니다.",
    pairLinkTemplate: "{fromSlug} → {toSlug} ({fromName} → {toName})",
    faqSectionTitle: "자주 묻는 질문",
    faqSectionDesc: "{count}개의 빠른 답변과 해당 변환기 링크를 제공합니다.",
    guideTitle: "속도 변환기 가이드",
  },
  speedPairCalculator: {
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
      cannotConvertPair: "이 쌍은 변환할 수 없습니다",
      noResultToCopy: "복사할 결과가 없습니다",
      copied: "결과가 복사되었습니다!",
      copyFailed: "결과 복사에 실패했습니다",
    },
  },
  speedPairPage: {
    subtitleBadge: "속도 · unit-converter",
    aboutTitle: "{unit} 소개",
    summaryTitle: "요약",
    relationshipTitle: "관계 설명",
    conversionTablesTitle: "변환 표",
    introTemplate:
      "{fromName}을(를) {toName}(으)로 변환합니다. 입·출력 단위가 고정되어 있으며, 단계별 수식과 참고 표를 제공합니다. 계산은 m/s를 거치며(knot, 국제 mile, Mach 1=ISA 해수면, Beaufort WMO 10m 대역, 진공 c, km/s·fpm·ips·cm/s·mm/s 등 선형 단위 포함).",
    h1Template: "{fromName} → {toName} 변환기",
    summaryTemplate:
      "{fromName}을(를) {toName}(으)로 변환하려면 {fromKey} 값에 (m/s당 {fromKey}) / (m/s당 {toKey}) 비율을 곱합니다. 즉 value_{toKey} = value_{fromKey} × ({fromFactor} / {toFactor}). 수치상 1 {fromKey} = {mult} {toKey}입니다.",
    summaryBeaufort:
      "Beaufort 변환은 10m WMO식 평균풍 m/s 대역을 씁니다. Beaufort→다른 단위: 입력을 0–12로 반올림한 뒤 해당 풍력의 중간 m/s를 사용합니다. →Beaufort: 입력을 m/s로 바꾼 뒤 0–12 풍력으로 분류합니다. {fromName}·{toName} 쌍도 이 m/s 브리지를 거칩니다.",
    summaryMissingFactor:
      "{fromName}을(를) {toName}(으)로 변환할 때 이 도구는 m/s 중간값을 사용합니다.",
    relationshipBeaufort:
      "{fromName}과 {toName} 사이 변환입니다. Beaufort는 이산 풍력 척도이며, 10m WMO 평균풍 m/s 대역으로 변환합니다. 선형 단위(m/s, km/h, mph, knot 등)는 m/s 등가값을 거칩니다. Mach·c는 Mach 1·진공 c의 고정 m/s 정의를 씁니다.",
    relationshipC:
      "{fromName}과 {toName} 사이 변환입니다. c 분수 속도는 299,792,458m/s를 곱해 일상 단위와 비교합니다.",
    relationshipMach:
      "{fromName}과 {toName} 사이 변환입니다. Mach는 Mach 1 = 340.29m/s(ISA 기준)의 배수로 취급합니다. 실제 Mach는 고도·온도에 따라 달라지며, 여기서는 재현 가능한 단일 음속을 씁니다.",
    relationshipLinear:
      "{fromName}과 {toName} 모두 이 도구에서 m/s의 고정 배수로 표현됩니다. m/s당 {fromKey}를 m/s당 {toKey}로 나눈 비율을 곱하므로, 국제 mile·knot·ft 등 SI 기반 정의와 일치합니다.",
    backToSpeedHub: "← 속도 변환기 (모든 단위)",
    backToUnitConverter: "단위 변환기 홈",
    nonHubTitle: "허브 목록 밖 변환",
    nonHubIntro:
      "카테고리 페이지 그리드는 허브 단위만 나열합니다. 아래 쌍은 허브 밖 단위를 하나 이상 포함합니다(동일한 수식·표 도구).",
    nonHubLine1: "{fromSlug} → {toSlug}",
    nonHubLine2: "{fromName} → {toName}",
  },
  howToConvert: {
    titleTemplate: "{fromPlural}을(를) {toPlural}(으)로 변환하는 방법",
    oneEquals: "이 도구에서 1 {fromSg}은(는) m/s 경유 {mult} {toSg}와 같습니다:",
    factorExplain:
      "1 {fromSg}는 {fromFactor}m/s, 1 {toSg}는 {toFactor}m/s이므로 1 {fromKey} = {fromFactor} ÷ {toFactor} {toKey}입니다.",
    letVFrom:
      "속도를 {fromSg}({fromKey})로 잰 값을 V({fromKey}), {toSg}({toKey})로 잰 값을 V({toKey})라 하면:",
    divideExplain:
      "또는 1 {toKey}에 들어가는 {fromKey} 개수(m/s/{toKey} ÷ m/s/{fromKey})로 나눌 수 있습니다:",
    orLine: "즉: {toSg} = {fromSg} ÷ {divisor}",
    examplesTitle: "예시",
    exampleTitleTemplate: "예시 #{n}: {value} {fromKey}를 {toSg}(으)로 변환",
    resultLabel: "결과:",
    beaufortIntro:
      "Beaufort는 10m 평균풍 기준 이산 풍력(0–12)입니다. WMO식 m/s 대역(풍력에서 출발 시 중간값)을 거쳐 m/s 등가값으로 변환합니다.",
    beaufortFromExplain:
      "Beaufort에서: 입력을 0–12 정수 풍력으로 반올림한 뒤, 해당 풍력의 중간 m/s로 {toSg}(으)로 변환합니다.",
    beaufortToExplain:
      "Beaufort로: 속도를 m/s로 바꾼 뒤 0–12 풍력으로 분류합니다.",
    specialPairExplain:
      "이 쌍은 단위별 고정 m/s 정의를 씁니다(Mach 1·c 포함). 위 계산기 수식 줄처럼 m/s/{fromKey} ÷ m/s/{toKey} 비율을 곱합니다.",
  },
  faqPage: {
    converterLabel: "속도 변환기",
    navFaqLabel: "자주 묻는 질문",
    detailedAnswerSr: "상세 답변",
    relationshipTitle: "관계 설명",
    quickTableTitle: "빠른 변환 표",
    ctaTemplate: "정확한 계산이 필요하면 {label}(으)로 이동",
    backUnitConverter: "단위 변환기",
    moreConvertersTitle: "{unit} 관련 변환기",
    moreConvertersIntro:
      "{unitSg}에서 다른 허브 속도 단위(m/s, km/s, km/h, mph, knot, ft/s, in/s, cm/s, mm/s, Mach, c)로 가는 전용 페이지입니다.",
    moreConvertersLink: "{fromSlug} → {toSlug} ({fromName} → {toName})",
  },
};

export const speedHubContentEn = {
  h1: "Speed Converter",
  subtitle: "unit-converter",
  intro:
    "Convert between m/s, km/s, km/h, mph, knots, fpm, fps, ips, cm/s, mm/s, Mach (ISA), Beaufort wind force, and speed of light c. Metric, imperial, and specialized scales. All Unit Conversions panel included.",
  guideTitle: "Speed Converter Guide",
  sections: [
    {
      title: "Quick start",
      type: "unordered",
      items: [
        "Enter a value and pick source and target units. The result updates as you type.",
        "Use swap to reverse units and copy to copy the result. The All Unit Conversions panel lists your value across every supported speed unit.",
      ],
    },
    {
      title: "Formulas & deeper content",
      type: "paragraphs",
      items: [
        "Need formulas, worked examples, and tables for one pair (e.g. km/h to mph)? Use a dedicated converter from the list above.",
        "Short answers to common questions are in the FAQ section above. All calculations run in your browser; m/s, km/h, mph, knots, ft/s, Mach (ISA), Beaufort, and c are supported.",
      ],
    },
    {
      title: "Example uses",
      type: "unordered",
      items: [
        "Transportation: km/h and mph limits and cruise speeds.",
        "Aviation and marine: knots and Mach.",
        "Weather: Beaufort force vs m/s or knots.",
        "Science teaching: fractions of c vs m/s.",
      ],
    },
  ],
  faq: [
    {
      question: "Which speed units can I convert on this page?",
      answer:
        "You can convert m/s, km/s, km/h, mph, knots, fpm, fps, ips, cm/s, mm/s, Mach, Beaufort, and c.",
    },
    {
      question: "Does this page include fixed speed pair converters?",
      answer: "Yes. You can open dedicated pair pages with formulas and examples.",
    },
    {
      question: "Can I use this for travel and sports checks?",
      answer: "Yes. It works well for quick travel, driving, and sports speed conversions.",
    },
  ],
  backToHub: "← Back to Unit Converter",
};

export const speedHubContentKo = {
  h1: "속도 변환기",
  subtitle: "unit-converter",
  intro:
    "m/s, km/s, km/h, mph, knot, fpm, fps, ips, cm/s, mm/s, Mach(ISA), Beaufort 풍력, 광속 c를 변환합니다. 미터법·야드파운드·특수 척도를 지원합니다. 모든 단위 변환 패널이 포함되어 있습니다.",
  guideTitle: "속도 변환기 가이드",
  sections: [
    {
      title: "빠른 시작",
      type: "unordered",
      items: [
        "값을 입력하고 입력·출력 단위를 선택하세요. 입력과 동시에 결과가 갱신됩니다.",
        "단위 바꾸기로 입·출력을 뒤집고, 복사로 결과를 가져갈 수 있습니다. ‘모든 단위 변환’ 패널에서 지원하는 모든 속도 단위로의 값을 볼 수 있습니다.",
      ],
    },
    {
      title: "수식 및 상세 내용",
      type: "paragraphs",
      items: [
        "한 쌍(예: km/h→mph)에 대한 수식·예시·표가 필요하면 위 목록의 전용 변환기를 사용하세요.",
        "자주 묻는 질문은 위 FAQ 섹션에 있습니다. 모든 계산은 브라우저에서 실행되며, m/s, km/h, mph, knot, ft/s, Mach(ISA), Beaufort, c를 지원합니다.",
      ],
    },
    {
      title: "활용 예시",
      type: "unordered",
      items: [
        "교통: km/h·mph 제한·순항 속도.",
        "항공·해상: knot·Mach.",
        "기상: Beaufort 풍력 vs m/s·knot.",
        "과학 교육: c 분수 vs m/s.",
      ],
    },
  ],
  faq: [
    {
      question: "이 페이지에서 어떤 속도 단위를 변환할 수 있나요?",
      answer: "m/s, km/s, km/h, mph, knot, fpm, fps, ips, cm/s, mm/s, Mach, Beaufort, c를 변환할 수 있습니다.",
    },
    {
      question: "전용 속도 쌍 변환기가 있나요?",
      answer: "예. 수식·예시가 있는 전용 쌍 페이지를 열 수 있습니다.",
    },
    {
      question: "여행·스포츠 속도 확인에 쓸 수 있나요?",
      answer: "예. 운전·스포츠 등 빠른 속도 변환에 적합합니다.",
    },
  ],
  backToHub: "← 단위 변환기로 돌아가기",
};
