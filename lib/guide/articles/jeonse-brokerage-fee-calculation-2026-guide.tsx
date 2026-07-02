import Link from "next/link";

export const jeonseBrokerageFeeCalculation2026GuideMeta = {
  slug: "jeonse-brokerage-fee-calculation-2026-guide",
  title: "전세 중개수수료 계산법",
  description:
    "2026년 4월 기준 전세 보증금 구간별 상한요율·한도액, 1인당 수수료 예시, 6억 원 경계, 쌍방 부담·매매와의 비교, VAT·재계약·분쟁 대응을 표로 정리했습니다.",
  updated: "2026년 5월 11일",
} as const;

export function JeonseBrokerageFeeCalculation2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-jbfc-intro">
        <h2 id="guide-jbfc-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 4월 기준
        </h2>
        <p>
          전세 중개수수료는 전세 보증금에 상한요율을 곱한 금액 이내에서 공인중개사와 협의해 결정합니다. 매매 수수료보다 요율이 낮으며
          구간에 따라 한도액이 적용됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-jbfc-cap">
        <h2 id="guide-jbfc-cap" className="text-foreground text-xl font-semibold tracking-tight">
          전세 상한요율표
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              보증금 구간별 상한요율·한도액
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  보증금
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
        <p>상한요율은 최대치이며 이 이내에서 공인중개사와 협의해 낮출 수 있습니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-jbfc-formula">
        <h2 id="guide-jbfc-formula" className="text-foreground text-xl font-semibold tracking-tight">
          수수료 계산 기본 공식
        </h2>
        <p className="bg-muted/30 rounded-md border border-border px-3 py-2 font-mono text-sm">수수료 = 보증금 × 상한요율</p>
        <p className="text-muted-foreground text-sm">(단, 한도액이 있는 구간은 한도액을 초과할 수 없음)</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-jbfc-examples">
        <h2 id="guide-jbfc-examples" className="text-foreground text-xl font-semibold tracking-tight">
          보증금별 실제 수수료 계산 예시
        </h2>
        <p className="text-muted-foreground text-sm">임대인·임차인 각각 부담 기준(1인당)</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              보증금별 1인당 중개수수료(상한)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  보증금
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  적용 요율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  계산
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  1인당 수수료
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3,000만 원
                </th>
                <td className="border-border border-b px-3 py-2.5">0.5%</td>
                <td className="border-border border-b px-3 py-2.5">3,000만 원 × 0.5% = 15만 원</td>
                <td className="border-border border-b px-3 py-2.5">15만 원(한도 20만 원 이내)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5,000만 원
                </th>
                <td className="border-border border-b px-3 py-2.5">0.4%</td>
                <td className="border-border border-b px-3 py-2.5">5,000만 원 × 0.4% = 20만 원</td>
                <td className="border-border border-b px-3 py-2.5">20만 원(한도 30만 원 이내)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  8,000만 원
                </th>
                <td className="border-border border-b px-3 py-2.5">0.4%</td>
                <td className="border-border border-b px-3 py-2.5">8,000만 원 × 0.4% = 32만 원</td>
                <td className="border-border border-b px-3 py-2.5">30만 원(한도 30만 원 적용)</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  1억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">0.3%</td>
                <td className="border-border border-b px-3 py-2.5">1억 원 × 0.3% = 30만 원</td>
                <td className="border-border border-b px-3 py-2.5">30만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  2억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">0.3%</td>
                <td className="border-border border-b px-3 py-2.5">2억 원 × 0.3% = 60만 원</td>
                <td className="border-border border-b px-3 py-2.5">60만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  3억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">0.3%</td>
                <td className="border-border border-b px-3 py-2.5">3억 원 × 0.3% = 90만 원</td>
                <td className="border-border border-b px-3 py-2.5">90만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">0.3%</td>
                <td className="border-border border-b px-3 py-2.5">5억 원 × 0.3% = 150만 원</td>
                <td className="border-border border-b px-3 py-2.5">150만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  6억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">0.4%</td>
                <td className="border-border border-b px-3 py-2.5">6억 원 × 0.4% = 240만 원</td>
                <td className="border-border border-b px-3 py-2.5">240만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  8억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">0.4%</td>
                <td className="border-border border-b px-3 py-2.5">8억 원 × 0.4% = 320만 원</td>
                <td className="border-border border-b px-3 py-2.5">320만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  10억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">0.4%</td>
                <td className="border-border border-b px-3 py-2.5">10억 원 × 0.4% = 400만 원</td>
                <td className="border-border border-b px-3 py-2.5">400만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  12억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">0.5%</td>
                <td className="border-border border-b px-3 py-2.5">12억 원 × 0.5% = 600만 원</td>
                <td className="border-border border-b px-3 py-2.5">600만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  15억 원
                </th>
                <td className="px-3 py-2.5">0.6%</td>
                <td className="px-3 py-2.5">15억 원 × 0.6% = 900만 원</td>
                <td className="px-3 py-2.5">900만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-jbfc-boundary">
        <h2 id="guide-jbfc-boundary" className="text-foreground text-xl font-semibold tracking-tight">
          6억 원 구간 경계 주의
        </h2>
        <p>보증금 5억 9,000만 원과 6억 원의 수수료 차이가 큽니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              6억 원 전후 1인당 수수료(상한)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  보증금
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  수수료
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5억 9,000만 원
                </th>
                <td className="border-border border-b px-3 py-2.5">5억 9,000만 원 × 0.3% = 177만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  6억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">6억 원 × 0.4% = 240만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  차이
                </th>
                <td className="px-3 py-2.5">63만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>6억 원 부근 전세 계약 시 보증금 협의에 따라 수수료 차이가 발생할 수 있습니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-jbfc-split">
        <h2 id="guide-jbfc-split" className="text-foreground text-xl font-semibold tracking-tight">
          쌍방 부담 원칙
        </h2>
        <p>
          임대인과 임차인이 각각 수수료를 부담하는 것이 원칙입니다. 하나의 전세 계약에서 공인중개사가 받는 총 수수료는 요율표
          금액의 2배가 됩니다.
        </p>
        <h3 className="text-foreground text-lg font-semibold tracking-tight">보증금 3억 원 전세 계약 기준</h3>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              부담 주체별 수수료(상한)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  부담 주체
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  수수료
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  임대인
                </th>
                <td className="border-border border-b px-3 py-2.5">90만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  임차인
                </th>
                <td className="border-border border-b px-3 py-2.5">90만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  공인중개사 수취 합계
                </th>
                <td className="px-3 py-2.5">180만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-jbfc-vs-sale">
        <h2 id="guide-jbfc-vs-sale" className="text-foreground text-xl font-semibold tracking-tight">
          매매 수수료와 전세 수수료 비교
        </h2>
        <p>같은 금액이라도 전세가 매매보다 요율이 낮습니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              거래금액(보증금·매매가)별 1인당 상한 비교(예시)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  금액
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  전세 수수료
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  매매 수수료
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
                <td className="border-border border-b px-3 py-2.5">90만 원</td>
                <td className="border-border border-b px-3 py-2.5">120만 원</td>
                <td className="border-border border-b px-3 py-2.5">30만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">150만 원</td>
                <td className="border-border border-b px-3 py-2.5">200만 원</td>
                <td className="border-border border-b px-3 py-2.5">50만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  7억 원
                </th>
                <td className="border-border border-b px-3 py-2.5">210만 원</td>
                <td className="border-border border-b px-3 py-2.5">280만 원</td>
                <td className="border-border border-b px-3 py-2.5">70만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  10억 원
                </th>
                <td className="px-3 py-2.5">400만 원</td>
                <td className="px-3 py-2.5">500만 원</td>
                <td className="px-3 py-2.5">100만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-jbfc-vat">
        <h2 id="guide-jbfc-vat" className="text-foreground text-xl font-semibold tracking-tight">
          부가가치세(VAT) 확인 필수
        </h2>
        <p>
          공인중개사가 일반과세자인 경우 수수료에 VAT 10%가 추가됩니다. 계약 전 반드시 확인해야 합니다.
        </p>
        <h3 className="text-foreground text-lg font-semibold tracking-tight">보증금 3억 원, VAT 포함 시(1인당)</h3>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[24rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              수수료·VAT·실납부
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  항목
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  금액
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  수수료
                </th>
                <td className="border-border border-b px-3 py-2.5">90만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  VAT(10%)
                </th>
                <td className="border-border border-b px-3 py-2.5">9만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  실납부액
                </th>
                <td className="px-3 py-2.5">99만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-jbfc-contract">
        <h2 id="guide-jbfc-contract" className="text-foreground text-xl font-semibold tracking-tight">
          계약서에 수수료 금액 명시 필수
        </h2>
        <p>
          전세 계약서 특약란에 수수료 금액과 VAT 포함 여부를 명시하지 않으면 이후 분쟁이 발생할 수 있습니다. “중개수수료는 금 OOO원(부가세
          포함/별도)으로 한다”고 기재하는 것이 안전합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-jbfc-renewal">
        <h2 id="guide-jbfc-renewal" className="text-foreground text-xl font-semibold tracking-tight">
          재계약 시 수수료 발생 여부
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              재계약 유형별 수수료
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  재계약 유형
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  수수료
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  합의 재계약(조건 변경·동일), 공인중개사 이용
                </th>
                <td className="border-border border-b px-3 py-2.5">발생</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  임대인·임차인 직접 재계약
                </th>
                <td className="border-border border-b px-3 py-2.5">없음</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 text-left font-medium">
                  묵시적 갱신
                </th>
                <td className="border-border border-b px-3 py-2.5">없음</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 text-left font-medium">
                  계약갱신청구권 행사
                </th>
                <td className="px-3 py-2.5">없음</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-jbfc-receipt">
        <h2 id="guide-jbfc-receipt" className="text-foreground text-xl font-semibold tracking-tight">
          현금영수증 요청 필수
        </h2>
        <p>
          전세 수수료도 현금영수증을 발급받으면 연말정산 소득공제(30%)에 활용할 수 있습니다. 현금·계좌이체로 납부하는 경우 공인중개사에게
          반드시 현금영수증 발급을 요청해야 합니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-jbfc-overcharge">
        <h2 id="guide-jbfc-overcharge" className="text-foreground text-xl font-semibold tracking-tight">
          상한요율 초과 청구 시 대처 방법
        </h2>
        <p>
          상한요율을 초과한 수수료 청구는 공인중개사법 위반입니다. 한국공인중개사협회 분쟁조정위원회 또는 관할 시·군·구청에 신고할 수
          있습니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-jbfc-disclaimer">
        <p className="text-muted-foreground text-sm leading-relaxed">
          ※ 중개수수료 상한요율은 시·도 조례에 따라 지역별로 다소 차이가 있을 수 있습니다. 정확한 요율은{" "}
          <a href="https://www.molit.go.kr" className="text-primary underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">
            국토교통부(molit.go.kr)
          </a>{" "}
          또는{" "}
          <a href="https://www.kar.or.kr" className="text-primary underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">
            한국공인중개사협회(kar.or.kr)
          </a>
          에서 확인할 것을 권장합니다.
        </p>
      </section>

      <aside
        className="bg-muted/40 text-muted-foreground space-y-3 rounded-lg border p-4 text-sm leading-relaxed"
        role="note"
        aria-label="중개수수료 계산기 이동"
      >
        <p>
          <Link href="/brokerage-fee-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            전세 보증금을 직접 입력하면 중개수수료를 바로 계산해볼 수 있습니다.
          </Link>
        </p>
        <p>
          재계약·갱신 세부는{" "}
          <Link href="/guide/jeonse-renewal-brokerage-fee-guide" className="text-primary font-medium underline-offset-4 hover:underline">
            전세 재계약 시 중개수수료 내야 하나
          </Link>
          가이드를 참고하세요.
        </p>
      </aside>
    </>
  );
}
