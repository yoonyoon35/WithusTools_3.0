import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { FaqSection } from "@/components/faq-section";
import { FAQPageJsonLd } from "@/components/json-ld";
import { GuideArticleCard } from "@/components/guide-article-card";
import { guideIndexFaqItems } from "@/lib/faq-data";
import { guideTopics, getGuideTopicsWithArticles } from "@/lib/guide/topics";
import { createPageMetadata } from "@/lib/metadata";

const pageTitle = "대출·금융 가이드";
const pageDescription =
  "DSR, 주택담보대출 한도, 취득세, 중개수수료 등 대출·금융·부동산 거래 가이드를 주제별로 모았습니다. 2026년 기준 세율·요율·신청 절차와 계산 방법을 표와 예시로 정리한 참고 글입니다. 각 글은 실제 심사·신고·협의 결과와 다를 수 있으니 개별 확인이 필요합니다.";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({
    title: pageTitle,
    description: pageDescription,
    path: "/guide",
  });
}

export function GuideIndexContent() {
  const topicsWithArticles = getGuideTopicsWithArticles();
  const breadcrumbs = [
    { name: "홈", href: "/" },
    { name: pageTitle },
  ] as const;

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:py-14" role="main">
      <FAQPageJsonLd items={guideIndexFaqItems} breadcrumbs={breadcrumbs} />
      <BreadcrumbNav items={breadcrumbs} />
      <header className="border-primary border-l-4 pl-4 sm:pl-5">
        <h1 className="text-foreground text-balance text-3xl font-bold tracking-tight sm:text-4xl">{pageTitle}</h1>
        <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
          참고용 설명 글입니다. 주제별로 묶어 두었으며, 각 글 하단에서 같은 주제의 관련 글로 이동할 수 있습니다. 실제 심사·신고
          결과와 다를 수 있습니다.
        </p>
      </header>

      <nav className="mt-8 flex flex-wrap gap-2" aria-label="가이드 주제">
        {guideTopics.map((topic) => (
          <Link
            key={topic.id}
            href={`#${topic.id}`}
            className="hover:bg-muted rounded-full border border-border px-3 py-1.5 text-sm transition-colors"
          >
            {topic.label}
          </Link>
        ))}
      </nav>

      <div className="mt-10 space-y-12">
        {topicsWithArticles.map(({ topic, articles }) => (
          <section key={topic.id} id={topic.id} className="scroll-mt-24">
            <div className="mb-5">
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl">{topic.label}</h2>
              <p className="text-muted-foreground mt-1 text-sm leading-relaxed">{topic.description}</p>
            </div>
            <ul className="space-y-4">
              {articles.map((article) => (
                <li key={article.slug}>
                  <GuideArticleCard article={article} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section id="faq" className="scroll-mt-24 mt-14 border-t pt-12" aria-labelledby="guide-faq-title">
        <h2 id="guide-faq-title" className="text-2xl font-bold tracking-tight sm:text-3xl">
          자주 묻는 질문
        </h2>
        <div className="mt-8">
          <FaqSection items={guideIndexFaqItems} />
        </div>
      </section>
    </main>
  );
}

export default function GuideIndexPage() {
  return <GuideIndexContent />;
}
