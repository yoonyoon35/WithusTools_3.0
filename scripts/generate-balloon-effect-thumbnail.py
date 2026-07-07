"""Generate blog thumbnail matching 전월세 신고제 완전 정리.png (1536x1024)."""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "부동산 풍선효과 완전 정리.png"

W, H = 1536, 1024

BG = (1, 20, 48)
BADGE_BG = (129, 225, 179)
BADGE_TEXT = (1, 20, 48)
TITLE_WHITE = (255, 255, 255)
TITLE_CYAN = (105, 195, 253)
SUB_TEXT = (197, 202, 212)
BOX_BORDER = (27, 78, 110)
BOX_FILL = (3, 18, 37)
FRAME_CYAN = (105, 195, 253)
GREEN = (130, 225, 179)
YELLOW = (254, 218, 82)
RED = (252, 85, 88)
HEADER_LABEL = (1, 20, 48)

MARGIN_X = 60
PANEL_LEFT = 60
PANEL_RIGHT = 1476
PANEL_HEIGHT = 343
COL_BOUNDS = [(70, 499), (520, 989), (1011, 1469)]
DIVIDER_X = [538, 1000]
HEADER_HEIGHT = 82
BORDER_W = 4
DIVIDER_Y = 886


def load_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        r"C:\Windows\Fonts\malgunbd.ttf" if bold else r"C:\Windows\Fonts\malgun.ttf",
        r"C:\Windows\Fonts\NanumGothicBold.ttf" if bold else r"C:\Windows\Fonts\NanumGothic.ttf",
    ]
    for path in candidates:
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def text_size(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.ImageFont) -> tuple[int, int]:
    bbox = draw.textbbox((0, 0), text, font=font)
    return bbox[2] - bbox[0], bbox[3] - bbox[1]


def fit_font_size(
    draw: ImageDraw.ImageDraw,
    text: str,
    max_w: int,
    start: int,
    min_size: int,
    bold: bool = True,
) -> ImageFont.ImageFont:
    size = start
    while size >= min_size:
        font = load_font(size, bold=bold)
        w, _ = text_size(draw, text, font)
        if w <= max_w:
            return font
        size -= 2
    return load_font(min_size, bold=bold)


def draw_panel_frame(draw: ImageDraw.ImageDraw, panel_top: int, panel_bottom: int) -> None:
    outer = (PANEL_LEFT, panel_top, PANEL_RIGHT, panel_bottom)
    draw.rounded_rectangle(outer, radius=20, outline=FRAME_CYAN, width=BORDER_W)
    inner = (
        PANEL_LEFT + BORDER_W,
        panel_top + BORDER_W,
        PANEL_RIGHT - BORDER_W,
        panel_bottom - BORDER_W,
    )
    draw.rounded_rectangle(inner, radius=16, fill=BOX_FILL, outline=BOX_BORDER, width=3)

    for x in DIVIDER_X:
        draw.line((x, panel_top + 14, x, panel_bottom - 14), fill=FRAME_CYAN, width=3)


def draw_header_bar(
    draw: ImageDraw.ImageDraw,
    x0: int,
    x1: int,
    y0: int,
    accent: tuple[int, int, int],
    label: str,
    font_label: ImageFont.ImageFont,
) -> int:
    bar = (x0 + 6, y0, x1 - 6, y0 + HEADER_HEIGHT)
    draw.rounded_rectangle((bar[0], bar[1], bar[2], bar[1] + 18), radius=10, fill=accent)
    draw.rectangle((bar[0], bar[1] + 10, bar[2], bar[3]), fill=accent)

    _, lh = text_size(draw, label, font_label)
    tx = x0 + 22
    ty = y0 + (HEADER_HEIGHT - lh) // 2 - 2
    draw.text((tx, ty), label, HEADER_LABEL, font=font_label)
    return bar[3]


def draw_main_lines(
    draw: ImageDraw.ImageDraw,
    x0: int,
    x1: int,
    y0: int,
    accent: tuple[int, int, int],
    lines: list[str],
    start_size: int = 80,
) -> None:
    inner_w = x1 - x0 - 44
    y = y0
    for line in lines:
        font = fit_font_size(draw, line, inner_w, start=start_size, min_size=48, bold=True)
        _, lh = text_size(draw, line, font)
        draw.text((x0 + 22, y), line, accent, font=font)
        y += lh + 8


