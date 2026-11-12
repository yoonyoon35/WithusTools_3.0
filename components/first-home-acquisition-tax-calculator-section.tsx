import { Suspense } from "react";
import { AcquisitionTaxCalculator } from "@/components/calculator/acquisition-tax-calculator";

function CalculatorFallback() {
  return (
    <div className="text-muted-foreground py-12 text-center text-sm" role="status" aria-live="polite">
      계산기를 불러오는 중입니다…
    </div>
  );
}

export function FirstHomeAcquisitionTaxCalculatorSection() {
  return (
    <section
      className="scroll-mt-24 py-10 sm:py-14"
      aria-labelledby="first-home-acquisition-tax-calculator-heading"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2
          id="first-home-acquisition-tax-calculator-heading"
          className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl"
        >
          생애최초 취득세 감면 계산하기
        </h2>
        <Suspense fallback={<CalculatorFallback />}>
          <AcquisitionTaxCalculator variant="first-home" />
        </Suspense>
      </div>
    </section>
  );
}
