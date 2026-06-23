import type { Metadata } from "next";
import Link from "next/link";
// import { AdfitInlineLeader320 } from "@/components/adfit-inline-leader-320";
import { PrepaymentFeeCalculatorSection } from "@/components/prepayment-fee-calculator-section";
import { PREPAYMENT_FEE_FORMULA } from "@/lib/prepayment-fee-calculations";
import { SITE_URL } from "@/lib/site";

const pageTitle = "중도상환 수수료 계산기";
const pageDescription =
  "중도상환 원금, 수수료율, 대출기간, 경과 기간을 입력해 중도상환 수수료를 계산합니다. 면제 기간 경과 여부도 함께 확인할 수 있습니다.";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: `${SITE_URL}/prepayment-fee-calculator` },
    openGraph: {
      url: `${SITE_URL}/prepayment-fee-calculator`,
      title: `${pageTitle} | Daechulija.com`,
      description: pageDescription,
    },
  };
}

export default function PrepaymentFeeCalculatorPage() {
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
            {PREPAYMENT_FEE_FORMULA} 공식을 반영했습니다. 면제 기간이 있는 상품은 잔여기간·대출기간 모두 면제 기간
            기준으로 계산합니다. 하단에 수수료율 범위와
            면제·감면 조건을 함께 두었습니다. 계산 결과는 참고용이며, 실제 수수료는 대출 계약서·금융기관 확인이 필요합니다.
          </p>
        </div>
      </section>

      {/* <AdfitInlineLeader320 className="bg-muted/15 py-4" /> */}
      <PrepaymentFeeCalculatorSection />
    </main>
  );
}
