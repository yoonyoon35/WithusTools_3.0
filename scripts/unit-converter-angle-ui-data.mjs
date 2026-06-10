/** Angle converter hub, pair pages, UnitConverter, FAQ page UI — EN/KO */

export const ANGLE_UNIT_KEYS = [
  "turn", "quadrant", "sextant", "deg", "arcmin", "moa", "arcsec",
  "grad", "rad", "mrad", "urad", "mil",
];

export const ANGLE_KEY_TO_SLUG = {
  turn: "turn",
  quadrant: "quadrant",
  sextant: "sextant",
  deg: "deg",
  arcmin: "arcmin",
  moa: "moa",
  arcsec: "arcsec",
  grad: "grad",
  rad: "rad",
  mrad: "mrad",
  urad: "urad",
  mil: "mil",
};

export const ANGLE_HUB_KEYS = ANGLE_UNIT_KEYS;

const unitDescriptionsEn = {
  turn: "One revolution (turn) is a full circle: 2π radians or 360°. Used in rotation rates, motors, and astronomy (e.g. revolutions per minute).",
  quadrant: "A quadrant is one quarter-turn: 90° or π/2 radians. It is useful in geometric and directional notation.",
  sextant: "A sextant is one sixth of a full turn: 60° or π/3 radians. It appears in geometry and some traditional angular partitioning.",
  deg: "Degrees divide a circle into 360 parts. Common in everyday angles, maps, and many engineering drawings.",
  arcmin: "An arc minute is 1/60 of a degree (π/10,800 rad). Used in astronomy, navigation, and precision optics (MOA).",
  moa: "Minute of angle (MOA) equals one arc minute (1/60 degree). It is widely used in firearms optics and precision aiming.",
  arcsec: "An arc second is 1/60 of an arc minute or 1/3600 of a degree. Common in astronomy and very fine angular resolution.",
  grad: "Gradians (gon) divide a right angle into 100 parts; 400 gradians make a full turn. Used in some surveying and European contexts.",
  rad: "The radian is the SI unit of plane angle. One radian is the angle subtended by an arc equal to the radius; 2π rad = one full circle.",
  mrad: "A milliradian is 1/1000 radian. Used in ballistics, long-range shooting, and engineering for small angles.",
  urad: "A microradian is 1/1,000,000 radian. It is used for very small angular deviations in optics and precision metrology.",
  mil: "NATO mils split a full circle into 6,400 parts for artillery and tactical optics; 1 mil = 2π/6400 rad.",
};

const unitDescriptionsKo = {
  turn: "1회전(turn)은 한 바퀴: 2π rad 또는 360°. 회전수·모터·천문에 쓰입니다.",
  quadrant: "사분면(quadrant)은 1/4회전: 90° 또는 π/2 rad. 기하·방위 표기에 유용합니다.",
  sextant: "육분(sextant)은 1/6회전: 60° 또는 π/3 rad. 기하·전통 각 분할에 나타납니다.",
  deg: "도(degree)는 원을 360등분합니다. 일상 각·지도·도면에 흔합니다.",
  arcmin: "각분(arc minute)은 1°의 1/60(π/10,800 rad). 천문·항해·정밀 광학(MOA)에 쓰입니다.",
  moa: "MOA는 각분과 같습니다(1/60°). 사격 광학·정밀 조준에 널리 쓰입니다.",
  arcsec: "각초(arc second)는 각분의 1/60 또는 1°의 1/3600. 천문·고해상도 각에 쓰입니다.",
  grad: "그라디안(grad)은 직각을 100등분; 400 grad = 1회전. 일부 측량·유럽 맥락에 쓰입니다.",
  rad: "라디안(rad)은 SI 평면각 단위. 호 길이 = 반지름일 때의 각; 2π rad = 1회전.",
  mrad: "밀리라디안(mrad)은 1/1000 rad. 탄도·장거리 사격·공학 소각에 쓰입니다.",
  urad: "마이크로라디안(urad)은 10⁻⁶ rad. 광학·정밀 계측의 미세 편차에 쓰입니다.",
  mil: "NATO mil은 원을 6,400등분; 1 mil = 2π/6400 rad. 포병·전술 조준에 쓰입니다.",
};

