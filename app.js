"use strict";
const $ = (s) => document.querySelector(s);
const FG = {
  Role: ["tank", "healer", "damage"],
  Range: ["melee", "ranged"],
  Armor: ["Cloth", "Leather", "Mail", "Plate"],
  Style: [
    "burst",
    "sustained",
    "dot",
    "aoe",
    "pets",
    "hots",
    "mobility",
    "utility",
    "support",
    "beginner",
    "complex",
  ],
};
const sel = {};
let mode = "solo",
  players = [];
let game = "forever",
  CLASSES,
  RACES,
  SPECS;
function setGame(g) {
  game = g;
  CLASSES = GAMES[g].classes;
  RACES = GAMES[g].races;
  SPECS = CLASSES.flatMap((c) => c.specs.map((s) => ({ ...s, cls: c })));
}
setGame("forever");
function buildFilters() {
  const f = $("#filters");
  for (const [g, vals] of Object.entries(FG)) {
    sel[g] = new Set();
    const d = document.createElement("div");
    d.className = "group";
    d.innerHTML = `<b>${g}</b>`;
    vals.forEach((v) => {
      const b = document.createElement("button");
      b.textContent = v;
      b.onclick = () => {
        sel[g].has(v) ? sel[g].delete(v) : sel[g].add(v);
        b.classList.toggle("on");
        update();
      };
      d.append(b);
    });
    f.append(d);
  }
}
function races(c) {
  const fac = $("#fac").value;
  return RACES.filter((r) => r.cls.includes(c.id) && (!fac || r.f === fac || r.f === "Neutral"));
}
function pool() {
  return SPECS.filter(
    (s) =>
      (!sel.Role.size || sel.Role.has(s.role)) &&
      (!sel.Range.size || sel.Range.has(s.range)) &&
      (!sel.Armor.size || sel.Armor.has(s.cls.armor)) &&
      (!sel.Style.size || [...sel.Style].some((t) => s.traits.includes(t))) &&
      races(s.cls).length,
  );
}
function update() {
  const p = pool();
  const btn = $("#spin");
  $("#count").textContent = p.length
    ? `${p.length} specs across ${new Set(p.map((s) => s.cls.id)).size} classes match`
    : "0 specs match. Clear a filter to spin.";
  btn.setAttribute("aria-disabled", p.length ? "false" : "true");
  btn.classList.toggle("off", !p.length);
}
const pick = (a) => a[Math.floor(Math.random() * a.length)];
const cimg = (c) => `assets/classes/${c.id}.jpg`,
  rimg = (r) => `assets/races/${r.img}`;
function spinReel(el, imgs, final, ms) {
  return new Promise((res) => {
    const n = 20;
    el.innerHTML = "";
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const list = reduce ? [final] : [...Array(n)].map(() => pick(imgs)).concat(final);
    list.forEach((src, k) => {
      const i = new Image();
      i.src = src;
      i.alt =
        k === list.length - 1
          ? src
              .split("/")
              .pop()
              .replace(/\.\w+$/, "")
          : "";
      el.append(i);
    });
    if (reduce) {
      el.style.transition = "none";
      el.style.transform = "translateY(0)";
      return res();
    }
    el.style.transition = "none";
    el.style.transform = "translateY(0)";
    el.offsetHeight;
    el.style.transition = `transform ${ms}ms cubic-bezier(.15,.7,.2,1)`;
    el.style.transform = `translateY(-${n * el.firstElementChild.offsetHeight}px)`;
    setTimeout(res, ms);
  });
}
async function rollOne(p) {
  const s = pick(p),
    r = pick(races(s.cls));
  await Promise.all([
    spinReel(
      $("#r1"),
      p.map((x) => cimg(x.cls)),
      cimg(s.cls),
      1400,
    ),
    spinReel($("#r2"), races(s.cls).map(rimg), rimg(r), 1800),
  ]);
  return { s, r };
}
function card(x, who, i) {
  const c = x.s.cls.color;
  const actions =
    who === undefined
      ? `<div class="actions" data-actions>
  <button data-act="keep" class="primary">Keep it</button>
  <button data-act="race">Reroll race</button>
  <button data-act="all">Reroll all</button></div>`
      : `<div class="actions"><button data-act="pre" data-i="${i}">Reroll</button></div>`;
  return `<div class="card" style="border-color:${c}"><h3 style="color:${c}">${who ? who + ": " : ""}${x.r.name} ${x.s.n} ${x.s.cls.name}</h3>
 <span class="tag">${x.s.role}</span><span class="tag">${x.s.range}</span><span class="tag">${x.s.cls.armor}</span>${x.s.traits.map((t) => `<span class="tag">${t}</span>`).join("")}<p>${x.s.exp}</p>${actions}</div>`;
}
let last = null,
  groupRolls = [];
