import Link from "next/link";

export const comprehensivePropertyTaxOverviewGuideMeta = {
  slug: "comprehensive-property-tax-overview-guide",
  title: "종합부동산세란? 재산세·지방교육세·종부세·농특세 한 번에 정리",
  description:
    "2026년 기준 보유세 4종(재산세·지방교육세·종합부동산세·농어촌특별세) 구조, 6월 1일 과세 기준·7월·12월 납부, 공정시장가액비율·기본공제, 취득세·양도세와의 차이, 1세대 1주택 공시가격별 연간 보유세 예시를 표로 정리했습니다.",
  updated: "2026년 7월 2일",
} as const;

export function ComprehensivePropertyTaxOverviewGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-cpto-overview">
        <h2 id="guide-cpto-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 기준
        </h2>
        <p>
          주택을 <strong>보유하는 동안</strong> 매년 부과되는 세금을 통틀어 보유세라고 부릅니다. 실무에서는 재산세(지방세)와
          종합부동산세(국세, 줄여 종부세)가 따로 고지되지만, 금액 산출은 서로 연결되어 있습니다.{" "}
          <Link
            href="/comprehensive-property-tax-calculator"
            className="text-primary underline-offset-4 hover:underline"
          >
            종합부동산세 계산기
          </Link>
          로 연간 합계를 빠르게 확인한 뒤, 이 글에서는 <strong>4종 세목이 각각 무엇인지·언제·어떤 기준으로 매겨지는지</strong>를
          처음부터 정리합니다. 세액공제·합산배제 임대주택·세부담상한 등 세부 요건은 하단 관련 가이드에서 이어집니다.
        </p>
      </section>

      <nav
        className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm"
        aria-label="목차"
      >
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-cpto-four-taxes" className="text-primary underline-offset-4 hover:underline">
              보유세 4종 한눈에
            </a>
          </li>
          <li>
            <a href="#guide-cpto-vs-other" className="text-primary underline-offset-4 hover:underline">
              취득세·양도세와의 차이
            </a>
          </li>
          <li>
            <a href="#guide-cpto-base-date" className="text-primary underline-offset-4 hover:underline">
              과세 기준: 공시가격·6월 1일
            </a>
          </li>
          <li>
            <a href="#guide-cpto-property-tax" className="text-primary underline-offset-4 hover:underline">
              ① 재산세·지방교육세(7월)
            </a>
          </li>
          <li>
            <a href="#guide-cpto-cpt" className="text-primary underline-offset-4 hover:underline">
              ② 종합부동산세·농특세(12월)
            </a>
          </li>
          <li>
            <a href="#guide-cpto-fair-ratio" className="text-primary underline-offset-4 hover:underline">
              재산세 공정 vs 종부세 공정
            </a>
          </li>
          <li>
            <a href="#guide-cpto-deduction" className="text-primary underline-offset-4 hover:underline">
              기본공제·과세표준
            </a>
          </li>
          <li>
            <a href="#guide-cpto-rates" className="text-primary underline-offset-4 hover:underline">
              종부세 세율(주택)
            </a>
          </li>
          <li>
            <a href="#guide-cpto-credit" className="text-primary underline-offset-4 hover:underline">
              공제할 재산세
            </a>
          </li>
          <li>
            <a href="#guide-cpto-flow" className="text-primary underline-offset-4 hover:underline">
              연간 보유세 계산 흐름
            </a>
          </li>
          <li>
            <a href="#guide-cpto-examples" className="text-primary underline-offset-4 hover:underline">
              1세대 1주택 금액 예시
            </a>
          </li>
          <li>
            <a href="#guide-cpto-case20" className="text-primary underline-offset-4 hover:underline">
              공시 20억 원 풀어 쓴 계산
            </a>
          </li>
          <li>
            <a href="#guide-cpto-schedule" className="text-primary underline-offset-4 hover:underline">
              신고·납부 일정
            </a>
          </li>
          <li>
            <a href="#guide-cpto-misconceptions" className="text-primary underline-offset-4 hover:underline">
              자주 헷갈리는 점
            </a>
          </li>
          <li>
            <a href="#guide-cpto-checklist" className="text-primary underline-offset-4 hover:underline">
              확인 순서
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-4" aria-labelledby="guide-cpto-four-taxes">
        <h2 id="guide-cpto-four-taxes" className="text-foreground text-xl font-semibold tracking-tight">
          보유세 4종 한눈에
        </h2>
        <p>
          아파트 한 채를 1년 내내 갖고 있으면, 통상 아래 네 가지가 연간 보유세 합계에 포함됩니다. 재산세와 지방교육세는
          관할 지자체가 7월에, 종부세와 농어촌특별세는 국세청이 12월에 고지합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              세목별 성격·납부 시기
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  세목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  국세·지방세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  납부 시기
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비고
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  재산세
                </th>
                <td className="border-border border-b px-3 py-2.5">지방세</td>
                <td className="border-border border-b px-3 py-2.5">7월(1·7월 분할 납부 가능)</td>
                <td className="border-border border-b px-3 py-2.5">공시가격 × 재산세 공정 × 누진세율</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  지방교육세
                </th>
                <td className="border-border border-b px-3 py-2.5">지방세</td>
                <td className="border-border border-b px-3 py-2.5">재산세와 함께</td>
                <td className="border-border border-b px-3 py-2.5">재산세액의 20%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종합부동산세
                </th>
                <td className="border-border border-b px-3 py-2.5">국세</td>
                <td className="border-border border-b px-3 py-2.5">12월 1~15일</td>
                <td className="border-border border-b px-3 py-2.5">(공시가격−기본공제)×종부세 공정×세율 − 공제할 재산세</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  농어촌특별세
                </th>
                <td className="px-3 py-2.5">국세</td>
                <td className="px-3 py-2.5">종부세와 함께</td>
                <td className="px-3 py-2.5">종부세 납부세액의 20%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          「종합부동산세」는 위 네 가지 중 <strong>③ 종부세</strong>만 가리키는 경우가 많습니다. 이 글 제목의 「종합부동산세란?」도
          그 의미에 가깝지만, 실무에서 연간 부담을 말할 때는 재산세·지방교육세까지 합친 <strong>연간 보유세</strong>로 보는
          편이 맞습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cpto-vs-other">
        <h2 id="guide-cpto-vs-other" className="text-foreground text-xl font-semibold tracking-tight">
          취득세·양도세와 어떻게 다른가
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              거래·보유·처분 세금 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  부과 시점
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  과세표준(대표)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  관할
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득세
                </th>
                <td className="border-border border-b px-3 py-2.5">매수·증여·상속 등 취득 시 1회</td>
                <td className="border-border border-b px-3 py-2.5">취득가액(매매가 등)</td>
                <td className="border-border border-b px-3 py-2.5">지방세</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  보유세(재산세·종부세)
                </th>
                <td className="border-border border-b px-3 py-2.5">보유하는 매년</td>
                <td className="border-border border-b px-3 py-2.5">공시가격(매년 갱신)</td>
                <td className="border-border border-b px-3 py-2.5">지방세 + 국세</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  양도소득세
                </th>
                <td className="px-3 py-2.5">매도·증여 등 양도 시</td>
                <td className="px-3 py-2.5">양도차익(양도가 − 취득가 등)</td>
                <td className="px-3 py-2.5">국세</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          공시가격 12억 원 아파트를 5억 원에 샀다면, 취득세는 <strong>5억 원(취득가)</strong> 기준이고 보유세는{" "}
          <strong>12억 원(공시가격)</strong> 기준입니다. 매매가와 공시가격이 다르기 때문에 「집값 대비 보유세가 왜 이렇게
          나오지?」라는 질문이 자주 나옵니다. 취득세율은{" "}
          <Link href="/guide/acquisition-tax-rates-2026-guide" className="text-primary underline-offset-4 hover:underline">
            2026년 취득세율 정리
          </Link>
          , 양도세는 매도 시 별도 신고 대상입니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-cpto-base-date">
        <h2 id="guide-cpto-base-date" className="text-foreground text-xl font-semibold tracking-tight">
          과세 기준: 공시가격·6월 1일
        </h2>
        <p>
          보유세는 매매가가 아니라 <strong>해당 연도 공시가격(주택 공시가격)</strong>을 기준으로 합니다. 공시가격은 매년
          4월 30일 전후 국토교통부 고시로 확정되며, realtyprice.kr·정부24·홈택스에서 조회할 수 있습니다.
        </p>
        <p>
          종부세의 주택 수·1세대 1주택 여부·합산 대상 토지는 <strong>매년 6월 1일</strong> 현재 보유 현황으로 판단합니다.
          6월 2일에 두 번째 주택을 사도 그해 종부세는 1주택 기준으로 계산되고, 반대로 5월 31일에 매도했다면 그해에는
          1주택으로 잡힙니다. 재산세도 같은 해 공시가격·6월 1일 주택 수 등을 반영해 7월에 고지됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              연간 일정(주택 보유자 기준)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  시기
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  4월
                </th>
                <td className="border-border border-b px-3 py-2.5">당해 연도 주택 공시가격 고시</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  6월 1일
                </th>
                <td className="border-border border-b px-3 py-2.5">종부세 과세 기준일(주택 수·1세대1주택·토지 합산)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  7월
                </th>
                <td className="border-border border-b px-3 py-2.5">재산세·지방교육세 납부(고지서·위택스)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  9월 16~30일
                </th>
                <td className="border-border border-b px-3 py-2.5">합산배제 임대주택 등 종부세 신고(해당자)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  12월 1~15일
                </th>
                <td className="px-3 py-2.5">종부세·농특세 신고·납부(홈택스)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cpto-property-tax">
        <h2 id="guide-cpto-property-tax" className="text-foreground text-xl font-semibold tracking-tight">
          ① 재산세·지방교육세(7월 납부)
        </h2>
        <p>
          재산세는 지방자치단체가 부과하는 세금입니다. 주택분 과세표준은 <strong>공시가격 × 재산세 공정시장가액비율</strong>
          이고, 여기에 지방세법상 누진세율을 적용합니다. 산출된 재산세에 지방교육세 20%가 더해집니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              재산세 공정시장가액비율(주택)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비고
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1세대 1주택
                </th>
                <td className="border-border border-b px-3 py-2.5">45%</td>
                <td className="border-border border-b px-3 py-2.5">공시가격 9억 이하·1세대1주택이면 0.05% 단일세율 적용</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  그 외(2주택·비거주 1주택 등)
                </th>
                <td className="px-3 py-2.5">60%</td>
                <td className="px-3 py-2.5">누진세율(0.1%~0.4%)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          예) 공시가격 8억·1세대 1주택 → 과세표준 8억×45%=3.6억 → 재산세 3.6억×0.05%=18만 원, 지방교육세 3.6만 원, 합계
          약 21.6만 원. 공시가격 9억·1세대 1주택 → 9억×45%=4.05억 → 재산세 약 20.3만 원, 지방교육세 약 4.1만 원, 합계
          약 24.3만 원. 공시가격 12억·1세대 1주택 → 12억×45%=5.4억 과세표준에 누진 적용 → 재산세 약 153만 원, 지방교육세
          약 31만 원, 합계 약 184만 원(종부세 없음).
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cpto-cpt">
        <h2 id="guide-cpto-cpt" className="text-foreground text-xl font-semibold tracking-tight">
          ② 종합부동산세·농특세(12월 납부)
        </h2>
        <p>
          종부세는 공시가격이 일정 수준을 넘는 주택·토지 보유자에게 부과되는 국세입니다. 1세대 1주택이라도 공시가격이
          12억 원을 넘으면(기본공제 초과분) 과세 대상이 됩니다. 2주택 이상·법인 보유 주택은 기본공제 9억 원(법인은
          0원)부터 계산합니다.
        </p>
        <p>
          종부세 납부세액이 확정되면 그 금액의 20%를 농어촌특별세로 추가 납부합니다. 취득세 때의 농특세(전용 85㎡ 초과
          0.2% 등)와 <strong>별도 세목</strong>이므로 혼동하지 않도록 구분하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cpto-fair-ratio">
        <h2 id="guide-cpto-fair-ratio" className="text-foreground text-xl font-semibold tracking-tight">
          재산세 공정 45% vs 종부세 공정 60%
        </h2>
        <p>
          「공정시장가액비율」이라는 이름은 같지만 재산세용과 종부세용이 <strong>별도</strong>입니다. 같은 공시가격 20억
          원·1세대 1주택이면 재산세 과세표준은 20억×45%=9억, 종부세 과세표준은 (20억−12억)×60%=4.8억으로 잡힙니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              두 공정시장가액비율 비교(2026년 현행)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  재산세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  종부세
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주택(일반)
                </th>
                <td className="border-border border-b px-3 py-2.5">60%(1세대1주택 45%)</td>
                <td className="border-border border-b px-3 py-2.5">60%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  토지
                </th>
                <td className="border-border border-b px-3 py-2.5">70%</td>
                <td className="border-border border-b px-3 py-2.5">100%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  기본공제 반영
                </th>
                <td className="px-3 py-2.5">없음(공시가격 전액×비율)</td>
                <td className="px-3 py-2.5">공시가격−기본공제 후×비율</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          2026년 6~7월 정부가 종부세 공정시장가액비율 인상을 검토한다는 보도가 있었으나, <strong>7월 2일 현재 법령상
          60%가 그대로</strong>입니다. 인상 시나리오별 금액은{" "}
          <Link
            href="/guide/comprehensive-property-tax-fair-ratio-calculation-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            종부세 공정시장가액비율 계산 예시
          </Link>
          가이드를 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cpto-deduction">
        <h2 id="guide-cpto-deduction" className="text-foreground text-xl font-semibold tracking-tight">
          기본공제·과세표준
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              종부세 기본공제(주택·토지)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  기본공제
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1세대 1주택(개인)
                </th>
                <td className="border-border border-b px-3 py-2.5">12억 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  그 외 주택(2주택 등)
                </th>
                <td className="border-border border-b px-3 py-2.5">9억 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종합합산 토지
                </th>
                <td className="border-border border-b px-3 py-2.5">5억 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  별도합산 토지
                </th>
                <td className="px-3 py-2.5">80억 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="bg-muted/30 rounded-md border border-border px-3 py-2 font-mono text-sm leading-relaxed whitespace-pre-wrap">
          {`종부세 과세표준 = (공시가격 합계 − 기본공제) × 종부세 공정시장가액비율

예) 1세대 1주택 공시 25억 → (25억 − 12억) × 60% = 7.8억 원`}
        </p>
        <p>
          공시가격이 기본공제 이하이면 종부세 과세표준은 0입니다. 12억 원 공시 1세대 1주택은 종부세가 없고 재산세만
          부과됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cpto-rates">
        <h2 id="guide-cpto-rates" className="text-foreground text-xl font-semibold tracking-tight">
          종부세 세율(주택·개인)
        </h2>
        <p className="text-muted-foreground text-sm">
          2023년 이후 세율. 과세표준에 누진세율−누진공제를 적용합니다. 3주택 이상은 12억 원 초과 구간부터 중과됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              2주택 이하(개인)
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
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3억 원 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">0.5%</td>
                <td className="border-border border-b px-3 py-2.5">—</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3억 초과 ~ 6억 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">0.7%</td>
                <td className="border-border border-b px-3 py-2.5">60만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  6억 초과 ~ 12억 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">1.0%</td>
                <td className="border-border border-b px-3 py-2.5">240만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  12억 초과 ~ 25억 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">1.3%</td>
                <td className="border-border border-b px-3 py-2.5">600만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  25억 초과 ~ 50억 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">1.5%</td>
                <td className="border-border border-b px-3 py-2.5">1,100만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  50억 초과
                </th>
                <td className="px-3 py-2.5">2.0% ~ 2.7%</td>
                <td className="px-3 py-2.5">구간별 상이</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          예) 과세표준 4.8억(20억 공시·1세대1주택) → 4.8억×0.7%−60만=276만 원(공제 전 종부세). 1세대 1주택은 여기서
          연령·보유기간 세액공제(한도 80%)가 추가로 적용될 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cpto-credit">
        <h2 id="guide-cpto-credit" className="text-foreground text-xl font-semibold tracking-tight">
          공제할 재산세 — 종부세와 재산세가 겹치지 않게
        </h2>
        <p>
          재산세를 이미 7월에 냈는데 12월에 종부세까지 내면 이중 과세 아닌가 하는 질문이 많습니다. 종부세 산출 시{" "}
          <strong>공제할 재산세액</strong>을 차감하도록 되어 있습니다(종합부동산세법 시행령 제4조의2). 다만 재산세
          전액이 통째로 빠지는 것은 아니고, 아래 공식으로 산출한 금액만큼만 공제됩니다.
        </p>
        <p className="bg-muted/30 rounded-md border border-border px-3 py-2 font-mono text-sm leading-relaxed whitespace-pre-wrap">
          {`공제 표준세액 = (공시가격 − 기본공제) × 종부세 공정 × 재산세 공정 × 표준세율(주택 0.4%)
실제 공제액 = 재산세 × (공제 표준세액 ÷ 재산세 표준세액)`}
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              공시 20억·1세대 1주택 공제 예시
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  금액
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  재산세+지방교육세(7월)
                </th>
                <td className="border-border border-b px-3 py-2.5">297만+59.4만=356.4만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종부세(공제 전)
                </th>
                <td className="border-border border-b px-3 py-2.5">276만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  공제할 재산세
                </th>
                <td className="border-border border-b px-3 py-2.5">(20−12)억×60%×45%×0.4%=86.4만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  종부세 납부(농특세 전)
                </th>
                <td className="px-3 py-2.5">276만−86.4만=189.6만 원 → 농특세 20% 포함 약 228만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-cpto-flow">
        <h2 id="guide-cpto-flow" className="text-foreground text-xl font-semibold tracking-tight">
          연간 보유세 계산 흐름
        </h2>
        <pre className="bg-muted/30 text-foreground overflow-x-auto rounded-md border border-border p-3 font-mono text-xs leading-relaxed whitespace-pre sm:text-sm">
          {`[① 재산세 · 지방세 · 7월]
공시가격 × 재산세 공정(1세대1주택 45%·일반 60%)
  = 재산세 과세표준 × 누진세율
  = 재산세 + 지방교육세(재산세 × 20%)

[② 종부세 · 국세 · 12월]
(공시가격 − 기본공제) × 종부세 공정(주택 60%)
  = 종부세 과세표준 × 세율 − 누진공제
  = 종부세(공제 전) − 공제할 재산세
  − 1세대1주택 세액공제(한도 80%) − 세부담상한(150%)
  = 종부세 납부세액 + 농어촌특별세(20%)

[③ 연간 보유세 합계]
재산세 + 지방교육세 + 종부세 + 농특세`}
        </pre>
        <p className="text-muted-foreground text-sm">
          납부 시기는 7월과 12월로 나뉘지만, 연간 부담을 비교할 때는 위 합계를 씁니다. 세부담상한·1세대1주택
          세액공제·합산배제 임대주택은 개별 요건 충족 시에만 적용됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cpto-examples">
        <h2 id="guide-cpto-examples" className="text-foreground text-xl font-semibold tracking-tight">
          1세대 1주택 — 공시가격별 연간 보유세
        </h2>
        <p className="text-muted-foreground text-sm">
          기본공제 12억·재산세 공정 45%·종부세 공정 60%(현행). 세액공제·세부담상한 반영 전 합계입니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              공시가격별 연간 보유세(재산세+지방교육세+종부세+농특세)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  공시가격
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  연간 보유세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  종부세 해당
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  9억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">약 24.3만 원</td>
                <td className="border-border border-b px-3 py-2.5">없음(0.05% 단일세율)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  12억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">약 184만 원</td>
                <td className="border-border border-b px-3 py-2.5">없음(기본공제 이하)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  15억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">약 318만 원</td>
                <td className="border-border border-b px-3 py-2.5">있음</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  20억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">약 584만 원</td>
                <td className="border-border border-b px-3 py-2.5">있음</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  25억 원
                </th>
                <td className="px-3 py-2.5">약 944만 원</td>
                <td className="px-3 py-2.5">있음(과세표준 7.8억)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          12억 원은 「종부세 면제」로 많이 알려져 있지만, 정확히는 <strong>종부세 과세표준이 0</strong>이라 12억을
          넘기 전까지는 재산세·지방교육세만 내는 구조입니다. 12억 1천만 원만 넘어도 종부세가 붙기 시작합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cpto-case20">
        <h2 id="guide-cpto-case20" className="text-foreground text-xl font-semibold tracking-tight">
          공시가격 20억 원·1세대 1주택 — 단계별 합계
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              7월·12월 납부를 합친 연간 보유세
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  단계
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  산출
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  금액
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  재산세 과세표준
                </th>
                <td className="border-border border-b px-3 py-2.5">20억×45%</td>
                <td className="border-border border-b px-3 py-2.5">9억 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  7월 납부
                </th>
                <td className="border-border border-b px-3 py-2.5">재산세+지방교육세</td>
                <td className="border-border border-b px-3 py-2.5">356.4만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종부세 과세표준
                </th>
                <td className="border-border border-b px-3 py-2.5">(20억−12억)×60%</td>
                <td className="border-border border-b px-3 py-2.5">4.8억 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  12월 납부
                </th>
                <td className="border-border border-b px-3 py-2.5">종부세+농특세(공제·세액공제 전)</td>
                <td className="border-border border-b px-3 py-2.5">228만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  연간 합계
                </th>
                <td className="px-3 py-2.5">356.4만+228만</td>
                <td className="px-3 py-2.5">584.4만 원(약 584만 원)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          60세 이상·10년 이상 보유 등 1세대 1주택 세액공제를 받으면 12월 납부액이 더 줄어들 수 있습니다. 직전 연도
          대비 세부담상한(150%)도 적용 대상이면 상한이 걸립니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cpto-schedule">
        <h2 id="guide-cpto-schedule" className="text-foreground text-xl font-semibold tracking-tight">
          신고·납부 방법과 기한
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              세목별 신고·납부
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  세목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  경로
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  기한
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  재산세
                </th>
                <td className="border-border border-b px-3 py-2.5">지자체 고지·위택스</td>
                <td className="border-border border-b px-3 py-2.5">7월(분할 납부 가능)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종부세
                </th>
                <td className="border-border border-b px-3 py-2.5">홈택스(hometax.go.kr) 신고·납부</td>
                <td className="border-border border-b px-3 py-2.5">12월 1~15일</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  종부세 분납
                </th>
                <td className="px-3 py-2.5">홈택스 신청</td>
                <td className="px-3 py-2.5">납부세액 250만 원 초과 시 6개월 이내 분납 가능</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          홈택스 「종합부동산세 모의계산」으로 12월 예상액을 미리 볼 수 있습니다. 7월 재산세 고지서와 숫자를 맞춰
          보는 것이 오류를 잡는 데 가장 빠릅니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cpto-misconceptions">
        <h2 id="guide-cpto-misconceptions" className="text-foreground text-xl font-semibold tracking-tight">
          자주 헷갈리는 점
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              오해 vs 실제
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  흔한 오해
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  실제
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  「종부세만 내면 된다」
                </th>
                <td className="border-border border-b px-3 py-2.5">재산세·지방교육세는 7월에 별도 납부</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  「재산세 냈으니 종부세 없다」
                </th>
                <td className="border-border border-b px-3 py-2.5">공제할 재산세만 차감, 공시 12억 초과 1주택은 종부세 대상</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  「매매가 기준이다」
                </th>
                <td className="border-border border-b px-3 py-2.5">보유세는 공시가격 기준(매년 변동)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  「1주택이면 전부 면제」
                </th>
                <td className="border-border border-b px-3 py-2.5">1세대 1주택·실거주 등 요건 + 공시 12억까지 종부세 면제</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  「취득세와 같은 농특세」
                </th>
                <td className="px-3 py-2.5">취득 농특세(면적·주택 수)와 종부세 농특세(종부세액 20%)는 별도</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          1세대 1주택 요건(세대·거주·보유 기간 등)은 종부세뿐 아니라 양도세 비과세와도 연결됩니다. 다주택자 종부세·
          대출 규제는{" "}
          <Link href="/guide/multi-homeowner-loan-regulations-guide" className="text-primary underline-offset-4 hover:underline">
            다주택자 규제 정리
          </Link>
          를 함께 보세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cpto-checklist">
        <h2 id="guide-cpto-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          내 집 보유세 확인 순서
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
                  1. realtyprice.kr에서 당해 연도 공시가격 확인
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  2. 6월 1일 기준 주택 수·1세대 1주택 해당 여부 확인
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  3. 7월 재산세 고지서 수령·위택스 납부
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  4. 홈택스 종부세 모의계산으로 12월 예상액 대조
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 text-left font-medium">
                  5. 12월 1~15일 종부세·농특세 신고·납부(250만 원 초과 시 분납 검토)
                </th>
                <td className="px-3 py-2.5 text-center">□</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 합산배제 임대주택·법인 보유·토지분 등은 본 글 범위 밖입니다. 세액공제·세부담상한·개편안 동향은 관련
          가이드·홈택스 고지를 기준으로 확인하세요.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="관련 가이드"
      >
        <p className="text-foreground font-medium">관련 가이드</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <Link
              href="/comprehensive-property-tax-calculator"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              종합부동산세 계산기
            </Link>
            — 공시가격·주택 수 입력으로 연간 보유세 합계 산출
          </li>
          <li>
            <Link
              href="/guide/comprehensive-property-tax-fair-ratio-calculation-2026-guide"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              종부세 공정시장가액비율 인상 시 세액 예시
            </Link>
          </li>
          <li>
            <Link
              href="/guide/holding-capital-gains-tax-increase-2026-guide"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              보유세·양도세 강화 검토 동향
            </Link>
          </li>
          <li>
            <Link
              href="/guide/acquisition-tax-rates-2026-guide"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              2026년 취득세율 정리
            </Link>
          </li>
          <li>
            <Link
              href="/guide/multi-homeowner-loan-regulations-guide"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              다주택자 규제(종부세·대출)
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
