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
    deleteBook(state, id) {
        state.books = state.books.filter(book => +book.id !== +id);

        state.cart = state.cart.filter(cartItem => +cartItem.book.id !== +id);
    },
    addBook(state, data) {
        state.books.push({
            id: data.id,
            title: data.title,
            description: data.description,
            price: data.price,
            discount: data.discount,
            image_url: null,
            authors: [],
            genres: []
        });
    },
    updateBook(state, data) {
        state.books = state.books.map(book => {
            if (+book.id === +data.id) {
                book.title = data.title;
                book.description = data.description;
                book.price = data.price;
                book.discount = data.discount;
            }

            return book;
        });

        state.cart = state.cart.map(cartItem => {
            if (+cartItem.book.id === +data.id) {
                cartItem.book.title = data.title;
                cartItem.book.description = data.description;
                cartItem.book.price = data.price;
                cartItem.book.discount = data.discount;
            }

            return cartItem;
        });
    },
    updateBookAuthors(state, data) {
        state.books = state.books.map(book => {
            if (+book.id === +data.id) {
                book.authors = data.authors;
            }

            return book;
        });
    },
    updateBookGenres(state, data) {
        state.books = state.books.map(book => {
            if (+book.id === +data.id) {
                book.genres = data.genres;
            }

            return book;
        });
    },
    updateBookImage(state, data) {
        state.books = state.books.map(book => {
            if (+book.id === +data.id) {
                book.image_url = data.imageUrl;
            }

            return book;
        });
    },
    setAuthors(state, authors) {
        state.authors = authors;
    },
    deleteAuthor(state, id) {
        state.authors = state.authors.filter(author => +author.id !== +id);

        state.books = state.books.map(book => {
            const authorId = book.authors.findIndex(author => +author.id === +id);

            if (authorId !== -1) {
                book.authors.splice(authorId, 1);
            }

            return book;
        });
    },
    addAuthor(state, data) {
        state.authors.push(data);
    },
    updateAuthor(state, data) {
        state.authors = state.authors.map(author => {
            if (+author.id === +data.id) {
                author.name = data.name;
            }

            return author;
        });

        state.books = state.books.map(book => {
            const authorId = book.authors.findIndex(author => +author.id === +data.id);

            if (authorId !== -1) {
                book.authors[authorId].name = data.name;
            }

            return book;
        });
    },
    setGenres(state, genres) {
        state.genres = genres;
    },
    deleteGenre(state, id) {
        state.genres = state.genres.filter(genre => +genre.id !== +id);

        state.books = state.books.map(book => {
            const genreId = book.genres.findIndex(genre => +genre.id === +id);

            if (genreId !== -1) {
                book.genres.splice(genreId, 1);
            }

            return book;
        });
    },
    addGenre(state, data) {
        state.genres.push(data);
    },
    updateGenre(state, data) {
        state.genres = state.genres.map(genre => {
            if (+genre.id === +data.id) {
                genre.name = data.name;
            }

            return genre;
        });

        state.books = state.books.map(book => {
            const genreId = book.genres.findIndex(genre => +genre.id === +data.id);

            if (genreId !== -1) {
                book.genres[genreId].name = data.name;
            }

            return book;
        });
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
            return +item.book.id !== +bookId;
        });
    },
    updateInCart(state, data) {
        state.cart = state.cart.map(item => {
            if (+item.book.id === +data.bookId) {
                item.count = data.count;
            }

            return item;
        });
    },
    addToCart(state, data) {
        const book = state.books.find(book => +book.id === +data.bookId);
        
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
    deleteOrder(state, id) {
        state.orders = state.orders.filter(order => +order.id !== +id);
    },
    updateOrder(state, data) {
        state.orders = state.orders.map(order => {
            if (+order.id === +data.id) {
                order.status = data.status;
            }

            return order;
        });
    },
    setUsers(state, users) {
        state.users = users;
    },
    setUniqueID(state) {
        state.uniqueID = +Date.now();
    }
}

export default mutations;