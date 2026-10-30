import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { LegalPageShell } from "@/components/legal-page-shell";
import { GuideAuthoritativeSources } from "@/components/guide-meta-footer";
import { createPageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const title = "사이트 소개";
  return createPageMetadata({
    title,
    description:
      "withustools.com이 제공하는 대출·부동산·세금 계산기 11종과 가이드, 콘텐츠 작성·수정 기준, 문의 방법을 안내합니다.",
    path: "/about",
  });
}

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "홈", href: "/" }, { name: "사이트 소개" }]} />
      <LegalPageShell title="사이트 소개" updated="2026년 10월 30일">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">이 사이트는</h2>
          <p>
            withustools.com은 대출, 부동산 거래, 세금처럼 표와 법령만 보면 헷갈리기 쉬운 계산을 조금 덜 번거롭게 하고
            싶어서 만든 개인 운영 사이트입니다. 금리와 한도를 비교하고, 거래할 때 드는 비용을 가늠하고, 보유·양도·상속
            단계의 세금을 어림해 볼 때 필요한 계산기와 가이드 글을 무료로 제공합니다.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">제공하는 계산기</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>대출: 대출 이자, DSR, DTI, LTV, 중도상환 수수료 계산기</li>
            <li>부동산 거래: 취득세, 중개수수료 계산기</li>
            <li>세금: 종합부동산세, 양도소득세, 종합소득세, 상속세 계산기</li>
          </ul>
          <p>각 계산기와 연결된 가이드 글에서 계산 기준과 예시, 확인할 점을 함께 설명합니다.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">글과 계산기는 어떻게 쓰나요</h2>
          <p>
            가이드와 계산기는 법령과 금융감독원·한국은행·국세청 등 공공기관이 공개한 자료를 우선적으로 참고해
            정리합니다. 필요하면 뉴스나 금융기관 안내 페이지도 보조 자료로 살펴봅니다. 아직 확정되지 않은 정부안이나
            보도 단계의 내용은 확정된 제도와 구분해 표시하고, 확인하지 못한 부분은 단정하지 않습니다.
          </p>
          <p>
            법령이나 제도가 변경되면 관련 가이드를 수정하고, 수정일을 글 상단에 표기합니다. 은행·보험사마다 조건이
            다르기 때문에 여기서 나온 숫자는 참고용으로만 봐 주세요. 실제 대출·세금·수수료는 해당 금융기관이나
            전문가에게 확인하는 것이 좋습니다.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">연락처</h2>
          <p>글에 오류가 있거나, 고쳤으면 하는 부분이 있으면 이메일로 알려 주세요.</p>
          <p>
            <a
              href="mailto:dbsghkwns553@gmail.com"
              className="text-foreground underline underline-offset-4 hover:opacity-80"
            >
              dbsghkwns553@gmail.com
            </a>
          </p>
        </section>
        <GuideAuthoritativeSources />
      </LegalPageShell>
    </>
  );
}
