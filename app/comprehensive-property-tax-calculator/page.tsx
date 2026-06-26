import type { Metadata } from "next";
import Link from "next/link";
import { ComprehensivePropertyTaxCalculatorSection } from "@/components/comprehensive-property-tax-calculator-section";
import { SITE_DOMAIN, SITE_URL } from "@/lib/site";

const pageTitle = "종합부동산세 계산기";
const pageDescription =
  "주택·토지 공시가격으로 재산세·지방교육세·종합부동산세·농어촌특별세를 함께 계산하고 연간 보유세 합계를 확인합니다.";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: `${SITE_URL}/comprehensive-property-tax-calculator` },
    openGraph: {
      url: `${SITE_URL}/comprehensive-property-tax-calculator`,
      title: `${pageTitle} | ${SITE_DOMAIN}`,
      description: pageDescription,
    },
  };
}

export default function ComprehensivePropertyTaxCalculatorPage() {
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
            국세청 세액계산 흐름도·종합부동산세 신고서 별지3호 부표·지방세법 표준세율을 기준으로 재산세·지방교육세·
            종부세·농특세를 산출합니다. 1세대 1주택 재산세 공정(45%)·시행령 제4조의2 공제할 재산세 공식을 반영했습니다.
            홈택스·관할 지자체 고지세액과 대조해 확인하세요.
          </p>
        </div>
      </section>

      <ComprehensivePropertyTaxCalculatorSection />
    </main>
  );
}
