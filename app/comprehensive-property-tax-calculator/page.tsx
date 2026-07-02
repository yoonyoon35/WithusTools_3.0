import type { Metadata } from "next";
import { CalculatorPageShell } from "@/components/calculator-page-shell";
import { ComprehensivePropertyTaxCalculatorSection } from "@/components/comprehensive-property-tax-calculator-section";
import { comprehensivePropertyTaxCalculatorFaqItems } from "@/lib/faq-data";
import { createPageMetadata } from "@/lib/metadata";

const path = "/comprehensive-property-tax-calculator";
const pageTitle = "종합부동산세 계산기";
const pageDescription =
  "주택·토지 공시가격으로 재산세·지방교육세·종합부동산세·농어촌특별세를 함께 계산하고 연간 보유세 합계를 확인합니다.";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({ title: pageTitle, description: pageDescription, path });
}

export default function ComprehensivePropertyTaxCalculatorPage() {
  return (
    <CalculatorPageShell
      path={path}
      title={pageTitle}
      intro={
        <>
          국세청 세액계산 흐름도·종합부동산세 신고서 별지3호 부표·지방세법 표준세율을 기준으로 재산세·지방교육세·
          종부세·농특세를 산출합니다. 1세대 1주택 재산세 공정(45%)·시행령 제4조의2 공제할 재산세 공식을 반영했습니다.
          홈택스·관할 지자체 고지세액과 대조해 확인하세요.
        </>
      }
      faqItems={comprehensivePropertyTaxCalculatorFaqItems}
    >
      <ComprehensivePropertyTaxCalculatorSection />
    </CalculatorPageShell>
  );
}
