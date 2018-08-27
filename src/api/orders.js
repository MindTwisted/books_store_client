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
    },
    deleteOrder(id) {
        return new Promise((resolve, reject) => {
            axios.delete(`${rootUrl}/api/orders/${id}`)
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },
    updateOrder(data) {
        return new Promise((resolve, reject) => {
            axios.put(
                `${rootUrl}/api/orders/${data.id}`,
                `status=${data.status}`
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