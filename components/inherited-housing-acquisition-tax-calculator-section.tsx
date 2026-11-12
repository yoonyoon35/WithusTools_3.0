import { Suspense } from "react";
import { AcquisitionTaxCalculator } from "@/components/calculator/acquisition-tax-calculator";

function CalculatorFallback() {
  return (
    <div className="text-muted-foreground py-12 text-center text-sm" role="status" aria-live="polite">
      계산기를 불러오는 중입니다…
    </div>
  );
}

export function InheritedHousingAcquisitionTaxCalculatorSection() {
  return (
    <section
      className="scroll-mt-24 py-10 sm:py-14"
      aria-labelledby="inherited-housing-acquisition-tax-calculator-heading"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2
          id="inherited-housing-acquisition-tax-calculator-heading"
          className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl"
        >
          상속 주택 취득세 계산하기
        </h2>
        <Suspense fallback={<CalculatorFallback />}>
          <AcquisitionTaxCalculator variant="inherited-housing" />
        </Suspense>
      </div>
    </section>
  );
}
