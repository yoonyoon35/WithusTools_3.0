export interface FaqItem {
  question: string;
  answer: string;
}

/** 대출 이자 계산기 FAQ */
export const loanCalculatorFaqItems = [
  {
    question: "계산 결과는 실제 대출과 동일한가요?",
    answer:
      "표준 계산식 기반 참고값입니다. 취급 수수료·보험료·중도상환 수수료·인지세 등은 상품·기관마다 달라 반영되지 않을 수 있으며, 금리도 신용·담보·목적에 따라 달라집니다. 확정 조건은 해당 금융기관에 확인하세요.",
  },
  {
    question: "상환 방식 비교 기능은 어떻게 사용하나요?",
    answer:
      '대출 정보 입력 후 "다른 상환방식과 비교하기"를 켜고 비교할 방식을 고른 뒤 계산하기를 누르면, 월 상환·총 이자·그래프로 두 방식을 한 화면에서 볼 수 있습니다. 원리금균등·원금균등·만기일시 차이는 계산기 하단 기준표를 참고하세요.',
  },
  {
    question: "비교 결과에서 괄호 안의 숫자는 무엇을 의미하나요?",
    answer:
      "선택한 방식이 비교 방식 대비 얼마나 더 많거나 적게 드는지를 나타냅니다. 빨간색은 더 많이 상환(불리), 초록색은 더 적게 상환(유리)입니다.",
  },
  {
    question: "거치기간은 무엇인가요?",
    answer:
      "일정 기간 원금 상환을 미루고 이자만 내는 구조입니다. 초기 부담은 줄지만 총 이자가 늘고, 거치 종료 후 월 상환액이 커질 수 있습니다. 주택담보 등에서 쓰이며, 계산기에서 거치 연수를 입력해 반영할 수 있습니다. 자세한 내용은 가이드 「거치기간 설명」을 참고하세요.",
  },
] as const satisfies readonly FaqItem[];

/** @deprecated loanCalculatorFaqItems 사용 */
export const faqItems = loanCalculatorFaqItems;

export const dsrCalculatorFaqItems = [
  {
    question: "DSR 40%는 무엇을 의미하나요?",
    answer:
      "은행권 기준으로 연간 모든 대출 원리금 상환액 합계가 연소득의 40%를 넘으면 주택담보대출 등 추가 대출이 제한될 수 있습니다. 제2금융권은 50%까지 허용되는 경우가 많습니다.",
  },
  {
    question: "자동차 할부도 DSR에 포함되나요?",
    answer:
      "포함됩니다. DSR은 주택담보대출뿐 아니라 신용대출·할부·카드론 등 차주의 원리금 상환액을 합산합니다. 따라서 할부가 있으면 주담대 가능액이 줄어들 수 있습니다.",
  },
  {
    question: "만기일시상환 대출은 DSR을 어떻게 계산하나요?",
    answer:
      "금융기관·상품에 따라 연간 원금 상환액 산정 방식이 다릅니다. 일부는 5년 원금균등 가정, 일부는 이자만 반영합니다. 본 계산기에서 산정 방식을 선택할 수 있으며, 확정 DSR은 신청 금융기관에서 확인해야 합니다.",
  },
  {
    question: "DSR과 DTI의 차이는 무엇인가요?",
    answer:
      "DSR은 모든 대출의 원리금을, DTI는 주담대 원리금과 기타 대출 이자를 연소득으로 나눈 비율입니다. 2023년 이후 은행권 주담대는 DSR 40%가 먼저 한도를 제한하는 경우가 많습니다.",
  },
] as const satisfies readonly FaqItem[];

export const dtiCalculatorFaqItems = [
  {
    question: "DTI는 어떻게 계산하나요?",
    answer:
      "DTI(%) = (주담대 연간 원리금 + 기타 대출 연간 이자) ÷ 연소득 × 100입니다. 주담대는 원금과 이자가 모두 포함되고, 신용·할부 등은 보통 이자만 포함됩니다.",
  },
  {
    question: "DTI 60%는 항상 대출 가능한가요?",
    answer:
      "아닙니다. 은행권 참고 한도는 60%이지만, 실무에서는 DSR 40%·LTV·스트레스 DSR 등 다른 규제가 먼저 적용될 수 있습니다.",
  },
  {
    question: "DSR 계산기와 무엇이 다른가요?",
    answer:
      "DSR은 모든 대출 원리금을 합산하고, DTI는 주담대 원리금+기타 이자만 반영합니다. 주담대 한도를 볼 때는 DSR 계산기를 함께 확인하는 것이 좋습니다.",
  },
] as const satisfies readonly FaqItem[];

export const ltvCalculatorFaqItems = [
  {
    question: "LTV는 무엇인가요?",
    answer:
      "LTV(주택담보인정비율)는 (선순위 설정액 + 대출금) ÷ 담보 인정 가격 × 100으로 계산합니다. 규제지역·다주택·생애최초 등 조건에 따라 적용 한도가 달라집니다.",
  },
  {
    question: "규제지역과 비규제지역 LTV 차이는?",
    answer:
      "규제지역은 LTV 한도가 더 낮게 적용되는 경우가 많습니다. 조정대상지역·투기과열지구 등 세부 구분은 시점·지자체 고시에 따라 달라질 수 있어 가이드와 금융기관 확인이 필요합니다.",
  },
  {
    question: "LTV만 충족하면 대출이 가능한가요?",
    answer:
      "아닙니다. DSR·DTI·담보 평가·소득 증빙 등 심사 요건을 모두 충족해야 합니다. LTV는 담보 대비 대출 비율의 참고 지표입니다.",
  },
] as const satisfies readonly FaqItem[];

