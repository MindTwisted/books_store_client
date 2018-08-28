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
    },
    deleteBook(id) {
        return new Promise((resolve, reject) => {
            axios.delete(`${rootUrl}/api/books/${id}`)
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },
    addBook(data) {
        return new Promise((resolve, reject) => {
            axios.post(
                `${rootUrl}/api/books`,
                `title=${data.title}&description=${data.description}&price=${data.price}&discount=${data.discount}`
                )
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },
    updateBook(data) {
        return new Promise((resolve, reject) => {
            axios.put(
                `${rootUrl}/api/books/${data.id}`,
                `title=${data.title}&description=${data.description}&price=${data.price}&discount=${data.discount}`
                )
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },
}