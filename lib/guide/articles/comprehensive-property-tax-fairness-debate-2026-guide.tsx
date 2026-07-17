import Link from "next/link";

export const comprehensivePropertyTaxFairnessDebate2026GuideMeta = {
  slug: "comprehensive-property-tax-fairness-debate-2026-guide",
  title: "30억 1채 vs 10억 3채, 종부세 왜 다른가 | 주택 수 과세 형평성",
  description:
    "2026년 7월 기준 같은 30억이라도 초고가 1주택과 10억 3주택의 종부세가 갈리는 이유(기본공제·재산세 공정·중과세율·세액공제·세부담상한), 주택 수 기준 과세 형평성 논쟁, 「똘똘한 한 채」와 세제개편 방향을 표로 정리했습니다.",
  updated: "2026년 7월 17일",
} as const;

export function ComprehensivePropertyTaxFairnessDebate2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-cptfd-intro">
        <h2 id="guide-cptfd-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 기준
        </h2>
        <p>
          「공시가격 <strong>30억 원 아파트 한 채</strong>」와 「<strong>공시 10억 원 아파트 세 채</strong>」는 재산
          총액이 같습니다. 그런데 매년 내는 보유세(재산세+종부세)는 크게 다릅니다. 보통{" "}
          <strong>10억 3채(다주택)</strong> 쪽이 더 많이 냅니다. 같은 30억인데 왜 세금이 갈릴까요?
        </p>
        <p>
          답은 종부세가 <strong>재산 총액</strong>이 아니라 <strong>주택 수·기본공제·중과세율·실거주 여부</strong>를
          함께 보고 매겨지기 때문입니다. 이 구조가 「주택 수 기준 과세가 공정한가」라는 <strong>형평성 논쟁</strong>의
          핵심입니다. 이 글은 두 사례의 세금 차이가 생기는 이유와 양쪽 주장, 정부·OECD가 언급한 방향까지 정리합니다.{" "}
          <Link
            href="/comprehensive-property-tax-calculator"
            className="text-primary underline-offset-4 hover:underline"
          >
            종합부동산세 계산기
          </Link>
          로 본인 공시가격·주택 수를 직접 대입해 볼 수 있습니다.
        </p>
      </section>

      <nav
        className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm"
        aria-label="목차"
      >
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-cptfd-debate" className="text-primary underline-offset-4 hover:underline">
              무엇에 대한 논쟁인가
            </a>
          </li>
          <li>
            <a href="#guide-cptfd-why" className="text-primary underline-offset-4 hover:underline">
              세금이 갈리는 5가지 이유
            </a>
          </li>
          <li>
            <a href="#guide-cptfd-compare" className="text-primary underline-offset-4 hover:underline">
              30억 1채 vs 10억 3채 비교
            </a>
          </li>
          <li>
            <a href="#guide-cptfd-arguments" className="text-primary underline-offset-4 hover:underline">
              양쪽 주장
            </a>
          </li>
          <li>
            <a href="#guide-cptfd-ddoltdol" className="text-primary underline-offset-4 hover:underline">
              「똘똘한 한 채」 현상
            </a>
          </li>
          <li>
            <a href="#guide-cptfd-direction" className="text-primary underline-offset-4 hover:underline">
              정부·OECD가 말한 방향
            </a>
          </li>
          <li>
            <a href="#guide-cptfd-misconceptions" className="text-primary underline-offset-4 hover:underline">
              자주 하는 오해
            </a>
          </li>
          <li>
            <a href="#guide-cptfd-checklist" className="text-primary underline-offset-4 hover:underline">
              확인 순서
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-4" aria-labelledby="guide-cptfd-debate">
        <h2 id="guide-cptfd-debate" className="text-foreground text-xl font-semibold tracking-tight">
          무엇에 대한 논쟁인가
        </h2>
        <p>
          종부세는 도입 때부터 <strong>「주택 수」로 차등할 것인가, 「자산 가액」으로 매길 것인가</strong>를 두고
          논쟁이 이어져 왔습니다. 「30억 1채 vs 10억 3채」는 이 논쟁을 한눈에 보여주는 대표 사례입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              두 관점
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  관점
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  핵심 주장
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  가액 기준
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  같은 30억이면 세금도 비슷해야 한다(수평적 형평). 주택 수로 차등하면 초고가 1채가 유리해진다
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium whitespace-nowrap">
                  주택 수 기준
                </th>
                <td className="px-3 py-2.5">
                  실거주 1채는 보호하고, 여러 채 보유(투기·임대)에는 더 무겁게. 실거주 여부가 중요하다
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cptfd-why">
        <h2 id="guide-cptfd-why" className="text-foreground text-xl font-semibold tracking-tight">
          세금이 갈리는 5가지 이유
        </h2>
        <p>
          같은 30억인데도 세액이 달라지는 것은 종부세·재산세가 <strong>다섯 군데</strong>에서 1주택과 다주택을
          다르게 대우하기 때문입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              1주택 vs 다주택 대우 차이
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  30억 1주택
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  10억 3주택(합 30억)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  종부세 기본공제
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>12억 원</strong>
                </td>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>9억 원</strong>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  재산세 공정시장가액비율
                </th>
                <td className="border-border border-b px-3 py-2.5">45%(1세대 1주택 특례)</td>
                <td className="border-border border-b px-3 py-2.5">60%(일반)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  종부세 세율
                </th>
                <td className="border-border border-b px-3 py-2.5">2주택 이하 일반 누진(0.5~2.7%)</td>
                <td className="border-border border-b px-3 py-2.5">
                  과세표준 12억 초과 구간부터 중과(최고 5.0%)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  고령자·장기보유 세액공제
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  1세대 1주택자 <strong>최대 80%</strong> 적용 가능
                </td>
                <td className="border-border border-b px-3 py-2.5">적용 불가</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium whitespace-nowrap">
                  세부담상한
                </th>
                <td className="px-3 py-2.5">전년 대비 150%</td>
                <td className="px-3 py-2.5">전년 대비 150%(주택 수 무관 현행)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          공제·재산세 공정·세율 세 가지는 다주택에 불리하고, 고령자·장기보유 세액공제는 실거주 1주택에만 열려
          있습니다. 그래서 같은 30억이라도 <strong>1주택이 유리</strong>한 구조가 됩니다.{" "}
          <Link
            href="/guide/property-tax-vs-comprehensive-property-tax-fair-ratio-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            재산세 45% vs 종부세 60% 차이
          </Link>
          에서 공정비율 산식을 볼 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cptfd-compare">
        <h2 id="guide-cptfd-compare" className="text-foreground text-xl font-semibold tracking-tight">
          30억 1채 vs 10억 3채 — 연간 보유세 비교
        </h2>
        <p className="text-muted-foreground text-sm">
          현행 종부세 공정 60% 기준, 세액공제·세부담상한 반영 전 <strong>개략</strong> 예시입니다. 실제 금액은
          공시가격·연령·보유기간·지역에 따라 달라집니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              같은 30억, 연간 보유세(개략·세액공제 전)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  30억 1주택
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  10억 3주택
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  종부세 과세표준
                </th>
                <td className="border-border border-b px-3 py-2.5">(30−12)억×60% = 10.8억</td>
                <td className="border-border border-b px-3 py-2.5">(30−9)억×60% = 12.6억</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  적용 종부세율
                </th>
                <td className="border-border border-b px-3 py-2.5">일반 누진(12억 이하 1.0%대)</td>
                <td className="border-border border-b px-3 py-2.5">12억 초과분 중과(2.0%~)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  연간 보유세(세액공제 전)
                </th>
                <td className="border-border border-b px-3 py-2.5">약 1,350만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 1,700만 원 안팎</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium whitespace-nowrap">
                  1주택 세액공제 적용 시
                </th>
                <td className="px-3 py-2.5">
                  고령·장기보유 최대 80% → <strong>수백만 원대까지</strong> 하락 가능
                </td>
                <td className="px-3 py-2.5">해당 없음(그대로)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          세액공제 전에도 10억 3채가 연 <strong>수백만 원</strong> 더 무겁고, 30억 1주택 소유자가{" "}
          <strong>고령·장기보유 세액공제</strong>(최대 80%)를 받으면 격차는 더 벌어집니다. 「자산은 같은데 세금은
          다르다」는 논쟁이 나오는 지점입니다.
        </p>
        <p className="text-muted-foreground text-sm">
          공시가격대별 1주택 연간 보유세(60%·80%·100% 가정)는{" "}
          <Link
            href="/guide/comprehensive-property-tax-fair-ratio-calculation-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            공정시장가액비율 인상 계산 예시
          </Link>
          에서, 2주택·3주택 이상 비교는{" "}
          <Link
            href="/guide/two-vs-three-home-holding-cost-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            2주택 vs 3주택 보유 비용
          </Link>
          에서 확인할 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cptfd-arguments">
        <h2 id="guide-cptfd-arguments" className="text-foreground text-xl font-semibold tracking-tight">
          양쪽 주장
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              「주택 수 차등이 공정한가」
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  쟁점
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  차등 찬성(주택 수 기준)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  차등 반대(가액 기준)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  실거주 보호
                </th>
                <td className="border-border border-b px-3 py-2.5">1채 실거주는 삶의 터전 → 보호해야</td>
                <td className="border-border border-b px-3 py-2.5">초고가 1채도 담세력이 큼 → 우대는 과함</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  투기 억제
                </th>
                <td className="border-border border-b px-3 py-2.5">여러 채 보유에 중과해야 투기 억제</td>
                <td className="border-border border-b px-3 py-2.5">임대 공급자까지 과세 → 전월세에 전가</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  형평성
                </th>
                <td className="border-border border-b px-3 py-2.5">보유 목적(거주·투자)까지 봐야 공정</td>
                <td className="border-border border-b px-3 py-2.5">같은 자산엔 같은 세금(수평적 형평)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium whitespace-nowrap">
                  부작용
                </th>
                <td className="px-3 py-2.5">고가 1채 쏠림은 별도 대책으로</td>
                <td className="px-3 py-2.5">
                  주택 수 중과가 「똘똘한 한 채」 쏠림을 부추김
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          어느 쪽도 「정답」으로 확정된 것은 아니며, 정부·국회·전문가 사이에서 계속 조정되는 정책 영역입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cptfd-ddoltdol">
        <h2 id="guide-cptfd-ddoltdol" className="text-foreground text-xl font-semibold tracking-tight">
          「똘똘한 한 채」 현상
        </h2>
        <p>
          다주택에 취득세·종부세·양도세가 겹겹이 무거워지면서, 여러 채를 정리하고{" "}
          <strong>입지 좋은 고가 1채로 갈아타는</strong> 「똘똘한 한 채」 선호가 나타났습니다. 30억 1주택이
          10억 3주택보다 세 부담이 가벼운 구조가 이 흐름을 뒷받침한다는 지적입니다.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            다주택 중과(취득 12%·양도 +30%p·종부세 중과)가 <strong>채 수를 줄일 유인</strong>으로 작용
          </li>
          <li>
            1주택 기본공제 12억·세액공제·재산세 45% 특례가 <strong>고가 1채에 유리</strong>
          </li>
          <li>
            결과적으로 상급지 고가 아파트로 수요가 몰려 <strong>지역·가격 양극화</strong> 우려
          </li>
        </ul>
        <p className="text-muted-foreground text-sm">
          이 때문에 「주택 수 중과를 강화할수록 똘똘한 한 채 쏠림이 심해진다」는 반론과, 「그래도 다주택 억제는
          필요하다」는 주장이 맞섭니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cptfd-direction">
        <h2 id="guide-cptfd-direction" className="text-foreground text-xl font-semibold tracking-tight">
          정부·OECD가 말한 방향
        </h2>
        <p>
          2026년 들어 정부와 OECD 모두 <strong>주택 수보다 가액·실거주 중심</strong> 과세로 무게를 옮기는 방향을
          언급했습니다. 다만 <strong>확정된 세법 변경은 아닙니다.</strong>
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              형평성 논쟁과 맞닿은 언급(미확정)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  주체
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  방향
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  정부(7월 세제개편 예고)
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  실거주 중심 과세, 보유세·거래세 균형, 비실거주·초고가 부담 강화 검토
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium whitespace-nowrap">
                  OECD(2026 한국경제보고서)
                </th>
                <td className="px-3 py-2.5">
                  거래세→보유세 전환, 비실거주·저활용 자산에 더 높은 보유세율 권고
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          자세한 발언·일정과 확정·검토·현행 구분은{" "}
          <Link
            href="/guide/holding-capital-gains-tax-increase-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            2026년 7월 부동산 세제개편 예상 총정리
          </Link>
          에서 다룹니다. 개편안이 확정되면 본문 수치를 갱신할 예정입니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-cptfd-misconceptions">
        <h2 id="guide-cptfd-misconceptions" className="text-foreground text-xl font-semibold tracking-tight">
          자주 하는 오해
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>「재산이 같으면 종부세도 같다」</strong> — 주택 수·기본공제·중과세율·세액공제가 달라 같은 30억도
            세액이 갈립니다.
          </li>
          <li>
            <strong>「무조건 1채가 유리하다」</strong> — 초고가 1채는 세액공제가 없거나 세부담상한에 걸리는 경우도
            있어, 연령·보유기간에 따라 다릅니다.
          </li>
          <li>
            <strong>「다주택이면 재산세도 중과된다」</strong> — 재산세는 주택 수를 구분하지 않습니다. 공정비율(45% vs
            60%)과 종부세에서 차이가 납니다.
          </li>
          <li>
            <strong>「형평성 논쟁 = 곧 법 개정」</strong> — 방향 언급과 입법은 다릅니다. 현행 세법은 그대로입니다.
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cptfd-checklist">
        <h2 id="guide-cptfd-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          내 경우 확인 순서
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              체크리스트
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
                  6월 1일 기준 주택 수·공시가격 합계
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  1세대 1주택 기본공제 12억·재산세 45% 해당 여부
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  고령자·장기보유 세액공제 요건(연령·보유기간)
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  종부세 과세표준 12억 초과 여부(중과 구간)
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 text-left font-medium">
                  7월 말 세제개편안·시행일 확인 후 재계산
                </th>
                <td className="px-3 py-2.5 text-center">□</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 위 예시는 세액공제·세부담상한·합산배제 임대주택 등을 반영하지 않은 개략입니다. 정확한 금액은
          홈택스(hometax.go.kr)·관할 지자체 고지세액에서 확인하세요.
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
            href="/guide/comprehensive-property-tax-overview-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 종부세·재산세 기본 구조는 보유세 개요 가이드에서 확인하세요.
          </Link>
        </p>
        <p>
          <Link
            href="/guide/two-vs-three-home-holding-cost-2026-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 2주택·3주택 이상 보유 비용 비교는 별도 가이드에서 더 볼 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
