import Vue from 'vue'
import api from '../api'

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
}

export default actions;