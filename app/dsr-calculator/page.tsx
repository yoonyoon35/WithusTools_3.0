import type { Metadata } from "next";
import { CalculatorPageShell } from "@/components/calculator-page-shell";
import { DsrCalculatorSection } from "@/components/dsr-calculator-section";
import { dsrCalculatorFaqItems } from "@/lib/faq-data";
import { createPageMetadata } from "@/lib/metadata";

const path = "/dsr-calculator";
const pageTitle = "DSR·주담대 한도 계산기";
const pageDescription =
  "연소득과 대출 조건을 입력하면 주담대 한도와 DSR(%)을 바로 확인합니다. 기존 부채·신규 주담대 기준으로 월 상환 부담까지 무료로 계산하는 DSR 계산기입니다.";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({ title: pageTitle, description: pageDescription, path });
}

export default function DsrCalculatorPage() {
  return (
    <CalculatorPageShell
      path={path}
      title={pageTitle}
      intro={
        <>
          연소득과 기존·신규 대출을 입력하면 주담대 한도(은행권 DSR 40% 참고)와 DSR(%)을 바로 계산합니다. 월 상환 부담도 함께
          볼 수 있습니다. 실제 심사는 신청 금융기관에서 확인해야 합니다.
        </>
      }
      faqItems={dsrCalculatorFaqItems}
    >
      <DsrCalculatorSection />
    </CalculatorPageShell>
  );
}
