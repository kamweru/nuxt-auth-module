export default function({ store, redirect }) {
  if (store.state.auth.loggedIn) {
    return redirect("/");
  }
}
// export default function({ $auth, redirect }) {
//   console.log($auth.loggedIn);
//   if ($auth.loggedIn) {
//     return redirect("/");
//   }
// }
