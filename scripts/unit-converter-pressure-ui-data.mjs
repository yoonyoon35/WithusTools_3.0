/** Pressure converter hub, pair pages, UnitConverter, FAQ page UI — EN/KO */

export const PRESSURE_UNIT_KEYS = [
  "bar", "atm", "psi", "kgf_cm2", "inhg", "inh2o", "mmh2o",
  "kpa", "hpa", "mbar", "torr", "mmhg", "pa",
];

export const PRESSURE_KEY_TO_SLUG = {
  bar: "bar",
  atm: "atm",
  psi: "psi",
  kgf_cm2: "kgf-cm2",
  inhg: "inhg",
  inh2o: "inh2o",
  mmh2o: "mmh2o",
  kpa: "kpa",
  hpa: "hpa",
  mbar: "mbar",
  torr: "torr",
  mmhg: "mmhg",
  pa: "pa",
};

export const PRESSURE_HUB_KEYS = PRESSURE_UNIT_KEYS;

const unitDescriptionsEn = {
  pa: "The pascal (Pa) is the SI unit of pressure (one newton per square meter). It is the common reference for scientific and engineering work.",
  kpa: "The kilopascal (kPa) equals 1,000 Pa. It appears in HVAC, building science, and many technical specifications.",
  hpa: "The hectopascal (hPa) equals 100 Pa. Meteorologists use hPa for surface charts; 1 hPa equals 1 millibar.",
  bar: "The bar is 100,000 Pa. It is convenient for industrial and approximate atmospheric pressures (1 bar ≈ 1 atm).",
  atm: "The standard atmosphere (atm) is defined as exactly 101,325 Pa. It links legacy chemistry and physics problems to SI.",
  psi: "Pounds-force per square inch (PSI) is common for tires, hydraulics, and US industrial equipment.",
  kgf_cm2: "Kilogram-force per square centimeter (kgf/cm²) is common in pump/compressor and older industrial gauge specifications.",
  inhg: "Inches of mercury (inHg) is used in aviation altimetry and vacuum readings in some US contexts.",
  inh2o: "Inches of water column (inH2O) is common in low-pressure HVAC and duct static-pressure measurements.",
  mmh2o: "Millimeters of water column (mmH2O) is used for very low differential pressure in instrumentation and ventilation.",
  torr: "The torr is defined as 1/760 of a standard atmosphere (≈133.322 Pa). It is widely used in vacuum science alongside pascal.",
  mmhg: "Millimeters of mercury (mmHg) is common in medicine (e.g. blood pressure). Here it uses the same Pa per unit as torr (101325/760 Pa).",
  mbar: "Millibar (mbar) equals 100 Pa and is numerically identical to hPa. It appears in weather and legacy instrument labels.",
};

const unitDescriptionsKo = {
  pa: "파스칼(Pa)은 SI 압력 단위(1N/m²)입니다. 과학·공학의 기준 단위입니다.",
  kpa: "킬로파스칼(kPa)은 1,000 Pa입니다. HVAC·건축·기술 사양에 쓰입니다.",
  hpa: "헥토파스칼(hPa)은 100 Pa입니다. 기상 표면 차트에 쓰이며 1 hPa = 1 mbar입니다.",
  bar: "바(bar)는 100,000 Pa입니다. 산업·대기압 근사(1 bar ≈ 1 atm)에 편리합니다.",
  atm: "표준 대기압(atm)은 정확히 101,325 Pa로 정의됩니다. 화학·물리 문제와 SI를 연결합니다.",
  psi: "PSI(파운드/제곱인치)는 타이어·유압·미국 산업 장비에 흔합니다.",
  kgf_cm2: "kgf/cm²는 펌프·압축기·구형 산업 게이지 사양에 쓰입니다.",
  inhg: "inHg(수은주 인치)는 항공 고도계·진공 표기에 쓰입니다.",
  inh2o: "inH2O(수주 인치)는 저압 HVAC·덕트 정압 측정에 쓰입니다.",
  mmh2o: "mmH2O(수주 밀리미터)는 미세 차압·환기 계측에 쓰입니다.",
  torr: "torr는 표준 대기압의 1/760(≈133.322 Pa)입니다. 진공 과학에 널리 쓰입니다.",
  mmhg: "mmHg(수은주 밀리미터)는 혈압 등 의료에 흔합니다. 여기서는 torr와 동일한 Pa/단위(101325/760)를 씁니다.",
  mbar: "mbar(밀리바)는 100 Pa로 hPa와 수치상 동일합니다. 기상·구형 계기에 나타납니다.",
};

