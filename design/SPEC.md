# IDKWTP round 2 visual spec (UIDesigner)

Follows UxExpert's page flow. Mockup: `design/mockup.html` (static, no logic).

## Tokens (CSS custom properties on :root)
```css
--bg:#0b0a0f; --panel:#16120c; --panel-2:#0e0c08; --line:#6b4f1d;
--gold:#f8b700; --gold-deep:#7a4f00; --text:#e8dcc0; --muted:#b9a77f;
--radius:10px; --space-1:4px; --space-2:8px; --space-3:16px; --space-4:24px;
--font-display:"Cinzel",Georgia,serif;          /* h1, h2, card title */
--font-ui:system-ui,"Segoe UI",Roboto,sans-serif; /* everything else */
--class-color: set per result (Warrior #C69B6D, Paladin #F48CBA, Hunter #AAD372,
  Rogue #FFF468, Priest #FFFFFF, Shaman #0070DD, Mage #3FC7EB, Warlock #8788EE,
  Druid #FF7C0A, DK #C41E3A, Monk #00FF98, DH #A330C9, Evoker #33937F)
```
Theme by game: `body[data-game=forever]` keeps the gold-on-brown look; `body[data-game=retail]` swaps `--gold` to #7fd4ff and the background gradient to a cool violet (#1a1030). Only tokens change.

## Layout (single column, max-width 720px, centered)
1. Header: Cinzel wordmark, 2rem on mobile and 3rem on desktop.
2. Game toggle: two equal cards (radio group), 72px tall, with a name and a short subtitle. The selected card gets a gold border and glow.
3. Mode tabs: a segmented control. The Group player list expands under it.
4. Machine: two reels at 160px (112px under 480px), a gold frame, and a horizontal payline across the center. SPIN goes directly under it at full width, 56px tall. When disabled it's 40% opacity with `aria-disabled="true"` and the reason shown as text under it, linked with `aria-describedby`, never an alert.
5. Customize: a `<details>` closed by default. Its summary shows "Customize · 37 specs match · Reset". Filters are chips 36px tall (44px on touch), with icon plus label, `aria-pressed`, and a gold fill when on.
6. Result card: see below.

## Result card
- Left border is 5px of `--class-color`, plus a 0 0 24px glow at 35% of that color.
- Class and race icons are 64px side by side.
- The title is "Race Class" in Cinzel 1.4rem. Role and armor show as chips.
- One line of "why you'd enjoy it", in italic muted text, with the small tag "our summary".
- Actions: **Keep it** (primary gold), **Reroll race**, and **Reroll all** (secondary outline). In Group mode it adds **Copy for Discord**.
- Keep it: adds the roll to a "Kept" list (localStorage, last 10, shown as chips under the card) and collapses the action buttons into a small "Kept ✓ · Undo" line.
- Group mode: one compact card per player, each with its own **Reroll** that respects no-duplicates and role rules.
- Bo3 and Bo5: earlier rolls show as a 40px thumbnail row above the card. The winner gets a gold ring.
- Has `aria-live="polite"` so the result is read out.

## Motion
- Reels decelerate with an ease-out over 1.6s, then do a 120ms overshoot and settle.
- On landing, the payline flashes gold for 300ms and the card fades and slides up 8px.
- With `prefers-reduced-motion`, there's no spin. The result fades in over 150ms.

## Accessibility
- Focus rings are a 2px gold outline with a 2px offset on every control.
- Text contrast is at least 4.5:1 (`--muted` on `--panel` is about 7:1).
- Every icon gets alt text with the class or race name.
