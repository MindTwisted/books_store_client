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
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    'navbar': Navbar
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

.app {
  font-family: 'Raleway', sans-serif;

  &__content {
    margin-top: 2rem;
  }
}

</style>
