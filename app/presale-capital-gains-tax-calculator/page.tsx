import type { Metadata } from "next";
import Link from "next/link";
import { CalculatorPageShell } from "@/components/calculator-page-shell";
import { PresaleCapitalGainsTaxCalculatorSection } from "@/components/presale-capital-gains-tax-calculator-section";
import { presaleCapitalGainsTaxCalculatorFaqItems } from "@/lib/faq-data";
import { createPageMetadata } from "@/lib/metadata";

const path = "/presale-capital-gains-tax-calculator";
const pageTitle = "분양권 양도세 계산기";
const metaTitle = "분양권 양도세 계산기 - 60%·70% 전용세율";
const pageDescription =
  "주택분양권 양도 시 보유 1년 미만 70%·1년 이상 60% 전용세율로 양도소득세·지방소득세를 계산합니다. 장특공·1주택 비과세·다주택 중과는 적용되지 않으며, 세율·주택 수는 분양권 양도소득세 가이드에서 확인할 수 있습니다.";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({ title: metaTitle, description: pageDescription, path });
}

export default function PresaleCapitalGainsTaxCalculatorPage() {
  return (
    <CalculatorPageShell
      path={path}
      title={pageTitle}
      intro={
        <>
          주택분양권을 팔 때 양도차익에 적용되는 전용세율(보유 1년 미만 70%, 1년 이상 60%)로 양도소득세와 지방소득세를
          어림합니다. 장기보유특별공제·1세대1주택 비과세·다주택 중과는 분양권 양도 자체에 적용되지 않습니다. 세율·주택
          수·전매는{" "}
          <Link
            href="/guide/presale-right-capital-gains-tax-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            분양권 양도소득세 가이드
          </Link>
          에서, 주택·입주권은{" "}
          <Link
            href="/capital-gains-tax-calculator"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            양도소득세 계산기
          </Link>
          에서 이어서 볼 수 있습니다. 계산 결과는 참고용이며 최종 세액은 홈택스·관할 세무서 확인이 필요합니다.
        </>
      }
      faqItems={presaleCapitalGainsTaxCalculatorFaqItems}
    >
      <PresaleCapitalGainsTaxCalculatorSection />
    </CalculatorPageShell>
  );
}
