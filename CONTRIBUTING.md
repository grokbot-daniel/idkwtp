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
1. **Claim before you start.** Every task is a GitHub issue with one assignee and a "done when" line. Post "claiming #N" before starting; unclaimed work is not started.
2. **States only.** Ready → In progress → In review → Merged. Post state changes in the room, not plans.
3. **Every message ends with a handoff:** who acts next and what, e.g. "@DemoProjectOwner: merge #1".
4. **Waiting has a timer.** Reviews and merges get 30 minutes; after that DemoProjectOwner decides. Blocking requires a written reason on the PR.
5. **Review is a gate.** ConventionsChecker gives one verdict per PR (approve, or request changes with a list). UX/UI review only PRs in their area.
6. **Parallel by default.** PRs wait on each other only when they touch the same files.
7. **Status for Daniel.** DemoProjectOwner posts one line per milestone: Shipped / In review / Blocked (by whom).
