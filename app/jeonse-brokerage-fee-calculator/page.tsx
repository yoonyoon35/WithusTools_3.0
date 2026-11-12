import type { Metadata } from "next";
import Link from "next/link";
import { CalculatorPageShell } from "@/components/calculator-page-shell";
import { JeonseBrokerageFeeCalculatorSection } from "@/components/jeonse-brokerage-fee-calculator-section";
import { jeonseBrokerageFeeCalculatorFaqItems } from "@/lib/faq-data";
import { createPageMetadata } from "@/lib/metadata";

const path = "/jeonse-brokerage-fee-calculator";
const pageTitle = "전세 중개수수료 계산기";
const metaTitle = "전세 중개수수료 계산기 - 보증금별 상한요율";
const pageDescription =
  "주택 전세 보증금 구간별 서울시 고시 상한 요율로 중개수수료 상한액을 계산합니다. 보증금만 입력하면 되며, 요율표·예시·재계약은 전세 중개수수료 가이드에서 확인할 수 있습니다.";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({ title: metaTitle, description: pageDescription, path });
}

export default function JeonseBrokerageFeeCalculatorPage() {
  return (
    <CalculatorPageShell
      path={path}
      title={pageTitle}
      intro={
        <>
          전세 보증금만 입력해 서울시 고시 상한 요율 기준 중개수수료를 어림합니다. 전세는 보증금이 곧 거래금액이며, 매매보다
          요율이 낮고 구간에 따라 한도액이 적용됩니다. 보증금별 예시·쌍방 부담·재계약은{" "}
          <Link
            href="/guide/jeonse-brokerage-fee-calculation-2026-guide"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            전세 중개수수료 가이드
          </Link>
          에서 이어서 볼 수 있습니다. 월세는{" "}
          <Link
            href="/wolse-brokerage-fee-calculator"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            월세 중개수수료 계산기
          </Link>
          , 매매·오피스텔은{" "}
          <Link href="/brokerage-fee-calculator" className="text-primary font-medium underline-offset-4 hover:underline">
            중개수수료 계산기
          </Link>
          를 이용하세요. 계산 결과는 참고용이며 실제 금액은 상한 이내 협의·부가세는 별도입니다.
        </>
      }
      faqItems={jeonseBrokerageFeeCalculatorFaqItems}
    >
      <JeonseBrokerageFeeCalculatorSection />
    </CalculatorPageShell>
  );
}
