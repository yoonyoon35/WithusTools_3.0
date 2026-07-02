import type { Metadata } from "next";
import Link from "next/link";
import { CalculatorPageShell } from "@/components/calculator-page-shell";
import { LtvCalculatorSection } from "@/components/ltv-calculator-section";
import { ltvCalculatorFaqItems } from "@/lib/faq-data";
import { createPageMetadata } from "@/lib/metadata";

const path = "/ltv-calculator";
const pageTitle = "LTV 계산기";
const pageDescription =
  "담보 주택 가격·지역·주택 보유·생애최초 조건으로 LTV(%)와 대출 가능액을 간이 산출합니다. 선순위 설정액과 대출 희망액을 반영할 수 있습니다.";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({ title: pageTitle, description: pageDescription, path });
}

export default function LtvCalculatorPage() {
  return (
    <CalculatorPageShell
      path={path}
      title={pageTitle}
      intro={
        <>
          LTV(주택담보인정비율)는 (선순위 설정액 + 대출금) ÷ 담보 인정 가격 × 100으로 계산합니다. 규제지역·주택 보유·생애최초
          조건에 따라 적용 LTV 한도가 달라지며, 본 페이지는 참고용 간이 산출입니다. DSR·스트레스 DSR 등은{" "}
          <Link href="/dsr-calculator" className="text-primary underline-offset-4 hover:underline">
            DSR 계산기
          </Link>
          에서 확인하세요.
        </>
      }
      faqItems={ltvCalculatorFaqItems}
    >
      <LtvCalculatorSection />
    </CalculatorPageShell>
  );
}
