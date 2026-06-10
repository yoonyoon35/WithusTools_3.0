import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { createMetadata } from "@/lib/metadata";
import { generatePageMetadata } from "@/lib/page-metadata";
import { loadToolContent } from "@/lib/load-tool-content";
import { buildFaqJsonLd, getToolContentEntry } from "@/lib/tool-content";
import HashCalculator from "../HashCalculator";
import type { HashAlgorithm } from "../HashCalculator";
import { HASH_CALCULATOR_ALGORITHMS } from "@/data/prerender-segments";

const VALID_ALGORITHMS = HASH_CALCULATOR_ALGORITHMS;

const DISPLAY_NAMES: Record<string, string> = {
  md5: "MD5",
  sha1: "SHA-1",
  sha224: "SHA-224",
  sha256: "SHA-256",
  sha384: "SHA-384",
  sha512: "SHA-512",
  sha3: "SHA-3",
  keccak256: "Keccak-256",
  crc32: "CRC32",
  adler32: "Adler-32",
  xxhash: "xxHash",
  blake2: "BLAKE2",
  ripemd160: "RIPEMD-160",
  bcrypt: "Bcrypt",
  argon2: "Argon2",
  pbkdf2: "PBKDF2",
  scrypt: "Scrypt",
  whirlpool: "Whirlpool",
  fnv1a: "FNV-1a",
};

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
  return generatePageMetadata(locale, `/tools/hash-calculator/${algorithm}`);
}

export async function generateStaticParams() {
  return VALID_ALGORITHMS.map((algorithm) => ({ algorithm }));
}

export default async function HashAlgorithmPage({
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
    `/tools/hash-calculator/${algorithm}`
  );
  if (!content) {
    throw new Error(`Missing toolContent for /tools/hash-calculator/${algorithm}`);
  }

  const faqJsonLd = buildFaqJsonLd(content.faq);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HashCalculator
        algorithm={algorithm as HashAlgorithm}
        displayName={DISPLAY_NAMES[algorithm]}
        supportsFile={
          algorithm !== "bcrypt" &&
          algorithm !== "argon2" &&
          algorithm !== "pbkdf2" &&
          algorithm !== "scrypt"
        }
        supportsVerify={true}
        isBcrypt={algorithm === "bcrypt"}
        isArgon2={algorithm === "argon2"}
        isPBKDF2={algorithm === "pbkdf2"}
        isScrypt={algorithm === "scrypt"}
        isSha3={algorithm === "sha3"}
        isXxHash={algorithm === "xxhash"}
        isFNV1a={algorithm === "fnv1a"}
        isBlake2={algorithm === "blake2"}
        showAlgorithmGuide={true}
        showPageHeader={true}
      />
    </div>
  );
}
