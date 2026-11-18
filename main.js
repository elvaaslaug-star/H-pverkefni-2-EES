import{ setupSorting } from './src/js/sorting.js';


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
//listi yfir bækur
//renderbooks til að birta bækurnar
renderReviews(reviews);
setupSorting(reviews, renderReviews);

