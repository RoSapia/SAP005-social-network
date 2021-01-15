import { date } from "./utils.js"

export const firebaseActions = {
  createUser(username, email, password, callback) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('Deu certo!');
        firebase.auth().currentUser.updateProfile({ displayName: username })
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
        console.log('Não logou');
        console.log(error);
        callback(error)
      });
  },
  loginGoogle(callback) {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(function (result) {
        callback(result)
      }).catch(function (error) {
        callback(error)
      });
  },
  loginCheck(callback) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        callback(user)
      } else {
        callback()
      }
    });
  },
  createPost(publishText, callback) {
    // Add a new document with a generated id.
    firebase.firestore().collection("posts").add({
      user: firebase.auth().currentUser.email,
      publishText: publishText,
      createDate: date,
      date: new Date(),
      username: firebase.auth().currentUser.displayName,
      likes: 0,
      usersLikes: []
    })
      .then(function (docRef) {
        console.log(firebase.auth().currentUser.displayName)
        console.log("Document written with ID: ", docRef.id);
        callback()
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  },
  readPost(callback) {
    firebase.firestore().collection("posts").orderBy("date", "desc").get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const id = doc.id
          let postData = {
            'username': doc.data().username,
            'user': doc.data().user,
            'publishText': doc.data().publishText,
            'createDate': doc.data().createDate,
            'likes': doc.data().likes,
            'id': id.toString(),
            'usersLikes': doc.data().usersLikes
          }
          callback(postData)
        });
      });
  },
  readUserPosts(callback) {
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
  },
  updatePost(textPost, id, callback) {
    firebase.firestore().collection("posts").doc(id).update(
      {
        publishText: textPost
      }
    )
      .then(function () {
        callback()
      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  },
  excludePost(id, callback) {
    firebase.firestore().collection("posts").doc(id).delete()
      .then(function () {
        callback()
        console.log("Document successfully deleted!");
      }).catch(function (error) {
        console.error("Error removing document: ", error);
      });
  },
  likeCounter(like, id, userLikes, callback) {
    const currentUser = firebase.auth().currentUser.email
    userLikes.push(firebase.auth().currentUser.email)
    firebase.firestore().collection("posts").doc(id).update(
      {
        likes: like + 1,
        usersLikes: userLikes

      }
    )
      .then(function () {
        callback()
      }).catch(function (error) {
        console.error("Erro ao curtir: ", error);
      })
  },
  deslike(like, id, userLikes, callback) {
    const currentUser = firebase.auth().currentUser.email
    var index = userLikes.indexOf(firebase.auth().currentUser.email);
    userLikes.splice(index, 1)
    if (like > 0) {
      firebase.firestore().collection("posts").doc(id).update(
        {
          likes: like - 1,
          usersLikes: userLikes
        }
      )
        .then(function () {
          callback()
        }).catch(function (error) {
          console.error("Erro ao descurtir: ", error);
        })
    }
  }
}
