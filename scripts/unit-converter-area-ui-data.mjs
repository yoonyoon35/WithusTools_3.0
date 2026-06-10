/** Area converter hub, pair pages, UnitConverter, FAQ page UI — EN/KO */

export const AREA_UNIT_KEYS = [
  "mi2", "km2", "ha", "daa", "a", "ac", "pyeong", "tsubo", "m2", "yd2", "ft2", "cm2", "in2",
];

export const AREA_KEY_TO_SLUG = {
  mi2: "sq-mile",
  km2: "sq-km",
  ha: "hectare",
  daa: "decare",
  a: "are",
  ac: "acre",
  pyeong: "pyeong",
  tsubo: "tsubo",
  m2: "sq-m",
  yd2: "sq-yard",
  ft2: "sq-ft",
  cm2: "sq-cm",
  in2: "sq-inch",
};

export const AREA_HUB_KEYS = [
  "m2", "cm2", "km2", "ha", "daa", "a", "ac", "pyeong", "tsubo", "ft2", "yd2", "in2", "mi2",
];

const unitDescriptionsEn = {
  mi2: "The square mile is an imperial and US customary unit of area equal to the area of a square one statute mile on a side. It is common for large land parcels and geography in the US and UK.",
  km2: "The square kilometer is a metric unit equal to one million square meters. It is standard for city sizes, large properties, and regional planning in metric countries.",
  ha: "The hectare is 10,000 square meters (100 m × 100 m). It is widely used for farmland, forests, and land registration outside the US.",
  daa: "The decare equals 1,000 m² (10 ares). It is used in agriculture and land records in parts of Europe and the Middle East.",
  a: "The are is 100 m². It is a metric land-area unit that sits between square meters and hectares.",
  ac: "The international acre is 4,046.8564224 m² by definition. Acres are standard for rural and suburban land in the US and still appear in UK property contexts.",
  pyeong: "Pyeong is a Korean traditional area unit used in real estate practice; 1 pyeong is about 3.305785 m².",
  tsubo: "Tsubo is a Japanese traditional area unit used in architecture and property contexts; 1 tsubo is about 3.305785 m².",
  m2: "The square meter is the SI derived unit of area. Floor plans, building codes, and science typically use square meters.",
  yd2: "The square yard is 9 square feet (3 ft × 3 ft). It appears in some sports fields, fabric, and older imperial measurements.",
  ft2: "Square feet (ft²) measure area; one ft² is a square with sides of 0.3048 m (international feet-based definitions). Real estate, interior design, and HVAC often use square feet.",
  cm2: "The square centimeter is one ten-thousandth of a square meter. Small objects, paper sizes, and biology use square centimeters.",
  in2: "The square inch is the area of a square one inch on a side. Displays, machining, and small parts often reference square inches.",
};

const unitDescriptionsKo = {
  mi2: "제곱마일은 1 statute mile 한 변의 정사각형 면적로, 미국·영국에서 대규모 토지·지리에 쓰입니다.",
  km2: "제곱킬로미터는 100만 m²의 미터법 단위로, 도시 규모·대규모 부지에 표준입니다.",
  ha: "헥타르(ha)는 10,000m²(100m×100m)로, 농지·산림·토지 등록에 널리 쓰입니다.",
  daa: "데카르(daa)는 1,000m²(10아르)로, 유럽·중동 일부 농업·토지 기록에 쓰입니다.",
  a: "아르(a)는 100m²의 미터법 토지 면적 단위입니다.",
  ac: "국제 에이커(ac)는 정의상 4,046.8564224m²입니다. 미국 농촌·교외 토지에 표준입니다.",
  pyeong: "평(pyeong)은 한국 부동산에서 쓰는 전통 면적 단위로, 1평 ≈ 3.305785m²입니다.",
  tsubo: "츠보(tsubo)는 일본 건축·부동산 전통 면적 단위로, 1츠보 ≈ 3.305785m²입니다.",
  m2: "제곱미터(m²)는 SI 유도 면적 단위로, 평면도·건축·과학에 표준입니다.",
  yd2: "제곱야드(yd²)는 9ft²(3ft×3ft)입니다. 스포츠·원단·구 야드파운드 측정에 등장합니다.",
  ft2: "제곱피트(ft²)는 국제 피트(0.3048m) 기준 면적로, 부동산·인테리어·HVAC에 흔합니다.",
  cm2: "제곱센티미터(cm²)는 m²의 1/10,000으로, 소형 물체·용지·생물학에 쓰입니다.",
  in2: "제곱인치(in²)는 1인치 정사각형 면적으로, 디스플레이·가공·소형 부품에 쓰입니다.",
};

