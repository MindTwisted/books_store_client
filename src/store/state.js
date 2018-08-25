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
        token: localStorage.getItem('token') || '',
        name: localStorage.getItem('name') || '',
        email: localStorage.getItem('email') || '',
        role: localStorage.getItem('role') || '',
        discount: localStorage.getItem('discount') || ''
    },
    registerModal: {
        isVisible: false
    },
    loginModal: {
        isVisible: false
    },
    cart: []
}

export default state;