"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getCalculatorToolTitle } from "@/lib/calculators";
import { publisherEmail } from "@/lib/publisher";
import { SITE_NAME, SITE_URL } from "@/lib/site";

function pageLabel(pathname: string): string {
  if (pathname === "/") return "홈";
  return getCalculatorToolTitle(pathname) ?? pathname;
}

export function FooterFeedbackLink() {
  const pathname = usePathname() || "/";
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch(window.location.search);
  }, [pathname]);

  const label = pageLabel(pathname);
  const pageUrl = `${SITE_URL}${pathname}${search}`;
  const subject = `[${SITE_NAME}] 문의 — ${label}`;
  const body = `페이지: ${pageUrl}\n\n사용 중 불편한 부분을 알려주시면 최대한 빠르게 조치하겠습니다.\n`;
  const href = `mailto:${publisherEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <p>
      <a
        href={href}
        className="text-foreground inline-flex min-h-11 items-center underline underline-offset-4 hover:opacity-80"
      >
        문의하기
      </a>
    </p>
  );
}
