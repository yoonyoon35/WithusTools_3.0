import Link from "next/link";

export const acquisitionTaxRates2026GuideMeta = {
  slug: "acquisition-tax-rates-2026-guide",
  title: "2026년 취득세율 완전 정리",
  description:
    "2026년 기준 1주택자 구간별 취득세·부가세, 주택 수·지역별 세율, 납부액 예시를 표로 정리했습니다. 주택 수 산정 유의사항, 조정대상지역 기준, 취득세 계산기 연결 정보까지 참고용으로 확인할 수 있는 가이드입니다. 실제 납부액은 개별 신고·심사 결과에 따라 달라질 수 있습니다.",
  updated: "2026년 4월 23일",
} as const;

export function AcquisitionTaxRates2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-at-overview">
        <h2 id="guide-at-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 4월 기준
        </h2>
        <p>
          취득세는 주택 매수 시 1회 부과되는 지방세입니다. 주택 수·매매가·조정대상지역 여부에 따라 세율이 달라지며, 취득세에
          지방교육세와 농어촌특별세가 추가로 부과됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-at-one-home">
        <h2 id="guide-at-one-home" className="text-foreground text-xl font-semibold tracking-tight">
          1주택자 취득세율(매매가 기준)
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              취득가액 구간별 세율·부가세(전용 85㎡ 이하 기준 합계는 농특세 제외)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득가액
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
                  합계(85㎡ 이하)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  6억 원 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">1%</td>
                <td className="border-border border-b px-3 py-2.5">0.1%</td>
                <td className="border-border border-b px-3 py-2.5">0.2%(해당 시)</td>
                <td className="border-border border-b px-3 py-2.5">1.1%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  6억 원 초과 ~ 9억 원 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">1% ~ 3%(구간 비례)</td>
                <td className="border-border border-b px-3 py-2.5">취득세의 10%</td>
                <td className="border-border border-b px-3 py-2.5">0.2%(해당 시)</td>
                <td className="border-border border-b px-3 py-2.5">1.1% ~ 3.3%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  9억 원 초과
                </th>
                <td className="px-3 py-2.5">3%</td>
                <td className="px-3 py-2.5">0.3%</td>
                <td className="px-3 py-2.5">0.2%(해당 시)</td>
                <td className="px-3 py-2.5">3.3%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>6억 원 초과 9억 원 이하 구간은 아래 산식으로 세율이 결정됩니다.</p>
        <p className="bg-muted/30 rounded-md border border-border px-3 py-2 font-mono text-sm">
          취득세율 = (취득가액 × 2/3억 - 3) / 100
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-at-by-count">
        <h2 id="guide-at-by-count" className="text-foreground text-xl font-semibold tracking-tight">
          주택 수·지역별 취득세율 비교
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              구분별 취득세율(참고)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비규제지역
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  조정대상지역
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
                  3주택
                </th>
                <td className="border-border border-b px-3 py-2.5">8%</td>
                <td className="border-border border-b px-3 py-2.5">12%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  4주택 이상
                </th>
                <td className="border-border border-b px-3 py-2.5">12%</td>
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
      </section>

      <section className="space-y-3" aria-labelledby="guide-at-adjusted-areas">
        <h2 id="guide-at-adjusted-areas" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 4월 기준 조정대상지역 현황
        </h2>
        <p>
          서울은 25개 자치구 전역이 조정대상지역으로 지정되어 있습니다. 경기도는 과천·광명·수원(영통·장안·팔달)·성남(분당·수정·중원)·안양(동안)·용인(수지)·의왕·하남 등 12개 지역이 조정대상지역입니다. 지방 광역시(부산·대구 등)와 세종시는 현재 조정대상지역에서 해제된
          상태입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-at-payment-examples">
        <h2 id="guide-at-payment-examples" className="text-foreground text-xl font-semibold tracking-tight">
          취득세 실제 납부액 예시
        </h2>
        <p className="text-muted-foreground text-sm">전용 85㎡ 이하, 1주택 취득 기준</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              매매가별 취득세·지방교육세·합계
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  매매가
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
                  합계
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">1%</td>
                <td className="border-border border-b px-3 py-2.5">300만 원</td>
                <td className="border-border border-b px-3 py-2.5">30만 원</td>
                <td className="border-border border-b px-3 py-2.5">330만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">1%</td>
                <td className="border-border border-b px-3 py-2.5">500만 원</td>
                <td className="border-border border-b px-3 py-2.5">50만 원</td>
                <td className="border-border border-b px-3 py-2.5">550만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  7억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">약 1.67%</td>
                <td className="border-border border-b px-3 py-2.5">약 1,167만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 117만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 1,284만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  9억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">3%</td>
                <td className="border-border border-b px-3 py-2.5">2,700만 원</td>
                <td className="border-border border-b px-3 py-2.5">270만 원</td>
                <td className="border-border border-b px-3 py-2.5">2,970만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  12억 원
                </th>
                <td className="px-3 py-2.5">3%</td>
                <td className="px-3 py-2.5">3,600만 원</td>
                <td className="px-3 py-2.5">360만 원</td>
                <td className="px-3 py-2.5">3,960만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>전용 85㎡ 초과 주택은 농어촌특별세 0.2%가 추가됩니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-at-two-home-adjusted">
        <h2 id="guide-at-two-home-adjusted" className="text-foreground text-xl font-semibold tracking-tight">
          조정대상지역 2주택 취득세 예시
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              조정대상지역 2주택·전용 85㎡ 초과 가정 납부액 예시
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  매매가
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
                  농특세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  합계
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">8%</td>
                <td className="border-border border-b px-3 py-2.5">4,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">200만 원</td>
                <td className="border-border border-b px-3 py-2.5">300만 원</td>
                <td className="border-border border-b px-3 py-2.5">4,500만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  10억 원
                </th>
                <td className="px-3 py-2.5">8%</td>
                <td className="px-3 py-2.5">8,000만 원</td>
                <td className="px-3 py-2.5">400만 원</td>
                <td className="px-3 py-2.5">600만 원</td>
                <td className="px-3 py-2.5">9,000만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-at-first-time">
        <h2 id="guide-at-first-time" className="text-foreground text-xl font-semibold tracking-tight">
          생애최초 취득세 감면
        </h2>
        <p>
          소득에 관계없이 12억 원 이하 주택 구입 시 취득세를 200만 원 한도 내 감면받을 수 있습니다. 본인과 배우자 모두 주택 소유
          이력이 없어야 하며, 감면 후 3년 이내 매각·증여·임대 전환 시 감면액이 추징됩니다. 자동 적용이 아니므로 취득세 신고 시 별도
          신청이 필요합니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-at-temporary-two">
        <h2 id="guide-at-temporary-two" className="text-foreground text-xl font-semibold tracking-tight">
          일시적 2주택 취득세 특례
        </h2>
        <p>
          이사·혼인 등 사유로 일시적으로 2주택이 되는 경우 기존 주택을 3년 이내에 처분하면 1주택자와 동일한 세율(1~3%)을 적용받습니다.
          기한 내 처분하지 못하면 중과세율(8%)과의 차액이 추징됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-at-house-count">
        <h2 id="guide-at-house-count" className="text-foreground text-xl font-semibold tracking-tight">
          주택 수 산정 시 주의사항
        </h2>
        <p>
          취득세는 계산이 아니라 분류에서 실수가 발생하는 경우가 많습니다. 분양권·입주권은 취득 시점과 유형에 따라 지방세법상 주택
          수에 포함될 수 있으므로 사전 확인이 필요합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              주택 수 포함·제외 항목(참고)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주택 수 포함 항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주택 수 제외 항목
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-border border-b px-3 py-2.5">아파트·빌라·단독주택</td>
                <td className="border-border border-b px-3 py-2.5">오피스텔(취득 시점 업무시설)</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">분양권(2020년 8월 이후 취득분)</td>
                <td className="border-border border-b px-3 py-2.5">공시가격 1억 원 이하 주택(일부 예외)</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">조합원 입주권</td>
                <td className="border-border border-b px-3 py-2.5">상속주택(일정 요건 충족 시)</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">배우자 보유 주택</td>
                <td className="border-border border-b px-3 py-2.5">지방 저가 주택(요건 충족 시)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-at-officetel">
        <h2 id="guide-at-officetel" className="text-foreground text-xl font-semibold tracking-tight">
          오피스텔 취득세: 업무시설(공부상) 분류 시
        </h2>
        <p>
          이 절에서는 취득 시점에 건축물대장 등 공부상 업무시설로 분류된 오피스텔을 기준으로 합니다. 이 경우 주택 수나 조정대상지역
          여부와 관계없이 4%의 고정 취득세율이 적용되며, 실제로 주거에 사용하더라도 과세는 취득 시점의 공부상 용도를 따릅니다.
        </p>
        <p>
          주택으로 보는 오피스텔(주거용 판정 등)이면 요건·취득 시점에 따라 위와 다른 취득세율이 적용될 수 있습니다. 주거용과
          업무용의 차이는{" "}
          <Link
            href="/guide/officetel-residential-vs-business-tax-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            오피스텔 취득세: 주거용 vs 업무용 차이
          </Link>{" "}
          가이드에서 정리했습니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-at-payment">
        <h2 id="guide-at-payment" className="text-foreground text-xl font-semibold tracking-tight">
          취득세 납부 방법과 기한
        </h2>
        <p>
          취득세는 잔금 지급일과 등기 접수일 중 빠른 날로부터 60일 이내에 납부해야 합니다. 위택스(wetax.go.kr) 온라인 신고 또는 관할
          시·군·구청 방문 신고가 가능합니다. 납부 기한을 초과하면 신고불성실가산세(20%)와 납부지연가산세(1일 0.022%)가 추가로
          부과됩니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 취득세율과 조정대상지역 지정 현황은 정부 정책에 따라 수시로 변동됩니다. 정확한 세율과 지역 지정 현황은 위택스(wetax.go.kr) 및
          행정안전부에서 확인할 것을 권장합니다.
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
      </aside>
    </>
  );
}
