<template>
  <div class="index">

    <div class="container">
      <div class="columns">

        <div class="column is-one-fifth-desktop is-two-fifths-tablet">
          <filters-panel></filters-panel>
        </div>

        <div class="column is-four-fifths-desktop is-three-fifths-tablet">
          <div class="columns is-multiline index__content">

            <div v-for="book in books | filterBooks" v-bind:key='book.id'
                 class="column is-one-third-widescreen is-half-tablet">
              <div class="shopItem">
                <div class="card">
                  <div class="card-image">
                      <figure class="image is-9by16">
                        <img v-bind:src="rootUrl + '/' + book.image_url" v-bind:alt="book.title">
                      </figure>
                    </div>
                    <div class="card-content">
                      <div class="media">
                        <div class="media-content">
                          <p class="title is-4">{{ book.title }}</p>
                          <p class="subtitle is-6">{{ book.authors.join(', ') }}</p>
                        </div>
                      </div>
                      <div class="tags">
                        <span v-for="genre in book.genres"
                              v-bind:key="genre" 
                              class="tag is-primary">{{ genre }}</span>
                      </div>
                    </div>
                  <!-- <router-link v-bind:to="'/books/' + book.id">
                    
                  </router-link> -->
                </div>
              </div>
            </div>
            <div v-if="books.length === 0" class="column has-text-centered">
              There are no books yet.
            </div>
            
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Vuex from 'vuex'
import {rootUrl} from '../api/urls'
import FiltersPanel from '../components/FiltersPanel'

export default {
  name: 'Index',
  data() {
    return {
      rootUrl,
      filters: null
    }
  },
  mounted() {
    this.$root.$on('filter-books', this.handleFilters);
  },
  components: {
    'filters-panel': FiltersPanel
  },
  computed: {
    ...Vuex.mapState([
      'books'
    ])
  },
  methods: {
    ...Vuex.mapActions([
      'getBooks',
      'getAuthors',
      'getGenres'
    ]),
    handleFilters(filters) {
      this.filters = filters;
    }
  },
  filters: {
    filterBooks(value) {
      console.log(value);
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getBooks();
      vm.getAuthors();
      vm.getGenres();
    });
  }
}
</script>

<style scoped lang="scss">

@media screen and (min-width: 768px) {
    .container > .columns {
        flex-direction: row-reverse;
    }
}

.shopItem {
  figure.image {
    text-align: center;

    img {
      max-height: 400px;
    }
  }
}

</style>

