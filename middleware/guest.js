export default function(context) {
  if (context.app.$auth.state.loggedIn) {
    return context.app.$auth.redirect("/");
  }
}
// export default function({ $auth, redirect }) {
//   console.log($auth.loggedIn);
//   if ($auth.loggedIn) {
//     return redirect("/");
//   }
// }
