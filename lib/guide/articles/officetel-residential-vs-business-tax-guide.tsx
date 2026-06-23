import Link from "next/link";

export const officetelResidentialVsBusinessTaxGuideMeta = {
  slug: "officetel-residential-vs-business-tax-guide",
  title: "오피스텔 취득세: 주거용 vs 업무용 차이",
  description:
    "오피스텔 주거·업무용 판정 기준, 취득세·주택 수·재산세에 미치는 차이, 매수 전 확인 순서와 판정 착오 시 리스크를 정리했습니다.",
  updated: "2026년 4월 27일",
} as const;

export function OfficetelResidentialVsBusinessTaxGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-orb-overview">
        <h2 id="guide-orb-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 4월 기준
        </h2>
        <p>
          오피스텔은 건축법상 업무시설이지만 실제 사용 방식에 따라 주거용과 업무용으로 구분됩니다. 업무용이면 4.6%, 주거용으로
          판정되면 주택 세율(1~12%)이 적용되므로 판정 결과에 따라 세금 차이가 수천만 원에 이르기도 합니다.{" "}
          <Link href="/acquisition-tax-calculator" className="text-primary underline-offset-4 hover:underline">
            취득세 계산기
          </Link>
          로 금액을 확인한 뒤, <strong>왜 주거·업무 판정이 갈리는지</strong>를 이 글에서 정리합니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-orb-before-buy">
        <h2 id="guide-orb-before-buy" className="text-foreground text-xl font-semibold tracking-tight">
          계약 전 확인 순서
        </h2>
        <p>
          건축물대장 용도, 전입 가능 여부, 관리규약·입주자 명부, 실제 거주·사무 사용 계획을 순서대로 봅니다. “전입만 하면
          주택”이 아니라 <strong>실제 사용</strong>이 함께 봅니다. 주거용으로 취득세를 낮게 신고했다가 업무용으로 바뀌면
          추징·주택 수 판정이 뒤바뀔 수 있습니다.{" "}
          <Link href="/guide/apartment-villa-officetel-acquisition-tax-guide" className="text-primary underline-offset-4 hover:underline">
            아파트·빌라·오피스텔 취득세
          </Link>
          와{" "}
          <Link href="/guide/acquisition-tax-rates-2026-guide" className="text-primary underline-offset-4 hover:underline">
            2026년 취득세율
          </Link>
          도 함께 참고하세요.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-orb-scenario">
        <h2 id="guide-orb-scenario" className="text-foreground text-xl font-semibold tracking-tight">
          시나리오: 매매 3억 오피스텔, 실거주 vs 사무실
        </h2>
        <p>
          업무용 4.6%면 취득세 약 1,380만 원(지방교육세 별도) 수준이고, 주거용 1%대면 300만 원대로 크게 달라질 수 있습니다.
          다만 주거용으로 판정되면 <strong>주택 수에 포함</strong>되어 이후 아파트 취득 시 1주택·2주택 규제가 달라집니다.
          “세금만 싸게”가 아니라 이후 매매·대출 계획까지 묶어서 봐야 합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-orb-classification">
        <h2 id="guide-orb-classification" className="text-foreground text-xl font-semibold tracking-tight">
          주거용 vs 업무용 구분 기준
        </h2>
        <p>오피스텔의 용도 구분은 취득 시점이 아닌 실제 사용 방식을 기준으로 판단합니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              오피스텔 용도 판정 기준
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분 기준
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주거용
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  업무용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  전입신고
                </th>
                <td className="border-border border-b px-3 py-2.5">해당 주소로 전입신고</td>
                <td className="border-border border-b px-3 py-2.5">전입신고 없음</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  사업자등록
                </th>
                <td className="border-border border-b px-3 py-2.5">없음</td>
                <td className="border-border border-b px-3 py-2.5">해당 주소로 사업자등록</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  실제 사용
                </th>
                <td className="border-border border-b px-3 py-2.5">주거 목적 거주</td>
                <td className="border-border border-b px-3 py-2.5">사무·업무 목적 사용</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  재산세 과세 유형
                </th>
                <td className="px-3 py-2.5">주택분 재산세</td>
                <td className="px-3 py-2.5">건축물분 재산세</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          전입신고 여부만으로 판단하지 않습니다. 실질 기준으로 판단하기 때문에 전입신고와 무관하게 실제 주거용으로 사용하면
          주거용으로 간주됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-orb-tax-rate">
        <h2 id="guide-orb-tax-rate" className="text-foreground text-xl font-semibold tracking-tight">
          취득세율 비교
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              업무용 vs 주거용 오피스텔 세율 차이
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  업무용 오피스텔
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주거용 오피스텔
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득세율
                </th>
                <td className="border-border border-b px-3 py-2.5">4%(고정)</td>
                <td className="border-border border-b px-3 py-2.5">1% ~ 12%(주택 수·매매가 기준)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  지방교육세
                </th>
                <td className="border-border border-b px-3 py-2.5">0.4%</td>
                <td className="border-border border-b px-3 py-2.5">취득세의 10%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  농어촌특별세
                </th>
                <td className="border-border border-b px-3 py-2.5">0.2%</td>
                <td className="border-border border-b px-3 py-2.5">85㎡ 초과 시 0.2%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  합계
                </th>
                <td className="border-border border-b px-3 py-2.5">4.6%(고정)</td>
                <td className="border-border border-b px-3 py-2.5">1.1% ~ 13.4%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주택 수 포함
                </th>
                <td className="border-border border-b px-3 py-2.5">조건부 제외</td>
                <td className="border-border border-b px-3 py-2.5">포함</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  다주택 중과
                </th>
                <td className="px-3 py-2.5">미적용</td>
                <td className="px-3 py-2.5">적용</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-orb-price-compare">
        <h2 id="guide-orb-price-compare" className="text-foreground text-xl font-semibold tracking-tight">
          매매가별 업무용 vs 주거용 취득세 비교
        </h2>
        <p className="text-muted-foreground text-sm">무주택자 1주택 취득 기준, 전용 85㎡ 이하</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              무주택자 기준 납부액 차이
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  매매가
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  업무용 취득세(4.6%)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주거용 취득세(1.1%)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  차이
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">920만 원</td>
                <td className="border-border border-b px-3 py-2.5">220만 원</td>
                <td className="border-border border-b px-3 py-2.5">700만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">1,380만 원</td>
                <td className="border-border border-b px-3 py-2.5">330만 원</td>
                <td className="border-border border-b px-3 py-2.5">1,050만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">2,300만 원</td>
                <td className="border-border border-b px-3 py-2.5">550만 원</td>
                <td className="border-border border-b px-3 py-2.5">1,750만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  7억 원
                </th>
                <td className="px-3 py-2.5">3,220만 원</td>
                <td className="px-3 py-2.5">약 1,284만 원</td>
                <td className="px-3 py-2.5">약 1,936만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          무주택자가 주거 목적으로 오피스텔을 취득하는 경우, 업무용보다 주거용 판정을 받는 것이 취득세 부담이 훨씬 낮습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-orb-multi-owner">
        <h2 id="guide-orb-multi-owner" className="text-foreground text-xl font-semibold tracking-tight">
          다주택자 기준 업무용 vs 주거용 취득세 비교
        </h2>
        <p className="text-muted-foreground text-sm">전용 85㎡ 이하·농특세 제외(취득세 계산기 기준)</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              다주택자 추가 취득 시 납부액 차이
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  매매가
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  업무용(4.6%)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주거용 2주택 중과(8%)
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
                <td className="border-border border-b px-3 py-2.5">1,380만 원</td>
                <td className="border-border border-b px-3 py-2.5">2,520만 원</td>
                <td className="border-border border-b px-3 py-2.5">1,140만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">2,300만 원</td>
                <td className="border-border border-b px-3 py-2.5">4,200만 원</td>
                <td className="border-border border-b px-3 py-2.5">1,900만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  7억 원
                </th>
                <td className="px-3 py-2.5">3,220만 원</td>
                <td className="px-3 py-2.5">5,880만 원</td>
                <td className="px-3 py-2.5">2,660만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          기존 주택 보유자가 추가로 오피스텔을 취득할 때는 업무용이 유리합니다. 주거용으로 판정되면 다주택 중과(8%)가 적용되어 세
          부담이 크게 늘어납니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-orb-count-rules">
        <h2 id="guide-orb-count-rules" className="text-foreground text-xl font-semibold tracking-tight">
          주택 수 포함 여부 상세 기준
        </h2>
        <p>오피스텔이 주택 수에 포함되는지 여부는 취득 시점과 재산세 과세 유형에 따라 결정됩니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              오피스텔 주택 수 포함 기준
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  조건
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주택 수 포함 여부
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2020년 8월 11일 이전 취득
                </th>
                <td className="border-border border-b px-3 py-2.5">제외</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2020년 8월 12일 이후 취득·업무용 재산세 과세
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
        <p>주택 수 포함 여부는 이후 아파트·빌라 추가 취득 시 취득세 중과 여부를 결정하므로 반드시 확인해야 합니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-orb-usage-change">
        <h2 id="guide-orb-usage-change" className="text-foreground text-xl font-semibold tracking-tight">
          취득 후 용도 변경 시 주의사항
        </h2>
        <p>
          업무용으로 취득한 후 주거용으로 전환하는 경우, 또는 주거용으로 취득한 후 업무용으로 전환하는 경우 재산세 과세 유형이 변경되어
          주택 수 포함 여부가 달라질 수 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              용도 전환 시 세금 영향
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상황
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  세금 영향
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  업무용 취득 → 주거용 전환
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  주택 수 포함으로 변경·추후 주택 추가 취득 시 중과 가능
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주거용 취득 → 업무용 전환
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  주택 수 제외로 변경·양도세 주택 비과세 미적용
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  업무용 유지 중 전입신고
                </th>
                <td className="px-3 py-2.5">주거용으로 실질 판정 가능</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-orb-vat">
        <h2 id="guide-orb-vat" className="text-foreground text-xl font-semibold tracking-tight">
          업무용 오피스텔 취득 시 부가가치세 환급
        </h2>
        <p>
          업무용 오피스텔을 취득하고 사업자등록을 하면 취득 시 부담한 부가가치세(매매가의 10%)를 환급받을 수 있습니다. 단, 이후
          주거용으로 전환하면 환급받은 부가가치세를 반납해야 합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              부가세 환급 핵심 포인트
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
                  환급 요건
                </th>
                <td className="border-border border-b px-3 py-2.5">사업자등록 후 업무용 사용</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  환급 금액
                </th>
                <td className="border-border border-b px-3 py-2.5">취득가액의 약 9.09%(부가세 포함가 기준)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  환급 기한
                </th>
                <td className="border-border border-b px-3 py-2.5">취득 후 확정신고 시</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  전환 시 반납
                </th>
                <td className="px-3 py-2.5">주거용 전환 비율에 따라 부가세 반납</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-orb-checklist">
        <h2 id="guide-orb-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          오피스텔 취득 전 확인 체크리스트
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              취득 전 점검 항목
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
                  실제 사용 목적(주거 vs 업무) 확정
                </th>
                <td className="border-border border-b px-3 py-2.5">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  현재 보유 주택 수 및 오피스텔 주택 수 포함 여부
                </th>
                <td className="border-border border-b px-3 py-2.5">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  업무용 유지 시 사업자등록 가능 여부
                </th>
                <td className="border-border border-b px-3 py-2.5">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주거용 전환 계획 유무
                </th>
                <td className="border-border border-b px-3 py-2.5">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  부가가치세 환급 가능 여부
                </th>
                <td className="border-border border-b px-3 py-2.5">□</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  이후 주택 추가 취득 계획 여부
                </th>
                <td className="px-3 py-2.5">□</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 오피스텔의 주거용·업무용 판정은 과세당국의 실질 조사 결과에 따라 달라질 수 있습니다. 정확한 판정 기준과 세율 적용은
          관할 세무서 또는 세무사 상담을 통해 확인할 것을 권장합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="취득세 계산기 이동"
      >
        <p>
          <Link href="/acquisition-tax-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            매매가에 따른 업무용·주거용 취득세 차이는 취득세 계산기에서 확인할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
