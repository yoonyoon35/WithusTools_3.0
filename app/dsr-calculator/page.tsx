import type { Metadata } from "next";
import Link from "next/link";
// import { AdfitInlineLeader320 } from "@/components/adfit-inline-leader-320";
import { DsrCalculatorSection } from "@/components/dsr-calculator-section";
import { SITE_DOMAIN, SITE_URL } from "@/lib/site";

const pageTitle = "DSR·주담대 한도 계산기";
const pageDescription =
  "주담대·자동차 할부가 DSR 40%와 주택담보대출 한도에 미치는 영향을 계산합니다. 연소득·기존 부채·신규 대출 조건으로 DSR(%)과 월 상환 부담을 무료로 확인할 수 있는 DSR 계산기입니다.";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: `${SITE_URL}/dsr-calculator` },
    openGraph: {
      url: `${SITE_URL}/dsr-calculator`,
      title: `${pageTitle} | ${SITE_DOMAIN}`,
      description: pageDescription,
    },
  };
}

export default function DsrCalculatorPage() {
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
            주담대 차량 할부 한도는 DSR 산정 시 자동차 할부 월 상환액이 기존 부채로 차감되기 때문에 줄어듭니다. 연소득과 기존·신규
            대출(주담대·신용·할부 등)을 입력하면 DSR(%)과 월 상환 부담을 참고용으로 계산합니다. 실제 심사는 신청 금융기관에서
            확인해야 합니다.
          </p>
        </div>
      </section>

      {/* <AdfitInlineLeader320 className="bg-muted/15 py-4" /> */}
      <DsrCalculatorSection />
    </main>
  );
}
