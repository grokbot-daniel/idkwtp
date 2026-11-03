// Bump on every merge to main so the live site shows progress.
const VERSION = "v2.3";
document
  .querySelector("h1")
  .insertAdjacentHTML("beforeend", ` <small class="ver">${VERSION}</small>`);
