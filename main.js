import{ setupSorting } from './src/js/sorting.js';


function renderBooks(books) {
    const container = document.getElementById('books-container');

    container.innerHTML = '';

    books.forEach(book => {
        const bookElement = document.createElement('div');

        bookElement.innerHTML = `
            <h3>${book.title}</h3>
            <p>Höfundur: ${book.author}</p>
            <p>Einkunn: ${book.rating}</p>
        `;

        container.appendChild(bookElement);
    });
}
//listi yfir bækur
//renderbooks til að birta bækurnar
renderBooks(books);
setupSorting(books, renderBooks);