def draw_boxes(draw: ImageDraw.ImageDraw, panel_top: int, panel_bottom: int) -> None:
    font_header = load_font(44, bold=True)
    font_sub = load_font(36)

    boxes = [
        {
            "bounds": COL_BOUNDS[0],
            "accent": GREEN,
            "label": "풍선효과란",
            "main": ["규제 피한 수요 이동"],
            "sub": "인접 비규제지역",
        },
        {
            "bounds": COL_BOUNDS[1],
            "accent": YELLOW,
            "label": "발생 조건",
            "main": ["LTV·취득세 규제 차이"],
            "sub": "7억 기준 2.1억 격차",
        },
        {
            "bounds": COL_BOUNDS[2],
            "accent": RED,
            "label": "2026년 흐름",
            "main": ["인접지 관심 이동"],
            "sub": "추가 규제 주의",
        },
    ]

    for box in boxes:
        x0, x1 = box["bounds"]
        header_top = panel_top + 20
        header_bottom = draw_header_bar(
            draw, x0, x1, header_top, box["accent"], box["label"], font_header
        )
        draw_main_lines(draw, x0, x1, header_bottom + 22, box["accent"], box["main"])
        _, sh = text_size(draw, box["sub"], font_sub)
        draw.text((x0 + 22, panel_bottom - sh - 26), box["sub"], SUB_TEXT, font=font_sub)


def main() -> None:
    img = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(img)

    font_badge = load_font(46, bold=True)
    font_title1 = load_font(124, bold=True)
    font_title2 = load_font(88, bold=True)
    font_kw = load_font(42)
    font_footer = load_font(44)

    badge_text = "부동산 핵심 용어"
    bw, bh = text_size(draw, badge_text, font_badge)
    badge_pad_x, badge_pad_y = 34, 18
    badge_box = (MARGIN_X, 36, MARGIN_X + bw + badge_pad_x * 2, 36 + bh + badge_pad_y * 2)
    draw.rounded_rectangle(badge_box, radius=22, fill=BADGE_BG)
    draw.text(
        (badge_box[0] + badge_pad_x, badge_box[1] + badge_pad_y - 2),
        badge_text,
        BADGE_TEXT,
        font=font_badge,
    )

    # 레퍼런스 순서: 흰 제목 → cyan 부제 → 키워드 → 패널 (겹침 없음)
    y = 139
    draw.text((MARGIN_X, y), "부동산 풍선효과", TITLE_WHITE, font=font_title1)
    _, title_h = text_size(draw, "부동산 풍선효과", font_title1)

    y += title_h + 10
    draw.text((MARGIN_X, y), "2026년 완전 정리", TITLE_CYAN, font=font_title2)
    _, subtitle_h = text_size(draw, "2026년 완전 정리", font_title2)

    y += subtitle_h + 14
    keywords = "개념 · 발생조건 · 인접지 사례 · LTV·취득세 · 매수 전 확인"
    draw.text((MARGIN_X, y), keywords, TITLE_WHITE, font=font_kw)
    _, kw_h = text_size(draw, keywords, font_kw)

    panel_top = y + kw_h + 28
    panel_bottom = panel_top + PANEL_HEIGHT

    draw_panel_frame(draw, panel_top, panel_bottom)
    draw_boxes(draw, panel_top, panel_bottom)

    draw.line((MARGIN_X, DIVIDER_Y, W - MARGIN_X, DIVIDER_Y), fill=FRAME_CYAN, width=BORDER_W)
    footer = "남양주 · 병점 · 권선 · 평택 · 호가 vs 실거래 · 실수요·투자 구분"
    draw.text((MARGIN_X, 928), footer, TITLE_CYAN, font=font_footer)

    img.save(OUT, "PNG", optimize=True)
    print(f"Saved: {OUT} ({W}x{H}) panel_top={panel_top}")


if __name__ == "__main__":
    main()
