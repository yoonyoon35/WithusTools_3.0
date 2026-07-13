import Link from "next/link";

export const auction500MillionTotalCostGuideMeta = {
  slug: "auction-500-million-total-cost-guide",
  title: "경매 낙찰가 5억 주택 — 취득세·부대비용·자금",
  description:
    "2026년 7월 기준 경매 낙찰가 5억 원 주택의 취득세·등기비·입찰 보증금·잔금·대출 가정 시 필요 자기자금을 표로 정리했습니다. 일반 매매 5억과 비용 차이도 참고할 수 있습니다.",
  updated: "2026년 7월 13일",
} as const;

export function Auction500MillionTotalCostGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-a500-intro">
        <h2 id="guide-a500-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 기준
        </h2>
        <p>
          경매 취득세는 <strong>낙찰가(취득가액)</strong>를 기준으로 하며, 일반 매매와 세율·감면 원칙이 같습니다. 낙찰가 5억
          원·1주택·전용 85㎡ 이하 가정입니다.{" "}
          <Link href="/guide/auction-home-purchase-guide" className="text-primary underline-offset-4 hover:underline">
            경매로 집 사는 방법
          </Link>
          허브의 <strong>낙찰가별 비용</strong> 시나리오입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-a500-tax">
        <h2 id="guide-a500-tax" className="text-foreground text-xl font-semibold tracking-tight">
          취득세(낙찰가 5억 원)
        </h2>
        <p className="text-muted-foreground text-sm">무주택·1주택, 조정대상지역 중과·2주택 해당 없음, 전용 85㎡ 이하</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              5억 원 낙찰 취득세 산출
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
                <td className="border-border border-b px-3 py-2.5">1%</td>
                <td className="border-border border-b px-3 py-2.5">500만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  지방교육세
                </th>
                <td className="border-border border-b px-3 py-2.5">취득세의 10%</td>
                <td className="border-border border-b px-3 py-2.5">50만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  합계
                </th>
                <td className="px-3 py-2.5">1.1%</td>
                <td className="px-3 py-2.5">550만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          전용 85㎡ 초과 시 농어촌특별세 0.2%(100만 원)가 추가되어 합계 약 <strong>650만 원</strong>입니다. 생애최초 감면은{" "}
          <Link href="/guide/first-home-acquisition-tax-relief-guide" className="text-primary underline-offset-4 hover:underline">
            생애최초 취득세 감면
          </Link>
          을 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-a500-extra">
        <h2 id="guide-a500-extra" className="text-foreground text-xl font-semibold tracking-tight">
          등기·기타 부대비용
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              5억 원 낙찰 부대비용(경매)
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
                <td className="border-border border-b px-3 py-2.5">550만 원</td>
                <td className="border-border border-b px-3 py-2.5">잔금·등기 후 60일 이내</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  등기비·법무사
                </th>
                <td className="border-border border-b px-3 py-2.5">70~100만 원</td>
                <td className="border-border border-b px-3 py-2.5">국민주택채권 포함</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  인지세
                </th>
                <td className="border-border border-b px-3 py-2.5">약 15만 원</td>
                <td className="border-border border-b px-3 py-2.5">—</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  중개수수료
                </th>
                <td className="border-border border-b px-3 py-2.5">없음</td>
                <td className="border-border border-b px-3 py-2.5">경매 특성</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  부대비용 소계
                </th>
                <td className="px-3 py-2.5">약 635~665만 원</td>
                <td className="px-3 py-2.5">이사·수리·명도 제외</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-a500-funds">
        <h2 id="guide-a500-funds" className="text-foreground text-xl font-semibold tracking-tight">
          입찰·잔금 자금(대출 LTV 70% 가정)
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              5억 원 낙찰 총 자금 계획
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
                <td className="border-border border-b px-3 py-2.5">5,000만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  잔금
                </th>
                <td className="border-border border-b px-3 py-2.5">경락잔금대출(70%)</td>
                <td className="border-border border-b px-3 py-2.5">3억 5,000만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  잔금
                </th>
                <td className="border-border border-b px-3 py-2.5">자기자금(잔금분)</td>
                <td className="border-border border-b px-3 py-2.5">0원(보증금 충당)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  등기 후
                </th>
                <td className="border-border border-b px-3 py-2.5">취득세·등기 등 부대비용</td>
                <td className="border-border border-b px-3 py-2.5">약 635~665만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  입찰 전 확보 권장
                </th>
                <td className="px-3 py-2.5">보증금 + 부대비용 + (LTV 부족분)</td>
                <td className="px-3 py-2.5">약 5,600~5,700만 원 이상</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          LTV·DSR·6억 한도에 따라 대출액이 줄면 자기자금이 늘어납니다.{" "}
          <Link href="/guide/auction-winning-bid-mortgage-loan-guide" className="text-primary underline-offset-4 hover:underline">
            경매 낙찰 후 주담대
          </Link>
          를 참고하세요.
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
          <Link href="/guide/auction-700-million-total-cost-guide" className="text-primary font-medium underline-offset-4 hover:underline">
            7억 낙찰 비용
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
