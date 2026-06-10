/** Percentage calculator FAQ links + formula guide copy (EN/KO). */

export const percentageFaqLinksEn = [
  {
    href: "/faq/percentage-calculator/how-much-is-10-percent-of-1000-for-tax-or-tips",
    question: "How much is 10% of 1,000 for tax or tips?",
  },
  {
    href: "/faq/percentage-calculator/what-is-20-percent-off-a-50-item",
    question: "What is 20% off a $50 item?",
  },
  {
    href: "/faq/percentage-calculator/grade-percentage-18-out-of-25",
    question: "What is my grade percentage if I got 18 out of 25?",
  },
  {
    href: "/faq/percentage-calculator/what-percent-of-200-students-is-40-students",
    question: "What percent of 200 students is 40 students?",
  },
  {
    href: "/faq/percentage-calculator/how-much-is-7-percent-salary-increase-from-60000",
    question: "How much is a 7% salary increase from $60,000?",
  },
  {
    href: "/faq/percentage-calculator/stock-150-to-180-percent-increase",
    question: "If my stock goes from $150 to $180, what is the % increase?",
  },
  {
    href: "/faq/percentage-calculator/how-much-is-4-5-percent-interest-on-5000-deposit",
    question: "How much is 4.5% annual interest on a $5,000 deposit?",
  },
  {
    href: "/faq/percentage-calculator/how-to-calculate-30-percent-profit-margin-on-cost",
    question: "How to calculate a 30% profit margin on cost?",
  },
  {
    href: "/faq/percentage-calculator/how-to-calculate-0-5-percent-real-estate-commission",
    question: "How to calculate a 0.5% real estate agent commission?",
  },
  {
    href: "/faq/percentage-calculator/if-20-is-10-percent-what-is-original-number",
    question: "If 20 is 10% of a number, what is the original number?",
  },
];

export const percentageFaqLinksKo = [
  {
    href: "/faq/percentage-calculator/how-much-is-10-percent-of-1000-for-tax-or-tips",
    question: "세금·팁 기준 1,000의 10%는 얼마인가요?",
  },
  {
    href: "/faq/percentage-calculator/what-is-20-percent-off-a-50-item",
    question: "50달러 상품에 20% 할인이면 얼마인가요?",
  },
  {
    href: "/faq/percentage-calculator/grade-percentage-18-out-of-25",
    question: "25문항 중 18점이면 백분율 성적은?",
  },
  {
    href: "/faq/percentage-calculator/what-percent-of-200-students-is-40-students",
    question: "200명 중 40명은 몇 %인가요?",
  },
  {
    href: "/faq/percentage-calculator/how-much-is-7-percent-salary-increase-from-60000",
    question: "연봉 60,000달러에서 7% 인상이면 얼마인가요?",
  },
  {
    href: "/faq/percentage-calculator/stock-150-to-180-percent-increase",
    question: "주가가 150에서 180이면 몇 % 상승인가요?",
  },
  {
    href: "/faq/percentage-calculator/how-much-is-4-5-percent-interest-on-5000-deposit",
    question: "5,000달러 예금에 연 4.5% 이자는 얼마인가요?",
  },
  {
    href: "/faq/percentage-calculator/how-to-calculate-30-percent-profit-margin-on-cost",
    question: "원가 기준 30% 이익(마진)은 어떻게 계산하나요?",
  },
  {
    href: "/faq/percentage-calculator/how-to-calculate-0-5-percent-real-estate-commission",
    question: "부동산 거래 0.5% 중개 수수료는 어떻게 계산하나요?",
  },
  {
    href: "/faq/percentage-calculator/if-20-is-10-percent-what-is-original-number",
    question: "20이 어떤 수의 10%이면 원래 수는?",
  },
];

