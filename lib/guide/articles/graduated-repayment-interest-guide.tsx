import Link from "next/link";

export const graduatedRepaymentInterestGuideMeta = {
  slug: "graduated-repayment-interest-guide",
  title: "체증식 대출이란? 월 상환액이 늘어나는 이자 계산 방법",
  description:
    "체증식은 처음엔 월 상환액이 적다가 해마다 늘어납니다. 보금자리론 설명서 예시(1억 원·연 3%·10년)로 총 이자가 원리금균등보다 약 450만 원 더 나오는 이유와 계산기 입력법을 안내합니다.",
  updated: "2026년 10월 30일",
} as const;

const linkClass = "text-primary underline-offset-4 hover:underline";
const captionClass =
  "border-b border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium text-foreground";
const thClass = "border-border border-b px-3 py-2.5 font-semibold";
const rowThClass = "border-border border-b px-3 py-2.5 font-medium";
const tdClass = "border-border border-b px-3 py-2.5";
const tdNumClass = "border-border border-b px-3 py-2.5 text-right tabular-nums";

export function GraduatedRepaymentInterestGuideBody() {
  return (
    <>
      <section className="space-y-3" aria-labelledby="guide-grd-intro">
        <h2 id="guide-grd-intro" className="text-foreground text-xl font-semibold tracking-tight">
          2026년 10월 30일 기준
        </h2>
        <p>
          체증식 분할상환은 <strong>처음에는 월 상환액을 낮게 시작하고, 시간이 지날수록 일정 간격으로 늘려 가는 방식</strong>
          입니다. 거치기간처럼 이자만 내는 구간이 아니라 첫 달부터 원금도 갚지만, 그 몫이 아주 작아서 월 부담이 가벼워 보이는 구조입니다.
        </p>
        <p>
          월 상환액이 해마다 달라지니 「이자를 어떻게 계산하나」「결국 더 내는 건가」가 궁금해지기 쉽습니다. 이 글은 한국주택금융공사
          보금자리론 설명서의 공식 예시로 <strong>월 상환액이 늘어나는 원리와 총 이자 차이</strong>를 보여 드리고,{" "}
          <Link href="/loan-calculator?type=graduated#calculator" className={linkClass}>
            대출 이자 계산기
          </Link>
          의 체증식 입력법과 한계를 함께 설명합니다. 거치기간과의 차이는{" "}
          <Link href="/guide/grace-period-explained" className={linkClass}>
            거치기간 가이드
          </Link>
          에서 따로 다룹니다.
        </p>
      </section>

      <nav className="bg-muted/30 space-y-2 rounded-lg border border-border p-4 text-sm" aria-label="목차">
        <p className="text-foreground font-medium">목차</p>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          <li>
            <a href="#guide-grd-concept" className={linkClass}>
              원리금균등·원금균등과 무엇이 다른가
            </a>
          </li>
          <li>
            <a href="#guide-grd-why" className={linkClass}>
              월 상환액이 늘어나는 이유와 총 이자
            </a>
          </li>
          <li>
            <a href="#guide-grd-example" className={linkClass}>
              공식 예시: 1억 원·연 3%·10년
            </a>
          </li>
          <li>
            <a href="#guide-grd-when" className={linkClass}>
              어떤 경우에 맞고, 어떤 경우에 불리한가
            </a>
          </li>
          <li>
            <a href="#guide-grd-hf" className={linkClass}>
              보금자리론 체증식 조건
            </a>
          </li>
          <li>
            <a href="#guide-grd-calculator" className={linkClass}>
              계산기에서 체증식 입력하는 법
            </a>
          </li>
          <li>
            <a href="#guide-grd-dsr" className={linkClass}>
              DSR·DTI에서는 어떻게 보나
            </a>
          </li>
          <li>
            <a href="#guide-grd-check" className={linkClass}>
              대출 상담 때 확인할 것
            </a>
          </li>
        </ul>
      </nav>

      <section className="space-y-4" aria-labelledby="guide-grd-concept">
        <h2 id="guide-grd-concept" className="text-foreground text-xl font-semibold tracking-tight">
          원리금균등·원금균등과 무엇이 다른가
        </h2>
        <p>
          세 방식 모두 대출 기간 안에 원금을 전부 갚는 분할상환입니다. 차이는 <strong>매달 내는 돈의 모양</strong>입니다. 한국주택금융공사는
          체증식을 「매월 상환액이 일정 금액씩 증가하는 방식」으로 설명합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className={captionClass}>상환 방식별 월 상환액 흐름</caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className={thClass}>
                  방식
                </th>
                <th scope="col" className={thClass}>
                  월 상환액 흐름
                </th>
                <th scope="col" className={thClass}>
                  초기 부담
                </th>
                <th scope="col" className={thClass}>
                  총 이자
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className={rowThClass}>
                  원리금균등
                </th>
                <td className={tdClass}>처음부터 끝까지 같음</td>
                <td className={tdClass}>중간</td>
                <td className={tdClass}>중간</td>
              </tr>
              <tr>
                <th scope="row" className={rowThClass}>
                  원금균등
                </th>
                <td className={tdClass}>첫 달이 가장 크고 점점 줄어듦</td>
                <td className={tdClass}>가장 큼</td>
                <td className={tdClass}>가장 적음</td>
              </tr>
              <tr>
                <th scope="row" className={rowThClass}>
                  체증식
                </th>
                <td className={tdClass}>첫 달이 가장 작고 점점 늘어남</td>
                <td className={tdClass}>가장 작음</td>
                <td className={tdClass}>가장 많음</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          원리금균등과 원금균등의 비교는{" "}
          <Link href="/guide/equal-payment-vs-equal-principal" className={linkClass}>
            원리금균등 vs 원금균등 가이드
          </Link>
          에 정리해 두었습니다. 체증식은 이 둘의 반대쪽 끝, 즉 초기 부담을 가장 낮추는 대신 나중으로 넘기는 방식입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-grd-why">
        <h2 id="guide-grd-why" className="text-foreground text-xl font-semibold tracking-tight">
          월 상환액이 늘어나는 이유와 총 이자
        </h2>
        <p>
          대출 이자는 <strong>남아 있는 원금(잔액)에 이율을 곱해</strong> 계산합니다. 월 상환액에서 그달 이자를 뺀 나머지가 원금 상환분이므로,
          초기 상환액을 이자보다 조금만 크게 잡으면 원금이 거의 줄지 않습니다.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>초기:</strong> 상환액 대부분이 이자라서 잔액이 천천히 줄어듭니다.
          </li>
          <li>
            <strong>중반 이후:</strong> 상환액이 커지면서 원금 상환분이 눈에 띄게 늘고 잔액이 빨라지게 줄어듭니다.
          </li>
          <li>
            <strong>후반:</strong> 모자랐던 원금을 짧은 기간에 몰아 갚아야 해서 상환액이 가장 큽니다.
          </li>
        </ul>
        <p>
          그 결과 높은 잔액에 이자가 붙는 기간이 길어져 <strong>총 이자는 세 방식 중 가장 많아집니다.</strong> 월 부담을 낮춘 값을 총 이자로
          치르는 셈입니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-grd-example">
        <h2 id="guide-grd-example" className="text-foreground text-xl font-semibold tracking-tight">
          공식 예시: 1억 원·연 3%·10년
        </h2>
        <p>
          한국주택금융공사 보금자리론 상품설명서에는 대출금 1억 원, 연 3%, 만기 10년을 기준으로 한 상환 방법별 예시가 실려 있습니다. 체증식
          연간 상환액은 매년 약 181만 원씩 늘어납니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-sm">
            <caption className={captionClass}>
              1억 원·연 3%·10년 예시(단위: 만 원, 한국주택금융공사 보금자리론 설명서 기준)
            </caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className={`${thClass} text-left`}>
                  연차
                </th>
                <th scope="col" className={`${thClass} text-right`}>
                  원리금균등 연 상환액
                </th>
                <th scope="col" className={`${thClass} text-right`}>
                  체증식 연 상환액
                </th>
                <th scope="col" className={`${thClass} text-right`}>
                  체증식 연말 잔액
                </th>
              </tr>
            </thead>
            <tbody>
              {graduatedExampleRows.map((row) => (
                <tr key={row.year}>
                  <th scope="row" className={`${rowThClass} text-left`}>
                    {row.year}년차
                  </th>
                  <td className={tdNumClass}>1,159</td>
                  <td className={tdNumClass}>{row.payment}</td>
                  <td className={tdNumClass}>{row.balance}</td>
                </tr>
              ))}
              <tr className="bg-muted/20">
                <th scope="row" className={`${rowThClass} text-left`}>
                  총 이자
                </th>
                <td className={`${tdNumClass} font-semibold`}>1,587</td>
                <td className={`${tdNumClass} font-semibold`}>2,039</td>
                <td className={tdNumClass}>-</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            월로 환산하면 원리금균등은 매달 약 97만 원, 체증식은 첫 해 약 32만 원에서 마지막 해 약 168만 원까지 오릅니다.
          </li>
          <li>
            체증식 총 이자는 원리금균등보다 약 452만 원(약 28%) 많습니다. 같은 설명서에서 원금균등의 총 이자는 약 1,512만 원입니다.
          </li>
          <li>
            첫 해에 갚은 389만 원 중 이자만 약 299만 원이라, 원금은 연말까지 약 90만 원밖에 줄지 않습니다.
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="guide-grd-when">
        <h2 id="guide-grd-when" className="text-foreground text-xl font-semibold tracking-tight">
          어떤 경우에 맞고, 어떤 경우에 불리한가
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className={captionClass}>체증식 적합·주의 상황</caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className={thClass}>
                  구분
                </th>
                <th scope="col" className={thClass}>
                  상황
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className={rowThClass}>
                  맞는 편
                </th>
                <td className={tdClass}>
                  지금은 소득이 낮지만 몇 년 안에 오를 것이 확실한 경우(사회초년생·신혼 초 등), 초기 몇 년의 현금 흐름 여유가 더 중요한 경우
                </td>
              </tr>
              <tr>
                <th scope="row" className={rowThClass}>
                  불리한 편
                </th>
                <td className={tdClass}>
                  소득이 늘지 않거나 은퇴가 가까운 경우, 총 이자를 최소화하려는 경우, 후반부 상환액이 감당 가능한지 불확실한 경우
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          체증식은 이자 절약 상품이 아니라 <strong>초기 부담을 나중으로 미루는 상품</strong>입니다. 마지막 해 월 상환액이 소득의 몇 %인지 미리
          따져 보고, 증가분을 감당할 수 있을 때만 선택하는 것이 안전합니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-grd-hf">
        <h2 id="guide-grd-hf" className="text-foreground text-xl font-semibold tracking-tight">
          보금자리론 체증식 조건
        </h2>
        <p>
          체증식은 모든 금융상품에 있는 것이 아닙니다. 한국주택금융공사 보금자리론은 아래 조건에서만 체증식 분할상환을 허용합니다. 시중은행
          주담대의 체증식 취급 여부와 증가 방식은 은행·상품마다 달라 개별 확인이 필요합니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className={captionClass}>보금자리론 체증식 분할상환 조건(2026년 10월 30일 확인)</caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className={thClass}>
                  항목
                </th>
                <th scope="col" className={thClass}>
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className={rowThClass}>
                  대상
                </th>
                <td className={tdClass}>만 40세 미만 채무자(설명서 표기 만 39세 이하) 또는 공사가 사전심사한 경우</td>
              </tr>
              <tr>
                <th scope="row" className={rowThClass}>
                  만기
                </th>
                <td className={tdClass}>대출 만기 50년은 체증식 적용 불가</td>
              </tr>
              <tr>
                <th scope="row" className={rowThClass}>
                  적용 구간
                </th>
                <td className={tdClass}>원금 상환이 시작된 뒤 고정금리 기간 중에만 적용</td>
              </tr>
              <tr>
                <th scope="row" className={rowThClass}>
                  변경
                </th>
                <td className={tdClass}>대출 실행 후에는 상환방식 변경 불가</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          실행 후 상환 방식을 바꿀 수 없으므로, 신청 전에 공사 홈페이지의 월별 상환 원리금 계산기에서 체증식 상환표를 먼저 조회해 보세요.
          조건과 한도는 수시로 바뀔 수 있어{" "}
          <a href="https://www.hf.go.kr" className={linkClass} target="_blank" rel="noopener noreferrer">
            한국주택금융공사
          </a>{" "}
          공고를 기준으로 확인하세요. 상품 비교는{" "}
          <Link href="/guide/bogeumjari-vs-didimdol" className={linkClass}>
            보금자리론 vs 디딤돌 가이드
          </Link>
          를 참고하세요.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-grd-calculator">
        <h2 id="guide-grd-calculator" className="text-foreground text-xl font-semibold tracking-tight">
          계산기에서 체증식 입력하는 법
        </h2>
        <ol className="list-decimal space-y-1 pl-5">
          <li>
            <Link href="/loan-calculator?type=graduated#calculator" className={linkClass}>
              대출 이자 계산기
            </Link>
            에서 상환 방식을 <strong>체증식상환</strong>으로 선택합니다.
          </li>
          <li>대출 금액·연이율·대출 기간(필요하면 거치기간)을 입력합니다.</li>
          <li>
            체증 방식은 <strong>매월 정액 증가(보금자리론 방식)</strong>가 기본입니다. 상환 예정표에 나온 <strong>첫 달 상환액</strong>을
            입력하면 그 금액에서 시작해 매월 같은 금액씩 늘어나 만기에 잔액이 0이 되도록 계산하고, 비우면 자동 추정값을 씁니다.
          </li>
          <li>
            월 상환액(상환 시작 첫 달 기준), 총 이자, 매월 증가액·마지막 달 상환액 안내, 회차별 상환 일정표를 확인합니다. 비교 모드를 켜면
            원리금균등과 나란히 볼 수 있습니다.
          </li>
        </ol>

        <h3 className="text-foreground text-lg font-semibold tracking-tight">공식 예시 그대로 재현해 보기</h3>
        <p>
          1억 원·연 3%·10년에 첫 달 상환액 <strong>254,788원</strong>을 넣으면 매월 약 12,579원씩 늘어나 마지막 달 약 175만 원, 총 이자 약
          2,039만 원이 나옵니다. 보금자리론 설명서 예시와 사실상 같은 값이고(반올림 차이 1만 원 이내), 연도별 원금·이자도 일정표에서 대조해 볼 수 있습니다. 첫 달 상환액을
          비워 두면 약 254,795원으로 추정해 거의 같은 결과가 나옵니다.
        </p>
        <p>
          실제 신청할 상품이 있다면 상환 예정표의 첫 달 상환액을 넣어 보세요. 한국주택금융공사 홈페이지의 월별 상환 원리금 계산기에서 체증식을
          조회해 첫 달 금액을 가져올 수 있습니다. 첫 달 상환액은 <strong>첫 달 이자 이상, 원리금균등 월 상환액 이하</strong>여야 하며, 범위를
          벗어나면 허용 금액을 안내합니다.
        </p>

        <div className="border-border bg-muted/30 space-y-2 rounded-lg border p-4 text-sm leading-relaxed">
          <p className="text-foreground font-medium">첫 달 상환액을 비웠을 때 주의할 점</p>
          <p>
            자동 추정값은 위 공식 예시 한 건(1억 원·연 3%·10년)의 비율을 다른 조건에 적용한 것입니다. 만기·금리가 다르면 실제 상품의 첫 달
            상환액과 달라질 수 있습니다. 예를 들어 3억 원·연 4%·30년을 비워 두면 첫 달 약 100만 원에서 시작해 마지막 달 약 207만 원, 총 이자 약
            2억 5,319만 원(원리금균등은 약 2억 1,561만 원)으로 계산됩니다. 이 값은 어림용이니, 신청 전에는 금융기관 상환표로 확인하세요.
          </p>
        </div>

        <h3 className="text-foreground text-lg font-semibold tracking-tight">매년 정률 증가로 계산하려면</h3>
        <p>
          은행·상품에 따라 상환액을 정률로 올리는 구조를 가정하고 싶다면 체증 방식을 <strong>매년 정률 증가(계단식)</strong>로 바꾸세요. 같은 해
          12개월은 월 상환액이 같고, 해마다 체증률(%)만큼 오릅니다. 체증률을 높일수록 첫 해 상환액은 낮아지고 총 이자는 늘어납니다.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[34rem] border-collapse text-sm">
            <caption className={captionClass}>정률 방식 체증률별 비교: 1억 원·연 3%·10년(이 사이트 계산기 기준, 단위: 만 원)</caption>
            <thead>
              <tr className="bg-muted/40">
                <th scope="col" className={`${thClass} text-left`}>
                  조건
                </th>
                <th scope="col" className={`${thClass} text-right`}>
                  첫 해 월 상환액
                </th>
                <th scope="col" className={`${thClass} text-right`}>
                  마지막 해 월 상환액
                </th>
                <th scope="col" className={`${thClass} text-right`}>
                  총 이자
                </th>
              </tr>
            </thead>
            <tbody>
              {graduatedRateRows.map((row) => (
                <tr key={row.label}>
                  <th scope="row" className={`${rowThClass} text-left`}>
                    {row.label}
                  </th>
                  <td className={tdNumClass}>{row.first}</td>
                  <td className={tdNumClass}>{row.last}</td>
                  <td className={tdNumClass}>{row.interest}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          정률 방식은 대출 기간이 길면 체증률을 낮게 잡아야 합니다. 3억 원·연 4%·30년에서는 약 2.8%를 넘기면 계산되지 않고, 입력 가능한 최대
          체증률을 안내합니다. 보금자리론 같은 정액 방식은 이런 제한 없이 첫 달 상환액만 범위 안이면 계산됩니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-grd-dsr">
        <h2 id="guide-grd-dsr" className="text-foreground text-xl font-semibold tracking-tight">
          DSR·DTI에서는 어떻게 보나
        </h2>
        <p>
          DSR·DTI는 연간 원리금 상환액을 소득으로 나눕니다. 체증식은 상환액이 해마다 달라지기 때문에 <strong>어느 해의 상환액을 기준으로
          삼느냐</strong>에 따라 한도가 달라질 수 있고, 이 기준은 금융기관·상품에 따라 다를 수 있습니다. 첫 해 상환액만 보고 「이 정도면 한도가
          나오겠다」고 단정하지 말고, 대출 상담 때 DSR 산정 방식을 직접 확인하세요.
        </p>
        <p>
          이 사이트의{" "}
          <Link href="/dsr-calculator" className={linkClass}>
            DSR 계산기
          </Link>
          와{" "}
          <Link href="/dti-calculator" className={linkClass}>
            DTI 계산기
          </Link>
          는 체증식을 직접 계산하지 않습니다. 체증식 대출은 상환 방식에서 「월 상환 직접」을 고르고 상환 예정표의 해당 시점 월 납입액을 넣어
          주세요. DSR 기본 개념은{" "}
          <Link href="/guide/dsr-calculation-method" className={linkClass}>
            DSR 계산 방법 가이드
          </Link>
          에서 볼 수 있습니다.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="guide-grd-check">
        <h2 id="guide-grd-check" className="text-foreground text-xl font-semibold tracking-tight">
          대출 상담 때 확인할 것
        </h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>상환액이 정액으로 늘어나는지, 정률로 늘어나는지, 증가 주기가 월·연 중 무엇인지</li>
          <li>첫 해와 마지막 해 월 상환액, 그리고 만기까지의 총 이자 예상액</li>
          <li>대출 실행 후 상환 방식을 바꿀 수 있는지, 중도상환수수료 조건</li>
          <li>금리가 변동되는 상품이라면 변동 시점마다 상환액이 어떻게 다시 계산되는지</li>
          <li>DSR·한도 산정에서 어느 시점의 상환액을 기준으로 보는지</li>
        </ul>
        <p className="text-muted-foreground text-sm">
          ※ 위 숫자 중 공식 예시는 한국주택금융공사 보금자리론 상품설명서 기준이며, 계산기 예시는 이 사이트의 체증식 모델 기준입니다. 실제
          조건은 대출 신청 시점의 상품설명서와 금융기관 안내를 따르세요.
        </p>
      </section>
    </>
  );
}

const graduatedExampleRows = [
  { year: 1, payment: "389", balance: "9,910" },
  { year: 2, payment: "570", balance: "9,634" },
  { year: 3, payment: "751", balance: "9,166" },
  { year: 4, payment: "932", balance: "8,500" },
  { year: 5, payment: "1,114", balance: "7,630" },
  { year: 6, payment: "1,294", balance: "6,550" },
  { year: 7, payment: "1,475", balance: "5,254" },
  { year: 8, payment: "1,657", balance: "3,735" },
  { year: 9, payment: "1,838", balance: "1,986" },
  { year: 10, payment: "2,019", balance: "0" },
] as const;

const graduatedRateRows = [
  { label: "원리금균등(체증 없음)", first: "약 96.6", last: "약 96.6", interest: "1,587" },
  { label: "체증률 5%", first: "약 77.7", last: "약 120.5", interest: "1,728" },
  { label: "체증률 8%", first: "약 67.9", last: "약 135.8", interest: "1,809" },
  { label: "체증률 10%", first: "약 62.0", last: "약 146.3", interest: "1,861" },
] as const;
