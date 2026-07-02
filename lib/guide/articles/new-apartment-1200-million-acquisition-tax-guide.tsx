import Link from "next/link";

export const newApartment1200MillionAcquisitionTaxGuideMeta = {
  slug: "new-apartment-1200-million-acquisition-tax-guide",
  title: "12억 신축 분양 아파트 취득세 계산",
  description:
    "2026년 기준 분양가 12억 원 신축 아파트 취득세·지방교육세 합계 3,960만 원, 9억 초과 3% 고정 구간, 생애최초 감면 한도·2주택 중과 시나리오를 표로 정리했습니다.",
  updated: "2026년 7월 2일",
} as const;

export function NewApartment1200MillionAcquisitionTaxGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-na1200-intro">
        <h2 id="guide-na1200-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 기준
        </h2>
        <p>
          분양가 12억 원은 9억 초과 <strong>3% 고정 구간</strong>입니다. 1주택·84㎡ 기준 합계{" "}
          <strong>3,960만 원</strong>입니다. 생애최초 감면 한도(200만 원)는 12억에서도 동일하게 적용됩니다.{" "}
          <Link href="/acquisition-tax-calculator" className="text-primary underline-offset-4 hover:underline">
            취득세 계산기
          </Link>
          로 본인 조건을 확인하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-na1200-base">
        <h2 id="guide-na1200-base" className="text-foreground text-xl font-semibold tracking-tight">
          기본 계산(1주택·12억 원)
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              12억 원 취득세 산출
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
                <td className="border-border border-b px-3 py-2.5">3,600만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  지방교육세
                </th>
                <td className="border-border border-b px-3 py-2.5">취득세의 10%</td>
                <td className="border-border border-b px-3 py-2.5">360만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  합계
                </th>
                <td className="px-3 py-2.5">3.3%</td>
                <td className="px-3 py-2.5">3,960만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>9억(2,970만) 대비 990만 원, 6억(660만) 대비 3,300만 원 더 많습니다.</p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-na1200-relief">
        <h2 id="guide-na1200-relief" className="text-foreground text-xl font-semibold tracking-tight">
          생애최초 감면(12억 이하)
        </h2>
        <p>
          취득가 12억 이하면 생애최초 감면 신청이 가능합니다. 200만 원 한도 적용 시 합계 약 <strong>3,760만 원</strong>
          입니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-na1200-brokerage">
        <h2 id="guide-na1200-brokerage" className="text-foreground text-xl font-semibold tracking-tight">
          12억 매매 시 중개수수료(참고)
        </h2>
        <p>
          12억 아파트 매매 중개수수료 상한은 0.6%로 1인당 720만 원, 쌍방 합계 1,440만 원입니다.{" "}
          <Link href="/guide/apartment-brokerage-fee-guide" className="text-primary underline-offset-4 hover:underline">
            아파트 매매 중개수수료
          </Link>
          {" · "}
          <Link href="/brokerage-fee-calculator" className="text-primary underline-offset-4 hover:underline">
            계산기
          </Link>
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
        </p>
      </aside>
    </>
  );
}
