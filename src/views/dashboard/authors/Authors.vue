<template>
    <div class="authors">
        
        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li>
                    <router-link to="/dashboard">Dashboard</router-link>
                </li>
                <li class="is-active">
                    <a href="#" aria-current="page">
                        Authors
                    </a>
                </li>
            </ul>
        </nav>

        <div class="authors__add">
            <router-link to="authors/add" class="button is-success">
                Add author
            </router-link>
        </div>

        <table v-if="authors.length > 0" class="table is-fullwidth is-striped is-hoverable">

            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="author in authors" v-bind:key="author.id">
                    <td>{{ author.id }}</td>
                    <td>{{ author.name }}</td>
                    <td class="authors__actions">
                        <router-link v-bind:to="'authors/' + author.id + '/edit'" class="button is-primary is-small">
                            Edit
                        </router-link>
                        <button v-on:click="deleteAuthor(author.id)"
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
            There are no authors yet.
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'

export default {
    name: 'Authors',
    computed: {
        ...Vuex.mapState([
            'authors'
        ])
    },
    methods: {
        ...Vuex.mapActions([
            'deleteAuthor'
        ])
    }
}
</script>

<style lang="scss" scoped>
.authors {
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


