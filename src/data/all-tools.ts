/**
 * All tool pages for internal linking.
 * path → { title, category }
 * Category pages (e.g. /tools/calculator) and sub-tools (e.g. /tools/health/bmi-calculator)
 */
import { TOOLS } from "./tools";

export interface ToolEntry {
  path: string;
  title: string;
  category: string;
}

const PATH_TITLES: Record<string, string> = {
  "/tools/calculator/calculator": "Scientific Calculator",
  "/tools/calculator/average-calculator": "Average Calculator",
  "/tools/calculator/standard-deviation-calculator": "Standard Deviation Calculator",
  "/tools/health/bmi-calculator": "BMI Calculator",
  "/tools/health/skeletal-muscle-index-calculator": "Skeletal Muscle Index Calculator",
  "/tools/health/waist-hip-ratio-calculator": "Waist-to-Hip Ratio Calculator",
  "/tools/health/bmr-tdee-calculator": "BMR and TDEE Calculator",
  "/tools/health/body-fat-calculator": "Body Fat Calculator (Tape Estimate)",
  "/tools/calculator/gpa-calculator": "GPA Calculator",
  "/tools/calculator/gpa-calculator/target-gpa": "Target GPA Calculator",
  "/faq/gpa/what-is-weighted-gpa": "What is a Weighted GPA?",
  "/tools/calculator/percentage-calculator": "Percentage Calculator",
  "/tools/calculator/programmer-calculator": "Programmer Calculator",
  "/tools/time/alarm-clock": "Alarm Clock",
  "/tools/time/stopwatch": "Stopwatch",
  "/tools/time/pomodoro": "Pomodoro",
  "/tools/time/world-clock": "World Clock",
  "/tools/time/date-difference": "Date Difference",
  "/tools/time/timer": "Countdown Timer",
  "/tools/time/calendar": "Calendar",
  "/tools/time/interval-timer": "Interval Timer",
  "/tools/image/image-compressor": "Image Compressor",
  "/tools/image/image-editor": "Image Editor",
  "/tools/image/image-format-converter": "Image Format Converter",
  "/tools/image/paint-board": "Paint Board",
  "/tools/pdf/image-to-pdf": "Image to PDF",
  "/tools/pdf/merge-pdf": "Merge PDF",
  "/tools/developer/ascii-code-converter": "ASCII Code Converter",
  "/tools/developer/base64-encoder-decoder": "Base64 Encoder/Decoder",
  "/tools/developer/code-formatter": "Code Formatter",
  "/tools/developer/color-picker": "Color Picker",
  "/tools/developer/css-sprites-generator": "CSS Sprites Generator",
  "/tools/developer/numbersystem-converter": "Number System Converter",
  "/tools/developer/qr-code-generator": "QR Code Generator",
  "/tools/developer/qr-code-reader": "QR Code Reader",
  "/tools/language/hiragana-study": "Hiragana",
  "/tools/language/katakana-study": "Katakana",
  "/tools/language/hangul-study": "Hangul",
  "/tools/language/alphabet-study": "English Alphabet",
  "/tools/language/hiragana-katakana-converter": "Hiragana Katakana Converter",
  "/tools/language/hangul-to-hiragana": "Hangul to Hiragana (Pronunciation)",
  "/tools/language/hangul-to-katakana": "Hangul to Katakana (Pronunciation)",
  "/tools/language/hiragana-to-hangul": "Hiragana to Hangul (Pronunciation)",
  "/tools/language/katakana-to-hangul": "Katakana to Hangul (Pronunciation)",
  "/tools/text/string-comparison": "String Comparison",
  "/tools/text/text-converter": "Text Converter",
  "/tools/text/text-editor": "Text Editor",
  "/tools/random/password-generator": "Password Generator",
  "/tools/random/random-number-generator": "Random Number Generator",
  "/tools/seo/favicon-generator": "Favicon Generator",
  "/tools/seo/metatag-generator": "Meta Tag Generator",
  "/tools/seo/robots-generator": "Robots.txt Generator",
  "/tools/seo/sitemap-generator": "Sitemap Generator",
  "/tools/unit-converter/length": "Length Converter",
  "/tools/unit-converter/weight": "Weight Converter",
  "/tools/unit-converter/temperature": "Temperature Converter",
  "/tools/unit-converter/area": "Area Converter",
  "/tools/unit-converter/volume": "Volume Converter",
  "/tools/unit-converter/speed": "Speed Converter",
  "/tools/unit-converter/digital": "Digital Storage Converter",
  "/tools/unit-converter/pressure": "Pressure Converter",
  "/tools/unit-converter/energy": "Energy Converter",
  "/tools/unit-converter/power": "Power Converter",
  "/tools/unit-converter/angle": "Angle Converter",
  "/tools/unit-converter/time": "Time Converter",
  // Hash Calculator sub-pages
  "/tools/hash-calculator/md5": "MD5 Hash",
  "/tools/hash-calculator/sha1": "SHA-1 Hash",
  "/tools/hash-calculator/sha224": "SHA-224 Hash",
  "/tools/hash-calculator/sha256": "SHA-256 Hash",
  "/tools/hash-calculator/sha384": "SHA-384 Hash",
  "/tools/hash-calculator/sha512": "SHA-512 Hash",
  "/tools/hash-calculator/sha3": "SHA-3 Hash",
  "/tools/hash-calculator/keccak256": "Keccak-256 Hash",
  "/tools/hash-calculator/crc32": "CRC32",
  "/tools/hash-calculator/adler32": "Adler-32",
  "/tools/hash-calculator/xxhash": "xxHash",
  "/tools/hash-calculator/blake2": "BLAKE2",
  "/tools/hash-calculator/ripemd160": "RIPEMD-160",
  "/tools/hash-calculator/bcrypt": "Bcrypt",
  "/tools/hash-calculator/argon2": "Argon2",
  "/tools/hash-calculator/pbkdf2": "PBKDF2",
  "/tools/hash-calculator/scrypt": "Scrypt",
  "/tools/hash-calculator/whirlpool": "Whirlpool",
  "/tools/hash-calculator/fnv1a": "FNV-1a",
  // SSH sub-pages
  "/tools/ssh/ed25519": "Ed25519 SSH Key",
  "/tools/ssh/rsa": "RSA SSH Key",
  "/tools/ssh/ecdsa": "ECDSA SSH Key",
};

