const state = {
    books: [],
    authors: [],
    genres: [],
    bookFilters: {
        title: '',
        author: '',
        genre: ''
    },
    auth: {
        isLoggedIn: false,
        token: ''
    },
    registerModal: {
        isVisible: false
    },
    loginModal: {
        isVisible: false
    }
}

export default state;