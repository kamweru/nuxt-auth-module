<template>
  <div class="container">
    <div>
      <Logo />
      <pre>{{ state }}</pre>
      <h1 class="title">nuxt-auth</h1>
      <pre>$auth.$state.loggedIn: {{ $auth.$state.loggedIn }}</pre>
      <hr />
      <div class="links">
        <div v-if="loggedIn">
          <a href="/profile" rel="noopener noreferrer" class="button--grey">
            Profile
          </a>
          <button class="button--grey" @click="logout">log out</button>
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
  computed: {
    loggedIn() {
      return this.$auth.$state.loggedIn
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    }
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
