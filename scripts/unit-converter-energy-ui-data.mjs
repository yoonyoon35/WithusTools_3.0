/** Energy converter hub, pair pages, UnitConverter, FAQ page UI — EN/KO */

export const ENERGY_UNIT_KEYS = [
  "toe", "gj", "mmbtu", "therm", "kwh", "kwh_th", "mj", "kcal",
  "wh", "kj", "btu", "cal", "ftlb", "j", "gev", "mev", "ev",
];

/** Dedicated pair pages only (subset of ENERGY_UNIT_KEYS). */
export const ENERGY_HUB_KEYS = [
  "kwh", "kcal", "wh", "btu", "cal", "j", "ev",
];

export const ENERGY_KEY_TO_SLUG = {
  toe: "toe",
  gj: "gigajoule",
  mmbtu: "mmbtu",
  therm: "therm",
  kwh: "kilowatt-hour",
  kwh_th: "kilowatt-hour-thermal",
  mj: "megajoule",
  kcal: "kilocalorie",
  wh: "watt-hour",
  kj: "kilojoule",
  btu: "btu",
  cal: "calorie",
  ftlb: "foot-pound",
  j: "joule",
  gev: "gigaelectronvolt",
  mev: "megaelectronvolt",
  ev: "electronvolt",
};

const unitDescriptionsEn = {
  toe: "A ton of oil equivalent (toe) is a large industrial energy unit standardized at 41.868 GJ. It is common in energy policy and fuel-balance reporting.",
  gj: "One gigajoule is 1,000,000,000 J. Utility-scale and fuel-system reporting commonly use GJ.",
  mmbtu: "MMBtu means one million IT BTU: 1,000,000 × 1,055.05585262 J. It is widely used in gas and thermal energy markets.",
  therm: "A therm is a large US customary energy unit for natural gas (≈ 105.5 MJ here).",
  kwh: "One kilowatt-hour is the energy from 1 kW of power for one hour: 1 kWh = 3,600,000 J. Utility bills and battery specs often use kWh.",
  kwh_th: "Kilowatt-hour (thermal) is shown as a thermal-energy label and uses the same joule definition as kWh (3.6 MJ).",
  mj: "One megajoule is 1,000,000 J. It is common in fuel-content and engineering thermal calculations.",
  kcal: "The kilocalorie (kcal) is 1,000 calories in the nutrition sense—often labeled “Calorie” on food packaging. Here 1 kcal = 4,184 J (thermochemical calorie definition used in this tool).",
  wh: "One watt-hour is 3,600 J—the energy from 1 W for one hour. Common for small batteries and device ratings.",
  kj: "One kilojoule is 1,000 J. Scientific and engineering contexts often use kJ alongside joules.",
  btu: "The British thermal unit used here is the IT BTU: ≈ 1,055.056 J. It appears in HVAC, heating equipment, and US engineering data.",
  cal: "The small calorie (cal) is 4.184 J in this converter (thermochemical). Do not confuse with the dietary kilocalorie (kcal).",
  ftlb: "The feet-pound is a mechanical work unit common in US torque and ballistics contexts.",
  j: "The joule is the SI unit of energy. All other units here are converted through fixed joule equivalents.",
  gev: "A gigaelectronvolt is 10⁹ eV and is used in high-energy physics scales.",
  mev: "A megaelectronvolt is 10⁶ eV and appears in nuclear and particle physics contexts.",
  ev: "The electronvolt is the energy change of one elementary charge across 1 V: 1 eV ≈ 1.602176634×10⁻¹⁹ J (exact by SI definition). Used in particle physics and chemistry.",
};

