import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { repaymentTypeLabels } from "@/lib/loan-calculations";

function LoanReferenceTable({
  caption,
  headers,
  rows,
  minWidth,
  lastColumnRight = false,
}: {
  caption: string;
  headers: string[];
  rows: readonly (readonly string[])[];
  minWidth: string;
  lastColumnRight?: boolean;
}) {
  return (
    <div className="overflow-auto rounded-md border">
      <table className={`w-full ${minWidth} border-collapse text-sm`}>
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-muted/50 border-b">
          <tr>
            {headers.map((h, i) => (
              <th
                key={h}
                scope="col"
                className={`p-2 font-medium ${lastColumnRight && i === headers.length - 1 ? "text-right" : "text-left"}`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row[0]}
              className="border-b transition-colors duration-150 ease-out last:border-0 hover:bg-primary/10 dark:hover:bg-primary/20"
            >
              {row.map((cell, i) => (
                <td
                  key={`${row[0]}-${i}`}
                  className={`p-2 ${i === 0 ? "font-medium" : "text-muted-foreground"} ${lastColumnRight && i === headers.length - 1 ? "text-right" : ""}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const repaymentCompareRows = [
  [
    repaymentTypeLabels["equal-payment"],
    "매월 동일 금액",
    "일정",
    "초기 적고 점차 증가",
    "초기 부담 낮음",
    "총 이자 상대적으로 많음",
    "월 상환 일정·예산 관리 용이",
  ],
  [
    repaymentTypeLabels["equal-principal"],
    "매월 동일 원금 + 잔액 이자",
    "초기 높고 점차 감소",
    "일정",
    "초기 부담 높음",
    "총 이자 상대적으로 적음",
    "장기 이자 절감에 유리",
  ],
  [
    repaymentTypeLabels.bullet,
    "기간 중 이자만, 만기 원금 일시",
    "이자만(만기 전)",
    "없음(만기 전)",
    "평소 부담 적음",
    "만기 원금·이자 일시 부담",
    "단기 자금·투자 목적 등(은행 심사 별도)",
  ],
] as const;

const formulaRows = [
  [
    repaymentTypeLabels["equal-payment"],
    "월 이자 = 잔액 × (연이율 ÷ 12)",
    "월 상환 = PMT(연이율/12, 상환개월, -원금) — 거치기간 제외 후 동일 금액",
    "거치기간 중에는 이자만 납부",
  ],
  [
    repaymentTypeLabels["equal-principal"],
    "월 원금 = 대출원금 ÷ 상환개월",
    "월 이자 = 잔액 × (연이율 ÷ 12)",
    "월 상환 = 월 원금 + 월 이자(매월 감소)",
  ],
  [
    repaymentTypeLabels.bullet,
    "매월 이자 = 원금 × (연이율 ÷ 12)",
    "만기 회차 = 원금 + 마지막 이자",
    "거치기간 개념 없음(만기 전 원금 상환 없음)",
  ],
] as const;

const gracePeriodRows = [
  ["거치기간 없음", "처음부터 원금+이자 상환", "월 상환액 일정(원리금균등 기준)", "총 이자 최소"],
  ["거치 1년", "1년간 이자만, 이후 본 상환", "거치 중 낮음 → 본 상환 시작 후 증가", "총 이자 증가"],
  ["거치 2년", "2년간 이자만, 이후 본 상환", "거치 중 낮음 → 본 상환 시작 후 더 증가", "총 이자 더 증가"],
  ["거치 3년", "3년간 이자만, 이후 본 상환", "본 상환 기간 단축으로 월 부담 최대", "총 이자 가장 많음"],
] as const;

const graceExampleRows = [
  ["거치기간 없음", "약 143만 원", "약 143만 원(동일)", "약 2억 1,500만 원"],
  ["거치기간 1년", "약 100만 원", "약 149만 원", "약 2억 2,200만 원"],
  ["거치기간 2년", "약 100만 원", "약 155만 원", "약 2억 2,900만 원"],
  ["거치기간 3년", "약 100만 원", "약 162만 원", "약 2억 3,600만 원"],
] as const;

const rateTypeRows = [
  ["고정금리", "대출 기간 중 약정 금리 유지", "금리 인상 리스크 적음", "초기 금리가 변동보다 높을 수 있음"],
  ["변동금리", "기준금리 연동, 주기적으로 재산정", "초기 금리가 낮을 수 있음", "금리 상승 시 상환 부담 증가"],
  ["혼합형(혼합금리)", "일정 기간 고정 후 변동 전환", "초기 예측 가능 + 이후 유연", "전환 시점·가산금리 조건 확인 필요"],
] as const;

const productRows = [
  ["주택담보대출", "담보로 금리가 낮은 편, 거치기간 옵션 흔함", "LTV·감정가·DSR에 따라 한도·금리 결정"],
  ["신용대출", "담보 없음, 금리 상대적으로 높을 수 있음", "신용등급·DSR이 한도·금리에 큰 영향"],
  ["전세자금대출", "전세 보증금 담보, 신용대출보다 유리한 경우 많음", "계약·담보·DSR 조건 확인 필요"],
  ["마이너스통장", "한도 내 수시 인출·상환", "한도·이자·DSR 산정 방식이 상품별로 상이"],
] as const;

const excludedCostRows = [
  ["취급(중개) 수수료", "대출 실행 시 일회성", "상품·기관별 상이, 본 계산 미포함"],
  ["중도상환 수수료", "조기 상환 시", "잔존 기간·금리 유형에 따라 다름"],
  ["인지세·보증료·보험료", "실행·유지 과정", "담보·상품 종류에 따라 발생"],
  ["연체 이자", "연체 발생 시", "약정 금리 + 가산"],
] as const;

const notes = [
  "원리금균등·원금균등·만기일시를 선택해 월 상환액·총 이자·상환 일정표를 확인할 수 있습니다.",
  "비교 모드를 켜면 두 상환 방식의 월 상환·총 이자·그래프를 한 화면에서 대조할 수 있습니다.",
  "거치기간은 원금 상환을 미루고 이자만 납부하는 구조로, 총 이자가 늘고 거치 종료 후 상환액이 커질 수 있습니다.",
  "만기일시는 DSR 산정 시 금융기관별로 연간 원금 상환액을 다르게 반영할 수 있습니다.",
  "중도상환 수수료·취급 수수료·보험료·인지세 등은 기관·상품마다 달라 본 계산에 포함되지 않을 수 있습니다.",
  "실제 대출 조건·금리·한도는 금융기관 심사 결과를 따릅니다.",
] as const;

export function LoanCalculatorReference() {
  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle className="text-lg">대출 상환 기준표 및 산정 참고</CardTitle>
        <p className="text-muted-foreground text-sm font-normal">
          상환 방식·거치기간·금리 유형에 따라 월 부담과 총 이자가 달라집니다. 아래 표는 본 계산기에 적용된 산식과 일반적인
          기준을 요약한 참고용입니다.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <section className="space-y-2">
          <p className="text-sm font-semibold">1. 상환 방식 비교</p>
          <LoanReferenceTable
            caption="상환 방식별 특징 비교"
            headers={["상환 방식", "구조", "월 상환액", "월 원금", "초기 부담", "총 이자", "특징"]}
            rows={repaymentCompareRows}
            minWidth="min-w-[960px]"
          />
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
          <p className="text-sm font-semibold">2. 본 계산기 산출 공식</p>
          <LoanReferenceTable
            caption="상환 방식별 산출 공식"
            headers={["상환 방식", "이자", "상환액", "비고"]}
            rows={formulaRows}
            minWidth="min-w-[720px]"
          />
          <p className="text-muted-foreground text-xs leading-relaxed">
            월 이자는 잔액 기준 단리(연이율 ÷ 12)로 산출합니다. 실제 금융기관은 반올림·원 단위 절사 등으로 소액 차이가 날 수
            있습니다.
          </p>
        </section>

        <section className="space-y-2">
          <p className="text-sm font-semibold">3. 거치기간 기준</p>
          <LoanReferenceTable
            caption="거치기간별 상환 구조"
            headers={["거치기간", "상환 구조", "월 상환 특성", "총 이자"]}
            rows={gracePeriodRows}
            minWidth="min-w-[720px]"
          />
          <p className="text-muted-foreground text-xs leading-relaxed">
            거치기간은 원리금균등·원금균등에만 적용됩니다. 만기일시는 거치기간 입력이 비활성화됩니다.
          </p>
        </section>

        <section className="space-y-2">
          <p className="text-sm font-semibold">4. 거치기간 예시 (원리금균등, 참고)</p>
          <p className="text-muted-foreground text-xs">대출 원금 3억 원 · 연 4% · 30년 · 원리금균등상환 가정</p>
          <LoanReferenceTable
            caption="거치기간별 월 상환액·총 이자 예시"
            headers={["구분", "거치기간 중 월 납부", "본 상환 시작 후 월 납부", "총 이자(참고)"]}
            rows={graceExampleRows}
            minWidth="min-w-[720px]"
            lastColumnRight
          />
        </section>

        <section className="space-y-2">
          <p className="text-sm font-semibold">5. 금리 유형 (참고)</p>
          <LoanReferenceTable
            caption="고정·변동·혼합 금리 특징"
            headers={["금리 유형", "구조", "장점", "유의"]}
            rows={rateTypeRows}
            minWidth="min-w-[720px]"
          />
          <p className="text-muted-foreground text-xs leading-relaxed">
            본 계산기는 입력한 연 이자율을 고정 가정으로 적용합니다. 변동·혼합 상품은 금리 변동 시 결과가 달라집니다.
          </p>
        </section>

        <section className="space-y-2">
          <p className="text-sm font-semibold">6. 대출 유형별 특징 (참고)</p>
          <LoanReferenceTable
            caption="대출 유형별 특징"
            headers={["유형", "특징", "한도·금리"]}
            rows={productRows}
            minWidth="min-w-[640px]"
          />
        </section>

        <section className="space-y-2">
          <p className="text-sm font-semibold">7. 계산에 포함되지 않는 비용 (참고)</p>
          <LoanReferenceTable
            caption="별도 발생 가능 비용"
            headers={["항목", "발생 시점", "비고"]}
            rows={excludedCostRows}
            minWidth="min-w-[560px]"
          />
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

        <p className="text-muted-foreground text-xs leading-relaxed">
          기준표는 일반적인 상환 구조와 본 계산기 산식을 사용자가 빠르게 대조할 수 있도록 정리한 참고용입니다. DSR·LTV·스트레스
          DSR 등 한도 규정은 별도이며, 확정 조건은 신청 금융기관에서 확인해야 합니다.
        </p>

        <p className="flex flex-wrap gap-x-3 gap-y-1">
          <Link href="/guide/equal-payment-vs-equal-principal" className="text-primary text-sm font-medium underline-offset-4 hover:underline">
            원리금균등 vs 원금균등
          </Link>
          <Link href="/guide/grace-period-explained" className="text-primary text-sm font-medium underline-offset-4 hover:underline">
            거치기간 설명
          </Link>
          <Link href="/guide/variable-vs-fixed-rate-2026" className="text-primary text-sm font-medium underline-offset-4 hover:underline">
            고정 vs 변동 금리
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
