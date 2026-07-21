import Link from "next/link";
// import { AllCreditAffiliateCta } from "@/components/affiliate/allcredit-cta";

export const mortgageRateStatus2026Meta = {
  slug: "mortgage-rate-status-2026",
  title: "2026년 주택담보대출 금리 현황",
  description:
    "2026년 7월 기준 주담대 금리 범위, 정책 모기지·규제 변화, 금리 유형별 월 상환 영향과 지금 신청자에게 의미 있는 선택 기준을 정리했습니다.",
  updated: "2026년 7월 21일",
} as const;

export function MortgageRateStatus2026Body() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-2026-overview">
        <h2 id="guide-2026-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 기준
        </h2>
        <p>
          2026년 7월 초 KB국민은행 주담대 고시(기준일 7월 2일) 기준, 혼합·변동형 상품의 적용 금리(우대 전·후 범위)는 대체로{" "}
          <strong>연 4.07% ~ 5.97%</strong> 수준입니다. 아래 수치는 <strong>그 시점의 시장 스냅샷</strong>이며, 실제 적용
          금리는 신용·담보·우대·가산 조건에 따라 달라집니다.{" "}
          <Link href="/guide/kb-mortgage-300-million-limit-2026-guide" className="text-primary underline-offset-4 hover:underline">
            KB 3억 한도
          </Link>
          등 은행별 내부 한도는 금리와 별도로 한도를 줄일 수 있습니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-2026-who-reads">
        <h2 id="guide-2026-who-reads" className="text-foreground text-xl font-semibold tracking-tight">
          이 글에서 확인할 것
        </h2>
        <p>
          홈 화면 계산기는 특정 금리를 넣어 월 상환액을 계산하는 데 적합합니다. 이 글은{" "}
          <strong>현재 시장 금리 수준·정책 모기지·규제 변화</strong>가 한도·상품 선택에 어떤 영향을 주는지 정리한
          참고용입니다. 고정·변동 선택의 판단 기준은{" "}
          <Link href="/guide/variable-vs-fixed-rate-2026" className="text-primary underline-offset-4 hover:underline">
            변동금리 vs 고정금리 선택 기준
          </Link>
          과 함께 보세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-market-rate-range">
        <h2 id="guide-market-rate-range" className="text-foreground text-xl font-semibold tracking-tight">
          시중은행 금리 범위
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              2026년 7월 기준 시중은행 주담대 금리(KB 고시 참고)
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
                  변동·혼합(금융채 연동, 우대 반영)
                </th>
                <td className="border-border border-b px-3 py-2.5">연 4.07% ~ 5.97%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5년 고정 후 변동(상단)
                </th>
                <td className="border-border border-b px-3 py-2.5">연 6.49% 내외</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  평균 주담대 금리(2026년 5월 신규취급, 한국은행)
                </th>
                <td className="px-3 py-2.5">연 4.32% 전후(참고)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-policy-mortgage-rate">
        <h2 id="guide-policy-mortgage-rate" className="text-foreground text-xl font-semibold tracking-tight">
          정책 모기지 금리(2026년 7월 기준)
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

      <section className="space-y-4" aria-labelledby="guide-rate-impact-example">
        <h2 id="guide-rate-impact-example" className="text-foreground text-xl font-semibold tracking-tight">
          금리 0.5%p 차이가 월 상환에 미치는 영향(예시)
        </h2>
        <p className="text-muted-foreground text-sm">
          대출 3억 원·30년·원리금균등·거치기간 없음 가정
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              금리별 월 상환액·총 이자(참고)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  금리
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  월 상환액
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  30년 총 이자(참고)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  4.0%
                </th>
                <td className="border-border border-b px-3 py-2.5">약 143만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 2억 1,500만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  4.5%
                </th>
                <td className="border-border border-b px-3 py-2.5">약 152만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 2억 4,700만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  5.0%
                </th>
                <td className="px-3 py-2.5">약 161만 원</td>
                <td className="px-3 py-2.5">약 2억 7,900만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          0.5%p만 올라도 월 약 9만 원, 30년 총 이자는 수천만 원 차이가 납니다. 변동금리의 낮은 초기 금리만 보고 선택하기보다,{" "}
          <Link href="/guide/stress-dsr-explained" className="text-primary underline-offset-4 hover:underline">
            스트레스 DSR
          </Link>
          로 한도가 줄어드는지, 금리 인상 시 감당 가능한지 함께 확인하세요.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-regulation-change-2026">
        <h2 id="guide-regulation-change-2026" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 주요 규제 변경 사항
        </h2>
        <p>
          DSR 규제가 은행권 40%, 비은행권 50%로 강화되었으며, 2026년 4월 17일부터 다주택자의 수도권 및 규제지역 아파트
          담보대출 만기 연장이 제한됩니다. <strong>2026년 7월 1일</strong> 동탄·기흥·구리 규제지역 편입,{" "}
          <strong>7월 10일</strong> KB국민은행 구입 목적 주담대 <strong>3억 원</strong> 자체 상한, 지방 주담대{" "}
          <strong>스트레스 DSR 하반기(1.50%p)</strong> 적용 등이 이어졌습니다. 2억 4,900만 원을 초과하는 고액
          주택담보대출에는 최대 0.25%p 가산금리가 적용됩니다.
        </p>
        <p>
          <strong>실무적으로는</strong> 표에 나온 최저 금리와 실제 승인 금리 사이에 간극이 있는 경우가 많습니다. 우대
          조건(급여 이체·카드 실적 등), 신용등급, 담보 지역·가격, 고액·다주택 가산을 합쳐 보면 초기 견적과 0.3~0.8%p
          차이가 나기도 합니다. 2~3곳 이상 사전 한도 조회로 비교하는 것이 좋습니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 금리는 신용점수, 담보 가치, 금융기관별 정책에 따라 상이하며 수시로 변동됩니다. 실제 대출 조건은 각 금융기관에 직접
          문의하거나{" "}
          <a
            href="https://portal.kfb.or.kr"
            className="text-primary underline-offset-4 hover:underline"
            rel="noopener noreferrer"
          >
            전국은행연합회 소비자포털
          </a>
          에서 확인할 것을 권장합니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-2026-checklist">
        <h2 id="guide-2026-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          지금 대출을 검토 중이라면
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>정책 모기지(디딤돌·보금자리론) 요건 충족 여부 —{" "}
            <Link href="/guide/bogeumjari-vs-didimdol" className="text-primary underline-offset-4 hover:underline">
              보금자리론 vs 디딤돌
            </Link>
          </li>
          <li>DSR·스트레스 DSR 기준 한도 —{" "}
            <Link href="/dsr-calculator" className="text-primary underline-offset-4 hover:underline">
              DSR 계산기
            </Link>
          </li>
          <li>고정·변동 선택 —{" "}
            <Link href="/guide/variable-vs-fixed-rate-2026" className="text-primary underline-offset-4 hover:underline">
              금리 유형 가이드
            </Link>
          </li>
          <li>금리 인하 가능성 —{" "}
            <Link href="/guide/rate-reduction-request-right" className="text-primary underline-offset-4 hover:underline">
              금리인하요구권
            </Link>{" "}
            적용 조건
          </li>
        </ul>
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
          <Link href="/loan-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            현재 금리 기준 월 상환액 대출 이자 계산
          </Link>
        </p>
      </aside>
    </>
  );
}
