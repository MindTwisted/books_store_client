import {rootUrl} from './urls'
import axios from 'axios'

export default {
    fetchBooks(data) {
        const id = data.id || null;
        const search = data.search || {};

        let url = `${rootUrl}/api/books`;

        // if (search.param) {
        //     url = `${rootUrl}/cars/?param=${search.param}&value=${search.value}&maxValue=${search.maxValue}`;
        // }

        // if (id) {
        //     url = `${rootUrl}/cars/${id}/`;
        // }

        return new Promise((resolve, reject) => {
            axios.get(url)
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    }
}