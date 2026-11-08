#!/usr/bin/env python3
"""Adds the SEO head block to YOUR index.html without touching anything else
(your base64 logos, content and scripts stay exactly as they are).

Usage:  python3 tools/patch_index.py path/to/index.html
A backup is saved as index.html.bak first.
"""
import re, sys, shutil, pathlib

if len(sys.argv) != 2:
    sys.exit("Usage: python3 tools/patch_index.py path/to/index.html")

path = pathlib.Path(sys.argv[1])
html = path.read_text(encoding="utf-8")
snippet = (pathlib.Path(__file__).resolve().parent.parent / "head-snippet.html").read_text(encoding="utf-8").strip()

if 'rel="canonical"' in html:
    sys.exit("Already patched (canonical tag found). Nothing changed.")

shutil.copy(path, str(path) + ".bak")

pattern = re.compile(
    r'<title>.*?</title>\s*<meta name="description"[^>]*>\s*<link rel="icon"[^>]*>',
    re.DOTALL)
if not pattern.search(html):
    sys.exit("Could not find the old <title>/description/icon lines. Paste head-snippet.html into <head> manually.")

html = pattern.sub(lambda m: snippet, html, count=1)
html = html.replace('<html lang="en">', '<html lang="en-IN">', 1)

path.write_text(html, encoding="utf-8")
print("Done. Backup saved as", str(path) + ".bak")
