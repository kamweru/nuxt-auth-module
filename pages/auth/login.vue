<template>
  <div class="container">
    <div>
      <Logo />
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
  middleware: 'guest',
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
      return await this.$auth
        .loginWith('local', {
          data: this.login
        })
        .then((response) => {
          const user = response.data.user
          this.$auth.setUser(user)
          this.$auth.$storage.setUniversal('user', user, true)
          console.log(this.$auth.$storage.getUniversal('user'))
        })
        .catch(err => console.error(err.response))
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
