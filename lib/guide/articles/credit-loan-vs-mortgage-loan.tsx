import Link from "next/link";

export const creditLoanVsMortgageLoanMeta = {
  slug: "credit-loan-vs-mortgage-loan",
  title: "신용대출 vs 주택담보대출 차이",
  description:
    "2026년 10월 30일 기준 신용대출과 주택담보대출의 금리·한도·규제·용도 차이, 한도 산정 방식과 신용점수별 금리를 표로 정리했습니다.",
  updated: "2026년 10월 30일",
} as const;

export function CreditLoanVsMortgageLoanBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-cvm-overview">
        <h2 id="guide-cvm-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 10월 30일 기준
        </h2>
        <p>
          신용대출은 담보 없이 신용만으로 받는 대출이고, 주택담보대출은 주택을 담보로 제공하고 받는 대출입니다. 두 상품은 금리·한도·
          용도·규제 면에서 차이가 큽니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cvm-core">
        <h2 id="guide-cvm-core" className="text-foreground text-xl font-semibold tracking-tight">
          핵심 비교
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              신용대출과 주택담보대출 핵심 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  신용대출
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주택담보대출
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  담보
                </th>
                <td className="border-border border-b px-3 py-2.5">없음</td>
                <td className="border-border border-b px-3 py-2.5">주택</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  금리(2026년 10월 기준)
                </th>
                <td className="border-border border-b px-3 py-2.5">연 5%대 초반 ~ 6%대 중반(5대 은행 공시 신용점수 701점 이상 기준)</td>
                <td className="border-border border-b px-3 py-2.5">연 4.38% ~ 6.51%(5대 은행 변동·고정 형 범위)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대출 한도
                </th>
                <td className="border-border border-b px-3 py-2.5">연소득 이내(연소득 3,500만 원 이하·정책서민금융 제외)</td>
                <td className="border-border border-b px-3 py-2.5">
                  최대 수억 원(<abbr title="담보인정비율">LTV</abbr> 기준)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대출 기간
                </th>
                <td className="border-border border-b px-3 py-2.5">통상 1년 ~ 5년</td>
                <td className="border-border border-b px-3 py-2.5">최장 30년 ~ 50년</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  심사 기준
                </th>
                <td className="border-border border-b px-3 py-2.5">소득·신용점수</td>
                <td className="border-border border-b px-3 py-2.5">소득·신용점수·담보 가치</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  규제
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <abbr title="총부채원리금상환비율">DSR</abbr> 40%
                </td>
                <td className="border-border border-b px-3 py-2.5">
                  LTV + <abbr title="총부채상환비율">DTI</abbr> + DSR 40%
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  승인 속도
                </th>
                <td className="border-border border-b px-3 py-2.5">빠름(당일~수일)</td>
                <td className="border-border border-b px-3 py-2.5">느림(1~2주)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  용도 제한
                </th>
                <td className="px-3 py-2.5">없음</td>
                <td className="px-3 py-2.5">주택 구입·전세 등</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-cvm-rate-reason">
        <h2 id="guide-cvm-rate-reason" className="text-foreground text-xl font-semibold tracking-tight">
          금리 차이가 나는 이유
        </h2>
        <p>
          주택담보대출은 주택이라는 담보가 있어 금융기관 입장에서 회수 가능성이 높습니다. 반면 신용대출은 담보 없이 차주의 신용만으로
          대출하므로 금융기관이 부담하는 리스크가 큽니다. 이 리스크가 금리에 반영되어 신용대출 금리가 더 높게 형성됩니다.
        </p>
        <p>
          다만 2026년 10월 말 기준 5대 은행 주담대 금리는 하단 4%대 후반에서 상단 6%대 중반까지 넓게 퍼져 있어(변동형
          4.38~6.38%, 5년 고정형 4.57~6.51%), 신용도가 낮거나 우대 조건이 적은 차주는 신용점수가 높은 차주의 신용대출 금리와
          비슷하거나 더 높은 금리를 적용받기도 합니다. 개인별 금리는 담보·소득·거래실적에 따라 달라지므로 실제 견적으로 비교해야
          합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cvm-limit">
        <h2 id="guide-cvm-limit" className="text-foreground text-xl font-semibold tracking-tight">
          한도 결정 방식
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              신용대출·주택담보대출 한도 결정 요소
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  신용대출
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주택담보대출
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주요 결정 요소
                </th>
                <td className="border-border border-b px-3 py-2.5">소득·신용점수·직장 안정성</td>
                <td className="border-border border-b px-3 py-2.5">담보 주택 감정가·LTV·DSR</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  한도 상한
                </th>
                <td className="border-border border-b px-3 py-2.5">연소득 이내(2025년 6.27 대책으로 신용대출 취급 한도 제한) + DSR 규제</td>
                <td className="border-border border-b px-3 py-2.5">담보 감정가 × LTV 비율</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  기존 부채 영향
                </th>
                <td className="px-3 py-2.5">DSR에 포함되어 한도 감소</td>
                <td className="px-3 py-2.5">DSR에 포함되어 한도 감소</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cvm-usage">
        <h2 id="guide-cvm-usage" className="text-foreground text-xl font-semibold tracking-tight">
          용도별 선택 기준
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              상황별 적합한 대출 유형
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상황
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  적합한 대출
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주택 구입 자금
                </th>
                <td className="border-border border-b px-3 py-2.5">주택담보대출</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  급전·생활 자금·소액 필요
                </th>
                <td className="border-border border-b px-3 py-2.5">신용대출</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  전세 보증금
                </th>
                <td className="border-border border-b px-3 py-2.5">전세자금대출(버팀목 등)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  사업 운영자금
                </th>
                <td className="border-border border-b px-3 py-2.5">신용대출 또는 사업자대출</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  장기 저금리 필요
                </th>
                <td className="border-border border-b px-3 py-2.5">주택담보대출</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  담보 제공이 어려운 경우
                </th>
                <td className="px-3 py-2.5">신용대출</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cvm-cre-score">
        <h2 id="guide-cvm-cre-score" className="text-foreground text-xl font-semibold tracking-tight">
          신용점수에 따른 신용대출 금리 차이
        </h2>
        <p className="text-muted-foreground text-sm">
          2026년 10월 금융감독원 금융상품한눈에 공시(직전월 신규취급 평균금리) 기준 5대 은행 신용대출 금리는 신용점수 900점
          초과 구간이 대체로 연 5.3% ~ 5.9%, 801~900점 구간이 연 5.7% ~ 6.3%대입니다. 같은 구간이라도 은행·상품(일반대출,
          마이너스통장)에 따라 차이가 크고, 신용점수가 낮을수록 금리가 크게 높아집니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[24rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              신용점수 구간별 신용대출 금리 범위(참고)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  신용점수 구간
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  신용대출 금리 범위
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  900점 초과
                </th>
                <td className="border-border border-b px-3 py-2.5">연 5.3% ~ 5.9%(5대 은행 평균)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  801 ~ 900점
                </th>
                <td className="border-border border-b px-3 py-2.5">연 5.7% ~ 6.3%대(5대 은행 평균)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  800점 이하
                </th>
                <td className="px-3 py-2.5">대체로 연 6%대 이상, 은행·상품별 편차가 매우 큼</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-cvm-dsr-diff">
        <h2 id="guide-cvm-dsr-diff" className="text-foreground text-xl font-semibold tracking-tight">
          DSR 규제 적용 방식 차이
        </h2>
        <p>
          신용대출은 잔액과 관계없이 원리금 상환액이 DSR 산정에 포함됩니다. 다만 스트레스 DSR의 스트레스 금리(1.5%)는 신용대출 총잔액이 1억 원을 초과하는 차주에게만 가산되고, 만기 5년 이상 고정금리 신용대출은 적용되지 않습니다. 수도권·규제지역 주택담보대출에는 3.0%의 스트레스 금리가 적용되는 등 유형별로 다릅니다. 주택담보대출도 원금과 이자 전액이 DSR에 반영됩니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-cvm-prepay-credit">
        <h2 id="guide-cvm-prepay-credit" className="text-foreground text-xl font-semibold tracking-tight">
          주담대 신청 전 신용대출 정리가 중요한 이유
        </h2>
        <p>
          신용대출 잔액이 클수록 DSR 여유가 줄어 주담대 한도가 감소합니다. 주택 구입을 앞두고 있다면 불필요한 신용대출을 먼저 상환하는
          것이 주담대 한도를 늘리는 가장 효과적인 방법입니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 금리는 신용점수·소득·금융기관별 정책에 따라 상이하며 수시로 변동됩니다. 정확한 금리는 전국은행연합회 소비자포털(
          <a
            href="https://portal.kfb.or.kr"
            className="text-primary underline-offset-4 hover:underline"
            rel="noopener noreferrer"
          >
            portal.kfb.or.kr
          </a>
          )에서 확인할 것을 권장합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="계산기 이동"
      >
        <p>
          <Link href="/loan-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            신용대출과 주택담보대출의 월 상환액 차이는 대출 이자 계산기에서 확인할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
