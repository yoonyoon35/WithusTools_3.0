import type { Metadata } from "next";
import Link from "next/link";
// import { AdfitInlineLeader320 } from "@/components/adfit-inline-leader-320";
import { AcquisitionTaxCalculatorSection } from "@/components/acquisition-tax-calculator-section";
import { SITE_DOMAIN, SITE_URL } from "@/lib/site";

const pageTitle = "취득세 계산기";
const pageDescription =
  "주택·주택 외·농지 등 자산 구분과 취득 유형에 따라 취득세·지방교육세·농어촌특별세를 계산합니다. 하단 가이드에서 신축·분양 아파트 금액별 예시도 확인할 수 있습니다.";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: `${SITE_URL}/acquisition-tax-calculator` },
    openGraph: {
      url: `${SITE_URL}/acquisition-tax-calculator`,
      title: `${pageTitle} | ${SITE_DOMAIN}`,
      description: pageDescription,
    },
  };
}

export default function AcquisitionTaxCalculatorPage() {
  return (
    <main role="main">
      <section className="from-primary/10 via-background to-background border-b bg-gradient-to-b py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4">
          <nav className="text-muted-foreground mb-6 text-sm" aria-label="이동 경로">
            <ol className="flex flex-wrap items-center gap-1">
              <li>
                <Link href="/" className="hover:text-foreground underline-offset-4 hover:underline">
                  홈
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-foreground">{pageTitle}</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{pageTitle}</h1>
          <p className="text-muted-foreground mt-3 max-w-3xl text-sm leading-relaxed sm:text-base">
            자산 구분(주택, 주택 외, 농지)과 취득 유형별 기준을 하단 기준표·가이드로 함께 제공합니다. 신축·분양 아파트 등
            금액별 예시는 관련 가이드에서 이어서 볼 수 있습니다. 계산 결과는 참고용이며 실제 신고 세액은 관할 지자체 및
            세무전문가 확인이 필요합니다.
          </p>
        </div>
      </section>

      {/* <AdfitInlineLeader320 className="bg-muted/15 py-4" /> */}
      <AcquisitionTaxCalculatorSection />
    </main>
  );
}
