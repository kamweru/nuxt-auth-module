<template>
  <div>
    <h1>Welcome to user profile</h1>
    <button class="button--grey" @click="logout">log out</button>
    <hr />
    <pre>isAuthenticated: {{ isAuthenticated }}</pre>
    <hr />
    <pre>{{ loggedInUser }}</pre>
    <hr />
    <pre>{{ $auth.strategy.token.get() }}</pre>
    <hr />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  middleware: ['auth'],
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
