<template>
    <div class="edit">

        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li>
                    <router-link to="/dashboard">Dashboard</router-link>
                </li>
                <li>
                    <router-link to="/dashboard/users">Users</router-link>
                </li>
                <li class="is-active">
                    <a href="#" aria-current="page">
                        Edit user #{{ user.id }}
                    </a>
                </li>
            </ul>
        </nav>

        <div class="edit__form">

            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input v-model.trim="$v.name.$model" 
                        v-bind:class="{ input:true, 'is-danger':$v.name.$error }" 
                        type="text" 
                        placeholder="Name">
                </div>
                <ul class="help is-danger">
                    <li v-if="$v.name.$dirty && !$v.name.required">
                        Field is required.
                    </li>
                    <li v-if="!$v.name.minLength">
                        Name must have at least {{$v.name.$params.minLength.min}} letters.
                    </li>
                </ul>
            </div>

            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input v-model.trim="$v.email.$model" 
                        v-bind:class="{ input:true, 'is-danger':$v.email.$error }" 
                        type="text" 
                        placeholder="Email">
                </div>
                <ul class="help is-danger">
                    <li v-if="$v.email.$dirty && !$v.email.required">
                        Field is required.
                    </li>
                    <li v-if="!$v.email.email">
                        This field must be a valid email address.
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
                        Maximum discount is {{$v.discount.$params.maxValue.max}}.
                    </li>
                </ul>
            </div>

            <div class="field">
                <button v-on:click="handleUpdateUser" 
                        class="button is-success">
                    Update
                </button>
            </div>

        </div>

    </div>
</template>

<script>
import Vuex from 'vuex'
import { required, minLength, email, minValue, maxValue } from 'vuelidate/lib/validators'

export default {
    name: 'Edit',
    data() {
        return {
            name: '',
            email: '',
            discount: ''
        }
    },
    validations: {
        name: {
            required,
            minLength: minLength(6)
        },
        email: {
            required,
            email
        },
        discount: {
            required,
            minValue: minValue(0),
            maxValue: maxValue(50)
        }
    },
    mounted() {
        this.name = this.user.name;
        this.email = this.user.email;
        this.discount = this.user.discount;
    },
    computed: {
        ...Vuex.mapGetters([
            'getUserById'
        ]),
        user() {
            return this.getUserById(this.$route.params.id);
        },
    },
    methods: {
        ...Vuex.mapActions([
            'updateUser'
        ]),
        handleUpdateUser() {
            this.$v.$touch();

            if (this.$v.$invalid) {
                return false;
            }

            if (this.name == this.user.name &&
                this.email == this.user.email &&
                this.discount == this.user.discount) {

                return this.$router.push('/dashboard/users');
                
            }

            this.updateUser({
                id: this.user.id,
                name: this.name,
                email: this.email,
                discount: this.discount
            });
        }
    }
}
</script>

