/** Weight converter hub, pair pages, UnitConverter (weight), FAQ page UI — EN/KO */

export const WEIGHT_UNIT_KEYS = [
  "t", "cwt_uk", "cwt_us", "lton", "ust", "st", "kg", "lb", "gr", "ct", "g", "oz", "mg", "ug",
];

export const WEIGHT_KEY_TO_SLUG = {
  t: "metric-ton",
  cwt_uk: "uk-hundredweight",
  cwt_us: "us-hundredweight",
  lton: "long-ton",
  ust: "us-ton",
  st: "stone",
  kg: "kg",
  lb: "lb",
  gr: "grain",
  ct: "carat",
  g: "g",
  oz: "oz",
  mg: "mg",
  ug: "ug",
};

export const WEIGHT_HUB_KEYS = [
  "kg", "g", "mg", "ug", "lb", "oz", "gr", "ct", "st", "t", "lton", "ust",
];

const unitDescriptionsEn = {
  t: "The metric ton (tonne) is 1,000 kilograms or one million grams. It is standard for freight, agriculture, and industrial mass in most metric countries.",
  cwt_uk: "The UK hundredweight (long hundredweight) is 112 lb, about 50.802 kg. It appears in legacy UK trade and agriculture references.",
  cwt_us: "The US hundredweight (short hundredweight) is 100 lb, exactly 45.359237 kg from the international pound definition.",
  lton: "The long ton (UK ton) is 2,240 pounds avoirdupois (about 1.016 metric tons). It appears in UK shipping and some historical contexts.",
  ust: "The US short ton is 2,000 pounds avoirdupois (exactly 907.18474 kg in the international avoirdupois pound definition). Common in US freight and industry.",
  st: "The stone is 14 pounds (UK and Ireland). It is often used for human body weight in those regions.",
  kg: "The kilogram is the SI base unit of mass (defined via fundamental constants). Everyday metric weights and science use kilograms and grams.",
  lb: "The international avoirdupois pound is exactly 0.45359237 kg. It is the standard pound for weight in the US and for many trade weights.",
  gr: "The grain is 1/7000 of a pound (exactly 64.79891 mg). It is used in ballistics, pharmacy, and precious-metal contexts.",
  ct: "The metric carat is exactly 0.2 grams (200 mg), commonly used for gemstones and jewelry.",
  g: "The gram is one thousandth of a kilogram. Recipes, lab work, and small masses typically use grams.",
  oz: "The avoirdupois ounce is 1/16 of an avoirdupois pound (about 28.35 g). Cooking and postal weights often use ounces.",
  mg: "The milligram is one thousandth of a gram. Medication doses and fine measurements use milligrams.",
  ug: "The microgram is one millionth of a gram. It appears in pharmacology and trace analysis.",
};

const unitDescriptionsKo = {
  t: "미터 톤(tonne)은 1,000kg 또는 100만 g입니다. 화물·농업·산업 질량에 널리 쓰입니다.",
  cwt_uk: "영국 hundredweight(장 hundredweight)는 112lb(약 50.802kg)로, 구 영국 무역·농업 기록에 등장합니다.",
  cwt_us: "미국 hundredweight(단 hundredweight)는 100lb로, 국제 파운드 정의상 정확히 45.359237kg입니다.",
  lton: "장 톤(영국 톤)은 2,240 avoirdupois lb(약 1.016 미터 톤)입니다. 영국 선박·역사적 맥락에 쓰입니다.",
  ust: "미국 단 톤(short ton)은 2,000 avoirdupois lb(907.18474kg)입니다. 미국 화물·산업에 흔합니다.",
  st: "스톤(stone)은 14파운드이며 영국·아일랜드에서 체중 표기에 자주 쓰입니다.",
  kg: "킬로그램은 SI 기본 질량 단위입니다. 일상·과학에서 표준으로 쓰입니다.",
  lb: "국제 avoirdupois 파운드는 정확히 0.45359237kg입니다. 미국·무역 무게의 표준입니다.",
  gr: "그레인(grain)은 1/7000 파운드(64.79891mg)로, 탄도·약학·귀금속에 쓰입니다.",
  ct: "미터 캐럿(carat)은 정확히 0.2g(200mg)로, 보석·주얼리에 쓰입니다.",
  g: "그램은 킬로그램의 1/1,000입니다. 요리·실험·소량 질량에 쓰입니다.",
  oz: "avoirdupois 온스는 1/16 파운드(약 28.35g)입니다. 요리·우편 무게에 흔합니다.",
  mg: "밀리그램은 그램의 1/1,000입니다. 약물·정밀 측정에 쓰입니다.",
  ug: "마이크로그램은 그램의 백만분의 일입니다. 약학·미량 분석에 쓰입니다.",
};

