<template>
    <div class="profile">
        
        <div class="container">

            <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li>
                        <router-link to="/">Main</router-link>
                    </li>
                    <li class="is-active">
                        <a href="#" aria-current="page">
                            Profile
                        </a>
                    </li>
                </ul>
            </nav>

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
                <label class="label">New password</label>
                <div class="control">
                    <input v-model.trim="$v.password.$model" 
                    v-bind:class="{ input:true, 'is-danger':$v.password.$error }" 
                    type="password" 
                    placeholder="New password">
                </div>
                <ul class="help is-danger">
                    <li v-if="$v.password.$dirty && !$v.password.required">
                        Field is required.
                    </li>
                    <li v-if="!$v.password.minLength">
                        Password must have at least {{$v.password.$params.minLength.min}} letters.
                    </li>
                </ul>
            </div>

            <div class="field">
                <label class="label">Repeat new password</label>
                <div class="control">
                    <input v-model.trim="$v.repeatPassword.$model" 
                    v-bind:class="{ input:true, 'is-danger':$v.repeatPassword.$error }" 
                    type="password"
                    placeholder="Repeat new password">
                </div>
                <ul class="help is-danger">
                    <li v-if="$v.password.$dirty && !$v.password.required">
                        Field is required.
                    </li>
                    <li v-if="!$v.repeatPassword.sameAsPassword">
                        Passwords must be identical.
                    </li>
                </ul>
            </div>

            <div class="field">
                <div class="control">
                    <button v-on:click="handleUpdateUser" 
                            class="button is-success">Update</button>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
import Vuex from 'vuex'

export default {
    name: 'Profile',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            repeatPassword: ''
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
        password: {
            required,
            minLength: minLength(6)
        },
        repeatPassword: {
            required,
            sameAsPassword: sameAs('password')
        }
    },
    mounted() {
        this.name = this.auth.name;
        this.email = this.auth.email;
    },
    computed: {
        ...Vuex.mapState([
            'auth'
        ])
    },
    methods: {
        ...Vuex.mapActions([
            'updateCurrentUser'
        ]),
        handleUpdateUser() {
            this.$v.$touch();

            if (this.$v.$invalid) {
                return false;
            }

            this.updateCurrentUser({
                name: this.name,
                email: this.email,
                password: this.password
            }).then(() => {
                this.password = '';
                this.repeatPassword = '';

                this.$v.$reset();
            }).catch(() => false);
        }
    }
}
</script>

