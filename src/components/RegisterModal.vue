<template>
    <div class="registerModal">
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Register</p>
                    <button v-on:click="removeRegisterModal" 
                            class="delete" 
                            aria-label="close"></button>
                </header>
                <section class="modal-card-body">

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
                        <label class="label">Password</label>
                        <div class="control">
                            <input v-model.trim="$v.password.$model" 
                                   v-bind:class="{ input:true, 'is-danger':$v.password.$error }" 
                                   type="password" 
                                   placeholder="Password">
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
                        <label class="label">Repeat password</label>
                        <div class="control">
                            <input v-model.trim="$v.repeatPassword.$model" 
                                   v-bind:class="{ input:true, 'is-danger':$v.repeatPassword.$error }" 
                                   type="password" 
                                   placeholder="Repeat password">
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
                    
                </section>
                <footer class="modal-card-foot">
                    <button v-on:click="handleRegisterUser" 
                            class="button is-success">Submit</button>
                    <button v-on:click="removeRegisterModal"
                            class="button">Cancel</button>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

export default {
    name: 'RegisterModal',
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
    methods: {
        ...Vuex.mapMutations([
            'removeRegisterModal'
        ]),
        ...Vuex.mapActions([
            'registerUser'
        ]),
        handleRegisterUser() {
            this.$v.$touch();

            if (this.$v.$invalid) {
                return false;
            }

            this.registerUser({
                name: this.name,
                email: this.email,
                password: this.password
            });
        }
    }
}
</script>
