import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { repaymentTypeLabels } from "@/lib/loan-calculations";

const repaymentRows = [
  [
    repaymentTypeLabels["equal-payment"],
    "매월 동일 금액",
    "초기 이자 비중 큼",
    "월 상환 일정·예산 관리 용이",
    "총 이자는 원금균등보다 클 수 있음",
  ],
  [
    repaymentTypeLabels["equal-principal"],
    "매월 동일 원금 + 잔액 이자",
    "초기 상환액 높음",
    "총 이자 부담 상대적으로 적음",
    "초기 현금 부담 큼",
  ],
  [
    repaymentTypeLabels.bullet,
    "기간 중 이자만, 만기 원금 일시",
    "평소 부담 적음",
    "만기 원금 상환 준비 필요",
    "총 이자는 상환 기간에 따라 상이",
  ],
] as const;

const productRows = [
  ["주택담보대출", "담보로 금리가 낮은 편, 거치기간 옵션 흔함", "LTV·감정가·DSR에 따라 한도·금리 결정"],
  ["신용대출", "담보 없음, 금리 상대적으로 높을 수 있음", "신용등급·DSR이 한도·금리에 큰 영향"],
  ["전세자금대출", "전세 보증금 담보, 신용대출보다 유리한 경우 많음", "계약·담보·DSR 조건 확인 필요"],
] as const;

const notes = [
  "원리금균등·원금균등·만기일시를 선택해 월 상환액·총 이자·상환 일정표를 확인할 수 있습니다.",
  "비교 모드를 켜면 두 상환 방식의 월 상환·총 이자·그래프를 한 화면에서 대조할 수 있습니다.",
  "거치기간은 원금 상환을 미루고 이자만 납부하는 구조로, 총 이자가 늘고 거치 종료 후 상환액이 커질 수 있습니다.",
  "중도상환 수수료·취급 수수료·보험료·인지세 등은 기관·상품마다 달라 본 계산에 포함되지 않을 수 있습니다.",
  "실제 대출 조건·금리·한도는 금융기관 심사 결과를 따릅니다.",
] as const;

export function LoanCalculatorReference() {
  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle className="text-lg">대출 상환 방식 기준표</CardTitle>
        <p className="text-muted-foreground text-sm font-normal">
          상환 방식에 따라 월 부담과 총 이자가 달라집니다. 계산기에서 방식을 바꿔 보거나, 비교 모드로 두 방식을 나란히 확인해 보세요.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <section className="space-y-2">
          <p className="text-sm font-semibold">1. 상환 방식 비교</p>
          <div className="overflow-auto rounded-md border">
            <table className="w-full min-w-[800px] border-collapse text-sm">
              <caption className="sr-only">상환 방식별 특징 비교</caption>
              <thead className="bg-muted/50 border-b">
                <tr>
                  {["상환 방식", "구조", "초기 부담", "장점", "유의"].map((h, i) => (
                    <th key={h} scope="col" className={`p-2 font-medium ${i === 0 ? "text-left" : "text-left"}`}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {repaymentRows.map((row) => (
                  <tr
                    key={row[0]}
                    className="border-b transition-colors duration-150 ease-out last:border-0 hover:bg-primary/10 dark:hover:bg-primary/20"
                  >
                    {row.map((cell, i) => (
                      <td key={`${row[0]}-${i}`} className={`p-2 ${i === 0 ? "font-medium" : "text-muted-foreground"}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground text-xs leading-relaxed">
            <Link href="/?type=equal-payment#calculator" className="text-primary underline-offset-4 hover:underline">
              원리금균등
            </Link>
            ·
            <Link href="/?type=equal-principal#calculator" className="text-primary ml-1 underline-offset-4 hover:underline">
              원금균등
            </Link>
            ·
            <Link href="/?type=bullet#calculator" className="text-primary ml-1 underline-offset-4 hover:underline">
              만기일시
            </Link>
            로 바로 계산할 수 있습니다.
          </p>
        </section>

        <section className="space-y-2">
          <p className="text-sm font-semibold">2. 대출 유형별 특징 (참고)</p>
          <div className="overflow-auto rounded-md border">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <caption className="sr-only">대출 유형별 특징</caption>
              <thead className="bg-muted/50 border-b">
                <tr>
                  {["유형", "특징", "한도·금리"].map((h) => (
                    <th key={h} scope="col" className="p-2 text-left font-medium">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {productRows.map((row) => (
                  <tr
                    key={row[0]}
                    className="border-b transition-colors duration-150 ease-out last:border-0 hover:bg-primary/10 dark:hover:bg-primary/20"
                  >
                    {row.map((cell, i) => (
                      <td key={`${row[0]}-${i}`} className={`p-2 ${i === 0 ? "font-medium" : "text-muted-foreground"}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="relative overflow-hidden rounded-xl border bg-card shadow-sm">
          <div className="from-primary/15 via-primary/8 bg-gradient-to-r to-transparent px-4 py-3 sm:px-5">
            <h3 className="text-primary text-base font-semibold tracking-tight">계산기 활용 참고</h3>
            <p className="text-muted-foreground mt-1 text-xs">본 화면에서 제공하는 기능과 한계입니다.</p>
          </div>
          <ol className="list-none space-y-3 p-4 sm:p-5">
            {notes.map((text, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed">
                <span className="border-amber-800/25 bg-amber-100 text-amber-950 dark:bg-amber-950/45 dark:border-amber-700/40 dark:text-amber-50 mt-0.5 flex size-6 shrink-0 items-center justify-center rounded border text-xs font-semibold">
                  {i + 1}
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ol>
        </div>

        <p className="flex flex-wrap gap-x-3 gap-y-1">
          <Link href="/guide/equal-payment-vs-equal-principal" className="text-primary text-sm font-medium underline-offset-4 hover:underline">
            원리금균등 vs 원금균등
          </Link>
          <Link href="/guide/grace-period-explained" className="text-primary text-sm font-medium underline-offset-4 hover:underline">
            거치기간 설명
          </Link>
          <Link href="/dsr-calculator" className="text-primary text-sm font-medium underline-offset-4 hover:underline">
            DSR 계산기
          </Link>
          <Link href="/#faq" className="text-primary text-sm font-medium underline-offset-4 hover:underline">
            자주 묻는 질문
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
