<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">nuxt-auth</h1>
      <div class="links">
        <div v-if="$auth.$state.loggedIn">
          <a href="/profile" rel="noopener noreferrer" class="button--grey">
            Profile
          </a>
          <button @click="logout">log out</button>
        </div>
        <a
          v-else
          href="/auth/login"
          rel="noopener noreferrer"
          class="button--grey"
        >
          Login
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout()
      this.$auth.$storage.removeUniversal('user')
    }
  },
  mounted() {
    console.log(this.$auth)
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
