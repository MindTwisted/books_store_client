<template>
    <tr class="orderItem">
        <td>{{ order.id }}</td>
        <td>{{ order.user.name }}</td>
        <td>{{ formatStatus(order.status) }}</td>
        <td>{{ order.payment_type }}</td>
        <td>{{ order.total_price | price }}</td>
        <td>{{ order.total_discount | price }}</td>
        <td>{{ order.created_at }}</td>
        <td class="orderItem__actions">
            <router-link v-bind:to="'/dashboard/orders/' + order.id" 
                        class="button is-info is-small">Details</router-link>
            <router-link v-bind:to="'/dashboard/orders/' + order.id + '/edit'" 
                        class="button is-primary is-small">Edit</router-link>
            <button v-if="!isLoading" 
                    v-on:click="handleDeleteOrder(order.id)" 
                    class="button is-danger is-small">Delete</button>
            <button v-else class="button is-danger is-small is-loading" disabled>
                Delete
            </button>
        </td>
    </tr>
</template>

<script>
import Vuex from 'vuex'

export default {
    name: 'order-item',
    props: {
        order: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isLoading: false
        }
    },
    methods: {
        ...Vuex.mapActions([
            'deleteOrder'
        ]),
        formatStatus(value) {
            return value.split(/[_\-\s]/).map(item => {
                return item[0].toUpperCase() + item.slice(1);
            }).join(' ');
        },
        handleDeleteOrder(id) {
            this.isLoading = true;

            this.deleteOrder(id)
            .finally(() => {
                this.isLoading = false;
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.orderItem {
    &__actions {
        .button {
            margin-right: 0.25rem;
        }
    }
}
</style>

