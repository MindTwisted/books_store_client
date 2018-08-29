<template>
  <div class="app">

    <div class="app__navbar">
      <navbar></navbar>
    </div>

    <div class="app__content">
      <router-view/>
    </div>

    <notifications group="messages" 
                   position="bottom right"/>

    <register-modal v-if="registerModal.isVisible"></register-modal>
    <login-modal v-if="loginModal.isVisible"></login-modal>

    <loader v-if="isLoading"></loader>
    
  </div>
</template>

<script>
import Vuex from 'vuex'
import Navbar from '@/components/Navbar.vue'
import RegisterModal from '@/components/RegisterModal.vue'
import LoginModal from '@/components/LoginModal.vue'
import Loader from '@/components/Loader.vue'

export default {
  name: 'App',
  components: {
    'navbar': Navbar,
    'register-modal': RegisterModal,
    'login-modal': LoginModal,
    'loader': Loader
  },
  mounted() {
    this.setLoading();
    
    let promises = [];

    promises.push(this.getBooks());
    promises.push(this.getAuthors());
    promises.push(this.getGenres());

    if (this.isAuth) {
      promises.push(this.getCart());
      promises.push(this.getPaymentTypes());
    }

    Promise.all(promises)
      .finally(() => {
        this.removeLoading();
      });

  },
  computed: {
    ...Vuex.mapState([
      'loginModal',
      'registerModal',
      'loginModal',
      'isLoading'
    ]),
    ...Vuex.mapGetters([
      'isAuth'
    ])
  },
  methods: {
    ...Vuex.mapActions([
      'getBooks',
      'getAuthors',
      'getGenres',
      'getCart',
      'getPaymentTypes'
    ]),
    ...Vuex.mapMutations([
      'setLoading',
      'removeLoading'
    ])
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
@import '~bulma/sass/elements/other';
@import '~bulma/sass/elements/box';
@import '~bulma/sass/elements/table';
@import '~bulma/sass/components/navbar';
@import '~bulma/sass/components/card';
@import '~bulma/sass/components/panel';
@import '~bulma/sass/components/breadcrumb';
@import '~bulma/sass/components/modal';
@import '~bulma/sass/components/menu';

.app {
  font-family: 'Raleway', sans-serif;
  padding-bottom: 7rem;

  &__content {
    padding-top: 5rem;
    position: relative;
  }
}

</style>
