import Link from "next/link";
import { FooterFeedbackLink } from "@/components/footer-feedback-link";
import { referenceDisclaimerLine, SITE_DOMAIN } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-muted/40 border-t py-10" role="contentinfo">
      <div className="text-muted-foreground mx-auto max-w-6xl space-y-3 px-4 text-center text-sm">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          <Link href="/" className="hover:text-foreground underline-offset-4 hover:underline">
            홈
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
        <FooterFeedbackLink />
        <p>© {new Date().getFullYear()} {SITE_DOMAIN}. All rights reserved.</p>
        <p className="text-xs">{referenceDisclaimerLine}</p>
      </div>
    </footer>
  );
}
