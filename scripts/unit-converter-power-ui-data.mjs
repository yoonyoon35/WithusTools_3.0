/** Power converter hub, pair pages, UnitConverter, FAQ page UI — EN/KO */

export const POWER_UNIT_KEYS = [
  "w", "mw", "kw", "megaw", "gw", "hp", "ps", "cv", "btu_hr", "kcal_h",
  "va", "kva", "mva", "tr", "dbm", "dbw", "ft_lb_s",
];

export const POWER_KEY_TO_SLUG = {
  w: "w",
  mw: "milliwatt",
  kw: "kilowatt",
  megaw: "megawatt",
  gw: "gigawatt",
  hp: "hp",
  ps: "ps",
  cv: "cv",
  btu_hr: "btu-hr",
  kcal_h: "kcal-h",
  va: "va",
  kva: "kva",
  mva: "mva",
  tr: "tr",
  dbm: "dbm",
  dbw: "dbw",
  ft_lb_s: "ft-lb-s",
};

export const POWER_HUB_KEYS = POWER_UNIT_KEYS;

const unitDescriptionsEn = {
  w: "The watt is the SI unit of power (one joule per second). All linear units in this converter are defined by a fixed watt equivalent.",
  mw: "One milliwatt is one thousandth of a watt. Common in RF, fiber optics, and low-power electronics.",
  kw: "One kilowatt is 1,000 W. Motor, heater, and grid-scale loads are often rated in kW.",
  megaw: "One megawatt is one million watts. Utility generation, large drives, and grid studies use MW.",
  gw: "One gigawatt is one billion watts. Utility generation capacity and grid planning commonly use GW.",
  hp: "Mechanical horsepower here is the US definition: 550 ft·lbf/s ≈ 745.70 W. Automotive and industrial specs often cite hp.",
  ps: "PS is metric horsepower (also called Pferdestarke), defined as 735.49875 W. It appears widely in EU and Korean vehicle specs.",
  cv: "CV (cheval-vapeur) is a metric horsepower unit equivalent to 735.49875 W, commonly used in European market specs.",
  btu_hr: "BTU per hour expresses thermal power using the IT British thermal unit (≈ 1,055.056 J per BTU), divided by one hour. Common in HVAC equipment ratings.",
  kcal_h: "Kilocalories per hour is a thermal power rate using the thermochemical kilocalorie (4,184 J per kcal) spread over one hour.",
  va: "Volt-amperes describe apparent power in AC circuits. At unity power factor, VA matches real power in watts; this tool uses that 1:1 mapping for conversion.",
  kva: "One kilovolt-ampere equals 1,000 VA. At unity power factor in this converter, kVA maps linearly to watts.",
  mva: "One megavolt-ampere equals 1,000,000 VA. Common in transformer and grid-scale apparent-power ratings.",
  tr: "One ton of refrigeration (TR) equals 12,000 BTU/h (IT), approximately 3,516.85 W. It is widely used in HVAC and refrigeration sizing.",
  dbm: "dBm is a logarithmic power level relative to 1 mW: P(W) = 10^((dBm − 30)/10). It is standard in RF and telecommunications; it is not a linear multiple of the watt.",
  dbw: "dBW is a logarithmic power level relative to 1 W: P(W) = 10^(dBW/10). RF, microwave, and antenna work often use dBW with dBm.",
  ft_lb_s: "Foot-pounds per second is a mechanical power rate: 1 ft·lb/s = 1.3558179483314004 W (exactly, from the international foot definition).",
};

