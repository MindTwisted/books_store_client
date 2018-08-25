<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img alt="Vue logo" src="../assets/logo.png">
          Books Shop
        </router-link>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">

          <template v-if="!isAuth">
            <a v-on:click="setLoginModal" class="navbar-item">Login</a>
            <a v-on:click="setRegisterModal" class="navbar-item">Register</a>
          </template>
          <template v-else>
            <router-link to="/cart" class="navbar-item">
              Cart <span class="cartCount">{{ getCartCount }}</span>
            </router-link>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                {{ auth.name }}
              </a>

              <div class="navbar-dropdown">
                <router-link to="/orders" class="navbar-item">
                  Orders
                </router-link>
                <router-link to="/profile" class="navbar-item">
                  Profile
                </router-link>

                <hr class="navbar-divider">

                <a v-on:click="logoutUser" 
                   class="navbar-item">
                  Logout
                </a>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Vuex from 'vuex'

export default {
  name: 'Navbar',
  mounted() {
    const $toggler = document.querySelector('.navbar .navbar-burger');
    const $navbarMenu = document.querySelector('.navbar .navbar-menu');

    $toggler.addEventListener('click', function () {
      $navbarMenu.classList.toggle('is-active');
      $toggler.classList.toggle('is-active');
    });
  },
  computed: {
    ...Vuex.mapState([
      'auth'
    ]),
    ...Vuex.mapGetters([
      'isAuth',
      'getCartCount'
    ]),
  },
  methods: {
    ...Vuex.mapMutations([
      'setRegisterModal',
      'setLoginModal'
    ]),
    ...Vuex.mapActions([
      'logoutUser'
    ]),
  }
}
</script>

<style scoped lang="scss">

.navbar-brand {
  img {
    margin-right: 0.5rem;
  }
}

.cartCount {
  display: inline-block;
  margin: 0 0.5rem;
  padding: 0 0.5rem;
  font-size: 1.15rem;
  background-color: hsl(141, 71%, 48%);
  border-radius: 100%;
}


</style>
