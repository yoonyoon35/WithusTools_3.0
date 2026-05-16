import { Suspense } from "react";
import { DsrCalculator } from "@/components/calculator/dsr-calculator";
import { AllCreditAffiliateCta } from "@/components/affiliate/allcredit-cta";

function CalculatorFallback() {
  return (
    <div className="text-muted-foreground py-12 text-center text-sm" role="status" aria-live="polite">
      계산기를 불러오는 중입니다…
    </div>
  );
}

export function DsrCalculatorSection() {
  return (
    <section className="scroll-mt-24 py-10 sm:py-14" aria-labelledby="dsr-calculator-heading">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="dsr-calculator-heading" className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">
          DSR 계산기
        </h2>
        <Suspense fallback={<CalculatorFallback />}>
          <DsrCalculator />
        </Suspense>
        <AllCreditAffiliateCta
          className="mt-8 w-full"
          description="DSR·한도 심사 전, 신용등급과 연체·이용 현황을 무료로 확인해 보세요."
        />
      </div>
    </section>
  );
}
