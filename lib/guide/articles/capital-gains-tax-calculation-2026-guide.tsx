import Link from "next/link";

export const capitalGainsTaxCalculation2026GuideMeta = {
  slug: "capital-gains-tax-calculation-2026-guide",
  title: "2026년 양도소득세 계산 예시 | 1주택·다주택·분양권·입주권·토지",
  description:
    "2026년 기준 양도차익·장기보유특별공제·기본공제·다주택 중과·분양권 60%·입주권·비사업용 토지를 반영한 양도소득세 금액별·상황별 계산 예시와 계산기 활용법을 정리했습니다.",
  updated: "2026년 7월 4일",
} as const;

export function CapitalGainsTaxCalculation2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-cgtc-intro">
        <h2 id="guide-cgtc-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 기준
        </h2>
        <p>
          양도소득세는 <strong>양도차익·보유 기간·주택 수·지역</strong>에 따라 세액이 크게 달라집니다. 아래 예시는
          국세청 「양도소득세 개요」·소득세법 세율 구조를 단순화한 참고용이며, 실제 신고는 홈택스·세무사 확인이
          필요합니다.{" "}
          <Link
            href="/capital-gains-tax-calculator"
            className="text-primary underline-offset-4 hover:underline"
          >
            양도소득세 계산기
          </Link>
          에 동일 조건을 입력해 비교할 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cgtc-case1">
        <h2 id="guide-cgtc-case1" className="text-foreground text-xl font-semibold tracking-tight">
          사례 1 — 1세대 1주택 전액 비과세
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium w-36">
                  조건
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  양도가 10억, 취득 6억, 필요경비 3천만, 보유·거주 5년, 조정지역 아님
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium">
                  양도차익
                </th>
                <td className="border-border border-b px-3 py-2.5">3.7억</td>
              </tr>
              <tr className="bg-green-50 dark:bg-green-950/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  결과
                </th>
                <td className="px-3 py-2.5">
                  <strong>양도소득세 0원</strong> — 12억 이하·2년 보유·1세대 1주택 비과세
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cgtc-case2">
        <h2 id="guide-cgtc-case2" className="text-foreground text-xl font-semibold tracking-tight">
          사례 2 — 고가 1세대 1주택(15억) + 장특공
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium w-36">
                  조건
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  양도가 15억, 취득 9억, 필요경비 5천만, 보유·거주 8년
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium">
                  계산
                </th>
                <td className="border-border border-b px-3 py-2.5 text-sm leading-relaxed">
                  차익 5.5억 → 과세 20%(3억÷15억) = 1.1억 → 표2 장특공(보유24%+거주24%=48%) 5,280만 →
                  양도소득금액 5,720만 → 기본공제 250만 → 과세표준 5,470만 → 누진세율 15% 구간
                </td>
              </tr>
              <tr>
                <th scope="row" className="px-3 py-2.5 font-medium bg-muted/30">
                  참고 세액
                </th>
                <td className="px-3 py-2.5">산출세액 약 736만 + 지방소득세 → 합계 약 810만 원대(참고)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cgtc-case3">
        <h2 id="guide-cgtc-case3" className="text-foreground text-xl font-semibold tracking-tight">
          사례 3 — 조정지역 2주택(2026.5.10 이후 양도)
        </h2>
        <p>
          2026년 5월 10일부터 다주택 중과가 재시행되면서 <strong>장특공이 배제</strong>되고 기본세율에 20%p가
          가산됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium w-36">
                  조건
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  양도가 12억, 취득 8억, 필요경비 2천만, 보유 5년, 조정지역 2주택
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium">
                  계산
                </th>
                <td className="border-border border-b px-3 py-2.5 text-sm leading-relaxed">
                  차익 3.8억(장특공 없음) → 과세표준 3.775억 → 중과(기본+20%p) 적용, 단기세율과 비교해 큰 값
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium bg-muted/30">
                  유예 비교
                </th>
                <td className="px-3 py-2.5">
                  동일 조건을 2026.5.9 이전 양도·한시배제 적용 시 기본세율+표1 장특공(5년 10%)으로 세액 대폭 감소
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

      <section className="space-y-4" aria-labelledby="guide-cgtc-case4">
        <h2 id="guide-cgtc-case4" className="text-foreground text-xl font-semibold tracking-tight">
          사례 4 — 단기 보유(1년 미만)
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium w-36">
                  조건
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  투자 아파트 8억→9.5억(차익 1.5억), 보유 8개월, 1주택
                </td>
              </tr>
              <tr>
                <th scope="row" className="px-3 py-2.5 font-medium bg-muted/30">
                  결과
                </th>
                <td className="px-3 py-2.5">
                  과세표준 1.475억 × <strong>70%</strong> 단기세율 → 산출세액 약 1.03억 + 지방소득세(중과·장특공
                  미적용)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cgtc-case5">
        <h2 id="guide-cgtc-case5" className="text-foreground text-xl font-semibold tracking-tight">
          사례 5 — 분양권 15억 전매(3주택·조정지역)
        </h2>
        <p>
          분양권은 1세1주택·장특공·다주택 중과 없이 <strong>60%·70%</strong> 단일세율이 적용됩니다.{" "}
          <Link
            href="/guide/presale-right-capital-gains-tax-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            분양권 양도세 가이드
          </Link>
          를 함께 보세요.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium w-36">
                  조건
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  취득 9억, 양도 15억, 경비 1,500만, 보유 24년, 3주택+, 조정지역
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium">
                  결과
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  과세표준 5.825억 × <strong>60%</strong> → 총 납부{" "}
                  <strong>3억 8,445만 원</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cgtc-case6">
        <h2 id="guide-cgtc-case6" className="text-foreground text-xl font-semibold tracking-tight">
          사례 6 — 조합원입주권 1세1주택·15억
        </h2>
        <p>
          관리처분인가일 기준 차익 분리·12억 안분·인가 전분만 장특공.{" "}
          <Link
            href="/guide/occupancy-right-capital-gains-tax-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            입주권 양도세 가이드
          </Link>
          참고.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium w-36">
                  조건
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  권리가액 9억, 인가 2026-06-01, 입주권분 차익 6억, 1세1주택·2년 거주
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium">
                  결과
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  입주권분 과세 1.2억(12억 안분), 장특공 0 → 총 납부{" "}
                  <strong>2,825만 3,500원</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cgtc-case7">
        <h2 id="guide-cgtc-case7" className="text-foreground text-xl font-semibold tracking-tight">
          사례 7 — 비사업용 토지 15억·24년 보유
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium w-36">
                  조건
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  취득 9억, 양도 15억, 경비 1,500만, 보유 24년, 비사업용 토지
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium">
                  계산
                </th>
                <td className="border-border border-b px-3 py-2.5 text-sm leading-relaxed">
                  차익 5.85억 → 표1 장특공 30%(1.755억) → 과세표준 4.07억 →{" "}
                  <strong>기본+10%p</strong> 적용
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium bg-muted/30">
                  총 납부액
                </th>
                <td className="px-3 py-2.5">
                  약 <strong>1억 9,532만 원</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          주택용 표2 장특공(최대 80%)과 달리 토지는 표1(최대 30%)만 적용됩니다.{" "}
          <Link
            href="/guide/capital-gains-tax-overview-guide#guide-cgto-land"
            className="text-primary underline-offset-4 hover:underline"
          >
            비사업용 토지 개요
          </Link>
          를 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cgtc-calculator">
        <h2 id="guide-cgtc-calculator" className="text-foreground text-xl font-semibold tracking-tight">
          계산기 활용 팁
        </h2>
        <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong className="text-foreground">양도가·취득가</strong>는 계약서·등기·실지거래가 신고액을 기준으로
            입력합니다.
          </li>
          <li>
            <strong className="text-foreground">필요경비</strong>에 취득세·양도 중개수수료·법무사 비용 등을 합산할
            수 있습니다.
          </li>
          <li>
            다주택·조정지역이면 <strong>양도일(2026.5.9 이전 여부)</strong> 체크박스로 중과 배제를 반영합니다.
          </li>
          <li>결과 화면의 <strong>세율 비교표</strong>에서 기본·단기·중과 중 적용된 세율을 확인할 수 있습니다.</li>
        </ul>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
      >
        <p className="text-foreground font-medium">관련 링크</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <Link
              href="/capital-gains-tax-calculator"
              className="text-primary underline-offset-4 hover:underline"
            >
              양도소득세 계산기
            </Link>
          </li>
          <li>
            <Link
              href="/guide/capital-gains-tax-overview-guide"
              className="text-primary underline-offset-4 hover:underline"
            >
              양도소득세 개요
            </Link>
          </li>
          <li>
            <Link
              href="/guide/presale-right-capital-gains-tax-guide"
              className="text-primary underline-offset-4 hover:underline"
            >
              분양권 양도소득세
            </Link>
          </li>
          <li>
            <Link
              href="/guide/occupancy-right-capital-gains-tax-guide"
              className="text-primary underline-offset-4 hover:underline"
            >
              조합원입주권 양도소득세
            </Link>
          </li>
          <li>
            <Link
              href="/guide/one-household-one-home-capital-gains-tax-guide"
              className="text-primary underline-offset-4 hover:underline"
            >
              1세대 1주택 비과세·장특공
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
