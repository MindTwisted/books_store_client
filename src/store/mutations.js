const mutations = {
    setBooks(state, books) {
        state.books = books;
    },
    setAuthors(state, authors) {
        state.authors = authors;
    },
    setGenres(state, genres) {
        state.genres = genres;
    },
    resetBookFilters(state) {
        state.bookFilters = {
            title: '',
            author: '',
            genre: ''
        };
    },
    setRegisterModal(state) {
        state.registerModal.isVisible = true;
    },
    removeRegisterModal(state) {
        state.registerModal.isVisible = false;
    },
    setLoginModal(state) {
        state.loginModal.isVisible = true;
    },
    removeLoginModal(state) {
        state.loginModal.isVisible = false;
},
}

export default mutations;