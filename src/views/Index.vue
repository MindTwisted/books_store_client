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
              <book-item v-bind:book="book"></book-item>
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
import FiltersPanel from '@/components/FiltersPanel'
import BookItem from '@/components/BookItem'

export default {
  name: 'Index',
  components: {
    'filters-panel': FiltersPanel,
    'book-item': BookItem
  },
  computed: {
    ...Vuex.mapGetters([
      'books'
    ])
  }
}
</script>

<style scoped lang="scss">

@media screen and (min-width: 768px) {
    .container > .columns {
        flex-direction: row-reverse;
    }
}

</style>

