import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import HashCalculator from "../HashCalculator";
import type { HashAlgorithm } from "../HashCalculator";
import { HASH_CALCULATOR_ALGORITHMS } from "@/data/prerender-segments";
import { ALGORITHM_GUIDE } from "../algorithm-content";

const VALID_ALGORITHMS = HASH_CALCULATOR_ALGORITHMS;

const ALGORITHM_META: Record<
  string,
  { title: string; description: string; displayName: string }
> = {
  md5: {
    title: "MD5 Hash Calculator",
    description:
      "Generate MD5 hashes from text or files. 128-bit hash for checksums. All processing runs in your browser.",
    displayName: "MD5",
  },
  sha1: {
    title: "SHA-1 Hash Calculator",
    description:
      "Generate SHA-1 hashes from text or files. 160-bit hash. All processing runs in your browser.",
    displayName: "SHA-1",
  },
  sha224: {
    title: "SHA-224 Hash Calculator",
    description:
      "Generate SHA-224 hashes from text or files. 224-bit truncated SHA-256. Used in TLS, DNSSEC. All processing runs in your browser.",
    displayName: "SHA-224",
  },
  sha256: {
    title: "SHA-256 Hash Calculator",
    description:
      "Generate SHA-256 hashes from text or files. Industry standard 256-bit hash. All processing runs in your browser.",
    displayName: "SHA-256",
  },
  sha384: {
    title: "SHA-384 Hash Calculator",
    description:
      "Generate SHA-384 hashes from text or files. 384-bit truncated SHA-512. All processing runs in your browser.",
    displayName: "SHA-384",
  },
  sha512: {
    title: "SHA-512 Hash Calculator",
    description:
      "Generate SHA-512 hashes from text or files. Maximum security 512-bit hash. All processing runs in your browser.",
    displayName: "SHA-512",
  },
  sha3: {
    title: "SHA-3 Hash Calculator",
    description:
      "Generate SHA-3 (Keccak) hashes. SHA3-224, 256, 384, 512. NIST standard. All processing runs in your browser.",
    displayName: "SHA-3",
  },
  keccak256: {
    title: "Keccak-256 Hash Calculator",
    description:
      "Generate Keccak-256 hashes (original Keccak, not SHA3). Used in Ethereum, Web3, smart contracts. All processing runs in your browser.",
    displayName: "Keccak-256",
  },
  crc32: {
    title: "CRC32 Checksum Calculator",
    description:
      "Generate CRC32 checksums from text or files. Non-cryptographic 32-bit checksum. Used in ZIP, PNG, Git. All processing runs in your browser.",
    displayName: "CRC32",
  },
  adler32: {
    title: "Adler-32 Checksum Calculator",
    description:
      "Generate Adler-32 checksums from text or files. Non-cryptographic 32-bit checksum. Used in zlib, PNG. Faster than CRC32. All processing runs in your browser.",
    displayName: "Adler-32",
  },
  xxhash: {
    title: "xxHash Calculator",
    description:
      "Generate xxHash hashes (xxHash32, xxHash64). Extremely fast non-cryptographic hash. Used for deduplication, checksums. All processing runs in your browser.",
    displayName: "xxHash",
  },
  blake2: {
    title: "BLAKE2 Hash Calculator",
    description:
      "Generate BLAKE2 hashes (BLAKE2b-256/512, BLAKE2s-256). Fast cryptographic hash. RFC 7693. All processing runs in your browser.",
    displayName: "BLAKE2",
  },
  ripemd160: {
    title: "RIPEMD-160 Hash Calculator",
    description:
      "Generate RIPEMD-160 hashes from text or files. European standard, used in Bitcoin. All processing runs in your browser.",
    displayName: "RIPEMD-160",
  },
  bcrypt: {
    title: "Bcrypt Password Hash Generator",
    description:
      "Generate Bcrypt password hashes with configurable salt rounds. Verify passwords against hashes. All processing runs in your browser.",
    displayName: "Bcrypt",
  },
  argon2: {
    title: "Argon2 Password Hash Generator",
    description:
      "Generate Argon2 password hashes (Argon2id, Argon2i, Argon2d). Winner of Password Hashing Competition. Verify passwords against hashes. All processing runs in your browser.",
    displayName: "Argon2",
  },
  pbkdf2: {
    title: "PBKDF2 Key Derivation",
    description:
      "Derive keys from passwords using PBKDF2. RFC 2898. Configurable salt, iterations, hash (SHA-1/256/384/512). Used in TLS, Django, many frameworks. All processing runs in your browser.",
    displayName: "PBKDF2",
  },
  scrypt: {
    title: "Scrypt Key Derivation",
    description:
      "Memory-hard key derivation from passwords. RFC 7914. Configurable N, r, p. Used in cryptocurrencies, Unix passwords. All processing runs in your browser.",
    displayName: "Scrypt",
  },
  whirlpool: {
    title: "Whirlpool Hash Calculator",
    description:
      "Generate Whirlpool 512-bit hashes from text or files. ISO/IEC 10118-3 standard. Used in digital signatures, some cryptocurrencies. All processing runs in your browser.",
    displayName: "Whirlpool",
  },
  fnv1a: {
    title: "FNV-1a Hash Calculator",
    description:
      "Generate FNV-1a non-cryptographic hashes from text or files. Fowler-Noll-Vo algorithm. Fast with good distribution. 32–1024 bit. Used for URLs, hostnames, checksums. All processing runs in your browser.",
    displayName: "FNV-1a",
  },
};

