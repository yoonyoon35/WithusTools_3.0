import type { Metadata } from "next";
import { CalculatorPageShell } from "@/components/calculator-page-shell";
import { DsrCalculatorSection } from "@/components/dsr-calculator-section";
import { dsrCalculatorFaqItems } from "@/lib/faq-data";
import { createPageMetadata } from "@/lib/metadata";

const path = "/dsr-calculator";
const pageTitle = "DSR·주담대 한도 계산기";
const pageDescription =
  "주담대·자동차 할부가 DSR 40%와 주택담보대출 한도에 미치는 영향을 계산합니다. 연소득·기존 부채·신규 대출 조건으로 DSR(%)과 월 상환 부담을 무료로 확인할 수 있는 DSR 계산기입니다.";

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
          주담대 차량 할부 한도는 DSR 산정 시 자동차 할부 월 상환액이 기존 부채로 차감되기 때문에 줄어듭니다. 연소득과 기존·신규
          대출(주담대·신용·할부 등)을 입력하면 DSR(%)과 월 상환 부담을 참고용으로 계산합니다. 실제 심사는 신청 금융기관에서
          확인해야 합니다.
        </>
      }
      faqItems={dsrCalculatorFaqItems}
    >
      <DsrCalculatorSection />
    </CalculatorPageShell>
  );
}
