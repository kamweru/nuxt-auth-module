export default function(context) {
  if (context.$auth.$state.loggedIn) {
    return context.$auth.redirect("/");
  }
}
// export default function({ $auth, redirect }) {
//   console.log($auth.loggedIn);
//   if ($auth.loggedIn) {
//     return redirect("/");
//   }
// }
