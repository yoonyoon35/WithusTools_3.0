import { SITE_DOMAIN, SITE_URL, defaultDescription } from "@/lib/site";

const webApplication = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "대출 이자 계산기",
  alternateName: SITE_DOMAIN,
  description: defaultDescription,
  url: SITE_URL,
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "KRW",
  },
  featureList: [
    "원리금균등상환 계산",
    "원금균등상환 계산",
    "만기일시상환 계산",
    "거치기간 설정",
    "상환 일정표 다운로드",
  ],
};

export function WebApplicationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplication) }}
    />
  );
}
