import {rootUrl} from './urls'
import axios from 'axios'

export default {
    fetchBooks() {
        const url = `${rootUrl}/api/books`;

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