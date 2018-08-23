import {rootUrl} from './urls'
import axios from 'axios'

export default {
    fetchAuthors() {
        const url = `${rootUrl}/api/authors`;

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