import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { createMetadata } from "@/lib/metadata";
import { generatePageMetadata } from "@/lib/page-metadata";
import { loadToolContent } from "@/lib/load-tool-content";
import { buildFaqJsonLd, getToolContentEntry } from "@/lib/tool-content";
import SshKeyGenerator from "../SshKeyGenerator";
import { SSH_KEY_ALGORITHMS } from "@/data/prerender-segments";
import type { Algorithm } from "../SshKeyGenerator";

const VALID_ALGORITHMS = SSH_KEY_ALGORITHMS;

export async function generateMetadata({
  params,
}: {
  params: { locale: string; algorithm: string };
}): Promise<Metadata> {
  const { locale, algorithm } = params;
  if (!VALID_ALGORITHMS.includes(algorithm as (typeof VALID_ALGORITHMS)[number])) {
    return createMetadata({
      title: "Not Found",
      noIndex: true,
      locale: locale as Locale,
    });
  }
  return generatePageMetadata(locale, `/tools/ssh/${algorithm}`);
}

export async function generateStaticParams() {
  return VALID_ALGORITHMS.map((algorithm) => ({ algorithm }));
}

export default async function SshAlgorithmPage({
  params,
}: {
  params: { locale: string; algorithm: string };
}) {
  const { algorithm } = params;

  if (!VALID_ALGORITHMS.includes(algorithm as (typeof VALID_ALGORITHMS)[number])) {
    notFound();
  }

  const locale = routing.locales.includes(params.locale as Locale)
    ? (params.locale as Locale)
    : routing.defaultLocale;
  setRequestLocale(locale);

  const content = getToolContentEntry(
    await loadToolContent(locale),
    `/tools/ssh/${algorithm}`
  );
  if (!content) {
    throw new Error(`Missing toolContent for /tools/ssh/${algorithm}`);
  }

  const faqJsonLd = buildFaqJsonLd(content.faq);
  const defaultAlgorithm = algorithm as Algorithm;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SshKeyGenerator
        defaultAlgorithm={defaultAlgorithm}
        defaultRsaKeySize={algorithm === "rsa" ? 4096 : undefined}
        showAlgorithmGuide={true}
        showPageHeader={true}
      />
    </div>
  );
}
