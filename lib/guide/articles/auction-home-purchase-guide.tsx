import Link from "next/link";

export const auctionHomePurchaseGuideMeta = {
  slug: "auction-home-purchase-guide",
  title: "경매로 집 사는 방법 — 절차·비용·주의점",
  description:
    "2026년 7월 기준 법원경매·공매로 주택을 낙찰받는 전체 루트, 단계별 필요 자금·기간, 일반 매매와의 비용 차이, 입찰 전후 체크리스트와 관련 가이드·계산기 링크를 표로 정리했습니다.",
  updated: "2026년 7월 13일",
} as const;

export function AuctionHomePurchaseGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-ahp-overview">
        <h2 id="guide-ahp-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 기준
        </h2>
        <p>
          부동산 경매는 채무자·국가·공공기관 소유 주택 등이 법원·공매 플랫폼을 통해 공개 입찰로 매각되는 방식입니다. 일반 매매보다
          시세 대비 낮게 낙찰될 수 있지만, <strong>권리관계·점유·짧은 잔금 기한</strong> 등 리스크가 따릅니다. 이 글은 WithusTools
          관점에서 <strong>경매로 집을 사는 전체 루트</strong>와 <strong>단계별 자금·비용</strong>을 정리한 허브 가이드이며, 대출·
          세금·부대비용 세부 내용은 하단 관련 글로 이어집니다.
        </p>
      </section>

      <nav className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm" aria-label="목차">
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-ahp-route" className="text-primary underline-offset-4 hover:underline">
              전체 루트 한눈에
            </a>
          </li>
          <li>
            <a href="#guide-ahp-types" className="text-primary underline-offset-4 hover:underline">
              법원경매 vs 공매
            </a>
          </li>
          <li>
            <a href="#guide-ahp-steps" className="text-primary underline-offset-4 hover:underline">
              단계별 절차·기간
            </a>
          </li>
          <li>
            <a href="#guide-ahp-funds" className="text-primary underline-offset-4 hover:underline">
              단계별 필요 자금
            </a>
          </li>
          <li>
            <a href="#guide-ahp-vs-sale" className="text-primary underline-offset-4 hover:underline">
              일반 매매와 비용·일정 비교
            </a>
          </li>
          <li>
            <a href="#guide-ahp-pre-bid" className="text-primary underline-offset-4 hover:underline">
              입찰 전 체크리스트
            </a>
          </li>
          <li>
            <a href="#guide-ahp-post-bid" className="text-primary underline-offset-4 hover:underline">
              낙찰 후 체크리스트
            </a>
          </li>
          <li>
            <a href="#guide-ahp-related" className="text-primary underline-offset-4 hover:underline">
              관련 가이드·계산기
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-4" aria-labelledby="guide-ahp-route">
        <h2 id="guide-ahp-route" className="text-foreground text-xl font-semibold tracking-tight">
          전체 루트 한눈에
        </h2>
        <p>
          경매로 집을 사는 흐름은 크게 <strong>입찰 전 준비 → 입찰·낙찰 → 잔금·소유권 이전 → 입주·사후 정리</strong> 네
          구간으로 나눌 수 있습니다. 각 단계에서 확인할 항목과 필요 자금이 다릅니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              경매 주택 취득 루트(요약)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  단계
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주요 행동
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  핵심 확인
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1. 입찰 전
                </th>
                <td className="border-border border-b px-3 py-2.5">물건 검색, 권리분석, 자금·대출 상담</td>
                <td className="border-border border-b px-3 py-2.5">등기부·임차인·대출 한도·보증금</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2. 입찰·낙찰
                </th>
                <td className="border-border border-b px-3 py-2.5">보증금 예치, 입찰, 낙찰</td>
                <td className="border-border border-b px-3 py-2.5">입찰가 상한, 낙찰가·잔금 기한</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3. 잔금·등기
                </th>
                <td className="border-border border-b px-3 py-2.5">잔금 납부, 소유권 이전 등기</td>
                <td className="border-border border-b px-3 py-2.5">대출 실행, 법무사·등기비</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  4. 사후 정리
                </th>
                <td className="border-border border-b px-3 py-2.5">취득세 납부, 명도·입주, 전입</td>
                <td className="border-border border-b px-3 py-2.5">취득세 60일, 대출 시 6개월 전입</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  WithusTools 역할
                </th>
                <td className="px-3 py-2.5" colSpan={2}>
                  입찰 전·후 <strong>자금·대출·세금·부대비용</strong> 추산(참고용). 경매 중개·입찰 대행은 제공하지 않음
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ahp-types">
        <h2 id="guide-ahp-types" className="text-foreground text-xl font-semibold tracking-tight">
          법원경매 vs 공매
        </h2>
        <p>
          「경매로 집 사기」라고 하면 주로 <strong>법원경매</strong>(강제경매·임의경매)를 떠올리지만,{" "}
          <strong>공매</strong>(온비드·지자체·공공기관 매각)도 유사한 입찰 구조입니다. 자금·세금 관점의 큰 흐름은 비슷하고, 입찰
          플랫폼·보증금·잔금 규정이 다릅니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              법원경매와 공매 비교(참고)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  법원경매
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  공매(온비드 등)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주관
                </th>
                <td className="border-border border-b px-3 py-2.5">법원(대법원 경매정보)</td>
                <td className="border-border border-b px-3 py-2.5">공공기관·지자체·한국자산관리공사 등</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  물건
                </th>
                <td className="border-border border-b px-3 py-2.5">채권자 신청 등에 따른 부동산</td>
                <td className="border-border border-b px-3 py-2.5">국·공유지, 공공 매각 물건 등</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  입찰 보증금
                </th>
                <td className="border-border border-b px-3 py-2.5">통상 낙찰가의 10%(사건별 확인)</td>
                <td className="border-border border-b px-3 py-2.5">물건별 상이(공고문 확인)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  잔금 기한
                </th>
                <td className="border-border border-b px-3 py-2.5">통상 낙찰 후 7~10일 내외</td>
                <td className="border-border border-b px-3 py-2.5">공고·규정에 따름</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  취득세·대출
                </th>
                <td className="px-3 py-2.5">낙찰가 기준 취득세, 경락잔금대출 가능(조건부)</td>
                <td className="px-3 py-2.5">동일 원칙(낙찰가·규제 적용)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 입찰 방법·보증금 납부 계좌·유찰 시 재경매 등 세부 절차는 해당 사이트(대법원 경매정보, 온비드 등) 공고를
          확인하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ahp-steps">
        <h2 id="guide-ahp-steps" className="text-foreground text-xl font-semibold tracking-tight">
          단계별 절차·기간
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              법원경매 기준 단계별 일정(참고)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  순서
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  기간·시점
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  ①
                </th>
                <td className="border-border border-b px-3 py-2.5">매각물건명세서·등기부·현황조사 확인, 권리분석</td>
                <td className="border-border border-b px-3 py-2.5">입찰일 전(수일~수주)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  ②
                </th>
                <td className="border-border border-b px-3 py-2.5">대출 사전 상담, LTV·DSR 한도 확인</td>
                <td className="border-border border-b px-3 py-2.5">입찰 전 필수 권장</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  ③
                </th>
                <td className="border-border border-b px-3 py-2.5">입찰 보증금 납부·입찰</td>
                <td className="border-border border-b px-3 py-2.5">입찰일</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  ④
                </th>
                <td className="border-border border-b px-3 py-2.5">낙찰·매각허가결정(이의 유예 기간)</td>
                <td className="border-border border-b px-3 py-2.5">낙찰 후 수일~수주</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  ⑤
                </th>
                <td className="border-border border-b px-3 py-2.5">잔금 납부(대출 실행 포함), 소유권 이전 등기</td>
                <td className="border-border border-b px-3 py-2.5">낙찰 후 약 7~10일(사건별)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  ⑥
                </th>
                <td className="border-border border-b px-3 py-2.5">취득세 신고·납부</td>
                <td className="border-border border-b px-3 py-2.5">취득일(잔금·등기)부터 60일 이내</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  ⑦
                </th>
                <td className="border-border border-b px-3 py-2.5">명도(퇴거)·입주, 전입신고</td>
                <td className="border-border border-b px-3 py-2.5">점유 상태에 따라 수개월 소요 가능</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  ⑧
                </th>
                <td className="px-3 py-2.5">주담대 이용 시 실거주·전입 의무 이행</td>
                <td className="px-3 py-2.5">대출 실행 후 6개월 이내(수도권·규제지역)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          일반 매매는 계약 후 잔금까지 <strong>수주~수개월</strong> 여유가 있는 반면, 경매는 <strong>낙찰 직후 잔금</strong>이
          몰리는 구조입니다.{" "}
          <Link href="/guide/auction-winning-bid-mortgage-loan-guide" className="text-primary underline-offset-4 hover:underline">
            경매 낙찰 후 주담대(경락잔금대출)
          </Link>
          에서 대출·자금 일정을 자세히 다룹니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ahp-funds">
        <h2 id="guide-ahp-funds" className="text-foreground text-xl font-semibold tracking-tight">
          단계별 필요 자금
        </h2>
        <p className="text-muted-foreground text-sm">낙찰가 5억 원·입찰 보증금 10%·LTV 70% 대출 가정 예시</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              경매 취득 자금 흐름(참고)
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
                  예시 금액
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  입찰일
                </th>
                <td className="border-border border-b px-3 py-2.5">입찰 보증금(낙찰가 10%)</td>
                <td className="border-border border-b px-3 py-2.5">5,000만 원(낙찰 시 잔금에 충당)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  잔금일
                </th>
                <td className="border-border border-b px-3 py-2.5">잔금 중 자기자금(낙찰가 − 보증금 − 대출)</td>
                <td className="border-border border-b px-3 py-2.5">약 5,000만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  잔금일
                </th>
                <td className="border-border border-b px-3 py-2.5">경락잔금대출(LTV 70% 가정)</td>
                <td className="border-border border-b px-3 py-2.5">약 3억 5,000만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  등기 전후
                </th>
                <td className="border-border border-b px-3 py-2.5">취득세·등기비·법무사 비용</td>
                <td className="border-border border-b px-3 py-2.5">약 800~1,200만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  입찰 전 확보 권장
                </th>
                <td className="px-3 py-2.5">보증금 + 잔금 자기자금 + 부대비용</td>
                <td className="px-3 py-2.5">약 1.3~1.7억 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          취득세는 <strong>낙찰가(취득가액)</strong> 기준이며, 일반 매매와 동일한 세율·감면이 적용됩니다.{" "}
          <Link href="/guide/acquisition-tax-rates-2026-guide" className="text-primary underline-offset-4 hover:underline">
            2026년 취득세율
          </Link>
          과{" "}
          <Link href="/guide/home-purchase-additional-costs-guide" className="text-primary underline-offset-4 hover:underline">
            주택 구입 부대비용
          </Link>
          을 함께 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ahp-vs-sale">
        <h2 id="guide-ahp-vs-sale" className="text-foreground text-xl font-semibold tracking-tight">
          일반 매매와 비용·일정 비교
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              경매 vs 일반 매매(자금·비용 관점)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
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
                  매매가
                </th>
                <td className="border-border border-b px-3 py-2.5">낙찰가(시세 대비 낮을 수 있음)</td>
                <td className="border-border border-b px-3 py-2.5">협의·실거래가</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  중개수수료
                </th>
                <td className="border-border border-b px-3 py-2.5">없음</td>
                <td className="border-border border-b px-3 py-2.5">매매가 기준 상한요율(약 0.4~0.9%)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득세·등기비
                </th>
                <td className="border-border border-b px-3 py-2.5">낙찰가 기준, 원칙 동일</td>
                <td className="border-border border-b px-3 py-2.5">매매가 기준</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  잔금 준비 기간
                </th>
                <td className="border-border border-b px-3 py-2.5">짧음(약 7~10일)</td>
                <td className="border-border border-b px-3 py-2.5">상대적으로 길음</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  권리·점유 리스크
                </th>
                <td className="border-border border-b px-3 py-2.5">임차인·유치권·법정지상권 등 직접 확인</td>
                <td className="border-border border-b px-3 py-2.5">중개·확약보험 등 활용 가능</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  주담대
                </th>
                <td className="px-3 py-2.5">경락잔금대출(취급 은행 한정)</td>
                <td className="px-3 py-2.5">일반 주담대</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          중개수수료 절감분은{" "}
          <Link href="/guide/brokerage-fee-rates-2026-guide" className="text-primary underline-offset-4 hover:underline">
            2026년 중개수수료 요율
          </Link>
          로 매매가별 금액을 비교해 볼 수 있습니다. 경매는 중개수수료가 없지만, 명도·수리·권리 하자 대응 비용이 추가될 수
          있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ahp-pre-bid">
        <h2 id="guide-ahp-pre-bid" className="text-foreground text-xl font-semibold tracking-tight">
          입찰 전 체크리스트
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>등기부등본</strong> — 근저당·가압류·가등기·법정지상권·유치권 등
          </li>
          <li>
            <strong>임차인·점유</strong> — 전입세대·임대차계약·대항력·우선변제금(보증금) 규모
          </li>
          <li>
            <strong>매각물건명세서·현황조사</strong> — 점유 관계, 특이사항
          </li>
          <li>
            <strong>감정가·최저가</strong> — 입찰가 상한·LTV 역산
          </li>
          <li>
            <strong>자금</strong> — 보증금 + 잔금 자기자금 + 취득세·등기비 + (명도·수리 여유)
          </li>
          <li>
            <strong>대출</strong> — 경매 대출 취급 은행 사전 상담, DSR·6억 한도·다주택 여부
          </li>
          <li>
            <strong>입찰 실패 시</strong> — 보증금 반환 일정
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ahp-post-bid">
        <h2 id="guide-ahp-post-bid" className="text-foreground text-xl font-semibold tracking-tight">
          낙찰 후 체크리스트
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>잔금 납부 기한</strong> — 법원·공매 공고 확인, 대출 실행 일정 맞추기
          </li>
          <li>
            <strong>소유권 이전 등기</strong> — 법무사 선임, 등기비·국민주택채권
          </li>
          <li>
            <strong>취득세</strong> — 취득일(등기 접수일 등)부터 60일 이내 신고·납부
          </li>
          <li>
            <strong>명도</strong> — 세입자·점유자 퇴거 협의 또는 법적 절차(일정·비용 별도)
          </li>
          <li>
            <strong>전입·실거주</strong> — 주담대 이용 시 6개월 이내 전입 의무
          </li>
        </ul>
        <p className="text-muted-foreground text-sm">
          ※ 권리분석·명도는 법률 자문이 필요한 영역일 수 있습니다. 복잡한 물건은 전문가 상담을 권장합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ahp-related">
        <h2 id="guide-ahp-related" className="text-foreground text-xl font-semibold tracking-tight">
          관련 가이드·계산기
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              경매 주제 관련 글·도구
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  링크
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  경매 주담대
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <Link href="/guide/auction-winning-bid-mortgage-loan-guide" className="text-primary underline-offset-4 hover:underline">
                    경매 낙찰 후 주담대(경락잔금대출) 조건
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득세
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <Link href="/guide/acquisition-tax-rates-2026-guide" className="text-primary underline-offset-4 hover:underline">
                    2026년 취득세율
                  </Link>
                  ,{" "}
                  <Link href="/acquisition-tax-calculator" className="text-primary underline-offset-4 hover:underline">
                    취득세 계산기
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  부대비용
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <Link href="/guide/home-purchase-additional-costs-guide" className="text-primary underline-offset-4 hover:underline">
                    주택 구입 부대비용
                  </Link>
                  ,{" "}
                  <Link href="/guide/auction-vs-brokered-sale-cost-guide" className="text-primary underline-offset-4 hover:underline">
                    경매 vs 매매 비용
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  낙찰가별 비용
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <Link href="/guide/auction-500-million-total-cost-guide" className="text-primary underline-offset-4 hover:underline">
                    5억 낙찰
                  </Link>
                  ,{" "}
                  <Link href="/guide/auction-700-million-total-cost-guide" className="text-primary underline-offset-4 hover:underline">
                    7억 낙찰
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대출 한도
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <Link href="/ltv-calculator" className="text-primary underline-offset-4 hover:underline">
                    LTV 계산기
                  </Link>
                  ,{" "}
                  <Link href="/dsr-calculator" className="text-primary underline-offset-4 hover:underline">
                    DSR 계산기
                  </Link>
                  ,{" "}
                  <Link href="/guide/multi-homeowner-loan-regulations-guide" className="text-primary underline-offset-4 hover:underline">
                    다주택자 대출 규제
                  </Link>
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  중개수수료(비교)
                </th>
                <td className="px-3 py-2.5">
                  <Link href="/guide/auction-vs-brokered-sale-cost-guide" className="text-primary underline-offset-4 hover:underline">
                    경매 vs 매매 비용
                  </Link>
                  ,{" "}
                  <Link href="/guide/brokerage-fee-rates-2026-guide" className="text-primary underline-offset-4 hover:underline">
                    2026년 중개수수료 요율
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="참고 안내"
      >
        <p>
          WithusTools는 경매·대출 중개 서비스를 제공하지 않으며, 본 글과 계산기는 <strong>참고용</strong>입니다. 입찰·낙찰·
          권리관계는 대법원 경매정보·온비드 등 공식 공고와 금융기관·전문가 확인을 병행하세요.
        </p>
      </aside>
    </>
  );
}
