import Link from "next/link";

export const inheritanceTaxFilingDeadlineInstallmentGuideMeta = {
  slug: "inheritance-tax-filing-deadline-installment-guide",
  title: "상속세 신고 기한·분납·홈택스 — 6개월 안에 할 일",
  description:
    "2026년 7월 기준 상속세 신고·납부 기한(6·9개월), 신고세액공제 3%, 분납·연부연납, 무신고 가산세, 홈택스 절차, 취득세 기한과의 차이를 표로 정리했습니다.",
  updated: "2026년 7월 7일",
} as const;

export function InheritanceTaxFilingDeadlineInstallmentGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-itfdi-intro">
        <h2 id="guide-itfdi-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 기준
        </h2>
        <p>
          상속이 개시되면(피상속인 사망) 상속인은 <strong>상속세 신고·납부 기한</strong>을 먼저 확인해야 합니다. 세액이
          0원이어도 신고가 필요한 경우가 있고, 기한을 넘기면 <strong>가산세</strong>·<strong>신고세액공제 3% 상실</strong>
          이 따릅니다.{" "}
          <Link href="/inheritance-tax-calculator" className="text-primary underline-offset-4 hover:underline">
            상속세 계산기
          </Link>
          로 예상 세액을 잡은 뒤, 이 글에서는 <strong>언제·어디서·어떻게</strong> 신고하는지 정리합니다.
        </p>
      </section>

      <nav
        className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm"
        aria-label="목차"
      >
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-itfdi-deadline" className="text-primary underline-offset-4 hover:underline">
              신고·납부 기한
            </a>
          </li>
          <li>
            <a href="#guide-itfdi-credit" className="text-primary underline-offset-4 hover:underline">
              신고세액공제 3%
            </a>
          </li>
          <li>
            <a href="#guide-itfdi-installment" className="text-primary underline-offset-4 hover:underline">
              분납·연부연납
            </a>
          </li>
          <li>
            <a href="#guide-itfdi-penalty" className="text-primary underline-offset-4 hover:underline">
              늦으면 가산세
            </a>
          </li>
          <li>
            <a href="#guide-itfdi-hometax" className="text-primary underline-offset-4 hover:underline">
              홈택스·준비 서류
            </a>
          </li>
          <li>
            <a href="#guide-itfdi-vs-acquisition" className="text-primary underline-offset-4 hover:underline">
              취득세 기한과 구분
            </a>
          </li>
          <li>
            <a href="#guide-itfdi-checklist" className="text-primary underline-offset-4 hover:underline">
              기한 전 체크리스트
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-4" aria-labelledby="guide-itfdi-deadline">
        <h2 id="guide-itfdi-deadline" className="text-foreground text-xl font-semibold tracking-tight">
          신고·납부 기한
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              상속세 신고·납부 기한(제68조)
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
                  일반
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>상속개시일</strong>이 속하는 달의 <strong>말일부터 6개월</strong> 이내
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  연장(9개월)
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  상속인·수유자 등이 외국에 거주하거나, 상속재산 대부분이 국외에 있는 경우 등(법령상 사유)
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  기산점
                </th>
                <td className="px-3 py-2.5">사망일이 아니라 「그 달의 말일」부터 카운트</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          예: 3월 15일 사망 → 기산 3월 31일 → 신고·납부 기한 <strong>9월 30일</strong>경.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-itfdi-credit">
        <h2 id="guide-itfdi-credit" className="text-foreground text-xl font-semibold tracking-tight">
          신고세액공제 3%
        </h2>
        <p>
          법정신고기한 내 <strong>자진신고</strong>하면 산출세액(세대생략 할증 반영 후, 다른 세액공제 차감 전)의{" "}
          <strong>3%</strong>를 추가로 공제합니다(제69조). 무신고·기한 후 신고·과소신고에는 적용되지 않습니다.
        </p>
        <p className="font-mono text-sm">
          신고세액공제 = (산출세액 + 할증 − 증여세액공제 등) × 3%
        </p>
        <p className="text-muted-foreground text-sm">
          <Link
            href="/guide/inheritance-tax-apartment-price-scenarios-guide#guide-itaps-1500m"
            className="text-primary underline-offset-4 hover:underline"
          >
            15억 원 예시
          </Link>
          에서 산출세액 7,780만 원 → 공제 약 233만 원.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-itfdi-installment">
        <h2 id="guide-itfdi-installment" className="text-foreground text-xl font-semibold tracking-tight">
          분납·연부연납
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              분납(제70조②) 요약
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  조건
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  분납 가능
                </th>
                <td className="border-border border-b px-3 py-2.5">납부세액이 1,000만 원을 초과할 때</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2천만 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">1,000만 초과분 전액을 2년 등 분납</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2천만 초과
                </th>
                <td className="border-border border-b px-3 py-2.5">납부세액의 50% 이내 범위에서 2·5·10년 분납 신청</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium whitespace-nowrap">
                  연부연납
                </th>
                <td className="px-3 py-2.5">
                  납부곤란 등 요건 충족 시 이자만 내고 세액 연기(별도 신청·심사, 제71조)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-itfdi-penalty">
        <h2 id="guide-itfdi-penalty" className="text-foreground text-xl font-semibold tracking-tight">
          늦으면 가산세
        </h2>
        <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong className="text-foreground">무신고·과소신고</strong>: 신고세액공제 3% 미적용 + 가산세(국세기본법)
          </li>
          <li>
            <strong className="text-foreground">납부지연</strong>: 미납분에 납부지연가산세(일할 계산)
          </li>
          <li>기한 내 신고·납부가 가장 유리합니다.</li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-itfdi-hometax">
        <h2 id="guide-itfdi-hometax" className="text-foreground text-xl font-semibold tracking-tight">
          홈택스·준비 서류
        </h2>
        <p>국세청 홈택스 「상속세 신고」·「상속세 자동계산」으로 신고서 작성·전송이 가능합니다.</p>
        <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>피상속인·상속인 관계증명, 사망진단서(또는 제적등본)</li>
          <li>상속재산 목록·시가(부동산 감정평가서, 금융잔고증명, 보험금 등)</li>
          <li>공과금·채무·장례비용 증빙, 사전증여·증여세 신고 내역</li>
          <li>동거주택공제·가업상속공제 등 해당 시 추가 서류</li>
        </ul>
        <p className="text-muted-foreground text-sm">
          복수 상속인·대규모 재산은 세무사·홈택스 상담(126) 활용을 권장합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-itfdi-vs-acquisition">
        <h2 id="guide-itfdi-vs-acquisition" className="text-foreground text-xl font-semibold tracking-tight">
          취득세 기한과 구분
        </h2>
        <p>
          상속세(국세)와 <strong>상속 취득세(지방세)</strong>는 세목·관할·신고 창구가 다릅니다. 둘 다 6개월 안에
          처리하는 경우가 많지만, <strong>별도 신고·납부</strong>입니다.
        </p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5 text-sm">
          <li>
            <Link
              href="/guide/inherited-housing-acquisition-tax-2026-guide"
              className="text-primary underline-offset-4 hover:underline"
            >
              상속 주택 취득세
            </Link>
          </li>
          <li>
            <Link
              href="/guide/acquisition-tax-deadline-and-penalty-guide"
              className="text-primary underline-offset-4 hover:underline"
            >
              취득세 납부 기한과 가산세
            </Link>
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-itfdi-checklist">
        <h2 id="guide-itfdi-checklist" className="text-foreground text-xl font-semibold tracking-tight">
          기한 전 체크리스트
        </h2>
        <ol className="text-muted-foreground list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          <li>상속개시일 확인 → 6개월(또는 9개월) 기한 계산</li>
          <li>총상속재산 시가·채무·사전증여 정리</li>
          <li>
            <Link href="/inheritance-tax-calculator" className="text-primary underline-offset-4 hover:underline">
              상속세 계산기
            </Link>
            · 홈택스 자동계산 대조
          </li>
          <li>분납·연부연납 필요 여부 판단</li>
          <li>기한 내 신고 → 신고세액공제 3% 확보</li>
          <li>취득세·등기 등 지방세·등기 절차 별도 진행</li>
        </ol>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
      >
        <p className="text-foreground font-medium">관련 도구·글</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <Link href="/inheritance-tax-calculator" className="text-primary underline-offset-4 hover:underline">
              상속세 계산기
            </Link>
          </li>
          <li>
            <Link href="/guide/inheritance-tax-overview-guide" className="text-primary underline-offset-4 hover:underline">
              상속세 개요
            </Link>
          </li>
          <li>
            <Link
              href="/guide/inheritance-tax-apartment-price-scenarios-guide"
              className="text-primary underline-offset-4 hover:underline"
            >
              7·10·15억 상속세 예시
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