const unitDescriptionsKo = {
  toe: "석유환산톤(toe)은 41.868 GJ로 표준화된 대규모 산업 에너지 단위입니다. 에너지 정책·연료 수지에 쓰입니다.",
  gj: "기가줄(GJ)은 10⁹ J입니다. 유틸리티·연료 시스템 보고에 흔합니다.",
  mmbtu: "MMBtu는 100만 IT BTU(≈1.055×10⁹ J)입니다. 가스·열 에너지 시장에 널리 쓰입니다.",
  therm: "therm은 미국 관습 천연가스 에너지 단위(여기서 ≈105.5 MJ)입니다.",
  kwh: "킬로와트시(kWh)는 1 kW를 1시간 동안 쓴 에너지(3,600,000 J)입니다. 전기 요금·배터리에 흔합니다.",
  kwh_th: "킬로와트시(열)은 열 에너지 표기이며 kWh와 동일한 줄 정의(3.6 MJ)를 씁니다.",
  mj: "메가줄(MJ)은 10⁶ J입니다. 연료 함량·공학 열 계산에 쓰입니다.",
  kcal: "킬로칼로리(kcal)는 식품 ‘Calorie’에 해당하며, 여기서 1 kcal = 4,184 J(열화학 칼로리)입니다.",
  wh: "와트시(Wh)는 1 W×1시간 = 3,600 J입니다. 소형 배터리·기기에 흔합니다.",
  kj: "킬로줄(kJ)은 1,000 J입니다. 과학·공학에서 줄과 함께 씁니다.",
  btu: "여기 BTU는 IT BTU(≈1,055.056 J)입니다. HVAC·난방·미국 공학 데이터에 나타납니다.",
  cal: "소칼로리(cal)는 여기서 4.184 J(열화학)입니다. 식품 kcal과 혼동하지 마세요.",
  ftlb: "ft·lb(피트-파운드)는 미국 기계 일·토크·탄도 맥락의 단위입니다.",
  j: "줄(J)은 SI 에너지 단위입니다. 다른 단위는 고정 줄 등가로 변환됩니다.",
  gev: "기가전자볼트(GeV)는 10⁹ eV로 고에너지 물리에 쓰입니다.",
  mev: "메가전자볼트(MeV)는 10⁶ eV로 핵·입자 물리에 쓰입니다.",
  ev: "전자볼트(eV)는 1 V에서 1 기본전하가 얻는 에너지(≈1.602×10⁻¹⁹ J, SI 정의)입니다.",
};

