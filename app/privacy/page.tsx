import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal-page-shell";
import { SITE_DOMAIN, SITE_URL } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const title = "개인정보처리방침";
  return {
    title,
    description: "withustools.com 개인정보처리방침",
    alternates: { canonical: `${SITE_URL}/privacy` },
    openGraph: {
      url: `${SITE_URL}/privacy`,
      title: `${title} | ${SITE_DOMAIN}`,
    },
  };
}

export default function PrivacyPage() {
  return (
    <LegalPageShell title="개인정보처리방침" updated="2026년 4월 13일">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">1. 개인정보의 처리 목적</h2>
        <p>
          https://withustools.com은 무료 대출 이자 계산기 서비스를 제공하며, 회원가입이나 결제를 운영하지 않습니다. 이름·연락처 등
          직접적인 개인정보는 수집하지 않고, 서비스 제공·통계·개선 및 Google AdSense 등 광고 서비스를 위해 자동으로 수집되는 정보를 처리할 수
          있습니다.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">2. 처리 및 보유기간</h2>
        <p>직접적인 개인정보를 수집하지 않으므로 별도 보유·이용 기간이 없습니다.</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>서버 접속 로그 등: 관련 법령에 따라 일정 기간 보관 후 파기</li>
          <li>Google Analytics·AdSense: 각 서비스 정책에 따름</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">3. 처리하는 항목</h2>
        <p>접속 과정에서 IP, 쿠키, 방문 기록, 기기·브라우저 정보 등이 자동 수집될 수 있습니다.</p>
        <p>
          계산기에 입력하는 대출 금액·금리·기간 등은 서버에 저장되지 않고 브라우저에서 처리되는 것을 원칙으로 합니다(구현 방식에 따라 달라질 수
          있음).
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">4. 정보주체의 권리</h2>
        <p>
          브라우저 설정으로 쿠키를 거부·삭제할 수 있으며, Google은 각각의 안내 페이지에서 차단·설정을 제공합니다. 문의는 개인정보 보호책임자
          이메일로 연락해 주세요.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">5. 개인정보 보호책임자</h2>
        <p>운영진 / dbsghkwns553@gmail.com</p>
      </section>
    </LegalPageShell>
  );
}