export async function generateMetadata({
  params,
}: {
  params: { algorithm: string };
}): Promise<Metadata> {
  const { algorithm } = params;
  const meta = ALGORITHM_META[algorithm];

  if (!meta) return createMetadata({ title: "Not Found", noIndex: true });

  return createMetadata({
    title: meta.title,
    description: meta.description,
    path: `/tools/hash-calculator/${algorithm}`,
    keywords: [
      `${meta.displayName} hash`,
      "hash calculator",
      "withustools",
    ],
  });
}

export async function generateStaticParams() {
  return VALID_ALGORITHMS.map((algorithm) => ({ algorithm }));
}

export default function HashAlgorithmPage({
  params,
}: {
  params: { algorithm: string };
}) {
  const { algorithm } = params;

  if (
    !VALID_ALGORITHMS.includes(algorithm as (typeof VALID_ALGORITHMS)[number])
  ) {
    notFound();
  }

  const meta = ALGORITHM_META[algorithm];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="hash" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">
              {meta.displayName} Hash Calculator
            </h1>
            <p className="mt-1 text-sm text-slate-500">hash</p>
          </div>
        </div>
      </div>

      <HashCalculator
        algorithm={algorithm as HashAlgorithm}
        displayName={meta.displayName}
        supportsFile={algorithm !== "bcrypt" && algorithm !== "argon2" && algorithm !== "pbkdf2" && algorithm !== "scrypt"}
        supportsVerify={true}
        isBcrypt={algorithm === "bcrypt"}
        isArgon2={algorithm === "argon2"}
        isPBKDF2={algorithm === "pbkdf2"}
        isScrypt={algorithm === "scrypt"}
        isSha3={algorithm === "sha3"}
        isXxHash={algorithm === "xxhash"}
        isFNV1a={algorithm === "fnv1a"}
        isBlake2={algorithm === "blake2"}
      />

      {ALGORITHM_GUIDE[algorithm] && (
        <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
          <div className="space-y-8 text-sm leading-relaxed text-slate-400">
            <div>
              <h3 className="mb-3 font-semibold text-slate-200">
                1. How can I use this {meta.displayName} hash calculator on this page?
              </h3>
              <ol className="list-decimal space-y-2 pl-5">
                {ALGORITHM_GUIDE[algorithm].usage.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-slate-200">
                2. How does this calculator compute {meta.displayName} locally in my browser?
              </h3>
              <div className="space-y-2">
                {ALGORITHM_GUIDE[algorithm].howItWorks.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-slate-200">
                3. What is {meta.displayName}, and when should I use it?
              </h3>
              <div className="space-y-2">
                {ALGORITHM_GUIDE[algorithm].about.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-slate-200">
                4. Why choose {meta.displayName} over other hash or checksum algorithms?
              </h3>
              <ul className="list-disc space-y-2 pl-5">
                {ALGORITHM_GUIDE[algorithm].advantages.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-slate-200">
                5. Where is {meta.displayName} commonly used in apps and infrastructure?
              </h3>
              <ul className="list-disc space-y-2 pl-5">
                {ALGORITHM_GUIDE[algorithm].useCases.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
