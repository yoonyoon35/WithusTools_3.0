import type { Metadata } from "next";
import Link from "next/link";
import { AdfitInlineLeader320 } from "@/components/adfit-inline-leader-320";
import { DsrCalculatorSection } from "@/components/dsr-calculator-section";
import { SITE_URL } from "@/lib/site";

const pageTitle = "DSR 계산기";
const pageDescription =
  "연 소득과 기존·신규 대출로 DSR을 간이 산출합니다. 일반·스트레스 DSR, 원금균등 시 연간 상환 산출 방식(첫 회차·1년차 합산·전체 평균)을 선택할 수 있습니다.";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: `${SITE_URL}/dsr-calculator` },
    openGraph: {
      url: `${SITE_URL}/dsr-calculator`,
      title: `${pageTitle} | Daechulija.com`,
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
            DSR(%)는 「연간 신규·기존 부채 상환액」÷ 연소득 × 100을 적용한 참고용 계산입니다. 하단에 한도·포함 부채·스트레스
            가산 등 기준표를 함께 두었습니다. 원금균등·만기일시는 산출 방식 선택에 따라 결과가 달라질 수 있으며, 실제
            심사는 신청 금융기관에서 확인해야 합니다.
          </p>
        </div>
      </section>

      <AdfitInlineLeader320 className="bg-muted/15 py-4" />
      <DsrCalculatorSection />
    </main>
  );
}
