import {rootUrl} from './urls'
import axios from 'axios'

export default {
    fetchGenres() {
        const url = `${rootUrl}/api/genres`;

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