export const pressureUiEn = {
  shared: { copy: "Copy", copied: "Copied!", copyFailed: "Failed to copy" },
  unitDescriptions: unitDescriptionsEn,
  pressureConverter: {
    converterTitle: "Convert Pressure",
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
      cannotConvert: "Cannot convert this pair",
    },
  },
  pressureHub: {
    subtitleBadge: "unit-converter",
    pairGridTitle: "Dedicated converters (SI, meteorology, industrial gauge, and manometric pressure units)",
    pairGridDesc:
      "{count} pages — every pair of units below, with fixed input/output, formulas, examples, and conversion tables.",
    pairLinkTemplate: "{fromSlug} to {toSlug} ({fromName} to {toName})",
    faqSectionTitle: "Common questions (FAQ)",
    faqSectionDesc: "{count} quick answers with guides and links to the matching converter.",
    guideTitle: "Pressure Converter Guide",
  },
  pressurePairCalculator: {
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
      copyFailed: "Failed to copy",
      cannotConvert: "Cannot convert this pair",
    },
  },
  pressurePairPage: {
    subtitleBadge: "Pressure · unit-converter",
    aboutTitle: "About {unit}",
    summaryTitle: "Summary",
    relationshipTitle: "Relationship context",
    conversionTablesTitle: "Conversion tables",
    introTemplate:
      "Convert {fromName} to {toName} with a fixed input and output unit, step-by-step formula line, and reference tables. All calculations bridge through pascal with fixed definitions (standard atmosphere = 101,325 Pa; torr and mmHg = atm/760; plus industrial/manometer units like kgf/cm², inHg, inH2O, and mmH2O).",
    h1Template: "{fromName} to {toName} Converter",
    summaryTemplate:
      "To convert {fromName} to {toName}, multiply the value in {fromKey} by ({fromFactor} Pa per {fromKey}) / ({toFactor} Pa per {toKey}). Equivalently: value_{toKey} = value_{fromKey} × ({fromFactor} / {toFactor}). Numerically, 1 {fromKey} equals {mult} {toKey}.",
    summarySame:
      "To convert {fromName} to {toName}, both units use the same pascal factor ({fromFactor} Pa per unit) in this tool, so the numeric value is unchanged (1:1).",
    relationshipTorrMmhg:
      "You are converting between {fromName} and {toName}. In this tool both use the same pascal factor (standard atmosphere ÷ 760), so numeric values match one-to-one between torr and mmHg.",
    relationshipDefault:
      "Both {fromName} and {toName} are converted by fixed multiples of the pascal. Multiplying by (Pa per {fromKey}) ÷ (Pa per {toKey}) gives the same result as passing through pascal, keeping bar, atm, PSI, kPa, hPa, torr, and mmHg consistent on the hub.",
    backToPressureHub: "← Pressure Converter (all units)",
    backToUnitConverter: "Unit Converter home",
    nonHubTitle: "Conversions outside the hub list",
    nonHubIntro:
      "The grid on the category page lists hub units only. These pairs include at least one unit outside that hub set (same tools: formulas and tables on each page).",
    nonHubLine1: "{fromSlug} to {toSlug}",
    nonHubLine2: "{fromName} to {toName}",
  },
  howToConvert: {
    titleTemplate: "How to convert {fromPlural} to {toPlural}",
    oneEquals: "1 {fromSg} equals {mult} {toSg} in this tool (via pascal):",
    factorExplain:
      "Each {fromSg} carries {fromFactor} Pa and each {toSg} {toFactor} Pa, so one {fromKey} equals {fromFactor} ÷ {toFactor} {toKey}.",
    letPFrom:
      "Let p({fromKey}) be pressure in {fromSg} ({fromKey}), and p({toKey}) in {toSg} ({toKey}). Then:",
    divideExplain:
      "Equivalently, divide by how many {fromKey} fit into one {toKey} (Pa per {toKey} divided by Pa per {fromKey}):",
    orLine: "Or: {toSg} = {fromSg} ÷ {divisor}",
    examplesTitle: "Examples",
    exampleTitleTemplate: "Example #{n}: Convert {value} {fromKey} to {toSg}",
    unknownPair: "Unknown unit pair.",
    extraDerivations: {
      "atm-torr": "By definition, 1 atm = 760 torr.",
      "bar-pa": "1 bar = 100,000 Pa exactly.",
      "hpa-mbar": "1 hPa = 1 mbar (both 100 Pa).",
      "torr-mmhg": "Torr and mmHg share the same pascal factor here (1:1).",
    },
  },
  faqPage: {
    converterLabel: "Pressure Converter",
    navFaqLabel: "FAQ",
    detailedAnswerSr: "Detailed answer",
    relationshipTitle: "Relationship context",
    quickTableTitle: "Quick conversion table",
    ctaTemplate: "Need a precise calculation? Go to {label}",
    backUnitConverter: "Unit Converter",
    moreConvertersTitle: "More {unit} converters",
    moreConvertersIntro:
      "Dedicated pages from {unitSg} to every other hub pressure unit (bar, atm, PSI, kPa, hPa, torr, mmHg, Pa).",
    moreConvertersLink: "{fromSlug} to {toSlug} ({fromName} to {toName})",
  },
};

