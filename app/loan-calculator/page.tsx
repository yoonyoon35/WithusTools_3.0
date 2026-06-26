import type { Metadata } from "next";
import Link from "next/link";
import { FaqSection } from "@/components/faq-section";
import { LoanCalculatorWebApplicationJsonLd } from "@/components/json-ld";
import { LoanCalculatorSection } from "@/components/loan-calculator-section";
import { faqItems } from "@/lib/faq-data";
import { LOAN_CALCULATOR_PATH } from "@/lib/calculators";
import {
  loanCalculatorDescription,
  referenceDisclaimerLine,
  SITE_DOMAIN,
  SITE_URL,
} from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const pageTitle = "대출 이자 계산기";
  return {
    title: pageTitle,
    description: loanCalculatorDescription,
    alternates: { canonical: `${SITE_URL}${LOAN_CALCULATOR_PATH}` },
    openGraph: {
      url: `${SITE_URL}${LOAN_CALCULATOR_PATH}`,
      title: `${pageTitle} | ${SITE_DOMAIN}`,
      description: loanCalculatorDescription,
    },
  };
}

export default function LoanCalculatorPage() {
  const pageTitle = "대출 이자 계산기";

  return (
    <main role="main">
      <LoanCalculatorWebApplicationJsonLd />
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
            원리금균등·원금균등·만기일시 상환을 비교하고, 하단 기준표로 각 방식의 특징을 확인할 수 있습니다. 거치기간·상환 방식
            비교도 지원합니다. {referenceDisclaimerLine}
          </p>
        </div>
      </section>

      <LoanCalculatorSection />

      <section id="faq" className="scroll-mt-24 py-10 sm:py-14" aria-labelledby="faq-title">
        <div className="mx-auto max-w-3xl px-4">
          <h2 id="faq-title" className="text-2xl font-bold tracking-tight sm:text-3xl">
            자주 묻는 질문
          </h2>
          <div className="mt-8">
            <FaqSection items={faqItems} />
          </div>
        </div>
      </section>
    </main>
  );
}
