const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");

    if (item.getAttribute("href") === `#${currentSection}`) {
      item.classList.add("active");
    }
  });
});