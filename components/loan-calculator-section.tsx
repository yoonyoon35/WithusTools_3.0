import { Suspense } from "react";
import { AllCreditAffiliateCta } from "@/components/affiliate/allcredit-cta";
import { LoanCalculator } from "@/components/calculator/loan-calculator";

function CalculatorFallback() {
  return (
    <div className="text-muted-foreground py-12 text-center text-sm" role="status" aria-live="polite">
      계산기를 불러오는 중입니다…
    </div>
  );
}

export function LoanCalculatorSection() {
  return (
    <section className="scroll-mt-24 py-10 sm:py-14" aria-labelledby="calculator-heading">
      <div className="mx-auto max-w-6xl px-4">
        <h2
          id="calculator-heading"
          className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl"
        >
          대출 이자 계산기
        </h2>
        <Suspense fallback={<CalculatorFallback />}>
          <LoanCalculator />
        </Suspense>
        <AllCreditAffiliateCta className="mt-8 w-full" />
      </div>
    </section>
  );
}
