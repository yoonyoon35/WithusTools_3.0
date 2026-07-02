import type { Metadata } from "next";
import { CalculatorPageShell } from "@/components/calculator-page-shell";
import { PrepaymentFeeCalculatorSection } from "@/components/prepayment-fee-calculator-section";
import { prepaymentFeeCalculatorFaqItems } from "@/lib/faq-data";
import { PREPAYMENT_FEE_FORMULA } from "@/lib/prepayment-fee-calculations";
import { createPageMetadata } from "@/lib/metadata";

const path = "/prepayment-fee-calculator";
const pageTitle = "중도상환 수수료 계산기";
const pageDescription =
  "중도상환 원금, 수수료율, 대출기간, 경과 기간을 입력해 중도상환 수수료를 계산합니다. 면제 기간 경과 여부도 함께 확인할 수 있습니다.";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({ title: pageTitle, description: pageDescription, path });
}

export default function PrepaymentFeeCalculatorPage() {
  return (
    <CalculatorPageShell
      path={path}
      title={pageTitle}
      intro={
        <>
          {PREPAYMENT_FEE_FORMULA} 공식을 반영했습니다. 면제 기간이 있는 상품은 잔여기간·대출기간 모두 면제 기간
          기준으로 계산합니다. 하단에 수수료율 범위와 면제·감면 조건을 함께 두었습니다. 계산 결과는 참고용이며, 실제
          수수료는 대출 계약서·금융기관 확인이 필요합니다.
        </>
      }
      faqItems={prepaymentFeeCalculatorFaqItems}
    >
      <PrepaymentFeeCalculatorSection />
    </CalculatorPageShell>
  );
}
