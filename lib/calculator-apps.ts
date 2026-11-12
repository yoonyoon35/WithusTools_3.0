import type { WebApplicationSchemaInput } from "@/lib/schema-builders";

export const calculatorWebApplications: Record<string, WebApplicationSchemaInput> = {
  "/loan-calculator": {
    name: "대출 이자 계산기",
    description:
      "거치식·체증식·원리금균등·원금균등·만기일시상환 방식별 월 납입액과 총 이자를 미리 계산하는 무료 온라인 계산기입니다. 카카오 비상금대출·마이너스통장은 만기일시로 월 이자를 어림할 수 있습니다.",
    path: "/loan-calculator",
    featureList: [
      "거치식(거치기간) 계산",
      "체증식상환 계산",
      "원리금균등상환 계산",
      "원금균등상환 계산",
      "만기일시상환 계산",
      "비상금대출·마이너스통장 월 이자 어림",
      "상환 방식 비교",
      "상환 일정표 다운로드",
    ],
  },
  "/emergency-loan-interest-calculator": {
    name: "비상금대출 이자 계산기",
    description:
      "비상금대출·마이너스통장 이자를 사용 금액×연 금리÷365×일수로 계산하고, 사용 시작일·기준일 또는 일수 직접 입력과 ÷12 월 어림을 비교하는 계산기입니다. 카카오·토스·케이뱅크 등 비공식 참고용입니다.",
    path: "/emergency-loan-interest-calculator",
    featureList: [
      "일할 이자(연이율÷365×일수)",
      "사용 시작일·기준일로 일수 자동 계산",
      "일수 직접 입력 선택",
      "한 달(÷12) 어림 비교",
      "미사용(한도만 오픈) 0원 이자",
    ],
  },
  "/dsr-calculator": {
    name: "DSR·주담대 한도 계산기",
    description:
      "연소득·기존 부채·신규 대출 조건으로 DSR(%)과 목표 DSR 기준 주담대 최대 대출 가능액을 계산하는 계산기입니다.",
    path: "/dsr-calculator",
    featureList: [
      "DSR 40% 기준 최대 대출 가능액 역산",
      "내 목표 DSR 직접 설정(30%·50% 등)",
      "DSR(%) 산출",
      "주담대·신용·할부 부채 반영",
      "만기일시·원금균등 산정 방식 선택",
    ],
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
    description: "주택, 주택 외(토지·건물 등), 농지 취득세와 지방교육세·농어촌특별세(농특세)를 계산하는 계산기입니다.",
    path: "/acquisition-tax-calculator",
    featureList: ["취득세 산출", "농지 취득세", "지방교육세·농어촌특별세(농특세) 반영", "주택 수·조정지역 조건"],
  },
  "/farmland-acquisition-tax-calculator": {
    name: "농지 취득세 계산기",
    description:
      "농지 매매·상속·증여·원시취득별 취득세와 농어촌특별세·지방교육세를 계산하는 계산기입니다. 자경 감면·농지취득자격증명·신고 기한은 농지 취득세 가이드에서 확인할 수 있습니다.",
    path: "/farmland-acquisition-tax-calculator",
    featureList: [
      "농지 매매 취득세(일반 3%·자경 1.5%)",
      "농지 상속·영농상속 취득세",
      "농지 증여·원시취득 취득세",
      "농어촌특별세·지방교육세 합산",
    ],
  },
  "/first-home-acquisition-tax-calculator": {
    name: "생애최초 취득세 감면 계산기",
    description:
      "1주택 매매 기준 산출 취득세에서 생애최초 감면(일반 200만·확대 300만 원)을 공제한 감면액과 감면 후 세액을 계산하는 계산기입니다. 비공식 참고용입니다.",
    path: "/first-home-acquisition-tax-calculator",
    featureList: [
      "생애최초 감면 기본 적용",
      "감면 전·감면액·감면 후 비교",
      "일반 200만·확대 300만 원 한도",
      "지방교육세·농어촌특별세 합산",
    ],
  },
  "/officetel-acquisition-tax-calculator": {
    name: "오피스텔 취득세 계산기",
    description:
      "오피스텔 매매·증여·상속·원시취득별 취득세와 농어촌특별세·지방교육세를 계산하는 계산기입니다. 주거용·업무용 세율은 같으며, 이후 주택 수·양도세는 오피스텔 주거용·업무용 세금 가이드에서 확인할 수 있습니다.",
    path: "/officetel-acquisition-tax-calculator",
    featureList: [
      "오피스텔 매매 합계 4.6%",
      "증여·상속·원시취득 세율",
      "주거용·업무용 동일 세율",
      "농어촌특별세·지방교육세 합산",
    ],
  },
  "/inherited-housing-acquisition-tax-calculator": {
    name: "상속 주택 취득세 계산기",
    description:
      "상속으로 주택을 취득할 때 시가표준액 기준 취득세 2.8%·지방교육세 0.16%·전용 85㎡ 초과 시 농특세 0.2%를 계산하는 계산기입니다. 납부 기한·주택 수는 상속 주택 취득세 가이드에서 확인할 수 있습니다.",
    path: "/inherited-housing-acquisition-tax-calculator",
    featureList: [
      "상속 주택 취득세 2.8%",
      "지방교육세 0.16%",
      "전용 85㎡ 초과 농특세",
      "시가표준액 과세표준",
    ],
  },
  "/brokerage-fee-calculator": {
    name: "중개수수료 계산기",
    description: "매매·전세·월세 거래 유형별 중개수수료 상한액을 계산하는 계산기입니다.",
    path: "/brokerage-fee-calculator",
    featureList: ["매매·전세·월세 요율", "서울시 고시 상한 요율", "VAT 적용 기준 참고"],
  },
  "/jeonse-brokerage-fee-calculator": {
    name: "전세 중개수수료 계산기",
    description:
      "주택 전세 보증금 구간별 서울시 고시 상한 요율로 중개수수료 상한액을 계산하는 계산기입니다. 요율표·예시·재계약은 전세 중개수수료 가이드에서 확인할 수 있습니다.",
    path: "/jeonse-brokerage-fee-calculator",
    featureList: ["전세 보증금 입력", "임대차 상한 요율·한도액", "서울시 고시 기준", "VAT 별도 안내"],
  },
  "/wolse-brokerage-fee-calculator": {
    name: "월세 중개수수료 계산기",
    description:
      "주택 월세 보증금·월세 환산 거래금액에 서울시 고시 상한 요율을 적용해 중개수수료 상한액을 계산하는 계산기입니다. 환산·예시는 월세 중개수수료 가이드에서 확인할 수 있습니다.",
    path: "/wolse-brokerage-fee-calculator",
    featureList: ["보증금·월세 환산", "임대차 상한 요율·한도액", "서울시 고시 기준", "VAT 별도 안내"],
  },
  "/prepayment-fee-calculator": {
    name: "중도상환 수수료 계산기",
    description: "대출 중도상환 시 예상 수수료와 면제 기간 여부를 확인하는 계산기입니다.",
    path: "/prepayment-fee-calculator",
    featureList: ["중도상환 수수료 산출", "면제 기간 반영", "잔여·경과 기간 입력"],
  },
  "/national-housing-bond-calculator": {
    name: "국민주택채권 계산기",
    description:
      "시가표준액·지역·등기 유형별 국민주택채권 매입금액을 계산하고, 즉시매도 시 할인율별 실제 부담액을 비교하는 계산기입니다.",
    path: "/national-housing-bond-calculator",
    featureList: [
      "소유권 이전(유상)·상속·증여 매입금액",
      "근저당 설정 매입금액(상한 10억 원)",
      "서울·광역시/그 밖의 지역 구간별 매입률",
      "할인율별 즉시매도 실부담",
    ],
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
  "/presale-capital-gains-tax-calculator": {
    name: "분양권 양도세 계산기",
    description:
      "주택분양권 양도 시 보유 1년 미만 70%·1년 이상 60% 전용세율로 양도소득세·지방소득세를 산출하는 계산기입니다. 장특공·1주택 비과세·다주택 중과는 적용되지 않습니다.",
    path: "/presale-capital-gains-tax-calculator",
    featureList: ["분양권 전용 60%·70%", "기본공제·지방소득세", "장특공·비과세 미적용 안내"],
  },
  "/comprehensive-income-tax-calculator": {
    name: "종합소득세 계산기",
    description: "국세청 세율표·경비율·중간예납 식으로 산출세액, 추계 사업소득, 납부·환급세액을 계산하는 계산기입니다.",
    path: "/comprehensive-income-tax-calculator",
    featureList: ["2023~2025년 귀속 세율", "단순·기준경비율 추계", "중간예납 고지·추계액"],
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
