import Link from "next/link";

export const newApartment700MillionAcquisitionTaxGuideMeta = {
  slug: "new-apartment-700-million-acquisition-tax-guide",
  title: "7억 신축 분양 아파트 취득세 계산",
  description:
    "2026년 7월 기준 분양가 7억 원 신축 아파트 취득세·지방교육세 합계 약 1,283만 원, 6억~9억 비례세율 구간, 전용면적·생애최초 감면 시나리오를 표로 정리했습니다.",
  updated: "2026년 7월 2일",
} as const;

export function NewApartment700MillionAcquisitionTaxGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-na700-intro">
        <h2 id="guide-na700-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 기준
        </h2>
        <p>
          분양가 7억 원 신축 아파트는 6억~9억 <strong>비례세율 구간</strong>에 해당합니다. 1주택·전용 84㎡ 기준 합계는
          약 <strong>1,283만 원</strong>입니다.{" "}
          <Link href="/acquisition-tax-calculator" className="text-primary underline-offset-4 hover:underline">
            취득세 계산기
          </Link>
          로 본인 조건을 넣고, 이 글에서는 7억 원에서 금액이 갈리는 지점을 짚습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-na700-base">
        <h2 id="guide-na700-base" className="text-foreground text-xl font-semibold tracking-tight">
          기본 계산(1주택·분양가 7억 원)
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              7억 원 신축 분양 취득세 산출
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
                <td className="border-border border-b px-3 py-2.5">약 1.67%</td>
                <td className="border-border border-b px-3 py-2.5">약 1,167만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  지방교육세
                </th>
                <td className="border-border border-b px-3 py-2.5">취득세의 10%</td>
                <td className="border-border border-b px-3 py-2.5">약 117만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  합계
                </th>
                <td className="px-3 py-2.5">약 1.83%</td>
                <td className="px-3 py-2.5">약 1,283만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          6억(660만)보다 약 623만 원 많습니다. 8억은 약 2,053만 원이므로, 1억 올릴 때마다 세액이 크게 늘어납니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-na700-area">
        <h2 id="guide-na700-area" className="text-foreground text-xl font-semibold tracking-tight">
          전용 101㎡(85㎡ 초과)일 때
        </h2>
        <p>농어촌특별세 0.2%(140만 원)가 추가되어 합계 약 <strong>1,423만 원</strong>입니다.</p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-na700-relief">
        <h2 id="guide-na700-relief" className="text-foreground text-xl font-semibold tracking-tight">
          생애최초 감면 시
        </h2>
        <p>
          취득세 200만 원 한도 감면을 신청하면 합계 약 <strong>1,083만 원</strong> 수준입니다.{" "}
          <Link href="/guide/first-home-acquisition-tax-relief-guide" className="text-primary underline-offset-4 hover:underline">
            생애최초 취득세 감면
          </Link>
          가이드를 참고하세요.
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
          <Link href="/guide/new-apartment-800-million-acquisition-tax-guide" className="text-primary font-medium underline-offset-4 hover:underline">
            8억 가이드
          </Link>
        </p>
      </aside>
    </>
  );
}
