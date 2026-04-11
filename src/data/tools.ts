export type ToolCategory =
  | "developer"
  | "security"
  | "text"
  | "hash"
  | "image"
  | "pdf"
  | "random"
  | "seo"
  | "time"
  | "calculator"
  | "language"
  | "unit-converter";

export interface Tool {
  id: string;
  title: string;
  description: string;
  category: ToolCategory;
  icon: string;
  path: string;
}

export const TOOLS: Tool[] = [
  {
    id: "ssh-key-gen",
    title: "SSH Key Generator",
    description: "Generate RSA, Ed25519, ECDSA SSH key pairs for secure authentication",
    category: "security",
    icon: "key",
    path: "/tools/ssh",
  },
  {
    id: "hash-calculator",
    title: "Hash Calculator",
    description: "Calculate MD5, SHA-1, SHA-256, SHA-512, SHA3, RIPEMD, Bcrypt hashes for text and files",
    category: "hash",
    icon: "hash",
    path: "/tools/hash-calculator",
  },
  {
    id: "calculator-tools",
    title: "Calculator",
    description: "Average calculator, standard deviation calculator, BMI calculator, GPA calculator, percentage calculator, programmer calculator, and simple scientific calculator for everyday math",
    category: "calculator",
    icon: "calculator",
    path: "/tools/calculator",
  },
  {
    id: "time-tools",
    title: "Time Tools",
    description: "Alarm clock, stopwatch, countdown timer, and calendar for time management",
    category: "time",
    icon: "clock",
    path: "/tools/time",
  },
  {
    id: "image-tools",
    title: "Image Tools",
    description: "Image Compressor, Image Editor, and Paint Board for editing, compressing, and creating images",
    category: "image",
    icon: "image",
    path: "/tools/image",
  },
  {
    id: "jpg-converter",
    title: "JPG Converter",
    description: "Convert HEIC, HEIF, AVIF, BMP, PNG, SVG, TIFF, WEBP, PSD, JFIF, ICO, AI, DNG, CR2, CR3, TGA, and PDF to JPG format",
    category: "image",
    icon: "image",
    path: "/tools/jpg-converter",
  },
  {
    id: "pdf-tools",
    title: "PDF Tools",
    description:
      "Image to PDF: combine JPG, PNG, HEIC, HEIF, WEBP, AVIF, BMP, TIFF, and other images into one PDF. Format-specific converters also available. Zero margins in fit mode, local processing.",
    category: "pdf",
    icon: "pdf",
    path: "/tools/pdf",
  },
  {
    id: "pdf-converter",
    title: "PDF Converter",
    description:
      "Convert JPG, HEIC, HEIF, PNG, WEBP, AVIF, BMP, TIFF, and images to PDF. Zero white margins, preserved aspect ratio. Combine multiple images into one PDF.",
    category: "pdf",
    icon: "pdf",
    path: "/tools/pdf-converter",
  },
  {
    id: "text-tools",
    title: "Text Tools",
    description: "String comparison, text case converter, and text editor for comparing texts, converting case, and writing notes",
    category: "text",
    icon: "text",
    path: "/tools/text",
  },
  {
    id: "random-tools",
    title: "Random Tools",
    description: "Password generator and random number generator for creating secure passwords and random numbers",
    category: "random",
    icon: "random",
    path: "/tools/random",
  },
  {
    id: "seo-tools",
    title: "SEO Tools",
    description: "Favicon generator, meta tag generator, robots.txt generator, and sitemap generator for website optimization",
    category: "seo",
    icon: "seo",
    path: "/tools/seo",
  },
  {
    id: "language-tools",
    title: "Language Tools",
    description:
      "English Alphabet, Hiragana, Katakana, Hangul charts, Hiragana-Katakana converter, Hangul↔kana pronunciation tools, and Hiragana/Katakana-to-Hangul (inverse) for language learning",
    category: "language",
    icon: "language",
    path: "/tools/language",
  },
  {
    id: "developer-tools",
    title: "Developer Tools",
    description: "ASCII converter, Base64 encoder/decoder, code formatter, color picker, CSS sprites, number system converter, QR code generator and reader",
    category: "developer",
    icon: "code",
    path: "/tools/developer",
  },
  {
    id: "unit-converter-tools",
    title: "Unit Converter",
    description: "Convert length, weight, temperature, area, volume, speed, time, digital storage, pressure, energy, and angle units. Metric and imperial support.",
    category: "unit-converter",
    icon: "ruler",
    path: "/tools/unit-converter",
  },
];

export const CATEGORIES: { value: ToolCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "calculator", label: "Calculator" },
  { value: "developer", label: "Developer" },
  { value: "security", label: "Security" },
  { value: "hash", label: "Hash" },
  { value: "time", label: "Time" },
  { value: "text", label: "Text" },
  { value: "image", label: "Image" },
  { value: "pdf", label: "PDF" },
  { value: "random", label: "Random" },
  { value: "seo", label: "SEO" },
  { value: "language", label: "Language" },
  { value: "unit-converter", label: "Unit Converter" },
];
