/** Length converter hub, pair pages, UnitConverter (length), FAQ page UI — EN/KO */

const lengthUnitsEn = {
  nmi: { name: "Nautical Miles", nameSg: "Nautical Mile" },
  mi: { name: "Miles", nameSg: "Mile" },
  chain: { name: "Chains", nameSg: "Chain" },
  km: { name: "Kilometers", nameSg: "Kilometer" },
  m: { name: "Meters", nameSg: "Meter" },
  yd: { name: "Yards", nameSg: "Yard" },
  fathom: { name: "Fathoms", nameSg: "Fathom" },
  ft: { name: "Feet", nameSg: "Feet" },
  in: { name: "Inches", nameSg: "Inch" },
  cm: { name: "Centimeters", nameSg: "Centimeter" },
  mm: { name: "Millimeters", nameSg: "Millimeter" },
  um: { name: "Micrometers", nameSg: "Micrometer" },
  nm: { name: "Nanometers", nameSg: "Nanometer" },
  angstrom: { name: "Angstroms", nameSg: "Angstrom" },
  pm: { name: "Picometers", nameSg: "Picometer" },
};

const lengthUnitsKo = {
  nmi: { name: "해리", nameSg: "해리" },
  mi: { name: "마일", nameSg: "마일" },
  chain: { name: "체인", nameSg: "체인" },
  km: { name: "킬로미터", nameSg: "킬로미터" },
  m: { name: "미터", nameSg: "미터" },
  yd: { name: "야드", nameSg: "야드" },
  fathom: { name: "패덤", nameSg: "패덤" },
  ft: { name: "피트", nameSg: "피트" },
  in: { name: "인치", nameSg: "인치" },
  cm: { name: "센티미터", nameSg: "센티미터" },
  mm: { name: "밀리미터", nameSg: "밀리미터" },
  um: { name: "마이크로미터", nameSg: "마이크로미터" },
  nm: { name: "나노미터", nameSg: "나노미터" },
  angstrom: { name: "옹스트롬", nameSg: "옹스트롬" },
  pm: { name: "피코미터", nameSg: "피코미터" },
};

const unitDescriptionsEn = {
  nmi: "The nautical mile is a non-SI unit of length used in air and sea navigation. It is defined as exactly 1,852 meters (about 1.15078 statute miles).",
  mi: "The statute mile is a US customary and imperial unit equal to exactly 1,609.344 meters. It is widely used for road distances in the United States and the United Kingdom.",
  chain: "The chain is a surveying unit equal to 66 feet (20.1168 meters) exactly. It appears in land measurement and legacy civil engineering records.",
  km: "The kilometer is an SI unit equal to 1,000 meters. It is the standard unit for longer distances in most countries that use the metric system.",
  m: "The meter is the SI base unit of length, defined using the speed of light. It is the foundation for centimeters, millimeters, and kilometers.",
  yd: "The yard is an imperial and US customary unit equal to 0.9144 meters exactly. It appears in sports fields, fabric, and everyday imperial measurements.",
  fathom: "The fathom is an imperial/nautical depth unit equal to 6 feet (1.8288 meters). It is common in marine contexts and charted water depths.",
  ft: "Feet are imperial and US customary units of length; each is exactly 0.3048 meters. Twelve inches make one feet; feet are common in construction and human-scale dimensions.",
  in: "The inch is an imperial and US customary unit equal to exactly 0.0254 meters. Twelve inches equal one feet; it is used for screen sizes, tools, and fine measurements.",
  cm: "The centimeter is a metric unit equal to one hundredth of a meter (0.01 m). It is convenient for everyday objects, paper sizes, and body measurements.",
  mm: "The millimeter is a metric unit equal to one thousandth of a meter (0.001 m). It is used for precision engineering, 3D printing, and small tolerances.",
  um: "The micrometer (micron) is one millionth of a meter. It is used in microscopy, manufacturing tolerances, and fiber optics.",
  nm: "The nanometer is one billionth of a meter. It describes wavelengths of light, semiconductor features, and molecular scales.",
  angstrom: "The angstrom is 10⁻¹⁰ meters (0.1 nanometer). It is commonly used in chemistry, crystallography, and atomic-scale measurements.",
  pm: "The picometer is one trillionth of a meter (10⁻¹² m). It is used for atomic radii and very small structural scales.",
};

