import Link from "next/link";

export const privateHousingSubscriptionEligibility2026GuideMeta = {
  slug: "private-housing-subscription-eligibility-2026-guide",
  title: "민영주택 청약 자격·재당첨 제한 총정리",
  description:
    "2026년 7월 기준 민영주택 일반공급 청약 자격, 무주택·세대원 주택 소유 판정, 재당첨 제한 기간, 가점제·추첨제 비율, 당첨 후 전매·실거주 의무와 청약 전 확인 순서를 정리했습니다.",
  updated: "2026년 7월 16일",
} as const;

export function PrivateHousingSubscriptionEligibility2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-phse-intro">
        <h2 id="guide-phse-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 기준 · 결론부터
        </h2>
        <p>
          민영주택 청약은 <strong>입주자모집공고일</strong> 기준으로 자격·가점·재당첨 여부가 갈립니다. 청약통장 1순위만
          맞춘다고 끝이 아니라, <strong>세대원 당첨 이력·주택 보유·해당 단지의 가점·추첨 비율</strong>을 함께 봐야 합니다.
        </p>
        <p>
          2026년 7월 고가 재건축 단지 당첨 사례가 제도 논의를 촉발했지만, 핵심은 특정 인물이 아니라{" "}
          <strong>추첨제 물량 비율·당첨 후 자기자금·재당첨 제한</strong>이 어떻게 맞물리는지입니다. 아래 순서대로
          확인하면 청약홈 접수 전 실수를 줄일 수 있습니다.
        </p>
      </section>

      <nav
        className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm"
        aria-label="목차"
      >
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-phse-order" className="text-primary underline-offset-4 hover:underline">
              청약 전 확인 순서
            </a>
          </li>
          <li>
            <a href="#guide-phse-homeless" className="text-primary underline-offset-4 hover:underline">
              무주택·주택 소유 판정
            </a>
          </li>
          <li>
            <a href="#guide-phse-reapply" className="text-primary underline-offset-4 hover:underline">
              재당첨 제한 기간
            </a>
          </li>
          <li>
            <a href="#guide-phse-points-lottery" className="text-primary underline-offset-4 hover:underline">
              가점제 vs 추첨제
            </a>
          </li>
          <li>
            <a href="#guide-phse-after-win" className="text-primary underline-offset-4 hover:underline">
              당첨 후 의무·자금
            </a>
          </li>
          <li>
            <a href="#guide-phse-example" className="text-primary underline-offset-4 hover:underline">
              고가 단지 사례 — 추첨제가 논란이 된 이유
            </a>
          </li>
          <li>
            <a href="#guide-phse-checklist" className="text-primary underline-offset-4 hover:underline">
              청약 전 체크리스트
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-4" aria-labelledby="guide-phse-order">
        <h2 id="guide-phse-order" className="text-foreground text-xl font-semibold tracking-tight">
          청약 전 확인 순서
        </h2>
        <ol className="text-muted-foreground list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong className="text-foreground">청약홈 당첨·부적격 이력</strong> — 본인·배우자·세대원 전원 조회(재당첨
            제한은 세대 단위로 걸릴 수 있음).
          </li>
          <li>
            <strong className="text-foreground">주택·분양권·입주권 보유</strong> — 등기부등본·건설사 분양계약 기준으로
            세대원 전원 확인.
          </li>
          <li>
            <strong className="text-foreground">청약통장 1순위·예치금</strong> —{" "}
            <Link href="/guide/housing-subscription-savings-guide" className="text-primary underline-offset-4 hover:underline">
              주택청약종합저축
            </Link>
            가입 기간·지역별 예치금 충족 여부.
          </li>
          <li>
            <strong className="text-foreground">해당 단지 모집공고</strong> — 가점제·추첨제 비율, 1주택자 신청 가능
            물량, 전매·실거주 의무, 계약금 비율.
          </li>
          <li>
            <strong className="text-foreground">당첨 후 자금 계획</strong> — 계약금·중도금·잔금·{" "}
            <Link href="/guide/home-purchase-additional-costs-guide" className="text-primary underline-offset-4 hover:underline">
              부대비용
            </Link>
            ·{" "}
            <Link href="/loan-calculator" className="text-primary underline-offset-4 hover:underline">
              대출 상환액
            </Link>
            을 미리 추산.
          </li>
        </ol>
      </section>

      <section className="space-y-4" aria-labelledby="guide-phse-homeless">
        <h2 id="guide-phse-homeless" className="text-foreground text-xl font-semibold tracking-tight">
          무주택·주택 소유 판정
        </h2>
        <p>
          「무주택세대구성원」은 세대원 전원이 주택을 소유하지 않은 상태를 말합니다. 국민주택은 입주 시까지 무주택을
          유지해야 하는 경우가 많지만, <strong>민영주택 일반공급</strong>은 가점제·추첨제 물량에 따라 1주택자도 일부
          신청할 수 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              민영주택 일반공급 — 무주택 요건이 달라지는 지점
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  무주택 요건
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  청약 전략에 미치는 영향
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  가점제 물량
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  입주자모집공고일 현재 <strong>무주택세대구성원</strong>이 원칙
                </td>
                <td className="border-border border-b px-3 py-2.5">
                  무주택 기간·부양가족 수가 가점(최대 84점)에 반영
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  추첨제 물량(규제지역)
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  추첨 물량의 75%는 무주택자 우선, 25%는 탈락 무주택자·1주택자 경쟁
                </td>
                <td className="border-border border-b px-3 py-2.5">
                  가점이 낮아도 추첨으로 당첨 가능 — 다만 경쟁률이 매우 높을 수 있음
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  분양권·입주권
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  보유·과거 보유 이력은 주택 소유로 볼 수 있음(공고·해석 기준 확인)
                </td>
                <td className="border-border border-b px-3 py-2.5">
                  <Link href="/guide/presale-right-capital-gains-tax-guide" className="text-primary underline-offset-4 hover:underline">
                    분양권
                  </Link>
                  ·
                  <Link href="/guide/occupancy-right-capital-gains-tax-guide" className="text-primary underline-offset-4 hover:underline">
                    입주권
                  </Link>
                  보유 시 청약·대출 자격에 영향
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  생애최초·특별공급
                </th>
                <td className="px-3 py-2.5">
                  본인·배우자 주택 소유 이력 없음 등 별도 요건
                </td>
                <td className="px-3 py-2.5">
                  <Link href="/guide/first-time-homebuyer-benefits-2026" className="text-primary underline-offset-4 hover:underline">
                    생애최초 혜택
                  </Link>
                  과 별도 판단
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 세대 분리·직계존속 주택 보유 등 예외는 단지·공급 유형마다 다릅니다. 청약홈 자격확인과 해당 모집공고의
          「청약 자격」란을 함께 보세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-phse-reapply">
        <h2 id="guide-phse-reapply" className="text-foreground text-xl font-semibold tracking-tight">
          재당첨 제한 기간
        </h2>
        <p>
          주택공급에 관한 규칙 제54조에 따라, 이전에 당첨된 주택 유형·지역에 따라 일정 기간 다른 분양주택 입주자로
          선정될 수 없습니다. <strong>부부 중 한 명만 당첨돼도 같은 세대에 제한이 걸릴 수 있어</strong> 세대원 전원
          이력을 조회하는 것이 안전합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              재당첨 제한 기간 — 대표 유형(당첨일 기준, 겹치면 긴 기간 적용)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  제한 기간
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  대표 대상
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  청약 전략
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  10년
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  분양가상한제 적용 주택, 투기과열지구 내 일부 주택 등
                </td>
                <td className="border-border border-b px-3 py-2.5">
                  장기 거주 계획 없으면 신중 — 세대 전원 청약 기회 제한
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  7년
                </th>
                <td className="border-border border-b px-3 py-2.5">청약과열지역에서 공급되는 주택</td>
                <td className="border-border border-b px-3 py-2.5">
                  공고일 기준 지역 규제 여부·면적 확인
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5년
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  투기과열지구 내 일부 주택, 과밀억제권역 85㎡ 이하 등
                </td>
                <td className="border-border border-b px-3 py-2.5">
                  「5년 재당첨 제한」만으로 단정하지 말 것 — 유형별로 다름
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3년·1년
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  과밀억제권역·면적·주택 유형에 따라 단축 적용
                </td>
                <td className="border-border border-b px-3 py-2.5">모집공고 「재당첨 제한」 문구 우선 확인</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  예외·완화
                </th>
                <td className="px-3 py-2.5">
                  투기과열지구·청약과열지역이 아닌 지역의 일부 민영주택 등
                </td>
                <td className="px-3 py-2.5">규제 완화·개정 시 공고 기준이 달라질 수 있음</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          재당첨 제한은 청약홈 「나의 청약통장」·「청약 당첨 이력」에서 조회할 수 있습니다. 의심되면 접수 전
          주택공급콜센터(국토교통부 1599-0001)에 해당 단지명·당첨 이력을 확인하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-phse-points-lottery">
        <h2 id="guide-phse-points-lottery" className="text-foreground text-xl font-semibold tracking-tight">
          가점제 vs 추첨제
        </h2>
        <p>
          민영주택 일반공급은 통상 <strong>가점제로 먼저 당첨자를 뽑고</strong>, 가점제 탈락자는 별도 신청 없이
          추첨제 대상에 포함됩니다. 2022년 이후 투기과열지구 등에서는 청년·신혼 가구를 위해{" "}
          <strong>추첨제 물량 비율</strong>이 확대되었습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              가점제·추첨제 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  가점제
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  추첨제
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  선정 방식
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  무주택 기간(32)·부양가족(35)·청약통장 가입(17) 합산 최대 84점
                </td>
                <td className="border-border border-b px-3 py-2.5">
                  가점 미달·탈락자 등 대상 추첨(단지별 비율 상이)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  유리한 층
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  무주택 기간이 길고 부양가족이 많은 세대
                </td>
                <td className="border-border border-b px-3 py-2.5">
                  가점이 낮은 청년·신혼 — 다만 경쟁률이 극단적으로 높을 수 있음
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  투기과열지구 비율(예)
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  85㎡ 이하 40%·60~85㎡ 70%·85㎡ 초과 80% 등(면적대별 상이)
                </td>
                <td className="border-border border-b px-3 py-2.5">
                  85㎡ 이하 60%·60~85㎡ 30%·85㎡ 초과 20% 등(2022년 개선안 기준)
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  상세 가점표
                </th>
                <td className="px-3 py-2.5" colSpan={2}>
                  <Link href="/guide/housing-subscription-savings-guide#guide-hss-points" className="text-primary underline-offset-4 hover:underline">
                    주택청약종합저축 — 청약 가점 산정
                  </Link>
                  참고
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 면적대별 가점·추첨 비율은 입주자모집공고마다 다릅니다. 「일반공급 선정 방식」 표를 반드시 확인하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-phse-after-win">
        <h2 id="guide-phse-after-win" className="text-foreground text-xl font-semibold tracking-tight">
          당첨 후 의무·자금
        </h2>
        <p>
          청약 당첨은 <strong>입주권·분양권 취득의 시작</strong>입니다. 제도상 불만이 커지는 지점은 추첨 자체가
          아니라, 당첨 이후 필요한 <strong>계약금·중도금·잔금·부대비용</strong>입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              당첨 후 확인 항목
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  확인 내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  계약금·중도금
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  공고의 납부 일정·비율. 고가 단지는 계약금만 수억 원대일 수 있음
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  전매·실거주
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  분양가상한제·규제지역 여부에 따라 전매 제한·실거주 의무 기간 상이 — 모집공고·공급계약서 기준
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득세·중개수수료
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <Link href="/acquisition-tax-calculator" className="text-primary underline-offset-4 hover:underline">
                    취득세 계산기
                  </Link>
                  ·
                  <Link href="/brokerage-fee-calculator" className="text-primary underline-offset-4 hover:underline">
                    중개수수료 계산기
                  </Link>
                  로 잔금 시점 비용 추산
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주택담보대출
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <Link href="/dsr-calculator" className="text-primary underline-offset-4 hover:underline">
                    DSR
                  </Link>
                  ·
                  <Link href="/ltv-calculator" className="text-primary underline-offset-4 hover:underline">
                    LTV
                  </Link>
                  한도와{" "}
                  <Link href="/guide/bogeumjari-vs-didimdol" className="text-primary underline-offset-4 hover:underline">
                    디딤돌·보금자리
                  </Link>
                  적용 여부
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  재당첨 제한 시작
                </th>
                <td className="px-3 py-2.5">당첨일부터 해당 유형의 제한 기간이 적용될 수 있음</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-phse-example">
        <h2 id="guide-phse-example" className="text-foreground text-xl font-semibold tracking-tight">
          고가 단지 사례 — 추첨제가 논란이 된 이유
        </h2>
        <p>
          2026년 7월 논의가 된 서울 서초구 <strong>분양가상한제 재건축 단지(일명 디에이치 방배)</strong>는 2024년 8월
          일반분양 650가구 중 약 215가구를 추첨제로 배정했고, 평균 경쟁률이 90대 1 수준이었습니다. 투기과열지구 내
          단지라 면적대별로 가점·추첨 비율이 나뉘었고, 가점이 낮은 연령대도 추첨 물량으로 당첨될 수 있는 구조였습니다.
        </p>
        <p>
          논란의 초점은 「불법 당첨」 여부보다, <strong>추첨으로 열린 기회가 고가 단지에서 현금 여력 있는 신청자에게
          실질적으로 유리</strong>하다는 점입니다. 분양가는 상한제로 낮지만 계약금·중도금·잔금 준비가 관건이고, 당첨
          후 시세 차이가 크면 「로또 청약」으로 불릴 수 있습니다. 제도 개편 논의는 진행 중일 수 있으므로,{" "}
          <strong>확정된 규정이 아닌 모집공고·국토교통부 발표</strong>를 기준으로 판단하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-phse-checklist">
        <h2 id="guide-phse-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          청약 전 체크리스트
        </h2>
        <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>청약홈에서 본인·배우자·세대원 당첨·부적격 이력 조회했는가</li>
          <li>입주자모집공고일 기준 무주택·1주택 여부와 분양권·입주권 보유를 확인했는가</li>
          <li>청약통장 1순위(가입 기간·예치금)를 충족하는가</li>
          <li>해당 평형의 가점제·추첨제 비율과 예상 경쟁률을 확인했는가</li>
          <li>당첨 시 계약금·중도금·잔금·취득세를 감당할 자금·대출 한도를 추산했는가</li>
          <li>당첨 후 재당첨 제한·전매·실거주 의무 기간을 공고에서 확인했는가</li>
        </ul>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="참고 안내"
      >
        <p>
          본 글은 <strong>2026년 7월 기준 참고용</strong>이며, 청약 자격·재당첨 제한은 입주자모집공고·주택공급에 관한
          규칙 개정에 따라 달라질 수 있습니다. 최종 판단은 청약홈 자격확인·주택공급콜센터·해당 건설사 안내를
          확인하세요.
        </p>
        <p>
          청약통장 납입·가점은{" "}
          <Link href="/guide/housing-subscription-savings-guide" className="text-primary font-medium underline-offset-4 hover:underline">
            주택청약종합저축 완전 정리
          </Link>
          , 당첨 후 대출은{" "}
          <Link href="/loan-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            대출 이자 계산기
          </Link>
          에서 이어서 확인할 수 있습니다.
        </p>
      </aside>
    </>
  );
}
