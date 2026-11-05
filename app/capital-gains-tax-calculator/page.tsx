import type { Metadata } from "next";
import { CalculatorPageShell } from "@/components/calculator-page-shell";
import { CapitalGainsTaxCalculatorSection } from "@/components/capital-gains-tax-calculator-section";
import { capitalGainsTaxCalculatorFaqItems } from "@/lib/faq-data";
import { createPageMetadata } from "@/lib/metadata";

const path = "/capital-gains-tax-calculator";
const pageTitle = "양도소득세 계산기";
const metaTitle = "양도소득세 계산기 - 1주택 비과세·다주택 중과";
const pageDescription =
  "주택·분양권 양도차익, 1세대 1주택 비과세·고가주택 안분, 장기보유특별공제, 다주택 중과를 반영해 양도소득세·지방소득세를 산출합니다.";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({ title: metaTitle, description: pageDescription, path });
}

export default function CapitalGainsTaxCalculatorPage() {
  return (
    <CalculatorPageShell
      path={path}
      title={pageTitle}
      intro={
        <>
          집이나 분양권을 팔 때 양도차익에서 비과세·장기보유특별공제·기본공제를 빼고 적용 세율(기본·단기·중과)에 따라
          양도소득세를 계산합니다. 2026년 5월 10일부터 다시 시행된 조정대상지역 다주택 중과와 한시배제 옵션도
          반영했습니다. 법령 근거는 아래 기준표에서 확인할 수 있고, 최종 세액은 홈택스·관할 세무서와 대조하세요.
        </>
      }
      faqItems={capitalGainsTaxCalculatorFaqItems}
    >
      <CapitalGainsTaxCalculatorSection />
    </CalculatorPageShell>
  );
}
