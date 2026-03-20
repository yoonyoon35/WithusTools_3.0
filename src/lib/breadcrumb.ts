/**
 * Breadcrumb path segment to display name mapping for JSON-LD
 */
import { TOOLS } from "@/data/tools";

const SITE_URL = "https://withustools.com";

/** Known slug -> display name for path segments */
export const BREADCRUMB_NAMES: Record<string, string> = {
  search: "Tool Search",
  tools: "Tools",
  // Categories (from CATEGORIES)
  calculator: "Calculator",
  developer: "Developer",
  security: "Security",
  hash: "Hash",
  time: "Time",
  text: "Text",
  image: "Image",
  random: "Random",
  seo: "SEO",
  language: "Language",
  "unit-converter": "Unit Converter",
  // Calculator
  "average-calculator": "Average Calculator",
  "bmi-calculator": "BMI Calculator",
  "gpa-calculator": "GPA Calculator",
  "percentage-calculator": "Percentage Calculator",
  // Time
  "alarm-clock": "Alarm Clock",
  stopwatch: "Stopwatch",
  pomodoro: "Pomodoro",
  "world-clock": "World Clock",
  "date-difference": "Date Difference",
  timer: "Countdown Timer",
  calendar: "Calendar",
  "interval-timer": "Interval Timer",
  // Image
  "image-compressor": "Image Compressor",
  "image-format-converter": "Image Format Converter",
  "paint-board": "Paint Board",
  // Developer
  "ascii-code-converter": "ASCII Code Converter",
  "base64-encoder-decoder": "Base64 Encoder/Decoder",
  "code-formatter": "Code Formatter",
  "color-picker": "Color Picker",
  "css-sprites-generator": "CSS Sprites Generator",
  "numbersystem-converter": "Number System Converter",
  "qr-code-generator": "QR Code Generator",
  "qr-code-reader": "QR Code Reader",
  // Language
  "hiragana-study": "Hiragana",
  "katakana-study": "Katakana",
  "hangul-study": "Hangul",
  "alphabet-study": "English Alphabet",
  "hiragana-katakana-converter": "Hiragana Katakana Converter",
  // Text
  "string-comparison": "String Comparison",
  "text-converter": "Text Converter",
  "text-editor": "Text Editor",
  // Random
  "password-generator": "Password Generator",
  "random-number-generator": "Random Number Generator",
  // SEO
  "favicon-generator": "Favicon Generator",
  "metatag-generator": "Meta Tag Generator",
  "robots-generator": "Robots.txt Generator",
  "sitemap-generator": "Sitemap Generator",
  // Unit Converter
  length: "Length Converter",
  weight: "Weight Converter",
  temperature: "Temperature Converter",
  area: "Area Converter",
  volume: "Volume Converter",
  speed: "Speed Converter",
  digital: "Digital Storage Converter",
  pressure: "Pressure Converter",
  energy: "Energy Converter",
  angle: "Angle Converter",
  // Standalone tools (direct under /tools/)
  "hash-calculator": "Hash Calculator",
  "jpg-converter": "JPG Converter",
  "pdf-converter": "PDF Converter",
  ssh: "SSH Key Generator",
};

/** Full path -> last segment display name (for disambiguation) */
const PATH_LAST_OVERRIDES: Record<string, string> = {
  "/tools/calculator/calculator": "Scientific Calculator",
};

function slugToTitle(slug: string): string {
  return BREADCRUMB_NAMES[slug] ?? slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ");
}

/** Build breadcrumb items from pathname */
export function buildBreadcrumb(pathname: string): { name: string; item: string }[] {
  const items: { name: string; item: string }[] = [{ name: "Home", item: SITE_URL }];
  if (!pathname || pathname === "/") return items;

  const segments = pathname.split("/").filter(Boolean);
  let currentPath = "";

  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    currentPath += `/${segment}`;

    // Use TOOLS for exact path match
    const tool = TOOLS.find((t) => t.path === currentPath);
    const name = tool ? tool.title : slugToTitle(segment);
    const item = `${SITE_URL}${currentPath}`;
    items.push({ name, item });
  }

  return items;
}
