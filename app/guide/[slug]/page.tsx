import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticleJsonLd } from "@/components/json-ld";
import { GuideArticleShell } from "@/components/guide-article-shell";
import { parseKoreanDateLabel } from "@/lib/dates";
import { getAllGuideSlugs, getGuideArticle } from "@/lib/guide/registry";
import { createPageMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getGuideArticle(slug);
  if (!article) {
    return { title: "가이드" };
  }
  return createPageMetadata({
    title: article.title,
    description: article.description,
    path: `/guide/${article.slug}`,
  });
}

export default async function GuideArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getGuideArticle(slug);
  if (!article) {
    notFound();
  }
  const { Body, title, description, updated, slug: articleSlug } = article;
  const dateModifiedIso = parseKoreanDateLabel(updated);

  return (
    <>
      <GuideArticleJsonLd
        title={title}
        description={description}
        slug={articleSlug}
        dateModifiedIso={dateModifiedIso}
      />
      <GuideArticleShell slug={articleSlug} title={title} updated={updated}>
        <Body />
      </GuideArticleShell>
    </>
  );
}
