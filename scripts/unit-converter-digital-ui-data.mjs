/** Digital storage converter hub, pair pages, UnitConverter, FAQ page UI — EN/KO */

export const DIGITAL_UNIT_KEYS = [
  "pib", "pb", "pibit", "pbit", "tib", "tb", "tibit", "tbit",
  "gib", "gb", "gibit", "gbit", "mib", "mb", "mibit", "mbit",
  "kib", "kb", "kibit", "kbit", "b", "bit",
];

export const DIGITAL_KEY_TO_SLUG = {
  pib: "pebibyte",
  pb: "petabyte",
  pibit: "pebibit",
  pbit: "petabit",
  tib: "tebibyte",
  tb: "terabyte",
  tibit: "tebibit",
  tbit: "terabit",
  gib: "gibibyte",
  gb: "gigabyte",
  gibit: "gibibit",
  gbit: "gigabit",
  mib: "mebibyte",
  mb: "megabyte",
  mibit: "mebibit",
  mbit: "megabit",
  kib: "kibibyte",
  kb: "kilobyte",
  kibit: "kibibit",
  kbit: "kilobit",
  b: "byte",
  bit: "bit",
};

export const DIGITAL_HUB_KEYS = ["gb", "tb", "mb", "b", "kb", "bit", "mbit"];

const unitDescriptionsEn = {
  gb:
    "The gigabyte (GB) here is a decimal unit: 1 GB = 10⁹ bytes. Storage marketing and many OS dialogs use decimal GB; some systems still show binary (GiB) labels—check context when comparing numbers.",
  tb:
    "The terabyte (TB) is 10¹² bytes in this tool (decimal SI). Large drives and cloud tiers are usually quoted in TB using powers of ten.",
  mb:
    "The megabyte (MB) is 10⁶ bytes (decimal). File sizes and download speeds are often discussed in MB alongside megabits per second (Mb/s) for networks.",
  b:
    "The byte is eight bits and is the usual addressable unit for files and memory. This converter expresses every unit in byte-equivalents using fixed factors.",
  kb:
    "The kilobyte (KB) is 10³ bytes (decimal kB). Binary KiB (1024 B) is a separate unit in the main converter (kibibyte).",
  pb:
    "The petabyte (PB) is 10¹⁵ bytes. Datacenter capacity and archival scale often reach PB using decimal definitions.",
  bit:
    "A bit is a binary digit. Here 1 byte = 8 bits, so the byte-equivalent of one bit is 0.125 bytes. Networking speeds often use bits per second.",
  mbit:
    "The megabit (Mb) is 10⁶ bits. Dividing by 8 gives byte-equivalents for data size; ISP speeds (Mbps) refer to megabits per second, not megabytes.",
  pib:
    "The pebibyte (PiB) is 2⁵⁰ bytes (IEC binary). RAM and some OS internals use binary prefixes; compare carefully with decimal petabytes.",
  pb_dec:
    "The petabyte (PB) is 10¹⁵ bytes (decimal). Datacenter capacity often uses decimal PB.",
  tib:
    "The tebibyte (TiB) is 2⁴⁰ bytes. Drive tools may show TiB while retail labels use decimal TB.",
  tb_dec:
    "The terabyte (TB) is 10¹² bytes (decimal). Consumer storage labels typically use decimal TB.",
  gib:
    "The gibibyte (GiB) is 2³⁰ bytes. Memory modules and some file managers report GiB.",
  mib:
    "The mebibyte (MiB) is 2²⁰ bytes. Binary mebibytes differ from decimal megabytes by about 4.9%.",
  kib:
    "The kibibyte (KiB) is 2¹⁰ = 1,024 bytes. Binary KiB is not the same as decimal kB (1,000 B).",
  pibit: "The pebibit (Pibit) is 2⁵⁰ bits, mapped through 8 bits per byte in this tool.",
  pbit: "The petabit (Pbit) is 10¹⁵ bits (decimal).",
  tibit: "The tebibit (Tibit) is 2⁴⁰ bits.",
  tbit: "The terabit (Tbit) is 10¹² bits (decimal).",
  gibit: "The gibibit (Gibit) is 2³⁰ bits.",
  gbit: "The gigabit (Gbit) is 10⁹ bits (decimal).",
  mibit: "The mebibit (Mibit) is 2²⁰ bits.",
  kibit: "The kibibit (Kibit) is 2¹⁰ bits.",
  kbit: "The kilobit (kbit) is 10³ bits (decimal).",
};

