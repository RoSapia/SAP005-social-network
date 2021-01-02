import { date } from "./utils.js"

export const firebaseActions = {
  createUser(email, password, callback) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((user) => {
            console.log('Deu certo!');
            callback();
          })
          .catch((error) => {
            callback(error);
          });

  },
  loginUser(email, password, callback) {
      console.log('chega aqui')
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
          console.log(user);
          callback()
        })
        .catch((error) => {
          console.log('não logou');
          console.log(error);
          callback(error)
        });
  },
  loginGoogle(provider, callback) {
    firebase.auth().signInWithPopup(provider).then(function(result) {
        callback()
      }).catch(function(error) {
        callback(error)
      });
  },
  loginCheck(callback){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        callback(user)
      } else {
        callback()
      }
    });
  },
  createPost(publishText, callback){
    // Add a new document with a generated id.
    firebase.firestore().collection("posts").add({
        user: firebase.auth().currentUser.email,
        publishText: publishText,
        createDate: date,
        likes: 0
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    }
}
