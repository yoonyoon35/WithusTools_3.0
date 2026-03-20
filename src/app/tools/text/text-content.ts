export const TEXT_INDEX_GUIDE = {
  usage: [
    "Choose a tool from the grid above: String Comparison, Text Converter, or Text Editor.",
    "String Comparison: Enter two texts in the input fields and click Compare to highlight differences side by side.",
    "Text Converter: Enter text and use buttons to convert to uppercase, lowercase, or capitalize sentences. Character and word count display in real time.",
    "Text Editor: Create notes with title and content. Save to local storage, export to Word or PDF, and manage multiple documents.",
  ],
  howItWorks: [
    "All text tools run entirely in your browser. No data is sent to any server—your text stays on your device.",
    "String Comparison uses a diff algorithm to split text by sentences and words, then highlights additions (green) and removals (red) between the two texts.",
    "Text Converter transforms text case in real time. Character count uses UTF-8 encoding for byte size. Capitalize Sentences preserves line breaks and applies rules for proper nouns (days, months, countries, languages).",
    "Text Editor stores documents in localStorage. Export to Word creates a .doc blob; PDF export uses html2pdf to render content and generate a downloadable file.",
  ],
  about: [
    "Free online text tools for comparing strings, converting case, and editing documents. All processing runs locally in your browser—your data never leaves your device.",
    "Designed for developers, writers, and anyone working with text: code diff, document formatting, and note-taking. No signup, no installation required.",
    "Works on desktop and mobile. Uses modern web APIs for clipboard, local storage, and file export.",
  ],
  advantages: [
    "Privacy: All data stays in your browser. No server storage, no tracking.",
    "No signup: Use immediately without creating an account.",
    "Cross-device: Responsive design works on phones, tablets, and desktops.",
    "Export: Text Editor supports Word and PDF export. String Comparison lets you copy either text.",
  ],
  useCases: [
    "Code review: Compare two code versions and spot changes quickly.",
    "Document revision: Track edits between document versions.",
    "Content formatting: Convert titles, headings, and variable names (camelCase, snake_case).",
    "Note-taking: Create and organize notes with local storage.",
    "Data cleaning: Standardize text case for CSV or database imports.",
  ],
};
