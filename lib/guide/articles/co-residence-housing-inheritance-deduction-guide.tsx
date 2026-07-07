import Link from "next/link";

export const coResidenceHousingInheritanceDeductionGuideMeta = {
  slug: "co-residence-housing-inheritance-deduction-guide",
  title: "동거주택 상속공제 6억 — 요건·한도·1세대1주택",
  description:
    "2026년 7월 기준 상속세법 제23조의2 동거주택 상속공제(100%·한도 6억), 10년 동거·무주택·1주택 요건, 배우자·일괄공제와의 관계, 안 되는 경우를 표로 정리했습니다.",
  updated: "2026년 7월 7일",
} as const;

export function CoResidenceHousingInheritanceDeductionGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-crhid-intro">
        <h2 id="guide-crhid-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 기준
        </h2>
        <p>
          부모와 <strong>오래 같이 살던 집</strong>을 상속받는 경우, 요건을 충족하면{" "}
          <strong>동거주택 상속공제</strong>(제23조의2)로 상속주택가액의 <strong>100%</strong>를 상속공제할 수
          있습니다. 한도는 <strong>6억 원</strong>입니다.{" "}
          <Link href="/inheritance-tax-calculator" className="text-primary underline-offset-4 hover:underline">
            상속세 계산기
          </Link>
          의 「동거주택 상속공제」란에 주택가액을 입력해 반영할 수 있습니다.
        </p>
      </section>

      <nav
        className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm"
        aria-label="목차"
      >
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-crhid-what" className="text-primary underline-offset-4 hover:underline">
              동거주택공제란
            </a>
          </li>
          <li>
            <a href="#guide-crhid-requirements" className="text-primary underline-offset-4 hover:underline">
              요건 체크
            </a>
          </li>
          <li>
            <a href="#guide-crhid-amount" className="text-primary underline-offset-4 hover:underline">
              공제액·한도 6억
            </a>
          </li>
          <li>
            <a href="#guide-crhid-with-other" className="text-primary underline-offset-4 hover:underline">
              일괄·배우자공제와 함께
            </a>
          </li>
          <li>
            <a href="#guide-crhid-fail" className="text-primary underline-offset-4 hover:underline">
              안 되는 경우
            </a>
          </li>
          <li>
            <a href="#guide-crhid-example" className="text-primary underline-offset-4 hover:underline">
              계산 예시
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-4" aria-labelledby="guide-crhid-what">
        <h2 id="guide-crhid-what" className="text-foreground text-xl font-semibold tracking-tight">
          동거주택공제란
        </h2>
        <p>
          피상속인과 <strong>동일 주택에 계속 거주</strong>하던 상속인이, 그 주택을 상속받을 때 적용하는{" "}
          <strong>상속공제</strong>입니다. 취득세 감면이 아니라 <strong>상속세 과세가액</strong>에서 빼는
          공제이며, 감정평가 수수료와는 별개입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-crhid-requirements">
        <h2 id="guide-crhid-requirements" className="text-foreground text-xl font-semibold tracking-tight">
          요건 체크
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              동거주택 상속공제 주요 요건(국세청·법령 요약)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  요건
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium whitespace-nowrap">
                  동거 기간
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  상속개시일 현재 피상속인과 <strong>10년 이상</strong> 계속 동거(일부 예외·집행기준 참고)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주택 수
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  상속인 기준 <strong>1세대 1주택</strong>(다른 주택·분양권 등 없음)
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  무주택
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  상속개시일 현재 상속인(배우자 포함 여부는 집행기준) <strong>무주택</strong> 요건
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  대상 재산
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  상속받는 <strong>주택</strong>(부수토지·담보채무 반영 후 가액)
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  증빙
                </th>
                <td className="px-3 py-2.5">주민등록·임대차·가족관계 등 동거·무주택 입증 서류</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          세부 요건·예외는 국세청 집행기준·유권해석이 복잡합니다. 신고 전 관할 세무서·세무사 확인을 권장합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-crhid-amount">
        <h2 id="guide-crhid-amount" className="text-foreground text-xl font-semibold tracking-tight">
          공제액·한도 6억
        </h2>
        <p className="font-mono text-sm">
          동거주택공제 = min(상속주택가액, 6억 원)
        </p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5 text-sm leading-relaxed">
          <li>주택 시가 4억 → 공제 4억</li>
          <li>주택 시가 8억 → 공제 6억(한도)</li>
          <li>주택 담보 대출이 있으면 채무 반영 후 가액 기준</li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-crhid-with-other">
        <h2 id="guide-crhid-with-other" className="text-foreground text-xl font-semibold tracking-tight">
          일괄·배우자공제와 함께
        </h2>
        <p>
          동거주택공제는 <strong>일괄공제(5억)·배우자공제·금융재산공제</strong>와 <strong>동시에</strong> 적용할 수
          있습니다. 다만 상속공제 합계는 <strong>제24조 종합한도</strong>(과세가액 등)를 넘을 수 없습니다.
        </p>
        <p className="text-muted-foreground text-sm">
          과세가액 7억·배우자+자녀만으로 이미 면세인 경우(
          <Link
            href="/guide/inheritance-tax-apartment-price-scenarios-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            7억 예시
          </Link>
          )에는 동거주택공제를 추가해도 <strong>납부세액은 0원</strong>인 경우가 많습니다. 과세가액이 큰
          15억·20억 구간에서 효과가 큽니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-crhid-fail">
        <h2 id="guide-crhid-fail" className="text-foreground text-xl font-semibold tracking-tight">
          안 되는 경우
        </h2>
        <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>동거 10년 미만, 중간에 다른 주택 보유·분양권 보유</li>
          <li>상속 주택이 아닌 다른 부동산·토지만 상속</li>
          <li>배우자 명의 주택만 상속·공동명의 등 지분 구조가 복잡한 경우(별도 판단)</li>
          <li>요건은 되나 <strong>종합한도</strong> 때문에 공제가 잘리는 경우</li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-crhid-example">
        <h2 id="guide-crhid-example" className="text-foreground text-xl font-semibold tracking-tight">
          계산 예시
        </h2>
        <p>
          총상속재산 18억(동거주택 12억 + 금융 6억), 배우자+자녀 2명, 동거주택공제 요건 충족, 장례 3,000만
          가정(단순화).
        </p>
        <ol className="text-muted-foreground list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          <li>과세가액 ≈ 17.7억</li>
          <li>
            상속공제: 일괄 5억 + 배우자 5억 + 동거주택 <strong>6억(한도)</strong> + 금융 등 → 종합한도 내 적용
          </li>
          <li>동거주택공제만으로도 6억 추가 절감 → 15억 구간보다 과세표준·세액 감소</li>
        </ol>
        <p className="text-muted-foreground text-sm">
          정확한 숫자는{" "}
          <Link href="/inheritance-tax-calculator" className="text-primary underline-offset-4 hover:underline">
            상속세 계산기
          </Link>
          에 입력해 확인하세요.
        </p>
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
          <li>
            <Link
              href="/guide/one-household-one-home-capital-gains-tax-guide"
              className="text-primary underline-offset-4 hover:underline"
            >
              1세대 1주택 양도소득세(나중에 매도 시)
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
