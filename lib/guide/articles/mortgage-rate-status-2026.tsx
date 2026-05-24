import Link from "next/link";
// import { AllCreditAffiliateCta } from "@/components/affiliate/allcredit-cta";

export const mortgageRateStatus2026Meta = {
  slug: "mortgage-rate-status-2026",
  title: "2026년 주택담보대출 금리 현황",
  description:
    "2026년 4월 기준 시중은행 주택담보대출 금리 범위, 정책 모기지 특성, 금리 유형별 차이와 규제 변경 사항을 한눈에 정리했습니다.",
  updated: "2026년 4월 13일",
} as const;

export function MortgageRateStatus2026Body() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-2026-overview">
        <h2 id="guide-2026-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 4월 기준
        </h2>
        <p>
          2026년 4월 기준 시중은행 고정금리 상단이 <strong>연 7.01%</strong>를 넘었고, 변동금리는 우대 적용 시 최저{" "}
          <strong>연 4.44%</strong> 수준입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-market-rate-range">
        <h2 id="guide-market-rate-range" className="text-foreground text-xl font-semibold tracking-tight">
          시중은행 금리 범위
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              2026년 4월 기준 시중은행 주담대 금리
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  금리 유형
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  금리 범위
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  변동금리
                </th>
                <td className="border-border border-b px-3 py-2.5">연 4.44% ~ 5.26%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  혼합고정금리(상단)
                </th>
                <td className="border-border border-b px-3 py-2.5">연 7.01%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  평균 주담대 금리(2월 신규취급 기준)
                </th>
                <td className="px-3 py-2.5">연 4.32%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-policy-mortgage-rate">
        <h2 id="guide-policy-mortgage-rate" className="text-foreground text-xl font-semibold tracking-tight">
          정책 모기지 금리(2026년 4월 기준)
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[26rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              정책 모기지 상품별 금리 유형
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상품
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  금리 유형
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비고
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  디딤돌대출
                </th>
                <td className="border-border border-b px-3 py-2.5">고정금리</td>
                <td className="border-border border-b px-3 py-2.5">소득 조건 충족 시 우대금리 추가 적용 가능</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  보금자리론
                </th>
                <td className="px-3 py-2.5">고정금리</td>
                <td className="px-3 py-2.5">비대면 신청 시 0.1%p 가산</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 정책 모기지 금리는 분기별 고시되며, 실제 적용 금리는 한국주택금융공사 홈페이지에서 확인해야 합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-rate-type-feature">
        <h2 id="guide-rate-type-feature" className="text-foreground text-xl font-semibold tracking-tight">
          금리 유형별 특징
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              변동금리와 고정금리 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  변동금리
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  고정금리
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  기준
                </th>
                <td className="border-border border-b px-3 py-2.5">COFIX 등 시장금리 연동</td>
                <td className="border-border border-b px-3 py-2.5">대출 실행일 기준 고정</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  금리 인하 시
                </th>
                <td className="border-border border-b px-3 py-2.5">유리</td>
                <td className="border-border border-b px-3 py-2.5">불리</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  금리 인상 시
                </th>
                <td className="border-border border-b px-3 py-2.5">불리</td>
                <td className="border-border border-b px-3 py-2.5">유리</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  현재 시점
                </th>
                <td className="px-3 py-2.5">초기 부담 낮음</td>
                <td className="px-3 py-2.5">장기 안정성 확보</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-regulation-change-2026">
        <h2 id="guide-regulation-change-2026" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 주요 규제 변경 사항
        </h2>
        <p>
          DSR 규제가 은행권 40%, 비은행권 50%로 강화되었으며, 2026년 4월 17일부터 다주택자의 수도권 및 규제지역 아파트
          담보대출 만기 연장이 제한됩니다. 또한 2억 4,900만 원을 초과하는 고액 주택담보대출에는 최대 0.25%p 가산금리가
          적용됩니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 금리는 신용점수, 담보 가치, 금융기관별 정책에 따라 상이하며 수시로 변동됩니다. 실제 대출 조건은 각 금융기관에 직접
          문의하거나 전국은행연합회 소비자포털에서 확인할 것을 권장합니다.
        </p>
      </section>

      {/* <AllCreditAffiliateCta
        className="w-full"
        description="표에 나온 금리는 신용등급·심사에 따라 달라집니다. 신청 전 KCB 신용등급을 무료로 확인해 보세요."
      /> */}

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="계산기 이동"
      >
        <p>
          <Link href="/#calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            현재 금리 기준 월 상환액 대출 이자 계산
          </Link>
        </p>
      </aside>
    </>
  );
}
