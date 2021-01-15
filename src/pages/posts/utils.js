import { onNavigate } from '../../utils/history.js';
import { firebaseActions } from "../../services/index.js"

export const returnCheckUser = (response) => {
        if (response) {
          console.log(response)
          const username = document.querySelector('#username')
          username.innerHTML = response.displayName + ","
        } else {
          onNavigate('/login');
          const divError = document.querySelector('.conteiner')
          divError.innerHTML = "Você não pode acessar esta pagina sem estar logado. Por favor, efetue o login abaixo!";
        }
      }

export const returnPosts = (response) => {
        if (response) {
          const divPost = document.querySelector('#publish-post')
          const post = document.createElement('div');
          post.id = response.id
          post.className = 'publish-box'
          divPost.appendChild(post)
          let idPost = document.getElementById(response.id)
          idPost.innerHTML = '<div id="user">' + response.username + '</div>' +
         '<div id="createDate">' + response.createDate + '</div>' +
         '<div id="publishText">' + response.publishText + '</div>' +
         '<div id="likes"> Likes: ' + response.likes + '</div>'

          console.log(response.usersLikes)
          

          if (!(response.usersLikes.includes(firebase.auth().currentUser.email))) {
            const buttonLike = document.createElement('button');
            buttonLike.id = "like-" + response.id
            buttonLike.innerHTML = "Curtir"
            idPost.appendChild(buttonLike)
            idPost.querySelector(`#like-${response.id}`).addEventListener("click", (event) => {
              event.preventDefault();
              console.log(typeof response.usersLikes)
              firebaseActions.likeCounter(response.likes, post.id, response.usersLikes, refreshPage)
            })
          } else {
            const buttonLike = document.createElement('button');
            buttonLike.id = "deslike-" + response.id
            buttonLike.innerHTML = "Descurtir"
            idPost.appendChild(buttonLike)
            idPost.querySelector(`#deslike-${response.id}`).addEventListener("click", (event) => {
              event.preventDefault();
              firebaseActions.deslike(response.likes, post.id, response.usersLikes, refreshPage)
            })
           }
          }
      }

export const refreshPage = () => {
          document.location.reload(true);
      }
