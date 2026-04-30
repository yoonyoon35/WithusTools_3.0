import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import { SEO_INDEX_GUIDE } from "./seo-content";

export const metadata: Metadata = createMetadata({
  title: "SEO Tools",
  description:
    "Free online SEO tools: Favicon Generator, Meta Tag Generator, Robots.txt Generator, and Sitemap Generator. Improve search engine visibility and social sharing.",
  path: "/tools/seo",
  keywords: [
    "seo tools",
    "favicon generator",
    "meta tag generator",
    "robots.txt generator",
    "sitemap generator",
    "seo optimization",
    "withustools",
  ],
});

const SEO_TOOLS = [
  {
    slug: "favicon-generator",
    name: "Favicon Generator",
    description: "Create favicons for all platforms including Apple, Android, Windows. Generate complete favicon package with HTML code.",
    path: "/tools/seo/favicon-generator",
  },
  {
    slug: "metatag-generator",
    name: "Meta Tag Generator",
    description: "Generate SEO-friendly meta tags including Open Graph and Twitter Cards. Perfect for website optimization and social sharing.",
    path: "/tools/seo/metatag-generator",
  },
  {
    slug: "robots-generator",
    name: "Robots.txt Generator",
    description: "Create and customize robots.txt files. Control search engine crawling with user-agent rules and sitemap URL.",
    path: "/tools/seo/robots-generator",
  },
  {
    slug: "sitemap-generator",
    name: "Sitemap Generator",
    description: "Generate XML sitemaps for your website. Set priority and change frequency for better SEO and indexing.",
    path: "/tools/seo/sitemap-generator",
  },
] as const;

export default function SEOToolsIndexPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I build sitemaps, robots.txt, favicons, or meta tags from here?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Open the target SEO tool, enter inputs, generate output, then copy or download the result.",
        },
      },
      {
        "@type": "Question",
        name: "How do SEO tools generate files locally without uploading my whole site?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Each tool builds output snippets/files from local form inputs in browser runtime without site-upload processing.",
        },
      },
      {
        "@type": "Question",
        name: "What SEO utilities are bundled here, and what does each one output?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "This hub includes favicon, meta tag, robots.txt, and sitemap generators with copy/download output flows.",
        },
      },
      {
        "@type": "Question",
        name: "When are sitemap and meta tag generators most useful for developers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "They are most useful during launches, SEO refreshes, and structured metadata updates for new pages.",
        },
      },
    ],
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="seo" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">SEO Tools</h1>
            <p className="mt-1 text-sm text-slate-500">
              Online SEO tools for launch essentials
            </p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Generate favicon assets, meta tags, robots.txt, and sitemaps quickly in
        browser for practical SEO workflows.
      </p>

      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        {SEO_TOOLS.map((tool) => (
          <Link
            key={tool.slug}
            href={tool.path}
            className="rounded-xl border border-border bg-surface p-6 transition-all hover:border-slate-600 hover:shadow-lg hover:shadow-black/20"
          >
            <h2 className="text-lg font-semibold text-slate-100">{tool.name}</h2>
            <p className="mt-2 text-sm text-slate-400">{tool.description}</p>
            <span className="mt-3 inline-block text-sm text-blue-400">
              Open {tool.name} →
            </span>
          </Link>
        ))}
      </div>

      <section className="mb-8 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">
          SEO Tools Guide
        </h2>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How do I build sitemaps, robots.txt, favicons, or meta tags from here?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {SEO_INDEX_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How do SEO tools generate files locally without uploading my whole site?
            </h3>
            <div className="space-y-2">
              {SEO_INDEX_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What SEO utilities are bundled here, and what does each one output?
            </h3>
            <div className="space-y-2">
              {SEO_INDEX_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why use browser-based SEO helpers for launches, audits, or small sites?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {SEO_INDEX_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When are sitemap and meta tag generators most useful for developers?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {SEO_INDEX_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Link
        href="/"
        className="inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        ← Back to home
      </Link>
    </div>
  );
}
