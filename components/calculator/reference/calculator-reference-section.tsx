import type { ReactNode } from "react";

type CalculatorReferenceSectionProps = {
  number: number;
  title: string;
  subtitle?: string;
  footnote?: ReactNode;
  children: ReactNode;
};

export function CalculatorReferenceSection({
  number,
  title,
  subtitle,
  footnote,
  children,
}: CalculatorReferenceSectionProps) {
  return (
    <section className="space-y-2">
      <p className="text-sm font-semibold">
        {number}. {title}
      </p>
      {subtitle ? <p className="text-muted-foreground text-xs">{subtitle}</p> : null}
      {children}
      {footnote ? <p className="text-muted-foreground text-xs leading-relaxed">{footnote}</p> : null}
    </section>
  );
}
