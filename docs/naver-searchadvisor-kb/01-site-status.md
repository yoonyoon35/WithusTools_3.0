# 네이버 서치어드바이저 KB — 01. 현재 사이트 대조

> 대상: `https://withustools.com` (Next.js 15 정적 export · Cloudflare)
> 측정일: 2026-10-21 · 측정: 사이트맵 138개 URL 전수 GET + 헤더 확인(`curl -I`)
> 판정: **적용됨** / **차이** / **미적용(선택)** / **판단 불가**
> 근거 slug는 `https://searchadvisor.naver.com/guide/<slug>`

## 1. 수집 · 로봇 접근

| 가이드 요구 | 근거 | 실측 | 판정 |
|---|---|---|---|
| robots.txt는 루트, `text/plain`, 2xx | `seo-basic-robots` | `200`, `text/plain; charset=utf-8` | 적용됨 |
| 모든 로봇 허용 `User-agent: *` `Allow: /` (Yeti 별도 명시는 필수 아님) | `seo-basic-robots`, `seo-basic-intro` | `User-Agent: *` / `Allow: /` | 적용됨 |
| robots.txt에 sitemap 위치 기재 | `seo-basic-robots` | `Sitemap: https://withustools.com/sitemap.xml` | 적용됨 |
| JS·CSS 경로를 Disallow하지 않음 | `seo-advanced-javascript`, `resource-and-link` | `Disallow` 규칙 없음 | 적용됨 |
| sitemap: 소유확인 도메인과 동일, 절대 경로, 10MB·50,000 URL 이하 | `request-feed` | 138개 URL 전부 `https://withustools.com/...`, `application/xml` 200 | 적용됨 |
| 서버·방화벽에서 Yeti 접근 허용 | `seo-basic-intro`, `seo-basic-firewall` | Yeti UA로 홈 `200`. **실제 네이버 로봇 IP 기준은 외부에서 확인 불가** | 판단 불가 |
| 사이트맵 서치어드바이저 제출 | `request-feed`, `site-summary` | robots.txt에 기재됨(→ "정상" 표기 조건 충족). 제출 여부는 로그인 필요 | 판단 불가 |

## 2. HTTP · URL · 이동

| 가이드 요구 | 근거 | 실측 | 판정 |
|---|---|---|---|
| 없는 페이지는 404 상태코드 | `seo-basic-create`, `seo-advanced-indexing` | 존재하지 않는 URL → `404` | 적용됨 |
| www/non-www 한쪽으로 301 | `seo-basic-create` | `www` → `https://withustools.com/` `301` | 적용됨 |
| HTTP → HTTPS 리다이렉트 | `site-summary` | `http://` → `https://` `301` | 적용됨 |
| JS가 아닌 HTTP redirect | `seo-basic-redirect` | `/loan-calculator/` → `308` → `/loan-calculator` | 적용됨 |
| fragment(`#`) URL 미사용 | `seo-advanced-javascript`, `seo-advanced-url` | 사이트맵 URL에 `#` 없음, 홈의 `<a>` 58개 중 `#`·`javascript:` 0개 | 적용됨 |
| 파라미터 최소화·읽기 쉬운 URL | `seo-advanced-url` | `/loan-calculator`, `/guide/<slug>` 형태 | 적용됨 |
| JS로 페이지 이동 금지 | `seo-basic-redirect` | 코드의 `window.location` 사용처는 공유 URL 생성(`lib/site.ts`)·현재 URL 참조(`site-header.tsx`)·쿼리스트링 읽기(`loan-calculator.tsx`), `router.replace`는 같은 경로에 쿼리만 바꾸는 호출. 페이지 이동(redirect) 용도의 코드는 확인되지 않음 | 적용됨 |

## 3. 마크업 (138개 URL 전수)

| 가이드 요구 | 근거 | 실측 | 판정 |
|---|---|---|---|
| `<title>` 존재·1개 | `seo-help` | 138/138이 1개 | 적용됨 |
| title 중복 없음 | `seo-help`, `markup-content` | 중복 그룹 0 | 적용됨 |
| meta description 존재·중복 없음 | `seo-help` | 비어 있는 페이지 0, 중복 그룹 0 | 적용됨 |
| `<h1>` 1개 | `seo-help` | 138/138이 1개 | 적용됨 |
| 이미지 alt | `seo-help` | alt 없는 `<img>` 0 | 적용됨 |
| canonical(절대 경로) | `markup-structure` | 138/138이 자기 URL과 일치 | 적용됨 |
| 로봇 메타 `index, follow` (noindex/nofollow 없음) | `markup-structure`, `seo-basic-intro` | 138/138 `index, follow` | 적용됨 |
| 소유확인 메타는 `<head>` 안 | `faq-start-register` | `naver-site-verification` 이 `<head>`에 있음 | 적용됨 |
| `viewport`, 반응형 단일 URL | `markup-mobile` | `width=device-width, initial-scale=1`, 별도 m. 사이트 없음 | 적용됨 |
| OG title/description/url/image | `markup-content` | 모두 존재 | 적용됨 |
| og:image 규격: 150×150 초과, 5,000B 이상, 3:1 이하 | `markup-content` | 180×180, 35,762B, 1:1 | 적용됨 |
| og:image는 문서를 대표하는 **고유** 이미지. 사이트 전체에 반복되는 로고는 검색엔진이 사용하지 않는 경우가 있음 | `markup-content` | 138개 전부 `apple-touch-icon.png` 한 장 | **차이** (영향: 썸네일로 쓰이지 않을 수 있음. 불이익 언급 없음) |
| title·description 길이 | `markup-content` / `diagnose-site` / PDF | 제목 22~59자(40자 초과 52개), 설명 20~177자(80자 초과 94개). 홈: 제목 26자, 설명 132자 | **소스 불일치로 판정 보류** (`00-index` §3) |

