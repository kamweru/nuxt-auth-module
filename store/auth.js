export const state = () => ({
  auth: null
  // auth: {
  //   user: null,
  //   token: null
  // }
})

export const mutations = {
  setAuth: (state, payload) => {
    state.auth = payload
  }
}

export const getters = {
  isAuthenticated (state) {
    return state.auth
  },
  loggedInUser (state) {
    return state.auth.user
  }
}

export const actions = {
  resetAuth: (context) => {
    context.commit('setAuth', null)
  }
}
