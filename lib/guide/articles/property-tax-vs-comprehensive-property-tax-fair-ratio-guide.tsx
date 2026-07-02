import Link from "next/link";

export const propertyTaxVsComprehensivePropertyTaxFairRatioGuideMeta = {
  slug: "property-tax-vs-comprehensive-property-tax-fair-ratio-guide",
  title: "재산세 공정 45% vs 종부세 공정 60%… 왜 세금이 두 번 나오나",
  description:
    "2026년 기준 재산세·종부세 공정시장가액비율(45%·60%) 차이, 과세표준·기본공제, 7월·12월 이중 고지 이유, 공제할 재산세(시행령 제4조의2) 산식과 공시 20억·1세대1주택·2주택 비교 예시를 표로 정리했습니다.",
  updated: "2026년 7월 2일",
} as const;

export function PropertyTaxVsComprehensivePropertyTaxFairRatioGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-ptvcpt-intro">
        <h2 id="guide-ptvcpt-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 기준
        </h2>
        <p>
          같은 공시가격인데 7월에 재산세·지방교육세, 12월에 종부세·농특세가 또 나오면 「한 집에 세금을 두 번
          매기는 것 아닌가」라고 느끼기 쉽습니다. 실제로는 <strong>재산세용·종부세용 공정시장가액비율</strong>이
          다르고, 종부세 산출 때 <strong>공제할 재산세</strong>를 빼도록 법이 정해져 있습니다.{" "}
          <Link
            href="/comprehensive-property-tax-calculator"
            className="text-primary underline-offset-4 hover:underline"
          >
            종합부동산세 계산기
          </Link>
          로 합계를 확인한 뒤, 이 글에서는 <strong>두 비율이 어디에 쓰이는지·공제가 얼마나 빠지는지</strong>를
          숫자로 풀어 씁니다.
        </p>
      </section>

      <nav
        className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm"
        aria-label="목차"
      >
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-ptvcpt-why-two" className="text-primary underline-offset-4 hover:underline">
              왜 재산세·종부세가 둘 다 있나
            </a>
          </li>
          <li>
            <a href="#guide-ptvcpt-two-notices" className="text-primary underline-offset-4 hover:underline">
              7월·12월 두 번 고지
            </a>
          </li>
          <li>
            <a href="#guide-ptvcpt-two-ratios" className="text-primary underline-offset-4 hover:underline">
              공정시장가액비율 두 종류
            </a>
          </li>
          <li>
            <a href="#guide-ptvcpt-tax-base" className="text-primary underline-offset-4 hover:underline">
              과세표준 산출 차이
            </a>
          </li>
          <li>
            <a href="#guide-ptvcpt-forty-five" className="text-primary underline-offset-4 hover:underline">
              재산세 45% vs 60%
            </a>
          </li>
          <li>
            <a href="#guide-ptvcpt-sixty-cpt" className="text-primary underline-offset-4 hover:underline">
              종부세 60%와 기본공제
            </a>
          </li>
          <li>
            <a href="#guide-ptvcpt-credit-formula" className="text-primary underline-offset-4 hover:underline">
              공제할 재산세 공식
            </a>
          </li>
          <li>
            <a href="#guide-ptvcpt-credit-effect" className="text-primary underline-offset-4 hover:underline">
              공제 없었다면 얼마나 더 낼까
            </a>
          </li>
          <li>
            <a href="#guide-ptvcpt-case20" className="text-primary underline-offset-4 hover:underline">
              공시 20억·1세대1주택 풀어 쓴 계산
            </a>
          </li>
          <li>
            <a href="#guide-ptvcpt-two-home" className="text-primary underline-offset-4 hover:underline">
              2주택 — 재산·종부 공정 모두 60%
            </a>
          </li>
          <li>
            <a href="#guide-ptvcpt-annual-sum" className="text-primary underline-offset-4 hover:underline">
              연간 보유세 합계 정리
            </a>
          </li>
          <li>
            <a href="#guide-ptvcpt-misconceptions" className="text-primary underline-offset-4 hover:underline">
              자주 헷갈리는 점
            </a>
          </li>
          <li>
            <a href="#guide-ptvcpt-checklist" className="text-primary underline-offset-4 hover:underline">
              확인 순서
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-3" aria-labelledby="guide-ptvcpt-why-two">
        <h2 id="guide-ptvcpt-why-two" className="text-foreground text-xl font-semibold tracking-tight">
          왜 재산세·종부세가 둘 다 있나
        </h2>
        <p>
          <strong>재산세</strong>는 지방자치단체가 모든 부동산에 부과하는 지방세입니다. <strong>종합부동산세</strong>
          는 공시가격이 높은 주택·토지 보유자에게 국가가 추가로 부과하는 국세입니다. 세목·관할·납부 시기가 다르기
          때문에 고지서가 두 번 옵니다.
        </p>
        <p>
          다만 종부세를 매길 때 이미 낸 재산세 일부를 <strong>공제할 재산세액</strong>으로 빼므로, 두 세금을 단순
          합산하면 실제 부담보다 크게 보입니다. 비교할 때는 「재산세+지방교육세+종부세+농특세」 연간 합계를 쓰는
          편이 맞습니다.{" "}
          <Link
            href="/guide/comprehensive-property-tax-overview-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            종합부동산세 4종 세목 정리
          </Link>
          에서 전체 구조를 먼저 볼 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ptvcpt-two-notices">
        <h2 id="guide-ptvcpt-two-notices" className="text-foreground text-xl font-semibold tracking-tight">
          7월·12월 — 같은 집, 다른 고지
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              고지·납부 분리
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  시기
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  세목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  관할·경로
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  7월
                </th>
                <td className="border-border border-b px-3 py-2.5">재산세 + 지방교육세</td>
                <td className="border-border border-b px-3 py-2.5">지자체·위택스</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  12월
                </th>
                <td className="px-3 py-2.5">종부세 + 농특세</td>
                <td className="px-3 py-2.5">국세·홈택스</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          재산세는 7월에 먼저 확정·납부되고, 그 금액이 종부세 신고서의 <strong>공제할 재산세</strong> 산출에
          반영됩니다. 12월 종부세는 7월에 낸 재산세와 별개로 또 내는 것처럼 보이지만, 공제 단계에서 일부가
          상쇄됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ptvcpt-two-ratios">
        <h2 id="guide-ptvcpt-two-ratios" className="text-foreground text-xl font-semibold tracking-tight">
          공정시장가액비율 — 이름은 같고 쓰임이 다름
        </h2>
        <p>
          「공정시장가액비율」은 공시가격을 과세표준에 가깝게 반영하기 위한 계수입니다. 재산세와 종부세에{" "}
          <strong>각각 다른 비율</strong>이 적용되며, 종부세 쪽에는 <strong>기본공제</strong>가 먼저 빠집니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              2026년 현행 주택분 비율
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  재산세 공정
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  종부세 공정
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1세대 1주택
                </th>
                <td className="border-border border-b px-3 py-2.5">45%</td>
                <td className="border-border border-b px-3 py-2.5">60%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2주택·비거주 1주택 등
                </th>
                <td className="border-border border-b px-3 py-2.5">60%</td>
                <td className="border-border border-b px-3 py-2.5">60%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  법인 주택
                </th>
                <td className="px-3 py-2.5">60%</td>
                <td className="px-3 py-2.5">60%(기본공제 없음)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          1세대 1주택만 재산세 공정이 45%로 낮습니다. 종부세 공정 60%는 주택 보유자 대부분에게 동일하게 적용됩니다(토지
          종부세는 100%).
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ptvcpt-tax-base">
        <h2 id="guide-ptvcpt-tax-base" className="text-foreground text-xl font-semibold tracking-tight">
          같은 공시 20억 — 과세표준이 다른 이유
        </h2>
        <p>공시가격 20억·1세대 1주택을 예로 들면, 재산세와 종부세 과세표준 산식이 아래처럼 갈립니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              재산세 vs 종부세 과세표준(20억·1세대1주택)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  세목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  산식
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  과세표준
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  재산세
                </th>
                <td className="border-border border-b px-3 py-2.5">20억×45%</td>
                <td className="border-border border-b px-3 py-2.5">9억 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  종부세
                </th>
                <td className="px-3 py-2.5">(20억−12억)×60%</td>
                <td className="px-3 py-2.5">4.8억 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          재산세는 <strong>공시가격 전액</strong>에 45%를 곱하고, 종부세는 <strong>12억을 뺀 뒤</strong> 60%를
          곱합니다. 「45%와 60% 중 작은 쪽만 적용」이 아니라, <strong>두 번 각각 다른 기준으로</strong> 계산하는
          구조입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ptvcpt-forty-five">
        <h2 id="guide-ptvcpt-forty-five" className="text-foreground text-xl font-semibold tracking-tight">
          재산세 45% — 1세대 1주택만 낮은 이유
        </h2>
        <p>
          1세대 1주택 재산세는 공시가격×45%가 과세표준입니다. 공시 9억 이하면 과세표준×0.05% 단일세율이 적용되어
          재산세 부담이 매우 작고, 9억을 넘으면 누진세율(0.1%~0.4%)로 전환됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              1세대 1주택 vs 2주택 — 재산세만(공시 20억)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  재산세 공정
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  과세표준
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  7월(재산+지방교육)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1세대 1주택
                </th>
                <td className="border-border border-b px-3 py-2.5">45%</td>
                <td className="border-border border-b px-3 py-2.5">9억 원</td>
                <td className="border-border border-b px-3 py-2.5">356.4만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  2주택
                </th>
                <td className="px-3 py-2.5">60%</td>
                <td className="px-3 py-2.5">12억 원</td>
                <td className="px-3 py-2.5">500.4만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          같은 20억이어도 2주택은 재산세 과세표준이 12억으로 잡혀 7월 납부만 144만 원 더 큽니다. 종부세 공정은
          둘 다 60%지만, 기본공제(12억 vs 9억) 차이도 겹칩니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-ptvcpt-sixty-cpt">
        <h2 id="guide-ptvcpt-sixty-cpt" className="text-foreground text-xl font-semibold tracking-tight">
          종부세 60% — 기본공제와 함께 적용
        </h2>
        <p>
          종부세 공정 60%는 1세대 1주택·2주택 모두 동일합니다. 차이는 <strong>기본공제</strong>입니다. 1세대 1주택
          12억, 그 외 9억을 공시가격에서 먼저 뺀 뒤 60%를 곱합니다.
        </p>
        <p className="bg-muted/30 rounded-md border border-border px-3 py-2 font-mono text-sm leading-relaxed whitespace-pre-wrap">
          {`공시 12억·1세대1주택 → (12억−12억)×60% = 0 → 종부세 없음(재산세만)
공시 20억·1세대1주택 → (20억−12억)×60% = 4.8억
공시 20억·2주택 → (20억−9억)×60% = 6.6억`}
        </p>
        <p>
          공정시장가액비율 인상(80%·100% 등) 검토는 <strong>종부세 쪽</strong> 이야기입니다. 재산세 공정 45%와는
          별개로 움직입니다.{" "}
          <Link
            href="/guide/comprehensive-property-tax-fair-ratio-calculation-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            종부세 공정 인상 시나리오
          </Link>
          를 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ptvcpt-credit-formula">
        <h2 id="guide-ptvcpt-credit-formula" className="text-foreground text-xl font-semibold tracking-tight">
          공제할 재산세 — 이중 과세를 막는 장치
        </h2>
        <p>
          종합부동산세법 시행령 제4조의2·제5조의3에 따라, 종부세 산출 시 재산세 일부를 차감합니다. 신고서 별지3호
          부표(2) ⑨란 기준으로 <strong>공제 표준세액</strong>을 먼저 구하고, 실제 재산세에 비례 배분합니다.
        </p>
        <p className="bg-muted/30 rounded-md border border-border px-3 py-2 font-mono text-sm leading-relaxed whitespace-pre-wrap">
          {`공제 표준세액 = (공시가격 − 기본공제) × 종부세 공정 × 재산세 공정 × 표준세율(주택 0.4%)

실제 공제액 = 재산세 × (공제 표준세액 ÷ 재산세 표준세액)

종부세 납부 = 종부세(공제 전) − 실제 공제액`}
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              공시 20억·1세대1주택 — 공제 표준세액 풀어 쓰기
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  단계
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  계산
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  금액
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  공제 표준세액
                </th>
                <td className="border-border border-b px-3 py-2.5">(20−12)억×60%×45%×0.4%</td>
                <td className="border-border border-b px-3 py-2.5">86.4만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  재산세(7월)
                </th>
                <td className="border-border border-b px-3 py-2.5">9억 과세표준 누진</td>
                <td className="border-border border-b px-3 py-2.5">297만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  실제 공제액
                </th>
                <td className="border-border border-b px-3 py-2.5">297만×(86.4÷297) ≒ 전액 반영</td>
                <td className="border-border border-b px-3 py-2.5">86.4만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  비고
                </th>
                <td className="px-3 py-2.5" colSpan={2}>
                  공제 표준세액이 재산세보다 작으면 재산세 전액이 아니라 표준세액 한도만큼만 공제
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          공제 식에 <strong>재산세 공정 45%</strong>와 <strong>종부세 공정 60%</strong>가 함께 들어갑니다. 두
          비율이 종부세 납부액까지 연결되는 지점입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ptvcpt-credit-effect">
        <h2 id="guide-ptvcpt-credit-effect" className="text-foreground text-xl font-semibold tracking-tight">
          공제 없었다면 — 20억·1세대1주택 비교
        </h2>
        <p>
          공제할 재산세가 없다고 가정하면, 12월 종부세 부담이 얼마나 커지는지 대략 볼 수 있습니다(가정 예시).
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              공제 전·후(공시 20억·1세대1주택)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  7월
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  12월
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  연간
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  현행(공제 반영)
                </th>
                <td className="border-border border-b px-3 py-2.5">356.4만 원</td>
                <td className="border-border border-b px-3 py-2.5">227.5만 원</td>
                <td className="border-border border-b px-3 py-2.5">583.9만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  공제 0 가정
                </th>
                <td className="px-3 py-2.5">356.4만 원</td>
                <td className="px-3 py-2.5">331.2만 원</td>
                <td className="px-3 py-2.5">687.6만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          12월 쪽만 약 104만 원 차이(공제 86.4만+농특세 20%). 7월 재산세는 공제와 무관하게 동일합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ptvcpt-case20">
        <h2 id="guide-ptvcpt-case20" className="text-foreground text-xl font-semibold tracking-tight">
          공시 20억·1세대1주택 — 한 줄씩 따라가기
        </h2>
        <pre className="bg-muted/30 text-foreground overflow-x-auto rounded-md border border-border p-3 font-mono text-xs leading-relaxed whitespace-pre sm:text-sm">
          {`[재산세 · 7월]
20억 × 45%(재산세 공정) = 9억(과세표준)
→ 재산세 297만 + 지방교육세 59.4만 = 356.4만

[종부세 · 12월]
(20억 − 12억) × 60%(종부세 공정) = 4.8억(과세표준)
→ 4.8억×0.7%−60만 = 276만(공제 전)
→ 공제할 재산세 86.4만 차감 = 189.6만
→ 농특세 20% = 227.5만(종부+농특)

[연간 보유세]
356.4만 + 227.5만 = 583.9만`}
        </pre>
        <p>
          1세대 1주택 세액공제(연령·보유기간)는 위 189.6만(공제 전 종부세)에서 추가로 빠집니다.{" "}
          <Link
            href="/guide/one-household-one-home-comprehensive-property-tax-amount-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            1세대 1주택 구간별 금액
          </Link>
          에서 세액공제 적용 예시를 볼 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ptvcpt-two-home">
        <h2 id="guide-ptvcpt-two-home" className="text-foreground text-xl font-semibold tracking-tight">
          2주택 — 재산·종부 공정 모두 60%인 경우
        </h2>
        <p>
          2주택은 재산세·종부세 공정이 둘 다 60%입니다. 그래도 과세표준 산식이 다르고, 기본공제 9억만
          종부세에 적용됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              공시 20억·1세대1주택 vs 2주택
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  1세대 1주택
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  2주택
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  재산세 과세표준
                </th>
                <td className="border-border border-b px-3 py-2.5">20억×45%=9억</td>
                <td className="border-border border-b px-3 py-2.5">20억×60%=12억</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종부세 과세표준
                </th>
                <td className="border-border border-b px-3 py-2.5">(20−12)억×60%=4.8억</td>
                <td className="border-border border-b px-3 py-2.5">(20−9)억×60%=6.6억</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  공제 표준세액(0.4%)
                </th>
                <td className="border-border border-b px-3 py-2.5">86.4만 원</td>
                <td className="border-border border-b px-3 py-2.5">158.4만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  7월
                </th>
                <td className="border-border border-b px-3 py-2.5">356.4만 원</td>
                <td className="border-border border-b px-3 py-2.5">500.4만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  12월
                </th>
                <td className="border-border border-b px-3 py-2.5">227.5만 원</td>
                <td className="border-border border-b px-3 py-2.5">313.9만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  연간
                </th>
                <td className="px-3 py-2.5">583.9만 원</td>
                <td className="px-3 py-2.5">814.3만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-ptvcpt-annual-sum">
        <h2 id="guide-ptvcpt-annual-sum" className="text-foreground text-xl font-semibold tracking-tight">
          연간 보유세 — 이렇게 합치면 됨
        </h2>
        <p>
          「두 번 나온다」는 느낌을 줄이려면, 아래 네 항목을 더한 값이 실질 연간 부담입니다. 7월·12월로 나뉘어
          빠져 나갈 뿐입니다.
        </p>
        <p className="bg-muted/30 rounded-md border border-border px-3 py-2 font-mono text-sm">
          연간 보유세 = 재산세 + 지방교육세(재산세×20%) + 종부세 + 농특세(종부세×20%)
        </p>
        <p className="text-muted-foreground text-sm">
          세부담상한·1세대1주택 세액공제·합산배제 임대주택은 위 합계에서 추가로 조정됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ptvcpt-misconceptions">
        <h2 id="guide-ptvcpt-misconceptions" className="text-foreground text-xl font-semibold tracking-tight">
          자주 헷갈리는 점
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              오해 vs 실제
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  오해
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  실제
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  「45%와 60% 중 하나만 적용」
                </th>
                <td className="border-border border-b px-3 py-2.5">재산세·종부세 각각 다른 비율·다른 과세표준</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  「재산세 냈으니 종부세 0」
                </th>
                <td className="border-border border-b px-3 py-2.5">공제할 재산세만 차감, 공시 12억 초과 1주택은 종부세 납부</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  「종부세 공정만 올라가도 재산세는 그대로」
                </th>
                <td className="border-border border-b px-3 py-2.5">맞음. 다만 공제 표준세액에 종부세 공정이 들어가 공제액도 변함</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  「1세대1주택이면 종부세 공정도 45%」
                </th>
                <td className="border-border border-b px-3 py-2.5">재산세만 45%, 종부세는 60%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  「7월+12월 고지서 금액을 그대로 더하면 됨」
                </th>
                <td className="px-3 py-2.5">맞음(연간 합계). 다만 12월 쪽은 이미 재산세 공제가 반영된 금액</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ptvcpt-checklist">
        <h2 id="guide-ptvcpt-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          두 비율·공제 확인 순서
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              체크리스트
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  순서
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 w-24 font-semibold">
                  확인
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  1. 1세대 1주택 여부 → 재산세 공정 45% vs 60% 구분
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  2. 기본공제(12억/9억) 적용 후 종부세 과세표준 계산
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  3. 7월 재산세 고지서 금액 확인
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  4. 홈택스 모의계산에서 공제할 재산세·종부세 납부액 대조
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 text-left font-medium">
                  5. 연간 합계(재산+지방교육+종부+농특)로 부담 비교
                </th>
                <td className="px-3 py-2.5 text-center">□</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 정확한 공제액·납부세액은 홈택스(hometax.go.kr) 종합부동산세 신고서·모의계산 결과를 따르세요.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="관련 가이드"
      >
        <p className="text-foreground font-medium">관련 가이드</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <Link
              href="/comprehensive-property-tax-calculator"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              종합부동산세 계산기
            </Link>
            — 재산세·종부세·공제 반영 합계
          </li>
          <li>
            <Link
              href="/guide/comprehensive-property-tax-overview-guide"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              종합부동산세란? 4종 세목 정리
            </Link>
          </li>
          <li>
            <Link
              href="/guide/one-household-one-home-comprehensive-property-tax-amount-guide"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              1세대 1주택 구간별 납부액
            </Link>
          </li>
          <li>
            <Link
              href="/guide/comprehensive-property-tax-fair-ratio-calculation-2026-guide"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              종부세 공정시장가액비율 인상 시나리오
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
