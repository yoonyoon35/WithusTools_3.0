import Link from "next/link";

export const stressDsrExplainedMeta = {
  slug: "stress-dsr-explained",
  title: "스트레스 DSR이란 무엇인가",
  description:
    "스트레스 DSR의 의미, 일반 DSR과의 차이, 단계별 시행·지역별 기준, 10·15 대책 명목 하한(3.0%p), 대출 유형별 적용 비율과 한도 변화 예시를 표로 정리했습니다.",
  updated: "2026년 5월 8일",
} as const;

export function StressDsrExplainedBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-stress-dsr-overview">
        <h2 id="guide-stress-dsr-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 4월 기준
        </h2>
        <p>
          스트레스 DSR은 대출 한도를 산정할 때 실제 대출 금리에 일정 수준의 가산금리(스트레스 금리)를 더해 계산하는 제도입니다.
          금리가 오를 경우에도 차주가 원리금을 감당할 수 있는지 미리 검증하는 것이 목적이며, 스트레스 금리는{" "}
          <strong>실제 대출 금리에는 영향을 주지 않고</strong> 한도 산정에만 적용됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-stress-dsr-vs-normal">
        <h2 id="guide-stress-dsr-vs-normal" className="text-foreground text-xl font-semibold tracking-tight">
          일반 DSR과의 차이
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              일반 DSR과 스트레스 DSR 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  일반 DSR
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  스트레스 DSR
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  적용 금리
                </th>
                <td className="border-border border-b px-3 py-2.5">실제 대출 금리</td>
                <td className="border-border border-b px-3 py-2.5">실제 대출 금리 + 스트레스 금리</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  목적
                </th>
                <td className="border-border border-b px-3 py-2.5">현재 상환 능력 평가</td>
                <td className="border-border border-b px-3 py-2.5">금리 상승 시 상환 능력 사전 검증</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  한도
                </th>
                <td className="px-3 py-2.5">상대적으로 높음</td>
                <td className="px-3 py-2.5">상대적으로 낮음</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-stress-dsr-phases">
        <h2 id="guide-stress-dsr-phases" className="text-foreground text-xl font-semibold tracking-tight">
          단계별 시행 현황
        </h2>
        <p>
          스트레스 DSR은 2024년 2월 1단계를 시작으로 단계적으로 확대되었으며, 2025년 7월 1일부터 3단계가 시행되어 사실상 모든
          가계대출에 적용되고 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              스트레스 DSR 단계별 시행
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  단계
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  시행 시점
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  적용 대상
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  스트레스 금리
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1단계
                </th>
                <td className="border-border border-b px-3 py-2.5">2024년 2월</td>
                <td className="border-border border-b px-3 py-2.5">은행권 주담대</td>
                <td className="border-border border-b px-3 py-2.5">0.38%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2단계
                </th>
                <td className="border-border border-b px-3 py-2.5">2024년 8월</td>
                <td className="border-border border-b px-3 py-2.5">
                  은행권 주담대 + 신용대출, 2금융권 주담대
                </td>
                <td className="border-border border-b px-3 py-2.5">0.75%(수도권 주담대 1.20%)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  3단계
                </th>
                <td className="px-3 py-2.5">2025년 7월</td>
                <td className="px-3 py-2.5">전 업권 모든 가계대출</td>
                <td className="px-3 py-2.5">1.50%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-stress-dsr-regional">
        <h2 id="guide-stress-dsr-regional" className="text-foreground text-xl font-semibold tracking-tight">
          지역별 적용 기준(2026년 4월 현재)
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              지역·유형별 주담대·신용대출 스트레스 금리
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  지역·유형
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주담대 스트레스 금리
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비고
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  수도권(서울·경기·인천)
                </th>
                <td className="border-border border-b px-3 py-2.5">1.50%(명목), 주담대는 하한 3.00%p 별도</td>
                <td className="border-border border-b px-3 py-2.5">3단계·10·15 대책 하한(주담대)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  규제지역 주담대
                </th>
                <td className="border-border border-b px-3 py-2.5">명목 하한 3.00%p(참고)</td>
                <td className="border-border border-b px-3 py-2.5">10·15 대책(지정·시점은 당국 기준)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  비수도권
                </th>
                <td className="border-border border-b px-3 py-2.5">0.75%</td>
                <td className="border-border border-b px-3 py-2.5">2026년 6월 30일까지 유예 적용</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  신용대출(잔액 1억 원 초과)
                </th>
                <td className="px-3 py-2.5">1.50%</td>
                <td className="px-3 py-2.5">지역 무관</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          비수도권 주담대는 2025년 12월 금융위원회 결정으로 2026년 6월 30일까지 2단계 스트레스 금리가 유예 적용 중이며, 유예
          종료 후 적용 기준은 금융당국 정책에 따라 결정됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-stress-dsr-1015">
        <h2 id="guide-stress-dsr-1015" className="text-foreground text-xl font-semibold tracking-tight">
          2025년 10·15 주택금융 대책: 스트레스 가산금리 하한
        </h2>
        <p>
          2025년 10월 15일 발표된 주택금융 대책에 따라, <strong>수도권</strong>(서울·경기·인천)과 <strong>규제지역</strong>에서
          취급하는 <strong>주택담보대출</strong>에 적용하는 스트레스 DSR 산정용 <strong>명목 가산금리에 3.0%p 하한</strong>이
          설정되었습니다. 즉, 지역·대출 유형 등 요건에 해당하면 기존에 쓰이던 명목 스트레스 수준(예: 1.50%p)보다 낮게 잡히지
          않고, <strong>최소 3.0%p</strong>를 명목 가산에 반영하는 방향으로 한도 산정이 보수적으로 이루어질 수 있습니다.
        </p>
        <p className="text-muted-foreground text-sm">
          세부 적용 대상(규제지역 지정 범위, 취급 시점, 금리 유형별 반영 방식 등)은 금융당국 및 해당 금융기관 기준으로 달라질 수
          있으므로, 실제 심사·한도는 반드시 대출 기관의 안내를 따르시기 바랍니다.{" "}
          <a
            href="https://www.fsc.go.kr"
            className="text-primary underline-offset-4 hover:underline"
            rel="noopener noreferrer"
          >
            금융위원회(fsc.go.kr)
          </a>
          등에서 최신 자료를 확인할 것을 권장합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-stress-dsr-loan-type">
        <h2 id="guide-stress-dsr-loan-type" className="text-foreground text-xl font-semibold tracking-tight">
          대출 유형별 스트레스 금리 적용 비율
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              금리 유형별 스트레스 금리 반영 비율
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  대출 유형
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  적용 비율
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  변동금리
                </th>
                <td className="border-border border-b px-3 py-2.5">100%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  혼합형(고정 후 변동)
                </th>
                <td className="border-border border-b px-3 py-2.5">80%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주기형(일정 주기 고정금리 재산정)
                </th>
                <td className="border-border border-b px-3 py-2.5">40%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  순수 고정금리(만기까지 고정)
                </th>
                <td className="px-3 py-2.5">미적용</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          순수 고정금리 대출은 스트레스 금리가 적용되지 않아 변동금리 대출보다 한도가 높게 산출됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-stress-dsr-limit-example">
        <h2 id="guide-stress-dsr-limit-example" className="text-foreground text-xl font-semibold tracking-tight">
          스트레스 DSR 적용에 따른 한도 변화 예시
        </h2>
        <p className="text-muted-foreground text-sm">
          연소득 5,000만 원, 금리 4%, 30년 원리금균등상환, DSR 40% 기준
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              DSR 산정 금리별 대출 한도(참고)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  DSR 산정 금리
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  대출 한도
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  스트레스 DSR 적용 전
                </th>
                <td className="border-border border-b px-3 py-2.5">4.00%</td>
                <td className="border-border border-b px-3 py-2.5">약 3억 4,900만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  수도권 3단계 적용(변동금리)
                </th>
                <td className="border-border border-b px-3 py-2.5">5.50%</td>
                <td className="border-border border-b px-3 py-2.5">약 2억 9,500만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  비수도권 유예 적용(변동금리)
                </th>
                <td className="border-border border-b px-3 py-2.5">4.75%</td>
                <td className="border-border border-b px-3 py-2.5">약 3억 2,300만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  순수 고정금리
                </th>
                <td className="px-3 py-2.5">4.00%</td>
                <td className="px-3 py-2.5">약 3억 4,900만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-stress-dsr-mitigate">
        <h2 id="guide-stress-dsr-mitigate" className="text-foreground text-xl font-semibold tracking-tight">
          한도 축소를 줄이는 방법
        </h2>
        <p>
          순수 고정금리 대출을 선택하면 스트레스 금리 적용이 면제되어 변동금리 대출보다 한도를 더 확보할 수 있습니다. 또한 기존
          신용대출·카드론·자동차 할부 등을 사전에 정리하면 DSR 여유를 늘릴 수 있습니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 비수도권 스트레스 금리 유예 기간 및 이후 적용 기준은 금융당국 정책에 따라 변동될 수 있습니다. 최신 기준은 금융위원회(
          <a href="https://www.fsc.go.kr" className="text-primary underline-offset-4 hover:underline" rel="noopener noreferrer">
            fsc.go.kr
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
          <Link href="/dsr-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            DSR 계산기
          </Link>
          에서 일반·스트레스 DSR을 함께 비교해 볼 수 있습니다.
        </p>
        <p>
          <Link href="/loan-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            대출 이자 계산기
          </Link>
          로 가산 금리를 반영한 월 상환액만 따로 확인할 수도 있습니다.
        </p>
      </aside>
    </>
  );
}
