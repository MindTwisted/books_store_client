<template>
    <div class="edit">

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
                        Edit book #{{ book.id }}
                    </a>
                </li>
            </ul>
        </nav>

        <div class="columns is-multiline">
            <div class="column is-9-desktop is-12-tablet">

                <div class="edit__form">

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
                        <button v-on:click="handleUpdateBook" 
                                class="button is-success">
                            Update
                        </button>
                    </div>

                </div>
            </div>
            <div class="column is-3-desktop is-12-tablet">
                <div class="panel">
                    <div class="panel-heading">
                        Authors
                    </div>
                    <div class="panel-block">
                        <multiselect v-model="localAuthors.value" 
                                     v-bind:multiple="true"
                                     placeholder="Select authors"
                                     label="name" 
                                     track-by="name"
                                     v-bind:close-on-select="false"
                                     v-bind:hide-selected="true"
                                     v-bind:options="localAuthors.options"></multiselect>
                    </div>
                    <div class="panel-block">
                        <button class="button is-info is-small">
                            Update authors
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Vuex from 'vuex'
import { required, minLength, minValue, maxValue, helpers } from 'vuelidate/lib/validators'
import Multiselect from 'vue-multiselect'

const alphaDash = helpers.regex('alphaDash', /^[\w\s-']+$/);

export default {
    name: 'Edit',
    components: { 
        'multiselect': Multiselect 
    },
    data() {
        return {
            title: '',
            description: '',
            price: '',
            discount: '',
            localAuthors: {
                value: [],
                options: []
            }
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
    mounted() {
        this.title = this.book.title;
        this.description = this.book.description;
        this.price = this.book.price;
        this.discount = this.book.discount;

        this.localAuthors = {
            value: this.book.authors,
            options: this.authors
        }
    },
    computed: {
        ...Vuex.mapState([
            'authors'
        ]),
        ...Vuex.mapGetters([
            'getBookById'
        ]),
        book() {
            return this.getBookById(this.$route.params.id);
        }
    },
    methods: {
        ...Vuex.mapActions([
            'updateBook'
        ]),
        handleUpdateBook() {
            this.$v.$touch();

            if (this.$v.$invalid) {
                return false;
            }

            if (this.title === this.book.title &&
                this.description === this.book.description &&
                this.price === this.book.price &&
                this.discount === this.book.discount) {
                return this.$router.push('/dashboard/books');
            }

            this.updateBook({
                id: this.book.id,
                title: this.title,
                description: this.description,
                price: this.price,
                discount: this.discount
            });
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~vue-multiselect/dist/vue-multiselect.min.css';
</style>


