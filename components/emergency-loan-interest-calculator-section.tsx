import { Suspense } from "react";
import { EmergencyLoanInterestCalculator } from "@/components/calculator/emergency-loan-interest-calculator";

function CalculatorFallback() {
  return (
    <div className="text-muted-foreground py-12 text-center text-sm" role="status" aria-live="polite">
      계산기를 불러오는 중입니다…
    </div>
  );
}

export function EmergencyLoanInterestCalculatorSection() {
  return (
    <section className="scroll-mt-24 py-10 sm:py-14" aria-labelledby="emergency-loan-interest-calculator-heading">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="emergency-loan-interest-calculator-heading" className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">
          비상금대출 이자 계산하기
        </h2>
        <Suspense fallback={<CalculatorFallback />}>
          <EmergencyLoanInterestCalculator />
        </Suspense>
      </div>
    </section>
  );
}
