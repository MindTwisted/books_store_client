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

          <!-- <template v-if="!auth.isLoggedIn">
            <a v-on:click="setLoginModal" class="navbar-item">Login</a>
            <a v-on:click="setRegisterModal" class="navbar-item">Register</a>
          </template>
          <template v-else>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                {{ user.first_name + ' ' + user.last_name }}
              </a>

              <div class="navbar-dropdown">
                <router-link to="/orders" class="navbar-item">
                  Orders
                </router-link>

                <hr class="navbar-divider">
                <a v-on:click="logoutUser" class="navbar-item">
                  Logout
                </a>
              </div>
            </div>
          </template> -->
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    
  }
}
</script>

<style scoped lang="scss">

.navbar-brand {
  img {
    margin-right: 0.5rem;
  }
}


</style>
