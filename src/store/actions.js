import api from '../api'

const actions = {
    getBooks(context) {
        api.fetchBooks()
            .then(response => {
                context.commit('setBooks', response.data.message.data);
            })
            .catch(error => {
                // eslint-disable-next-line
                console.log(error);
            })
            .finally(() => {
                
            });
    },
    getAuthors(context) {
        api.fetchAuthors()
            .then(response => {
                context.commit('setAuthors', response.data.message.data);
            })
            .catch(error => {
                // eslint-disable-next-line
                console.log(error);
            })
            .finally(() => {
                
            });
    },
    getGenres(context) {
        api.fetchGenres()
            .then(response => {
                context.commit('setGenres', response.data.message.data);
            })
            .catch(error => {
                // eslint-disable-next-line
                console.log(error);
            })
            .finally(() => {
                
            });
    }
}

export default actions;