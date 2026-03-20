"use client";

import { usePathname } from "next/navigation";
import { buildBreadcrumb } from "@/lib/breadcrumb";

export default function BreadcrumbJsonLd() {
  const pathname = usePathname();
  const items = buildBreadcrumb(pathname);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
