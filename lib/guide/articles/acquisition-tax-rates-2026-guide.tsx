import Link from "next/link";

export const acquisitionTaxRates2026GuideMeta = {
  slug: "acquisition-tax-rates-2026-guide",
  title: "2026년 취득세율 완전 정리",
  description:
    "2026년 기준 취득가액·취득 시점, 1주택 구간별 세율, 지방교육세·농특세, 주택 수·지역별 중과, 2주택 비조정 vs 조정 비교, 3주택·저가주택·분양 시점, 2026 감면·특례 요약과 관련 가이드 링크를 표로 정리했습니다.",
  updated: "2026년 6월 25일",
} as const;

export function AcquisitionTaxRates2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-at-overview">
        <h2 id="guide-at-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 6월 기준
        </h2>
        <p>
          취득세는 주택 매수 시 1회 부과되는 지방세입니다. 주택 수·취득가액·조정대상지역 여부에 따라 세율이 달라지며, 취득세에
          지방교육세와 농어촌특별세가 추가로 부과됩니다. 이 글은 <strong>유상 취득(매매)·주택</strong> 중심으로 세율과 납부액
          예시를 정리했으며, 감면·특례·상속 등 세부 요건은 하단 관련 가이드에서 이어집니다.
        </p>
      </section>

      <nav
        className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm"
        aria-label="목차"
      >
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-at-taxable-base" className="text-primary underline-offset-4 hover:underline">
              취득가액·취득 시점
            </a>
          </li>
          <li>
            <a href="#guide-at-one-home" className="text-primary underline-offset-4 hover:underline">
              1주택자 세율
            </a>
          </li>
          <li>
            <a href="#guide-at-surcharges" className="text-primary underline-offset-4 hover:underline">
              지방교육세·농특세
            </a>
          </li>
          <li>
            <a href="#guide-at-by-count" className="text-primary underline-offset-4 hover:underline">
              주택 수·지역별 세율
            </a>
          </li>
          <li>
            <a href="#guide-at-adjusted-areas" className="text-primary underline-offset-4 hover:underline">
              조정대상지역
            </a>
          </li>
          <li>
            <a href="#guide-at-payment-examples" className="text-primary underline-offset-4 hover:underline">
              1주택 납부액 예시
            </a>
          </li>
          <li>
            <a href="#guide-at-two-home-compare" className="text-primary underline-offset-4 hover:underline">
              2주택 비조정 vs 조정
            </a>
          </li>
          <li>
            <a href="#guide-at-multi-home" className="text-primary underline-offset-4 hover:underline">
              3주택 이상·법인
            </a>
          </li>
          <li>
            <a href="#guide-at-low-price" className="text-primary underline-offset-4 hover:underline">
              저가주택 중과 제외
            </a>
          </li>
          <li>
            <a href="#guide-at-relief-summary" className="text-primary underline-offset-4 hover:underline">
              2026 감면·특례
            </a>
          </li>
          <li>
            <a href="#guide-at-presale-timing" className="text-primary underline-offset-4 hover:underline">
              분양·신축 취득 시점
            </a>
          </li>
          <li>
            <a href="#guide-at-gift-inherit" className="text-primary underline-offset-4 hover:underline">
              증여·상속
            </a>
          </li>
          <li>
            <a href="#guide-at-house-count" className="text-primary underline-offset-4 hover:underline">
              주택 수 산정
            </a>
          </li>
          <li>
            <a href="#guide-at-officetel" className="text-primary underline-offset-4 hover:underline">
              오피스텔
            </a>
          </li>
          <li>
            <a href="#guide-at-payment" className="text-primary underline-offset-4 hover:underline">
              납부 방법·기한
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-3" aria-labelledby="guide-at-taxable-base">
        <h2 id="guide-at-taxable-base" className="text-foreground text-xl font-semibold tracking-tight">
          취득가액(과세표준)과 취득 시점
        </h2>
        <p>
          취득세는 아래 <strong>취득가액(과세표준)</strong>에 세율을 곱해 산출합니다. 매매의 경우 실거래 신고가액과
          취득 당시 기준시가(공시가격 등) 중 <strong>큰 금액</strong>을 기준으로 하며, 분양·재건축·옵션·대물변제 포함
          여부는 개별 계약에 따라 달라질 수 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              취득가액 산정 예시(매매)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상황
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  과세표준
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  실거래 5억·기준시가 4.8억
                </th>
                <td className="border-border border-b px-3 py-2.5">5억 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  실거래 4.5억·기준시가 4.8억
                </th>
                <td className="px-3 py-2.5">4.8억 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          주택 수·조정대상지역 여부·감면 적용도 모두 <strong>취득 당시</strong> 기준입니다. 취득 후 조정대상지역으로
          지정되거나 해제되더라도, 취득 시점의 지정 현황에 따라 세율이 결정됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-at-one-home">
        <h2 id="guide-at-one-home" className="text-foreground text-xl font-semibold tracking-tight">
          1주택자 취득세율(매매가 기준)
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              취득가액 구간별 세율·부가세(전용 85㎡ 이하 기준 합계는 농특세 제외)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득가액
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득세율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  지방교육세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  농특세(85㎡ 초과)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  합계(85㎡ 이하)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  6억 원 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">1%</td>
                <td className="border-border border-b px-3 py-2.5">0.1%</td>
                <td className="border-border border-b px-3 py-2.5">0.2%(해당 시)</td>
                <td className="border-border border-b px-3 py-2.5">1.1%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  6억 원 초과 ~ 9억 원 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">1% ~ 3%(구간 비례)</td>
                <td className="border-border border-b px-3 py-2.5">취득세의 10%</td>
                <td className="border-border border-b px-3 py-2.5">0.2%(해당 시)</td>
                <td className="border-border border-b px-3 py-2.5">1.1% ~ 3.3%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  9억 원 초과
                </th>
                <td className="px-3 py-2.5">3%</td>
                <td className="px-3 py-2.5">0.3%</td>
                <td className="px-3 py-2.5">0.2%(해당 시)</td>
                <td className="px-3 py-2.5">3.3%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>6억 원 초과 9억 원 이하 구간은 아래 산식으로 세율이 결정됩니다.</p>
        <p className="bg-muted/30 rounded-md border border-border px-3 py-2 font-mono text-sm">
          취득세율 = (취득가액 × 2/3억 - 3) / 100
        </p>
        <p className="text-muted-foreground text-sm">
          예) 취득가액 7억 원 → (7 × 2/3 - 3) / 100 ≈ 1.67% → 취득세 약 1,167만 원, 지방교육세 약 117만 원, 합계 약
          1,284만 원(전용 85㎡ 이하·농특세 제외)
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-at-surcharges">
        <h2 id="guide-at-surcharges" className="text-foreground text-xl font-semibold tracking-tight">
          지방교육세·농어촌특별세 계산 규칙
        </h2>
        <p>
          취득세율이 <strong>8% 미만</strong>(1~3% 구간 등)이면 지방교육세는 산출 취득세액의 10%입니다. 취득세율이{" "}
          <strong>8% 이상</strong>(조정지역 2주택·3주택 중과 등)이면 지방교육세는 과세표준 × 0.4%로 계산됩니다.
        </p>
        <p>
          농어촌특별세는 <strong>전용면적 85㎡ 초과</strong> 주택에 부과되며, 주택 수·조정대상지역 여부에 따라
          0.2%~1.0%까지 달라집니다. 공급면적이 아닌 건축물대장상 전용면적 기준이므로 혼동하지 않도록 확인하세요. 세부
          계산은{" "}
          <Link
            href="/guide/local-education-rural-special-tax-acquisition-2026-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            지방교육세·농어촌특별세 계산법
          </Link>
          가이드를 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-at-by-count">
        <h2 id="guide-at-by-count" className="text-foreground text-xl font-semibold tracking-tight">
          주택 수·지역별 취득세율 비교
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              구분별 취득세율(참고)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비규제지역
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  조정대상지역
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1주택
                </th>
                <td className="border-border border-b px-3 py-2.5">1% ~ 3%</td>
                <td className="border-border border-b px-3 py-2.5">1% ~ 3%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2주택
                </th>
                <td className="border-border border-b px-3 py-2.5">1% ~ 3%</td>
                <td className="border-border border-b px-3 py-2.5">8%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3주택
                </th>
                <td className="border-border border-b px-3 py-2.5">8%</td>
                <td className="border-border border-b px-3 py-2.5">12%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  4주택 이상
                </th>
                <td className="border-border border-b px-3 py-2.5">12%</td>
                <td className="border-border border-b px-3 py-2.5">12%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  법인
                </th>
                <td className="px-3 py-2.5">12%</td>
                <td className="px-3 py-2.5">12%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-at-adjusted-areas">
        <h2 id="guide-at-adjusted-areas" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 4월 기준 조정대상지역 현황
        </h2>
        <p>
          2025년 10월 15일 부동산 대책으로 서울 25개 자치구 전역과 경기도 12개 지역(과천·광명·수원·성남·안양·용인·의왕·하남
          등)이 조정대상지역으로 지정되었습니다. 지방 광역시(부산·대구 등)와 세종시는 현재 조정대상지역에서 해제된
          상태입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              지역별 조정대상지역 해당 여부(요약)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  지역
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  조정대상지역 해당 여부
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  서울 25개 자치구 전역
                </th>
                <td className="border-border border-b px-3 py-2.5">해당</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  경기 과천·광명·성남·수원·안양·용인·의왕·하남 등 12개
                </th>
                <td className="border-border border-b px-3 py-2.5">해당</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  비수도권 광역시·지방
                </th>
                <td className="px-3 py-2.5">대부분 비해당</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          정확한 지정 현황은{" "}
          <a
            href="https://www.molit.go.kr"
            className="text-primary font-medium underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            국토교통부
          </a>{" "}
          공식 고시에서 확인해야 합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-at-payment-examples">
        <h2 id="guide-at-payment-examples" className="text-foreground text-xl font-semibold tracking-tight">
          취득세 실제 납부액 예시(1주택)
        </h2>
        <p className="text-muted-foreground text-sm">
          전용면적 85㎡ 이하, 1주택 취득 기준. 85㎡는 건축물대장상 전용면적이며 공급면적과 다릅니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              매매가별 취득세·지방교육세·합계
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  매매가
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득세율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  지방교육세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  합계
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">1%</td>
                <td className="border-border border-b px-3 py-2.5">300만 원</td>
                <td className="border-border border-b px-3 py-2.5">30만 원</td>
                <td className="border-border border-b px-3 py-2.5">330만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">1%</td>
                <td className="border-border border-b px-3 py-2.5">500만 원</td>
                <td className="border-border border-b px-3 py-2.5">50만 원</td>
                <td className="border-border border-b px-3 py-2.5">550만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  7억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">약 1.67%</td>
                <td className="border-border border-b px-3 py-2.5">약 1,167만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 117만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 1,284만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  9억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">3%</td>
                <td className="border-border border-b px-3 py-2.5">2,700만 원</td>
                <td className="border-border border-b px-3 py-2.5">270만 원</td>
                <td className="border-border border-b px-3 py-2.5">2,970만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  12억 원
                </th>
                <td className="px-3 py-2.5">3%</td>
                <td className="px-3 py-2.5">3,600만 원</td>
                <td className="px-3 py-2.5">360만 원</td>
                <td className="px-3 py-2.5">3,960만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>전용 85㎡ 초과 주택은 농어촌특별세 0.2%가 추가됩니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-at-two-home-compare">
        <h2 id="guide-at-two-home-compare" className="text-foreground text-xl font-semibold tracking-tight">
          2주택 취득세: 비조정 vs 조정대상지역 비교
        </h2>
        <p className="text-muted-foreground text-sm">
          전용 85㎡ 이하·농특세 제외. 비조정 지역 2주택은 가격 구간에 따라 1~3%가 적용됩니다(아래는 대표 1% 구간).
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              매매가별 취득세·지방교육세 합계
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  매매가
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비조정지역(대표 1% 구간)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  조정지역(8%)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  차이
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">330만 원</td>
                <td className="border-border border-b px-3 py-2.5">2,520만 원</td>
                <td className="border-border border-b px-3 py-2.5">2,190만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">550만 원</td>
                <td className="border-border border-b px-3 py-2.5">4,200만 원</td>
                <td className="border-border border-b px-3 py-2.5">3,650만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  7억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">약 1,284만 원</td>
                <td className="border-border border-b px-3 py-2.5">5,880만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 4,596만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  10억 원
                </th>
                <td className="px-3 py-2.5">3,300만 원</td>
                <td className="px-3 py-2.5">8,400만 원</td>
                <td className="px-3 py-2.5">5,100만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          조정대상지역 2주택·전용 85㎡ 초과 시 농특세 0.6%가 추가됩니다. 상세 기준은{" "}
          <Link
            href="/guide/second-home-acquisition-tax-surcharge-2026-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            2주택자 취득세 중과 기준
          </Link>
          가이드를 참고하세요.
        </p>

        <h3 className="text-foreground text-lg font-semibold tracking-tight">조정대상지역 2주택·85㎡ 초과 납부액</h3>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              조정대상지역 2주택·전용 85㎡ 초과 가정
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  매매가
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득세율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  지방교육세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  농특세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  합계
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">8%</td>
                <td className="border-border border-b px-3 py-2.5">4,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">200만 원</td>
                <td className="border-border border-b px-3 py-2.5">300만 원</td>
                <td className="border-border border-b px-3 py-2.5">4,500만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  10억 원
                </th>
                <td className="px-3 py-2.5">8%</td>
                <td className="px-3 py-2.5">8,000만 원</td>
                <td className="px-3 py-2.5">400만 원</td>
                <td className="px-3 py-2.5">600만 원</td>
                <td className="px-3 py-2.5">9,000만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-at-multi-home">
        <h2 id="guide-at-multi-home" className="text-foreground text-xl font-semibold tracking-tight">
          3주택 이상·법인 취득세 예시
        </h2>
        <p className="text-muted-foreground text-sm">전용 85㎡ 초과 가정. 법인 취득도 12% 중과세율이 적용됩니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              다주택·법인 납부액 예시(매매가 10억 원)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득세율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  지방교육세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  농특세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  합계
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3주택(비조정)
                </th>
                <td className="border-border border-b px-3 py-2.5">8%</td>
                <td className="border-border border-b px-3 py-2.5">8,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">400만 원</td>
                <td className="border-border border-b px-3 py-2.5">600만 원</td>
                <td className="border-border border-b px-3 py-2.5">9,000만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3주택(조정)
                </th>
                <td className="border-border border-b px-3 py-2.5">12%</td>
                <td className="border-border border-b px-3 py-2.5">1억 2,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">400만 원</td>
                <td className="border-border border-b px-3 py-2.5">1,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">1억 3,400만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  4주택 이상·법인
                </th>
                <td className="px-3 py-2.5">12%</td>
                <td className="px-3 py-2.5">1억 2,000만 원</td>
                <td className="px-3 py-2.5">400만 원</td>
                <td className="px-3 py-2.5">1,000만 원</td>
                <td className="px-3 py-2.5">1억 3,400만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-at-low-price">
        <h2 id="guide-at-low-price" className="text-foreground text-xl font-semibold tracking-tight">
          저가주택 중과 제외
        </h2>
        <p>
          2025년 1월 2일 이후 취득분부터, 일정 공시가격 이하 주택을 취득하면 보유 주택 수와 관계없이 중과가 제외되고
          기본세율(1~3%)이 적용됩니다. 주택 수 산정에서 제외되는 것과는 별도로, <strong>중과세율(8%·12%) 적용을
          피하는</strong> 제도입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              지역별 중과 제외 기준(2025.1.2 이후 취득)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  지역
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  중과 제외 기준
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  수도권
                </th>
                <td className="border-border border-b px-3 py-2.5">공시가격 1억 원 이하</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  비수도권(지방)
                </th>
                <td className="px-3 py-2.5">공시가격 2억 원 이하</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-at-relief-summary">
        <h2 id="guide-at-relief-summary" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 취득세 감면·특례 요약
        </h2>
        <p>
          2026년 1월 1일부터 지방세법·지방세특례제한법 개정으로 생애최초·출산양육·인구감소지역 등 감면 혜택이
          확대되었습니다. 감면은 자동 적용되지 않으므로 취득세 신고 시 별도 신청이 필요하며, 중복 적용은 불가합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              2026년 감면·특례 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  제도
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  혜택
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  적용 기한
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  생애최초 주택 구입
                </th>
                <td className="border-border border-b px-3 py-2.5">취득세 200만 원 한도 감면</td>
                <td className="border-border border-b px-3 py-2.5">2028년 12월 31일</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  생애최초(인구감소지역)
                </th>
                <td className="border-border border-b px-3 py-2.5">취득세 300만 원 한도 감면</td>
                <td className="border-border border-b px-3 py-2.5">2028년 12월 31일</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  출산·양육 주택 취득
                </th>
                <td className="border-border border-b px-3 py-2.5">취득세 500만 원 한도 감면</td>
                <td className="border-border border-b px-3 py-2.5">2028년 12월 31일</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  세컨드홈 특례(인구감소지역)
                </th>
                <td className="border-border border-b px-3 py-2.5">2주택 중과(8%) 대신 1~3% 적용</td>
                <td className="border-border border-b px-3 py-2.5">2026년 12월 31일 취득분</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  일시적 2주택
                </th>
                <td className="border-border border-b px-3 py-2.5">기존 주택 3년 내 처분 시 1~3% 적용</td>
                <td className="border-border border-b px-3 py-2.5">상시</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  지방 준공 후 미분양
                </th>
                <td className="px-3 py-2.5">취득세 50% 감면</td>
                <td className="px-3 py-2.5">2026년 12월 31일</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          세부 요건·신청 방법은{" "}
          <Link
            href="/guide/acquisition-tax-relief-programs-2026-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            취득세 세액공제·감면 제도 총정리
          </Link>
          ,{" "}
          <Link
            href="/guide/first-home-acquisition-tax-relief-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            생애최초 취득세 감면
          </Link>
          ,{" "}
          <Link
            href="/guide/second-home-acquisition-tax-exception-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            세컨드홈 취득세 특례
          </Link>
          ,{" "}
          <Link
            href="/guide/temporary-two-home-acquisition-tax-exception-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            일시적 2주택 취득세 특례
          </Link>
          가이드에서 확인할 수 있습니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-at-presale-timing">
        <h2 id="guide-at-presale-timing" className="text-foreground text-xl font-semibold tracking-tight">
          분양·신축 주택 취득 시점
        </h2>
        <p>
          신축 분양 아파트는 계약금·중도금 납부만으로는 취득세가 부과되지 않습니다. 보통{" "}
          <strong>잔금 지급·소유권 이전등기</strong> 시점에 취득으로 보아 한 번에 과세됩니다. 분양권·입주권은 취득
          유형·시점에 따라 주택 수에 포함될 수 있으므로, 잔금 전후 주택 보유 현황을 함께 확인하세요.{" "}
          <Link
            href="/guide/new-apartment-600-million-acquisition-tax-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            6억 신축 분양 아파트 취득세 계산
          </Link>
          가이드에서 시나리오별 금액을 확인할 수 있습니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-at-gift-inherit">
        <h2 id="guide-at-gift-inherit" className="text-foreground text-xl font-semibold tracking-tight">
          증여·상속 취득세율(참고)
        </h2>
        <p>
          유상 취득(매매)과 달리 증여·상속·원시취득은 별도 세율이 적용됩니다. 주택 증여는 3.5%, 상속·원시취득은 2.8%가
          대표값이며, 지방교육세·농특세가 추가됩니다. 상속 주택의 과세표준·공제는{" "}
          <Link
            href="/guide/inherited-housing-acquisition-tax-2026-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            상속 주택 취득세 계산 방법
          </Link>
          가이드를 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-at-house-count">
        <h2 id="guide-at-house-count" className="text-foreground text-xl font-semibold tracking-tight">
          주택 수 산정 시 주의사항
        </h2>
        <p>
          취득세는 계산이 아니라 분류에서 실수가 발생하는 경우가 많습니다. 분양권·입주권은 취득 시점과 유형에 따라 지방세법상 주택
          수에 포함될 수 있으므로 사전 확인이 필요합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              주택 수 포함·제외 항목(참고)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주택 수 포함 항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주택 수 제외 항목
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-border border-b px-3 py-2.5">아파트·빌라·단독주택</td>
                <td className="border-border border-b px-3 py-2.5">오피스텔(취득 시점 업무시설)</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">분양권(2020년 8월 이후 취득분)</td>
                <td className="border-border border-b px-3 py-2.5">공시가격 1억 원 이하 주택(일부 예외)</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">조합원 입주권</td>
                <td className="border-border border-b px-3 py-2.5">상속주택(일정 요건 충족 시)</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">배우자 보유 주택</td>
                <td className="border-border border-b px-3 py-2.5">지방 저가 주택(요건 충족 시)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          공시가격 1억 원 이하 주택은 주택 수 제외와{" "}
          <a href="#guide-at-low-price" className="text-primary font-medium underline-offset-4 hover:underline">
            저가주택 중과 제외
          </a>
          가 별도 제도입니다. 유형별 세율 차이는{" "}
          <Link
            href="/guide/apartment-villa-officetel-acquisition-tax-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            아파트 vs 빌라 vs 오피스텔 취득세 차이
          </Link>
          가이드도 함께 참고하세요.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-at-officetel">
        <h2 id="guide-at-officetel" className="text-foreground text-xl font-semibold tracking-tight">
          오피스텔 취득세: 업무시설(공부상) 분류 시
        </h2>
        <p>
          이 절에서는 취득 시점에 건축물대장 등 공부상 업무시설로 분류된 오피스텔을 기준으로 합니다. 이 경우 주택 수나 조정대상지역
          여부와 관계없이 4%의 고정 취득세율이 적용되며, 실제로 주거에 사용하더라도 과세는 취득 시점의 공부상 용도를 따릅니다.
        </p>
        <p>
          주택으로 보는 오피스텔(주거용 판정 등)이면 요건·취득 시점에 따라 위와 다른 취득세율이 적용될 수 있습니다. 주거용과
          업무용의 차이는{" "}
          <Link
            href="/guide/officetel-residential-vs-business-tax-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            오피스텔 취득세: 주거용 vs 업무용 차이
          </Link>{" "}
          가이드에서 정리했습니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-at-payment">
        <h2 id="guide-at-payment" className="text-foreground text-xl font-semibold tracking-tight">
          취득세 납부 방법과 기한
        </h2>
        <p>
          취득세는 잔금 지급일과 등기 접수일 중 빠른 날로부터 60일 이내에 납부해야 합니다. 위택스(wetax.go.kr) 온라인 신고 또는 관할
          시·군·구청 방문 신고가 가능합니다. 납부 기한을 초과하면 신고불성실가산세(20%)와 납부지연가산세(1일 0.022%)가 추가로
          부과됩니다. 가산세·경정청구 등 세부 내용은{" "}
          <Link
            href="/guide/acquisition-tax-deadline-and-penalty-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            취득세 납부 기한·가산세
          </Link>
          가이드를 참고하세요.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 취득세율과 조정대상지역 지정 현황은 정부 정책에 따라 수시로 변동됩니다. 정확한 세율과 지역 지정 현황은 위택스(wetax.go.kr) 및
          행정안전부에서 확인할 것을 권장합니다.
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
            <Link href="/acquisition-tax-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
              취득세 계산기
            </Link>
            — 매매가·주택 수·조정지역에 따른 납부액 시뮬레이션
          </li>
          <li>
            <Link
              href="/guide/second-home-acquisition-tax-surcharge-2026-guide"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              2주택자 취득세 중과 기준
            </Link>
          </li>
          <li>
            <Link
              href="/guide/local-education-rural-special-tax-acquisition-2026-guide"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              지방교육세·농어촌특별세 계산법
            </Link>
          </li>
          <li>
            <Link
              href="/guide/acquisition-tax-relief-programs-2026-guide"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              취득세 세액공제·감면 제도 총정리
            </Link>
          </li>
          <li>
            <Link
              href="/guide/second-home-acquisition-tax-exception-guide"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              세컨드홈 취득세 특례
            </Link>
          </li>
          <li>
            <Link
              href="/guide/acquisition-tax-deadline-and-penalty-guide"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              취득세 납부 기한·가산세
            </Link>
          </li>
          <li>
            <Link
              href="/guide/new-apartment-600-million-acquisition-tax-guide"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              6억 신축 분양 아파트 취득세 계산
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
