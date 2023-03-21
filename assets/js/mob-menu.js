const button = document.querySelector(".header-mob-menu-btn");
const nav = document.querySelector(".header-nav-mob");

button.addEventListener("click", () => {
  if (window.innerWidth <= 1023) {
    button.classList.toggle("show-cross");
    const expanded = button.classList.contains("show-cross");
    button.setAttribute("aria-expanded", expanded.toString());
    nav.classList.toggle("show-nav");

    if (expanded) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }
});
