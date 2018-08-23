<template>
  <div class="index">

    <div class="container">
      <div class="columns">

        <div class="column is-one-quarter-desktop is-two-fifths-tablet">
          aside
        </div>

        <div class="column is-three-quarters-desktop is-three-fifths-tablet">
          <div class="columns is-multiline index__content">

            <div v-for="book in books" v-bind:key='book.id'
                 class="column is-half">
              <div class="shopItem">
                <div class="card">
                  <div class="card-image">
                      <figure class="image is-5by3">
                        <img v-bind:src="rootUrl + '/' + book.image_url" v-bind:alt="book.title">
                      </figure>
                    </div>
                    <div class="card-content">
                      <div class="media">
                        <div class="media-content">
                          <p class="title is-4">{{ book.title }}</p>
                          <p class="subtitle is-6">{{ book.authors }}</p>
                        </div>
                      </div>
                    </div>
                  <!-- <router-link v-bind:to="'/books/' + book.id">
                    
                  </router-link> -->
                </div>
              </div>
            </div>
            <div v-if="books.length === 0" class="index__empty">
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

export default {
  name: 'Index',
  data() {
    return {
      rootUrl
    }
  },
  components: {

  },
  computed: {
    ...Vuex.mapState([
      'books'
    ])
  },
  methods: {
    ...Vuex.mapActions(['getBooks']),
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getBooks();
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
  }
}
</style>

