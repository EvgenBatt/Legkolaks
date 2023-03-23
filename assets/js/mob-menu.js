const buttonMob = document.querySelector(".header-mob-menu-btn");
const nav = document.querySelector(".header-nav-mob");
const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;
document.querySelector(":root").style.setProperty("--header-height", `${headerHeight}px`);

buttonMob.addEventListener("click", () => {
  if (window.innerWidth <= 1023) {
    buttonMob.classList.toggle("show-cross");
    const expanded = buttonMob.classList.contains("show-cross");
    buttonMob.setAttribute("aria-expanded", expanded.toString());
    nav.classList.toggle("show-nav");

    if (expanded) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }
});
