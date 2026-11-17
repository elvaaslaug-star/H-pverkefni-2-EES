/* raðar eftir einkunn*/
export function sortBooks(books, sortType) {
    const sortedBooks = [...books];
    switch (sortType) {
        case 'title-asc':
            return sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
        case 'title-desc':
            return sortedBooks.sort((a, b) => b.title.localeCompare(a.title));  
        case 'author-asc':
            return sortedBooks.sort((a, b) => a.author.localeCompare(b.author));
        case 'rating-desc':
            return sortedBooks.sort((a, b) => b.rating - a.rating);
        case 'rating-asc':
            return sortedBooks.sort((a, b) => a.rating - b.rating); 
        default:
            return sortedBooks;
    }
}
export function setupSorting(books) {
    const sortSelect = document.getElementById('sort');
    if(!sortSelect) {
        return;
    }
    sortSelect.addEventListener('change', () => {
        const sortType = sortSelect.value;
        const sortedBooks = sortBooks(books, sortType);
        renderBooks(sortedBooks);
    });
}