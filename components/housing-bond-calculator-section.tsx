import { Suspense } from "react";
import { HousingBondCalculator } from "@/components/calculator/housing-bond-calculator";

function CalculatorFallback() {
  return (
    <div className="text-muted-foreground py-12 text-center text-sm" role="status" aria-live="polite">
      계산기를 불러오는 중입니다…
    </div>
  );
}

export function HousingBondCalculatorSection() {
  return (
    <section className="scroll-mt-24 py-10 sm:py-14" aria-labelledby="housing-bond-calculator-heading">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="housing-bond-calculator-heading" className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">
          국민주택채권 계산기
        </h2>
        <Suspense fallback={<CalculatorFallback />}>
          <HousingBondCalculator />
        </Suspense>
      </div>
    </section>
  );
}
