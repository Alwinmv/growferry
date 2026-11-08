#!/usr/bin/env python3
"""Creates favicon.ico, favicon-48.png, favicon-192.png, apple-touch-icon.png and og-image.png
from your square logo mark.

Setup:   pip install pillow
Usage:   python3 tools/make_icons.py logo-square.png
Input:   a square PNG of your logo mark (at least 512x512, transparent or solid background).
Output:  files are written next to your index.html (the folder you run this from).
"""
import sys
from PIL import Image

if len(sys.argv) != 2:
    sys.exit("Usage: python3 tools/make_icons.py logo-square.png")

src = Image.open(sys.argv[1]).convert("RGBA")
w, h = src.size
side = min(w, h)
src = src.crop(((w - side) // 2, (h - side) // 2, (w + side) // 2, (h + side) // 2))

def sized(n):
    return src.resize((n, n), Image.LANCZOS)

sized(48).save("favicon-48.png")
sized(192).save("favicon-192.png")
sized(180).save("apple-touch-icon.png")
sized(256).save("favicon.ico", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])

# 1200x630 social preview: logo centred on the site's dark background
bg = Image.new("RGBA", (1200, 630), (8, 9, 11, 255))
logo = sized(360)
bg.paste(logo, ((1200 - 360) // 2, (630 - 360) // 2), logo)
bg.convert("RGB").save("og-image.png")
print("Created: favicon.ico, favicon-48.png, favicon-192.png, apple-touch-icon.png, og-image.png")
