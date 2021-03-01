export default function({ store, redirect }) {
  console.log(store.getters["auth/isAuthenticated"]);
  if (store.getters["auth/isAuthenticated"]) {
    return redirect("/");
  }
}
// export default function({ $auth, redirect }) {
//   console.log($auth.loggedIn);
//   if ($auth.loggedIn) {
//     return redirect("/");
//   }
// }
