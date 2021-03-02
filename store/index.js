const cookieparser = require('cookieparser')
export const actions = {
  nuxtServerInit ({ commit }, { app, req }) {
    if (req && req.headers && req.headers.cookie) {
      const parsedAuth = cookieparser.parse(req.headers.cookie)
      try {
        commit('auth/setAuth', parsedAuth.auth)
      } catch (err) {
        console.error('Token Error: ', err)
      }
    }
  }
}
