import Link from "next/link";

export const inheritanceTaxApartmentPriceScenariosGuideMeta = {
  slug: "inheritance-tax-apartment-price-scenarios-guide",
  title: "부모 집·아파트 상속세 얼마? 7억·10억·15억 계산 예시",
  description:
    "2026년 7월 기준 배우자+자녀 2명 가정으로 총상속재산 7억·10억·15억 원 아파트 상속 시 과세가액·일괄·배우자공제·과세표준·납부 상속세를 표로 비교했습니다. 7·10억 면세와 15억 구간별 세액을 정리했습니다.",
  updated: "2026년 7월 7일",
} as const;

export function InheritanceTaxApartmentPriceScenariosGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-itaps-intro">
        <h2 id="guide-itaps-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 기준
        </h2>
        <p>
          「부모 아파트 상속하면 세금 얼마?」는 상속인이 가장 많이 검색하는 금액 질문입니다. 아래는{" "}
          <strong>배우자+자녀 2명</strong>, 장례비 3,000만, 사전증여 없음(15억만 예외 표기)을 공통으로 두고{" "}
          <strong>총상속재산(시가)</strong>만 7억·10억·15억으로 바꾼 예시입니다.{" "}
          <Link href="/inheritance-tax-calculator" className="text-primary underline-offset-4 hover:underline">
            상속세 계산기
          </Link>
          에 본인 숫자를 넣어 확인하세요.{" "}
          <Link href="/guide/inheritance-tax-overview-guide" className="text-primary underline-offset-4 hover:underline">
            상속세 개요
          </Link>
          에서 공제·세율 구조를 먼저 보면 이해가 빠릅니다.
        </p>
      </section>

      <nav
        className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm"
        aria-label="목차"
      >
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-itaps-assumptions" className="text-primary underline-offset-4 hover:underline">
              공통 가정
            </a>
          </li>
          <li>
            <a href="#guide-itaps-summary" className="text-primary underline-offset-4 hover:underline">
              7·10·15억 한눈에
            </a>
          </li>
          <li>
            <a href="#guide-itaps-700m" className="text-primary underline-offset-4 hover:underline">
              7억 원 — 상속세 0원
            </a>
          </li>
          <li>
            <a href="#guide-itaps-1000m" className="text-primary underline-offset-4 hover:underline">
              10억 원 — 상속세 0원
            </a>
          </li>
          <li>
            <a href="#guide-itaps-1500m" className="text-primary underline-offset-4 hover:underline">
              15억 원 — 약 7,547만 원
            </a>
          </li>
          <li>
            <a href="#guide-itaps-notes" className="text-primary underline-offset-4 hover:underline">
              금액이 달라지는 경우
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-4" aria-labelledby="guide-itaps-assumptions">
        <h2 id="guide-itaps-assumptions" className="text-foreground text-xl font-semibold tracking-tight">
          공통 가정
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              세 가지 예시 공통 조건
            </caption>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium w-36">
                  상속인
                </th>
                <td className="border-border border-b px-3 py-2.5">배우자 + 직계비속(자녀) 2명</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium">
                  재산
                </th>
                <td className="border-border border-b px-3 py-2.5">아파트(주택) 시가 = 총상속재산가액</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium">
                  차감
                </th>
                <td className="border-border border-b px-3 py-2.5">장례비 등 3,000만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium">
                  금융재산
                </th>
                <td className="border-border border-b px-3 py-2.5">7억·10억: 5,000만 / 15억: 3억(본래 상속재산)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b bg-muted/30 px-3 py-2.5 font-medium">
                  신고
                </th>
                <td className="border-border border-b px-3 py-2.5">법정기한 내 자진신고(신고세액공제 3% 반영)</td>
              </tr>
              <tr>
                <th scope="row" className="bg-muted/30 px-3 py-2.5 font-medium">
                  15억만 추가
                </th>
                <td className="px-3 py-2.5">사전증여 3,000만, 감정평가 수수료 100만</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm">
          <strong className="text-foreground">상속 취득세</strong>는 별도입니다. 주택 명의 이전 시 지방세가 추가로
          발생할 수 있습니다(
          <Link
            href="/guide/inherited-housing-acquisition-tax-2026-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            상속 주택 취득세
          </Link>
          ).
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-itaps-summary">
        <h2 id="guide-itaps-summary" className="text-foreground text-xl font-semibold tracking-tight">
          7·10·15억 한눈에
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              금액별 상속세 비교(위 공통 가정)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  총상속재산
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  과세가액
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상속공제(반영)
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  과세표준
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  납부 상속세
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  7억
                </th>
                <td className="border-border border-b px-3 py-2.5">6.7억</td>
                <td className="border-border border-b px-3 py-2.5">6.7억(한도)</td>
                <td className="border-border border-b px-3 py-2.5">0</td>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>0원</strong>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  10억
                </th>
                <td className="border-border border-b px-3 py-2.5">9.7억</td>
                <td className="border-border border-b px-3 py-2.5">9.7억(한도)</td>
                <td className="border-border border-b px-3 py-2.5">0</td>
                <td className="border-border border-b px-3 py-2.5">
                  <strong>0원</strong>
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  15억
                </th>
                <td className="px-3 py-2.5">15억</td>
                <td className="px-3 py-2.5">10.6억</td>
                <td className="px-3 py-2.5">4.39억</td>
                <td className="px-3 py-2.5">
                  약 <strong>7,547만</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          배우자와 일괄공제(5억)만 합쳐도 <strong>10억 원</strong>에 가깝기 때문에, 과세가액이 그 아래면{" "}
          <strong>7억·10억 아파트는 상속세가 없는 경우가 많습니다</strong>. 15억부터 과세표준이 생기고 20% 구간
          세율이 적용됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-itaps-700m">
        <h2 id="guide-itaps-700m" className="text-foreground text-xl font-semibold tracking-tight">
          7억 원 — 상속세 0원
        </h2>
        <ol className="text-muted-foreground list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          <li>과세가액 = 7억 − 3,000만 = 6억 7,000만</li>
          <li>
            상속공제(한도 전): 일괄 5억 + 배우자 최소 5억 + 금융 2,000만 = 10억 2,000만
          </li>
          <li>실제 공제 = 과세가액 6.7억 전액(한도 적용)</li>
          <li>과세표준 = 0 → 상속세 없음</li>
        </ol>
      </section>

      <section className="space-y-4" aria-labelledby="guide-itaps-1000m">
        <h2 id="guide-itaps-1000m" className="text-foreground text-xl font-semibold tracking-tight">
          10억 원 — 상속세 0원
        </h2>
        <ol className="text-muted-foreground list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          <li>과세가액 = 10억 − 3,000만 = 9억 7,000만</li>
          <li>공제 풀(10억+) &gt; 과세가액 → 공제 9.7억, 과세표준 0</li>
          <li>
            시세가 10억이어도 <strong>상속세 0원</strong>일 수 있음. 다만 취득세·이후 보유세는 별도(
            <Link
              href="/guide/inherited-housing-acquisition-tax-2026-guide"
              className="text-primary underline-offset-4 hover:underline"
            >
              상속 취득세
            </Link>
            ·
            <Link
              href="/guide/one-household-one-home-comprehensive-property-tax-amount-guide"
              className="text-primary underline-offset-4 hover:underline"
            >
              종부세
            </Link>
            ).
          </li>
        </ol>
      </section>

      <section className="space-y-4" aria-labelledby="guide-itaps-1500m">
        <h2 id="guide-itaps-1500m" className="text-foreground text-xl font-semibold tracking-tight">
          15억 원 — 약 7,547만 원
        </h2>
        <ol className="text-muted-foreground list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          <li>과세가액 = 15억 − 3,000만 + 사전증여 3,000만 = 15억</li>
          <li>상속공제 = 일괄 5억 + 배우자 5억 + 금융 6,000만(3억×20%) = 10억 6,000만</li>
          <li>과세표준 = 15억 − 10.6억 − 감정 100만 = 4억 3,900만</li>
          <li>산출세액 = 4.39억 × 20% − 1,000만 = 7,780만</li>
          <li>신고세액공제 3% 후 납부 ≈ 7,546.6만 원</li>
        </ol>
        <p className="text-muted-foreground text-sm">
          납부세액 1천만을 넘으면 분납을 검토할 수 있습니다(
          <Link
            href="/guide/inheritance-tax-filing-deadline-installment-guide"
            className="text-primary underline-offset-4 hover:underline"
          >
            신고·분납 가이드
          </Link>
          ).
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-itaps-notes">
        <h2 id="guide-itaps-notes" className="text-foreground text-xl font-semibold tracking-tight">
          금액이 달라지는 경우
        </h2>
        <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <strong className="text-foreground">배우자 없음·자녀만</strong>: 일괄 5억만으로는 7억에서도 과세표준이
            남을 수 있음
          </li>
          <li>
            <strong className="text-foreground">사전증여·다른 부동산</strong>: 과세가액·제24조 한도가 커짐
          </li>
          <li>
            <strong className="text-foreground">동거주택공제</strong>: 요건 충족 시 주택가액 추가 공제(
            <Link
              href="/guide/co-residence-housing-inheritance-deduction-guide"
              className="text-primary underline-offset-4 hover:underline"
            >
              동거주택 상속공제
            </Link>
            )
          </li>
          <li>
            <strong className="text-foreground">복수 상속인</strong>: 세액 안분·대습상속 등으로 개인별 금액 상이
          </li>
        </ul>
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
              href="/guide/inherited-housing-acquisition-tax-2026-guide"
              className="text-primary underline-offset-4 hover:underline"
            >
              상속 주택 취득세
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
