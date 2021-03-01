<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">nuxt-auth</h1>
      <hr />
      <pre>{{ loggedInUser }}</pre>
      <hr />
      <pre>isAuthenticated: {{ isAuthenticated }}</pre>
      <hr />
      <div class="links">
        <div v-if="isAuthenticated">
          <a href="/profile" rel="noopener noreferrer" class="button--grey">
            Profile
          </a>
          <button class="button--grey" @click="logout">log out</button>
        </div>
        <a
          v-if="!isAuthenticated"
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
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
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
