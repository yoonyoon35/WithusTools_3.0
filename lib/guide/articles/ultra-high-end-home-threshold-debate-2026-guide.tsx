import Link from "next/link";

export const ultraHighEndHomeThresholdDebate2026GuideMeta = {
  slug: "ultra-high-end-home-threshold-debate-2026-guide",
  title: "초고가 주택 기준, 30억? 43억? 50억? | 보유세 과세선 논쟁",
  description:
    "2026년 7월 기준 초고가 주택 기준 논쟁 정리. 현행 고가주택 기준(양도세 12억·종부세 12/9억), 새로 거론되는 30·43·50억 과세선, 시세-공시가격 환산(현실화율 69%), 기준별 과세 대상 규모와 일정을 정리했습니다. 예상·미확정.",
  updated: "2026년 7월 17일",
} as const;

export function UltraHighEndHomeThresholdDebate2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-uheh-intro">
        <h2 id="guide-uheh-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 17일 기준
        </h2>
        <p>
          정부가 <strong>초고가 1주택 보유세 강화</strong>를 검토하면서, 「어느 가격부터 초고가로 볼 것인가」가
          쟁점이 됐습니다. 30억·43억·50억 등 숫자가 오가는데, 사실 <strong>「초고가 주택」이라는 하나의 법적
          정의는 없습니다.</strong> 세목마다 고가주택 기준이 따로 있고, 이번에 새로 그으려는 과세선이 별도로
          논의되는 것입니다.
        </p>
        <p>
          이 글은 <strong>현행 고가주택 기준</strong>과 <strong>새로 거론되는 초고가 과세선(30·43·50억)</strong>을
          구분해 정리하고, 시세와 공시가격의 차이·기준별 대상 규모·일정까지 짚습니다. 아래 내용은{" "}
          <strong>발표 전 예상·논의 정리</strong>이며, 확정 세법이 아닙니다. 개편안이 나오면 갱신할 예정입니다.{" "}
          <Link
            href="/comprehensive-property-tax-calculator"
            className="text-primary underline-offset-4 hover:underline"
          >
            종합부동산세 계산기
          </Link>
          로 본인 공시가격 기준 보유세를 먼저 확인해 볼 수 있습니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="예상 정리 안내"
      >
        <p className="text-foreground font-medium">※ 예상·논의 정리 · 발표 후 업데이트 예정</p>
        <p className="mt-2">
          30·43·50억 등 초고가 기준은 <strong>확정된 세법이 아닙니다.</strong> 7월 말 세제개편안·국회 심의 결과에
          따라 달라질 수 있습니다.
        </p>
      </aside>

      <nav
        className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm"
        aria-label="목차"
      >
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-uheh-no-single" className="text-primary underline-offset-4 hover:underline">
              「초고가」 단일 기준은 없다
            </a>
          </li>
          <li>
            <a href="#guide-uheh-current" className="text-primary underline-offset-4 hover:underline">
              현행 고가주택 기준
            </a>
          </li>
          <li>
            <a href="#guide-uheh-debate" className="text-primary underline-offset-4 hover:underline">
              새로 거론되는 30·43·50억
            </a>
          </li>
          <li>
            <a href="#guide-uheh-price-vs-official" className="text-primary underline-offset-4 hover:underline">
              시세 vs 공시가격
            </a>
          </li>
          <li>
            <a href="#guide-uheh-scope" className="text-primary underline-offset-4 hover:underline">
              기준별 과세 대상 규모
            </a>
          </li>
          <li>
            <a href="#guide-uheh-timeline" className="text-primary underline-offset-4 hover:underline">
              논의 일정
            </a>
          </li>
          <li>
            <a href="#guide-uheh-misconceptions" className="text-primary underline-offset-4 hover:underline">
              자주 하는 오해
            </a>
          </li>
          <li>
            <a href="#guide-uheh-checklist" className="text-primary underline-offset-4 hover:underline">
              확인 순서
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-4" aria-labelledby="guide-uheh-no-single">
        <h2 id="guide-uheh-no-single" className="text-foreground text-xl font-semibold tracking-tight">
          「초고가」 단일 기준은 없다
        </h2>
        <p>
          「고가주택」「초고가주택」은 세목·제도마다 다른 금액을 씁니다. 같은 아파트라도 어떤 세금에서는 고가주택,
          다른 세금에서는 아닐 수 있습니다. 지금 논쟁 중인 <strong>초고가 보유세 과세선</strong>은 이들과 또
          별개로 새로 정하려는 것입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-uheh-current">
        <h2 id="guide-uheh-current" className="text-foreground text-xl font-semibold tracking-tight">
          현행 고가주택 기준(참고)
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              세목·제도별 「고가」 기준(2026년 현행)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  제도
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  기준
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  기준 가격
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  양도세 1세대 1주택 비과세
                </th>
                <td className="border-border border-b px-3 py-2.5">고가주택 12억 초과분 과세</td>
                <td className="border-border border-b px-3 py-2.5">실거래가 12억 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  종부세 기본공제(1주택)
                </th>
                <td className="border-border border-b px-3 py-2.5">공제 넘는 공시가격에 과세</td>
                <td className="border-border border-b px-3 py-2.5">공시가격 12억 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  종부세 기본공제(그 외)
                </th>
                <td className="border-border border-b px-3 py-2.5">다주택 등 합산 공제</td>
                <td className="border-border border-b px-3 py-2.5">공시가격 9억 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  중개보수 최고 요율 구간
                </th>
                <td className="border-border border-b px-3 py-2.5">매매 상한요율 0.7% 협의 구간</td>
                <td className="border-border border-b px-3 py-2.5">매매가 15억 원 이상</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium whitespace-nowrap">
                  초고가 보유세(논의 중)
                </th>
                <td className="px-3 py-2.5">초고가 1주택 추가 과세선</td>
                <td className="px-3 py-2.5">30·43·50억 등 미확정</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          「12억」은 양도세·종부세(1주택)에서 자주 쓰이는 선이라 익숙하지만, 이번 초고가 논의는 그보다 훨씬 높은
          구간을 대상으로 합니다.{" "}
          <Link
            href="/guide/comprehensive-property-tax-overview-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            보유세 개요
          </Link>
          에서 종부세 공제·세율 구조를 볼 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-uheh-debate">
        <h2 id="guide-uheh-debate" className="text-foreground text-xl font-semibold tracking-tight">
          새로 거론되는 30·43·50억
        </h2>
        <p>
          이재명 대통령은 2026년 7월 14일 국무회의에서 초고가 주택 기준에 대한 즉석 의견을 들은 뒤, 「시세 30억이면
          초고가」라는 다수 의견에 <strong>「30억은 좀 가혹하다」「50억 할 줄 알았다」</strong>는 취지로 말했습니다.
          이후 시장에서는 실거래가 <strong>43억~44억</strong> 또는 <strong>50억</strong> 선이 기준이 될 수 있다는
          관측이 나왔습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              거론되는 기준선(미확정)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  기준(시세)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  성격
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  영향 범위(대략)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  30억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">일부 의견·대통령은 「가혹」 평가</td>
                <td className="border-border border-b px-3 py-2.5">서울 상급지 전반(국민평형 일부 포함)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  43억~44억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">시장·전문가 전망치</td>
                <td className="border-border border-b px-3 py-2.5">강남·서초·송파·용산 중심</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium whitespace-nowrap">
                  50억 원
                </th>
                <td className="px-3 py-2.5">대통령 언급 수준</td>
                <td className="px-3 py-2.5">강남·서초 중심으로 좁아짐</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          전문가들은 기준을 지나치게 낮게 잡으면 대상이 급격히 넓어져 조세 저항이 커질 수 있다며, 제도 초기에는
          40억~50억 수준을 검토하되 소득 없는 <strong>고령 장기보유 1주택자에 대한 유예·예외</strong>도 함께
          두자는 의견을 냈습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-uheh-price-vs-official">
        <h2 id="guide-uheh-price-vs-official" className="text-foreground text-xl font-semibold tracking-tight">
          시세 vs 공시가격 — 같은 「30억」이 아니다
        </h2>
        <p>
          보유세(재산세·종부세)는 <strong>시세가 아니라 공시가격</strong> 기준으로 매깁니다. 그래서 「시세 50억」과
          「공시 50억」은 전혀 다른 이야기입니다. 올해 공동주택 공시가격 현실화율(시세 반영률)을 약 <strong>69%</strong>로
          보면 아래처럼 환산됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              시세 → 공시가격 환산(현실화율 69% 가정)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  시세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  대략 공시가격
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  30억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">약 20.7억 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  43억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">약 29.7억 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  50억 원
                </th>
                <td className="px-3 py-2.5">약 34.5억 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          시세 50억을 공시가격으로 바꾸면 약 <strong>34.5억</strong>입니다. 이 때문에 정부가 <strong>공시가격
          기준 30억~35억 선</strong>을 염두에 둔다는 관측이 나옵니다. 「기준 30억」이 시세인지 공시가인지에 따라
          대상이 크게 달라지므로, 발표 시 <strong>어떤 가격 기준인지</strong>를 먼저 확인해야 합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-uheh-scope">
        <h2 id="guide-uheh-scope" className="text-foreground text-xl font-semibold tracking-tight">
          기준별 과세 대상 규모
        </h2>
        <p>기준선을 어디에 긋느냐에 따라 과세 대상 주택 수·지역이 크게 달라집니다(보도 통계 기준).</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              기준별 대상(보도 인용·개략)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  기준
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  대상 규모
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  지역 분포
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  공시 30억 초과
                </th>
                <td className="border-border border-b px-3 py-2.5">전국 약 5만 가구(전체 주택의 0.3%)</td>
                <td className="border-border border-b px-3 py-2.5">서울이 약 99%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  시세 30억 기준
                </th>
                <td className="border-border border-b px-3 py-2.5">서울 아파트 거래의 약 4.5%(상반기)</td>
                <td className="border-border border-b px-3 py-2.5">강남·서초·송파·용산 등 상급지 전반</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium whitespace-nowrap">
                  시세 50억 기준
                </th>
                <td className="px-3 py-2.5">서울 아파트 거래의 약 0.8%(상반기)</td>
                <td className="px-3 py-2.5">강남·서초 중심(합계 약 88%)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          30억(공시) 기준이면 강남·서초의 국민평형(전용 84㎡) 일부도 포함될 수 있고, 50억(시세)으로 올리면 강남·서초
          초고가 단지 중심으로 좁혀집니다. 최근 3년 새 30억 이상 거래가 수 배로 늘어, 같은 기준이라도 대상이
          과거보다 넓어졌습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-uheh-timeline">
        <h2 id="guide-uheh-timeline" className="text-foreground text-xl font-semibold tracking-tight">
          논의 일정
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              초고가 과세선 관련 일정
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  시점
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  2026년 7월 14일
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  국무회의 온라인 의견 수렴 — 이재명 대통령 「30억은 가혹」 취지 발언
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  2026년 7월 16일
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  부동산 세제 분야 토론회 — 보유세 적정 수준·종부세 과세 기준·초고가 과세 강화 논의
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  2026년 7월 23일
                </th>
                <td className="border-border border-b px-3 py-2.5">대통령 주재 부동산 대토론회(의견 종합)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium whitespace-nowrap">
                  2026년 7월 말(예정)
                </th>
                <td className="px-3 py-2.5">정부 세제개편안 발표(초고가 기준 포함 여부 주목)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          정부 발언·OECD 권고 등 세제개편 전반의 배경은{" "}
          <Link
            href="/guide/holding-capital-gains-tax-increase-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            2026년 7월 부동산 세제개편 예상 총정리
          </Link>
          , 주택 수 vs 가액 과세 형평성은{" "}
          <Link
            href="/guide/comprehensive-property-tax-fairness-debate-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            30억 1채 vs 10억 3채
          </Link>
          가이드에서 다룹니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-uheh-misconceptions">
        <h2 id="guide-uheh-misconceptions" className="text-foreground text-xl font-semibold tracking-tight">
          자주 하는 오해
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>「초고가 = 법으로 정해진 금액」</strong> — 단일 정의는 없습니다. 세목마다 기준이 다르고, 이번
            과세선은 새로 논의 중입니다.
          </li>
          <li>
            <strong>「기준 30억 = 시세 30억」</strong> — 보유세는 공시가격 기준입니다. 시세인지 공시가인지 확인이
            먼저입니다.
          </li>
          <li>
            <strong>「발언 = 확정」</strong> — 대통령·전문가 발언은 방향이며, 세법은 개편안·국회 절차를 거칩니다.
          </li>
          <li>
            <strong>「내 집도 30억 넘으니 무조건 과세」</strong> — 기준선·시행일·1주택 세액공제·유예 여부에 따라
            실제 부담은 달라집니다.
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-uheh-checklist">
        <h2 id="guide-uheh-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          발표 전 확인 순서
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
                  내 주택 공시가격(부동산공시가격알리미)
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  발표 기준이 시세인지 공시가격인지
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  1세대 1주택 세액공제·유예 대상 여부
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
          ※ 초고가 기준·세율·시행일은 정부 발표 및 국회 심의 결과에 따라 달라집니다. 정확한 세액은
          홈택스(hometax.go.kr)·관할 지자체 고지에서 확인하세요. 본 가이드는 발표 후 갱신할 예정입니다.
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
            → 종합부동산세 계산기에서 공시가격 기준 연간 보유세를 계산해 볼 수 있습니다.
          </Link>
        </p>
        <p>
          <Link
            href="/guide/holding-capital-gains-tax-increase-2026-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 7월 세제개편 예상 배경·정부 발언·OECD 권고는 세제개편 예상 가이드에서 확인하세요.
          </Link>
        </p>
        <p>
          <Link
            href="/guide/comprehensive-property-tax-fairness-debate-2026-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 주택 수 vs 가액 과세 형평성(30억 1채 vs 10억 3채)은 별도 가이드에서 다룹니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
