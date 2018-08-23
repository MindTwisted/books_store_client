<template>
    <nav class="panel">

        <p class="panel-heading">
            Filter books
        </p>

        <div class="panel-block">
            <p class="control">
                <input v-model="filters.title" 
                       v-on:input="handleFilters"
                       class="input" 
                       type="text" 
                       placeholder="Enter title">
            </p>
        </div>
    
        <div class="panel-block">
            <div class="select is-fullwidth">
                <select v-model="filters.author">
                    <option value="">Select author</option>
                    <option v-for="author in authors" 
                            v-bind:key="author.id"
                            value="author.id">{{ author.name }}</option>
                </select>
            </div>
        </div>

        <div class="panel-block">
            <div class="select is-fullwidth">
                <select v-model="filters.genre">
                    <option value="">Select genre</option>
                    <option v-for="genre in genres" 
                            v-bind:key="genre.id"
                            value="genre.id">{{ genre.name }}</option>
                </select>
            </div>
        </div>

    </nav>
</template>

<script>
import Vuex from 'vuex'

export default {
    name: 'FiltersPanel',
    data() {
        return {
            filters: {
                title: '',
                author: '',
                genre: ''
            }
        }
    },
    computed: {
        ...Vuex.mapState([
            'authors',
            'genres'
        ])
    },
    methods: {
        handleFilters() {
            this.$root.$emit('filter-books', this.filters);
        }
    }
}
</script>
