import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal-page-shell";
import { createPageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const title = "이용약관";
  return createPageMetadata({
    title,
    description: "withustools.com 이용약관",
    path: "/terms",
  });
}

export default function TermsPage() {
  return (
    <LegalPageShell title="이용약관" updated="2026년 4월 13일">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">제1조 (목적)</h2>
        <p>본 약관은 https://withustools.com이 제공하는 온라인 서비스 이용과 관련하여 운영자와 이용자의 권리·의무를 규정합니다.</p>
      </section>
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">제2조 (서비스)</h2>
        <p>대출 이자 계산기, 상환 일정표, 관련 정보 제공 등을 포함할 수 있으며, 내용은 변경될 수 있습니다.</p>
      </section>
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">제3조 (이용자의 의무)</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>불법 목적 이용, 시스템 방해, 무단 복제·배포 등을 해서는 안 됩니다.</li>
          <li>타인의 권리를 침해하거나 허위 정보를 유포해서는 안 됩니다.</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">제4조 (계산 결과)</h2>
        <p>
          계산 결과는 표준 계산식에 따른 참고용 정보이며, 금융기관별 수수료·보험료·금리 조건 등과 다를 수 있습니다. 이용자의 의사결정에 따른
          결과에 대해 운영자는 책임을 지지 않습니다.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">제5조 (면책)</h2>
        <p>천재지변, 불가항력, 통신 장애 등 운영자의 귀책이 없는 사유로 발생한 손해에 대해 책임을 지지 않습니다.</p>
      </section>
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">제6조 (분쟁)</h2>
        <p>분쟁 발생 시 대한민국 법을 적용하며, 관할은 관련 법령 및 상관례에 따릅니다.</p>
      </section>
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">제7조 (오픈소스 및 제3자 리소스 고지)</h2>
        <p>
          본 서비스는 Next.js, React 등 오픈소스 소프트웨어를 활용하여 제공됩니다. 각 구성요소의 라이선스는 해당 프로젝트의 원문
          라이선스 정책을 따릅니다.
        </p>
        <p>
          상세 목록은 프로젝트의 <code className="bg-muted rounded px-1 py-0.5 text-xs">THIRD_PARTY_NOTICES.md</code> 문서에
          정리되어 있으며, 카카오톡 공유 버튼 이미지는 카카오 디벨로퍼스 제공 리소스를 사용합니다.
        </p>
      </section>
    </LegalPageShell>
  );
}
