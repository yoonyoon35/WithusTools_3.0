/**
 * Hash utilities for text and ArrayBuffer.
 * Uses Web Crypto API where available, crypto-js for MD5/RIPEMD, js-sha3 for SHA3, bcryptjs for Bcrypt.
 */

const bufferToHex = (buffer: ArrayBuffer): string => {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
};

export async function hashWithWebCrypto(
  data: string | ArrayBuffer,
  algorithm: "SHA-1" | "SHA-256" | "SHA-384" | "SHA-512"
): Promise<string> {
  const buffer =
    typeof data === "string" ? new TextEncoder().encode(data) : data;
  const hashBuffer = await crypto.subtle.digest(algorithm, buffer);
  return bufferToHex(hashBuffer);
}

export async function hashMD5(data: string): Promise<string> {
  const { MD5 } = await import("crypto-js");
  return MD5(data).toString();
}

export async function hashRIPEMD160(data: string): Promise<string> {
  const { RIPEMD160 } = await import("crypto-js");
  return RIPEMD160(data).toString();
}

/** SHA-224 (truncated SHA-256). Web Crypto API does not support it, so uses crypto-js. */
export async function hashSHA224(data: string): Promise<string> {
  const { SHA224 } = await import("crypto-js");
  return SHA224(data).toString();
}

export async function hashSHA3(
  data: string,
  variant: 224 | 256 | 384 | 512
): Promise<string> {
  const sha3 = await import("js-sha3");
  const fn =
    variant === 224
      ? sha3.sha3_224
      : variant === 256
        ? sha3.sha3_256
        : variant === 384
          ? sha3.sha3_384
          : sha3.sha3_512;
  return fn(data);
}

/** Keccak-256 (original Keccak, used in Ethereum). Different from SHA3-256. */
export async function hashKeccak256(data: string): Promise<string> {
  const { keccak256 } = await import("js-sha3");
  return keccak256(data);
}

/** Whirlpool 512-bit cryptographic hash. ISO/IEC 10118-3. */
export async function hashWhirlpool(data: string): Promise<string> {
  const { Whirlpool, encoders } = await import("whirlpool-hash");
  const w = new Whirlpool();
  const rawHash = w.getHash(data);
  return encoders.toHex(rawHash as unknown as string);
}

/** FNV-1a non-cryptographic hash. Fowler–Noll–Vo. Fast, good distribution. Size 32–1024 bit. */
export async function hashFNV1a(
  data: string,
  size: 32 | 64 | 128 | 256 | 512 | 1024 = 32
): Promise<string> {
  const fnv1a = (await import("@sindresorhus/fnv1a")).default;
  const result = fnv1a(data, { size });
  const hex = result.toString(16);
  return hex.padStart(size / 4, "0");
}

/** CRC32 checksum (non-cryptographic). Used in ZIP, PNG, Git. */
export async function hashCRC32(data: string): Promise<string> {
  const crc32 = await import("crc-32");
  const value = crc32.default.str(data);
  return (value >>> 0).toString(16).padStart(8, "0");
}

/** Adler-32 checksum (non-cryptographic). Used in zlib, PNG. Faster than CRC32. */
export async function hashAdler32(data: string): Promise<string> {
  const adler32 = await import("adler-32");
  const value = adler32.str(data);
  return (value >>> 0).toString(16).padStart(8, "0");
}

/** xxHash (extremely fast non-cryptographic). Variant 32 or 64 bit. */
export async function hashXxHash(
  data: string,
  variant: 32 | 64
): Promise<string> {
  const XXH = await import("xxhashjs");
  const fn = variant === 32 ? XXH.h32 : XXH.h64;
  const result = fn(data, 0);
  const hex = result.toString(16).replace(/^0x/i, "");
  return variant === 32 ? hex.padStart(8, "0") : hex.padStart(16, "0");
}

/** BLAKE2 cryptographic hash. Variants: blake2b-256, blake2b-512, blake2s-256. */
export async function hashBlake2(
  data: string,
  variant: "blake2b-256" | "blake2b-512" | "blake2s-256"
): Promise<string> {
  const blake = await import("blakejs");
  if (variant === "blake2b-256") {
    return blake.blake2bHex(data, undefined, 32);
  }
  if (variant === "blake2b-512") {
    return blake.blake2bHex(data, undefined, 64);
  }
  return blake.blake2sHex(data, undefined, 32);
}

