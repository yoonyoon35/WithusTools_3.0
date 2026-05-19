import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal-page-shell";
import { SITE_URL } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const title = "사이트 소개";
  return {
    title,
    description:
      "daechulija.com을 운영하는 이유, 콘텐츠 작성 기준, 참고 안내 및 문의 방법을 안내합니다.",
    alternates: { canonical: `${SITE_URL}/about` },
    openGraph: {
      url: `${SITE_URL}/about`,
      title: `${title} | Daechulija.com`,
    },
  };
}

export default function AboutPage() {
  return (
    <LegalPageShell title="사이트 소개" updated="2026년 5월 19일">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">이 사이트는</h2>
        <p>
          대출과 부동산 정보에 관심이 많은 개인이 운영하는 daechulija.com입니다. 직접 대출을 받아보고 상환 일정을
          맞춰 보면서, 금리·DSR·중개보수처럼 표만 보면 헷갈리기 쉬운 계산을 조금 덜 번거롭게 하고 싶어서
          만들었습니다.
        </p>
        <p>
          대출 이자·DSR·취득세·중개보수 계산기와 함께, 제가 정리해 둔 가이드 글을 무료로 제공합니다.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">글과 계산기는 어떻게 쓰나요</h2>
        <p>
          전문 금융 자격증을 갖고 있지는 않습니다. 본인이 겪은 과정, 스스로 공부한 내용, 그리고 금융감독원·한국은행
          등 공공기관이 공개한 자료를 바탕으로 가이드와 계산기를 정리합니다.
        </p>
        <p>
          법이나 제도가 바뀌면 내용이 어긋날 수 있고, 은행·보험사마다 조건이 다르기 때문에 여기서 나온 숫자는
          참고용으로만 봐 주세요. 실제 대출·세금·수수료는 해당 금융기관이나 전문가에게 확인하는 것이 좋습니다.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">연락처</h2>
        <p>
          글에 오류가 있거나, 고쳤으면 하는 부분이 있으면 이메일로 알려 주세요.
        </p>
        <p>
          <a
            href="mailto:dbsghkwns553@gmail.com"
            className="text-foreground underline underline-offset-4 hover:opacity-80"
          >
            dbsghkwns553@gmail.com
          </a>
        </p>
      </section>
    </LegalPageShell>
  );
}
