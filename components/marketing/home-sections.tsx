import { referenceDisclaimerLine } from "@/lib/site";

/** 취득세·중개보수 계산기 페이지와 동일한 히어로 패턴 */
export function HeroSection() {
  return (
    <section className="from-primary/10 via-background to-background border-b bg-gradient-to-b py-10 sm:py-14" aria-labelledby="hero-title">
      <div className="mx-auto max-w-6xl px-4">
        <h1 id="hero-title" className="text-3xl font-bold tracking-tight sm:text-4xl">
          대출 이자 계산기
        </h1>
        <p className="text-muted-foreground mt-3 max-w-3xl text-sm leading-relaxed sm:text-base">
          원리금균등·원금균등·만기일시 상환을 비교하고, 하단 기준표로 각 방식의 특징을 확인할 수 있습니다. 거치기간·상환 방식
          비교도 지원합니다. {referenceDisclaimerLine}
        </p>
      </div>
    </section>
  );
}
