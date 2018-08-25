function clearCart(state) {
    state.cart = [];
}

function clearPaymentTypes(state) {
    state.paymentTypes = [];
}

function clearOrders(state) {
    state.orders = [];
}

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
    removeBookFilters(state) {
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
    setAuth(state, data) {
        state.auth = {
            token: data.token,
            name: data.name,
            email: data.email,
            role: data.role,
            discount: data.discount
        }
    },
    removeAuth(state) {
        state.auth = {
            token: '',
            name: '',
            email: '',
            role: '',
            discount: ''
        };

        clearCart(state);
        clearPaymentTypes(state);
        clearOrders(state);
    },
    updateUser(state, data) {
        state.auth = {
            ...state.auth,
            name: data.name,
            email: data.email
        }
    },
    setCart(state, cart) {
        state.cart = cart;
    },
    removeCart(state) {
        clearCart(state);
    },
    deleteFromCart(state, bookId) {
        state.cart = state.cart.filter(item => {
            return item.book.id != bookId;
        });
    },
    updateInCart(state, data) {
        state.cart = state.cart.map(item => {
            if (item.book.id == data.bookId) {
                item.count = data.count;
            }

            return item;
        });
    },
    addToCart(state, data) {
        const book = state.books.find(book => book.id == data.bookId);
        
        state.cart.push({
            count: data.count,
            id: data.id,
            book: {
                id: book.id,
                title: book.title,
                description: book.description,
                price: book.price,
                discount: book.discount,
                image_url: book.image_url
            }
        });
    },
    setPaymentTypes(state, paymentTypes) {
        state.paymentTypes = paymentTypes;
    },
    setOrders(state, orders) {
        state.orders = orders;
    }
}

export default mutations;