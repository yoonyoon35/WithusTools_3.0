import { Children, Fragment, type ReactNode } from "react";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { parseKoreanDateLabel } from "@/lib/dates";

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
  const updatedIso = parseKoreanDateLabel(updated);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:py-14" role="main">
      <BreadcrumbNav items={[{ name: "홈", href: "/" }, { name: title }]} />
      <article>
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          최종 수정일:{" "}
          {updatedIso ? <time dateTime={updatedIso}>{updated}</time> : updated}
        </p>
        <div className="mt-8 space-y-6 text-sm leading-relaxed">
          {blocks.map((block, i) => (
            <Fragment key={`legal-block-${i}`}>{block}</Fragment>
          ))}
        </div>
      </article>
    </main>
  );
}
