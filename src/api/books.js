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
    updateBookAuthors(data) {
        const dataString = data.authors.map(author => `author[]=${author.id}`).join('&');

        return new Promise((resolve, reject) => {
            axios.post(
                `${rootUrl}/api/books/${data.id}/authors`,
                dataString
                )
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },
    updateBookGenres(data) {
        const dataString = data.genres.map(genre => `genre[]=${genre.id}`).join('&');

        return new Promise((resolve, reject) => {
            axios.post(
                `${rootUrl}/api/books/${data.id}/genres`,
                dataString
                )
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },
    updateBookImage(data) {
        let formData = new FormData();
        formData.append('image', data.image);

        return new Promise((resolve, reject) => {
            axios.post(
                `${rootUrl}/api/books/${data.id}/image`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },
}