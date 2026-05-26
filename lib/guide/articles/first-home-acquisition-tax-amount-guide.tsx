import Link from "next/link";

export const firstHomeAcquisitionTaxAmountGuideMeta = {
  slug: "first-home-acquisition-tax-amount-guide",
  title: "1주택자 취득세 얼마나 나올까",
  description:
    "1주택자·무주택자 취득세 구조, 매매가 구간별 세액, 1주택 교체·생애최초 감면 시나리오와 계산기와의 역할 구분을 정리했습니다.",
  updated: "2026년 4월 23일",
} as const;

export function FirstHomeAcquisitionTaxAmountGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-fhat-intro">
        <h2 id="guide-fhat-intro" className="text-foreground text-xl font-semibold tracking-tight">
          개요
        </h2>
        <p>
          무주택자가 처음으로 주택을 구입하거나, 1주택자가 기존 주택을 팔고 새 주택을 구입하는 경우 취득세율은 매매가에 따라 1% ~
          3%가 적용됩니다. 여기에 지방교육세와 농어촌특별세가 추가로 부과됩니다.{" "}
          <Link href="/acquisition-tax-calculator" className="text-primary underline-offset-4 hover:underline">
            취득세 계산기
          </Link>
          로 금액을 빠르게 확인한 뒤, 이 글에서는 <strong>구간별 세율이 왜 달라지는지·1주택 교체 때 주의할 점</strong>을
          다룹니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-fhat-replace">
        <h2 id="guide-fhat-replace" className="text-foreground text-xl font-semibold tracking-tight">
          1주택 교체: 기존 집 팔고 새 집 살 때
        </h2>
        <p>
          취득세는 <strong>새 집을 살 때</strong> 납부합니다. 기존 주택 처분 시점과 무관하게, 취득 시점에 세대 전체
          보유 주택 수로 1주택·2주택이 갈립니다. 매도 전 새 집을 먼저 취득하면 2주택 중과가 적용될 수 있으므로,{" "}
          <Link href="/guide/temporary-two-home-acquisition-tax-exception-guide" className="text-primary underline-offset-4 hover:underline">
            일시적 2주택 예외
          </Link>
          요건을 미리 확인하는 것이 중요합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-fhat-structure">
        <h2 id="guide-fhat-structure" className="text-foreground text-xl font-semibold tracking-tight">
          1주택 취득세 계산 구조
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              세목별 세율·비고
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
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
                  취득세
                </th>
                <td className="border-border border-b px-3 py-2.5">1% ~ 3%</td>
                <td className="border-border border-b px-3 py-2.5">매매가 구간별 차등</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  지방교육세
                </th>
                <td className="border-border border-b px-3 py-2.5">취득세의 10%</td>
                <td className="border-border border-b px-3 py-2.5">항상 부과</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  농어촌특별세
                </th>
                <td className="px-3 py-2.5">취득가액의 0.2%</td>
                <td className="px-3 py-2.5">전용 85㎡ 초과 시만 부과</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-fhat-brackets">
        <h2 id="guide-fhat-brackets" className="text-foreground text-xl font-semibold tracking-tight">
          매매가 구간별 취득세율
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              취득가액 구간별 취득세율
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득가액
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득세율
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  6억 원 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">1%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  6억 원 초과 ~ 9억 원 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">1% ~ 3%(비례 산출)</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  9억 원 초과
                </th>
                <td className="px-3 py-2.5">3%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>6억 원 초과 9억 원 이하 구간은 아래 산식을 적용합니다.</p>
        <p className="bg-muted/30 rounded-md border border-border px-3 py-2 font-mono text-sm">
          취득세율(%) = (취득가액 × 2 ÷ 3억 - 3) ÷ 100
        </p>
        <p>
          예를 들어 매매가 7억 5천만 원이면 (7.5억 × 2 ÷ 3억 - 3) ÷ 100 = <strong>2%</strong>입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-fhat-by-price">
        <h2 id="guide-fhat-by-price" className="text-foreground text-xl font-semibold tracking-tight">
          매매가별 실제 납부액(전용 85㎡ 이하 기준)
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              취득세·지방교육세·합계(농특세 제외)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  매매가
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득세율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  취득세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  지방교육세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  합계
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">1%</td>
                <td className="border-border border-b px-3 py-2.5">100만 원</td>
                <td className="border-border border-b px-3 py-2.5">10만 원</td>
                <td className="border-border border-b px-3 py-2.5">110만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">1%</td>
                <td className="border-border border-b px-3 py-2.5">200만 원</td>
                <td className="border-border border-b px-3 py-2.5">20만 원</td>
                <td className="border-border border-b px-3 py-2.5">220만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">1%</td>
                <td className="border-border border-b px-3 py-2.5">300만 원</td>
                <td className="border-border border-b px-3 py-2.5">30만 원</td>
                <td className="border-border border-b px-3 py-2.5">330만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  4억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">1%</td>
                <td className="border-border border-b px-3 py-2.5">400만 원</td>
                <td className="border-border border-b px-3 py-2.5">40만 원</td>
                <td className="border-border border-b px-3 py-2.5">440만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">1%</td>
                <td className="border-border border-b px-3 py-2.5">500만 원</td>
                <td className="border-border border-b px-3 py-2.5">50만 원</td>
                <td className="border-border border-b px-3 py-2.5">550만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  6억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">1%</td>
                <td className="border-border border-b px-3 py-2.5">600만 원</td>
                <td className="border-border border-b px-3 py-2.5">60만 원</td>
                <td className="border-border border-b px-3 py-2.5">660만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  7억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">약 1.67%</td>
                <td className="border-border border-b px-3 py-2.5">약 1,167만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 117만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 1,284만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  7억 5천만 원
                </th>
                <td className="border-border border-b px-3 py-2.5">2%</td>
                <td className="border-border border-b px-3 py-2.5">1,500만 원</td>
                <td className="border-border border-b px-3 py-2.5">150만 원</td>
                <td className="border-border border-b px-3 py-2.5">1,650만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  8억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">약 2.33%</td>
                <td className="border-border border-b px-3 py-2.5">약 1,867만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 187만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 2,054만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  9억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">3%</td>
                <td className="border-border border-b px-3 py-2.5">2,700만 원</td>
                <td className="border-border border-b px-3 py-2.5">270만 원</td>
                <td className="border-border border-b px-3 py-2.5">2,970만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  10억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">3%</td>
                <td className="border-border border-b px-3 py-2.5">3,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">300만 원</td>
                <td className="border-border border-b px-3 py-2.5">3,300만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  12억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">3%</td>
                <td className="border-border border-b px-3 py-2.5">3,600만 원</td>
                <td className="border-border border-b px-3 py-2.5">360만 원</td>
                <td className="border-border border-b px-3 py-2.5">3,960만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  15억 원
                </th>
                <td className="px-3 py-2.5">3%</td>
                <td className="px-3 py-2.5">4,500만 원</td>
                <td className="px-3 py-2.5">450만 원</td>
                <td className="px-3 py-2.5">4,950만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-fhat-rural">
        <h2 id="guide-fhat-rural" className="text-foreground text-xl font-semibold tracking-tight">
          전용 85㎡ 초과 시 농어촌특별세 추가
        </h2>
        <p>전용면적 85㎡를 초과하는 주택은 농어촌특별세 0.2%가 추가로 부과됩니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              면적별 합계 비교(취득세·지방교육세 기준 + 농특)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  매매가
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  85㎡ 이하 합계
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  85㎡ 초과 농특세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  85㎡ 초과 합계
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">550만 원</td>
                <td className="border-border border-b px-3 py-2.5">100만 원</td>
                <td className="border-border border-b px-3 py-2.5">650만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  9억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">2,970만 원</td>
                <td className="border-border border-b px-3 py-2.5">180만 원</td>
                <td className="border-border border-b px-3 py-2.5">3,150만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  12억 원
                </th>
                <td className="px-3 py-2.5">3,960만 원</td>
                <td className="px-3 py-2.5">240만 원</td>
                <td className="px-3 py-2.5">4,200만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-fhat-relief">
        <h2 id="guide-fhat-relief" className="text-foreground text-xl font-semibold tracking-tight">
          생애최초 취득세 감면 적용 시
        </h2>
        <p>
          생애최초 주택 구입자는 12억 원 이하 주택에 대해 200만 원 한도 내에서 취득세를 감면받을 수 있습니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              감면 전·후 비교(전용 85㎡ 이하, 취득세·지방교육세 합계 기준)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  매매가
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  감면 전 합계
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  감면액
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  감면 후 실납부액
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">330만 원</td>
                <td className="border-border border-b px-3 py-2.5">200만 원</td>
                <td className="border-border border-b px-3 py-2.5">130만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">550만 원</td>
                <td className="border-border border-b px-3 py-2.5">200만 원</td>
                <td className="border-border border-b px-3 py-2.5">350만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  7억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">약 1,284만 원</td>
                <td className="border-border border-b px-3 py-2.5">200만 원</td>
                <td className="border-border border-b px-3 py-2.5">약 1,084만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  9억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">2,970만 원</td>
                <td className="border-border border-b px-3 py-2.5">200만 원</td>
                <td className="border-border border-b px-3 py-2.5">2,770만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  12억 원
                </th>
                <td className="px-3 py-2.5">3,960만 원</td>
                <td className="px-3 py-2.5">200만 원</td>
                <td className="px-3 py-2.5">3,760만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>감면은 자동 적용이 아니므로 취득세 신고 시 별도 신청이 필요합니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-fhat-cliff">
        <h2 id="guide-fhat-cliff" className="text-foreground text-xl font-semibold tracking-tight">
          취득세가 급격히 오르는 구간 주의
        </h2>
        <p>
          6억 원까지는 1%로 동일하지만 6억 원을 넘는 순간 세율이 비례 증가하기 시작합니다. 9억 원을 초과하면 3%로 고정됩니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              구간별 세율 변화 요약
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구간
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  세율 변화
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  6억 원 이하
                </th>
                <td className="border-border border-b px-3 py-2.5">1% 고정</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  6억 원 초과
                </th>
                <td className="border-border border-b px-3 py-2.5">1원 초과할 때마다 세율 상승</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  9억 원 초과
                </th>
                <td className="px-3 py-2.5">3% 고정</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          예를 들어 매매가 6억 원이면 취득세 600만 원이지만, 6억 1천만 원이면 약 607만 원이 됩니다. 6억 원 부근 매물은 협의 가격에 따라
          취득세 차이가 발생할 수 있습니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-fhat-deadline">
        <h2 id="guide-fhat-deadline" className="text-foreground text-xl font-semibold tracking-tight">
          취득세 납부 기한
        </h2>
        <p>
          잔금 지급일과 등기 접수일 중 빠른 날로부터 60일 이내에 납부해야 합니다. 기한을 초과하면 신고불성실가산세(20%)와
          납부지연가산세(1일 0.022%)가 추가 부과됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-fhat-payment-methods">
        <h2 id="guide-fhat-payment-methods" className="text-foreground text-xl font-semibold tracking-tight">
          납부 방법
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              신고·납부 경로
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  방법
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  온라인
                </th>
                <td className="border-border border-b px-3 py-2.5">위택스(wetax.go.kr) 신고·납부</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  오프라인
                </th>
                <td className="border-border border-b px-3 py-2.5">관할 시·군·구청 세무과 방문 신고</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  법무사 대행
                </th>
                <td className="px-3 py-2.5">등기 위임 시 법무사가 대행 처리</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>통상 법무사에게 등기를 위임하면 취득세 신고도 함께 처리됩니다.</p>
        <p className="text-muted-foreground text-sm">
          ※ 1주택자 여부는 취득 시점의 세대 기준 보유 주택 수로 판단합니다. 배우자 보유 주택이 있으면 합산되므로 사전 확인이
          필요합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="취득세 계산기 이동"
      >
        <p>
          <Link href="/acquisition-tax-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            매매가를 직접 입력하면 취득세를 바로 계산해볼 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
