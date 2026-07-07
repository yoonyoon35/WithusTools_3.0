import Link from "next/link";

export const inheritanceTaxOverviewGuideMeta = {
  slug: "inheritance-tax-overview-guide",
  title: "상속세란? 과세가액·상속공제·누진세율·신고·납부 한 번에 정리",
  description:
    "2026년 7월 기준 국세청 상속세 세액계산흐름도·상속세법을 바탕으로 과세가액·일괄공제·배우자공제·금융재산·동거주택공제·감정평가 수수료·누진세율·세대생략할증·신고세액공제·분납을 표와 7억·15억 원 계산 예시로 정리했습니다.",
  updated: "2026년 7월 7일",
} as const;

export function InheritanceTaxOverviewGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-ito-overview">
        <h2 id="guide-ito-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 기준
        </h2>
        <p>
          피상속인(돌아가신 분)의 재산이 상속인에게 이전되면, 그 재산가액에 따라{" "}
          <strong>상속세</strong>가 부과될 수 있습니다. 취득세·양도세·종부세와 달리{" "}
          <strong>상속 개시(사망) 시점</strong>에 국세로 신고·납부하는 세금입니다.{" "}
          <Link
            href="/inheritance-tax-calculator"
            className="text-primary underline-offset-4 hover:underline"
          >
            상속세 계산기
          </Link>
          로 예상 세액을 확인한 뒤, 이 글에서는 국세청 「상속세 개요」「세액계산흐름도」를 바탕으로 제도의
          뼈대를 정리합니다. 상속 주택의 <strong>취득세</strong>는 별도 지방세이며,{" "}
          <Link
            href="/guide/inherited-housing-acquisition-tax-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            상속 주택 취득세 가이드
          </Link>
          에서 다룹니다.
        </p>
      </section>

      <nav
        className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm"
        aria-label="목차"
      >
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-ito-what" className="text-primary underline-offset-4 hover:underline">
              상속세란 · 다른 세금과 구분
            </a>
          </li>
          <li>
            <a href="#guide-ito-flow" className="text-primary underline-offset-4 hover:underline">
              세액 계산 흐름
            </a>
          </li>
          <li>
            <a href="#guide-ito-taxable" className="text-primary underline-offset-4 hover:underline">
              과세가액 산출
            </a>
          </li>
          <li>
            <a href="#guide-ito-deduction" className="text-primary underline-offset-4 hover:underline">
              상속공제 요약
            </a>
          </li>
          <li>
            <a href="#guide-ito-base" className="text-primary underline-offset-4 hover:underline">
              과세표준 · 감정평가 수수료
            </a>
          </li>
          <li>
            <a href="#guide-ito-rates" className="text-primary underline-offset-4 hover:underline">
              누진세율
            </a>
          </li>
          <li>
            <a href="#guide-ito-surcharge" className="text-primary underline-offset-4 hover:underline">
              세대생략·세액공제
            </a>
          </li>
          <li>
            <a href="#guide-ito-example" className="text-primary underline-offset-4 hover:underline">
              계산 예시(7억·15억)
            </a>
          </li>
          <li>
            <a href="#guide-ito-filing" className="text-primary underline-offset-4 hover:underline">
              신고·납부·분납
            </a>
          </li>
          <li>
            <a href="#guide-ito-after-inheritance" className="text-primary underline-offset-4 hover:underline">
              상속 후 절차·연계 세금
            </a>
          </li>
          <li>
            <a href="#guide-ito-misconceptions" className="text-primary underline-offset-4 hover:underline">
              자주 헷갈리는 점
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-4" aria-labelledby="guide-ito-what">
        <h2 id="guide-ito-what" className="text-foreground text-xl font-semibold tracking-tight">
          상속세란 · 다른 세금과 구분
        </h2>
        <p>
          상속세는 <strong>상속인·수유자·유증 수령자</strong> 등이 피상속인의 재산을 이전받을 때, 그 재산가액에서
          공제를 차감한 뒤 남은 금액(과세표준)에 누진세율을 적용해 산출하는 <strong>국세</strong>입니다. 재산이
          많더라도 공제·비과세 재산이 크면 세액이 없거나 적을 수 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              상속과 관련된 주요 세금
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  세금
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  시점
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비고
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-muted/20">
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  상속세
                </th>
                <td className="border-border border-b px-3 py-2.5">상속 개시(사망) 시</td>
                <td className="border-border border-b px-3 py-2.5">국세 · 6개월 이내 신고·납부</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  상속 취득세
                </th>
                <td className="border-border border-b px-3 py-2.5">부동산 등 취득 시</td>
                <td className="border-border border-b px-3 py-2.5">
                  지방세 · 주택 2.8% 등(
                  <Link
                    href="/guide/inherited-housing-acquisition-tax-2026-guide"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    상속 취득세
                  </Link>
                  )
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  재산세·종부세
                </th>
                <td className="border-border border-b px-3 py-2.5">보유 중 매년</td>
                <td className="border-border border-b px-3 py-2.5">
                  상속 후 명의 이전·보유에 따라(
                  <Link
                    href="/guide/comprehensive-property-tax-overview-guide"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    보유세 개요
                  </Link>
                  )
                </td>
              </tr>
              <tr>
                <th scope="row" className="px-3 py-2.5 font-medium">
                  양도소득세
                </th>
                <td className="px-3 py-2.5">상속 재산 매도 시</td>
                <td className="px-3 py-2.5">
                  상속인이 나중에 처분할 때(
                  <Link
                    href="/guide/capital-gains-tax-overview-guide"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    양도세 개요
                  </Link>
                  )
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ito-flow">
        <h2 id="guide-ito-flow" className="text-foreground text-xl font-semibold tracking-tight">
          세액 계산 흐름
        </h2>
        <p>국세청 세액계산흐름도·상속세 신고서 순서는 다음과 같습니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              계산 단계
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  단계
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  산식
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  ① 과세가액
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  총상속재산 − 비과세·불산입 − 공과금·채무·장례 + 사전증여
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  ② 상속공제
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  max(기초+인적, 5억 일괄) + 배우자 + 금융 + 동거주택 + 재해 + 가업·영농 등 (제24조 한도)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  ③ 과세표준
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  과세가액 − 상속공제 − <strong>감정평가 수수료</strong>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  ④ 산출세액
                </th>
                <td className="border-border border-b px-3 py-2.5">과세표준 × 누진세율 − 누진공제</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  ⑤ 납부세액
                </th>
                <td className="px-3 py-2.5">
                  산출세액 + 세대생략할증 − 증여세액공제 − 신고세액공제(3%)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          과세표준이 <strong>50만 원 미만</strong>이면 상속세를 부과하지 않습니다(제25조②). 감정평가 수수료는
          상속공제가 아니라 과세표준에서 별도 차감합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ito-taxable">
        <h2 id="guide-ito-taxable" className="text-foreground text-xl font-semibold tracking-tight">
          과세가액 산출
        </h2>
        <p>
          <strong>총상속재산가액</strong>은 상속개시일 현재 시가로 평가합니다. 부동산·금융자산·보험금·신탁재산 등
          모두 포함되며, 홈택스 자동계산이나 감정평가와 대조하는 것이 일반적입니다.
        </p>
        <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong className="text-foreground">차감</strong>: 비과세 재산(국가·공공기관 기부 등), 과세가액 불산입
            재산, 공과금·채무·장례비용
          </li>
          <li>
            <strong className="text-foreground">가산(사전증여)</strong>: 상속개시 전 10년 이내 상속인에게 한 증여,
            5년 이내 비상속인에게 한 증여 재산가액
          </li>
          <li>
            <strong className="text-foreground">장례비</strong>: 시행령상 한도(통상 500~1,500만 원) 내에서 인정.
            실제 지출과 증빙에 따라 달라집니다.
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ito-deduction">
        <h2 id="guide-ito-deduction" className="text-foreground text-xl font-semibold tracking-tight">
          상속공제 요약
        </h2>
        <p>
          상속공제는 과세가액에서 차감하는 금액입니다. 합계가 <strong>제24조 종합한도</strong>를 넘으면 한도까지만
          인정됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              주요 상속공제(상속세법 제18~23조의2)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  공제
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  금액·산식
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비고
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  기초+인적
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  기초 2억 + 자녀 5,000만/인 + 미성년·연로·장애인 등
                </td>
                <td className="border-border border-b px-3 py-2.5">배우자 단독 상속인은 일괄공제 불가</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  일괄공제
                </th>
                <td className="border-border border-b px-3 py-2.5">5억 원</td>
                <td className="border-border border-b px-3 py-2.5">
                  max(기초+인적, 5억). 자녀 2명(3억)이어도 5억 적용
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  배우자공제
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  min(실제상속, 법정분, 30억), 최소 5억
                </td>
                <td className="border-border border-b px-3 py-2.5">민법 법정상속분 기준</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  금융재산
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  2,000만 이하 전액, 초과 max(20%, 2,000만) · 한도 2억
                </td>
                <td className="border-border border-b px-3 py-2.5">본래 상속재산 중 금융만</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  동거주택
                </th>
                <td className="border-border border-b px-3 py-2.5">상속주택 100%, 한도 6억</td>
                <td className="border-border border-b px-3 py-2.5">10년 동거·무주택 등 요건</td>
              </tr>
              <tr>
                <th scope="row" className="px-3 py-2.5 font-medium whitespace-nowrap">
                  가업·영농 등
                </th>
                <td className="px-3 py-2.5">별도 요건·한도</td>
                <td className="px-3 py-2.5">계산기에서는 직접 입력</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ito-base">
        <h2 id="guide-ito-base" className="text-foreground text-xl font-semibold tracking-tight">
          과세표준 · 감정평가 수수료
        </h2>
        <p>
          상속공제를 모두 적용한 뒤 남은 금액에서 <strong>감정평가 수수료</strong>를 추가로 빼면 과세표준이 됩니다.
          수수료는 상속공제 항목이 아니므로, 공제 후 금액과 과세표준 사이에 별도로 표시하는 것이 맞습니다.
        </p>
        <p className="font-mono text-sm">
          과세표준 = 과세가액 − 상속공제 합계 − 감정평가 수수료
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ito-rates">
        <h2 id="guide-ito-rates" className="text-foreground text-xl font-semibold tracking-tight">
          누진세율
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              상속세율(제26조)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  과세표준
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  세율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  누진공제
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-border border-b px-3 py-2.5">1억 원 이하</td>
                <td className="border-border border-b px-3 py-2.5">10%</td>
                <td className="border-border border-b px-3 py-2.5">—</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">5억 원 이하</td>
                <td className="border-border border-b px-3 py-2.5">20%</td>
                <td className="border-border border-b px-3 py-2.5">1,000만 원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">10억 원 이하</td>
                <td className="border-border border-b px-3 py-2.5">30%</td>
                <td className="border-border border-b px-3 py-2.5">6,000만 원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">30억 원 이하</td>
                <td className="border-border border-b px-3 py-2.5">40%</td>
                <td className="border-border border-b px-3 py-2.5">1억 6,000만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="px-3 py-2.5">30억 원 초과</td>
                <td className="px-3 py-2.5">50%</td>
                <td className="px-3 py-2.5">4억 6,000만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ito-surcharge">
        <h2 id="guide-ito-surcharge" className="text-foreground text-xl font-semibold tracking-tight">
          세대생략·세액공제
        </h2>
        <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong className="text-foreground">세대생략 할증</strong>: 자녀가 아닌 직계비속(손·손녀 등) 상속 시
            산출세액 × 지분 × 30%. 미성년자가 20억 초과 상속 시 40%. 대습상속은 배제.
          </li>
          <li>
            <strong className="text-foreground">증여세액공제</strong>: 과세가액 5억 초과·사전증여분에 대해 납부(예정)
            증여세를 산출세액 안분 공제.
          </li>
          <li>
            <strong className="text-foreground">신고세액공제</strong>: 법정신고기한 내 자진신고 시 (산출세액 + 할증 −
            증여세액공제) × 3%.
          </li>
        </ul>
      </section>

      <section className="space-y-6" aria-labelledby="guide-ito-example">
        <h2 id="guide-ito-example" className="text-foreground text-xl font-semibold tracking-tight">
          계산 예시
        </h2>
        <p>
          배우자+자녀가 있는 일반 가정을 기준으로, <strong>7억 원(면세)</strong>과 <strong>15억 원(납부)</strong> 두
          가지를 비교합니다.{" "}
          <Link
            href="/inheritance-tax-calculator"
            className="text-primary underline-offset-4 hover:underline"
          >
            상속세 계산기
          </Link>
          와 동일한 순서입니다.
        </p>

        <div className="space-y-4" aria-labelledby="guide-ito-example-700m">
          <h3 id="guide-ito-example-700m" className="text-foreground text-lg font-semibold tracking-tight">
            예시 1 — 7억 원: 상속세 없음
          </h3>
          <p className="text-muted-foreground text-sm">
            총상속재산 7억(아파트 위주), 장례비 3,000만, 금융재산 5,000만, 배우자+자녀 2명, 사전증여·감정평가
            수수료 없음을 가정합니다.
          </p>
          <ol className="text-muted-foreground list-decimal space-y-2 pl-5 text-sm leading-relaxed">
            <li>
              <strong className="text-foreground">과세가액</strong> = 7억 − 3,000만 ={" "}
              <strong className="text-foreground">6억 7,000만</strong>
            </li>
            <li>
              <strong className="text-foreground">상속공제(한도 전)</strong>: 일괄 5억 + 배우자 최소 5억 + 금융
              2,000만(5,000만×20%와 최소 2,000만 중 큰 값) = 10억 2,000만
            </li>
            <li>
              <strong className="text-foreground">상속공제(실제 반영)</strong>: 과세가액 6.7억을 초과할 수 없으므로{" "}
              <strong className="text-foreground">6억 7,000만</strong>까지만 공제
            </li>
            <li>
              <strong className="text-foreground">과세표준</strong> = 6.7억 − 6.7억 ={" "}
              <strong className="text-foreground">0원</strong> → <strong className="text-foreground">상속세 없음</strong>
            </li>
          </ol>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
              <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
                7억 원 사례 요약
              </caption>
              <tbody>
                <tr>
                  <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium w-40">
                    과세가액
                  </th>
                  <td className="border-border border-b px-3 py-2.5">6억 7,000만 원</td>
                </tr>
                <tr>
                  <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium">
                    상속공제
                  </th>
                  <td className="border-border border-b px-3 py-2.5">6억 7,000만 원(과세가액 한도)</td>
                </tr>
                <tr className="bg-muted/20">
                  <th scope="row" className="px-3 py-2.5 font-medium">
                    납부 상속세
                  </th>
                  <td className="px-3 py-2.5">
                    <strong>0원</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground text-sm">
            재산이 7~10억 수준이어도 배우자·일괄공제만으로 과세표준이 0원이 되는 경우가 많습니다. 다만{" "}
            <strong className="text-foreground">상속 취득세</strong>는 별도로 납부할 수 있고, 신고 의무·재산
            신고서 제출 여부는 상황별로 확인이 필요합니다.
          </p>
        </div>

        <div className="space-y-4" aria-labelledby="guide-ito-example-1500m">
          <h3 id="guide-ito-example-1500m" className="text-foreground text-lg font-semibold tracking-tight">
            예시 2 — 15억 원: 약 7,546만 원
          </h3>
          <p className="text-muted-foreground text-sm">
            총상속재산 15억, 장례비 3,000만, 사전증여 3,000만, 금융재산 3억, 감정평가 100만, 배우자+자녀 2명, 법정기한
            내 신고를 가정합니다.
          </p>
        <ol className="text-muted-foreground list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong className="text-foreground">과세가액</strong> = 15억 − 3,000만 + 3,000만 ={" "}
            <strong className="text-foreground">15억</strong>
          </li>
          <li>
            <strong className="text-foreground">상속공제</strong>: 일괄 5억(기초+인적 3억보다 큼) + 배우자 최소 5억 +
            금융 6,000만(3억×20%) = <strong className="text-foreground">10억 6,000만</strong>
          </li>
          <li>
            <strong className="text-foreground">과세표준</strong> = 15억 − 10.6억 − 100만 ={" "}
            <strong className="text-foreground">4억 3,900만</strong>
          </li>
          <li>
            <strong className="text-foreground">산출세액</strong> = 4.39억 × 20% − 1,000만 ={" "}
            <strong className="text-foreground">7,780만</strong>
          </li>
          <li>
            <strong className="text-foreground">신고세액공제</strong> = 7,780만 × 3% = 233.4만
          </li>
          <li>
            <strong className="text-foreground">납부 상속세</strong> = 7,780만 − 233.4만 ={" "}
            <strong className="text-foreground">7,546.6만 원</strong>
          </li>
        </ol>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              15억 원 사례 요약
            </caption>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium w-40">
                  과세가액
                </th>
                <td className="border-border border-b px-3 py-2.5">15억 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium">
                  상속공제
                </th>
                <td className="border-border border-b px-3 py-2.5">10억 6,000만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium">
                  과세표준
                </th>
                <td className="border-border border-b px-3 py-2.5">4억 3,900만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  납부 상속세
                </th>
                <td className="px-3 py-2.5">
                  약 <strong>7,546.6만 원</strong>(신고세액공제 반영)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ito-filing">
        <h2 id="guide-ito-filing" className="text-foreground text-xl font-semibold tracking-tight">
          신고·납부·분납
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              신고·납부 일정
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
                  신고·납부 기한
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  상속개시일이 속하는 달의 말일부터 <strong>6개월 이내</strong>(외국 거주 등은 9개월)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  신고세액공제
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  기한 내 자진신고 시 산출세액(할증 반영 후)의 3% 공제
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  분납
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  납부세액 1천만 초과 시 2·5·10년 분납 가능(제70조). 2천만 이하 초과분 전액, 그 이상 50% 범위
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  신고 방법
                </th>
                <td className="px-3 py-2.5">홈택스 상속세 신고·자동계산, 관할 세무서</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ito-after-inheritance">
        <h2 id="guide-ito-after-inheritance" className="text-foreground text-xl font-semibold tracking-tight">
          상속 후 절차·연계 세금
        </h2>
        <p>
          상속세는 <strong>상속 개시 시 1회</strong> 신고·납부하는 국세입니다. 주택을 물려받은 뒤에는 취득세·보유세·
          매도 시 양도세 등 <strong>별도 세금·기한</strong>이 이어집니다. 양도세·종부세 개요보다, 상속 맥락에서 바로
          필요한 글을 순서대로 정리했습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              상속 주택 기준 — 이후에 챙길 세금
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  시점
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  세금·항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  참고 가이드
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  상속 개시
                </th>
                <td className="border-border border-b px-3 py-2.5">상속세(국세)</td>
                <td className="border-border border-b px-3 py-2.5">
                  본 글 ·{" "}
                  <Link
                    href="/inheritance-tax-calculator"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    상속세 계산기
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  명의 이전·취득
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  상속 취득세 + 지방교육세·농어촌특별세
                </td>
                <td className="border-border border-b px-3 py-2.5">
                  <Link
                    href="/guide/inherited-housing-acquisition-tax-2026-guide"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    상속 주택 취득세
                  </Link>
                  ·{" "}
                  <Link
                    href="/guide/local-education-rural-special-tax-acquisition-2026-guide"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    지방교육세·농특세
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  신고·납부
                </th>
                <td className="border-border border-b px-3 py-2.5">취득세 기한·가산세</td>
                <td className="border-border border-b px-3 py-2.5">
                  <Link
                    href="/guide/acquisition-tax-deadline-and-penalty-guide"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    취득세 납부 기한과 가산세
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  보유 중
                </th>
                <td className="border-border border-b px-3 py-2.5">재산세·종합부동산세(1세대 1주택)</td>
                <td className="border-border border-b px-3 py-2.5">
                  <Link
                    href="/guide/one-household-one-home-comprehensive-property-tax-amount-guide"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    1세대 1주택 종부세 금액별
                  </Link>
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  매도 시
                </th>
                <td className="px-3 py-2.5">양도소득세(1세대 1주택 비과세·장특공)</td>
                <td className="px-3 py-2.5">
                  <Link
                    href="/guide/one-household-one-home-capital-gains-tax-guide"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    1세대 1주택 양도소득세
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ito-misconceptions">
        <h2 id="guide-ito-misconceptions" className="text-foreground text-xl font-semibold tracking-tight">
          자주 헷갈리는 점
        </h2>
        <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong className="text-foreground">상속세 ≠ 상속 취득세</strong>: 상속세는 국세, 상속으로 부동산을
            취득할 때의 취득세는 지방세입니다.
          </li>
          <li>
            <strong className="text-foreground">일괄공제 vs 자녀공제</strong>: 자녀공제를 따로 더하는 것이 아니라
            max(기초+인적, 5억) 중 큰 값 하나만 적용합니다.
          </li>
          <li>
            <strong className="text-foreground">감정평가 수수료</strong>: 상속공제 표에 넣지 않고 과세표준에서
            차감합니다.
          </li>
          <li>
            <strong className="text-foreground">복수 상속인</strong>: 세액은 상속인별 안분·대습상속·가업공제 등으로
            달라질 수 있어, 본 글·계산기는 1건 기준 참고용입니다.
          </li>
        </ul>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
      >
        <p className="text-foreground font-medium">관련 도구·글(상속 후 절차)</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <Link
              href="/inheritance-tax-calculator"
              className="text-primary underline-offset-4 hover:underline"
            >
              상속세 계산기
            </Link>
          </li>
          <li>
            <Link
              href="/guide/inherited-housing-acquisition-tax-2026-guide"
              className="text-primary underline-offset-4 hover:underline"
            >
              상속 주택 취득세
            </Link>
          </li>
          <li>
            <Link
              href="/guide/local-education-rural-special-tax-acquisition-2026-guide"
              className="text-primary underline-offset-4 hover:underline"
            >
              지방교육세·농어촌특별세(취득 시)
            </Link>
          </li>
          <li>
            <Link
              href="/guide/acquisition-tax-deadline-and-penalty-guide"
              className="text-primary underline-offset-4 hover:underline"
            >
              취득세 납부 기한과 가산세
            </Link>
          </li>
          <li>
            <Link
              href="/guide/one-household-one-home-comprehensive-property-tax-amount-guide"
              className="text-primary underline-offset-4 hover:underline"
            >
              1세대 1주택 종부세 금액별
            </Link>
          </li>
          <li>
            <Link
              href="/guide/one-household-one-home-capital-gains-tax-guide"
              className="text-primary underline-offset-4 hover:underline"
            >
              1세대 1주택 양도소득세
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
