import {rootUrl} from './urls'
import axios from 'axios'

export default {
    fetchOrders() {
        return new Promise((resolve, reject) => {
            axios.get(`${rootUrl}/api/orders/`)
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },
    addOrder(paymentType) {
        return new Promise((resolve, reject) => {
            axios.post(
                `${rootUrl}/api/orders/`,
                `payment_type=${paymentType}`
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