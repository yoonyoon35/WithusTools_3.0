/**
 * 허브 카드 전용 간략 설명 EN/KO 생성
 */
import fs from "node:fs";
import path from "node:path";
const root = process.cwd();

function pathToKey(metaPath) {
  if (!metaPath || metaPath === "/") return "home";
  return metaPath.replace(/^\//, "").replace(/\//g, ".");
}

function cleanCardDescription(text) {
  let t = text.trim();
  const patterns = [
    /^Free\s+/i,
    /\s*All processing runs in your browser\.?$/i,
    /\s*All processing in your browser\.?$/i,
    /\s*[—–-]processing runs in your browser\.?$/i,
    /\s*[—–-]no upload\.?$/i,
    /\s*No upload[—–-][^.]*\.?$/i,
    /\s*no server upload\.?$/i,
    /\s*No upload\.?$/i,
    /\s*No signup[^.]*\.?$/i,
    /\s*—keys run locally, never sent to any server\.?$/i,
    /\s*in your browser[—–-][^.]*\.?$/i,
    /\s*in your browser\.?$/i,
    /\s*Browser-only processing\.?$/i,
    /\s*client-side,?\s*no server\.?$/i,
  ];
  for (const re of patterns) t = t.replace(re, "");
  t = t.replace(/,\s*no upload\.?$/i, ".");
  t = t.replace(/,\s*$/g, ".");
  return t.replace(/\s+/g, " ").trim();
}

function setByPath(obj, metaPath, description) {
  const key = pathToKey(metaPath);
  const cleaned = cleanCardDescription(description);
  if (cleaned) obj[key] = cleaned;
}

function extractToolsArrays(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const entries = [];
  const blockRe =
    /\{\s*slug:\s*"[^"]+",\s*name:\s*"[^"]+",\s*description:\s*(?:"((?:\\.|[^"\\])*)"|`([^`]*)`|\n\s*"((?:\\.|[^"\\])*)"),\s*path:\s*"([^"]+)"/gs;
  let m;
  while ((m = blockRe.exec(content))) {
    const desc = m[1] || m[2] || m[3];
    const p = m[4];
    if (desc && p) entries.push({ path: p, description: desc });
  }
  return entries;
}

function extractFormatDescriptions(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const entries = [];
  const re =
    /(\w+):\s*\{\s*title:\s*"[^"]*",\s*description:\s*\n\s*"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = re.exec(content))) {
    entries.push({ slug: m[1], description: m[2] });
  }
  return entries;
}

const byPath = {};

const hubPages = [
  "src/app/[locale]/tools/calculator/page.tsx",
  "src/app/[locale]/tools/health/page.tsx",
  "src/app/[locale]/tools/developer/page.tsx",
  "src/app/[locale]/tools/image/page.tsx",
  "src/app/[locale]/tools/language/page.tsx",
  "src/app/[locale]/tools/pdf/page.tsx",
  "src/app/[locale]/tools/random/page.tsx",
  "src/app/[locale]/tools/seo/page.tsx",
  "src/app/[locale]/tools/text/page.tsx",
  "src/app/[locale]/tools/time/page.tsx",
  "src/app/[locale]/tools/unit-converter/page.tsx",
];

for (const rel of hubPages) {
  for (const { path: p, description } of extractToolsArrays(path.join(root, rel))) {
    setByPath(byPath, p, description);
  }
}

const sshCards = {
  "/tools/ssh/ed25519":
    "Recommended default. Smallest keys, fastest operations, strong modern security.",
  "/tools/ssh/rsa":
    "Widest server compatibility. Choose key size 1024–8192 bits (default 4096).",
  "/tools/ssh/ecdsa":
    "Compact curve-based keys. Select P-256, P-384, or P-521.",
};
for (const [p, d] of Object.entries(sshCards)) setByPath(byPath, p, d);

const hashCards = {
  "/tools/hash-calculator/md5":
    "128-bit hash. Legacy file integrity checks—not recommended for security.",
  "/tools/hash-calculator/sha1":
    "160-bit hash. Common for checksums; deprecated for new security use.",
  "/tools/hash-calculator/sha224":
    "224-bit truncated SHA-256. Used in TLS and DNSSEC.",
  "/tools/hash-calculator/sha256":
    "256-bit industry standard for data integrity and signatures.",
  "/tools/hash-calculator/sha384":
    "384-bit truncated SHA-512. Strong security with smaller output.",
  "/tools/hash-calculator/sha512":
    "512-bit maximum-strength hash for TLS and digital signatures.",
  "/tools/hash-calculator/sha3":
    "SHA-3 (Keccak) family: 224, 256, 384, and 512-bit outputs.",
  "/tools/hash-calculator/keccak256":
    "Original Keccak-256 as used in Ethereum and Web3 tooling.",
  "/tools/hash-calculator/crc32":
    "32-bit non-cryptographic checksum for ZIP, PNG, and Git.",
  "/tools/hash-calculator/adler32":
    "32-bit zlib/PNG checksum—faster than CRC32 for quick checks.",
  "/tools/hash-calculator/xxhash":
    "Extremely fast xxHash32/64 for deduplication and large-file checksums.",
  "/tools/hash-calculator/blake2":
    "BLAKE2b and BLAKE2s—fast cryptographic hashing (RFC 7693).",
  "/tools/hash-calculator/ripemd160":
    "160-bit European hash standard; used in Bitcoin address derivation.",
  "/tools/hash-calculator/bcrypt":
    "Password hashing with configurable salt rounds and verify mode.",
  "/tools/hash-calculator/argon2":
    "Memory-hard Argon2id/2i/2d password hashing (PHC winner).",
  "/tools/hash-calculator/pbkdf2":
    "Derive keys from passwords with salt, iterations, and SHA variants.",
  "/tools/hash-calculator/scrypt":
    "Memory-hard scrypt KDF with tunable N, r, and p parameters.",
  "/tools/hash-calculator/whirlpool":
    "512-bit ISO/IEC 10118-3 hash for signatures and archival use.",
  "/tools/hash-calculator/fnv1a":
    "Fast FNV-1a non-crypto hash (32–1024 bit) for URLs and hostnames.",
};
for (const [p, d] of Object.entries(hashCards)) setByPath(byPath, p, d);

