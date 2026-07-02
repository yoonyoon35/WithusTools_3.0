import type { Metadata } from "next";
import {
  CalculatorGridSection,
  FeaturedGuidesSection,
  GuideTopicsSection,
  HubHeroSection,
} from "@/components/marketing/hub-home-sections";
import { createPageMetadata } from "@/lib/metadata";
import { defaultDescription, defaultTitle } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({
    title: defaultTitle,
    description: defaultDescription,
    path: "/",
  });
}

export default function HomePage() {
  return (
    <main role="main">
      <HubHeroSection />
      <CalculatorGridSection />
      <GuideTopicsSection />
      <FeaturedGuidesSection />
    </main>
  );
}
