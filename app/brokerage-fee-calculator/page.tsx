import type { Metadata } from "next";
import Link from "next/link";
import { AdfitInlineLeader320 } from "@/components/adfit-inline-leader-320";
import { BrokerageFeeCalculatorSection } from "@/components/brokerage-fee-calculator-section";
import { SITE_URL } from "@/lib/site";

const pageTitle = "중개보수 계산기";
const pageDescription =
  "서울특별시 고시 부동산 중개보수 상한 요율에 따라 주택·오피스텔·기타 부동산의 법정 최대 중개보수를 계산합니다.";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: `${SITE_URL}/brokerage-fee-calculator` },
    openGraph: {
      url: `${SITE_URL}/brokerage-fee-calculator`,
      title: `${pageTitle} | Daechulija.com`,
      description: pageDescription,
    },
  };
}

export default function BrokerageFeeCalculatorPage() {
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
            서울시 고시 요율을 반영했습니다. 하단에 요율표와 적용기준을 함께 두었습니다. 계산 결과는 참고용이며, 실제 협의 금액·부가세·관할
            고시는 개별 확인이 필요합니다.
          </p>
        </div>
      </section>

      <AdfitInlineLeader320 className="bg-muted/15 py-4" />
      <BrokerageFeeCalculatorSection />
    </main>
  );
}
