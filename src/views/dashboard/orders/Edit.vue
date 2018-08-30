<template>
    <div class="edit">

        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li>
                    <router-link to="/dashboard">Dashboard</router-link>
                </li>
                <li>
                    <router-link to="/dashboard/orders">Orders</router-link>
                </li>
                <li class="is-active">
                    <a href="#" aria-current="page">
                        Edit order # {{ order.id }}
                    </a>
                </li>
            </ul>
        </nav>

        <div class="edit__form">

            <div class="field">
                
                <label class="label">Status</label>
                <div v-bind:class="{ select:true, 'is-danger':$v.status.$dirty && !$v.status.required }">
                    <select v-model.trim="$v.status.$model">
                        <option value="in_process">In Process</option>
                        <option value="done">Done</option>
                    </select>
                </div>
                <ul class="help is-danger">
                    <li v-if="$v.status.$dirty && !$v.status.required">
                        Field is required.
                    </li>
                </ul>
                
            </div>

            <div class="field">
                <button v-if="!isLoading" v-on:click="handleUpdateOrder" 
                        class="button is-success">
                    Update
                </button>
                <button v-else class="button is-success is-loading" disabled>
                    Update
                </button>
            </div>

        </div>

        

    </div>
</template>

<script>
import Vuex from 'vuex'
import { required } from 'vuelidate/lib/validators'

export default {
    name: 'Edit',
    data() {
        return {
            status: '',
            isLoading: false
        }
    },
    validations: {
        status: {
            required
        }
    },
    mounted() {
        this.status = this.order.status;
    },
    computed: {
        ...Vuex.mapGetters([
            'getOrderById'
        ]),
        order() {
            return this.getOrderById(this.$route.params.id);
        }
    },
    methods: {
        ...Vuex.mapActions([
            'updateOrder'
        ]),
        handleUpdateOrder() {
            this.$v.$touch();

            if (this.$v.$invalid) {
                return false;
            }

            if (this.status == this.order.status) {
                return this.$router.push('/dashboard/orders');
            }

            this.isLoading = true;

            this.updateOrder({
                id: this.order.id,
                status: this.status
            })
            .finally(() => {
                this.isLoading = false;
            });
        }
    }
}
</script>


