<template>
    <div class="orders">

        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li>
                    <router-link to="/dashboard">Dashboard</router-link>
                </li>
                <li class="is-active">
                    <a href="#" aria-current="page">
                        Orders
                    </a>
                </li>
            </ul>
        </nav>

        <template v-if="getOrdersCount > 0">
            <div class="orders__sortControl">
                <div class="select is-small">
                    <select v-model="sort">
                        <option value="">Sort by</option>
                        <option value="PRICE_ASC">Price:asc</option>
                        <option value="PRICE_DESC">Price:desc</option>
                        <option value="DISCOUNT_ASC">Discount:asc</option>
                        <option value="DISCOUNT_DESC">Discount:desc</option>
                        <option value="CREATED_ASC">Created:asc</option>
                        <option value="CREATED_DESC">Created:desc</option>
                    </select>
                </div>
            </div>

            <table class="table is-fullwidth is-striped is-hoverable">

                <thead>
                    <tr>
                        <th>#</th>
                        <th>User</th>
                        <th>Status</th>
                        <th>Payment Type</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Created At</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    <order-item v-for="order in sortedOrders" 
                                v-bind:key="order.id" 
                                v-bind:order="order"></order-item>

                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>{{ getOrdersTotalPrice | price }}</th>
                        <th>{{ getOrdersTotalDiscount | price }}</th>
                        <th></th>
                        <th></th>
                    </tr>
                </tfoot>

            </table>
        </template>

        <div v-else class="column has-text-centered">
            There are no orders yet.
        </div>

    </div>
</template>

<script>
import Vuex from 'vuex'
import OrderItem from './OrderItem'

export default {
    name: 'orders',
    components: {
        'order-item': OrderItem
    },
    data() {
        return {
            sort: 'CREATED_DESC'
        }
    },
    computed: {
        ...Vuex.mapState([
            'orders'
        ]),
        ...Vuex.mapGetters([
            'getOrdersCount',
            'getOrdersTotalPrice',
            'getOrdersTotalDiscount'
        ]),
        sortedOrders() {
            let orders = [...this.orders];

            switch (this.sort) {
                case "PRICE_ASC":
                    orders.sort((a, b) => {
                        return +a.total_price > +b.total_price;
                    });
                    break;
                case "PRICE_DESC":
                    orders.sort((a, b) => {
                        return +a.total_price < +b.total_price;
                    });
                    break;
                case "DISCOUNT_ASC":
                    orders.sort((a, b) => {
                        return +a.total_discount > +b.total_discount;
                    });
                    break;
                case "DISCOUNT_DESC":
                    orders.sort((a, b) => {
                        return +a.total_discount < +b.total_discount;
                    });
                    break;
                case "CREATED_ASC":
                    orders.sort((a, b) => {
                        const createdA = new Date(a.created_at);
                        const createdB = new Date(b.created_at);

                        return createdA - createdB;
                    });
                    break;
                case "CREATED_DESC":
                    orders.sort((a, b) => {
                        const createdA = new Date(a.created_at);
                        const createdB = new Date(b.created_at);

                        return createdB - createdA;
                    });
                    break;
            }

            return orders;
        }
    }
}
</script>

<style lang="scss" scoped>
.orders {
    .table {
        margin-top: 1rem;
    }

    &__sortControl {
        text-align: right;
    }

}
</style>


