import Link from "next/link";

export const dsrCalculationMethodMeta = {
  slug: "dsr-calculation-method",
  title: "총부채원리금상환비율(DSR) 계산 방법",
  description:
    "DSR의 정의·기본 계산식, 포함 부채 범위, 계산 예시, 한도별 주담대 월 상환 여유, 소득 유형별 산정 방식을 표로 정리했습니다.",
  updated: "2026년 4월 14일",
} as const;

export function DsrCalculationMethodBody() {
  return (
    <>
      <p>
        <abbr title="총부채원리금상환비율">DSR</abbr>은 차주가 보유한 모든 대출의 연간 원리금 상환액 합계를 연소득으로 나눈
        비율입니다. 은행권 기준 <strong>40%</strong>를 초과하면 대출이 제한됩니다.
      </p>

      <section className="space-y-3" aria-labelledby="guide-dsr-formula">
        <h2 id="guide-dsr-formula" className="text-foreground text-xl font-semibold tracking-tight">
          기본 계산식
        </h2>
        <p className="rounded-md border border-border bg-muted/30 px-3 py-2 text-sm font-medium leading-relaxed">
          DSR(%) = 연간 총 원리금 상환액 ÷ 연소득 × 100
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dsr-debt-scope">
        <h2 id="guide-dsr-debt-scope" className="text-foreground text-xl font-semibold tracking-tight">
          연간 총 원리금 상환액 산출 방법
        </h2>
        <p>
          DSR 계산에 포함되는 부채는 주택담보대출에 한정되지 않습니다. 차주가 보유한 모든 대출의 원금과 이자가 포함됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              대출 종류별 DSR 포함 항목
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  대출 종류
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  포함 항목
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주택담보대출
                </th>
                <td className="border-border border-b px-3 py-2.5">연간 원금 + 이자</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  신용대출
                </th>
                <td className="border-border border-b px-3 py-2.5">연간 원금 + 이자</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  자동차 할부
                </th>
                <td className="border-border border-b px-3 py-2.5">연간 원금 + 이자</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  카드론
                </th>
                <td className="border-border border-b px-3 py-2.5">연간 원금 + 이자</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  학자금대출
                </th>
                <td className="border-border border-b px-3 py-2.5">연간 원금 + 이자</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  전세자금대출
                </th>
                <td className="border-border border-b px-3 py-2.5">연간 원금 + 이자</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  마이너스통장
                </th>
                <td className="px-3 py-2.5">한도액 기준 연간 이자</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dsr-example">
        <h2 id="guide-dsr-example" className="text-foreground text-xl font-semibold tracking-tight">
          계산 예시
        </h2>
        <p className="text-muted-foreground text-sm">
          연소득 5,000만 원, 기존 부채 보유 상태에서 주담대 신규 신청 가정
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              대출별 월·연간 상환액 합산
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  대출 종류
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  월 상환액
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  연간 상환액
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  기존 신용대출
                </th>
                <td className="border-border border-b px-3 py-2.5">30만 원</td>
                <td className="border-border border-b px-3 py-2.5">360만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  자동차 할부
                </th>
                <td className="border-border border-b px-3 py-2.5">30만 원</td>
                <td className="border-border border-b px-3 py-2.5">360만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  신규 주담대(금리 4%, 30년)
                </th>
                <td className="border-border border-b px-3 py-2.5">95만 원</td>
                <td className="border-border border-b px-3 py-2.5">1,140만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  합계
                </th>
                <td className="px-3 py-2.5">155만 원</td>
                <td className="px-3 py-2.5">1,860만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          DSR = 1,860만 원 ÷ 5,000만 원 × 100 = <strong>37.2%</strong>
        </p>
        <p>은행권 DSR 한도 40% 이내이므로 대출 가능합니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dsr-monthly-cap">
        <h2 id="guide-dsr-monthly-cap" className="text-foreground text-xl font-semibold tracking-tight">
          DSR 한도별 최대 주담대 월 상환 가능액
        </h2>
        <p className="text-muted-foreground text-sm">
          연소득 5,000만 원, 기존 부채 월 60만 원 보유 가정
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              DSR 40% 기준 주담대 월 상환 여유(참고)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  DSR 한도
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  월 소득 기준 한도
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  기존 부채 차감
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주담대 가능 월 상환액
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  40%
                </th>
                <td className="px-3 py-2.5">167만 원</td>
                <td className="px-3 py-2.5">60만 원</td>
                <td className="px-3 py-2.5">107만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-dsr-income-type">
        <h2 id="guide-dsr-income-type" className="text-foreground text-xl font-semibold tracking-tight">
          소득 유형별 산정 방식
        </h2>
        <p>DSR 계산 시 소득은 유형에 따라 산정 방식이 다릅니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              소득 유형별 인정 기준
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  소득 유형
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  산정 기준
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  근로소득
                </th>
                <td className="border-border border-b px-3 py-2.5">원천징수영수증 기준 세전 연소득</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  사업소득
                </th>
                <td className="border-border border-b px-3 py-2.5">종합소득세 신고 기준 소득</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  연금소득
                </th>
                <td className="border-border border-b px-3 py-2.5">실수령액 기준</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  임대소득
                </th>
                <td className="border-border border-b px-3 py-2.5">임대차계약서 기준 연간 임대료</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  기타소득
                </th>
                <td className="px-3 py-2.5">금융기관별 인정 기준 상이</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-dsr-misconceptions">
        <h2 id="guide-dsr-misconceptions" className="text-foreground text-xl font-semibold tracking-tight">
          DSR 계산 시 자주 하는 오해
        </h2>
        <p>
          마이너스통장은 실제 사용액이 아닌 한도액을 기준으로 산정됩니다. 사용하지 않더라도 한도가 크면 DSR에 영향을 줍니다. 대출
          신청 전 불필요한 마이너스통장 한도를 줄이거나 해지하는 것이 유리합니다.
        </p>
        <p>
          전세자금대출은 만기일시상환 방식인 경우 원금 상환액이 DSR에 포함되지 않고 이자만 포함되는 경우도 있습니다. 금융기관별로
          산정 방식이 다를 수 있어 사전 확인이 필요합니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-dsr-over-40">
        <h2 id="guide-dsr-over-40" className="text-foreground text-xl font-semibold tracking-tight">
          DSR 40% 초과 시 대출 가능 여부
        </h2>
        <p>
          은행권 DSR 40%를 초과하는 경우 제2금융권(저축은행·카드사·캐피탈)을 통해 DSR 50% 이내에서 대출이 가능합니다. 단, 제2금융권은
          금리가 높아 이자 부담이 커지므로 신중한 검토가 필요합니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 소득 산정 방식과 부채 인정 범위는 금융기관별로 상이할 수 있습니다. 정확한 DSR 계산은 대출 신청 금융기관에서 확인해야
          합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="계산기 이동"
      >
        <p>
          <Link href="/dsr-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            DSR 계산기
          </Link>
          에서 간이 계산을 해 볼 수 있습니다.
        </p>
        <p>
          <Link href="/#calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            대출 이자 계산기
          </Link>
          에서 대출 한도·월 상환액을 시뮬레이션할 수 있습니다.
        </p>
      </aside>
    </>
  );
}
