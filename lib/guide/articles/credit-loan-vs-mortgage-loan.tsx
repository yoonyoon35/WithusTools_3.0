import Link from "next/link";

export const creditLoanVsMortgageLoanMeta = {
  slug: "credit-loan-vs-mortgage-loan",
  title: "신용대출 vs 주택담보대출 차이",
  description:
    "2026년 4월 기준 신용대출과 주택담보대출의 금리·한도·규제·용도 차이, 한도 산정 방식과 신용점수별 금리를 표로 정리했습니다.",
  updated: "2026년 4월 14일",
} as const;

export function CreditLoanVsMortgageLoanBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-cvm-overview">
        <h2 id="guide-cvm-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 4월 기준
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
                  금리(2026년 4월 기준)
                </th>
                <td className="border-border border-b px-3 py-2.5">연 3.85% ~ 5.53%</td>
                <td className="border-border border-b px-3 py-2.5">연 4.44% ~ 7.01%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대출 한도
                </th>
                <td className="border-border border-b px-3 py-2.5">최대 1억 ~ 2억 원</td>
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
          다만 2026년 4월 기준 주택담보대출 혼합고정금리 상단이 7.01%를 돌파하면서, 단기 변동금리 기준 신용대출과의 금리 역전 현상이
          일부 발생하고 있습니다. 장기 고정금리 주담대는 여전히 신용대출보다 높은 수준입니다.
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
                <td className="border-border border-b px-3 py-2.5">연소득의 1배 이내(DSR 규제)</td>
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
          2026년 1월 기준 신용점수 951~1000점 구간의 신용대출 금리는 연 4.29% ~ 4.89% 수준이며, 900점 이하의 경우 5%를 초과하는
          사례가 발생하고 있습니다.
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
                  951 ~ 1,000점
                </th>
                <td className="border-border border-b px-3 py-2.5">연 4.29% ~ 4.89%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  900 ~ 950점
                </th>
                <td className="border-border border-b px-3 py-2.5">연 4.5% ~ 5.5%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  900점 미만
                </th>
                <td className="px-3 py-2.5">연 5% 초과</td>
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
          신용대출은 잔액 1억 원 초과 시 DSR 산정에 포함됩니다. 1억 원 이하 신용대출은 DSR 산정 시 이자만 반영되는 경우가 있어 주담대
          한도에 미치는 영향이 상대적으로 작습니다. 주택담보대출은 원금과 이자 전액이 DSR에 반영됩니다.
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
