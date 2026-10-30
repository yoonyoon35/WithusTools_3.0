# 네이버 서치어드바이저 KB — 00. 인덱스

> 0단계(준비) 산출물. **목차 · 원칙 · 소스 간 불일치 · 우선순위 · 저장 위치**만 담는다.
> 가이드 원문은 `source/`에 있고, 이 폴더의 문서는 원문을 대체하지 않는다.
> 작성일: 2026-10-21 · 근거: `source/*.txt` 12개, `source/*.PNG`(목차 캡처), `source/*.pdf` 2개

## 1. 작성·적용 원칙

1. **원문에 있는 것만** 쓴다. 해석을 덧붙일 때는 `[해석]`으로 표시한다.
2. 가이드의 강도를 그대로 옮긴다. "권장"은 권장으로, "불이익을 받을 수 있다"는 그대로 적고 "페널티"로 바꾸지 않는다.
3. **이미 적용된 항목은 재작업 대상에서 제외**한다. 적용 여부는 코드가 아니라 **실제 사이트 응답**으로 확인한다(`01-site-status.md`).
4. 코드·사이트로 판단할 수 없는 항목은 "판단 불가"로 두고 추정하지 않는다.
5. 각 항목에 근거 가이드(slug)를 붙인다. 기준 URL: `https://searchadvisor.naver.com/guide/<slug>`

## 2. 소스 인벤토리 — 11개 카테고리 / 55개 페이지

목차 캡처(`하위 페이지 전체 목차.PNG`)의 11개 카테고리와 카테고리별 PNG를 `.txt`와 대조했다. **텍스트에 없는 페이지는 없었다.** 단, `url-inspection`은 본문이 비어 있다.

| 카테고리 | 페이지 (slug) | 소스 |
|---|---|---|
| **검색엔진 최적화 기초** (8) | `seo-basic-intro` 최적화의 목적 · `seo-basic-create` 웹 사이트를 만들 때 · `seo-basic-robots` robots.txt · `seo-basic-redirect` 웹 페이지의 이동 · `seo-basic-migration` 웹 사이트 이전 · `seo-basic-close` 운영을 그만둘 때 · `seo-basic-firewall` 검색로봇 확인 방법 · `seo-basic-http` HTTP 규약 | 검색엔진 최적화 기초.txt |
| **검색엔진 최적화 고급** (5) | `seo-advanced-javascript` · `seo-advanced-url` · `seo-advanced-indexing` · `seo-help` SEO 기본 가이드 · `resource-and-link` | 검색엔진 최적화 고급.txt |
| **콘텐츠 가이드라인** (2) | `content-abusing` 스팸사례 · `content-basic` 작성시 권장 사항 | 콘텐츠 가이드라인.txt |
| **HTML 마크업** (4) | `markup-structure` 선호 URL·로봇 메타 · `markup-content` 콘텐츠 마크업 · `markup-mobile` · `markup-favicon` | HTML 마크업.txt |
| **웹사이트 검색연동** (2) | `request-crawl` 수집요청·검색제외 · `request-feed` RSS·사이트맵 | 웹사이트 검색연동.txt |
| **웹사이트 검증** (2) | `diagnose-site` 사이트 간단 체크 · `url-inspection` URL 검사 (**본문 없음**) | 웹사이트 검증.txt |
| **SEO 리포트** (5) | `report-expose-ctr` · `report-diagnosis` · `report-seo` · `report-crawl-refine` · `site-summary` | SEO 리포트.txt |
| **구조화된 데이터 마크업** (14) | `structured-data-intro` · `-channel` · `-job` · `-address` · `-breadcrumb` · `-carousel` · `-rating` · `-recipe` · `-review` · `-restaurant` · `-tvseries` · `-movie` · `-software` · `-video` | 구조화된 데이터 마크업.txt |
| **제휴 API** (1) | `crawl-request-api` 수집요청 API | 제휴 API.txt |
| **IndexNow** (4) | `indexnow-about` · `-api-key` · `-request` · `-faq` | INDEXNOW.txt |
| **네이버 검색 교육 자료** (2 + PDF 2) | `education-basic` · `education-wmt-advanced` | 네이버 검색 교육 자료.txt, PDF 2개 |
| **FAQ** (6) | `faq-serpedit` · `faq-serpmissing` · `faq-serpremove` · `faq-sublink` · `faq-start-register` · `faq-branding` | FAQ.txt |

## 3. 소스 간 불일치 (정답을 정하지 않고 그대로 기록)

| 주제 | 소스 A | 소스 B | 소스 C |
|---|---|---|---|
| **제목·설명 길이** | `markup-content`: "별도의 글자 수 제한은 없지만 검색 결과에서 표현이 가능한 수준으로" | `diagnose-site`(사이트 간단 체크): "제목은 **40자**, 설명은 **80자** 이내 권장" | 교육 PDF(웹 검색 기초 36p): "제목 **15자**, 설명 **45자** 이내 권장" |
| **description 분량** | `markup-content`: "1-2개의 문장으로 구성된 짧은 단락" | `seo-help`: "여러 문장으로 구성" | — |
| **JS 지연 이동** | `redirect`·`indexing`: HTTP redirect 권장, JS 이동은 자제 | `seo-basic-intro`: "HTTP redirect **또는 meta refresh**" 권장 | `faq-start-register`: 소유확인에서 meta refresh·JS 이동은 미지원 |
| **교육 PDF의 링크** | PDF 안의 `webmastertool.naver.com/guide/*.naver` 주소는 구버전 | 현행은 `searchadvisor.naver.com/guide/*` | — |

