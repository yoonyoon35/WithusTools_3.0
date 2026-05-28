import Link from "next/link";

export const homePurchaseAdditionalCostsGuideMeta = {
  slug: "home-purchase-additional-costs-guide",
  title: "주택 구입 시 추가 비용 총정리",
  description:
    "2026년 기준 취득세, 등기비용, 인지세, 중개수수료 등 주택 매수 시 발생하는 부대비용을 표로 정리했습니다. 자금 계획 체크리스트, 총 비용 추산 방법, 취득세·중개보수 계산기 연결 정보를 참고용으로 확인할 수 있습니다. 실제 비용은 거래 조건·지역에 따라 달라질 수 있습니다.",
  updated: "2026년 4월 20일",
} as const;

export function HomePurchaseAdditionalCostsGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-cost-overview">
        <h2 id="guide-cost-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 4월 기준
        </h2>
        <p>
          주택을 구입할 때 매매가격 외에 취득세·등기비용·중개수수료 등 부대비용이 추가로 발생합니다. 이 비용을 사전에 파악하지 않으면
          잔금일 자금 계획에 차질이 생길 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cost-summary">
        <h2 id="guide-cost-summary" className="text-foreground text-xl font-semibold tracking-tight">
          주요 부대비용 항목 한눈에 보기
        </h2>
        <p className="text-muted-foreground text-sm">매매가 5억 원 아파트 기준 예시</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              주택 구입 부대비용 요약
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비용 항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  금액 범위
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  예시 금액
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득세
                </th>
                <td className="border-border border-b px-3 py-2.5">매매가의 1% ~ 12%</td>
                <td className="border-border border-b px-3 py-2.5">약 550만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  지방교육세
                </th>
                <td className="border-border border-b px-3 py-2.5">취득세의 10%</td>
                <td className="border-border border-b px-3 py-2.5">약 55만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  농어촌특별세
                </th>
                <td className="border-border border-b px-3 py-2.5">취득세의 10%(85㎡ 초과 시)</td>
                <td className="border-border border-b px-3 py-2.5">약 55만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  등기수수료(법무사비)
                </th>
                <td className="border-border border-b px-3 py-2.5">50만 원 ~ 150만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 80만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  인지세
                </th>
                <td className="border-border border-b px-3 py-2.5">15만 원 ~ 35만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 15만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  중개수수료
                </th>
                <td className="border-border border-b px-3 py-2.5">매매가의 0.4% ~ 0.9%</td>
                <td className="border-border border-b px-3 py-2.5">약 200만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  이사비용
                </th>
                <td className="border-border border-b px-3 py-2.5">50만 원 ~ 300만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 150만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  합계
                </th>
                <td className="px-3 py-2.5">—</td>
                <td className="px-3 py-2.5">약 1,105만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>매매가의 약 1.5% ~ 3% 수준의 부대비용을 별도로 준비해야 합니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cost-acquisition-tax">
        <h2 id="guide-cost-acquisition-tax" className="text-foreground text-xl font-semibold tracking-tight">
          취득세 상세
        </h2>
        <p>취득세는 주택 구입 시 가장 큰 비용입니다. 주택 수와 매매가에 따라 세율이 달라집니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              주택 수·매매가별 취득세율
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주택 수
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  매매가
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득세율
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1주택(무주택자)
                </th>
                <td className="border-border border-b px-3 py-2.5">6억 원 이하</td>
                <td className="border-border border-b px-3 py-2.5">1%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1주택(무주택자)
                </th>
                <td className="border-border border-b px-3 py-2.5">6억 원 초과 ~ 9억 원 이하</td>
                <td className="border-border border-b px-3 py-2.5">1% ~ 3%(구간별 차등)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1주택(무주택자)
                </th>
                <td className="border-border border-b px-3 py-2.5">9억 원 초과</td>
                <td className="border-border border-b px-3 py-2.5">3%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2주택(비규제지역)
                </th>
                <td className="border-border border-b px-3 py-2.5">전체</td>
                <td className="border-border border-b px-3 py-2.5">1% ~ 3%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2주택(조정대상지역)
                </th>
                <td className="border-border border-b px-3 py-2.5">전체</td>
                <td className="border-border border-b px-3 py-2.5">8%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3주택 이상(비규제지역)
                </th>
                <td className="border-border border-b px-3 py-2.5">전체</td>
                <td className="border-border border-b px-3 py-2.5">8%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3주택 이상(조정대상지역)
                </th>
                <td className="border-border border-b px-3 py-2.5">전체</td>
                <td className="border-border border-b px-3 py-2.5">12%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  법인
                </th>
                <td className="px-3 py-2.5">전체</td>
                <td className="px-3 py-2.5">12%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          취득세에는 지방교육세(취득세의 10%)가 추가됩니다. 전용면적 85㎡ 초과 주택은 농어촌특별세(취득세의 10%)도 추가로
          부과됩니다.
        </p>
        <p>
          생애최초 주택 구입자는 12억 원 이하 주택 취득 시 취득세를 200만 원 한도 내에서 감면받을 수 있습니다. 감면은 자동 적용이
          아니므로 취득세 납부 시 별도 신청이 필요하며, 감면 후 3년 이내 매각·증여·임대 전환 시 추징됩니다.
        </p>
        <p>취득세는 잔금 지급일로부터 60일 이내에 납부해야 하며, 기한 초과 시 가산세가 부과됩니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cost-registration">
        <h2 id="guide-cost-registration" className="text-foreground text-xl font-semibold tracking-tight">
          등기비용 상세
        </h2>
        <p>주택 소유권 이전등기와 근저당권 설정등기 시 비용이 발생합니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              등기 관련 주요 비용
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
                  소유권 이전등기 등록면허세
                </th>
                <td className="border-border border-b px-3 py-2.5">매매가의 0.2%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  근저당권 설정 등록면허세
                </th>
                <td className="border-border border-b px-3 py-2.5">채권최고액의 0.2%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  국민주택채권 매입
                </th>
                <td className="border-border border-b px-3 py-2.5">매매가 기준 일정 비율 매입 후 즉시 할인 매도 가능</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  법무사 수수료
                </th>
                <td className="border-border border-b px-3 py-2.5">50만 원 ~ 150만 원(법무사별 상이)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  인지세
                </th>
                <td className="px-3 py-2.5">대출 금액에 따라 15만 원 ~ 35만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>등기는 법무사에게 위임하는 것이 일반적이며, 은행 대출 시 은행 지정 법무사가 배정되는 경우가 많습니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cost-stamp-tax">
        <h2 id="guide-cost-stamp-tax" className="text-foreground text-xl font-semibold tracking-tight">
          인지세 기준
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              대출 금액별 인지세
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  대출 금액
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  인지세
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1,000만 원 초과 ~ 5,000만 원 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">7만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5,000만 원 초과 ~ 1억 원 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">15만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1억 원 초과 ~ 10억 원 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">35만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  10억 원 초과
                </th>
                <td className="px-3 py-2.5">35만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>인지세는 차주와 금융기관이 절반씩 부담하므로 실제 차주 부담은 위 금액의 50%입니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cost-brokerage">
        <h2 id="guide-cost-brokerage" className="text-foreground text-xl font-semibold tracking-tight">
          중개수수료 상세
        </h2>
        <p className="text-muted-foreground text-sm">2026년 4월 기준</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              매매가 구간별 중개수수료 상한
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  매매가
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상한 요율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  한도액
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5,000만 원 미만
                </th>
                <td className="border-border border-b px-3 py-2.5">0.6%</td>
                <td className="border-border border-b px-3 py-2.5">25만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5,000만 원 이상 ~ 2억 원 미만
                </th>
                <td className="border-border border-b px-3 py-2.5">0.5%</td>
                <td className="border-border border-b px-3 py-2.5">80만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2억 원 이상 ~ 9억 원 미만
                </th>
                <td className="border-border border-b px-3 py-2.5">0.4%</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  9억 원 이상 ~ 12억 원 미만
                </th>
                <td className="border-border border-b px-3 py-2.5">0.5%</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  12억 원 이상 ~ 15억 원 미만
                </th>
                <td className="border-border border-b px-3 py-2.5">0.6%</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  15억 원 이상
                </th>
                <td className="px-3 py-2.5">0.7%</td>
                <td className="px-3 py-2.5">없음</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>중개수수료는 상한 요율 이내에서 중개사와 협의해 결정하며, 상한 요율을 초과해 받는 것은 불법입니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cost-by-price">
        <h2 id="guide-cost-by-price" className="text-foreground text-xl font-semibold tracking-tight">
          매매가별 총 부대비용 예시
        </h2>
        <p className="text-muted-foreground text-sm">무주택자 1주택 구입, 전용 85㎡ 이하, 대출 50% 가정</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              매매가 구간별 예상 부대비용
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  매매가
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  중개수수료
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  등기비
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  합계
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">약 300만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 120만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 70만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 490만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">약 550만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 200만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 90만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 840만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  7억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">약 1,300만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 280만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 110만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 1,690만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  10억 원
                </th>
                <td className="px-3 py-2.5">약 3,000만 원</td>
                <td className="px-3 py-2.5">약 500만 원</td>
                <td className="px-3 py-2.5">약 130만 원</td>
                <td className="px-3 py-2.5">약 3,630만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cost-checklist">
        <h2 id="guide-cost-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          잔금일 전 자금 계획 체크리스트
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              잔금 전 확인 항목
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  확인 여부
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득세 납부 자금 확보
                </th>
                <td className="border-border border-b px-3 py-2.5">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  법무사비·등기비 확보
                </th>
                <td className="border-border border-b px-3 py-2.5">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  중개수수료 납부 시기 확인
                </th>
                <td className="border-border border-b px-3 py-2.5">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  이사비 예산 확보
                </th>
                <td className="border-border border-b px-3 py-2.5">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  인테리어·수리비 예산 확보
                </th>
                <td className="border-border border-b px-3 py-2.5">□</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  생애최초 취득세 감면 신청 여부 확인
                </th>
                <td className="px-3 py-2.5">□</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          중개수수료는 통상 잔금일에 납부하며, 취득세는 잔금일로부터 60일 이내가 납부 기한입니다. 자금 흐름을 미리 계획하지 않으면
          잔금일 직후 자금 부담이 집중될 수 있습니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 취득세율과 중개수수료 상한 요율은 정부 정책에 따라 변동될 수 있습니다. 정확한 세율은 위택스(wetax.go.kr) 및 국토교통부에서
          확인할 것을 권장합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="계산기 이동"
      >
        <p>
          <Link href="/#calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            대출 원금과 금리에 따른 월 상환액은 대출 이자 계산기에서 확인할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
