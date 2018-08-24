<template>
    <nav class="panel">

        <p class="panel-heading">
            Find books
        </p>

        <div class="panel-block">
            <p class="control">
                <input v-model="bookFilters.title" 
                       class="input" 
                       type="text" 
                       placeholder="Enter title">
            </p>
        </div>
    
        <div class="panel-block">
            <div class="select is-fullwidth">
                <select v-model="bookFilters.author">
                    <option value="">Select author</option>
                    <option v-for="author in authors" 
                            v-bind:key="author.id"
                            v-bind:value="author.id">{{ author.name }}</option>
                </select>
            </div>
        </div>

        <div class="panel-block">
            <div class="select is-fullwidth">
                <select v-model="bookFilters.genre">
                    <option value="">Select genre</option>
                    <option v-for="genre in genres" 
                            v-bind:key="genre.id"
                            v-bind:value="genre.id">{{ genre.name }}</option>
                </select>
            </div>
        </div>

        <div v-if="isFiltered" 
             class="panel-block">
            <button v-on:click="removeBookFilters" 
                    class="button is-danger is-outlined is-fullwidth">
                Reset
            </button>
        </div>

    </nav>
</template>

<script>
import Vuex from 'vuex'

export default {
    name: 'FiltersPanel',
    computed: {
        ...Vuex.mapState([
            'authors',
            'genres',
            'bookFilters'
        ]),
        isFiltered() {
            return !!this.bookFilters.title ||
                   !!this.bookFilters.author ||
                   !!this.bookFilters.genre;
        }
    },
    methods: {
        ...Vuex.mapMutations([
            'removeBookFilters'
        ])
    }
}
</script>
