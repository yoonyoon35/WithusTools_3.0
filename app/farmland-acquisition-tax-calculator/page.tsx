import type { Metadata } from "next";
import Link from "next/link";
import { CalculatorPageShell } from "@/components/calculator-page-shell";
import { FarmlandAcquisitionTaxCalculatorSection } from "@/components/farmland-acquisition-tax-calculator-section";
import { farmlandAcquisitionTaxCalculatorFaqItems } from "@/lib/faq-data";
import { createPageMetadata } from "@/lib/metadata";

const path = "/farmland-acquisition-tax-calculator";
const pageTitle = "농지 취득세 계산기";
const metaTitle = "농지 취득세 계산기 - 매매·상속·증여·자경 1.5%";
const pageDescription =
  "농지 매매(3%)·2년 이상 자경 감면(1.5%)·상속(2.3%)·영농상속(0.3%)·증여 농지의 취득세와 농어촌특별세·지방교육세를 계산합니다. 자경 감면·자격증명·신고 기한은 농지 취득세 가이드에서 확인할 수 있습니다.";

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
          한 번에 비교할 수 있습니다. 자경 감면 요건·일몰, 농지취득자격증명, 신고 기한은{" "}
          <Link
            href="/guide/farmland-acquisition-tax-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            농지 취득세 가이드
          </Link>
          와 관련 가이드에서 이어서 볼 수 있습니다. 계산 결과는 참고용이며 실제 신고 세액은 관할 지자체 확인이 필요합니다.
        </>
      }
      faqItems={farmlandAcquisitionTaxCalculatorFaqItems}
    >
      <FarmlandAcquisitionTaxCalculatorSection />
    </CalculatorPageShell>
  );
}
