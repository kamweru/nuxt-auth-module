<template>
  <div>
    <h1>Welcome to user profile</h1>
    <button class="button--grey" @click="logout">
      log out
    </button>
    <hr>
    <pre>isAuthenticated: {{ isAuthenticated }}</pre>
    <hr>
    <pre>{{ isAuthenticated ? isAuthenticated.isAuthenticated : "" }}</pre>
    <hr>
    <!-- <pre>{{ $auth.strategy.token.get() }}</pre> -->
    <hr>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  middleware: ['authenticated'],
  computed: {
    ...mapGetters({
      isAuthenticated: ['auth/isAuthenticated']
    })
  },
  methods: {
    logout () {
      this.$store.dispatch('auth/resetAuth')
      this.$cookies.removeAll()
      this.$router.push('/')
    }
  }
}
</script>
