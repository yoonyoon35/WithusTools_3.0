"use client";

import { useState, useCallback, useRef } from "react";
import Link from "next/link";
import NumberInputWithStepper from "@/components/NumberInputWithStepper";
import {
  computeHash,
  verifyBcrypt,
  verifyArgon2,
  verifyPBKDF2,
  verifyScrypt,
  randomSalt,
  type PBKDF2Hash,
  type SaltFormat,
} from "@/lib/hash-utils";

export type HashAlgorithm =
  | "md5"
  | "sha1"
  | "sha224"
  | "sha256"
  | "sha384"
  | "sha512"
  | "sha3"
  | "keccak256"
  | "crc32"
  | "adler32"
  | "xxhash"
  | "blake2"
  | "ripemd160"
  | "bcrypt"
  | "argon2"
  | "pbkdf2"
  | "scrypt"
  | "whirlpool"
  | "fnv1a";

export interface HashCalculatorProps {
  algorithm: HashAlgorithm;
  displayName: string;
  supportsFile?: boolean;
  supportsVerify?: boolean;
  /** Bcrypt only: password hashing with salt rounds */
  isBcrypt?: boolean;
  /** Argon2 only: password hashing with time/memory/type options */
  isArgon2?: boolean;
  /** PBKDF2 only: key derivation with salt/iterations/hash */
  isPBKDF2?: boolean;
  /** Scrypt only: memory-hard key derivation */
  isScrypt?: boolean;
  /** SHA3 only: variant selection */
  isSha3?: boolean;
  /** xxHash only: variant selection */
  isXxHash?: boolean;
  /** FNV-1a only: variant selection */
  isFNV1a?: boolean;
  /** BLAKE2 only: variant selection */
  isBlake2?: boolean;
}

const BCRYPT_ROUNDS = [
  { value: 4, label: "4 (Testing)" },
  { value: 6, label: "6 (Testing)" },
  { value: 8, label: "8 (Testing)" },
  { value: 10, label: "10 (Recommended)" },
  { value: 12, label: "12 (Strong)" },
  { value: 14, label: "14 (High Security)" },
] as const;

const SHA3_VARIANTS = [
  { value: 224 as const, label: "SHA3-224" },
  { value: 256 as const, label: "SHA3-256" },
  { value: 384 as const, label: "SHA3-384" },
  { value: 512 as const, label: "SHA3-512" },
] as const;

const XXHASH_VARIANTS = [
  { value: 32 as const, label: "xxHash32" },
  { value: 64 as const, label: "xxHash64" },
] as const;

const FNV1A_VARIANTS = [
  { value: 32 as const, label: "32-bit" },
  { value: 64 as const, label: "64-bit" },
  { value: 128 as const, label: "128-bit" },
  { value: 256 as const, label: "256-bit" },
  { value: 512 as const, label: "512-bit" },
  { value: 1024 as const, label: "1024-bit" },
] as const;

const BLAKE2_VARIANTS = [
  { value: "blake2b-512" as const, label: "BLAKE2b-512" },
  { value: "blake2b-256" as const, label: "BLAKE2b-256" },
  { value: "blake2s-256" as const, label: "BLAKE2s-256" },
] as const;

const ARGON2_TYPES = [
  { value: "argon2id" as const, label: "Argon2id (Recommended)" },
  { value: "argon2i" as const, label: "Argon2i" },
  { value: "argon2d" as const, label: "Argon2d" },
] as const;

const ARGON2_MEM_OPTIONS = [
  { value: 16384, label: "16 MiB" },
  { value: 32768, label: "32 MiB" },
  { value: 65536, label: "64 MiB (Recommended)" },
  { value: 131072, label: "128 MiB" },
  { value: 262144, label: "256 MiB" },
] as const;

const ARGON2_PARALLELISM_OPTIONS = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
] as const;

const ARGON2_HASH_LEN_OPTIONS = [
  { value: 16, label: "16 bytes" },
  { value: 24, label: "24 bytes" },
  { value: 32, label: "32 bytes (Recommended)" },
  { value: 48, label: "48 bytes" },
  { value: 64, label: "64 bytes" },
] as const;

const PBKDF2_ITERATIONS = [
  { value: 1000, label: "1,000 (Testing)" },
  { value: 10000, label: "10,000" },
  { value: 100000, label: "100,000 (Recommended)" },
  { value: 310000, label: "310,000 (OWASP)" },
  { value: 600000, label: "600,000" },
] as const;

const PBKDF2_HASH_OPTIONS: { value: PBKDF2Hash; label: string }[] = [
  { value: "SHA-1", label: "SHA-1" },
  { value: "SHA-256", label: "SHA-256 (Recommended)" },
  { value: "SHA-384", label: "SHA-384" },
  { value: "SHA-512", label: "SHA-512" },
];

