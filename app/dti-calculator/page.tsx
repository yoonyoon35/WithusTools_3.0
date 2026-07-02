import type { Metadata } from "next";
import Link from "next/link";
import { CalculatorPageShell } from "@/components/calculator-page-shell";
import { DtiCalculatorSection } from "@/components/dti-calculator-section";
import { dtiCalculatorFaqItems } from "@/lib/faq-data";
import { createPageMetadata } from "@/lib/metadata";

const path = "/dti-calculator";
const pageTitle = "DTI 계산기";
const pageDescription =
  "연 소득과 주담대·기타 대출로 DTI(%)를 간이 산출합니다. 주담대는 원리금, 신용·할부 등은 이자만 반영하는 2026년 기준 참고 계산입니다.";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({ title: pageTitle, description: pageDescription, path });
}

export default function DtiCalculatorPage() {
  return (
    <CalculatorPageShell
      path={path}
      title={pageTitle}
      intro={
        <>
          DTI(총부채상환비율)는 (주담대 연간 원리금 + 기타 대출 연간 이자) ÷ 연소득 × 100으로 계산합니다. 은행권 참고
          한도 60%·제2금융 50%와 비교할 수 있습니다. 2023년 이후 은행권 주담대는 실무상{" "}
          <Link href="/dsr-calculator" className="text-primary underline-offset-4 hover:underline">
            DSR 40%
          </Link>
          이 먼저 한도를 제한하는 경우가 많습니다.
        </>
      }
      faqItems={dtiCalculatorFaqItems}
    >
      <DtiCalculatorSection />
    </CalculatorPageShell>
  );
}
