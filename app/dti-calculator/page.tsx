import type { Metadata } from "next";
import Link from "next/link";
import { DtiCalculatorSection } from "@/components/dti-calculator-section";
import { SITE_DOMAIN, SITE_URL } from "@/lib/site";

const pageTitle = "DTI 계산기";
const pageDescription =
  "연 소득과 주담대·기타 대출로 DTI(%)를 간이 산출합니다. 주담대는 원리금, 신용·할부 등은 이자만 반영하는 2026년 기준 참고 계산입니다.";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: `${SITE_URL}/dti-calculator` },
    openGraph: {
      url: `${SITE_URL}/dti-calculator`,
      title: `${pageTitle} | ${SITE_DOMAIN}`,
      description: pageDescription,
    },
  };
}

export default function DtiCalculatorPage() {
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
            DTI(총부채상환비율)는 (주담대 연간 원리금 + 기타 대출 연간 이자) ÷ 연소득 × 100으로 계산합니다. 은행권 참고
            한도 60%·제2금융 50%와 비교할 수 있습니다. 2023년 이후 은행권 주담대는 실무상{" "}
            <Link href="/dsr-calculator" className="text-primary underline-offset-4 hover:underline">
              DSR 40%
            </Link>
            이 먼저 한도를 제한하는 경우가 많습니다.
          </p>
        </div>
      </section>

      <DtiCalculatorSection />
    </main>
  );
}
