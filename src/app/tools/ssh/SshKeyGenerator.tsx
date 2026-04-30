"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import type { pki } from "node-forge";
import { toOpenSSHEd25519, parseOpenSSHEd25519PrivateKey, sshPublicKeyFingerprint } from "@/lib/ssh-key-utils";
import { ecdsaToOpenSSHPublicKey } from "@/lib/ecdsa-ssh-utils";
import ToolIcon from "@/components/ToolIcon";
import { SSH_ALGORITHM_GUIDE } from "./ssh-content";

export type Algorithm = "rsa" | "ed25519" | "ecdsa";

const ALGORITHM_DISPLAY_NAMES: Record<Algorithm, string> = {
  ed25519: "Ed25519",
  rsa: "RSA",
  ecdsa: "ECDSA",
};

const ALGORITHM_PAGE_TITLES: Record<Algorithm, string> = {
  ed25519: "Ed25519 SSH Key Generator",
  rsa: "RSA SSH Key Generator",
  ecdsa: "ECDSA SSH Key Generator",
};

const RSA_KEY_SIZES = [1024, 2048, 3072, 4096, 8192] as const;
const ECDSA_CURVES = [
  { value: "secp256r1", label: "P-256" },
  { value: "secp384r1", label: "P-384" },
  { value: "secp521r1", label: "P-521" },
] as const;

export interface SshKeyGeneratorProps {
  defaultAlgorithm?: Algorithm;
  defaultRsaKeySize?: number;
  /** When true, show algorithm-specific guide that updates when algorithm selector changes */
  showAlgorithmGuide?: boolean;
  /** When true, show page header (title) that updates when algorithm selector changes */
  showPageHeader?: boolean;
}

