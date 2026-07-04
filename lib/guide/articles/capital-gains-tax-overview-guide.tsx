import Link from "next/link";

export const capitalGainsTaxOverviewGuideMeta = {
  slug: "capital-gains-tax-overview-guide",
  title: "양도소득세란? 과세대상·세율·신고·납부 한 번에 정리",
  description:
    "2026년 기준 국세청 양도소득세 개요를 바탕으로 과세대상·양도차익·기본세율·단기·다주택 중과·비과세·예정·확정신고·분할납부·가산세를 표로 정리했습니다.",
  updated: "2026년 7월 4일",
} as const;

export function CapitalGainsTaxOverviewGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-cgto-overview">
        <h2 id="guide-cgto-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 기준
        </h2>
        <p>
          부동산을 <strong>매도(양도)</strong>해 이익이 생기면 그 소득에 대해 양도소득세가 부과됩니다. 취득세·종부세와
          달리 <strong>보유 중이 아니라 팔 때</strong> 일시에 과세되는 국세입니다.{" "}
          <Link
            href="/capital-gains-tax-calculator"
            className="text-primary underline-offset-4 hover:underline"
          >
            양도소득세 계산기
          </Link>
          로 예상 세액을 확인한 뒤, 이 글에서는 국세청 「양도소득세 개요」를 바탕으로 제도의 뼈대를 정리합니다.
        </p>
      </section>

      <nav
        className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm"
        aria-label="목차"
      >
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-cgto-what" className="text-primary underline-offset-4 hover:underline">
              양도소득세란
            </a>
          </li>
          <li>
            <a href="#guide-cgto-target" className="text-primary underline-offset-4 hover:underline">
              과세대상·양도의 범위
            </a>
          </li>
          <li>
            <a href="#guide-cgto-calc" className="text-primary underline-offset-4 hover:underline">
              세액 계산 구조
            </a>
          </li>
          <li>
            <a href="#guide-cgto-rates" className="text-primary underline-offset-4 hover:underline">
              세율(기본·단기·중과)
            </a>
          </li>
          <li>
            <a href="#guide-cgto-exempt" className="text-primary underline-offset-4 hover:underline">
              비과세·감면 개요
            </a>
          </li>
          <li>
            <a href="#guide-cgto-filing" className="text-primary underline-offset-4 hover:underline">
              신고·납부·분할납부
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-4" aria-labelledby="guide-cgto-what">
        <h2 id="guide-cgto-what" className="text-foreground text-xl font-semibold tracking-tight">
          양도소득세란?
        </h2>
        <p>
          개인이 토지·건물 등 부동산이나 주식·분양권 등을 <strong>양도</strong>해 발생한 이익(소득)에 부과하는
          세금입니다. 취득일부터 양도일까지 보유 기간 동안의 이익을 양도 시점에 과세하며, 손실이거나 이익이 없으면
          과세되지 않습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              보유세·취득세·양도세 구분
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
                  과세표준
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득세
                </th>
                <td className="border-border border-b px-3 py-2.5">취득(매수) 시</td>
                <td className="border-border border-b px-3 py-2.5">취득가액·주택 수 등</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  재산세·종부세
                </th>
                <td className="border-border border-b px-3 py-2.5">보유 중 매년</td>
                <td className="border-border border-b px-3 py-2.5">공시가격·보유 현황</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  양도소득세
                </th>
                <td className="px-3 py-2.5">매도(양도) 시</td>
                <td className="px-3 py-2.5">양도차익(매도가−취득가−필요경비)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cgto-target">
        <h2 id="guide-cgto-target" className="text-foreground text-xl font-semibold tracking-tight">
          과세대상·양도의 범위
        </h2>
        <p>국세청 안내 기준, 과세 자산에는 다음이 포함됩니다.</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5 text-sm leading-relaxed">
          <li>
            <strong className="text-foreground">부동산</strong>: 토지·건물(무허가·미등기 포함)
          </li>
          <li>
            <strong className="text-foreground">부동산 관련 권리</strong>: 분양권·조합원입주권·전세권·등기된 임차권 등
          </li>
          <li>
            <strong className="text-foreground">주식·파생상품·신탁 수익권</strong> 등(별도 세율)
          </li>
        </ul>
        <p>
          <strong>양도</strong>는 등기 여부와 관계없이 매매·교환·현물출자 등 유상으로 소유권이 이전되는 경우를
          말합니다. 부담부증여(채무 인수 증여)도 양도에 해당할 수 있습니다. 반면 배우자·직계존비속 간 매매는 증여
          추정으로 양도세가 아닌 증여세가 과세될 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cgto-calc">
        <h2 id="guide-cgto-calc" className="text-foreground text-xl font-semibold tracking-tight">
          세액 계산 구조
        </h2>
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
                  ① 양도차익
                </th>
                <td className="border-border border-b px-3 py-2.5">양도가액 − 취득가액 − 필요경비</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  ② 비과세·고가 안분
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  1세대 1주택 12억 이하 → 비과세 / 초과분만 과세
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  ③ 장기보유특별공제
                </th>
                <td className="border-border border-b px-3 py-2.5">과세대상 양도차익 × 공제율(표1·표2)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  ④ 양도소득금액
                </th>
                <td className="border-border border-b px-3 py-2.5">과세대상 양도차익 − 장특공</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  ⑤ 과세표준
                </th>
                <td className="border-border border-b px-3 py-2.5">양도소득금액 − 기본공제 250만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  ⑥ 납부세액
                </th>
                <td className="px-3 py-2.5">산출세액 + 지방소득세(산출세액의 10%)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          필요경비에는 취득세·중개수수료·자본적 지출(증빙)·양도 수수료 등이 포함될 수 있습니다.{" "}
          <Link
            href="/guide/brokerage-fee-income-deduction-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            중개수수료 현금영수증
          </Link>
          은 필요경비 공제에 활용할 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cgto-rates">
        <h2 id="guide-cgto-rates" className="text-foreground text-xl font-semibold tracking-tight">
          세율(기본·단기·중과)
        </h2>
        <p>
          하나의 자산이 여러 세율 요건에 해당하면 <strong>산출세액이 큰 쪽</strong>을 적용합니다(소득세법 §104①).
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              주요 세율 유형
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  세율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비고
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  기본(2년 이상)
                </th>
                <td className="border-border border-b px-3 py-2.5">6% ~ 45% 누진</td>
                <td className="border-border border-b px-3 py-2.5">과세표준 구간별</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  단기(주택)
                </th>
                <td className="border-border border-b px-3 py-2.5">1년 미만 70% / 1~2년 60%</td>
                <td className="border-border border-b px-3 py-2.5">조합원입주권·분양권 포함</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  분양권
                </th>
                <td className="border-border border-b px-3 py-2.5">1년 미만 70% / 1년 이상 60%</td>
                <td className="border-border border-b px-3 py-2.5">
                  장특공·1세1주택 비과세·다주택 중과 미적용(주택 수 산정만)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  조합원입주권
                </th>
                <td className="border-border border-b px-3 py-2.5">기본 누진(단기·중과 비교)</td>
                <td className="border-border border-b px-3 py-2.5">인가 전분 1세1주택·표2, 인가 후분 장특공 없음</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  미등기양도
                </th>
                <td className="border-border border-b px-3 py-2.5">70%</td>
                <td className="border-border border-b px-3 py-2.5">등기 없이 양도</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  다주택 중과
                </th>
                <td className="border-border border-b px-3 py-2.5">기본 + 20%p(2주택) / +30%p(3주택+)</td>
                <td className="border-border border-b px-3 py-2.5">조정대상지역, 2026.5.10~</td>
              </tr>
              <tr>
                <th scope="row" className="px-3 py-2.5 font-medium">
                  비사업용 토지
                </th>
                <td className="px-3 py-2.5">기본 + 10%p 등</td>
                <td className="px-3 py-2.5">표1 장특공(3년~, 최대 30%)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <Link
            href="/guide/presale-right-capital-gains-tax-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            분양권 양도세
          </Link>
          ·{" "}
          <Link
            href="/guide/occupancy-right-capital-gains-tax-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            조합원입주권 양도세
          </Link>
          ·{" "}
          <Link
            href="/guide/capital-gains-surcharge-revival-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            2026년 다주택 중과 재시행
          </Link>
          은 별도 가이드에서 자세히 다룹니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cgto-land">
        <h2 id="guide-cgto-land" className="text-foreground text-xl font-semibold tracking-tight">
          비사업용 토지 양도세
        </h2>
        <p>
          사업용이 아닌 <strong>비사업용 토지</strong>를 양도할 때는 주택과 다른 조합이 적용됩니다. 1세1주택
          비과세·표2 장특공은 없고, 대신 <strong>표1 장기보유특별공제</strong>(3년 이상 보유, 연 2%p 가산, 최대
          30%)와 <strong>기본세율 + 10%p</strong> 중과가 후보에 포함됩니다.
        </p>
        <ol className="text-muted-foreground list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          <li>양도차익 = 양도가 − 취득가 − 필요경비</li>
          <li>
            장특공(표1) = 과세대상 양도차익 × 공제율(예: 24년 보유 → 30%)
          </li>
          <li>과세표준 = 양도차익 − 장특공 − 기본공제 250만</li>
          <li>산출세액 = max(기본 누진, 단기세율, <strong>비사업용 토지 +10%p</strong>)</li>
        </ol>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              예시 — 15억 양도·24년 보유(계산기 동일 조건)
            </caption>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium w-36">
                  양도차익
                </th>
                <td className="border-border border-b px-3 py-2.5">5억 8,500만</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium">
                  표1 장특공
                </th>
                <td className="border-border border-b px-3 py-2.5">30% → 1억 7,550만 공제</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium">
                  적용 세율
                </th>
                <td className="border-border border-b px-3 py-2.5">기본 + 10%p(과세표준 4.07억 구간)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  총 납부액
                </th>
                <td className="px-3 py-2.5">
                  약 <strong>1억 9,532만 원</strong>(양도세+지방소득세, 계산기 참고)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          농지·임야 등 다른 토지 유형, 사업용 토지 전환 여부에 따라 세율이 달라질 수 있습니다.{" "}
          <Link
            href="/guide/capital-gains-tax-calculation-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            2026년 양도세 계산 예시
          </Link>
          의 비사업용 토지 사례도 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cgto-exempt">
        <h2 id="guide-cgto-exempt" className="text-foreground text-xl font-semibold tracking-tight">
          비과세·감면 개요
        </h2>
        <p>국세청 안내상 대표적인 비과세·감면은 다음과 같습니다.</p>
        <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong className="text-foreground">1세대 1주택</strong>: 양도일 1주택·2년 이상 보유·거주요건(조정지역
            취득 시 2년 거주). 실지거래가 12억 초과 고가주택은 제외(초과분만 과세).
          </li>
          <li>
            <strong className="text-foreground">장기임대주택</strong>: 조세특례제한법 제97조의3 등 요건 충족 시
            장특공 50%·70% 특례, 다주택 중과 배제 등(자세한 내용은{" "}
            <Link
              href="/guide/capital-gains-surcharge-revival-2026-guide#guide-cgsr-longterm-rental"
              className="text-primary underline-offset-4 hover:underline"
            >
              다주택 중과 가이드
            </Link>
            ).
          </li>
          <li>
            <strong className="text-foreground">신축·공공사업용 토지·8년 이상 자경농지</strong> 등 별도 감면.
          </li>
        </ul>
        <p>
          <Link
            href="/guide/one-household-one-home-capital-gains-tax-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            1세대 1주택 비과세·장기보유특별공제
          </Link>
          글에서 요건·공제율을 자세히 정리했습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-cgto-filing">
        <h2 id="guide-cgto-filing" className="text-foreground text-xl font-semibold tracking-tight">
          신고·납부·분할납부
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              신고 유형
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  기한
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  예정신고·납부
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  양도일이 속하는 달 말일부터 <strong>2개월 이내</strong>(관할 세무서·홈택스)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  확정신고
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  당해 연도 여러 건 양도 시 <strong>다음 해 5월 1~31일</strong>
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  양도시기
                </th>
                <td className="px-3 py-2.5">원칙: 대금청산일(잔금). 등기가 먼저면 등기접수일</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          예정신고를 하지 않으면 무신고가산세(20%)·납부지연가산세(1일 0.022%)가 붙을 수 있습니다. 납부세액이
          1천만 원을 초과하면 일부를 납부기한 후 2개월 이내 분할납부할 수 있습니다(2천만 원 이하: 1천만 초과분 /
          2천만 초과: 납부세액의 1/2 이하).
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
      >
        <p className="text-foreground font-medium">관련 도구·글</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <Link
              href="/capital-gains-tax-calculator"
              className="text-primary underline-offset-4 hover:underline"
            >
              양도소득세 계산기
            </Link>
          </li>
          <li>
            <Link
              href="/guide/presale-right-capital-gains-tax-guide"
              className="text-primary underline-offset-4 hover:underline"
            >
              분양권 양도소득세
            </Link>
          </li>
          <li>
            <Link
              href="/guide/occupancy-right-capital-gains-tax-guide"
              className="text-primary underline-offset-4 hover:underline"
            >
              조합원입주권 양도소득세
            </Link>
          </li>
          <li>
            <Link
              href="/guide/capital-gains-tax-calculation-2026-guide"
              className="text-primary underline-offset-4 hover:underline"
            >
              2026년 양도세 계산 예시(금액별)
            </Link>
          </li>
          <li>
            <Link href="/acquisition-tax-calculator" className="text-primary underline-offset-4 hover:underline">
              취득세 계산기
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
