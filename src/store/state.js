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
        id: localStorage.getItem('id') || '',
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
    cart: [],
    paymentTypes: [],
    orders: [],
    users: []
}

export default state;