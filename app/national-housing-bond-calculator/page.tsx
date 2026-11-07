import type { Metadata } from "next";
import { CalculatorPageShell } from "@/components/calculator-page-shell";
import { HousingBondCalculatorSection } from "@/components/housing-bond-calculator-section";
import { housingBondCalculatorFaqItems } from "@/lib/faq-data";
import { createPageMetadata } from "@/lib/metadata";

const path = "/national-housing-bond-calculator";
const pageTitle = "국민주택채권 계산기";
const metaTitle = "국민주택채권 계산기 - 매입금액·즉시매도 실부담";
const pageDescription =
  "시가표준액·지역을 입력하면 소유권 이전·상속·증여·근저당 설정 시 국민주택채권 매입금액을 계산합니다. 할인율별 즉시매도 실부담도 비교할 수 있습니다. (2026년 기준)";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({ title: metaTitle, description: pageDescription, path });
}

export default function NationalHousingBondCalculatorPage() {
  return (
    <CalculatorPageShell
      path={path}
      title={pageTitle}
      intro={
        <>
          국민주택채권 매입금액은 매매가가 아니라 등기 접수일의 시가표준액에 등기 유형·지역·금액 구간별 매입률을 곱해
          정합니다. 소유권 이전(유상), 상속·증여, 근저당권 설정을 구분해 계산하고, 매입 즉시 되팔 때 실제로 부담하는
          할인 손실도 할인율별로 보여 줍니다. 할인율은 은행·날짜마다 달라 직접 입력해야 정확합니다. 계산 결과는 참고용이며,
          실제 매입금액은 법무사·금융기관에서 확인하세요.
        </>
      }
      faqItems={housingBondCalculatorFaqItems}
    >
      <HousingBondCalculatorSection />
    </CalculatorPageShell>
  );
}
