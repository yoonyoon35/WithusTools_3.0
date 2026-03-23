import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import { SSH_INDEX_GUIDE } from "./ssh-content";

export const metadata: Metadata = createMetadata({
  title: "SSH Key Generator",
  description:
    "Generate RSA, Ed25519, and ECDSA SSH key pairs in your browser. Keys run locally—never sent to any server. Free, secure, OpenSSH compatible.",
  path: "/tools/ssh",
  keywords: [
    "SSH key generator",
    "generate SSH key",
    "Ed25519",
    "RSA",
    "ECDSA",
    "OpenSSH",
    "withustools",
  ],
});

const ALGORITHMS = [
  {
    slug: "ed25519",
    name: "Ed25519",
    description: "Recommended. Smallest keys, fastest operations, strong security.",
    path: "/tools/ssh/ed25519",
  },
  {
    slug: "rsa",
    name: "RSA",
    description: "Widest compatibility. Select key size (1024–8192 bits). Default 4096.",
    path: "/tools/ssh/rsa",
  },
  {
    slug: "ecdsa",
    name: "ECDSA",
    description: "Good balance of key size and security. P-256, P-384, P-521 curves.",
    path: "/tools/ssh/ecdsa",
  },
] as const;

export default function SshKeyIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="key" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">SSH Key Generator</h1>
            <p className="mt-1 text-sm text-slate-500">security</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Generate SSH key pairs in your browser. All key generation runs locally—your
        private key never leaves your device.
      </p>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ALGORITHMS.map((alg) => (
          <Link
            key={alg.slug}
            href={alg.path}
            className="rounded-xl border border-border bg-surface p-6 transition-all hover:border-slate-600 hover:shadow-lg hover:shadow-black/20"
          >
            <h2 className="text-lg font-semibold text-slate-100">{alg.name}</h2>
            <p className="mt-2 text-sm text-slate-400">{alg.description}</p>
            <span className="mt-3 inline-block text-sm text-blue-400">
              Generate {alg.name} keys →
            </span>
          </Link>
        ))}
      </div>

      <section className="mb-8 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {SSH_INDEX_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {SSH_INDEX_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">3. About SSH Key Generator</h3>
            <div className="space-y-2">
              {SSH_INDEX_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {SSH_INDEX_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">5. Real-World Use Cases</h3>
            <ul className="list-disc space-y-2 pl-5">
              {SSH_INDEX_GUIDE.useCases.map((item, i) => (
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
