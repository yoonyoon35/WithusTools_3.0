import type { Metadata } from "next";
import { FaqAccordion } from "@/components/faq-accordion";
import { LoanCalculatorSection } from "@/components/loan-calculator-section";
// import { HomeAdBandAfterCalculator, HomeAdBandAfterHero } from "@/components/marketing/home-in-flow-ad-slots";
// import { AdfitInlineLeader320 } from "@/components/adfit-inline-leader-320";
import { HeroSection } from "@/components/marketing/home-sections";
import { defaultDescription, defaultTitle, SITE_URL } from "@/lib/site";
import { faqItems } from "@/lib/faq-data";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: defaultTitle,
    description: defaultDescription,
    alternates: { canonical: SITE_URL },
    openGraph: {
      url: SITE_URL,
      title: defaultTitle,
      description: defaultDescription,
    },
  };
}

export default function HomePage() {
  return (
    <main role="main">
      <HeroSection />
      {/* <HomeAdBandAfterHero /> */}
      <LoanCalculatorSection />
      {/* <HomeAdBandAfterCalculator /> */}
      {/* <AdfitInlineLeader320 className="bg-muted/15 border-border border-y py-5" /> */}
      <section id="faq" className="scroll-mt-24 py-10 sm:py-14" aria-labelledby="faq-title">
        <div className="mx-auto max-w-3xl px-4">
          <h2 id="faq-title" className="text-2xl font-bold tracking-tight sm:text-3xl">
            자주 묻는 질문
          </h2>
          <div className="mt-8">
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </section>
    </main>
  );
}
