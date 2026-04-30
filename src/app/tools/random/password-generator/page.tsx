import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import PasswordGenerator from "./PasswordGenerator";

export const metadata: Metadata = createMetadata({
  title: "Generate Strong & Secure Passwords",
  description:
    "Free password generator for strong random passwords with customizable length and character sets in browser.",
  path: "/tools/random/password-generator",
  keywords: [
    "password generator",
    "strong password",
    "random password",
    "secure password",
    "withustools",
  ],
});

const PASSWORD_GENERATOR_GUIDE = {
  usage: [
    "Choose length and character groups.",
    "Generate a password and review the strength meter.",
    "Copy the result and store it in a password manager.",
  ],
  howItWorks: [
    "The generator uses browser randomness APIs to build password characters.",
    "Strength feedback is based on length and character-set variety.",
    "Generation runs locally in browser runtime.",
  ],
  about: [
    "Use this tool when you need a new password quickly.",
    "It is built for practical account setup and credential refresh workflows.",
  ],
  advantages: [
    "Local password generation.",
    "Customizable character settings.",
    "Strength feedback.",
    "No signup required.",
  ],
  useCases: [
    "Create passwords for new online accounts.",
    "Rotate credentials for work or VPN access.",
    "Generate strong Wi-Fi or device passwords.",
    "Produce random credentials for testing.",
  ],
};

const FAQ_ITEMS = [
  {
    question: "How can I generate a secure password with custom length and character sets?",
    answer:
      "Select length and character options, generate a password, then copy and save it securely.",
  },
  {
    question: "How does this password generator create randomness locally in my browser?",
    answer:
      "It uses browser-side random APIs and builds output without server-side processing.",
  },
  {
    question: "What should I know about this password generator before using it for real accounts?",
    answer:
      "Use longer mixed-character passwords and store them in a trusted password manager.",
  },
  {
    question: "Where are strong random passwords used for logins, Wi-Fi, and apps?",
    answer:
      "They are used for account login security, network credentials, and sensitive access systems.",
  },
];

export default function PasswordGeneratorPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="random" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">
              Password Generator
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Online password generator in browser
            </p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Generate strong passwords quickly with customizable options.
      </p>

      <PasswordGenerator />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-200">
          Password Generator Guide
        </h2>
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              1. How can I generate a secure password with custom length and character sets?
            </h3>
            <ol className="list-decimal space-y-2 pl-5">
              {PASSWORD_GENERATOR_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              2. How does this password generator create randomness locally in my browser?
            </h3>
            <div className="space-y-2">
              {PASSWORD_GENERATOR_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. What should I know about this password generator before using it for real accounts?
            </h3>
            <div className="space-y-2">
              {PASSWORD_GENERATOR_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              4. Why generate passwords in the browser when data never leaves my device?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {PASSWORD_GENERATOR_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. Where are strong random passwords used for logins, Wi-Fi, and apps?
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              {PASSWORD_GENERATOR_GUIDE.useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Link
        href="/tools/random"
        className="mt-8 inline-block text-slate-400 underline transition-colors hover:text-slate-200"
      >
        ← Back to Random Generator
      </Link>
    </div>
  );
}
