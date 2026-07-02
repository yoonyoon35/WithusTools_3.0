import Link from "next/link";

export const newApartment900MillionAcquisitionTaxGuideMeta = {
  slug: "new-apartment-900-million-acquisition-tax-guide",
  title: "9억 신축 분양 아파트 취득세 계산",
  description:
    "2026년 기준 분양가 9억 원 신축 아파트 취득세·지방교육세 합계 2,970만 원, 6억~9억 비례세율 상한(3%), 9억 1천 경계, 전용면적·2주택 시나리오를 표로 정리했습니다.",
  updated: "2026년 7월 2일",
} as const;

export function NewApartment900MillionAcquisitionTaxGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-na900-intro">
        <h2 id="guide-na900-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 기준
        </h2>
        <p>
          분양가 9억 원은 6억~9억 비례세율 구간의 <strong>상한(3%)</strong>에 해당합니다. 1주택·84㎡ 기준 합계{" "}
          <strong>2,970만 원</strong>입니다. 9억 1천만 원만 넘어도 3% 고정 구간으로 동일 세율이 유지됩니다.{" "}
          <Link href="/acquisition-tax-calculator" className="text-primary underline-offset-4 hover:underline">
            취득세 계산기
          </Link>
          로 확인하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-na900-base">
        <h2 id="guide-na900-base" className="text-foreground text-xl font-semibold tracking-tight">
          기본 계산(1주택·9억 원)
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              9억 원 취득세 산출
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
                <td className="border-border border-b px-3 py-2.5">3%</td>
                <td className="border-border border-b px-3 py-2.5">2,700만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  지방교육세
                </th>
                <td className="border-border border-b px-3 py-2.5">취득세의 10%</td>
                <td className="border-border border-b px-3 py-2.5">270만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  합계
                </th>
                <td className="px-3 py-2.5">3.3%</td>
                <td className="px-3 py-2.5">2,970만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-na900-boundary">
        <h2 id="guide-na900-boundary" className="text-foreground text-xl font-semibold tracking-tight">
          9억 vs 9억 1천(경계)
        </h2>
        <p>
          9억과 9억 1천 모두 취득세율 3%입니다. 9억 1천 합계는 약 3,003만 원으로 9억 대비 33만 원 차이에 그칩니다. 옵션
          포함 합계가 9억을 넘는지 계약서에서 먼저 확인하세요.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-na900-area">
        <h2 id="guide-na900-area" className="text-foreground text-xl font-semibold tracking-tight">
          전용 101㎡일 때
        </h2>
        <p>농특세 0.2%(180만 원) 추가 → 합계 <strong>3,150만 원</strong></p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
      >
        <p>
          <Link href="/guide/new-apartment-800-million-acquisition-tax-guide" className="text-primary font-medium underline-offset-4 hover:underline">
            8억 가이드
          </Link>
          {" · "}
          <Link href="/guide/new-apartment-1200-million-acquisition-tax-guide" className="text-primary font-medium underline-offset-4 hover:underline">
            12억 가이드
          </Link>
          {" · "}
          <Link href="/guide/new-construction-apartment-acquisition-tax-guide" className="text-primary font-medium underline-offset-4 hover:underline">
            신축 취득세 허브
          </Link>
        </p>
      </aside>
    </>
  );
}
