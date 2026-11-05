import type { Metadata } from "next";
import { CalculatorPageShell } from "@/components/calculator-page-shell";
import { ComprehensivePropertyTaxCalculatorSection } from "@/components/comprehensive-property-tax-calculator-section";
import { comprehensivePropertyTaxCalculatorFaqItems } from "@/lib/faq-data";
import { createPageMetadata } from "@/lib/metadata";

const path = "/comprehensive-property-tax-calculator";
const pageTitle = "종합부동산세 계산기";
const metaTitle = "종합부동산세 계산기 - 1주택·다주택 보유세";
const pageDescription =
  "주택·토지 공시가격으로 재산세·지방교육세·종합부동산세·농어촌특별세를 함께 계산하고 연간 보유세 합계를 확인합니다.";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({ title: metaTitle, description: pageDescription, path });
}

export default function ComprehensivePropertyTaxCalculatorPage() {
  return (
    <CalculatorPageShell
      path={path}
      title={pageTitle}
      intro={
        <>
          공시가격을 넣으면 재산세·지방교육세·종합부동산세·농어촌특별세를 한 번에 계산해 연간 보유세 합계를 보여
          줍니다. 1세대 1주택 재산세 공정시장가액비율(45%)과 종부세에서 빼는 재산세 계산도 반영했습니다. 적용
          기준은 아래 기준표에서 확인할 수 있고, 실제 고지세액은 홈택스·관할 지자체와 대조하세요.
        </>
      }
      faqItems={comprehensivePropertyTaxCalculatorFaqItems}
    >
      <ComprehensivePropertyTaxCalculatorSection />
    </CalculatorPageShell>
  );
}
