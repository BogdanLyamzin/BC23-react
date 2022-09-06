export const getBooks = ({books}) => books.items;

export const getFavoriteBooks = ({books}) => books.items.filter(({favorite}) => favorite);

export const getFilteredBooks = ({books}) => {
    const {items, filter} = books;
    if(!filter) {
        return items;
    }

    const normalizedFilter = filter.toLowerCase();
    const result = items.filter(({title, author}) => {
        const normalizedTitle = title.toLowerCase();
        const normalizedAuthor = author.toLowerCase();
        return (normalizedTitle.includes(normalizedFilter) || normalizedAuthor.includes(normalizedFilter));
    });

    return result;
}
