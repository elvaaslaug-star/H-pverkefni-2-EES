/*flytur inn allt javascript í minni skránum */
import{ setupSorting } from './sorting.js';

function renderReviews(reviews) {
    const container = document.getElementById('reviews-container');

    container.innerHTML = '';

    reviews.forEach(review => {
        const reviewElement = document.createElement('div');

        reviewElement.innerHTML = `
            <h3>${review.title}</h3>
            <p>Tegund: ${review.type}</p>
            <p>Höfundur: ${review.author}</p>
            <p>Einkunn: ${review.rating}</p>
        `;

        container.appendChild(reviewElement);
    });
}
renderReviews(reviews);
setupSorting(reviews, renderReviews);
