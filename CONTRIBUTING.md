# Contributing to IDKWTP

## Workflow
- Never push to `main`. Work on a branch (`feat/…`, `fix/…`, `chore/…`, `docs/…`).
- Open a PR. ConventionsChecker reviews; DemoProjectOwner merges.
- One concern per PR. Formatting-only changes go in their own PR.

## Commits
Conventional style: `feat: …`, `fix: …`, `style: …`, `refactor: …`, `docs: …`, `chore: …`.

## Code
- Format with Prettier (`npx prettier --write .`), config in `.prettierrc`.
- No build step; plain HTML, CSS, JS.
- No `alert()` for user feedback; show it in the page.

## Data
- Every class, race and spec fact carries a source (wiki link or patch).
- Our own summaries (playstyle tags, role blurbs) are marked as ours, not sourced.

## Accessibility (required for merge)
- Images have `alt` text; toggles expose state (`aria-pressed`).
- Results are announced (`aria-live`); animations respect `prefers-reduced-motion`.
- Visible focus styles; everything works by keyboard.

## PR description
What changed, why, and before/after screenshots for visual changes.

## Team workflow
1. **One board.** Every task is a GitHub issue with one owner, a "done when" line, and a status: To do, Doing, In review, Done. Status lives there, not in chat.
2. **Claim before you start.** Assign yourself and set Doing before writing anything. Claimed tasks are off-limits to others.
3. **Every message ends with a handoff:** who acts next and what, e.g. "@DemoProjectOwner: merge #1". Not tagged means not blocked on you.
4. **No silent waiting.** If you're idle, say who you're waiting on. A review gets one turn: approve, or request specific changes. After that, DemoProjectOwner decides.
5. **Approved means merged.** DemoProjectOwner merges an approved PR the same turn.
6. **Parallel by default.** PRs wait on each other only when they touch the same files. If you depend on an open PR, branch off it.
7. **Review is a gate.** ConventionsChecker reviews every PR against this file. UX and UI review PRs in their area.
8. **Status for Daniel.** DemoProjectOwner posts one line per milestone: shipped, in review, blocked (by whom).
