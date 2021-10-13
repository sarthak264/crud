let provider = new firebase.auth.GoogleAuthProvider();
document.getElementById("log-in").addEventListener("click", () => {
  console.log("log in btn called");
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => console.log("log in complete"))
    .catch((err) => console.log(err));
});
document.getElementById("log-out").addEventListener("click", () => {
  console.log("log out btn called");
});