export const energyUiEn = {
  shared: { copy: "Copy", copied: "Copied!", copyFailed: "Failed to copy" },
  unitDescriptions: unitDescriptionsEn,
  energyConverter: {
    converterTitle: "Convert Energy",
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
  energyHub: {
    subtitleBadge: "unit-converter",
    pairGridTitle: "Dedicated converters (SI, electrical, thermal/fuel, nutrition, mechanical, and atomic energy units)",
    pairGridDesc:
      "{count} pages — every pair of units below, with fixed input/output, formulas, examples, and conversion tables.",
    pairLinkTemplate: "{fromSlug} to {toSlug} ({fromName} to {toName})",
    faqSectionTitle: "Common questions (FAQ)",
    faqSectionDesc: "{count} quick answers with guides and links to the matching converter.",
    guideTitle: "Energy Converter Guide",
  },
  energyPairCalculator: {
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
  energyPairPage: {
    subtitleBadge: "Energy · unit-converter",
    aboutTitle: "About {unit}",
    summaryTitle: "Summary",
    relationshipTitle: "Relationship context",
    conversionTablesTitle: "Conversion tables",
    introTemplate:
      "Convert {fromName} to {toName} with fixed input and output units, a step-by-step formula line, and reference tables. Factors are joule-based; food energy uses thermochemical calories. The full Energy Converter also includes MMBtu, toe, thermal kWh, and MeV/GeV.",
    h1Template: "{fromName} to {toName} Converter",
    summaryTemplate:
      "To convert {fromName} to {toName}, multiply the value in {fromKey} by the ratio of joules per {fromKey} divided by joules per {toKey}. Equivalently: value_{toKey} = value_{fromKey} × ({fromFactor} / {toFactor}). Numerically, 1 {fromKey} equals {mult} {toKey}.",
    relationshipSame:
      "Both units are {kind} in this tool. Conversions use fixed joule factors, so results stay consistent with the definitions here. The factor from {fromName} to {toName} is {multExp} (1 {fromKey} = {mult} {toKey}).",
    relationshipCross:
      "You are converting between {fromKind} ({fromName}) and {toKind} ({toName}). All values are mapped through joules first. The numeric factor is {multExp}.",
    relationshipDefault:
      "Energy units are converted via joule-equivalents. The multiplier between {fromKey} and {toKey} is {multExp}.",
    kindNutrition: "food / nutrition energy (calories)",
    kindElectric: "electrical energy (watt-hours)",
    kindSi: "SI energy (joules)",
    kindImperial: "US / imperial engineering units (BTU, therm, ft·lb)",
    kindAtomic: "atomic-scale energy (electronvolts)",
    backToEnergyHub: "← Energy Converter (all units)",
    backToUnitConverter: "Unit Converter home",
    nonHubTitle: "Conversions outside the hub list",
    nonHubIntro:
      "The grid on the category page lists hub units only. These pairs include at least one unit outside that hub set (same tools: formulas and tables on each page).",
    nonHubLine1: "{fromSlug} to {toSlug}",
    nonHubLine2: "{fromName} to {toName}",
  },
  howToConvert: {
    titleTemplate: "How to convert {fromPlural} to {toPlural}",
    oneEquals: "1 {fromSg} is equal to {mult} {toSg} when both are expressed in joule-equivalents:",
    factorExplain:
      "Each {fromSg} is defined as {fromFactor} J and each {toSg} as {toFactor} J in this tool, so one {fromKey} equals {fromFactor} ÷ {toFactor} {toKey} = {mult} {toKey}.",
    letEFrom:
      "Let e({fromKey}) be the numeric amount in {fromSg} ({fromKey}), and e({toKey}) the amount in {toSg} ({toKey}). Then:",
    divideExplain:
      "Equivalently, divide by how many {fromKey} fit into one {toKey} (joules per {toKey} divided by joules per {fromKey}):",
    orLine: "Or: {toSg} = {fromSg} ÷ {divisor}",
    examplesTitle: "Examples",
    exampleTitleTemplate: "Example #{n}: Convert {value} {fromKey} to {toSg}",
    extraDerivations: {
      "cal-j": "Thermochemical calorie: 1 cal = 4.184 J exactly in this tool.",
      "kcal-cal": "1 kcal = 1,000 cal (nutrition kilocalorie vs small calorie).",
      "kwh-j": "1 kWh = 1 kJ/s × 3,600 s = 3,600,000 J.",
      "kj-j": "SI prefix: 1 kJ = 1,000 J.",
      "mj-j": "SI prefix: 1 MJ = 1,000,000 J.",
      "gj-j": "SI prefix: 1 GJ = 1,000,000,000 J.",
      "wh-j": "1 Wh = 1 W × 3,600 s = 3,600 J (one watt for one hour).",
      "btu-j": "IT British thermal unit: 1 BTU ≈ 1,055.05585262 J here.",
      "mmbtu-j": "1 MMBtu = 1,000,000 BTU (IT) ≈ 1.05505585262 × 10⁹ J.",
      "ev-j": "1 eV = 1.602176634×10⁻¹⁹ J by the SI definition of the elementary charge.",
    },
  },
  faqPage: {
    converterLabel: "Energy Converter",
    navFaqLabel: "FAQ",
    detailedAnswerSr: "Detailed answer",
    relationshipTitle: "Relationship context",
    quickTableTitle: "Quick conversion table",
    ctaTemplate: "Need a precise calculation? Go to {label}",
    backUnitConverter: "Unit Converter",
    moreConvertersTitle: "More {unit} converters",
    moreConvertersIntro:
      "Dedicated pages from {unitSg} to every other hub energy unit (kilocalorie, kilowatt-hour, calorie, joule, watt-hour, BTU, electronvolt).",
    moreConvertersLink: "{fromSlug} to {toSlug} ({fromName} to {toName})",
  },
};

export const energyUiKo = {
  shared: { copy: "복사", copied: "복사되었습니다!", copyFailed: "복사에 실패했습니다" },
  unitDescriptions: unitDescriptionsKo,
  energyConverter: {
    converterTitle: "에너지 변환",
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
  energyHub: {
    subtitleBadge: "unit-converter",
    pairGridTitle: "전용 변환기 (SI, 전기, 열/연료, 영양, 기계, 원자 에너지 단위)",
    pairGridDesc:
      "{count}개 페이지 — 아래 모든 단위 쌍. 고정 입·출력, 수식, 예시, 변환 표가 포함됩니다.",
    pairLinkTemplate: "{fromSlug} → {toSlug} ({fromName} → {toName})",
    faqSectionTitle: "자주 묻는 질문",
    faqSectionDesc: "{count}개의 빠른 답변과 해당 변환기 링크를 제공합니다.",
    guideTitle: "에너지 변환기 가이드",
  },
  energyPairCalculator: {
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
  energyPairPage: {
    subtitleBadge: "에너지 · unit-converter",
    aboutTitle: "{unit} 소개",
    summaryTitle: "요약",
    relationshipTitle: "관계 설명",
    conversionTablesTitle: "변환 표",
    introTemplate:
      "{fromName}을(를) {toName}(으)로 변환합니다. 입·출력 단위가 고정되어 있으며, 단계별 수식과 참고 표를 제공합니다. 계수는 줄 기반이며, 식품 에너지는 열화학 칼로리를 씁니다. 전체 에너지 변환기에는 MMBtu, toe, 열 kWh, MeV/GeV도 있습니다.",
    h1Template: "{fromName} → {toName} 변환기",
    summaryTemplate:
      "{fromName}을(를) {toName}(으)로 변환하려면 {fromKey} 값에 ‘줄/{fromKey}’를 ‘줄/{toKey}’로 나눈 비율을 곱합니다. 즉 value_{toKey} = value_{fromKey} × ({fromFactor} / {toFactor}). 수치상 1 {fromKey} = {mult} {toKey}입니다.",
    relationshipSame:
      "두 단위 모두 이 도구에서 {kind}입니다. 고정 줄 계수로 변환하므로 정의와 일치합니다. {fromName}→{toName} 계수는 {multExp} (1 {fromKey} = {mult} {toKey}).",
    relationshipCross:
      "{fromKind}({fromName})과 {toKind}({toName}) 사이 변환입니다. 모든 값은 먼저 줄로 매핑됩니다. 수치 계수는 {multExp}입니다.",
    relationshipDefault:
      "에너지 단위는 줄 등가로 변환됩니다. {fromKey}와 {toKey} 사이 배율은 {multExp}입니다.",
    kindNutrition: "식품·영양 에너지(칼로리)",
    kindElectric: "전기 에너지(와트시)",
    kindSi: "SI 에너지(줄)",
    kindImperial: "미국·영국식 공학 단위(BTU, therm, ft·lb)",
    kindAtomic: "원자 규모 에너지(전자볼트)",
    backToEnergyHub: "← 에너지 변환기 (모든 단위)",
    backToUnitConverter: "단위 변환기 홈",
    nonHubTitle: "허브 목록 밖 변환",
    nonHubIntro:
      "카테고리 페이지 그리드는 허브 단위만 나열합니다. 아래 쌍은 허브 밖 단위를 하나 이상 포함합니다(동일한 수식·표 도구).",
    nonHubLine1: "{fromSlug} → {toSlug}",
    nonHubLine2: "{fromName} → {toName}",
  },
  howToConvert: {
    titleTemplate: "{fromPlural}을(를) {toPlural}(으)로 변환하는 방법",
    oneEquals: "1 {fromSg}은(는) 줄 등가로 {mult} {toSg}와 같습니다:",
    factorExplain:
      "1 {fromSg}는 {fromFactor} J, 1 {toSg}는 {toFactor} J로 정의되므로 1 {fromKey} = {fromFactor} ÷ {toFactor} {toKey} = {mult} {toKey}입니다.",
    letEFrom:
      "{fromSg}({fromKey}) 양을 e({fromKey}), {toSg}({toKey})를 e({toKey})라 하면:",
    divideExplain:
      "또는 1 {toKey}에 들어가는 {fromKey} 개수(줄/{toKey} ÷ 줄/{fromKey})로 나눌 수 있습니다:",
    orLine: "즉: {toSg} = {fromSg} ÷ {divisor}",
    examplesTitle: "예시",
    exampleTitleTemplate: "예시 #{n}: {value} {fromKey}를 {toSg}(으)로 변환",
    extraDerivations: {
      "cal-j": "열화학 칼로리: 1 cal = 4.184 J(정확).",
      "kcal-cal": "1 kcal = 1,000 cal(영양 킬로칼로리 vs 소칼로리).",
      "kwh-j": "1 kWh = 1 kJ/s × 3,600 s = 3,600,000 J.",
      "kj-j": "SI 접두: 1 kJ = 1,000 J.",
      "mj-j": "SI 접두: 1 MJ = 1,000,000 J.",
      "gj-j": "SI 접두: 1 GJ = 1,000,000,000 J.",
      "wh-j": "1 Wh = 1 W × 3,600 s = 3,600 J.",
      "btu-j": "IT BTU: 1 BTU ≈ 1,055.05585262 J.",
      "mmbtu-j": "1 MMBtu = 1,000,000 BTU(IT) ≈ 1.055×10⁹ J.",
      "ev-j": "1 eV = 1.602176634×10⁻¹⁹ J(SI 기본전하 정의).",
    },
  },
  faqPage: {
    converterLabel: "에너지 변환기",
    navFaqLabel: "자주 묻는 질문",
    detailedAnswerSr: "상세 답변",
    relationshipTitle: "관계 설명",
    quickTableTitle: "빠른 변환 표",
    ctaTemplate: "정확한 계산이 필요하면 {label}(으)로 이동",
    backUnitConverter: "단위 변환기",
    moreConvertersTitle: "{unit} 관련 변환기",
    moreConvertersIntro:
      "{unitSg}에서 다른 허브 에너지 단위(kilocalorie, kilowatt-hour, calorie, joule, watt-hour, BTU, electronvolt)로 가는 전용 페이지입니다.",
    moreConvertersLink: "{fromSlug} → {toSlug} ({fromName} → {toName})",
  },
};

export const energyHubContentEn = {
  h1: "Energy Converter",
  subtitle: "unit-converter",
  intro:
    "Convert between SI, electrical, thermal/fuel, mechanical, and atomic energy units. All Unit Conversions panel included.",
  guideTitle: "Energy Converter Guide",
  sections: [
    {
      title: "Quick start",
      type: "unordered",
      items: [
        "Enter a value and pick source and target units. The result updates as you type.",
        "Use swap to reverse units and copy to copy the result. The All Unit Conversions panel lists your value across every supported energy unit.",
      ],
    },
    {
      title: "Formulas & deeper content",
      type: "paragraphs",
      items: [
        "Need formulas, worked examples, and tables for one pair (e.g. kilowatt-hours to joules)? Use a dedicated converter from the list below.",
        "Short answers to common questions are in the FAQ section above. Thermochemical calories and IT BTU match the factors in this tool.",
      ],
    },
    {
      title: "Example uses",
      type: "unordered",
      items: [
        "Nutrition: kilocalories and calories.",
        "Electricity: kilowatt-hours and watt-hours.",
        "Science: joules, kilojoules, and electronvolts.",
      ],
    },
  ],
  faq: [
    {
      question: "Which energy units are supported?",
      answer:
        "You can convert J/kJ/MJ/GJ, Wh/kWh/kWh(th), cal/kcal, BTU/MMBtu/therm/toe, ft·lb, and eV/MeV/GeV.",
    },
    {
      question: "Are dedicated pair pages available for energy conversion?",
      answer: "Yes. Pair pages include formulas, examples, and conversion tables.",
    },
    {
      question: "Can I use this for electricity and nutrition checks?",
      answer: "Yes. It supports common energy checks for power usage, food energy, and science.",
    },
  ],
  backToHub: "← Back to Unit Converter",
};

export const energyHubContentKo = {
  h1: "에너지 변환기",
  subtitle: "unit-converter",
  intro:
    "SI, 전기, 열/연료, 기계, 원자 에너지 단위를 변환합니다. 모든 단위 변환 패널이 포함되어 있습니다.",
  guideTitle: "에너지 변환기 가이드",
  sections: [
    {
      title: "빠른 시작",
      type: "unordered",
      items: [
        "값을 입력하고 입력·출력 단위를 선택하세요. 입력과 동시에 결과가 갱신됩니다.",
        "단위 바꾸기로 입·출력을 뒤집고, 복사로 결과를 가져갈 수 있습니다. ‘모든 단위 변환’ 패널에서 지원하는 모든 에너지 단위로의 값을 볼 수 있습니다.",
      ],
    },
    {
      title: "수식 및 상세 내용",
      type: "paragraphs",
      items: [
        "한 쌍(예: kilowatt-hour→joule)에 대한 수식·예시·표가 필요하면 아래 목록의 전용 변환기를 사용하세요.",
        "자주 묻는 질문은 위 FAQ 섹션에 있습니다. 열화학 칼로리와 IT BTU가 이 도구의 계수와 일치합니다.",
      ],
    },
    {
      title: "활용 예시",
      type: "unordered",
      items: [
        "영양: kilocalorie, calorie.",
        "전기: kilowatt-hour, watt-hour.",
        "과학: joule, kilojoule, electronvolt.",
      ],
    },
  ],
  faq: [
    {
      question: "어떤 에너지 단위를 지원하나요?",
      answer: "J/kJ/MJ/GJ, Wh/kWh/kWh(th), cal/kcal, BTU/MMBtu/therm/toe, ft·lb, eV/MeV/GeV를 변환할 수 있습니다.",
    },
    {
      question: "전용 에너지 쌍 변환 페이지가 있나요?",
      answer: "예. 수식, 예시, 변환 표가 있는 쌍 페이지가 있습니다.",
    },
    {
      question: "전기·영양 검산에 쓸 수 있나요?",
      answer: "예. 전력 사용, 식품 에너지, 과학 계산에 유용합니다.",
    },
  ],
  backToHub: "← 단위 변환기로 돌아가기",
};
