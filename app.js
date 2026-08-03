const filters = document.querySelectorAll(".filter");
const rows = document.querySelectorAll(".app-row");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.filter;

    filters.forEach((item) => item.classList.toggle("is-active", item === button));

    rows.forEach((row) => {
      const match = value === "all" || row.dataset.category === value;
      row.classList.toggle("is-hidden", !match);
    });
  });
});
