import { permanentRedirect } from "next/navigation";
import { guideArticles } from "@/lib/guide/registry";

const ITEMS_PER_PAGE = 4;

type GuidePageParams = {
  page: string;
};

function getGuideTotalPages(): number {
  return Math.max(1, Math.ceil(guideArticles.length / ITEMS_PER_PAGE));
}

export function generateStaticParams(): GuidePageParams[] {
  const totalPages = getGuideTotalPages();

  return Array.from({ length: Math.max(totalPages - 1, 0) }, (_, index) => ({
    page: String(index + 2),
  }));
}

export default async function GuidePaginatedIndexPage({
  params,
}: {
  params: Promise<GuidePageParams>;
}) {
  await params;
  permanentRedirect("/guide");
}
