"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const startEvents = ["scroll", "pointerdown", "keydown"] as const;

/**
 * 광고 스크립트는 첫 화면 전송량에서 가장 큰 편이라, 페이지가 뜬 뒤에 불러옵니다.
 * 스크롤·클릭·키 입력 또는 로드 후 4초 중 먼저 오는 시점에 시작합니다.
 */
export function DeferredAdSense({ client }: { client: string }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    let timeout = 0;
    let cancelled = false;

    const enable = () => {
      if (!cancelled) setEnabled(true);
    };

    const schedule = () => {
      timeout = window.setTimeout(enable, 4000);
    };

    if (document.readyState === "complete") {
      schedule();
    } else {
      window.addEventListener("load", schedule, { once: true });
    }

    for (const eventName of startEvents) {
      window.addEventListener(eventName, enable, { once: true, passive: true });
    }

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
      window.removeEventListener("load", schedule);
      for (const eventName of startEvents) {
        window.removeEventListener(eventName, enable);
      }
    };
  }, []);

  if (!enabled) return null;

  return (
    <Script
      id="google-adsense"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
