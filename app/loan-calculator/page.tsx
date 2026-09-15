import type { Metadata } from "next";
import { CalculatorPageShell } from "@/components/calculator-page-shell";
import { LoanCalculatorSection } from "@/components/loan-calculator-section";
import { loanCalculatorFaqItems } from "@/lib/faq-data";
import { LOAN_CALCULATOR_PATH } from "@/lib/calculators";
import { createPageMetadata } from "@/lib/metadata";
import { loanCalculatorDescription, referenceDisclaimerLine } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({
    title: "대출 이자 계산기 - 원리금균등·원금균등·체증식·만기일시·거치식",
    description: loanCalculatorDescription,
    path: LOAN_CALCULATOR_PATH,
  });
}

export default function LoanCalculatorPage() {
  return (
    <CalculatorPageShell
      path={LOAN_CALCULATOR_PATH}
      title="대출 이자 계산기"
      intro={
        <>
          거치식(거치기간)·체증식·원리금균등·원금균등·만기일시 상환을 한 화면에서 비교합니다. 하단 기준표로 각 방식의 특징을
          확인할 수 있습니다. {referenceDisclaimerLine}
        </>
      }
      faqItems={loanCalculatorFaqItems}
    >
      <LoanCalculatorSection />
    </CalculatorPageShell>
  );
}
