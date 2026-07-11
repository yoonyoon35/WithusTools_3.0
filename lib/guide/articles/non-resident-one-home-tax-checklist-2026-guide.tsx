import Link from "next/link";

export const nonResidentOneHomeTaxChecklist2026GuideMeta = {
  slug: "non-resident-one-home-tax-checklist-2026-guide",
  title: "살지 않는 1주택, 세금 어떻게 달라지나",
  description:
    "2026년 7월 기준 비거주 1주택자 보유세(재산세·종부세)·양도세 장특공·1세대1주택 요건 차이, 공시 15억·20억 실거주 vs 비거주 비교, 7월 세제개편 전 체크리스트를 표로 정리했습니다.",
  updated: "2026년 7월 11일",
} as const;

export function NonResidentOneHomeTaxChecklist2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-nroh-intro">
        <h2 id="guide-nroh-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 9일 기준
        </h2>
        <p>
          정부가 7월 말 세제개편안에서 「집은 사는(living) 곳」이라는 원칙을 강조하면서,{" "}
          <strong>다주택자뿐 아니라 살지 않는 1주택</strong>도 겨냥한다는 해석이 나옵니다. 세대에 집이
          한 채뿐이어도 전세·월세로 임대하거나 비워 두면, 보유세·양도세에서 실거주 1세대 1주택과 다른
          대우를 받습니다.
        </p>
        <p>
          이 글은 비거주 1주택이 <strong>지금 세법</strong>에서 어떻게 과세되는지, 7월 개편에서 무엇이
          달라질 수 있는지, 발표 전에 확인할 항목을 체크리스트로 정리합니다. 확정 세법이 아닌 검토
          항목은 별도 표시했습니다.{" "}
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
          「1주택인데 왜 다주택자처럼 세금이 나오지」라는 질문이 많습니다. 세대에 집이 한 채뿐이어도{" "}
          <strong>그 집에 살지 않으면</strong> 보유세·양도세에서 실거주 1세대 1주택 혜택을 받기 어렵습니다. 이
          글은 현행 세법 기준과 7월 개편 검토 항목을 구분해 정리합니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-nroh-who-reads">
        <h2 id="guide-nroh-who-reads" className="text-foreground text-xl font-semibold tracking-tight">
          이 글에서 확인할 것
        </h2>
        <p>
          전세·월세로 임대 중인 1주택, 부모 댁·지방 집만 갖고 다른 곳에 사는 경우가 대표적입니다. 먼저{" "}
          <strong>6월 1일 기준 거주 여부</strong>를 확인하고, 이어서 실거주 전환·매도·임대 유지 중 어떤 선택이
          유리한지 시뮬레이션하세요. 7월 개편안은 아직 확정 전이므로 「검토 중」 항목과 현행을 구분해 읽어야
          합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="예상 정리 안내"
      >
        <p className="text-foreground font-medium">※ 7월 개편 관련은 예상 · 발표 후 갱신 예정</p>
        <p className="mt-2">
          아래 「검토 중」 항목은 아직 확정된 세법이 아닙니다. 7월 말 개편안·국회 심의 결과에 따라 달라질
          수 있습니다.
        </p>
      </aside>

      <nav
        className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm"
        aria-label="목차"
      >
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-nroh-who-reads" className="text-primary underline-offset-4 hover:underline">
              이 글에서 확인할 것
            </a>
          </li>
          <li>
            <a href="#guide-nroh-who" className="text-primary underline-offset-4 hover:underline">
              비거주 1주택이란
            </a>
          </li>
          <li>
            <a href="#guide-nroh-holding-now" className="text-primary underline-offset-4 hover:underline">
              현행 보유세 — 실거주 vs 비거주
            </a>
          </li>
          <li>
            <a href="#guide-nroh-case15" className="text-primary underline-offset-4 hover:underline">
              공시 15억·20억 비교 예시
            </a>
          </li>
          <li>
            <a href="#guide-nroh-cg-now" className="text-primary underline-offset-4 hover:underline">
              현행 양도세·장특공
            </a>
          </li>
          <li>
            <a href="#guide-nroh-july" className="text-primary underline-offset-4 hover:underline">
              7월 개편 검토 항목
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
              개편안 발표 전 체크리스트
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-4" aria-labelledby="guide-nroh-who">
        <h2 id="guide-nroh-who" className="text-foreground text-xl font-semibold tracking-tight">
          비거주 1주택 — 누가 해당하나
        </h2>
        <p>
          「1주택」은 세대 기준 주택이 1채인 상태입니다. 그러나 종부세·재산세에서 1세대 1주택 혜택을 받으려면{" "}
          <strong>6월 1일 현재 세대원 전원이 그 주택에 거주</strong>해야 합니다. 아래처럼 한 채만 갖고
          있어도 비거주로 분류될 수 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              흔한 비거주 1주택 사례
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  유형
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  설명
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  전세·월세 임대
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  본인은 다른 곳에 살고 소유 주택만 임대
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  빈집·부모 댁 대기
                </th>
                <td className="border-border border-b px-3 py-2.5">승계·이사 예정으로 비워 둔 1채</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  직장·학교 근처 거주
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  다른 지역 아파트에 살고, 본인 명의 1채는 지방·교외에만 있음
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  배우자·자녀 명의 1채
                </th>
                <td className="px-3 py-2.5">
                  세대 주택 수는 1채지만, 세대원이 그 집에 안 살면 1세대 1주택 요건 미충족
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          양도세 1세대 1주택 비과세(2년 거주 등)와 종부세 1세대 1주택 요건은 <strong>비슷하지만
          동일하지 않습니다</strong>. 보유세는 6월 1일 거주·주택 수, 양도세는 양도 직전 1년·2년 거주가
          핵심입니다.
        </p>
        <p>
          본인이 위 표의 어느 유형에 가까운지 먼저 정하세요. 「1주택이니까 괜찮겠지」보다 <strong>6월 1일에 그
          집에 살고 있었는지</strong>가 보유세, <strong>양도 직전 거주 기간</strong>이 양도세를 가릅니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-nroh-holding-now">
        <h2 id="guide-nroh-holding-now" className="text-foreground text-xl font-semibold tracking-tight">
          현행 보유세 — 실거주 1세1주택 vs 비거주 1주택
        </h2>
        <p>
          비거주 1주택은 보유세 계산에서 <strong>2주택·비거주 1주택 등</strong> 구간으로 잡힙니다. 재산세
          공정 60%, 종부세 기본공제 9억, 세액공제 없음이 적용됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              보유세 항목별 차이(현행)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  실거주 1세대 1주택
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비거주 1주택
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종부세 기본공제
                </th>
                <td className="border-border border-b px-3 py-2.5">12억 원</td>
                <td className="border-border border-b px-3 py-2.5">9억 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  재산세 공정시장가액비율
                </th>
                <td className="border-border border-b px-3 py-2.5">45%</td>
                <td className="border-border border-b px-3 py-2.5">60%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종부세 세액공제(연령·보유)
                </th>
                <td className="border-border border-b px-3 py-2.5">최대 80%</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  공시 9억 이하 재산세
                </th>
                <td className="border-border border-b px-3 py-2.5">0.05% 단일세율</td>
                <td className="border-border border-b px-3 py-2.5">누진(0.1%~0.4%)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  12억 이하 종부세
                </th>
                <td className="px-3 py-2.5">과세표준 0(면제)</td>
                <td className="px-3 py-2.5">(공시−9억)×60% 과세 가능</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          공시가격이 12억 원 이하여도 비거주 1주택은 종부세 과세표준이 생길 수 있습니다. 예를 들어 공시
          11억이면 (11−9)억×60%=1.2억 과세표준이 잡힙니다. 실거주 1세대 1주택은 12억 이하에서 종부세가
          없습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-nroh-case15">
        <h2 id="guide-nroh-case15" className="text-foreground text-xl font-semibold tracking-tight">
          공시 15억·20억 — 연간 보유세 차이
        </h2>
        <p className="text-muted-foreground text-sm">
          세액공제·세부담상한 미반영. 비거주는 2주택과 동일 산식 적용.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              실거주 1세1주택 vs 비거주 1주택
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  공시가격
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  실거주 1세1주택
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비거주 1주택
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  차이
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  15억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">318만 원</td>
                <td className="border-border border-b px-3 py-2.5">483만 원</td>
                <td className="border-border border-b px-3 py-2.5">+165만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종부세 과세표준(15억)
                </th>
                <td className="border-border border-b px-3 py-2.5">1.8억 원</td>
                <td className="border-border border-b px-3 py-2.5">3.6억 원</td>
                <td className="border-border border-b px-3 py-2.5">2배</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  20억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">584만 원</td>
                <td className="border-border border-b px-3 py-2.5">814만 원</td>
                <td className="border-border border-b px-3 py-2.5">+230만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  12억 원(종부세 발생 전후)
                </th>
                <td className="px-3 py-2.5">종부세 없음</td>
                <td className="px-3 py-2.5">종부세 발생(과표 1.8억)</td>
                <td className="px-3 py-2.5">구간 차이 큼</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          같은 1채여도 거주 여부만으로 연간 보유세가 수백만 원 달라질 수 있습니다.{" "}
          <Link
            href="/guide/one-household-one-home-comprehensive-property-tax-amount-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            1세대 1주택 종부세 구간별 금액
          </Link>
          과{" "}
          <Link
            href="/guide/property-tax-vs-comprehensive-property-tax-fair-ratio-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            재산세 45% vs 종부세 60%
          </Link>
          가이드에서 산식을 더 볼 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-nroh-cg-now">
        <h2 id="guide-nroh-cg-now" className="text-foreground text-xl font-semibold tracking-tight">
          현행 양도세 — 거주 안 하면 장특공이 줄어듦
        </h2>
        <p>
          1세대 1주택 양도소득세 비과세(공시 12억 이하 등)와 장기보유특별공제는 <strong>실제 거주</strong>가
          전제입니다. 비거주 1주택은 보유만 길어도 거주기간 공제를 받기 어렵습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              1세대 1주택 장기보유특별공제(현행)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  공제
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  요건·한도
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비거주 1주택
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  보유기간 공제
                </th>
                <td className="border-border border-b px-3 py-2.5">3년 이상, 최대 30%</td>
                <td className="border-border border-b px-3 py-2.5">적용 가능(보유만으로)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  거주기간 공제
                </th>
                <td className="border-border border-b px-3 py-2.5">2년 이상, 최대 40%</td>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>실거주 없으면 사실상 0</strong>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  합산 한도
                </th>
                <td className="border-border border-b px-3 py-2.5">최대 80%</td>
                <td className="border-border border-b px-3 py-2.5">보유분만으로 최대 30% 수준</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  12억 이하 비과세
                </th>
                <td className="px-3 py-2.5">2년 보유·2년 거주 등</td>
                <td className="px-3 py-2.5">거주 요건 미충족 시 비과세 불가</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          「살지도 않는데 세금 혜택?」이라는 정부 메시지는 이 <strong>거주기간 공제·비과세</strong> 구조를
          겨냥합니다. 다주택자 조정지역 중과와는 별개로, 1주택 비거주가 이번 개편 논의의 1순위 검토
          대상으로 거론됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-nroh-july">
        <h2 id="guide-nroh-july" className="text-foreground text-xl font-semibold tracking-tight">
          7월 세제개편 — 비거주 1주택 검토 항목(미확정)
        </h2>
        <p>
          구윤철 부총리는 7월 말 개편안에 부동산 내용이 포함될 것이라고 밝혔고, 보유 기간보다{" "}
          <strong>거주 여부</strong>에 무게를 두겠다는 방향을 제시했습니다. 비거주 1주택 보유자가 주목할
          카드는 아래와 같습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              검토 중(2026년 7월 8일 기준)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비거주 1주택 영향
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상태
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  공정시장가액비율 상향
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  재산세·종부세 과세표준 상승. 이미 60%·9억 공제 구간이라 체감 여지 있음
                </td>
                <td className="border-border border-b px-3 py-2.5">검토 중</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  비거주 1주택 장특공 축소
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  보유기간 공제만으로는 부족한 구조를 더 조임
                </td>
                <td className="border-border border-b px-3 py-2.5">검토 중</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  거주 기간 비중 확대
                </th>
                <td className="border-border border-b px-3 py-2.5">실거주 전환 시에만 혜택 확대 방향</td>
                <td className="border-border border-b px-3 py-2.5">검토 중</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  고가 1주택 보유세
                </th>
                <td className="px-3 py-2.5">공시 12억 초과 구간 종부세·재산세 부담 확대 가능</td>
                <td className="px-3 py-2.5">검토 중</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          일부 보도에서는 공정시장가액비율 80% 상향 시 보유세가 크게 늘 수 있다는 전망도 나오지만,{" "}
          <strong>확정된 수치·시행일은 없습니다.</strong>{" "}
          <Link
            href="/guide/holding-capital-gains-tax-increase-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            2026년 7월 부동산 세제개편 예상 총정리
          </Link>
          에서 확정·검토·현행을 구분해 볼 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-nroh-rent-pass">
        <h2 id="guide-nroh-rent-pass" className="text-foreground text-xl font-semibold tracking-tight">
          보유세 인상과 임대료 — 세입자 부담 우려
        </h2>
        <p>
          보유세 부담이 커지면 일부 집주인이 비용을 <strong>임대료에 반영</strong>할 수 있다는 우려가
          제기됩니다. 전세 물량 감소·월세 전환이 이어지는 상황에서, 세제 변화가 세입자에게로 넘어가지
          않도록 하는 장치가 필요하다는 지적도 있습니다.
        </p>
        <p>
          비거주 1주택이 임대 중이라면, 보유세 증가분을 월세에 얼마나 전가할 수 있는지(관리비·수선비와
          구분), 계약 갱신 시점의 관행을 함께 봐야 합니다. 정부는 투기 억제와 주거 안정 사이 균형을
          개편의 핵심 변수로 보고 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-nroh-action">
        <h2 id="guide-nroh-action" className="text-foreground text-xl font-semibold tracking-tight">
          대응 시나리오 — 버티기·전환·매도
        </h2>
        <p>
          7월 개편안 발표 전에는 「지금 당장 팔아야 하나」보다 <strong>현행 세법에서 연간 부담이 얼마인지</strong>를
          먼저 숫자로 잡는 게 순서입니다. 실거주 전환은 보유세를 줄일 수 있지만 이사·직장·학군 비용과 맞물리고,
          매도는 양도세·장특공 조건을 함께 봐야 합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              상황별 검토 포인트
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상황
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  검토
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  당분간 임대 유지
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  현행·개편 후 연간 보유세 시뮬레이션, 임대수익과 비교. 6월 1일 기준 주택 수·거주 여부
                  고정
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  실거주 전환 검토
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  전입·임대차 종료 일정, 내년 6월 1일 1세대 1주택 요건 충족 여부. 양도세 비과세·장특공
                  거주 요건과 연계
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  매도 검토
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  비거주 상태 양도세(장특공 제한), 개편 전·후 세율 비교. 조정지역·다주택 여부 별도
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  증여·상속 예정
                </th>
                <td className="px-3 py-2.5">
                  보유세 납부 주체·거주 요건이 바뀌는지 확인. 증여·상속 취득세는 별도 시뮬레이션
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          실거주로 바꿔 1세대 1주택 요건을 채우면 보유세만 연 165만~230만 원(공시 15억·20억 예시) 줄일 수
          있지만, 이사·직장·학군 비용과 맞물립니다. 「세금만」 보고 결정하기보다 생활비 전체를 함께
          보는 편이 낫습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-nroh-checklist">
        <h2 id="guide-nroh-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          7월 개편안 발표 전 체크리스트
        </h2>
        <p>
          개편안이 나오기 전에 아래를 채워 두면, 발표 직후 「나에게 해당되는지」를 빠르게 판단할 수 있습니다.
          특히 공정시장가액비율·장특공·거주 요건이 바뀌면 <strong>임대 유지 vs 실거주 전환 vs 매도</strong> 순위가
          달라질 수 있습니다.
        </p>
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
                  1. 6월 1일 기준 세대 주택 수·전원 거주 여부
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  2. 실거주 vs 비거주 연간 보유세 차이(계산기·홈택스)
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  3. 양도 시 거주기간·장특공·비과세 요건 충족 여부
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  4. 7월 말 개편안 — 공정비율·장특공·시행일
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  5. 실거주 전환·매도·임대 유지 손익 비교
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 text-left font-medium">
                  6. 임대 중이면 계약 갱신·월세 전가 가능 범위 검토
                </th>
                <td className="px-3 py-2.5 text-center">□</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 거주·주택 수 판정은 사안별로 달라질 수 있습니다. 분쟁 소지가 있으면 세무사·관할 지자체에
          확인하세요.
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
            → 7월 세제개편 전체 흐름은 부동산 세제개편 예상 총정리에서 확인할 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
