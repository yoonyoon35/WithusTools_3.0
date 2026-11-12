import type { Metadata } from "next";
import Link from "next/link";
import { CalculatorPageShell } from "@/components/calculator-page-shell";
import { EmergencyLoanInterestCalculatorSection } from "@/components/emergency-loan-interest-calculator-section";
import { emergencyLoanInterestCalculatorFaqItems } from "@/lib/faq-data";
import { createPageMetadata } from "@/lib/metadata";

const path = "/emergency-loan-interest-calculator";
const pageTitle = "비상금대출 이자 계산기";
const metaTitle = "비상금대출 이자 계산기 - 마이너스통장 일할·카카오·토스·케이뱅크";
const pageDescription =
  "비상금대출·마이너스통장 이자를 쓴 금액×연 금리÷365×일수로 계산합니다. 사용 시작일·기준일로 일수를 자동 계산하거나 일수를 직접 입력할 수 있고, ÷12 월 어림과 비교합니다. 카카오·토스·케이뱅크 등 비공식 참고용입니다.";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({ title: metaTitle, description: pageDescription, path });
}

export default function EmergencyLoanInterestCalculatorPage() {
  return (
    <CalculatorPageShell
      path={path}
      title={pageTitle}
      intro={
        <>
          비상금대출·마이너스통장은 한도만 열고 쓴 금액에만 이자가 붙습니다. 사용 금액·약정 금리와 사용 시작일·기준일(또는
          일수 직접 입력)으로 일할(연이율 ÷ 365) 이자를 계산하고, 한 달(÷12) 어림과 비교할 수 있습니다. 카카오뱅크·토스뱅크·
          케이뱅크 등에도 같은 방식으로 어림할 수 있으며, 이 사이트는 해당 은행과 제휴·공식 관계가 없습니다. 공식·예시·당일
          상환·DSR은{" "}
          <Link
            href="/guide/kakao-emergency-loan-interest-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            카카오 비상금대출 이자 계산 방식 가이드
          </Link>
          와 관련 가이드에서 이어서 볼 수 있습니다. 계산 결과는 참고용이며 확정 이자는 해당 금융기관 확인이 필요합니다.
        </>
      }
      faqItems={emergencyLoanInterestCalculatorFaqItems}
    >
      <EmergencyLoanInterestCalculatorSection />
    </CalculatorPageShell>
  );
}
