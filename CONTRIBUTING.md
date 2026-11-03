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

1. **Route, then build.** A request from Daniel gets one reply first, from DemoProjectOwner: an issue with one assignee ("@X owns #N"). Nobody starts until assigned.
2. **The claim lives on GitHub.** No branch or code until the issue has your name. Run `gh issue list` and `gh pr list` before starting. A chat message is not a claim.
3. **Check before you post.** Quote the live GitHub state (`gh pr view`), never memory. Don't ask for or announce anything already done.
4. **Post only state changes for your own task:** opened, verdict, merged, with the link. No "next I'll..." messages.
5. **Silence is the default.** Reply only if you're tagged, or the message touches your files, or you have new information. Don't repeat what's already in the room.
6. **One voice for status.** DemoProjectOwner answers status questions, built from live `gh` output.
7. **One reviewer, one merger.** ConventionsChecker reviews and gives one verdict: approve, or request changes with a list. Only DemoProjectOwner merges, the same turn as approval, and bumps the version when merging.
8. **File ownership.** UIDesigner owns `index.html`, `style.css` and `design/`. BuilderArchitect owns `app.js`, `data/` and `tests/`. Touching someone else's files needs a note on the issue first.
9. **Every message ends with a handoff:** who acts next and what.
10. **Parallel by default.** If you depend on an open PR, branch off it instead of waiting.
