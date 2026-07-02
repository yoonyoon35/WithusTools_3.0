import Link from "next/link";

export const onlineDirectTradePlatformPrecautions2026GuideMeta = {
  slug: "online-direct-trade-platform-precautions-2026-guide",
  title: "온라인 직거래 플랫폼 이용 시 주의사항",
  description:
    "2026년 4월 기준 직거래 플랫폼 통계·피해 유형, 플랫폼별 특징, 계약 전 확인·입금·전세·규제·피해 대응·안전 체크리스트를 표로 정리했습니다.",
  updated: "2026년 5월 11일",
} as const;

export function OnlineDirectTradePlatformPrecautions2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-odtp-intro">
        <h2 id="guide-odtp-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 4월 기준
        </h2>
        <p>
          당근마켓 등 직거래 플랫폼을 통한 부동산 거래 건수는 2022년 7,094건에서 2024년 5만 9,451건으로 3년 만에 급증했습니다.
          중개수수료를 절감할 수 있다는 장점 때문입니다. 그러나 온라인 직거래의 피해 경험률은 중개거래보다 2.2배 높은 것으로
          나타났습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-odtp-damage">
        <h2 id="guide-odtp-damage" className="text-foreground text-xl font-semibold tracking-tight">
          주요 피해 유형
        </h2>
        <p>
          온라인 직거래 과정에서 발생하는 주요 피해 유형으로는 허위 매물 유포가 22.1%로 가장 많았고, 연락 두절(15.2%), 신분 위장 및
          문서 위조(15.2%), 하자 매물(12.3%), 계약금 및 전세금 사기(10.3%) 순입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              피해 유형별 비중(예시 조사)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  피해 유형
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비율
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  허위 매물 유포
                </th>
                <td className="border-border border-b px-3 py-2.5">22.1%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  연락 두절
                </th>
                <td className="border-border border-b px-3 py-2.5">15.2%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  신분 위장·문서 위조
                </th>
                <td className="border-border border-b px-3 py-2.5">15.2%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  하자 매물
                </th>
                <td className="border-border border-b px-3 py-2.5">12.3%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  계약금·전세금 사기
                </th>
                <td className="px-3 py-2.5">10.3%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          그 외 계약 내용 불이행·개인정보 악용 등 다른 유형도 함께 보고되는 경우가 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-odtp-platforms">
        <h2 id="guide-odtp-platforms" className="text-foreground text-xl font-semibold tracking-tight">
          플랫폼별 주요 특징
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              대표 직거래 채널 특징·주의
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  플랫폼
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  특징
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주의사항
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  당근마켓
                </th>
                <td className="border-border border-b px-3 py-2.5">집주인 인증 기능 제공</td>
                <td className="border-border border-b px-3 py-2.5">
                  광고 게시자와 등본상 소유자 일치 여부·「집주인 인증」 확인 필수
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  피터팬의 좋은방 구하기
                </th>
                <td className="border-border border-b px-3 py-2.5">임대차 위주 직거래</td>
                <td className="border-border border-b px-3 py-2.5">무자격자 광고 혼재 가능</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  네이버 카페
                </th>
                <td className="px-3 py-2.5">지역 커뮤니티 기반</td>
                <td className="px-3 py-2.5">허위 매물 검증 절차 없음</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          주요 직거래 플랫폼에서 공인중개사법 위반 의심 광고 비율이 20%를 초과한다는 조사 결과가 있습니다. 플랫폼이 거래 안전을
          보장하지 않으므로 이용자가 직접 확인해야 합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-odtp-checklist">
        <h2 id="guide-odtp-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          계약 전 필수 확인 사항
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              확인 항목·방법·비용
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  확인 항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  확인 방법
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  실제 소유자 확인
                </th>
                <td className="border-border border-b px-3 py-2.5">등기부등본 소유자와 신분증 대조</td>
                <td className="border-border border-b px-3 py-2.5">무료</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  등기부등본
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  대법원 인터넷등기소(
                  <a
                    href="https://www.iros.go.kr"
                    className="text-primary underline-offset-4 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    iros.go.kr
                  </a>
                  )
                </td>
                <td className="border-border border-b px-3 py-2.5">700원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  근저당·가압류 여부
                </th>
                <td className="border-border border-b px-3 py-2.5">등기부등본 을구 확인</td>
                <td className="border-border border-b px-3 py-2.5">700원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  건축물대장
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  정부24(
                  <a href="https://www.gov.kr" className="text-primary underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">
                    gov.kr
                  </a>
                  )
                </td>
                <td className="border-border border-b px-3 py-2.5">무료</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  전입세대 열람
                </th>
                <td className="border-border border-b px-3 py-2.5">주민센터 방문(임대인 동의 필요)</td>
                <td className="border-border border-b px-3 py-2.5">무료</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  국세·지방세 체납
                </th>
                <td className="border-border border-b px-3 py-2.5">임대인에게 납세증명서 요청</td>
                <td className="border-border border-b px-3 py-2.5">무료</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  주민등록증 진위 확인
                </th>
                <td className="px-3 py-2.5">정부24 주민등록증 진위확인 서비스</td>
                <td className="px-3 py-2.5">무료</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-odtp-agent">
        <h2 id="guide-odtp-agent" className="text-foreground text-xl font-semibold tracking-tight">
          대리인 통한 거래 시 추가 확인
        </h2>
        <p>
          매도인이 당사자가 아닌 대리인을 통한 거래의 경우 공증된 위임장과 인감증명서를 더욱 철저히 검토해야 합니다. 인감증명서는
          반드시 원본을 확인하고, 위임 범위가 해당 거래에 명확히 포함되어 있는지 확인해야 합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-odtp-payment">
        <h2 id="guide-odtp-payment" className="text-foreground text-xl font-semibold tracking-tight">
          계약금·잔금 입금 시 주의사항
        </h2>
        <p>
          계약금과 중도금, 잔금을 입금할 때는 반드시 등기상 소유자 명의의 계좌로 직접 이체해야 합니다. 잔금 지급과 소유권 이전
          등기는 동시에 진행해야 하며, 잔금을 먼저 지급하고 등기를 나중에 하면 분쟁이 발생할 수 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              입금·일정 관련 주의
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주의사항
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  계약금 입금 계좌
                </th>
                <td className="border-border border-b px-3 py-2.5">등기부등본상 소유자 명의 계좌인지 확인</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  잔금 지급 시기
                </th>
                <td className="border-border border-b px-3 py-2.5">소유권 이전 등기와 동시 진행</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  계좌 변경 요청
                </th>
                <td className="border-border border-b px-3 py-2.5">사기 가능성 높음·절대 응하지 않음</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  현금 거래 요구
                </th>
                <td className="px-3 py-2.5">거부·계좌이체만 허용</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-odtp-jeonse">
        <h2 id="guide-odtp-jeonse" className="text-foreground text-xl font-semibold tracking-tight">
          전세 직거래 시 추가 주의사항
        </h2>
        <p>
          전세 직거래의 경우 전세보증보험에 가입할 수 없는 경우가 발생할 수 있습니다. 보증보험 가입 가능 여부를 계약 전 반드시
          확인해야 합니다. 근저당 설정액과 선순위 임차인 보증금 합계가 주택 시세의 80~90%를 초과하면 보증보험 가입이 거절됩니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-odtp-regulation">
        <h2 id="guide-odtp-regulation" className="text-foreground text-xl font-semibold tracking-tight">
          직거래 플랫폼 규제 현황
        </h2>
        <p>
          플랫폼 사업자에게 소유자 확인 의무와 과태료 부과가 도입될 전망입니다. 현재는 플랫폼이 허위 매물에 대한 법적 책임을 지지
          않으므로 피해가 발생해도 플랫폼에 보상을 청구하기 어렵습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-odtp-response">
        <h2 id="guide-odtp-response" className="text-foreground text-xl font-semibold tracking-tight">
          피해 발생 시 대처 방법
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              피해 유형별 신고·대응
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  피해 유형
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  대처 방법
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  허위 매물·사기
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  경찰청 사이버범죄 신고(
                  <a
                    href="https://ecrm.police.go.kr"
                    className="text-primary underline-offset-4 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ecrm.police.go.kr
                  </a>
                  )
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  계약금 편취
                </th>
                <td className="border-border border-b px-3 py-2.5">즉시 경찰 신고·계좌 지급정지 신청</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  허위 광고
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  국토교통부 부동산 불법행위 신고센터(
                  <a href="https://www.molit.go.kr" className="text-primary underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">
                    molit.go.kr
                  </a>
                  등 안내 페이지 참고)
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  플랫폼 허위 매물
                </th>
                <td className="px-3 py-2.5">플랫폼 신고 + 한국인터넷광고재단 신고</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-odtp-safety">
        <h2 id="guide-odtp-safety" className="text-foreground text-xl font-semibold tracking-tight">
          직거래 안전 체크리스트
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              계약 전·후 확인
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 w-24 font-semibold">
                  확인
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  등기부등본 소유자와 신분증 일치 확인
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  집주인 인증 여부 확인(플랫폼 제공 시)
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  근저당·가압류 등 선순위 권리 없음 확인
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  전입세대 열람으로 선순위 임차인 없음 확인
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  국세·지방세 체납 없음 확인
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  계약금 입금 계좌 소유자 명의 확인
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  표준 계약서 사용 및 특약사항 명시
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  전세보증보험 가입 가능 여부 확인
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 text-left font-medium">
                  잔금·등기 동시 진행 일정 확정
                </th>
                <td className="px-3 py-2.5 text-center">□</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-odtp-disclaimer">
        <p className="text-muted-foreground text-sm leading-relaxed">
          ※ 직거래 플랫폼은 거래 안전을 보장하지 않습니다. 피해가 발생해도 플랫폼에 보상을 청구하기 어려우므로 모든 확인 절차를
          이용자가 직접 수행해야 합니다. 부동산 거래 경험이 부족하거나 권리 관계가 복잡한 경우 공인중개사를 통한 중개거래를
          권장합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="중개수수료 계산기 이동"
      >
        <p>
          <Link href="/brokerage-fee-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            거래금액에 따른 중개수수료는 중개수수료 계산기에서 확인할 수 있습니다.
          </Link>
        </p>
        <p>
          중개 vs 직거래 개요는{" "}
          <Link href="/guide/direct-deal-vs-brokered-deal-guide" className="text-primary font-medium underline-offset-4 hover:underline">
            직거래 vs 중개거래 비용 비교
          </Link>
          가이드를 참고하세요.
        </p>
      </aside>
    </>
  );
}