for (const { slug, description } of extractFormatDescriptions(
  path.join(root, "src/app/[locale]/tools/jpg-converter/[format]/page.tsx")
)) {
  setByPath(byPath, `/tools/jpg-converter/${slug}`, description);
}

const gifCards = {
  "/tools/gif-converter/heic":
    "Combine multiple HEIC photos into one animated GIF. Set frame order, delay, canvas size, and quality.",
  "/tools/gif-converter/heif":
    "Merge HEIF/HEIC images into an animated GIF. Control delay, dimensions, and palette quality.",
  "/tools/gif-converter/avif":
    "Turn multiple AVIF images into one animated GIF with client-side decode.",
  "/tools/gif-converter/bmp":
    "Build an animated GIF from BMP frames. Order frames, set delay and output size.",
  "/tools/gif-converter/png":
    "Combine PNG images into one animated GIF with letterbox background for transparency.",
  "/tools/gif-converter/svg":
    "Rasterize multiple SVG files to frames and export one animated GIF. Set canvas size and delay.",
  "/tools/gif-converter/tiff":
    "Merge TIFF scans or photos into an animated GIF with UTIF decode.",
  "/tools/gif-converter/webp":
    "Combine WEBP images into one animated GIF with frame order and delay controls.",
  "/tools/gif-converter/psd":
    "Use flattened PSD composites as frames for one animated GIF export.",
  "/tools/gif-converter/jfif":
    "Merge JFIF/JPEG interchange files into an animated GIF. Set delay, canvas size, and quality.",
  "/tools/gif-converter/ico":
    "Combine ICO icon files into an animated GIF with letterboxing for transparency.",
  "/tools/gif-converter/ai":
    "Render Illustrator .ai (PDF-compatible) pages as frames. First page per file.",
  "/tools/gif-converter/dng":
    "Build an animated GIF from DNG RAW previews via UTIF or embedded JPEG.",
  "/tools/gif-converter/cr2":
    "Combine Canon CR2 RAW previews into an animated GIF.",
  "/tools/gif-converter/cr3":
    "Turn Canon CR3 embedded previews into GIF frames and export one animated GIF.",
  "/tools/gif-converter/tga":
    "Merge Targa TGA images into an animated GIF with local TGA decode.",
  "/tools/gif-converter/jpg":
    "Combine JPG, JPEG, or JFIF files into one animated GIF. Frame order, delay, and canvas size.",
  "/tools/gif-converter/pdf":
    "Turn PDF pages into one animated GIF. Each page is a frame (up to 60 pages).",
};
for (const [p, d] of Object.entries(gifCards)) setByPath(byPath, p, d);

for (const { slug, description } of extractFormatDescriptions(
  path.join(root, "src/app/[locale]/tools/pdf-converter/[format]/page.tsx")
)) {
  setByPath(byPath, `/tools/pdf-converter/${slug}`, description);
}

// Manual fixes / missing entries
const manual = {
  "/tools/image/images-to-animated-gif":
    "Combine multiple images into one animated GIF. Reorder frames, set delay and canvas size.",
  "/tools/image/image-editor":
    "Rotate, resize, and adjust brightness, contrast, and saturation.",
  "/tools/pdf/merge-pdf":
    "Combine multiple PDF files into one document on your device.",
  "/tools/pdf-converter/jpg":
    "Convert JPG images to PDF with preserved aspect ratio and zero white margins.",
  "/tools/jpg-converter/heif":
    "HEIF to JPG converter. Convert HEIF/HEIC images to JPG for Windows, web, and print. Batch convert supported.",
  "/tools/jpg-converter/tiff":
    "TIFF to JPG converter. Convert high-quality TIFF scans and photos to JPG. Batch convert supported.",
  "/tools/jpg-converter/avif":
    "AVIF to JPG converter. Convert next-gen AVIF images to JPG for legacy browser compatibility.",
  "/tools/jpg-converter/ai":
    "AI to JPG converter. Convert Adobe Illustrator .ai files to JPG. PDF-compatible .ai required.",
  "/tools/pdf-converter/heic":
    "Convert iPhone HEIC/HEIF photos to PDF with zero margins and preserved aspect ratio. Combine multiple files.",
  "/tools/pdf-converter/heif":
    "Convert HEIF/HEIC images to PDF with zero margins and preserved aspect ratio. Combine multiple files.",
  "/tools/pdf-converter/avif":
    "Convert AVIF images to PDF with zero margins and preserved aspect ratio. Combine multiple files.",
  "/tools/pdf-converter/tiff":
    "Convert TIFF/TIF scans and photos to PDF with zero margins. Combine multiple TIFF files.",
};
for (const [p, d] of Object.entries(manual)) setByPath(byPath, p, d);

// Remove mistaken pdf-converter hub key if present
delete byPath["tools.pdf-converter"];

const enDir = path.join(root, "messages/en");
fs.mkdirSync(enDir, { recursive: true });

fs.writeFileSync(
  path.join(enDir, "hubCards.json"),
  JSON.stringify({ byPath }, null, 2) + "\n"
);

console.log(`Wrote ${Object.keys(byPath).length} EN hub card descriptions`);
