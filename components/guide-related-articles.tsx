import Link from "next/link";
import { getGuideTopicForSlug, getGuideTopicPath, getRelatedGuideArticles } from "@/lib/guide/topics";

export function GuideRelatedArticles({ slug }: { slug: string }) {
  const topic = getGuideTopicForSlug(slug);
  const related = getRelatedGuideArticles(slug);

  if (!topic || related.length === 0) {
    return null;
  }

  return (
    <aside className="border-border mt-12 border-t pt-10" aria-labelledby="guide-related-title">
      <h2 id="guide-related-title" className="text-lg font-semibold tracking-tight">
        관련 가이드
      </h2>
      <p className="text-muted-foreground mt-1 text-sm">
        「{topic.label}」 주제의 다른 글입니다.
      </p>
      <ul className="mt-4 space-y-3">
        {related.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/guide/${article.slug}`}
              className="hover:bg-muted/50 block rounded-lg border border-border p-4 transition-colors"
            >
              <span className="text-primary font-medium underline-offset-4 hover:underline">{article.title}</span>
              <p className="text-muted-foreground mt-1 text-sm leading-relaxed">{article.description}</p>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-4">
        <Link
          href={getGuideTopicPath(topic.id)}
          className="text-primary text-sm font-medium underline-offset-4 hover:underline"
        >
          {topic.label} 글 전체 보기
        </Link>
      </p>
    </aside>
  );
}
