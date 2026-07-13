import Link from "next/link";

export const auctionWinningBidMortgageLoanGuideMeta = {
  slug: "auction-winning-bid-mortgage-loan-guide",
  title: "경매 낙찰 후 주담대(경락잔금대출) 조건 정리",
  description:
    "2026년 7월 기준 경매 낙찰 후 경락잔금대출 가능 여부, 6억 한도·실거주 의무·다주택자 제한, LTV·DSR 적용, 입찰 전 자금 계획과 낙찰 후 일정을 표로 정리했습니다.",
  updated: "2026년 7월 13일",
} as const;

export function AuctionWinningBidMortgageLoanGuideBody() {
  return (
    <>
      <p>
        <Link href="/guide/auction-home-purchase-guide" className="text-primary underline-offset-4 hover:underline">
          경매로 집 사는 방법
        </Link>
        허브 가이드의 <strong>경락잔금대출·자금 일정</strong> 파트입니다. 법원 경매·공매로 낙찰받은 주택도{" "}
        <strong>주택담보대출(경락잔금대출)</strong>을 받을 수 있습니다. 다만 일반 매매와 달리{" "}
        <strong>낙찰 후 잔금 납부 기한이 짧고</strong>, 취급 은행이 제한적이며, 물건·권리 상태에 따라 대출이 거절될 수 있습니다. 이
        글은{" "}
        <Link href="/guide/mortgage-loan-application-documents" className="text-primary underline-offset-4 hover:underline">
          주담대 신청 절차
        </Link>
        와{" "}
        <Link href="/guide/ltv-dti-dsr-comparison" className="text-primary underline-offset-4 hover:underline">
          LTV·DSR 비교
        </Link>
        를 전제로, <strong>경매 낙찰 후 자금·대출 조건</strong>에 초점을 맞췄습니다.
      </p>

      <section className="space-y-3" aria-labelledby="guide-auction-overview">
        <h2 id="guide-auction-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 기준
        </h2>
        <p>
          2025년 6·27 부동산 대책 이후 경매 낙찰 후 주담대도 일반 매매와 동일하게 <strong>수도권·규제지역 6억 원 한도</strong>,{" "}
          <strong>6개월 이내 전입 의무</strong>, <strong>다주택자 대출 제한</strong>이 적용됩니다. 현금으로만 낙찰받는 경우에는
          실거주 의무가 붙지 않지만, 대출을 이용하면 실수요·실거주 목적에 한해 활용할 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-auction-what">
        <h2 id="guide-auction-what" className="text-foreground text-xl font-semibold tracking-tight">
          경락잔금대출이란
        </h2>
        <p>
          경락잔금대출은 법원 경매·공매에서 낙찰받은 주택의 <strong>잔금(낙찰가 − 입찰 보증금)</strong>을 마련하기 위한
          주택담보대출입니다. 일반 주담대와 심사 기준(LTV, DSR, 규제지역)은 대체로 같지만, 담보 평가·권리관계 확인·잔금
          일정이 경매 특성에 맞게 진행됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              일반 매매 주담대 vs 경락잔금대출
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  일반 매매
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  경매 낙찰
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대출 시점
                </th>
                <td className="border-border border-b px-3 py-2.5">매매계약 후·잔금 전</td>
                <td className="border-border border-b px-3 py-2.5">낙찰 후·잔금 납부 전</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  잔금 준비 기간
                </th>
                <td className="border-border border-b px-3 py-2.5">통상 수 주~수개월(계약 조건)</td>
                <td className="border-border border-b px-3 py-2.5">낙찰 후 약 7~10일(사건별 상이)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  담보 평가 기준
                </th>
                <td className="border-border border-b px-3 py-2.5">매매가·감정가 중 낮은 금액 등</td>
                <td className="border-border border-b px-3 py-2.5">낙찰가·감정가·은행 내부 기준</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취급 은행
                </th>
                <td className="border-border border-b px-3 py-2.5">대부분의 시중·저축은행</td>
                <td className="border-border border-b px-3 py-2.5">경매·경락 대출 취급 은행·금융사 한정</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  중개수수료
                </th>
                <td className="border-border border-b px-3 py-2.5">발생(매매가 기준)</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  LTV·DSR·6억 한도
                </th>
                <td className="px-3 py-2.5">적용</td>
                <td className="px-3 py-2.5">동일 적용(2025.6.27 이후)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-auction-regulation">
        <h2 id="guide-auction-regulation" className="text-foreground text-xl font-semibold tracking-tight">
          2025.6.27 이후 주요 규제(경매 포함)
        </h2>
        <p>
          수도권·규제지역 내 주택 구입 목적 주담대는 경매 낙찰도 예외 없이 아래 규제를 적용받습니다.{" "}
          <Link href="/guide/multi-homeowner-loan-regulations-guide" className="text-primary underline-offset-4 hover:underline">
            다주택자 대출 규제
          </Link>
          와 함께 확인하세요.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              경매 낙찰 후 주담대 핵심 규제
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대출 한도
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  수도권·규제지역 주택구입 목적 주담대(경락잔금대출 포함) <strong>최대 6억 원</strong>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  실거주 의무
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  대출 실행 후 <strong>6개월 이내 전입</strong>·실거주(위반 시 대출 회수·향후 제한 가능)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2주택 이상
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  수도권·규제지역 내 주택 구입 목적 신규 주담대 <strong>사실상 불가(LTV 0%)</strong>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1주택자
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>6개월 내 기존 주택 처분</strong> + 전입 조건 충족 시에만 대출 가능
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  생애최초 LTV
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  수도권·규제지역 생애최초 주담대 LTV <strong>80% → 70%</strong> 강화(2025.6.28~)
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  현금 낙찰
                </th>
                <td className="px-3 py-2.5">대출 미이용 시 전입 의무 없음(투자·임대 목적도 가능)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-auction-eligibility">
        <h2 id="guide-auction-eligibility" className="text-foreground text-xl font-semibold tracking-tight">
          차주별 대출 가능 여부(수도권·규제지역 기준)
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              주택 보유·대출 목적별 경락잔금대출
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  대출 가능 여부
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  참고 조건
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  무주택 실수요
                </th>
                <td className="border-border border-b px-3 py-2.5">가능</td>
                <td className="border-border border-b px-3 py-2.5">LTV·DSR·6억 한도, 6개월 내 전입</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  생애최초
                </th>
                <td className="border-border border-b px-3 py-2.5">가능(완화 일부)</td>
                <td className="border-border border-b px-3 py-2.5">
                  디딤돌·보금자리론 등 정책대출도 실거주·6억 한도 적용.{" "}
                  <Link href="/guide/first-time-homebuyer-benefits-2026" className="text-primary underline-offset-4 hover:underline">
                    생애최초 혜택
                  </Link>{" "}
                  참고
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1주택자(갈아타기)
                </th>
                <td className="border-border border-b px-3 py-2.5">조건부 가능</td>
                <td className="border-border border-b px-3 py-2.5">6개월 내 기존 주택 처분 + 전입</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2주택 이상
                </th>
                <td className="border-border border-b px-3 py-2.5">불가</td>
                <td className="border-border border-b px-3 py-2.5">현금 낙찰만 가능</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  투자·임대 목적
                </th>
                <td className="px-3 py-2.5">대출 이용 시 사실상 불가</td>
                <td className="px-3 py-2.5">전입 의무로 실거주 필요. 현금 낙찰은 별도</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-auction-ltv-dsr">
        <h2 id="guide-auction-ltv-dsr" className="text-foreground text-xl font-semibold tracking-tight">
          LTV·DSR 적용과 한도 산출
        </h2>
        <p>
          경락잔금대출도{" "}
          <abbr title="담보인정비율">LTV</abbr>와{" "}
          <abbr title="총부채원리금상환비율">DSR</abbr> 중 <strong>낮은 금액</strong>이 실제 한도가 됩니다. 낙찰가가 감정가보다
          높으면 LTV 기준 대출액이 줄어들어 <strong>자기자금 부담이 커질 수</strong> 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              한도 산출 시 확인 항목
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  경매에서의 적용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  LTV
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  규제지역 무주택 40%, 생애최초 70% 등. 담보 인정가 × LTV와 6억 한도 중 낮은 값
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  DSR
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  연소득 대비 원리금 상환 40% 상한.{" "}
                  <Link href="/guide/stress-dsr-explained" className="text-primary underline-offset-4 hover:underline">
                    스트레스 DSR
                  </Link>
                  적용 시 실질 한도 추가 축소
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  낙찰가 vs 감정가
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  낙찰가가 높을수록 LTV 기준 자기자금 비율 상승. 입찰 전 예상 한도 역산 필수
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  6억 한도
                </th>
                <td className="px-3 py-2.5">
                  LTV·DSR로 산출된 금액이 6억을 넘어도 <strong>6억까지만</strong> 실행(수도권·규제지역)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          한도 산출 예시는{" "}
          <Link href="/guide/dsr-40-mortgage-limit" className="text-primary underline-offset-4 hover:underline">
            DSR 40% 주담대 한도
          </Link>
          를 참고하세요. 경매는 잔금일이 촉박하므로 입찰 전{" "}
          <Link href="/dsr-calculator" className="text-primary underline-offset-4 hover:underline">
            DSR 계산기
          </Link>
          ·
          <Link href="/ltv-calculator" className="text-primary underline-offset-4 hover:underline">
            LTV 계산기
          </Link>
          로 대략적인 가능액을 먼저 확인하는 것이 좋습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-auction-timeline">
        <h2 id="guide-auction-timeline" className="text-foreground text-xl font-semibold tracking-tight">
          낙찰 후 자금·대출 일정(참고)
        </h2>
        <p>
          잔금 납부 기한은 사건마다 다르지만 통상 <strong>낙찰 후 7~10일</strong> 내외입니다. 일반 매매처럼 잔금 3주 전부터
          여유 있게 준비하기 어려우므로, <strong>입찰 전</strong>에 경매 대출 취급 은행과 사전 상담·가승인을 받는 것이
          안전합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              경매 낙찰 후 처리 순서
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  시점
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  할 일
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  입찰 전
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  권리분석, 대출 취급 은행 사전 상담, LTV·DSR 한도 확인, 보증금(통상 낙찰가 10%)·잔금·부대비용 자금 확보
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  낙찰 직후
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  매각허가결정기일·잔금 납부 기한 확인, 대출 신청·서류 제출, 감정 평가 진행
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  잔금일
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  대출 실행 + 자기자금으로 잔금 납부, 소유권 이전 등기
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  등기 후
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  취득세 신고·납부(60일 이내), 대출 받은 경우 6개월 내 전입
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  세입자 있는 물건
                </th>
                <td className="px-3 py-2.5">
                  명도(퇴거) 일정이 길어질 수 있어 대출·전입 계획과 별도로 임차인 권리 확인 필요
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-auction-funding">
        <h2 id="guide-auction-funding" className="text-foreground text-xl font-semibold tracking-tight">
          자금 계획 예시(무주택·대출 이용)
        </h2>
        <p className="text-muted-foreground text-sm">
          아래는 입찰 보증금 10%, 대출 한도 6억·LTV 70% 가정, 취득세·등기비는 대략적 추산치입니다. 실제 금액은 지역·주택 유형·
          감정가·감면 여부에 따라 달라집니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              낙찰가별 필요 자기자금(참고)
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
                  입찰 보증금(10%)
                </th>
                <td className="border-border border-b px-3 py-2.5">5,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">7,000만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대출 가능액(LTV 70% 가정)
                </th>
                <td className="border-border border-b px-3 py-2.5">약 3억 5,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 4억 9,000만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  잔금 중 자기자금
                </th>
                <td className="border-border border-b px-3 py-2.5">약 5,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 1억 3,000만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득세·등기비(추산)
                </th>
                <td className="border-border border-b px-3 py-2.5">약 800~1,200만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 1,200~1,800만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  입찰 전 확보 권장(합계)
                </th>
                <td className="px-3 py-2.5">약 1.3~1.7억 원</td>
                <td className="px-3 py-2.5">약 2.2~2.8억 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          취득세·등기·법무사 비용은{" "}
          <Link href="/guide/home-purchase-additional-costs-guide" className="text-primary underline-offset-4 hover:underline">
            주택 구입 부대비용
          </Link>
          과{" "}
          <Link href="/guide/acquisition-tax-rates-2026-guide" className="text-primary underline-offset-4 hover:underline">
            취득세율
          </Link>
          을 참고하세요. 경매는 <strong>중개수수료가 없어</strong> 일반 매매 대비 해당 비용은 절감됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-auction-reject">
        <h2 id="guide-auction-reject" className="text-foreground text-xl font-semibold tracking-tight">
          대출 거절·한도 부족이 잦은 사유
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>낙찰가 &gt; 감정가</strong> — LTV 기준 담보 인정액이 낙찰가보다 낮아 자기자금이 부족
          </li>
          <li>
            <strong>권리 하자</strong> — 법정지상권, 유치권, 대지권 미등기, 위반건축물 등은 은행별 대출 불가
          </li>
          <li>
            <strong>임차인·점유</strong> — 대항력 있는 세입자, 명도 불확실 시 심사 지연·거절
          </li>
          <li>
            <strong>DSR 초과</strong> — 기존 대출·할부가 많으면 6억·LTV 이내라도 실행 불가
          </li>
          <li>
            <strong>다주택·투자 목적</strong> — 2025.6.27 이후 규제지역에서 신규 주담대 제한
          </li>
          <li>
            <strong>잔금 기한 내 심사 미완</strong> — 낙찰 후 대출 신청만 하고 승인 전 잔금일 도래
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-auction-checklist">
        <h2 id="guide-auction-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          입찰 전 체크리스트
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              경매 입찰·대출 사전 확인
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  확인 항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  완료
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  등기부등본·권리분석(근저당·가압류·임차인)
                </th>
                <td className="border-border border-b px-3 py-2.5">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  경매 대출 취급 은행 사전 상담·가능 한도
                </th>
                <td className="border-border border-b px-3 py-2.5">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  LTV·DSR·6억 한도 역산
                </th>
                <td className="border-border border-b px-3 py-2.5">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  보증금(10%) + 잔금 자기자금 + 취득세·등기비
                </th>
                <td className="border-border border-b px-3 py-2.5">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  다주택·1주택 처분 조건 해당 여부
                </th>
                <td className="border-border border-b px-3 py-2.5">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대출 시 6개월 내 전입·실거주 가능 여부
                </th>
                <td className="border-border border-b px-3 py-2.5">□</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  낙찰 실패 시 보증금 반환 일정
                </th>
                <td className="px-3 py-2.5">□</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 본 글은 참고용이며, 대출 가능 여부·한도·금리는 금융기관·물건·차주 조건에 따라 달라집니다. 입찰 전 반드시 해당
          은행에 확인하세요. WithusTools는 경매·대출 중개 서비스를 제공하지 않습니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="계산기 이동"
      >
        <p>
          <Link href="/ltv-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            LTV 계산기
          </Link>
          와{" "}
          <Link href="/dsr-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            DSR 계산기
          </Link>
          로 낙찰가 기준 대략적인 대출 한도를 확인할 수 있습니다. 취득세는{" "}
          <Link href="/acquisition-tax-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            취득세 계산기
          </Link>
          를 참고하세요.
        </p>
      </aside>
    </>
  );
}
