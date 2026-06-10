import { metaPathToKey } from "@/lib/page-metadata";

export type HubCardsMessages = {
  byPath?: Record<string, string>;
};

export function getHubCardDescription(
  hubCards: HubCardsMessages | undefined,
  metaPath: string
): string | undefined {
  return hubCards?.byPath?.[metaPathToKey(metaPath)];
}
