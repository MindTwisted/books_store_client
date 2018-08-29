import Vue from 'vue'
import api from '../api'
import router from '../router'

const actions = {
    getBooks(context) {
        return new Promise((resolve, reject) => {
            api.fetchBooks()
                .then(response => {
                    context.commit('setBooks', response.data.message.data);

                    resolve();
                })
                .catch(error => {
                    Vue.notify({
                        group: 'messages',
                        title: 'Error',
                        type: 'error',
                        text: error.data.message.text
                    });

                    reject();
                });
        });
    },
    deleteBook(context, id) {
        api.deleteBook(id)
            .then(response => {
                context.commit('deleteBook', id);
                
                Vue.notify({
                    group: 'messages',
                    title: 'Success',
                    type: 'success',
                    text: response.data.message.text
                });
            })
            .catch(error => {
                Vue.notify({
                    group: 'messages',
                    title: 'Error',
                    type: 'error',
                    text: error.data.message.text
                });
            });
    },
    addBook(context, data) {
        api.addBook(data)
            .then(response => {
                context.commit('addBook', {
                    id: response.data.message.data.id,
                    ...data
                });

                Vue.notify({
                    group: 'messages',
                    title: 'Success',
                    type: 'success',
                    text: response.data.message.text
                });

                router.push('/dashboard/books');
            })
            .catch(error => {
                Vue.notify({
                    group: 'messages',
                    title: 'Error',
                    type: 'error',
                    text: error.data.message.text
                });
            });
    },
    updateBook(context, data) {
        api.updateBook(data)
            .then(response => {
                context.commit('updateBook', data);

                Vue.notify({
                    group: 'messages',
                    title: 'Success',
                    type: 'success',
                    text: response.data.message.text
                });

                router.push('/dashboard/books');
            })
            .catch(error => {
                Vue.notify({
                    group: 'messages',
                    title: 'Error',
                    type: 'error',
                    text: error.data.message.text
                });
            });
    },
    updateBookAuthors(context, data) {
        return new Promise((resolve, reject) => {
            api.updateBookAuthors(data)
                .then(response => {
                    context.commit('updateBookAuthors', data);

                    Vue.notify({
                        group: 'messages',
                        title: 'Success',
                        type: 'success',
                        text: response.data.message.text
                    });

                    resolve();
                })
                .catch(error => {
                    Vue.notify({
                        group: 'messages',
                        title: 'Error',
                        type: 'error',
                        text: error.data.message.text
                    });

                    reject();
                });
        });
    },
    updateBookGenres(context, data) {
        return new Promise((resolve, reject) => {
            api.updateBookGenres(data)
                .then(response => {
                    context.commit('updateBookGenres', data);

                    Vue.notify({
                        group: 'messages',
                        title: 'Success',
                        type: 'success',
                        text: response.data.message.text
                    });

                    resolve();
                })
                .catch(error => {
                    Vue.notify({
                        group: 'messages',
                        title: 'Error',
                        type: 'error',
                        text: error.data.message.text
                    });

                    reject();
                });
        });
    },
    updateBookImage(context, data) {
        return new Promise((resolve, reject) => {
            api.updateBookImage(data)
                .then(response => {
                    context.commit('updateBookImage', {
                        id: data.id,
                        imageUrl: response.data.message.data.imageUrl
                    });

                    Vue.notify({
                        group: 'messages',
                        title: 'Success',
                        type: 'success',
                        text: response.data.message.text
                    });

                    resolve();
                })
                .catch(error => {
                    Vue.notify({
                        group: 'messages',
                        title: 'Error',
                        type: 'error',
                        text: error.data.message.text
                    });

                    reject();
                });
        });
    },
    getAuthors(context) {
        return new Promise((resolve, reject) => {
            api.fetchAuthors()
                .then(response => {
                    context.commit('setAuthors', response.data.message.data);

                    resolve();
                })
                .catch(error => {
                    Vue.notify({
                        group: 'messages',
                        title: 'Error',
                        type: 'error',
                        text: error.data.message.text
                    });

                    reject();
                });
        });
    },
    deleteAuthor(context, id) {
        api.deleteAuthor(id)
            .then(response => {
                context.commit('deleteAuthor', id);
                
                Vue.notify({
                    group: 'messages',
                    title: 'Success',
                    type: 'success',
                    text: response.data.message.text
                });
            })
            .catch(error => {
                Vue.notify({
                    group: 'messages',
                    title: 'Error',
                    type: 'error',
                    text: error.data.message.text
                });
            });
    },
    addAuthor(context, name) {
        api.addAuthor(name)
            .then(response => {
                context.commit('addAuthor', {
                    id: response.data.message.data.id,
                    name: name
                });

                Vue.notify({
                    group: 'messages',
                    title: 'Success',
                    type: 'success',
                    text: response.data.message.text
                });

                router.push('/dashboard/authors');
            })
            .catch(error => {
                Vue.notify({
                    group: 'messages',
                    title: 'Error',
                    type: 'error',
                    text: error.data.message.text
                });
            });
    },
    updateAuthor(context, data) {
        api.updateAuthor(data)
            .then(response => {
                context.commit('updateAuthor', {
                    id: data.id,
                    name: data.name
                });

                Vue.notify({
                    group: 'messages',
                    title: 'Success',
                    type: 'success',
                    text: response.data.message.text
                });

                router.push('/dashboard/authors');
            })
            .catch(error => {
                Vue.notify({
                    group: 'messages',
                    title: 'Error',
                    type: 'error',
                    text: error.data.message.text
                });
            });
    },
    getGenres(context) {
        return new Promise((resolve, reject) => {
            api.fetchGenres()
                .then(response => {
                    context.commit('setGenres', response.data.message.data);

                    resolve();
                })
                .catch(error => {
                    Vue.notify({
                        group: 'messages',
                        title: 'Error',
                        type: 'error',
                        text: error.data.message.text
                    });

                    reject();
                });
        });
    },
    deleteGenre(context, id) {
        api.deleteGenre(id)
            .then(response => {
                context.commit('deleteGenre', id);
                
                Vue.notify({
                    group: 'messages',
                    title: 'Success',
                    type: 'success',
                    text: response.data.message.text
                });
            })
            .catch(error => {
                Vue.notify({
                    group: 'messages',
                    title: 'Error',
                    type: 'error',
                    text: error.data.message.text
                });
            });
    },
    addGenre(context, name) {
        api.addGenre(name)
            .then(response => {
                context.commit('addGenre', {
                    id: response.data.message.data.id,
                    name: name
                });

                Vue.notify({
                    group: 'messages',
                    title: 'Success',
                    type: 'success',
                    text: response.data.message.text
                });

                router.push('/dashboard/genres');
            })
            .catch(error => {
                Vue.notify({
                    group: 'messages',
                    title: 'Error',
                    type: 'error',
                    text: error.data.message.text
                });
            });
    },
    updateGenre(context, data) {
        api.updateGenre(data)
            .then(response => {
                context.commit('updateGenre', {
                    id: data.id,
                    name: data.name
                });

                Vue.notify({
                    group: 'messages',
                    title: 'Success',
                    type: 'success',
                    text: response.data.message.text
                });

                router.push('/dashboard/genres');
            })
            .catch(error => {
                Vue.notify({
                    group: 'messages',
                    title: 'Error',
                    type: 'error',
                    text: error.data.message.text
                });
            });
    },
    registerUser(context, data) {
        return new Promise((resolve, reject) => {
            api.registerUser(data)
                .then(response => {
                    Vue.notify({
                        group: 'messages',
                        title: 'Success',
                        type: 'success',
                        text: response.data.message.text
                    });

                    context.commit('removeRegisterModal');
                    context.commit('setLoginModal');

                    resolve();
                })
                .catch(error => {
                    Vue.notify({
                        group: 'messages',
                        title: 'Error',
                        type: 'error',
                        text: error.data.message.text
                    });

                    reject();
                });
        });
    },
    loginUser(context, data) {
        let token;
        let text;

        return new Promise((resolve, reject) => {
            api.loginUser(data)
                .then(response => {
                    token = response.data.message.data.token;
                    text = response.data.message.text;

                    return api.fetchAuthUser();
                })
                .then(response => {
                    const data = response.data.message.data;

                    context.commit('setAuth', {
                        id: data.id,
                        token: token,
                        name: data.name,
                        email: data.email,
                        role: data.role,
                        discount: data.discount
                    });

                    context.dispatch('getCart');
                    context.dispatch('getPaymentTypes');

                    localStorage.setItem('id', data.id);
                    localStorage.setItem('token', token);
                    localStorage.setItem('name', data.name);
                    localStorage.setItem('email', data.email);
                    localStorage.setItem('role', data.role);
                    localStorage.setItem('discount', data.discount);

                    Vue.notify({
                        group: 'messages',
                        title: 'Success',
                        type: 'success',
                        text: text
                    });

                    context.commit('removeLoginModal');

                    resolve();
                })  
                .catch(error => {
                    Vue.notify({
                        group: 'messages',
                        title: 'Error',
                        type: 'error',
                        text: error.data.message.text
                    });

                    reject();
                });
        });
    },
    logoutUser(context) {
        api.logoutUser()
            .then(response => {
                context.commit('removeAuth');

                localStorage.removeItem('id');
                localStorage.removeItem('token');
                localStorage.removeItem('name');
                localStorage.removeItem('email');
                localStorage.removeItem('role');
                localStorage.removeItem('discount');

                Vue.notify({
                    group: 'messages',
                    title: 'Success',
                    type: 'success',
                    text: response.data.message.text
                });

                router.push('/');
            })
            .catch(error => {
                Vue.notify({
                    group: 'messages',
                    title: 'Error',
                    type: 'error',
                    text: error.data.message.text
                });
            });
    },
    updateCurrentUser(context, data) {
        return new Promise((resolve, reject) => {
            api.updateCurrentUser(data)
                .then(response => {
                    context.commit('updateCurrentUser', {
                        name: data.name,
                        email: data.email
                    });

                    localStorage.setItem('name', data.name);
                    localStorage.setItem('email', data.email);

                    Vue.notify({
                        group: 'messages',
                        title: 'Success',
                        type: 'success',
                        text: response.data.message.text
                    });

                    resolve();
                })
                .catch(error => {
                    Vue.notify({
                        group: 'messages',
                        title: 'Error',
                        type: 'error',
                        text: error.data.message.text
                    });

                    reject();
                });
        });
    },
    updateUser(context, data) {
        api.updateUser(data)
            .then(response => {
                context.commit('updateUser', data);

                if (+context.state.auth.id === +data.id) {
                    localStorage.setItem('name', data.name);
                    localStorage.setItem('email', data.email);
                    localStorage.setItem('discount', data.discount);
                }

                Vue.notify({
                    group: 'messages',
                    title: 'Success',
                    type: 'success',
                    text: response.data.message.text
                });

                router.push('/dashboard/users');
            })
            .catch(error => {
                Vue.notify({
                    group: 'messages',
                    title: 'Error',
                    type: 'error',
                    text: error.data.message.text
                });
            });
    }, 
    getCart(context) {
        return new Promise((resolve, reject) => {
            api.fetchCart()
                .then(response => {
                    context.commit('setCart', response.data.message.data);

                    resolve();
                })
                .catch(error => {
                    Vue.notify({
                        group: 'messages',
                        title: 'Error',
                        type: 'error',
                        text: error.data.message.text
                    });

                    reject();
                });
        });
    },
    deleteFromCart(context, bookId) {
        return new Promise((resolve, reject) => {
            api.deleteFromCart(bookId)
                .then(response => {
                    context.commit('deleteFromCart', bookId);

                    Vue.notify({
                        group: 'messages',
                        title: 'Success',
                        type: 'success',
                        text: response.data.message.text
                    });

                    resolve();
                })
                .catch(error => {
                    Vue.notify({
                        group: 'messages',
                        title: 'Error',
                        type: 'error',
                        text: error.data.message.text
                    });

                    reject();
                });
        });
    },
    updateInCart(context, data) {
        return new Promise((resolve, reject) => {
            api.updateInCart(data)
                .then(response => {
                    context.commit('updateInCart', data);

                    Vue.notify({
                        group: 'messages',
                        title: 'Success',
                        type: 'success',
                        text: response.data.message.text
                    });

                    resolve();
                })
                .catch(error => {
                    Vue.notify({
                        group: 'messages',
                        title: 'Error',
                        type: 'error',
                        text: error.data.message.text
                    });

                    reject();
                });
        });
    },
    fakeAddToCart(context) {
        context.commit('setLoginModal');

        Vue.notify({
            group: 'messages',
            title: 'Warning',
            type: 'warn',
            text: 'Нou must be logged-in to make a purchase.'
        });
    },
    addToCart(context, data) {
        return new Promise((resolve, reject) => {
            api.addToCart(data)
                .then(response => {
                    context.commit('addToCart', {
                        id: response.data.message.data.id,
                        bookId: data.bookId,
                        count: data.count
                    });
                    
                    Vue.notify({
                        group: 'messages',
                        title: 'Success',
                        type: 'success',
                        text: response.data.message.text
                    });

                    resolve();
                })
                .catch(error => {
                    Vue.notify({
                        group: 'messages',
                        title: 'Error',
                        type: 'error',
                        text: error.data.message.text
                    });

                    reject();
                });
        });
    },
    getPaymentTypes(context) {
        return new Promise((resolve, reject) => {
            api.fetchPaymentTypes()
                .then(response => {
                    context.commit('setPaymentTypes', response.data.message.data);

                    resolve();
                })
                .catch(error => {
                    Vue.notify({
                        group: 'messages',
                        title: 'Error',
                        type: 'error',
                        text: error.data.message.text
                    });

                    reject();
                });
        });
    },
    addOrder(context, paymentType) {
        return new Promise((resolve, reject) => {
            api.addOrder(paymentType)
                .then(response => {
                    context.commit('removeCart');

                    Vue.notify({
                        group: 'messages',
                        title: 'Success',
                        type: 'success',
                        text: response.data.message.text
                    });

                    router.push('/orders');

                    resolve();
                })
                .catch(error => {
                    Vue.notify({
                        group: 'messages',
                        title: 'Error',
                        type: 'error',
                        text: error.data.message.text
                    });

                    reject();
                });
        });
    },
    getOrders(context) {
        api.fetchOrders()
            .then(response => {
                context.commit('setOrders', response.data.message.data);
            })
            .catch(error => {
                Vue.notify({
                    group: 'messages',
                    title: 'Error',
                    type: 'error',
                    text: error.data.message.text
                });
            });
    },
    deleteOrder(context, id) {
        api.deleteOrder(id)
            .then(response => {
                context.commit('deleteOrder', id);
                
                Vue.notify({
                    group: 'messages',
                    title: 'Success',
                    type: 'success',
                    text: response.data.message.text
                });
            })
            .catch(error => {
                Vue.notify({
                    group: 'messages',
                    title: 'Error',
                    type: 'error',
                    text: error.data.message.text
                });
            });
    },
    updateOrder(context, data) {
        api.updateOrder(data)
            .then(response => {
                context.commit('updateOrder', data);

                Vue.notify({
                    group: 'messages',
                    title: 'Success',
                    type: 'success',
                    text: response.data.message.text
                });

                router.push('/dashboard/orders');
            })
            .catch(error => {
                Vue.notify({
                    group: 'messages',
                    title: 'Error',
                    type: 'error',
                    text: error.data.message.text
                });
            });
    },
    getUsers(context) {
        api.fetchUsers()
            .then(response => {
                context.commit('setUsers', response.data.message.data);
            })
            .catch(error => {
                Vue.notify({
                    group: 'messages',
                    title: 'Error',
                    type: 'error',
                    text: error.data.message.text
                });
            });
    }
}

export default actions;