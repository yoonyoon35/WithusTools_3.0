import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import RobotsGenerator from "./RobotsGenerator";

export const metadata: Metadata = createMetadata({
  title: "Create SEO File for Robots.txt",
  description:
    "Create a robots.txt file online in your browser. Set user-agent allow/disallow rules and add your sitemap URL for better crawl control.",
  path: "/tools/seo/robots-generator",
  keywords: [
    "robots.txt generator",
    "robots.txt creator",
    "seo tools",
    "search engine optimization",
    "web crawler control",
    "withustools",
  ],
});

const ROBOTS_GUIDE = {
  usage: [
    "Add your sitemap URL first, for example `https://example.com/sitemap.xml`.",
    "Create rules for each user-agent and path with `Allow` or `Disallow`.",
    "Set crawl-delay only if you need to limit crawler load on your server.",
    "Copy or download the generated robots.txt and upload it to your domain root.",
  ],
  howItWorks: [
    "The robots.txt generator formats directives using the Robots Exclusion Protocol.",
    "Rules are grouped by user-agent so crawlers can read each block correctly.",
    "The file is built locally in your browser.",
  ],
  about: [
    "This online robots.txt generator helps you control crawl access without editing syntax manually.",
    "It is useful during launches, migrations, and staging-site cleanup.",
    "No signup is needed.",
  ],
  advantages: [
    "Creates valid robots.txt structure with user-agent blocks.",
    "Supports multiple allow/disallow path rules.",
    "Runs fully in-browser for private local generation.",
    "Works instantly without account setup.",
  ],
  useCases: [
    "Blocking admin, test, or private folders from crawling.",
    "Defining crawler behavior during site migration.",
    "Adding sitemap location so bots find URLs faster.",
    "Adjusting bot access for large or resource-heavy sites.",
  ],
};

const FAQ_ITEMS = [
  {
    question: "Where should I place the generated robots.txt file?",
    answer:
      "Upload it to your root domain path, usually `https://yourdomain.com/robots.txt`, so crawlers can discover it automatically.",
  },
  {
    question: "Can I set different rules for Googlebot and other bots?",
    answer:
      "Yes. Add separate user-agent blocks and define allow/disallow rules for each crawler.",
  },
  {
    question: "Does this robots.txt generator upload my site data?",
    answer: "No. The file is generated directly in your browser.",
  },
];

export default function RobotsGeneratorPage() {
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
            <h1 className="text-3xl font-bold text-slate-100">Robots.txt Generator</h1>
            <p className="mt-1 text-sm text-slate-500">seo</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Build and edit a robots.txt file quickly with clear user-agent rules, path directives, and sitemap support.
      </p>

      <RobotsGenerator />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">Robots.txt Generator Guide</h2>
        <p className="mb-6 text-sm leading-relaxed text-slate-400">
          Use this with the{" "}
          <Link href="/tools/seo/sitemap-generator" className="underline hover:text-slate-200">
            XML Sitemap Generator
          </Link>{" "}
          and{" "}
          <Link href="/tools/seo/metatag-generator" className="underline hover:text-slate-200">
            Meta Tag Generator
          </Link>{" "}
          to complete core technical SEO setup.
        </p>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I write robots.txt rules for crawlers with this generator?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {ROBOTS_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does this robots.txt builder assemble directives in my browser?
            </h3>
            <div className="space-y-2">
              {ROBOTS_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What is robots.txt for, and which mistakes break crawling or SEO?
            </h3>
            <div className="space-y-2">
              {ROBOTS_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why draft robots.txt online before placing it at the site root?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {ROBOTS_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When do teams use robots.txt for staging sites, APIs, or crawl budget?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {ROBOTS_GUIDE.useCases.map((item, i) => (
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
