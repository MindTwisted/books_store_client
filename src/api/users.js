import {rootUrl} from './urls'
import axios from 'axios'

export default {
    registerUser(data) {
        return new Promise((resolve, reject) => {
            axios.post(
                    `${rootUrl}/api/users/`,
                    `name=${data.name}&email=${data.email}&password=${data.password}`
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