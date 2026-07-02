import Link from "next/link";

export const directDealVsBrokeredDealGuideMeta = {
  slug: "direct-deal-vs-brokered-deal-guide",
  title: "직거래 vs 중개거래 비용 비교",
  description:
    "직거래·중개거래 비용 차이, 절감액 대비 리스크, 매매·전세 상황별 판단 기준을 정리했습니다. 중개수수료 계산기와 함께 상황에 맞는 거래 방식을 비교해 볼 수 있는 참고 가이드입니다. 계약 조건, 분쟁 대응, 실제 절감액은 거래마다 달라질 수 있으니 개별 확인이 필요합니다.",
  updated: "2026년 4월 28일",
} as const;

export function DirectDealVsBrokeredDealGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-ddvb-intro">
        <p>
          부동산 직거래는 공인중개사 없이 매도인과 매수인(또는 임대인과 임차인)이 직접 거래하는 방식입니다. 중개수수료를 절약할 수
          있지만 권리 관계 확인·계약서 작성·분쟁 발생 시 보호 등에서 중개거래와 차이가 있습니다. 절약액이 크더라도{" "}
          <strong>리스크 대비 실익</strong>이 있는지 먼저 따져 보는 것이 좋습니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-ddvb-breakeven">
        <h2 id="guide-ddvb-breakeven" className="text-foreground text-xl font-semibold tracking-tight">
          절감액만으로 결정하면 안 되는 이유
        </h2>
        <p>
          매매 5억 기준 중개수수료 상한은 약 200만 원입니다. 등기부등본·계약서·거래 신고를 직접 하면 비용은 줄지만, 가압류·
          근저당·임차권을 놓치면 손실이 수천만 원까지 커질 수 있습니다. 법무사에게 계약·등기를 맡기면 30~50만 원 수준이
          드는 경우도 있어, “200만 원 절약”이 순절감 150만 원이 될 수 있습니다. 전세는{" "}
          <Link href="/guide/jeonse-guarantee-insurance-guide" className="text-primary underline-offset-4 hover:underline">
            전세보증보험
          </Link>
          가입 가능 여부가 더 중요한 변수입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ddvb-sale">
        <h2 id="guide-ddvb-sale" className="text-foreground text-xl font-semibold tracking-tight">
          비용 비교: 매매 기준
        </h2>
        <p className="text-muted-foreground text-sm">매매가 5억 원 아파트 기준</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              매매 5억 원 기준 직거래·중개거래 비용
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  직거래
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  중개거래
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  중개수수료
                </th>
                <td className="border-border border-b px-3 py-2.5">없음</td>
                <td className="border-border border-b px-3 py-2.5">최대 200만 원 (상한요율 0.4%)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  계약서 작성 비용
                </th>
                <td className="border-border border-b px-3 py-2.5">법무사 의뢰 시 10만~30만 원</td>
                <td className="border-border border-b px-3 py-2.5">포함</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  등기부등본 확인
                </th>
                <td className="border-border border-b px-3 py-2.5">직접 조회 (무료)</td>
                <td className="border-border border-b px-3 py-2.5">중개사 확인 포함</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  권리 관계 분석
                </th>
                <td className="border-border border-b px-3 py-2.5">직접 수행</td>
                <td className="border-border border-b px-3 py-2.5">중개사 수행</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  부동산 거래 신고
                </th>
                <td className="border-border border-b px-3 py-2.5">직접 신고 (잔금일 30일 이내)</td>
                <td className="border-border border-b px-3 py-2.5">중개사 대행</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  예상 절감액
                </th>
                <td className="px-3 py-2.5">최대 200만 원</td>
                <td className="px-3 py-2.5">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ddvb-jeonse">
        <h2 id="guide-ddvb-jeonse" className="text-foreground text-xl font-semibold tracking-tight">
          비용 비교: 전세 기준
        </h2>
        <p className="text-muted-foreground text-sm">전세 보증금 3억 원 기준</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              전세 보증금 3억 원 기준 직거래·중개거래 비용
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  직거래
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  중개거래
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  중개수수료
                </th>
                <td className="border-border border-b px-3 py-2.5">없음</td>
                <td className="border-border border-b px-3 py-2.5">최대 90만 원 (상한요율 0.3%)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  임대차계약서 작성
                </th>
                <td className="border-border border-b px-3 py-2.5">직접 작성 또는 법무사 의뢰</td>
                <td className="border-border border-b px-3 py-2.5">포함</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  확정일자 취득
                </th>
                <td className="border-border border-b px-3 py-2.5">직접 신청 (600원)</td>
                <td className="border-border border-b px-3 py-2.5">안내 포함</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  전입신고
                </th>
                <td className="border-border border-b px-3 py-2.5">직접 신청</td>
                <td className="border-border border-b px-3 py-2.5">안내 포함</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  전세보증보험 가입 안내
                </th>
                <td className="px-3 py-2.5">없음</td>
                <td className="px-3 py-2.5">일부 중개사 안내</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ddvb-risk-intro">
        <h2 id="guide-ddvb-risk-intro" className="text-foreground text-xl font-semibold tracking-tight">
          직거래 시 발생할 수 있는 리스크
        </h2>
        <p>
          중개거래는 공인중개사가 권리 관계를 확인하고 계약서를 작성하며, 중개사고 발생 시 손해배상 청구가 가능합니다. 직거래는 이
          모든 과정을 당사자가 직접 수행해야 합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              직거래 시 주요 리스크
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  리스크 항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  등기부등본 미확인
                </th>
                <td className="border-border border-b px-3 py-2.5">근저당·가압류·가처분 등 권리 관계를 직접 확인해야 함</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  허위 매물
                </th>
                <td className="border-border border-b px-3 py-2.5">중개사의 물건 확인 의무가 없어 허위 정보 피해 가능</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  계약서 오류
                </th>
                <td className="border-border border-b px-3 py-2.5">필수 기재사항 누락 시 계약 효력 분쟁 발생 가능</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  깡통전세
                </th>
                <td className="border-border border-b px-3 py-2.5">전세보증금이 주택 가치를 초과하는 경우 미확인 위험</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  이중 계약
                </th>
                <td className="border-border border-b px-3 py-2.5">동일 주택에 여러 임차인과 계약하는 사기 피해 가능</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  분쟁 시 보호
                </th>
                <td className="px-3 py-2.5">중개사 없으면 중개사배상책임보험 보호 불가</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ddvb-checklist">
        <h2 id="guide-ddvb-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          직거래 전 반드시 확인해야 할 사항
        </h2>
        <p>직거래를 진행한다면 아래 항목은 계약 전 반드시 직접 확인해야 합니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              직거래 전 확인 항목
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  확인 항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  확인 방법
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  등기부등본
                </th>
                <td className="border-border border-b px-3 py-2.5">대법원 인터넷등기소 (유료, 1건 700원)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  건축물대장
                </th>
                <td className="border-border border-b px-3 py-2.5">정부24 (무료)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  전입세대 열람
                </th>
                <td className="border-border border-b px-3 py-2.5">주민센터 방문 (임대인 동의 필요)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  국세·지방세 체납 여부
                </th>
                <td className="border-border border-b px-3 py-2.5">임대인에게 납세증명서 요청</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  실제 소유자 확인
                </th>
                <td className="border-border border-b px-3 py-2.5">등기부등본 소유자와 신분증 대조</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  선순위 임차인 여부
                </th>
                <td className="px-3 py-2.5">전입세대 열람으로 확인</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-ddvb-platform">
        <h2 id="guide-ddvb-platform" className="text-foreground text-xl font-semibold tracking-tight">
          직거래 플랫폼 이용 시 주의사항
        </h2>
        <p>
          당근마켓·피터팬의 좋은방 구하기 등 직거래 플랫폼은 중개 플랫폼이 아닙니다. 플랫폼이 거래 안전을 보장하지 않으며, 허위
          매물이나 사기 피해가 발생해도 플랫폼의 책임이 없습니다. 직거래 플랫폼을 통해 거래하더라도 위 확인 항목은 동일하게 수행해야
          합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ddvb-broker-better">
        <h2 id="guide-ddvb-broker-better" className="text-foreground text-xl font-semibold tracking-tight">
          중개거래가 유리한 경우
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              중개거래를 권장하는 상황
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상황
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  이유
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  권리 관계가 복잡한 주택
                </th>
                <td className="border-border border-b px-3 py-2.5">근저당·선순위 임차인 등 확인 필요</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  거래 경험이 없는 경우
                </th>
                <td className="border-border border-b px-3 py-2.5">계약서 작성·절차 안내 필요</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  고액 거래
                </th>
                <td className="border-border border-b px-3 py-2.5">사고 발생 시 손해 규모가 크므로 중개사 보호 필요</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  빌라·오피스텔 등 비아파트
                </th>
                <td className="px-3 py-2.5">시세 파악이 어려워 권리 분석 중요</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ddvb-direct-better">
        <h2 id="guide-ddvb-direct-better" className="text-foreground text-xl font-semibold tracking-tight">
          직거래가 유리한 경우
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              직거래를 고려할 만한 상황
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상황
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  이유
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  지인 간 거래
                </th>
                <td className="border-border border-b px-3 py-2.5">상호 신뢰 기반으로 권리 관계 확인 부담 낮음</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  재계약 (동일 임차인)
                </th>
                <td className="border-border border-b px-3 py-2.5">기존 계약 연장으로 새로운 권리 관계 확인 불필요</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  아파트 실거래가 조회 용이한 경우
                </th>
                <td className="px-3 py-2.5">시세 파악이 명확하고 권리 관계가 단순한 경우</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ddvb-report">
        <h2 id="guide-ddvb-report" className="text-foreground text-xl font-semibold tracking-tight">
          부동산 거래 신고 직접 처리 방법
        </h2>
        <p>
          직거래 시 중개사가 대행하지 않으므로 거래 당사자가 직접 신고해야 합니다. 잔금 지급일로부터 30일 이내에 부동산 소재지
          관할 시·군·구청 또는 부동산거래관리시스템(rtms.molit.go.kr)에서 온라인 신고가 가능합니다. 신고 기한을 초과하면 과태료가
          부과됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              부동산 거래 신고 요약
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  신고 기한
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  신고 방법
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  과태료
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-muted/20">
                <td className="px-3 py-2.5">잔금일로부터 30일 이내</td>
                <td className="px-3 py-2.5">온라인(rtms.molit.go.kr) 또는 관할 구청 방문</td>
                <td className="px-3 py-2.5">최대 500만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 직거래는 중개수수료를 절약할 수 있지만 권리 관계 확인·계약서 작성·분쟁 처리를 당사자가 직접 수행해야 합니다. 거래
          경험이 부족하거나 권리 관계가 복잡한 경우 중개거래를 권장합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="중개수수료 계산기 이동"
      >
        <p>
          <Link href="/brokerage-fee-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            → 거래금액에 따른 중개수수료는 중개수수료 계산기에서 확인할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
