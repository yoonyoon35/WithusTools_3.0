import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import { HASH_INDEX_GUIDE } from "./algorithm-content";

export const metadata: Metadata = createMetadata({
  title: "Hash Calculator",
  description:
    "Calculate MD5, SHA-1, SHA-256, SHA-384, SHA-512, SHA3, RIPEMD-160, and Bcrypt hashes for text and files. All processing runs in your browser—data never leaves your device.",
  path: "/tools/hash-calculator",
  keywords: [
    "hash calculator",
    "MD5",
    "SHA1",
    "SHA224",
    "SHA256",
    "SHA512",
    "SHA3",
    "Keccak",
    "CRC32",
    "Adler32",
    "xxHash",
    "BLAKE2",
    "RIPEMD",
    "Bcrypt",
    "Argon2",
    "PBKDF2",
    "Scrypt",
    "Whirlpool",
    "FNV-1a",
    "withustools",
  ],
});

const HASH_ALGORITHMS = [
  {
    slug: "md5",
    name: "MD5",
    description: "128-bit hash. Legacy use for file integrity. Not recommended for security.",
    path: "/tools/hash-calculator/md5",
  },
  {
    slug: "sha1",
    name: "SHA-1",
    description: "160-bit hash. Widely used for checksums. Deprecated for security.",
    path: "/tools/hash-calculator/sha1",
  },
  {
    slug: "sha224",
    name: "SHA-224",
    description: "224-bit hash. Truncated SHA-256. Used in TLS, DNSSEC.",
    path: "/tools/hash-calculator/sha224",
  },
  {
    slug: "sha256",
    name: "SHA-256",
    description: "256-bit hash. Industry standard for data integrity and cryptography.",
    path: "/tools/hash-calculator/sha256",
  },
  {
    slug: "sha384",
    name: "SHA-384",
    description: "384-bit hash. Truncated SHA-512. Good balance of security and output size.",
    path: "/tools/hash-calculator/sha384",
  },
  {
    slug: "sha512",
    name: "SHA-512",
    description: "512-bit hash. Maximum security. Used in TLS, digital signatures.",
    path: "/tools/hash-calculator/sha512",
  },
  {
    slug: "sha3",
    name: "SHA-3",
    description: "Next-gen Keccak. SHA3-224, 256, 384, 512. NIST standard.",
    path: "/tools/hash-calculator/sha3",
  },
  {
    slug: "keccak256",
    name: "Keccak-256",
    description: "Original Keccak (not SHA3). Used in Ethereum, Web3, smart contracts.",
    path: "/tools/hash-calculator/keccak256",
  },
  {
    slug: "crc32",
    name: "CRC32",
    description: "32-bit checksum. Non-cryptographic. Used in ZIP, PNG, Git.",
    path: "/tools/hash-calculator/crc32",
  },
  {
    slug: "adler32",
    name: "Adler-32",
    description: "32-bit checksum. Non-cryptographic. Used in zlib, PNG. Faster than CRC32.",
    path: "/tools/hash-calculator/adler32",
  },
  {
    slug: "xxhash",
    name: "xxHash",
    description: "Extremely fast non-cryptographic hash. xxHash32, xxHash64. Used for deduplication.",
    path: "/tools/hash-calculator/xxhash",
  },
  {
    slug: "blake2",
    name: "BLAKE2",
    description: "Fast cryptographic hash. BLAKE2b (256/512-bit), BLAKE2s (256-bit). RFC 7693.",
    path: "/tools/hash-calculator/blake2",
  },
  {
    slug: "ripemd160",
    name: "RIPEMD-160",
    description: "160-bit European standard. Used in Bitcoin addresses.",
    path: "/tools/hash-calculator/ripemd160",
  },
  {
    slug: "bcrypt",
    name: "Bcrypt",
    description: "Password hashing with salt. Slow by design. Recommended for passwords.",
    path: "/tools/hash-calculator/bcrypt",
  },
  {
    slug: "argon2",
    name: "Argon2",
    description: "Winner of Password Hashing Competition. Argon2id/2i/2d. Memory-hard, resistant to GPU attacks.",
    path: "/tools/hash-calculator/argon2",
  },
  {
    slug: "pbkdf2",
    name: "PBKDF2",
    description: "Key derivation from password. RFC 2898. Used in TLS, WPA2, Django, many frameworks.",
    path: "/tools/hash-calculator/pbkdf2",
  },
  {
    slug: "scrypt",
    name: "Scrypt",
    description: "Memory-hard key derivation. RFC 7914. Used in many cryptocurrencies, Unix passwords.",
    path: "/tools/hash-calculator/scrypt",
  },
  {
    slug: "whirlpool",
    name: "Whirlpool",
    description: "512-bit hash. ISO/IEC 10118-3. Used in digital signatures, some cryptocurrencies.",
    path: "/tools/hash-calculator/whirlpool",
  },
  {
    slug: "fnv1a",
    name: "FNV-1a",
    description: "Fast non-cryptographic hash. 32–1024 bit. URLs, hostnames, checksums.",
    path: "/tools/hash-calculator/fnv1a",
  },
] as const;

export default function HashCalculatorIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="hash" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">Hash Calculator</h1>
            <p className="mt-1 text-sm text-slate-500">hash</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Generate cryptographic hashes from text or files. All processing runs
        locally in your browser—your data never leaves your device.
      </p>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {HASH_ALGORITHMS.map((alg) => (
          <Link
            key={alg.slug}
            href={alg.path}
            className="rounded-xl border border-border bg-surface p-6 transition-all hover:border-slate-600 hover:shadow-lg hover:shadow-black/20"
          >
            <h2 className="text-lg font-semibold text-slate-100">{alg.name}</h2>
            <p className="mt-2 text-sm text-slate-400">{alg.description}</p>
            <span className="mt-3 inline-block text-sm text-blue-400">
              Generate {alg.name} hash →
            </span>
          </Link>
        ))}
      </div>

      <section className="mb-8 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How do I compute MD5, SHA, or other hashes from this index?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {HASH_INDEX_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How do hash calculators derive digests entirely in my browser?
            </h3>
            <div className="space-y-2">
              {HASH_INDEX_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What hash algorithms are supported here, and how do I choose one?
            </h3>
            <div className="space-y-2">
              {HASH_INDEX_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why generate checksums online when files never leave your device?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {HASH_INDEX_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. When do developers and IT teams rely on quick hash utilities?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {HASH_INDEX_GUIDE.useCases.map((item, i) => (
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
