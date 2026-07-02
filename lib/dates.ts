/** "2026년 4월 14일" → "2026-04-14" */
export function parseKoreanDateLabel(label: string): string | undefined {
  const match = label.match(/(\d{4})년\s*(\d{1,2})월\s*(\d{1,2})일/);
  if (!match) return undefined;
  const [, year, month, day] = match;
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}

export function parseKoreanDateLabelToDate(label: string): Date | undefined {
  const iso = parseKoreanDateLabel(label);
  if (!iso) return undefined;
  const date = new Date(`${iso}T00:00:00+09:00`);
  return Number.isNaN(date.getTime()) ? undefined : date;
}
