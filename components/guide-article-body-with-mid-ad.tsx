"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AdfitInlineLeader320 } from "@/components/adfit-inline-leader-320";

function blockBottom(el: Element): number {
  const rect = el.getBoundingClientRect();
  const style = window.getComputedStyle(el);
  const mb = Number.parseFloat(style.marginBottom) || 0;
  return rect.bottom + mb;
}

function resolveInsertionContext(container: HTMLElement): { parent: HTMLElement; blocks: Element[] } | null {
  const raw = Array.from(container.children).filter((el) => !el.hasAttribute("data-guide-mid-ad-root"));
  if (raw.length >= 2) {
    return { parent: container, blocks: raw };
  }
  if (raw.length === 1 && raw[0].children.length >= 2) {
    const inner = raw[0];
    return { parent: inner as HTMLElement, blocks: Array.from(inner.children) };
  }
  return null;
}

function computeInsertBeforeIndex(blocks: Element[]): number {
  const minTop = Math.min(...blocks.map((el) => el.getBoundingClientRect().top));
  const maxBottom = Math.max(...blocks.map((el) => blockBottom(el)));
  const midY = minTop + (maxBottom - minTop) / 2;

  let insertBeforeIdx = blocks.length;
  for (let i = 0; i < blocks.length; i++) {
    if (blockBottom(blocks[i]) >= midY) {
      insertBeforeIdx = i + 1;
      break;
    }
  }
  return Math.min(Math.max(insertBeforeIdx, 1), blocks.length);
}

/**
 * 긴 가이드 본문 DOM 기준 세로 길이의 대략적인 중간 지점 다음에 가로형 광고 1개를 삽입합니다.
 * 광고는 React Portal로 렌더해 별도 root unmount 로 인한 경합을 피합니다.
 */
export function GuideArticleBodyWithMidAd({ children }: { children: React.ReactNode }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const mountElRef = useRef<HTMLDivElement | null>(null);
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const container = wrapRef.current;
    if (!container) return;

    const removeMountEl = (el: HTMLDivElement | null) => {
      if (!el?.isConnected) return;
      el.remove();
    };

    const prevMount = mountElRef.current;
    setPortalTarget(null);
    removeMountEl(prevMount);
    mountElRef.current = null;

    const ctx = resolveInsertionContext(container);
    if (!ctx) return;

    const { parent, blocks } = ctx;
    const insertBeforeIdx = computeInsertBeforeIndex(blocks);

    const mountEl = document.createElement("div");
    mountEl.setAttribute("data-guide-mid-ad-root", "");
    mountEl.className = "guide-mid-ad-root py-6";

    const refNode = blocks[insertBeforeIdx] ?? null;
    parent.insertBefore(mountEl, refNode);
    mountElRef.current = mountEl;
    setPortalTarget(mountEl);

    return () => {
      setPortalTarget(null);
      const el = mountElRef.current;
      mountElRef.current = null;
      requestAnimationFrame(() => removeMountEl(el));
    };
  }, [children]);

  return (
    <div ref={wrapRef} className="mt-10 space-y-8 text-sm leading-relaxed sm:text-base">
      {children}
      {portalTarget ? createPortal(<AdfitInlineLeader320 />, portalTarget) : null}
    </div>
  );
}
