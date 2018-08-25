import {rootUrl} from './urls'
import axios from 'axios'

export default {
    fetchCart() {
        return new Promise((resolve, reject) => {
            axios.get(`${rootUrl}/api/cart/`)
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },
    deleteFromCart(bookId) {
        return new Promise((resolve, reject) => {
            axios.delete(
                `${rootUrl}/api/cart/`,
                {
                    data: `book_id=${bookId}`
                })
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },
    updateInCart(data) {
        return new Promise((resolve, reject) => {
            axios.put(
                `${rootUrl}/api/cart/`,
                `book_id=${data.bookId}&count=${data.count}`
                )
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },
    addToCart(data) {
        return new Promise((resolve, reject) => {
            axios.post(
                `${rootUrl}/api/cart/`,
                `book_id=${data.bookId}&count=${data.count}`
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