export const angleUiEn = {
  shared: { copy: "Copy", copied: "Copied!", copyFailed: "Failed to copy" },
  unitDescriptions: unitDescriptionsEn,
  angleConverter: {
    converterTitle: "Convert Angle",
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
  angleHub: {
    subtitleBadge: "unit-converter",
    pairGridTitle: "Dedicated converters (geometric, surveying, optics, and ballistics angle units)",
    pairGridDesc:
      "{count} pages — every pair of units below, with fixed input/output, formulas, examples, and conversion tables.",
    pairLinkTemplate: "{fromSlug} to {toSlug} ({fromName} to {toName})",
    faqSectionTitle: "Common questions (FAQ)",
    faqSectionDesc: "{count} quick answers with guides and links to the matching converter.",
    guideTitle: "Angle Converter Guide",
  },
  anglePairCalculator: {
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
  anglePairPage: {
    subtitleBadge: "Angle · unit-converter",
    aboutTitle: "About {unit}",
    summaryTitle: "Summary",
    relationshipTitle: "Relationship context",
    conversionTablesTitle: "Conversion tables",
    introTemplate:
      "Convert {fromName} to {toName} with fixed input and output units, a step-by-step formula line, and reference tables. All calculations bridge through radians (360° per turn, 400 grad per turn, 60′ per degree, 60″ per minute, plus MOA, urad, and NATO 6400 mils per turn).",
    h1Template: "{fromName} to {toName} Converter",
    summaryTemplate:
      "To convert {fromName} to {toName}, multiply the value in {fromKey} by ({fromFactor} rad per {fromKey}) / ({toFactor} rad per {toKey}). Equivalently: value_{toKey} = value_{fromKey} × ({fromFactor} / {toFactor}). Numerically, 1 {fromKey} equals {mult} {toKey}.",
    summarySame:
      "To convert {fromName} to {toName}, both units use the same radian factor ({fromFactor} rad per unit) in this tool, so the numeric value is unchanged (1:1).",
    summaryFallback:
      "To convert {fromName} to {toName}, this tool uses an intermediate value in radians.",
    relationshipDefault:
      "Both {fromName} and {toName} are converted by fixed multiples of the radian. Multiplying by (rad per {fromKey}) ÷ (rad per {toKey}) matches passing through radians, keeping degrees, gradians, arc minutes, NATO mils, and revolutions consistent on the hub.",
    backToAngleHub: "← Angle Converter (all units)",
    backToUnitConverter: "Unit Converter home",
    nonHubTitle: "Conversions outside the hub list",
    nonHubIntro:
      "The grid on the category page lists hub units only. These pairs include at least one unit outside that hub set (same tools: formulas and tables on each page).",
    nonHubLine1: "{fromSlug} to {toSlug}",
    nonHubLine2: "{fromName} to {toName}",
  },
  howToConvert: {
    titleTemplate: "How to convert {fromPlural} to {toPlural}",
    oneEquals: "1 {fromSg} equals {mult} {toSg} in this tool (via radian):",
    factorExplain:
      "Each {fromSg} carries {fromFactor} rad and each {toSg} {toFactor} rad, so one {fromKey} equals {fromFactor} ÷ {toFactor} {toKey}.",
    letAFrom:
      "Let θ({fromKey}) be the angle in {fromSg} ({fromKey}), and θ({toKey}) in {toSg} ({toKey}). Then:",
    divideExplain:
      "Equivalently, divide by how many {fromKey} fit into one {toKey} (rad per {toKey} divided by rad per {fromKey}):",
    orLine: "Or: {toSg} = {fromSg} ÷ {divisor}",
    examplesTitle: "Examples",
    exampleTitleTemplate: "Example #{n}: Convert {value} {fromKey} to {toSg}",
    unknownPair: "Unknown unit pair.",
    extraDerivations: {
      "deg-rad": "1° = π/180 rad exactly.",
      "rad-deg": "1 rad = 180/π degrees.",
      "turn-deg": "1 turn = 360° exactly.",
      "grad-deg": "1 grad = 0.9° (400 grad = 360°).",
      "deg-arcmin": "1° = 60 arc minutes exactly.",
      "arcmin-moa": "MOA equals one arc minute (1:1 rad factor here).",
      "mil-deg": "360° = 6,400 NATO mils.",
    },
  },
  faqPage: {
    converterLabel: "Angle Converter",
    navFaqLabel: "FAQ",
    detailedAnswerSr: "Detailed answer",
    relationshipTitle: "Relationship context",
    quickTableTitle: "Quick conversion table",
    ctaTemplate: "Need a precise calculation? Go to {label}",
    backUnitConverter: "Unit Converter",
    moreConvertersTitle: "More {unit} converters",
    moreConvertersIntro:
      "Dedicated pages from {unitSg} to every other hub angle unit (turn, deg, arcmin, arcsec, grad, rad, mrad, mil).",
    moreConvertersLink: "{fromSlug} to {toSlug} ({fromName} to {toName})",
  },
};

export const angleUiKo = {
  shared: { copy: "복사", copied: "복사되었습니다!", copyFailed: "복사에 실패했습니다" },
  unitDescriptions: unitDescriptionsKo,
  angleConverter: {
    converterTitle: "각도 변환",
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
  angleHub: {
    subtitleBadge: "unit-converter",
    pairGridTitle: "전용 변환기 (기하, 측량, 광학, 탄도 각도 단위)",
    pairGridDesc:
      "{count}개 페이지 — 아래 모든 단위 쌍. 고정 입·출력, 수식, 예시, 변환 표가 포함됩니다.",
    pairLinkTemplate: "{fromSlug} → {toSlug} ({fromName} → {toName})",
    faqSectionTitle: "자주 묻는 질문",
    faqSectionDesc: "{count}개의 빠른 답변과 해당 변환기 링크를 제공합니다.",
    guideTitle: "각도 변환기 가이드",
  },
  anglePairCalculator: {
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
  anglePairPage: {
    subtitleBadge: "각도 · unit-converter",
    aboutTitle: "{unit} 소개",
    summaryTitle: "요약",
    relationshipTitle: "관계 설명",
    conversionTablesTitle: "변환 표",
    introTemplate:
      "{fromName}을(를) {toName}(으)로 변환합니다. 입·출력 단위가 고정되어 있으며, 단계별 수식과 참고 표를 제공합니다. 모든 계산은 라디안을 거칩니다(1회전=360°, 400 grad, 1°=60′, 1′=60″, MOA, urad, NATO 6400 mil).",
    h1Template: "{fromName} → {toName} 변환기",
    summaryTemplate:
      "{fromName}을(를) {toName}(으)로 변환하려면 {fromKey} 값에 ‘rad/{fromKey}’를 ‘rad/{toKey}’로 나눈 비율을 곱합니다. 즉 value_{toKey} = value_{fromKey} × ({fromFactor} / {toFactor}). 수치상 1 {fromKey} = {mult} {toKey}입니다.",
    summarySame:
      "{fromName}과 {toName}은 동일한 라디안 계수({fromFactor} rad/단위)를 쓰므로 수치가 같습니다(1:1).",
    summaryFallback:
      "{fromName}을(를) {toName}(으)로 변환할 때 이 도구는 라디안 중간값을 사용합니다.",
    relationshipDefault:
      "{fromName}과 {toName}은 라디안의 고정 배수로 변환됩니다. (rad/{fromKey})÷(rad/{toKey})를 곱하면 허브의 도·그라디안·각분·mil·회전과 일치합니다.",
    backToAngleHub: "← 각도 변환기 (모든 단위)",
    backToUnitConverter: "단위 변환기 홈",
    nonHubTitle: "허브 목록 밖 변환",
    nonHubIntro:
      "카테고리 페이지 그리드는 허브 단위만 나열합니다. 아래 쌍은 허브 밖 단위를 하나 이상 포함합니다(동일한 수식·표 도구).",
    nonHubLine1: "{fromSlug} → {toSlug}",
    nonHubLine2: "{fromName} → {toName}",
  },
  howToConvert: {
    titleTemplate: "{fromPlural}을(를) {toPlural}(으)로 변환하는 방법",
    oneEquals: "1 {fromSg}은(는) 라디안 경유로 {mult} {toSg}와 같습니다:",
    factorExplain:
      "1 {fromSg}는 {fromFactor} rad, 1 {toSg}는 {toFactor} rad이므로 1 {fromKey} = {fromFactor} ÷ {toFactor} {toKey}입니다.",
    letAFrom:
      "{fromSg}({fromKey}) 각을 θ({fromKey}), {toSg}({toKey})를 θ({toKey})라 하면:",
    divideExplain:
      "또는 1 {toKey}에 들어가는 {fromKey} 개수(rad/{toKey} ÷ rad/{fromKey})로 나눌 수 있습니다:",
    orLine: "즉: {toSg} = {fromSg} ÷ {divisor}",
    examplesTitle: "예시",
    exampleTitleTemplate: "예시 #{n}: {value} {fromKey}를 {toSg}(으)로 변환",
    unknownPair: "알 수 없는 단위 쌍입니다.",
    extraDerivations: {
      "deg-rad": "1° = π/180 rad(정확).",
      "rad-deg": "1 rad = 180/π°.",
      "turn-deg": "1 turn = 360°(정확).",
      "grad-deg": "1 grad = 0.9°(400 grad = 360°).",
      "deg-arcmin": "1° = 60 arc minute(정확).",
      "arcmin-moa": "MOA는 각분과 같음(여기서 1:1).",
      "mil-deg": "360° = 6,400 NATO mil.",
    },
  },
  faqPage: {
    converterLabel: "각도 변환기",
    navFaqLabel: "자주 묻는 질문",
    detailedAnswerSr: "상세 답변",
    relationshipTitle: "관계 설명",
    quickTableTitle: "빠른 변환 표",
    ctaTemplate: "정확한 계산이 필요하면 {label}(으)로 이동",
    backUnitConverter: "단위 변환기",
    moreConvertersTitle: "{unit} 관련 변환기",
    moreConvertersIntro:
      "{unitSg}에서 다른 허브 각도 단위(turn, deg, arcmin, arcsec, grad, rad, mrad, mil)로 가는 전용 페이지입니다.",
    moreConvertersLink: "{fromSlug} → {toSlug} ({fromName} → {toName})",
  },
};

export const angleHubContentEn = {
  h1: "Angle Converter",
  subtitle: "unit-converter",
  intro:
    "Convert between turns, quadrants, sextants, degrees, arc minutes, MOA, arcseconds, gradians, radians, mrad, urad, and NATO mils (6400). For geometry, astronomy, surveying, and optics. All Unit Conversions panel included.",
  guideTitle: "Angle Converter Guide",
  sections: [
    {
      title: "Quick start",
      type: "unordered",
      items: [
        "Enter a value and pick source and target units. The result updates as you type.",
        "Use swap to reverse units and copy to copy the result. The All Unit Conversions panel lists your value across every supported angle unit.",
      ],
    },
    {
      title: "Formulas & deeper content",
      type: "paragraphs",
      items: [
        "Need formulas, worked examples, and tables for one pair (e.g. degrees to radians)? Use a dedicated converter from the list below.",
        "Short answers to common questions are in the FAQ section above. All calculations bridge through radians with fixed definitions.",
      ],
    },
    {
      title: "Example uses",
      type: "unordered",
      items: [
        "Math and CAD: degrees vs radians in trig and graphics APIs.",
        "Astronomy and surveying: arc minutes, arcseconds, and gradians.",
        "Ballistics and tactical optics: milliradians and NATO mils vs degrees.",
      ],
    },
  ],
  faq: [
    {
      question: "Which angle units are supported?",
      answer:
        "You can convert turns, quadrants, sextants, degrees, arc minutes, MOA, arcseconds, gradians, radians, milliradians, microradians, and NATO mils.",
    },
    {
      question: "Can I open dedicated angle pair converters?",
      answer: "Yes. Dedicated pair pages provide formulas, examples, and tables.",
    },
    {
      question: "Is this useful for geometry and optics work?",
      answer: "Yes. It is useful for geometry, surveying, astronomy, and optics-related angle checks.",
    },
  ],
  backToHub: "← Back to Unit Converter",
};

export const angleHubContentKo = {
  h1: "각도 변환기",
  subtitle: "unit-converter",
  intro:
    "회전, 사분면, 육분, 도, 각분, MOA, 각초, 그라디안, 라디안, mrad, urad, NATO mil(6400)을 변환합니다. 기하·천문·측량·광학용. 모든 단위 변환 패널 포함.",
  guideTitle: "각도 변환기 가이드",
  sections: [
    {
      title: "빠른 시작",
      type: "unordered",
      items: [
        "값을 입력하고 입력·출력 단위를 선택하세요. 입력과 동시에 결과가 갱신됩니다.",
        "단위 바꾸기로 입·출력을 뒤집고, 복사로 결과를 가져갈 수 있습니다. ‘모든 단위 변환’ 패널에서 지원하는 모든 각도 단위로의 값을 볼 수 있습니다.",
      ],
    },
    {
      title: "수식 및 상세 내용",
      type: "paragraphs",
      items: [
        "한 쌍(예: degree→radian)에 대한 수식·예시·표가 필요하면 아래 목록의 전용 변환기를 사용하세요.",
        "자주 묻는 질문은 위 FAQ 섹션에 있습니다. 모든 계산은 고정 정의로 라디안을 거칩니다.",
      ],
    },
    {
      title: "활용 예시",
      type: "unordered",
      items: [
        "수학·CAD: 삼각함수·그래픽 API의 degree vs radian.",
        "천문·측량: arc minute, arc second, gradian.",
        "탄도·전술 광학: milliradian, NATO mil vs degree.",
      ],
    },
  ],
  faq: [
    {
      question: "어떤 각도 단위를 지원하나요?",
      answer:
        "turn, quadrant, sextant, degree, arc minute, MOA, arc second, gradian, radian, milliradian, microradian, NATO mil을 변환할 수 있습니다.",
    },
    {
      question: "전용 각도 쌍 변환기를 열 수 있나요?",
      answer: "예. 수식, 예시, 변환 표가 있는 전용 쌍 페이지가 있습니다.",
    },
    {
      question: "기하·광학 작업에 유용한가요?",
      answer: "예. 기하, 측량, 천문, 광학 각도 검산에 유용합니다.",
    },
  ],
  backToHub: "← 단위 변환기로 돌아가기",
};
