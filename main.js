import { renderLayout, renderReviews } from "./src/js/layout.js";
import { setupSorting } from "./src/js/sorting.js";
import { saekjaGogn } from "./src/js/storage.js";

/* Bæta við haus og fót */
renderLayout();
renderReviews();

const umsagnir = saekjaGogn([]);

function renderReviewsList(umsagnir) {
  const container = document.getElementById("reviews-container");

  if (!container) return;

  container.innerHTML = "";

  umsagnir.forEach((umsogn) => {
    const reviewElement = document.createElement("div");

    reviewElement.innerHTML = `
            <h3>${umsogn.titill}</h3>
            <p>Tegund: ${umsogn.tegund}</p>
            <p>Höfundur: ${umsogn.hofundur}</p>
            <p>Einkunn: ${umsogn.einkunn}</p>
        `;

    container.appendChild(reviewElement);
  });
}

renderReviewsList(umsagnir);
setupSorting(umsagnir, renderReviewsList);
