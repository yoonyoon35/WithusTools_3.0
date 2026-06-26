import type { Metadata } from "next";
import {
  CalculatorGridSection,
  FeaturedGuidesSection,
  GuideTopicsSection,
  HubHeroSection,
} from "@/components/marketing/hub-home-sections";
import { defaultDescription, defaultTitle, SITE_URL } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: defaultTitle,
    description: defaultDescription,
    alternates: { canonical: SITE_URL },
    openGraph: {
      url: SITE_URL,
      title: defaultTitle,
      description: defaultDescription,
    },
  };
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
