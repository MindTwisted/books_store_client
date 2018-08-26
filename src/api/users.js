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
    loginUser(data) {
        return new Promise((resolve, reject) => {
            axios.post(
                    `${rootUrl}/api/auth/`,
                    `email=${data.email}&password=${data.password}`
                )
                .then(response => {
                    const AUTH_TOKEN = response.data.message.data.token;

                    axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;
                    
                    resolve(response);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },
    logoutUser() {
        return new Promise((resolve, reject) => {
            axios.delete(`${rootUrl}/api/auth/`)
                .then(response => {
                    delete axios.defaults.headers.common['Authorization'];

                    resolve(response);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },
    fetchAuthUser() {
        return new Promise((resolve, reject) => {
            axios.get(`${rootUrl}/api/auth/`)
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },
    updateCurrentUser(data) {
        return new Promise((resolve, reject) => {
            axios.put(
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
    updateUser(data) {
        return new Promise((resolve, reject) => {
            axios.put(
                `${rootUrl}/api/users/${data.id}`,
                `name=${data.name}&email=${data.email}&discount=${data.discount}`
                )
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },
    fetchUsers() {
        return new Promise((resolve, reject) => {
            axios.get(`${rootUrl}/api/users/`)
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error.response);
                });
        });
    },
}