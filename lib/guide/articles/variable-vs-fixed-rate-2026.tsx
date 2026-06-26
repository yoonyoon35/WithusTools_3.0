import Link from "next/link";

export const variableVsFixedRate2026Meta = {
  slug: "variable-vs-fixed-rate-2026",
  title: "변동금리 vs 고정금리 선택 기준",
  description:
    "변동·고정·혼합 금리의 차이, 소득 안정성·상환 기간에 따른 선택 기준, 금리 변동 시 월 상환 영향과 흔한 판단 실수를 정리했습니다.",
  updated: "2026년 4월 13일",
} as const;

export function VariableVsFixedRate2026Body() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-rate-type-overview">
        <h2 id="guide-rate-type-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 4월 기준
        </h2>
        <p>
          변동금리는 시장금리(COFIX 등)에 연동되어 대출 기간 중 금리가 변동되며, 고정금리는 대출 실행 시점의 금리가 만기까지
          유지됩니다. 혼합형 금리는 일정 기간(통상 3~5년) 고정 후 변동금리로 전환됩니다. 홈 계산기로 숫자를 비교한 뒤, 이 글에서는{" "}
          <strong>내 소득·상환 기간·금리 전망에 맞는 유형</strong>을 고르는 데 초점을 둡니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-rate-type-decision">
        <h2 id="guide-rate-type-decision" className="text-foreground text-xl font-semibold tracking-tight">
          선택을 좁히는 질문
        </h2>
        <p>
          월 상환액이 거의 빠듯한가, 10년 이상 장기로 갈 가능성이 큰가, 중도상환·갈아타기 계획이 있는가를 먼저 스스로에게
          물어보세요. 여유가 없고 20~30년 상환 예정이면 변동금리의 초기 낮은 금리만 보고 선택했다가 금리 인상 시 DSR·생활비를
          동시에 압박받는 경우가 많습니다.
        </p>
        <p>
          반대로 3~5년 안에 전액·대부분 상환할 계획이면 변동금리의 초기 이점을 누리기 쉽습니다. 이때도{" "}
          <Link href="/guide/stress-dsr-explained" className="text-primary underline-offset-4 hover:underline">
            스트레스 DSR
          </Link>
          로 한도가 얼마나 줄어드는지는 미리 확인하는 것이 좋습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-rate-type-basic-compare">
        <h2 id="guide-rate-type-basic-compare" className="text-foreground text-xl font-semibold tracking-tight">
          기본 비교
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              변동금리·고정금리·혼합형 비교
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
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  혼합형
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  금리 변동
                </th>
                <td className="border-border border-b px-3 py-2.5">주기적으로 변동</td>
                <td className="border-border border-b px-3 py-2.5">만기까지 고정</td>
                <td className="border-border border-b px-3 py-2.5">고정 기간 후 변동 전환</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  초기 금리 수준
                </th>
                <td className="border-border border-b px-3 py-2.5">상대적으로 낮음</td>
                <td className="border-border border-b px-3 py-2.5">상대적으로 높음</td>
                <td className="border-border border-b px-3 py-2.5">중간 수준</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  금리 인상 시
                </th>
                <td className="border-border border-b px-3 py-2.5">불리</td>
                <td className="border-border border-b px-3 py-2.5">유리</td>
                <td className="border-border border-b px-3 py-2.5">고정 기간 중 유리</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  금리 인하 시
                </th>
                <td className="border-border border-b px-3 py-2.5">유리</td>
                <td className="border-border border-b px-3 py-2.5">불리</td>
                <td className="border-border border-b px-3 py-2.5">변동 전환 후 유리</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  월 상환액 예측
                </th>
                <td className="px-3 py-2.5">어려움</td>
                <td className="px-3 py-2.5">용이</td>
                <td className="px-3 py-2.5">고정 기간 중 용이</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-rate-type-current-level">
        <h2 id="guide-rate-type-current-level" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 4월 현재 금리 수준
        </h2>
        <p>
          한국은행은 2026년 4월 기준금리를 2.50%로 동결했습니다. 중동전쟁에 따른 물가 상방압력과 성장 하방압력이 동시에 확대되며
          금융·외환시장 변동성이 커진 상황입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              2026년 4월 금리 유형별 현재 수준
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  금리 유형
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  현재 수준
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  한국은행 기준금리
                </th>
                <td className="border-border border-b px-3 py-2.5">2.50%(동결)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  시중은행 변동금리
                </th>
                <td className="border-border border-b px-3 py-2.5">연 4.44% ~ 5.26%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  시중은행 고정금리(상단)
                </th>
                <td className="border-border border-b px-3 py-2.5">연 7.01%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  혼합형 고정금리(5년)
                </th>
                <td className="px-3 py-2.5">연 4.42% ~ 7.02%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-rate-type-selection">
        <h2 id="guide-rate-type-selection" className="text-foreground text-xl font-semibold tracking-tight">
          금리 유형별 선택 기준
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              상황별 적합한 금리 유형
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상황
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  적합한 금리 유형
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  금리 추가 인상이 예상되는 경우
                </th>
                <td className="border-border border-b px-3 py-2.5">고정금리</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  금리 인하가 예상되는 경우
                </th>
                <td className="border-border border-b px-3 py-2.5">변동금리</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대출 기간이 10년 이상인 경우
                </th>
                <td className="border-border border-b px-3 py-2.5">고정금리 또는 혼합형</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  단기(3년 이내) 상환 계획이 있는 경우
                </th>
                <td className="border-border border-b px-3 py-2.5">변동금리</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  월 상환액 안정성이 중요한 경우
                </th>
                <td className="border-border border-b px-3 py-2.5">고정금리 또는 혼합형</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  초기 이자 부담을 낮추고 싶은 경우
                </th>
                <td className="px-3 py-2.5">변동금리</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-rate-type-monthly-change">
        <h2 id="guide-rate-type-monthly-change" className="text-foreground text-xl font-semibold tracking-tight">
          금리 변동에 따른 월 상환액 변화 예시
        </h2>
        <p className="text-muted-foreground text-sm">대출 원금 3억 원, 30년 원리금균등상환 가정</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[24rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              금리별 월 상환액 변화(예시)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  금리
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  월 상환액
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  4.0%
                </th>
                <td className="border-border border-b px-3 py-2.5">약 143만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  4.5%
                </th>
                <td className="border-border border-b px-3 py-2.5">약 152만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5.0%
                </th>
                <td className="border-border border-b px-3 py-2.5">약 161만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5.5%
                </th>
                <td className="border-border border-b px-3 py-2.5">약 170만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  6.0%
                </th>
                <td className="px-3 py-2.5">약 180만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>변동금리 대출은 금리가 1%p 상승할 때마다 월 상환액이 약 17~18만 원 증가합니다.</p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-rate-type-mistakes">
        <h2 id="guide-rate-type-mistakes" className="text-foreground text-xl font-semibold tracking-tight">
          흔한 판단 실수
        </h2>
        <p>
          “지금 변동이 더 싸니까 변동”만 보고 30년 만기를 잡는 경우, 혼합형 전환 시점의 가산금리를 확인하지 않는 경우, 고정
          선택 후{" "}
          <Link href="/guide/rate-reduction-request-right" className="text-primary underline-offset-4 hover:underline">
            금리인하요구권
          </Link>
          과{" "}
          <Link href="/guide/loan-refinancing-guide" className="text-primary underline-offset-4 hover:underline">
            갈아타기
          </Link>
          비용을 비교하지 않는 경우가 많습니다. 유형 선택은 한 번 고정되면 바꾸기 어렵기 때문에, 실행 전 2~3곳 견적과
          전환·중도상환 조건을 함께 받아 두는 것이 좋습니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 금리 전망은 대외 변수에 따라 달라질 수 있으며, 개인의 소득 안정성과 상환 계획을 종합적으로 고려해 선택해야 합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="계산기 이동"
      >
        <p>
          <Link href="/loan-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            금리 유형별 월 상환액 차이는 대출 이자 계산기에서 직접 비교해볼 수 있다.
          </Link>
        </p>
      </aside>
    </>
  );
}
