<template>
  <div class="index">

    <div class="container">
      <div class="columns">

        <div class="column is-one-fifth-desktop is-two-fifths-tablet">
          <filters-panel></filters-panel>
        </div>

        <div class="column is-four-fifths-desktop is-three-fifths-tablet">
          <div class="columns is-multiline">

            <div v-for="book in books" 
                 v-bind:key='book.id' 
                 class="column is-one-third-widescreen is-half-tablet">
              <div class="card">
                <div v-if="book.image_url" class="card-image">
                  <router-link v-bind:to="'/books/' + book.id">
                    <figure class="image is-9by16 has-text-centered">
                      <img v-bind:src="rootUrl + '/' + book.image_url" 
                           v-bind:alt="book.title">
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
                      <p v-if="book.authors.length > 0" 
                         class="subtitle is-6">{{ book.authors.map(a => a.name).join(', ') }}</p>
                    </div>
                  </div>
                  <div class="tags">
                    <span v-for="genre in book.genres" v-bind:key="genre.id" class="tag is-primary">{{ genre.name }}</span>
                  </div>
                  <div class="content">
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
                    <button v-if="!isAuth" 
                            v-on:click="fakeAddToCart" 
                            class="button is-success is-outlined">Add To Cart</button>
                    <template v-else>
                      <button v-if="!isInCart(book.id)" 
                              v-on:click="handleAddToCart(book.id)"
                              class="button is-success is-outlined">Add To Cart</button>
                      <span v-else class="tag is-info is-medium">In Cart</span>
                    </template>
                  </div>
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
      'books',
      'isAuth',
      'isInCart'
    ])
  },
  methods: {
    ...Vuex.mapActions([
      'fakeAddToCart',
      'addToCart'
    ]),
    priceWithDiscount(price, discount) {
      return (price - price * (discount / 100)).toFixed(2);
    },
    handleAddToCart(id) {
      this.addToCart({
        bookId: id,
        count: 1
      });
    }
  }
}
</script>

<style scoped lang="scss">

@media screen and (min-width: 768px) {
    .container > .columns {
        flex-direction: row-reverse;
    }
}

.card {
  figure.image {
    img {
      max-height: 400px;
    }
  }
}

.index {
  &__price {
    del {
      margin-right: 0.5rem;
    }
  }
}

</style>

