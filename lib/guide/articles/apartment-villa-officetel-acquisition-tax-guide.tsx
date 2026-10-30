import Link from "next/link";

export const apartmentVillaOfficetelAcquisitionTaxGuideMeta = {
  slug: "apartment-villa-officetel-acquisition-tax-guide",
  title: "아파트 vs 빌라 vs 오피스텔 취득세 차이",
  description:
    "2026년 10월 30일 기준 아파트·빌라·오피스텔의 취득세 체계, 주택 수 포함 기준, 유형별 실납부액과 절세 관점 비교를 표로 정리했습니다.",
  updated: "2026년 10월 30일",
} as const;

export function ApartmentVillaOfficetelAcquisitionTaxGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-avo-overview">
        <h2 id="guide-avo-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 10월 30일 기준
        </h2>
        <p>
          주택 유형에 따라 취득세율 체계가 다릅니다. 아파트와 빌라는 건축법상 주택으로 분류되어 주택 취득세율이 적용되지만,
          오피스텔은 건축법상 업무시설로 취득 시점의 용도에 따라 세율이 달라집니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-avo-core-compare">
        <h2 id="guide-avo-core-compare" className="text-foreground text-xl font-semibold tracking-tight">
          유형별 취득세율 핵심 비교
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              유형별 취득세 체계 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  아파트
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  빌라(연립·다세대)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  오피스텔(업무용)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  오피스텔(주거용 판정)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  건축법 분류
                </th>
                <td className="border-border border-b px-3 py-2.5">공동주택</td>
                <td className="border-border border-b px-3 py-2.5">공동주택</td>
                <td className="border-border border-b px-3 py-2.5">업무시설</td>
                <td className="border-border border-b px-3 py-2.5">업무시설</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득 시 세율
                </th>
                <td className="border-border border-b px-3 py-2.5">1% ~ 12%</td>
                <td className="border-border border-b px-3 py-2.5">1% ~ 12%</td>
                <td className="border-border border-b px-3 py-2.5">4%(고정)</td>
                <td className="border-border border-b px-3 py-2.5">1% ~ 12%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  지방교육세
                </th>
                <td className="border-border border-b px-3 py-2.5">취득세의 10%</td>
                <td className="border-border border-b px-3 py-2.5">취득세의 10%</td>
                <td className="border-border border-b px-3 py-2.5">0.4%(고정)</td>
                <td className="border-border border-b px-3 py-2.5">취득세의 10%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  농어촌특별세
                </th>
                <td className="border-border border-b px-3 py-2.5">85㎡ 초과 0.2%</td>
                <td className="border-border border-b px-3 py-2.5">85㎡ 초과 0.2%</td>
                <td className="border-border border-b px-3 py-2.5">0.2%</td>
                <td className="border-border border-b px-3 py-2.5">85㎡ 초과 0.2%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주택 수 포함
                </th>
                <td className="border-border border-b px-3 py-2.5">항상 포함</td>
                <td className="border-border border-b px-3 py-2.5">항상 포함</td>
                <td className="border-border border-b px-3 py-2.5">조건부 포함</td>
                <td className="border-border border-b px-3 py-2.5">포함</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  다주택 중과
                </th>
                <td className="px-3 py-2.5">적용</td>
                <td className="px-3 py-2.5">적용</td>
                <td className="px-3 py-2.5">업무용 시 미적용</td>
                <td className="px-3 py-2.5">적용</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-avo-house-tax">
        <h2 id="guide-avo-house-tax" className="text-foreground text-xl font-semibold tracking-tight">
          아파트·빌라 취득세(1주택 기준)
        </h2>
        <p>아파트와 빌라는 동일한 주택 취득세율 체계를 적용받습니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              1주택 취득가액 구간별 세율
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
                <td className="border-border border-b px-3 py-2.5">1.1%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  6억 원 초과 ~ 9억 원 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">1% ~ 3%</td>
                <td className="border-border border-b px-3 py-2.5">취득세의 10%</td>
                <td className="border-border border-b px-3 py-2.5">1.1% ~ 3.3%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  9억 원 초과
                </th>
                <td className="px-3 py-2.5">3%</td>
                <td className="px-3 py-2.5">0.3%</td>
                <td className="px-3 py-2.5">3.3%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>전용 85㎡ 초과 시 농어촌특별세 0.2%가 추가됩니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-avo-office-tax">
        <h2 id="guide-avo-office-tax" className="text-foreground text-xl font-semibold tracking-tight">
          오피스텔 취득세: 업무용 기준
        </h2>
        <p>
          오피스텔은 건축법상 업무시설이므로 취득 시점에는 용도·지역·주택 수에 관계없이 4%의 고정 취득세율이 적용됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              업무용 오피스텔 고정 세율
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  세율
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득세
                </th>
                <td className="border-border border-b px-3 py-2.5">4%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  지방교육세
                </th>
                <td className="border-border border-b px-3 py-2.5">0.4%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  농어촌특별세
                </th>
                <td className="border-border border-b px-3 py-2.5">0.2%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  합계
                </th>
                <td className="px-3 py-2.5">4.6%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>주택 수나 조정대상지역 여부와 무관하게 항상 4.6%가 적용됩니다.</p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-avo-residential-office">
        <h2 id="guide-avo-residential-office" className="text-foreground text-xl font-semibold tracking-tight">
          오피스텔 취득세: 주거용 판정 시
        </h2>
        <p>
          주거용 오피스텔은 실제 사용 방식에 따라 세법상 주택으로 간주되어 주택 취득세율(1~12%)이 적용됩니다. 이 경우 다주택자라면
          중과세율까지 적용될 수 있습니다.
        </p>
        <p>
          오피스텔의 주거용·업무용 판정은 취득 시점이 아닌 사용 방식 기준이므로, 취득 후 주거용으로 사용하면 소급 적용될 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-avo-actual-compare">
        <h2 id="guide-avo-actual-compare" className="text-foreground text-xl font-semibold tracking-tight">
          매매가별 유형별 취득세 실제 납부액 비교
        </h2>
        <p className="text-muted-foreground text-sm">1주택 취득, 전용 85㎡ 이하 기준</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              아파트·빌라 vs 업무용 오피스텔 납부액 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  매매가
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  아파트·빌라
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  오피스텔(업무용)
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
                <td className="border-border border-b px-3 py-2.5">1,380만 원</td>
                <td className="border-border border-b px-3 py-2.5">1,050만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">550만 원</td>
                <td className="border-border border-b px-3 py-2.5">2,300만 원</td>
                <td className="border-border border-b px-3 py-2.5">1,750만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  7억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">약 1,284만 원</td>
                <td className="border-border border-b px-3 py-2.5">3,220만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 1,936만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  9억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">2,970만 원</td>
                <td className="border-border border-b px-3 py-2.5">4,140만 원</td>
                <td className="border-border border-b px-3 py-2.5">1,170만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  12억 원
                </th>
                <td className="px-3 py-2.5">3,960만 원</td>
                <td className="px-3 py-2.5">5,520만 원</td>
                <td className="px-3 py-2.5">1,560만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          매매가가 낮을수록 오피스텔의 세 부담이 상대적으로 더 큽니다. 3억 원 기준 아파트 취득세의 약 4배에 달합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-avo-office-inclusion">
        <h2 id="guide-avo-office-inclusion" className="text-foreground text-xl font-semibold tracking-tight">
          오피스텔 주택 수 포함 기준
        </h2>
        <p>
          재산세가 업무용으로 과세되는 오피스텔은 주택 수에서 제외되지만, 2020년 8월 12일 이후 취득한 오피스텔 중 주택분 재산세 과세
          대상은 주택 수에 포함됩니다. 시가표준액 1억 원 이하인 재산세 과세 대상 오피스텔은 주택 수에서 제외됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              오피스텔 유형별 주택 수 포함 여부
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  오피스텔 유형
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주택 수 포함 여부
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  업무용 재산세 과세 오피스텔
                </th>
                <td className="border-border border-b px-3 py-2.5">제외</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2020년 8월 11일 이전 취득
                </th>
                <td className="border-border border-b px-3 py-2.5">제외</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2020년 8월 12일 이후 취득·주거용 재산세 과세
                </th>
                <td className="border-border border-b px-3 py-2.5">포함</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  시가표준액 1억 원 이하
                </th>
                <td className="px-3 py-2.5">제외</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-avo-saving-view">
        <h2 id="guide-avo-saving-view" className="text-foreground text-xl font-semibold tracking-tight">
          유형 선택 시 취득세 절세 관점 비교
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              상황별 유리한 유형
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상황
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  유리한 유형
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  이유
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  무주택자·저가 주택 구입
                </th>
                <td className="border-border border-b px-3 py-2.5">아파트·빌라</td>
                <td className="border-border border-b px-3 py-2.5">취득세 1%로 오피스텔 4%보다 낮음</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  기존 주택 보유자 추가 구입
                </th>
                <td className="border-border border-b px-3 py-2.5">업무용 오피스텔</td>
                <td className="border-border border-b px-3 py-2.5">주택 수 미포함으로 중과 회피 가능</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  9억 원 초과 고가 주택
                </th>
                <td className="border-border border-b px-3 py-2.5">아파트·빌라</td>
                <td className="border-border border-b px-3 py-2.5">3% vs 오피스텔 4%, 아파트 유리</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  다주택자 추가 구입
                </th>
                <td className="px-3 py-2.5">업무용 오피스텔</td>
                <td className="px-3 py-2.5">중과세율 8~12% 회피 가능</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-avo-caution-office">
        <h2 id="guide-avo-caution-office" className="text-foreground text-xl font-semibold tracking-tight">
          주의사항: 오피스텔 업무용 유지 조건
        </h2>
        <p>
          업무용 오피스텔로 주택 수 제외 혜택을 받으려면 사업자등록을 유지해야 합니다. 취득 후 실제 주거용으로 전환하면 주택 수에
          포함되어 추후 아파트·빌라 추가 취득 시 다주택 중과가 적용될 수 있습니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-avo-caution-villa">
        <h2 id="guide-avo-caution-villa" className="text-foreground text-xl font-semibold tracking-tight">
          빌라 취득 시 추가 확인사항
        </h2>
        <p>
          빌라(연립·다세대)는 아파트와 동일한 세율이 적용되지만, 전세보증보험 가입 가능 여부·시세 파악 난이도·담보 인정 가치 등에서
          아파트와 차이가 있습니다. 취득세 이외의 실거래 조건도 함께 검토해야 합니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 오피스텔의 주거용·업무용 판정 기준과 주택 수 포함 여부는 과세당국의 실질 조사에 따라 달라질 수 있습니다. 정확한 세율 적용
          기준은 관할 시·군·구청 세무과에서 확인할 것을 권장합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="취득세 계산기 이동"
      >
        <p>
          <Link href="/acquisition-tax-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            유형별 매매가에 따른 취득세는 취득세 계산기에서 바로 확인할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
