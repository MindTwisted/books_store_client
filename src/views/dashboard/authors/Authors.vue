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
                
                <author-item v-for="author in authors" 
                             v-bind:key="author.id" 
                             v-bind:author="author"></author-item>

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
import AuthorItem from './AuthorItem'

export default {
    name: 'authors',
    components: {
        'author-item': AuthorItem
    },
    computed: {
        ...Vuex.mapState([
            'authors'
        ])
    }
}
</script>

<style lang="scss" scoped>
.authors {
    &__add {
        text-align: right;
        margin: 1rem 0 2rem 0;
    }
}
</style>


