# WithusTools 3.0

withustools.com renewal project - Next.js App Router + Tailwind CSS

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **TypeScript**
- **Inter** font

## Design Theme

- **Modern Toolbox** concept
- **Bento Grid** layout
- **Dark mode**: `slate-950` background, `slate-900` cards, `slate-800` borders

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/              # App Router pages
│   ├── layout.tsx    # Root layout (header, footer)
│   ├── page.tsx      # Home (Bento Grid)
│   ├── search/       # Search page
│   └── tools/        # Tools list and detail
├── components/       # Shared components
│   ├── Header.tsx    # Logo + Quick Search
│   └── Footer.tsx
└── lib/
    └── metadata.ts   # SEO generateMetadata util
```

## SEO

- Dynamic metadata per page via `generateMetadata`
- `createMetadata()` util for Open Graph, Twitter Card, etc.