export const pressureUiKo = {
  shared: { copy: "복사", copied: "복사되었습니다!", copyFailed: "복사에 실패했습니다" },
  unitDescriptions: unitDescriptionsKo,
  pressureConverter: {
    converterTitle: "압력 변환",
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
      copyFailed: "복사에 실패했습니다",
      cannotConvert: "이 쌍은 변환할 수 없습니다",
    },
  },
  pressureHub: {
    subtitleBadge: "unit-converter",
    pairGridTitle: "전용 변환기 (SI, 기상, 산업 게이지, 수주·수은주 압력 단위)",
    pairGridDesc:
      "{count}개 페이지 — 아래 모든 단위 쌍. 고정 입·출력, 수식, 예시, 변환 표가 포함됩니다.",
    pairLinkTemplate: "{fromSlug} → {toSlug} ({fromName} → {toName})",
    faqSectionTitle: "자주 묻는 질문",
    faqSectionDesc: "{count}개의 빠른 답변과 해당 변환기 링크를 제공합니다.",
    guideTitle: "압력 변환기 가이드",
  },
  pressurePairCalculator: {
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
      copyFailed: "복사에 실패했습니다",
      cannotConvert: "이 쌍은 변환할 수 없습니다",
    },
  },
  pressurePairPage: {
    subtitleBadge: "압력 · unit-converter",
    aboutTitle: "{unit} 소개",
    summaryTitle: "요약",
    relationshipTitle: "관계 설명",
    conversionTablesTitle: "변환 표",
    introTemplate:
      "{fromName}을(를) {toName}(으)로 변환합니다. 입·출력 단위가 고정되어 있으며, 단계별 수식과 참고 표를 제공합니다. 모든 계산은 파스칼을 거치며, 표준 대기압=101,325 Pa, torr·mmHg=atm/760, kgf/cm²·inHg·inH2O·mmH2O 등 고정 정의를 씁니다.",
    h1Template: "{fromName} → {toName} 변환기",
    summaryTemplate:
      "{fromName}을(를) {toName}(으)로 변환하려면 {fromKey} 값에 (Pa/{fromKey})를 (Pa/{toKey})로 나눈 비율을 곱합니다. 즉 value_{toKey} = value_{fromKey} × ({fromFactor} / {toFactor}). 수치상 1 {fromKey} = {mult} {toKey}입니다.",
    summarySame:
      "{fromName}과 {toName}은 이 도구에서 동일한 파스칼 계수({fromFactor} Pa/단위)를 쓰므로 수치가 그대로입니다(1:1).",
    relationshipTorrMmhg:
      "{fromName}과 {toName} 사이 변환입니다. 둘 다 표준 대기압÷760의 동일 Pa 계수를 쓰므로 torr와 mmHg는 1:1로 맞습니다.",
    relationshipDefault:
      "{fromName}과 {toName} 모두 파스칼의 고정 배수로 변환됩니다. (Pa/{fromKey})÷(Pa/{toKey})를 곱하면 파스칼 경유와 같으며, bar·atm·PSI·kPa·hPa·torr·mmHg가 허브에서 일관됩니다.",
    backToPressureHub: "← 압력 변환기 (모든 단위)",
    backToUnitConverter: "단위 변환기 홈",
    nonHubTitle: "허브 목록 밖 변환",
    nonHubIntro:
      "카테고리 페이지 그리드는 허브 단위만 나열합니다. 아래 쌍은 허브 밖 단위를 하나 이상 포함합니다(동일한 수식·표 도구).",
    nonHubLine1: "{fromSlug} → {toSlug}",
    nonHubLine2: "{fromName} → {toName}",
  },
  howToConvert: {
    titleTemplate: "{fromPlural}을(를) {toPlural}(으)로 변환하는 방법",
    oneEquals: "1 {fromSg}은(는) 이 도구에서 {mult} {toSg}와 같습니다(파스칼 경유):",
    factorExplain:
      "1 {fromSg}는 {fromFactor} Pa, 1 {toSg}는 {toFactor} Pa이므로 1 {fromKey} = {fromFactor} ÷ {toFactor} {toKey}입니다.",
    letPFrom:
      "{fromSg}({fromKey}) 압력을 p({fromKey}), {toSg}({toKey})를 p({toKey})라 하면:",
    divideExplain:
      "또는 1 {toKey}에 들어가는 {fromKey} 개수(Pa/{toKey} ÷ Pa/{fromKey})로 나눌 수 있습니다:",
    orLine: "즉: {toSg} = {fromSg} ÷ {divisor}",
    examplesTitle: "예시",
    exampleTitleTemplate: "예시 #{n}: {value} {fromKey}를 {toSg}(으)로 변환",
    unknownPair: "알 수 없는 단위 쌍입니다.",
    extraDerivations: {
      "atm-torr": "정의상 1 atm = 760 torr.",
      "bar-pa": "1 bar = 100,000 Pa(정확).",
      "hpa-mbar": "1 hPa = 1 mbar(둘 다 100 Pa).",
      "torr-mmhg": "torr와 mmHg는 여기서 동일 Pa 계수(1:1).",
    },
  },
  faqPage: {
    converterLabel: "압력 변환기",
    navFaqLabel: "자주 묻는 질문",
    detailedAnswerSr: "상세 답변",
    relationshipTitle: "관계 설명",
    quickTableTitle: "빠른 변환 표",
    ctaTemplate: "정확한 계산이 필요하면 {label}(으)로 이동",
    backUnitConverter: "단위 변환기",
    moreConvertersTitle: "{unit} 관련 변환기",
    moreConvertersIntro:
      "{unitSg}에서 다른 허브 압력 단위(bar, atm, PSI, kPa, hPa, torr, mmHg, Pa)로 가는 전용 페이지입니다.",
    moreConvertersLink: "{fromSlug} → {toSlug} ({fromName} → {toName})",
  },
};

