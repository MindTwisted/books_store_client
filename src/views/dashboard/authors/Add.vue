<template>
    <div class="add">

        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li>
                    <router-link to="/dashboard">Dashboard</router-link>
                </li>
                <li>
                    <router-link to="/dashboard/authors">Authors</router-link>
                </li>
                <li class="is-active">
                    <a href="#" aria-current="page">
                        Add author
                    </a>
                </li>
            </ul>
        </nav>

        <div class="add__form">

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
                </ul>
            </div>

            <div class="field">
                <button v-on:click="handleAddAuthor" 
                        class="button is-success">
                    Add
                </button>
            </div>

        </div>

    </div>
</template>

<script>
import Vuex from 'vuex'
import { required } from 'vuelidate/lib/validators'

export default {
    name: 'Add',
    data() {
        return {
            name: ''
        }
    },
    validations: {
        name: {
            required
        }
    },
    methods: {
        ...Vuex.mapActions([
            'addAuthor'
        ]),
        handleAddAuthor() {
            this.$v.$touch();

            if (this.$v.$invalid) {
                return false;
            }

            this.addAuthor(this.name);
        }
    }
}
</script>

