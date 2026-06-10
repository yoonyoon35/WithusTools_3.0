"use client";

import { useMessages } from "next-intl";
import type { CatalogMessages } from "@/lib/i18n-catalog";
import {
  getToolContentEntry,
  type ToolPageContent,
} from "@/lib/tool-content";

export function useToolPageContent(metaPath: string): ToolPageContent | undefined {
  const messages = useMessages() as CatalogMessages;
  return getToolContentEntry(messages.toolContent, metaPath);
}

export default useToolPageContent;
