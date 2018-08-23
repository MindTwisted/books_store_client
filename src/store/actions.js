import api from '../api'

const actions = {
    getBooks(context, data = {}) {
        api.fetchBooks(data)
            .then(response => {
                context.commit('setBooks', response.data.message.data);
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