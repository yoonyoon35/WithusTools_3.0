import type { Metadata } from "next";
import Link from "next/link";
import { CalculatorPageShell } from "@/components/calculator-page-shell";
import { OfficetelAcquisitionTaxCalculatorSection } from "@/components/officetel-acquisition-tax-calculator-section";
import { officetelAcquisitionTaxCalculatorFaqItems } from "@/lib/faq-data";
import { createPageMetadata } from "@/lib/metadata";

const path = "/officetel-acquisition-tax-calculator";
const pageTitle = "오피스텔 취득세 계산기";
const metaTitle = "오피스텔 취득세 계산기 - 매매 4.6%·증여·상속";
const pageDescription =
  "오피스텔 매매(합계 4.6%)·증여·상속·원시취득의 취득세와 농어촌특별세·지방교육세를 계산합니다. 주거용·업무용 세율은 같으며, 이후 주택 수·양도세는 오피스텔 주거용·업무용 세금 가이드에서 확인할 수 있습니다.";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({ title: metaTitle, description: pageDescription, path });
}

export default function OfficetelAcquisitionTaxCalculatorPage() {
  return (
    <CalculatorPageShell
      path={path}
      title={pageTitle}
      intro={
        <>
          오피스텔을 매매·상속·증여·원시취득할 때의 취득세와 농어촌특별세, 지방교육세를 계산합니다. 세법상 주택이
          아니므로 주거용·업무용 구분 없이 매매 합계 4.6%이며, 아파트·빌라의 주택 세율·다주택 중과는 취득 자체에
          적용되지 않습니다. 이후 주택 수·양도세·부가세는{" "}
          <Link
            href="/guide/officetel-residential-vs-business-tax-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            오피스텔 주거용·업무용 세금 가이드
          </Link>
          에서 이어서 볼 수 있습니다. 계산 결과는 참고용이며 실제 신고 세액은 관할 지자체 확인이 필요합니다.
        </>
      }
      faqItems={officetelAcquisitionTaxCalculatorFaqItems}
    >
      <OfficetelAcquisitionTaxCalculatorSection />
    </CalculatorPageShell>
  );
}
