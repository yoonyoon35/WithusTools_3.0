/** Volume converter hub, pair pages, UnitConverter, FAQ page UI — EN/KO */

export const VOLUME_UNIT_KEYS = [
  "m3", "ukgal", "gal", "ft3", "l", "ukqt", "ukpt", "qt", "pt", "ukcup", "cup", "in3", "floz", "ukfloz",
  "tbsp", "uktbsp", "tsp", "uktsp",
];

export const VOLUME_KEY_TO_SLUG = {
  m3: "cubic-meter",
  ukgal: "uk-gallon",
  gal: "us-gallon",
  ft3: "cubic-ft",
  l: "liter",
  ukqt: "uk-quart",
  ukpt: "uk-pint",
  qt: "us-quart",
  pt: "us-pint",
  ukcup: "uk-cup",
  cup: "us-cup",
  in3: "cubic-inch",
  floz: "us-fluid-ounce",
  ukfloz: "uk-fluid-ounce",
  tbsp: "us-tablespoon",
  uktbsp: "uk-tablespoon",
  tsp: "us-teaspoon",
  uktsp: "uk-teaspoon",
};

export const VOLUME_HUB_KEYS = ["l", "m3", "gal", "floz", "ft3", "tbsp", "tsp", "in3"];

const unitDescriptionsEn = {
  m3:
    "The cubic meter is the SI-derived unit of volume. One cubic meter equals 1,000 liters. Engineering, shipping containers, and scientific volumes often use m³.",
  ukgal:
    "The UK imperial gallon is defined as approximately 4.54609 liters. It is larger than the US liquid gallon and is used for fuel and drinks labeling in the UK.",
  gal:
    "The US liquid gallon is defined as 231 cubic inches (about 3.78541 liters). US recipes, fuel economy, and retail liquids typically use US gallons.",
  ft3:
    "The cubic foot is the volume of a cube one foot on a side (about 28.3168 liters). HVAC, construction, and US freight sometimes use cubic feet.",
  l:
    "The liter is a metric unit equal to one cubic decimeter (0.001 m³). Science, global food labeling, and most countries' everyday volumes use liters.",
  ukqt:
    "The UK imperial quart is one quarter of an imperial gallon (about 1.1365 liters). It appears in UK cooking and beverage measures.",
  ukpt:
    "The UK imperial pint is half an imperial quart (about 0.56826 liters). UK draught beer and milk are often sold in pints.",
  qt:
    "The US liquid quart is one quarter of a US gallon (about 0.94635 liters). US cooking and retail packaging use liquid quarts.",
  pt:
    "The US liquid pint is half a US liquid quart (about 0.47318 liters). US recipes and dairy containers often use pints.",
  ukcup:
    "The UK metric cup is often taken as 250 ml in modern recipes, though traditional imperial cups differ; this converter uses the liter-based UK cup factor from the shared table.",
  cup:
    "The US customary cup is 236.588 ml (half a US liquid pint). US baking recipes frequently measure dry and liquid ingredients in cups.",
  in3:
    "The cubic inch is the volume of a cube one inch on a side. Engine displacement in the US and small volumes in machining use cubic inches.",
  floz:
    "The US fluid ounce is 1/128 of a US gallon (about 29.5735 ml). US nutrition labels and recipes use fluid ounces for liquids.",
  ukfloz:
    "The UK fluid ounce is 1/160 of an imperial gallon (about 28.4131 ml). UK recipes and beverages may use imperial fluid ounces.",
  tbsp:
    "The US tablespoon is 1/2 US fluid ounce (about 14.7868 ml). US recipes use tablespoons for cooking volumes.",
  uktbsp:
    "The UK tablespoon is often standardized near 15 ml in modern usage; this tool uses the liter-based UK tablespoon factor from the shared table.",
  tsp:
    "The US teaspoon is 1/6 US fluid ounce (about 4.9289 ml). US recipes use teaspoons for spices and small liquid amounts.",
  uktsp:
    "The UK teaspoon is smaller than many US teaspoons; this tool uses the liter-based UK teaspoon factor from the shared table.",
};

