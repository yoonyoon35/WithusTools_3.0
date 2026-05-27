import { Suspense } from "react";
import { PrepaymentFeeCalculator } from "@/components/calculator/prepayment-fee-calculator";

function CalculatorFallback() {
  return (
    <div className="text-muted-foreground py-12 text-center text-sm" role="status" aria-live="polite">
      계산기를 불러오는 중입니다…
    </div>
  );
}

export function PrepaymentFeeCalculatorSection() {
  return (
    <section className="scroll-mt-24 py-10 sm:py-14" aria-labelledby="prepayment-fee-calculator-heading">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="prepayment-fee-calculator-heading" className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">
          중도상환 수수료 계산기
        </h2>
        <Suspense fallback={<CalculatorFallback />}>
          <PrepaymentFeeCalculator />
        </Suspense>
      </div>
    </section>
  );
}