// Fix duplicate keys - use proper keys only
delete unitDescriptionsEn.pb_dec;
delete unitDescriptionsEn.tb_dec;

const unitDescriptionsKo = {
  gb:
    "기가바이트(GB)는 여기서 10⁹바이트(십진 SI)입니다. 저장 장치·OS 표기는 십진 GB를 쓰는 경우가 많고, GiB(이진)와 혼동하지 마세요.",
  tb:
    "테라바이트(TB)는 10¹²바이트(십진)입니다. 대용량 드라이브·클라우드 용량에 흔합니다.",
  mb:
    "메가바이트(MB)는 10⁶바이트(십진)입니다. 파일 크기·다운로드와 네트워크 Mbps를 함께 볼 때 씁니다.",
  b:
    "바이트(byte)는 8비트 묶음으로 파일·메모리의 기본 단위입니다. 이 변환기는 모든 단위를 바이트 등가로 맞춥니다.",
  kb:
    "킬로바이트(KB)는 10³바이트(십진 kB)입니다. 이진 KiB(1,024 B)는 메인 변환기의 kibibyte입니다.",
  pb:
    "페타바이트(PB)는 10¹⁵바이트입니다. 데이터센터·아카이브 규모에 쓰입니다.",
  bit:
    "비트(bit)는 이진 자릿수입니다. 1바이트=8비트이므로 1비트=0.125 B입니다. 회선 속도는 보통 bps로 표기합니다.",
  mbit:
    "메가비트(Mb)는 10⁶비트입니다. 8로 나누면 바이트 등가가 됩니다. ISP Mbps는 메가바이트/초가 아닙니다.",
  pib: "페비바이트(PiB)는 2⁵⁰바이트(IEC 이진)입니다. 십진 PB와 다릅니다.",
  tib: "테비바이트(TiB)는 2⁴⁰바이트입니다. 소매 TB(십진)와 구분하세요.",
  gib: "기비바이트(GiB)는 2³⁰바이트입니다. 메모리·일부 OS가 GiB를 표시합니다.",
  mib: "메비바이트(MiB)는 2²⁰바이트입니다. 십진 MB와 약 4.9% 차이납니다.",
  kib: "키비바이트(KiB)는 2¹⁰=1,024바이트입니다. 십진 kB(1,000 B)와 다릅니다.",
  pibit: "페비비트(Pibit)는 2⁵⁰비트이며, 8비트=1바이트로 환산합니다.",
  pbit: "페타비트(Pbit)는 10¹⁵비트(십진)입니다.",
  tibit: "테비비트(Tibit)는 2⁴⁰비트입니다.",
  tbit: "테라비트(Tbit)는 10¹²비트(십진)입니다.",
  gibit: "기비비트(Gibit)는 2³⁰비트입니다.",
  gbit: "기가비트(Gbit)는 10⁹비트(십진)입니다.",
  mibit: "메비비트(Mibit)는 2²⁰비트입니다.",
  kibit: "키비비트(Kibit)는 2¹⁰비트입니다.",
  kbit: "킬로비트(kbit)는 10³비트(십진)입니다.",
};

