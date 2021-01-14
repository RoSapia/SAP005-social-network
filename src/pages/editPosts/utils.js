import { onNavigate } from '../../utils/history.js';

export const returnCheckUser = (response) => {
  if (!response) {
    onNavigate('/login');
    const divError = document.querySelector('.conteiner')
    divError.innerHTML = "Você não pode acessar esta pagina sem estar logado. Por favor, efetue o login abaixo!";
    return "não logado"
  } else {
    return response.email
  }
}

export const returnUserPosts = (response) => {
  console.log(response)
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
    '<button id="edit-button">Editar</button>' +
    '<button id="exclude-button">Excluir</button>'
  }
}
