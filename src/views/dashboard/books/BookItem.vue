<template>
    <tr class="bookItem">
        <td>{{ book.id }}</td>
        <td>{{ book.title }}</td>
        <td>{{ book.price | price }}</td>
        <td>{{ book.discount | percent }}</td>
        <td class="bookItem__actions">
            <router-link v-bind:to="'books/' + book.id" class="button is-info is-small">
                View
            </router-link>
            <router-link v-bind:to="'books/' + book.id + '/edit'" class="button is-primary is-small">
                Edit
            </router-link>
            <button v-if="!isLoading" 
                    v-on:click="handleDeleteBook(book.id)"
                    class="button is-danger is-small">Delete</button>
            <button v-else class="button is-danger is-small is-loading" disabled>
                Delete
            </button>        
        </td>
    </tr>
</template>

<script>
import Vuex from 'vuex'

export default {
    name: 'book-item',
    props: {
        book: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isLoading: false
        }
    },
    methods: {
        ...Vuex.mapActions([
            'deleteBook'
        ]),
        handleDeleteBook(id) {
            this.isLoading = true;

            this.deleteBook(id)
                .finally(() => {
                    this.isLoading = false;
                });
        }
    }
}
</script>

<style lang="scss" scoped>
.bookItem {
    &__actions {
        a {
            margin-right: 0.25rem;
        }
    }
}
</style>
