<template>
    <div class="add">

        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li>
                    <router-link to="/dashboard">Dashboard</router-link>
                </li>
                <li>
                    <router-link to="/dashboard/books">Books</router-link>
                </li>
                <li class="is-active">
                    <a href="#" aria-current="page">
                        Add book
                    </a>
                </li>
            </ul>
        </nav>

        <div class="add__form">

            <div class="field">
                <label class="label">Title</label>
                <div class="control">
                    <input v-model.trim="$v.title.$model" 
                        v-bind:class="{ input:true, 'is-danger':$v.title.$error }" 
                        type="text" 
                        placeholder="Title">
                </div>
                <ul class="help is-danger">
                    <li v-if="$v.title.$dirty && !$v.title.required">
                        Field is required.
                    </li>
                    <li v-if="!$v.title.alphaDash">
                        Field accepts only alpha-numeric characters with dashes.
                    </li>
                </ul>
            </div>

            <div class="field">
                <label class="label">Description</label>
                <div class="control">
                    <textarea v-model.trim="$v.description.$model" 
                        v-bind:class="{ textarea:true, 'is-danger':$v.description.$error }" 
                        placeholder="Description"></textarea>
                </div>
                <ul class="help is-danger">
                    <li v-if="$v.description.$dirty && !$v.description.required">
                        Field is required.
                    </li>
                    <li v-if="!$v.description.minLength">
                        Description must have at least {{$v.description.$params.minLength.min}} letters.
                    </li>
                </ul>
            </div>

            <div class="field">
                <label class="label">Price</label>
                <div class="control">
                    <input v-model.trim="$v.price.$model" 
                        v-bind:class="{ input:true, 'is-danger':$v.price.$error }" 
                        type="text" 
                        placeholder="Price">
                </div>
                <ul class="help is-danger">
                    <li v-if="$v.price.$dirty && !$v.price.required">
                        Field is required.
                    </li>
                    <li v-if="!$v.price.minValue">
                        Price must be at least {{$v.price.$params.minValue.min}}.
                    </li>
                </ul>
            </div>

            <div class="field">
                <label class="label">Discount</label>
                <div class="control">
                    <input v-model.trim="$v.discount.$model" 
                        v-bind:class="{ input:true, 'is-danger':$v.discount.$error }" 
                        type="text" 
                        placeholder="Discount">
                </div>
                <ul class="help is-danger">
                    <li v-if="$v.discount.$dirty && !$v.discount.required">
                        Field is required.
                    </li>
                    <li v-if="!$v.discount.minValue">
                        Discount must be at least {{$v.discount.$params.minValue.min}}.
                    </li>
                    <li v-if="!$v.discount.maxValue">
                        Discount must be max {{$v.discount.$params.maxValue.max}}.
                    </li>
                </ul>
            </div>

            <div class="field">
                <button v-if="!isLoading" v-on:click="handleAddBook" 
                        class="button is-success">
                    Add
                </button>
                <button v-else class="button is-success is-loading" disabled>
                    Add
                </button>
            </div>

        </div>

    </div>
</template>

<script>
import Vuex from 'vuex'
import { required, minLength, minValue, maxValue, helpers } from 'vuelidate/lib/validators'

const alphaDash = helpers.regex('alphaDash', /^[\w\s-']+$/);

export default {
    name: 'Add',
    data() {
        return {
            title: '',
            description: '',
            price: '',
            discount: '0.00',
            isLoading: false
        }
    },
    validations: {
        title: {
            required,
            alphaDash
        },
        description: {
            required,
            minLength: minLength(20)
        },
        price: {
            required,
            minValue: minValue(1)
        },
        discount: {
            required,
            minValue: minValue(0),
            maxValue: maxValue(50)
        }
    },
    methods: {
        ...Vuex.mapActions([
            'addBook'
        ]),
        handleAddBook() {
            this.$v.$touch();

            if (this.$v.$invalid) {
                return false;
            }

            this.isLoading = true;

            this.addBook({
                title: this.title,
                description: this.description,
                price: this.price,
                discount: this.discount
            })
            .finally(() => {
                this.isLoading = false;
            });
        }
    }
}
</script>

