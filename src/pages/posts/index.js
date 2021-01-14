import { firebaseActions } from "../../services/index.js"
import { returnCheckUser, returnPosts, refreshPage } from "./utils.js"
import { onNavigate } from '../../utils/history.js';

export const Posts = () => {
    firebaseActions.loginCheck(returnCheckUser)

    const rootElement = document.createElement('div');
    rootElement.id = 'div-principal'
    rootElement.innerHTML = `
      <form id="form-principal">
        <div class="user">
            <span>E aí</span>
            <span id="username"></span>
            <span>como está se sentindo hoje?</span>
        </div>
        <div class="text-post">
            <textarea id="text-post" cols="70" rows="6" placeholder="Escreva algo que esteja pensando..."></textarea> <br>
            <input type="submit" value="Enviar postagem" id="publish-button"/>
            <button id="edit-posts-button">Visualizar suas postagens</button>
        </div>
      </form>
      <div id="publish-post">
       <p>Todas as publicações:</p>
      </div>
`;

      // Exibe todas as publicações na tela
      firebaseActions.readPost(returnPosts)

      // Vai para a pagina de publicar
      rootElement.addEventListener('submit', (event) => {
        event.preventDefault();
        const text = rootElement.querySelector('#text-post').value
        firebaseActions.createPost(text, refreshPage)
      })

      // Vai para a pagina para editar as postagens do usuario logado
      const editPostsButton = rootElement.querySelector('#edit-posts-button')
      editPostsButton.addEventListener('click', (event) => {
        onNavigate('/myPosts')
      })

      return rootElement;
};
