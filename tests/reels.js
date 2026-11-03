// Regression test for #27: the image each reel stops on must match the rolled result.
// Needs Chrome and puppeteer-core: npm i --no-save puppeteer-core && node tests/reels.js
const http = require("http"),
  fs = require("fs"),
  path = require("path");
const p = require("puppeteer-core");
const root = path.join(__dirname, "..");
const srv = http
  .createServer((q, r) => {
    const f = path.join(
      root,
      decodeURI(q.url.split("?")[0]) === "/" ? "index.html" : decodeURI(q.url.split("?")[0]),
    );
    fs.readFile(f, (e, d) => (e ? (r.writeHead(404), r.end()) : r.end(d)));
  })
  .listen(0);
(async () => {
  const url = `http://localhost:${srv.address().port}/`;
  const b = await p.launch({
    executablePath: process.env.CHROME || "/usr/bin/google-chrome",
    args: ["--no-sandbox"],
  });
  let bad = 0;
  for (const w of [1280, 375]) {
    const pg = await b.newPage();
    await pg.setViewport({ width: w, height: 800 });
    await pg.goto(url);
    for (let i = 0; i < 5; i++) {
      await pg.click("#spin");
      await new Promise((r) => setTimeout(r, 2400));
      const r = await pg.evaluate(() => {
        const at = (id) => {
          const top = document.querySelector(id).parentElement.getBoundingClientRect().top;
          const im = [...document.querySelectorAll(id + " img")].find(
            (x) => Math.abs(x.getBoundingClientRect().top - top) < 4,
          );
          return im && im.getAttribute("src").split("/").pop().split(".")[0];
        };
        return {
          c: at("#r1"),
          r: at("#r2"),
          h: document
            .querySelector("#result h3")
            .textContent.toLowerCase()
            .replace(/[^a-z]/g, ""),
        };
      });
      if (!r.c || !r.h.includes(r.c) || !r.r || !r.h.includes(r.r.replace(/[^a-z]/g, ""))) {
        console.error(`FAIL at ${w}px:`, r);
        bad++;
      }
    }
  }
  await b.close();
  srv.close();
  console.log(bad ? `${bad} reel mismatches` : "reel test passed");
  process.exit(bad ? 1 : 0);
})();
