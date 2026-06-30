import * as React from "react";
import { formatAmountKoreanWon } from "@/lib/korean-amount";
import { formatNumber } from "@/lib/loan-calculations";

export function MoneyValue({ amount }: { amount: number }) {
  return (
    <span className="inline-flex flex-col items-end gap-0 text-right leading-tight">
      <span>{formatNumber(amount)}원</span>
      <span className="text-muted-foreground text-xs font-normal leading-snug">{formatAmountKoreanWon(amount)}</span>
    </span>
  );
}

export function SubTextValue({ primary, sub }: { primary: React.ReactNode; sub: string }) {
  return (
    <span className="inline-flex flex-col items-end gap-0 text-right leading-tight">
      <span>{primary}</span>
      <span className="text-muted-foreground text-xs font-normal leading-snug">{sub}</span>
    </span>
  );
}

export function ResultRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1 py-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
      <dt className="text-muted-foreground shrink-0 pt-0.5">{label}</dt>
      <dd className="font-medium tabular-nums text-right">{children}</dd>
    </div>
  );
}
