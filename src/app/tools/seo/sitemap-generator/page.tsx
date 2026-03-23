import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import SitemapGenerator from "./SitemapGenerator";

export const metadata: Metadata = createMetadata({
  title: "XML Sitemap Generator | Create Sitemaps for SEO",
  description:
    "Generate sitemaps for your website. Create XML sitemaps to improve SEO. Free online tool with priority and change frequency settings.",
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
    "Enter your website URL as the base URL. It will be added as the first entry with priority 1.0.",
    "Add page URLs with change frequency (always, hourly, daily, weekly, monthly, yearly, never) and priority (0.0–1.0).",
    "Click Add URL to include more pages. Remove entries as needed.",
    "Copy or download the generated XML sitemap. Submit to Google Search Console and Bing Webmaster Tools.",
  ],
  howItWorks: [
    "The generator produces XML sitemaps compliant with the Sitemap Protocol.",
    "Each URL includes loc, lastmod, changefreq, and priority. lastmod is set to today by default.",
    "Submit sitemaps to search engines to improve content discovery and indexing.",
    "All processing runs in your browser. No data is sent to any server.",
  ],
  about: [
    "Free online XML sitemap generator for SEO. Create sitemaps with customizable priority and change frequency.",
    "Essential for search engine indexing. No signup required.",
  ],
  advantages: [
    "Standard compliant: Follows Sitemap Protocol.",
    "Customizable: Set priority and change frequency per URL.",
    "Privacy: All generation happens locally in your browser.",
    "No signup: Use immediately without creating an account.",
  ],
  useCases: [
    "Search engine discovery: Help search engines find all your pages.",
    "Indexing optimization: Improve coverage and crawl efficiency.",
    "E-commerce: Ensure product and category pages are indexed.",
    "Content sites: Include blog posts and articles in sitemaps.",
  ],
};

export default function SitemapGeneratorPage() {
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
        Generate XML sitemaps for your website. Set priority and change frequency for better SEO and indexing.
      </p>

      <SitemapGenerator />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {SITEMAP_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {SITEMAP_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About XML Sitemap Generator</h3>
            <div className="space-y-2">
              {SITEMAP_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {SITEMAP_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Real-World Use Cases</h3>
            <ul className="list-disc space-y-2 pl-5">
              {SITEMAP_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Link
        href="/tools/seo"
        className="mt-8 inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        ← Back to SEO Tools
      </Link>
    </div>
  );
}
