import Link from "next/link";

export const twoVsThreeHomeHoldingCost2026GuideMeta = {
  slug: "two-vs-three-home-holding-cost-2026-guide",
  title: "2주택 vs 3주택, 몇 채까지 버틸 수 있나",
  description:
    "2026년 7월 기준 2주택·3주택 이상 보유세(재산세·종부세)·양도세 중과·대출 규제 차이, 공시 23억·33억 연간 부담 비교, 2채로 줄이기 판단 기준과 7월 세제개편 리스크를 표로 정리했습니다.",
  updated: "2026년 7월 11일",
} as const;

export function TwoVsThreeHomeHoldingCost2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-tvth-intro">
        <h2 id="guide-tvth-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 9일 기준
        </h2>
        <p>
          「두 채는 버텨도 세 채는 무리」라는 말이 나올 만큼, 다주택자 사이에서 <strong>2주택과 3주택
          이상</strong>의 체감 부담 차이가 커지고 있습니다. 2026년 5월 10일 양도세 중과가 재개된 뒤 3주택
          이상 보유자는 줄이는 추세가 이어지고, 2주택자 수는 정리 과정의 「중간 상태」로 다시 늘어난
          것으로 해석됩니다.
        </p>
        <p>
          다만 세법상 2주택과 3주택 이상은 <strong>항상 같은 부담</strong>이 아닙니다. 재산세는 주택 수를
          구분하지 않고, 종부세는 <strong>과세표준 12억 원 초과 구간</strong>부터 3주택 이상에 더 높은
          세율이 붙습니다. 양도세는 조정대상지역에서 2주택 +20%p, 3주택 이상 +30%p로 갈립니다. 이 글은
          연간 보유세와 매도 시 양도세를 같은 가정으로 나란히 비교해, 몇 채까지 버틸지 판단하는 데
          필요한 숫자를 정리합니다.{" "}
          <Link
            href="/comprehensive-property-tax-calculator"
            className="text-primary underline-offset-4 hover:underline"
          >
            종합부동산세 계산기
          </Link>
          와{" "}
          <Link href="/capital-gains-tax-calculator" className="text-primary underline-offset-4 hover:underline">
            양도소득세 계산기
          </Link>
          로 본인 조건을 바로 대입해 볼 수 있습니다.
        </p>
        <p>
          이 글은 세금 숫자 비교표와 함께, <strong>몇 채까지 버틸지 판단하는 기준</strong>을 짚습니다. 보유세만
          보면 2주택·3주택 차이가 작을 수 있고, 조정지역 매도를 앞두면 양도세 중과 차이가 더 크게 작용합니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-tvth-who-reads">
        <h2 id="guide-tvth-who-reads" className="text-foreground text-xl font-semibold tracking-tight">
          이 글에서 확인할 것
        </h2>
        <p>
          3주택 이상 보유자는 <strong>한 채를 정리할지·전부 정리할지</strong>를, 2주택자는 「한 채 더 사도
          되나」보다 <strong>한 채를 팔아 1주택으로 갈지</strong>를 먼저 봐야 합니다. 2채로 줄인다고 대출 규제가
          풀리지는 않습니다 — 1주택까지 내려가야 LTV·만기 연장이 완화됩니다.
        </p>
      </section>

      <nav
        className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm"
        aria-label="목차"
      >
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-tvth-who-reads" className="text-primary underline-offset-4 hover:underline">
              이 글에서 확인할 것
            </a>
          </li>
          <li>
            <a href="#guide-tvth-same-diff" className="text-primary underline-offset-4 hover:underline">
              2주택 vs 3주택 — 같고 다른 것
            </a>
          </li>
          <li>
            <a href="#guide-tvth-property-tax" className="text-primary underline-offset-4 hover:underline">
              재산세 — 주택 수 구분 없음
            </a>
          </li>
          <li>
            <a href="#guide-tvth-cpt-bracket" className="text-primary underline-offset-4 hover:underline">
              종부세 — 12억 원 넘을 때부터 갈림
            </a>
          </li>
          <li>
            <a href="#guide-tvth-capital-gains" className="text-primary underline-offset-4 hover:underline">
              양도세 — +20%p vs +30%p
            </a>
          </li>
          <li>
            <a href="#guide-tvth-loan" className="text-primary underline-offset-4 hover:underline">
              대출·만기 연장
            </a>
          </li>
          <li>
            <a href="#guide-tvth-scenario-23-33" className="text-primary underline-offset-4 hover:underline">
              시나리오 — 공시 23억(2채) vs 33억(3채)
            </a>
          </li>
          <li>
            <a href="#guide-tvth-reduce-two" className="text-primary underline-offset-4 hover:underline">
              3채 → 2채로 줄이기 판단
            </a>
          </li>
          <li>
            <a href="#guide-tvth-july-reform" className="text-primary underline-offset-4 hover:underline">
              7월 세제개편 리스크
            </a>
          </li>
          <li>
            <a href="#guide-tvth-checklist" className="text-primary underline-offset-4 hover:underline">
              확인 순서
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-4" aria-labelledby="guide-tvth-same-diff">
        <h2 id="guide-tvth-same-diff" className="text-foreground text-xl font-semibold tracking-tight">
          2주택 vs 3주택 이상 — 같고 다른 것
        </h2>
        <p>
          세법상 2주택과 3주택 이상은 모두 <strong>다주택자</strong>입니다. 취득세 중과·대출 제한·조정지역
          양도세 중과 대상이지만, 세목마다 차이가 다릅니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              세목별 2주택 vs 3주택 이상
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  세목·규제
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  2주택
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  3주택 이상
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  재산세·지방교육세
                </th>
                <td className="border-border border-b px-3 py-2.5" colSpan={2}>
                  주택 수 구분 없음(채별 공시가격 합산 과세)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종부세 세율
                </th>
                <td className="border-border border-b px-3 py-2.5">2주택 이하 누진세율</td>
                <td className="border-border border-b px-3 py-2.5">
                  과세표준 12억 원 초과 구간부터 중과세율
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  조정지역 양도세 중과
                </th>
                <td className="border-border border-b px-3 py-2.5">기본세율 + 20%p</td>
                <td className="border-border border-b px-3 py-2.5">기본세율 + 30%p</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  장기보유특별공제
                </th>
                <td className="border-border border-b px-3 py-2.5" colSpan={2}>
                  조정지역 중과 대상 주택은 배제
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  조정지역 추가 취득세
                </th>
                <td className="border-border border-b px-3 py-2.5">8%</td>
                <td className="border-border border-b px-3 py-2.5">12%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  규제지역 신규 주담대
                </th>
                <td className="px-3 py-2.5" colSpan={2}>
                  LTV 0% 등 사실상 불가(동일)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 비조정지역·인구감소지역 등 예외는{" "}
          <Link
            href="/guide/capital-gains-surcharge-revival-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            양도세 중과 재개 가이드
          </Link>
          에서 별도 정리했습니다.
        </p>
        <p>
          표만 보면 「2주택이든 3주택이든 비슷하다」고 느낄 수 있지만, 실제 판단은 <strong>공시가격 합계</strong>와{" "}
          <strong>조정지역 매도 계획</strong>에 달려 있습니다. 공시 합계가 29억 원을 넘으면 3주택의 종부세 부담이
          눈에 띄게 커지고, 조정지역에서 팔 계획이 있으면 +20%p와 +30%p 차이가 수천만 원 이상 벌어질 수
          있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-tvth-property-tax">
        <h2 id="guide-tvth-property-tax" className="text-foreground text-xl font-semibold tracking-tight">
          재산세 — 2채든 3채든 같은 규칙
        </h2>
        <p>
          재산세는 <strong>주택 수를 나누지 않습니다</strong>. 각 주택의 공시가격에 재산세 공정시장가액비율
          60%를 곱해 채별로 계산한 뒤 합산합니다. 그래서 「2주택으로 줄였다」고 해서 재산세만 줄어드는
          구조는 아닙니다. 줄이려면 <strong>공시가격 합계 자체</strong>가 내려가야 합니다.
        </p>
        <p>
          2주택·3주택 모두 재산세·종부세 공정은 60%이며, 1세대 1주택에만 적용되는 45%·12억 기본공제는
          해당되지 않습니다.{" "}
          <Link
            href="/guide/property-tax-vs-comprehensive-property-tax-fair-ratio-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            재산세 45% vs 종부세 60% 차이
          </Link>
          가이드에서 산식을 볼 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-tvth-cpt-bracket">
        <h2 id="guide-tvth-cpt-bracket" className="text-foreground text-xl font-semibold tracking-tight">
          종부세 — 과세표준 12억 원 넘을 때 3주택이 더 무거움
        </h2>
        <p>
          종부세 주택분 과세표준은 <strong>(공시가격 합계 − 9억) × 60%</strong>입니다. 이 금액이{" "}
          <strong>12억 원 이하</strong>이면 2주택이든 3주택이든 같은 누진세율이 적용됩니다. 12억 원을
          넘어서는 구간부터 3주택 이상에 더 높은 세율이 붙습니다.
        </p>
        <p className="bg-muted/30 rounded-md border border-border px-3 py-2 font-mono text-sm">
          종부세 과세표준 12억 원 = 공시가격 합계 약 29억 원((29억−9억)×60%)
        </p>
        <p className="text-muted-foreground text-sm">같은 공시가격 합계에서 2주택 vs 3주택 이상 연간 보유세</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              공시가격 합계별·주택 수별(세액공제·세부담상한 미반영)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  공시 합계
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  2주택
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  3주택 이상
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  차이
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  18억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">669만 원</td>
                <td className="border-border border-b px-3 py-2.5">669만 원</td>
                <td className="border-border border-b px-3 py-2.5">0원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  23억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">1,065만 원</td>
                <td className="border-border border-b px-3 py-2.5">1,065만 원</td>
                <td className="border-border border-b px-3 py-2.5">0원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  28억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">1,482만 원</td>
                <td className="border-border border-b px-3 py-2.5">1,482만 원</td>
                <td className="border-border border-b px-3 py-2.5">0원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  33억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">1,986만 원</td>
                <td className="border-border border-b px-3 py-2.5">2,188만 원</td>
                <td className="border-border border-b px-3 py-2.5">202만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  40억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">2,722만 원</td>
                <td className="border-border border-b px-3 py-2.5">3,277만 원</td>
                <td className="border-border border-b px-3 py-2.5">554만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  50억 원
                </th>
                <td className="px-3 py-2.5">3,774만 원</td>
                <td className="px-3 py-2.5">4,832만 원</td>
                <td className="px-3 py-2.5">1,058만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          공시 합계가 29억 원 미만이면 「3주택」 라벨만으로 연간 보유세가 늘지 않습니다. 체감 차이는{" "}
          <strong>고가 다주택</strong>에서 커집니다. 반대로 공시 23억 수준이면 2주택·3주택 구분보다{" "}
          <strong>채 수를 줄여 합계를 낮추는 것</strong>이 보유세 절감에 더 직접적입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-tvth-capital-gains">
        <h2 id="guide-tvth-capital-gains" className="text-foreground text-xl font-semibold tracking-tight">
          양도세 — 2주택 +20%p, 3주택 이상 +30%p
        </h2>
        <p>
          2026년 5월 10일부터 조정대상지역 내 다주택자 주택 양도에 중과가 다시 적용됩니다. 5월 10일 이후
          양도분부터 중과된 세율을 감수하고 매도하려는 다주택자는 거의 없다는 게 시장 분위기입니다. 보유세로
          버티는 구간에서 <strong>매도 시점의 세율 차이</strong>가 2주택과 3주택을 가르는 핵심입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              조정대상지역·양도차익 3억 원·보유 10년 가정(장특공 배제)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  2주택자
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  3주택 이상
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  적용 세율(예시)
                </th>
                <td className="border-border border-b px-3 py-2.5">38% + 20%p = 58%</td>
                <td className="border-border border-b px-3 py-2.5">38% + 30%p = 68%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  양도소득세(국세)
                </th>
                <td className="border-border border-b px-3 py-2.5">약 1억 7,400만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 2억 400만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  2주택 대비 차이
                </th>
                <td className="px-3 py-2.5" colSpan={2}>
                  약 3,000만 원(같은 차익·같은 주택 가정)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          중과 대상 주택은 <strong>장기보유특별공제도 빠집니다</strong>. 보유 기간이 길수록 2주택과 3주택
          사이 양도세 격차가 더 벌어집니다. 비조정지역 주택은 다주택이어도 중과가 없습니다.{" "}
          <Link
            href="/guide/capital-gains-surcharge-revival-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            양도세 중과 재개 가이드
          </Link>
          에서 보완책·제외 대상을 함께 확인하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-tvth-loan">
        <h2 id="guide-tvth-loan" className="text-foreground text-xl font-semibold tracking-tight">
          대출·만기 연장 — 2주택·3주택 동일하게 막힘
        </h2>
        <p>
          보유세·양도세와 달리 <strong>대출 규제는 2주택이든 3주택이든 다주택자로 동일</strong>합니다.
          수도권·규제지역에서 주택 구입 목적 신규 주담대는 LTV 0%에 가깝고, 2026년 4월 17일부터 규제지역
          다주택자 아파트 담보대출 만기 연장도 원칙적으로 불허됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              다주택자 공통 대출 규제(요약)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  2주택·3주택 이상
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  규제지역 신규 주담대
                </th>
                <td className="border-border border-b px-3 py-2.5">LTV 0%(사실상 불가)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  만기 연장(규제지역·아파트)
                </th>
                <td className="border-border border-b px-3 py-2.5">원칙 불허</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  추가 매수 시 취득세(조정지역)
                </th>
                <td className="px-3 py-2.5">2주택 8% · 3주택 12%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          「2채로 줄이면 대출이 풀린다」는 기대는 맞지 않습니다. <strong>1주택</strong>으로 내려가야
          LTV·만기 연장 규제가 완화됩니다.{" "}
          <Link
            href="/guide/multi-homeowner-loan-regulations-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            다주택자 대출 규제 가이드
          </Link>
          에서 세부 일정을 볼 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-tvth-scenario-23-33">
        <h2 id="guide-tvth-scenario-23-33" className="text-foreground text-xl font-semibold tracking-tight">
          시나리오 — 서울 15억 + 지방 8억(2채) vs 여기에 10억 추가(3채)
        </h2>
        <p>
          실거주 아파트(공시 15억)와 임대용 소형(공시 8억)을 갖고 있다가, 조정지역 투자용(공시 10억)을
          하나 더 산 경우를 가정합니다. 6월 1일 기준 주택 수·공시가격으로 산출한 연간 보유세입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              2주택(23억) vs 3주택(33억) 연간 보유세
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  2주택·공시 23억
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  3주택·공시 33억
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종부세 과세표준
                </th>
                <td className="border-border border-b px-3 py-2.5">(23−9)억×60% = 8.4억</td>
                <td className="border-border border-b px-3 py-2.5">(33−9)억×60% = 14.4억</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  7월(재산세+지방교육세)
                </th>
                <td className="border-border border-b px-3 py-2.5">587만 원</td>
                <td className="border-border border-b px-3 py-2.5">875만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  12월(종부세+농특세)
                </th>
                <td className="border-border border-b px-3 py-2.5">478만 원</td>
                <td className="border-border border-b px-3 py-2.5">1,313만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  연간 합계
                </th>
                <td className="px-3 py-2.5">1,065만 원</td>
                <td className="px-3 py-2.5">2,188만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          3채로 늘면 연간 보유세가 <strong>약 1,123만 원</strong> 늘어납니다. 이 중 대부분은 10억짜리
          주택을 추가한 효과이고, 같은 33억을 유지한 채 3주택 → 2주택으로만 바꿔도 종부세 구간 차이는{" "}
          <strong>연 202만 원</strong> 수준입니다. 「두 채는 버텨도 세 채는 무리」는 보유세만 보면{" "}
          <strong>고가 합산(대략 29억 이상)</strong>에서 더 잘 맞습니다.
        </p>
        <p className="text-muted-foreground text-sm">
          조정지역 10억 주택을 매도할 때(3주택·양도차익 3억 가정) 양도세는 약 2억 원대, 2주택으로 줄인 뒤
          같은 주택을 팔면 약 1억 7,400만 원 수준입니다. 매도 타이밍을 앞당길지는 보유세보다 양도세
          손익이 좌우합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-tvth-reduce-two">
        <h2 id="guide-tvth-reduce-two" className="text-foreground text-xl font-semibold tracking-tight">
          3채 → 2채로 줄이기 — 언제 의미가 있나
        </h2>
        <p>
          「두 채는 버텨도 세 채는 무리」가 맞는 경우와 아닌 경우가 있습니다. 보유세만 보면 공시 합계가 29억 원
          미만이면 2주택·3주택 차이가 거의 없고, <strong>고가 합산·조정지역 매도</strong>가 있을 때 3→2 정리
          의미가 커집니다.
        </p>
        <p>
          전문가들은 최근 2주택자 수 반등을 「전략적 선택」보다 <strong>정리 과정의 중간 상태</strong>로
          보는 시각이 많습니다. 중과 유예 종료 전에 다 못 팔고 2주택으로 남았거나, 한 채는 보유·한 채는
          증여·상속을 검토하는 경우가 통계에 반영됐을 수 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              3채 → 2채 정리 시 기대 효과
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  목적
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  2채로 줄이면
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  한계
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  연간 보유세 절감
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  공시 합계 29억 미만이면 거의 없음. 33억 이상이면 연 수백만 원
                </td>
                <td className="border-border border-b px-3 py-2.5">채를 팔아 합계가 줄어야 큰 폭</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  조정지역 매도 시 양도세
                </th>
                <td className="border-border border-b px-3 py-2.5">+30%p → +20%p(채당 약 3,000만 원↓ 예시)</td>
                <td className="border-border border-b px-3 py-2.5">중과·장특공 배제는 그대로</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대출·만기 연장
                </th>
                <td className="border-border border-b px-3 py-2.5">변화 없음</td>
                <td className="border-border border-b px-3 py-2.5">1주택까지 내려가야 완화</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  증여·상속 준비
                </th>
                <td className="px-3 py-2.5">1채 거주·1채 승계용 분리 용이</td>
                <td className="px-3 py-2.5">취득세·증여세 별도 검토 필요</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>어떤 채를 먼저 정리할지</strong>는 보통 (1) 조정지역·양도차익이 큰 비거주 주택, (2) 공시
          가격이 높아 종부세 구간을 밀어 올리는 주택, (3) 만기가 도래해 대출 연장이 필요한 주택 순으로
          봅니다. 매도 대신 <strong>배우자·자녀 증여</strong>로 세대 분리를 검토하는 경우도 있으나, 조정지역
          고가주택 증여는 취득세 12%가 붙을 수 있어 별도 시뮬레이션이 필요합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-tvth-july-reform">
        <h2 id="guide-tvth-july-reform" className="text-foreground text-xl font-semibold tracking-tight">
          7월 세제개편 — 보유세·양도세 동시 변수
        </h2>
        <p>
          정부는 7월 말 세제개편안에서 <strong>실거주 중심</strong> 방향을 예고했습니다. 보유 기간보다
          거주 여부, 다주택·비거주 보유에 대한 기준 조정, 공정시장가액비율·장기보유특별공제 손질이 거론됩니다.
          확정 전이지만 다주택자는 아래 항목에 촉각을 곤두세울 필요가 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              검토 중인 변화(2026년 7월 8일 기준·미확정)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  2·3주택 보유자 영향
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  공정시장가액비율 상향
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  재산세·종부세 과세표준 동시 상승. 고가·다주택일수록 체감 큼
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  비실거주 장특공 축소
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  임대·투자용 장기 보유 시 양도세 혜택 축소 가능
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  보유세·거래세 균형
                </th>
                <td className="px-3 py-2.5">
                  버티기 유인은 보유세 쪽, 매도 유인은 거래세 쪽으로 재조정 검토
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          개편안이 확정되면 본문 수치를 갱신할 예정입니다.{" "}
          <Link
            href="/guide/holding-capital-gains-tax-increase-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            2026년 7월 부동산 세제개편 예상 총정리
          </Link>
          에서 확정·검토·현행을 구분해 볼 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-tvth-checklist">
        <h2 id="guide-tvth-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          몇 채까지 버틸지 — 확인 순서
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              체크리스트
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  순서
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 w-24 font-semibold">
                  확인
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  1. 6월 1일 기준 주택 수·공시가격 합계 확인
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  2. 종부세 과세표준 12억 원(공시 약 29억) 넘는지 계산
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  3. 조정지역 주택 매도 시 2주택·3주택 양도세 시뮬레이션
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  4. 대출 만기·연장 가능 여부(1주택 전환 필요 여부)
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 text-left font-medium">
                  5. 7월 말 세제개편안·시행일 확인 후 재계산
                </th>
                <td className="px-3 py-2.5 text-center">□</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 위 예시는 세액공제·세부담상한·합산배제 임대주택·인구감소지역 예외 등을 반영하지 않았습니다.
          정확한 금액은 홈택스(hometax.go.kr)와 관할 지자체 고지세액에서 확인하세요.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="관련 가이드"
      >
        <p>
          <Link
            href="/comprehensive-property-tax-calculator"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 종합부동산세 계산기에서 공시가격·주택 수별 연간 보유세를 바로 계산해 볼 수 있습니다.
          </Link>
        </p>
        <p>
          <Link
            href="/capital-gains-tax-calculator"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 양도소득세 계산기에서 2주택·3주택 중과 세율을 대입해 볼 수 있습니다.
          </Link>
        </p>
        <p>
          <Link
            href="/guide/multi-homeowner-loan-regulations-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 다주택자 LTV·만기 연장·규제지역 현황은 다주택자 대출 규제 가이드에서 더 볼 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