export const pressureHubContentEn = {
  h1: "Pressure Converter",
  subtitle: "unit-converter",
  intro:
    "Convert between SI, meteorology, industrial, and column-based pressure units including kgf/cm², inHg, inH2O, mmH2O, torr, and mmHg. All Unit Conversions panel included.",
  guideTitle: "Pressure Converter Guide",
  sections: [
    {
      title: "Quick start",
      type: "unordered",
      items: [
        "Enter a value and pick source and target units. The result updates as you type.",
        "Use swap to reverse units and copy to copy the result. The All Unit Conversions panel lists your value across every supported pressure unit.",
      ],
    },
    {
      title: "Formulas & deeper content",
      type: "paragraphs",
      items: [
        "Need formulas, worked examples, and tables for one pair (e.g. bar to PSI)? Use a dedicated converter from the list below.",
        "Short answers to common questions are in the FAQ section above. All calculations run in your browser; Pa, kPa, hPa, bar, atm, PSI, torr, and mmHg are supported.",
      ],
    },
    {
      title: "Example uses",
      type: "unordered",
      items: [
        "Engineering: tire pressure, hydraulics, and vessel ratings in bar or PSI.",
        "Meteorology: surface pressure in hPa or millibar.",
        "Medicine and vacuum: mmHg, torr, and pascal equivalents.",
      ],
    },
  ],
  faq: [
    {
      question: "Which pressure units are supported?",
      answer:
        "You can convert Pa, kPa, hPa, mbar, bar, atm, PSI, kgf/cm², inHg, inH2O, mmH2O, torr, and mmHg.",
    },
    {
      question: "Can I open dedicated pressure pair pages?",
      answer: "Yes. Pair pages include formulas, examples, and conversion tables.",
    },
    {
      question: "Is this pressure converter useful for engineering checks?",
      answer: "Yes. It is useful for quick pressure conversion checks in engineering and weather workflows.",
    },
  ],
  backToHub: "← Back to Unit Converter",
};

