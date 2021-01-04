import { firebaseActions } from "../../services/index.js"
import { returnCheckUser, returnUserPosts } from "./utils.js"
// import { onNavigate } from '../../utils/history.js';

export const EditPosts = () => {
    firebaseActions.loginCheck(returnCheckUser)

    const rootElement = document.createElement('div');
    rootElement.id = 'div-principal'
    rootElement.innerHTML = `
    <div class="user">
          <h3>Suas publicações</h3>
      </div>
      <div id="publish-post">
          <p>Todas as publicações:</p>
      </div>
`;


firebaseActions.readUserPosts(returnUserPosts)

// Exclui postagem
const editPostsButton = rootElement.querySelector('#edit-posts-button')
if (editPostsButton) {
  editPostsButton.addEventListener('click', (event) => {
    onNavigate('/editPosts')
  })
}

return rootElement;
};