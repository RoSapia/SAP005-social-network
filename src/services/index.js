// exporte suas funções

export const firebaseActions = {
  loginUserFirebase(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            return true
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message
            return false
        });
  }
}
