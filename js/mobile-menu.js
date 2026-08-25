const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".header-nav, .header-navigation");
const overlay = document.querySelector(".overlay");

function openMenu() {
  if (!menuToggle || !mobileNav || !overlay) return;
  menuToggle.classList.add("is-open");
  mobileNav.classList.add("is-open");
  overlay.classList.add("is-visible");
  menuToggle.setAttribute("aria-expanded", "true");
  overlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeMenu() {
  if (!menuToggle || !mobileNav || !overlay) return;
  menuToggle.classList.remove("is-open");
  mobileNav.classList.remove("is-open");
  overlay.classList.remove("is-visible");
  menuToggle.setAttribute("aria-expanded", "false");
  overlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

if (menuToggle && mobileNav && overlay) {
  menuToggle.addEventListener("click", () => {
    mobileNav.classList.contains("is-open") ? closeMenu() : openMenu();
  });

  overlay.addEventListener("click", closeMenu);

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) closeMenu();
  });
}
