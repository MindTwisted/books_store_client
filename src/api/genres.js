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
    },
    deleteGenre(id) {
        return new Promise((resolve, reject) => {
            axios.delete(`${rootUrl}/api/genres/${id}`)
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },
    addGenre(name) {
        return new Promise((resolve, reject) => {
            axios.post(
                `${rootUrl}/api/genres`,
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
    updateGenre(data) {
        return new Promise((resolve, reject) => {
            axios.put(
                `${rootUrl}/api/genres/${data.id}`,
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