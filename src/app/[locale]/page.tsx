import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/page-metadata";
import HomePageClient from "./HomePageClient";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return generatePageMetadata(params.locale, "/");
}

export default function HomePage() {
  return <HomePageClient />;
}