## 4. 파비콘

| 가이드 요구 | 근거 | 실측 | 판정 |
|---|---|---|---|
| href는 상대 경로가 아닌 절대 경로 | `markup-favicon` | `/favicon/favicon.ico` 등 **상대 경로** | **차이** |
| 동일 rel 값은 1개만. 여러 개면 반영되지 않는 원인이 될 수 있음 | `markup-favicon` | `rel="icon"` **3개** (layout 2개 + `app/favicon.ico` 자동 생성 1개) | **차이** |
| 우선순위: shortcut icon > icon > 기본 `/favicon.ico` > apple-touch-icon | `markup-favicon` | `shortcut icon` 1개 존재 | 참고 |
| 정사각형 16px 이상(32px 이상 권장), robots 허용 | `markup-favicon`, `seo-basic-robots` | `favicon-32x32.png`, robots 차단 없음 | 적용됨 |

[해석] `shortcut icon`이 우선순위 1위로 1개뿐이라, `icon` 중복이 실제로 영향을 주는지는 가이드로 판단할 수 없다. 문구상 차이만 기록한다.

## 5. 자바스크립트 · 색인

| 가이드 요구 | 근거 | 실측 | 판정 |
|---|---|---|---|
| 주요 HTML 영역은 서버에서 렌더링(SSR 권장) | `seo-advanced-javascript` | 정적 export. JS 없이 받은 HTML에 title·description·h1·본문 포함 (`/loan-calculator` 텍스트 약 5,585자) | 적용됨 |
| 내용 없는 HTML·소프트 404 방지 | `seo-advanced-indexing` | 위와 같음, 404는 404 반환 | 적용됨 |
| 링크는 `<a href>`로 실제 URL | `resource-and-link`, `seo-advanced-url` | 홈 `<a href>` 58개 모두 `/` 또는 `https` | 적용됨 |
| JS URL에 timestamp/hash로 최신성을 **강제**하는 방식은 권장하지 않음 | `seo-advanced-javascript` | `/_next/static/chunks/<해시>.js` (Next 빌드 기본 파일명) | **판단 불가** — 가이드는 "강제 처리"를 언급. 해시 파일명이 이에 해당하는지 문서에 명시 없음. 정적 HTML에 본문이 있어 영향 경로(JS 미수집 시 정적 HTML 색인)와 무관할 가능성 `[해석]` |

## 6. 구조화 데이터 (JSON-LD)

| 가이드 | 근거 | 실측 | 판정 |
|---|---|---|---|
| 형식: Microdata 또는 JSON-LD 권장 | `structured-data-intro` | 홈 2블록, 가이드 글 4블록 JSON-LD | 적용됨 |
| BreadcrumbList `name`은 "top", "홈" 같은 일반 단어 말고 페이지를 설명하는 텍스트 | `structured-data-breadcrumb` | 첫 항목 `"홈"` | **차이** |
| 사이트 연관채널 `sameAs` (루트 페이지, Person/Organization) | `structured-data-channel` | 홈 HTML에 `sameAs` 없음 | 미적용(선택) — 채널 보유 여부 확인 필요 |
| 캐러셀(ListItem)은 `image` 필수 | `structured-data-carousel` | `ItemList`는 `name`·`url`만 | 해당 여부 불명 — 캐러셀 노출을 원할 때만 의미 |
| 모든 구조화 데이터는 "노출을 보장하지 않음" | `structured-data-intro` 외 | — | 참고 |

## 7. 선택 기능

| 기능 | 근거 | 실측 | 판정 |
|---|---|---|---|
| IndexNow | `indexnow-about`, `indexnow-faq` | key 파일 없음 | 미적용(선택). 수집요청·사이트맵을 대체하지 않음 |
| RSS | `request-feed` | 없음 | 미적용(선택). 가이드는 사이트맵 활용을 더 권장 |
| 수집요청 | `request-crawl` | 사용자 보고: 전체 완료 | 반복 요청 불필요(가이드) |
| 사이트 등록 | `faq-start-register`, `site-summary` | 사용자 보고: `https://withustools.com` 등록 | 적용됨 (HTTPS로 등록됨) |

## 8. 서치어드바이저 화면 (사용자 제공 스크린샷, 2026-10-21)

| 항목 | 값 | 비고 |
|---|---|---|
| 사이트 진단 | 색인 78 / 수집제한 4 / 색인제외 0 / SEO 0 | 사용자 설명: 수집제한은 마이그레이션 이전에 색인됐던, 현재는 없는 페이지. 그래프상 27 → 4로 감소 중 |
| 색인 추이 | 10.01경 ~0으로 하락, 10.12경 78로 복귀 | 원인 미확인 (사용자 확인 필요) |
| 수집 현황 | 10.07경 ~ 10.17경 완료 건수 0, 이후 재개. 제한 0 | 원인 미확인 |
| 색인 78 vs 사이트맵 138 | 차이 60 | 가이드는 전체 색인을 약속하지 않음. 판단 보류 |

## 9. 측정 한계

- 외부 요청 기준이므로 **네이버 로봇 IP에서의 응답**(Cloudflare 봇 규칙 등)은 확인하지 못했다.
- 서치어드바이저 화면은 위 스크린샷 2장(사이트 진단·수집 현황)만 확인했고, 사이트 상태·사이트 간단 체크는 보지 못했다.
- `url-inspection` 본문은 소스에 없다.
- 콘텐츠 품질 항목(`content-basic`, `content-abusing`)은 자동 판정 대상이 아니다.
