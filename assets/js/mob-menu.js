const buttonMob = document.querySelector(".header-mob-menu-btn");
const nav = document.querySelector(".header-nav-mob");
const header = document.querySelector(".header");
const backdrop = document.querySelector(".backdrop");
const root = document.querySelector(":root");

if (header) {
  const headerHeight = header.offsetHeight;
  root.style.setProperty("--header-height", `${headerHeight}px`);
}

if (buttonMob && nav && backdrop) {
  buttonMob.addEventListener("click", () => {
    if (window.innerWidth <= 1023) {
      buttonMob.classList.toggle("show-cross");
      const expanded = buttonMob.classList.contains("show-cross");
      buttonMob.setAttribute("aria-expanded", expanded);
      nav.classList.toggle("show-nav");
      backdrop.classList.toggle("show");

      document.body.classList.toggle("no-scroll", expanded);

      setTimeout(() => {
        nav.style.transform = expanded ? "translateY(0%)" : "translateY(-100%)";
      }, 10);
    }
  });

  backdrop.addEventListener("click", () => {
    if (nav && nav.classList.contains("show-nav")) {
      buttonMob.classList.remove("show-cross");
      nav.classList.remove("show-nav");
      backdrop.classList.remove("show");
      document.body.classList.remove("no-scroll");

      setTimeout(() => {
        nav.style.transform = "translateY(-100%)";
      }, 10);
    }
  });
}
