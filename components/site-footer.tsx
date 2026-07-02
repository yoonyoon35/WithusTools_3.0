import Link from "next/link";
import { referenceDisclaimerLine, SITE_DOMAIN } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-muted/40 border-t py-10" role="contentinfo">
      <div className="text-muted-foreground mx-auto max-w-6xl space-y-3 px-4 text-center text-sm">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          <Link href="/loan-calculator" className="hover:text-foreground underline-offset-4 hover:underline">
            대출 이자 계산기
          </Link>
          <Link href="/acquisition-tax-calculator" className="hover:text-foreground underline-offset-4 hover:underline">
            취득세 계산기
          </Link>
          <Link href="/brokerage-fee-calculator" className="hover:text-foreground underline-offset-4 hover:underline">
            중개수수료 계산기
          </Link>
          <Link href="/dsr-calculator" className="hover:text-foreground underline-offset-4 hover:underline">
            DSR 계산기
          </Link>
          <Link href="/dti-calculator" className="hover:text-foreground underline-offset-4 hover:underline">
            DTI 계산기
          </Link>
          <Link href="/ltv-calculator" className="hover:text-foreground underline-offset-4 hover:underline">
            LTV 계산기
          </Link>
          <Link href="/prepayment-fee-calculator" className="hover:text-foreground underline-offset-4 hover:underline">
            중도상환 수수료 계산기
          </Link>
          <Link
            href="/comprehensive-property-tax-calculator"
            className="hover:text-foreground underline-offset-4 hover:underline"
          >
            종합부동산세 계산기
          </Link>
          <Link href="/guide" className="hover:text-foreground underline-offset-4 hover:underline">
            가이드
          </Link>
          <Link href="/about" className="hover:text-foreground underline-offset-4 hover:underline">
            사이트 소개
          </Link>
          <Link href="/privacy" className="hover:text-foreground underline-offset-4 hover:underline">
            개인정보처리방침
          </Link>
          <Link href="/terms" className="hover:text-foreground underline-offset-4 hover:underline">
            이용약관
          </Link>
          <Link href="/oss-notice" className="hover:text-foreground underline-offset-4 hover:underline">
            오픈소스 고지
          </Link>
        </div>
        <p>© {new Date().getFullYear()} {SITE_DOMAIN}. All rights reserved.</p>
        <p className="text-xs">{referenceDisclaimerLine}</p>
      </div>
    </footer>
  );
}
