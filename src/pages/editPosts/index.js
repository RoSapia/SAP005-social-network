import { firebaseActions } from "../../services/index.js"
import { returnMyPosts } from "./utils.js"

export const EditPosts = () => {
    const rootElement = document.createElement('form');
    rootElement.id = 'form-principal-edit'
    rootElement.innerHTML = `
      <div class="user">
          <span>Olá </span>
          <span id="username"></span>
          <span>Deseja editar essa postagem?</span>
      </div>
      <div class="text-post">
        <span id="id-firebase" hidden></span>
          <textarea id="text-post" cols="70" rows="6" required></textarea> <br>
          <input type="submit" value="Enviar postagem" id="savemsg"/>
      </div>      
      `
    const saveMsg = rootElement.querySelector('#savemsg')
    saveMsg.addEventListener('click', (event) => {
        event.preventDefault();
        const textPost = rootElement.querySelector('#text-post').value
        const id = rootElement.querySelector('#id-firebase').value
        firebaseActions.updatePost(textPost, id, returnMyPosts)
    })
    return rootElement
}