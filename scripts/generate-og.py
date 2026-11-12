#!/usr/bin/env python3
"""1200x630 Open Graph 카드 생성. 밝은 톤·사이트와 같은 Noto Sans KR."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "og"
FONT_PATH = Path(r"C:\Windows\Fonts\NotoSansKR-VF.ttf")

W, H = 1200, 630
PAD_X = 96
PAD_Y = 80

BG = "#FFFFFF"
INK = "#111827"
MUTED = "#6B7280"
FAINT = "#9CA3AF"
LINE = "#E5E7EB"
BRAND = "#2563EB"


def font(size: int, weight: int) -> ImageFont.FreeTypeFont:
    f = ImageFont.truetype(str(FONT_PATH), size)
    f.set_variation_by_axes([weight])
    return f


def wrap(draw: ImageDraw.ImageDraw, text: str, fnt: ImageFont.FreeTypeFont, max_width: int) -> list[str]:
    if "\n" in text:
        return [line for line in text.split("\n") if line]
    words = text.split(" ")
    lines: list[str] = []
    current = ""
    for word in words:
        trial = word if not current else f"{current} {word}"
        if draw.textlength(trial, font=fnt) <= max_width:
            current = trial
            continue
        if current:
            lines.append(current)
        # 긴 한국어 한 덩어리는 글자 단위로 자른다
        if draw.textlength(word, font=fnt) <= max_width:
            current = word
            continue
        buf = ""
        for ch in word:
            if draw.textlength(buf + ch, font=fnt) <= max_width:
                buf += ch
            else:
                if buf:
                    lines.append(buf)
                buf = ch
        current = buf
    if current:
        lines.append(current)
    return lines or [text]


def draw_card(title: str, subtitle: str) -> Image.Image:
    img = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(img)

    brand_font = font(28, 600)
    title_font = font(56, 700)
    sub_font = font(26, 500)
    domain_font = font(22, 500)

    draw.text((PAD_X, PAD_Y), "WithusTools", font=brand_font, fill=BRAND)

    underline_y = PAD_Y + 44
    draw.rectangle([PAD_X, underline_y, PAD_X + 36, underline_y + 3], fill=BRAND)

    title_top = 168
    max_title_width = W - PAD_X * 2
    title_lines = wrap(draw, title, title_font, max_title_width)
    y = title_top
    for line in title_lines[:2]:
        draw.text((PAD_X, y), line, font=title_font, fill=INK)
        y += 72

    draw.text((PAD_X, y + 12), subtitle, font=sub_font, fill=MUTED)

    rule_y = H - 96
    draw.line([(PAD_X, rule_y), (W - PAD_X, rule_y)], fill=LINE, width=1)
    draw.text((PAD_X, rule_y + 24), "withustools.com", font=domain_font, fill=FAINT)

    return img


CARDS: list[dict[str, str]] = [
    {
        "file": "default.png",
        "title": "대출·부동산·세금\n계산기",
        "subtitle": "계산과 기준을 한곳에서",
    },
    {"file": "loan-calculator.png", "title": "대출 이자 계산기", "subtitle": "체증식 · 거치식 · 원리금균등"},
    {"file": "dsr-calculator.png", "title": "DSR·주담대 한도 계산기", "subtitle": "연소득별 대출 한도"},
    {"file": "dti-calculator.png", "title": "DTI 계산기", "subtitle": "주담대 DTI 한도 확인"},
    {"file": "ltv-calculator.png", "title": "LTV 계산기", "subtitle": "지역 · 생애최초 대출 가능액"},
    {"file": "acquisition-tax-calculator.png", "title": "취득세 계산기", "subtitle": "주택 · 분양 · 상속 · 증여"},
    {
        "file": "farmland-acquisition-tax-calculator.png",
        "title": "농지 취득세 계산기",
        "subtitle": "매매 · 상속 · 증여 · 자경 1.5%",
    },
    {
        "file": "first-home-acquisition-tax-calculator.png",
        "title": "생애최초 취득세 감면 계산기",
        "subtitle": "200만 · 300만 원 한도",
    },
    {
        "file": "officetel-acquisition-tax-calculator.png",
        "title": "오피스텔 취득세 계산기",
        "subtitle": "매매 4.6% · 증여 · 상속",
    },
    {
        "file": "inherited-housing-acquisition-tax-calculator.png",
        "title": "상속 주택 취득세 계산기",
        "subtitle": "2.8% · 시가표준액",
    },
    {
        "file": "emergency-loan-interest-calculator.png",
        "title": "비상금대출 이자 계산기",
        "subtitle": "마이너스통장 일할 · 카카오 · 토스",
    },
    {"file": "brokerage-fee-calculator.png", "title": "중개수수료 계산기", "subtitle": "매매 · 전세 · 월세 · 상가"},
    {
        "file": "jeonse-brokerage-fee-calculator.png",
        "title": "전세 중개수수료 계산기",
        "subtitle": "보증금별 상한요율",
    },
    {
        "file": "wolse-brokerage-fee-calculator.png",
        "title": "월세 중개수수료 계산기",
        "subtitle": "보증금 · 월세 환산 상한",
    },
    {"file": "prepayment-fee-calculator.png", "title": "중도상환 수수료 계산기", "subtitle": "디딤돌 · 보금자리론 · 시중은행"},
    {"file": "national-housing-bond-calculator.png", "title": "국민주택채권 계산기", "subtitle": "매입금액 · 즉시매도 실부담"},
    {"file": "comprehensive-property-tax-calculator.png", "title": "종합부동산세 계산기", "subtitle": "1주택 · 다주택 보유세"},
    {"file": "capital-gains-tax-calculator.png", "title": "양도소득세 계산기", "subtitle": "1주택 비과세 · 다주택 중과"},
    {
        "file": "presale-capital-gains-tax-calculator.png",
        "title": "분양권 양도세 계산기",
        "subtitle": "60% · 70% 전용세율",
    },
    {"file": "comprehensive-income-tax-calculator.png", "title": "종합소득세 계산기", "subtitle": "경비율 · 중간예납"},
    {"file": "inheritance-tax-calculator.png", "title": "상속세 계산기", "subtitle": "일괄공제 · 배우자공제 · 금융재산공제"},
    {"file": "guide.png", "title": "대출·금융 가이드", "subtitle": "계산과 기준을 한곳에서"},
    {"file": "guide-dsr-limit.png", "title": "DSR·대출 한도", "subtitle": "스트레스 DSR · LTV · DTI"},
    {"file": "guide-regulated-area.png", "title": "규제지역·토지거래허가", "subtitle": "대출 · 취득세 · 실거주"},
    {"file": "guide-repayment-rate.png", "title": "상환·금리", "subtitle": "원리금균등 · 거치 · 중도상환"},
    {"file": "guide-housing-loan.png", "title": "주택·전세 대출", "subtitle": "주담대 · 전세 · 청약"},
    {"file": "guide-auction.png", "title": "부동산 경매", "subtitle": "절차 · 비용 · 대출"},
    {"file": "guide-acquisition-tax.png", "title": "취득세", "subtitle": "세율 · 감면 · 중과"},
    {"file": "guide-capital-gains-tax.png", "title": "양도소득세", "subtitle": "비과세 · 장특공 · 중과"},
    {"file": "guide-holding-tax.png", "title": "보유세·종부세", "subtitle": "재산세 · 종부세 · 공시가격"},
    {"file": "guide-inheritance-tax.png", "title": "상속세", "subtitle": "공제 · 세율 · 신고"},
    {"file": "guide-comprehensive-income-tax.png", "title": "종합소득세", "subtitle": "경비율 · 중간예납"},
    {"file": "guide-brokerage.png", "title": "중개수수료·거래", "subtitle": "매매 · 전세 · 월세"},
]


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for card in CARDS:
        img = draw_card(card["title"], card["subtitle"])
        dest = OUT_DIR / card["file"]
        img.save(dest, "PNG", optimize=True)
        print(f"{dest.name} {dest.stat().st_size} {img.size}")


if __name__ == "__main__":
    main()
