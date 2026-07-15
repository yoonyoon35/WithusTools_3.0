import Link from "next/link";

export const inheritanceTaxFuneralExpenseDeductionGuideMeta = {
  slug: "inheritance-tax-funeral-expense-deduction-guide",
  title: "상속세 장례비 공제 | 1,500만 한도·세금 절감 계산",
  description:
    "2026년 7월 기준 상속세 장례비 공제. 일반 장례비 500~1,000만·봉안·자연장지 500만(합계 1,500만), 과세가액 차감 위치, 세율별 절감액, 병원비·형제 분담·중복 주의, 신고 서류를 표로 정리했습니다.",
  updated: "2026년 7월 15일",
} as const;

export function InheritanceTaxFuneralExpenseDeductionGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-itfed-intro">
        <h2 id="guide-itfed-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 기준
        </h2>
        <p>
          「장례비 3,000만 원 냈는데 상속세에서 3,000만 원 빼주나?」 — 장례 후 상속세 신고를 준비할 때 가장 많이
          나오는 질문입니다. 결론부터 말하면 <strong>아닙니다.</strong> 장례비 공제는{" "}
          <strong>세액공제가 아니라 과세가액 차감</strong>이고, 인정 한도는{" "}
          <strong>일반 장례비 최대 1,000만 원 + 봉안·자연장지 최대 500만 원 = 합계 1,500만 원</strong>입니다.
        </p>
        <p>
          실제 줄어드는 상속세는 <strong>공제액 × 적용 세율</strong>만큼입니다.{" "}
          <Link href="/inheritance-tax-calculator" className="text-primary underline-offset-4 hover:underline">
            상속세 계산기
          </Link>
          의 「공과금·채무·장례비용」란에 반영할 금액을 정할 때 이 글을 참고하세요.{" "}
          <Link href="/guide/inheritance-tax-overview-guide" className="text-primary underline-offset-4 hover:underline">
            상속세 개요
          </Link>
          에서 전체 계산 흐름을 먼저 보면 이해가 빠릅니다.
        </p>
      </section>

      <nav
        className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm"
        aria-label="목차"
      >
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-itfed-three" className="text-primary underline-offset-4 hover:underline">
              핵심 3가지
            </a>
          </li>
          <li>
            <a href="#guide-itfed-flow" className="text-primary underline-offset-4 hover:underline">
              계산 흐름에서 위치
            </a>
          </li>
          <li>
            <a href="#guide-itfed-general" className="text-primary underline-offset-4 hover:underline">
              일반 장례비 한도
            </a>
          </li>
          <li>
            <a href="#guide-itfed-crematory" className="text-primary underline-offset-4 hover:underline">
              봉안·자연장지
            </a>
          </li>
          <li>
            <a href="#guide-itfed-savings" className="text-primary underline-offset-4 hover:underline">
              세금 절감 예시
            </a>
          </li>
          <li>
            <a href="#guide-itfed-hospital" className="text-primary underline-offset-4 hover:underline">
              병원비 vs 장례비
            </a>
          </li>
          <li>
            <a href="#guide-itfed-siblings" className="text-primary underline-offset-4 hover:underline">
              형제 분담·중복
            </a>
          </li>
          <li>
            <a href="#guide-itfed-docs" className="text-primary underline-offset-4 hover:underline">
              준비 서류·신고기한
            </a>
          </li>
          <li>
            <a href="#guide-itfed-misconceptions" className="text-primary underline-offset-4 hover:underline">
              자주 하는 오해
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-4" aria-labelledby="guide-itfed-three">
        <h2 id="guide-itfed-three" className="text-foreground text-xl font-semibold tracking-tight">
          핵심 3가지
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              장례비 공제 요약
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
                  성격
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>과세가액 차감</strong>(세액공제 아님)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  일반 장례비
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  최소 <strong>500만 원</strong>, 최대 <strong>1,000만 원</strong>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  봉안·자연장지
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  별도 최대 <strong>500만 원</strong> → <strong>합계 1,500만 원</strong>
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  절감세액
                </th>
                <td className="px-3 py-2.5">공제액 × 과세표준에 적용되는 세율</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-itfed-flow">
        <h2 id="guide-itfed-flow" className="text-foreground text-xl font-semibold tracking-tight">
          계산 흐름에서 위치
        </h2>
        <p>상속세는 상속재산에 바로 세율을 곱하지 않습니다. 장례비는 <strong>2단계(과세가액 차감)</strong>에 해당합니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              상속세 계산 순서(요약)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  단계
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1. 상속재산 합산
                </th>
                <td className="border-border border-b px-3 py-2.5">부동산·예금·보험금 등 시가 평가</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2. 차감
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  공과금, <strong>장례비용</strong>, 채무, 일정 사전증여재산 등
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3. 상속공제
                </th>
                <td className="border-border border-b px-3 py-2.5">배우자·일괄·동거주택 등</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  4. 과세표준
                </th>
                <td className="border-border border-b px-3 py-2.5">위 항목 반영 후 남은 금액(감정평가 수수료 등 별도)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  5. 산출세액
                </th>
                <td className="px-3 py-2.5">과세표준 × 세율 − 누진공제액</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          피상속인이 <strong>국내 거주자</strong>이고 상속재산이 있으며 납부할 상속세가 있는 경우를 전제로 합니다.
          채무가 재산을 초과하면 장례비 공제를 반영해도 실제 줄어드는 세금은 없을 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-itfed-general">
        <h2 id="guide-itfed-general" className="text-foreground text-xl font-semibold tracking-tight">
          일반 장례비 한도
        </h2>
        <p>
          <strong>일반 장례비</strong>는 피상속인 <strong>사망일부터 장례일까지</strong> 고인을 모시는 데 직접 쓴
          비용입니다. 장례식장 사용료·음식비, 관·수의, 입관비, 운구차량비, <strong>화장장 사용료</strong> 등이
          대표적입니다. 봉안당·자연장지 사용료는 여기에 포함되지 않습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              실제 지출 대비 인정 공제액(시행령 제9조)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  실제 일반 장례비
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  인정 공제액
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  500만 원 미만
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>500만 원</strong>(최소 인정)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  500만 ~ 1,000만 원
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>실제 지출액</strong>
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  1,000만 원 초과
                </th>
                <td className="px-3 py-2.5">
                  <strong>최대 1,000만 원</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          500만 원을 넘게 공제받으려면 장례식장 정산서·영수증 등으로 실제 지출을 확인할 수 있어야 합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-itfed-crematory">
        <h2 id="guide-itfed-crematory" className="text-foreground text-xl font-semibold tracking-tight">
          봉안·자연장지 — 별도 500만 원
        </h2>
        <p>
          <strong>봉안시설·자연장지 사용료</strong>는 일반 장례비와 따로 계산합니다. 실제 지출액 중 최대 500만 원까지
          추가 공제할 수 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              항목별 한도
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  공제 한도
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  일반 장례비
                </th>
                <td className="border-border border-b px-3 py-2.5">최소 500만 ~ 최대 1,000만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  봉안·자연장지 사용료
                </th>
                <td className="border-border border-b px-3 py-2.5">최대 500만 원(별도)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  합계
                </th>
                <td className="px-3 py-2.5">
                  <strong>최대 1,500만 원</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          예: 일반 장례비 1,500만 원 + 봉안당 500만 원 지출 → 일반 <strong>1,000만 원</strong> + 봉안{" "}
          <strong>500만 원</strong> = 합계 <strong>1,500만 원</strong> 공제 가능.
        </p>
        <p className="text-muted-foreground text-sm">
          봉안당 계약서에 관리비·장식·제례용품이 묶여 있으면 <strong>시설 사용료만</strong> 구분해 증빙해야 합니다.
          항목별 세부내역서를 받아두세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-itfed-savings">
        <h2 id="guide-itfed-savings" className="text-foreground text-xl font-semibold tracking-tight">
          세금 절감 예시 — 30% 구간
        </h2>
        <p>
          과세표준에 따라 상속세율은 10%~50% 누진입니다. 아래는 배우자 상속공제 등 반영 후{" "}
          <strong>과세표준이 5억~10억 구간(30%)</strong>에 남는 경우를 가정한 예시입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              누진세율(요약)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  과세표준
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  세율
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1억 원 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">10%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1억 초과 ~ 5억
                </th>
                <td className="border-border border-b px-3 py-2.5">20%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5억 초과 ~ 10억
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>30%</strong>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  10억 초과 ~ 30억
                </th>
                <td className="border-border border-b px-3 py-2.5">40%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  30억 초과
                </th>
                <td className="px-3 py-2.5">50%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              장례비 공제별 절감액(30% 구간 가정)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  인정 장례비 공제
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  과세표준 감소
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상속세 약
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  일반 1,000만 원
                </th>
                <td className="border-border border-b px-3 py-2.5">1,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>300만 원</strong> 감소
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  일반 1,000만 + 봉안 500만
                </th>
                <td className="px-3 py-2.5">1,500만 원</td>
                <td className="px-3 py-2.5">
                  <strong>450만 원</strong> 감소
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          공제 전후 세율 구간이 바뀌거나 배우자 상속공제 등 다른 공제가 달라지면 결과도 달라집니다. 신고세액공제·
          가산세 등 추가 항목의 영향도 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-itfed-hospital">
        <h2 id="guide-itfed-hospital" className="text-foreground text-xl font-semibold tracking-tight">
          병원비 vs 장례비
        </h2>
        <p>
          <strong>임종 전 치료 병원비</strong>는 장례비와 별도 항목입니다. 헷갈리기 쉬운 경우만 정리합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              병원비 처리
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상황
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  공제 방식
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  고인이 생전에 본인 돈으로 병원비 납부
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  상속재산에서 이미 빠진 금액 → 다시 공제 <strong>불가</strong>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  사망 당시 미납 병원비를 상속인이 사후 납부
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>채무</strong>로 공제 가능(장례비 아님)
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  자녀가 병원비 결제
                </th>
                <td className="px-3 py-2.5">
                  <strong>미납 채무였는지</strong> 확인 필요 — 결제 사실만으로 공제 아님
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          진료비 계산서·세부내역서·사망일 기준 미납 정산서·납부 내역을 보관하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-itfed-siblings">
        <h2 id="guide-itfed-siblings" className="text-foreground text-xl font-semibold tracking-tight">
          형제 분담·중복 주의
        </h2>
        <h3 className="text-foreground text-base font-semibold">형제가 나눠 내도 한도는 하나</h3>
        <p>
          세 형제가 일반 장례비 500만 원씩 나눠 냈다고 <strong>각자 500만 원씩</strong> 공제받는 것은 아닙니다.
          장례비 공제는 <strong>피상속인 1명의 상속세</strong> 계산에 전체 장례비를 <strong>한 번</strong> 반영하는
          항목입니다. 형제 3명이 합쳐 1,500만 원을 냈어도 일반 장례비 공제 한도는 <strong>합계 최대 1,000만 원</strong>
          입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              중복 사례
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  중복 사례
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  확인 방법
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  생전 납부 병원비를 미납 채무로 다시 넣음
                </th>
                <td className="border-border border-b px-3 py-2.5">사망일 기준 미납 여부 확인</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  봉안당 비용을 일반 장례비 + 봉안시설에 각각 넣음
                </th>
                <td className="border-border border-b px-3 py-2.5">시설 사용료만 봉안 항목에</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  상조·장례식장 정산서에 같은 품목 중복
                </th>
                <td className="px-3 py-2.5">관·수의·장의차량 실제 1건인지 대조</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          형제 간 비용 정산은 공제와 별개입니다. 송금 시 「부친 장례비 분담금」「모친 봉안당 사용료」처럼 목적을
          메모해 두면 나중에 확인하기 쉽습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-itfed-waiver">
        <h2 id="guide-itfed-waiver" className="text-foreground text-xl font-semibold tracking-tight">
          상속포기·한정승인 검토 중이라면
        </h2>
        <p>
          상속포기나 한정승인을 검토 중이면 고인 예금 임의 인출·상속재산 매각 등 <strong>처분행위</strong>를 하면
          단순승인으로 볼 수 있어, 이후 포기·한정승인이 어려워질 수 있습니다(민법 제1026조). 보존·관리행위인지
          처분행위인지는 사실관계마다 다릅니다. 검토 중이면 상속 전문 변호사에게 먼저 확인하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-itfed-docs">
        <h2 id="guide-itfed-docs" className="text-foreground text-xl font-semibold tracking-tight">
          준비 서류·신고기한
        </h2>
        <p>
          <strong>신고기한:</strong> 상속개시일이 속하는 달의 말일부터 <strong>6개월 이내</strong>. 예) 3월 10일 사망 →
          9월 30일까지. 피상속인·상속인 전원이 비거주자면 <strong>9개월</strong>입니다.{" "}
          <Link
            href="/guide/inheritance-tax-filing-deadline-installment-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            상속세 신고·분납 기한
          </Link>
          가이드에서 자세히 다룹니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              장례비 관련 보관 서류
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
                  장례식장 계약서·최종 정산서
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  카드전표·현금영수증·계좌이체 내역
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  화장장 사용료 영수증
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  봉안·자연장지 계약서(시설 사용료 항목별 세부내역)
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  병원비 계산서·미납 정산서(해당 시)
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  상조회사 계약서·서비스 내역
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  회사·복지·보험 장례비 지원 자료
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 text-left font-medium">
                  형제 간 장례비 분담 송금 내역
                </th>
                <td className="px-3 py-2.5 text-center">□</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-itfed-misconceptions">
        <h2 id="guide-itfed-misconceptions" className="text-foreground text-xl font-semibold tracking-tight">
          자주 하는 오해
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>「장례비 3,000만 쓰면 상속세 3,000만 빠진다」</strong> — 과세가액 차감이며 합계 한도는 1,500만
            원입니다.
          </li>
          <li>
            <strong>「형제가 나눠 냈으니 각자 공제된다」</strong> — 피상속인 1건 기준 한 번 반영. 형제 수만큼 한도가
            늘지 않습니다.
          </li>
          <li>
            <strong>「봉안당 비용도 일반 장례비에 넣으면 된다」</strong> — 별도 항목. 최대 500만 원은 시설 사용료로
            구분해야 합니다.
          </li>
          <li>
            <strong>「병원비 영수증 있으면 장례비처럼 공제된다」</strong> — 미납 채무였을 때만 채무로 공제. 생전
            납부분은 이중 공제 불가.
          </li>
          <li>
            <strong>「장례 현장 실비 = 영수증 없이 현금 처리」</strong> — 상속세 신고용으로는 정산서·이체 내역 등 거래
            증빙이 필요합니다.
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-itfed-checklist">
        <h2 id="guide-itfed-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          신고 전 체크리스트
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
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
                  일반 장례비·봉안·병원비(채무) 항목 구분
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  500만~1,000만·봉안 500만 한도 적용
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  중복 항목(상조·장례식장, 봉안·일반 장례비) 없음
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  과세표준·세율 구간 기준 실제 절감세액 재계산
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 text-left font-medium">
                  6개월(비거주 9개월) 신고기한 확인
                </th>
                <td className="px-3 py-2.5 text-center">□</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 공제 인정 범위·신고 방법은 사례마다 다를 수 있습니다. 상속포기·한정승인·재산 처분은 변호사, 상속세
          신고·공제·재산평가는 세무사에게 개별 검토받으세요.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="관련 가이드"
      >
        <p className="text-foreground font-medium">관련 가이드·계산기</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <Link href="/inheritance-tax-calculator" className="text-primary underline-offset-4 hover:underline">
              상속세 계산기
            </Link>
          </li>
          <li>
            <Link
              href="/guide/inheritance-tax-overview-guide"
              className="text-primary underline-offset-4 hover:underline"
            >
              상속세 개요
            </Link>
          </li>
          <li>
            <Link
              href="/guide/inheritance-tax-filing-deadline-installment-guide"
              className="text-primary underline-offset-4 hover:underline"
            >
              상속세 신고·분납 기한
            </Link>
          </li>
          <li>
            <Link
              href="/guide/inheritance-tax-apartment-price-scenarios-guide"
              className="text-primary underline-offset-4 hover:underline"
            >
              7·10·15억 아파트 상속세 예시
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
