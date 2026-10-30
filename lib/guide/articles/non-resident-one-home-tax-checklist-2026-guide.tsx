import Link from "next/link";
import type { ReactNode } from "react";

export const nonResidentOneHomeTaxChecklist2026GuideMeta = {
  slug: "non-resident-one-home-tax-checklist-2026-guide",
  title: "살지 않는 1주택, 세금 어떻게 달라지나",
  description:
    "2026년 9월 1일 확정 정부안 기준 비거주 1주택 종부세 기본공제 12억 유지, 거주 14억과의 차이, 현행 보유세·양도세(비과세·장특공) 거주 요건, 임대·실거주 전환·매도 시 확인할 체크리스트를 정리했습니다.",
  updated: "2026년 10월 30일",
} as const;

type TableProps = {
  caption: string;
  headers: readonly string[];
  rows: readonly (readonly ReactNode[])[];
  minWidth?: string;
};

function GuideTable({ caption, headers, rows, minWidth = "min-w-[38rem]" }: TableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className={`w-full ${minWidth} border-collapse text-left text-sm`}>
        <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
          {caption}
        </caption>
        <thead>
          <tr className="bg-muted/40">
            {headers.map((h) => (
              <th key={h} scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const last = i === rows.length - 1;
            const cell = last ? "px-3 py-2.5" : "border-border border-b px-3 py-2.5";
            return (
              <tr key={i} className={i % 2 === 1 ? "bg-muted/20" : undefined}>
                {row.map((c, j) =>
                  j === 0 ? (
                    <th key={j} scope="row" className={`${cell} font-medium`}>
                      {c}
                    </th>
                  ) : (
                    <td key={j} className={cell}>
                      {c}
                    </td>
                  ),
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function NonResidentOneHomeTaxChecklist2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-nroh-intro">
        <h2 id="guide-nroh-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 9월 1일 확정 정부안 기준
        </h2>
        <p>
          8월 3일 세제개편안은 「집은 사는(living) 곳」 원칙 아래 <strong>살지 않는 1주택</strong>을 실거주 1주택과
          다르게 대우하려 했습니다. 그런데 9월 1일 확정된 정부안에서 가장 큰 쟁점이던{" "}
          <strong>비거주 1주택 종부세 기본공제 9억 원 축소안은 철회되어 현행 12억 원이 유지</strong>됩니다. 세부담
          상한도 200% 인상안 대신 현행 150%를 유지합니다.
        </p>
        <p>
          이 글은 비거주 1주택이 <strong>현행 세법</strong>에서 어떻게 과세되는지, <strong>확정 정부안</strong>에서
          무엇이 달라지는지, 대응 전 확인할 항목을 정리합니다. 정부안은 현재 국회 재정경제기획위원회에서 심사 중이라
          법률로 공포되기 전까지 바뀔 수 있습니다.{" "}
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
          로 본인 조건을 대입해 볼 수 있습니다.
        </p>
        <p>
          먼저 오해부터 바로잡습니다. 현행 보유세(재산세·종부세)의 1세대 1주택 혜택은{" "}
          <strong>세대 주택 수</strong>를 기준으로 하며 실제 거주 여부를 묻지 않습니다. 거주 여부가 세금을 가르는 곳은
          현행에서는 <strong>양도소득세(비과세·장기보유특별공제)</strong>이고, 보유세는 정부안이 통과되면 2027년부터
          차등이 시작됩니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="정부안 안내"
      >
        <p className="text-foreground font-medium">※ 9월 1일 확정 정부안 · 국회 심사 중</p>
        <p className="mt-2">
          아래 「정부안」 항목은 2026년 8월 3일 발표 후 9월 1일 수정·확정된 내용입니다. 국회 통과와 시행령 확정 전까지
          변경될 수 있습니다.
        </p>
      </aside>

      <nav className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm" aria-label="목차">
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-nroh-who" className="text-primary underline-offset-4 hover:underline">
              비거주 1주택 — 누가 해당하나
            </a>
          </li>
          <li>
            <a href="#guide-nroh-holding-now" className="text-primary underline-offset-4 hover:underline">
              현행 보유세 — 거주 여부와 무관
            </a>
          </li>
          <li>
            <a href="#guide-nroh-cg-now" className="text-primary underline-offset-4 hover:underline">
              현행 양도세·장특공 — 거주가 갈리는 곳
            </a>
          </li>
          <li>
            <a href="#guide-nroh-july" className="text-primary underline-offset-4 hover:underline">
              확정 정부안 — 비거주 1주택
            </a>
          </li>
          <li>
            <a href="#guide-nroh-case15" className="text-primary underline-offset-4 hover:underline">
              공시 15억·20억 — 기본공제 차이 예시
            </a>
          </li>
          <li>
            <a href="#guide-nroh-rent-pass" className="text-primary underline-offset-4 hover:underline">
              보유세와 임대료 전가
            </a>
          </li>
          <li>
            <a href="#guide-nroh-action" className="text-primary underline-offset-4 hover:underline">
              대응 시나리오
            </a>
          </li>
          <li>
            <a href="#guide-nroh-checklist" className="text-primary underline-offset-4 hover:underline">
              대응 체크리스트
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-4" aria-labelledby="guide-nroh-who">
        <h2 id="guide-nroh-who" className="text-foreground text-xl font-semibold tracking-tight">
          비거주 1주택 — 누가 해당하나
        </h2>
        <p>
          「1주택」은 세대 기준 주택이 1채인 상태이고, 「비거주」는 본인(세대원)이 그 집에 살지 않는 상태입니다. 전세·월세로
          임대하거나 비워 두거나, 직장·학교 때문에 다른 곳에 사는 경우가 대표적입니다.
        </p>
        <GuideTable
          caption="흔한 비거주 1주택 사례"
          headers={["유형", "설명"]}
          minWidth="min-w-[36rem]"
          rows={[
            ["전세·월세 임대", "본인은 다른 곳에 살고 소유 주택만 임대"],
            ["빈집·부모 댁 대기", "승계·이사 예정으로 비워 둔 1채"],
            ["직장·학교 근처 거주", "다른 지역에 전·월세로 살고, 본인 명의 1채는 지방·교외에만 있음"],
            [
              "배우자·자녀 명의 1채",
              "세대 주택 수는 1채라 보유세의 1세대 1주택 특례는 가능. 다만 양도세 비과세·장특공의 거주 요건은 실제 거주 여부에 따라 달라짐",
            ],
          ]}
        />
        <p>
          본인이 위 표의 어느 유형에 가까운지 먼저 정하세요. 현행에서는 <strong>양도 시점의 거주 기간</strong>이 양도세를
          가르고, 정부안이 통과되면 <strong>과세기준일(6월 1일)의 거주 여부</strong>가 2027년부터 종부세 기본공제와
          세액공제에 영향을 줍니다. 취학·직장·질병·부모 봉양 등 불가피한 사유의 비거주를 거주기간으로 인정하는 범위는
          시행령에서 정해질 예정입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-nroh-holding-now">
        <h2 id="guide-nroh-holding-now" className="text-foreground text-xl font-semibold tracking-tight">
          현행 보유세 — 거주 여부와 무관
        </h2>
        <p>
          현행 종부세·재산세의 1세대 1주택 특례는 세대가 보유한 주택 수로 판단합니다. 임대 중이거나 비워 둔 1주택도
          1세대 1주택자이면 같은 기본공제·세액공제 구조를 적용받습니다(임대주택 합산배제·다주택 여부는 별도).
        </p>
        <GuideTable
          caption="보유세 항목별 비교(현행)"
          headers={["항목", "실거주 1세대 1주택", "비거주 1세대 1주택"]}
          minWidth="min-w-[40rem]"
          rows={[
            ["종부세 기본공제", "12억 원", "12억 원(동일)"],
            ["종부세 세액공제(연령·보유기간)", "합산 최대 80%", "동일"],
            ["종부세 세부담 상한", "전년 대비 150%", "동일"],
            ["부부 공동명의 기본공제", "부부 합산 18억 원(공동명의 특례 신청 시)", "동일"],
          ]}
        />
        <p>
          즉 현행에서는 「살지 않는다」는 이유만으로 보유세가 더 나오지 않습니다. 이 차이는 정부안이 통과될 때 새로
          생기는 것입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-nroh-cg-now">
        <h2 id="guide-nroh-cg-now" className="text-foreground text-xl font-semibold tracking-tight">
          현행 양도세·장특공 — 거주가 갈리는 곳
        </h2>
        <p>
          현행에서 비거주 1주택이 불리해지는 지점은 양도소득세입니다. 1세대 1주택 비과세는 2년 이상 보유가 기본이고,
          조정대상지역에서 취득한 주택은 2년 이상 거주도 필요합니다. 장기보유특별공제도 거주 요건을 채우면 보유·거주
          공제를 합쳐 최대 80%(표2)까지 받지만, 거주 요건을 못 채우면 일반 공제(최대 30%)만 적용됩니다.
        </p>
        <GuideTable
          caption="1세대 1주택 장기보유특별공제(현행)"
          headers={["공제", "요건·한도", "비거주 1주택(거주 요건 미충족)"]}
          rows={[
            ["일반 공제(표1)", "3년 이상 보유, 연 2%, 최대 30%(15년 이상)", "이 공제만 적용"],
            ["보유기간 공제(표2)", "3년 이상 보유, 연 4%, 최대 40%", "비과세 요건(거주 포함)을 못 채우면 적용 불가"],
            ["거주기간 공제(표2)", "2년 이상 거주, 연 4%, 최대 40%", "거주 기간이 없으면 0"],
            ["12억 원 이하 비과세", "2년 보유(조정대상지역 취득은 2년 거주 포함)", "거주 요건 미충족 시 비과세 불가"],
          ]}
        />
        <p>
          자세한 요건은{" "}
          <Link
            href="/guide/one-household-one-home-capital-gains-tax-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            1세대 1주택 양도소득세 가이드
          </Link>
          에서 확인할 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-nroh-july">
        <h2 id="guide-nroh-july" className="text-foreground text-xl font-semibold tracking-tight">
          확정 정부안 — 비거주 1주택 핵심
        </h2>
        <p>
          9월 1일 확정된 정부안에서 비거주 1주택에 영향을 주는 항목은 아래와 같습니다. 8월 3일 발표 때와 달라진 부분을
          함께 표시했습니다.
        </p>
        <GuideTable
          caption="확정 정부안(2026년 9월 1일) — 비거주 1주택 영향"
          headers={["항목", "내용", "적용 시점"]}
          rows={[
            [
              "종부세 기본공제",
              <>
                실거주 1주택 12억→<strong>14억</strong> / 비거주 1주택 <strong>12억 유지</strong>(8월 3일 발표 때는
                9억 축소안, 9월 1일 철회)
              </>,
              "2027~",
            ],
            [
              "부부 공동명의 기본공제",
              "실거주 각 9억(합 18억 유지) / 비거주 각 6억(합 12억, 당초 각 4억에서 상향)",
              "2027~",
            ],
            ["세부담 상한", <><strong>150% 유지</strong>(200% 인상안 철회)</>, "현행 유지"],
            [
              "공정시장가액비율",
              "1세대 1주택 등 60%→70%, 3주택 이상·조정대상지역 보유자는 80%까지(비거주 1주택에도 동일 비율)",
              "2027~2028",
            ],
            [
              "종부세 세액공제",
              "보유기간 공제 → 거주기간 공제로 전환. 2027년은 과도기(보유공제와 거주공제 중 큰 쪽), 2028년부터 거주공제만",
              "2027~2028",
            ],
            [
              "종부세 세율",
              "2028년부터 주택 수가 아닌 가액 기준 단일 세율표 적용, 전 구간 세율 인상",
              "2028~",
            ],
            [
              "양도세 장특공",
              "2029년부터 거주기간 공제 중심으로 전환(2028년은 한시적으로 보유공제 50% 인정), 장기거주 공제 한도 신설(2029년~ 연 10억, 2028년 한시 20억)",
              "2028~2029",
            ],
          ]}
        />
        <p>
          정리하면 비거주 1주택의 <strong>종부세 기본공제는 줄지 않지만</strong>, 실거주 1주택은 14억으로 늘어 차이가
          2억 원 생기고, 세액공제가 거주기간 중심으로 바뀌며, 양도세 장특공도 거주 중심으로 옮겨 갑니다.{" "}
          <Link
            href="/guide/holding-capital-gains-tax-increase-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            2026년 부동산 세제개편안 총정리
          </Link>
          에서 전체 흐름을 볼 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-nroh-case15">
        <h2 id="guide-nroh-case15" className="text-foreground text-xl font-semibold tracking-tight">
          공시 15억·20억 — 기본공제 차이 예시
        </h2>
        <p className="text-muted-foreground text-sm">
          정부안 가정: 공정시장가액비율 70%(2027년 1주택 기준). 세율·세액공제·재산세 공제는 반영하지 않은 과세표준
          비교입니다.
        </p>
        <GuideTable
          caption="실거주 1주택(14억 공제) vs 비거주 1주택(12억 공제) 종부세 과세표준"
          headers={["공시가격", "실거주 1주택", "비거주 1주택", "과세표준 차이"]}
          minWidth="min-w-[38rem]"
          rows={[
            ["15억 원", "(15−14)억×70% = 0.7억 원", "(15−12)억×70% = 2.1억 원", "1.4억 원"],
            ["20억 원", "(20−14)억×70% = 4.2억 원", "(20−12)억×70% = 5.6억 원", "1.4억 원"],
            ["13억 원", "종부세 과세표준 없음", "(13−12)억×70% = 0.7억 원", "0.7억 원"],
          ]}
        />
        <p>
          공시가격이 같아도 비거주 1주택은 과세표준이 최대 1.4억 원(2억 원×70%) 더 큽니다. 실제 세액은 세율 구간과
          세액공제에 따라 달라지므로{" "}
          <Link
            href="/comprehensive-property-tax-calculator"
            className="text-primary underline-offset-4 hover:underline"
          >
            종합부동산세 계산기
          </Link>
          와{" "}
          <Link
            href="/guide/one-household-one-home-comprehensive-property-tax-amount-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            1세대 1주택 종부세 구간별 금액
          </Link>
          을 함께 확인하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-nroh-rent-pass">
        <h2 id="guide-nroh-rent-pass" className="text-foreground text-xl font-semibold tracking-tight">
          보유세 인상과 임대료 — 세입자 부담 우려
        </h2>
        <p>
          국회 재정경제기획위원회 검토보고서(10월 보도)는 거주공제 전환·세율 인상이 임대 매물을 줄이고 늘어난 세 부담이
          임대료로 넘어갈 가능성이 있다고 지적했습니다. 특히 부부 공동명의 비거주 주택은 현행 합 18억 공제에서 합 12억으로
          낮아져 세 부담이 급증할 수 있다는 점도 언급됐습니다.
        </p>
        <p>
          비거주 1주택이 임대 중이라면, 보유세 증가분을 월세에 얼마나 전가할 수 있는지(관리비·수선비와 구분), 계약 갱신
          시점의 관행을 함께 봐야 합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-nroh-action">
        <h2 id="guide-nroh-action" className="text-foreground text-xl font-semibold tracking-tight">
          대응 시나리오 — 버티기·전환·매도
        </h2>
        <p>
          정부안이 아직 국회를 통과하지 않았으므로 「지금 당장 팔아야 하나」보다{" "}
          <strong>현행 세법에서 연간 부담과 양도세가 얼마인지</strong>를 먼저 숫자로 잡는 게 순서입니다. 실거주 전환은
          양도세 요건(거주 기간)과 2027년 이후 보유세 차등을 함께 줄일 수 있지만 이사·직장·학군 비용과 맞물립니다.
        </p>
        <GuideTable
          caption="상황별 검토 포인트"
          headers={["상황", "검토"]}
          minWidth="min-w-[38rem]"
          rows={[
            [
              "당분간 임대 유지",
              "현행 보유세는 실거주와 동일. 2027년 이후 기본공제(14억/12억)·세액공제 전환 영향과 임대수익 비교",
            ],
            [
              "실거주 전환 검토",
              "전입·임대차 종료 일정, 양도세 비과세·장특공의 거주 기간(2년 이상) 충족 여부. 2027년 6월 1일 기준 거주 여부",
            ],
            ["매도 검토", "비거주 상태 양도세(장특공 일반 공제 최대 30%), 조정지역·다주택 여부, 2029년 이후 장특공 전환 영향"],
            ["증여·상속 예정", "보유세 납부 주체·거주 요건이 바뀌는지 확인. 증여·상속 취득세는 별도 시뮬레이션"],
          ]}
        />
        <p>
          「세금만」 보고 결정하기보다 이사 비용, 임대수익, 생활비 전체를 함께 보는 편이 낫습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-nroh-checklist">
        <h2 id="guide-nroh-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          대응 체크리스트
        </h2>
        <p>
          아래를 채워 두면 국회 심사 결과와 시행령이 나왔을 때 「나에게 해당되는지」를 빠르게 판단할 수 있습니다.
        </p>
        <GuideTable
          caption="확인 항목"
          headers={["항목", "확인"]}
          minWidth="min-w-[30rem]"
          rows={[
            ["1. 6월 1일 기준 세대 주택 수·전원 거주 여부", "□"],
            ["2. 현행 연간 보유세(계산기·홈택스)와 2027년 이후 기본공제·세액공제 변화", "□"],
            ["3. 양도 시 거주기간·장특공·비과세 요건 충족 여부", "□"],
            ["4. 정부안 국회 통과 여부 — 기본공제·공정비율·장특공·시행일", "□"],
            ["5. 실거주 전환·매도·임대 유지 손익 비교", "□"],
            ["6. 임대 중이면 계약 갱신·월세 전가 가능 범위 검토", "□"],
          ]}
        />
        <p className="text-muted-foreground text-sm">
          ※ 거주·주택 수 판정은 사안별로 달라질 수 있습니다. 분쟁 소지가 있으면 세무사·관할 지자체에 확인하세요.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="관련 가이드"
      >
        <p>
          <Link
            href="/guide/one-household-one-home-capital-gains-tax-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 1세대 1주택 양도세 비과세·거주 요건은 양도세 가이드에서 더 볼 수 있습니다.
          </Link>
        </p>
        <p>
          <Link
            href="/guide/two-vs-three-home-holding-cost-2026-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 2주택·3주택 보유·양도 부담 비교는 관련 가이드에서 정리했습니다.
          </Link>
        </p>
        <p>
          <Link
            href="/guide/holding-capital-gains-tax-increase-2026-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            → 세제개편 전체 흐름은 부동산 세제개편안 총정리에서 확인할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