const unitDescriptionsKo = {
  nmi: "해리는 항해·항공에서 쓰는 비 SI 길이 단위로, 정확히 1,852미터(약 1.15078 statute mile)로 정의됩니다.",
  mi: "statute mile(육상 마일)은 정확히 1,609.344미터이며 미국·영국 도로 거리에 널리 쓰입니다.",
  chain: "체인은 정확히 66피트(20.1168m)인 측량 단위로, 토지·구 엔지니어링 기록에 등장합니다.",
  km: "킬로미터는 1,000미터인 SI 단위로, 미터법 국가의 긴 거리에 표준으로 쓰입니다.",
  m: "미터는 SI 기본 길이 단위이며, 센티미터·밀리미터·킬로미터의 기준이 됩니다.",
  yd: "야드는 정확히 0.9144미터인 야드파운드 단위로, 스포츠·직물·일상 길이에 쓰입니다.",
  fathom: "패덤은 6피트(1.8288m)인 해양 수심 단위로, 해도·수심 표기에 흔합니다.",
  ft: "피트는 정확히 0.3048미터인 야드파운드 단위로, 12인치가 1피트이며 건축·인체 규모에 많이 쓰입니다.",
  in: "인치는 정확히 0.0254미터이며, 12인치가 1피트입니다. 화면·공구·정밀 치수에 쓰입니다.",
  cm: "센티미터는 미터의 1/100(0.01m)로, 일상 물체·용지·신체 치수에 편리합니다.",
  mm: "밀리미터는 미터의 1/1,000(0.001m)로, 정밀 기계·3D 프린팅·공차에 쓰입니다.",
  um: "마이크로미터(μm)는 미터의 백만분의 일로, 현미경·제조 공차·광섬유에 쓰입니다.",
  nm: "나노미터는 미터의 십억분의 일로, 빛 파장·반도체·분자 규모에 쓰입니다.",
  angstrom: "옹스트롬(Å)은 10⁻¹⁰미터(0.1nm)로, 화학·결정학·원자 규모에 흔합니다.",
  pm: "피코미터는 10⁻¹²미터로, 원자 반경 등 극소 규모에 쓰입니다.",
};

