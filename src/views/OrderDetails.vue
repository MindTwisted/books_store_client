<template>
    <div class="orderDetails">

        <div class="container">

            <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li>
                        <router-link to="/">Main</router-link>
                    </li>
                    <li>
                        <router-link to="/orders">Orders</router-link>
                    </li>
                    <li class="is-active">
                        <a href="#" aria-current="page">
                            Order # {{ order.id }}
                        </a>
                    </li>
                </ul>
            </nav>

            <div class="card">
                <div class="card-content">
                    <p class="title">Order #{{ order.id }} by {{ order.user.name }}</p>
                    <p class="subtitle">Status: {{ formatStatus(order.status) }}</p>
                    <p>Payment Type: {{ order.payment_type }}</p>
                    <p>Total Price: {{ order.total_price | price }}</p>
                    <p>Total Discount: {{ order.total_discount | price }}</p>
                    <p>Created At: {{ order.created_at }}</p>

                    <div class="orderDetails__booksList">
                        Books:
                        <ol>
                            <li v-for="book in order.books" 
                                v-bind:key="book.id">
                                <p>Title: {{ book.title }}</p>
                                <p>Count: {{ book.count }}</p>
                                <p>Price: {{ book.price }}</p>
                                <p>Discount: {{ book.discount }}</p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import Vuex from 'vuex'

export default {
    name: 'OrderDetails',
    computed: {
        ...Vuex.mapGetters([
            'getOrderById'
        ]),
        order() {
            return this.getOrderById(this.$route.params.id);
        }
    },
    methods: {
        formatStatus(value) {
            return value.split(/[\_\-\s]/).map(item => {
                return item[0].toUpperCase() + item.slice(1);
            }).join(' ');
        },
    }
}
</script>

<style lang="scss" scoped>
.orderDetails {
    &__booksList {
        margin-top: 1rem;

        ol {
            margin-left: 1rem;
            font-size: 0.9rem;
        }

        li {
            margin-bottom: 0.5rem;
        }
    }
}
</style>


