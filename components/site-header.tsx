"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { ChevronDown, Copy } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { sendKakaoFeedShare } from "@/lib/kakao-share";
import { defaultShareText, defaultTitle, getPublicSharePageUrl, SITE_NAME, siteTagline, SITE_URL } from "@/lib/site";

function shareUrl() {
  if (typeof window !== "undefined") return window.location.href;
  return SITE_URL;
}

function showCopyToast() {
  const toast = document.createElement("div");
  toast.textContent = "링크가 클립보드에 복사되었습니다!";
  toast.className =
    "fixed top-4 right-4 z-[100] rounded-lg bg-blue-600 px-4 py-2 text-sm text-white shadow-lg";
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

async function copyLink() {
  const url = shareUrl();
  try {
    await navigator.clipboard.writeText(url);
    showCopyToast();
  } catch {
    window.prompt("링크를 복사하세요:", url);
  }
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden fill="currentColor">
      <path d="M24 12.073C24 5.446 18.627.073 12 .073S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function NaverBlogIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 36" aria-hidden>
      <rect width="36" height="36" rx="7" fill="#03C75A" />
      <text
        x="18"
        y="18"
        textAnchor="middle"
        dominantBaseline="central"
        fill="#fff"
        fontSize="13"
        fontWeight="700"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        blog
      </text>
    </svg>
  );
}

