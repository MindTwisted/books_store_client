function clearCart(state) {
    state.cart = [];
}

function clearPaymentTypes(state) {
    state.paymentTypes = [];
}

function clearOrders(state) {
    state.orders = [];
}

function clearUsers(state) {
    state.users = [];
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
            id: data.id,
            token: data.token,
            name: data.name,
            email: data.email,
            role: data.role,
            discount: data.discount
        }
    },
    removeAuth(state) {
        state.auth = {
            id: '',
            token: '',
            name: '',
            email: '',
            role: '',
            discount: ''
        };

        clearCart(state);
        clearPaymentTypes(state);
        clearOrders(state);
        clearUsers(state);
    },
    updateCurrentUser(state, data) {
        state.auth = {
            ...state.auth,
            name: data.name,
            email: data.email
        }
    },
    updateUser(state, data) {
        if (+state.auth.id === +data.id) {
            state.auth = {
                ...state.auth,
                name: data.name,
                email: data.email,
                discount: data.discount
            };
        }

        state.users = state.users.map(user => {
            if (+user.id === +data.id) {
                user.name = data.name;
                user.email = data.email;
                user.discount = data.discount;
            }

            return user;
        });
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
    },
    setUsers(state, users) {
        state.users = users;
    }
}

export default mutations;