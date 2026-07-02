import type { Metadata } from "next";
import { CalculatorPageShell } from "@/components/calculator-page-shell";
import { AcquisitionTaxCalculatorSection } from "@/components/acquisition-tax-calculator-section";
import { acquisitionTaxCalculatorFaqItems } from "@/lib/faq-data";
import { createPageMetadata } from "@/lib/metadata";

const path = "/acquisition-tax-calculator";
const pageTitle = "취득세 계산기";
const pageDescription =
  "주택·주택 외·농지 등 자산 구분과 취득 유형에 따라 취득세·지방교육세·농어촌특별세를 계산합니다. 하단 가이드에서 신축·분양 아파트 금액별 예시도 확인할 수 있습니다.";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({ title: pageTitle, description: pageDescription, path });
}

export default function AcquisitionTaxCalculatorPage() {
  return (
    <CalculatorPageShell
      path={path}
      title={pageTitle}
      intro={
        <>
          자산 구분(주택, 주택 외, 농지)과 취득 유형별 기준을 하단 기준표·가이드로 함께 제공합니다. 신축·분양 아파트 등
          금액별 예시는 관련 가이드에서 이어서 볼 수 있습니다. 계산 결과는 참고용이며 실제 신고 세액은 관할 지자체 및
          세무전문가 확인이 필요합니다.
        </>
      }
      faqItems={acquisitionTaxCalculatorFaqItems}
    >
      <AcquisitionTaxCalculatorSection />
    </CalculatorPageShell>
  );
}
