import Link from "next/link";

export const occupancyRightCapitalGainsTaxGuideMeta = {
  slug: "occupancy-right-capital-gains-tax-guide",
  title: "조합원입주권 양도소득세 — 종전주택 차익·장특공·고가 예시",
  description:
    "조합원입주권 양도세는 관리처분계획인가일을 기준으로 종전주택분과 입주권분 차익을 나눠 계산합니다. 1세대 1주택 12억 안분, 장기보유특별공제(표2, 인가 전 종전주택분만), 단기세율과 다주택 중과 불적용, 승계조합원 차이, 권리가액별 고가 입주권 예시를 다룹니다.",
  updated: "2026년 11월 5일",
} as const;

export function OccupancyRightCapitalGainsTaxGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-orcg-intro">
        <h2 id="guide-orcg-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 11월 기준
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
            <a href="#guide-orcg-vs-presale" className="text-primary underline-offset-4 hover:underline">
              조합원입주권 vs 분양권
            </a>
          </li>
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
            <a href="#guide-orcg-rate" className="text-primary underline-offset-4 hover:underline">
              세율·중과·승계조합원
            </a>
          </li>
          <li>
            <a href="#guide-orcg-example" className="text-primary underline-offset-4 hover:underline">
              계산 예시
            </a>
          </li>
          <li>
            <a href="#guide-orcg-high-value" className="text-primary underline-offset-4 hover:underline">
              고가 입주권 예시(권리가액별)
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-4" aria-labelledby="guide-orcg-vs-presale">
        <h2 id="guide-orcg-vs-presale" className="text-foreground text-xl font-semibold tracking-tight">
          조합원입주권과 주택분양권의 차이
        </h2>
        <p>
          재개발·재건축에서 말하는 <strong>조합원입주권(입주권)</strong>은 종전 주택 지분과 연결된{" "}
          <strong>새 아파트 입주 권리</strong>입니다. 신축 아파트를 분양받기 전 거래하는{" "}
          <strong>주택분양권(분양권)</strong>과 출처·계약 구조가 다르며, 양도소득세 계산 방식도 다릅니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              양도세 처리 비교(요약)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  조합원입주권
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주택분양권
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  발생 배경
                </th>
                <td className="border-border border-b px-3 py-2.5">재건축·재개발 조합원 지분</td>
                <td className="border-border border-b px-3 py-2.5">신축 아파트 분양 계약</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  차익 계산
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>관리처분계획인가일</strong> 기준 종전주택분·입주권분 분리
                </td>
                <td className="border-border border-b px-3 py-2.5">양도가액 − 취득가액 − 필요경비(단일 차익)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1세1주택 비과세
                </th>
                <td className="border-border border-b px-3 py-2.5">종전주택분 등 요건 충족 시 12억 안분 가능</td>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>미적용</strong> —{" "}
                  <Link
                    href="/guide/presale-right-capital-gains-tax-guide#guide-prcg-compare"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    60~70% 단일세율
                  </Link>
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  장기보유특별공제
                </th>
                <td className="px-3 py-2.5">인가 전 <strong>종전주택분</strong>에만 표2 적용</td>
                <td className="px-3 py-2.5">미적용</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          주택분양권의 개념·일반 매매와의 차이는{" "}
          <Link
            href="/guide/presale-right-capital-gains-tax-guide#guide-prcg-terms"
            className="text-primary underline-offset-4 hover:underline"
          >
            분양권 양도세 가이드
          </Link>
          를 참고하세요.
        </p>
      </section>

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
                <td className="px-3 py-2.5">
                  취득일이 인가일 이후이면 장특공·1세대 1주택 비과세 모두 적용 불가(소득세법 §89①4·§95②)
                </td>
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
        <p className="text-muted-foreground text-sm">
          입주권 비과세는 관리처분계획인가일 현재 기존 주택이 1세대 1주택 비과세 요건(2년 보유, 조정대상지역 취득 시
          2년 거주 등)을 갖춘 <strong>원조합원</strong>이 입주권을 1개만 보유하고, 양도일 현재 다른 주택·분양권이
          없거나(또는 다른 1주택을 취득한 날부터 3년 이내 양도) 할 때 적용됩니다(소득세법 §89①4). 인가일 이후 입주권을
          산 <strong>승계조합원</strong>은 비과세 대상이 아닙니다.
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
              일반 주택 vs 입주권(원조합원) 장특공
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  일반 주택
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  입주권(원조합원)
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
                  공제율 산정 기간
                </th>
                <td className="border-border border-b px-3 py-2.5">취득일 ~ 양도일</td>
                <td className="border-border border-b px-3 py-2.5">
                  종전주택 취득일 ~ 관리처분인가일(인가 후 기간 제외, 시행령 §166⑤)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  표2(1세대 1주택·거주 2년 이상)
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  보유 연수×4%(3년 12% → 10년 40%) + 거주 연수×4%(2년 8% → 10년 40%)
                </td>
                <td className="border-border border-b px-3 py-2.5">
                  일반 주택과 같은 공제율을 위 기간으로 적용(국세청 사전-2021-법령해석재산-1339)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  표2 요건 미충족
                </th>
                <td className="border-border border-b px-3 py-2.5">표1: 3년 6% → 15년 이상 30%</td>
                <td className="border-border border-b px-3 py-2.5">표1: 같은 방식(종전주택분 기간 기준)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  최대 공제
                </th>
                <td className="px-3 py-2.5">표2 80% · 표1 30%</td>
                <td className="px-3 py-2.5">표2 80% · 표1 30%(승계조합원은 없음)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          종전주택분 과세대상이 0(손실·비과세)이면 장특공도 0입니다. 보유 20년이어도 입주권분 6억에는 장특공이
          붙지 않습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-orcg-rate">
        <h2 id="guide-orcg-rate" className="text-foreground text-xl font-semibold tracking-tight">
          세율·다주택 중과·승계조합원 차이
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              원조합원 vs 승계조합원(인가일 이후 취득)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  원조합원
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  승계조합원
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  양도차익
                </th>
                <td className="border-border border-b px-3 py-2.5">인가일 전·후로 나눠 합산</td>
                <td className="border-border border-b px-3 py-2.5">양도가 − 취득가(프리미엄·분담금 포함) − 경비</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1세대 1주택 비과세
                </th>
                <td className="border-border border-b px-3 py-2.5">요건 충족 시 가능(12억 초과분 과세)</td>
                <td className="border-border border-b px-3 py-2.5">불가</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  장기보유특별공제
                </th>
                <td className="border-border border-b px-3 py-2.5">인가 전 종전주택분(3년 이상 보유)</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  단기세율 보유기간
                </th>
                <td className="px-3 py-2.5">종전주택 취득일 ~ 양도일</td>
                <td className="px-3 py-2.5">입주권 취득일 ~ 양도일</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            입주권 양도 세율은 보유 1년 미만 70%, 1년 이상 2년 미만 60%, 2년 이상 기본세율(6~45%)입니다(소득세법
            §104①). 승계조합원이 인가 직후 되팔면 단기세율이 적용될 수 있습니다.
          </li>
          <li>
            <strong>입주권을 양도할 때는</strong> 조정대상지역 다주택 중과(+20%p·+30%p, §104⑦)가 적용되지 않습니다. 중과는
            「주택」 양도에 붙는 규정이기 때문입니다. 다만 입주권은 <strong>주택 수에는 포함</strong>되므로, 입주권이 있는
            세대가 조정대상지역 주택을 양도하면 그 주택에는 중과가 붙을 수 있습니다.
          </li>
        </ul>
        <p className="text-muted-foreground text-sm">
          계산기는 원조합원 기준(관리처분인가일이 취득일 이후)으로 종전주택·입주권분 차익을 계산하며, 승계조합원·단기세율은
          별도로 확인해야 합니다. 세율·비과세 요건은 사실관계에 따라 달라질 수 있으니 신고 전 국세청·세무사 확인을
          권합니다.
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
          양도가 19억~35억대 고가 입주권은{" "}
          <a href="#guide-orcg-high-value" className="text-primary underline-offset-4 hover:underline">
            고가 입주권 예시(권리가액별)
          </a>
          에서 비교합니다.{" "}
          <Link
            href="/guide/capital-gains-tax-calculation-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            2026년 양도세 계산 예시
          </Link>
          에서 분양권·토지 사례도 봅니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-orcg-high-value">
        <h2 id="guide-orcg-high-value" className="text-foreground text-xl font-semibold tracking-tight">
          고가 입주권 예시(권리가액별)
        </h2>
        <p>
          서울 등 고가 재건축·재개발 구역에서는 양도가가 수십억 원대인 입주권도 거래됩니다. 단지별 시세는 수시로
          바뀌므로, 아래는 시세와 무관하게 <strong>양도가·권리가액만 바꿔</strong> 계산기와 같은 로직으로 비교한
          예시입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              공통 가정
            </caption>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium w-40">
                  조합원 유형
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  원조합원·1세대 1주택·보유·거주 20년 이상, 조정대상지역
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium">
                  종전주택
                </th>
                <td className="border-border border-b px-3 py-2.5">2000년 3월 취득 3.5억 원, 필요경비 2,000만 원</td>
              </tr>
              <tr>
                <th scope="row" className="px-3 py-2.5 font-medium bg-muted/30">
                  인가일·양도일
                </th>
                <td className="px-3 py-2.5">관리처분인가 2025-03-01 · 양도 2026-07-01(장특공 기간 25년)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              1세대 1주택 요건 충족 시(12억 안분·표2 80%)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  양도가 / 권리가액
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  종전주택분 / 입주권분 차익
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  과세대상(안분)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  과세표준
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  총 납부
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  19억 / 9억
                </th>
                <td className="border-border border-b px-3 py-2.5">5.3억 / 10억</td>
                <td className="border-border border-b px-3 py-2.5">5.64억(7억÷19억)</td>
                <td className="border-border border-b px-3 py-2.5">4.05억</td>
                <td className="border-border border-b px-3 py-2.5">
                  약 <strong>1억 4,965만</strong>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  26억 / 11억
                </th>
                <td className="border-border border-b px-3 py-2.5">7.3억 / 15억</td>
                <td className="border-border border-b px-3 py-2.5">12.01억(14억÷26억)</td>
                <td className="border-border border-b px-3 py-2.5">8.84억</td>
                <td className="border-border border-b px-3 py-2.5">
                  약 <strong>3억 6,879만</strong>
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium whitespace-nowrap">
                  35억 / 14억
                </th>
                <td className="px-3 py-2.5">10.3억 / 21억</td>
                <td className="px-3 py-2.5">20.57억(23억÷35억)</td>
                <td className="px-3 py-2.5">15.13억</td>
                <td className="px-3 py-2.5">
                  약 <strong>6억 7,634만</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <ol className="text-muted-foreground list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            35억·권리가액 14억: 종전주택분 = 14억 − 3.5억 − 2천만 = <strong>10.3억</strong> · 입주권분 = 35억 − 14억 ={" "}
            <strong>21억</strong>
          </li>
          <li>
            12억 안분 비율 = (35억−12억)÷35억 ≈ 65.7% → 과세대상 합계 약 <strong>20.57억</strong>(종전주택분 6.77억 +
            입주권분 13.8억)
          </li>
          <li>
            장특공 = 종전주택분 과세대상 6.77억 × 80%(보유 40% + 거주 40%, 25년·20년 이상 모두 최대) ≈{" "}
            <strong>5.41억</strong> · 입주권분에는 없음
          </li>
          <li>
            과세표준 ≈ 15.13억 → 기본 누진세율(10억 초과 구간 45%) 적용 후 지방소득세 10% 가산 → 총 납부{" "}
            <strong>약 6억 7,634만 원</strong>
          </li>
        </ol>
        <p className="text-muted-foreground text-sm">
          같은 1세대 1주택이라도 양도가가 12억을 넘으면 비과세가 아니라 <strong>초과분 비율만큼</strong> 과세되고,
          인가 후 프리미엄(입주권분)이 클수록 장특공을 받지 못하는 차익이 커져 세액이 빠르게 늘어납니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              같은 35억 양도를 비과세·표2 요건 없이 양도하는 경우(예: 다른 주택 보유로 요건 미충족)
            </caption>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium w-40">
                  과세대상
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  12억 안분 없이 전체 양도차익 31.3억
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium">
                  장특공
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  표1 30%(종전주택분 10.3억 × 30% = 3.09억)
                </td>
              </tr>
              <tr>
                <th scope="row" className="px-3 py-2.5 font-medium bg-muted/30">
                  총 납부
                </th>
                <td className="px-3 py-2.5">
                  과세표준 약 28.19억 → 약 <strong>13억 2,262만</strong>(요건 충족 시의 약 2배, 입주권 양도에는 중과 없음)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="space-y-2">
          <h3 className="text-foreground text-base font-semibold">양도 전 확인할 점</h3>
          <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
            <li>
              <strong>조합원 지위 양도 가능 여부</strong> — 투기과열지구 재건축은 조합설립인가 후 양수인이 조합원이 될 수
              없고(도시정비법 §39②), 양도인이 1세대 1주택자로 10년 이상 소유·5년 이상 거주한 경우 등 예외만 인정됩니다.
              재개발은 관리처분계획인가 후 같은 제한이 적용됩니다.
            </li>
            <li>
              <strong>권리가액은 조합 통지 금액</strong> — 시장 호가와 관리처분계획상 조합원권리가액은 다릅니다. 권리가액을
              비우면 입주권분 차익이 0으로 계산됩니다.
            </li>
            <li>
              <strong>승계조합원</strong>은 비과세·장특공이 없고 단기세율이 적용될 수 있어, 같은 양도가라도 원조합원보다
              세 부담이 훨씬 큽니다.
            </li>
            <li>
              청산금(분담금) 납부·환급이 있으면 양도차익 산식(시행령 §166①)이 달라지므로, 위 예시처럼 단순
              권리가액 가정과 다를 수 있습니다.
            </li>
          </ul>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 예시는 계산기 로직 기준 참고치이며 청산금·부대비용·필요경비 증빙에 따라 달라집니다. 신고 전 홈택스·세무사·관할
          세무서 확인이 필요합니다.
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
