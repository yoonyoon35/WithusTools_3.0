import { percentageUiExtrasKo } from "./percentage-localized-data.mjs";
import { programmerTechnicalRefKo } from "./programmer-technical-reference-data.mjs";

export const gpaRelatedLinksKo = [
  {
    href: "/tools/calculator/gpa-calculator/target-gpa?goal=3.5",
    question: "누적 GPA 3.5를 위해 이번 학기엔 몇 점이 필요한가요?",
  },
  {
    href: "/tools/calculator/gpa-calculator/target-gpa?goal=3.7",
    question: "누적 3.7을 만들려면 이번 학기 GPA는 얼마가 필요하나요?",
  },
  {
    href: "/tools/calculator/gpa-calculator/target-gpa?goal=3.0",
    question: "누적 GPA를 3.0까지 올리려면 어떻게 계획해야 하나요?",
  },
  {
    href: "/tools/calculator/gpa-calculator/target-gpa?reset=1",
    question: "목표 누적 GPA 계산기(새 입력으로 시작)",
  },
  {
    href: "#gpa-conversion-table",
    question: "성적-학점 환산표(4.0, 4.3, 4.5, 5.0) 보기",
  },
  {
    href: "/faq/gpa/what-is-weighted-gpa",
    question: "가중 GPA란? AP/우등과목, 5.0 스케일과 일반 GPA 차이",
  },
  {
    href: "#gpa-guide-how-to-use",
    question: "GPA 계산기 빠른 사용법(단계별)",
  },
  {
    href: "/tools/calculator/percentage-calculator",
    question: "성적/일상 계산에 쓰는 퍼센트 계산기",
  },
  {
    href: "/tools/calculator",
    question: "평균, 퍼센트, 프로그래머 계산기 등 전체 도구 보기",
  },
  {
    href: "/tools/calculator/average-calculator",
    question: "시험 점수 평균(Mean) 계산기",
  },
];

