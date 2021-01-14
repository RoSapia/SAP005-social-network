import { date } from "./utils.js"

export const firebaseActions = {
 createUser(username, email, password, callback) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((user) => {
            console.log('Deu certo!');
            firebase.auth().currentUser.updateProfile({displayName: username})
            callback(user);
          })
          .catch((error) => {
            callback(error);
          });

  },
  loginUser(email, password, callback) {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
          console.log(user);
          callback(user)
        })
        .catch((error) => {
          console.log('não logou');
          console.log(error);
          callback(error)
        });
  },
  loginGoogle(callback) {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(function(result) {
          callback(result)
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
        username: firebase.auth().currentUser.displayName,
        likes: 0 
    })
    .then(function(docRef) {
      console.log(firebase.auth().currentUser.displayName)
        console.log("Document written with ID: ", docRef.id);
        callback()
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  },
  readPost(callback){
    firebase.firestore().collection("posts").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const id = doc.id
          let postData = {
            'username': doc.data().username,
            'user': doc.data().user,
            'publishText': doc.data().publishText,
            'createDate': doc.data().createDate,
            'likes': doc.data().likes,
            'id': id.toString()
          }
          callback(postData)
    });
});
  },
  readUserPosts(callback){
    firebase.firestore().collection("posts")
    .where("user", "==", firebase.auth().currentUser.email).get()
    .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data())
      const id = doc.id
      let postData = {
        'username': doc.data().username,
        'user': doc.data().user,
        'publishText': doc.data().publishText,
        'createDate': doc.data().createDate,
        'likes': doc.data().likes, 
        'id': id.toString()
      }
      callback(postData)
    });
});
  }
}
