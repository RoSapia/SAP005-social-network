import { firebaseActions } from "../../services/index.js"
import { returnPosts } from "./utils.js"
import { onNavigate } from '../../utils/history.js';

export const Posts = () => {
    firebaseActions.loginCheck(returnPosts)

    const rootElement = document.createElement('section');
    rootElement.id = 'posts'
    rootElement.innerHTML = `

      <div class="user">
          <p id="username"></p>
      </div>
      <div id="text-post">
          <p> Aqui estão as postagens mais recentes:</p>
      </div>
      <div id="like">
          <p> Dar like </p>
      </div>
      <button id="publish-button">Criar postagem</button>
`;

// Vai para a pagina de publicar
const publishButton = rootElement.querySelector('#publish-button')
publishButton.addEventListener('click', (event) => {
  event.preventDefault();
  onNavigate('/publish')
})



return rootElement;
};
