import type { Metadata } from "next";
import Link from "next/link";
import { CalculatorPageShell } from "@/components/calculator-page-shell";
import { DtiCalculatorSection } from "@/components/dti-calculator-section";
import { dtiCalculatorFaqItems } from "@/lib/faq-data";
import { createPageMetadata } from "@/lib/metadata";

const path = "/dti-calculator";
const pageTitle = "DTI 계산기";
const metaTitle = "DTI 계산기 - 지역별 DTI 한도(40·50·60%) 비교";
const pageDescription =
  "연 소득과 주담대·기타 대출로 DTI(%)를 산출하고 지역별 한도(투기과열 40%·조정대상 50%·수도권 60%)와 비교합니다. 체증식 주담대는 월 상환액을 직접 입력할 수 있고, 신용·할부 대출은 이자만 반영합니다. (2026년 기준)";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({ title: metaTitle, description: pageDescription, path });
}

export default function DtiCalculatorPage() {
  return (
    <CalculatorPageShell
      path={path}
      title={pageTitle}
      intro={
        <>
          DTI(총부채상환비율)는 (주담대 연간 원리금 + 기타 대출 연간 이자) ÷ 연소득 × 100으로 계산합니다. 집이 있는
          지역과 주택 유형에 따라 한도가 40%·50%·60%로 달라집니다. 2023년 이후 은행권 주담대는 실무상{" "}
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
