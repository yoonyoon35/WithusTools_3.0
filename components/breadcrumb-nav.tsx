import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/schema-builders";

export function BreadcrumbNav({
  items,
}: {
  items: readonly BreadcrumbItem[];
}) {
  return (
    <nav className="text-muted-foreground mb-6 text-sm" aria-label="이동 경로">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.name}-${index}`} className="flex items-center gap-1">
              {index > 0 ? <span aria-hidden>/</span> : null}
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-foreground underline-offset-4 hover:underline">
                  {item.name}
                </Link>
              ) : (
                <span className={isLast ? "text-foreground" : undefined}>{item.name}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
