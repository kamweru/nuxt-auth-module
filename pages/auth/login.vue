<template>
  <div class="container">
    <div>
      <Logo />
      <hr>
      <!-- <pre>logged in: {{ $auth.loggedIn }}</pre> -->
      <hr>
      <div class="links">
        <input v-model="login.email" type="email" name="email">
        <input v-model="login.password" type="password" name="password">
        <button
          type="submit"
          rel="noopener noreferrer"
          class="button--grey"
          @click.prevent="userLogin"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['authenticated'],
  data () {
    return {
      login: {
        email: 'subtillia@gmail.com',
        password: '1122Abc',
        userRole: 'student'
      }
    }
  },
  methods: {
    async userLogin () {
      await this.$axios
        .$post('/user/login', this.login)
        .then((response) => {
          delete response.message
          this.$store.commit('auth/setAuth', response)
          this.$cookies.set('auth', response, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
          })
          this.$router.push('/')
        })
        .catch(err => console.log(err.response))
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