const unitDescriptionsKo = {
  w: "와트(W)는 SI 전력 단위(1 J/s)입니다. 선형 단위는 모두 고정 와트 등가로 정의됩니다.",
  mw: "밀리와트(mW)는 와트의 1/1,000입니다. RF·광섬유·저전력 전자에 흔합니다.",
  kw: "킬로와트(kW)는 1,000 W입니다. 모터·히터·전력 부하에 흔합니다.",
  megaw: "메가와트(MW)는 100만 W입니다. 발전·대형 구동·전력망에 쓰입니다.",
  gw: "기가와트(GW)는 10억 W입니다. 발전 설비·전력 계획에 쓰입니다.",
  hp: "기계 마력(hp)은 미국 정의 550 ft·lbf/s ≈ 745.70 W입니다. 자동차·산업 사양에 흔합니다.",
  ps: "PS(미터법 마력)는 735.49875 W로 정의됩니다. EU·한국 차량 사양에 널리 쓰입니다.",
  cv: "CV(슈발바푸르)는 735.49875 W로 PS와 동일합니다. 유럽 시장 사양에 쓰입니다.",
  btu_hr: "BTU/h는 IT BTU(≈1,055.056 J)를 1시간으로 나눈 열전력입니다. HVAC 등급에 흔합니다.",
  kcal_h: "kcal/h는 열화학 킬로칼로리(4,184 J/kcal)를 1시간으로 나눈 열전력입니다.",
  va: "볼트암페어(VA)는 교류 피상전력입니다. 역률 1에서 W와 같으며, 여기서 1:1로 변환합니다.",
  kva: "kVA는 1,000 VA입니다. 역률 1에서 와트와 선형 매핑됩니다.",
  mva: "MVA는 1,000,000 VA입니다. 변압기·대규모 피상전력에 쓰입니다.",
  tr: "냉동톤(TR)은 12,000 BTU/h(IT) ≈ 3,516.85 W입니다. HVAC·냉동 용량에 쓰입니다.",
  dbm: "dBm은 1 mW 기준 로그 전력: P(W)=10^((dBm−30)/10). RF·통신 표준입니다.",
  dbw: "dBW는 1 W 기준 로그 전력: P(W)=10^(dBW/10). RF·안테나에 쓰입니다.",
  ft_lb_s: "ft·lb/s는 기계 전력: 1 ft·lb/s = 1.3558179483314004 W(국제 피트 정의).",
};

