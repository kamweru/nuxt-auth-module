export default function ({ route, store, redirect }) {
  const loginPath = '/auth/login'
  const isAuthenticated = store.getters['auth/isAuthenticated']
  const includesLogin = route.path.includes(loginPath)
  if (!isAuthenticated && !includesLogin) {
    return redirect({ path: loginPath })
  } else if (isAuthenticated && includesLogin) {
    return redirect('/') // Route where user will be redirected if he is logged in and try to access /auth/login page
  }
}
