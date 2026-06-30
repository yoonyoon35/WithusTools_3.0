import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal-page-shell";
import { SITE_DOMAIN, SITE_URL } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const title = "오픈소스 고지";
  return {
    title,
    description: "대출이자.com 오픈소스 및 제3자 리소스 고지",
    alternates: { canonical: `${SITE_URL}/oss-notice` },
    openGraph: {
      url: `${SITE_URL}/oss-notice`,
      title: `${title} | ${SITE_DOMAIN}`,
      description: "서비스에 사용된 오픈소스 라이선스 및 외부 리소스 출처 안내",
    },
  };
}

const directDependencies = [
  { name: "next", license: "MIT" },
  { name: "react", license: "MIT" },
  { name: "react-dom", license: "MIT" },
  { name: "next-themes", license: "MIT" },
  { name: "recharts", license: "MIT" },
  { name: "lucide-react", license: "ISC" },
  { name: "@base-ui/react", license: "MIT" },
  { name: "class-variance-authority", license: "Apache-2.0" },
  { name: "clsx", license: "MIT" },
  { name: "docx", license: "MIT" },
  { name: "html-to-image", license: "MIT" },
  { name: "tailwind-merge", license: "MIT" },
  { name: "tw-animate-css", license: "MIT" },
  { name: "shadcn", license: "MIT" },
] as const;

export default function OssNoticePage() {
  return (
    <LegalPageShell title="오픈소스 고지" updated="2026년 6월 30일">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">1. 안내</h2>
        <p>
          본 서비스는 오픈소스 소프트웨어를 활용해 제공됩니다. 라이선스 전문과 저작권 고지는 각 프로젝트의 공식 저장소 및 LICENSE 파일을
          우선합니다.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">2. 주요 직접 의존성 라이선스</h2>
        <div className="overflow-x-auto rounded-md border">
          <table className="w-full min-w-[360px] border-collapse text-sm">
            <thead>
              <tr className="bg-muted/50 border-b">
                <th scope="col" className="p-2 text-left font-medium">
                  패키지
                </th>
                <th scope="col" className="p-2 text-left font-medium">
                  라이선스
                </th>
              </tr>
            </thead>
            <tbody>
              {directDependencies.map((dep) => (
                <tr key={dep.name} className="border-b last:border-b-0">
                  <td className="p-2 font-mono text-xs">{dep.name}</td>
                  <td className="p-2">{dep.license}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">3. 제3자 리소스 출처</h2>
        <p>카카오톡 공유 버튼 이미지는 카카오 디벨로퍼스 제공 리소스를 사용합니다.</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Source:{" "}
            <a
              href="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_small.png"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              developers.kakao.com/assets/img/.../kakaotalk_sharing_btn_small.png
            </a>
          </li>
          <li>
            Reference:{" "}
            <a
              href="https://developers.kakao.com/tool/resource"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              developers.kakao.com/tool/resource
            </a>
          </li>
        </ul>
      </section>

      <p className="text-muted-foreground text-xs">
        보다 상세한 고지 내역은 프로젝트 저장소의 <code className="bg-muted rounded px-1 py-0.5 text-xs">THIRD_PARTY_NOTICES.md</code>
        에서 확인할 수 있습니다.
      </p>
    </LegalPageShell>
  );
}
