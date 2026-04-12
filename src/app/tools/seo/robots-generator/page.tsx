import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import RobotsGenerator from "./RobotsGenerator";

export const metadata: Metadata = createMetadata({
  title: "Create SEO File for Robots.txt",
  description:
    "Generate robots.txt for your website. Control search engine crawling with user-agent rules and sitemap URL. Free online tool.",
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
    "Enter your sitemap URL (e.g., https://example.com/sitemap.xml).",
    "Add user-agent rules: specify User-agent (e.g., *, Googlebot), path (e.g., /, /private/), and Allow/Disallow.",
    "Optionally set crawl delay in seconds to manage server load.",
    "Copy or download the generated robots.txt. Place it in your site root.",
  ],
  howItWorks: [
    "The generator produces valid robots.txt following the Robots Exclusion Protocol.",
    "Rules are grouped by user-agent. Each block can have Allow and Disallow directives.",
    "Crawl-delay is supported for bots that honor it (e.g., Bing). Google ignores crawl-delay.",
    "All processing runs in your browser. No data is sent to any server.",
  ],
  about: [
    "Free online robots.txt generator for controlling search engine crawlers. Create robots.txt files with user-agent rules and sitemap declaration.",
    "Essential for SEO and protecting sensitive content. No signup required.",
  ],
  advantages: [
    "Standard compliant: Follows Robots Exclusion Protocol.",
    "Flexible: Add multiple user-agent rules and paths.",
    "Privacy: All generation happens locally in your browser.",
    "No signup: Use immediately without creating an account.",
  ],
  useCases: [
    "Crawl optimization: Control which pages search engines index.",
    "Content protection: Block admin, private, or development directories.",
    "Server load: Use crawl-delay to reduce crawler frequency.",
    "Sitemap: Declare sitemap URL for content discovery.",
  ],
};

export default function RobotsGeneratorPage() {
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
        Create and customize robots.txt files for your website. Control search engine crawling with user-agent rules and sitemap URL.
      </p>

      <RobotsGenerator />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
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

      <Link
        href="/tools/seo"
        className="mt-8 inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        ← Back to SEO Tools
      </Link>
    </div>
  );
}