export async function hashBcrypt(password: string, rounds: number): Promise<string> {
  const bcrypt = await import("bcryptjs");
  return bcrypt.hash(password, rounds);
}

export async function verifyBcrypt(
  password: string,
  hash: string
): Promise<boolean> {
  const bcrypt = await import("bcryptjs");
  return bcrypt.compare(password, hash);
}

export interface Argon2Options {
  time?: number;
  mem?: number;
  hashLen?: number;
  parallelism?: number;
  type?: "argon2d" | "argon2i" | "argon2id";
  salt?: string;
}

/** Generates a random 16-byte salt as hex string (32 chars). */
export function randomSalt(): string {
  const arr = crypto.getRandomValues(new Uint8Array(16));
  return Array.from(arr)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/** Argon2 password hashing. Returns encoded hash string. */
export async function hashArgon2(
  password: string,
  salt: string,
  options?: Argon2Options
): Promise<string> {
  const { default: argon2 } = await import(
    "argon2-browser/dist/argon2-bundled.min.js"
  );
  const ArgonType = argon2.ArgonType;
  const typeMap: Record<string, number> = {
    argon2d: ArgonType.Argon2d,
    argon2i: ArgonType.Argon2i,
    argon2id: ArgonType.Argon2id,
  };
  const res = await argon2.hash({
    pass: password,
    salt,
    time: options?.time ?? 2,
    mem: options?.mem ?? 65536,
    hashLen: options?.hashLen ?? 32,
    parallelism: options?.parallelism ?? 1,
    type: typeMap[options?.type ?? "argon2id"],
  });
  return res.encoded;
}

export async function verifyArgon2(
  password: string,
  encoded: string
): Promise<boolean> {
  const { default: argon2 } = await import(
    "argon2-browser/dist/argon2-bundled.min.js"
  );
  try {
    await argon2.verify({ pass: password, encoded });
    return true;
  } catch {
    return false;
  }
}

/** PBKDF2 hash algorithms supported by Web Crypto API */
export type PBKDF2Hash = "SHA-1" | "SHA-256" | "SHA-384" | "SHA-512";

/** Salt format: Auto (hex if valid hex+even, else UTF-8) | Hex | UTF-8 */
export type SaltFormat = "auto" | "hex" | "utf8";

export interface PBKDF2Options {
  salt?: string;
  saltFormat?: SaltFormat;
  iterations?: number;
  hash?: PBKDF2Hash;
  keyLength?: number;
}

function saltToBytes(salt: string, format: SaltFormat = "auto"): Uint8Array {
  if (format === "utf8") {
    return new TextEncoder().encode(salt);
  }
  if (format === "hex") {
    const hexOnly = salt.replace(/[^0-9a-fA-F]/g, "");
    const padded = hexOnly.length % 2 ? "0" + hexOnly : hexOnly;
    const arr = new Uint8Array(padded.length / 2);
    for (let i = 0; i < padded.length; i += 2) {
      arr[i / 2] = parseInt(padded.slice(i, i + 2), 16);
    }
    return arr;
  }
  // auto: hex if valid hex + even length, else UTF-8
  const hex = /^[0-9a-fA-F]+$/;
  if (hex.test(salt) && salt.length % 2 === 0) {
    const arr = new Uint8Array(salt.length / 2);
    for (let i = 0; i < salt.length; i += 2) {
      arr[i / 2] = parseInt(salt.slice(i, i + 2), 16);
    }
    return arr;
  }
  return new TextEncoder().encode(salt);
}

/** PBKDF2 key derivation. Returns derived key as hex. */
export async function hashPBKDF2(
  password: string,
  salt: string,
  options?: Pick<PBKDF2Options, "iterations" | "hash" | "keyLength" | "saltFormat">
): Promise<string> {
  const iterations = options?.iterations ?? 100000;
  const hash = options?.hash ?? "SHA-256";
  const keyLength = options?.keyLength ?? 32;
  const saltFormat = options?.saltFormat ?? "auto";

  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"]
  );

  const saltBytes = saltToBytes(salt, saltFormat);
  const derived = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: saltBytes as unknown as BufferSource,
      iterations,
      hash,
    },
    keyMaterial,
    keyLength * 8
  );

  return Array.from(new Uint8Array(derived))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function verifyPBKDF2(
  password: string,
  salt: string,
  expectedKeyHex: string,
  options?: Pick<PBKDF2Options, "iterations" | "hash" | "saltFormat">
): Promise<boolean> {
  const keyLength = expectedKeyHex.length / 2;
  if (keyLength < 1 || expectedKeyHex.replace(/[0-9a-fA-F]/g, "").length > 0) {
    return false;
  }
  const derived = await hashPBKDF2(password, salt, {
    ...options,
    keyLength,
  });
  return derived.toLowerCase() === expectedKeyHex.toLowerCase();
}

