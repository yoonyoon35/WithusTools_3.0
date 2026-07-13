import Link from "next/link";

export const auction700MillionTotalCostGuideMeta = {
  slug: "auction-700-million-total-cost-guide",
  title: "경매 낙찰가 7억 주택 — 취득세·부대비용·자금",
  description:
    "2026년 7월 기준 경매 낙찰가 7억 원 주택의 취득세·등기비·입찰 보증금·잔금·대출 가정 시 필요 자기자금을 표로 정리했습니다. 6억~9억 비례세율 구간 적용 예시입니다.",
  updated: "2026년 7월 13일",
} as const;

export function Auction700MillionTotalCostGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-a700-intro">
        <h2 id="guide-a700-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 기준
        </h2>
        <p>
          낙찰가 7억 원은 1주택 기준 <strong>6억~9억 비례세율 구간</strong>에 해당합니다. 경매든 일반 매매든 취득가액이
          낙찰가·매매가로 동일하면 세액도 같습니다.{" "}
          <Link href="/guide/auction-home-purchase-guide" className="text-primary underline-offset-4 hover:underline">
            경매로 집 사는 방법
          </Link>
          의 낙찰가별 비용 시나리오입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-a700-tax">
        <h2 id="guide-a700-tax" className="text-foreground text-xl font-semibold tracking-tight">
          취득세(낙찰가 7억 원)
        </h2>
        <p className="text-muted-foreground text-sm">1주택·전용 84㎡(85㎡ 이하), 중과·2주택 해당 없음</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              7억 원 낙찰 취득세 산출
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
          세율·산출 방식은{" "}
          <Link href="/guide/new-apartment-700-million-acquisition-tax-guide" className="text-primary underline-offset-4 hover:underline">
            7억 신축 아파트 취득세
          </Link>
          와 동일합니다. 경매는 취득 시점이 잔금·등기일로 잡힙니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-a700-extra">
        <h2 id="guide-a700-extra" className="text-foreground text-xl font-semibold tracking-tight">
          등기·기타 부대비용
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              7억 원 낙찰 부대비용(경매)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  금액(참고)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비고
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득세·지방교육세
                </th>
                <td className="border-border border-b px-3 py-2.5">약 1,283만 원</td>
                <td className="border-border border-b px-3 py-2.5">등기 후 60일 이내</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  등기비·법무사
                </th>
                <td className="border-border border-b px-3 py-2.5">90~130만 원</td>
                <td className="border-border border-b px-3 py-2.5">국민주택채권·담보 설정 포함</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  인지세
                </th>
                <td className="border-border border-b px-3 py-2.5">약 15~35만 원</td>
                <td className="border-border border-b px-3 py-2.5">—</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  중개수수료
                </th>
                <td className="border-border border-b px-3 py-2.5">없음</td>
                <td className="border-border border-b px-3 py-2.5">일반 매매 대비 절감</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  부대비용 소계
                </th>
                <td className="px-3 py-2.5">약 1,390~1,450만 원</td>
                <td className="px-3 py-2.5">이사·수리·명도 제외</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-a700-funds">
        <h2 id="guide-a700-funds" className="text-foreground text-xl font-semibold tracking-tight">
          입찰·잔금 자금(대출 LTV 70%·한도 6억 가정)
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              7억 원 낙찰 총 자금 계획
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  시점
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  금액
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  입찰
                </th>
                <td className="border-border border-b px-3 py-2.5">보증금(10%)</td>
                <td className="border-border border-b px-3 py-2.5">7,000만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  잔금
                </th>
                <td className="border-border border-b px-3 py-2.5">경락잔금대출(70%, 6억 한도 이내)</td>
                <td className="border-border border-b px-3 py-2.5">4억 9,000만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  잔금
                </th>
                <td className="border-border border-b px-3 py-2.5">자기자금(잔금분)</td>
                <td className="border-border border-b px-3 py-2.5">약 1,400만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  등기 후
                </th>
                <td className="border-border border-b px-3 py-2.5">취득세·등기 등 부대비용</td>
                <td className="border-border border-b px-3 py-2.5">약 1,390~1,450만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  입찰 전 확보 권장
                </th>
                <td className="px-3 py-2.5">보증금 + 잔금 자기자금 + 부대비용</td>
                <td className="px-3 py-2.5">약 9,800만~1억 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          7억 낙찰·LTV 70%면 이론상 4.9억 대출이지만, DSR·감정가·6억 한도에 따라 실제 실행액은 달라질 수 있습니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
      >
        <p>
          <Link href="/acquisition-tax-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            취득세 계산기
          </Link>
          {" · "}
          <Link href="/guide/auction-500-million-total-cost-guide" className="text-primary font-medium underline-offset-4 hover:underline">
            5억 낙찰 비용
          </Link>
          {" · "}
          <Link href="/guide/auction-vs-brokered-sale-cost-guide" className="text-primary font-medium underline-offset-4 hover:underline">
            경매 vs 매매 비용
          </Link>
        </p>
      </aside>
    </>
  );
}
