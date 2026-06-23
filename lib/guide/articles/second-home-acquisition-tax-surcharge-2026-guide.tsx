import Link from "next/link";

export const secondHomeAcquisitionTaxSurcharge2026GuideMeta = {
  slug: "second-home-acquisition-tax-surcharge-2026-guide",
  title: "2주택자 취득세 중과 기준",
  description:
    "2026년 4월 기준 조정·비조정 지역 2주택 취득세율, 매매가별 납부액 비교, 조정대상지역·취득 시점 판단, 저가주택 중과 제외, 주택 수 산정, 증여·일시적 2주택·법인 세율과 자가진단 체크리스트를 표로 정리했습니다.",
  updated: "2026년 5월 11일",
} as const;

export function SecondHomeAcquisitionTaxSurcharge2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-s2-overview">
        <h2 id="guide-s2-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 4월 기준
        </h2>
        <p>
          1주택자가 주택을 추가로 취득해 2주택자가 되는 경우, 취득하는 주택의 소재지가 조정대상지역인지 여부에 따라 취득세율이 크게
          달라집니다. 비규제지역에서는 주택 가격에 따라 1~3%가 적용되지만, 조정대상지역에서 2주택을 취득하면 8%로 올라갑니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-s2-rates">
        <h2 id="guide-s2-rates" className="text-foreground text-xl font-semibold tracking-tight">
          2주택자 취득세율 비교
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              비조정·조정대상지역 2주택 취득세·부가세(참고)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득세율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  지방교육세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  농특세(85㎡ 초과)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  합계
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  비조정대상지역 2주택
                </th>
                <td className="border-border border-b px-3 py-2.5">1% ~ 3%</td>
                <td className="border-border border-b px-3 py-2.5">취득세의 10%</td>
                <td className="border-border border-b px-3 py-2.5">0.2%</td>
                <td className="border-border border-b px-3 py-2.5">1.1% ~ 3.3%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  조정대상지역 2주택
                </th>
                <td className="px-3 py-2.5">8%</td>
                <td className="px-3 py-2.5">0.4%</td>
                <td className="px-3 py-2.5">0.6%</td>
                <td className="px-3 py-2.5">8% ~ 9%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-s2-by-price">
        <h2 id="guide-s2-by-price" className="text-foreground text-xl font-semibold tracking-tight">
          매매가별 취득세 비교(조정 vs 비조정)
        </h2>
        <p className="text-muted-foreground text-sm">전용 85㎡ 이하·농특세 제외(취득세 계산기 기준)</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              매매가별 취득세·지방교육세 합계
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  매매가
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비조정지역(대표 1% 구간)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  조정지역(8%)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  차이
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">330만 원</td>
                <td className="border-border border-b px-3 py-2.5">2,520만 원</td>
                <td className="border-border border-b px-3 py-2.5">2,190만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">550만 원</td>
                <td className="border-border border-b px-3 py-2.5">4,200만 원</td>
                <td className="border-border border-b px-3 py-2.5">3,650만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  7억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">약 1,284만 원</td>
                <td className="border-border border-b px-3 py-2.5">5,880만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 4,596만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  10억 원
                </th>
                <td className="px-3 py-2.5">3,300만 원</td>
                <td className="px-3 py-2.5">8,400만 원</td>
                <td className="px-3 py-2.5">5,100만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          7억 원 행은 비조정 지역에서 1주택자 구간별 비례세율이 반영된 예시액입니다. 실제 2주택 세율도 가격 구간에 따라 달라질 수
          있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-s2-zones">
        <h2 id="guide-s2-zones" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 4월 기준 조정대상지역 현황
        </h2>
        <p>
          2025년 10월 15일 부동산 대책으로 서울 25개 자치구 전역과 경기도 12개 지역(과천·광명·성남·수원·안양·용인·의왕·하남 등)이
          조정대상지역으로 지정되었습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              지역별 조정대상지역 해당 여부(요약)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  지역
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  조정대상지역 해당 여부
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  서울 25개 자치구 전역
                </th>
                <td className="border-border border-b px-3 py-2.5">해당</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  경기 과천·광명·성남·수원·안양·용인·의왕·하남 등 12개
                </th>
                <td className="border-border border-b px-3 py-2.5">해당</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  비수도권 광역시·지방
                </th>
                <td className="px-3 py-2.5">대부분 비해당</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          정확한 지정 현황은{" "}
          <a
            href="https://www.molit.go.kr"
            className="text-primary font-medium underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            국토교통부
          </a>{" "}
          공식 고시에서 확인해야 합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-s2-timing">
        <h2 id="guide-s2-timing" className="text-foreground text-xl font-semibold tracking-tight">
          조정대상지역 판단 기준: 취득 시점 기준
        </h2>
        <p>
          취득세는 거래세이므로 취득 당시 해당 주택이 조정대상지역인지 여부에 따라 세율이 결정됩니다. 취득 후 조정대상지역으로 지정되거나
          해제되더라도 취득 당시 기준으로 세율이 적용됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              취득 시점과 이후 지정 변경에 따른 세율(요약)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상황
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득세율
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득 당시 조정대상지역
                </th>
                <td className="border-border border-b px-3 py-2.5">8%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득 당시 비조정대상지역(이후 조정 지정)
                </th>
                <td className="border-border border-b px-3 py-2.5">1% ~ 3%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  취득 당시 조정대상지역(이후 조정 해제)
                </th>
                <td className="px-3 py-2.5">8%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-s2-lowprice">
        <h2 id="guide-s2-lowprice" className="text-foreground text-xl font-semibold tracking-tight">
          중과 제외 대상: 저가주택
        </h2>
        <p>
          2025년 1월 2일 이후 지방에 소재한 공시가격 2억 원 이하 주택을 취득하는 경우 보유 주택 수에 관계없이 취득세 중과가 제외되고
          기본세율(1%)이 적용됩니다. 수도권은 공시가격 1억 원 이하 주택이 중과 제외 대상입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              지역별 중과 제외 기준
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  지역
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  중과 제외 기준
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  수도권
                </th>
                <td className="border-border border-b px-3 py-2.5">공시가격 1억 원 이하</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  비수도권(지방)
                </th>
                <td className="px-3 py-2.5">공시가격 2억 원 이하(2025년 1월 2일 이후 취득분)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-s2-count">
        <h2 id="guide-s2-count" className="text-foreground text-xl font-semibold tracking-tight">
          주택 수 산정 시 포함 항목
        </h2>
        <p>
          취득세 주택 수 산정 시 주택분양권·조합원 입주권·주택분 재산세 과세 대상인 주거용 오피스텔도 주택 수에 포함됩니다. 단, 2020년
          8월 12일 이후 취득한 분양권·오피스텔부터 적용됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              항목별 주택 수 포함 여부
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주택 수 포함 여부
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  아파트·빌라·단독주택
                </th>
                <td className="border-border border-b px-3 py-2.5">포함</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  분양권(2020년 8월 12일 이후 취득)
                </th>
                <td className="border-border border-b px-3 py-2.5">포함</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주거용 오피스텔(2020년 8월 12일 이후 취득)
                </th>
                <td className="border-border border-b px-3 py-2.5">포함</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  업무용 오피스텔
                </th>
                <td className="border-border border-b px-3 py-2.5">제외</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  공시가격 1억 원 이하(수도권)
                </th>
                <td className="border-border border-b px-3 py-2.5">제외</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  공시가격 2억 원 이하(비수도권, 2025년 1월 2일 이후)
                </th>
                <td className="border-border border-b px-3 py-2.5">제외</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  배우자·동일 세대원 보유 주택
                </th>
                <td className="px-3 py-2.5">포함</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-s2-gift">
        <h2 id="guide-s2-gift" className="text-foreground text-xl font-semibold tracking-tight">
          증여 취득 시 중과
        </h2>
        <p>
          조정대상지역에 있는 시가표준액 3억 원 이상 주택을 증여받는 경우 취득세율 12%가 적용됩니다. 단, 1세대 1주택자가 소유한 주택을
          배우자나 직계비속이 증여로 취득하는 경우에는 기본세율(3.5%)이 적용됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              증여 취득 세율 구분
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득세율
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  일반 증여
                </th>
                <td className="border-border border-b px-3 py-2.5">3.5%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  조정대상지역 시가표준액 3억 원 이상 증여
                </th>
                <td className="border-border border-b px-3 py-2.5">12%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  1세대 1주택자 → 배우자·직계비속 증여
                </th>
                <td className="px-3 py-2.5">3.5%(예외)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-s2-temp">
        <h2 id="guide-s2-temp" className="text-foreground text-xl font-semibold tracking-tight">
          일시적 2주택 특례
        </h2>
        <p>
          이사 등 실수요 목적으로 신규 주택을 취득해 일시적으로 2주택이 된 경우, 종전 주택을 3년 이내 처분하면 신규 주택에 1주택
          일반세율(1~3%)이 적용됩니다. 기한 내 처분하지 못하면 중과세율(8%)과의 차액이 추징됩니다. 요건·유의사항은{" "}
          <Link
            href="/guide/temporary-two-home-acquisition-tax-exception-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            일시적 2주택 취득세 중과 예외 조건
          </Link>{" "}
          가이드에서 정리했습니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-s2-corp">
        <h2 id="guide-s2-corp" className="text-foreground text-xl font-semibold tracking-tight">
          법인 취득 시 세율
        </h2>
        <p>
          법인이 주택을 취득하는 경우 주택 수나 소재지와 관계없이 12%의 취득세율이 적용됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-s2-checklist">
        <h2 id="guide-s2-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          취득 전 자가진단 체크리스트
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              확인 항목
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
                  세대 기준 현재 보유 주택 수 확인
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  배우자·동일 세대원 주택 합산 여부
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  취득 예정 주택 조정대상지역 여부 확인
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  분양권·주거용 오피스텔 주택 수 포함 여부
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  저가주택 중과 제외 해당 여부
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 text-left font-medium">
                  일시적 2주택 특례 적용 가능 여부
                </th>
                <td className="px-3 py-2.5 text-center">□</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-s2-note">
        <p className="text-muted-foreground text-sm leading-relaxed">
          ※ 취득세 중과 기준과 조정대상지역 지정 현황은 정부 정책에 따라 수시로 변동됩니다. 정확한 세율과 지역 지정 현황은 위택스(
          <a href="https://wetax.go.kr" className="text-primary underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">
            wetax.go.kr
          </a>
          ) 및 국토교통부(
          <a href="https://www.molit.go.kr" className="text-primary underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">
            molit.go.kr
          </a>
          )에서 확인할 것을 권장합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="취득세 계산기 이동"
      >
        <p>
          <Link href="/acquisition-tax-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            매매가와 주택 수에 따른 취득세는 취득세 계산기에서 바로 확인할 수 있습니다.
          </Link>
        </p>
        <p>
          전체 세율표·1주택 구간은{" "}
          <Link href="/guide/acquisition-tax-rates-2026-guide" className="text-primary font-medium underline-offset-4 hover:underline">
            2026년 취득세율 완전 정리
          </Link>
          를 참고하세요.
        </p>
      </aside>
    </>
  );
}
