import Link from "next/link";

export const oneHouseholdOneHomeComprehensivePropertyTaxAmountGuideMeta = {
  slug: "one-household-one-home-comprehensive-property-tax-amount-guide",
  title: "1세대 1주택 종부세 얼마나 나올까… 공시가격·12억 공제 구간별",
  description:
    "2026년 기준 1세대 1주택 보유세 구조, 12억 기본공제·9억 재산세 단일세율, 공시가격 10억·13억·15억·20억·25억 연간·7월·12월 납부액, 세액공제(연령·보유기간) 전후 비교와 계산기 연결을 표로 정리했습니다.",
  updated: "2026년 7월 2일",
} as const;

export function OneHouseholdOneHomeComprehensivePropertyTaxAmountGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-ohohcpt-intro">
        <h2 id="guide-ohohcpt-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 기준
        </h2>
        <p>
          1세대 1주택이라도 공시가격이 12억 원을 넘으면 종합부동산세(종부세) 대상이 됩니다. 12억 이하라면 재산세·
          지방교육세만 내고, 그 이상부터 12월에 종부세·농어촌특별세가 추가됩니다.{" "}
          <Link
            href="/comprehensive-property-tax-calculator"
            className="text-primary underline-offset-4 hover:underline"
          >
            종합부동산세 계산기
          </Link>
          에 공시가격을 넣으면 연간 합계를 바로 볼 수 있고, 이 글에서는 <strong>구간별로 금액이 왜·어디서
          올라가는지</strong>를 표로 풀어 씁니다. 세부담상한·합산배제 임대주택은 별도 요건이 있으므로 하단에서
          구분합니다.
        </p>
      </section>

      <nav
        className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm"
        aria-label="목차"
      >
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-ohohcpt-requirements" className="text-primary underline-offset-4 hover:underline">
              1세대 1주택 요건(보유세)
            </a>
          </li>
          <li>
            <a href="#guide-ohohcpt-twelve" className="text-primary underline-offset-4 hover:underline">
              12억 기본공제
            </a>
          </li>
          <li>
            <a href="#guide-ohohcpt-structure" className="text-primary underline-offset-4 hover:underline">
              연간 보유세 계산 구조
            </a>
          </li>
          <li>
            <a href="#guide-ohohcpt-property-only" className="text-primary underline-offset-4 hover:underline">
              12억 이하: 재산세만
            </a>
          </li>
          <li>
            <a href="#guide-ohohcpt-nine-cliff" className="text-primary underline-offset-4 hover:underline">
              9억→10억 재산세 급증
            </a>
          </li>
          <li>
            <a href="#guide-ohohcpt-twelve-cliff" className="text-primary underline-offset-4 hover:underline">
              12억→13억 종부세 발생
            </a>
          </li>
          <li>
            <a href="#guide-ohohcpt-by-price" className="text-primary underline-offset-4 hover:underline">
              공시가격별 납부액 표
            </a>
          </li>
          <li>
            <a href="#guide-ohohcpt-case15" className="text-primary underline-offset-4 hover:underline">
              공시 15억 원 풀어 쓴 계산
            </a>
          </li>
          <li>
            <a href="#guide-ohohcpt-case20" className="text-primary underline-offset-4 hover:underline">
              공시 20억·25억 원
            </a>
          </li>
          <li>
            <a href="#guide-ohohcpt-relief" className="text-primary underline-offset-4 hover:underline">
              1세대 1주택 세액공제
            </a>
          </li>
          <li>
            <a href="#guide-ohohcpt-payment-split" className="text-primary underline-offset-4 hover:underline">
              7월·12월 납부 분리
            </a>
          </li>
          <li>
            <a href="#guide-ohohcpt-not-qualified" className="text-primary underline-offset-4 hover:underline">
              요건 미충족 시
            </a>
          </li>
          <li>
            <a href="#guide-ohohcpt-checklist" className="text-primary underline-offset-4 hover:underline">
              확인 순서
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-3" aria-labelledby="guide-ohohcpt-requirements">
        <h2 id="guide-ohohcpt-requirements" className="text-foreground text-xl font-semibold tracking-tight">
          1세대 1주택 요건(보유세 관점)
        </h2>
        <p>
          종부세에서 1세대 1주택 혜택(기본공제 12억·재산세 공정 45%·세액공제)을 받으려면, <strong>6월 1일</strong>{" "}
          현재 세대 전체가 주택 1채만 보유하고, 그 주택에 세대원 전원이 거주해야 합니다. 배우자 명의 주택·
          조합원 입주권 등도 주택 수에 포함될 수 있으므로, 「내 이름만 1채」라고 단정하지 않는 편이 안전합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              1세대 1주택 vs 그 외(보유세 차이)
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
                  2주택·비거주 1주택 등
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종부세 기본공제
                </th>
                <td className="border-border border-b px-3 py-2.5">12억 원</td>
                <td className="border-border border-b px-3 py-2.5">9억 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  재산세 공정시장가액비율
                </th>
                <td className="border-border border-b px-3 py-2.5">45%</td>
                <td className="border-border border-b px-3 py-2.5">60%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종부세 세액공제
                </th>
                <td className="border-border border-b px-3 py-2.5">연령·보유기간(한도 80%)</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  공시 9억 이하 재산세
                </th>
                <td className="px-3 py-2.5">0.05% 단일세율</td>
                <td className="px-3 py-2.5">누진세율(0.1%~0.4%)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          양도세 1세대 1주택 비과세(2년 거주 등)와 종부세 1세대 1주택 요건은 <strong>비슷하지만 동일하지
          않습니다</strong>. 보유세만 볼 때는 6월 1일 거주·주택 수가 핵심입니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-ohohcpt-twelve">
        <h2 id="guide-ohohcpt-twelve" className="text-foreground text-xl font-semibold tracking-tight">
          12억 기본공제 — 종부세가 붙는 기준선
        </h2>
        <p>
          종부세 과세표준은 <strong>(공시가격 − 12억) × 60%</strong>입니다. 공시가격이 12억 원 이하면 괄호 안이 0
          이하가 되어 종부세는 없습니다. 「12억까지 면제」라고 부르지만, 정확히는 <strong>종부세 과세표준이
          0</strong>인 것이고 재산세는 공시가격 전체에 대해 계속 부과됩니다.
        </p>
        <p className="bg-muted/30 rounded-md border border-border px-3 py-2 font-mono text-sm leading-relaxed whitespace-pre-wrap">
          {`공시 12억 → (12억−12억)×60% = 0 → 종부세 없음, 재산세만
공시 13억 → (13억−12억)×60% = 0.6억 → 종부세 과세 시작
공시 20억 → (20억−12억)×60% = 4.8억`}
        </p>
        <p>
          12억 1천만 원만 넘어도 종부세가 발생합니다. 매매가가 8억이어도 공시가격이 13억이면 종부세 대상입니다.{" "}
          <Link
            href="/guide/comprehensive-property-tax-overview-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            종합부동산세 입문 정리
          </Link>
          에서 4종 세목 구조를 함께 볼 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ohohcpt-structure">
        <h2 id="guide-ohohcpt-structure" className="text-foreground text-xl font-semibold tracking-tight">
          1세대 1주택 연간 보유세 계산 구조
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              세목별 산출·납부
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  순서
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  세목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  산출
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  납부
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-border border-b px-3 py-2.5">①</td>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  재산세
                </th>
                <td className="border-border border-b px-3 py-2.5">공시×45%×세율(9억 이하 0.05%·초과 누진)</td>
                <td className="border-border border-b px-3 py-2.5">7월</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">②</td>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  지방교육세
                </th>
                <td className="border-border border-b px-3 py-2.5">재산세×20%</td>
                <td className="border-border border-b px-3 py-2.5">7월</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">③</td>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종부세
                </th>
                <td className="border-border border-b px-3 py-2.5">(공시−12억)×60%×세율 − 공제할 재산세 − 세액공제</td>
                <td className="border-border border-b px-3 py-2.5">12월</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="px-3 py-2.5">④</td>
                <th scope="row" className="px-3 py-2.5 font-medium">
                  농어촌특별세
                </th>
                <td className="px-3 py-2.5">종부세×20%</td>
                <td className="px-3 py-2.5">12월</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ohohcpt-property-only">
        <h2 id="guide-ohohcpt-property-only" className="text-foreground text-xl font-semibold tracking-tight">
          12억 이하: 재산세·지방교육세만
        </h2>
        <p className="text-muted-foreground text-sm">
          1세대 1주택·종부세 공정 60%·세액공제·세부담상한 반영 전. 아래 금액은 국세청·지방세법 표준세율 기준
          산출값입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              공시가격별 연간 보유세(종부세 없음)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  공시가격
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  재산세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  지방교육세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  합계(7월)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  8억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">18만 원</td>
                <td className="border-border border-b px-3 py-2.5">3.6만 원</td>
                <td className="border-border border-b px-3 py-2.5">21.6만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  9억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">20.3만 원</td>
                <td className="border-border border-b px-3 py-2.5">4.1만 원</td>
                <td className="border-border border-b px-3 py-2.5">24.3만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  10억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">117만 원</td>
                <td className="border-border border-b px-3 py-2.5">23.4만 원</td>
                <td className="border-border border-b px-3 py-2.5">140.4만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  11억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">135만 원</td>
                <td className="border-border border-b px-3 py-2.5">27만 원</td>
                <td className="border-border border-b px-3 py-2.5">162만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  12억 원
                </th>
                <td className="px-3 py-2.5">153만 원</td>
                <td className="px-3 py-2.5">30.6만 원</td>
                <td className="px-3 py-2.5">183.6만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ohohcpt-nine-cliff">
        <h2 id="guide-ohohcpt-nine-cliff" className="text-foreground text-xl font-semibold tracking-tight">
          9억→10억: 재산세가 한 번에 뛰는 구간
        </h2>
        <p>
          1세대 1주택·공시가격 9억 원 이하는 재산세 과세표준(공시×45%)에 <strong>0.05% 단일세율</strong>이
          적용됩니다. 9억 1천만 원부터는 누진세율(0.1%~0.4%)로 바뀌어, 종부세와 무관하게 재산세만 크게
          올라갑니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              9억 vs 10억 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  공시가격
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  재산세+지방교육세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  9억 대비
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  9억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">24.3만 원</td>
                <td className="border-border border-b px-3 py-2.5">—</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  10억 원
                </th>
                <td className="px-3 py-2.5">140.4만 원</td>
                <td className="px-3 py-2.5">+116.1만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          공시가격이 9억 부근인 매물은 1천만 원 차이로 연간 재산세 부담이 100만 원 넘게 벌어질 수 있습니다. realtyprice.kr에서
          당해 연도 공시가격을 먼저 확인하는 것이 좋습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ohohcpt-twelve-cliff">
        <h2 id="guide-ohohcpt-twelve-cliff" className="text-foreground text-xl font-semibold tracking-tight">
          12억→13억: 종부세가 붙는 구간
        </h2>
        <p>
          12억 원까지는 12월 납부가 없었는데, 13억 원부터 종부세·농특세가 추가됩니다. 1억 원 공시 차이에 연간
          보유세가 약 45만 원 늘어나는 식입니다(아래 표 기준).
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              12억 vs 13억 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  공시가격
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  7월(재산+지방교육)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  12월(종부+농특)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  연간 합계
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  12억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">183.6만 원</td>
                <td className="border-border border-b px-3 py-2.5">0원</td>
                <td className="border-border border-b px-3 py-2.5">183.6만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  13억 원
                </th>
                <td className="px-3 py-2.5">205.2만 원</td>
                <td className="px-3 py-2.5">23.0만 원</td>
                <td className="px-3 py-2.5">228.2만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          13억 원 종부세 산출: 과세표준 (13−12)억×60%=0.6억 → 0.6억×0.5%=30만(공제 전) → 공제할 재산세 10.8만 차감 →
          종부세 19.2만 + 농특세 3.8만 ≈ 23.0만 원.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ohohcpt-by-price">
        <h2 id="guide-ohohcpt-by-price" className="text-foreground text-xl font-semibold tracking-tight">
          공시가격별 연간·7월·12월 납부액
        </h2>
        <p className="text-muted-foreground text-sm">
          1세대 1주택·세액공제·세부담상한 반영 전. 종부세 공정 60%(현행).
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              공시가격 구간별 보유세
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  공시가격
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  7월
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  12월
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  연간 합계
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  종부세 과세표준
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  12억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">183.6만 원</td>
                <td className="border-border border-b px-3 py-2.5">—</td>
                <td className="border-border border-b px-3 py-2.5">183.6만 원</td>
                <td className="border-border border-b px-3 py-2.5">0원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  14억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">226.8만 원</td>
                <td className="border-border border-b px-3 py-2.5">46.1만 원</td>
                <td className="border-border border-b px-3 py-2.5">272.9만 원</td>
                <td className="border-border border-b px-3 py-2.5">1.2억 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  15억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">248.4만 원</td>
                <td className="border-border border-b px-3 py-2.5">69.1만 원</td>
                <td className="border-border border-b px-3 py-2.5">317.5만 원</td>
                <td className="border-border border-b px-3 py-2.5">1.8억 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  18억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">313.2만 원</td>
                <td className="border-border border-b px-3 py-2.5">152.6만 원</td>
                <td className="border-border border-b px-3 py-2.5">465.8만 원</td>
                <td className="border-border border-b px-3 py-2.5">3.6억 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  20억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">356.4만 원</td>
                <td className="border-border border-b px-3 py-2.5">227.5만 원</td>
                <td className="border-border border-b px-3 py-2.5">583.9만 원</td>
                <td className="border-border border-b px-3 py-2.5">4.8억 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  25억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">464.4만 원</td>
                <td className="border-border border-b px-3 py-2.5">479.5만 원</td>
                <td className="border-border border-b px-3 py-2.5">943.9만 원</td>
                <td className="border-border border-b px-3 py-2.5">7.8억 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  30억 원
                </th>
                <td className="px-3 py-2.5">572.4만 원</td>
                <td className="px-3 py-2.5">774.7만 원</td>
                <td className="px-3 py-2.5">1,347.1만 원</td>
                <td className="px-3 py-2.5">10.8억 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          25억 원부터는 12월 납부(종부+농특)가 7월(재산+지방교육)보다 커집니다. 과세표준 12억 원을 넘으면 종부세
          세율이 1.0%에서 1.3% 구간으로 올라가 체감이 더 커집니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ohohcpt-case15">
        <h2 id="guide-ohohcpt-case15" className="text-foreground text-xl font-semibold tracking-tight">
          공시가격 15억 원 — 단계별 계산
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              15억·1세대 1주택 산출 과정
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
                  재산세 과세표준
                </th>
                <td className="border-border border-b px-3 py-2.5">15억×45%</td>
                <td className="border-border border-b px-3 py-2.5">6.75억 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  7월 납부
                </th>
                <td className="border-border border-b px-3 py-2.5">재산세 207만+지방교육세 41.4만</td>
                <td className="border-border border-b px-3 py-2.5">248.4만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종부세 과세표준
                </th>
                <td className="border-border border-b px-3 py-2.5">(15억−12억)×60%</td>
                <td className="border-border border-b px-3 py-2.5">1.8억 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종부세(공제 전)
                </th>
                <td className="border-border border-b px-3 py-2.5">1.8억×0.5%</td>
                <td className="border-border border-b px-3 py-2.5">90만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  공제할 재산세
                </th>
                <td className="border-border border-b px-3 py-2.5">(15−12)억×60%×45%×0.4%</td>
                <td className="border-border border-b px-3 py-2.5">32.4만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  12월 납부
                </th>
                <td className="border-border border-b px-3 py-2.5">(90−32.4)만×1.2(농특세)</td>
                <td className="border-border border-b px-3 py-2.5">69.1만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  연간 합계
                </th>
                <td className="px-3 py-2.5">248.4만+69.1만</td>
                <td className="px-3 py-2.5">317.5만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ohohcpt-case20">
        <h2 id="guide-ohohcpt-case20" className="text-foreground text-xl font-semibold tracking-tight">
          공시 20억·25억 원 — 자주 묻는 구간
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              20억·25억 요약
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  공시가격
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  종부세 과세표준
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
                  20억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">4.8억(0.7%−60만=276만 공제 전)</td>
                <td className="border-border border-b px-3 py-2.5">356.4만 원</td>
                <td className="border-border border-b px-3 py-2.5">227.5만 원</td>
                <td className="border-border border-b px-3 py-2.5">583.9만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  25억 원
                </th>
                <td className="px-3 py-2.5">7.8억(1.0%−240만=540만 공제 전)</td>
                <td className="px-3 py-2.5">464.4만 원</td>
                <td className="px-3 py-2.5">479.5만 원</td>
                <td className="px-3 py-2.5">943.9만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          20억 원 상세 단계는{" "}
          <Link
            href="/guide/comprehensive-property-tax-overview-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            종합부동산세 입문 정리
          </Link>
          ·{" "}
          <Link
            href="/guide/comprehensive-property-tax-fair-ratio-calculation-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            공정시장가액비율 시나리오
          </Link>
          가이드와 숫자가 맞습니다. 공시가격 인상만으로도 7월·12월 모두 오를 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ohohcpt-relief">
        <h2 id="guide-ohohcpt-relief" className="text-foreground text-xl font-semibold tracking-tight">
          1세대 1주택 세액공제(연령·보유기간)
        </h2>
        <p>
          1세대 1주택 종부세에는 <strong>연령 공제 + 보유기간 공제</strong>가 더해지며, 합계 한도는 80%입니다.
          재산세에는 적용되지 않고 <strong>12월 종부세(공제 전)</strong>에서만 차감됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              공제율(택1 아님, 가산)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  조건
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  공제율
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  60세 이상
                </th>
                <td className="border-border border-b px-3 py-2.5">20%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  65세 이상
                </th>
                <td className="border-border border-b px-3 py-2.5">30%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  70세 이상
                </th>
                <td className="border-border border-b px-3 py-2.5">40%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5년 이상 보유
                </th>
                <td className="border-border border-b px-3 py-2.5">20%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  10년 이상 보유
                </th>
                <td className="border-border border-b px-3 py-2.5">40%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  15년 이상 보유
                </th>
                <td className="px-3 py-2.5">50%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>공시 20억·1세대 1주택 기준, 세액공제 적용 전후 비교입니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              20억·세액공제 전후(연간 보유세)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  조건
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  12월(종부+농특)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  연간 합계
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  공제 없음
                </th>
                <td className="border-border border-b px-3 py-2.5">227.5만 원</td>
                <td className="border-border border-b px-3 py-2.5">583.9만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  65세·10년 보유(70%)
                </th>
                <td className="border-border border-b px-3 py-2.5">68.3만 원</td>
                <td className="border-border border-b px-3 py-2.5">424.7만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  70세·15년 보유(80% 한도)
                </th>
                <td className="px-3 py-2.5">45.5만 원</td>
                <td className="px-3 py-2.5">401.9만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          7월 재산세 356.4만 원은 공제와 무관하게 동일합니다. 홈택스 신고 시 연령·보유기간이 자동 반영되는지
          모의계산으로 확인하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ohohcpt-payment-split">
        <h2 id="guide-ohohcpt-payment-split" className="text-foreground text-xl font-semibold tracking-tight">
          7월·12월 납부 — 같은 집, 두 번 고지
        </h2>
        <p>
          연간 보유세를 비교할 때는 합계를 쓰지만, 실제 통장에서는 7월과 12월에 나눠 빠져 나갑니다. 재산세는 위택스·
          지자체 고지, 종부세는 홈택스에서 신고·납부합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              대표 구간 7월·12월 분리
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  공시가격
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  7월
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  12월
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  12월 비중
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  12억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">183.6만 원</td>
                <td className="border-border border-b px-3 py-2.5">0원</td>
                <td className="border-border border-b px-3 py-2.5">0%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  15억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">248.4만 원</td>
                <td className="border-border border-b px-3 py-2.5">69.1만 원</td>
                <td className="border-border border-b px-3 py-2.5">22%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  20억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">356.4만 원</td>
                <td className="border-border border-b px-3 py-2.5">227.5만 원</td>
                <td className="border-border border-b px-3 py-2.5">39%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  25억 원
                </th>
                <td className="px-3 py-2.5">464.4만 원</td>
                <td className="px-3 py-2.5">479.5만 원</td>
                <td className="px-3 py-2.5">51%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>종부세 250만 원 초과 시 6개월 이내 분납을 신청할 수 있습니다(농특세는 분납 비율에 따라 함께 분납).</p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-ohohcpt-not-qualified">
        <h2 id="guide-ohohcpt-not-qualified" className="text-foreground text-xl font-semibold tracking-tight">
          1세대 1주택 요건을 못 채우면
        </h2>
        <p>
          6월 1일에 2주택이거나, 세대원 전원이 거주하지 않으면 기본공제 9억·재산세 공정 60%·세액공제 없음으로
          계산됩니다. 공시 15억·2주택이면 종부세 과세표준 (15−9)억×60%=3.6억으로, 1세대 1주택 15억(1.8억)보다
          훨씬 큽니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              공시 15억·1세대1주택 vs 2주택(세액공제 전)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
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
                  연간 보유세
                </th>
                <td className="border-border border-b px-3 py-2.5">317.5만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 483만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  종부세 과세표준
                </th>
                <td className="px-3 py-2.5">1.8억 원</td>
                <td className="px-3 py-2.5">3.6억 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          2주택·다주택자 세율·대출 규제는{" "}
          <Link href="/guide/multi-homeowner-loan-regulations-guide" className="text-primary underline-offset-4 hover:underline">
            다주택자 규제 정리
          </Link>
          를 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ohohcpt-checklist">
        <h2 id="guide-ohohcpt-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          내 집 종부세 확인 순서
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
                  1. realtyprice.kr에서 공시가격 확인(12억·9억 기준선)
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  2. 6월 1일 기준 1세대 1주택·전원 거주 해당 여부
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  3. 7월 재산세 고지서와 계산기·본 표 대조
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  4. 홈택스 종부세 모의계산(연령·보유기간 입력)
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 text-left font-medium">
                  5. 12월 1~15일 신고·납부(250만 원 초과 시 분납 검토)
                </th>
                <td className="px-3 py-2.5 text-center">□</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 세부담상한(직전 연도 대비 150%)·합산배제 임대주택·공시가격 이의신청 등은 본 글 범위 밖입니다. 고지·
          모의계산 결과를 최종 기준으로 하세요.
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
            — 공시가격·연령·보유기간 입력
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
              href="/guide/comprehensive-property-tax-fair-ratio-calculation-2026-guide"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              종부세 공정시장가액비율 인상 시 세액 예시
            </Link>
          </li>
          <li>
            <Link
              href="/guide/multi-homeowner-loan-regulations-guide"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              다주택자 규제(2주택 종부세)
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
