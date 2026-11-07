import type { Metadata } from "next";
import { CalculatorPageShell } from "@/components/calculator-page-shell";
import { DsrCalculatorSection } from "@/components/dsr-calculator-section";
import { dsrCalculatorFaqItems } from "@/lib/faq-data";
import { createPageMetadata } from "@/lib/metadata";

const path = "/dsr-calculator";
const pageTitle = "DSR·주담대 한도 계산기";
const metaTitle = "주담대 DSR 계산기 - 연소득별 대출 한도";
const pageDescription =
  "연소득과 기존 대출을 입력하면 DSR(%)과 40% 기준 주담대 최대 대출 가능액을 바로 계산합니다. 목표 DSR을 바꿔 한도를 역산하거나 체증식 상환 조건도 입력할 수 있습니다.";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({ title: metaTitle, description: pageDescription, path });
}

export default function DsrCalculatorPage() {
  return (
    <CalculatorPageShell
      path={path}
      title={pageTitle}
      intro={
        <>
          연소득과 기존·신규 대출을 입력하면 DSR(%)과 주담대 최대 대출 가능액을 바로 계산합니다. 목표 DSR은 은행권 40%,
          제2금융권 50%뿐 아니라 내 기준(예: 30%)으로 바꿔 볼 수 있고, 신규 대출은 금리·기간만 넣어도 한도를 역산합니다.
          한도는 DSR만 반영한 값이라 LTV·주담대 상한·은행 내부 기준에 따라 실제 승인액은 더 낮을 수 있으며, 실제 심사는
          신청 금융기관에서 확인해야 합니다.
        </>
      }
      faqItems={dsrCalculatorFaqItems}
    >
      <DsrCalculatorSection />
    </CalculatorPageShell>
  );
}
