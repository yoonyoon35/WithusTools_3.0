import type { Metadata } from "next";
import Link from "next/link";
import { CalculatorPageShell } from "@/components/calculator-page-shell";
import { FirstHomeAcquisitionTaxCalculatorSection } from "@/components/first-home-acquisition-tax-calculator-section";
import { firstHomeAcquisitionTaxCalculatorFaqItems } from "@/lib/faq-data";
import { createPageMetadata } from "@/lib/metadata";

const path = "/first-home-acquisition-tax-calculator";
const pageTitle = "생애최초 취득세 감면 계산기";
const metaTitle = "생애최초 취득세 감면 계산기 - 200만·300만 원 한도";
const pageDescription =
  "1주택 매매 기준 산출 취득세에서 생애최초 감면(일반 200만·소형·인구감소지역 등 300만 원)을 공제한 감면액·감면 후 세액을 계산합니다. 요건·신청·추징은 생애최초 취득세 감면 가이드에서 확인할 수 있습니다.";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({ title: metaTitle, description: pageDescription, path });
}

export default function FirstHomeAcquisitionTaxCalculatorPage() {
  return (
    <CalculatorPageShell
      path={path}
      title={pageTitle}
      intro={
        <>
          생애최초로 주택을 살 때 취득세가 얼마나 줄어드는지 어림합니다. 주택 매매·1주택을 전제로 감면을 기본 적용하고,
          감면 전 산출세액·감면액·감면 후 취득세·지방교육세·농어촌특별세를 한 번에 보여 줍니다. 감면 한도는 일반 200만
          원, 소형·인구감소지역 등은 300만 원입니다. 무주택·거주 목적·12억 원 이하 등 요건과 신청·추징은{" "}
          <Link
            href="/guide/first-home-acquisition-tax-relief-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            생애최초 취득세 감면 가이드
          </Link>
          에서 확인하세요. 계산 결과는 참고용이며 실제 세액은 관할 지자체 확인이 필요합니다.
        </>
      }
      faqItems={firstHomeAcquisitionTaxCalculatorFaqItems}
    >
      <FirstHomeAcquisitionTaxCalculatorSection />
    </CalculatorPageShell>
  );
}
