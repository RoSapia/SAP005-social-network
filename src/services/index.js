// exporte suas funções

export const firebaseActions = {
  createUser(email, password, callback) {
      // seu código aqui

      firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((user) => {
            console.log('Deu certo!');
            callback(user);
          })
          .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              callback(user);
          });

  },
  loginUser(email, password, callback) {
      // seu código aqui
      console.log('chega aqui')
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
          console.log('logou');
          callback()
        })
        .catch((error) => {
          console.log('não logou');
          console.log(error);
        });
  }
}
