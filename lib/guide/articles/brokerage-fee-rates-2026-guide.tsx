import Link from "next/link";

export const brokerageFeeRates2026GuideMeta = {
  slug: "brokerage-fee-rates-2026-guide",
  title: "2026년 부동산 중개수수료 요율표 완전 정리",
  description:
    "2026년 기준 매매·전세·월세 환산·오피스텔 중개수수료 상한요율과 유형별 비교표를 정리했습니다. VAT 포함 여부, 절약 방법, 중개수수료 계산기로 예상 금액을 확인할 수 있습니다. 관할 고시·협의 금액·부가세는 개별 확인이 필요한 참고 자료이며 계약 전 비교용으로 활용하세요.",
  updated: "2026년 4월 28일",
} as const;

export function BrokerageFeeRates2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-bfr-overview">
        <h2 id="guide-bfr-overview" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 4월 기준
        </h2>
        <p>
          부동산 중개수수료(중개보수)는 공인중개사법 시행규칙 제20조에 근거하며, 거래금액에 상한요율을 곱한 금액 이내에서 의뢰인과
          공인중개사가 협의해 결정합니다. 상한요율은 최대치이며 이를 초과해 받는 것은 공인중개사법 위반입니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-bfr-types-intro">
        <h2 id="guide-bfr-types-intro" className="text-foreground text-xl font-semibold tracking-tight">
          거래 유형별 요율 체계
        </h2>
        <p>중개수수료 요율은 거래 유형(매매·전세·월세)과 거래금액 구간에 따라 다르게 적용됩니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bfr-sale">
        <h3 id="guide-bfr-sale" className="text-foreground text-lg font-semibold tracking-tight">
          ① 매매 상한요율
        </h3>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              매매 거래금액 구간별 상한요율
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  거래금액
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상한요율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  한도액
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5,000만 원 미만
                </th>
                <td className="border-border border-b px-3 py-2.5">0.6%</td>
                <td className="border-border border-b px-3 py-2.5">25만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5,000만 원 이상 ~ 2억 원 미만
                </th>
                <td className="border-border border-b px-3 py-2.5">0.5%</td>
                <td className="border-border border-b px-3 py-2.5">80만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2억 원 이상 ~ 9억 원 미만
                </th>
                <td className="border-border border-b px-3 py-2.5">0.4%</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  9억 원 이상 ~ 12억 원 미만
                </th>
                <td className="border-border border-b px-3 py-2.5">0.5%</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  12억 원 이상 ~ 15억 원 미만
                </th>
                <td className="border-border border-b px-3 py-2.5">0.6%</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  15억 원 이상
                </th>
                <td className="px-3 py-2.5">0.7%</td>
                <td className="px-3 py-2.5">없음</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bfr-jeonse">
        <h3 id="guide-bfr-jeonse" className="text-foreground text-lg font-semibold tracking-tight">
          ② 전세(임대차) 상한요율
        </h3>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              전세(임대차) 거래금액 구간별 상한요율
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  거래금액
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상한요율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  한도액
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5,000만 원 미만
                </th>
                <td className="border-border border-b px-3 py-2.5">0.5%</td>
                <td className="border-border border-b px-3 py-2.5">20만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5,000만 원 이상 ~ 1억 원 미만
                </th>
                <td className="border-border border-b px-3 py-2.5">0.4%</td>
                <td className="border-border border-b px-3 py-2.5">30만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1억 원 이상 ~ 6억 원 미만
                </th>
                <td className="border-border border-b px-3 py-2.5">0.3%</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  6억 원 이상 ~ 12억 원 미만
                </th>
                <td className="border-border border-b px-3 py-2.5">0.4%</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  12억 원 이상 ~ 15억 원 미만
                </th>
                <td className="border-border border-b px-3 py-2.5">0.5%</td>
                <td className="border-border border-b px-3 py-2.5">없음</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  15억 원 이상
                </th>
                <td className="px-3 py-2.5">0.6%</td>
                <td className="px-3 py-2.5">없음</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bfr-wolse">
        <h3 id="guide-bfr-wolse" className="text-foreground text-lg font-semibold tracking-tight">
          ③ 월세 거래금액 환산 방법
        </h3>
        <p>월세는 보증금과 월세를 합산한 환산금액을 기준으로 요율을 적용합니다.</p>
        <ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm leading-relaxed">
          <li>환산 거래금액 = 보증금 + (월세 × 100)</li>
          <li>단, 합산액이 5,000만 원 미만이면 보증금 + (월세 × 70)</li>
          <li>환산 거래금액에 전세 요율표를 동일하게 적용합니다.</li>
        </ul>
        <h4 className="text-foreground mt-4 text-base font-semibold">월세 계산 예시</h4>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              환산금액·적용 요율·1인당 수수료(상한 기준)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  보증금
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  월세
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  환산 거래금액
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  적용 요율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  수수료
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-border border-b px-3 py-2.5">1,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">50만 원</td>
                <td className="border-border border-b px-3 py-2.5">6,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">0.3%</td>
                <td className="border-border border-b px-3 py-2.5">18만 원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">3,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">70만 원</td>
                <td className="border-border border-b px-3 py-2.5">1억 원</td>
                <td className="border-border border-b px-3 py-2.5">0.4%(한도 30만 원)</td>
                <td className="border-border border-b px-3 py-2.5">30만 원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">5,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">100만 원</td>
                <td className="border-border border-b px-3 py-2.5">1억 5,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">0.3%</td>
                <td className="border-border border-b px-3 py-2.5">45만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="px-3 py-2.5">1억 원</td>
                <td className="px-3 py-2.5">160만 원</td>
                <td className="px-3 py-2.5">2억 6,000만 원</td>
                <td className="px-3 py-2.5">0.3%</td>
                <td className="px-3 py-2.5">78만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bfr-officetel">
        <h3 id="guide-bfr-officetel" className="text-foreground text-lg font-semibold tracking-tight">
          ④ 오피스텔 상한요율
        </h3>
        <p>
          주거용 오피스텔(전용면적 85㎡ 이하, 일정 설비를 갖춘 경우)은 매매 0.5%, 임대차 0.4% 상한이 적용됩니다. 업무용(비주거용)
          오피스텔은 거래금액의 0.9% 이내에서 협의합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              오피스텔 유형별 상한요율
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  상한요율
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주거용 오피스텔 매매
                </th>
                <td className="border-border border-b px-3 py-2.5">0.5%</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  주거용 오피스텔 임대차
                </th>
                <td className="border-border border-b px-3 py-2.5">0.4%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  업무용 오피스텔
                </th>
                <td className="px-3 py-2.5">0.9% 이내 협의</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bfr-compare">
        <h2 id="guide-bfr-compare" className="text-foreground text-xl font-semibold tracking-tight">
          거래 유형별 수수료 비교 예시
        </h2>
        <p className="text-muted-foreground text-sm">동일 금액 기준 매매 vs 전세 수수료 비교(1인당 상한 기준)</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              거래금액별 매매·전세 수수료
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  거래금액
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  매매 수수료
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  전세 수수료
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  차이
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">120만 원</td>
                <td className="border-border border-b px-3 py-2.5">90만 원</td>
                <td className="border-border border-b px-3 py-2.5">30만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">200만 원</td>
                <td className="border-border border-b px-3 py-2.5">150만 원</td>
                <td className="border-border border-b px-3 py-2.5">50만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  7억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">280만 원</td>
                <td className="border-border border-b px-3 py-2.5">210만 원</td>
                <td className="border-border border-b px-3 py-2.5">70만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  10억 원
                </th>
                <td className="px-3 py-2.5">500만 원</td>
                <td className="px-3 py-2.5">400만 원</td>
                <td className="px-3 py-2.5">100만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>같은 금액이라도 전세가 매매보다 수수료가 낮습니다.</p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-bfr-formula">
        <h2 id="guide-bfr-formula" className="text-foreground text-xl font-semibold tracking-tight">
          수수료 계산 기본 공식
        </h2>
        <p className="bg-muted/30 rounded-md border border-border px-3 py-2 text-sm leading-relaxed">
          중개수수료 = 거래금액 × 상한요율
          <br />
          (단, 한도액이 있는 구간은 한도액을 초과할 수 없음)
        </p>
        <p>
          <strong>계산 예시: 매매가 2억 5,000만 원</strong> — 2억 5,000만 원 × 0.4% = 100만 원(한도액 없음 → 100만 원 그대로 적용)
        </p>
        <p>
          <strong>계산 예시: 전세 보증금 8,000만 원</strong> — 8,000만 원 × 0.4% = 32만 원(한도액 30만 원 → 30만 원 적용)
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-bfr-payers">
        <h2 id="guide-bfr-payers" className="text-foreground text-xl font-semibold tracking-tight">
          부담 주체
        </h2>
        <p>
          매매 시 중개보수는 매도인과 매수인으로부터 각각 받으며, 임대차 시에는 임대인과 임차인이 각각 부담하는 것이 원칙입니다.
          쌍방이 동일 상한요율을 각각 적용받으므로 하나의 거래에서 공인중개사가 받는 총 수수료는 요율표 금액의 2배가 됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bfr-vat">
        <h2 id="guide-bfr-vat" className="text-foreground text-xl font-semibold tracking-tight">
          부가가치세(VAT) 적용 여부
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              공인중개사 과세 유형별 부가세
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  공인중개사 유형
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  부가세
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  일반과세자
                </th>
                <td className="border-border border-b px-3 py-2.5">수수료의 10% 추가</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  간이과세자
                </th>
                <td className="px-3 py-2.5">면제 또는 감면</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>계약 전 공인중개사의 과세 유형을 확인하는 것이 필요합니다.</p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-bfr-regional">
        <h2 id="guide-bfr-regional" className="text-foreground text-xl font-semibold tracking-tight">
          지역별 요율 차이
        </h2>
        <p>
          중개보수는 시·도 조례로 정하므로 지역별로 상한요율에 차이가 있을 수 있습니다. 중개대상물 소재지와 중개사무소 소재지가 다른
          경우 중개사무소 소재지 기준 조례가 적용됩니다. 지역별 상세 요율은 한국공인중개사협회에서 확인할 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-bfr-save">
        <h2 id="guide-bfr-save" className="text-foreground text-xl font-semibold tracking-tight">
          수수료 절약 방법
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              절약·분쟁 예방 포인트
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
                  협의 요청
                </th>
                <td className="border-border border-b px-3 py-2.5">상한요율 이내에서 할인 협의 가능</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  서면 확정
                </th>
                <td className="border-border border-b px-3 py-2.5">계약서 특약란에 수수료 금액 명시</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  VAT 확인
                </th>
                <td className="border-border border-b px-3 py-2.5">계약 전 부가세 포함 여부 사전 확인</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  복수 중개사 비교
                </th>
                <td className="border-border border-b px-3 py-2.5">동일 물건 여러 중개사 조건 비교</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  현금영수증 요청
                </th>
                <td className="px-3 py-2.5">소득공제 활용</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-bfr-overcharge">
        <h2 id="guide-bfr-overcharge" className="text-foreground text-xl font-semibold tracking-tight">
          상한요율 초과 청구 시 대처 방법
        </h2>
        <p>
          상한요율을 초과한 수수료 청구는 공인중개사법 위반입니다. 과다 청구 발생 시 한국공인중개사협회 분쟁조정위원회 또는 관할
          시·군·구청에 신고할 수 있습니다.
        </p>
        <p className="text-muted-foreground text-sm">
          ※ 중개수수료 상한요율은 시·도 조례에 따라 지역별로 다소 차이가 있을 수 있습니다. 정확한 요율은 국토교통부(molit.go.kr) 또는
          한국공인중개사협회(kar.or.kr)에서 확인할 것을 권장합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="중개수수료 계산기 이동"
      >
        <p>
          <Link href="/brokerage-fee-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            거래금액을 직접 입력하면 중개수수료를 바로 계산해볼 수 있습니다.
          </Link>
        </p>
      </aside>
    </>
  );
}
