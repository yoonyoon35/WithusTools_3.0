import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal-page-shell";
import { SITE_DOMAIN, SITE_URL } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const title = "사이트 소개";
  return {
    title,
    description:
      "withustools.com을 운영하는 이유, 주택담보대출 등 실제 경험, 콘텐츠 작성 기준 및 문의 방법을 안내합니다.",
    alternates: { canonical: `${SITE_URL}/about` },
    openGraph: {
      url: `${SITE_URL}/about`,
      title: `${title} | ${SITE_DOMAIN}`,
    },
  };
}

export default function AboutPage() {
  return (
    <LegalPageShell title="사이트 소개" updated="2026년 5월 19일">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">이 사이트는</h2>
        <p>
          대출과 부동산 정보를 직접 알아보고 진행해 온 개인이 운영하는 사이트입니다. 내 집 마련 전부터 큰 지출을
          앞두고 금리와 한도를 비교하고 서류를 준비하며 상환 일정까지 맞춰 본 경험이 있습니다.
        </p>
        <p>
          특히 주택담보대출을 직접 진행해 본 경험이 있고, 이후 금리·조건 변화에 따라 갈아타기를 검토하고 실행해 본
          적도 있습니다. 그 과정에서 DSR·중개보수·취득세처럼 표만 보면 헷갈리기 쉬운 계산을 조금 덜 번거롭게 하고
          싶어서 이 사이트를 만들었습니다.
        </p>
        <p>
          대출 이자·DSR·취득세·중개보수 계산기와 함께, 제가 정리해 둔 가이드 글을 무료로 제공합니다.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">글과 계산기는 어떻게 쓰나요</h2>
        <p>
          가이드와 계산기는 제가 직접 겪은 과정과 확인해 본 내용을 바탕으로 정리합니다. 그와 함께 금융감독원·한국은행
          등 공공기관이 공개한 자료를 우선적으로 참고하고, 부동산·대출 분야에서 오래 다뤄 온 블로그나 뉴스, 금융기관
          안내 페이지 등도 함께 살펴보며 내용을 보완합니다.
        </p>
        <p>
          법령이나 제도가 변경되면 관련 가이드를 수정하고, 수정일을 글 상단에 표기합니다. 은행·보험사마다 조건이
          다르기 때문에 여기서 나온 숫자는 참고용으로만 봐 주세요. 실제 대출·세금·수수료는 해당 금융기관이나
          전문가에게 확인하는 것이 좋습니다.
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
