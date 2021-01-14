import { onNavigate } from '../../utils/history.js';

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
  }
}

export const refreshPage = () => {
    document.location.reload(true);
}
