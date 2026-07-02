import type { Metadata } from "next";
import { CalculatorPageShell } from "@/components/calculator-page-shell";
import { BrokerageFeeCalculatorSection } from "@/components/brokerage-fee-calculator-section";
import { brokerageFeeCalculatorFaqItems } from "@/lib/faq-data";
import { createPageMetadata } from "@/lib/metadata";

const path = "/brokerage-fee-calculator";
const pageTitle = "중개수수료 계산기";
const pageDescription =
  "서울시 고시 중개보수 상한 요율로 매매·전세·월세·오피스텔 법정 최대 중개수수료를 계산합니다. 거래금액·유형별 요율표, VAT 적용 기준을 함께 확인할 수 있는 무료 중개수수료 계산기입니다. 하단 가이드에서 아파트 매매·분양권 전매 등 상황별 안내도 볼 수 있습니다.";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({ title: pageTitle, description: pageDescription, path });
}

export default function BrokerageFeeCalculatorPage() {
  return (
    <CalculatorPageShell
      path={path}
      title={pageTitle}
      intro={
        <>
          서울시 고시 요율을 반영했습니다. 하단에 요율표와 적용기준, 아파트 매매·분양권 전매 등 상황별 가이드 링크를 함께
          두었습니다. 계산 결과는 참고용이며, 실제 협의 금액·부가세·관할 고시는 개별 확인이 필요합니다.
        </>
      }
      faqItems={brokerageFeeCalculatorFaqItems}
    >
      <BrokerageFeeCalculatorSection />
    </CalculatorPageShell>
  );
}
