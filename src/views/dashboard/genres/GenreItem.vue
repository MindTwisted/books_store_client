<template>
    <tr class="genreItem">
        <td>{{ genre.id }}</td>
        <td>{{ genre.name }}</td>
        <td class="genreItem__actions">
            <router-link v-bind:to="'genres/' + genre.id + '/edit'" class="button is-primary is-small">
                Edit
            </router-link>
            <button v-if="!isLoading" 
                    v-on:click="handleDeleteGenre(genre.id)"
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
    name: 'genre-item',
    props: {
        genre: {
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
            'deleteGenre'
        ]),
        handleDeleteGenre(id) {
            this.isLoading = true;

            this.deleteGenre(id)
            .finally(() => {
                this.isLoading = false;
            });
        }
    }
}
</script>


<style lang="scss" scoped>
.genreItem {
    &__actions {
        a {
            margin-right: 0.25rem;
        }
    }
}
</style>

