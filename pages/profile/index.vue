<template>
  <div>
    <h1>Welcome to user profile</h1>
    <button @click="logout">
      log out
    </button>
    <pre>{{ state }}</pre>
    <hr>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  computed: {
    state () {
      return JSON.stringify(
        this.$auth.$storage.getUniversal('user'),
        undefined,
        2
      )
    }
  },
  methods: {
    logout () {
      this.$auth.logout()
      this.$auth.$storage.removeUniversal('user')
    }
  }
}
</script>