export const digitalUiEn = {
  shared: { copy: "Copy", copied: "Copied!", copyFailed: "Failed to copy" },
  unitDescriptions: unitDescriptionsEn,
  digitalConverter: {
    converterTitle: "Convert Digital Storage",
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
  digitalHub: {
    subtitleBadge: "unit-converter",
    pairGridTitle:
      "Dedicated converters (gigabyte, terabyte, megabyte, byte, kilobyte, petabyte, bit, megabit)",
    pairGridDesc:
      "{count} pages — every pair of units below, with fixed input/output, formulas, examples, and conversion tables.",
    pairLinkTemplate: "{fromSlug} to {toSlug} ({fromName} to {toName})",
    faqSectionTitle: "Common questions (FAQ)",
    faqSectionDesc: "{count} quick answers with guides and links to the matching converter.",
    guideTitle: "Digital Storage Converter Guide",
  },
  digitalPairCalculator: {
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
  digitalPairPage: {
    subtitleBadge: "Digital storage · unit-converter",
    aboutTitle: "About {unit}",
    summaryTitle: "Summary",
    relationshipTitle: "Relationship context",
    conversionTablesTitle: "Conversion tables",
    introTemplate:
      "Convert {fromName} to {toName} with fixed input and output units, a step-by-step formula line, and reference tables. This hub uses decimal byte units (kB, MB, GB, …) and decimal megabits; the main converter also includes binary (KiB, MiB, …) units.",
    h1Template: "{fromName} to {toName} Converter",
    summaryTemplate:
      "To convert {fromName} to {toName}, multiply the value in {fromKey} by the ratio of bytes per {fromKey} divided by bytes per {toKey}. Equivalently: value_{toKey} = value_{fromKey} × ({fromFactor} / {toFactor}). Numerically, 1 {fromKey} equals {mult} {toKey}.",
    relationshipSame:
      "Both units are {kind} in this tool. Factors are fixed relative to one byte, so conversions are exact in floating-point arithmetic here. The factor from {fromName} to {toName} is {multExp} (1 {fromKey} = {mult} {toKey}).",
    relationshipCross:
      "You are converting between {fromKind} ({fromName}) and {toKind} ({toName}). Bit units are mapped through 8 bits per byte, then scaled with the same decimal prefixes as byte units. The numeric factor is {multExp}.",
    relationshipDefault:
      "Digital units are converted via byte-equivalents. The multiplier between {fromKey} and {toKey} is {multExp}.",
    kindByte: "byte-based units (decimal SI: kB, MB, GB, …)",
    kindBit: "bit-based units (converted via 8 bits per byte)",
    backToDigitalHub: "← Digital Storage Converter (all units)",
    backToUnitConverter: "Unit Converter home",
    nonHubTitle: "Conversions outside the hub list",
    nonHubIntro:
      "The grid on the category page lists hub units only. These pairs include at least one unit outside that hub set (same tools: formulas and tables on each page).",
    nonHubLine1: "{fromSlug} to {toSlug}",
    nonHubLine2: "{fromName} to {toName}",
  },
  howToConvert: {
    titleTemplate: "How to convert {fromPlural} to {toPlural}",
    oneEquals:
      "1 {fromSg} is equal to {mult} {toSg} in this tool (values are compared in byte-equivalents):",
    factorExplain:
      "Each {fromSg} counts as {fromFactor} bytes and each {toSg} as {toFactor} bytes, so one {fromKey} equals {fromFactor} ÷ {toFactor} {toKey} = {mult} {toKey}.",
    letDFrom:
      "Let d({fromKey}) be the numeric amount in {fromSg} ({fromKey}), and d({toKey}) the amount in {toSg} ({toKey}). Then:",
    divideExplain:
      "Equivalently, divide by how many {fromKey} fit into one {toKey} (bytes per {toKey} divided by bytes per {fromKey}):",
    orLine: "Or: {toSg} = {fromSg} ÷ {divisor}",
    examplesTitle: "Examples",
    exampleTitleTemplate: "Example #{n}: Convert {value} {fromKey} to {toSg}",
    extraDerivations: {
      "bit-b": "8 bits make 1 byte, so 1 bit = 1/8 byte (0.125 B).",
      "b-bit": "1 byte = 8 bits exactly.",
      "kb-b": "Decimal kilobyte: 1 kB = 1,000 bytes (10³).",
      "mb-kb": "Decimal steps: 1 MB = 1,000 kB (10³ kilobytes per megabyte).",
      "gb-mb": "1 GB = 1,000 MB (decimal gigabyte).",
      "tb-gb": "1 TB = 1,000 GB (decimal terabyte).",
      "pb-tb": "1 PB = 1,000 TB (decimal petabyte).",
      "mbit-b": "1 megabit = 10⁶ bits = (10⁶ ÷ 8) bytes = 125,000 bytes with decimal definitions used here.",
    },
  },
  faqPage: {
    converterLabel: "Digital Storage Converter",
    navFaqLabel: "FAQ",
    detailedAnswerSr: "Detailed answer",
    relationshipTitle: "Relationship context",
    quickTableTitle: "Quick conversion table",
    ctaTemplate: "Need a precise calculation? Go to {label}",
    backUnitConverter: "Unit Converter",
    moreConvertersTitle: "More {unit} converters",
    moreConvertersIntro:
      "Dedicated pages from {unitSg} to every other hub digital unit (gigabyte, terabyte, megabyte, byte, kilobyte, bit, megabit).",
    moreConvertersLink: "{fromSlug} to {toSlug} ({fromName} to {toName})",
  },
};

export const digitalUiKo = {
  shared: { copy: "복사", copied: "복사되었습니다!", copyFailed: "복사에 실패했습니다" },
  unitDescriptions: unitDescriptionsKo,
  digitalConverter: {
    converterTitle: "디지털 저장 용량 변환",
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
  digitalHub: {
    subtitleBadge: "unit-converter",
    pairGridTitle: "전용 변환기 (gigabyte, terabyte, megabyte, byte, kilobyte, petabyte, bit, megabit)",
    pairGridDesc:
      "{count}개 페이지 — 아래 모든 단위 쌍. 고정 입·출력, 수식, 예시, 변환 표가 포함됩니다.",
    pairLinkTemplate: "{fromSlug} → {toSlug} ({fromName} → {toName})",
    faqSectionTitle: "자주 묻는 질문",
    faqSectionDesc: "{count}개의 빠른 답변과 해당 변환기 링크를 제공합니다.",
    guideTitle: "디지털 저장 용량 변환기 가이드",
  },
  digitalPairCalculator: {
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
  digitalPairPage: {
    subtitleBadge: "디지털 저장 · unit-converter",
    aboutTitle: "{unit} 소개",
    summaryTitle: "요약",
    relationshipTitle: "관계 설명",
    conversionTablesTitle: "변환 표",
    introTemplate:
      "{fromName}을(를) {toName}(으)로 변환합니다. 입·출력 단위가 고정되어 있으며, 단계별 수식과 참고 표를 제공합니다. 이 허브는 십진 바이트 단위(kB, MB, GB, …)와 십진 메가비트를 씁니다. 메인 변환기에는 이진(KiB, MiB, …) 단위도 있습니다.",
    h1Template: "{fromName} → {toName} 변환기",
    summaryTemplate:
      "{fromName}을(를) {toName}(으)로 변환하려면 {fromKey} 값에 ‘바이트당 {fromKey}’를 ‘바이트당 {toKey}’로 나눈 비율을 곱합니다. 즉 value_{toKey} = value_{fromKey} × ({fromFactor} / {toFactor}). 수치상 1 {fromKey} = {mult} {toKey}입니다.",
    relationshipSame:
      "두 단위 모두 이 도구에서 {kind}입니다. 바이트 기준 고정 계수로 변환하므로 여기서는 부동소수 연산상 정확합니다. {fromName}→{toName} 계수는 {multExp} (1 {fromKey} = {mult} {toKey}).",
    relationshipCross:
      "{fromKind}({fromName})과 {toKind}({toName}) 사이 변환입니다. 비트 단위는 8비트=1바이트로 매핑한 뒤 바이트 단위와 같은 십진 접두를 씁니다. 수치 계수는 {multExp}입니다.",
    relationshipDefault:
      "디지털 단위는 바이트 등가로 변환됩니다. {fromKey}와 {toKey} 사이 배율은 {multExp}입니다.",
    kindByte: "바이트 기반 단위(십진 SI: kB, MB, GB, …)",
    kindBit: "비트 기반 단위(8비트=1바이트로 환산)",
    backToDigitalHub: "← 디지털 저장 변환기 (모든 단위)",
    backToUnitConverter: "단위 변환기 홈",
    nonHubTitle: "허브 목록 밖 변환",
    nonHubIntro:
      "카테고리 페이지 그리드는 허브 단위만 나열합니다. 아래 쌍은 허브 밖 단위를 하나 이상 포함합니다(동일한 수식·표 도구).",
    nonHubLine1: "{fromSlug} → {toSlug}",
    nonHubLine2: "{fromName} → {toName}",
  },
  howToConvert: {
    titleTemplate: "{fromPlural}을(를) {toPlural}(으)로 변환하는 방법",
    oneEquals: "1 {fromSg}은(는) 이 도구에서 {mult} {toSg}와 같습니다(바이트 등가로 비교):",
    factorExplain:
      "1 {fromSg}는 {fromFactor}바이트, 1 {toSg}는 {toFactor}바이트이므로 1 {fromKey} = {fromFactor} ÷ {toFactor} {toKey} = {mult} {toKey}입니다.",
    letDFrom:
      "{fromSg}({fromKey})로 잰 값을 d({fromKey}), {toSg}({toKey})로 잰 값을 d({toKey})라 하면:",
    divideExplain:
      "또는 1 {toKey}에 들어가는 {fromKey} 개수(바이트/{toKey} ÷ 바이트/{fromKey})로 나눌 수 있습니다:",
    orLine: "즉: {toSg} = {fromSg} ÷ {divisor}",
    examplesTitle: "예시",
    exampleTitleTemplate: "예시 #{n}: {value} {fromKey}를 {toSg}(으)로 변환",
    extraDerivations: {
      "bit-b": "8비트=1바이트이므로 1비트=1/8바이트(0.125 B).",
      "b-bit": "1바이트=8비트(정확).",
      "kb-b": "십진 킬로바이트: 1 kB = 1,000바이트(10³).",
      "mb-kb": "십진 단계: 1 MB = 1,000 kB.",
      "gb-mb": "1 GB = 1,000 MB(십진 기가바이트).",
      "tb-gb": "1 TB = 1,000 GB(십진 테라바이트).",
      "pb-tb": "1 PB = 1,000 TB(십진 페타바이트).",
      "mbit-b": "1 메가비트 = 10⁶비트 = (10⁶÷8)바이트 = 125,000바이트(여기서 십진 정의).",
    },
  },
  faqPage: {
    converterLabel: "디지털 저장 변환기",
    navFaqLabel: "자주 묻는 질문",
    detailedAnswerSr: "상세 답변",
    relationshipTitle: "관계 설명",
    quickTableTitle: "빠른 변환 표",
    ctaTemplate: "정확한 계산이 필요하면 {label}(으)로 이동",
    backUnitConverter: "단위 변환기",
    moreConvertersTitle: "{unit} 관련 변환기",
    moreConvertersIntro:
      "{unitSg}에서 다른 허브 디지털 단위(gigabyte, terabyte, megabyte, byte, kilobyte, bit, megabit)로 가는 전용 페이지입니다.",
    moreConvertersLink: "{fromSlug} → {toSlug} ({fromName} → {toName})",
  },
};

export const digitalHubContentEn = {
  h1: "Digital Storage Converter",
  subtitle: "unit-converter",
  intro:
    "Convert between bits, bytes, decimal and binary prefixes. All Unit Conversions panel included.",
  guideTitle: "Digital Storage Converter Guide",
  sections: [
    {
      title: "Quick start",
      type: "unordered",
      items: [
        "Enter a value and pick source and target units. The result updates as you type.",
        "Use swap to reverse units and copy to copy the result. The All Unit Conversions panel lists your value across every supported unit (decimal and binary).",
      ],
    },
    {
      title: "Formulas & deeper content",
      type: "paragraphs",
      items: [
        "Need formulas, worked examples, and tables for one pair (e.g. gigabytes to terabytes)? Use a dedicated converter from the list below.",
        "Short answers to common questions are in the FAQ section above. Dedicated hub pages use decimal kB/MB/GB/TB/PB, bytes, bits, and megabits; KiB/MiB/GiB remain in the main tool.",
      ],
    },
    {
      title: "Example uses",
      type: "unordered",
      items: [
        "Downloads: compare file size in MB or GB with line speed in Mbps.",
        "Storage: plan capacity in TB or PB.",
        "Memory and files: bytes, KB, and MB for smaller objects.",
      ],
    },
  ],
  faq: [
    {
      question: "Can I convert both decimal and binary storage units?",
      answer:
        "Yes. You can convert common decimal and binary digital storage units in one place.",
    },
    {
      question: "Are dedicated digital pair pages available?",
      answer:
        "Yes. This page links to dedicated pair converters with formulas, examples, and tables.",
    },
    {
      question: "Does this digital converter run locally?",
      answer: "Yes. Calculations run in your browser.",
    },
  ],
  backToHub: "← Back to Unit Converter",
};

export const digitalHubContentKo = {
  h1: "디지털 저장 변환기",
  subtitle: "unit-converter",
  intro:
    "비트, 바이트, 십진·이진 접두 단위를 변환합니다. 모든 단위 변환 패널이 포함되어 있습니다.",
  guideTitle: "디지털 저장 변환기 가이드",
  sections: [
    {
      title: "빠른 시작",
      type: "unordered",
      items: [
        "값을 입력하고 입력·출력 단위를 선택하세요. 입력과 동시에 결과가 갱신됩니다.",
        "단위 바꾸기로 입·출력을 뒤집고, 복사로 결과를 가져갈 수 있습니다. ‘모든 단위 변환’ 패널에서 십진·이진을 포함한 모든 지원 단위로의 값을 볼 수 있습니다.",
      ],
    },
    {
      title: "수식 및 상세 내용",
      type: "paragraphs",
      items: [
        "한 쌍(예: gigabyte→terabyte)에 대한 수식·예시·표가 필요하면 아래 목록의 전용 변환기를 사용하세요.",
        "자주 묻는 질문은 위 FAQ 섹션에 있습니다. 전용 허브 페이지는 십진 kB/MB/GB/TB/PB, byte, bit, megabit을 씁니다. KiB/MiB/GiB는 메인 도구에 있습니다.",
      ],
    },
    {
      title: "활용 예시",
      type: "unordered",
      items: [
        "다운로드: 파일 크기(MB/GB)와 회선 속도(Mbps) 비교.",
        "저장: TB/PB 용량 계획.",
        "메모리·파일: byte, KB, MB 등 소형 단위.",
      ],
    },
  ],
  faq: [
    {
      question: "십진·이진 저장 단위를 모두 변환할 수 있나요?",
      answer: "예. 일반적인 십진·이진 디지털 저장 단위를 한곳에서 변환할 수 있습니다.",
    },
    {
      question: "전용 디지털 쌍 변환 페이지가 있나요?",
      answer: "예. 수식, 예시, 변환 표가 있는 전용 쌍 페이지로 연결됩니다.",
    },
    {
      question: "브라우저에서 로컬로 계산되나요?",
      answer: "예. 계산은 브라우저에서 실행됩니다.",
    },
  ],
  backToHub: "← 단위 변환기로 돌아가기",
};
