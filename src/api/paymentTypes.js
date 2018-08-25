import {rootUrl} from './urls'
import axios from 'axios'

export default {
    fetchPaymentTypes() {
        return new Promise((resolve, reject) => {
            axios.get(`${rootUrl}/api/payment-types/`)
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    }
}