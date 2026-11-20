// Small progressive enhancements. Everything works without this file:
// the menu is a native <details>, FAQ is <details>, links are plain anchors and tel: links.

// 1. Mobile menu: close after choosing an anchor, on Escape and on outside click.
const menu = document.querySelector<HTMLDetailsElement>("[data-menu]");
if (menu) {
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => { menu.open = false; }));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.open) { menu.open = false; menu.querySelector("summary")?.focus(); }
  });
  document.addEventListener("click", (e) => {
    if (menu.open && !menu.contains(e.target as Node)) menu.open = false;
  });
  menu.addEventListener("toggle", () => document.documentElement.classList.toggle("menu-open", menu.open));
}

// 2. Team photo: reveal (clip-path) once the image has decoded, so text and number never wait for it.
const band = document.querySelector<HTMLElement>("[data-hero-photo]");
const bandImg = band?.querySelector("img");
if (band && bandImg) {
  const show = () => band.classList.add("is-shown");
  if (bandImg.complete) show();
  else { bandImg.addEventListener("load", show, { once: true }); bandImg.addEventListener("error", show, { once: true }); }
}

// 3. Sticky call bar on phones: appears after the first screen.
const bar = document.querySelector<HTMLElement>("[data-sticky-call]");
const hero = document.getElementById("hero");
if (bar && hero && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(([entry]) => {
    bar.classList.toggle("is-on", !entry.isIntersecting && entry.boundingClientRect.top < 0);
  }, { threshold: 0 });
  const target = hero.querySelector(".hero__actions") ?? hero;
  io.observe(target);
}

// 4. FutureLink: keyboard Enter/Space does nothing but keeps the note visible (it is not a link yet).
document.querySelectorAll<HTMLElement>(".future-link").forEach((el) => {
  el.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") e.preventDefault(); });
});
