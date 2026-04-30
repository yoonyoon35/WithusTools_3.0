import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import FaviconGenerator from "./FaviconGenerator";

export const metadata: Metadata = createMetadata({
  title: "Create All Platform Favicons",
  description:
    "Create a full favicon package online in your browser. Export favicon files, manifest, and HTML tags for web, iOS, Android, and Windows.",
  path: "/tools/seo/favicon-generator",
  keywords: [
    "favicon generator",
    "favicon maker",
    "favicon creator",
    "website icon generator",
    "favicon converter",
    "favicon package",
    "favicon design",
    "withustools",
  ],
});

const FAVICON_GUIDE = {
  usage: [
    "Upload a square logo image (260x260 or larger).",
    "Pick the icon sets you need: browser favicon, Apple, Android, Windows, or Safari pinned tab.",
    "Add site name and icon path settings, then click Generate Favicons.",
    "Copy the HTML tags or download the full favicon package.",
  ],
  howItWorks: [
    "The favicon generator resizes your image into the icon sizes each platform expects.",
    "You get favicon PNG files plus `site.webmanifest`, `browserconfig.xml`, and ready-to-paste link tags.",
    "Everything runs locally as a browser favicon workflow, so files stay on your device.",
  ],
  about: [
    "This online favicon generator helps you ship one consistent icon set across major platforms.",
    "It is useful when launching a new site, redesigning branding, or fixing missing app icons.",
    "No signup is needed.",
  ],
  advantages: [
    "Supports browser favicon, Apple touch icon, Android icon, and Windows tile exports.",
    "Provides implementation files and HTML tags in one download.",
    "Runs fully in your browser for private local processing.",
    "Works instantly without account setup.",
  ],
  useCases: [
    "Preparing favicon assets right before a website launch.",
    "Refreshing icons during a brand update.",
    "Creating install icons for PWA and mobile home screens.",
    "Fixing inconsistent favicon display across browsers.",
  ],
};

const FAQ_ITEMS = [
  {
    question: "What image size works best in this favicon generator?",
    answer:
      "Use a square image at least 260x260 pixels. Larger source images usually produce cleaner results across all favicon sizes.",
  },
  {
    question: "Does this online favicon generator work for Apple and Android?",
    answer:
      "Yes. You can generate Apple touch icons, Android icons, browser favicon files, and related manifest files in one run.",
  },
  {
    question: "Is my image uploaded to a server?",
    answer:
      "No. Processing happens in your browser, so your files stay local on your device.",
  },
];

export default function FaviconGeneratorPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="seo" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Favicon Generator</h1>
            <p className="mt-1 text-sm text-slate-500">seo</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Build a complete favicon package online in minutes. Generate browser favicon files
        and platform icons with copy-ready HTML tags.
      </p>

      <FaviconGenerator />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">Favicon Generator Guide</h2>
        <p className="mb-6 text-sm leading-relaxed text-slate-400">
          If you are setting up other technical SEO files, try the{" "}
          <Link href="/tools/seo/metatag-generator" className="underline hover:text-slate-200">
            Meta Tag Generator
          </Link>{" "}
          and{" "}
          <Link href="/tools/seo/sitemap-generator" className="underline hover:text-slate-200">
            XML Sitemap Generator
          </Link>
          .
        </p>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I create favicon files and link tags from an image here?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {FAVICON_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does this favicon generator resize and export icons in my browser?
            </h3>
            <div className="space-y-2">
              {FAVICON_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About Favicon Generator</h3>
            <div className="space-y-2">
              {FAVICON_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why generate favicons locally for privacy and quick design iterations?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {FAVICON_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When should I refresh favicons for rebrands or PWA and mobile installs?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {FAVICON_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Link
        href="/tools/seo"
        className="mt-8 inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        ← Back to SEO Tools
      </Link>
    </div>
  );
}
