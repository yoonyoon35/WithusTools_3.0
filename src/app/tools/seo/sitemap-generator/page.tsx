import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import SitemapGenerator from "./SitemapGenerator";

export const metadata: Metadata = createMetadata({
  title: "Create XML Sitemaps for SEO",
  description:
    "Generate an XML sitemap online in your browser. Add URLs, set change frequency and priority, then download sitemap.xml for search engines.",
  path: "/tools/seo/sitemap-generator",
  keywords: [
    "sitemap generator",
    "xml sitemap",
    "seo tools",
    "website sitemap",
    "google sitemap",
    "withustools",
  ],
});

const SITEMAP_GUIDE = {
  usage: [
    "Enter your site URL, then add each page you want in the XML sitemap.",
    "Set `changefreq` and `priority` for each URL based on how often content changes.",
    "Add or remove URLs until the list matches your current site structure.",
    "Copy or download `sitemap.xml`, then submit it to search engines.",
  ],
  howItWorks: [
    "The sitemap generator creates XML that follows the Sitemap Protocol.",
    "Each URL entry includes `loc`, `lastmod`, `changefreq`, and `priority` fields.",
    "Everything runs locally in your browser.",
  ],
  about: [
    "This online sitemap generator helps search engines discover important URLs faster.",
    "It is useful for new launches, large content updates, and site migrations.",
    "No signup is needed.",
  ],
  advantages: [
    "Builds valid XML sitemap output with required fields.",
    "Lets you customize priority and change frequency per page.",
    "Runs in-browser so URLs are processed locally.",
    "Starts instantly without account setup.",
  ],
  useCases: [
    "Submitting a fresh sitemap after launching a site.",
    "Updating crawl targets after URL structure changes.",
    "Managing indexing for large ecommerce category and product pages.",
    "Keeping blog and documentation URLs visible to crawlers.",
  ],
};

const FAQ_ITEMS = [
  {
    question: "Do I need to include every page in my XML sitemap?",
    answer:
      "Include the canonical pages you want indexed. You can skip duplicate, thin, or blocked URLs.",
  },
  {
    question: "How often should I update sitemap.xml?",
    answer:
      "Update it whenever you add, remove, or move important pages, especially after launches or migrations.",
  },
  {
    question: "Is this sitemap generator server-side?",
    answer:
      "No. It runs in your browser, and the sitemap file is generated locally.",
  },
];

export default function SitemapGeneratorPage() {
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
            <h1 className="text-3xl font-bold text-slate-100">XML Sitemap Generator</h1>
            <p className="mt-1 text-sm text-slate-500">seo</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Create a clean XML sitemap quickly, tune URL priority and update frequency, then download it for indexing.
      </p>

      <SitemapGenerator />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">XML Sitemap Generator Guide</h2>
        <p className="mb-6 text-sm leading-relaxed text-slate-400">
          For a complete technical SEO setup, use this page with the{" "}
          <Link href="/tools/seo/robots-generator" className="underline hover:text-slate-200">
            Robots.txt Generator
          </Link>{" "}
          and{" "}
          <Link href="/tools/seo/metatag-generator" className="underline hover:text-slate-200">
            Meta Tag Generator
          </Link>
          .
        </p>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I build an XML sitemap from URLs or a list on this page?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {SITEMAP_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does this sitemap generator create XML locally in my browser?
            </h3>
            <div className="space-y-2">
              {SITEMAP_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What is an XML sitemap, and when should I submit it to search engines?
            </h3>
            <div className="space-y-2">
              {SITEMAP_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why generate sitemaps in the browser alongside CMS or static-site workflows?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {SITEMAP_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When do launches, migrations, or large sites rely on updated sitemaps?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {SITEMAP_GUIDE.useCases.map((item, i) => (
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
