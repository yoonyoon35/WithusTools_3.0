import type { Metadata } from "next";
import Link from "next/link";
import { LtvCalculatorSection } from "@/components/ltv-calculator-section";
import { SITE_DOMAIN, SITE_URL } from "@/lib/site";

const pageTitle = "LTV 계산기";
const pageDescription =
  "담보 주택 가격·지역·주택 보유·생애최초 조건으로 LTV(%)와 대출 가능액을 간이 산출합니다. 선순위 설정액과 대출 희망액을 반영할 수 있습니다.";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: `${SITE_URL}/ltv-calculator` },
    openGraph: {
      url: `${SITE_URL}/ltv-calculator`,
      title: `${pageTitle} | ${SITE_DOMAIN}`,
      description: pageDescription,
    },
  };
}

export default function LtvCalculatorPage() {
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
            LTV(주택담보인정비율)는 (선순위 설정액 + 대출금) ÷ 담보 인정 가격 × 100으로 계산합니다. 규제지역·주택 보유·생애최초
            조건에 따라 적용 LTV 한도가 달라지며, 본 페이지는 참고용 간이 산출입니다. DSR·스트레스 DSR 등은{" "}
            <Link href="/dsr-calculator" className="text-primary underline-offset-4 hover:underline">
              DSR 계산기
            </Link>
            에서 확인하세요.
          </p>
        </div>
      </section>

      <LtvCalculatorSection />
    </main>
  );
}
