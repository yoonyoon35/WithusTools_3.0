import type { Metadata } from "next";
import Link from "next/link";
// import { AdfitInlineLeader320 } from "@/components/adfit-inline-leader-320";
import { GuideArticleCard } from "@/components/guide-article-card";
import { guideTopics, getGuideTopicsWithArticles } from "@/lib/guide/topics";
import { SITE_URL } from "@/lib/site";

const pageTitle = "대출·금융 가이드";

export async function generateMetadata(): Promise<Metadata> {
  const description =
    "DSR, 주택담보대출 한도, 취득세, 중개보수 등 대출·금융·부동산 거래 가이드를 주제별로 모았습니다. 2026년 기준 세율·요율·신청 절차와 계산 방법을 표와 예시로 정리한 참고 글입니다. 각 글은 실제 심사·신고·협의 결과와 다를 수 있으니 개별 확인이 필요합니다.";
  return {
    title: pageTitle,
    description,
    alternates: { canonical: `${SITE_URL}/guide` },
    openGraph: {
      url: `${SITE_URL}/guide`,
      title: `${pageTitle} | Daechulija.com`,
      description,
    },
  };
}

export function GuideIndexContent() {
  const topicsWithArticles = getGuideTopicsWithArticles();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:py-14" role="main">
      <nav className="text-muted-foreground mb-8 text-sm" aria-label="이동 경로">
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

      {/* <AdfitInlineLeader320 className="mt-8" /> */}

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
    </main>
  );
}

export default function GuideIndexPage() {
  return <GuideIndexContent />;
}
