import { Suspense } from "react";
import { BrokerageFeeCalculator } from "@/components/calculator/brokerage-fee-calculator";

function CalculatorFallback() {
  return (
    <div className="text-muted-foreground py-12 text-center text-sm" role="status" aria-live="polite">
      계산기를 불러오는 중입니다…
    </div>
  );
}

export function WolseBrokerageFeeCalculatorSection() {
  return (
    <section className="scroll-mt-24 py-10 sm:py-14" aria-labelledby="wolse-brokerage-fee-calculator-heading">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="wolse-brokerage-fee-calculator-heading" className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">
          월세 중개수수료 계산하기
        </h2>
        <Suspense fallback={<CalculatorFallback />}>
          <BrokerageFeeCalculator variant="wolse" />
        </Suspense>
      </div>
    </section>
  );
}
