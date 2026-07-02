import Link from "next/link";
import { authoritativeSources } from "@/lib/authoritative-sources";
import { authorAboutPath, authorDisplayName } from "@/lib/publisher";

export function GuideAuthorByline() {
  return (
    <p className="text-muted-foreground mt-3 text-sm">
      작성:{" "}
      <Link href={authorAboutPath} className="text-foreground underline-offset-4 hover:underline">
        {authorDisplayName}
      </Link>
    </p>
  );
}

export function GuideUpdatedTime({ label, iso }: { label: string; iso?: string }) {
  if (iso) {
    return (
      <p className="text-muted-foreground mt-1 text-sm">
        게시·수정: <time dateTime={iso}>{label}</time>
      </p>
    );
  }
  return <p className="text-muted-foreground mt-1 text-sm">게시·수정: {label}</p>;
}

export function GuideAuthoritativeSources() {
  return (
    <section className="border-border mt-12 border-t pt-8" aria-labelledby="guide-sources-title">
      <h2 id="guide-sources-title" className="text-lg font-semibold tracking-tight">
        참고·출처
      </h2>
      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
        본 글은 운영자가 확인한 공공 자료와 실무 경험을 바탕으로 작성했습니다. 세율·요율·심사 기준은 변경될 수 있으므로
        아래 공식 사이트에서 최신 내용을 확인하세요.
      </p>
      <ul className="mt-4 space-y-2 text-sm">
        {authoritativeSources.map((source) => (
          <li key={source.url}>
            <a
              href={source.url}
              className="text-primary font-medium underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {source.name}
            </a>
            <span className="text-muted-foreground"> — {source.description}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
