import Link from "next/link";

export const presaleRightCapitalGainsTaxGuideMeta = {
  slug: "presale-right-capital-gains-tax-guide",
  title: "분양권 양도소득세 계산 | 60%·70% 세율·다주택·장특공",
  description:
    "2026년 기준 주택분양권 양도소득세 60%·70% 단일세율, 1세1주택 비과세·장기보유특별공제·다주택 중과 미적용, 주택 수 산정·필요경비·계산 예시를 국세청·소득세법 기준으로 정리했습니다.",
  updated: "2026년 7월 4일",
} as const;

export function PresaleRightCapitalGainsTaxGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-prcg-intro">
        <h2 id="guide-prcg-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 기준
        </h2>
        <p>
          <strong>주택분양권(분양권)</strong>을 전매·양도할 때는 일반 주택과 세율·공제 규칙이 다릅니다. 국세청
          「양도소득세 개요」·소득세법 제104조를 바탕으로 60%·70% 단일세율, 주택 수 산정, 계산 예시를
          정리했습니다.{" "}
          <Link href="/capital-gains-tax-calculator" className="text-primary underline-offset-4 hover:underline">
            양도소득세 계산기
          </Link>
          에서 자산 구분을 「분양권」으로 선택해 시뮬레이션할 수 있습니다.
        </p>
      </section>

      <nav
        className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm"
        aria-label="목차"
      >
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-prcg-compare" className="text-primary underline-offset-4 hover:underline">
              주택 vs 분양권
            </a>
          </li>
          <li>
            <a href="#guide-prcg-rate" className="text-primary underline-offset-4 hover:underline">
              60%·70% 세율
            </a>
          </li>
          <li>
            <a href="#guide-prcg-multihome" className="text-primary underline-offset-4 hover:underline">
              다주택·주택 수
            </a>
          </li>
          <li>
            <a href="#guide-prcg-example" className="text-primary underline-offset-4 hover:underline">
              계산 예시
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-4" aria-labelledby="guide-prcg-compare">
        <h2 id="guide-prcg-compare" className="text-foreground text-xl font-semibold tracking-tight">
          주택 vs 분양권
        </h2>
        <p>
          분양권은 「주택」이 아니라 「주택분양권」으로 분류됩니다. 1세1주택 비과세·표2 장특공·조정지역 다주택
          중과(+20/30%p)는 <strong>분양권을 양도할 때</strong> 적용되지 않고, 전용 60%·70% 세율이 적용됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              소득세법 §104·§89·§95 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  일반 주택
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주택분양권
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  기본 세율
                </th>
                <td className="border-border border-b px-3 py-2.5">6~45% 누진</td>
                <td className="border-border border-b px-3 py-2.5">
                  1년 미만 <strong>70%</strong> / 1년 이상 <strong>60%</strong>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1세1주택 비과세
                </th>
                <td className="border-border border-b px-3 py-2.5">12억 이하·2년 보유·거주 등</td>
                <td className="border-border border-b px-3 py-2.5">미적용</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  장기보유특별공제
                </th>
                <td className="border-border border-b px-3 py-2.5">표1·표2(최대 80%)</td>
                <td className="border-border border-b px-3 py-2.5">미적용</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  조정지역 다주택 중과
                </th>
                <td className="border-border border-b px-3 py-2.5">+20%p(2주택)·+30%p(3주택+)</td>
                <td className="border-border border-b px-3 py-2.5">분양권 양도 시 미적용</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  주택 수 산정
                </th>
                <td className="px-3 py-2.5">1주택</td>
                <td className="px-3 py-2.5">2021.1.1 이후 취득분 포함 가능</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-prcg-rate">
        <h2 id="guide-prcg-rate" className="text-foreground text-xl font-semibold tracking-tight">
          60%·70% 세율
        </h2>
        <p>
          2021년 1월 1일 이후 양도하는 분양권은 보유 1년 미만 70%, 1년 이상 60% 단일세율이 적용됩니다. 산출세액은
          기본 누진·단기·중과 등과 비교해 큰 값을 납부하지만, 1년 이상 보유 시 60%가 최종 세율인 경우가
          많습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              보유 기간별 분양권 세율
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  보유 기간
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  세율
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1년 미만
                </th>
                <td className="border-border border-b px-3 py-2.5">70%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  1년 이상
                </th>
                <td className="px-3 py-2.5">60%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 66%·77% 등 구 세율 안내와 혼동하기 쉽습니다. 현행 분양권은 60%·70%입니다. 10년 보유해도 장특공은
          적용되지 않습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-prcg-multihome">
        <h2 id="guide-prcg-multihome" className="text-foreground text-xl font-semibold tracking-tight">
          다주택·주택 수
        </h2>
        <p>
          조정지역 3주택자가 <strong>분양권</strong>을 양도할 때도 60%·70%가 적용됩니다. 중과는 「조정지역 내
          주택」 양도에 해당합니다. 다만 분양권 보유는 주택 수에 포함될 수 있어, 분양권을 들고 있는 상태에서{" "}
          <strong>다른 주택</strong>을 조정지역에서 양도하면 중과·장특공 배제가 적용될 수 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              분양권과 주택 수 산정
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  포함 대상
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  2021년 1월 1일 이후 공급계약·매매·증여 등으로 취득한 분양권
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  분양권 양도 세율
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  주택 수와 무관하게 60%·70%(다주택 중과 미적용)
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  실무 포인트
                </th>
                <td className="px-3 py-2.5">
                  분양권 + 주택 1채 = 세법상 2주택. 처분 순서에 따라 다른 주택 양도 시 중과 결과가 달라질 수
                  있음
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <Link
            href="/guide/capital-gains-surcharge-revival-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            다주택 중과 재시행 가이드
          </Link>
          를 함께 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-prcg-example">
        <h2 id="guide-prcg-example" className="text-foreground text-xl font-semibold tracking-tight">
          계산 예시(15억 전매·3주택·조정지역)
        </h2>
        <p>취득 9억, 양도 15억, 필요경비 1,500만, 보유 24년, 3주택 이상, 조정지역 가정.</p>
        <ol className="text-muted-foreground list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            양도차익 = 15억 − 9억 − 1,500만 = <strong>5억 8,500만</strong>
          </li>
          <li>과세대상 양도차익 = 5억 8,500만(비과세·장특공 없음)</li>
          <li>과세표준 = 5억 8,500만 − 250만(기본공제) = <strong>5억 8,250만</strong></li>
          <li>
            산출세액 = 5억 8,250만 × <strong>60%</strong> = 3억 4,950만(다주택 중과 +30%p보다 60% 선택)
          </li>
          <li>지방소득세 10% 가산 → 총 납부 <strong>3억 8,445만 원</strong></li>
        </ol>
        <p className="text-muted-foreground text-sm">
          필요경비에는 분양권 취득·양도 중개수수료 등 증빙 가능 경비가 포함될 수 있습니다.{" "}
          <Link
            href="/guide/brokerage-fee-income-deduction-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            중개수수료·양도세 필요경비
          </Link>
          가이드를 참고하세요.
        </p>
        <p>
          <Link
            href="/guide/capital-gains-tax-calculation-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            2026년 양도세 계산 예시
          </Link>
          에서 입주권·토지 사례도 확인할 수 있습니다.
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
            href="/guide/occupancy-right-capital-gains-tax-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 조합원입주권(입주권) 양도세
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
