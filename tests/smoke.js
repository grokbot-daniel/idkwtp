// Smoke test: data integrity for every game. Run: node tests/smoke.js
const fs = require("fs"),
  vm = require("vm");
const ctx = { window: {} };
vm.createContext(ctx);
for (const g of ["forever", "retail"])
  vm.runInContext(fs.readFileSync(`data/${g}.js`, "utf8"), ctx);
let fail = 0;
const bad = (m) => {
  console.error("FAIL", m);
  fail++;
};
for (const [g, d] of Object.entries(ctx.window.GAMES)) {
  if (!d.sources) bad(`${g}: missing sources`);
  for (const c of d.classes) {
    if (!fs.existsSync(`assets/classes/${c.id}.jpg`)) bad(`${g}/${c.id}: no icon`);
    if (!d.races.some((r) => r.cls.includes(c.id))) bad(`${g}/${c.id}: no playable race`);
    for (const s of c.specs) {
      if (!["tank", "healer", "damage"].includes(s.role)) bad(`${g}/${c.id}/${s.n}: role`);
      if (!["melee", "ranged"].includes(s.range)) bad(`${g}/${c.id}/${s.n}: range`);
    }
  }
  for (const r of d.races)
    if (!fs.existsSync(`assets/races/${r.img}`)) bad(`${g}/${r.id}: no icon`);
}
const html = fs.readFileSync("index.html", "utf8");
if (/alert\(/.test(fs.readFileSync("app.js", "utf8"))) bad("app.js still uses alert()");
for (const f of html.match(/src="([^"]+\.js)"/g).map((m) => m.slice(5, -1)))
  if (!fs.existsSync(f)) bad(`missing script ${f}`);

// Version check: title and header agree, format vX.Y, and bumped when the site changed vs origin/main.
const ver = (h) => [...h.matchAll(/v(\d+)\.(\d+)/g)].map((m) => m[0]);
const vs = ver(html.match(/<title>[^<]*<\/title>/)[0]).concat(
  ver(html.match(/<h1>[\s\S]*?<\/h1>/)[0]),
);
if (vs.length !== 2 || vs[0] !== vs[1]) bad(`title/header versions missing or differ: ${vs}`);
try {
  const { execSync } = require("child_process");
  const sh = (c) => execSync(c, { stdio: ["ignore", "pipe", "ignore"] }).toString();
  const changed = sh(
    "git diff --name-only origin/main -- index.html style.css app.js data assets",
  ).trim();
  if (changed) {
    const old = ver(sh("git show origin/main:index.html").match(/<title>[^<]*<\/title>/)[0])[0];
    const n = (v) => v.slice(1).split(".").map(Number);
    const [a, b] = [n(vs[0]), n(old)];
    if (!(a[0] > b[0] || (a[0] === b[0] && a[1] > b[1])))
      bad(`site files changed but version not bumped (main ${old}, branch ${vs[0]})`);
  }
} catch (e) {
  console.log("version bump check skipped (no git/origin)");
}
console.log(fail ? `${fail} failures` : "smoke test passed");
process.exit(fail ? 1 : 0);
