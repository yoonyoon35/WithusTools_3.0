import Link from "next/link";

export const auctionVsBrokeredSaleCostGuideMeta = {
  slug: "auction-vs-brokered-sale-cost-guide",
  title: "경매 낙찰가 5억·7억 비용, 일반 매매와 비교",
  description:
    "낙찰가 5억·7억 경매 주택은 취득세·등기비·입찰 보증금과 잔금 대출 가정까지 따지면 필요한 자기자금이 일반 매매와 달라집니다. 같은 가격 중개 매매와 중개수수료·잔금 일정·리스크를 표로 비교합니다. (2026년 11월 기준)",
  updated: "2026년 11월 4일",
} as const;

export function AuctionVsBrokeredSaleCostGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-avb-intro">
        <h2 id="guide-avb-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 11월 4일 기준
        </h2>
        <p>
          같은 주택을 같은 가격에 산다고 가정하면, <strong>취득세·등기비는 경매와 일반 매매가 동일</strong>합니다. 차이는
          주로 <strong>중개수수료 유무</strong>, <strong>잔금 준비 기간</strong>, <strong>권리·점유 리스크 대응 비용</strong>
          에서 납니다.{" "}
          <Link href="/guide/auction-home-purchase-guide" className="text-primary underline-offset-4 hover:underline">
            경매로 집 사는 방법
          </Link>
          허브의 비용 비교를 상세히 풀었습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-avb-500">
        <h2 id="guide-avb-500" className="text-foreground text-xl font-semibold tracking-tight">
          5억 원 기준 비용 비교
        </h2>
        <p className="text-muted-foreground text-sm">1주택·전용 85㎡ 이하, 중개 매매는 상한요율 적용</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              5억 원 — 경매 vs 중개 매매
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  경매(낙찰가 5억)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  일반 매매(5억)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득세·지방교육세
                </th>
                <td className="border-border border-b px-3 py-2.5">550만 원</td>
                <td className="border-border border-b px-3 py-2.5">550만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  등기·법무사
                </th>
                <td className="border-border border-b px-3 py-2.5">70~100만 원</td>
                <td className="border-border border-b px-3 py-2.5">70~100만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  중개수수료
                </th>
                <td className="border-border border-b px-3 py-2.5">0원</td>
                <td className="border-border border-b px-3 py-2.5">최대 200만 원(0.4%)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  입찰 보증금
                </th>
                <td className="border-border border-b px-3 py-2.5">5,000만 원(잔금 충당)</td>
                <td className="border-border border-b px-3 py-2.5">계약금(통상 10% 내외)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  잔금 준비 기간
                </th>
                <td className="border-border border-b px-3 py-2.5">낙찰 후 약 4~6주(매각허가 확정 후 1개월 이내 법원 지정 기한)</td>
                <td className="border-border border-b px-3 py-2.5">수주~수개월</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  부대비용 합계(참고)
                </th>
                <td className="px-3 py-2.5">약 635~665만 원</td>
                <td className="px-3 py-2.5">약 835~865만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          5억 기준 <strong>중개수수료만 약 200만 원</strong> 절감됩니다. 취득세 산출과 자금 계획은 아래에서 이어집니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-avb-700">
        <h2 id="guide-avb-700" className="text-foreground text-xl font-semibold tracking-tight">
          7억 원 기준 비용 비교
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              7억 원 — 경매 vs 중개 매매
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  경매(낙찰가 7억)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  일반 매매(7억)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득세·지방교육세
                </th>
                <td className="border-border border-b px-3 py-2.5">약 1,283만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 1,283만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  등기·법무사
                </th>
                <td className="border-border border-b px-3 py-2.5">90~130만 원</td>
                <td className="border-border border-b px-3 py-2.5">90~130만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  중개수수료
                </th>
                <td className="border-border border-b px-3 py-2.5">0원</td>
                <td className="border-border border-b px-3 py-2.5">최대 280만 원(0.4%)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  부대비용 합계(참고)
                </th>
                <td className="px-3 py-2.5">약 1,390~1,450만 원</td>
                <td className="px-3 py-2.5">약 1,670~1,730만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          7억은 중개수수료 절감분이 <strong>약 280만 원</strong>입니다.{" "}
          <Link href="/guide/brokerage-fee-rates-2026-guide" className="text-primary underline-offset-4 hover:underline">
            2026년 중개수수료 요율
          </Link>
          ·
          <Link href="/brokerage-fee-calculator" className="text-primary underline-offset-4 hover:underline">
            중개수수료 계산기
          </Link>
          로 매매가별 상한을 확인할 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-avb-tax">
        <h2 id="guide-avb-tax" className="text-foreground text-xl font-semibold tracking-tight">
          낙찰가 5억·7억 취득세 산출
        </h2>
        <p className="text-muted-foreground text-sm">
          무주택·1주택, 조정대상지역 중과·2주택 해당 없음 가정. 경매든 일반 매매든 취득가액이 같으면 세액도 같고, 취득 시점은
          대금을 모두 낸 날(잔금·등기)로 잡습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              낙찰가별 취득세·지방교육세
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  낙찰가
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
                  합계(85㎡ 이하)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  합계(85㎡ 초과)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">1%</td>
                <td className="border-border border-b px-3 py-2.5">500만 원</td>
                <td className="border-border border-b px-3 py-2.5">50만 원</td>
                <td className="border-border border-b px-3 py-2.5">550만 원</td>
                <td className="border-border border-b px-3 py-2.5">650만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  7억 원
                </th>
                <td className="px-3 py-2.5">약 1.67%</td>
                <td className="px-3 py-2.5">약 1,167만 원</td>
                <td className="px-3 py-2.5">약 117만 원</td>
                <td className="px-3 py-2.5">약 1,283만 원</td>
                <td className="px-3 py-2.5">약 1,423만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          85㎡ 초과 열은 농어촌특별세 0.2%를 더한 값입니다. 6억 초과~9억 이하 비례세율과 생애최초 감면은{" "}
          <Link href="/guide/new-construction-apartment-acquisition-tax-guide" className="text-primary underline-offset-4 hover:underline">
            신축 아파트 취득세
          </Link>
          ·
          <Link href="/guide/first-home-acquisition-tax-relief-guide" className="text-primary underline-offset-4 hover:underline">
            생애최초 취득세 감면
          </Link>
          을 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-avb-funds">
        <h2 id="guide-avb-funds" className="text-foreground text-xl font-semibold tracking-tight">
          낙찰가 5억·7억 입찰·잔금 자금 계획(대출 LTV 70% 가정)
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              경매 낙찰 총 자금 계획
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  낙찰가 5억
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  낙찰가 7억
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  입찰 보증금(낙찰가의 10%로 단순화)
                </th>
                <td className="border-border border-b px-3 py-2.5">5,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">7,000만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  경락잔금대출(LTV 70%)
                </th>
                <td className="border-border border-b px-3 py-2.5">3억 5,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">4억 9,000만 원(6억 한도 이내)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  잔금일 추가 자기자금(낙찰가 − 보증금 − 대출)
                </th>
                <td className="border-border border-b px-3 py-2.5">1억 원</td>
                <td className="border-border border-b px-3 py-2.5">1억 4,000만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  자기자금 합계(보증금 + 잔금 추가분)
                </th>
                <td className="border-border border-b px-3 py-2.5">1억 5,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">2억 1,000만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득세·등기·인지세 등 부대비용
                </th>
                <td className="border-border border-b px-3 py-2.5">약 635~665만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 1,390~1,450만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  입찰 전 확보 권장 자기자금
                </th>
                <td className="px-3 py-2.5">약 1억 5,640~5,670만 원</td>
                <td className="px-3 py-2.5">약 2억 2,390~2,450만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            입찰보증금은 원칙적으로 <strong>최저매각가격의 10%</strong>이고, 낙찰되면 매각대금에 충당됩니다. 위 표는 계산을
            단순화하려고 낙찰가의 10%로 놓았으며, 자기자금 합계는 어느 쪽이든 크게 달라지지 않습니다. 재매각 물건은 보증금이
            20~30%로 올라갑니다.
          </li>
          <li>
            LTV 70%는 가정입니다. 규제지역·DSR·6억 한도에 따라 대출액이 줄면 자기자금이 그만큼 늘어납니다.{" "}
            <Link href="/guide/auction-winning-bid-mortgage-loan-guide" className="text-primary underline-offset-4 hover:underline">
              경매 낙찰 후 주담대
            </Link>
            를 참고하세요.
          </li>
          <li>이사·수리·명도 비용은 포함하지 않았습니다.</li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-avb-hidden">
        <h2 id="guide-avb-hidden" className="text-foreground text-xl font-semibold tracking-tight">
          경매만의 추가·대체 비용
        </h2>
        <p>
          중개수수료가 없다고 해서 항상 총비용이 낮은 것은 아닙니다. 아래 비용·리스크는 일반 매매보다 경매에서 더
          부담될 수 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              경매 쪽에서 추가로 고려할 항목
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  설명
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  명도(퇴거) 비용
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  세입자·점유자가 있으면 협상비·소송·이사비 등(금액·기간 불확실)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  수리·철거
                </th>
                <td className="border-border border-b px-3 py-2.5">현장 상태에 따라 추가 공사비 발생 가능</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  권리분석·자문
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  복잡한 물건은 법무·세무 상담 비용(중개사 대신 본인 부담)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대출 취급 제한
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  경락잔금대출 미승인 시 자기자금 비중 상승 → 기회비용
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  낙찰가 프리미엄
                </th>
                <td className="px-3 py-2.5">
                  시세 대비 낮게 낙찰되면 절감, 높게 낙찰되면 중개수수료 절감분 상쇄
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-avb-loan">
        <h2 id="guide-avb-loan" className="text-foreground text-xl font-semibold tracking-tight">
          대출·자금 일정 차이
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              자금·대출 관점 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  경매
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  일반 매매
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주담대 종류
                </th>
                <td className="border-border border-b px-3 py-2.5">경락잔금대출(취급 은행 한정)</td>
                <td className="border-border border-b px-3 py-2.5">일반 주담대</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대출 신청 시점
                </th>
                <td className="border-border border-b px-3 py-2.5">입찰 전 상담 권장, 낙찰 후 즉시 신청</td>
                <td className="border-border border-b px-3 py-2.5">계약 후·잔금 3주 전부터 여유</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  LTV·DSR·6억 한도
                </th>
                <td className="border-border border-b px-3 py-2.5">동일 적용</td>
                <td className="border-border border-b px-3 py-2.5">동일 적용</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  실거주 의무
                </th>
                <td className="px-3 py-2.5">대출 시 6개월 내 전입(수도권·규제지역)</td>
                <td className="px-3 py-2.5">동일</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <Link href="/guide/auction-winning-bid-mortgage-loan-guide" className="text-primary underline-offset-4 hover:underline">
            경매 낙찰 후 주담대
          </Link>
          ·
          <Link href="/guide/mortgage-loan-application-documents" className="text-primary underline-offset-4 hover:underline">
            일반 주담대 신청 절차
          </Link>
          를 비교해 보세요.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-avb-summary">
        <h2 id="guide-avb-summary" className="text-foreground text-xl font-semibold tracking-tight">
          정리: 언제 경매가 유리해 보일까
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>같은 가격</strong>이면 취득세·등기비는 같고, <strong>중개수수료만큼</strong> 부대비용이 줄어듭니다.
          </li>
          <li>
            <strong>시세 대비 낮은 낙찰</strong>이면 매매 대비 총 취득비용이 더 낮아질 수 있습니다.
          </li>
          <li>
            <strong>임차인·권리 하자·짧은 잔금</strong>이 있으면 절감분보다 추가 비용·스트레스가 클 수 있습니다.
          </li>
          <li>
            <strong>대출 필요</strong>하면 입찰 전 경락잔금대출 가능 여부 확인이 필수입니다.
          </li>
        </ul>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="계산기 이동"
      >
        <p>
          <Link href="/brokerage-fee-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            중개수수료 계산기
          </Link>
          {" · "}
          <Link href="/acquisition-tax-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            취득세 계산기
          </Link>
          {" · "}
          <Link href="/guide/home-purchase-additional-costs-guide" className="text-primary font-medium underline-offset-4 hover:underline">
            주택 구입 부대비용
          </Link>
        </p>
      </aside>
    </>
  );
}
