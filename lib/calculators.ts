export type CalculatorTool = {
  href: string;
  title: string;
  description: string;
  /** 허브에서 강조 표시할 대표 계산기 */
  featured?: boolean;
};

export const calculatorTools: readonly CalculatorTool[] = [
  {
    href: "/loan-calculator",
    title: "대출 이자 계산기",
    description: "원리금균등·원금균등·만기일시상환 방식별 월 납입액과 총 이자를 비교합니다.",
    featured: true,
  },
  {
    href: "/dsr-calculator",
    title: "DSR 계산기",
    description: "연 소득과 기존·신규 대출 조건으로 DSR(%)을 간이 산출합니다.",
  },
  {
    href: "/acquisition-tax-calculator",
    title: "취득세 계산기",
    description: "주택·주택 외 자산 구분과 취득 유형별 취득세·부가세를 계산합니다.",
  },
  {
    href: "/brokerage-fee-calculator",
    title: "중개보수 계산기",
    description: "매매·전세·월세 거래 유형별 중개수수료 상한액을 계산합니다.",
  },
  {
    href: "/prepayment-fee-calculator",
    title: "중도상환 수수료 계산기",
    description: "대출 중도상환 시 예상 수수료와 이자 절감 효과를 비교합니다.",
  },
  {
    href: "/comprehensive-property-tax-calculator",
    title: "종합부동산세 계산기",
    description: "공시가격·주택 수 기준 재산세·지방교육세·종부세·농특세와 연간 보유세 합계를 산출합니다.",
  },
] as const;

export const LOAN_CALCULATOR_PATH = "/loan-calculator" as const;
