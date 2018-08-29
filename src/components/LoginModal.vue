<template>
    <div v-on:keyup.enter="handleLoginUser"
         v-on:keyup.esc="removeLoginModal" 
         class="loginModal">
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Login</p>
                    <button v-on:click="removeLoginModal" 
                            class="delete" 
                            aria-label="close"></button>
                </header>
                <section class="modal-card-body">

                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input v-model.trim="$v.email.$model" 
                                   v-bind:class="{ input:true, 'is-danger':$v.email.$error }" 
                                   ref="email"
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

                </section>
                <footer class="modal-card-foot">
                    <template v-if="!isLoading">
                        <button v-on:click="handleLoginUser" 
                                class="button is-success">Submit</button>
                        <button v-on:click="removeLoginModal"
                                class="button">Cancel</button>
                    </template>
                    <button v-else class="button is-success is-loading" disabled>
                      Submit
                    </button>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
    name: 'LoginModal',
    data() {
        return {
            email: '',
            password: '',
            isLoading: false
        }
    },
    validations: {
        email: {
            required,
            email
        },
        password: {
            required,
            minLength: minLength(6)
        }
    },
    mounted() {
        this.$refs.email.focus()
    },
    methods: {
        ...Vuex.mapMutations([
            'removeLoginModal'
        ]),
        ...Vuex.mapActions([
            'loginUser'
        ]),
        handleLoginUser() {
            this.$v.$touch();

            if (this.$v.$invalid) {
                return false;
            }

            this.isLoading = true;

            this.loginUser({
                email: this.email,
                password: this.password
            })
            .finally(() => {
                this.isLoading = false;
            });
        }
    }
}
</script>
