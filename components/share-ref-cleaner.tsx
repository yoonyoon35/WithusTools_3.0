"use client";

import { useEffect } from "react";
import { SHARE_REF, stripShareRefFromAddressBar } from "@/lib/share-tracking";

/**
 * 페이지뷰가 ref=share를 읽은 뒤에 주소창에서만 지웁니다.
 * 바로 지우면 분석 도구가 공유 유입을 못 볼 수 있습니다.
 */
export function ShareRefCleaner() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("ref") !== SHARE_REF) return;

    let timeout = 0;
    const schedule = () => {
      timeout = window.setTimeout(stripShareRefFromAddressBar, 1000);
    };

    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });

    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("load", schedule);
    };
  }, []);

  return null;
}
