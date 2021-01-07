import { onNavigate } from '../../utils/history.js';

export const returnCheckUser = (response) => {
        if (!response) {
          onNavigate('/login');
          const divError = document.querySelector('#div-msg')
          divError.innerHTML = "Você não pode acessar esta pagina sem estar logado. Por favor, efetue o login abaixo!";
          return "não logado"
        } else {
          return response.email
        }
      }

export const returnUserPosts = (response) => {
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
         '<div id="likes"> Likes: ' + response.likes + '</div>' +
         /*'<button id="exclude-button">Excluir</button>'*/
         '<button id="edit-' + response.id +'">Editar</button>' 
         idPost.querySelector(`#edit-${response.id}`).addEventListener("click", () => {
          console.log(response.id)

        })
      };
    }
  

        /* '<button id="delete-post-' + response.publishText +'">Excluir</button>' 
        idPost.querySelector(`#delete-post-${response.publishText}`).addEventListener("click",() =>{
         })*/
         /*function deletePosts(idPost) {
           const postsCollection = firebase.firestore().collection("publishText")
           postsCollection.doc(idPost).delete().then(doc => { 
             console.log("Apagou" );
             loodPosts()
            })*/
          
     
