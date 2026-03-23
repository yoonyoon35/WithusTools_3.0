import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";
import ToolIcon from "@/components/ToolIcon";
import PasswordGenerator from "./PasswordGenerator";

export const metadata: Metadata = createMetadata({
  title: "Password Generator | Strong & Secure Passwords",
  description:
    "Create strong and secure passwords with customizable length and character types. Free online password generator. All processing runs in your browser.",
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
    "Set password length (8–32) using the slider and select character types: uppercase, lowercase, numbers, symbols.",
    "Click Generate Password to create a new password. The strength meter shows Weak, Medium, or Strong.",
    "Click Copy to copy the password to your clipboard. Store it securely in a password manager.",
  ],
  howItWorks: [
    "The generator uses cryptographically secure random number generation (crypto.getRandomValues) when available.",
    "Strength is assessed by length (12+ preferred), character variety (upper+lower, numbers, symbols), and complexity.",
    "All processing runs in your browser. No data is sent to any server.",
  ],
  about: [
    "Free online password generator for creating strong, secure passwords. Customizable length and character types with real-time strength assessment.",
  ],
  advantages: [
    "Secure: Uses cryptographic randomness when available.",
    "Customizable: Length 8–32, uppercase, lowercase, numbers, symbols.",
    "Strength indicator: Visual feedback on password security.",
    "Privacy: All generation happens locally.",
  ],
  useCases: [
    "Online accounts: Social media, email, e-commerce.",
    "Work and VPN: Corporate systems, remote access.",
    "Development: Test passwords, API keys.",
    "Wi-Fi and devices: Network and device passwords.",
  ],
};

export default function PasswordGeneratorPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <ToolIcon name="random" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100">
              Password Generator
            </h1>
            <p className="mt-1 text-sm text-slate-500">random</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-slate-400">
        Create strong and secure passwords with customizable options. All
        processing runs in your browser.
      </p>

      <PasswordGenerator />

      <section className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">1. How to Use</h3>
            <ol className="list-decimal space-y-2 pl-5">
              {PASSWORD_GENERATOR_GUIDE.usage.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">2. How It Works</h3>
            <div className="space-y-2">
              {PASSWORD_GENERATOR_GUIDE.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              3. About Password Generator
            </h3>
            <div className="space-y-2">
              {PASSWORD_GENERATOR_GUIDE.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">4. Advantages</h3>
            <ul className="list-disc space-y-2 pl-5">
              {PASSWORD_GENERATOR_GUIDE.advantages.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-200">
              5. Real-World Use Cases
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
