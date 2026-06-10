import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import FloatingShareButton from "@/components/FloatingShareButton";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import { buildLanguageAlternates } from "@/lib/metadata";
import { routing, type Locale } from "@/i18n/routing";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = routing.locales.includes(params.locale as Locale)
    ? (params.locale as Locale)
    : routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: "site" });
  const keywords = (t.raw("keywords") as string[]) ?? [];

  return {
    metadataBase: new URL("https://withustools.com"),
    title: {
      default: t("title"),
      template: "%s | WithusTools",
    },
    description: t("description"),
    keywords,
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://withustools.com/${locale}/`,
      siteName: "WithusTools",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
    },
    alternates: {
      languages: buildLanguageAlternates("/"),
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
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable}>
      <body className="min-h-screen font-sans antialiased bg-background">
        <NextIntlClientProvider messages={messages}>
          <BreadcrumbJsonLd />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <FloatingShareButton />
          <CookieConsentBanner />
        </NextIntlClientProvider>
        {/*
          Must match COOKIE_CONSENT_STORAGE_KEY in src/lib/cookie-consent-storage.ts
        */}
        <Script
          id="consent-mode-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
(function(){
  var KEY='withus-cookie-consent';
  window.dataLayer=window.dataLayer||[];
  function gtag(){dataLayer.push(arguments);}
  window.gtag=window.gtag||gtag;
  gtag('consent','default',{
    ad_storage:'denied',
    analytics_storage:'denied',
    ad_user_data:'denied',
    ad_personalization:'denied',
    wait_for_update:500
  });
  try{
    var raw=localStorage.getItem(KEY);
    if(!raw)return;
    var data=JSON.parse(raw);
    if(!data.expiresAt||new Date(data.expiresAt)<=new Date())return;
    gtag('consent','update',{
      analytics_storage:data.analytics?'granted':'denied',
      ad_storage:data.ads?'granted':'denied',
      ad_user_data:data.ads?'granted':'denied',
      ad_personalization:data.ads?'granted':'denied'
    });
  }catch(e){}
})();
            `.trim(),
          }}
        />
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
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-7E4V7PJZVR');
          `}
        </Script>
      </body>
    </html>
  );
}
