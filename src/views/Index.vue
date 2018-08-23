<template>
  <div class="index">

    <div class="container">
      <div class="columns">

        <div class="column is-one-fifth-desktop is-two-fifths-tablet">
          <filters-panel></filters-panel>
        </div>

        <div class="column is-four-fifths-desktop is-three-fifths-tablet">
          <div class="columns is-multiline index__content">

            <div v-for="book in books" v-bind:key='book.id' class="column is-one-third-widescreen is-half-tablet">
              <div class="shopItem">
                <div class="card">
                  <div class="card-image">
                    <router-link v-bind:to="'/books/' + book.id">
                      <figure class="image is-9by16">
                        <img v-bind:src="rootUrl + '/' + book.image_url" v-bind:alt="book.title">
                      </figure>
                    </router-link>
                  </div>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-content">
                        <p class="title is-4">
                          <router-link v-bind:to="'/books/' + book.id" class="has-text-black">
                            {{ book.title }}
                          </router-link>
                        </p>
                        <p class="subtitle is-6">{{ book.authors.map(a => a.name).join(', ') }}</p>
                      </div>
                    </div>
                    <div class="tags">
                      <span v-for="genre in book.genres" v-bind:key="genre.id" class="tag is-primary">{{ genre.name }}</span>
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
      rootUrl
    }
  },
  components: {
    'filters-panel': FiltersPanel
  },
  computed: {
    ...Vuex.mapGetters([
      'books'
    ])
  },
  methods: {
    ...Vuex.mapActions([
      'getBooks',
      'getAuthors',
      'getGenres'
    ]),
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

