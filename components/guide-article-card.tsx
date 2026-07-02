import Link from "next/link";
import type { GuideArticle } from "@/lib/guide/registry";
import { parseKoreanDateLabel } from "@/lib/dates";

export function GuideArticleCard({ article }: { article: GuideArticle }) {
  const updatedIso = parseKoreanDateLabel(article.updated);

  return (
    <article className="rounded-lg border border-border p-4 sm:p-5">
      <h2 className="text-lg font-semibold tracking-tight">
        <Link
          href={`/guide/${article.slug}`}
          className="text-primary hover:text-primary/90 underline-offset-4 hover:underline"
        >
          {article.title}
        </Link>
      </h2>
      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{article.description}</p>
      <p className="text-muted-foreground mt-2 text-xs">
        게시·수정:{" "}
        {updatedIso ? <time dateTime={updatedIso}>{article.updated}</time> : article.updated}
      </p>
    </article>
  );
}