const unitDescriptionsKo = {
  m3: "세제곱미터(m³)는 SI 유도 부피 단위로, 1m³ = 1,000L입니다. 공학·컨테이너·과학 부피에 쓰입니다.",
  ukgal: "영국 갤런(UK gallon)은 약 4.54609L로, 미국 액량 갤런보다 큽니다. 영국 연료·음료 표기에 쓰입니다.",
  gal: "미국 액량 갤런(US gallon)은 231in³(약 3.78541L)로 정의됩니다. 미국 레시피·연비·소매 액체에 쓰입니다.",
  ft3: "세제곱피트(ft³)는 1ft 정사각형 부피(약 28.3168L)로, HVAC·건설·화물에 쓰입니다.",
  l: "리터(L)는 0.001m³(1dm³)의 미터법 단위로, 과학·식품 표기·일상 부피에 표준입니다.",
  ukqt: "영국 쿼트(UK quart)는 영국 갤런의 1/4(약 1.1365L)입니다.",
  ukpt: "영국 파인트(UK pint)는 영국 쿼트의 절반(약 0.56826L)입니다.",
  qt: "미국 액량 쿼트(US quart)는 미국 갤런의 1/4(약 0.94635L)입니다.",
  pt: "미국 액량 파인트(US pint)는 미국 쿼트의 절반(약 0.47318L)입니다.",
  ukcup: "영국 컵은 현대 레시피에서 250ml로 쓰이기도 하며, 이 도구는 공유 테이블의 L 기준 영국 컵 계수를 사용합니다.",
  cup: "미국 컵(US cup)은 236.588ml(미국 파인트의 절반)로, 미국 베이킹에 흔합니다.",
  in3: "세제곱인치(in³)는 1인치 정육면체 부피로, 엔진 배기량·가공 소량에 쓰입니다.",
  floz: "미국 액량 온스(US fl oz)는 미국 갤런의 1/128(약 29.5735ml)입니다.",
  ukfloz: "영국 액량 온스(UK fl oz)는 영국 갤런의 1/160(약 28.4131ml)입니다.",
  tbsp: "미국 큰술(US tbsp)은 미국 액량 온스의 1/2(약 14.7868ml)입니다.",
  uktbsp: "영국 큰술은 보통 15ml 근처로 표준화되며, 이 도구는 공유 테이블의 L 기준 계수를 씁니다.",
  tsp: "미국 작은술(US tsp)은 미국 액량 온스의 1/6(약 4.9289ml)입니다.",
  uktsp: "영국 작은술은 미국보다 작은 경우가 많으며, 이 도구는 공유 테이블의 L 기준 계수를 씁니다.",
};

