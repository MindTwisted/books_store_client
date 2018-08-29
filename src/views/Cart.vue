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

                <p class="is-size-5">Personal discount: {{ auth.discount | percent }}</p>
                <p class="is-size-3 has-text-success">
                    Total with discount: 
                    {{ totalCartPriceWithUserDiscount().toFixed(2) | price }}
                </p>

                <div class="orderBox">
                    <button v-if="!isPurchasing" 
                        v-on:click="setPurchasing"
                        class="button is-success is-large">Purchase</button>
                    <div v-else>
                        <div class="field">
                            <div v-bind:class="{ select:true, 'is-danger':$v.paymentType.$dirty && !$v.paymentType.required, 'is-success':$v.paymentType.$dirty && !$v.paymentType.$error }">
                                <select v-model.trim="$v.paymentType.$model">
                                    <option value="">Select payment type</option>
                                    <option v-for="type in paymentTypes" 
                                            v-bind:key="type.id" 
                                            v-bind:value="type.id">{{ type.name }}</option>
                                </select>
                            </div>
                            <ul class="help is-danger">
                                <li v-if="$v.paymentType.$dirty && !$v.paymentType.required">
                                    Field is required.
                                </li>
                            </ul>
                        </div>
                        <div class="field is-grouped">
                            <template v-if="!isLoading">
                                <p class="control">
                                    <button v-on:click="handlePurchase" 
                                            class="button is-success">Purchase</button>
                                </p>
                                <p class="control">
                                    <button v-on:click="removePurchasing"
                                            class="button">Cancel</button>
                                </p>
                            </template>
                            <button v-else class="button is-success is-loading" disabled>
                                Purchase
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            <div v-else class="column has-text-centered">
              There are no items in cart yet.
            </div>

        </div>

    </div>
</template>

<script>
import Vuex from 'vuex'
import { required } from 'vuelidate/lib/validators'
import CartItem from '../components/CartItem.vue'

export default {
    name: 'cart',
    components: {
        'cart-item': CartItem
    },
    data() {
        return {
            isPurchasing: false,
            paymentType: '',
            isLoading: false
        }
    },
    validations: {
        paymentType: {
            required
        }
    },
    computed: {
        ...Vuex.mapState([
            'cart',
            'auth',
            'paymentTypes'
        ]),
        ...Vuex.mapGetters([
            'getCartCount'
        ])
    },
    methods: {
        ...Vuex.mapActions([
            'addOrder'
        ]),
        priceWithDiscount(price, discount) {
            return (price - price * (discount / 100)).toFixed(2);
        },
        totalCartPriceWithUserDiscount() {
            return this.cart.reduce((acc, curr) => {
                const price = curr.book.price;

                const bookDiscount = curr.book.discount;
                const userDiscount = this.auth.discount;
                const totalDiscount = (+bookDiscount + +userDiscount) > 50 ?
                    50 : +bookDiscount + +userDiscount;

                const currPrice = curr.count * (price - price * (totalDiscount / 100));
                
                return acc + currPrice;
            }, 0);
        },
        setPurchasing() {
            this.isPurchasing = true;
        },
        removePurchasing() {
            this.isPurchasing = false;
            this.paymentType = '';
        },
        handlePurchase() {
            this.$v.$touch();

            if (this.$v.$invalid) {
                return false;
            }

            this.isLoading = true;

            this.addOrder(this.paymentType)
            .finally(() => {
                this.isLoading = false;
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.orderBox {
    margin-top: 1.5rem;
}
</style>