[해석] 길이 기준은 문서마다 달라 **확정 수치로 쓰지 않는다.** 현행 가이드 본문(`markup-content`)은 수치 제한이 없다고 명시한다.

## 4. 우선순위 (현황 대조 결과 반영)

> 근거는 `01-site-status.md`. 2026-10-21 기준 `https://withustools.com` 실측.
> **대부분의 항목이 이미 적용되어 있어 코드 작업 대상은 적다.**

### A. 재작업 불필요 (이미 가이드대로 적용됨)
robots.txt · sitemap.xml · 소유확인 메타 · 로봇 메타 · title/description 고유성 · canonical · h1 · img alt · OG 태그 · viewport · http→https 301 · www→apex 301 · 404 상태코드 · 정적 HTML 본문 포함 · `<a href>` 실제 링크 · fragment URL 미사용 · 구조화 데이터(JSON-LD) 존재.

### B. 확인 필요 — 사이트 로그인 정보 (코드 변경 없음)
| 순위 | 항목 | 이유 | 근거 |
|---|---|---|---|
| 1 | 서치어드바이저 **사이트 진단**(수집제한·색인제외·SEO) | 색인 수·제외 사유는 로그인해야 보임. 실제 문제가 있는지 이것으로 결정 | `report-diagnosis` |
| 2 | **수집 현황**·**사이트 상태** | Cloudflare 봇 차단 여부는 외부 curl로 판단 불가(로봇 IP 기준) | `report-crawl-refine`, `site-summary`, `seo-basic-firewall` |
| 3 | **사이트 간단 체크** 실행 | 길이(40/80) 항목 등을 네이버가 어떻게 판정하는지 직접 확인 | `diagnose-site` |
| 4 | 사이트맵 제출 상태 | robots.txt에 `Sitemap`이 있으면 "정상"으로 표기되나, 제출 여부는 로그인으로만 확인 | `site-summary` |

### C. 가이드 문구와 차이가 있는 항목 (영향 불확실 · 소규모)
| 순위 | 항목 | 가이드 | 관찰 | 비고 |
|---|---|---|---|---|
| 1 | 파비콘 `<link>` | 절대 경로 사용 / 동일 rel은 1개만 | 상대 경로, `rel="icon"` 3개 | `shortcut icon`이 1개 있고 가이드상 우선순위 1위 → **영향 불확실** |
| 2 | BreadcrumbList 첫 항목 이름 | `name`에 "top", "홈" 등 일반 단어 말고 페이지를 설명하는 텍스트 | `"홈"` 사용 | 구조화 데이터는 "노출을 보장하지 않음" |
| 3 | og:image | 반복 로고 이미지는 검색엔진이 사용하지 않는 경우가 있음 | 138개 페이지 전부 동일 로고(180×180, 35,762B) | 규격(150px↑·5,000B↑·3:1↓)은 충족 |

### D. 미적용이지만 선택 사항 (필요 시에만)
- 사이트 연관채널(`sameAs`) — 홈 HTML에 없음. **보유 채널이 있을 때만** 의미. 가이드: "노출을 보장하지 않음"
- IndexNow — key 파일 없음. 가이드: 수집요청·사이트맵을 "대체하지 않음"
- RSS — 없음. 가이드: "RSS보다는 사이트맵을 적극 활용하는 것을 권장"
- sitemap `lastmod` — 가이드 글에만 있음. 가이드상 선택 요소

### E. 해당 없음 / 제외
제휴 API(제휴 필요) · 채용정보·레시피·식당·영화·TV·리뷰·평점·주소(해당 콘텐츠 없음) · 동영상 검색 · 사이트 이전·종료(계획 없음, 사용자 확인 필요) · 서브링크·브랜드 FAQ(자동 생성, 요청 불가)

### F. 코드로 판단 불가 (사람이 판단)
`content-basic`, `content-abusing`의 콘텐츠 품질 항목(전문성·경험·유사 템플릿 대량 발행 등)

## 5. KB 저장 위치와 구조

```
docs/naver-searchadvisor-kb/
├─ 00-index.md        ← 이 파일: 목차·원칙·우선순위
├─ 01-site-status.md  ← 가이드 ↔ 현재 사이트 대조 (측정 방법·일자 포함)
└─ source/            ← 원문 사본 (txt/png/pdf)
```

- 이후 코드 작업이 생기면 **그 주제의 규칙 조각만** `02-*.md`로 추가한다(가이드 slug 필수).
- 작업 대상이 없는 주제의 조각은 만들지 않는다.

## 6. 열린 항목 (사용자 확인 필요)

- [ ] B의 1~4번 결과 (서치어드바이저 로그인 화면)
- [ ] 외부 채널(블로그·SNS 등) 보유 여부 → D의 `sameAs` 필요성
- [ ] `source/` 폴더를 저장소에 커밋할지 여부 (가이드 원문 사본·PDF 포함)
