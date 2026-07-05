import Link from "next/link";
import { ArrowRight, Calculator } from "lucide-react";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { GuideArticleCard } from "@/components/guide-article-card";
import { GuideTopicArticleSections } from "@/components/guide-topic-article-sections";
import { calculatorTools } from "@/lib/calculators";
import { getGuideArticle } from "@/lib/guide/registry";
import { getGuideTopicPath, guideTopics, type GuideTopic } from "@/lib/guide/topics";

function getCalculatorTitle(href: string): string {
  return calculatorTools.find((tool) => tool.href === href)?.title ?? href;
}

export function GuideTopicHubContent({ topic }: { topic: GuideTopic }) {
  const pillar = getGuideArticle(topic.pillarSlug);
  const pageTitle = `${topic.label} 가이드`;

  const breadcrumbs = [
    { name: "홈", href: "/" },
    { name: "가이드", href: "/guide" },
    { name: pageTitle },
  ] as const;

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:py-14" role="main">
      <BreadcrumbNav items={breadcrumbs} />
      <header className="border-primary border-l-4 pl-4 sm:pl-5">
        <h1 className="text-foreground text-balance text-3xl font-bold tracking-tight sm:text-4xl">{pageTitle}</h1>
        <p className="text-muted-foreground mt-3 text-sm leading-relaxed sm:text-base">{topic.description}</p>
      </header>

      {topic.calculatorHrefs.length > 0 ? (
        <section className="mt-8 rounded-xl border border-border bg-muted/20 p-5" aria-labelledby="topic-calculators-title">
          <div className="flex items-center gap-2">
            <Calculator className="text-primary size-5" aria-hidden />
            <h2 id="topic-calculators-title" className="text-lg font-semibold tracking-tight">
              관련 계산기
            </h2>
          </div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {topic.calculatorHrefs.map((href) => (
              <li key={href}>
                <Link
                  href={href}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-colors"
                >
                  {getCalculatorTitle(href)}
                  <ArrowRight className="size-3.5" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {pillar ? (
        <section className="mt-8" aria-labelledby="topic-pillar-title">
          <h2 id="topic-pillar-title" className="text-lg font-semibold tracking-tight">
            먼저 읽을 글
          </h2>
          <div className="mt-4">
            <GuideArticleCard article={pillar} />
          </div>
        </section>
      ) : null}

      <nav className="mt-10 flex flex-wrap gap-2" aria-label="다른 가이드 주제">
        {guideTopics.map((otherTopic) => (
          <Link
            key={otherTopic.id}
            href={getGuideTopicPath(otherTopic.id)}
            className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
              otherTopic.id === topic.id
                ? "border-primary bg-primary/10 text-primary font-medium"
                : "border-border hover:bg-muted"
            }`}
            aria-current={otherTopic.id === topic.id ? "page" : undefined}
          >
            {otherTopic.label}
          </Link>
        ))}
      </nav>

      <div className="mt-10">
        <GuideTopicArticleSections topic={topic} articlesTitle={`${topic.label} 글 목록`} />
      </div>

      <p className="mt-10">
        <Link href="/guide" className="text-primary inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline">
          가이드 전체 목록
          <ArrowRight className="size-3.5" aria-hidden />
        </Link>
      </p>
    </main>
  );
}
