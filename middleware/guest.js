export default function(context) {
  console.log(context.store.getters["auth/isAuthenticated"]);
  if (context.store.getters["auth/isAuthenticated"]) {
    return context.redirect("/");
  }
}
// export default function({ $auth, redirect }) {
//   console.log($auth.loggedIn);
//   if ($auth.loggedIn) {
//     return redirect("/");
//   }
// }