const formulasEn = {
  sectionTitle: "Formulas",
  sectionIntro:
    "Each mode uses a standard definition below. Symbols match the fields in the calculator tabs.",
  formulaLabel: "Formula",
  stepByStepLabel: "Step-by-step",
  stepCol: "Step",
  calcCol: "Calculation",
  tryItNow: "Try it now",
  modes: {
    basic: {
      title: "Basic Percentage",
      variableNote: "P = result amount, r = percentage (%), N = base number.",
      exampleLabel: "Example: What is 20% of 100?",
      steps: [
        { step: "Substitute", expression: "r = 20, N = 100" },
        { step: "Apply formula", expression: "P = (20 ÷ 100) × 100 = 0.2 × 100" },
        { step: "Result", expression: "P = 20" },
      ],
    },
    change: {
      title: "Percentage Change",
      variableNote:
        "C = percent change (%), Nold = original value, Nnew = new value (C > 0 increase, C < 0 decrease).",
      exampleLabel: "Example: Value rises from 80 to 100.",
      steps: [
        { step: "Substitute", expression: "N_old = 80, N_new = 100" },
        { step: "Numerator", expression: "100 − 80 = 20" },
        { step: "Divide & × 100", expression: "C = (20 ÷ 80) × 100 = 0.25 × 100" },
        { step: "Result", expression: "C = 25%" },
      ],
    },
    of: {
      title: "Percentage Of (part vs whole)",
      variableNote: "Q = what percent B is of A, A = total (whole), B = part (A ≠ 0).",
      exampleLabel: "Example: What percent of 200 is 40?",
      steps: [
        { step: "Substitute", expression: "A = 200, B = 40" },
        { step: "Ratio", expression: "B ÷ A = 40 ÷ 200 = 0.2" },
        { step: "Result", expression: "Q = 0.2 × 100 = 20%" },
      ],
    },
    after: {
      title: "Value After Change",
      variableNote:
        "V = final value, V0 = starting value, p = change in % (negative for decrease).",
      exampleLabel: "Example: 2,000 after a 15% decrease (discount).",
      steps: [
        { step: "Substitute", expression: "V₀ = 2,000, p = −15" },
        { step: "Factor", expression: "1 + (−15 ÷ 100) = 1 − 0.15 = 0.85" },
        { step: "Multiply", expression: "V = 2,000 × 0.85" },
        { step: "Result", expression: "V = 1,700" },
      ],
    },
  },
};

const formulasKo = {
  sectionTitle: "공식",
  sectionIntro:
    "각 모드는 아래 표준 정의를 사용합니다. 기호는 계산기 탭 입력 필드와 같습니다.",
  formulaLabel: "공식",
  stepByStepLabel: "단계별 계산",
  stepCol: "단계",
  calcCol: "계산",
  tryItNow: "지금 계산해 보기",
  modes: {
    basic: {
      title: "기본 퍼센트",
      variableNote: "P = 결과값, r = 퍼센트(%), N = 기준 숫자.",
      exampleLabel: "예: 100의 20%는?",
      steps: [
        { step: "대입", expression: "r = 20, N = 100" },
        { step: "공식 적용", expression: "P = (20 ÷ 100) × 100 = 0.2 × 100" },
        { step: "결과", expression: "P = 20" },
      ],
    },
    change: {
      title: "증감률",
      variableNote:
        "C = 증감률(%), Nold = 기존 값, Nnew = 새 값 (C > 0 증가, C < 0 감소).",
      exampleLabel: "예: 80에서 100으로 오른 경우.",
      steps: [
        { step: "대입", expression: "N_old = 80, N_new = 100" },
        { step: "분자", expression: "100 − 80 = 20" },
        { step: "나누기 & × 100", expression: "C = (20 ÷ 80) × 100 = 0.25 × 100" },
        { step: "결과", expression: "C = 25%" },
      ],
    },
    of: {
      title: "전체 대비 비율(부분 vs 전체)",
      variableNote: "Q = B가 A의 몇 %인지, A = 전체, B = 부분 (A ≠ 0).",
      exampleLabel: "예: 200의 몇 %가 40인가요?",
      steps: [
        { step: "대입", expression: "A = 200, B = 40" },
        { step: "비율", expression: "B ÷ A = 40 ÷ 200 = 0.2" },
        { step: "결과", expression: "Q = 0.2 × 100 = 20%" },
      ],
    },
    after: {
      title: "변화 후 값",
      variableNote:
        "V = 최종 값, V0 = 시작 값, p = 변화율(%) (감소는 음수).",
      exampleLabel: "예: 2,000에서 15% 할인(감소) 후.",
      steps: [
        { step: "대입", expression: "V₀ = 2,000, p = −15" },
        { step: "계수", expression: "1 + (−15 ÷ 100) = 1 − 0.15 = 0.85" },
        { step: "곱하기", expression: "V = 2,000 × 0.85" },
        { step: "결과", expression: "V = 1,700" },
      ],
    },
  },
};

