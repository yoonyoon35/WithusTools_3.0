import { GuideArticleBodyWithMidAd } from "@/components/guide-article-body-with-mid-ad";
import {
  GuideAuthoritativeSources,
  GuideAuthorByline,
  GuideUpdatedTime,
} from "@/components/guide-meta-footer";
import { GuideRelatedArticles } from "@/components/guide-related-articles";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { parseKoreanDateLabel } from "@/lib/dates";
import { getGuideTopicForSlug, getGuideTopicPath } from "@/lib/guide/topics";

export function GuideArticleShell({
  slug,
  title,
  updated,
  children,
}: {
  slug: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  const updatedIso = parseKoreanDateLabel(updated);
  const topic = getGuideTopicForSlug(slug);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:py-14" role="main">
      <BreadcrumbNav
        items={[
          { name: "홈", href: "/" },
          { name: "가이드", href: "/guide" },
          ...(topic
            ? [{ name: `${topic.label} 가이드`, href: getGuideTopicPath(topic.id) }]
            : []),
          { name: title },
        ]}
      />
      <article>
        <header className="border-primary border-l-4 pl-4 sm:pl-5">
          <h1 className="text-foreground text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h1>
          <GuideAuthorByline />
          <GuideUpdatedTime label={updated} iso={updatedIso} />
        </header>
        <GuideArticleBodyWithMidAd>{children}</GuideArticleBodyWithMidAd>
        <GuideRelatedArticles slug={slug} />
        <GuideAuthoritativeSources />
      </article>
    </main>
  );
}
