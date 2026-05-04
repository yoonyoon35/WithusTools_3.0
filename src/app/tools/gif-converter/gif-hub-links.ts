import { GIF_CONVERTER_FORMATS } from "@/data/prerender-segments";
import { GIF_FORMAT_PAGE_META } from "./gif-format-page-meta";

export const GIF_CONVERTER_HUB_LINKS = GIF_CONVERTER_FORMATS.map((slug) => {
  const m = GIF_FORMAT_PAGE_META[slug];
  return {
    slug,
    name: m.title,
    description: m.description,
    path: `/tools/gif-converter/${slug}`,
  };
});