export const volumeUiEn = {
  shared: { copy: "Copy", copied: "Copied!", copyFailed: "Failed to copy" },
  unitDescriptions: unitDescriptionsEn,
  volumeConverter: {
    converterTitle: "Convert Volume",
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
  volumeHub: {
    subtitleBadge: "unit-converter",
    pairGridTitle: "Dedicated converters (metric, US, and UK volume units)",
    pairGridDesc:
      "{count} pages — every pair of units below, with fixed input/output, formulas, examples, and conversion tables.",
    pairLinkTemplate: "{fromSlug} to {toSlug} ({fromName} to {toName})",
    faqSectionTitle: "Common questions (FAQ)",
    faqSectionDesc: "{count} quick answers with guides and links to the matching converter.",
    guideTitle: "Volume Converter Guide",
  },
  volumePairCalculator: {
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
  volumePairPage: {
    subtitleBadge: "Volume · unit-converter",
    aboutTitle: "About {unit}",
    summaryTitle: "Summary",
    relationshipTitle: "Relationship context",
    conversionTablesTitle: "Conversion tables",
    introTemplate:
      "Convert {fromName} to {toName} with a fixed input and output unit, step-by-step formula line, and reference tables. All calculations use liter-based factors (US fluid measures, imperial UK units, SI cubic meters).",
    h1Template: "{fromName} to {toName} Converter",
    summaryTemplate:
      "To convert {fromName} to {toName}, multiply the value in {fromKey} by the ratio of liters per {fromKey} divided by liters per {toKey}. Equivalently: value_{toKey} = value_{fromKey} × ({fromFactor} / {toFactor}). Numerically, 1 {fromKey} equals {mult} {toKey}.",
    relationshipSame:
      "Both units are {system} in this tool's grouping. Conversions use fixed liter equivalents, so factors are consistent for cooking, engineering, and cross-checking labels. The factor from {fromName} to {toName} is {multExp} (1 {fromKey} = {mult} {toKey}).",
    relationshipCross:
      "You are converting between {fromSystem} ({fromName}) and {toSystem} ({toName}). US and UK fluid measures differ (gallons, ounces, tablespoons); metric liters and cubic meters align with SI. The numeric factor used here is {multExp}.",
    relationshipDefault:
      "Volume units are converted via their exact definitions in liters. The multiplier between {fromKey} and {toKey} is {multExp}.",
    systemMetric: "metric (SI)",
    systemUs: "US customary fluid / volume",
    systemUk: "UK imperial fluid / volume",
    backToVolumeHub: "← Volume Converter (all units)",
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
      "Each {fromSg} is defined as {fromFactor} L and each {toSg} as {toFactor} L, so one {fromKey} equals {fromFactor} ÷ {toFactor} {toKey} = {mult} {toKey}.",
    letVFrom:
      "Let V({fromKey}) be the numeric value of the same volume measured in {fromSg} ({fromKey}), and V({toKey}) the value in {toSg} ({toKey}). Then:",
    divideExplain:
      "Equivalently, divide by how many {fromKey} fit into one {toKey} (liters per {toKey} divided by liters per {fromKey}):",
    orLine: "Or: {toSg} = {fromSg} ÷ {divisor}",
    examplesTitle: "Examples",
    exampleTitleTemplate: "Example #{n}: Convert {value} {fromKey} to {toSg}",
    extraDerivations: {
      "tbsp-tsp": "1 US tablespoon = 3 US teaspoons exactly (1/2 fl oz vs 1/6 fl oz of a US gallon).",
      "tsp-tbsp": "1 US teaspoon = 1/3 US tablespoon.",
      "floz-tbsp": "1 US fluid ounce = 2 US tablespoons (each tbsp is 1/2 fl oz).",
      "m3-l": "1 cubic meter = 1,000 liters by definition (1 m³ = 1000 dm³).",
      "l-m3": "1 liter = 0.001 cubic meter.",
      "gal-l": "1 US liquid gallon = 231 cubic inches, defined in liters here as 3.78541178 L.",
    },
  },
  faqPage: {
    converterLabel: "Volume Converter",
    navFaqLabel: "FAQ",
    detailedAnswerSr: "Detailed answer",
    relationshipTitle: "Relationship context",
    quickTableTitle: "Quick conversion table",
    ctaTemplate: "Need a precise calculation? Go to {label}",
    backUnitConverter: "Unit Converter",
    moreConvertersTitle: "More {unit} converters",
    moreConvertersIntro:
      "Dedicated pages from {unitSg} to every other hub volume unit (liter, cubic meter, US gallon, US fluid ounce, cubic foot, US tablespoon, US teaspoon, cubic inch).",
    moreConvertersLink: "{fromSlug} to {toSlug} ({fromName} to {toName})",
  },
};

export const volumeUiKo = {
  shared: { copy: "복사", copied: "복사되었습니다!", copyFailed: "복사에 실패했습니다" },
  unitDescriptions: unitDescriptionsKo,
  volumeConverter: {
    converterTitle: "부피 변환",
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
  volumeHub: {
    subtitleBadge: "unit-converter",
    pairGridTitle: "전용 변환기 (미터법, 미국, 영국 부피 단위)",
    pairGridDesc:
      "{count}개 페이지 — 아래 모든 단위 쌍. 고정 입·출력, 수식, 예시, 변환 표가 포함됩니다.",
    pairLinkTemplate: "{fromSlug} → {toSlug} ({fromName} → {toName})",
    faqSectionTitle: "자주 묻는 질문",
    faqSectionDesc: "{count}개의 빠른 답변과 해당 변환기 링크를 제공합니다.",
    guideTitle: "부피 변환기 가이드",
  },
  volumePairCalculator: {
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
  volumePairPage: {
    subtitleBadge: "부피 · unit-converter",
    aboutTitle: "{unit} 소개",
    summaryTitle: "요약",
    relationshipTitle: "관계 설명",
    conversionTablesTitle: "변환 표",
    introTemplate:
      "{fromName}을(를) {toName}(으)로 변환합니다. 입·출력 단위가 고정되어 있으며, 단계별 수식과 참고 표를 제공합니다. 계산은 L 기준 계수(미국 액량, 영국 야드파운드, SI m³)를 사용합니다.",
    h1Template: "{fromName} → {toName} 변환기",
    summaryTemplate:
      "{fromName}을(를) {toName}(으)로 변환하려면 {fromKey} 값에 ‘L당 {fromKey}’를 ‘L당 {toKey}’로 나눈 비율을 곱합니다. 즉 value_{toKey} = value_{fromKey} × ({fromFactor} / {toFactor}). 수치상 1 {fromKey} = {mult} {toKey}입니다.",
    relationshipSame:
      "두 단위 모두 이 도구에서 {system}으로 분류됩니다. L 기준 고정 계수로 변환하므로 요리·공학·라벨 대조에 일관됩니다. {fromName}→{toName} 계수는 {multExp} (1 {fromKey} = {mult} {toKey}).",
    relationshipCross:
      "{fromSystem}({fromName})과 {toSystem}({toName}) 사이 변환입니다. 미국·영국 액량은 갤런·온스·큰술 정의가 다르고, 미터법 L·m³는 SI에 맞습니다. 여기서 쓰는 계수는 {multExp}입니다.",
    relationshipDefault:
      "부피 단위는 L 정의를 통해 변환됩니다. {fromKey}와 {toKey} 사이 배율은 {multExp}입니다.",
    systemMetric: "미터법 (SI)",
    systemUs: "미국 관습 액량 / 부피",
    systemUk: "영국 야드파운드 액량 / 부피",
    backToVolumeHub: "← 부피 변환기 (모든 단위)",
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
      "1 {fromSg}는 {fromFactor}L, 1 {toSg}는 {toFactor}L로 정의되므로 1 {fromKey} = {fromFactor} ÷ {toFactor} {toKey} = {mult} {toKey}입니다.",
    letVFrom:
      "같은 부피를 {fromSg}({fromKey})로 잰 값을 V({fromKey}), {toSg}({toKey})로 잰 값을 V({toKey})라 하면:",
    divideExplain:
      "또는 1 {toKey}에 들어가는 {fromKey} 개수(L/{toKey} ÷ L/{fromKey})로 나눌 수 있습니다:",
    orLine: "즉: {toSg} = {fromSg} ÷ {divisor}",
    examplesTitle: "예시",
    exampleTitleTemplate: "예시 #{n}: {value} {fromKey}를 {toSg}(으)로 변환",
    extraDerivations: {
      "tbsp-tsp": "1미국 큰술 = 3미국 작은술(정확, 1/2 fl oz vs 1/6 fl oz).",
      "tsp-tbsp": "1미국 작은술 = 1/3미국 큰술.",
      "floz-tbsp": "1미국 액량 온스 = 2미국 큰술(각 tbsp는 1/2 fl oz).",
      "m3-l": "1m³ = 1,000L(정의, 1m³ = 1000dm³).",
      "l-m3": "1L = 0.001m³.",
      "gal-l": "1미국 액량 갤런 = 231in³, 여기서는 3.78541178L로 정의.",
    },
  },
  faqPage: {
    converterLabel: "부피 변환기",
    navFaqLabel: "자주 묻는 질문",
    detailedAnswerSr: "상세 답변",
    relationshipTitle: "관계 설명",
    quickTableTitle: "빠른 변환 표",
    ctaTemplate: "정확한 계산이 필요하면 {label}(으)로 이동",
    backUnitConverter: "단위 변환기",
    moreConvertersTitle: "{unit} 관련 변환기",
    moreConvertersIntro:
      "{unitSg}에서 다른 허브 부피 단위(L, m³, US gallon, US fl oz, ft³, US tbsp, US tsp, in³)로 가는 전용 페이지입니다.",
    moreConvertersLink: "{fromSlug} → {toSlug} ({fromName} → {toName})",
  },
};

export const volumeHubContentEn = {
  h1: "Volume Converter",
  subtitle: "unit-converter",
  intro:
    "Convert between liters, gallons, cups, fluid ounces, cubic meters, cubic feet, and more. US and UK fluid measures. All Unit Conversions panel included.",
  guideTitle: "Volume Converter Guide",
  sections: [
    {
      title: "Quick start",
      type: "unordered",
      items: [
        "Enter a value and pick source and target units. The result updates as you type.",
        "Use swap to reverse units and copy to copy the result. The All Unit Conversions panel lists your value across every supported volume unit.",
      ],
    },
    {
      title: "Formulas & deeper content",
      type: "paragraphs",
      items: [
        "Need formulas, worked examples, and tables for one pair (e.g. liters to US gallons)? Use a dedicated converter from the list above.",
        "Short answers to common questions are in the FAQ section above. All calculations run in your browser; US, UK, and metric volume units are supported.",
      ],
    },
    {
      title: "Example uses",
      type: "unordered",
      items: [
        "Cooking: recipe volumes in liters, gallons, tablespoons, or teaspoons.",
        "Chemistry and lab work: liters and cubic meters.",
        "Shipping and HVAC: cubic feet and cubic meters.",
      ],
    },
  ],
  faq: [
    {
      question: "What volume units are supported?",
      answer:
        "You can convert volume units like liter, milliliter, gallon, quart, pint, and cubic meter.",
    },
    {
      question: "Can I open dedicated volume pair converters?",
      answer: "Yes. Dedicated pair pages are listed with formulas, examples, and tables.",
    },
    {
      question: "Does conversion happen in-browser?",
      answer: "Yes. This volume converter runs locally in your browser.",
    },
  ],
  backToHub: "← Back to Unit Converter",
};

export const volumeHubContentKo = {
  h1: "부피 변환기",
  subtitle: "unit-converter",
  intro:
    "리터, 갤런, 컵, 액량 온스, 세제곱미터, 세제곱피트 등을 변환합니다. 미국·영국 액량 단위를 지원합니다. 모든 단위 변환 패널이 포함되어 있습니다.",
  guideTitle: "부피 변환기 가이드",
  sections: [
    {
      title: "빠른 시작",
      type: "unordered",
      items: [
        "값을 입력하고 입력·출력 단위를 선택하세요. 입력과 동시에 결과가 갱신됩니다.",
        "단위 바꾸기로 입·출력을 뒤집고, 복사로 결과를 가져갈 수 있습니다. ‘모든 단위 변환’ 패널에서 지원하는 모든 부피 단위로의 값을 볼 수 있습니다.",
      ],
    },
    {
      title: "수식 및 상세 내용",
      type: "paragraphs",
      items: [
        "한 쌍(예: L→US gallon)에 대한 수식·예시·표가 필요하면 위 목록의 전용 변환기를 사용하세요.",
        "자주 묻는 질문은 위 FAQ 섹션에 있습니다. 모든 계산은 브라우저에서 실행되며, 미국·영국·미터법 부피 단위를 지원합니다.",
      ],
    },
    {
      title: "활용 예시",
      type: "unordered",
      items: [
        "요리: L, gallon, tbsp, tsp 단위 레시피.",
        "화학·실험: L와 m³.",
        "물류·HVAC: ft³와 m³.",
      ],
    },
  ],
  faq: [
    {
      question: "어떤 부피 단위를 지원하나요?",
      answer: "L, gallon, quart, pint, m³ 등 미터법·미국·영국 부피 단위를 변환할 수 있습니다.",
    },
    {
      question: "전용 쌍 변환기 페이지가 있나요?",
      answer: "예. 수식, 예시, 변환 표가 있는 전용 쌍 페이지가 목록에 있습니다.",
    },
    {
      question: "브라우저에서 바로 계산되나요?",
      answer: "예. 이 부피 변환기는 브라우저에서 로컬로 실행됩니다.",
    },
  ],
  backToHub: "← 단위 변환기로 돌아가기",
};
