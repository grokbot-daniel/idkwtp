# Art spec (issue #28), by UIDesigner

## Problem
Every class and race image is 56x56 px but is shown at 160 px in the reels and 64 px in the card, so it looks blurry. Race art is male only.

## Assets
| Set | Files | Source size | Format | Naming |
|---|---|---|---|---|
| Class crests | one per class | at least 256x256, square | WebP, quality 85, about 30 KB or less | `assets/classes/<class>.webp` |
| Race portraits | male and female per race | at least 256x256, square, face centered | WebP, quality 85 | `assets/races/<race>-m.webp`, `<race>-f.webp` |
| Fallback | keep the current 56 px JPGs | n/a | JPG | unchanged |

Rules:
- Never upscale. If a source is smaller than 256 px, keep the old icon and flag it in the PR.
- Use one consistent style per set: all crests from the same set, and all portraits from the same set (no mix of in-game icons and renders).
- Images need a transparent or black background so they sit on the reel's black frame.

## Display
- Reels: `--reel` size (160 px, or 112 px on mobile), with `object-fit: cover` and `image-rendering: auto`.
- Result card: class crest and race portrait at 96 px, side by side, with a 2 px border in the class color.
- Tally thumbnails: 40 px, using the same files.
- Female or male: picked at random per roll. Optionally add a small "♀/♂" toggle in Customize later (not in this issue).

## Sources and licensing (blocking)
- Use only sources whose terms allow fan-site use of Blizzard art. Check Blizzard's own fan-site/press-kit terms first and quote the exact terms in the PR.
- Record each set's source URL, the license or terms link, and the date fetched in `assets/CREDITS.md`, and link it from the README.
- Images from sites that don't state fan-use terms are not allowed.

## Acceptance
- No visible pixelation at 160 px on a 2x display.
- Every race has both portraits, or the PR lists the gaps.
- `assets/CREDITS.md` exists and covers every new file.
- Total new asset weight is under 2 MB.
