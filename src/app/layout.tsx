import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import FloatingShareButton from "@/components/FloatingShareButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://withustools.com"),
  title: {
    default: "WithusTools - Free Online Web Tools",
    template: "%s | WithusTools",
  },
  description:
    "50+ free online web tools. Calculator, developer tools, hash, image, random generator, SEO, text, time tools and more. No signup required.",
  keywords: ["online tools", "web utilities", "free tools", "withustools"],
  openGraph: {
    title: "WithusTools - Free Online Web Tools",
    description: "50+ free online web tools",
    url: "https://withustools.com",
    siteName: "WithusTools",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon-package/favicon.ico", sizes: "any" },
      { url: "/favicon-package/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-package/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/favicon-package/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/favicon-package/apple-touch-icon-152x152.png", sizes: "152x152", type: "image/png" },
    ],
  },
  manifest: "/favicon-package/site.webmanifest",
  other: {
    "msapplication-config": "/favicon-package/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans antialiased bg-background">
        <BreadcrumbJsonLd />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <FloatingShareButton />
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8191448150133387"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7E4V7PJZVR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7E4V7PJZVR');
          `}
        </Script>
      </body>
    </html>
  );
}