const label = (x) => `${x.r.name} ${x.s.n} ${x.s.cls.name}`;
const KEY = "idkwtp-kept";
const getKept = () => JSON.parse(localStorage.getItem(KEY) || "[]");
function renderKept() {
  let el = $("#kept");
  if (!el) {
    el = document.createElement("div");
    el.id = "kept";
    $("#result").after(el);
  }
  const k = getKept();
  el.innerHTML = k.length
    ? `<b>Kept:</b> ${k.map((t) => `<span class="tag">${t}</span>`).join("")}`
    : "";
}
function showSolo(x) {
  last = x;
  $("#result").innerHTML = card(x);
  $("#result").setAttribute("aria-live", "polite");
}
async function rerollRace() {
  const opts = races(last.s.cls).filter((r) => r !== last.r);
  if (!opts.length) return;
  const r = pick(opts);
  await spinReel($("#r2"), races(last.s.cls).map(rimg), rimg(r), 1200);
  showSolo({ s: last.s, r });
}
function copyDiscord() {
  const txt = groupRolls.map((g) => `${g.who}: ${label(g.x)} (${g.x.s.role})`).join("\n");
  navigator.clipboard?.writeText("**IDKWTP group roll**\n" + txt);
  const b = $("#copyd");
  if (b) b.textContent = "Copied!";
}
async function rerollPlayer(i) {
  const p = pool();
  const used = new Set(groupRolls.filter((_, j) => j !== i).map((g) => g.x.s.cls.id));
  let q = p.filter((s) => s.role === groupRolls[i].x.s.role);
  if ($("#nodup").checked) q = q.filter((s) => !used.has(s.cls.id));
  if (!q.length) q = p;
  const x = await rollOne(q);
  groupRolls[i].x = x;
  renderGroup();
}
function renderGroup() {
  $("#result").innerHTML =
    groupRolls.map((g, i) => card(g.x, g.who, i)).join("") +
    `<button id="copyd" data-act="copy">Copy for Discord</button>`;
}
$("#result").onclick = async (e) => {
  const a = e.target.dataset.act;
  if (!a) return;
  if (a === "keep") {
    const k = [label(last), ...getKept()].slice(0, 10);
    localStorage.setItem(KEY, JSON.stringify(k));
    renderKept();
    e.target.closest("[data-actions]").innerHTML = `Kept ✓ · <button data-act="undo">Undo</button>`;
  } else if (a === "undo") {
    localStorage.setItem(KEY, JSON.stringify(getKept().slice(1)));
    renderKept();
    showSolo(last);
  } else if (a === "race") await rerollRace();
  else if (a === "all") spin();
  else if (a === "pre") await rerollPlayer(+e.target.dataset.i);
  else if (a === "copy") copyDiscord();
};
async function bestOf(p, n, who) {
  const need = Math.ceil(n / 2),
    wins = {},
    rolls = [];
  let out;
  while (true) {
    const x = await rollOne(p);
    rolls.push(x);
    const k = x.s.cls.id + x.s.n;
    wins[k] = (wins[k] || 0) + 1;
    $("#tally").insertAdjacentHTML(
      "beforeend",
      `<img src="${cimg(x.s.cls)}" title="${x.s.n} ${x.s.cls.name}">`,
    );
    if (n == 1 || wins[k] >= need) {
      out = x;
      break;
    }
    if (rolls.length >= n) {
      const best = Math.max(...Object.values(wins));
      out = rolls.find((y) => wins[y.s.cls.id + y.s.n] === best);
      break;
    }
  }
  $("#tally").lastElementChild.classList.add("win");
  return out;
}
async function spin() {
  const btn = $("#spin");
  let p = pool();
  if (!p.length || btn.disabled) return;
  document.querySelector(".machine").scrollIntoView({
    behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    block: "center",
  });
  btn.disabled = true;
  $("#tally").innerHTML = "";
  $("#result").innerHTML = "";
  const n = +$("#bo").value;
  if (mode === "solo") {
    const x = await bestOf(p, n);
    showSolo(x);
  } else {
    if (!players.length) players = ["Player 1"];
    const used = new Set();
    groupRolls = [];
    const comp = $("#comp").checked;
    const notes = [];
    for (let i = 0; i < players.length; i++) {
      let q = p;
      if ($("#nodup").checked) q = q.filter((s) => !used.has(s.cls.id));
      if (comp) {
        const role = i === 0 ? "tank" : i === 1 ? "healer" : "damage";
        const r = q.filter((s) => s.role === role);
        if (r.length) q = r;
        else notes.push(`${players[i]}: no ${role} spec left, rolled any role`);
      }
      if (!q.length) {
        q = p;
        notes.push(`${players[i]}: no unused class left, duplicates allowed`);
      }
      $("#tally").insertAdjacentHTML("beforeend", `<b>${players[i]}:</b>`);
      const x = await bestOf(q, n, players[i]);
      used.add(x.s.cls.id);
      groupRolls.push({ who: players[i], x });
      renderGroup();
    }
    if (comp)
      $("#result").insertAdjacentHTML(
        "beforeend",
        `<p class="tag">Roles by player order: ${players[0]} tanks${players[1] ? `, ${players[1]} heals` : ""}${players.length > 2 ? ", the rest deal damage" : ""}.</p>`,
      );
    notes.forEach((t) =>
      $("#result").insertAdjacentHTML("beforeend", `<p class="tag">Note: ${t}</p>`),
    );
  }
  btn.disabled = false;
}
function renderPlayers() {
  $("#plist").innerHTML = players
    .map((p, i) => `<li>${p} <button data-i="${i}">✕</button></li>`)
    .join("");
}
$("#plist").onclick = (e) => {
  if (e.target.dataset.i) {
    players.splice(+e.target.dataset.i, 1);
    renderPlayers();
  }
};
$("#padd").onclick = () => {
  const v = $("#pname").value.trim();
  if (v) {
    players.push(v.replace(/[<>&"]/g, ""));
    $("#pname").value = "";
    renderPlayers();
  }
};
$("#pname").onkeydown = (e) => {
  if (e.key === "Enter") $("#padd").click();
};
document.querySelectorAll(".tabs button").forEach(
  (b) =>
    (b.onclick = () => {
      document.querySelectorAll(".tabs button").forEach((x) => x.classList.remove("on"));
      b.classList.add("on");
      mode = b.dataset.mode;
      $("#groupbox").hidden = mode !== "group";
    }),
);
$("#fac").onchange = update;
$("#game").onchange = (e) => {
  setGame(e.target.value);
  update();
  document.querySelector("#r1 img").src = cimg(CLASSES[0]);
};
$("#spin").onclick = spin;
buildFilters();
update();
renderKept();
["r1", "r2"].forEach((id, k) => {
  const i = new Image();
  i.src = k ? rimg(RACES[0]) : cimg(CLASSES[0]);
  $("#" + id).append(i);
});
