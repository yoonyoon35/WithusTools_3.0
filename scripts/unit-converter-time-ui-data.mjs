/** Time converter hub, pair pages, UnitConverter, FAQ page UI — EN/KO */

export const TIME_UNIT_KEYS = ["yr", "mo", "wk", "d", "h", "min", "s", "ms", "us", "ns"];

export const TIME_KEY_TO_SLUG = {
  yr: "year",
  mo: "month",
  wk: "week",
  d: "day",
  h: "hour",
  min: "minute",
  s: "second",
  ms: "millisecond",
  us: "microsecond",
  ns: "nanosecond",
};

export const TIME_HUB_KEYS = ["yr", "mo", "wk", "d", "h", "min", "s", "ms"];

const unitDescriptionsEn = {
  yr: "In this converter, one year is defined as exactly 365 days (31,536,000 seconds). Calendar years with leap days differ; use this factor for consistent duration math.",
  mo: "One month here is exactly 30 days (2,592,000 seconds)—a common average for converters. Real calendar months vary from 28 to 31 days.",
  wk: "One week is 7 days or 604,800 seconds. Weeks are used for schedules, payroll periods, and agile sprints.",
  d: "One day is 24 hours or 86,400 seconds (civil day, no leap-second adjustment in this tool).",
  h: "One hour is 60 minutes or 3,600 seconds. Hours divide work shifts, travel time, and media duration.",
  min: "One minute is 60 seconds. Minutes are standard for short durations and timestamps.",
  s: "The second is the SI base unit of time (scientific definition via atomic clocks). This tool uses fixed-length seconds for conversion.",
  ms: "One millisecond is one thousandth of a second. Computing, audio, and reaction times use milliseconds.",
  us: "One microsecond is one millionth of a second. Electronics and high-speed measurements use microseconds.",
  ns: "One nanosecond is one billionth of a second. CPU timings and optics may reference nanoseconds.",
};

const unitDescriptionsKo = {
  yr: "이 변환기에서 1년은 정확히 365일(31,536,000초)입니다. 윤년 달력과 다를 수 있으며, 일관된 기간 계산용 계수입니다.",
  mo: "여기서 1개월은 정확히 30일(2,592,000초)입니다. 실제 달력 월은 28–31일로 다릅니다.",
  wk: "1주는 7일 또는 604,800초입니다. 일정·급여·스프린트에 쓰입니다.",
  d: "1일은 24시간 또는 86,400초입니다(윤초 미반영 민간일).",
  h: "1시간은 60분 또는 3,600초입니다. 근무·이동·미디어 길이에 쓰입니다.",
  min: "1분은 60초입니다. 짧은 기간·타임스탬프에 표준입니다.",
  s: "초(s)는 SI 기본 시간 단위입니다. 이 도구는 고정 길이 초로 변환합니다.",
  ms: "1밀리초(ms)는 1/1,000초입니다. 컴퓨팅·오디오·반응 시간에 쓰입니다.",
  us: "1마이크로초(μs)는 1/1,000,000초입니다. 전자·고속 측정에 쓰입니다.",
  ns: "1나노초(ns)는 1/1,000,000,000초입니다. CPU·광학 타이밍에 쓰입니다.",
};