export const powerUiEn = {
  shared: { copy: "Copy", copied: "Copied!", copyFailed: "Failed to copy" },
  unitDescriptions: unitDescriptionsEn,
  powerConverter: {
    converterTitle: "Convert Power",
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
  powerHub: {
    subtitleBadge: "unit-converter",
    pairGridTitle:
      "Dedicated converters (SI power, horsepower variants, thermal/HVAC, electrical apparent power, logarithmic RF levels, mechanical rates)",
    pairGridDesc:
      "{count} pages — every pair of units below, with fixed input/output, formulas, examples, and conversion tables.",
    pairLinkTemplate: "{fromSlug} to {toSlug} ({fromName} to {toName})",
    faqSectionTitle: "Common questions (FAQ)",
    faqSectionDesc: "{count} quick answers with guides and links to the matching converter.",
    guideTitle: "Power Converter Guide",
  },
  powerPairCalculator: {
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
  powerPairPage: {
    subtitleBadge: "Power · unit-converter",
    aboutTitle: "About {unit}",
    summaryTitle: "Summary",
    relationshipTitle: "Relationship context",
    conversionTablesTitle: "Conversion tables",
    introTemplate:
      "Convert {fromName} to {toName} with fixed input and output units, a step-by-step formula line, and reference tables. Linear units use SI watt definitions; mechanical hp uses 550 ft·lbf/s; BTU/h uses the IT BTU; dBm/dBW are logarithmic relative to 1 mW and 1 W. The full Power Converter also includes PS/CV, TR, kVA/MVA, and ft·lb/s.",
    h1Template: "{fromName} to {toName} Converter",
    summaryTemplate:
      "To convert {fromName} to {toName}, multiply the value in {fromKey} by the ratio of watts per {fromKey} divided by watts per {toKey}. Equivalently: value_{toKey} = value_{fromKey} × ({fromFactor} / {toFactor}). Numerically, 1 {fromKey} equals {mult} {toKey}.",
    relationshipSame:
      "Both units are {kind} in this tool. Conversions use fixed watt factors, so results stay consistent with the definitions here. The factor from {fromName} to {toName} is {multExp} (1 {fromKey} = {mult} {toKey}).",
    relationshipCross:
      "You are converting between {fromKind} ({fromName}) and {toKind} ({toName}). All linear values are mapped through watts first. The numeric factor is {multExp}.",
    relationshipDbm:
      "You are converting between {fromKind} ({fromName}) and {toKind} ({toName}). Log units (dBm/dBW) use base-10 definitions relative to 1 mW or 1 W; linear units map through watts first, then to or from the selected log unit. Only strictly positive power in watts maps to a real dB power value.",
    relationshipDefault:
      "Power units are converted via watt-equivalents. The multiplier between {fromKey} and {toKey} is {multExp}.",
    kindSi: "SI / decimal power (watts and prefixes)",
    kindThermal: "thermal engineering rates (BTU/h, kcal/h)",
    kindMechanical: "mechanical power (horsepower, ft·lb/s)",
    kindRf: "logarithmic RF levels (dBm/dBW)",
    kindElectrical: "apparent power at unity PF (VA) or refrigeration (TR)",
    backToPowerHub: "← Power Converter (all units)",
    backToUnitConverter: "Unit Converter home",
    nonHubTitle: "Conversions outside the hub list",
    nonHubIntro:
      "The grid on the category page lists hub units only. These pairs include at least one unit outside that hub set (same tools: formulas and tables on each page).",
    nonHubLine1: "{fromSlug} to {toSlug}",
    nonHubLine2: "{fromName} to {toName}",
  },
  howToConvert: {
    titleTemplate: "How to convert {fromPlural} to {toPlural}",
    oneEquals: "1 {fromSg} is equal to {mult} {toSg} when both are expressed in watt-equivalents:",
    factorExplain:
      "Each {fromSg} is defined as {fromFactor} W and each {toSg} as {toFactor} W in this tool, so one {fromKey} equals {fromFactor} ÷ {toFactor} {toKey} = {mult} {toKey}.",
    letPFrom:
      "Let p({fromKey}) be the numeric amount in {fromSg} ({fromKey}), and p({toKey}) the amount in {toSg} ({toKey}). Then:",
    divideExplain:
      "Equivalently, divide by how many {fromKey} fit into one {toKey} (watts per {toKey} divided by watts per {fromKey}):",
    orLine: "Or: {toSg} = {fromSg} ÷ {divisor}",
    examplesTitle: "Examples",
    exampleTitleTemplate: "Example #{n}: Convert {value} {fromKey} to {toSg}",
    dbmTitleTemplate: "How to convert {fromPlural} to {toPlural}",
    dbmIntro:
      "dBm/dBW are logarithmic power levels. P_W = 10^((dBm − 30) / 10), P_W = 10^(dBW / 10), and inverse mappings use 10 × log₁₀(·) with P_W > 0.",
    dbmToLinear:
      "To reach {toSg}, convert dBm → W, then divide by the watt factor for {toKey} ({toFactor} W per 1 {toKey}).",
    linearToDbm:
      "From {fromSg}, multiply by {fromFactor} W per {fromKey} to get watts, then apply the dBm formula (watts must be positive).",
    dbmInvalid: "Invalid or non-positive intermediate watts for this pair.",
    extraDerivations: {
      "kw-w": "SI prefix: 1 kW = 1,000 W exactly.",
      "w-mw": "1 W = 1,000 mW.",
      "hp-kw": "1 mechanical hp ≈ 0.74569987 kW (exact definition via 550 ft·lbf/s).",
      "btu_hr-w": "1 BTU/h (IT) = 1,055.05585262 J/h ÷ 3,600 s ≈ 0.29307107 W.",
      "va-w": "At unity power factor, 1 VA corresponds to 1 W of real power.",
    },
  },
  faqPage: {
    converterLabel: "Power Converter",
    navFaqLabel: "FAQ",
    detailedAnswerSr: "Detailed answer",
    relationshipTitle: "Relationship context",
    quickTableTitle: "Quick conversion table",
    ctaTemplate: "Need a precise calculation? Go to {label}",
    backUnitConverter: "Unit Converter",
    moreConvertersTitle: "More {unit} converters",
    moreConvertersIntro:
      "Dedicated pages from {unitSg} to every other hub power unit (watt, milliwatt, kilowatt, megawatt, mechanical horsepower, BTU per hour, kilocalorie per hour, volt-ampere).",
    moreConvertersLink: "{fromSlug} to {toSlug} ({fromName} to {toName})",
  },
};

export const powerUiKo = {
  shared: { copy: "복사", copied: "복사되었습니다!", copyFailed: "복사에 실패했습니다" },
  unitDescriptions: unitDescriptionsKo,
  powerConverter: {
    converterTitle: "전력 변환",
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
  powerHub: {
    subtitleBadge: "unit-converter",
    pairGridTitle:
      "전용 변환기 (SI 전력, 마력, 열/HVAC, 피상전력, RF 로그 전력, 기계 전력)",
    pairGridDesc:
      "{count}개 페이지 — 아래 모든 단위 쌍. 고정 입·출력, 수식, 예시, 변환 표가 포함됩니다.",
    pairLinkTemplate: "{fromSlug} → {toSlug} ({fromName} → {toName})",
    faqSectionTitle: "자주 묻는 질문",
    faqSectionDesc: "{count}개의 빠른 답변과 해당 변환기 링크를 제공합니다.",
    guideTitle: "전력 변환기 가이드",
  },
  powerPairCalculator: {
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
  powerPairPage: {
    subtitleBadge: "전력 · unit-converter",
    aboutTitle: "{unit} 소개",
    summaryTitle: "요약",
    relationshipTitle: "관계 설명",
    conversionTablesTitle: "변환 표",
    introTemplate:
      "{fromName}을(를) {toName}(으)로 변환합니다. 입·출력 단위가 고정되어 있으며, 단계별 수식과 참고 표를 제공합니다. 선형 단위는 SI 와트 정의, 기계 hp는 550 ft·lbf/s, BTU/h는 IT BTU, dBm/dBW는 1 mW·1 W 기준 로그입니다. 전체 전력 변환기에는 PS/CV, TR, kVA/MVA, ft·lb/s도 있습니다.",
    h1Template: "{fromName} → {toName} 변환기",
    summaryTemplate:
      "{fromName}을(를) {toName}(으)로 변환하려면 {fromKey} 값에 ‘와트/{fromKey}’를 ‘와트/{toKey}’로 나눈 비율을 곱합니다. 즉 value_{toKey} = value_{fromKey} × ({fromFactor} / {toFactor}). 수치상 1 {fromKey} = {mult} {toKey}입니다.",
    relationshipSame:
      "두 단위 모두 이 도구에서 {kind}입니다. 고정 와트 계수로 변환하므로 정의와 일치합니다. {fromName}→{toName} 계수는 {multExp} (1 {fromKey} = {mult} {toKey}).",
    relationshipCross:
      "{fromKind}({fromName})과 {toKind}({toName}) 사이 변환입니다. 선형 값은 먼저 와트로 매핑됩니다. 수치 계수는 {multExp}입니다.",
    relationshipDbm:
      "{fromKind}({fromName})과 {toKind}({toName}) 사이 변환입니다. dBm/dBW는 1 mW·1 W 기준 밑-10 정의를 쓰며, 선형 단위는 와트를 거칩니다. 와트가 양수일 때만 실수 dB 전력이 됩니다.",
    relationshipDefault:
      "전력 단위는 와트 등가로 변환됩니다. {fromKey}와 {toKey} 사이 배율은 {multExp}입니다.",
    kindSi: "SI·십진 전력(와트 및 접두)",
    kindThermal: "열공학 전력(BTU/h, kcal/h)",
    kindMechanical: "기계 전력(마력, ft·lb/s)",
    kindRf: "RF 로그 전력(dBm/dBW)",
    kindElectrical: "역률 1 피상전력(VA) 또는 냉동(TR)",
    backToPowerHub: "← 전력 변환기 (모든 단위)",
    backToUnitConverter: "단위 변환기 홈",
    nonHubTitle: "허브 목록 밖 변환",
    nonHubIntro:
      "카테고리 페이지 그리드는 허브 단위만 나열합니다. 아래 쌍은 허브 밖 단위를 하나 이상 포함합니다(동일한 수식·표 도구).",
    nonHubLine1: "{fromSlug} → {toSlug}",
    nonHubLine2: "{fromName} → {toName}",
  },
  howToConvert: {
    titleTemplate: "{fromPlural}을(를) {toPlural}(으)로 변환하는 방법",
    oneEquals: "1 {fromSg}은(는) 와트 등가로 {mult} {toSg}와 같습니다:",
    factorExplain:
      "1 {fromSg}는 {fromFactor} W, 1 {toSg}는 {toFactor} W로 정의되므로 1 {fromKey} = {fromFactor} ÷ {toFactor} {toKey} = {mult} {toKey}입니다.",
    letPFrom:
      "{fromSg}({fromKey}) 양을 p({fromKey}), {toSg}({toKey})를 p({toKey})라 하면:",
    divideExplain:
      "또는 1 {toKey}에 들어가는 {fromKey} 개수(와트/{toKey} ÷ 와트/{fromKey})로 나눌 수 있습니다:",
    orLine: "즉: {toSg} = {fromSg} ÷ {divisor}",
    examplesTitle: "예시",
    exampleTitleTemplate: "예시 #{n}: {value} {fromKey}를 {toSg}(으)로 변환",
    dbmTitleTemplate: "{fromPlural}을(를) {toPlural}(으)로 변환하는 방법",
    dbmIntro:
      "dBm/dBW는 로그 전력입니다. P_W = 10^((dBm−30)/10), P_W = 10^(dBW/10), 역변환은 P_W > 0에서 10×log₁₀(·)을 씁니다.",
    dbmToLinear:
      "{toSg}(으)로 가려면 dBm→W 변환 후 {toKey}의 와트 계수({toFactor} W/1 {toKey})로 나눕니다.",
    linearToDbm:
      "{fromSg}에서 {fromKey}당 {fromFactor} W를 곱해 와트를 구한 뒤 dBm 공식을 적용합니다(와트는 양수여야 함).",
    dbmInvalid: "이 쌍에 대해 중간 와트가 유효하지 않거나 0 이하입니다.",
    extraDerivations: {
      "kw-w": "SI 접두: 1 kW = 1,000 W(정확).",
      "w-mw": "1 W = 1,000 mW.",
      "hp-kw": "1 기계 hp ≈ 0.74569987 kW(550 ft·lbf/s 정의).",
      "btu_hr-w": "1 BTU/h(IT) = 1,055.05585262 J/h ÷ 3,600 s ≈ 0.29307107 W.",
      "va-w": "역률 1에서 1 VA = 1 W.",
    },
  },
  faqPage: {
    converterLabel: "전력 변환기",
    navFaqLabel: "자주 묻는 질문",
    detailedAnswerSr: "상세 답변",
    relationshipTitle: "관계 설명",
    quickTableTitle: "빠른 변환 표",
    ctaTemplate: "정확한 계산이 필요하면 {label}(으)로 이동",
    backUnitConverter: "단위 변환기",
    moreConvertersTitle: "{unit} 관련 변환기",
    moreConvertersIntro:
      "{unitSg}에서 다른 허브 전력 단위(watt, milliwatt, kilowatt, megawatt, mechanical horsepower, BTU per hour, kilocalorie per hour, volt-ampere)로 가는 전용 페이지입니다.",
    moreConvertersLink: "{fromSlug} → {toSlug} ({fromName} → {toName})",
  },
};

export const powerHubContentEn = {
  h1: "Power Converter",
  subtitle: "unit-converter",
  intro:
    "Convert between W/mW/kW/MW/GW, hp/PS/CV, BTU/h, TR, kcal/h, VA/kVA/MVA, dBm/dBW, ft·lb/s, and more. All Unit Conversions panel included.",
  guideTitle: "Power Converter Guide",
  sections: [
    {
      title: "Quick start",
      type: "unordered",
      items: [
        "Enter a value and pick source and target units. The result updates as you type.",
        "Use swap to reverse units and copy to copy the result. The All Unit Conversions panel lists your value across every supported power unit.",
      ],
    },
    {
      title: "Formulas & deeper content",
      type: "paragraphs",
      items: [
        "Need formulas, worked examples, and tables for one pair (e.g. kilowatts to horsepower)? Use a dedicated converter from the list below.",
        "Short answers to common questions are in the FAQ section above. Linear units use fixed watt factors; dBm maps through watts with a log₁₀ definition relative to 1 mW.",
      ],
    },
    {
      title: "Example uses",
      type: "unordered",
      items: [
        "Motors and HVAC: kW, hp, and BTU/h.",
        "RF engineering: dBm, mW, and W.",
        "Electrical ratings: VA at unity PF and watts.",
      ],
    },
  ],
  faq: [
    {
      question: "What power units can I convert here?",
      answer:
        "You can convert W/mW/kW/MW/GW, hp and PS/CV, BTU/h and TR, kcal/h, VA/kVA/MVA, dBm/dBW, and related units.",
    },
    {
      question: "Does this include dedicated pair conversion pages?",
      answer: "Yes. Each pair page includes formulas, examples, and conversion tables.",
    },
    {
      question: "Is dBm conversion supported?",
      answer:
        "Yes. dBm and dBW conversions are handled through watt-based logarithmic definitions in this tool.",
    },
  ],
  backToHub: "← Back to Unit Converter",
};

export const powerHubContentKo = {
  h1: "전력 변환기",
  subtitle: "unit-converter",
  intro:
    "W/mW/kW/MW/GW, hp/PS/CV, BTU/h, TR, kcal/h, VA/kVA/MVA, dBm/dBW, ft·lb/s 등을 변환합니다. 모든 단위 변환 패널이 포함되어 있습니다.",
  guideTitle: "전력 변환기 가이드",
  sections: [
    {
      title: "빠른 시작",
      type: "unordered",
      items: [
        "값을 입력하고 입력·출력 단위를 선택하세요. 입력과 동시에 결과가 갱신됩니다.",
        "단위 바꾸기로 입·출력을 뒤집고, 복사로 결과를 가져갈 수 있습니다. ‘모든 단위 변환’ 패널에서 지원하는 모든 전력 단위로의 값을 볼 수 있습니다.",
      ],
    },
    {
      title: "수식 및 상세 내용",
      type: "paragraphs",
      items: [
        "한 쌍(예: kilowatt→horsepower)에 대한 수식·예시·표가 필요하면 아래 목록의 전용 변환기를 사용하세요.",
        "자주 묻는 질문은 위 FAQ 섹션에 있습니다. 선형 단위는 고정 와트 계수, dBm은 1 mW 기준 log₁₀ 정의로 처리됩니다.",
      ],
    },
    {
      title: "활용 예시",
      type: "unordered",
      items: [
        "모터·HVAC: kW, hp, BTU/h.",
        "RF 공학: dBm, mW, W.",
        "전기 등급: 역률 1 VA와 와트.",
      ],
    },
  ],
  faq: [
    {
      question: "어떤 전력 단위를 변환할 수 있나요?",
      answer:
        "W/mW/kW/MW/GW, hp·PS/CV, BTU/h·TR, kcal/h, VA/kVA/MVA, dBm/dBW 등을 변환할 수 있습니다.",
    },
    {
      question: "전용 쌍 변환 페이지가 있나요?",
      answer: "예. 각 쌍 페이지에 수식, 예시, 변환 표가 포함되어 있습니다.",
    },
    {
      question: "dBm 변환을 지원하나요?",
      answer: "예. dBm/dBW는 와트 기반 로그 정의로 처리됩니다.",
    },
  ],
  backToHub: "← 단위 변환기로 돌아가기",
};
