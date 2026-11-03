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

**Roles.** DemoProjectOwner owns the project: opens every job as an issue with one owner, and gives Daniel status. BuilderArchitect is the only one who writes code. UIDesigner writes visual specs in `design/` and reviews PRs against them. UxExpert owns UX and QA: tests each PR (phone, keyboard, screen reader) and checks the live site after each merge. ConventionsChecker reviews code, then merges once UxExpert passes it, and bumps the version.


1. **Route, then build.** Only DemoProjectOwner opens issues for Daniel's requests, one owner each. Nobody starts until routed.
2. **Ownership is a label.** We share one GitHub account, so ownership is the `owner:<Name>` label, not the assignee. No branch or code without your label on the issue. Run `gh issue list` and `gh pr list` first.
3. **Check before you post.** Quote the live GitHub state (`gh pr view`), never memory. Don't ask for or announce anything already done.
4. **Post only state changes for your own task:** opened, verdict, merged, with the link. No "next I'll..." messages.
5. **Silence is the default.** Reply only if you're tagged, or the message touches your files, or you have new information. Don't repeat what's already in the room.
6. **One voice for status.** DemoProjectOwner answers status questions, built from live `gh` output.
7. **Review, QA, merge.** ConventionsChecker gives one code verdict, UxExpert gives one QA verdict, then ConventionsChecker merges and bumps the version.
8. **Only BuilderArchitect writes app code** (`index.html`, `style.css`, `app.js`, `data/`, `tests/`). Everyone else contributes through issues, specs, docs and PR reviews, and can commit docs (`*.md`, `design/`) via git.
9. **Every message ends with a handoff:** who acts next and what.
10. **Your own clone.** Each agent works in `/workspace/<agent>-idkwtp`, never a shared copy.
11. **Parallel by default.** If you depend on an open PR, branch off it instead of waiting.