export function SiteHeader() {
  const [kakaoShareFailed, setKakaoShareFailed] = React.useState(false);

  const openShare = (url: string) => {
    const w = window.open(url, "_blank", "width=600,height=400");
    if (w) w.opener = null;
  };

  return (
    <header
      className="bg-card/80 supports-[backdrop-filter]:bg-card/60 sticky top-0 z-40 border-b backdrop-blur"
      role="banner"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div className="min-w-0">
          <Link href="/" className="text-foreground block hover:opacity-90">
            <span className="text-lg leading-tight font-bold tracking-tight sm:text-xl">
              {SITE_NAME}
            </span>
            <span className="text-muted-foreground mt-0.5 block text-xs font-normal sm:text-sm">
              {siteTagline}
            </span>
          </Link>
          <p className="text-muted-foreground mt-1 text-xs sm:text-sm">무료 온라인 계산기·가이드</p>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:justify-end">
          <nav className="text-muted-foreground flex flex-wrap items-center gap-1 text-sm" aria-label="주요 메뉴">
            <div className="group relative">
              <span
                className="hover:text-foreground inline-flex cursor-default items-center gap-0.5 rounded-md px-2 py-1"
                tabIndex={0}
                role="button"
                aria-haspopup="menu"
                aria-expanded="false"
                aria-label="계산기 메뉴"
              >
                계산기
                <ChevronDown className="size-3.5 shrink-0 opacity-70 transition-transform duration-150 group-hover:rotate-180" aria-hidden />
              </span>
              <div
                className="border-border bg-card text-foreground ring-border/40 pointer-events-none invisible absolute top-full left-0 z-50 min-w-[12.5rem] pt-1 opacity-0 shadow-lg ring-1 transition-[opacity,visibility] duration-150 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 focus-within:pointer-events-auto focus-within:visible focus-within:opacity-100"
                role="menu"
                aria-label="계산기 선택"
              >
                <div className="rounded-md border py-1">
                  <Link
                    role="menuitem"
                    className="hover:bg-muted hover:text-foreground block px-3 py-2 text-sm"
                    href="/loan-calculator"
                  >
                    대출 이자 계산기
                  </Link>
                  <Link
                    role="menuitem"
                    className="hover:bg-muted hover:text-foreground block px-3 py-2 text-sm"
                    href="/acquisition-tax-calculator"
                  >
                    취득세 계산기
                  </Link>
                  <Link
                    role="menuitem"
                    className="hover:bg-muted hover:text-foreground block px-3 py-2 text-sm"
                    href="/brokerage-fee-calculator"
                  >
                    중개보수 계산기
                  </Link>
                  <Link
                    role="menuitem"
                    className="hover:bg-muted hover:text-foreground block px-3 py-2 text-sm"
                    href="/dsr-calculator"
                  >
                    DSR 계산기
                  </Link>
                  <Link
                    role="menuitem"
                    className="hover:bg-muted hover:text-foreground block px-3 py-2 text-sm"
                    href="/dti-calculator"
                  >
                    DTI 계산기
                  </Link>
                  <Link
                    role="menuitem"
                    className="hover:bg-muted hover:text-foreground block px-3 py-2 text-sm"
                    href="/ltv-calculator"
                  >
                    LTV 계산기
                  </Link>
                  <Link
                    role="menuitem"
                    className="hover:bg-muted hover:text-foreground block px-3 py-2 text-sm"
                    href="/prepayment-fee-calculator"
                  >
                    중도상환 수수료 계산기
                  </Link>
                  <Link
                    role="menuitem"
                    className="hover:bg-muted hover:text-foreground block px-3 py-2 text-sm"
                    href="/comprehensive-property-tax-calculator"
                  >
                    종합부동산세 계산기
                  </Link>
                </div>
              </div>
            </div>
            <Link className="hover:text-foreground rounded-md px-2 py-1" href="/loan-calculator#faq">
              자주묻는질문
            </Link>
            <Link className="hover:text-foreground rounded-md px-2 py-1" href="/guide">
              가이드
            </Link>
          </nav>

          <div className="flex flex-wrap items-center gap-1 border-l pl-2" role="group" aria-label="SNS 공유">
            <Button
              type="button"
              variant="ghost"
              className="size-9 shrink-0 p-0 hover:opacity-90"
              aria-label="카카오톡으로 공유"
              onClick={() => {
                const pageUrl = getPublicSharePageUrl();
                const ok = sendKakaoFeedShare({
                  pageUrl,
                  title: defaultTitle,
                  description: defaultShareText,
                });
                if (!ok) {
                  setKakaoShareFailed(true);
                }
              }}
            >
              {/* 카카오 디벨로퍼스 제공: kakaotalksharing/kakaotalk_sharing_btn_small.png */}
              <Image
                src="/kakao/kakaotalk_sharing_btn_small.png"
                alt=""
                width={36}
                height={36}
                className="size-9 rounded-md object-contain"
              />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-9 text-[#1877F2] hover:bg-[#1877F2]/10 dark:text-[#1877F2] dark:hover:bg-[#1877F2]/15"
              aria-label="페이스북에 공유"
              onClick={() => {
                const pageUrl = getPublicSharePageUrl();
                openShare(
                  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
                );
              }}
            >
              <FacebookIcon className="size-5" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-9 text-foreground hover:bg-muted dark:text-foreground dark:hover:bg-muted"
              aria-label="X(트위터)에 공유"
              onClick={() =>
                openShare(
                  `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${defaultTitle} — ${defaultShareText}`)}&url=${encodeURIComponent(shareUrl())}`,
                )
              }
            >
              <XIcon className="size-5" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-9 hover:bg-muted"
              aria-label="네이버 블로그에 공유"
              onClick={() =>
                openShare(
                  `https://share.naver.com/web/shareView.nhn?url=${encodeURIComponent(shareUrl())}&title=${encodeURIComponent(defaultTitle)}`,
                )
              }
            >
              <NaverBlogIcon className="size-5 rounded-md" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-9 text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label="링크 복사"
              onClick={() => void copyLink()}
            >
              <Copy className="size-5" aria-hidden />
            </Button>
            <ModeToggle className="size-9" iconClassName="size-5" />
          </div>
        </div>
      </div>

      {kakaoShareFailed ? (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="kakao-share-fail-title"
          aria-describedby="kakao-share-fail-desc"
          onClick={() => setKakaoShareFailed(false)}
        >
          <div
            className="bg-card text-card-foreground max-w-md rounded-xl border p-6 shadow-xl ring-1 ring-foreground/10"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="kakao-share-fail-title" className="text-lg font-semibold">
              카카오톡 공유에 실패했습니다
            </h2>
            <p id="kakao-share-fail-desc" className="text-muted-foreground mt-3 text-sm leading-relaxed">
              카카오 JavaScript SDK가 준비되지 않았거나 공유 요청이 거절되었습니다.{" "}
              <code className="bg-muted rounded px-1 py-0.5 text-xs">NEXT_PUBLIC_KAKAO_JS_KEY</code> 환경 변수와 카카오
              디벨로퍼스의 Web 플랫폼·사이트 도메인 설정을 확인한 뒤 다시 시도해 주세요.
            </p>
            <Button type="button" className="mt-6 w-full" onClick={() => setKakaoShareFailed(false)}>
              확인
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
