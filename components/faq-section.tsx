import type { FaqItem } from "@/lib/faq-data";

export function FaqSection({ items }: { items: readonly FaqItem[] }) {
  return (
    <div className="space-y-2" role="list">
      {items.map((item, i) => (
        <details
          key={item.question}
          open={i === 0}
          className="bg-card group rounded-xl border ring-1 ring-foreground/10"
          role="listitem"
        >
          <summary
            id={`faq-q-${i}`}
            className="flex cursor-pointer list-none items-start justify-between gap-3 px-4 py-3 text-left text-sm font-medium marker:content-none sm:text-base [&::-webkit-details-marker]:hidden"
          >
            <span>{item.question}</span>
            <span
              className="text-muted-foreground shrink-0 text-lg leading-none group-open:hidden"
              aria-hidden
            >
              +
            </span>
            <span
              className="text-muted-foreground hidden shrink-0 text-lg leading-none group-open:inline"
              aria-hidden
            >
              −
            </span>
          </summary>
          <div
            id={`faq-a-${i}`}
            role="region"
            aria-labelledby={`faq-q-${i}`}
            className="px-4 pb-3 text-sm leading-relaxed"
          >
            <p>{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
