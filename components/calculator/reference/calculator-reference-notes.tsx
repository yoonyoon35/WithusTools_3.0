type CalculatorReferenceNotesProps = {
  number?: number;
  title?: string;
  subtitle?: string;
  notes: readonly string[];
};

export function CalculatorReferenceNotes({
  number,
  title = "계산기 활용 참고",
  subtitle = "본 계산기에 반영된 범위와 한계를 요약했습니다.",
  notes,
}: CalculatorReferenceNotesProps) {
  const heading = number != null ? `${number}. ${title}` : title;

  return (
    <div className="relative overflow-hidden rounded-xl border bg-card shadow-sm">
      <div className="from-primary/15 via-primary/8 bg-gradient-to-r to-transparent px-4 py-3 sm:px-5">
        <h3 className="text-primary text-base font-semibold tracking-tight">{heading}</h3>
        <p className="text-muted-foreground mt-1 text-xs">{subtitle}</p>
      </div>
      <ol className="list-none space-y-3 p-4 sm:p-5">
        {notes.map((text, index) => (
          <li key={index} className="flex gap-3 text-sm leading-relaxed">
            <span className="border-amber-800/25 bg-amber-100 text-amber-950 dark:bg-amber-950/45 dark:border-amber-700/40 dark:text-amber-50 mt-0.5 flex size-6 shrink-0 items-center justify-center rounded border text-xs font-semibold">
              {index + 1}
            </span>
            <span>{text}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
