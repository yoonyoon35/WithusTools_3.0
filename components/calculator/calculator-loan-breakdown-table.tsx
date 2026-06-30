import * as React from "react";
import { cn } from "@/lib/utils";

const thClass =
  "break-keep px-1 py-1 font-medium whitespace-nowrap sm:px-2 sm:py-1.5";
const tdClass = "px-1 py-1 sm:px-2 sm:py-1.5";

export function CalculatorLoanBreakdownTable({
  caption,
  columnCount,
  header,
  children,
  footnote,
}: {
  caption: string;
  columnCount: number;
  header: React.ReactNode;
  children: React.ReactNode;
  footnote?: React.ReactNode;
}) {
  const colWidth = `${100 / columnCount}%`;

  return (
    <div className="overflow-hidden rounded-md border">
      <table
        className="w-full border-collapse text-[11px] leading-tight sm:text-sm sm:leading-normal"
        style={{ tableLayout: "fixed", width: "100%" }}
      >
        <caption className="sr-only">{caption}</caption>
        <colgroup>
          {Array.from({ length: columnCount }).map((_, i) => (
            <col key={i} style={{ width: colWidth }} />
          ))}
        </colgroup>
        <thead className="bg-muted/50 border-b">{header}</thead>
        <tbody>{children}</tbody>
      </table>
      {footnote ? (
        <p className="text-muted-foreground border-t px-2 py-1.5 text-xs leading-relaxed">{footnote}</p>
      ) : null}
    </div>
  );
}

export function LoanBreakdownTh({
  children,
  align = "left",
  className,
}: {
  children: React.ReactNode;
  align?: "left" | "right";
  className?: string;
}) {
  return (
    <th
      scope="col"
      className={cn(thClass, align === "right" ? "text-right" : "text-left", className)}
    >
      {children}
    </th>
  );
}

export function LoanBreakdownTd({
  children,
  align = "left",
  muted,
  truncate: truncateCell,
  className,
}: {
  children: React.ReactNode;
  align?: "left" | "right";
  muted?: boolean;
  truncate?: boolean;
  className?: string;
}) {
  return (
    <td
      className={cn(
        tdClass,
        align === "right" ? "text-right tabular-nums" : "text-left",
        muted && "text-muted-foreground",
        truncateCell && "truncate font-medium",
        !truncateCell && !muted && align === "left" && "font-medium",
        className,
      )}
    >
      {children}
    </td>
  );
}
