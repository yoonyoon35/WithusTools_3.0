import type { Locale } from "@/i18n/routing";
import type { ToolContentMessages } from "@/lib/tool-content";

/** 정적 export: headers() 없이 locale별 toolContent.json 직접 로드 */
export async function loadToolContent(
  locale: Locale
): Promise<ToolContentMessages> {
  const data = await import(`../../messages/${locale}/toolContent.json`);
  return data.default as ToolContentMessages;
}
