import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import ToolIcon from "@/components/ToolIcon";
import SshKeyGenerator from "../SshKeyGenerator";
import { SSH_KEY_ALGORITHMS } from "@/data/prerender-segments";
import type { Algorithm } from "../SshKeyGenerator";

const VALID_ALGORITHMS = SSH_KEY_ALGORITHMS;

const ALGORITHM_META: Record<
  string,
  { title: string; description: string; displayName: string }
> = {
  ed25519: {
    title: "Secure Ed25519 SSH Key Generator",
    description:
      "Generate Ed25519 SSH key pairs in your browser—keys run locally, never sent to any server. Free, secure, OpenSSH compatible.",
    displayName: "Ed25519",
  },
  rsa: {
    title: "Secure RSA SSH Key Generator",
    description:
      "Generate RSA SSH key pairs (1024–8192 bits) in your browser—keys run locally, never sent to any server. Free, secure, OpenSSH compatible.",
    displayName: "RSA",
  },
  ecdsa: {
    title: "Secure ECDSA SSH Key Generator",
    description:
      "Generate ECDSA SSH key pairs (P-256, P-384, P-521) in your browser—keys run locally, never sent to any server. Free, secure, OpenSSH compatible.",
    displayName: "ECDSA",
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
    path: `/tools/ssh/${algorithm}`,
    keywords: [
      `${meta.displayName} SSH key generator`,
      "SSH key generator",
      "generate SSH key online",
      "browser local",
      "OpenSSH",
      "withustools",
    ],
  });
}

export async function generateStaticParams() {
  return VALID_ALGORITHMS.map((algorithm) => ({ algorithm }));
}

export default function SshAlgorithmPage({
  params,
}: {
  params: { algorithm: string };
}) {
  const { algorithm } = params;

  if (!VALID_ALGORITHMS.includes(algorithm as (typeof VALID_ALGORITHMS)[number])) {
    notFound();
  }

  const defaultAlgorithm = algorithm as Algorithm;
  const displayName = ALGORITHM_META[algorithm].displayName;
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How can I generate ${displayName} SSH keys with this tool?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Choose the algorithm, set any optional parameters, generate the key pair, and save the private key securely.",
        },
      },
      {
        "@type": "Question",
        name: `How does this generator create ${displayName} keys in my browser?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "The page uses browser-side cryptography, so key generation runs locally without server-side key handling.",
        },
      },
      {
        "@type": "Question",
        name: `When should I use ${displayName} SSH keys?`,
        acceptedAnswer: {
          "@type": "Answer",
          text:
            algorithm === "ed25519"
              ? "Use Ed25519 for most modern SSH setups."
              : algorithm === "rsa"
                ? "Use RSA when broad legacy compatibility is required."
                : "Use ECDSA when your environment requires NIST-curve SSH keys.",
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
      <SshKeyGenerator
        defaultAlgorithm={defaultAlgorithm}
        defaultRsaKeySize={algorithm === "rsa" ? 4096 : undefined}
        showAlgorithmGuide={true}
        showPageHeader={true}
      />
    </div>
  );
}
