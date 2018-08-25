<template>
    <div class="cart">

        <div class="container">

            <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li>
                        <router-link to="/">Main</router-link>
                    </li>
                    <li class="is-active">
                        <a href="#" aria-current="page">
                            Cart
                        </a>
                    </li>
                </ul>
            </nav>

            <div v-if="getCartCount > 0">
                
                <cart-item v-for="item in cart" 
                           v-bind:key="item.id"
                           v-bind:item="item"
                           v-bind:priceWithDiscount="priceWithDiscount"></cart-item>

                <p class="is-size-3 has-text-success">
                    Cart total: {{ totalCartPrice().toFixed(2) | price }}
                </p>

            </div>

            <div v-else class="column has-text-centered">
              There are no items in cart yet.
            </div>

        </div>

    </div>
</template>

<script>
import Vuex from 'vuex'
import CartItem from '../components/CartItem.vue'

export default {
    name: 'cart',
    components: {
        'cart-item': CartItem
    },
    computed: {
        ...Vuex.mapState([
            'cart'
        ]),
        ...Vuex.mapGetters([
            'getCartCount'
        ])
    },
    methods: {
        priceWithDiscount(price, discount) {
            return (price - price * (discount / 100)).toFixed(2);
        },
        totalCartPrice() {
            return this.cart.reduce((acc, curr) => {
                const currPrice = curr.count * this.priceWithDiscount(curr.book.price, curr.book.discount);
                
                return acc + currPrice;
            }, 0);
        }
    }
}
</script>