export default function SshKeyGenerator({
  defaultAlgorithm = "ed25519",
  defaultRsaKeySize = 4096,
  showAlgorithmGuide = false,
  showPageHeader = false,
}: SshKeyGeneratorProps) {
  const [algorithm, setAlgorithm] = useState<Algorithm>(defaultAlgorithm);
  const [rsaKeySize, setRsaKeySize] = useState<number>(defaultRsaKeySize);
  const [ecdsaCurve, setEcdsaCurve] = useState<string>("secp256r1");
  const [passphrase, setPassphrase] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [fingerprint, setFingerprint] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState<"private" | "public" | "fingerprint" | null>(null);
  const [verified, setVerified] = useState<boolean | null>(null);

  const copyToClipboard = useCallback(
    async (text: string, which: "private" | "public" | "fingerprint") => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(which);
        setTimeout(() => setCopied(null), 2000);
      } catch {
        setError("Failed to copy to clipboard");
      }
    },
    []
  );

  const generateKeys = useCallback(async () => {
    setLoading(true);
    setError("");
    setVerified(null);

    try {
      if (algorithm === "rsa") {
        const forge = await import("node-forge");
        await new Promise<void>((resolve, reject) => {
          forge.default.pki.rsa.generateKeyPair(
            rsaKeySize,
            0x10001,
            async (err: Error | null, keypair?: pki.rsa.KeyPair) => {
              if (err) {
                reject(err);
                return;
              }
              if (!keypair) {
                reject(new Error("Key generation failed"));
                return;
              }
              const privKeyPem = passphrase.trim()
                ? forge.default.pki.encryptRsaPrivateKey(keypair.privateKey, passphrase, { algorithm: "aes256" })
                : forge.default.pki.privateKeyToPem(keypair.privateKey);
              const pubKeySsh = forge.default.ssh.publicKeyToOpenSSH(keypair.publicKey, "generated@withustools");
              setPrivateKey(privKeyPem);
              setPublicKey(pubKeySsh);
              try {
                setFingerprint(await sshPublicKeyFingerprint(pubKeySsh));
              } catch (e) {
                setFingerprint("");
              }
              resolve();
            }
          );
        });
      } else if (algorithm === "ed25519") {
        const ed = await import("@noble/ed25519");
        const privKey = ed.utils.randomPrivateKey();
        const pubKey = await ed.getPublicKeyAsync(privKey);
        const privKeyOpenSSH = toOpenSSHEd25519(privKey, pubKey);
        const pubKeyB64 = btoa(String.fromCharCode(...Array.from(pubKey)));
        const pubKeyFormatted = `ssh-ed25519 ${pubKeyB64} generated@withustools`;
        setPrivateKey(privKeyOpenSSH);
        setPublicKey(pubKeyFormatted);
        setFingerprint(await sshPublicKeyFingerprint(pubKeyFormatted));
      } else if (algorithm === "ecdsa") {
        const { KEYUTIL } = await import("jsrsasign");
        const kp = KEYUTIL.generateKeypair("EC", ecdsaCurve as "secp256r1" | "secp384r1" | "secp521r1");
        const privPem = passphrase.trim()
          ? KEYUTIL.getPEM(kp.prvKeyObj, "PKCS8PRV", passphrase)
          : KEYUTIL.getPEM(kp.prvKeyObj, "PKCS8PRV");
        const ec = (kp.prvKeyObj as { getPublicKeyXYHex?: () => { x: string; y: string } }).getPublicKeyXYHex?.();
        if (!ec) throw new Error("Could not extract EC public key");
        const pubSsh = ecdsaToOpenSSHPublicKey(ecdsaCurve, ec.x, ec.y);
        setPrivateKey(privPem);
        setPublicKey(pubSsh);
        setFingerprint(await sshPublicKeyFingerprint(pubSsh));
      } else {
        setError("DSA key generation is not yet supported. Please use RSA, Ed25519, or ECDSA.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Key generation failed");
    } finally {
      setLoading(false);
    }
  }, [algorithm, rsaKeySize, ecdsaCurve, passphrase]);

  const verifyKeyPair = useCallback(async () => {
    if (!privateKey || !publicKey) return;
    setError("");
    setVerified(null);

    try {
      if (algorithm === "rsa") {
        const forge = await import("node-forge");
        const privKey = (privateKey.includes("ENCRYPTED") && passphrase.trim()
          ? forge.default.pki.decryptRsaPrivateKey(privateKey, passphrase)
          : forge.default.pki.privateKeyFromPem(privateKey)) as pki.rsa.PrivateKey;
        if (!privKey) throw new Error("Invalid passphrase or key");
        const pubKeyFromPriv = forge.default.pki.setRsaPublicKey(privKey.n, privKey.e);
        const expectedSsh = forge.default.ssh.publicKeyToOpenSSH(pubKeyFromPriv, "generated@withustools").trim();
        setVerified(expectedSsh === publicKey.trim());
      } else if (algorithm === "ed25519") {
        const ed = await import("@noble/ed25519");
        const seed = parseOpenSSHEd25519PrivateKey(privateKey);
        const derivedPub = await ed.getPublicKeyAsync(seed);
        const derivedB64 = btoa(String.fromCharCode(...Array.from(derivedPub)));
        const expectedPub = publicKey.replace(/^ssh-ed25519\s+/, "").split(" ")[0];
        setVerified(derivedB64 === expectedPub);
      } else if (algorithm === "ecdsa") {
        const { KEYUTIL } = await import("jsrsasign");
        const key = privateKey.includes("ENCRYPTED")
          ? KEYUTIL.getKey(privateKey, passphrase)
          : KEYUTIL.getKey(privateKey);
        if (!key) throw new Error("Invalid passphrase or key");
        const ec = (key as { getPublicKeyXYHex?: () => { x: string; y: string } }).getPublicKeyXYHex?.();
        if (!ec) throw new Error("Could not parse EC key");
        const expectedSsh = ecdsaToOpenSSHPublicKey(ecdsaCurve, ec.x, ec.y);
        setVerified(expectedSsh === publicKey.trim());
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Verification failed");
      setVerified(false);
    }
  }, [privateKey, publicKey, algorithm, ecdsaCurve, passphrase]);

  useEffect(() => {
    if (showPageHeader) {
      document.title = `${ALGORITHM_PAGE_TITLES[algorithm]} | WithusTools`;
    }
  }, [showPageHeader, algorithm]);

  return (
    <div className="space-y-6">
      {showPageHeader && (
        <div className="mb-8 flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-4">
            <ToolIcon name="key" />
            <div className="text-center">
              <h1 className="text-3xl font-bold text-slate-100">
                {ALGORITHM_DISPLAY_NAMES[algorithm]} SSH Key Generator
              </h1>
              <p className="mt-1 text-sm text-slate-500">
                Online SSH key generator in browser
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 px-4 py-3">
        <p className="flex items-center gap-2 font-semibold text-amber-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          Keys are never stored on the server. All generation runs in your browser.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <h2 className="mb-4 text-lg font-semibold text-slate-100">Algorithm</h2>
        <div className="flex flex-wrap gap-2">
          {(["ed25519", "rsa", "ecdsa"] as const).map((alg) => (
            <label
              key={alg}
              className={`flex cursor-pointer items-center rounded-lg border px-4 py-2 transition-colors capitalize ${
                algorithm === alg
                  ? "border-blue-500/50 bg-blue-500/10 text-blue-400"
                  : "border-border bg-slate-800/50 text-slate-400 hover:border-slate-600 hover:text-slate-200"
              }`}
            >
              <input
                type="radio"
                name="algorithm"
                checked={algorithm === alg}
                onChange={() => setAlgorithm(alg)}
                className="sr-only"
              />
              <span>{alg === "ecdsa" ? "ECDSA" : alg === "ed25519" ? "Ed25519" : alg.toUpperCase()}</span>
            </label>
          ))}
        </div>

        {(algorithm === "rsa" || algorithm === "ecdsa") && (
          <div className="mt-6">
            <h2 className="mb-4 text-lg font-semibold text-slate-100">Key Size</h2>
            <div className="flex flex-wrap gap-2">
              {algorithm === "rsa" &&
                RSA_KEY_SIZES.map((size) => (
                  <label
                    key={size}
                    className={`flex cursor-pointer items-center rounded-lg border px-4 py-2 transition-colors ${
                      rsaKeySize === size ? "border-blue-500/50 bg-blue-500/10 text-blue-400" : "border-border bg-slate-800/50 text-slate-400 hover:border-slate-600"
                    }`}
                  >
                    <input
                      type="radio"
                      name="rsaKeySize"
                      checked={rsaKeySize === size}
                      onChange={() => setRsaKeySize(size)}
                      className="sr-only"
                    />
                    <span>{size} bits</span>
                  </label>
                ))}
              {algorithm === "ecdsa" &&
                ECDSA_CURVES.map((c) => (
                  <label
                    key={c.value}
                    className={`flex cursor-pointer items-center rounded-lg border px-4 py-2 transition-colors ${
                      ecdsaCurve === c.value ? "border-blue-500/50 bg-blue-500/10 text-blue-400" : "border-border bg-slate-800/50 text-slate-400 hover:border-slate-600"
                    }`}
                  >
                    <input type="radio" name="ecdsaCurve" checked={ecdsaCurve === c.value} onChange={() => setEcdsaCurve(c.value)} className="sr-only" />
                    <span>{c.label}</span>
                  </label>
                ))}
            </div>
          </div>
        )}
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <h2 className="mb-2 text-lg font-semibold text-slate-100">Passphrase (optional)</h2>
        <p className="mb-3 text-sm text-slate-400">Encrypts the private key. Leave empty to generate an unencrypted key.</p>
        <input
          type="password"
          value={passphrase}
          onChange={(e) => setPassphrase(e.target.value)}
          placeholder="Enter passphrase..."
          className="w-full max-w-md rounded-lg border border-border bg-slate-950 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          autoComplete="new-password"
        />
        {algorithm === "ed25519" && passphrase && (
          <p className="mt-2 text-sm text-amber-400">Ed25519 does not support passphrase encryption yet. Use RSA or ECDSA instead.</p>
        )}
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <button
          onClick={generateKeys}
          disabled={loading}
          className="rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white transition-colors hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Generating..." : "Generate Key Pair"}
        </button>
      </div>

      {error && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-400">{error}</div>
      )}

      {privateKey && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <button onClick={verifyKeyPair} className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-700">
              Verify Key Pair
            </button>
            {verified === true && (
              <span className="flex items-center gap-1.5 text-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                Verified
              </span>
            )}
            {verified === false && (
              <span className="flex items-center gap-1.5 text-red-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
                Verification failed
              </span>
            )}
          </div>
          <div className="rounded-xl border border-border bg-surface p-6">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-semibold text-slate-100">Private Key</h3>
              <button onClick={() => copyToClipboard(privateKey, "private")} className="rounded-lg border border-border px-3 py-1.5 text-sm text-slate-300 transition-colors hover:bg-slate-700">
                {copied === "private" ? "Copied!" : "Copy"}
              </button>
            </div>
            <pre className="max-h-48 overflow-auto rounded-lg bg-slate-950 p-4 text-xs text-slate-300 break-all">{privateKey}</pre>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-semibold text-slate-100">Public Key</h3>
              <button onClick={() => copyToClipboard(publicKey, "public")} className="rounded-lg border border-border px-3 py-1.5 text-sm text-slate-300 transition-colors hover:bg-slate-700">
                {copied === "public" ? "Copied!" : "Copy"}
              </button>
            </div>
            <pre className="max-h-24 overflow-auto rounded-lg bg-slate-950 p-4 text-xs text-slate-300 break-all">{publicKey}</pre>
          </div>
          {fingerprint && (
            <div className="rounded-xl border border-border bg-surface p-6">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-semibold text-slate-100">Fingerprint</h3>
                <button onClick={() => copyToClipboard(fingerprint, "fingerprint")} className="rounded-lg border border-border px-3 py-1.5 text-sm text-slate-300 transition-colors hover:bg-slate-700">
                  {copied === "fingerprint" ? "Copied!" : "Copy"}
                </button>
              </div>
              <p className="font-mono text-sm text-slate-300">{fingerprint}</p>
            </div>
          )}
        </div>
      )}

      {showAlgorithmGuide && SSH_ALGORITHM_GUIDE[algorithm] && (
        <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
          <h2 className="mb-3 text-xl font-semibold text-slate-200">
            {ALGORITHM_DISPLAY_NAMES[algorithm]} Guide
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-slate-400">
            {algorithm === "ed25519" &&
              "Use Ed25519 for most new setups. It is fast, compact, and widely supported."}
            {algorithm === "rsa" &&
              "Use RSA when you need compatibility with older SSH environments."}
            {algorithm === "ecdsa" &&
              "Use ECDSA when your environment expects NIST curves and compact keys."}
          </p>
          <div className="space-y-8 text-sm leading-relaxed text-slate-400">
            <div>
              <h3 className="mb-3 font-semibold text-slate-200">
                1. How can I generate {ALGORITHM_DISPLAY_NAMES[algorithm]} SSH keys with this tool?
              </h3>
              <ol className="list-decimal space-y-2 pl-5">
                {SSH_ALGORITHM_GUIDE[algorithm].usage.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-slate-200">
                2. How does this generator create {ALGORITHM_DISPLAY_NAMES[algorithm]} keys in my browser?
              </h3>
              <div className="space-y-2">
                {SSH_ALGORITHM_GUIDE[algorithm].howItWorks.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-slate-200">
                3. What are {ALGORITHM_DISPLAY_NAMES[algorithm]} SSH keys, and when should I use them?
              </h3>
              <div className="space-y-2">
                {SSH_ALGORITHM_GUIDE[algorithm].about.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-slate-200">
                4. Why choose {ALGORITHM_DISPLAY_NAMES[algorithm]} SSH keys over other algorithms?
              </h3>
              <ul className="list-disc space-y-2 pl-5">
                {SSH_ALGORITHM_GUIDE[algorithm].advantages.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-slate-200">
                5. Where are {ALGORITHM_DISPLAY_NAMES[algorithm]} SSH keys used for servers, Git, and cloud?
              </h3>
              <ul className="list-disc space-y-2 pl-5">
                {SSH_ALGORITHM_GUIDE[algorithm].useCases.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      <div className="flex flex-wrap gap-2">
        <Link href="/tools/ssh" className="inline-block text-slate-400 underline transition-colors hover:text-slate-200">
          ← Back to SSH Key Generator
        </Link>
        <Link href="/" className="inline-block text-slate-400 underline transition-colors hover:text-slate-200">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
