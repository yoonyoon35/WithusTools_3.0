import Link from "next/link";

export const newApartment800MillionAcquisitionTaxGuideMeta = {
  slug: "new-apartment-800-million-acquisition-tax-guide",
  title: "8억 주택·신축 아파트 취득세는 얼마나",
  description:
    "8억 주택구입시 취득세는 얼마나? 2026년 기준 분양가 8억 원 신축 아파트 취득세·지방교육세 합계 약 2,053만 원, 6억~9억 비례세율, 생애최초·2주택 시나리오를 표로 정리했습니다.",
  updated: "2026년 7월 2일",
} as const;

export function NewApartment800MillionAcquisitionTaxGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-na800-intro">
        <h2 id="guide-na800-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 기준
        </h2>
        <p>
          8억 주택구입시 취득세는 1주택·전용 84㎡ 기준 약 <strong>2,053만 원</strong>(취득세+지방교육세)입니다. 신축
          분양 아파트도 잔금·등기 시점에 동일하게 부과됩니다.{" "}
          <Link href="/acquisition-tax-calculator" className="text-primary underline-offset-4 hover:underline">
            취득세 계산기
          </Link>
          에 8억 원을 입력하면 본인 조건에 맞는 금액을 바로 확인할 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-na800-base">
        <h2 id="guide-na800-base" className="text-foreground text-xl font-semibold tracking-tight">
          기본 계산(1주택·8억 원)
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              8억 원 취득세 산출
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  세율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  금액
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득세
                </th>
                <td className="border-border border-b px-3 py-2.5">약 2.33%</td>
                <td className="border-border border-b px-3 py-2.5">약 1,867만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  지방교육세
                </th>
                <td className="border-border border-b px-3 py-2.5">취득세의 10%</td>
                <td className="border-border border-b px-3 py-2.5">약 187만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  합계
                </th>
                <td className="px-3 py-2.5">약 2.57%</td>
                <td className="px-3 py-2.5">약 2,053만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          6억(660만) 대비 약 1,393만 원, 7억(1,283만) 대비 약 770만 원 더 많습니다. 9억(2,970만)에 가까워질수록
          세율이 3%에 수렴합니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-na800-compare">
        <h2 id="guide-na800-compare" className="text-foreground text-xl font-semibold tracking-tight">
          금액별 비교(1주택·84㎡)
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  분양가
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  합계
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  6억
                </th>
                <td className="border-border border-b px-3 py-2.5">660만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  7억
                </th>
                <td className="border-border border-b px-3 py-2.5">약 1,283만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  8억
                </th>
                <td className="border-border border-b px-3 py-2.5">약 2,053만 원</td>
              </tr>
              <tr>
                <th scope="row" className="px-3 py-2.5 font-medium">
                  9억
                </th>
                <td className="px-3 py-2.5">2,970만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-na800-twohome">
        <h2 id="guide-na800-twohome" className="text-foreground text-xl font-semibold tracking-tight">
          2주택·조정지역일 때
        </h2>
        <p>
          기존 주택 처분 전 잔금·등기를 하면 8% 중과가 적용되어 합계 약 <strong>6,720만 원</strong> 수준입니다.{" "}
          <Link href="/guide/temporary-two-home-acquisition-tax-exception-guide" className="text-primary underline-offset-4 hover:underline">
            일시적 2주택
          </Link>
          요건 검토가 필요합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
      >
        <p>
          <Link href="/guide/new-construction-apartment-acquisition-tax-guide" className="text-primary font-medium underline-offset-4 hover:underline">
            → 신축 아파트 취득세 계산 허브
          </Link>
          {" · "}
          <Link href="/guide/new-apartment-700-million-acquisition-tax-guide" className="text-primary font-medium underline-offset-4 hover:underline">
            7억
          </Link>
          {" · "}
          <Link href="/guide/new-apartment-900-million-acquisition-tax-guide" className="text-primary font-medium underline-offset-4 hover:underline">
            9억
          </Link>
        </p>
      </aside>
    </>
  );
}
