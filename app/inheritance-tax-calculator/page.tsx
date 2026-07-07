import type { Metadata } from "next";
import { CalculatorPageShell } from "@/components/calculator-page-shell";
import { InheritanceTaxCalculatorSection } from "@/components/inheritance-tax-calculator-section";
import { inheritanceTaxCalculatorFaqItems } from "@/lib/faq-data";
import { createPageMetadata } from "@/lib/metadata";

const path = "/inheritance-tax-calculator";
const pageTitle = "상속세 계산기";
const pageDescription =
  "국세청 상속세 세액계산 흐름도 기준으로 과세가액·일괄공제·배우자공제·금융재산공제·동거주택공제·세대생략할증·신고세액공제를 반영해 예상 상속세를 산출합니다.";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({ title: pageTitle, description: pageDescription, path });
}

export default function InheritanceTaxCalculatorPage() {
  return (
    <CalculatorPageShell
      path={path}
      title={pageTitle}
      intro={
        <>
          국세청 「상속세 개요」「세액계산흐름도」와 상속세 및 증여세법(시행 2025.10.1.) 제13·18~24·25~28·27·69조를
          기준으로 과세가액·상속공제·과세표준·누진세율·세액공제를 산출합니다. 재산 평가·상속인별 안분·가업상속공제
          등은 홈택스 자동계산·관할 세무서와 대조해 확인하세요.
        </>
      }
      faqItems={inheritanceTaxCalculatorFaqItems}
    >
      <InheritanceTaxCalculatorSection />
    </CalculatorPageShell>
  );
}
