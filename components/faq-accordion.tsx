"use client";

import * as React from "react";
import type { FaqItem } from "@/lib/faq-data";
import { cn } from "@/lib/utils";

export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <div className="space-y-2" role="list">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.question}
            className="bg-card rounded-xl border ring-1 ring-foreground/10"
            role="listitem"
          >
            <button
              type="button"
              id={`faq-q-${i}`}
              aria-expanded={isOpen}
              aria-controls={`faq-a-${i}`}
              className="flex w-full items-start justify-between gap-3 px-4 py-3 text-left text-sm font-medium sm:text-base"
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span>{item.question}</span>
              <span className="text-muted-foreground shrink-0 text-lg leading-none" aria-hidden>
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              id={`faq-a-${i}`}
              role="region"
              aria-labelledby={`faq-q-${i}`}
              className={cn("px-4 pb-3 text-sm leading-relaxed", !isOpen && "hidden")}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
