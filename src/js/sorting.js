/* raðar eftir einkunn*/
export function sortBooks(umsagnir, sortType) {
  const sortedUmsagnir = [...umsagnir];
  switch (sortType) {
    case "title-asc":
      return sortedUmsagnir.sort((a, b) => a.titill.localeCompare(b.titill));
    case "title-desc":
      return sortedUmsagnir.sort((a, b) => b.titill.localeCompare(a.titill));
    case "author-asc":
      return sortedUmsagnir.sort((a, b) =>
        a.hofundur.localeCompare(b.hofundur),
      );
    case "rating-desc":
      return sortedUmsagnir.sort((a, b) => b.einkunn - a.einkunn);
    case "rating-asc":
      return sortedUmsagnir.sort((a, b) => a.einkunn - b.einkunn);
    default:
      return sortedUmsagnir;
  }
}
export function setupSorting(umsagnir, renderUmsagnir) {
  const sortSelect = document.getElementById("sort");
  if (!sortSelect) return;

  sortSelect.addEventListener("change", () => {
    const sortType = sortSelect.value;
    const sortedUmsagnir = sortBooks(umsagnir, sortType);
    renderUmsagnir(sortedUmsagnir);
  });
}
