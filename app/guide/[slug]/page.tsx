import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticleShell } from "@/components/guide-article-shell";
import { getAllGuideSlugs, getGuideArticle } from "@/lib/guide/registry";
import { SITE_URL } from "@/lib/site";

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
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `${SITE_URL}/guide/${article.slug}` },
    openGraph: {
      url: `${SITE_URL}/guide/${article.slug}`,
      title: `${article.title} | Daechulija.com`,
      description: article.description,
    },
  };
}

export default async function GuideArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getGuideArticle(slug);
  if (!article) {
    notFound();
  }
  const { Body, title, updated, slug: articleSlug } = article;
  return (
    <GuideArticleShell slug={articleSlug} title={title} updated={updated}>
      <Body />
    </GuideArticleShell>
  );
}