export const weightUiEn = {
  shared: { copy: "Copy", copied: "Copied!", copyFailed: "Failed to copy" },
  unitDescriptions: unitDescriptionsEn,
  weightConverter: {
    converterTitle: "Convert Weight",
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
  weightHub: {
    subtitleBadge: "unit-converter",
    pairGridTitle: "Dedicated converters (metric, imperial, and trade mass units)",
    pairGridDesc:
      "{count} pages — every pair of units below, with fixed input/output, formulas, examples, and conversion tables.",
    pairLinkTemplate: "{fromSlug} to {toSlug} ({fromName} to {toName})",
    faqSectionTitle: "Common questions (FAQ)",
    faqSectionDesc: "{count} quick answers with guides and links to the matching converter.",
    guideTitle: "Weight Converter Guide",
  },
  weightPairCalculator: {
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
  weightPairPage: {
    subtitleBadge: "Weight · unit-converter",
    aboutTitle: "About {unit}",
    summaryTitle: "Summary",
    relationshipTitle: "Relationship context",
    conversionTablesTitle: "Conversion tables",
    introTemplate:
      "Convert {fromName} to {toName} with a fixed input and output unit, step-by-step formula line, and reference tables. All calculations use gram-based factors (international avoirdupois pound and metric definitions). The full Weight Converter also includes carat, grain, and US/UK hundredweight.",
    h1Template: "{fromName} to {toName} Converter",
    summaryTemplate:
      "To convert {fromName} to {toName}, multiply the value in {fromKey} by the ratio of grams per {fromKey} divided by grams per {toKey}. Equivalently: value_{toKey} = value_{fromKey} × ({fromFactor} / {toFactor}). Numerically, 1 {fromKey} equals {mult} {toKey}.",
    relationshipMetric:
      "Both units are metric (SI) and tied to the gram via the kilogram. Conversions use exact ratios from their gram definitions. The factor from {fromName} to {toName} is {multExp} (1 {fromKey} = {mult} {toKey}).",
    relationshipImperial:
      "Both units belong to imperial / UK (stone, long ton, pound, ounce). Relationships such as 16 oz per lb and 14 lb per stone are exact in the avoirdupois system; tons use fixed pound counts. This tool uses international definitions tied to the kilogram.",
    relationshipCross:
      "You are converting between {fromSystem} ({fromName}) and {toSystem} ({toName}). Metric mass is decimal from the gram; US and imperial masses use pounds and ounces with fixed definitions relative to the kilogram. The numeric factor used here is {multExp}.",
    relationshipDefault:
      "Mass units are converted via their exact definitions in grams. The multiplier between {fromKey} and {toKey} is {multExp}.",
    systemMetric: "metric (SI)",
    systemImperial: "imperial / UK (stone, long ton, pound, ounce)",
    systemUsMass: "US customary (short ton)",
    backToWeightHub: "← Weight Converter (all units)",
    backToUnitConverter: "Unit Converter home",
    nonHubTitle: "Conversions outside the hub list",
    nonHubIntro:
      "The grid on the category page lists hub units only. These pairs include at least one unit outside that hub set (same tools: formulas and tables on each page).",
    nonHubLine1: "{fromSlug} to {toSlug}",
    nonHubLine2: "{fromName} to {toName}",
  },
  howToConvert: {
    titleTemplate: "How to convert {fromPlural} to {toPlural}",
    oneEquals: "1 {fromSg} is equal to {mult} {toSg}:",
    factorExplain:
      "Each {fromSg} is defined as {fromFactor} g and each {toSg} as {toFactor} g, so one {fromKey} equals {fromFactor} ÷ {toFactor} {toKey} = {mult} {toKey}.",
    letWFrom:
      "Let w({fromKey}) be the numeric value of the same mass measured in {fromSg} ({fromKey}), and w({toKey}) the value in {toSg} ({toKey}). Then:",
    divideExplain:
      "Equivalently, divide by how many {fromKey} fit into one {toKey} (grams per {toKey} divided by grams per {fromKey}):",
    orLine: "Or: {toSg} = {fromSg} ÷ {divisor}",
    examplesTitle: "Examples",
    exampleTitleTemplate: "Example #{n}: Convert {value} {fromKey} to {toSg}",
    extraDerivations: {
      "kg-lb": "1 kilogram is also equal to 1 ÷ 0.45359237 pounds (international pound definition), which matches the gram-based factor used here.",
      "lb-oz": "1 pound = 16 ounces (avoirdupois) exactly.",
      "oz-lb": "1 ounce = 1/16 pound (avoirdupois).",
      "st-lb": "1 stone = 14 pounds exactly (UK/Ireland usage).",
      "g-mg": "1 gram = 1,000 milligrams (metric).",
      "mg-g": "1 milligram = 1/1,000 gram.",
      "t-kg": "1 metric ton = 1,000 kilograms by definition.",
      "ct-g": "1 carat = 0.2 grams exactly (200 mg).",
      "gr-mg": "1 grain = 64.79891 milligrams (1/7000 lb via the international pound).",
    },
  },
  faqPage: {
    converterLabel: "Weight Converter",
    navFaqLabel: "FAQ",
    detailedAnswerSr: "Detailed answer",
    relationshipTitle: "Relationship context",
    quickTableTitle: "Quick conversion table",
    ctaTemplate: "Need a precise calculation? Go to {label}",
    backUnitConverter: "Unit Converter",
    moreConvertersTitle: "More {unit} converters",
    moreConvertersIntro:
      "Dedicated pages from {unitSg} to every other common weight unit (kilogram, gram, milligram, pound, ounce, metric ton, stone, US short ton).",
    moreConvertersLink: "{fromSlug} to {toSlug} ({fromName} to {toName})",
  },
};

export const weightUiKo = {
  shared: { copy: "복사", copied: "복사되었습니다!", copyFailed: "복사에 실패했습니다" },
  unitDescriptions: unitDescriptionsKo,
  weightConverter: {
    converterTitle: "무게 변환",
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
  weightHub: {
    subtitleBadge: "unit-converter",
    pairGridTitle: "전용 변환기 (미터법, 야드파운드, 무역 질량 단위)",
    pairGridDesc:
      "{count}개 페이지 — 아래 모든 단위 쌍. 고정 입·출력, 수식, 예시, 변환 표가 포함됩니다.",
    pairLinkTemplate: "{fromSlug} → {toSlug} ({fromName} → {toName})",
    faqSectionTitle: "자주 묻는 질문",
    faqSectionDesc: "{count}개의 빠른 답변과 해당 변환기 링크를 제공합니다.",
    guideTitle: "무게 변환기 가이드",
  },
  weightPairCalculator: {
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
  weightPairPage: {
    subtitleBadge: "무게 · unit-converter",
    aboutTitle: "{unit} 소개",
    summaryTitle: "요약",
    relationshipTitle: "관계 설명",
    conversionTablesTitle: "변환 표",
    introTemplate:
      "{fromName}을(를) {toName}(으)로 변환합니다. 입·출력 단위가 고정되어 있으며, 단계별 수식과 참고 표를 제공합니다. 계산은 g 기준 계수(국제 avoirdupois 파운드·미터법 정의)를 사용합니다. 전체 무게 변환기에는 캐럿, 그레인, 미국·영국 hundredweight도 포함됩니다.",
    h1Template: "{fromName} → {toName} 변환기",
    summaryTemplate:
      "{fromName}을(를) {toName}(으)로 변환하려면 {fromKey} 값에 ‘g당 {fromKey}’를 ‘g당 {toKey}’로 나눈 비율을 곱합니다. 즉 value_{toKey} = value_{fromKey} × ({fromFactor} / {toFactor}). 수치상 1 {fromKey} = {mult} {toKey}입니다.",
    relationshipMetric:
      "두 단위 모두 미터법(SI)이며 그램·킬로그램에 연결됩니다. g 정의에서 정확한 비율로 변환합니다. {fromName}→{toName} 계수는 {multExp} (1 {fromKey} = {mult} {toKey}).",
    relationshipImperial:
      "두 단위 모두 야드파운드/영국 계열입니다. 16oz = 1lb, 14lb = 1st 등 avoirdupois 비율이 정확하며, 톤은 고정 파운드 수로 정의됩니다. 국제 정의(kg 연동)를 사용합니다.",
    relationshipCross:
      "{fromSystem}({fromName})과 {toSystem}({toName}) 사이 변환입니다. 미터법은 g 기준 십진이고, 미국·야드파운드는 kg에 고정된 lb·oz 정의를 씁니다. 여기서 쓰는 계수는 {multExp}입니다.",
    relationshipDefault:
      "질량 단위는 g 정의를 통해 변환됩니다. {fromKey}와 {toKey} 사이 배율은 {multExp}입니다.",
    systemMetric: "미터법 (SI)",
    systemImperial: "야드파운드/영국 (stone, long ton, lb, oz)",
    systemUsMass: "미국 관습 (short ton)",
    backToWeightHub: "← 무게 변환기 (모든 단위)",
    backToUnitConverter: "단위 변환기 홈",
    nonHubTitle: "허브 목록 밖 변환",
    nonHubIntro:
      "카테고리 페이지 그리드는 허브 단위만 나열합니다. 아래 쌍은 허브 밖 단위를 하나 이상 포함합니다(동일한 수식·표 도구).",
    nonHubLine1: "{fromSlug} → {toSlug}",
    nonHubLine2: "{fromName} → {toName}",
  },
  howToConvert: {
    titleTemplate: "{fromPlural}을(를) {toPlural}(으)로 변환하는 방법",
    oneEquals: "1 {fromSg}은(는) {mult} {toSg}와 같습니다:",
    factorExplain:
      "1 {fromSg}는 {fromFactor}g, 1 {toSg}는 {toFactor}g로 정의되므로 1 {fromKey} = {fromFactor} ÷ {toFactor} {toKey} = {mult} {toKey}입니다.",
    letWFrom:
      "같은 질량을 {fromSg}({fromKey})로 잰 값을 w({fromKey}), {toSg}({toKey})로 잰 값을 w({toKey})라 하면:",
    divideExplain:
      "또는 1 {toKey}에 들어가는 {fromKey} 개수(g/{toKey} ÷ g/{fromKey})로 나눌 수 있습니다:",
    orLine: "즉: {toSg} = {fromSg} ÷ {divisor}",
    examplesTitle: "예시",
    exampleTitleTemplate: "예시 #{n}: {value} {fromKey}를 {toSg}(으)로 변환",
    extraDerivations: {
      "kg-lb": "1kg = 1 ÷ 0.45359237lb(국제 파운드 정의)이며, 여기 g 기준 계수와 일치합니다.",
      "lb-oz": "1파운드 = 16온스(avoirdupois, 정확).",
      "oz-lb": "1온스 = 1/16파운드(avoirdupois).",
      "st-lb": "1스톤 = 14파운드(영국·아일랜드, 정확).",
      "g-mg": "1그램 = 1,000밀리그램(미터법).",
      "mg-g": "1밀리그램 = 1/1,000그램.",
      "t-kg": "1미터 톤 = 1,000킬로그램(정의).",
      "ct-g": "1캐럿 = 0.2g(200mg, 정확).",
      "gr-mg": "1그레인 = 64.79891mg(국제 파운드 기준 1/7000 lb).",
    },
  },
  faqPage: {
    converterLabel: "무게 변환기",
    navFaqLabel: "자주 묻는 질문",
    detailedAnswerSr: "상세 답변",
    relationshipTitle: "관계 설명",
    quickTableTitle: "빠른 변환 표",
    ctaTemplate: "정확한 계산이 필요하면 {label}(으)로 이동",
    backUnitConverter: "단위 변환기",
    moreConvertersTitle: "{unit} 관련 변환기",
    moreConvertersIntro:
      "{unitSg}에서 다른 일반 무게 단위(kg, g, mg, lb, oz, 미터 톤, stone, US short ton)로 가는 전용 페이지입니다.",
    moreConvertersLink: "{fromSlug} → {toSlug} ({fromName} → {toName})",
  },
};

export const weightHubContentEn = {
  h1: "Weight Converter",
  subtitle: "unit-converter",
  intro:
    "Convert between metric, imperial, and trade mass units including carat, grain, and hundredweight. All Unit Conversions panel included.",
  guideTitle: "Weight Converter Guide",
  sections: [
    {
      title: "Quick start",
      type: "unordered",
      items: [
        "Enter a value and pick source and target units. The result updates as you type.",
        "Use swap to reverse units and copy to copy the result. The All Unit Conversions panel lists your value across every supported weight unit.",
      ],
    },
    {
      title: "Formulas & deeper content",
      type: "paragraphs",
      items: [
        "Need formulas, worked examples, and tables for one pair (e.g. kilograms to pounds)? Use a dedicated converter from the list above.",
        "Short answers to common questions are in the FAQ section above. All calculations run in your browser; metric and imperial mass units are supported.",
      ],
    },
    {
      title: "Example uses",
      type: "unordered",
      items: [
        "Cooking: recipe ingredients in grams or ounces.",
        "Shipping: package weight in kg or lb.",
        "Health: body weight in kg or pounds.",
      ],
    },
  ],
  faq: [
    {
      question: "Which weight units are supported?",
      answer:
        "You can convert metric, imperial, and trade units including kg/g/mg/ug, lb/oz/grain/carat, stone, US/UK hundredweight, and metric/US/UK tons.",
    },
    {
      question: "Can I open dedicated unit-pair pages?",
      answer: "Yes. This page links to dedicated pair converters with formulas, examples, and tables.",
    },
    {
      question: "Does this weight converter run locally?",
      answer: "Yes. Calculations run in your browser.",
    },
  ],
  backToHub: "← Back to Unit Converter",
};

export const weightHubContentKo = {
  h1: "무게 변환기",
  subtitle: "unit-converter",
  intro:
    "미터법, 야드파운드, 무역 질량 단위(캐럿, 그레인, hundredweight 포함)를 변환합니다. 모든 단위 변환 패널이 포함되어 있습니다.",
  guideTitle: "무게 변환기 가이드",
  sections: [
    {
      title: "빠른 시작",
      type: "unordered",
      items: [
        "값을 입력하고 입력·출력 단위를 선택하세요. 입력과 동시에 결과가 갱신됩니다.",
        "단위 바꾸기로 입·출력을 뒤집고, 복사로 결과를 가져갈 수 있습니다. ‘모든 단위 변환’ 패널에서 지원하는 모든 무게 단위로의 값을 볼 수 있습니다.",
      ],
    },
    {
      title: "수식 및 상세 내용",
      type: "paragraphs",
      items: [
        "한 쌍(예: kg→lb)에 대한 수식·예시·표가 필요하면 위 목록의 전용 변환기를 사용하세요.",
        "자주 묻는 질문은 위 FAQ 섹션에 있습니다. 모든 계산은 브라우저에서 실행되며, 미터법·야드파운드 질량 단위를 지원합니다.",
      ],
    },
    {
      title: "활용 예시",
      type: "unordered",
      items: [
        "요리: 그램 또는 온스 단위 재료.",
        "배송: kg 또는 lb 포장 무게.",
        "건강: kg 또는 파운드 체중.",
      ],
    },
  ],
  faq: [
    {
      question: "어떤 무게 단위를 지원하나요?",
      answer:
        "kg/g/mg/μg, lb/oz/grain/carat, stone, 미국·영국 hundredweight, 미터/US/영국 톤 등 미터법·야드파운드·무역 단위를 변환할 수 있습니다.",
    },
    {
      question: "전용 단위 쌍 페이지를 열 수 있나요?",
      answer: "예. 수식, 예시, 표가 있는 전용 쌍 변환기 링크가 있습니다.",
    },
    {
      question: "무게 변환기는 로컬에서 실행되나요?",
      answer: "예. 계산은 브라우저에서 처리됩니다.",
    },
  ],
  backToHub: "← 단위 변환기로 돌아가기",
};