export const calcUiKo = {
  average: {
    title: "평균/중앙값/최빈값 계산",
    numbersLabel: "숫자 입력(쉼표/공백 구분)",
    numbersPlaceholder: "예: 1, 2, 3, 4, 5",
    calculate: "계산",
    reset: "초기화",
    useSampleData: "샘플 데이터",
    copyResults: "결과 복사",
    copied: "복사됨!",
    decimals: "소수 자릿수",
    variance: "분산 기준",
    varianceSample: "표본(n−1)",
    variancePopulation: "모집단(n)",
    thousandsSeparator: "천 단위 구분",
    sortedData: "정렬된 데이터(오름차순)",
    errorInvalidNumbers: "유효한 숫자를 입력하세요",
  },
  calculator: {
    menu: "메뉴",
    memoryIndicator: "메모리",
    memoryClear: "MC",
    memoryRecall: "MR",
    memoryAdd: "M+",
    memorySubtract: "M-",
    memoryStore: "MS",
    clearEntry: "CE",
    clearAll: "C",
    backspace: "⌫",
    percent: "%",
    reciprocal: "1/x",
    square: "x²",
    sqrt: "²√x",
    negate: "±",
    equals: "=",
    error: "오류",
  },
  gpa: {
    settings: "설정",
    gradingScale: "학점 스케일",
    scaleHint: "학교 성적 체계를 확인하세요.",
    courseList: "과목 목록",
    addCourse: "과목 추가",
    courseNamePlaceholder: "과목명",
    creditsPlaceholder: "학점",
    deleteCourse: "과목 삭제",
    totalCredits: "총 학점",
    gpa: "GPA",
    letterGrade: "등급",
    resetAll: "전체 초기화",
    useSampleData: "샘플 데이터",
    copyResults: "결과 복사",
    copiedToClipboard: "클립보드에 복사됨",
    copyFailed: "복사 실패",
    sampleLoaded: "샘플 데이터 불러옴",
    resetComplete: "초기화 완료",
    conversionTableTitle: "GPA 환산표",
    conversionTableIntro:
      "등급을 학점 스케일별 GPA 점수로 변환할 때 참고하는 표입니다. 위 계산기에서 사용하는 값과 동일합니다.",
    colGrade: "등급",
    colScale40: "4.0 스케일(비가중)",
    colScale43: "4.3 스케일(A+ 스케일)",
    colScale45: "4.5 스케일",
    colScale50: "5.0 스케일(가중)",
    faqSectionTitle: "자주 묻는 질문(FAQ)",
    faqSectionIntro:
      "GPA 계획 도구, 이 페이지, 관련 계산기로 바로 이동할 수 있는 링크 {count}개입니다.",
  },
  targetGpa: {
    settings: "설정",
    gradingScale: "학점 스케일",
    targetRecordGoal: "현재 성적과 목표",
    currentCredits: "현재 누적 학점",
    currentGpa: "현재 누적 GPA",
    targetGpa: "목표 누적 GPA",
    plannedCredits: "이번 학기 예정 학점",
    expectedTermGpa: "예상 학기 GPA(선택)",
    expectedTermPlaceholder: "예: 3.8 (필요 학점 추정용)",
    requiredTermGpa: "필요 학기 GPA",
    approxLetter: "예상 등급",
    creditsAtExpected: "예상 GPA 기준 필요 학점",
    useSampleData: "샘플 데이터",
    resetAll: "전체 초기화",
    copyResults: "결과 복사",
    messageTargetRange: "목표 GPA를 스케일 범위 안에서 입력하세요.",
    messageCurrentGpa: "현재 누적 GPA를 올바르게 입력하세요.",
    messageCredits: "누적 학점은 0 이상으로 입력하세요.",
    messageTermCredits: "필요 학기 GPA 계산을 위해 이번 학기 학점을 0보다 크게 입력하세요.",
    copiedToClipboard: "클립보드에 복사됨",
    copyFailed: "복사 실패",
    nothingToCopy: "복사할 결과가 없습니다",
  },
  percentage: {
    tabs: {
      basic: "기본 퍼센트",
      change: "증감률",
      of: "전체 대비 비율",
      after: "변화 후 값",
    },
    labels: {
      percentage: "퍼센트(%)",
      number: "숫자",
      originalValue: "기존 값",
      newValue: "새 값",
      totalA: "전체(A)",
      partB: "부분(B)",
      startingValue: "시작 값",
      changePercent: "변화율(%)",
    },
    placeholders: {
      percentage: "퍼센트 입력",
      number: "숫자 입력",
      originalValue: "기존 값 입력",
      newValue: "새 값 입력",
      totalA: "전체 입력",
      partB: "부분 입력",
      startingValue: "시작 값 입력",
      changePercent: "예: 20 또는 -10",
    },
    reset: "초기화",
    useSampleData: "샘플 데이터",
    result: "결과",
    copyResults: "결과 복사",
    recentCalculations: "최근 계산",
    historyEmpty: "아직 기록이 없습니다. 값을 입력해 보세요.",
    historyHint: "기기 로컬에 최대 5개 저장됩니다.",
    restoredFromHistory: "기록에서 값 복원",
    resetDone: "계산기를 초기화했습니다",
    sampleLoaded: "샘플 데이터 불러옴",
    copiedToClipboard: "클립보드에 복사됨",
    copyFailed: "복사 실패",
    errorOriginalZero: "증감률 계산에서 기존 값은 0일 수 없습니다.",
    errorTotalZero: "전체(A)는 0일 수 없습니다.",
    ...percentageUiExtrasKo,
  },
  standardDeviation: {
    title: "분산, 표준편차, 표준오차",
    numbersLabel: "숫자 입력(쉼표/공백/줄바꿈)",
    numbersPlaceholder: "예:\n12, 15, 18\n14 16",
    inputHint:
      "스프레드시트에서 붙여넣거나 한 줄에 값 하나씩 입력하세요. 모바일 숫자 키패드도 지원합니다.",
    calculate: "계산",
    sortAscending: "오름차순 정렬",
    reset: "초기화",
    sampleData: "샘플 데이터",
    copyResults: "결과 복사",
    copied: "복사됨!",
    decimals: "소수 자릿수",
    thousandsSeparator: "천 단위 구분",
    sortedData: "정렬된 데이터(오름차순)",
    errorInvalidNumbers: "유효한 숫자를 입력하세요",
    toastCleared: "초기화됨",
    toastSampleLoaded: "샘플 데이터 불러옴",
    toastSorted: "오름차순 정렬 완료",
    toastEnterValidFirst: "먼저 유효한 숫자를 입력하세요",
    figures: {
      sampleSdTitle: "표본 표준편차(참고)",
      legendN: "데이터 개수",
      legendXi: "각 관측값",
      legendXbar: "데이터의 평균",
      populationNote:
        "모집단 표준편차는 분자(제곱편차합)는 같고 분모만 n으로 나눈 뒤 제곱근을 취합니다: σ = √(SS / n).",
      normalCurveTitle: "표준정규곡선(μ = 0, σ = 1)",
      normalCurveCaption:
        "설명용 그림입니다. 실제 데이터가 정규분포일 필요는 없습니다. 여기서 σ는 가로축에서 평균으로부터의 표준편차 거리를 뜻합니다.",
      normalCurveAria: "종 모양 정규분포 곡선",
      empiricalTitle: "정규분포 — 68–95–99.7 경험 법칙",
      empiricalIntro:
        "데이터가 대략 정규분포에 가까우면 약 68%가 μ ± 1σ 안에, 95%가 μ ± 2σ 안에, 99.7%가 μ ± 3σ 안에 들어갑니다.",
      empiricalAria: "1·2·3 표준편차 구간을 음영으로 표시한 경험 법칙 도식",
      axisCaption: "(가로축: 평균으로부터의 σ 단위 거리)",
    },
  },
  programmer: {
    title: "프로그래머 계산기",
    keypad: "키패드",
    bits: "비트",
    shiftArithmetic: "산술 시프트",
    shiftLogical: "논리 시프트",
    shiftRotate: "회전",
    shiftRotateThroughCarry: "캐리 포함 회전",
    memoryStore: "MS",
    memoryMenu: "M▾",
    memoryRecall: "MR - 불러오기",
    memoryClear: "MC - 지우기",
    memoryAdd: "M+ - 메모리에 더하기",
    clear: "C",
    backspace: "⌫",
    equals: "=",
    and: "AND",
    or: "OR",
    not: "NOT",
    xor: "XOR",
    nor: "NOR",
    nand: "NAND",
    result: "결과",
    technicalReference: programmerTechnicalRefKo,
  },
};

