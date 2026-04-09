/**
 * URL segments for `generateStaticParams` and `sitemap.xml`.
 * Single source of truth — add new formats/algorithms here first, then pages stay in sync.
 */

export const JPG_CONVERTER_FORMATS = [
  "heic",
  "heif",
  "avif",
  "bmp",
  "png",
  "svg",
  "tiff",
  "webp",
  "psd",
  "jfif",
  "ico",
  "ai",
  "dng",
  "cr2",
  "cr3",
  "tga",
  "pdf",
] as const;

export type JpgConverterFormat = (typeof JPG_CONVERTER_FORMATS)[number];

export const PDF_CONVERTER_FORMATS = [
  "jpg",
  "heic",
  "heif",
  "png",
  "webp",
  "avif",
  "bmp",
  "tiff",
] as const;

export type PdfConverterFormat = (typeof PDF_CONVERTER_FORMATS)[number];

export const HASH_CALCULATOR_ALGORITHMS = [
  "md5",
  "sha1",
  "sha224",
  "sha256",
  "sha384",
  "sha512",
  "sha3",
  "keccak256",
  "crc32",
  "adler32",
  "xxhash",
  "blake2",
  "ripemd160",
  "bcrypt",
  "argon2",
  "pbkdf2",
  "scrypt",
  "whirlpool",
  "fnv1a",
] as const;

export type HashCalculatorAlgorithm = (typeof HASH_CALCULATOR_ALGORITHMS)[number];

export const SSH_KEY_ALGORITHMS = ["ed25519", "rsa", "ecdsa"] as const;

export type SshKeyAlgorithm = (typeof SSH_KEY_ALGORITHMS)[number];
