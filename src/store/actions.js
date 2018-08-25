import Vue from 'vue'
import api from '../api'
import router from '../router'

const actions = {
    getBooks(context) {
        api.fetchBooks()
            .then(response => {
                context.commit('setBooks', response.data.message.data);
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
    getAuthors(context) {
        api.fetchAuthors()
            .then(response => {
                context.commit('setAuthors', response.data.message.data);
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
        api.fetchGenres()
            .then(response => {
                context.commit('setGenres', response.data.message.data);
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
        api.registerUser(data)
            .then(response => {
                Vue.notify({
                    group: 'messages',
                    title: 'Success',
                    type: 'success',
                    text: response.data.message.text
                });

                context.commit('removeRegisterModal');
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
    loginUser(context, data) {
        let token;
        let text;

        api.loginUser(data)
            .then(response => {
                token = response.data.message.data.token;
                text = response.data.message.text;

                return api.fetchAuthUser();
            })
            .then(response => {
                const data = response.data.message.data;

                context.commit('setAuth', {
                    token: token,
                    name: data.name,
                    email: data.email,
                    role: data.role,
                    discount: data.discount
                });

                context.dispatch('getCart');

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
    logoutUser(context) {
        api.logoutUser()
            .then(response => {
                context.commit('removeAuth');

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
    updateUser(context, data) {
        return new Promise((resolve, reject) => {
            api.updateUser(data)
                .then(response => {
                    context.commit('updateUser', {
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
    getCart(context) {
        api.fetchCart()
            .then(response => {
                context.commit('setCart', response.data.message.data);
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
    deleteFromCart(context, bookId) {
        api.deleteFromCart(bookId)
            .then(response => {
                context.commit('deleteFromCart', bookId);

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