export const percentageUiExtrasEn = {
  tabIntro: {
    basic:
      "Find how much a given percent of a number is. Same as (Percentage ÷ 100) × Number.",
    change:
      "See how much a value went up or down from the original to the new amount. Same as ((New − Original) ÷ Original) × 100.",
    of: "What percentage is the part (B) of the total (A)? Same as (B ÷ A) × 100.",
    after:
      "Final value after increasing or decreasing the starting amount by a percentage. Use a negative percentage for a decrease.",
  },
  results: {
    basicDetail: "{p}% of {n} is {res}.",
    changeIncrease: "Change from {old} to {new} is a {pct}% increase.",
    changeDecrease: "Change from {old} to {new} is a {pct}% decrease.",
    changeNone: "Change from {old} to {new} shows no percentage change.",
    ofDetail: "{b} is {pct}% of {a}.",
    afterIncrease: "{start} increased by {pc}% is {res}.",
    afterDecrease: "{start} decreased by {pc}% is {res}.",
    afterNone: "{start} with no percentage change remains {res}.",
  },
  historyClickHint: "Click an entry to restore inputs.",
  tabModeAriaLabel: "Calculator mode",
  copyResultAriaLabel: "Copy result to clipboard",
  loadingCalculator: "Loading calculator…",
  faqSectionTitle: "Common questions (FAQ)",
  faqSectionIntro:
    "{count} quick answers with worked examples and links to the matching FAQ page. Open the Percentage Calculator above to try the same patterns with your numbers.",
  formulas: formulasEn,
};

export const percentageUiExtrasKo = {
  tabIntro: {
    basic:
      "주어진 퍼센트가 숫자의 몇인지 계산합니다. (퍼센트 ÷ 100) × 숫자와 같습니다.",
    change:
      "기존 값에서 새 값으로 얼마나 변했는지 증감률(%)로 봅니다. ((새 값 − 기존 값) ÷ 기존 값) × 100과 같습니다.",
    of: "부분(B)이 전체(A)의 몇 %인지 계산합니다. (B ÷ A) × 100과 같습니다.",
    after:
      "시작 값을 퍼센트만큼 올리거나 내린 뒤의 최종 값입니다. 감소는 음수 퍼센트를 사용하세요.",
  },
  results: {
    basicDetail: "{p}%의 {n}은(는) {res}입니다.",
    changeIncrease: "{old}에서 {new}로 {pct}% 증가했습니다.",
    changeDecrease: "{old}에서 {new}로 {pct}% 감소했습니다.",
    changeNone: "{old}에서 {new}로 퍼센트 변화가 없습니다.",
    ofDetail: "{b}는 {a}의 {pct}%입니다.",
    afterIncrease: "{start}을(를) {pc}% 올리면 {res}입니다.",
    afterDecrease: "{start}을(를) {pc}% 내리면 {res}입니다.",
    afterNone: "{start}을(를) 변화 없이 두면 {res}입니다.",
  },
  historyClickHint: "항목을 클릭하면 입력값을 복원합니다.",
  tabModeAriaLabel: "계산기 모드",
  copyResultAriaLabel: "결과를 클립보드에 복사",
  loadingCalculator: "계산기 불러오는 중…",
  faqSectionTitle: "자주 묻는 질문(FAQ)",
  faqSectionIntro:
    "예시와 함께 답하는 FAQ {count}개입니다. 위 퍼센트 계산기에서 같은 패턴을 직접 입력해 볼 수 있습니다.",
  formulas: formulasKo,
};
