const filterButtons = document.querySelectorAll(".filter-tabs button");
const portfolioCards = document.querySelectorAll(".portfolio-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    portfolioCards.forEach((card) => {
      const category = card.dataset.category;
      const shouldShow = filter === "all" || category === filter;

      card.classList.toggle("hide", !shouldShow);
    });
  });
});