export const acquisitionTaxCalculatorFaqItems = [
  {
    question: "취득세는 언제 납부하나요?",
    answer:
      "취득일로부터 60일 이내(조기 이전 시 등 예외 있음) 관할 지자체에 신고·납부합니다. 미납 시 가산세가 붙을 수 있습니다.",
  },
  {
    question: "1주택과 2주택 취득세율이 다른가요?",
    answer:
      "다릅니다. 주택 수·조정지역·취득가액 구간에 따라 세율과 중과가 달라집니다. 본 계산기와 가이드는 2026년 기준 참고값이며, 확정 세액은 관할 지자체·세무전문가 확인이 필요합니다.",
  },
  {
    question: "지방교육세·농어촌특별세도 포함되나요?",
    answer:
      "계산기에서 취득세와 함께 지방교육세·농어촌특별세(해당 시)를 합산해 보여줍니다. 세율·과세표준은 취득세액과 취득가액 구간에 따라 달라집니다.",
  },
] as const satisfies readonly FaqItem[];

export const brokerageFeeCalculatorFaqItems = [
  {
    question: "중개수수료는 법정 상한을 넘을 수 있나요?",
    answer:
      "공인중개사법상 상한 요율을 초과해 받을 수 없습니다. 실제 협의 금액은 상한 이내이며, 관할 시·도 고시와 거래 유형에 따라 달라집니다.",
  },
  {
    question: "VAT(부가세)는 별도인가요?",
    answer:
      "중개수수료에 부가세 10%가 별도로 붙는 것이 일반적입니다. 계약서·영수증에 VAT 포함 여부를 확인하세요.",
  },
  {
    question: "전세·월세 중개수수료는 어떻게 계산하나요?",
    answer:
      "전세는 보증금, 월세는 환산보증금(보증금 + 월세×100 등 관할 고시 기준)을 거래금액으로 두고 요율을 적용합니다. 본 계산기에서 유형별 상한액을 참고할 수 있습니다.",
  },
] as const satisfies readonly FaqItem[];

export const prepaymentFeeCalculatorFaqItems = [
  {
    question: "중도상환 수수료는 왜 부과되나요?",
    answer:
      "대출 기관이 예상했던 이자 수익이 줄어들기 때문에, 계약서에 정한 기간·요율로 위약금 성격의 수수료를 받는 경우가 많습니다.",
  },
  {
    question: "면제 기간이 지나면 수수료가 없나요?",
    answer:
      "상품마다 다릅니다. 일부는 대출 후 3년 경과 시 면제, 일부는 잔여기간·대출기간 비율로 감면됩니다. 계약서의 면제 조항을 확인하세요.",
  },
  {
    question: "중도상환과 대출 갈아타기 중 무엇이 유리한가요?",
    answer:
      "금리 차이·잔여 기간·중도상환 수수료·새 대출 취급 비용을 함께 비교해야 합니다. 이자 절감액이 수수료와 비용 합계를 넘을 때 갈아타기가 유리할 수 있습니다.",
  },
] as const satisfies readonly FaqItem[];

export const comprehensivePropertyTaxCalculatorFaqItems = [
  {
    question: "종합부동산세와 재산세는 무엇이 다른가요?",
    answer:
      "재산세는 지방세로 매년 6월·9월에 부과되고, 종합부동산세는 공시가격 합계가 일정 기준을 넘는 경우 12월에 추가로 부과되는 국세입니다.",
  },
  {
    question: "1세대 1주택도 종부세를 내나요?",
    answer:
      "공시가격 합계가 기본공제(2026년 기준 9억 원 등)를 초과하면 과세 대상이 될 수 있습니다. 공제·공정시장가액비율 적용 후 세액이 달라집니다.",
  },
  {
    question: "계산 결과와 실제 고지세액이 왜 다른가요?",
    answer:
      "공시가격·공제·공정시장가액비율·합산배제·납부세액 공제 등 세부 요건이 반영되기 때문입니다. 홈택스·관할 지자체 고지와 대조해 확인하세요.",
  },
] as const satisfies readonly FaqItem[];

export const guideIndexFaqItems = [
  {
    question: "가이드 글은 누가 작성하나요?",
    answer:
      "주택담보대출·부동산 거래 경험을 바탕으로 운영자가 직접 정리합니다. 금융감독원·국세청 등 공공 자료를 우선 참고하며, 수정일은 각 글 상단에 표기합니다.",
  },
  {
    question: "가이드와 계산기 결과를 그대로 신고·신청해도 되나요?",
    answer:
      "아닙니다. 모든 글과 계산 결과는 참고용입니다. 실제 대출 심사·세금 신고·중개수수료는 금융기관·관할 지자체·계약 조건에 따라 달라집니다.",
  },
  {
    question: "2026년 세율·요율이 반영되어 있나요?",
    answer:
      "제목·본문에 2026년 기준이 명시된 글은 해당 시점 제도를 반영합니다. 법령·고시 변경 시 글을 수정하고 수정일을 갱신합니다.",
  },
] as const satisfies readonly FaqItem[];

export const calculatorFaqByPath: Record<string, readonly FaqItem[]> = {
  "/loan-calculator": loanCalculatorFaqItems,
  "/dsr-calculator": dsrCalculatorFaqItems,
  "/dti-calculator": dtiCalculatorFaqItems,
  "/ltv-calculator": ltvCalculatorFaqItems,
  "/acquisition-tax-calculator": acquisitionTaxCalculatorFaqItems,
  "/brokerage-fee-calculator": brokerageFeeCalculatorFaqItems,
  "/prepayment-fee-calculator": prepaymentFeeCalculatorFaqItems,
  "/comprehensive-property-tax-calculator": comprehensivePropertyTaxCalculatorFaqItems,
};

export function getCalculatorFaqItems(path: string): readonly FaqItem[] {
  return calculatorFaqByPath[path] ?? [];
}
