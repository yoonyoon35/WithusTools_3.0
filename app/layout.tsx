import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { KakaoSdkLoader } from "@/components/kakao-sdk-loader";
import { WebApplicationJsonLd } from "@/components/json-ld";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AdfitLeaderboard728 } from "@/components/adfit-leaderboard-728";
import { AdfitPcSkyscraperRail } from "@/components/adfit-pc-skyscraper-rail";
import { defaultDescription, defaultTitle, kakaoAdfitBaScriptSrc, ogImagePath, SITE_URL } from "@/lib/site";

const googleAdsenseClient = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT?.trim();
const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();

const notoSans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: "%s | Daechulija.com",
  },
  description: defaultDescription,
  keywords: [
    "대출 이자 계산기",
    "대출 계산기",
    "원리금균등상환",
    "원금균등상환",
    "만기일시상환",
    "주택담보대출",
    "전세자금대출",
  ],
  authors: [{ name: "Daechulija.com" }],
  verification: {
    yandex: "b9d7eec2f6c0396f",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: "대출 이자 계산기",
    title: defaultTitle,
    description: defaultDescription,
    images: [{ url: ogImagePath, width: 152, height: 152, alt: "Daechulija" }],
  },
  twitter: {
    card: "summary",
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImagePath],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2563eb" },
    { media: "(prefers-color-scheme: dark)", color: "#1e3a8a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${notoSans.variable} font-sans antialiased`}>
        {googleAdsenseClient ? (
          <Script
            id="google-adsense"
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${googleAdsenseClient}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        ) : null}
        {googleAnalyticsId ? (
          <>
            <Script
              id="google-analytics-loader"
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script
              id="google-analytics-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${googleAnalyticsId}');
                `,
              }}
            />
          </>
        ) : null}
        <Script
          id="kakao-adfit-ba"
          async
          src={kakaoAdfitBaScriptSrc}
          strategy="afterInteractive"
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <KakaoSdkLoader />
          <WebApplicationJsonLd />
          <SiteHeader />
          <AdfitLeaderboard728 />
          <div className="mx-auto w-full max-w-6xl px-4 lg:flex lg:max-w-[calc(72rem+1.5rem+160px)] lg:gap-6">
            <div className="min-w-0 flex-1">{children}</div>
            <AdfitPcSkyscraperRail />
          </div>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
