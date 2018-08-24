const getters = {
    books(state) {
        const filters = state.bookFilters;

        if (!filters) {
            return state.books;
        }
        
        return state.books
            .filter(book => {
                if (!filters.title) {
                    return book;
                }

                return book.title.toLowerCase().includes(filters.title.toLowerCase());
            })
            .filter(book => {
                if (!filters.author) {
                    return book;
                }

                return book.authors.findIndex(author => +author.id === +filters.author) !== -1;
            })
            .filter(book => {
                if (!filters.genre) {
                    return book;
                }

                return book.genres.findIndex(genre => +genre.id === +filters.genre) !== -1;
            });
    },
    getBookById(state) {
        return (id) => {
            return state.books.filter(book => +book.id === +id)[0];
        } 
    }
}

export default getters;