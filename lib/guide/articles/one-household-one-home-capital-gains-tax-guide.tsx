import Link from "next/link";

export const oneHouseholdOneHomeCapitalGainsTaxGuideMeta = {
  slug: "one-household-one-home-capital-gains-tax-guide",
  title: "1세대 1주택 양도소득세 비과세·12억 고가주택·장기보유특별공제",
  description:
    "2026년 기준 1세대 1주택 비과세 요건(2년 보유·거주·12억), 고가주택 안분 계산, 장기보유특별공제 표1·표2(최대 80%)를 국세청·소득세법 기준으로 정리했습니다.",
  updated: "2026년 7월 4일",
} as const;

export function OneHouseholdOneHomeCapitalGainsTaxGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-ohoh-intro">
        <h2 id="guide-ohoh-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 기준
        </h2>
        <p>
          1세대가 <strong>1주택</strong>만 보유한 채 매도할 때 가장 먼저 확인하는 것이 양도소득세{" "}
          <strong>비과세</strong>와 <strong>장기보유특별공제(장특공)</strong>입니다. 국세청 「양도소득세 개요」·소득세법
          제89조·제95조를 바탕으로 요건과 계산 방법을 정리했습니다.{" "}
          <Link
            href="/capital-gains-tax-calculator"
            className="text-primary underline-offset-4 hover:underline"
          >
            양도소득세 계산기
          </Link>
          에서 1세대 1주택·거주 기간을 입력해 시뮬레이션할 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ohoh-exempt">
        <h2 id="guide-ohoh-exempt" className="text-foreground text-xl font-semibold tracking-tight">
          1세대 1주택 비과세 요건
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              소득세법 §89①3·시행령 §155
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  요건
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  주택 수
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  양도일 현재 1세대가 국내 <strong>1주택</strong>만 보유(분양권·입주권 동시 보유 시 제한)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  보유 기간
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>2년 이상</strong> 보유
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  거주(조정지역)
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  2017.8.3 이후 조정대상지역 취득 주택은 <strong>2년 이상 거주</strong>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  고가주택
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  주택+부수토지 실지거래가 합계 <strong>12억 원 초과</strong> 시 비과세 제외(초과분만 과세)
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  주택부수토지
                </th>
                <td className="px-3 py-2.5">
                  도시지역 5배(수도권 주거·상업·공업 3배), 도시 밖 10배 이내 토지가 1주택 범위
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ohoh-high-price">
        <h2 id="guide-ohoh-high-price" className="text-foreground text-xl font-semibold tracking-tight">
          고가주택(12억 초과) 안분 계산
        </h2>
        <p>
          1세대 1주택이어도 양도 당시 실지거래가가 12억 원을 넘으면 <strong>초과분만</strong> 과세합니다. 과세대상
          양도차익은 다음과 같이 안분합니다.
        </p>
        <div className="bg-muted/30 rounded-lg border border-border p-4 font-mono text-sm">
          과세대상 양도차익 = 양도차익 × (양도가액 − 12억) ÷ 양도가액
        </div>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              예시(양도차익 5억 가정)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  양도가
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  안분 비율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  과세대상 차익
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-border border-b px-3 py-2.5">15억</td>
                <td className="border-border border-b px-3 py-2.5">20% (3억÷15억)</td>
                <td className="border-border border-b px-3 py-2.5">1억</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">18억</td>
                <td className="border-border border-b px-3 py-2.5">33.3% (6억÷18억)</td>
                <td className="border-border border-b px-3 py-2.5">약 1.67억</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="px-3 py-2.5">12억 이하</td>
                <td className="px-3 py-2.5">0%</td>
                <td className="px-3 py-2.5">비과세(요건 충족 시)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ohoh-ltd">
        <h2 id="guide-ohoh-ltd" className="text-foreground text-xl font-semibold tracking-tight">
          장기보유특별공제(표1 vs 표2)
        </h2>
        <p>
          비과세에 해당하지 않거나 고가주택 초과분에 과세되는 경우, 보유·거주 기간에 따라 양도차익에서 공제할 수
          있습니다(소득세법 §95②).
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              표1(일반) vs 표2(1세대 1주택·거주 2년~)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  표1(일반)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  표2(1세대 1주택)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  적용 조건
                </th>
                <td className="border-border border-b px-3 py-2.5">보유 3년 이상</td>
                <td className="border-border border-b px-3 py-2.5">1세대 1주택 + 거주 2년 이상</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  보유 공제
                </th>
                <td className="border-border border-b px-3 py-2.5">3년 6% → 연 2%p, 최대 30%</td>
                <td className="border-border border-b px-3 py-2.5">(보유−2)×4%, 최대 40%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  거주 공제
                </th>
                <td className="border-border border-b px-3 py-2.5">없음</td>
                <td className="border-border border-b px-3 py-2.5">(거주−2)×4%, 최대 40%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  합산 한도
                </th>
                <td className="px-3 py-2.5">30%</td>
                <td className="px-3 py-2.5">80%(보유+거주, 각 40% 상한)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          거주 2년 미만 1세대 1주택은 표2가 아니라 <strong>표1</strong>이 적용됩니다. 조정대상지역{" "}
          <strong>다주택자</strong>가 2026년 5월 10일 이후 양도하면 중과와 함께 장특공이 배제될 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ohoh-longterm-rental">
        <h2 id="guide-ohoh-longterm-rental" className="text-foreground text-xl font-semibold tracking-tight">
          장기임대주택과 표2 장특공
        </h2>
        <p>
          1세대 1주택 <strong>표2</strong>(보유·거주 각 최대 40%, 합 80%)와 별도로,{" "}
          <strong>장기임대주택</strong>에 조세특례제한법 제97조의3 요건을 갖추면 장특공{" "}
          <strong>50%(8년 임대)·70%(10년 임대)</strong> 특례가 적용될 수 있습니다. 다주택·조정지역
          여부와 관계없이 적용되는 것이 특징입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              일반 1세1주택 표2 vs 장기임대주택 특례
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  표2(거주 2년~)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  장기임대주택 특례
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  최대 공제
                </th>
                <td className="border-border border-b px-3 py-2.5">80%(보유+거주)</td>
                <td className="border-border border-b px-3 py-2.5">70%(10년 임대)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  전제
                </th>
                <td className="border-border border-b px-3 py-2.5">1세1주택·2년 거주 등</td>
                <td className="border-border border-b px-3 py-2.5">
                  장기임대사업자 등록·규모·시가·임대료 인상률 등
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  다주택 중과
                </th>
                <td className="px-3 py-2.5">조정지역 다주택 시 장특공 배제</td>
                <td className="px-3 py-2.5">요건 충족 시 중과·주택 수 제외 가능</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          실거주 1세1주택과 장기임대 등록 주택을 동시에 보유한 경우, 어느 주택을 먼저 처분하느냐에 따라
          비과세·장특공·중과 결과가 달라집니다.{" "}
          <Link
            href="/guide/capital-gains-surcharge-revival-2026-guide#guide-cgsr-longterm-rental"
            className="text-primary underline-offset-4 hover:underline"
          >
            장기임대주택 조세특례·다주택 중과
          </Link>
          가이드를 함께 확인하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ohoh-example">
        <h2 id="guide-ohoh-example" className="text-foreground text-xl font-semibold tracking-tight">
          계산 예시(고가 1세대 1주택)
        </h2>
        <p>15억에 매도, 취득 9억, 필요경비 5천만, 양도차익 5억 5천만, 보유·거주 각 10년 가정.</p>
        <ol className="text-muted-foreground list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          <li>과세 비율 = (15억−12억)÷15억 = 20% → 과세대상 차익 = 5.5억×20% = <strong>1.1억</strong></li>
          <li>
            표2 장특공: 보유 (10−2)×4%=32%, 거주 32% → 합 64% → 공제 7,040만 → 양도소득금액{" "}
            <strong>3,960만</strong>
          </li>
          <li>과세표준 = 3,960만 − 250만(기본공제) = <strong>3,710만</strong></li>
          <li>기본 누진세율 적용 후 지방소득세 10% 가산</li>
        </ol>
        <p>
          <Link
            href="/guide/capital-gains-tax-calculation-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            2026년 양도세 계산 예시
          </Link>
          에서 다주택·단기 사례도 확인하세요.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
      >
        <p>
          <Link
            href="/guide/capital-gains-tax-overview-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 양도소득세 개요·신고 일정
          </Link>
        </p>
        <p>
          <Link
            href="/capital-gains-tax-calculator"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 양도소득세 계산기
          </Link>
        </p>
      </aside>
    </>
  );
}
