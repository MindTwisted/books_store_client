<template>
    <div class="cartItem box">
        <loader v-if="isLoading"></loader>

        <button v-on:click="handleDeleteFromCart" 
                class="delete is-large has-background-danger"></button>
        <h2 class="title">{{ item.book.title }}</h2>

        <p>
            <template v-if="item.book.discount > 0">
                Price:
                <del class="has-text-grey-light is-size-6">{{ item.book.price }}</del>
                <strong class="has-text-weight-light">
                    {{ priceWithDiscount(item.book.price, item.book.discount) | price }}
                </strong>
            </template>
            <strong v-else class="has-text-weight-light">
                Price: {{ item.book.price | price }}
            </strong>
        </p>

        <p v-if="!isEditing">
            Count: {{ item.count }} 
            <button v-on:click="setEditing" 
                    class="button is-small is-info">Edit</button>
        </p>
        <template v-else>
            <p class="cartItem__editCount">
                <span class="control">
                    <input v-model.trim="$v.count.$model"  
                           v-bind:class="{ input:true, 'is-small':true, 'is-danger':$v.count.$error }" 
                           type="number">
                </span>
                <button v-on:click="handleUpdateCart" 
                        class="button is-small is-primary">Save</button>
                <button v-on:click="removeEditing" 
                        class="button is-small">Cancel</button>
            </p>
            <ul class="help is-danger">
                <li v-if="$v.count.$dirty && !$v.count.required">
                    Field is required.
                </li>
                <li v-if="!$v.count.integer">
                    Count value must be integer type.
                </li>
                <li v-if="!$v.count.minValue">
                    Count must be at least {{$v.count.$params.minValue.min}}.
                </li>
                <li v-if="!$v.count.maxValue">
                    Maximum count is {{$v.count.$params.maxValue.max}}.
                    For wholesale purchases, please contact the administration.
                </li>
            </ul>
        </template>

        <p class="is-size-5">
            Total: {{ totalItemPrice() | price }}
        </p>
    </div>
</template>

<script>
import Vuex from 'vuex'
import { required, integer, minValue, maxValue } from 'vuelidate/lib/validators'
import Loader from '@/components/Loader.vue'

export default {
    name: 'CartItem',
    components: {
        'loader': Loader
    },
    data() {
        return {
            isEditing: false,
            count: '',
            isLoading: false
        }
    },
    validations: {
        count: {
            required,
            integer,
            minValue: minValue(1),
            maxValue: maxValue(30)
        }
    },
    props: {
        item: {
            type: Object,
            required: true
        },
        priceWithDiscount: {
            type: Function,
            required: true
        }
    },
    methods: {
        ...Vuex.mapActions([
            'deleteFromCart',
            'updateInCart'
        ]),
        setEditing() {
            this.isEditing = true;
            this.count = this.item.count;
        },
        removeEditing() {
            this.isEditing = false;
            this.count = '';
        },
        totalItemPrice() {
            const totalPrice = this.priceWithDiscount(
                                    this.item.book.price, 
                                    this.item.book.discount) * this.item.count;

            return totalPrice.toFixed(2);
        },
        handleDeleteFromCart() {
            this.isLoading = true;
            
            this.deleteFromCart(this.item.book.id)
            .finally(() => {
                this.isLoading = false;
            });
        },
        handleUpdateCart() {
            this.$v.$touch();

            if (this.$v.$invalid) {
                return false;
            }

            if (this.count == this.item.count) {
                this.removeEditing();

                return false;
            }

            this.isLoading = true;

            this.updateInCart({
                bookId: this.item.book.id,
                count: this.count
            })
            .then(() => {
                this.removeEditing();
            })
            .catch(() => false)
            .finally(() => {
                this.isLoading = false;
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.cartItem {
    position: relative;

    .delete {
        position: absolute;
        right: 1rem;
        top: 1rem;
    }

    &__editCount {
        .control {
            display: inline-block;
            width: 3rem;
        }

        & > * {
            margin-right: 0.25rem;
        }
    }
}
</style>


