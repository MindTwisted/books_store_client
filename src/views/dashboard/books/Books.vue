<template>
    <div class="books">
        
        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li>
                    <router-link to="/dashboard">Dashboard</router-link>
                </li>
                <li class="is-active">
                    <a href="#" aria-current="page">
                        Books
                    </a>
                </li>
            </ul>
        </nav>

        <div class="books__add">
            <router-link to="books/add" class="button is-success">
                Add book
            </router-link>
        </div>

        <table v-if="books.length > 0" class="table is-fullwidth is-striped is-hoverable">

            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="book in books" v-bind:key="book.id">
                    <td>{{ book.id }}</td>
                    <td>{{ book.title }}</td>
                    <td>{{ book.price | price }}</td>
                    <td>{{ book.discount | percent }}</td>
                    <td class="books__actions">
                        <router-link v-bind:to="'books/' + book.id" class="button is-info is-small">
                            View
                        </router-link>
                        <router-link v-bind:to="'books/' + book.id + '/edit'" class="button is-primary is-small">
                            Edit
                        </router-link>
                        <button v-on:click="deleteBook(book.id)"
                                class="button is-danger is-small">Delete</button>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </tfoot>

        </table>
        <div v-else class="column has-text-centered">
            There are no books yet.
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'

export default {
    name: 'Books',
    computed: {
        ...Vuex.mapState([
            'books'
        ])
    },
    methods: {
        ...Vuex.mapActions([
            'deleteBook'
        ])
    }
}
</script>

<style lang="scss" scoped>
.books {
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


