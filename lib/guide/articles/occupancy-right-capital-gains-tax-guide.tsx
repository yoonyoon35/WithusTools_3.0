import Link from "next/link";

export const occupancyRightCapitalGainsTaxGuideMeta = {
  slug: "occupancy-right-capital-gains-tax-guide",
  title: "조합원입주권(입주권) 양도소득세 | 종전주택·입주권분 차익·장특공",
  description:
    "2026년 기준 조합원입주권 양도소득세 계산. 관리처분계획인가일 기준 종전주택·입주권분 차익 분리, 1세1주택 12억 안분, 표2 장특공(인가 전분), 조합원권리가액·계산 예시를 정리했습니다.",
  updated: "2026년 7월 4일",
} as const;

export function OccupancyRightCapitalGainsTaxGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-orcg-intro">
        <h2 id="guide-orcg-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 기준
        </h2>
        <p>
          재개발·재건축 조합의 <strong>조합원입주권(입주권)</strong>을 양도할 때는{" "}
          <strong>관리처분계획인가일</strong>을 기준으로 종전주택분·입주권분 차익을 나눕니다. 장기보유특별공제(장특공)는
          인가 전 종전주택분에만 적용됩니다.{" "}
          <Link href="/capital-gains-tax-calculator" className="text-primary underline-offset-4 hover:underline">
            양도소득세 계산기
          </Link>
          에서 「조합원입주권」을 선택하고 인가일·권리가액을 입력해 확인할 수 있습니다.
        </p>
      </section>

      <nav
        className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm"
        aria-label="목차"
      >
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-orcg-split" className="text-primary underline-offset-4 hover:underline">
              차익 분리
            </a>
          </li>
          <li>
            <a href="#guide-orcg-approval" className="text-primary underline-offset-4 hover:underline">
              관리처분인가일
            </a>
          </li>
          <li>
            <a href="#guide-orcg-exempt" className="text-primary underline-offset-4 hover:underline">
              1세1주택·12억 안분
            </a>
          </li>
          <li>
            <a href="#guide-orcg-ltd" className="text-primary underline-offset-4 hover:underline">
              장특공(표2)
            </a>
          </li>
          <li>
            <a href="#guide-orcg-example" className="text-primary underline-offset-4 hover:underline">
              계산 예시
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-4" aria-labelledby="guide-orcg-split">
        <h2 id="guide-orcg-split" className="text-foreground text-xl font-semibold tracking-tight">
          종전주택분·입주권분 차익 분리
        </h2>
        <p>
          입주권 양도는 하나의 거래이지만, 조합원 권리가액(관리처분인가 시점 지분 가액)을 기준으로 두 구간의
          이익으로 나눠 계산합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              차익 분리 공식
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  산식
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  보유 기간
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  종전주택분
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  조합원권리가액 − 취득가액 − 필요경비
                </td>
                <td className="border-border border-b px-3 py-2.5">취득일 ~ 관리처분인가일</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  입주권분
                </th>
                <td className="border-border border-b px-3 py-2.5">양도가액 − 조합원권리가액</td>
                <td className="border-border border-b px-3 py-2.5">인가일 ~ 양도일</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  합계
                </th>
                <td className="px-3 py-2.5" colSpan={2}>
                  종전주택분 + 입주권분 = 전체 양도차익
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          <Link
            href="/guide/presale-right-capital-gains-tax-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            분양권
          </Link>
          은 60%·70% 단일세율이 적용되며, 입주권은 1세1주택 비과세·표2 장특공·기본 누진세율이 적용될 수
          있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-orcg-approval">
        <h2 id="guide-orcg-approval" className="text-foreground text-xl font-semibold tracking-tight">
          관리처분계획인가일
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              인가일이 정하는 것
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  차익 분리
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  인가 전 = 종전 주택 이익, 인가 후 = 입주권 이익
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  장특공 기산
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  보유·거주 연수는 취득일 ~ 인가일(인가 후 기간은 미반영)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1세1주택 요건
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  인가일까지 2년 이상 보유·거주(조정지역 취득 시) 등
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  승계조합원
                </th>
                <td className="px-3 py-2.5">취득일이 인가일 이후이면 장특공 미적용 가능</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-orcg-exempt">
        <h2 id="guide-orcg-exempt" className="text-foreground text-xl font-semibold tracking-tight">
          1세대 1주택·12억 고가주택 안분
        </h2>
        <p>
          1세대 1주택 요건을 충족하면 종전주택분·입주권분 <strong>각각</strong>에 12억 비과세·고가 안분이
          적용됩니다.
        </p>
        <div className="bg-muted/30 rounded-lg border border-border p-4 font-mono text-sm">
          과세대상 양도차익 = 해당 분 양도차익 × (양도가액 − 12억) ÷ 양도가액
        </div>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              예시(입주권분 차익 6억·양도가 15억)
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
                  입주권분 과세대상
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-muted/20">
                <td className="px-3 py-2.5">15억</td>
                <td className="px-3 py-2.5">20% (3억÷15억)</td>
                <td className="px-3 py-2.5">1.2억 (6억×20%)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <Link
            href="/guide/one-household-one-home-capital-gains-tax-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            1세1주택 비과세·장특공
          </Link>
          가이드에서 고가주택 안분을 자세히 다룹니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-orcg-ltd">
        <h2 id="guide-orcg-ltd" className="text-foreground text-xl font-semibold tracking-tight">
          장기보유특별공제(입주권용 표2)
        </h2>
        <p>
          장특공은 <strong>관리처분인가 전 종전주택분</strong> 과세대상 양도차익에만 적용됩니다. 입주권분에는
          적용되지 않습니다(소득세법 §95②).
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              일반 주택 표2 vs 입주권 표2
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  일반 주택(표2)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  입주권(표2)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  적용 대상
                </th>
                <td className="border-border border-b px-3 py-2.5">전체 양도차익</td>
                <td className="border-border border-b px-3 py-2.5">인가 전 종전주택분만</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  보유·거주 공제
                </th>
                <td className="border-border border-b px-3 py-2.5">(연수−2)×4%p, 각 40%</td>
                <td className="border-border border-b px-3 py-2.5">(연수−2)×2%p, 각 24%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  합산 한도
                </th>
                <td className="px-3 py-2.5">80%</td>
                <td className="px-3 py-2.5">48%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          종전주택분 과세대상이 0(손실·비과세)이면 장특공도 0입니다. 보유 20년이어도 입주권분 6억에는 장특공이
          붙지 않습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-orcg-example">
        <h2 id="guide-orcg-example" className="text-foreground text-xl font-semibold tracking-tight">
          계산 예시(1세1주택·15억)
        </h2>
        <p>
          취득 9억, 권리가액 9억, 양도 15억, 경비 1,500만, 인가일 2026-06-01, 1세1주택·조정지역·2년 거주
          가정.
        </p>
        <ol className="text-muted-foreground list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            종전주택분 = 9억 − 9억 − 1,500만 = −1,500만(0 처리) · 입주권분 = 15억 − 9억 ={" "}
            <strong>6억</strong>
          </li>
          <li>
            12억 안분: 입주권분 과세 = 6억 × (3억÷15억) = <strong>1.2억</strong> · 장특공 0
          </li>
          <li>과세표준 = 1.2억 − 250만(기본공제) = <strong>1.175억</strong></li>
          <li>기본 누진세율 35% 구간 적용 후 지방소득세 10% 가산</li>
          <li>
            총 납부 <strong>2,825만 3,500원</strong>
          </li>
        </ol>
        <p className="text-muted-foreground text-sm">
          ※ 조합원권리가액을 비우면 양도가와 동일로 처리되어 입주권분 차익이 0으로 나올 수 있습니다. 관리처분계획서·
          조합 통지 금액을 확인하세요.
        </p>
        <p>
          <Link
            href="/guide/capital-gains-tax-calculation-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            2026년 양도세 계산 예시
          </Link>
          에서 분양권·토지 사례도 확인할 수 있습니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
      >
        <p>
          <Link
            href="/guide/one-household-one-home-capital-gains-tax-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 1세1주택 비과세·장특공
          </Link>
        </p>
        <p>
          <Link
            href="/guide/presale-right-capital-gains-tax-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 분양권 양도소득세
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
