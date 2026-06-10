"use client";

import { useMessages } from "next-intl";
import type { CatalogMessages } from "@/lib/i18n-catalog";

export function useCatalogMessages(): CatalogMessages {
  return useMessages() as CatalogMessages;
}
