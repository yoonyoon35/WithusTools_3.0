import Link from "next/link";

export const apartment1000MillionBrokerageFeeGuideMeta = {
  slug: "apartment-1000-million-brokerage-fee-guide",
  title: "10억 아파트 매매 중개수수료",
  description:
    "2026년 기준 10억 아파트 매매 중개수수료 상한 0.5%, 1인당 500만 원·쌍방 1,000만 원, 9억·12억 구간 경계, VAT·소득공제. 중개수수료 계산기로 바로 확인할 수 있습니다.",
  updated: "2026년 7월 2일",
} as const;

export function Apartment1000MillionBrokerageFeeGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-ab1000-intro">
        <h2 id="guide-ab1000-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 기준
        </h2>
        <p>
          10억 아파트 매매 중개수수료는 9억~12억 구간 <strong>0.5% 상한요율</strong>이 적용됩니다. 매도인·매수인 각각{" "}
          <strong>500만 원</strong>, 쌍방 합계 <strong>1,000만 원</strong>이 상한입니다.{" "}
          <Link href="/brokerage-fee-calculator" className="text-primary underline-offset-4 hover:underline">
            중개수수료 계산기
          </Link>
          에 10억을 입력하면 바로 확인할 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ab1000-table">
        <h2 id="guide-ab1000-table" className="text-foreground text-xl font-semibold tracking-tight">
          10억 원 수수료 산출
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              10억 아파트 매매 중개수수료
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  요율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  금액
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1인당(매도·매수 각각)
                </th>
                <td className="border-border border-b px-3 py-2.5">0.5%</td>
                <td className="border-border border-b px-3 py-2.5">500만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  쌍방 합계
                </th>
                <td className="px-3 py-2.5">0.5% × 2</td>
                <td className="px-3 py-2.5">1,000만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ab1000-compare">
        <h2 id="guide-ab1000-compare" className="text-foreground text-xl font-semibold tracking-tight">
          9억·10억·12억 비교(1인당)
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  매매가
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  요율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  1인당
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  9억(0.4% 구간)
                </th>
                <td className="border-border border-b px-3 py-2.5">0.4%</td>
                <td className="border-border border-b px-3 py-2.5">360만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  10억
                </th>
                <td className="border-border border-b px-3 py-2.5">0.5%</td>
                <td className="border-border border-b px-3 py-2.5">500만 원</td>
              </tr>
              <tr>
                <th scope="row" className="px-3 py-2.5 font-medium">
                  12억
                </th>
                <td className="px-3 py-2.5">0.6%</td>
                <td className="px-3 py-2.5">720만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          8억 9,999만(360만) vs 9억(450만)처럼 9억 경계에서 1인당 90만 원이 한 번에 늘어납니다.{" "}
          <Link href="/guide/apartment-brokerage-fee-guide" className="text-primary underline-offset-4 hover:underline">
            아파트 매매 중개수수료
          </Link>
          가이드에서 구간별 표를 더 볼 수 있습니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-ab1000-extra">
        <h2 id="guide-ab1000-extra" className="text-foreground text-xl font-semibold tracking-tight">
          VAT·소득공제
        </h2>
        <p>
          중개수수료에 부가세 10%가 별도로 붙을 수 있습니다. 연말정산 시{" "}
          <Link href="/guide/brokerage-fee-income-deduction-guide" className="text-primary underline-offset-4 hover:underline">
            중개수수료 소득공제
          </Link>
          (30%, 연 200만 원 한도)도 확인하세요.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
      >
        <p>
          <Link href="/brokerage-fee-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            → 중개수수료 계산기에서 10억 매매가를 입력해 확인하세요.
          </Link>
        </p>
      </aside>
    </>
  );
}
