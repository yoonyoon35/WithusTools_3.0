import type { Metadata } from "next";
import Link from "next/link";
import { CalculatorPageShell } from "@/components/calculator-page-shell";
import { WolseBrokerageFeeCalculatorSection } from "@/components/wolse-brokerage-fee-calculator-section";
import { wolseBrokerageFeeCalculatorFaqItems } from "@/lib/faq-data";
import { createPageMetadata } from "@/lib/metadata";

const path = "/wolse-brokerage-fee-calculator";
const pageTitle = "월세 중개수수료 계산기";
const metaTitle = "월세 중개수수료 계산기 - 보증금·월세 환산 상한";
const pageDescription =
  "주택 월세 보증금과 월세를 환산한 거래금액에 서울시 고시 상한 요율을 적용해 중개수수료 상한액을 계산합니다. 환산 공식·예시는 월세 중개수수료 가이드에서 확인할 수 있습니다.";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({ title: metaTitle, description: pageDescription, path });
}

export default function WolseBrokerageFeeCalculatorPage() {
  return (
    <CalculatorPageShell
      path={path}
      title={pageTitle}
      intro={
        <>
          월세 보증금과 월세만 입력해 환산 거래금액 기준 중개수수료 상한을 어림합니다. 환산은 보증금 + (월세 × 100)이며, 합이
          5천만 원 미만이면 보증금 + (월세 × 70)으로 다시 계산합니다. 환산·구간 예시는{" "}
          <Link
            href="/guide/wolse-brokerage-fee-calculation-2026-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            월세 중개수수료 가이드
          </Link>
          에서 이어서 볼 수 있습니다. 전세는{" "}
          <Link
            href="/jeonse-brokerage-fee-calculator"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            전세 중개수수료 계산기
          </Link>
          , 매매·오피스텔은{" "}
          <Link href="/brokerage-fee-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            중개수수료 계산기
          </Link>
          를 이용하세요. 계산 결과는 참고용이며 실제 금액은 상한 이내 협의·부가세는 별도입니다.
        </>
      }
      faqItems={wolseBrokerageFeeCalculatorFaqItems}
    >
      <WolseBrokerageFeeCalculatorSection />
    </CalculatorPageShell>
  );
}