export const timeUiEn = {
  shared: { copy: "Copy", copied: "Copied!", copyFailed: "Failed to copy" },
  unitDescriptions: unitDescriptionsEn,
  timeConverter: {
    converterTitle: "Convert Time",
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
  timeHub: {
    subtitleBadge: "unit-converter",
    pairGridTitle: "Dedicated converters (year, month, week, day, hour, minute, second, millisecond)",
    pairGridDesc:
      "{count} pages — every pair of units below, with fixed input/output, formulas, examples, and conversion tables.",
    pairLinkTemplate: "{fromSlug} to {toSlug} ({fromName} to {toName})",
    faqSectionTitle: "Common questions (FAQ)",
    faqSectionDesc: "{count} quick answers with guides and links to the matching converter.",
    guideTitle: "Time Converter Guide",
  },
  timePairCalculator: {
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
  timePairPage: {
    subtitleBadge: "Time · unit-converter",
    aboutTitle: "About {unit}",
    summaryTitle: "Summary",
    relationshipTitle: "Relationship context",
    conversionTablesTitle: "Conversion tables",
    introTemplate:
      "Convert {fromName} to {toName} with a fixed input and output unit, step-by-step formula line, and reference tables. Year = 365 days and month = 30 days in this tool for consistent factors; calendar months and leap years differ in real life.",
    h1Template: "{fromName} to {toName} Converter",
    summaryTemplate:
      "To convert {fromName} to {toName}, multiply the value in {fromKey} by the ratio of seconds per {fromKey} divided by seconds per {toKey}. Equivalently: value_{toKey} = value_{fromKey} × ({fromFactor} / {toFactor}). Numerically, 1 {fromKey} equals {mult} {toKey}.",
    relationshipSame:
      "Both units fall in {tier} in this tool. Conversions use fixed second counts per unit, so factors stay consistent for estimation and UI math. The factor from {fromName} to {toName} is {multExp} (1 {fromKey} = {mult} {toKey}).",
    relationshipCross:
      "You are converting between {fromTier} ({fromName}) and {toTier} ({toName}). Very large and very small steps share the same second-based definitions here. The numeric factor is {multExp}.",
    relationshipDefault:
      "Time units are converted via their exact definitions in seconds. The multiplier between {fromKey} and {toKey} is {multExp}.",
    tierLong: "longer spans (days to years, with average month/year definitions)",
    tierMedium: "hours, minutes, and seconds",
    tierShort: "subsecond precision (milliseconds and smaller)",
    backToTimeHub: "← Time Converter (all units)",
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
      "Each {fromSg} is defined as {fromFactor} s and each {toSg} as {toFactor} s, so one {fromKey} equals {fromFactor} ÷ {toFactor} {toKey} = {mult} {toKey}.",
    letTFrom:
      "Let t({fromKey}) be the numeric value of the same duration measured in {fromSg} ({fromKey}), and t({toKey}) the value in {toSg} ({toKey}). Then:",
    divideExplain:
      "Equivalently, divide by how many {fromKey} fit into one {toKey} (seconds per {toKey} divided by seconds per {fromKey}):",
    orLine: "Or: {toSg} = {fromSg} ÷ {divisor}",
    examplesTitle: "Examples",
    exampleTitleTemplate: "Example #{n}: Convert {value} {fromKey} to {toSg}",
    extraDerivations: {
      "min-s": "1 minute = 60 seconds exactly.",
      "h-min": "1 hour = 60 minutes exactly.",
      "d-h": "1 day = 24 hours exactly (in this converter's civil-day model).",
      "wk-d": "1 week = 7 days exactly.",
      "s-ms": "1 second = 1,000 milliseconds exactly.",
      "yr-d": "1 year here = 365 days = 31,536,000 seconds (no leap day in this fixed definition).",
    },
  },
  faqPage: {
    converterLabel: "Time Converter",
    navFaqLabel: "FAQ",
    detailedAnswerSr: "Detailed answer",
    relationshipTitle: "Relationship context",
    quickTableTitle: "Quick conversion table",
    ctaTemplate: "Need a precise calculation? Go to {label}",
    backUnitConverter: "Unit Converter",
    moreConvertersTitle: "More {unit} converters",
    moreConvertersIntro:
      "Dedicated pages from {unitSg} to every other hub time unit (year, month, week, day, hour, minute, second, millisecond).",
    moreConvertersLink: "{fromSlug} to {toSlug} ({fromName} to {toName})",
  },
};

export const timeUiKo = {
  shared: { copy: "복사", copied: "복사되었습니다!", copyFailed: "복사에 실패했습니다" },
  unitDescriptions: unitDescriptionsKo,
  timeConverter: {
    converterTitle: "시간 변환",
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
  timeHub: {
    subtitleBadge: "unit-converter",
    pairGridTitle: "전용 변환기 (년, 월, 주, 일, 시, 분, 초, 밀리초)",
    pairGridDesc:
      "{count}개 페이지 — 아래 모든 단위 쌍. 고정 입·출력, 수식, 예시, 변환 표가 포함됩니다.",
    pairLinkTemplate: "{fromSlug} → {toSlug} ({fromName} → {toName})",
    faqSectionTitle: "자주 묻는 질문",
    faqSectionDesc: "{count}개의 빠른 답변과 해당 변환기 링크를 제공합니다.",
    guideTitle: "시간 변환기 가이드",
  },
  timePairCalculator: {
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
  timePairPage: {
    subtitleBadge: "시간 · unit-converter",
    aboutTitle: "{unit} 소개",
    summaryTitle: "요약",
    relationshipTitle: "관계 설명",
    conversionTablesTitle: "변환 표",
    introTemplate:
      "{fromName}을(를) {toName}(으)로 변환합니다. 입·출력 단위가 고정되어 있으며, 단계별 수식과 참고 표를 제공합니다. 이 도구는 1년=365일, 1개월=30일 고정 계수를 씁니다(실제 달력·윤년과 다를 수 있음).",
    h1Template: "{fromName} → {toName} 변환기",
    summaryTemplate:
      "{fromName}을(를) {toName}(으)로 변환하려면 {fromKey} 값에 ‘초당 {fromKey}’를 ‘초당 {toKey}’로 나눈 비율을 곱합니다. 즉 value_{toKey} = value_{fromKey} × ({fromFactor} / {toFactor}). 수치상 1 {fromKey} = {mult} {toKey}입니다.",
    relationshipSame:
      "두 단위 모두 이 도구에서 {tier}에 속합니다. 단위별 고정 초 수로 변환하므로 추정·UI 계산에 일관됩니다. {fromName}→{toName} 계수는 {multExp} (1 {fromKey} = {mult} {toKey}).",
    relationshipCross:
      "{fromTier}({fromName})과 {toTier}({toName}) 사이 변환입니다. 크고 작은 단위도 여기서는 초 기반 정의를 공유합니다. 수치 계수는 {multExp}입니다.",
    relationshipDefault:
      "시간 단위는 초 정의를 통해 변환됩니다. {fromKey}와 {toKey} 사이 배율은 {multExp}입니다.",
    tierLong: "장기 구간(일~년, 평균 월/년 정의)",
    tierMedium: "시·분·초",
    tierShort: "초 미만(밀리초 이하)",
    backToTimeHub: "← 시간 변환기 (모든 단위)",
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
      "1 {fromSg}는 {fromFactor}s, 1 {toSg}는 {toFactor}s로 정의되므로 1 {fromKey} = {fromFactor} ÷ {toFactor} {toKey} = {mult} {toKey}입니다.",
    letTFrom:
      "같은 기간을 {fromSg}({fromKey})로 잰 값을 t({fromKey}), {toSg}({toKey})로 잰 값을 t({toKey})라 하면:",
    divideExplain:
      "또는 1 {toKey}에 들어가는 {fromKey} 개수(초/{toKey} ÷ 초/{fromKey})로 나눌 수 있습니다:",
    orLine: "즉: {toSg} = {fromSg} ÷ {divisor}",
    examplesTitle: "예시",
    exampleTitleTemplate: "예시 #{n}: {value} {fromKey}를 {toSg}(으)로 변환",
    extraDerivations: {
      "min-s": "1분 = 60초(정확).",
      "h-min": "1시간 = 60분(정확).",
      "d-h": "1일 = 24시간(이 도구의 민간일 모델, 정확).",
      "wk-d": "1주 = 7일(정확).",
      "s-ms": "1초 = 1,000ms(정확).",
      "yr-d": "여기서 1년 = 365일 = 31,536,000초(윤일 미포함 고정 정의).",
    },
  },
  faqPage: {
    converterLabel: "시간 변환기",
    navFaqLabel: "자주 묻는 질문",
    detailedAnswerSr: "상세 답변",
    relationshipTitle: "관계 설명",
    quickTableTitle: "빠른 변환 표",
    ctaTemplate: "정확한 계산이 필요하면 {label}(으)로 이동",
    backUnitConverter: "단위 변환기",
    moreConvertersTitle: "{unit} 관련 변환기",
    moreConvertersIntro:
      "{unitSg}에서 다른 허브 시간 단위(year, month, week, day, hour, minute, second, millisecond)로 가는 전용 페이지입니다.",
    moreConvertersLink: "{fromSlug} → {toSlug} ({fromName} → {toName})",
  },
};

export const timeHubContentEn = {
  h1: "Time Converter",
  subtitle: "unit-converter",
  intro:
    "Convert between seconds, minutes, hours, days, weeks, months, years, and more. All Unit Conversions panel included.",
  guideTitle: "Time Converter Guide",
  sections: [
    {
      title: "Quick start",
      type: "unordered",
      items: [
        "Enter a value and pick source and target units. The result updates as you type.",
        "Use swap to reverse units and copy to copy the result. The All Unit Conversions panel lists your value across every supported time unit.",
      ],
    },
    {
      title: "Formulas & deeper content",
      type: "paragraphs",
      items: [
        "Need formulas, worked examples, and tables for one pair (e.g. hours to days)? Use a dedicated converter from the list above.",
        "Short answers to common questions are in the FAQ section above. Year is modeled as 365 days and month as 30 days for fixed conversion factors.",
      ],
    },
    {
      title: "Example uses",
      type: "unordered",
      items: [
        "Scheduling: project durations in days or weeks.",
        "Media: lengths in hours, minutes, and seconds.",
        "Science and engineering: seconds and milliseconds.",
      ],
    },
  ],
  faq: [
    {
      question: "What time units are supported?",
      answer:
        "You can convert time units from seconds and minutes to hours, days, weeks, months, and years.",
    },
    {
      question: "Can I open dedicated time pair conversion pages?",
      answer: "Yes. Dedicated pair pages include formulas, examples, and conversion tables.",
    },
    {
      question: "Is this time converter good for planning and estimates?",
      answer: "Yes. It is useful for scheduling, project estimates, and study planning.",
    },
  ],
  backToHub: "← Back to Unit Converter",
};

export const timeHubContentKo = {
  h1: "시간 변환기",
  subtitle: "unit-converter",
  intro:
    "초, 분, 시, 일, 주, 월, 년 등을 변환합니다. 모든 단위 변환 패널이 포함되어 있습니다.",
  guideTitle: "시간 변환기 가이드",
  sections: [
    {
      title: "빠른 시작",
      type: "unordered",
      items: [
        "값을 입력하고 입력·출력 단위를 선택하세요. 입력과 동시에 결과가 갱신됩니다.",
        "단위 바꾸기로 입·출력을 뒤집고, 복사로 결과를 가져갈 수 있습니다. ‘모든 단위 변환’ 패널에서 지원하는 모든 시간 단위로의 값을 볼 수 있습니다.",
      ],
    },
    {
      title: "수식 및 상세 내용",
      type: "paragraphs",
      items: [
        "한 쌍(예: hour→day)에 대한 수식·예시·표가 필요하면 위 목록의 전용 변환기를 사용하세요.",
        "자주 묻는 질문은 위 FAQ 섹션에 있습니다. 1년=365일, 1개월=30일 고정 계수를 사용합니다.",
      ],
    },
    {
      title: "활용 예시",
      type: "unordered",
      items: [
        "일정: 일·주 단위 프로젝트 기간.",
        "미디어: 시·분·초 길이.",
        "과학·공학: 초·밀리초.",
      ],
    },
  ],
  faq: [
    {
      question: "어떤 시간 단위를 지원하나요?",
      answer: "초·분부터 시·일·주·월·년까지 변환할 수 있습니다.",
    },
    {
      question: "전용 시간 쌍 변환 페이지가 있나요?",
      answer: "예. 수식, 예시, 변환 표가 있는 전용 쌍 페이지가 있습니다.",
    },
    {
      question: "계획·추정에 쓸 수 있나요?",
      answer: "예. 일정, 프로젝트 추정, 학습 계획에 유용합니다.",
    },
  ],
  backToHub: "← 단위 변환기로 돌아가기",
};
