<template>
  <div class="app">

    <div class="app__navbar">
      <navbar></navbar>
    </div>

    <div class="app__content">
      <router-view/>
    </div>
    
  </div>
</template>

<script>
import Vuex from 'vuex'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    'navbar': Navbar
  },
  mounted() {
    this.getBooks();
    this.getAuthors();
    this.getGenres();
  },
  methods: {
    ...Vuex.mapActions([
      'getBooks',
      'getAuthors',
      'getGenres'
    ]),
  }
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Raleway');

@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/base/_all';
@import '~bulma/sass/grid/_all';
@import '~bulma/sass/elements/container';
@import '~bulma/sass/elements/title';
@import '~bulma/sass/elements/tag';
@import '~bulma/sass/elements/content';
@import '~bulma/sass/elements/button';
@import '~bulma/sass/elements/form';
@import '~bulma/sass/components/navbar';
@import '~bulma/sass/components/card';
@import '~bulma/sass/components/panel';
@import '~bulma/sass/components/breadcrumb';

.app {
  font-family: 'Raleway', sans-serif;

  &__content {
    margin-top: 2rem;
  }
}

</style>