export const calcKo = {
  calculator: {
    h1: "계산기 도구",
    subtitle: "일상 수학용 온라인 계산기 모음",
    intro:
      "평균, 표준편차, GPA, 퍼센트, 프로그래머, 일반 계산기 등 다양한 도구를 제공합니다. BMI·체지방·칼로리 등 건강 관련 계산은",
    guideTitle: "계산기 도구 가이드",
    guideIntro:
      "목표에 맞는 계산기를 먼저 고르세요. 시간 계산은 Time Tools, 단위 변환은 Unit Converter, 건강 지표는 Health Tools를 함께 쓰면 좋습니다.",
    sections: [
      {
        title: "1. 내 작업에 맞는 계산기를 어떻게 선택하고 사용하나요?",
        type: "ordered",
        items: [
          "평균, 표준편차, GPA, 퍼센트, 프로그래머, 일반 계산기 중 목적에 맞는 도구를 선택합니다.",
          "값을 입력하고 Calculate를 눌러 즉시 결과를 확인합니다.",
          "반복 확인이 필요하면 입력만 바꿔 다시 계산합니다.",
          "통계·성적·퍼센트·진법/비트 작업에 맞게 도구를 전환합니다.",
        ],
      },
      {
        title: "2. 계산기 도구는 브라우저에서 어떻게 계산하나요?",
        type: "paragraphs",
        items: [
          "모든 계산은 브라우저에서 실행되어 입력/결과가 기기에 머뭅니다.",
          "각 계산기는 목적에 맞는 전용 공식을 사용합니다.",
          "한 허브에서 통계, GPA, 퍼센트, 프로그래머 계산기로 이동할 수 있습니다.",
        ],
      },
      {
        title: "3. 여기에는 어떤 계산기가 제공되며 각각 무엇에 쓰나요?",
        type: "paragraphs",
        items: [
          "이 페이지는 빠른 일상 계산을 위한 온라인 계산기 허브입니다.",
          "과제, 업무 검증, 예산 관리, 일반 수치 계산에 유용합니다.",
        ],
      },
      {
        title: "4. GPA/퍼센트처럼 전용 온라인 계산기를 쓰는 이유는?",
        type: "unordered",
        items: [
          "브라우저에서 바로 실행",
          "회원가입 없이 사용",
          "모바일/데스크톱 지원",
          "작업별로 최적화된 계산기 구성",
        ],
      },
      {
        title: "5. 학교나 업무에서 언제 유용한가요?",
        type: "unordered",
        items: [
          "채점 전 GPA/평균 빠른 점검",
          "리포트용 할인율·증감률 계산",
          "코딩 중 진법 변환·비트 로직 확인",
        ],
      },
    ],
    faq: [
      {
        question: "내 작업에 맞는 계산기는 어떻게 찾고 쓰나요?",
        answer:
          "목적에 맞는 계산기를 선택하고 값을 입력해 계산하세요. 작업이 바뀌면 도구를 바꾸면 됩니다.",
      },
      {
        question: "계산기 도구는 브라우저에서 어떻게 결과를 계산하나요?",
        answer:
          "각 도구가 브라우저에서 전용 공식을 적용해 계산하므로 입력과 결과가 기기 안에 남습니다.",
      },
      {
        question: "여기에는 어떤 계산기가 있고 각각 무엇에 쓰이나요?",
        answer:
          "평균, 표준편차, GPA, 퍼센트, 프로그래머, 일반 계산기를 제공하며 일상 수치 작업에 쓰입니다.",
      },
      {
        question: "GPA나 퍼센트는 왜 전용 온라인 계산기가 좋나요?",
        answer:
          "수식 전환 실수를 줄이고 같은 공식을 반복 적용해 재계산할 때 일관된 결과를 얻을 수 있습니다.",
      },
      {
        question: "학교·업무·재무에서 이 계산기들은 언제 유용한가요?",
        answer:
          "과제, 예산, 리포트, 빠른 수치 검토 같은 상황에서 시간을 줄이고 정확도를 높입니다.",
      },
    ],
  },
  "calculator.average-calculator": {
    h1: "평균 계산기",
    subtitle: "빠른 기술통계용 온라인 평균 계산기",
    guideTitle: "평균 계산기 가이드",
    guideIntro:
      "원시 숫자에서 평균, 중앙값, 분산, 사분위수까지 한 번에 확인할 때 적합합니다.",
    sections: [
      {
        title: "1. 평균/중앙값/최빈값은 어떻게 계산하나요?",
        type: "ordered",
        items: [
          "숫자를 쉼표 또는 공백으로 입력합니다. 예: 1, 2, 3, 4, 5",
          "입력 중에도 실시간 갱신되며 Calculate/Reset/샘플 데이터를 사용할 수 있습니다.",
          "소수 자릿수, 천 단위 구분, 분산 기준(표본/모집단)을 설정하고 결과를 복사할 수 있습니다.",
        ],
      },
      {
        title: "2. 이 도구는 통계를 어떻게 계산하나요?",
        type: "paragraphs",
        items: [
          "평균은 합계/개수, 중앙값은 정렬 후 가운데 값, 최빈값은 최다 출현값, 범위는 최대-최소입니다.",
          "분산은 평균 대비 제곱편차 평균, 표준편차는 분산의 제곱근이며 표본(n−1)/모집단(n) 기준을 선택합니다.",
          "Q1/Q3는 중앙값 기준 하위/상위 절반의 중앙값을 쓰며 IQR은 Q3−Q1입니다.",
          "기하평균은 모든 값이 양수일 때, 조화평균은 양수·0 아님일 때 계산됩니다.",
        ],
      },
      {
        title: "3. 이 계산기의 용도와 기준은 무엇인가요?",
        type: "paragraphs",
        items: [
          "과제, 리포트, 연구 점검에 쓰는 무료 온라인 통계 요약 도구입니다.",
          "같은 입력이면 항상 같은 결과가 나오도록 고정 계산 방식을 사용합니다.",
        ],
      },
      {
        title: "4. 브라우저 통계 계산기를 쓰는 이유는?",
        type: "unordered",
        items: [
          "15개 이상 지표 제공(평균, 중앙값, 분산, 표준편차, Q1/Q3, IQR 등)",
          "표본/모집단 분산 전환 지원",
          "공식과 기준이 명확해 비교가 쉬움",
        ],
      },
      {
        title: "5. 어디에서 활용되나요?",
        type: "unordered",
        items: [
          "학업: 성적·시험 점수 분석",
          "재무: 매출·수익률·시장 데이터 요약",
          "과학/품질: 실험·설문·품질관리",
          "개인: 예산·운동·지출 평균 관리",
        ],
      },
      {
        title: "6. 계산 방법(각 통계 산출 기준)",
        type: "unordered",
        items: [
          "기초 통계: Mean은 합계/개수, Median은 정렬 후 중앙값(짝수면 중앙 2개 평균), Mode는 최다 빈도값.",
          "기초 통계: Min/Max/Range는 최솟값·최댓값·(Max−Min).",
          "분산·표준편차: 표본분산은 Σ(x−mean)^2/(n−1), 모집단분산은 Σ(x−mean)^2/n.",
          "분산·표준편차: 표준편차는 선택한 분산의 제곱근.",
          "사분위·IQR: 데이터 정렬 후 하위/상위 절반의 중앙값을 Q1/Q3로 사용, IQR=Q3−Q1.",
          "기하평균: (x1×...×xn)^(1/n), 모든 값이 양수여야 함.",
          "조화평균: n/(1/x1+...+1/xn), 모든 값이 양수이면서 0이 아니어야 함.",
        ],
      },
    ],
    faq: [
      {
        question: "평균, 중앙값, 최빈값 등은 어떻게 계산하나요?",
        answer:
          "숫자를 입력하면 평균, 중앙값, 최빈값, 범위, 분산 등 주요 통계를 즉시 계산해 보여줍니다.",
      },
      {
        question: "이 평균 계산기는 통계를 어떻게 구하나요?",
        answer:
          "필요 시 데이터를 정렬한 뒤 각 지표의 표준 공식을 적용해 결과를 계산합니다.",
      },
      {
        question: "이 도구는 어떤 용도이며 어떤 기준을 쓰나요?",
        answer:
          "수업/리포트/연구의 빠른 기술통계 요약용이며, 기준이 명확한 고정 계산 방식을 사용합니다.",
      },
      {
        question: "브라우저 평균 계산기를 쓰면 어떤 점이 좋나요?",
        answer:
          "수작업 실수를 줄이고, 문서 작업 중 같은 화면에서 즉시 재계산할 수 있습니다.",
      },
      {
        question: "평균·산포 지표는 어디에서 자주 쓰이나요?",
        answer:
          "성적 요약, 실험 분석, 설문 해석, 성과 추적 등 교육·연구·비즈니스 전반에서 사용됩니다.",
      },
    ],
  },
  "calculator.standard-deviation-calculator": {
    h1: "표준편차 계산기",
    subtitle: "모집단/표본 표준편차·분산 계산",
    guideTitle: "표준편차 계산 가이드",
    guideIntro:
      "표준편차 공식과 단계별 계산 흐름을 실제 결과 카드와 함께 확인할 수 있습니다.",
    sections: [
      {
        title: "1. 이 계산기 사용 방법",
        type: "ordered",
        items: [
          "숫자를 쉼표/공백/줄바꿈으로 입력하면 자동 계산되며 Calculate로 즉시 실행할 수 있습니다.",
          "Sort ascending으로 입력을 정렬하고 Reset으로 초기화, Copy results로 전체 지표를 복사합니다.",
          "소수 자릿수·천 단위 구분을 조절해 표시 형식을 맞춥니다.",
        ],
      },
      {
        title: "2. 결과 카드가 보여주는 지표",
        type: "unordered",
        items: [
          "Count, Sum, Mean: 데이터 크기와 평균",
          "Range/Minimum/Maximum: 극값 기반 산포",
          "MAD: (1/n) Σ|x−x̄|",
          "자유도: n−1(표본 분산 분모)",
          "모집단/표본 분산과 표준편차",
          "CV(모집단/표본), SS(Σ(x−x̄)^2), SEM(s/√n)",
        ],
      },
      {
        title: "3. 표준편차 단계별 계산",
        type: "ordered",
        items: [
          "평균 x̄를 구합니다: (x1+...+xn)/n",
          "각 값에서 평균을 빼 편차(xi−x̄)를 구합니다.",
          "편차를 제곱해 모두 더해 SS=Σ(xi−x̄)^2를 만듭니다.",
          "분산을 구합니다: 모집단은 SS/n, 표본은 SS/(n−1)",
          "표준편차는 분산의 제곱근입니다: σ=√(SS/n), s=√(SS/(n−1))",
        ],
      },
      {
        title: "4. 모집단 vs 표본 표준편차",
        type: "paragraphs",
        items: [
          "전체 집합을 설명할 때는 모집단 공식(분모 n)을 사용합니다.",
          "더 큰 집합의 일부 샘플을 일반화할 때는 표본 공식(분모 n−1)을 사용합니다.",
          "Excel VAR.P / VAR.S처럼 과제 기준에 맞춰 두 값을 비교해 사용하세요.",
        ],
      },
      {
        title: "5. 개인정보/보안",
        type: "paragraphs",
        items: [
          "계산은 브라우저에서만 수행되며 숫자 데이터는 서버로 전송되지 않습니다.",
        ],
      },
    ],
    faq: [
      {
        question: "모집단 표준편차와 표본 표준편차는 무엇이 다른가요?",
        answer:
          "모집단은 분산 분모가 n, 표본은 편향 보정을 위해 n−1을 사용합니다. 도구에서 둘 다 동시에 확인할 수 있습니다.",
      },
      {
        question: "표준편차 공식은 어떻게 되나요?",
        answer:
          "편차 제곱합 SS를 구한 뒤 모집단은 SS/n, 표본은 SS/(n−1)로 분산을 만든 후 제곱근을 취합니다.",
      },
      {
        question: "표준편차를 단계별로 계산하려면?",
        answer:
          "평균 계산 → 편차 계산 → 편차 제곱 → SS 합산 → 분산 계산 → 제곱근 순서로 진행합니다.",
      },
      {
        question: "SS(제곱합)는 무엇이며 왜 중요한가요?",
        answer:
          "SS=Σ(xi−x̄)^2로, 모집단/표본 분산을 계산할 때 공통으로 나누는 핵심 값입니다.",
      },
      {
        question: "Range, MAD, CV, 자유도(n−1)는 무엇인가요?",
        answer:
          "Range는 최대-최소, MAD는 절대편차 평균, CV는 표준편차/|평균|, 자유도는 표본분산의 분모 보정값입니다.",
      },
      {
        question: "표준오차(SEM=s/√n)는 무엇을 의미하나요?",
        answer:
          "표본평균의 변동성을 나타내며 n<2에서는 정의되지 않아 표시하지 않습니다.",
      },
    ],
  },
  "calculator.calculator": {
    h1: "일반 계산기",
    subtitle: "일상 수학용 온라인 계산기",
    guideTitle: "일반 계산기 가이드",
    guideIntro:
      "브라우저 탭에서 빠른 사칙연산과 메모리/기능 키를 함께 쓰고 싶을 때 적합합니다.",
    sections: [
      {
        title: "1. 페이지에서 계산기를 어떻게 사용하나요?",
        type: "ordered",
        items: [
          "화면 버튼 또는 키보드로 숫자, 소수점, 연산자(+ − × ÷)를 입력합니다.",
          "메모리 키(MC/MR/M+/M-/MS)로 다단계 계산 값을 저장·불러옵니다.",
          "기능 키(%, √, x², 1/x, ±)를 필요에 맞게 사용합니다.",
          "CE는 현재 입력만, C는 전체를 지웁니다. Backspace/⌫로 한 자리 삭제가 가능합니다.",
          "Enter 또는 =로 계산하고 Escape/Delete로 전체 초기화합니다.",
        ],
      },
      {
        title: "2. 브라우저에서 식은 어떻게 계산되나요?",
        type: "paragraphs",
        items: [
          "부동소수점 연산으로 계산하며 모든 처리는 브라우저에서 수행됩니다.",
          "메모리 값은 지우거나 새로고침하기 전까지 유지됩니다.",
        ],
      },
      {
        title: "3. 어떤 작업에 적합하고 한계는 무엇인가요?",
        type: "paragraphs",
        items: [
          "기본·간단 과학 계산(퍼센트, 제곱근, 역수)에 적합합니다.",
          "기호연산/그래프 같은 고급 CAS 기능은 제공하지 않습니다.",
        ],
      },
      {
        title: "4. 앱 대신 브라우저 계산기를 쓰는 이유는?",
        type: "unordered",
        items: [
          "문서/폼 작업 중 즉시 사용 가능",
          "키보드 입력 지원으로 빠른 계산",
          "메모리 기능으로 연속 계산 편리",
          "모바일/데스크톱 반응형 지원",
        ],
      },
      {
        title: "5. 언제 특히 유용한가요?",
        type: "unordered",
        items: [
          "영수증·팁·분할 등 빠른 생활 계산",
          "숙제·기초 수학 연습",
          "간단 이자/퍼센트 계산",
          "레시피 배수·단위 계산 보조",
        ],
      },
    ],
    faq: [
      {
        question: "키보드·메모리·기능 키를 포함해 어떻게 사용하나요?",
        answer:
          "버튼 또는 키보드로 입력하고 메모리/기능 키를 조합하면 다단계 계산을 빠르게 처리할 수 있습니다.",
      },
      {
        question: "브라우저에서 식을 어떻게 계산하나요?",
        answer:
          "브라우저 런타임에서 로컬 부동소수점 연산으로 계산하며 서버 처리는 하지 않습니다.",
      },
      {
        question: "이 계산기로 어디까지 가능한가요?",
        answer:
          "일상 산술과 기본 과학 기능까지 지원하지만 고급 기호연산·그래프 시스템은 아닙니다.",
      },
      {
        question: "왜 폰 앱 대신 브라우저 계산기를 쓰나요?",
        answer:
          "같은 작업 화면에서 즉시 열어 문서 확인과 계산을 연속으로 진행할 수 있습니다.",
      },
      {
        question: "학업·업무에서 언제 가장 도움이 되나요?",
        answer:
          "빠른 검산, 지출 계산, 점수 계산, 반복 퍼센트 계산이 필요할 때 유용합니다.",
      },
    ],
  },
  "calculator.gpa-calculator": {
    h1: "GPA 계산기",
    subtitle: "학기 계획용 온라인 GPA 계산기",
    guideTitle: "GPA 가이드",
    guideIntro:
      "여러 학점 스케일(4.0/4.3/4.5/5.0)에서 과목별 학점을 반영한 가중 GPA를 빠르게 확인할 수 있습니다.",
    sections: [
      {
        title: "1. GPA/과목 성적/목표 GPA를 어떻게 계산하나요?",
        type: "ordered",
        items: [
          "학교 스케일(4.0, 4.3, 4.5, 5.0)을 선택합니다.",
          "Add Course로 과목을 추가하고 과목명, 학점, 등급을 입력합니다.",
          "등급/학점을 바꾸면 GPA가 즉시 갱신됩니다.",
          "Reset All로 다시 시작합니다.",
        ],
      },
      {
        title: "2. 가중 GPA와 학점 반영은 어떻게 되나요?",
        type: "paragraphs",
        items: [
          "공식: GPA = Σ(등급점수 × 학점) / 총 학점",
          "문자등급은 선택한 스케일 기준 점수로 변환됩니다.",
          "모든 계산은 브라우저에서 처리됩니다.",
        ],
      },
      {
        title: "3. 지원 스케일과 기능은 무엇인가요?",
        type: "paragraphs",
        items: [
          "4.0/4.3/4.5/5.0 스케일을 지원합니다.",
          "과목 행 추가/삭제, 실시간 업데이트, 결과 복사를 제공합니다.",
        ],
      },
      {
        title: "4. 브라우저에서 GPA 계획을 세우는 이유는?",
        type: "unordered",
        items: [
          "성적 시나리오를 빠르게 비교 가능",
          "가중 학점 계산 자동화",
          "학기 계획과 신청 준비를 한 화면에서 진행",
          "실시간 수정으로 의사결정 속도 향상",
        ],
      },
      {
        title: "5. 학생들은 언제 GPA 도구를 쓰나요?",
        type: "unordered",
        items: [
          "장학금 기준 충족 여부 점검",
          "졸업 요건·학기별 목표 관리",
          "지원서 제출용 누적 GPA 계산",
          "학사 상담 전 성적 시뮬레이션",
        ],
      },
    ],
    faq: [
      {
        question: "GPA, 과목 성적, 목표 GPA를 이 도구로 어떻게 계산하나요?",
        answer:
          "스케일을 고르고 과목별 학점/등급을 입력하면 편집 즉시 GPA 결과를 확인할 수 있습니다.",
      },
      {
        question: "가중 GPA와 학점은 어떻게 처리되나요?",
        answer:
          "선택한 스케일로 등급을 점수화한 뒤 학점 가중 평균으로 계산합니다.",
      },
      {
        question: "어떤 스케일과 기능을 지원하나요?",
        answer:
          "4.0, 4.3, 4.5, 5.0 스케일과 과목 추가/삭제, 즉시 갱신 기능을 제공합니다.",
      },
      {
        question: "왜 브라우저 기반 GPA 계산기로 학기 계획을 하나요?",
        answer:
          "등급 시나리오를 빠르게 시험해 목표 달성 가능성을 즉시 비교할 수 있기 때문입니다.",
      },
      {
        question: "지원/졸업 계획에서 GPA 도구는 언제 쓰이나요?",
        answer:
          "장학금, 졸업 계획, 학기별 목표 설정, 지원서용 누적 GPA 확인에 자주 사용됩니다.",
      },
    ],
  },
  "calculator.gpa-calculator.target-gpa": {
    h1: "목표 GPA 계산기",
    subtitle: "목표 누적 GPA 달성을 위한 학기 계획 계산기",
    guideTitle: "목표 GPA 가이드",
    guideIntro:
      "현재 누적 성적(C, G)과 목표(T), 이번 학기 학점(N) 또는 예상 학기 GPA(S)로 필요한 조건을 계산합니다.",
    sections: [
      {
        title: "1. 입력 필드 의미",
        type: "unordered",
        items: [
          "현재 누적 학점(C): 이번 학기 전까지 반영된 누적 학점",
          "현재 누적 GPA(G): C 학점 기준 현재 누적 성적",
          "목표 누적 GPA(T): 이번 학기 반영 후 도달하고 싶은 누적 GPA",
          "이번 학기 예정 학점(N): Required term GPA 계산에 사용하는 이번 학기 학점",
          "예상 학기 GPA(S): Credits at expected GPA 추정에 쓰는 선택 입력",
        ],
      },
      {
        title: "2. 핵심 공식: 이번 학기 후 누적 GPA",
        type: "paragraphs",
        items: [
          "현재 품질점수는 C×G이며, 이번 학기 N학점을 R로 받으면 N×R이 추가됩니다.",
          "새 누적 GPA = (C×G + N×R) / (C + N)",
          "이 값을 목표 T와 같게 두고 R(필요 학기 GPA)을 풉니다.",
        ],
      },
      {
        title: "3. Required term GPA 계산식",
        type: "ordered",
        items: [
          "(C×G + N×R) / (C + N) = T",
          "C×G + N×R = T×(C + N)",
          "R = (T×(C + N) − C×G) / N",
          "특수 케이스: C=0이면 R=T",
        ],
      },
      {
        title: "4. Credits at expected GPA 의미",
        type: "paragraphs",
        items: [
          "이 값은 '이번 학기 예정 학점'과 다른 지표로, S 성적으로 몇 학점을 추가해야 T에 도달하는지 추정합니다.",
          "(C×G + N'×S)/(C + N') = T를 풀면 N' = C×(T−G)/(S−T) (S≠T)",
          "누적을 올릴 때(T>G)는 반드시 S>T여야 하며, 그렇지 않으면 N/A가 됩니다.",
        ],
      },
      {
        title: "5. 모델 한계",
        type: "unordered",
        items: [
          "재수강 대체, P/F, W, 학교 반올림 규칙 등은 반영하지 않습니다.",
          "필요 학기 GPA가 스케일 상한보다 높으면 해당 학기·학점 조건으로는 달성이 불가능합니다.",
          "Credits at expected GPA는 한 번에 동일 GPA 블록으로 추가된다는 가정의 계획치입니다.",
        ],
      },
    ],
    faq: [
      {
        question: "목표 누적 GPA를 위해 이번 학기 GPA는 어떻게 계산하나요?",
        answer:
          "현재 누적(C, G), 목표(T), 이번 학기 학점(N)을 넣으면 R=(T(C+N)-CG)/N으로 필요한 학기 GPA를 계산합니다.",
      },
      {
        question: "Credits at expected GPA는 무엇을 뜻하나요?",
        answer:
          "예상 학기 GPA(S)로 성적을 유지한다고 가정할 때 목표 누적(T)까지 필요한 추가 학점을 의미합니다.",
      },
      {
        question: "결과가 N/A로 나오면 어떤 의미인가요?",
        answer:
          "수학적으로 조건이 성립하지 않는 경우입니다. 예를 들어 누적을 올리려면 S가 T보다 커야 합니다.",
      },
      {
        question: "필요 학기 GPA가 스케일 최대보다 큰 경우는?",
        answer:
          "입력한 학점으로 한 학기에 목표 달성이 불가능하다는 뜻이며 목표를 낮추거나 학점을 늘려야 합니다.",
      },
      {
        question: "학교 공식 GPA와 완전히 동일한가요?",
        answer:
          "기본 가중 평균 모델을 사용하며 재수강 정책·반올림 규칙 등 학교별 세부 규정은 별도 확인이 필요합니다.",
      },
    ],
  },
  "calculator.percentage-calculator": {
    h1: "퍼센트 계산기",
    subtitle: "일상 계산용 온라인 퍼센트 계산기",
    guideTitle: "퍼센트 계산 가이드",
    guideIntro:
      "할인, 증감률, 전체 대비 비율, 변화 후 값을 탭별로 나누어 빠르게 계산할 수 있습니다.",
    sections: [
      {
        title: "1. 탭별 사용 방법",
        type: "ordered",
        items: [
          "Basic Percentage: X% of N 계산",
          "Percentage Change: 기존값/새값으로 증가·감소율 계산",
          "Percentage Of: 전체(A) 대비 부분(B) 비율 계산",
          "Value After Change: 시작값에 증감률을 적용한 최종값 계산",
          "입력 즉시 결과가 갱신되며 탭별 Reset, 최근 5개 기록 저장을 지원합니다.",
        ],
      },
      {
        title: "2. 모드별 공식",
        type: "paragraphs",
        items: [
          "Basic: (Percentage / 100) × Number",
          "Change: ((New − Old) / Old) × 100",
          "Percentage Of: (Part / Total) × 100",
          "Value After Change: Start × (1 + Change% / 100)",
          "계산은 브라우저에서 수행되고 기록은 localStorage에만 저장됩니다.",
        ],
      },
      {
        title: "3. 이 도구가 해결하는 문제",
        type: "paragraphs",
        items: [
          "일상 퍼센트 계산(할인, 세금, 성장률, 점수 비율)을 한 화면에서 처리합니다.",
          "질문 유형별 탭 구조로 공식 전환 실수를 줄일 수 있습니다.",
        ],
      },
      {
        title: "4. 브라우저 멀티탭 퍼센트 계산기의 장점",
        type: "unordered",
        items: [
          "4개 모드 제공(기본, 증감, 전체 대비, 변화 후 값)",
          "실시간 결과 + 설명 문장 제공",
          "최근 기록에서 원클릭 복원",
          "회원가입 없이 모든 기기에서 사용 가능",
        ],
      },
      {
        title: "5. 언제 자주 쓰이나요?",
        type: "unordered",
        items: [
          "쇼핑: 할인액·최종가 계산",
          "재무: 수익률·세금·이자 계산",
          "학업: 점수/등급 퍼센트 계산",
          "비즈니스: 매출 증감률·비율 보고",
        ],
      },
    ],
    faq: [
      {
        question: "할인·팁·점수 계산에 탭을 어떻게 쓰나요?",
        answer:
          "질문 유형에 맞는 탭을 고르고 값을 입력하면 결과와 해석 문장을 즉시 확인할 수 있습니다.",
      },
      {
        question: "각 모드는 어떤 공식을 적용하나요?",
        answer:
          "각 탭이 해당 문제 유형 전용 퍼센트 공식을 적용해 계산합니다.",
      },
      {
        question: "이 도구는 어떤 퍼센트 문제를 해결하나요?",
        answer:
          "X% 계산, 증감률, 전체 대비 비율, 변화 후 값 계산을 모두 지원합니다.",
      },
      {
        question: "브라우저 멀티탭 계산기를 쓰는 이유는?",
        answer:
          "공식 전환 실수를 줄이고 자주 쓰는 퍼센트 계산을 한 곳에서 처리할 수 있습니다.",
      },
      {
        question: "재무·학업·쇼핑에서 언제 활용하나요?",
        answer:
          "할인, 성적 확인, 성장 추적, 세금/보고 계산 등 퍼센트 기반 의사결정에 사용됩니다.",
      },
    ],
  },
  "calculator.programmer-calculator": {
    h1: "프로그래머 계산기",
    subtitle: "진법 변환·비트 연산용 온라인 계산기",
    guideTitle: "프로그래머 계산기 가이드",
    guideIntro:
      "HEX/DEC/OCT/BIN 동시 확인, 워드 크기 전환, 시프트/비트 연산을 한 화면에서 수행합니다.",
    sections: [
      {
        title: "1. 진법/비트 연산 사용 방법",
        type: "ordered",
        items: [
          "HEX/DEC/OCT/BIN과 QWORD▾ 워드 크기를 선택합니다.",
          "키패드 또는 비트 그리드(2x2 점 탭)에서 값을 입력·토글합니다.",
          "이항 연산은 첫 값 입력 -> 연산자 -> 두 번째 값 -> = 순서로 실행합니다.",
          "NOT, ±, <<, >>는 현재 표시값에 즉시 적용됩니다.",
          "C는 전체 초기화, ⌫는 한 자리 삭제, MS/M▾로 메모리 기능을 사용합니다.",
        ],
      },
      {
        title: "2. 어떤 기능이 포함되어 있나요?",
        type: "paragraphs",
        items: [
          "하나의 내부 정수 값을 기준으로 BIN/OCT/DEC/HEX를 동기화해 표시합니다.",
          "워드 크기 마스킹, 비트 시프트 모드(산술/논리/회전/캐리 회전), 비트 토글을 제공합니다.",
          "상세 래핑·시프트 의미는 기술 섹션 기준을 따릅니다.",
        ],
      },
      {
        title: "3. 브라우저에서 쓰는 장점",
        type: "unordered",
        items: [
          "변환기/비트 도구를 오가며 문맥 전환할 필요가 없음",
          "설치·로그인 없이 즉시 사용 가능",
          "표시값과 비트 그리드가 항상 동기화됨",
        ],
      },
      {
        title: "4. 실무 사용 사례",
        type: "unordered",
        items: [
          "임베디드 마스크·플래그·레지스터 값 점검",
          "프로토콜/파일 포맷의 hex-binary 검사",
          "학습용 진법/비트 패턴 비교",
          "디버깅 중 시프트/비트연산 결과 검증",
        ],
      },
    ],
    faq: [
      {
        question: "진법 변환과 비트 연산을 이 계산기로 어떻게 하나요?",
        answer:
          "진법을 고르고 값을 입력한 뒤 산술/시프트/비트연산을 같은 인터페이스에서 수행하면 됩니다.",
      },
      {
        question: "이 계산기에서 진법은 어떻게 동작하나요?",
        answer:
          "하나의 내부 정수를 기준으로 BIN/OCT/DEC/HEX 표시가 동시에 갱신됩니다.",
      },
      {
        question: "코딩/디버깅 중 왜 브라우저 계산기가 유용한가요?",
        answer:
          "작업 창을 벗어나지 않고 즉시 변환과 비트 검증을 수행해 개발 흐름을 유지할 수 있습니다.",
      },
      {
        question: "실무에서 어디에 자주 쓰이나요?",
        answer:
          "마스크 계산, 프로토콜 파싱, 레지스터 확인, 바이너리 데이터 경로 디버깅에 자주 사용됩니다.",
      },
    ],
  },
};
