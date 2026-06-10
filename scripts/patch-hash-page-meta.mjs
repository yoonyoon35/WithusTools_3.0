/**
 * pageMeta.json에 Hash Calculator 알고리즘별 메타데이터 추가
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const ALGORITHM_META_EN = {
  md5: {
    title: "MD5 Hash Calculator",
    description:
      "Generate MD5 hashes from text or files. 128-bit hash for checksums. All processing runs in your browser.",
    keywords: ["MD5 hash", "hash calculator", "MD5 checksum", "withustools"],
  },
  sha1: {
    title: "SHA-1 Hash Calculator",
    description:
      "Generate SHA-1 hashes from text or files. 160-bit hash. All processing runs in your browser.",
    keywords: ["SHA-1 hash", "hash calculator", "SHA1 checksum", "withustools"],
  },
  sha224: {
    title: "SHA-224 Hash Calculator",
    description:
      "Generate SHA-224 hashes from text or files. 224-bit truncated SHA-256. Used in TLS, DNSSEC. All processing runs in your browser.",
    keywords: ["SHA-224 hash", "hash calculator", "withustools"],
  },
  sha256: {
    title: "SHA-256 Hash Calculator",
    description:
      "Generate SHA-256 hashes from text or files. Industry standard 256-bit hash. All processing runs in your browser.",
    keywords: ["SHA-256 hash", "hash calculator", "SHA256 checksum", "withustools"],
  },
  sha384: {
    title: "SHA-384 Hash Calculator",
    description:
      "Generate SHA-384 hashes from text or files. 384-bit truncated SHA-512. All processing runs in your browser.",
    keywords: ["SHA-384 hash", "hash calculator", "withustools"],
  },
  sha512: {
    title: "SHA-512 Hash Calculator",
    description:
      "Generate SHA-512 hashes from text or files. Maximum security 512-bit hash. All processing runs in your browser.",
    keywords: ["SHA-512 hash", "hash calculator", "withustools"],
  },
  sha3: {
    title: "SHA-3 Hash Calculator",
    description:
      "Generate SHA-3 (Keccak) hashes. SHA3-224, 256, 384, 512. NIST standard. All processing runs in your browser.",
    keywords: ["SHA-3 hash", "hash calculator", "Keccak", "withustools"],
  },
  keccak256: {
    title: "Keccak-256 Hash Calculator",
    description:
      "Generate Keccak-256 hashes (original Keccak, not SHA3). Used in Ethereum, Web3, smart contracts. All processing runs in your browser.",
    keywords: ["Keccak-256", "hash calculator", "Ethereum hash", "withustools"],
  },
  crc32: {
    title: "CRC32 Checksum Calculator",
    description:
      "Generate CRC32 checksums from text or files. Non-cryptographic 32-bit checksum. Used in ZIP, PNG, Git. All processing runs in your browser.",
    keywords: ["CRC32", "checksum calculator", "withustools"],
  },
  adler32: {
    title: "Adler-32 Checksum Calculator",
    description:
      "Generate Adler-32 checksums from text or files. Non-cryptographic 32-bit checksum. Used in zlib, PNG. Faster than CRC32. All processing runs in your browser.",
    keywords: ["Adler-32", "checksum calculator", "withustools"],
  },
  xxhash: {
    title: "xxHash Calculator",
    description:
      "Generate xxHash hashes (xxHash32, xxHash64). Extremely fast non-cryptographic hash. Used for deduplication, checksums. All processing runs in your browser.",
    keywords: ["xxHash", "hash calculator", "withustools"],
  },
  blake2: {
    title: "BLAKE2 Hash Calculator",
    description:
      "Generate BLAKE2 hashes (BLAKE2b-256/512, BLAKE2s-256). Fast cryptographic hash. RFC 7693. All processing runs in your browser.",
    keywords: ["BLAKE2", "hash calculator", "withustools"],
  },
  ripemd160: {
    title: "RIPEMD-160 Hash Calculator",
    description:
      "Generate RIPEMD-160 hashes from text or files. European standard, used in Bitcoin. All processing runs in your browser.",
    keywords: ["RIPEMD-160", "hash calculator", "withustools"],
  },
  bcrypt: {
    title: "Bcrypt Password Hash Generator",
    description:
      "Generate Bcrypt password hashes with configurable salt rounds. Verify passwords against hashes. All processing runs in your browser.",
    keywords: ["Bcrypt", "password hash", "hash calculator", "withustools"],
  },
  argon2: {
    title: "Argon2 Password Hash Generator",
    description:
      "Generate Argon2 password hashes (Argon2id, Argon2i, Argon2d). Winner of Password Hashing Competition. Verify passwords against hashes. All processing runs in your browser.",
    keywords: ["Argon2", "password hash", "hash calculator", "withustools"],
  },
  pbkdf2: {
    title: "PBKDF2 Key Derivation",
    description:
      "Derive keys from passwords using PBKDF2. RFC 2898. Configurable salt, iterations, hash (SHA-1/256/384/512). Used in TLS, Django, many frameworks. All processing runs in your browser.",
    keywords: ["PBKDF2", "key derivation", "hash calculator", "withustools"],
  },
  scrypt: {
    title: "Scrypt Key Derivation",
    description:
      "Memory-hard key derivation from passwords. RFC 7914. Configurable N, r, p. Used in cryptocurrencies, Unix passwords. All processing runs in your browser.",
    keywords: ["Scrypt", "key derivation", "hash calculator", "withustools"],
  },
  whirlpool: {
    title: "Whirlpool Hash Calculator",
    description:
      "Generate Whirlpool 512-bit hashes from text or files. ISO/IEC 10118-3 standard. Used in digital signatures, some cryptocurrencies. All processing runs in your browser.",
    keywords: ["Whirlpool", "hash calculator", "withustools"],
  },
  fnv1a: {
    title: "FNV-1a Hash Calculator",
    description:
      "Generate FNV-1a non-cryptographic hashes from text or files. Fowler-Noll-Vo algorithm. Fast with good distribution. 32–1024 bit. Used for URLs, hostnames, checksums. All processing runs in your browser.",
    keywords: ["FNV-1a", "hash calculator", "withustools"],
  },
};

const KO_TITLES = {
  md5: "MD5 해시 계산기",
  sha1: "SHA-1 해시 계산기",
  sha224: "SHA-224 해시 계산기",
  sha256: "SHA-256 해시 계산기",
  sha384: "SHA-384 해시 계산기",
  sha512: "SHA-512 해시 계산기",
  sha3: "SHA-3 해시 계산기",
  keccak256: "Keccak-256 해시 계산기",
  crc32: "CRC32 체크섬 계산기",
  adler32: "Adler-32 체크섬 계산기",
  xxhash: "xxHash 계산기",
  blake2: "BLAKE2 해시 계산기",
  ripemd160: "RIPEMD-160 해시 계산기",
  bcrypt: "Bcrypt 비밀번호 해시 생성기",
  argon2: "Argon2 비밀번호 해시 생성기",
  pbkdf2: "PBKDF2 키 유도",
  scrypt: "Scrypt 키 유도",
  whirlpool: "Whirlpool 해시 계산기",
  fnv1a: "FNV-1a 해시 계산기",
};

const KO_DESCRIPTIONS = {
  md5: "브라우저에서 텍스트·파일 MD5 해시를 생성합니다. 128비트 체크섬. 로컬 처리.",
  sha1: "브라우저에서 SHA-1 해시를 생성합니다. 160비트. 로컬 처리.",
  sha224: "브라우저에서 SHA-224 해시를 생성합니다. TLS·DNSSEC용 224비트. 로컬 처리.",
  sha256: "브라우저에서 SHA-256 해시를 생성합니다. 업계 표준 256비트. 로컬 처리.",
  sha384: "브라우저에서 SHA-384 해시를 생성합니다. 384비트. 로컬 처리.",
  sha512: "브라우저에서 SHA-512 해시를 생성합니다. 512비트. 로컬 처리.",
  sha3: "브라우저에서 SHA-3(Keccak) 해시를 생성합니다. SHA3-224/256/384/512. 로컬 처리.",
  keccak256: "브라우저에서 Keccak-256 해시를 생성합니다. Ethereum·Web3용. 로컬 처리.",
  crc32: "브라우저에서 CRC32 체크섬을 생성합니다. ZIP·PNG·Git용 32비트. 로컬 처리.",
  adler32: "브라우저에서 Adler-32 체크섬을 생성합니다. zlib·PNG용. 로컬 처리.",
  crc32_dup: null,
  xxhash: "브라우저에서 xxHash32/64를 생성합니다. 빠른 비암호 해시. 로컬 처리.",
  blake2: "브라우저에서 BLAKE2b/s 해시를 생성합니다. RFC 7693. 로컬 처리.",
  ripemd160: "브라우저에서 RIPEMD-160 해시를 생성합니다. Bitcoin 등에서 사용. 로컬 처리.",
  bcrypt: "브라우저에서 Bcrypt 비밀번호 해시를 생성·검증합니다. Salt 라운드 설정 가능.",
  argon2: "브라우저에서 Argon2id/i/d 비밀번호 해시를 생성·검증합니다. PHC 우승 알고리즘.",
  pbkdf2: "브라우저에서 PBKDF2로 비밀번호에서 키를 유도합니다. Salt·반복·해시 설정 가능.",
  scrypt: "브라우저에서 Scrypt 키 유도를 수행합니다. N, r, p 설정 가능.",
  whirlpool: "브라우저에서 Whirlpool 512비트 해시를 생성합니다. ISO/IEC 10118-3.",
  fnv1a: "브라우저에서 FNV-1a 비암호 해시를 생성합니다. 32–1024비트.",
};

delete KO_DESCRIPTIONS.crc32_dup;

for (const locale of ["en", "ko"]) {
  const file = path.join(root, "messages", locale, "pageMeta.json");
  const data = JSON.parse(fs.readFileSync(file, "utf-8"));

  for (const [alg, meta] of Object.entries(ALGORITHM_META_EN)) {
    const key = `tools.hash-calculator.${alg}`;
    if (locale === "en") {
      data.byPath[key] = meta;
    } else {
      data.byPath[key] = {
        title: KO_TITLES[alg],
        description: KO_DESCRIPTIONS[alg],
        keywords: meta.keywords,
      };
    }
  }

  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
  console.log(`Patched ${locale}/pageMeta.json with ${Object.keys(ALGORITHM_META_EN).length} hash algorithm entries`);
}
