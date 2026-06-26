import Link from "next/link";
import { ArrowRight, BookOpen, Calculator } from "lucide-react";
import { calculatorTools } from "@/lib/calculators";
import { getGuideArticle } from "@/lib/guide/registry";
import { guideTopics } from "@/lib/guide/topics";
import { referenceDisclaimerLine, SITE_NAME, siteTagline } from "@/lib/site";

const featuredGuideSlugs = [
  "dsr-40-mortgage-limit",
  "acquisition-tax-rates-2026-guide",
  "brokerage-fee-rates-2026-guide",
  "equal-payment-vs-equal-principal",
  "first-time-homebuyer-benefits-2026",
] as const;

export function HubHeroSection() {
  return (
    <section
      className="from-primary/10 via-background to-background border-b bg-gradient-to-b py-10 sm:py-14"
      aria-labelledby="hub-hero-title"
    >
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-primary text-sm font-medium tracking-wide">{SITE_NAME}</p>
        <h1 id="hub-hero-title" className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          {siteTagline}
        </h1>
        <p className="text-muted-foreground mt-3 max-w-3xl text-sm leading-relaxed sm:text-base">
          대출 이자·DSR·취득세·중개보수 등 계산기와 가이드를 한곳에서 이용할 수 있습니다. {referenceDisclaimerLine}
        </p>
        <div className="mt-6">
          <Link
            href="/loan-calculator"
            className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors"
          >
            대출 이자 계산기 바로가기
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CalculatorGridSection() {
  return (
    <section className="py-10 sm:py-14" aria-labelledby="calculators-title">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center gap-2">
          <Calculator className="text-primary size-5" aria-hidden />
          <h2 id="calculators-title" className="text-2xl font-bold tracking-tight sm:text-3xl">
            계산기
          </h2>
        </div>
        <p className="text-muted-foreground mt-2 text-sm sm:text-base">
          필요한 계산기를 선택해 조건별 결과를 참고해 보세요.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {calculatorTools.map((tool) => (
            <li key={tool.href}>
              <Link
                href={tool.href}
                className={`hover:border-primary/40 hover:bg-muted/40 group flex h-full flex-col rounded-xl border p-5 transition-colors ${
                  tool.featured ? "border-primary/30 bg-primary/5 ring-primary/20 ring-1" : "border-border bg-card"
                }`}
              >
                <span className="group-hover:text-primary text-base font-semibold">{tool.title}</span>
                <span className="text-muted-foreground mt-2 flex-1 text-sm leading-relaxed">{tool.description}</span>
                <span className="text-primary mt-4 inline-flex items-center gap-1 text-sm font-medium">
                  계산하기
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function GuideTopicsSection() {
  return (
    <section className="bg-muted/20 border-y py-10 sm:py-14" aria-labelledby="guides-title">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center gap-2">
          <BookOpen className="text-primary size-5" aria-hidden />
          <h2 id="guides-title" className="text-2xl font-bold tracking-tight sm:text-3xl">
            가이드
          </h2>
        </div>
        <p className="text-muted-foreground mt-2 text-sm sm:text-base">
          DSR·상환·취득세·중개보수 등 주제별 설명 글을 확인할 수 있습니다.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {guideTopics.map((topic) => (
            <li key={topic.id}>
              <Link
                href={`/guide#${topic.id}`}
                className="hover:border-primary/40 hover:bg-card group flex h-full flex-col rounded-xl border border-border bg-card/80 p-5 transition-colors"
              >
                <span className="group-hover:text-primary text-base font-semibold">{topic.label}</span>
                <span className="text-muted-foreground mt-2 text-sm leading-relaxed">{topic.description}</span>
                <span className="text-muted-foreground mt-3 text-xs">{topic.slugs.length}편</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          <Link href="/guide" className="text-primary inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline">
            가이드 전체 보기
            <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        </p>
      </div>
    </section>
  );
}

export function FeaturedGuidesSection() {
  const articles = featuredGuideSlugs
    .map((slug) => getGuideArticle(slug))
    .filter((article): article is NonNullable<typeof article> => article != null);

  if (articles.length === 0) return null;

  return (
    <section className="py-10 sm:py-14" aria-labelledby="featured-guides-title">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="featured-guides-title" className="text-2xl font-bold tracking-tight sm:text-3xl">
          자주 찾는 가이드
        </h2>
        <ul className="mt-8 divide-y rounded-xl border">
          {articles.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/guide/${article.slug}`}
                className="hover:bg-muted/40 block px-5 py-4 transition-colors"
              >
                <span className="font-medium">{article.title}</span>
                <span className="text-muted-foreground mt-1 block text-sm leading-relaxed">{article.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
