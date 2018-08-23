<template>
  <div class="app">

    <div class="app__navbar">
      <Navbar></Navbar>
    </div>

    <router-view/>
    
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>


<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/base/_all';
@import '~bulma/sass/grid/_all';
@import '~bulma/sass/elements/container';
@import '~bulma/sass/elements/title';
@import '~bulma/sass/components/navbar';
@import '~bulma/sass/components/card';

</style>