/** Parent folder -> category (for sub-pages like hash-calculator/md5, ssh/ed25519) */
const PARENT_TO_CATEGORY: Record<string, string> = {
  "hash-calculator": "hash",
  ssh: "security",
  "pdf-converter": "pdf",
};

/** Cross-category related tools: path -> paths of related tools */
export const RELATED_TOOLS: Record<string, string[]> = {
  "/tools/ssh": [
    "/tools/hash-calculator",
    "/tools/developer/base64-encoder-decoder",
    "/tools/random/password-generator",
  ],
  "/tools/hash-calculator": [
    "/tools/ssh",
    "/tools/developer/base64-encoder-decoder",
    "/tools/random/password-generator",
  ],
  "/tools/image/image-format-converter": [
    "/tools/image/image-compressor",
    "/tools/jpg-converter",
    "/tools/pdf/image-to-pdf",
  ],
  "/tools/image/image-compressor": [
    "/tools/image/image-format-converter",
    "/tools/jpg-converter",
  ],
  "/tools/jpg-converter": [
    "/tools/image/image-format-converter",
    "/tools/image/image-compressor",
    "/tools/pdf/image-to-pdf",
  ],
  "/tools/pdf-converter": [
    "/tools/pdf/image-to-pdf",
    "/tools/pdf/merge-pdf",
    "/tools/image/image-format-converter",
    "/tools/jpg-converter",
  ],
  "/tools/pdf/image-to-pdf": [
    "/tools/pdf-converter",
    "/tools/pdf/merge-pdf",
    "/tools/image/image-format-converter",
    "/tools/jpg-converter",
  ],
  "/tools/pdf/merge-pdf": [
    "/tools/pdf/image-to-pdf",
    "/tools/pdf-converter",
    "/tools/image/image-format-converter",
  ],
  "/tools/developer/base64-encoder-decoder": [
    "/tools/developer/ascii-code-converter",
    "/tools/developer/numbersystem-converter",
  ],
  "/tools/text/text-converter": [
    "/tools/text/string-comparison",
    "/tools/text/text-editor",
  ],
};

