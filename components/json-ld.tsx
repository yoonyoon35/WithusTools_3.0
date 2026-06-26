import { LOAN_CALCULATOR_PATH } from "@/lib/calculators";
import {
  defaultDescription,
  loanCalculatorDescription,
  SITE_DOMAIN,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  alternateName: SITE_DOMAIN,
  description: defaultDescription,
  url: SITE_URL,
};

const loanCalculatorApplication = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "대출 이자 계산기",
  alternateName: SITE_DOMAIN,
  description: loanCalculatorDescription,
  url: `${SITE_URL}${LOAN_CALCULATOR_PATH}`,
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

export function WebSiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
    />
  );
}

export function LoanCalculatorWebApplicationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(loanCalculatorApplication) }}
    />
  );
}