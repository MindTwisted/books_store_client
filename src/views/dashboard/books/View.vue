<template>
<div class="viewBook">

    <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
            <li>
                <router-link to="/dashboard">Dashboard</router-link>
            </li>
            <li>
                <router-link to="/dashboard/books">Books</router-link>
            </li>
            <li class="is-active">
                <a href="#" aria-current="page">
                    {{ book.title }}
                </a>
            </li>
        </ul>
    </nav>

    <div class="columns">
        <div v-if="book.image_url" 
             class="column is-two-fifths">
            <div class="card-image">
                <figure class="image is-9by16 has-text-centered">
                    <img v-bind:src="rootUrl + '/' + book.image_url + '?id=' + uniqueID" v-bind:alt="book.title">
                </figure>
            </div>
        </div>
        <div class="column is-three-fifths">
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">{{ book.title }}</p>
                        <p v-if="book.authors.length > 0" 
                           class="subtitle is-6">{{ book.authors.map(a => a.name).join(', ') }}</p>
                    </div>
                </div>
                <div class="tags">
                    <span v-for="genre in book.genres" 
                          v-bind:key="genre.id" 
                          class="tag is-primary">{{ genre.name }}</span>
                </div>
                <div class="content">
                    {{ book.description }}
                    <p class="subtitle index__price">
                        <template v-if="book.discount > 0">
                            <del class="has-text-grey-light is-size-6">{{ book.price }}</del>
                            <strong class="is-size-4 has-text-weight-light">
                                {{ priceWithDiscount(book.price, book.discount) | price }}
                            </strong>
                        </template>
                        <strong v-else class="is-size-4 has-text-weight-light">
                            {{ book.price | price }}
                        </strong>
                    </p>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import Vuex from 'vuex'
import { rootUrl } from '@/api/urls'

export default {
    name: 'ViewBook',
    data() {
        return {
            rootUrl
        }
    },
    computed: {
        ...Vuex.mapState([
            'uniqueID'
        ]),
        ...Vuex.mapGetters([
            'getBookById'
        ]),
        book() {
            return this.getBookById(this.$route.params.id);
        }
    },
    methods: {
        priceWithDiscount(price, discount) {
            return (price - price * (discount / 100)).toFixed(2);
        }
    }
}
</script>

