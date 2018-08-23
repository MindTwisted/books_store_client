const mutations = {
    setBooks(state, books) {
        state.books = books;
    },
    setAuthors(state, authors) {
        state.authors = authors;
    },
    setGenres(state, genres) {
        state.genres = genres;
    }
}

export default mutations;