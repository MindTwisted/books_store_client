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
    },
    deleteAuthor(id) {
        return new Promise((resolve, reject) => {
            axios.delete(`${rootUrl}/api/authors/${id}`)
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },
    addAuthor(name) {
        return new Promise((resolve, reject) => {
            axios.post(
                `${rootUrl}/api/authors`,
                `name=${name}`
                )
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },
    updateAuthor(data) {
        return new Promise((resolve, reject) => {
            axios.put(
                `${rootUrl}/api/authors/${data.id}`,
                `name=${data.name}`
                )
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    }
}