<template>
  <div class="product">
    <h1>{{ book }}</h1>
  </div>
</template>

<script>
import Vuex from 'vuex'

export default {
  name: 'Product',
  computed: {
    ...Vuex.mapGetters([
      'getBookById'
    ]),
    book() {
      return this.getBookById(this.$route.params.id);
    }
  },
}
</script>

