
(() => {
  const button = document.querySelector(".mobile-menu-button");
  const menu = document.querySelector(".mobile-menu");
  const overlay = document.querySelector(".mobile-overlay");

  if (!button || !menu || !overlay) return;

  const closeMenu = () => {
    button.classList.remove("is-open");
    menu.classList.remove("is-open");
    overlay.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Відкрити меню");
    document.body.classList.remove("menu-open");
  };

  const openMenu = () => {
    button.classList.add("is-open");
    menu.classList.add("is-open");
    overlay.classList.add("is-open");
    button.setAttribute("aria-expanded", "true");
    button.setAttribute("aria-label", "Закрити меню");
    document.body.classList.add("menu-open");
  };

  button.addEventListener("click", () => {
    menu.classList.contains("is-open") ? closeMenu() : openMenu();
  });

  overlay.addEventListener("click", closeMenu);

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) closeMenu();
  });
})();
