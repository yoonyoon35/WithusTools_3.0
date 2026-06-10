import type { Locale } from "@/i18n/routing";
import { TOOLS, type Tool } from "@/data/tools";
import type { HubCardsMessages } from "@/lib/hub-cards";
import type { PageMetaMessages } from "@/lib/page-metadata";
import type { ToolContentMessages } from "@/lib/tool-content";

export type ToolsMessages = Record<
  string,
  { title: string; description: string }
>;

export type PathTitlesMessages = Record<string, string>;

export type BreadcrumbMessages = {
  names: Record<string, string>;
  pathOverrides: Record<string, string>;
  home: string;
};

export type CatalogMessages = {
  tools?: ToolsMessages;
  pathTitles?: PathTitlesMessages;
  breadcrumb?: BreadcrumbMessages;
  pageMeta?: PageMetaMessages;
  hubCards?: HubCardsMessages;
  toolContent?: ToolContentMessages;
};

function slugToFallbackTitle(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

export function getLocalizedTool(
  tool: Tool,
  messages: CatalogMessages
): Tool {
  const entry = messages.tools?.[tool.id];
  if (!entry) return tool;
  return {
    ...tool,
    title: entry.title,
    description: entry.description,
  };
}

export function getLocalizedTools(messages: CatalogMessages): Tool[] {
  return TOOLS.map((tool) => getLocalizedTool(tool, messages));
}

export function getPathTitle(
  path: string,
  messages: CatalogMessages
): string | undefined {
  return messages.pathTitles?.[path];
}

export function resolvePathTitle(
  path: string,
  messages: CatalogMessages
): string {
  const fromPath = getPathTitle(path, messages);
  if (fromPath) return fromPath;

  const tool = TOOLS.find((t) => t.path === path);
  if (tool) return getLocalizedTool(tool, messages).title;

  const last = path.split("/").filter(Boolean).pop() || "";
  const fromSlug = messages.breadcrumb?.names[last];
  if (fromSlug) return fromSlug;

  return slugToFallbackTitle(last) || "Tool";
}

export function getBreadcrumbSlugLabel(
  slug: string,
  messages: CatalogMessages
): string {
  return messages.breadcrumb?.names[slug] ?? slugToFallbackTitle(slug);
}

export function getBreadcrumbPathOverride(
  path: string,
  messages: CatalogMessages
): string | undefined {
  return messages.breadcrumb?.pathOverrides[path];
}

export function getBreadcrumbHomeLabel(messages: CatalogMessages): string {
  return messages.breadcrumb?.home ?? "Home";
}
