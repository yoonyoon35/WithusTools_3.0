import Link from "next/link";
import { Children, Fragment, type ReactNode } from "react";
// import { AdfitInlineLeader320 } from "@/components/adfit-inline-leader-320";
// import { leaderAdIndicesAfterWhichToInsert } from "@/lib/ads/in-flow-leader";

export function LegalPageShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  const blocks = Children.toArray(children);
  // const leaderAfter = new Set(leaderAdIndicesAfterWhichToInsert(blocks.length));

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:py-14" role="main">
      <nav className="text-muted-foreground mb-8 text-sm" aria-label="이동 경로">
        <ol className="flex flex-wrap gap-1">
          <li>
            <Link href="/" className="hover:text-foreground underline-offset-4 hover:underline">
              홈
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="text-foreground">{title}</li>
        </ol>
      </nav>
      <article>
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="text-muted-foreground mt-2 text-sm">최종 수정일: {updated}</p>
        <div className="mt-8 space-y-6 text-sm leading-relaxed">
          {blocks.flatMap((block, i) => {
            const nodes = [
              <Fragment key={`legal-block-${i}`}>
                {block}
              </Fragment>,
            ];
            {/* if (leaderAfter.has(i)) {
              nodes.push(
                <div key={`legal-ad-${i}`} className="py-2">
                  <AdfitInlineLeader320 />
                </div>,
              );
            } */}
            return nodes;
          })}
        </div>
      </article>
    </main>
  );
}
