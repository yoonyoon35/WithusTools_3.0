import type { Metadata } from "next";
import { CalculatorPageShell } from "@/components/calculator-page-shell";
import { ComprehensiveIncomeTaxCalculatorSection } from "@/components/comprehensive-income-tax-calculator-section";
import { comprehensiveIncomeTaxCalculatorFaqItems } from "@/lib/faq-data";
import { createPageMetadata } from "@/lib/metadata";

const path = "/comprehensive-income-tax-calculator";
const pageTitle = "종합소득세 계산기";
const pageDescription =
  "종합소득세 세율·경비율·중간예납으로 산출세액, 추계 사업소득, 납부·환급세액, 중간예납세액을 계산합니다.";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({ title: pageTitle, description: pageDescription, path });
}

export default function ComprehensiveIncomeTaxCalculatorPage() {
  return (
    <CalculatorPageShell
      path={path}
      title={pageTitle}
      intro={
        <>
          종합소득세 산출세액, 경비율 사업소득, 가산세, 중간예납세액을 계산합니다. 소득공제와
          세액공제는 합계를 넣고, 업종 경비율은 해당 업종 비율을 직접 입력합니다. 신고 전에는
          홈택스와 맞추세요.
        </>
      }
      faqItems={comprehensiveIncomeTaxCalculatorFaqItems}
    >
      <ComprehensiveIncomeTaxCalculatorSection />
    </CalculatorPageShell>
  );
}
