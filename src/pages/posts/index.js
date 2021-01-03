import { firebaseActions } from "../../services/index.js"
import { returnCheckUser, returnPosts, refreshPage } from "./utils.js"
import { onNavigate } from '../../utils/history.js';

export const Posts = () => {
    firebaseActions.loginCheck(returnCheckUser)

    const rootElement = document.createElement('div');
    rootElement.id = 'div-principal'
    rootElement.innerHTML = `

      <div class="user">
          <span>E aí</span>
          <span id="username"></span>
          <span>como está se sentindo hoje?</span>
      </div>
      <div class="text-post">
          <textarea id="text-post" cols="70" rows="6" placeholder="Escreva algo que esteja pensando..." required></textarea> <br>
          <button id="publish-button">Enviar postagem</button>
      </div>
      <div id="publish-post">
          <p>Todas as publicações:</p>
      </div>
`;


firebaseActions.readPost(returnPosts)

// Vai para a pagina de publicar
const publishButton = rootElement.querySelector('#publish-button')
publishButton.addEventListener('click', (event) => {
  const text = rootElement.querySelector('#text-post').value
  firebaseActions.createPost(text, refreshPage)
})



return rootElement;
};
