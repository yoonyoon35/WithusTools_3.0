import type { ReactNode } from "react";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { CalculatorRelatedGuides } from "@/components/calculator-related-guides";
import {
  CalculatorWebApplicationJsonLd,
  FAQPageJsonLd,
} from "@/components/json-ld";
import { FaqSection } from "@/components/faq-section";
import { getCalculatorWebApplication } from "@/lib/calculator-apps";
import type { FaqItem } from "@/lib/faq-data";
import type { BreadcrumbItem } from "@/lib/schema-builders";

type CalculatorPageShellProps = {
  path: string;
  title: string;
  intro: ReactNode;
  children: ReactNode;
  faqItems: readonly FaqItem[];
};

export function CalculatorPageShell({
  path,
  title,
  intro,
  children,
  faqItems,
}: CalculatorPageShellProps) {
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "홈", href: "/" },
    { name: title },
  ];
  const webApp = getCalculatorWebApplication(path);

  return (
    <main role="main">
      {webApp ? <CalculatorWebApplicationJsonLd app={webApp} /> : null}
      {faqItems.length > 0 ? <FAQPageJsonLd items={faqItems} breadcrumbs={breadcrumbs} /> : null}
      <section className="from-primary/10 via-background to-background border-b bg-gradient-to-b py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4">
          <BreadcrumbNav items={breadcrumbs} />
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
          <div className="text-muted-foreground mt-3 max-w-3xl text-sm leading-relaxed sm:text-base">{intro}</div>
        </div>
      </section>
      {children}
      <CalculatorRelatedGuides path={path} />
      {faqItems.length > 0 ? (
        <section id="faq" className="scroll-mt-24 py-10 sm:py-14" aria-labelledby="faq-title">
          <div className="mx-auto max-w-3xl px-4">
            <h2 id="faq-title" className="text-2xl font-bold tracking-tight sm:text-3xl">
              자주 묻는 질문
            </h2>
            <div className="mt-8">
              <FaqSection items={faqItems} />
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
