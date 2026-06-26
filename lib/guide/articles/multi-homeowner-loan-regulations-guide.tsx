import Link from "next/link";

export const multiHomeownerLoanRegulationsGuideMeta = {
  slug: "multi-homeowner-loan-regulations-guide",
  title: "다주택자 대출 규제 정리",
  description:
    "2026년 4월 기준 다주택자 주택 수 산정, LTV·만기 연장·취득세·양도세·종부세 규제와 규제지역 현황, 핵심 일정을 표로 정리했습니다.",
  updated: "2026년 4월 20일",
} as const;

export function MultiHomeownerLoanRegulationsGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-multi-overview">
        <h2 id="guide-multi-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 4월 기준
        </h2>
        <p>
          다주택자는 무주택자·1주택자보다 대출·세금·청약 전반에 걸쳐 강화된 규제를 적용받습니다. 2025년 6월과 10월 부동산 대책 이후
          규제가 대폭 강화되었습니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-multi-count">
        <h2 id="guide-multi-count" className="text-foreground text-xl font-semibold tracking-tight">
          주택 수 기준
        </h2>
        <p>
          주택 수는 세대 기준으로 산정합니다. 본인과 배우자, 동일 세대 내 가족이 보유한 주택을 합산하며 분양권·조합원 입주권도
          포함됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-multi-ltv">
        <h2 id="guide-multi-ltv" className="text-foreground text-xl font-semibold tracking-tight">
          대출 규제: LTV 기준
        </h2>
        <p>
          2026년 3월 기준으로 규제지역 내 다주택자는 주택 구입 목적 대출 시 LTV 40% 제한을 받으며, 6·27 부동산 대책에 따라 신규
          주담대는 LTV 0%로 사실상 불가능한 상황입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              주택 보유 상태별 LTV·한도 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  무주택자
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  1주택자
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  다주택자
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  비규제지역 LTV
                </th>
                <td className="border-border border-b px-3 py-2.5">70%</td>
                <td className="border-border border-b px-3 py-2.5">70%</td>
                <td className="border-border border-b px-3 py-2.5">60%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  규제지역 LTV
                </th>
                <td className="border-border border-b px-3 py-2.5">70%</td>
                <td className="border-border border-b px-3 py-2.5">40%</td>
                <td className="border-border border-b px-3 py-2.5">0%(사실상 불가)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  생애최초 LTV
                </th>
                <td className="border-border border-b px-3 py-2.5">80%</td>
                <td className="border-border border-b px-3 py-2.5">해당 없음</td>
                <td className="border-border border-b px-3 py-2.5">해당 없음</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  최대 대출 한도
                </th>
                <td className="px-3 py-2.5">6억 원</td>
                <td className="px-3 py-2.5">6억 원</td>
                <td className="px-3 py-2.5">사실상 불가</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-multi-extension">
        <h2 id="guide-multi-extension" className="text-foreground text-xl font-semibold tracking-tight">
          만기 연장 제한
        </h2>
        <p>
          2026년 4월 17일부터 다주택자의 수도권 및 규제지역 아파트 담보대출 만기 연장이 원칙적으로 불허됩니다. 기존 보유 대출의 만기가
          도래하는 경우 신규 대출 기준(LTV 0%)과 동일하게 심사하므로 사실상 전액 상환이 요구될 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-multi-acquisition-tax">
        <h2 id="guide-multi-acquisition-tax" className="text-foreground text-xl font-semibold tracking-tight">
          취득세 규제
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              주택 수·지역별 취득세율
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주택 수
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비규제지역 취득세율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  조정대상지역 취득세율
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1주택
                </th>
                <td className="border-border border-b px-3 py-2.5">1% ~ 3%</td>
                <td className="border-border border-b px-3 py-2.5">1% ~ 3%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2주택
                </th>
                <td className="border-border border-b px-3 py-2.5">1% ~ 3%</td>
                <td className="border-border border-b px-3 py-2.5">8%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3주택 이상
                </th>
                <td className="border-border border-b px-3 py-2.5">8%</td>
                <td className="border-border border-b px-3 py-2.5">12%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  법인
                </th>
                <td className="px-3 py-2.5">12%</td>
                <td className="px-3 py-2.5">12%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 지방 준공 후 미분양 아파트(전용 85㎡ 이하, 취득가액 6억 원 이하)는 다주택자 취득세 중과 제외 특례가 1년 한시로 적용됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-multi-capital-gains">
        <h2 id="guide-multi-capital-gains" className="text-foreground text-xl font-semibold tracking-tight">
          양도소득세 중과
        </h2>
        <p>
          2022년부터 이어져 온 다주택자 양도세 중과 유예가 2026년 5월 9일 종료될 예정입니다. 유예가 끝나면 조정대상지역 내 주택을
          매도할 때 2주택자는 기본세율에 20%p, 3주택 이상은 30%p가 추가됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              유예 기간 전후 양도세율 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  유예 기간 중(~ 2026.5.9)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  유예 종료 후
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2주택(조정지역)
                </th>
                <td className="border-border border-b px-3 py-2.5">기본세율(6% ~ 45%)</td>
                <td className="border-border border-b px-3 py-2.5">기본세율 + 20%p</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3주택 이상(조정지역)
                </th>
                <td className="border-border border-b px-3 py-2.5">기본세율(6% ~ 45%)</td>
                <td className="border-border border-b px-3 py-2.5">기본세율 + 30%p</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  비규제지역
                </th>
                <td className="px-3 py-2.5">기본세율</td>
                <td className="px-3 py-2.5">기본세율(중과 없음)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          서울 강남 3구와 용산구를 제외한 비규제지역 주택은 중과되지 않고 기본세율이 적용되나, 규제지역 내 주택은 법 개정이 없는 한
          중과세가 부활합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-multi-property-tax">
        <h2 id="guide-multi-property-tax" className="text-foreground text-xl font-semibold tracking-tight">
          종합부동산세
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              1주택자 vs 다주택자 종부세 기준 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  기본 공제
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  세율
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1주택자
                </th>
                <td className="border-border border-b px-3 py-2.5">12억 원</td>
                <td className="border-border border-b px-3 py-2.5">0.5% ~ 2.7%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  다주택자(조정지역 2주택 이상)
                </th>
                <td className="px-3 py-2.5">9억 원</td>
                <td className="px-3 py-2.5">0.5% ~ 5.0%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-multi-regions">
        <h2 id="guide-multi-regions" className="text-foreground text-xl font-semibold tracking-tight">
          규제지역 현황(2026년 4월 기준)
        </h2>
        <p>
          2025년 10·15 주택시장 안정화 대책으로 서울 강남·서초·송파·용산 4개 자치구 외 서울 21개 자치구 전체와 경기도 12개 지역이
          규제지역으로 신규 지정되었습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              조정대상지역 구분
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  지역
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  기존 조정대상지역
                </th>
                <td className="border-border border-b px-3 py-2.5">강남·서초·송파·용산구</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  신규 조정대상지역
                </th>
                <td className="px-3 py-2.5">
                  서울 21개 자치구, 경기 과천·광명·수원·성남·안양·용인·의왕·하남 일부
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-multi-schedule">
        <h2 id="guide-multi-schedule" className="text-foreground text-xl font-semibold tracking-tight">
          다주택자가 주의해야 할 핵심 일정
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              규제 관련 핵심 일정
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  일정
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2026년 4월 17일
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  수도권·규제지역 다주택자 담보대출 만기 연장 불허 시행
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  2026년 5월 9일
                </th>
                <td className="px-3 py-2.5">조정대상지역 양도소득세 중과 유예 종료</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          양도세 중과 유예 종료 전에 매도를 고려하는 경우 2026년 5월 9일까지 토지거래허가를 신청한 경우에도 양도세 중과를 적용하지
          않는 보완책이 시행될 예정입니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-multi-strategy">
        <h2 id="guide-multi-strategy" className="text-foreground text-xl font-semibold tracking-tight">
          다주택자의 현실적인 선택지
        </h2>
        <p>
          현재 규제 환경에서 다주택자가 취할 수 있는 주요 전략은 세 가지입니다. 첫째, 양도세 중과 유예 종료 전 보유 주택 일부 매도로
          세 부담 경감. 둘째, 비규제지역 주택 위주로 포트폴리오 재편. 셋째, 임대사업자 등록을 통한 세제 혜택 검토입니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 규제지역 지정 현황과 세율은 정부 정책에 따라 수시로 변동됩니다. 정확한 세금 계산은 세무사 상담을 통해 확인하는 것을
          권장합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="계산기 이동"
      >
        <p>
          <Link href="/loan-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            추가 주택 취득 시 월 상환액은 대출 이자 계산기에서 확인할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
