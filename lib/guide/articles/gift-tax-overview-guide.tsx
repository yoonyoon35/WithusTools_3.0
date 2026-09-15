import Link from "next/link";

export const giftTaxOverviewGuideMeta = {
  slug: "gift-tax-overview-guide",
  title: "증여세란? 부동산·주택 증여 과세표준·공제·누진세율·취득세·신고 한 번에",
  description:
    "2026년 9월 기준 상속세 및 증여세법·국세청 안내를 바탕으로 증여세 과세가액·관계별 10년 공제·누진세율·세대생략할증·신고·분납을 정리했습니다. 주택 증여 시 취득세·국민주택채권·1·3·6억 원 계산 예시와 수증자의 생애최초·청약 영향까지 표로 비교했습니다.",
  updated: "2026년 9월 15일",
} as const;

export function GiftTaxOverviewGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-gto-overview">
        <h2 id="guide-gto-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 9월 기준
        </h2>
        <p>
          부모가 자녀에게 주택·현금·지분을 <strong>무상으로 넘기면</strong>{" "}
          <strong>증여세(국세)</strong>가 검토 대상이 됩니다. 부동산의 경우{" "}
          <strong>취득세(지방세)</strong>·국민주택채권·등기비용이 <strong>수증자</strong>에게 추가로 붙을 수
          있습니다. 취득세·양도세·상속세와 <strong>별도</strong>이며, 「증여」와 「매매」를 혼동하면 금액이 크게
          달라집니다.
        </p>
        <p>
          이 글은 국세청 「증여세 개요」「세액계산흐름도」·상속세 및 증여세법을 바탕으로 증여세의 뼈대를 정리합니다.
          주택 증여의 <strong>취득세</strong>는{" "}
          <Link href="/acquisition-tax-calculator" className="text-primary underline-offset-4 hover:underline">
            취득세 계산기
          </Link>
          (유형 「증여」)로, 상속 시 사전증여 영향은{" "}
          <Link href="/inheritance-tax-calculator" className="text-primary underline-offset-4 hover:underline">
            상속세 계산기
          </Link>
          로 각각 시뮬레이션할 수 있습니다.
        </p>
      </section>

      <nav
        className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm"
        aria-label="목차"
      >
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-gto-what" className="text-primary underline-offset-4 hover:underline">
              증여세란 · 다른 세금과 구분
            </a>
          </li>
          <li>
            <a href="#guide-gto-flow" className="text-primary underline-offset-4 hover:underline">
              세액 계산 흐름
            </a>
          </li>
          <li>
            <a href="#guide-gto-valuation" className="text-primary underline-offset-4 hover:underline">
              증여재산 평가(주택·현금)
            </a>
          </li>
          <li>
            <a href="#guide-gto-deduction" className="text-primary underline-offset-4 hover:underline">
              관계별 10년 공제
            </a>
          </li>
          <li>
            <a href="#guide-gto-rates" className="text-primary underline-offset-4 hover:underline">
              누진세율
            </a>
          </li>
          <li>
            <a href="#guide-gto-surcharge" className="text-primary underline-offset-4 hover:underline">
              세대생략할증
            </a>
          </li>
          <li>
            <a href="#guide-gto-housing-acq" className="text-primary underline-offset-4 hover:underline">
              주택 증여 시 취득세·채권
            </a>
          </li>
          <li>
            <a href="#guide-gto-after-gift" className="text-primary underline-offset-4 hover:underline">
              증여 후 수증자 — 매수·청약·대출
            </a>
          </li>
          <li>
            <a href="#guide-gto-inheritance" className="text-primary underline-offset-4 hover:underline">
              이후 상속과의 관계(사전증여)
            </a>
          </li>
          <li>
            <a href="#guide-gto-filing" className="text-primary underline-offset-4 hover:underline">
              신고·납부·분납·가산세
            </a>
          </li>
          <li>
            <a href="#guide-gto-scenarios" className="text-primary underline-offset-4 hover:underline">
              계산 예시(1·3·6억)
            </a>
          </li>
          <li>
            <a href="#guide-gto-special" className="text-primary underline-offset-4 hover:underline">
              증여 추정·부담부증여·공유 지분
            </a>
          </li>
          <li>
            <a href="#guide-gto-misconceptions" className="text-primary underline-offset-4 hover:underline">
              자주 헷갈리는 점
            </a>
          </li>
          <li>
            <a href="#guide-gto-checklist" className="text-primary underline-offset-4 hover:underline">
              증여 전 체크리스트
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-4" aria-labelledby="guide-gto-what">
        <h2 id="guide-gto-what" className="text-foreground text-xl font-semibold tracking-tight">
          증여세란 · 다른 세금과 구분
        </h2>
        <p>
          증여세는 <strong>개인이 재산을 무상으로 이전</strong>할 때, 그 재산가액에서 공제를 차감한 뒤
          과세표준에 누진세율을 적용해 산출하는 <strong>국세</strong>입니다.{" "}
          <strong>증여자(돈·집을 주는 쪽)</strong>가 신고·납부의 주체이며, 수증자는 별도로{" "}
          <strong>취득세</strong> 등을 낼 수 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              증여와 함께 확인하는 세금
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  세금
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  납부 주체
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  시점·비고
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  증여세
                </th>
                <td className="border-border border-b px-3 py-2.5">증여자</td>
                <td className="border-border border-b px-3 py-2.5">증여일 기준 · 국세 · 3개월 이내 신고</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  취득세
                </th>
                <td className="border-border border-b px-3 py-2.5">수증자</td>
                <td className="border-border border-b px-3 py-2.5">
                  부동산 등기 시 · 지방세 ·{" "}
                  <Link
                    href="/guide/second-home-acquisition-tax-surcharge-2026-guide#guide-s2-gift"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    증여 3.5%·12%
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  양도소득세
                </th>
                <td className="border-border border-b px-3 py-2.5">매도자</td>
                <td className="border-border border-b px-3 py-2.5">
                  유상 매매 시 · 직계존비속 간 저가·고가 매매는{" "}
                  <strong>증여 추정</strong> 가능
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  상속세(사전증여)
                </th>
                <td className="border-border border-b px-3 py-2.5">상속인</td>
                <td className="border-border border-b px-3 py-2.5">
                  사망 후 · 증여 재산가액이 상속 과세가액에 <strong>가산</strong>될 수 있음
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  재산세·종부세
                </th>
                <td className="px-3 py-2.5">등기상 소유자</td>
                <td className="px-3 py-2.5">명의 이전 후 매년 · 보유세</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          상속세 제도 전반은{" "}
          <Link href="/guide/inheritance-tax-overview-guide" className="text-primary underline-offset-4 hover:underline">
            상속세 개요
          </Link>
          , 상속 주택 취득세는{" "}
          <Link
            href="/guide/inherited-housing-acquisition-tax-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            상속 주택 취득세
          </Link>
          가이드를 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gto-flow">
        <h2 id="guide-gto-flow" className="text-foreground text-xl font-semibold tracking-tight">
          세액 계산 흐름
        </h2>
        <p>국세청 「세액계산흐름도」 기준으로, 증여 1건을 처리할 때 흐름은 아래와 같습니다.</p>
        <ol className="text-muted-foreground list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong className="text-foreground">증여재산가액</strong> — 증여일 현재 시가(부동산·현금·주식 등)
          </li>
          <li>
            <strong className="text-foreground">증여재산공제</strong> — 수증자와의 관계별{" "}
            <strong>10년 누적</strong> 한도에서 차감
          </li>
          <li>
            <strong className="text-foreground">과세표준</strong> = ① − ② (0원 이하이면 0)
          </li>
          <li>
            <strong className="text-foreground">산출세액</strong> — 과세표준에 누진세율 적용
          </li>
          <li>
            <strong className="text-foreground">세대생략할증</strong> — 해당 시 산출세액 × 할증율
          </li>
          <li>
            <strong className="text-foreground">신고세액공제</strong> — 법정기한 내 자진신고 시 산출세액의 3%
          </li>
          <li>
            <strong className="text-foreground">납부세액</strong> = ④ + ⑤ − ⑥
          </li>
        </ol>
        <p className="text-muted-foreground text-sm">
          ※ 증여세는 <strong>건당·증여자별</strong>로 신고합니다. 같은 해에 부모 각각 증여하면{" "}
          <strong>공제·과세표준이 증여자마다 따로</strong> 계산됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gto-valuation">
        <h2 id="guide-gto-valuation" className="text-foreground text-xl font-semibold tracking-tight">
          증여재산 평가(주택·현금)
        </h2>
        <p>
          증여재산가액은 원칙적으로 <strong>증여일 현재의 시가</strong>입니다. 유형별로 실무에서 많이 쓰는
          기준은 아래와 같습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              증여재산 유형별 평가(요약)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  유형
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  평가
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비고
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  현금·예금
                </th>
                <td className="border-border border-b px-3 py-2.5">증여 금액 그대로</td>
                <td className="border-border border-b px-3 py-2.5">이자·수수료는 별도</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주택·토지
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  감정평가액·유사매매·공시가격 등 시가
                </td>
                <td className="border-border border-b px-3 py-2.5">
                  취득세 과세표준(시가표준액)과 <strong>다를 수 있음</strong>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  공유 지분
                </th>
                <td className="border-border border-b px-3 py-2.5">전체 주택 시가 × 지분율</td>
                <td className="border-border border-b px-3 py-2.5">
                  50% 지분 증여 시 절반 가액만 과세
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  분양권·입주권
                </th>
                <td className="px-3 py-2.5">권리 가치(시가)</td>
                <td className="px-3 py-2.5">취득세·주택 수 산정과 연동 — 별도 확인</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gto-deduction">
        <h2 id="guide-gto-deduction" className="text-foreground text-xl font-semibold tracking-tight">
          관계별 10년 공제
        </h2>
        <p>
          <strong>증여재산공제</strong>는 수증자와의 관계에 따라 <strong>10년간 누적</strong> 한도가 정해져
          있습니다. 같은 증여자가 10년 안에 여러 번 증여하면 <strong>남은 한도만</strong> 공제됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              관계별 증여재산공제(10년 누적, 증여자 1인 기준)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  수증자
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  공제 한도
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  비고
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  배우자
                </th>
                <td className="border-border border-b px-3 py-2.5">6억 원</td>
                <td className="border-border border-b px-3 py-2.5">10년 누적 · 혼인 관계 증여</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  직계존비속(자녀·부모 등)
                </th>
                <td className="border-border border-b px-3 py-2.5">5,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">증여자 1인당 · 부모 각각 5천만</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  직계존속의 배우자(시부모 등)
                </th>
                <td className="border-border border-b px-3 py-2.5">5,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">요건 충족 시</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  기타 친족(형제·사촌 등)
                </th>
                <td className="border-border border-b px-3 py-2.5">1,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">10년 누적</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  그 외(친족 아님)
                </th>
                <td className="px-3 py-2.5">0원</td>
                <td className="px-3 py-2.5">전액 과세표준</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          예: 아버지가 자녀에게 10년간 처음 증여하고 공제 잔여 5,000만이면, 증여가액 1억 중{" "}
          <strong>5,000만만 과세표준</strong>에 포함됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gto-rates">
        <h2 id="guide-gto-rates" className="text-foreground text-xl font-semibold tracking-tight">
          누진세율
        </h2>
        <p>
          증여세 누진세율은 상속세와 <strong>동일한 구간</strong>을 적용합니다(상속세 및 증여세법 제57조).
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              증여세·상속세 공통 누진세율
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
                <td className="border-border border-b px-3 py-2.5">1억 원 이하</td>
                <td className="border-border border-b px-3 py-2.5">10%</td>
                <td className="border-border border-b px-3 py-2.5">—</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">1억 초과 ~ 5억 이하</td>
                <td className="border-border border-b px-3 py-2.5">20%</td>
                <td className="border-border border-b px-3 py-2.5">1,000만 원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">5억 초과 ~ 10억 이하</td>
                <td className="border-border border-b px-3 py-2.5">30%</td>
                <td className="border-border border-b px-3 py-2.5">6,000만 원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">10억 초과 ~ 30억 이하</td>
                <td className="border-border border-b px-3 py-2.5">40%</td>
                <td className="border-border border-b px-3 py-2.5">1억 6,000만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="px-3 py-2.5">30억 초과</td>
                <td className="px-3 py-2.5">50%</td>
                <td className="px-3 py-2.5">4억 6,000만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          산출세액 = 과세표준 × 세율 − 누진공제. 아래 예시는 구간별 합산 방식(국세청 흐름도와 동일 결과)으로
          풀었습니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-gto-surcharge">
        <h2 id="guide-gto-surcharge" className="text-foreground text-xl font-semibold tracking-tight">
          세대생략할증
        </h2>
        <p>
          <strong>세대를 건너뛴 증여</strong>(예: 조부모→손자녀, 부모 생존 중 형제 자녀에게 증여 등)에는 산출세액에
          할증이 붙을 수 있습니다.
        </p>
        <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong className="text-foreground">일반 세대생략</strong>: 산출세액 × 30%
          </li>
          <li>
            <strong className="text-foreground">미성년자·20억 초과</strong>: 산출세액 × 40% (해당 요건 충족 시)
          </li>
        </ul>
        <p className="text-muted-foreground text-sm">
          부모→자녀 직계 증여는 통상 세대생략할증 <strong>대상이 아닙니다</strong>. 조부모→손자녀 등은 별도
          검토가 필요합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gto-housing-acq">
        <h2 id="guide-gto-housing-acq" className="text-foreground text-xl font-semibold tracking-tight">
          주택 증여 시 취득세·채권
        </h2>
        <p>
          주택·토지를 증여받아 <strong>등기</strong>하면 수증자가 <strong>취득세</strong>를 납부합니다. 증여세와{" "}
          <strong>별도</strong>이며, 납부 주체도 다릅니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              주택 증여 취득세율(요약)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득세율(합계 참고)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  일반 증여
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  3.5% + 지방교육세 등 → 전용 85㎡ 초과 시{" "}
                  <strong>약 4.05%</strong>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  조정지역·시가표준액 3억 이상
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  12% 중과 → 합계 <strong>약 13.4%</strong>
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  1세대 1주택자 → 배우자·직계비속 증여
                </th>
                <td className="px-3 py-2.5">
                  <strong>3.5% 예외</strong>(12% 면제) — 증여 직전 1세1주택 요건 확인
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          등기 시 <strong>국민주택채권</strong> 매입 의무가 있으며, 시가표준액 기준 요율·할인 손실이 실부담으로
          잡힙니다(
          <Link
            href="/guide/national-housing-bond-purchase-criteria-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            국민주택채권 매입 기준
          </Link>
          ). 취득세 납부 기한은 취득일(등기)부터 <strong>60일</strong>(
          <Link
            href="/guide/acquisition-tax-deadline-and-penalty-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            취득세 납부 기한
          </Link>
          ).
        </p>
        <p className="text-muted-foreground text-sm">
          지방교육세·농특세 합계표는{" "}
          <Link
            href="/guide/local-education-rural-special-tax-acquisition-2026-guide#guide-ler-inherit"
            className="text-primary underline-offset-4 hover:underline"
          >
            상속·증여 취득 시 부가세
          </Link>
          를 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gto-after-gift">
        <h2 id="guide-gto-after-gift" className="text-foreground text-xl font-semibold tracking-tight">
          증여 후 수증자 — 매수·청약·대출
        </h2>
        <p>
          미성년·성인을 막론하고 <strong>등기상 주택을 보유</strong>하면, 이후 무주택 혜택에 영향을 줄 수
          있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              증여 수증 후 주택 구입 시 영향(요약)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  혜택
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  증여 집 유지 중
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  처분 후
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  생애최초 취득세 감면
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>불가</strong> — 무상 취득 제외
                </td>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>과거 소유 이력</strong> — 자동 복구 어려움
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  청약(무주택)
                </th>
                <td className="border-border border-b px-3 py-2.5">등기상 주택 있으면 탈락</td>
                <td className="border-border border-b px-3 py-2.5">무주택 재조회 가능 · 특공·생애최초는 이력 별도</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  추가 주택 매수 취득세
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>2주택</strong> — 조정지역 중과(8% 등) 검토
                </td>
                <td className="border-border border-b px-3 py-2.5">1주택 일반세율(1~3%) 가능</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  생애최초 대출(디딤돌 등)
                </th>
                <td className="px-3 py-2.5" colSpan={2}>
                  본인·배우자 <strong>주택 소유 이력</strong> 없어야 — 증여 이력 있으면 불리
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          상세:{" "}
          <Link
            href="/guide/first-home-acquisition-tax-relief-guide#guide-fhatr-ineligible"
            className="text-primary underline-offset-4 hover:underline"
          >
            생애최초 감면 불가
          </Link>
          ,{" "}
          <Link
            href="/guide/first-time-homebuyer-benefits-2026#guide-first-home-gift-share"
            className="text-primary underline-offset-4 hover:underline"
          >
            부모 증여 공유 지분
          </Link>
          ,{" "}
          <Link
            href="/guide/private-housing-subscription-eligibility-2026-guide#guide-phse-gift-share"
            className="text-primary underline-offset-4 hover:underline"
          >
            청약·증여 지분
          </Link>
          .
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-gto-inheritance">
        <h2 id="guide-gto-inheritance" className="text-foreground text-xl font-semibold tracking-tight">
          이후 상속과의 관계(사전증여)
        </h2>
        <p>
          증여자가 사망하면, 일정 기간 내 증여분이 상속세 <strong>과세가액에 가산</strong>될 수 있습니다. 이미 낸
          증여세는 <strong>증여세액공제</strong>로 상속세에서 일부 공제됩니다.
        </p>
        <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong className="text-foreground">상속인에게 증여</strong>: 상속개시 전 <strong>10년</strong> 이내
            증여재산가액 가산
          </li>
          <li>
            <strong className="text-foreground">상속인이 아닌 자에게 증여</strong>: <strong>5년</strong> 이내 가산
          </li>
          <li>
            <strong className="text-foreground">증여세액공제</strong>: 과세가액 5억 초과·사전증여분에 대해 납부(예정)
            증여세를 상속세 산출세액에서 안분 공제
          </li>
        </ul>
        <p className="text-muted-foreground text-sm">
          상속세 흐름은{" "}
          <Link href="/guide/inheritance-tax-overview-guide#guide-ito-taxable" className="text-primary underline-offset-4 hover:underline">
            상속 과세가액·사전증여
          </Link>
          , 신고 기한은{" "}
          <Link href="/guide/inheritance-tax-filing-deadline-installment-guide" className="text-primary underline-offset-4 hover:underline">
            상속세 신고·납부 기한
          </Link>
          을 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gto-filing">
        <h2 id="guide-gto-filing" className="text-foreground text-xl font-semibold tracking-tight">
          신고·납부·분납·가산세
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              증여세 신고·납부(요약)
            </caption>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium w-36">
                  신고 기한
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  증여일이 속하는 <strong>달의 말일부터 3개월</strong> 이내(홈택스·관할 세무서)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium">
                  신고세액공제
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  기한 내 자진신고 시 <strong>산출세액의 3%</strong> 추가 공제
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium">
                  분납
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  납부세액 <strong>1,000만 원 초과</strong> 시 2년 분납 등(요건·이자 별도)
                </td>
              </tr>
              <tr>
                <th scope="row" className="bg-muted/30 px-3 py-2.5 font-medium">
                  가산세
                </th>
                <td className="px-3 py-2.5">
                  무신고·과소신고·납부지연 시 가산세 · 신고세액공제 <strong>상실</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gto-scenarios">
        <h2 id="guide-gto-scenarios" className="text-foreground text-xl font-semibold tracking-tight">
          계산 예시(1·3·6억)
        </h2>
        <p>
          아래는 검색·상담 수요가 많은 <strong>1억·3억·6억 원</strong> 구간입니다. 공통 가정:{" "}
          <strong>부모 1인 → 자녀 1인</strong>, 해당 부모의 <strong>10년 내 첫 증여</strong>(공제 5,000만 전액
          사용), <strong>직계 증여</strong>(세대생략할증 없음), 주택 예시는{" "}
          <strong>1세1주택자→직계비속 증여</strong>로 취득세 <strong>3.5%</strong>(85㎡ 초과 합계 4.05%) 적용.
          신고세액공제 3%는 <strong>반영 전</strong> 산출세액입니다.
        </p>

        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              1·3·6억 증여 — 증여세·취득세 한눈에(공통 가정)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  증여가액
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  과세표준
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  증여세(부모)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득세 등(자녀·주택)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  합계(세금만)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">5,000만</td>
                <td className="border-border border-b px-3 py-2.5">500만</td>
                <td className="border-border border-b px-3 py-2.5">405만</td>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>905만</strong>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">2억 5,000만</td>
                <td className="border-border border-b px-3 py-2.5">4,000만</td>
                <td className="border-border border-b px-3 py-2.5">1,215만</td>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>5,215만</strong>
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  6억 원
                </th>
                <td className="px-3 py-2.5">5억 5,000만</td>
                <td className="px-3 py-2.5">1억 500만</td>
                <td className="px-3 py-2.5">2,430만</td>
                <td className="px-3 py-2.5">
                  <strong>1억 2,930만</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 id="guide-gto-scenario-100m" className="text-foreground text-base font-semibold">
          ① 1억 원 — 현금·소액 주택 증여
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          「1억 증여세」는 가장 많이 검색되는 구간입니다. 공제 5,000만 적용 후 과세표준 5,000만 →{" "}
          <strong>10% = 500만 원</strong>. 기한 내 신고 시 3% 공제로 <strong>약 485만 원</strong>. 주택 등기 시
          취득세 4.05% = <strong>405만 원</strong>. 현금만 증여하면 취득세 없음.
        </p>

        <h3 id="guide-gto-scenario-300m" className="text-foreground text-base font-semibold">
          ② 3억 원 — 수도권 실수요 아파트 증여
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          과세표준 2억 5,000만 → 1억×10%(1,000만) + 1.5억×20%(3,000만) = <strong>4,000만 원</strong>. 취득세 등
          4.05% = <strong>1,215만 원</strong>. 합계 <strong>5,215만 원</strong>. 부모·자녀가{" "}
          <strong>각 50% 지분</strong>으로 나눠 받으면 증여자 2명 → 증여세가 <strong>대폭 줄 수 있음</strong>(각
          1.5억·공제 5천·과세 1억 → 각 1,000만, 합 2,000만 수준).
        </p>

        <h3 id="guide-gto-scenario-600m" className="text-foreground text-base font-semibold">
          ③ 6억 원 — 고가 주택·세대 분리 검토 구간
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          과세표준 5억 5,000만 → 1억×10% + 4억×20% + 5천×30% = <strong>1억 500만 원</strong>. 취득세 등{" "}
          <strong>2,430만 원</strong>. 12% 중과 해당 시 취득세만 <strong>약 8,040만</strong>으로 급증. 증여 후
          자녀가 별도 주택을 매수하면 <strong>2주택 중과</strong>(
          <Link
            href="/guide/second-home-acquisition-tax-surcharge-2026-guide#guide-s2-rates"
            className="text-primary underline-offset-4 hover:underline"
          >
            2주택 취득세
          </Link>
          ) 검토.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 국민주택채권·등기비용·재산세는 별도. 시가표준액·감정가·12% 중과 여부에 따라 달라집니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-gto-special">
        <h2 id="guide-gto-special" className="text-foreground text-xl font-semibold tracking-tight">
          증여 추정·부담부증여·공유 지분
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              특수 유형
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  유형
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  세금
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  직계존비속 간 저가·고가 매매
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>증여 추정</strong> → 양도세 대신 증여세(
                  <Link
                    href="/guide/capital-gains-tax-overview-guide#guide-cgto-sibling-share"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    증여 추정·지분 양도
                  </Link>
                  )
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  부담부증여(대출 승계)
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  채무 인수분 포함 평가 · 증여세·취득세 모두 검토
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  공유 지분 증여
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  지분 가액만 과세 · 이후 형제·자매에게 넘길 때 별도(
                  <Link
                    href="/guide/inherited-housing-acquisition-tax-2026-guide#guide-inh-gift-share-transfer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    공유 지분 증여·양도
                  </Link>
                  )
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  미성년자 증여
                </th>
                <td className="px-3 py-2.5">
                  세율 동일 · 법정대리·등기 절차 · 20억 초과 시 할증 검토
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-gto-misconceptions">
        <h2 id="guide-gto-misconceptions" className="text-foreground text-xl font-semibold tracking-tight">
          자주 헷갈리는 점
        </h2>
        <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong className="text-foreground">「5,000만 이하면 증여세 없다」</strong> — 공제 한도이지, 5,000만
            이하 증여가 전부 면제는 아닙니다. 1억 증여도 과세표준 5,000만에 세금이 붙습니다.
          </li>
          <li>
            <strong className="text-foreground">「증여세만 내면 된다」</strong> — 주택은{" "}
            <strong>취득세·채권·등기비</strong>가 추가됩니다.
          </li>
          <li>
            <strong className="text-foreground">「미성년이라 세금이 다르다」</strong> — 누진세율·공제는 성인과
            동일. 절차·할증만 별도 검토.
          </li>
          <li>
            <strong className="text-foreground">「증여받고 팔면 생애최초 된다」</strong> —{" "}
            <strong>과거 소유 이력</strong>이 남아 생애최초 복구는 어렵습니다.
          </li>
          <li>
            <strong className="text-foreground">「부모 1세1주택이면 취득세 무조건 3.5%」</strong> — 증여{" "}
            <strong>직전</strong> 1세1주택·직계비속 등 <strong>요건</strong>을 충족해야 12% 중과를 피합니다.
          </li>
        </ul>
      </section>

      <section className="space-y-3" aria-labelledby="guide-gto-checklist">
        <h2 id="guide-gto-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          증여 전 체크리스트
        </h2>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5 text-sm">
          <li>10년 내 동일 증여자→수증자 증여 이력·잔여 공제 확인</li>
          <li>증여재산 시가(감정·유사매매) vs 취득세 시가표준액 분리 산출</li>
          <li>부모 1세1주택 여부 → 취득세 3.5% vs 12%</li>
          <li>수증자 이후 매수·청약·대출 계획(2주택·생애최초·무주택)</li>
          <li>사망 후 상속세 사전증여 가산·증여세액공제</li>
          <li>증여일 기준 3개월 내 증여세 · 등기 60일 내 취득세</li>
          <li>대출·근저당·임차인 있으면 등기·승계 동의</li>
        </ul>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="계산기·관련 가이드"
      >
        <p className="text-foreground font-medium">계산기·관련 가이드</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <Link href="/acquisition-tax-calculator" className="text-primary underline-offset-4 hover:underline">
              취득세 계산기
            </Link>
            — 유형 「증여」 선택
          </li>
          <li>
            <Link href="/inheritance-tax-calculator" className="text-primary underline-offset-4 hover:underline">
              상속세 계산기
            </Link>
            — 사전증여 가산·증여세액공제
          </li>
          <li>
            <Link href="/guide/second-home-acquisition-tax-surcharge-2026-guide#guide-s2-gift" className="text-primary underline-offset-4 hover:underline">
              증여 취득세 중과
            </Link>
          </li>
          <li>
            <Link href="/guide/inheritance-tax-overview-guide" className="text-primary underline-offset-4 hover:underline">
              상속세 개요
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
