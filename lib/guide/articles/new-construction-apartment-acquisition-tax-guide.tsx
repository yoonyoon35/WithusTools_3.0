import Link from "next/link";

export const newConstructionApartmentAcquisitionTaxGuideMeta = {
  slug: "new-construction-apartment-acquisition-tax-guide",
  title: "신축 아파트 취득세 계산 방법",
  description:
    "2026년 기준 신축·분양 아파트 취득세 납부 시점, 6억·7억·8억·9억·12억 구간별 예시, 지방교육세·농특세, 생애최초 감면·2주택 중과. 취득세 계산기로 본인 조건을 바로 확인할 수 있습니다.",
  updated: "2026년 7월 2일",
} as const;

const amountGuides = [
  { href: "/guide/new-apartment-600-million-acquisition-tax-guide", label: "6억 신축 분양" },
  { href: "/guide/new-apartment-700-million-acquisition-tax-guide", label: "7억 신축 분양" },
  { href: "/guide/new-apartment-800-million-acquisition-tax-guide", label: "8억 신축 분양" },
  { href: "/guide/new-apartment-900-million-acquisition-tax-guide", label: "9억 신축 분양" },
  { href: "/guide/new-apartment-1200-million-acquisition-tax-guide", label: "12억 신축 분양" },
] as const;

export function NewConstructionApartmentAcquisitionTaxGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-ncat-intro">
        <h2 id="guide-ncat-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 7월 기준
        </h2>
        <p>
          신축 아파트 취득세 계산은 <strong>분양가(취득가액)</strong>, <strong>잔금·등기 시점 세대 주택 수</strong>,{" "}
          <strong>전용면적</strong>, <strong>조정대상지역 여부</strong>에 따라 달라집니다. 계약금·중도금 납부만으로는
          취득세가 나가지 않고, 보통 잔금·소유권 이전등기 시점에 한 번 부과됩니다.{" "}
          <Link href="/acquisition-tax-calculator" className="text-primary underline-offset-4 hover:underline">
            취득세 계산기
          </Link>
          에서 본인 조건을 입력해 바로 확인할 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ncat-timing">
        <h2 id="guide-ncat-timing" className="text-foreground text-xl font-semibold tracking-tight">
          신축 분양, 취득세는 언제 내느냐
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              납부 시점 요약
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  단계
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득세
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  계약금·중도금
                </th>
                <td className="border-border border-b px-3 py-2.5">없음</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  잔금·소유권 이전등기
                </th>
                <td className="border-border border-b px-3 py-2.5">취득일 기준 60일 이내 신고·납부</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  분양권 전매 취득
                </th>
                <td className="px-3 py-2.5">전매 계약 시점에 별도 과세(잔금 이전)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-ncat-amounts">
        <h2 id="guide-ncat-amounts" className="text-foreground text-xl font-semibold tracking-tight">
          분양가별 취득세 예시(1주택·84㎡)
        </h2>
        <p className="text-muted-foreground text-sm">무주택·1주택, 조정지역·2주택 중과 없음, 전용 85㎡ 이하 가정</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              금액별 합계(취득세+지방교육세)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  분양가
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득세율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  합계
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상세
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  6억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">1%</td>
                <td className="border-border border-b px-3 py-2.5">660만 원</td>
                <td className="border-border border-b px-3 py-2.5">
                  <Link href="/guide/new-apartment-600-million-acquisition-tax-guide" className="text-primary underline-offset-4 hover:underline">
                    6억 가이드
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  7억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">약 1.67%</td>
                <td className="border-border border-b px-3 py-2.5">약 1,283만 원</td>
                <td className="border-border border-b px-3 py-2.5">
                  <Link href="/guide/new-apartment-700-million-acquisition-tax-guide" className="text-primary underline-offset-4 hover:underline">
                    7억 가이드
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  8억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">약 2.33%</td>
                <td className="border-border border-b px-3 py-2.5">약 2,053만 원</td>
                <td className="border-border border-b px-3 py-2.5">
                  <Link href="/guide/new-apartment-800-million-acquisition-tax-guide" className="text-primary underline-offset-4 hover:underline">
                    8억 가이드
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  9억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">3%</td>
                <td className="border-border border-b px-3 py-2.5">2,970만 원</td>
                <td className="border-border border-b px-3 py-2.5">
                  <Link href="/guide/new-apartment-900-million-acquisition-tax-guide" className="text-primary underline-offset-4 hover:underline">
                    9억 가이드
                  </Link>
                </td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  12억 원
                </th>
                <td className="px-3 py-2.5">3%</td>
                <td className="px-3 py-2.5">3,960만 원</td>
                <td className="px-3 py-2.5">
                  <Link href="/guide/new-apartment-1200-million-acquisition-tax-guide" className="text-primary underline-offset-4 hover:underline">
                    12억 가이드
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          6억~9억 구간은 비례세율이 적용되고, 9억을 넘으면 3% 고정입니다. 전용 85㎡를 초과하면 농어촌특별세 0.2%가
          추가됩니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-ncat-links">
        <h2 id="guide-ncat-links" className="text-foreground text-xl font-semibold tracking-tight">
          금액별 상세 가이드
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          {amountGuides.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-primary underline-offset-4 hover:underline">
                {item.label} 아파트 취득세 계산
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3" aria-labelledby="guide-ncat-related">
        <h2 id="guide-ncat-related" className="text-foreground text-xl font-semibold tracking-tight">
          함께 보면 좋은 글
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li>
            <Link href="/guide/acquisition-tax-rates-2026-guide" className="text-primary underline-offset-4 hover:underline">
              2026년 취득세율 완전 정리
            </Link>
          </li>
          <li>
            <Link href="/guide/first-home-acquisition-tax-relief-guide" className="text-primary underline-offset-4 hover:underline">
              생애최초 취득세 감면
            </Link>
          </li>
          <li>
            <Link href="/guide/home-purchase-additional-costs-guide" className="text-primary underline-offset-4 hover:underline">
              주택 구입 부대비용
            </Link>
          </li>
        </ul>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="취득세 계산기 이동"
      >
        <p>
          <Link href="/acquisition-tax-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            → 취득세 계산기에서 분양가·주택 수·면적을 입력해 바로 확인하세요.
          </Link>
        </p>
      </aside>
    </>
  );
}
