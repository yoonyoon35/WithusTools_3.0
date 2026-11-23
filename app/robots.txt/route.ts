import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

/** 다음 웹마스터도구 소유 확인용 주석. 크롤러 규칙이 아니므로 맨 위에 둔다. */
const DAUM_WEBMASTER_TOKEN =
  "#DaumWebMasterTool:f6fc8cef87a7f9ca6c41bf7fd7b60e2b649aa05466cd0e583b5117f2379ea59f:upewRfgI5y6IkdBZlCoHBQ==";

function buildRobotsTxt(): string {
  return [
    DAUM_WEBMASTER_TOKEN,
    "User-Agent: *",
    "Allow: /",
    "",
    `Host: ${SITE_URL}`,
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    "",
  ].join("\n");
}

export function GET() {
  return new Response(buildRobotsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
