<template>
    <div class="edit">

        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li>
                    <router-link to="/dashboard">Dashboard</router-link>
                </li>
                <li>
                    <router-link to="/dashboard/genres">Genres</router-link>
                </li>
                <li class="is-active">
                    <a href="#" aria-current="page">
                        Edit genre #{{ genre.id }}
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
                <button v-if="!isLoading" 
                        v-on:click="handleUpdateGenre" 
                        class="button is-success">
                    Update
                </button>
                <button v-else class="button is-success is-loading" disabled>
                    Update
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
            name: '',
            isLoading: false
        }
    },
    validations: {
        name: {
            required
        }
    },
    mounted() {
        this.name = this.genre.name;
    },
    computed: {
        ...Vuex.mapGetters([
            'getGenreById'
        ]),
        genre() {
            return this.getGenreById(this.$route.params.id);
        }
    },
    methods: {
        ...Vuex.mapActions([
            'updateGenre'
        ]),
        handleUpdateGenre() {
            this.$v.$touch();

            if (this.$v.$invalid) {
                return false;
            }

            if (this.name == this.genre.name) {
                return this.$router.push('/dashboard/genres');
            }

            this.isLoading = true;

            this.updateGenre({
                id: this.genre.id,
                name: this.name
            })
            .finally(() => {
                this.isLoading = false;
            });
        }
    }
}
</script>