export const pressureHubContentKo = {
  h1: "압력 변환기",
  subtitle: "unit-converter",
  intro:
    "SI, 기상, 산업, 수주·수은주 압력 단위(kgf/cm², inHg, inH2O, mmH2O, torr, mmHg 등)를 변환합니다. 모든 단위 변환 패널이 포함되어 있습니다.",
  guideTitle: "압력 변환기 가이드",
  sections: [
    {
      title: "빠른 시작",
      type: "unordered",
      items: [
        "값을 입력하고 입력·출력 단위를 선택하세요. 입력과 동시에 결과가 갱신됩니다.",
        "단위 바꾸기로 입·출력을 뒤집고, 복사로 결과를 가져갈 수 있습니다. ‘모든 단위 변환’ 패널에서 지원하는 모든 압력 단위로의 값을 볼 수 있습니다.",
      ],
    },
    {
      title: "수식 및 상세 내용",
      type: "paragraphs",
      items: [
        "한 쌍(예: bar→PSI)에 대한 수식·예시·표가 필요하면 아래 목록의 전용 변환기를 사용하세요.",
        "자주 묻는 질문은 위 FAQ 섹션에 있습니다. 계산은 브라우저에서 실행되며 Pa, kPa, hPa, bar, atm, PSI, torr, mmHg를 지원합니다.",
      ],
    },
    {
      title: "활용 예시",
      type: "unordered",
      items: [
        "공학: 타이어·유압·용기 등급(bar/PSI).",
        "기상: 지표면 기압(hPa/mbar).",
        "의료·진공: mmHg, torr, 파스칼 환산.",
      ],
    },
  ],
  faq: [
    {
      question: "어떤 압력 단위를 지원하나요?",
      answer: "Pa, kPa, hPa, mbar, bar, atm, PSI, kgf/cm², inHg, inH2O, mmH2O, torr, mmHg를 변환할 수 있습니다.",
    },
    {
      question: "전용 압력 쌍 페이지가 있나요?",
      answer: "예. 수식, 예시, 변환 표가 있는 쌍 페이지가 있습니다.",
    },
    {
      question: "공학 검산에 쓸 수 있나요?",
      answer: "예. 공학·기상 워크플로에서 빠른 압력 환산에 유용합니다.",
    },
  ],
  backToHub: "← 단위 변환기로 돌아가기",
};
