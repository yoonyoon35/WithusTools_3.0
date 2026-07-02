import Link from "next/link";

export const wolseBrokerageFeeCalculation2026GuideMeta = {
  slug: "wolse-brokerage-fee-calculation-2026-guide",
  title: "월세 중개수수료 계산법",
  description:
    "2026년 4월 기준 월세 환산 거래금액(보증금+월세×100 또는 ×70), 전세와 동일한 상한요율표 적용, 조건별 1인당 수수료·전세 대비·VAT·흔한 실수·오피스텔 요율을 표로 정리했습니다.",
  updated: "2026년 5월 11일",
} as const;

export function WolseBrokerageFeeCalculation2026GuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-wbfc-intro">
        <h2 id="guide-wbfc-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 4월 기준
        </h2>
        <p>
          월세 중개수수료는 전세와 달리 보증금과 월세를 합산한 환산 거래금액을 기준으로 계산합니다. 환산 방식이 다소 복잡해 실제
          납부액을 예상하기 어려운 경우가 많습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-wbfc-formula">
        <h2 id="guide-wbfc-formula" className="text-foreground text-xl font-semibold tracking-tight">
          월세 거래금액 환산 공식
        </h2>
        <p className="bg-muted/30 rounded-md border border-border px-3 py-2 font-mono text-sm">
          환산 거래금액 = 보증금 + (월세 × 100)
        </p>
        <p className="text-muted-foreground text-sm">단, 환산액이 5,000만 원 미만이면 보증금 + (월세 × 70)</p>
        <p>
          월세에 100을 곱하는 이유는 연간 임대료(월세 × 12)를 기준금리(연 1.2% 수준)로 환산한 원금 개념입니다. 환산 거래금액이
          5,000만 원을 넘지 않는 소액 계약은 월세에 70을 곱해 계산합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-wbfc-convert-examples">
        <h2 id="guide-wbfc-convert-examples" className="text-foreground text-xl font-semibold tracking-tight">
          환산 거래금액 계산 예시
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              보증금·월세별 환산 거래금액
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
                  환산 거래금액 계산
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  환산 거래금액
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-border border-b px-3 py-2.5">500만 원</td>
                <td className="border-border border-b px-3 py-2.5">30만 원</td>
                <td className="border-border border-b px-3 py-2.5">500 + (30 × 70) = 2,600만 원</td>
                <td className="border-border border-b px-3 py-2.5">2,600만 원(5,000만 원 미만)</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">1,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">50만 원</td>
                <td className="border-border border-b px-3 py-2.5">1,000 + (50 × 100) = 6,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">6,000만 원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">3,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">70만 원</td>
                <td className="border-border border-b px-3 py-2.5">3,000 + (70 × 100) = 10,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">1억 원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">5,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">100만 원</td>
                <td className="border-border border-b px-3 py-2.5">5,000 + (100 × 100) = 15,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">1억 5,000만 원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">1억 원</td>
                <td className="border-border border-b px-3 py-2.5">100만 원</td>
                <td className="border-border border-b px-3 py-2.5">10,000 + (100 × 100) = 20,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">2억 원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">1억 원</td>
                <td className="border-border border-b px-3 py-2.5">150만 원</td>
                <td className="border-border border-b px-3 py-2.5">10,000 + (150 × 100) = 25,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">2억 5,000만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="px-3 py-2.5">2억 원</td>
                <td className="px-3 py-2.5">100만 원</td>
                <td className="px-3 py-2.5">20,000 + (100 × 100) = 30,000만 원</td>
                <td className="px-3 py-2.5">3억 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-wbfc-rates">
        <h2 id="guide-wbfc-rates" className="text-foreground text-xl font-semibold tracking-tight">
          환산 거래금액에 전세 요율표 적용
        </h2>
        <p>환산 거래금액이 산출되면 전세 수수료와 동일한 요율표를 적용합니다.</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              환산 거래금액 구간별 상한요율·한도액
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  환산 거래금액
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

      <section className="space-y-4" aria-labelledby="guide-wbfc-fee-examples">
        <h2 id="guide-wbfc-fee-examples" className="text-foreground text-xl font-semibold tracking-tight">
          월세 조건별 수수료 계산 예시
        </h2>
        <p className="text-muted-foreground text-sm">임대인·임차인 각각 부담 기준(1인당)</p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              환산액·요율별 1인당 중개수수료(상한)
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
                  요율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  1인당 수수료
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-border border-b px-3 py-2.5">500만 원</td>
                <td className="border-border border-b px-3 py-2.5">30만 원</td>
                <td className="border-border border-b px-3 py-2.5">2,600만 원</td>
                <td className="border-border border-b px-3 py-2.5">0.5%</td>
                <td className="border-border border-b px-3 py-2.5">13만 원(한도 20만 원 이내)</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">1,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">40만 원</td>
                <td className="border-border border-b px-3 py-2.5">5,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">0.4%</td>
                <td className="border-border border-b px-3 py-2.5">20만 원(한도 30만 원 이내)</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">1,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">50만 원</td>
                <td className="border-border border-b px-3 py-2.5">6,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">0.4%</td>
                <td className="border-border border-b px-3 py-2.5">24만 원(한도 30만 원 이내)</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">2,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">80만 원</td>
                <td className="border-border border-b px-3 py-2.5">1억 원</td>
                <td className="border-border border-b px-3 py-2.5">0.3%</td>
                <td className="border-border border-b px-3 py-2.5">30만 원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">3,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">70만 원</td>
                <td className="border-border border-b px-3 py-2.5">1억 원</td>
                <td className="border-border border-b px-3 py-2.5">0.3%</td>
                <td className="border-border border-b px-3 py-2.5">30만 원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">5,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">100만 원</td>
                <td className="border-border border-b px-3 py-2.5">1억 5,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">0.3%</td>
                <td className="border-border border-b px-3 py-2.5">45만 원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">1억 원</td>
                <td className="border-border border-b px-3 py-2.5">100만 원</td>
                <td className="border-border border-b px-3 py-2.5">2억 원</td>
                <td className="border-border border-b px-3 py-2.5">0.3%</td>
                <td className="border-border border-b px-3 py-2.5">60만 원</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">1억 원</td>
                <td className="border-border border-b px-3 py-2.5">150만 원</td>
                <td className="border-border border-b px-3 py-2.5">2억 5,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">0.3%</td>
                <td className="border-border border-b px-3 py-2.5">75만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="px-3 py-2.5">2억 원</td>
                <td className="px-3 py-2.5">150만 원</td>
                <td className="px-3 py-2.5">3억 5,000만 원</td>
                <td className="px-3 py-2.5">0.3%</td>
                <td className="px-3 py-2.5">105만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-wbfc-under50">
        <h2 id="guide-wbfc-under50" className="text-foreground text-xl font-semibold tracking-tight">
          5,000만 원 미만 구간 계산 예시(월세 × 70 적용)
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              소액 환산·수수료(상한)
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
                  요율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  수수료
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-border border-b px-3 py-2.5">0원</td>
                <td className="border-border border-b px-3 py-2.5">50만 원</td>
                <td className="border-border border-b px-3 py-2.5">0 + (50 × 70) = 3,500만 원</td>
                <td className="border-border border-b px-3 py-2.5">0.5%</td>
                <td className="border-border border-b px-3 py-2.5">17만 5천 원(한도 20만 원 이내)</td>
              </tr>
              <tr>
                <td className="border-border border-b px-3 py-2.5">500만 원</td>
                <td className="border-border border-b px-3 py-2.5">40만 원</td>
                <td className="border-border border-b px-3 py-2.5">500 + (40 × 70) = 3,300만 원</td>
                <td className="border-border border-b px-3 py-2.5">0.5%</td>
                <td className="border-border border-b px-3 py-2.5">16만 5천 원</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="px-3 py-2.5">1,000만 원</td>
                <td className="px-3 py-2.5">30만 원</td>
                <td className="px-3 py-2.5">1,000 + (30 × 70) = 3,100만 원</td>
                <td className="px-3 py-2.5">0.5%</td>
                <td className="px-3 py-2.5">15만 5천 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-wbfc-vs-jeonse">
        <h2 id="guide-wbfc-vs-jeonse" className="text-foreground text-xl font-semibold tracking-tight">
          전세 전환 시 수수료 비교
        </h2>
        <p>같은 주거비용이라도 전세와 월세 계약 방식에 따라 수수료가 달라질 수 있습니다.</p>
        <p className="text-muted-foreground text-sm">
          시세 3억 원 아파트, 전세 2억 5,000만 원 vs 월세 보증금 5,000만 원·월 80만 원 비교
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              전세·월세 1인당 수수료(상한)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  구분
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  거래금액
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  요율
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  수수료
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  전세 2억 5,000만 원
                </th>
                <td className="border-border border-b px-3 py-2.5">2억 5,000만 원</td>
                <td className="border-border border-b px-3 py-2.5">0.3%</td>
                <td className="border-border border-b px-3 py-2.5">75만 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  월세 5,000만 원·80만 원
                </th>
                <td className="px-3 py-2.5">5,000 + (80 × 100) = 1억 3,000만 원</td>
                <td className="px-3 py-2.5">0.3%</td>
                <td className="px-3 py-2.5">39만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>같은 주택이라도 월세 계약이 전세보다 수수료가 낮게 계산되는 경우가 많습니다.</p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-wbfc-vat">
        <h2 id="guide-wbfc-vat" className="text-foreground text-xl font-semibold tracking-tight">
          부가가치세(VAT) 확인 필수
        </h2>
        <p>공인중개사가 일반과세자인 경우 수수료에 VAT 10%가 추가됩니다.</p>
        <h3 className="text-foreground text-lg font-semibold tracking-tight">
          보증금 5,000만 원, 월세 100만 원, VAT 포함 시(1인당)
        </h3>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              환산·수수료·VAT·실납부
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
                  환산 거래금액
                </th>
                <td className="border-border border-b px-3 py-2.5">1억 5,000만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  수수료(0.3%)
                </th>
                <td className="border-border border-b px-3 py-2.5">45만 원</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  VAT(10%)
                </th>
                <td className="border-border border-b px-3 py-2.5">4만 5천 원</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  실납부액
                </th>
                <td className="px-3 py-2.5">49만 5천 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-wbfc-mistakes">
        <h2 id="guide-wbfc-mistakes" className="text-foreground text-xl font-semibold tracking-tight">
          자주 하는 계산 실수
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              실수 유형과 올바른 처리
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  실수 유형
                </th>
                <th scope="col" className="border-border border-b px-3 py-2.5 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  월세에 12 곱함
                </th>
                <td className="border-border border-b px-3 py-2.5">연간 임대료로 계산하는 오류. 월세 × 100 또는 × 70이 정확합니다.</td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  5,000만 원 기준 미확인
                </th>
                <td className="border-border border-b px-3 py-2.5">
                  환산액 5,000만 원 미만이면 월세 × 70, 이상이면 × 100입니다.
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-border border-b px-3 py-2.5 font-medium">
                  보증금만으로 계산
                </th>
                <td className="border-border border-b px-3 py-2.5">보증금에 환산 월세를 더한 금액이 기준입니다.</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  상한요율을 고정값으로 착각
                </th>
                <td className="px-3 py-2.5">상한 이내에서 협의 가능합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="guide-wbfc-officetel">
        <h2 id="guide-wbfc-officetel" className="text-foreground text-xl font-semibold tracking-tight">
          오피스텔 월세 수수료
        </h2>
        <p>
          주거용 오피스텔(전용 85㎡ 이하)은 일반 주택과 동일한 임대차 요율(0.4% 상한)이 적용됩니다. 업무용 오피스텔은 거래금액의
          0.9% 이내에서 협의합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground">
              오피스텔 임대차 상한요율
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
                  주거용 오피스텔 임대차
                </th>
                <td className="border-border border-b px-3 py-2.5">0.4%</td>
              </tr>
              <tr className="bg-muted/20">
                <th scope="row" className="px-3 py-2.5 font-medium">
                  업무용 오피스텔 임대차
                </th>
                <td className="px-3 py-2.5">0.9% 이내 협의</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="guide-wbfc-contract">
        <h2 id="guide-wbfc-contract" className="text-foreground text-xl font-semibold tracking-tight">
          계약서 수수료 명시 및 현금영수증 요청
        </h2>
        <p>
          월세 계약 시에도 계약서 특약란에 수수료 금액과 VAT 포함 여부를 명시해야 합니다. 현금·계좌이체로 납부하는 경우 현금영수증을
          발급받으면 연말정산 소득공제(30%)에 활용할 수 있습니다.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="guide-wbfc-disclaimer">
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
            보증금과 월세를 직접 입력하면 중개수수료를 바로 계산해볼 수 있습니다.
          </Link>
        </p>
        <p>
          전세 보증금만 있는 경우는{" "}
          <Link href="/guide/jeonse-brokerage-fee-calculation-2026-guide" className="text-primary font-medium underline-offset-4 hover:underline">
            전세 중개수수료 계산법
          </Link>
          가이드를 참고하세요.
        </p>
      </aside>
    </>
  );
}
