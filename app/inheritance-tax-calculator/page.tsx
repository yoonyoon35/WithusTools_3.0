import type { Metadata } from "next";
import { CalculatorPageShell } from "@/components/calculator-page-shell";
import { InheritanceTaxCalculatorSection } from "@/components/inheritance-tax-calculator-section";
import { inheritanceTaxCalculatorFaqItems } from "@/lib/faq-data";
import { createPageMetadata } from "@/lib/metadata";

const path = "/inheritance-tax-calculator";
const pageTitle = "상속세 계산기";
const metaTitle = "상속세 계산기 - 일괄공제·배우자공제·금융재산공제 반영";
const pageDescription =
  "국세청 상속세 세액계산 흐름도 기준으로 과세가액·일괄공제·배우자공제·금융재산공제·동거주택공제·세대생략할증·신고세액공제를 반영해 예상 상속세를 산출합니다.";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({ title: metaTitle, description: pageDescription, path });
}

export default function InheritanceTaxCalculatorPage() {
  return (
    <CalculatorPageShell
      path={path}
      title={pageTitle}
      intro={
        <>
          상속재산에서 상속공제를 빼고 누진세율과 세액공제를 적용해 예상 상속세를 계산합니다. 재산 평가, 상속인별
          안분, 가업상속공제 등은 직접 반영하지 않으므로 홈택스 자동계산·관할 세무서와 대조해 확인하세요. 법령
          근거는 아래 기준표에 정리했습니다.
        </>
      }
      faqItems={inheritanceTaxCalculatorFaqItems}
    >
      <InheritanceTaxCalculatorSection />
    </CalculatorPageShell>
  );
}