function getCategoryFromPath(path: string): string {
  const fromTools = TOOLS.find((t) => t.path === path);
  if (fromTools) return fromTools.category;

  const segments = path.split("/").filter(Boolean);
  if (segments.length >= 3) {
    const parent = segments[1];
    return PARENT_TO_CATEGORY[parent] ?? parent;
  }
  if (segments.length === 2) return segments[1];

  return "tools";
}

function getTitleFromPath(path: string): string {
  if (PATH_TITLES[path]) return PATH_TITLES[path];
  const fromTools = TOOLS.find((t) => t.path === path);
  if (fromTools) return fromTools.title;

  const last = path.split("/").filter(Boolean).pop() || "";
  return (
    last
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join(" ") || "Tool"
  );
}

const BUILT_PATHS = new Set<string>();

// Add from TOOLS
TOOLS.forEach((t) => {
  BUILT_PATHS.add(t.path);
});

// Add from PATH_TITLES
Object.keys(PATH_TITLES).forEach((p) => BUILT_PATHS.add(p));

export const ALL_TOOLS: ToolEntry[] = Array.from(BUILT_PATHS)
  .filter((p) => p.startsWith("/tools/"))
  .map((path) => ({
    path,
    title: getTitleFromPath(path),
    category: getCategoryFromPath(path),
  }));

/** Get same-category tools excluding current path */
export function getSameCategoryTools(path: string, limit = 6): ToolEntry[] {
  const entry = ALL_TOOLS.find((t) => t.path === path);
  if (!entry) return [];

  return ALL_TOOLS.filter(
    (t) => t.path !== path && t.category === entry.category
  ).slice(0, limit);
}

/** Get category page path for a category slug (e.g. "calculator" -> "/tools/calculator") */
export function getCategoryPagePath(category: string): string {
  if (category === "unit-converter") return "/tools/unit-converter";
  return `/tools/${category}`;
}

/** Get category for a path */
export function getCategoryForPath(path: string): string | null {
  const entry = ALL_TOOLS.find((t) => t.path === path);
  return entry?.category ?? null;
}

/** Get parent path for sub-pages (e.g. /tools/hash-calculator/md5 -> /tools/hash-calculator) */
export function getParentPath(path: string): string | null {
  const segments = path.split("/").filter(Boolean);
  if (segments.length >= 3) return "/" + segments.slice(0, 2).join("/");
  return null;
}

/** Categories that have a dedicated category page (avoid 404 for security, hash) */
const CATEGORIES_WITH_PAGE = new Set([
  "calculator", "health", "developer", "time", "image", "pdf", "text", "random", "seo", "language", "unit-converter",
]);

/** Get related paths: use parent's if current path is sub-page (e.g. /tools/hash-calculator/md5) */
function getRelatedPathsForPath(path: string): string[] {
  if (RELATED_TOOLS[path]) return RELATED_TOOLS[path];
  const segments = path.split("/").filter(Boolean);
  if (segments.length >= 3) {
    const parent = "/" + segments.slice(0, 2).join("/");
    return RELATED_TOOLS[parent] || [];
  }
  return [];
}

/** Get related tools (cross-category + same-category) */
export function getRelatedTools(path: string, limit = 6): ToolEntry[] {
  const relatedPaths = getRelatedPathsForPath(path);
  const sameCategory = getSameCategoryTools(path, limit);

  const related = relatedPaths
    .map((p) => ALL_TOOLS.find((t) => t.path === p))
    .filter((t): t is ToolEntry => !!t);

  const combined = [
    ...related.filter((r) => r.path !== path),
    ...sameCategory.filter((s) => !relatedPaths.includes(s.path)),
  ];

  const seen = new Set<string>();
  return combined.filter((t) => {
    if (seen.has(t.path) || t.path === path) return false;
    seen.add(t.path);
    return true;
  }).slice(0, limit);
}
