import type { Metadata } from "next";
import Link from "next/link";
import { CalculatorPageShell } from "@/components/calculator-page-shell";
import { InheritedHousingAcquisitionTaxCalculatorSection } from "@/components/inherited-housing-acquisition-tax-calculator-section";
import { inheritedHousingAcquisitionTaxCalculatorFaqItems } from "@/lib/faq-data";
import { createPageMetadata } from "@/lib/metadata";

const path = "/inherited-housing-acquisition-tax-calculator";
const pageTitle = "상속 주택 취득세 계산기";
const metaTitle = "상속 주택 취득세 계산기 - 2.8%·시가표준액";
const pageDescription =
  "상속으로 주택을 취득할 때 시가표준액 기준 취득세 2.8%·지방교육세 0.16%·전용 85㎡ 초과 시 농특세 0.2%를 계산합니다. 납부 기한·주택 수는 상속 주택 취득세 가이드에서 확인할 수 있습니다.";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({ title: metaTitle, description: pageDescription, path });
}

export default function InheritedHousingAcquisitionTaxCalculatorPage() {
  return (
    <CalculatorPageShell
      path={path}
      title={pageTitle}
      intro={
        <>
          상속으로 주택을 받을 때 취득세와 지방교육세·농어촌특별세를 어림합니다. 세율은 2.8%(교육세 0.16%, 전용 85㎡
          초과 시 농특세 0.2%)이며 과세표준은 시가표준액(공시가격)입니다. 매매와 달리 다주택 중과는 적용되지 않습니다.
          납부 기한·주택 수·지분은{" "}
          <Link
            href="/guide/inherited-housing-acquisition-tax-2026-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            상속 주택 취득세 가이드
          </Link>
          에서, 농지 상속은{" "}
          <Link
            href="/farmland-acquisition-tax-calculator"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            농지 취득세 계산기
          </Link>
          를 이용하세요. 계산 결과는 참고용이며 실제 신고 세액은 관할 지자체 확인이 필요합니다.
        </>
      }
      faqItems={inheritedHousingAcquisitionTaxCalculatorFaqItems}
    >
      <InheritedHousingAcquisitionTaxCalculatorSection />
    </CalculatorPageShell>
  );
}
