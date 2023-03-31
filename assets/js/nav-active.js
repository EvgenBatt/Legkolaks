const currentUrl = window.location.href;
const navLinks = [...document.querySelectorAll(".header-nav-link")];

navLinks.forEach(({ classList, href }) => {
  classList.toggle("current", href === currentUrl);
});
