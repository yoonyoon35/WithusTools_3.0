import Link from "next/link";

export const holdingVsTransactionTaxGuideMeta = {
  slug: "holding-vs-transaction-tax-guide",
  title: "보유세 vs 거래세, 무슨 차이인가",
  description:
    "2026년 기준 보유세(재산세·종부세)와 거래세(취득세·양도세) 개념·부과 시점·과세표준·국세·지방세 구분, 집 사고·보유·팔 때 세금 흐름과 자주 하는 오해를 표로 정리했습니다.",
  updated: "2026년 7월 8일",
} as const;

export function HoldingVsTransactionTaxGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-hvtt-overview">
        <h2 id="guide-hvtt-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 기준
        </h2>
        <p>
          부동산 세금을 처음 접하면 「보유세」「거래세」「취득세」「양도세」「종부세」가 한꺼번에 나와 헷갈리기
          쉽습니다. 큰 줄기는 두 가지입니다. <strong>보유세</strong>는 집을 <strong>갖고 있는 동안</strong> 매년
          내는 세금이고, <strong>거래세</strong>는 집을 <strong>사거나·팔 때</strong> 거래와 함께 내는 세금입니다.
        </p>
        <p>
          실무에서는 보유세가 재산세·종합부동산세(종부세)로, 거래세가 취득세·양도소득세(양도세)로 불립니다. 이 글은
          개념을 먼저 잡는 입문용 정리이며, 세율·계산·감면은 하단 관련 가이드에서 이어집니다.
        </p>
      </section>

      <nav
        className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm"
        aria-label="목차"
      >
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-hvtt-two-types" className="text-primary underline-offset-4 hover:underline">
              보유세 vs 거래세 한눈에
            </a>
          </li>
          <li>
            <a href="#guide-hvtt-six-taxes" className="text-primary underline-offset-4 hover:underline">
              세금 6종 이름 정리
            </a>
          </li>
          <li>
            <a href="#guide-hvtt-timeline" className="text-primary underline-offset-4 hover:underline">
              살 때·갖고 있을 때·팔 때
            </a>
          </li>
          <li>
            <a href="#guide-hvtt-national-local" className="text-primary underline-offset-4 hover:underline">
              국세 vs 지방세
            </a>
          </li>
          <li>
            <a href="#guide-hvtt-base" className="text-primary underline-offset-4 hover:underline">
              무엇을 기준으로 세금이 매겨지나
            </a>
          </li>
          <li>
            <a href="#guide-hvtt-lifecycle" className="text-primary underline-offset-4 hover:underline">
              한 채의 세금 흐름 예시
            </a>
          </li>
          <li>
            <a href="#guide-hvtt-misconceptions" className="text-primary underline-offset-4 hover:underline">
              자주 하는 오해
            </a>
          </li>
          <li>
            <a href="#guide-hvtt-next" className="text-primary underline-offset-4 hover:underline">
              다음에 볼 가이드
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-4" aria-labelledby="guide-hvtt-two-types">
        <h2 id="guide-hvtt-two-types" className="text-foreground text-xl font-semibold tracking-tight">
          보유세 vs 거래세 한눈에
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              두 가지 큰 분류
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  언제
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  대표 세목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  횟수
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  <strong>보유세</strong>
                </th>
                <td className="border-border border-b px-3 py-2.5">집을 소유한 매년</td>
                <td className="border-border border-b px-3 py-2.5">재산세, 종합부동산세(종부세)</td>
                <td className="border-border border-b px-3 py-2.5">매년</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  <strong>거래세</strong>
                </th>
                <td className="px-3 py-2.5">사거나·팔 때(거래 시)</td>
                <td className="px-3 py-2.5">취득세, 양도소득세(양도세)</td>
                <td className="px-3 py-2.5">거래마다 1회</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          「거래세」는 법률 용어라기보다 일상에서 쓰는 말입니다. 공식 명칭은 <strong>취득세</strong>(지방세)와{" "}
          <strong>양도소득세</strong>(국세)입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-hvtt-six-taxes">
        <h2 id="guide-hvtt-six-taxes" className="text-foreground text-xl font-semibold tracking-tight">
          세금 6종 이름 정리
        </h2>
        <p>
          보유세·거래세를 실제로 고지받을 때는 아래 <strong>6개 세목</strong> 이름으로 나옵니다. 재산세·종부세에
          부가되는 지방교육세·농어촌특별세(농특세)를 합쳐 말하는 경우가 많습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              보유세 4종 + 거래세 2종
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  세목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  분류
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  한 줄 설명
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  재산세
                </th>
                <td className="border-border border-b px-3 py-2.5">보유세</td>
                <td className="border-border border-b px-3 py-2.5">지방자치단체가 부과하는 재산 보유세(주택분)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  지방교육세
                </th>
                <td className="border-border border-b px-3 py-2.5">보유세(부가)</td>
                <td className="border-border border-b px-3 py-2.5">재산세·종부세 등에 따라 함께 부과</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종합부동산세(종부세)
                </th>
                <td className="border-border border-b px-3 py-2.5">보유세</td>
                <td className="border-border border-b px-3 py-2.5">고가·다주택 등에 추가로 부과하는 국세</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  농어촌특별세(농특세)
                </th>
                <td className="border-border border-b px-3 py-2.5">보유세(부가)</td>
                <td className="border-border border-b px-3 py-2.5">종부세 등 일부에 0.2% 등 부가</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득세
                </th>
                <td className="border-border border-b px-3 py-2.5">거래세</td>
                <td className="border-border border-b px-3 py-2.5">집을 살 때(취득할 때) 1회 부과</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  양도소득세(양도세)
                </th>
                <td className="px-3 py-2.5">거래세</td>
                <td className="px-3 py-2.5">집을 팔아 이익이 생기면 부과(손실·비과세면 0원)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          보유세 상세는{" "}
          <Link
            href="/guide/comprehensive-property-tax-overview-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            종부세·재산세 한 번에 정리
          </Link>
          , 거래세는{" "}
          <Link href="/guide/acquisition-tax-rates-2026-guide" className="text-primary underline-offset-4 hover:underline">
            취득세율
          </Link>
          ·{" "}
          <Link href="/guide/capital-gains-tax-overview-guide" className="text-primary underline-offset-4 hover:underline">
            양도소득세 개요
          </Link>
          에서 각각 다룹니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-hvtt-timeline">
        <h2 id="guide-hvtt-timeline" className="text-foreground text-xl font-semibold tracking-tight">
          살 때·갖고 있을 때·팔 때
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              생애주기별 세금
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  시점
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  거래세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  보유세
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  <strong>매수(잔금·등기)</strong>
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>취득세</strong> (+ 지방교육세·농특세)
                </td>
                <td className="border-border border-b px-3 py-2.5">—</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  <strong>보유 중(매년)</strong>
                </th>
                <td className="border-border border-b px-3 py-2.5">—</td>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>재산세</strong>(7월) + <strong>종부세</strong>(12월) 등
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  <strong>매도(잔금·양도)</strong>
                </th>
                <td className="px-3 py-2.5">
                  <strong>양도소득세</strong>(이익 있을 때, 비과세면 신고만)
                </td>
                <td className="px-3 py-2.5">그해 보유분은 별도(6월 1일 기준)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          취득세는 잔금일·등기 완료 시점에, 양도세는 매도 잔금일(양도일) 기준으로 봅니다. 보유세는 매년 6월 1일
          주택 수·공시가격을 반영해 7월·12월에 고지됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-hvtt-national-local">
        <h2 id="guide-hvtt-national-local" className="text-foreground text-xl font-semibold tracking-tight">
          국세 vs 지방세
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              세목별 관할
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  세목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  납부·신고
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득세·재산세
                </th>
                <td className="border-border border-b px-3 py-2.5">지방세</td>
                <td className="border-border border-b px-3 py-2.5">위택스(wetax.go.kr)·관할 구청</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  종부세·양도세
                </th>
                <td className="border-border border-b px-3 py-2.5">국세</td>
                <td className="border-border border-b px-3 py-2.5">홈택스(hometax.go.kr)·관할 세무서</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  지방교육세·농특세
                </th>
                <td className="px-3 py-2.5">부가 세목</td>
                <td className="px-3 py-2.5">본세(취득세·재산세·종부세)와 함께 고지</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-hvtt-base">
        <h2 id="guide-hvtt-base" className="text-foreground text-xl font-semibold tracking-tight">
          무엇을 기준으로 세금이 매겨지나
        </h2>
        <p>같은 아파트라도 세목마다 기준이 다릅니다. 이 차이를 알아야 「왜 금액이 이렇게 나오지?」가 풀립니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              과세표준(대표) 비교
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  세목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  기준 가격
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비고
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득세
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>취득가액</strong>(매매가·신고가액 등)
                </td>
                <td className="border-border border-b px-3 py-2.5">주택 수·조정지역에 따라 세율 달라짐</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  재산세·종부세
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>공시가격</strong>(매년 고시)
                </td>
                <td className="border-border border-b px-3 py-2.5">매매가와 다를 수 있음</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  양도세
                </th>
                <td className="px-3 py-2.5">
                  <strong>양도차익</strong>(양도가 − 취득가 − 필요경비)
                </td>
                <td className="px-3 py-2.5">이익이 없으면 세금 없음</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          예: 공시가격 12억·매매가 8억 아파트를 샀다면 취득세는 <strong>8억(취득가)</strong> 기준, 보유세는{" "}
          <strong>12억(공시가)</strong> 기준입니다. 팔 때는 <strong>판 가격 − 산 가격</strong> 차이로 양도세가
          정해집니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-hvtt-lifecycle">
        <h2 id="guide-hvtt-lifecycle" className="text-foreground text-xl font-semibold tracking-tight">
          한 채의 세금 흐름 예시
        </h2>
        <p className="text-muted-foreground text-sm">
          무주택·1주택, 매매가 6억 취득 → 3년 보유 → 8억 매도 가정(세율·비과세는 단순화).
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              시점별 세금 종류
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  시점
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  세금
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  참고
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2024년 매수
                </th>
                <td className="border-border border-b px-3 py-2.5">취득세 약 660만 원대</td>
                <td className="border-border border-b px-3 py-2.5">거래세 · 1회</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2025·2026년 보유
                </th>
                <td className="border-border border-b px-3 py-2.5">재산세·종부세(공시가·주택 수별)</td>
                <td className="border-border border-b px-3 py-2.5">보유세 · 매년</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  2027년 매도
                </th>
                <td className="px-3 py-2.5">양도세(비과세 요건 충족 시 0원)</td>
                <td className="px-3 py-2.5">거래세 · 1회 · 신고 필요</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          보유 3년 동안 낸 재산세·종부세 합계와, 매도 시 양도세는 <strong>별개</strong>입니다. 1세대 1주택 비과세를
          받아도 보유세는 그동안 낸 대로이고, 양도세 신고는 별도로 해야 합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-hvtt-holding-detail">
        <h2 id="guide-hvtt-holding-detail" className="text-foreground text-xl font-semibold tracking-tight">
          보유세 — 7월과 12월 두 번?
        </h2>
        <p>
          보유세라고 하면 재산세와 종부세를 통틀어 부릅니다. 같은 집인데 고지가 두 번 오면 이중 과세처럼 느껴지지만,
          종부세 산출 시 이미 낸 재산세 일부를 <strong>공제할 재산세</strong>로 빼도록 법이 정해져 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              연간 보유세 고지(요약)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  시기
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  세목
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  7월
                </th>
                <td className="border-border border-b px-3 py-2.5">재산세 + 지방교육세</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  12월
                </th>
                <td className="px-3 py-2.5">종합부동산세 + 농특세(해당 시)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <Link
            href="/guide/property-tax-vs-comprehensive-property-tax-fair-ratio-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            재산세 공정 45% vs 종부세 공정 60%
          </Link>
          가이드에서 이중 고지 이유를 자세히 설명합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-hvtt-transaction-detail">
        <h2 id="guide-hvtt-transaction-detail" className="text-foreground text-xl font-semibold tracking-tight">
          거래세 — 취득세와 양도세는 별개
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>취득세</strong>는 살 때 한 번. 2주택·조정지역이면 8% 중과 등 세율이 크게 올라갑니다.{" "}
            <Link href="/acquisition-tax-calculator" className="text-primary underline-offset-4 hover:underline">
              취득세 계산기
            </Link>
          </li>
          <li>
            <strong>양도세</strong>는 팔 때 이익이 있을 때. 1세대 1주택·2년 보유·거주 등 요건을 맞추면 비과세일 수
            있습니다.{" "}
            <Link href="/capital-gains-tax-calculator" className="text-primary underline-offset-4 hover:underline">
              양도세 계산기
            </Link>
          </li>
          <li>
            취득세를 많이 냈다고 양도세가 줄어들지는 <strong>않습니다</strong>. 세목이 완전히 다릅니다.
          </li>
          <li>
            양도세 계산 시 취득세는 <strong>필요경비</strong>로 차감될 수 있어, 팔 때 세 부담을 줄이는 데 도움이 됩니다.
          </li>
        </ul>
      </section>

      <section className="space-y-3" aria-labelledby="guide-hvtt-misconceptions">
        <h2 id="guide-hvtt-misconceptions" className="text-foreground text-xl font-semibold tracking-tight">
          자주 하는 오해
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong>「보유세 = 종부세」</strong> — 종부세는 보유세 중 하나입니다. 재산세도 보유세입니다.
          </li>
          <li>
            <strong>「거래세 = 취득세」</strong> — 거래세에는 팔 때 내는 양도세도 포함됩니다.
          </li>
          <li>
            <strong>「집값 오르면 보유세만 오른다」</strong> — 공시가격이 오르면 보유세가 오르고, 팔 때는 양도차익으로
            거래세도 커질 수 있습니다.
          </li>
          <li>
            <strong>「1세대 1주택이면 세금 다 면제」</strong> — 양도세 비과세 요건이 있을 뿐, 보유세(재산세·종부세)는
            별도입니다. 취득세도 일반 세율이 적용됩니다.
          </li>
          <li>
            <strong>「종부세 안 나오면 보유세 0원」</strong> — 공시가격·기본공제에 따라 재산세만 나오는 1주택도
            많습니다.
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-hvtt-next">
        <h2 id="guide-hvtt-next" className="text-foreground text-xl font-semibold tracking-tight">
          다음에 볼 가이드
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              궁금한 주제별 링크
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  알고 싶은 것
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  가이드
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  보유세 4종·연간 금액
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <Link
                    href="/guide/comprehensive-property-tax-overview-guide"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    종부세·재산세 정리
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  살 때 취득세 얼마
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <Link
                    href="/guide/first-home-acquisition-tax-amount-guide"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    1주택 취득세 금액
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  팔 때 양도세 계산
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <Link
                    href="/guide/capital-gains-tax-calculation-2026-guide"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    양도세 기본 계산법
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1주택 양도세 0원 조건
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <Link
                    href="/guide/one-household-one-home-capital-gains-tax-guide"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    1세대 1주택 비과세
                  </Link>
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  종부세 공정비율 인상
                </th>
                <td className="px-3 py-2.5">
                  <Link
                    href="/guide/comprehensive-property-tax-fair-ratio-calculation-2026-guide"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    공정시장가액비율 계산
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-hvtt-checklist">
        <h2 id="guide-hvtt-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          집 사기 전·보유 중 확인
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
                  매수 시 취득세(거래세) 예상액
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  연간 보유세(재산세·종부세) 예상
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  공시가격 vs 매매가 차이
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  매도 시 양도세(거래세) 시나리오
                </th>
                <td className="border-border border-b px-3 py-2.5 text-center">□</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 text-left font-medium">
                  7월·12월 납부·양도 시 신고 일정
                </th>
                <td className="px-3 py-2.5 text-center">□</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          ※ 세율·공제·지역 지정은 법령·고시에 따라 변동됩니다. 정확한 세액은 위택스·홈택스·관할 기관에서 확인하세요.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="관련 도구"
      >
        <p className="text-foreground font-medium">계산기</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <Link
              href="/comprehensive-property-tax-calculator"
              className="text-primary underline-offset-4 hover:underline"
            >
              종합부동산세(보유세) 계산기
            </Link>
          </li>
          <li>
            <Link href="/acquisition-tax-calculator" className="text-primary underline-offset-4 hover:underline">
              취득세 계산기
            </Link>
          </li>
          <li>
            <Link href="/capital-gains-tax-calculator" className="text-primary underline-offset-4 hover:underline">
              양도소득세 계산기
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