export const lengthUiEn = {
  shared: {
    copy: "Copy",
    copied: "Copied!",
    copyFailed: "Failed to copy",
  },
  units: lengthUnitsEn,
  unitDescriptions: unitDescriptionsEn,
  lengthConverter: {
    converterTitle: "Convert Length",
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
  lengthHub: {
    subtitleBadge: "unit-converter",
    pairGridTitle: "Dedicated converters (meter, kilometer, centimeter, millimeter, inch, feet, mile, yard)",
    pairGridDesc: "{count} pages — every pair of units below, with fixed input/output, formulas, examples, and conversion tables.",
    pairLinkTemplate: "{fromSlug} to {toSlug} ({fromName} to {toName})",
    faqSectionTitle: "Common questions (FAQ)",
    faqSectionDesc: "{count} quick answers with guides and links to the matching converter.",
    guideTitle: "Length Converter Guide",
    guideQuickStart: "Quick start",
    guideFormulas: "Formulas & deeper content",
    guideExampleUses: "Example uses",
  },
  lengthPairCalculator: {
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
  lengthPairPage: {
    subtitleBadge: "Length · unit-converter",
    aboutTitle: "About {unit}",
    summaryTitle: "Summary",
    relationshipTitle: "Relationship context",
    conversionTablesTitle: "Conversion tables",
    introTemplate:
      "Convert {fromName} to {toName} with a fixed input and output unit, step-by-step formula line, and reference tables. All calculations use SI-based definitions (international yard, nautical mile, etc.).",
    h1Template: "{fromName} to {toName} Converter",
    summaryTemplate:
      "To convert {fromName} to {toName}, multiply the value in {fromKey} by the ratio of meters per {fromKey} divided by meters per {toKey}. Equivalently: value_{toKey} = value_{fromKey} × ({fromFactor} / {toFactor}). Numerically, 1 {fromKey} equals {mult} {toKey}.",
    relationshipMetric:
      "Both units are metric (SI) and tied to the meter. Converting between them uses powers of ten (or simple rational factors), so the relationship is exact in decimal arithmetic. The factor from {fromName} to {toName} is {multExp} (1 {fromKey} = {mult} {toKey}).",
    relationshipImperial:
      "Both units belong to US customary / imperial length. Conversions often use simple ratios (for example inches and feet), while miles relate to yards and feet through fixed definitions. The numeric factor used here is traceable to the international inch (0.0254 m) and related definitions.",
    relationshipCross:
      "You are converting between {fromSystem} ({fromName}) and {toSystem} ({toName}). Metric units are decimal; imperial units use inches, feet, yards, and miles tied to the international yard definition. Nautical miles are defined in meters (1 nmi = 1,852 m). This tool uses SI-based factors so results stay consistent with modern standards.",
    relationshipDefault:
      "Length units are converted via their exact definitions in meters. The multiplier between {fromKey} and {toKey} is {multExp}.",
    systemMetric: "metric (SI)",
    systemImperial: "US customary / imperial",
    systemNautical: "nautical (navigation)",
    backToLengthHub: "← Length Converter (all units)",
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
      "Each {fromSg} is defined as {fromFactor} m and each {toSg} as {toFactor} m, so one {fromKey} equals {fromFactor} ÷ {toFactor} {toKey} = {mult} {toKey}.",
    letDFrom:
      "Let d({fromKey}) be the numeric value of the same length measured in {fromSg} ({fromKey}), and d({toKey}) the value in {toSg} ({toKey}). Then:",
    divideExplain:
      "Equivalently, divide by how many {fromKey} fit into one {toKey} (meters per {toKey} divided by meters per {fromKey}):",
    orLine: "Or: {toSg} = {fromSg} ÷ {divisor}",
    examplesTitle: "Examples",
    exampleTitleTemplate: "Example #{n}: Convert {value} {fromKey} to {toSg}",
    extraDerivations: {
      "cm-ft": "1 centimeter is also equal to 1 ÷ 2.54 ÷ 12 feet (via inches: 1 cm = 1/2.54 in, 1 ft = 12 in), which equals {mult} ft.",
      "cm-in": "1 centimeter = 1/2.54 inch (international inch: 1 in = 2.54 cm).",
      "in-ft": "1 inch = 1/12 feet (12 inches per feet).",
      "ft-in": "1 feet = 12 inches (exactly).",
      "cm-mm": "1 centimeter = 10 millimeters (metric).",
      "mm-cm": "1 millimeter = 1/10 centimeter.",
    },
  },
  faqPage: {
    converterLabel: "Length Converter",
    navFaqLabel: "FAQ",
    detailedAnswerSr: "Detailed answer",
    relationshipTitle: "Relationship context",
    quickTableTitle: "Quick conversion table",
    ctaTemplate: "Need a precise calculation? Go to {label}",
    backUnitConverter: "Unit Converter",
    moreConvertersTitle: "More {unit} converters",
    moreConvertersIntro:
      "Dedicated pages from {unitSg} to every other common length unit (meter, kilometer, centimeter, millimeter, inch, feet, mile, yard).",
    moreConvertersLink: "{fromSlug} to {toSlug} ({fromName} to {toName})",
  },
};

export const lengthUiKo = {
  shared: {
    copy: "복사",
    copied: "복사되었습니다!",
    copyFailed: "복사에 실패했습니다",
  },
  units: lengthUnitsKo,
  unitDescriptions: unitDescriptionsKo,
  lengthConverter: {
    converterTitle: "길이 변환",
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
  lengthHub: {
    subtitleBadge: "unit-converter",
    pairGridTitle: "전용 변환기 (미터, 킬로미터, 센티미터, 밀리미터, 인치, 피트, 마일, 야드)",
    pairGridDesc: "{count}개 페이지 — 아래 모든 단위 쌍. 고정 입·출력, 수식, 예시, 변환 표가 포함됩니다.",
    pairLinkTemplate: "{fromSlug} → {toSlug} ({fromName} → {toName})",
    faqSectionTitle: "자주 묻는 질문",
    faqSectionDesc: "{count}개의 빠른 답변과 해당 변환기 링크를 제공합니다.",
    guideTitle: "길이 변환기 가이드",
    guideQuickStart: "빠른 시작",
    guideFormulas: "수식 및 상세 내용",
    guideExampleUses: "활용 예시",
  },
  lengthPairCalculator: {
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
  lengthPairPage: {
    subtitleBadge: "길이 · unit-converter",
    aboutTitle: "{unit} 소개",
    summaryTitle: "요약",
    relationshipTitle: "관계 설명",
    conversionTablesTitle: "변환 표",
    introTemplate:
      "{fromName}을(를) {toName}(으)로 변환합니다. 입·출력 단위가 고정되어 있으며, 단계별 수식과 참고 표를 제공합니다. 계산은 SI 기준 정의(국제 야드, 해리 등)를 사용합니다.",
    h1Template: "{fromName} → {toName} 변환기",
    summaryTemplate:
      "{fromName}을(를) {toName}(으)로 변환하려면 {fromKey} 값에 ‘미터당 {fromKey}’를 ‘미터당 {toKey}’로 나눈 비율을 곱합니다. 즉 value_{toKey} = value_{fromKey} × ({fromFactor} / {toFactor}). 수치상 1 {fromKey} = {mult} {toKey}입니다.",
    relationshipMetric:
      "두 단위 모두 미터법(SI)이며 미터에 연결됩니다. 10의 거듭제곱 또는 단순 유리 비율로 변환하므로 십진 계산에서 정확합니다. {fromName}→{toName} 계수는 {multExp} (1 {fromKey} = {mult} {toKey}).",
    relationshipImperial:
      "두 단위 모두 야드파운드 길이입니다. 인치·피트처럼 단순 비율이 많고, 마일은 야드·피트와 고정 정의로 연결됩니다. 여기서 쓰는 계수는 국제 인치(0.0254m) 등에 기반합니다.",
    relationshipCross:
      "{fromSystem}({fromName})과 {toSystem}({toName}) 사이 변환입니다. 미터법은 십진이고, 야드파운드는 인치·피트·야드·마일이 국제 야드 정의에 묶입니다. 해리는 1,852m로 정의됩니다. 이 도구는 SI 기준 계수로 일관된 결과를 냅니다.",
    relationshipDefault:
      "길이 단위는 미터 정의를 통해 변환됩니다. {fromKey}와 {toKey} 사이 배율은 {multExp}입니다.",
    systemMetric: "미터법 (SI)",
    systemImperial: "야드파운드",
    systemNautical: "항해(해상)",
    backToLengthHub: "← 길이 변환기 (모든 단위)",
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
      "1 {fromSg}는 {fromFactor}m, 1 {toSg}는 {toFactor}m로 정의되므로 1 {fromKey} = {fromFactor} ÷ {toFactor} {toKey} = {mult} {toKey}입니다.",
    letDFrom:
      "같은 길이를 {fromSg}({fromKey})로 잰 값을 d({fromKey}), {toSg}({toKey})로 잰 값을 d({toKey})라 하면:",
    divideExplain:
      "또는 1 {toKey}에 들어가는 {fromKey} 개수(미터/{toKey} ÷ 미터/{fromKey})로 나눌 수 있습니다:",
    orLine: "즉: {toSg} = {fromSg} ÷ {divisor}",
    examplesTitle: "예시",
    exampleTitleTemplate: "예시 #{n}: {value} {fromKey}를 {toSg}(으)로 변환",
    extraDerivations: {
      "cm-ft": "1cm = 1 ÷ 2.54 ÷ 12 ft(인치 경유: 1cm = 1/2.54in, 1ft = 12in) = {mult} ft.",
      "cm-in": "1cm = 1/2.54인치(국제 인치: 1in = 2.54cm).",
      "in-ft": "1인치 = 1/12피트(12인치 = 1피트).",
      "ft-in": "1피트 = 12인치(정확).",
      "cm-mm": "1센티미터 = 10밀리미터(미터법).",
      "mm-cm": "1밀리미터 = 1/10센티미터.",
    },
  },
  faqPage: {
    converterLabel: "길이 변환기",
    navFaqLabel: "자주 묻는 질문",
    detailedAnswerSr: "상세 답변",
    relationshipTitle: "관계 설명",
    quickTableTitle: "빠른 변환 표",
    ctaTemplate: "정확한 계산이 필요하면 {label}(으)로 이동",
    backUnitConverter: "단위 변환기",
    moreConvertersTitle: "{unit} 관련 변환기",
    moreConvertersIntro:
      "{unitSg}에서 다른 일반 길이 단위(미터, 킬로미터, 센티미터, 밀리미터, 인치, 피트, 마일, 야드)로 가는 전용 페이지입니다.",
    moreConvertersLink: "{fromSlug} → {toSlug} ({fromName} → {toName})",
  },
};

export const lengthHubContentEn = {
  h1: "Length Converter",
  subtitle: "unit-converter",
  intro:
    "Convert between metric, imperial, nautical, and micro-scale length units. All Unit Conversions panel included.",
  guideTitle: "Length Converter Guide",
  sections: [
    {
      title: "Quick start",
      type: "unordered",
      items: [
        "Enter a value and pick source and target units. The result updates as you type.",
        "Use swap to reverse units and copy to copy the result. The All Unit Conversions panel lists your value across every supported length unit.",
      ],
    },
    {
      title: "Formulas & deeper content",
      type: "paragraphs",
      items: [
        "Need formulas, worked examples, and tables for one pair (e.g. meters to feet)? Use a dedicated converter from the list above.",
        "Short answers to common questions are in the FAQ section above. All calculations run in your browser; metric, imperial, and nautical length units are supported.",
      ],
    },
    {
      title: "Example uses",
      type: "unordered",
      items: [
        "Construction: room sizes, material lengths.",
        "Real estate: listings in metric or imperial.",
        "Travel: distances in km or miles.",
      ],
    },
  ],
  faq: [
    {
      question: "Which length units can I convert here?",
      answer:
        "You can convert metric, imperial, nautical, and micro-scale units including meter, kilometer, mile, nautical mile, chain, fathom, micrometer, nanometer, angstrom, and picometer.",
    },
    {
      question: "Can I open a dedicated meter-to-feet style page?",
      answer:
        "Yes. This page lists dedicated pair converters with formulas, examples, and reference tables.",
    },
    {
      question: "Does this length converter run in the browser?",
      answer: "Yes. Calculations run locally in your browser.",
    },
  ],
  backToHub: "← Back to Unit Converter",
};

export const lengthHubContentKo = {
  h1: "길이 변환기",
  subtitle: "unit-converter",
  intro:
    "미터법, 야드파운드, 항해, 미세 길이 단위를 변환합니다. 모든 단위 변환 패널이 포함되어 있습니다.",
  guideTitle: "길이 변환기 가이드",
  sections: [
    {
      title: "빠른 시작",
      type: "unordered",
      items: [
        "값을 입력하고 입력·출력 단위를 선택하세요. 입력과 동시에 결과가 갱신됩니다.",
        "단위 바꾸기로 입·출력을 뒤집고, 복사로 결과를 가져갈 수 있습니다. ‘모든 단위 변환’ 패널에서 지원하는 모든 길이 단위로의 값을 한눈에 볼 수 있습니다.",
      ],
    },
    {
      title: "수식 및 상세 내용",
      type: "paragraphs",
      items: [
        "한 쌍(예: 미터→피트)에 대한 수식·예시·표가 필요하면 위 목록의 전용 변환기를 사용하세요.",
        "자주 묻는 질문은 위 FAQ 섹션에 있습니다. 모든 계산은 브라우저에서 실행되며, 미터법·야드파운드·항해 단위를 지원합니다.",
      ],
    },
    {
      title: "활용 예시",
      type: "unordered",
      items: [
        "건축: 방 크기, 자재 길이.",
        "부동산: 미터법·야드파운드 매물 정보.",
        "여행: km 또는 mile 거리.",
      ],
    },
  ],
  faq: [
    {
      question: "여기서 어떤 길이 단위를 변환할 수 있나요?",
      answer:
        "미터, 킬로미터, 마일, 해리, 체인, 패덤, 마이크로미터, 나노미터, 옹스트롬, 피코미터 등 미터법·야드파운드·항해·미세 단위를 변환할 수 있습니다.",
    },
    {
      question: "미터→피트 같은 전용 페이지를 열 수 있나요?",
      answer: "예. 수식, 예시, 참고 표가 있는 전용 쌍 변환기 목록이 있습니다.",
    },
    {
      question: "길이 변환기는 브라우저에서 실행되나요?",
      answer: "예. 계산은 브라우저에서 로컬로 처리됩니다.",
    },
  ],
  backToHub: "← 단위 변환기로 돌아가기",
};

export const LENGTH_UNIT_KEYS = [
  "nmi", "mi", "chain", "km", "m", "yd", "fathom", "ft", "in", "cm", "mm", "um", "nm", "angstrom", "pm",
];

export const LENGTH_KEY_TO_SLUG = {
  nmi: "nmi", mi: "mile", chain: "chain", km: "km", m: "m", yd: "yard", fathom: "fathom",
  ft: "feet", in: "inch", cm: "cm", mm: "mm", um: "um", nm: "nm", angstrom: "angstrom", pm: "pm",
};

export const LENGTH_HUB_KEYS = ["m", "km", "cm", "mm", "in", "ft", "mi", "yd"];