const PBKDF2_KEY_LEN_OPTIONS = [
  { value: 16, label: "16 bytes" },
  { value: 24, label: "24 bytes" },
  { value: 32, label: "32 bytes (Recommended)" },
  { value: 48, label: "48 bytes" },
  { value: 64, label: "64 bytes" },
] as const;

const SCRYPT_N_OPTIONS = [
  { value: 1024, label: "1024 (Testing)" },
  { value: 4096, label: "4096" },
  { value: 16384, label: "16384 (Recommended)" },
  { value: 32768, label: "32768" },
  { value: 65536, label: "65536" },
] as const;

const SALT_FORMAT_OPTIONS: { value: SaltFormat; label: string }[] = [
  { value: "auto", label: "Auto (recommended)" },
  { value: "hex", label: "Hex" },
  { value: "utf8", label: "UTF-8" },
];

export default function HashCalculator({
  algorithm,
  displayName,
  supportsFile = true,
  supportsVerify = true,
  isBcrypt = false,
  isArgon2 = false,
  isPBKDF2 = false,
  isScrypt = false,
  isSha3 = false,
  isXxHash = false,
  isFNV1a = false,
  isBlake2 = false,
}: HashCalculatorProps) {
  const [text, setText] = useState("");
  const [hash, setHash] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [verifyInput, setVerifyInput] = useState("");
  const [verifyHashInput, setVerifyHashInput] = useState("");
  const [verifyPbkdf2Salt, setVerifyPbkdf2Salt] = useState("");
  const [verifyPbkdf2SaltFormat, setVerifyPbkdf2SaltFormat] = useState<SaltFormat>("auto");
  const [verifyPbkdf2Iterations, setVerifyPbkdf2Iterations] = useState(100000);
  const [verifyPbkdf2Hash, setVerifyPbkdf2Hash] = useState<PBKDF2Hash>("SHA-256");
  const [verifyResult, setVerifyResult] = useState<boolean | null>(null);
  const [bcryptRounds, setBcryptRounds] = useState(10);
  const [sha3Variant, setSha3Variant] = useState<224 | 256 | 384 | 512>(256);
  const [xxHashVariant, setXxHashVariant] = useState<32 | 64>(64);
  const [fnv1aVariant, setFnv1aVariant] = useState<32 | 64 | 128 | 256 | 512 | 1024>(32);
  const [blake2Variant, setBlake2Variant] = useState<
    "blake2b-256" | "blake2b-512" | "blake2s-256"
  >("blake2b-512");
  const [argon2Time, setArgon2Time] = useState(2);
  const [argon2Mem, setArgon2Mem] = useState(65536);
  const [argon2Parallelism, setArgon2Parallelism] = useState(1);
  const [argon2HashLen, setArgon2HashLen] = useState(32);
  const [argon2Salt, setArgon2Salt] = useState("");
  const [pbkdf2Salt, setPbkdf2Salt] = useState("");
  const [pbkdf2SaltFormat, setPbkdf2SaltFormat] = useState<SaltFormat>("auto");
  const [pbkdf2Iterations, setPbkdf2Iterations] = useState(100000);
  const [pbkdf2Hash, setPbkdf2Hash] = useState<PBKDF2Hash>("SHA-256");
  const [pbkdf2KeyLen, setPbkdf2KeyLen] = useState(32);
  const [scryptSalt, setScryptSalt] = useState("");
  const [scryptSaltFormat, setScryptSaltFormat] = useState<SaltFormat>("auto");
  const [scryptN, setScryptN] = useState(16384);
  const [scryptR, setScryptR] = useState(8);
  const [scryptP, setScryptP] = useState(1);
  const [scryptKeyLen, setScryptKeyLen] = useState(32);
  const [verifyScryptSalt, setVerifyScryptSalt] = useState("");
  const [verifyScryptSaltFormat, setVerifyScryptSaltFormat] = useState<SaltFormat>("auto");
  const [verifyScryptN, setVerifyScryptN] = useState(16384);
  const [verifyScryptR, setVerifyScryptR] = useState(8);
  const [verifyScryptP, setVerifyScryptP] = useState(1);
  const [argon2Type, setArgon2Type] = useState<
    "argon2d" | "argon2i" | "argon2id"
  >("argon2id");
  const [showPassword, setShowPassword] = useState(false);
  const [usedSalt, setUsedSalt] = useState<string | null>(null);
  const [usedParams, setUsedParams] = useState<Array<{ label: string; value: string | number }>>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const generate = useCallback(async () => {
    const input = text.trim();
    if (!input) {
      setError("Enter text to hash.");
      return;
    }
    setLoading(true);
    setError("");
    setHash("");
    setUsedSalt(null);
    setUsedParams([]);
    setVerifyResult(null);
    try {
      let argon2SaltToUse: string | undefined;
      let pbkdf2SaltToUse: string | undefined;
      let scryptSaltToUse: string | undefined;
      if (isArgon2) {
        const s = argon2Salt.trim() || randomSalt();
        if (!argon2Salt.trim()) setArgon2Salt(s);
        argon2SaltToUse = s;
      }
      if (isPBKDF2) {
        const s = pbkdf2Salt.trim() || randomSalt();
        if (!pbkdf2Salt.trim()) setPbkdf2Salt(s);
        pbkdf2SaltToUse = s;
      }
      if (isScrypt) {
        const s = scryptSalt.trim() || randomSalt();
        if (!scryptSalt.trim()) setScryptSalt(s);
        scryptSaltToUse = s;
      }

      const options =
        isBcrypt
          ? { bcryptRounds }
          : isArgon2
            ? {
                argon2Options: {
                  time: argon2Time,
                  mem: argon2Mem,
                  parallelism: argon2Parallelism,
                  hashLen: argon2HashLen,
                  type: argon2Type,
                  salt: argon2SaltToUse,
                },
              }
            : isPBKDF2
              ? {
                  pbkdf2Options: {
                    salt: pbkdf2SaltToUse,
                    saltFormat: pbkdf2SaltFormat,
                    iterations: pbkdf2Iterations,
                    hash: pbkdf2Hash,
                    keyLength: pbkdf2KeyLen,
                  },
                }
              : isScrypt
                ? {
                    scryptOptions: {
                      salt: scryptSaltToUse,
                      saltFormat: scryptSaltFormat,
                      N: scryptN,
                      r: scryptR,
                      p: scryptP,
                      keyLength: scryptKeyLen,
                    },
                  }
                : isSha3
              ? { sha3Variant }
              : isXxHash
                ? { xxHashVariant }
                : isFNV1a
                  ? { fnv1aVariant }
                  : isBlake2
                  ? { blake2Variant }
                  : undefined;
      const result = await computeHash(algorithm, input, options);
      setHash(result);
      if (isArgon2 && argon2SaltToUse) setUsedSalt(argon2SaltToUse);
      else if (isPBKDF2 && pbkdf2SaltToUse) setUsedSalt(pbkdf2SaltToUse);
      else if (isScrypt && scryptSaltToUse) setUsedSalt(scryptSaltToUse);
      if (isBcrypt) {
        setUsedParams([{ label: "Rounds", value: bcryptRounds }]);
      } else if (isArgon2) {
        setUsedParams([
          { label: "Type", value: argon2Type },
          { label: "Time", value: argon2Time },
          { label: "Memory", value: argon2Mem },
          { label: "Parallelism", value: argon2Parallelism },
          { label: "HashLen", value: argon2HashLen },
          ...(argon2SaltToUse ? [{ label: "Salt", value: argon2SaltToUse }] : []),
        ]);
      } else if (isPBKDF2) {
        setUsedParams([
          { label: "Iterations", value: pbkdf2Iterations },
          { label: "Hash", value: pbkdf2Hash },
          { label: "KeyLength", value: pbkdf2KeyLen },
          { label: "SaltFormat", value: pbkdf2SaltFormat },
          ...(pbkdf2SaltToUse ? [{ label: "Salt", value: pbkdf2SaltToUse }] : []),
        ]);
      } else if (isScrypt) {
        setUsedParams([
          { label: "N", value: scryptN },
          { label: "r", value: scryptR },
          { label: "p", value: scryptP },
          { label: "KeyLength", value: scryptKeyLen },
          { label: "SaltFormat", value: scryptSaltFormat },
          ...(scryptSaltToUse ? [{ label: "Salt", value: scryptSaltToUse }] : []),
        ]);
      } else if (isSha3) {
        setUsedParams([{ label: "Variant", value: `SHA3-${sha3Variant}` }]);
      } else if (isXxHash) {
        setUsedParams([{ label: "Variant", value: `xxHash${xxHashVariant}` }]);
      } else if (isFNV1a) {
        setUsedParams([{ label: "Size", value: `${fnv1aVariant}-bit` }]);
      } else if (isBlake2) {
        setUsedParams([{ label: "Variant", value: blake2Variant }]);
      } else {
        setUsedParams([]);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Hash generation failed");
    } finally {
      setLoading(false);
    }
  }, [algorithm, text, isBcrypt, bcryptRounds, isArgon2, argon2Time, argon2Mem, argon2Parallelism, argon2HashLen, argon2Salt, argon2Type, isPBKDF2, pbkdf2Salt, pbkdf2SaltFormat, pbkdf2Iterations, pbkdf2Hash, pbkdf2KeyLen, isScrypt, scryptSalt, scryptSaltFormat, scryptN, scryptR, scryptP, scryptKeyLen, isSha3, sha3Variant, isXxHash, xxHashVariant, isFNV1a, fnv1aVariant, isBlake2, blake2Variant]);

  const handleFile = useCallback(
    async (file: File) => {
      setLoading(true);
      setError("");
      setHash("");
      setUsedParams([]);
      setVerifyResult(null);
      try {
        const content = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = () => reject(new Error("Failed to read file"));
          reader.readAsText(file);
        });
        const options =
          isSha3 ? { sha3Variant } : isXxHash ? { xxHashVariant } : isFNV1a ? { fnv1aVariant } : isBlake2 ? { blake2Variant } : undefined;
        const result = await computeHash(algorithm, content, options);
        setHash(result);
        setText(`[File: ${file.name}]`);
        if (isSha3) setUsedParams([{ label: "Variant", value: `SHA3-${sha3Variant}` }]);
        else if (isXxHash) setUsedParams([{ label: "Variant", value: `xxHash${xxHashVariant}` }]);
        else if (isFNV1a) setUsedParams([{ label: "Size", value: `${fnv1aVariant}-bit` }]);
        else if (isBlake2) setUsedParams([{ label: "Variant", value: blake2Variant }]);
        else setUsedParams([]);
      } catch (err) {
        setError(err instanceof Error ? err.message : "File hash failed");
      } finally {
        setLoading(false);
      }
    },
    [algorithm, isSha3, sha3Variant, isXxHash, xxHashVariant, isFNV1a, fnv1aVariant, isBlake2, blake2Variant]
  );

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const f = e.dataTransfer.files[0];
      if (f) handleFile(f);
    },
    [handleFile]
  );

  const onFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const f = e.target.files?.[0];
      if (f) handleFile(f);
    },
    [handleFile]
  );

  const verify = useCallback(async () => {
    if (isBcrypt) {
      const pwd = verifyInput.trim();
      const h = verifyHashInput.trim();
      if (!pwd || !h) {
        setError("Enter password and hash to verify.");
        return;
      }
      setError("");
      setVerifyResult(null);
      try {
        const ok = await verifyBcrypt(pwd, h);
        setVerifyResult(ok);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Verification failed");
        setVerifyResult(false);
      }
    } else if (isArgon2) {
      const pwd = verifyInput.trim();
      const h = verifyHashInput.trim();
      if (!pwd || !h) {
        setError("Enter password and Argon2 hash to verify.");
        return;
      }
      setError("");
      setVerifyResult(null);
      try {
        const ok = await verifyArgon2(pwd, h);
        setVerifyResult(ok);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Verification failed");
        setVerifyResult(false);
      }
    } else if (isPBKDF2) {
      const pwd = verifyInput.trim();
      const salt = verifyPbkdf2Salt.trim();
      const keyHex = verifyHashInput.trim();
      if (!pwd || !salt || !keyHex) {
        setError("Enter password, salt, and derived key (hex) to verify.");
        return;
      }
      setError("");
      setVerifyResult(null);
      try {
        const ok = await verifyPBKDF2(pwd, salt, keyHex, {
          iterations: verifyPbkdf2Iterations,
          hash: verifyPbkdf2Hash,
          saltFormat: verifyPbkdf2SaltFormat,
        });
        setVerifyResult(ok);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Verification failed");
        setVerifyResult(false);
      }
    } else if (isScrypt) {
      const pwd = verifyInput.trim();
      const salt = verifyScryptSalt.trim();
      const keyHex = verifyHashInput.trim();
      if (!pwd || !salt || !keyHex) {
        setError("Enter password, salt, and derived key (hex) to verify.");
        return;
      }
      setError("");
      setVerifyResult(null);
      try {
        const ok = await verifyScrypt(pwd, salt, keyHex, {
          N: verifyScryptN,
          r: verifyScryptR,
          p: verifyScryptP,
          saltFormat: verifyScryptSaltFormat,
        });
        setVerifyResult(ok);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Verification failed");
        setVerifyResult(false);
      }
    } else {
      setVerifyResult(verifyInput.trim().toLowerCase() === hash.toLowerCase());
    }
  }, [isBcrypt, isArgon2, isPBKDF2, isScrypt, verifyInput, verifyHashInput, verifyPbkdf2Salt, verifyPbkdf2SaltFormat, verifyPbkdf2Iterations, verifyPbkdf2Hash, verifyScryptSalt, verifyScryptSaltFormat, verifyScryptN, verifyScryptR, verifyScryptP, hash]);

  const copyToClipboard = useCallback(async () => {
    if (!hash) return;
    try {
      await navigator.clipboard.writeText(hash);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError("Failed to copy");
    }
  }, [hash]);

  const clearAll = useCallback(() => {
    setText("");
    setHash("");
    setUsedSalt(null);
    setUsedParams([]);
    setError("");
    setVerifyInput("");
    setVerifyHashInput("");
    setVerifyPbkdf2Salt("");
    setVerifyPbkdf2SaltFormat("auto");
    setVerifyScryptSalt("");
    setVerifyScryptSaltFormat("auto");
    setVerifyResult(null);
    if (isArgon2) setArgon2Salt("");
    if (isPBKDF2) {
      setPbkdf2Salt("");
      setPbkdf2SaltFormat("auto");
    }
    if (isScrypt) {
      setScryptSalt("");
      setScryptSaltFormat("auto");
    }
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, [isArgon2, isPBKDF2, isScrypt]);

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 px-4 py-3">
        <p className="flex items-center gap-2 font-semibold text-amber-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          All hashing runs in your browser. Data is never sent to any server.
        </p>
      </div>

      {isPBKDF2 && (
        <details className="rounded-xl border border-blue-500/30 bg-blue-500/5">
          <summary className="cursor-pointer px-4 py-3 font-medium text-blue-400 hover:text-blue-300">
            📋 Salt interpretation · Output format · Verification guide
          </summary>
          <div className="space-y-3 px-4 pb-4 pt-1 text-sm text-slate-300">
            <div>
              <strong className="text-slate-200">Salt interpretation</strong>
              <ul className="mt-1 list-inside list-disc space-y-0.5 text-slate-400">
                <li>Even length + only 0-9, a-f, A-F → <strong className="text-slate-300">decoded as hex</strong> (e.g. a1b2c3d4...)</li>
                <li>Otherwise → <strong className="text-slate-300">used as UTF-8 text</strong></li>
              </ul>
            </div>
            <div>
              <strong className="text-slate-200">Output format</strong>
              <p className="mt-1 text-slate-400">
                Only the derived key is output as a hex string. Salt, iterations, hash, and key length must be stored separately.
              </p>
            </div>
            <div>
              <strong className="text-slate-200">Verification</strong>
              <p className="mt-1 text-slate-400">
                Password, Salt, Iterations, Hash, and Derived key (hex) must all match for verification to succeed.
              </p>
            </div>
            <div>
              <strong className="text-slate-200">Comparing with other sites</strong>
              <p className="mt-1 text-slate-400">
                Other tools may use different salt encoding (hex vs UTF-8) or output formats. Our implementation produces the same results as Node.js/Python standard libraries.
              </p>
            </div>
          </div>
        </details>
      )}

      <div className="rounded-xl border border-border bg-surface p-6">
        <h2 className="mb-2 text-lg font-semibold text-slate-100">
          {isBcrypt || isArgon2 || isPBKDF2 || isScrypt ? "Password Input" : "Text Input"}
        </h2>
        <div className="relative">
          <input
            type={showPassword || !isBcrypt ? "text" : "password"}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={
              isBcrypt || isArgon2 || isPBKDF2 || isScrypt
                ? "Enter password to hash..."
                : "Enter or paste text..."
            }
            className="w-full rounded-lg border border-border bg-slate-950 px-4 py-3 pr-24 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {(isBcrypt || isArgon2 || isPBKDF2 || isScrypt) && (
            <button
              type="button"
              onClick={() => setShowPassword((p) => !p)}
              className="absolute right-12 top-1/2 -translate-y-1/2 px-2 text-slate-400 hover:text-slate-200"
              title={showPassword ? "Hide" : "Show"}
            >
              {showPassword ? "🙈" : "👁"}
            </button>
          )}
          <button
            type="button"
            onClick={clearAll}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded px-2 py-1 text-slate-400 hover:bg-slate-700 hover:text-slate-200"
            title="Clear"
          >
            ✕
          </button>
        </div>

        {isArgon2 && (
          <div className="mt-4 space-y-4">
            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Salt (optional, leave empty for random)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={argon2Salt}
                  onChange={(e) => setArgon2Salt(e.target.value)}
                  placeholder="Same salt for cross-site verification"
                  className="min-w-0 flex-1 rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setArgon2Salt(randomSalt())}
                  className="shrink-0 rounded-lg border border-border px-4 py-2 text-sm text-slate-300 hover:bg-slate-700"
                >
                  Random
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Iterations (time cost)
                </label>
                <NumberInputWithStepper
                  value={String(argon2Time)}
                  onChange={(v) => setArgon2Time(Math.max(1, Math.min(10, Number(v))))}
                  min={1}
                  max={10}
                  className="w-28"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Memory Cost
                </label>
                <select
                  value={argon2Mem}
                  onChange={(e) => setArgon2Mem(Number(e.target.value))}
                  className="rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 focus:border-blue-500 focus:outline-none"
                >
                  {ARGON2_MEM_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Parallelism
                </label>
                <select
                  value={argon2Parallelism}
                  onChange={(e) => setArgon2Parallelism(Number(e.target.value))}
                  className="rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 focus:border-blue-500 focus:outline-none"
                >
                  {ARGON2_PARALLELISM_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Hash Length
                </label>
                <select
                  value={argon2HashLen}
                  onChange={(e) => setArgon2HashLen(Number(e.target.value))}
                  className="rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 focus:border-blue-500 focus:outline-none"
                >
                  {ARGON2_HASH_LEN_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Type
                </label>
                <select
                  value={argon2Type}
                  onChange={(e) =>
                    setArgon2Type(e.target.value as "argon2d" | "argon2i" | "argon2id")
                  }
                  className="rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 focus:border-blue-500 focus:outline-none"
                >
                  {ARGON2_TYPES.map((v) => (
                    <option key={v.value} value={v.value}>
                      {v.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {isScrypt && (
          <div className="mt-4 space-y-4">
            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Salt (optional, leave empty for random)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={scryptSalt}
                  onChange={(e) => setScryptSalt(e.target.value)}
                  placeholder="Plain text or hex (e.g. a1b2c3...)"
                  className="min-w-0 flex-1 rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setScryptSalt(randomSalt())}
                  className="shrink-0 rounded-lg border border-border px-4 py-2 text-sm text-slate-300 hover:bg-slate-700"
                >
                  Random
                </button>
                <select
                  value={scryptSaltFormat}
                  onChange={(e) => setScryptSaltFormat(e.target.value as SaltFormat)}
                  className="shrink-0 rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 focus:border-blue-500 focus:outline-none"
                  title="Auto: hex decode if valid hex, else UTF-8. Use UTF-8 for cross-site verification."
                >
                  {SALT_FORMAT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      Salt: {o.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  N (cost)
                </label>
                <select
                  value={scryptN}
                  onChange={(e) => setScryptN(Number(e.target.value))}
                  className="rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 focus:border-blue-500 focus:outline-none"
                >
                  {SCRYPT_N_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  r (block size)
                </label>
                <NumberInputWithStepper
                  value={String(scryptR)}
                  onChange={(v) => setScryptR(Math.max(1, Math.min(255, Number(v))))}
                  min={1}
                  max={255}
                  className="w-28"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  p (parallel)
                </label>
                <NumberInputWithStepper
                  value={String(scryptP)}
                  onChange={(v) => setScryptP(Math.max(1, Math.min(255, Number(v))))}
                  min={1}
                  max={255}
                  className="w-28"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Key Length
                </label>
                <select
                  value={scryptKeyLen}
                  onChange={(e) => setScryptKeyLen(Number(e.target.value))}
                  className="rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 focus:border-blue-500 focus:outline-none"
                >
                  {PBKDF2_KEY_LEN_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {isPBKDF2 && (
          <div className="mt-4 space-y-4">
            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Salt (optional, leave empty for random)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={pbkdf2Salt}
                  onChange={(e) => setPbkdf2Salt(e.target.value)}
                  placeholder="Plain text or hex (e.g. a1b2c3...)"
                  className="min-w-0 flex-1 rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setPbkdf2Salt(randomSalt())}
                  className="shrink-0 rounded-lg border border-border px-4 py-2 text-sm text-slate-300 hover:bg-slate-700"
                >
                  Random
                </button>
                <select
                  value={pbkdf2SaltFormat}
                  onChange={(e) => setPbkdf2SaltFormat(e.target.value as SaltFormat)}
                  className="shrink-0 rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 focus:border-blue-500 focus:outline-none"
                  title="Auto: hex decode if valid hex, else UTF-8. Use UTF-8 for cross-site verification."
                >
                  {SALT_FORMAT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      Salt: {o.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Iterations
                </label>
                <select
                  value={pbkdf2Iterations}
                  onChange={(e) => setPbkdf2Iterations(Number(e.target.value))}
                  className="rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 focus:border-blue-500 focus:outline-none"
                >
                  {PBKDF2_ITERATIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Hash
                </label>
                <select
                  value={pbkdf2Hash}
                  onChange={(e) => setPbkdf2Hash(e.target.value as PBKDF2Hash)}
                  className="rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 focus:border-blue-500 focus:outline-none"
                >
                  {PBKDF2_HASH_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Key Length
                </label>
                <select
                  value={pbkdf2KeyLen}
                  onChange={(e) => setPbkdf2KeyLen(Number(e.target.value))}
                  className="rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 focus:border-blue-500 focus:outline-none"
                >
                  {PBKDF2_KEY_LEN_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {isBcrypt && (
          <div className="mt-4">
            <label className="mb-2 block text-sm text-slate-400">
              Salt Rounds
            </label>
            <select
              value={bcryptRounds}
              onChange={(e) => setBcryptRounds(Number(e.target.value))}
              className="rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 focus:border-blue-500 focus:outline-none"
            >
              {BCRYPT_ROUNDS.map((r) => (
                <option key={r.value} value={r.value}>
                  {r.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {isSha3 && (
          <div className="mt-4">
            <label className="mb-2 block text-sm text-slate-400">
              SHA3 Variant
            </label>
            <select
              value={sha3Variant}
              onChange={(e) =>
                setSha3Variant(Number(e.target.value) as 224 | 256 | 384 | 512)
              }
              className="rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 focus:border-blue-500 focus:outline-none"
            >
              {SHA3_VARIANTS.map((v) => (
                <option key={v.value} value={v.value}>
                  {v.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {isXxHash && (
          <div className="mt-4">
            <label className="mb-2 block text-sm text-slate-400">
              xxHash Variant
            </label>
            <select
              value={xxHashVariant}
              onChange={(e) =>
                setXxHashVariant(Number(e.target.value) as 32 | 64)
              }
              className="rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 focus:border-blue-500 focus:outline-none"
            >
              {XXHASH_VARIANTS.map((v) => (
                <option key={v.value} value={v.value}>
                  {v.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {isFNV1a && (
          <div className="mt-4">
            <label className="mb-2 block text-sm text-slate-400">
              FNV-1a Size
            </label>
            <select
              value={fnv1aVariant}
              onChange={(e) =>
                setFnv1aVariant(Number(e.target.value) as 32 | 64 | 128 | 256 | 512 | 1024)
              }
              className="rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 focus:border-blue-500 focus:outline-none"
            >
              {FNV1A_VARIANTS.map((v) => (
                <option key={v.value} value={v.value}>
                  {v.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {isBlake2 && (
          <div className="mt-4">
            <label className="mb-2 block text-sm text-slate-400">
              BLAKE2 Variant
            </label>
            <select
              value={blake2Variant}
              onChange={(e) =>
                setBlake2Variant(e.target.value as "blake2b-256" | "blake2b-512" | "blake2s-256")
              }
              className="rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 focus:border-blue-500 focus:outline-none"
            >
              {BLAKE2_VARIANTS.map((v) => (
                <option key={v.value} value={v.value}>
                  {v.label}
                </option>
              ))}
            </select>
          </div>
        )}

        <button
          onClick={generate}
          disabled={loading}
          className="mt-4 rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Processing..." : `Generate ${displayName} Hash`}
        </button>
      </div>

      {supportsFile && !isBcrypt && !isArgon2 && !isPBKDF2 && !isScrypt && (
        <div className="rounded-xl border border-border bg-surface p-6">
          <h2 className="mb-2 text-lg font-semibold text-slate-100">
            File Input
          </h2>
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={onDrop}
            className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-slate-950/50 px-6 py-8 transition-colors hover:border-slate-600"
          >
            <span className="mb-2 text-4xl text-slate-500">📁</span>
            <p className="mb-2 text-sm text-slate-400">
              Drag & drop a file or click to select
            </p>
            <input
              ref={fileInputRef}
              type="file"
              onChange={onFileChange}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="rounded-lg border border-border px-4 py-2 text-sm text-slate-300 hover:bg-slate-700"
            >
              Select File
            </button>
          </div>
        </div>
      )}

      {error && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-400">
          {error}
        </div>
      )}

      {hash && (
        <div className="rounded-xl border border-border bg-surface p-6">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="font-semibold text-slate-100">Generated Hash</h3>
            <button
              onClick={copyToClipboard}
              className="rounded-lg border border-border px-3 py-1.5 text-sm text-slate-300 transition-colors hover:bg-slate-700"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <pre className="max-h-32 overflow-auto break-all rounded-lg bg-slate-950 p-4 text-sm text-slate-300">
            {hash}
          </pre>
          {usedParams.length > 0 && (
            <div className="mt-3 rounded-lg bg-slate-950/80 p-3 text-sm">
              <div className="mb-2 font-medium text-slate-400">Parameters used</div>
              <div className="flex flex-col gap-1">
                {usedParams.map(({ label, value }) => (
                  <div key={label} className="flex flex-wrap gap-x-2">
                    <span className="text-slate-500">{label}:</span>
                    <span className="break-all font-mono text-slate-300">{String(value)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {supportsVerify && (hash || isBcrypt || isArgon2 || isPBKDF2 || isScrypt) && (
        <div className="rounded-xl border border-border bg-surface p-6">
          <h3 className="mb-3 font-semibold text-slate-100">
            {isBcrypt || isArgon2 || isPBKDF2 || isScrypt ? "Verify Password" : "Hash Verification"}
          </h3>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            {(isBcrypt || isArgon2 || isPBKDF2 || isScrypt) ? (
              <div className="flex w-full flex-col gap-3">
                <div className="flex flex-wrap gap-3 sm:flex-nowrap">
                  <input
                    type="password"
                    value={verifyInput}
                    onChange={(e) => setVerifyInput(e.target.value)}
                    placeholder="Enter password to verify..."
                    className="min-w-0 flex-1 rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 placeholder:text-slate-500 sm:min-w-[160px]"
                  />
                  <input
                    type="text"
                    value={verifyHashInput}
                    onChange={(e) => setVerifyHashInput(e.target.value)}
                    placeholder={
                      isPBKDF2 || isScrypt
                        ? "Derived key (hex)..."
                        : isArgon2
                          ? "Enter Argon2 encoded hash to verify..."
                          : "Enter Bcrypt hash to verify..."
                    }
                    className="min-w-0 flex-1 rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 placeholder:text-slate-500 sm:min-w-[200px]"
                  />
                </div>
                {isPBKDF2 && (
                  <div className="flex flex-wrap gap-3">
                    <input
                      type="text"
                      value={verifyPbkdf2Salt}
                      onChange={(e) => setVerifyPbkdf2Salt(e.target.value)}
                      placeholder="Salt (plain or hex)"
                      className="min-w-[120px] flex-1 rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 placeholder:text-slate-500 sm:max-w-[200px]"
                    />
                    <select
                      value={verifyPbkdf2SaltFormat}
                      onChange={(e) => setVerifyPbkdf2SaltFormat(e.target.value as SaltFormat)}
                      className="rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 focus:border-blue-500 focus:outline-none"
                    >
                      {SALT_FORMAT_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                    <NumberInputWithStepper
                      value={String(verifyPbkdf2Iterations)}
                      onChange={(v) => setVerifyPbkdf2Iterations(Number(v))}
                      placeholder="Iterations"
                      className="w-32"
                    />
                    <select
                      value={verifyPbkdf2Hash}
                      onChange={(e) => setVerifyPbkdf2Hash(e.target.value as PBKDF2Hash)}
                      className="rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 focus:border-blue-500 focus:outline-none"
                    >
                      {PBKDF2_HASH_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                {isScrypt && (
                  <div className="flex flex-wrap gap-3">
                    <input
                      type="text"
                      value={verifyScryptSalt}
                      onChange={(e) => setVerifyScryptSalt(e.target.value)}
                      placeholder="Salt (plain or hex)"
                      className="min-w-[120px] flex-1 rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 placeholder:text-slate-500 sm:max-w-[200px]"
                    />
                    <select
                      value={verifyScryptSaltFormat}
                      onChange={(e) => setVerifyScryptSaltFormat(e.target.value as SaltFormat)}
                      className="rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 focus:border-blue-500 focus:outline-none"
                    >
                      {SALT_FORMAT_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                    <NumberInputWithStepper
                      value={String(verifyScryptN)}
                      onChange={(v) => setVerifyScryptN(Number(v))}
                      placeholder="N"
                      className="w-28"
                    />
                    <NumberInputWithStepper
                      value={String(verifyScryptR)}
                      onChange={(v) => setVerifyScryptR(Number(v))}
                      placeholder="r"
                      className="w-24"
                    />
                    <NumberInputWithStepper
                      value={String(verifyScryptP)}
                      onChange={(v) => setVerifyScryptP(Number(v))}
                      placeholder="p"
                      className="w-24"
                    />
                  </div>
                )}
              </div>
            ) : (
              <input
                type="text"
                value={verifyInput}
                onChange={(e) => setVerifyInput(e.target.value)}
                placeholder="Enter hash to compare..."
                className="min-w-[200px] flex-1 rounded-lg border border-border bg-slate-950 px-4 py-2 text-slate-100 placeholder:text-slate-500"
              />
            )}
            <button
              onClick={verify}
              className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-700"
            >
              Verify
            </button>
          </div>
          {verifyResult !== null && (
            <div className="mt-3 flex items-center gap-2">
              {verifyResult ? (
                <span className="text-green-400">✓ Match</span>
              ) : (
                <span className="text-red-400">✗ No match</span>
              )}
            </div>
          )}
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        <Link
          href="/tools/hash-calculator"
          className="inline-block text-slate-400 underline transition-colors hover:text-slate-200"
        >
          ← Back to Hash Calculator
        </Link>
        <Link
          href="/"
          className="inline-block text-slate-400 underline transition-colors hover:text-slate-200"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
