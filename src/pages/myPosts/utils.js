import { onNavigate } from '../../utils/history.js';
import { firebaseActions } from '../../services/index.js'
import { returnMyPosts } from '../editPosts/utils.js'

export const returnCheckUser = (response) => {
    if (!response) {
        onNavigate('/login');
        const divError = document.querySelector('#div-msg')
        divError.innerHTML = "Você não pode acessar esta pagina sem estar logado. Por favor, efetue o login!";
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
            '<button id="edit-' + response.id + '">Editar</button>' +
            '<button id="exclude-' + response.id + '">Excluir</button>'
        idPost.querySelector(`#edit-${response.id}`).addEventListener("click", () => {
            onNavigate('/editPosts')
            document.querySelector(`#text-post`).value = response.publishText
            document.querySelector(`#id-firebase`).value = response.id
        })
        idPost.querySelector(`#exclude-${response.id}`).addEventListener("click", () => {
            firebaseActions.excludePost(response.id, returnMyPosts)
        })
    }
}