export interface ScryptOptions {
  salt?: string;
  saltFormat?: SaltFormat;
  N?: number;
  r?: number;
  p?: number;
  keyLength?: number;
}

/** Scrypt key derivation. Returns derived key as hex. RFC 7914. Memory-hard. */
export async function hashScrypt(
  password: string,
  salt: string,
  options?: ScryptOptions
): Promise<string> {
  const scrypt = await import("scrypt-js");
  const N = options?.N ?? 16384;
  const r = options?.r ?? 8;
  const p = options?.p ?? 1;
  const dkLen = options?.keyLength ?? 32;
  const saltFormat = options?.saltFormat ?? "auto";

  const pwdBuf = new TextEncoder().encode(password);
  const saltBuf = saltToBytes(salt, saltFormat);

  const derived = await scrypt.scrypt(
    pwdBuf,
    saltBuf,
    N,
    r,
    p,
    dkLen
  );

  return Array.from(derived)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function verifyScrypt(
  password: string,
  salt: string,
  expectedKeyHex: string,
  options?: Pick<ScryptOptions, "N" | "r" | "p" | "saltFormat">
): Promise<boolean> {
  const keyLength = expectedKeyHex.length / 2;
  if (keyLength < 1 || expectedKeyHex.replace(/[0-9a-fA-F]/g, "").length > 0) {
    return false;
  }
  const derived = await hashScrypt(password, salt, {
    ...options,
    keyLength,
  });
  return derived.toLowerCase() === expectedKeyHex.toLowerCase();
}

/** Hash text input - for file hashing, pass the raw string from FileReader.readAsText or binary */
export async function computeHash(
  algorithm: string,
  text: string,
  options?: {
    sha3Variant?: 224 | 256 | 384 | 512;
    xxHashVariant?: 32 | 64;
    fnv1aVariant?: 32 | 64 | 128 | 256 | 512 | 1024;
    blake2Variant?: "blake2b-256" | "blake2b-512" | "blake2s-256";
    bcryptRounds?: number;
    argon2Options?: Argon2Options;
    pbkdf2Options?: PBKDF2Options;
    scryptOptions?: ScryptOptions;
  }
): Promise<string> {
  switch (algorithm) {
    case "md5":
      return hashMD5(text);
    case "sha1":
      return hashWithWebCrypto(text, "SHA-1");
    case "sha224":
      return hashSHA224(text);
    case "sha256":
      return hashWithWebCrypto(text, "SHA-256");
    case "sha384":
      return hashWithWebCrypto(text, "SHA-384");
    case "sha512":
      return hashWithWebCrypto(text, "SHA-512");
    case "sha3":
      return hashSHA3(text, options?.sha3Variant ?? 256);
    case "keccak256":
      return hashKeccak256(text);
    case "whirlpool":
      return hashWhirlpool(text);
    case "fnv1a":
      return hashFNV1a(text, options?.fnv1aVariant ?? 32);
    case "crc32":
      return hashCRC32(text);
    case "adler32":
      return hashAdler32(text);
    case "xxhash":
      return hashXxHash(text, options?.xxHashVariant ?? 64);
    case "blake2":
      return hashBlake2(text, options?.blake2Variant ?? "blake2b-512");
    case "ripemd160":
      return hashRIPEMD160(text);
    case "bcrypt":
      return hashBcrypt(text, options?.bcryptRounds ?? 10);
    case "argon2": {
      const opts = options?.argon2Options;
      const salt = opts?.salt ?? randomSalt();
      return hashArgon2(text, salt, opts);
    }
    case "pbkdf2": {
      const opts = options?.pbkdf2Options;
      const salt = opts?.salt ?? randomSalt();
      return hashPBKDF2(text, salt, opts);
    }
    case "scrypt": {
      const opts = options?.scryptOptions;
      const salt = opts?.salt ?? randomSalt();
      return hashScrypt(text, salt, opts);
    }
    default:
      throw new Error(`Unknown algorithm: ${algorithm}`);
  }
}
