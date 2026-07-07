import type { WebApplicationSchemaInput } from "@/lib/schema-builders";

export const calculatorWebApplications: Record<string, WebApplicationSchemaInput> = {
  "/loan-calculator": {
    name: "대출 이자 계산기",
    description:
      "원리금균등·원금균등·만기일시상환 방식별 월 납입액과 총 이자를 미리 계산하는 무료 온라인 계산기입니다.",
    path: "/loan-calculator",
    featureList: [
      "원리금균등상환 계산",
      "원금균등상환 계산",
      "만기일시상환 계산",
      "거치기간 설정",
      "상환 방식 비교",
      "상환 일정표 다운로드",
    ],
  },
  "/dsr-calculator": {
    name: "DSR·주담대 한도 계산기",
    description:
      "연소득·기존 부채·신규 대출 조건으로 DSR(%)과 월 상환 부담을 간이 산출하는 DSR 계산기입니다.",
    path: "/dsr-calculator",
    featureList: ["DSR(%) 산출", "주담대·신용·할부 부채 반영", "만기일시·원금균등 산정 방식 선택"],
  },
  "/dti-calculator": {
    name: "DTI 계산기",
    description: "주담대 원리금·기타 대출 이자를 반영해 DTI(%)를 간이 산출하는 계산기입니다.",
    path: "/dti-calculator",
    featureList: ["DTI(%) 산출", "주담대 원리금 반영", "기타 대출 이자 반영"],
  },
  "/ltv-calculator": {
    name: "LTV 계산기",
    description: "담보 가격·지역·주택 보유 조건으로 LTV(%)와 대출 가능액을 간이 산출하는 계산기입니다.",
    path: "/ltv-calculator",
    featureList: ["LTV(%) 산출", "규제지역·생애최초 조건", "선순위 설정액 반영"],
  },
  "/acquisition-tax-calculator": {
    name: "취득세 계산기",
    description: "주택·주택 외 자산 구분과 취득 유형별 취득세·지방교육세·농어촌특별세를 계산하는 계산기입니다.",
    path: "/acquisition-tax-calculator",
    featureList: ["취득세 산출", "지방교육세·농특세 반영", "주택 수·조정지역 조건"],
  },
  "/brokerage-fee-calculator": {
    name: "중개수수료 계산기",
    description: "매매·전세·월세 거래 유형별 중개수수료 상한액을 계산하는 계산기입니다.",
    path: "/brokerage-fee-calculator",
    featureList: ["매매·전세·월세 요율", "서울시 고시 상한 요율", "VAT 적용 기준 참고"],
  },
  "/prepayment-fee-calculator": {
    name: "중도상환 수수료 계산기",
    description: "대출 중도상환 시 예상 수수료와 면제 기간 여부를 확인하는 계산기입니다.",
    path: "/prepayment-fee-calculator",
    featureList: ["중도상환 수수료 산출", "면제 기간 반영", "잔여·경과 기간 입력"],
  },
  "/comprehensive-property-tax-calculator": {
    name: "종합부동산세 계산기",
    description: "공시가격·주택 수 기준 재산세·종부세·농특세와 연간 보유세 합계를 산출하는 계산기입니다.",
    path: "/comprehensive-property-tax-calculator",
    featureList: ["재산세·종부세 산출", "1세대 1주택 공제 반영", "연간 보유세 합계"],
  },
  "/capital-gains-tax-calculator": {
    name: "양도소득세 계산기",
    description: "양도차익·장기보유특별공제·다주택 중과를 반영해 양도소득세·지방소득세를 산출하는 계산기입니다.",
    path: "/capital-gains-tax-calculator",
    featureList: ["1세대 1주택 비과세·고가 안분", "장기보유특별공제", "다주택 중과·단기세율 비교"],
  },
  "/inheritance-tax-calculator": {
    name: "상속세 계산기",
    description:
      "국세청 세액계산 흐름도 기준으로 과세가액·상속공제·누진세율·세액공제를 반영해 예상 상속세를 산출하는 계산기입니다.",
    path: "/inheritance-tax-calculator",
    featureList: ["일괄공제·배우자공제", "금융·동거주택 상속공제", "세대생략할증·신고세액공제"],
  },
};

export function getCalculatorWebApplication(path: string): WebApplicationSchemaInput | undefined {
  return calculatorWebApplications[path];
}
