import { firebaseActions } from "../../services/index.js"
import { returnCheckUser, returnUserPosts } from "./utils.js"

export const MyPosts = () => {
    firebaseActions.loginCheck(returnCheckUser)
    const rootElement = document.createElement('div');
    rootElement.id = 'div-principal'
    rootElement.innerHTML = `
        <div class="user">
          <h3>Suas publicações</h3>
        </div>
        <div id="publish-post">
          <p>Todas as suas publicações:</p>
        </div>
    `
    firebaseActions.readUserPosts(returnUserPosts)
    return rootElement
}