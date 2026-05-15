import type { Metadata } from "next";
import Link from "next/link";
import { AdfitInlineLeader320 } from "@/components/adfit-inline-leader-320";
import { guideArticles } from "@/lib/guide/registry";
import { SITE_URL } from "@/lib/site";

const pageTitle = "대출·금융 가이드";
const ITEMS_PER_PAGE = 4;

function parseKoreanDate(value: string): number {
  const match = value.match(/(\d{4})년\s*(\d{1,2})월\s*(\d{1,2})일/);
  if (!match) return 0;

  const [, year, month, day] = match;
  return new Date(Number(year), Number(month) - 1, Number(day)).getTime();
}

export async function generateMetadata(): Promise<Metadata> {
  const description =
    "DSR, 주택담보대출 한도 등 대출·금융을 이해하는 데 도움이 되는 참고 글을 모았습니다. 실제 조건은 금융기관에 문의하세요.";
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

function buildGuidePageHref(page: number): string {
  return page === 1 ? "/guide" : `/guide/page/${page}`;
}

function getSortedGuideArticles() {
  return [...guideArticles]
    .map((article, index) => ({ article, index }))
    .sort((a, b) => {
      const dateDiff = parseKoreanDate(b.article.updated) - parseKoreanDate(a.article.updated);
      if (dateDiff !== 0) return dateDiff;
      return b.index - a.index;
    })
    .map(({ article }) => article);
}

export function getGuideTotalPages(): number {
  return Math.max(1, Math.ceil(getSortedGuideArticles().length / ITEMS_PER_PAGE));
}

export function GuideIndexContent({ initialPage }: { initialPage: number }) {
  const sortedGuideArticles = getSortedGuideArticles();
  const totalPages = getGuideTotalPages();
  const currentPage = Math.min(Math.max(initialPage, 1), totalPages);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedGuideArticles = sortedGuideArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

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
          참고용 설명 글입니다. 약관·개인정보 처리 방침과 달리 법적 효력을 주장하지 않으며, 실제 심사 결과와 다를 수 있습니다.
        </p>
      </header>
      <AdfitInlineLeader320 className="mt-8" />
      <ul className="mt-10 space-y-6">
        {paginatedGuideArticles.map((article) => (
          <li key={article.slug}>
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
              <p className="text-muted-foreground mt-2 text-xs">게시·수정: {article.updated}</p>
            </article>
          </li>
        ))}
      </ul>
      {totalPages > 1 ? (
        <nav className="mt-8 flex items-center justify-center gap-2" aria-label="가이드 목록 페이지 이동">
          <Link
            href={buildGuidePageHref(Math.max(currentPage - 1, 1))}
            className={`rounded border px-3 py-1 text-sm ${
              currentPage === 1 ? "pointer-events-none opacity-50" : "hover:bg-muted"
            }`}
            aria-disabled={currentPage === 1}
          >
            이전
          </Link>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <Link
              key={page}
              href={buildGuidePageHref(page)}
              className={`rounded border px-3 py-1 text-sm ${
                page === currentPage ? "bg-primary text-primary-foreground border-primary" : "hover:bg-muted"
              }`}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </Link>
          ))}
          <Link
            href={buildGuidePageHref(Math.min(currentPage + 1, totalPages))}
            className={`rounded border px-3 py-1 text-sm ${
              currentPage === totalPages ? "pointer-events-none opacity-50" : "hover:bg-muted"
            }`}
            aria-disabled={currentPage === totalPages}
          >
            다음
          </Link>
        </nav>
      ) : null}
    </main>
  );
}

export default function GuideIndexPage() {
  return <GuideIndexContent initialPage={1} />;
}
