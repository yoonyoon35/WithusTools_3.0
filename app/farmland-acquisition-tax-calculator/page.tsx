import type { Metadata } from "next";
import { CalculatorPageShell } from "@/components/calculator-page-shell";
import { FarmlandAcquisitionTaxCalculatorSection } from "@/components/farmland-acquisition-tax-calculator-section";
import { FarmlandAcquisitionTaxGuideSection } from "@/components/farmland-acquisition-tax-guide-section";
import { farmlandAcquisitionTaxCalculatorFaqItems } from "@/lib/faq-data";
import { createPageMetadata } from "@/lib/metadata";

const path = "/farmland-acquisition-tax-calculator";
const pageTitle = "농지 취득세 계산기";
const metaTitle = "농지 취득세 계산기 - 매매·상속·증여·자경 1.5%";
const pageDescription =
  "농지 매매(3%)·2년 이상 자경 감면(1.5%)·상속(2.3%)·영농상속(0.3%)·증여 농지의 취득세와 농어촌특별세·지방교육세를 계산합니다. 자경 감면 요건과 일몰, 농지취득자격증명, 신고 기한도 함께 정리했습니다.";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({ title: metaTitle, description: pageDescription, path });
}

export default function FarmlandAcquisitionTaxCalculatorPage() {
  return (
    <CalculatorPageShell
      path={path}
      title={pageTitle}
      intro={
        <>
          농지를 매매·상속·증여로 취득할 때의 취득세와 농어촌특별세, 지방교육세를 계산합니다. 농지는 주택 수와 상관없이
          취득 원인과 자경 요건에 따라 세율이 달라지므로, 일반 매매 3.4%와 2년 이상 자경 감면 1.6%, 상속·영농상속 세율을
          한 번에 비교할 수 있습니다. 하단에서 자경 감면 요건과 일몰, 농지취득자격증명, 신고 기한을 안내합니다. 계산 결과는
          참고용이며 실제 신고 세액은 관할 지자체 확인이 필요합니다.
        </>
      }
      faqItems={farmlandAcquisitionTaxCalculatorFaqItems}
    >
      <FarmlandAcquisitionTaxCalculatorSection />
      <FarmlandAcquisitionTaxGuideSection />
    </CalculatorPageShell>
  );
}
