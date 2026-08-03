const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".app-card");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.filter;

    filters.forEach((item) => item.classList.toggle("is-active", item === button));

    cards.forEach((card) => {
      const match = value === "all" || card.dataset.category === value;
      card.classList.toggle("is-hidden", !match);
    });
  });
});
