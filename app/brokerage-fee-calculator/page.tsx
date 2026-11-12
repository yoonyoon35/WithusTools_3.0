import type { Metadata } from "next";
import Link from "next/link";
import { CalculatorPageShell } from "@/components/calculator-page-shell";
import { BrokerageFeeCalculatorSection } from "@/components/brokerage-fee-calculator-section";
import { brokerageFeeCalculatorFaqItems } from "@/lib/faq-data";
import { createPageMetadata } from "@/lib/metadata";

const path = "/brokerage-fee-calculator";
const pageTitle = "중개수수료 계산기";
const metaTitle = "중개수수료 계산기 - 매매·전세·월세·오피스텔·상가";
const pageDescription =
  "서울시 고시 상한 요율로 매매·전세·월세·오피스텔 중개수수료와 상가·토지 등 주택 외 거래 상한(0.9% 이내)을 계산합니다. 거래금액별 요율표와 VAT 기준을 함께 확인할 수 있습니다.";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({ title: metaTitle, description: pageDescription, path });
}

export default function BrokerageFeeCalculatorPage() {
  return (
    <CalculatorPageShell
      path={path}
      title={pageTitle}
      intro={
        <>
          거래 유형을 매매·전세·월세로 나눠 선택할 수 있습니다. 전세만 따로 보려면{" "}
          <Link
            href="/jeonse-brokerage-fee-calculator"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            전세 중개수수료 계산기
          </Link>
          , 월세만 따로 보려면{" "}
          <Link
            href="/wolse-brokerage-fee-calculator"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            월세 중개수수료 계산기
          </Link>
          를 이용하세요. 서울시 고시 요율을 반영했으며, 하단 요율표·가이드에서 아파트 매매·분양권 전매 등도 이어서 볼 수
          있습니다. 계산 결과는 참고용이며, 실제 협의 금액·부가세·관할 고시는 개별 확인이 필요합니다.
        </>
      }
      faqItems={brokerageFeeCalculatorFaqItems}
    >
      <BrokerageFeeCalculatorSection />
    </CalculatorPageShell>
  );
}
