import type { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type CalculatorReferenceCardProps = {
  title: string;
  summary: string;
  footer?: string;
  className?: string;
  children: ReactNode;
};

export function CalculatorReferenceCard({
  title,
  summary,
  footer,
  className,
  children,
}: CalculatorReferenceCardProps) {
  return (
    <Card id="calculation-reference" className={cn("scroll-mt-24 lg:col-span-2", className)}>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <p className="text-muted-foreground text-sm font-normal">{summary}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {children}
        {footer ? <p className="text-muted-foreground text-xs leading-relaxed">{footer}</p> : null}
      </CardContent>
    </Card>
  );
}
