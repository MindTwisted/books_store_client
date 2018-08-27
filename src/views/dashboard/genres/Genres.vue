<template>
    <div class="genres">
        
        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li>
                    <router-link to="/dashboard">Dashboard</router-link>
                </li>
                <li class="is-active">
                    <a href="#" aria-current="page">
                        Genres
                    </a>
                </li>
            </ul>
        </nav>

        <div class="genres__add">
            <router-link to="genres/add" class="button is-success">
                Add genre
            </router-link>
        </div>

        <table v-if="genres.length > 0" class="table is-fullwidth is-striped is-hoverable">

            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="genre in genres" v-bind:key="genre.id">
                    <td>{{ genre.id }}</td>
                    <td>{{ genre.name }}</td>
                    <td class="genres__actions">
                        <router-link v-bind:to="'genres/' + genre.id + '/edit'" class="button is-primary is-small">
                            Edit
                        </router-link>
                        <button v-on:click="deleteGenre(genre.id)"
                                class="button is-danger is-small">Delete</button>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </tfoot>

        </table>
        <div v-else class="column has-text-centered">
            There are no genres yet.
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'

export default {
    name: 'Genres',
    computed: {
        ...Vuex.mapState([
            'genres'
        ])
    },
    methods: {
        ...Vuex.mapActions([
            'deleteGenre'
        ])
    }
}
</script>

<style lang="scss" scoped>
.genres {
    &__actions {
        a {
            margin-right: 0.25rem;
        }
    }

    &__add {
        text-align: right;
        margin: 1rem 0 2rem 0;
    }
}
</style>


