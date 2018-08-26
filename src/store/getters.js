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
    },
    isAuth(state) {
        return state.auth.id && 
               state.auth.token && 
               state.auth.name && 
               state.auth.email && 
               state.auth.role && 
               state.auth.discount;
    },
    isAdmin(state) {
        return state.auth.id && 
               state.auth.token && 
               state.auth.name && 
               state.auth.email && 
               state.auth.role === 'admin' && 
               state.auth.discount;
    },
    getCartCount(state) {
        return state.cart.length;
    },
    isInCart(state) {
        return (id) => {
            return state.cart.findIndex(item => +item.book.id === +id) !== -1;
        }
    },
    getOrdersCount(state) {
        return state.orders.length;
    },
    getOrdersTotalPrice(state) {
        return state.orders.reduce((acc, curr) => {
            return +acc + +curr.total_price;
        }, 0).toFixed(2);
    },
    getOrdersTotalDiscount(state) {
        return state.orders.reduce((acc, curr) => {
            return +acc + +curr.total_discount;
        }, 0).toFixed(2);
    },
    getOrderById(state) {
        return (id) => {
            return state.orders.filter(order => +order.id === +id)[0];
        } 
    },
    getOrdersByUser(state) {
        return (id) => {
            return state.orders.filter(order => +order.user.id === +id);
        }
    },
    getUserById(state) {
        return (id) => {
            return state.users.filter(user => +user.id === +id)[0];
        }
    }
}

export default getters;