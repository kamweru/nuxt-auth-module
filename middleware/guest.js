export default function(context) {
  if (context.store.state.auth.loggedIn) {
    return context.redirect("/");
  }
}
// export default function({ $auth, redirect }) {
//   console.log($auth.loggedIn);
//   if ($auth.loggedIn) {
//     return redirect("/");
//   }
// }
