<template>
    <tr class="authorItem">
        <td>{{ author.id }}</td>
        <td>{{ author.name }}</td>
        <td class="authorItem__actions">
            <router-link v-bind:to="'authors/' + author.id + '/edit'" class="button is-primary is-small">
                Edit
            </router-link>
            <button v-if="!isLoading" 
                    v-on:click="handleDeleteAuthor(author.id)"
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
    name: 'author-item',
    props: {
        author: {
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
            'deleteAuthor'
        ]),
        handleDeleteAuthor(id) {
            this.isLoading = true;

            this.deleteAuthor(id)
            .finally(() => {
                this.isLoading = false;
            });
        }
    }
}
</script>


<style lang="scss" scoped>
.authorItem {
    &__actions {
        a {
            margin-right: 0.25rem;
        }
    }
}
</style>