export const areaUiEn = {
  shared: { copy: "Copy", copied: "Copied!", copyFailed: "Failed to copy" },
  unitDescriptions: unitDescriptionsEn,
  areaConverter: {
    converterTitle: "Convert Area",
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
  areaHub: {
    subtitleBadge: "unit-converter",
    pairGridTitle: "Dedicated converters (metric, imperial, and regional area units)",
    pairGridDesc:
      "{count} pages — every pair of units below, with fixed input/output, formulas, examples, and conversion tables.",
    pairLinkTemplate: "{fromSlug} to {toSlug} ({fromName} to {toName})",
    faqSectionTitle: "Common questions (FAQ)",
    faqSectionDesc: "{count} quick answers with guides and links to the matching converter.",
    guideTitle: "Area Converter Guide",
  },
  areaPairCalculator: {
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
  areaPairPage: {
    subtitleBadge: "Area · unit-converter",
    aboutTitle: "About {unit}",
    summaryTitle: "Summary",
    relationshipTitle: "Relationship context",
    conversionTablesTitle: "Conversion tables",
    introTemplate:
      "Convert {fromName} to {toName} with a fixed input and output unit, step-by-step formula line, and reference tables. All calculations use square-meter-based definitions (international feet / yard standards, acre, hectare, and regional units like pyeong/tsubo).",
    h1Template: "{fromName} to {toName} Converter",
    summaryTemplate:
      "To convert {fromName} to {toName}, multiply the value in {fromKey} by the ratio of square meters per {fromKey} divided by square meters per {toKey}. Equivalently: value_{toKey} = value_{fromKey} × ({fromFactor} / {toFactor}). Numerically, 1 {fromKey} equals {mult} {toKey}.",
    relationshipMetric:
      "Both units are metric (SI) and tied to the square meter. Conversions use exact ratios from their m² definitions. The factor from {fromName} to {toName} is {multExp} (1 {fromKey} = {mult} {toKey}).",
    relationshipImperial:
      "Both units belong to US customary / imperial area measures. Relationships such as 9 ft² per yd² and 43,560 ft² per acre are exact under standard definitions. This tool uses SI-based square-meter factors for consistency.",
    relationshipCross:
      "You are converting between {fromSystem} ({fromName}) and {toSystem} ({toName}). Metric area is decimal from the square meter; US/imperial units use feet, yards, miles, and acres tied to international feet (0.3048 m) and related definitions. The numeric factor used here is {multExp}.",
    relationshipDefault:
      "Area units are converted via their exact definitions in square meters. The multiplier between {fromKey} and {toKey} is {multExp}.",
    systemMetric: "metric (SI)",
    systemImperial: "US customary / imperial",
    backToAreaHub: "← Area Converter (all units)",
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
      "Each {fromSg} is defined as {fromFactor} m² and each {toSg} as {toFactor} m², so one {fromKey} equals {fromFactor} ÷ {toFactor} {toKey} = {mult} {toKey}.",
    letAFrom:
      "Let a({fromKey}) be the numeric value of the same area measured in {fromSg} ({fromKey}), and a({toKey}) the value in {toSg} ({toKey}). Then:",
    divideExplain:
      "Equivalently, divide by how many {fromKey} fit into one {toKey} (m² per {toKey} divided by m² per {fromKey}):",
    orLine: "Or: {toSg} = {fromSg} ÷ {divisor}",
    examplesTitle: "Examples",
    exampleTitleTemplate: "Example #{n}: Convert {value} {fromKey} to {toSg}",
    extraDerivations: {
      "ft2-in2": "1 ft² (square feet) = 12 in × 12 in = 144 square inches exactly.",
      "yd2-ft2": "1 square yard = 3 ft × 3 ft = 9 ft² (square feet) exactly.",
      "ac-ft2": "1 acre = 43,560 ft² (square feet) by the US survey / international definition used here.",
      "ha-m2": "1 hectare = 100 m × 100 m = 10,000 m² exactly.",
      "a-m2": "1 are = 100 m² exactly.",
      "daa-m2": "1 decare = 1,000 m² exactly (10 ares).",
      "pyeong-m2": "1 pyeong ≈ 3.305785 m² (used in Korean property listings).",
      "tsubo-m2": "1 tsubo ≈ 3.305785 m² (Japanese traditional area unit).",
      "km2-m2": "1 km² = 1,000 m × 1,000 m = 1,000,000 m² exactly.",
      "m2-cm2": "1 m² = 100 cm × 100 cm = 10,000 cm² exactly.",
    },
  },
  faqPage: {
    converterLabel: "Area Converter",
    navFaqLabel: "FAQ",
    detailedAnswerSr: "Detailed answer",
    relationshipTitle: "Relationship context",
    quickTableTitle: "Quick conversion table",
    ctaTemplate: "Need a precise calculation? Go to {label}",
    backUnitConverter: "Unit Converter",
    moreConvertersTitle: "More {unit} converters",
    moreConvertersIntro:
      "Dedicated pages from {unitSg} to every other common area unit (square meter, square kilometer, hectare, acre, square feet, square yard, square inch, square mile).",
    moreConvertersLink: "{fromSlug} to {toSlug} ({fromName} to {toName})",
  },
};

export const areaUiKo = {
  shared: { copy: "복사", copied: "복사되었습니다!", copyFailed: "복사에 실패했습니다" },
  unitDescriptions: unitDescriptionsKo,
  areaConverter: {
    converterTitle: "면적 변환",
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
  areaHub: {
    subtitleBadge: "unit-converter",
    pairGridTitle: "전용 변환기 (미터법, 야드파운드, 지역 면적 단위)",
    pairGridDesc:
      "{count}개 페이지 — 아래 모든 단위 쌍. 고정 입·출력, 수식, 예시, 변환 표가 포함됩니다.",
    pairLinkTemplate: "{fromSlug} → {toSlug} ({fromName} → {toName})",
    faqSectionTitle: "자주 묻는 질문",
    faqSectionDesc: "{count}개의 빠른 답변과 해당 변환기 링크를 제공합니다.",
    guideTitle: "면적 변환기 가이드",
  },
  areaPairCalculator: {
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
  areaPairPage: {
    subtitleBadge: "면적 · unit-converter",
    aboutTitle: "{unit} 소개",
    summaryTitle: "요약",
    relationshipTitle: "관계 설명",
    conversionTablesTitle: "변환 표",
    introTemplate:
      "{fromName}을(를) {toName}(으)로 변환합니다. 입·출력 단위가 고정되어 있으며, 단계별 수식과 참고 표를 제공합니다. 계산은 m² 기준 정의(국제 피트·야드, 에이커, 헥타르, 평·츠보 등)를 사용합니다.",
    h1Template: "{fromName} → {toName} 변환기",
    summaryTemplate:
      "{fromName}을(를) {toName}(으)로 변환하려면 {fromKey} 값에 ‘m²당 {fromKey}’를 ‘m²당 {toKey}’로 나눈 비율을 곱합니다. 즉 value_{toKey} = value_{fromKey} × ({fromFactor} / {toFactor}). 수치상 1 {fromKey} = {mult} {toKey}입니다.",
    relationshipMetric:
      "두 단위 모두 미터법(SI)이며 제곱미터에 연결됩니다. m² 정의에서 정확한 비율로 변환합니다. {fromName}→{toName} 계수는 {multExp} (1 {fromKey} = {mult} {toKey}).",
    relationshipImperial:
      "두 단위 모두 미국 관습/야드파운드 면적입니다. 9ft²/yd², 43,560ft²/acre 등 표준 정의 비율이 정확하며, 이 도구는 일관성을 위해 m² 기준 계수를 씁니다.",
    relationshipCross:
      "{fromSystem}({fromName})과 {toSystem}({toName}) 사이 변환입니다. 미터법은 m² 기준 십진이고, 미국/야드파운드는 국제 피트(0.3048m) 등에 고정된 ft·yd·mile·acre 정의를 씁니다. 여기서 쓰는 계수는 {multExp}입니다.",
    relationshipDefault:
      "면적 단위는 m² 정의를 통해 변환됩니다. {fromKey}와 {toKey} 사이 배율은 {multExp}입니다.",
    systemMetric: "미터법 (SI)",
    systemImperial: "미국 관습 / 야드파운드",
    backToAreaHub: "← 면적 변환기 (모든 단위)",
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
      "1 {fromSg}는 {fromFactor}m², 1 {toSg}는 {toFactor}m²로 정의되므로 1 {fromKey} = {fromFactor} ÷ {toFactor} {toKey} = {mult} {toKey}입니다.",
    letAFrom:
      "같은 면적을 {fromSg}({fromKey})로 잰 값을 a({fromKey}), {toSg}({toKey})로 잰 값을 a({toKey})라 하면:",
    divideExplain:
      "또는 1 {toKey}에 들어가는 {fromKey} 개수(m²/{toKey} ÷ m²/{fromKey})로 나눌 수 있습니다:",
    orLine: "즉: {toSg} = {fromSg} ÷ {divisor}",
    examplesTitle: "예시",
    exampleTitleTemplate: "예시 #{n}: {value} {fromKey}를 {toSg}(으)로 변환",
    extraDerivations: {
      "ft2-in2": "1ft² = 12in × 12in = 144in²(정확).",
      "yd2-ft2": "1yd² = 3ft × 3ft = 9ft²(정확).",
      "ac-ft2": "1acre = 43,560ft²(여기서 쓰는 국제 정의).",
      "ha-m2": "1ha = 100m × 100m = 10,000m²(정확).",
      "a-m2": "1are = 100m²(정확).",
      "daa-m2": "1decare = 1,000m²(10아르, 정확).",
      "pyeong-m2": "1평 ≈ 3.305785m²(한국 부동산).",
      "tsubo-m2": "1츠보 ≈ 3.305785m²(일본 전통 면적).",
      "km2-m2": "1km² = 1,000m × 1,000m = 1,000,000m²(정확).",
      "m2-cm2": "1m² = 100cm × 100cm = 10,000cm²(정확).",
    },
  },
  faqPage: {
    converterLabel: "면적 변환기",
    navFaqLabel: "자주 묻는 질문",
    detailedAnswerSr: "상세 답변",
    relationshipTitle: "관계 설명",
    quickTableTitle: "빠른 변환 표",
    ctaTemplate: "정확한 계산이 필요하면 {label}(으)로 이동",
    backUnitConverter: "단위 변환기",
    moreConvertersTitle: "{unit} 관련 변환기",
    moreConvertersIntro:
      "{unitSg}에서 다른 일반 면적 단위(m², km², ha, acre, ft², yd², in², mi²)로 가는 전용 페이지입니다.",
    moreConvertersLink: "{fromSlug} → {toSlug} ({fromName} → {toName})",
  },
};

export const areaHubContentEn = {
  h1: "Area Converter",
  subtitle: "unit-converter",
  intro:
    "Convert between metric, imperial, and regional area units including pyeong and tsubo. All Unit Conversions panel included.",
  guideTitle: "Area Converter Guide",
  sections: [
    {
      title: "Quick start",
      type: "unordered",
      items: [
        "Enter a value and pick source and target units. The result updates as you type.",
        "Use swap to reverse units and copy to copy the result. The All Unit Conversions panel lists your value across every supported area unit.",
      ],
    },
    {
      title: "Formulas & deeper content",
      type: "paragraphs",
      items: [
        "Need formulas, worked examples, and tables for one pair (e.g. square meters to square feet)? Use a dedicated converter from the list above.",
        "Short answers to common questions are in the FAQ section above. All calculations run in your browser; metric and imperial area units are supported.",
      ],
    },
    {
      title: "Example uses",
      type: "unordered",
      items: [
        "Real estate: property area in m² or ft².",
        "Agriculture: land in acres or hectares.",
        "Construction: floor area and room sizes.",
      ],
    },
  ],
  faq: [
    {
      question: "Which area units can I convert on this page?",
      answer:
        "You can convert metric, imperial, and regional area units including m², hectare, acre, pyeong, tsubo, and related units.",
    },
    {
      question: "Are pair converters with formulas available?",
      answer: "Yes. Dedicated pair pages include formulas, worked examples, and conversion tables.",
    },
    {
      question: "Does this area converter require signup?",
      answer: "No. It works directly in your browser.",
    },
  ],
  backToHub: "← Back to Unit Converter",
};

export const areaHubContentKo = {
  h1: "면적 변환기",
  subtitle: "unit-converter",
  intro:
    "미터법, 야드파운드, 지역 면적 단위(평, 츠보 포함)를 변환합니다. 모든 단위 변환 패널이 포함되어 있습니다.",
  guideTitle: "면적 변환기 가이드",
  sections: [
    {
      title: "빠른 시작",
      type: "unordered",
      items: [
        "값을 입력하고 입력·출력 단위를 선택하세요. 입력과 동시에 결과가 갱신됩니다.",
        "단위 바꾸기로 입·출력을 뒤집고, 복사로 결과를 가져갈 수 있습니다. ‘모든 단위 변환’ 패널에서 지원하는 모든 면적 단위로의 값을 볼 수 있습니다.",
      ],
    },
    {
      title: "수식 및 상세 내용",
      type: "paragraphs",
      items: [
        "한 쌍(예: m²→ft²)에 대한 수식·예시·표가 필요하면 위 목록의 전용 변환기를 사용하세요.",
        "자주 묻는 질문은 위 FAQ 섹션에 있습니다. 모든 계산은 브라우저에서 실행되며, 미터법·야드파운드 면적 단위를 지원합니다.",
      ],
    },
    {
      title: "활용 예시",
      type: "unordered",
      items: [
        "부동산: m² 또는 ft² 면적.",
        "농업: acre 또는 hectare 토지.",
        "건설: 바닥 면적·방 크기.",
      ],
    },
  ],
  faq: [
    {
      question: "이 페이지에서 어떤 면적 단위를 변환할 수 있나요?",
      answer:
        "m², hectare, acre, 평, 츠보 등 미터법·야드파운드·지역 면적 단위를 변환할 수 있습니다.",
    },
    {
      question: "수식이 있는 쌍 변환기가 있나요?",
      answer: "예. 전용 쌍 페이지에 수식, 예시, 변환 표가 포함되어 있습니다.",
    },
    {
      question: "가입이 필요한가요?",
      answer: "아니요. 브라우저에서 바로 사용할 수 있습니다.",
    },
  ],
  backToHub: "← 단위 변환기로 돌아가기",
};
