import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/page-metadata";
import ToolsPageContent from "./ToolsPageContent";

const META_PATH = "/tools";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return generatePageMetadata(params.locale, META_PATH);
}

export default function ToolsPage() {
  return <ToolsPageContent />;
}
