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
                <book-item v-for="book in books" 
                           v-bind:key="book.id"
                           v-bind:book="book"></book-item>
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
import BookItem from './BookItem'

export default {
    name: 'Books',
    components: {
        'book-item': BookItem
    },
    computed: {
        ...Vuex.mapState([
            'books'
        ])
    }
}
</script>

<style lang="scss" scoped>
.books {
    &__add {
        text-align: right;
        margin: 1rem 0 2rem 0;
    }
}
</style>


